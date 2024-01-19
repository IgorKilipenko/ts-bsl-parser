import type {
    RegionNameContext,
    FuncDeclarationContext,
    ParamContext,
    ProcDeclarationContext,
    StatementContext,
} from "../antlr/generated/BSLParser";
import {
    RegionStartContext,
    RegionEndContext,
    FunctionContext,
    ProcedureContext,
    ReturnStatementContext,
} from "../antlr/generated/BSLParser";
import type { BslParserRuleContext } from "./context";

export interface IActiveContext {
    regionStartContext: BslParserRuleContext;
    innerIndex: number;
    isActive: boolean;
    isRegion?: boolean;
    regionEndContext?: BslParserRuleContext | null;
    children?: Array<IActiveContext> | null;
    parent?: IActiveContext | null;
    subs: Array<BslRawFunction>;
}

export class ActiveContext implements IActiveContext {
    regionStartContext: BslParserRuleContext;

    innerIndex: number;

    isActive: boolean;

    isRegion: boolean;

    regionEndContext: BslParserRuleContext | null;

    children: IActiveContext[] | null;

    parent: IActiveContext | null;

    subs: BslRawFunction<FunctionContext | ProcedureContext>[];

    constructor(options: IActiveContext) {
        this.regionStartContext = options.regionStartContext;
        this.innerIndex = options.innerIndex;
        this.isActive = options.isActive;
        this.isRegion = options.isRegion ?? false;
        this.regionEndContext = options.regionEndContext ?? null;
        this.children = options.children ?? null;
        this.parent = options.parent ?? null;
        this.subs = options.subs;
    }

    public static isActiveContextObject<T extends object = object>(obj: IActiveContext | T): obj is IActiveContext {
        return "isActive" in obj && "regionStartContext" in obj && "regionEndContext" in obj;
    }

    public static convertToRawRegion(ctx: IActiveContext, parent: BslRawRegion | null = null): BslRawRegion {
        console.assert(ctx.regionStartContext instanceof RegionStartContext, "Context must be instanceof RegionStartContext");
        console.assert(ctx.regionEndContext instanceof RegionEndContext, "End-context must be instanceof RegionEndContext");

        const start = ctx.regionStartContext as RegionStartContext;
        const end = ctx.regionEndContext as RegionEndContext;
        const name = start.regionName();
        const innerIndex = ctx.innerIndex;

        const region = new BslRawRegion({
            start,
            end,
            name,
            innerIndex,
            parent,
            regions: ctx.children?.length ? [] : null,
            functions: ctx.subs,
        });

        region.regions &&
            ctx.children?.forEach((c) => {
                region.regions?.push(ActiveContext.convertToRawRegion(c, region));
            });

        return region;
    }
}

export interface IBslRawRegion {
    start: RegionStartContext | null;
    end: RegionEndContext | null;
    name: RegionNameContext | null;
    innerIndex: number;
    parent?: IBslRawRegion | null;
    regions?: Array<IBslRawRegion> | null;
    functions?: Array<BslRawFunction>;
}

export class BslRawRegion implements IBslRawRegion {
    public readonly start: RegionStartContext | null = null;

    public readonly end: RegionEndContext | null = null;

    public readonly name: RegionNameContext | null = null;

    public readonly innerIndex: number = 0;

    public readonly parent: IBslRawRegion | null = null;

    public readonly regions: Array<IBslRawRegion> | null = null;

    public readonly functions: Array<BslRawFunction>;

    constructor(options: {
        start?: RegionStartContext | null;
        end?: RegionEndContext | null;
        name?: RegionNameContext | null;
        innerIndex?: number | null;
        parent?: IBslRawRegion | null;
        regions?: Array<IBslRawRegion> | null;
        functions?: Array<BslRawFunction> | null;
    }) {
        console.assert(Object.values(options).find((v) => v !== null && v !== undefined));

        this.start = options.start ?? null;
        this.end = options.end ?? null;
        this.name = options.name ?? null;
        this.innerIndex = options.innerIndex ?? 0;
        this.parent = options.parent ?? null;
        this.regions = options.regions ?? null;
        this.functions = options.functions ?? [];
    }
}

export interface IBslCodePosition {
    line: number;
    charter: number;
}

export interface IBslTextPosition {
    start: IBslCodePosition;
    end: IBslCodePosition;
}

export interface IBslCodeEntity {
    isModule: boolean;
    isCodeBlock: boolean;
    parentEntity: IBslCodeEntity | null;
    innerEntities: Array<IBslCodeEntity> | null;
    position: IBslTextPosition | null;
}

export interface IBslNamedCodeEntity extends IBslCodeEntity {
    name: string;
}

export interface IBslModule extends IBslCodeEntity {
    regions: Array<IBslRawRegion> | null;
}

export class BslModule implements IBslModule {
    readonly isModule: boolean;

    readonly isCodeBlock: boolean;

    readonly parentEntity: IBslCodeEntity | null;

    position: IBslTextPosition | null;

    innerEntities: Array<IBslCodeEntity> | null;

    regions: Array<IBslRawRegion> | null;

    constructor(regions = null, innerEntities = null, position = null) {
        this.isModule = true;
        this.isCodeBlock = true;
        this.parentEntity = null;
        this.innerEntities = innerEntities;
        this.position = position;
        this.regions = regions;
    }
}

export interface IBslCodeBlock extends IBslCodeEntity {}

export interface IBslFunction extends IBslCodeEntity {}

export class BslRawFuncArgument {
    private readonly _context: ParamContext;

    constructor(context: ParamContext) {
        this._context = context;
    }

    public get name(): string | null {
        return this._context.IDENTIFIER().symbol.text;
    }
}

abstract class BslRaw<T extends BslParserRuleContext> {
    protected readonly _parseContext: T;

    constructor(parseContext: T) {
        this._parseContext = parseContext;
    }
}

export class BslRawFunction<
    T extends FunctionContext | ProcedureContext = FunctionContext | ProcedureContext,
> extends BslRaw<T> {
    private readonly _declaration: FuncDeclarationContext | ProcDeclarationContext;

    private readonly _args: ParamContext[];

    private readonly _codeBlock: StatementContext[];

    private readonly _isVoid: boolean;

    constructor(parseContext: T) {
        super(parseContext);

        this._isVoid = parseContext instanceof ProcedureContext;
        this._declaration =
            parseContext instanceof FunctionContext ? parseContext.funcDeclaration() : parseContext.procDeclaration();
        this._args = this._declaration.paramList()?.param() || [];
        this._codeBlock = this._parseContext.subCodeBlock().codeBlock().statement();
    }

    public get name(): string | null {
        return this._declaration.subName().IDENTIFIER().symbol.text;
    }

    public get isPublic(): boolean {
        return this._declaration.EXPORT_KEYWORD() !== null;
    }

    public get isAsync(): boolean {
        return !!this._declaration.ASYNC_KEYWORD() !== null;
    }

    public get args(): ParamContext[] {
        return this._args;
    }

    public get isVoid(): boolean {
        return this._isVoid;
    }

    public get hasParsingExceptions(): boolean {
        return !!this._parseContext.exception && !!this._declaration.exception;
    }

    public get returnStatements(): ReturnStatementContext[] | null {
        return this._isVoid
            ? null
            : this._codeBlock.reduce<ReturnStatementContext[]>((res, curr) => {
                  const items = curr.compoundStatement()?.findAllNodes({ ctxType: ReturnStatementContext }) ?? null;
                  if (items && items.length > 0) {
                      res.push(...items);
                  }

                  return res;
              }, []);
    }

    public get parseContext(): T {
        return this._parseContext;
    }

    public parentRegion: IBslRawRegion | null;
}
