import type { TerminalNode } from "antlr4ng";
import { FileContext, RegionStartContext, BSLParser, RegionEndContext } from "../antlr/generated/BSLParser";
import { BSLParserListener as BslListenerBase } from "../antlr/generated/BSLParserListener";
import { BslModule, BslRawRegion, IBslRawRegion } from "./bslCodeEntities";
import { BslSyntaxError } from "./bslSyntaxErrors";
import type { BslParserRuleContext } from "./context";

export interface ActiveContext {
    ctx: BslParserRuleContext;
    innerIndex: number;
    isActive: boolean;
    isRegion?: boolean;
    endCtx?: BslParserRuleContext | null;
    childrenCtx?: Array<ActiveContext> | null;
    parentCtx?: ActiveContext | null;
}

export interface IParsedInfo {
    regions: Array<Readonly<IBslRawRegion>>;
    activeContextQueue: Array<Readonly<ActiveContext>>;
}

export class BslListener extends BslListenerBase {
    private _module: BslModule | null = null;

    private _regions = new Array<BslRawRegion>();

    private readonly _activeContext: Array<ActiveContext> = [];

    private _syntaxErrors: Array<BslSyntaxError> | null = null;

    private _isGlobalContext: boolean = false;

    public get parsingInfo(): IParsedInfo {
        return {
            regions: [...this._regions],
            activeContextQueue: [...this._activeContext],
        };
    }

    private _initParseInfo() {
        this._regions = new Array<BslRawRegion>();
        this._syntaxErrors = null;
    }

    public override enterFile = (ctx: FileContext) => {
        this._initParseInfo();
        this._isGlobalContext = true;

        ctx.regions = this._regions;
        this._module = new BslModule();
        this._activeContext.push({ ctx, innerIndex: 0, isActive: true } as ActiveContext);
    };

    public override exitFile = (ctx: FileContext) => {
        this._isGlobalContext = false;
        console.assert(this._activeContext.length > 0 && this._activeContext[0].isActive);

        const openedActiveCtx = this._activeContext.find(
            (activeCtx) => activeCtx.isActive && activeCtx.ctx instanceof FileContext,
        );
        if (!openedActiveCtx) {
            return;
        }
        openedActiveCtx.isActive = false;

        this._regions = this._buildRegionsTree();

        //- ctx.regions = this._buildRegionsTree();
        // ctx.regions = this._buildRegionsTree();
    };

    public override exitRegionStart = (ctx: RegionStartContext) => {
        if (!this._isGlobalContext) {
            return;
        }

        const terminalNode = ctx.PREPROC_REGION();
        if (terminalNode.symbol.type !== BSLParser.PREPROC_REGION) {
            return;
        }

        const innerIndex = this._activeContext.reduce<number>((res, cur) => {
            res += cur.isActive && cur.isRegion ? 1 : 0;
            return res;
        }, 0);

        const newActiveCtx: ActiveContext = { ctx, innerIndex, isActive: true, isRegion: true };
        this._activeContext.push(newActiveCtx);

        const parentCtx =
            innerIndex > 0
                ? this._activeContext.findLast((activeCtx) => {
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

        const openedActiveCtx = this._activeContext.findLast((activeCtx) => activeCtx.isActive && activeCtx.isRegion);
        if (!openedActiveCtx) {
            this._syntaxErrors = this._syntaxErrors ?? [new BslSyntaxError("Closing not opened region", ctx)];
            return;
        }

        openedActiveCtx.isActive = false;
        openedActiveCtx.endCtx = ctx;
    };

    private _buildRegionsTree() {
        const convertToRawRegion = (ctx: ActiveContext, parent: BslRawRegion | null = null): BslRawRegion => {
            console.assert(ctx.ctx instanceof RegionStartContext, "Context must be instanceof RegionStartContext");
            console.assert(ctx.endCtx instanceof RegionEndContext, "End-context must be instanceof RegionEndContext");

            const start = ctx.ctx as RegionStartContext;
            const end = ctx.endCtx as RegionEndContext;
            const name = start.regionName();
            const innerIndex = ctx.innerIndex;

            const region = new BslRawRegion({
                start,
                end,
                name,
                innerIndex,
                parent,
                regions: ctx.childrenCtx?.length ? [] : null,
            });

            region.regions &&
                ctx.childrenCtx?.forEach((c) => {
                    region.regions?.push(convertToRawRegion(c, region));
                });

            return region;
        };

        return this._activeContext
            .filter((ctx) => ctx.isRegion && !ctx.parentCtx)
            .map((ctx) => convertToRawRegion(ctx));
    }
}
