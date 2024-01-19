import type {
    FunctionContext,
    ModuleVarsContext,
    SubsContext,
    RegionStartContext,
    RegionEndContext,
    SubContext,
} from "../antlr/generated/BSLParser";
import { FileContext, BSLParser } from "../antlr/generated/BSLParser";
import { BSLParserListener as BslListenerBase } from "../antlr/generated/BSLParserListener";
import type { IActiveContext, IBslRawRegion, BslRawRegion } from "./bslCodeEntities";
import { ActiveContext, BslModule, BslRawFunction } from "./bslCodeEntities";
import { BslSyntaxError } from "./bslSyntaxErrors";

export interface IParsedInfo {
    regions: Array<Readonly<IBslRawRegion>>;
    activeContextQueue: Array<Readonly<IActiveContext>>;
}

export class BslListener extends BslListenerBase {
    private _module: BslModule | null = null;

    private _regions = new Array<BslRawRegion>();

    private readonly _activeContextQueue: Array<ActiveContext> = [];

    private _syntaxErrors: Array<BslSyntaxError> | null = null;

    private _isGlobalContext: boolean = false;

    public get parsingInfo(): IParsedInfo {
        return {
            regions: [...this._regions],
            activeContextQueue: [...this._activeContextQueue],
        };
    }

    private _initParseInfo() {
        this._regions = new Array<BslRawRegion>();
        this._syntaxErrors = null;
    }

    public override enterFile = (ctx: FileContext) => {
        this._initParseInfo();
        this._isGlobalContext = true;

        this._module = new BslModule();
        this._activeContextQueue.push({
            ctx,
            innerIndex: 0,
            isActive: true,
            subs: [],
            isRegion: false,
        } as IActiveContext);
    };

    public override exitFile = (ctx: FileContext) => {
        this._isGlobalContext = false;
        console.assert(this._activeContextQueue.length > 0 && this._activeContextQueue[0].isActive);

        const openedActiveCtx = this._activeContextQueue.find(
            (activeCtx) => activeCtx.isActive && activeCtx.ctx instanceof FileContext,
        );
        if (!openedActiveCtx) {
            return;
        }
        openedActiveCtx.isActive = false;

        this._regions = this._buildRegionsTree();
    };

    public override exitRegionStart = (ctx: RegionStartContext) => {
        if (!this._isGlobalContext) {
            return;
        }

        const terminalNode = ctx.PREPROC_REGION();
        if (terminalNode.symbol.type !== BSLParser.PREPROC_REGION) {
            return;
        }

        const innerIndex = this._activeContextQueue.reduce<number>((res, cur) => {
            res += cur.isActive && cur.isRegion ? 1 : 0;
            return res;
        }, 0);

        const newActiveCtx: IActiveContext = { ctx, innerIndex, isActive: true, isRegion: true, subs: [] };
        this._activeContextQueue.push(newActiveCtx);

        const parentCtx =
            innerIndex > 0
                ? this._activeContextQueue.findLast((activeCtx) => {
                      return activeCtx.isRegion && activeCtx.innerIndex === innerIndex - 1 && activeCtx.isActive;
                  })
                : null;

        if (parentCtx) {
            newActiveCtx.parentCtx = parentCtx;
            parentCtx.childrenCtx = parentCtx.childrenCtx ?? [];
            parentCtx.childrenCtx.push(newActiveCtx);
        }
    };

    public override exitRegionEnd = (ctx: RegionEndContext) => {
        if (!this._isGlobalContext) {
            return;
        }

        const terminalNode = ctx.PREPROC_END_REGION();

        if (terminalNode.symbol.type !== BSLParser.PREPROC_END_REGION) {
            return;
        }

        const openedActiveCtx = this._activeContextQueue.findLast(
            (activeCtx) => activeCtx.isActive && activeCtx.isRegion,
        );
        if (!openedActiveCtx) {
            this._syntaxErrors = this._syntaxErrors ?? [new BslSyntaxError("Closing not opened region", ctx)];
            return;
        }

        openedActiveCtx.isActive = false;
        openedActiveCtx.endCtx = ctx;
    };

    public override exitModuleVars = (ctx: ModuleVarsContext) => {
        const vars = ctx.moduleVar();
        vars.forEach((v) => {
            v.indentIndex = 0;
        });
    };

    public override exitFunction = (ctx: FunctionContext) => {
        const func = new BslRawFunction(ctx);
        const activeRegion = this._activeContextQueue.findLast((ctx) => ctx.isRegion && ctx.isActive);
        const indentIndex = (activeRegion?.innerIndex ?? 0) + 1;
        func.parseContext.indentIndex = indentIndex;
    };

    private _buildRegionsTree() {
        return this._activeContextQueue
            .filter((ctx) => ctx.isRegion && !ctx.parentCtx)
            .map((ctx) => ActiveContext.convertToRawRegion(ctx));
    }

    public override exitSub = (ctx: SubContext) => {
        console.assert((ctx.procedure() ?? ctx.function()) !== null);

        const lastActiveRegion = this._activeContextQueue.findLast((reg) => reg.isRegion && reg.isActive) ?? null;

        const func = new BslRawFunction(ctx.procedure() ?? ctx.function()!);
        const indentIndex = (lastActiveRegion?.innerIndex ?? 0) + 1;
        func.parseContext.indentIndex = indentIndex;
        lastActiveRegion?.subs.push(func);
    };
}
