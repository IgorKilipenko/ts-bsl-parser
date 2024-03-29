import type { Token } from "antlr4ng";
import type {
    RegionNameContext,
    FuncDeclarationContext,
    ParamContext,
    ProcDeclarationContext,
    StatementContext,
    IfBranchContext,
    ElseBranchContext,
    ElsifBranchContext,
} from "../antlr/generated/BSLParser";
import {
    IfStatementContext,
    WhileStatementContext,
    ForEachStatementContext,
    ForStatementContext,
    TryStatementContext,
    RegionStartContext,
    RegionEndContext,
    FunctionContext,
    ProcedureContext,
    ReturnStatementContext,
} from "../antlr/generated/BSLParser";
import type { BslControlFlowBlockContext, BslIterationsBlockContext, BslParserRuleContext } from "./context";

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
        console.assert(
            ctx.regionStartContext instanceof RegionStartContext,
            "Context must be instanceof RegionStartContext",
        );
        console.assert(
            ctx.regionEndContext instanceof RegionEndContext,
            "End-context must be instanceof RegionEndContext",
        );

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
    column: number;
}

export interface IBslCodeRange {
    start: IBslCodePosition;
    stop: IBslCodePosition;
}

export interface IBslCodeEntity {
    isModule: boolean;
    isCodeBlock: boolean;
    parentEntity: IBslCodeEntity | null;
    innerEntities: Array<IBslCodeEntity> | null;
    position: IBslCodeRange | null;
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

    position: IBslCodeRange | null;

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

abstract class BslRawEntity<T extends BslParserRuleContext> {
    protected readonly _parseContext: T;

    protected readonly _position: IBslCodeRange;

    constructor(parseContext: T) {
        this._parseContext = parseContext;

        console.assert(parseContext.start !== null && parseContext.stop !== null);
        this._position = {
            start: { line: parseContext.start!.line, column: parseContext.start!.column } as IBslCodePosition,
            stop: { line: parseContext.stop!.line, column: parseContext.stop!.column } as IBslCodePosition,
        };
    }

    public get position(): IBslCodeRange {
        return this._position;
    }

    public get isStatement(): boolean {
        return (
            this._parseContext instanceof IfStatementContext ||
            this._parseContext instanceof TryStatementContext ||
            this._parseContext instanceof WhileStatementContext ||
            this._parseContext instanceof ForStatementContext ||
            this._parseContext instanceof ForEachStatementContext
        );
    }

    //public abstract getParentBlock<TContext extends T, TEntity extends BslRawCodeBlockEntity<TContext>>(): TEntity | null;
    //public abstract getParentEntity<TContext extends T, TEntity extends BslRawCodeBlockEntity<TContext>>(): TEntity | null;

    public get parseContext(): T {
        return this._parseContext;
    }
}

abstract class BslRawCodeBlockEntity<T extends BslParserRuleContext> extends BslRawEntity<T> {
    protected _codeBlockPosition: IBslCodeRange;

    protected _startPositionRange: IBslCodeRange;

    protected _stopPositionRange: IBslCodeRange;

    constructor(parseContext: T) {
        super(parseContext);
    }

    public get codeBlockPosition(): IBslCodeRange {
        return this._codeBlockPosition ?? this._calcCodeBlockPosition();
    }

    public get textBlockPosition(): IBslCodeRange {
        console.assert(!!this._startPositionRange && this._stopPositionRange);

        const start = this._startPositionRange.stop;
        const stop = this._stopPositionRange.start;

        return { start, stop } as IBslCodeRange;
    }

    protected abstract readonly _calcCodeBlockPosition: () => IBslCodeRange;

    //protected abstract readonly _calcStartPositionRange: () => IBslCodeRange;

    //protected abstract readonly _calcStopPositionRange: () => IBslCodeRange;
}

export abstract class BslRawCodeBlockCompoundStatement<
    T extends BslControlFlowBlockContext | BslIterationsBlockContext =
        | BslControlFlowBlockContext
        | BslIterationsBlockContext,
> extends BslRawCodeBlockEntity<T> {
    private readonly _statements: Array<StatementContext>;

    constructor(parseContext: T) {
        super(parseContext);
    }
}

export class BslRawIfStatement extends BslRawCodeBlockCompoundStatement<IfStatementContext> {
    private readonly _ifBranch: IfBranchContext;

    private readonly _elseBranch: ElseBranchContext | null;

    private readonly _elsifBranches: Array<ElsifBranchContext>;

    private readonly _ifToken: Token;

    private readonly _thenToken: Token;

    private readonly _endToken: Token;

    constructor(parseContext: IfStatementContext) {
        super(parseContext);

        this._ifBranch = this._parseContext.ifBranch();
        this._elseBranch = this._parseContext.elseBranch();
        this._elsifBranches = this._parseContext.elsifBranch();

        this._ifToken = this._ifBranch.IF_KEYWORD().symbol;
        this._thenToken = this._ifBranch.THEN_KEYWORD().symbol;
        this._endToken = parseContext.ENDIF_KEYWORD().symbol;

        this._startPositionRange = this._calcStartPositionRange();
        this._stopPositionRange = this._calcStopPositionRange();
        this._codeBlockPosition = this._calcCodeBlockPosition();
    }

    public getParentBlock<
        TContext extends BslParserRuleContext = BslParserRuleContext,
        TEntity extends BslRawCodeBlockEntity<TContext> = BslRawCodeBlockEntity<TContext>,
    >(): TEntity | null {
        return this as unknown as TEntity | null;
    }

    protected override readonly _calcCodeBlockPosition = (): IBslCodeRange => {
        const startToken = this._ifBranch.codeBlock().start!;
        const stopToken =
            this._elseBranch?.codeBlock().stop ?? this._elsifBranches.length > 0
                ? this._elsifBranches[this._parseContext.elsifBranch().length - 1].codeBlock().stop!
                : this._ifBranch.codeBlock().stop!;

        const isEmptyCode = startToken.line === this._endToken.line && startToken.column === this._endToken.column;

        const start: IBslCodePosition = !isEmptyCode
            ? { line: startToken.line, column: startToken.column }
            : { line: this._thenToken.line, column: this._thenToken.column + (this._thenToken.text?.length ?? 0) };

        const stop: IBslCodePosition = !isEmptyCode
            ? { line: stopToken.line, column: stopToken.column }
            : {
                  line: this._thenToken.line,
                  column: Math.max(this._endToken.column - 1, start.column),
              };

        return { start, stop } as IBslCodeRange;
    };

    private readonly _calcStartPositionRange = () => {
        const thenTokenLength = this._thenToken.text?.length ?? 0;
        const start: IBslCodePosition = { line: this._ifToken.line, column: this._ifToken.column };
        const stop: IBslCodePosition = {
            line: this._thenToken.line,
            column: this._thenToken.column + (thenTokenLength === 0 ? 0 : thenTokenLength - 1),
        };

        return { start, stop } as IBslCodeRange;
    };

    private readonly _calcStopPositionRange = () => {
        const endTokenLength = this._endToken.text?.length ?? 0;
        const start: IBslCodePosition = { line: this._endToken.line, column: this._endToken.column };
        const stop: IBslCodePosition = {
            line: this._endToken.line,
            column: this._endToken.column + (endTokenLength === 0 ? 0 : endTokenLength - 1),
        };

        return { start, stop } as IBslCodeRange;
    };
}

export class BslRawFunction<
    T extends FunctionContext | ProcedureContext = FunctionContext | ProcedureContext,
> extends BslRawCodeBlockEntity<T> {
    private readonly _declaration: FuncDeclarationContext | ProcDeclarationContext;

    private readonly _endToken: Token;

    private readonly _args: ParamContext[];

    private readonly _isVoid: boolean;

    private readonly _statements: Array<StatementContext>;

    private _declarationPosition: IBslCodeRange;

    constructor(parseContext: T) {
        super(parseContext);

        this._isVoid = parseContext instanceof ProcedureContext;
        this._declaration =
            parseContext instanceof FunctionContext ? parseContext.funcDeclaration() : parseContext.procDeclaration();
        this._args = this._declaration.paramList()?.param() || [];
        this._statements = this._parseContext.subCodeBlock().codeBlock().statement();
        this._endToken =
            parseContext instanceof FunctionContext
                ? parseContext.ENDFUNCTION_KEYWORD().symbol
                : parseContext.ENDPROCEDURE_KEYWORD().symbol;

        this._declarationPosition = this._calcDeclarationPosition();
        this._codeBlockPosition = this._calcCodeBlockPosition();
    }

    public get name(): string | null {
        return this._declaration.subName().IDENTIFIER().symbol.text;
    }

    public get isPublic(): boolean {
        return this._declaration.EXPORT_KEYWORD() !== null;
    }

    public get isAsync(): boolean {
        return this._declaration.ASYNC_KEYWORD() !== null;
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
            : this._statements.reduce<ReturnStatementContext[]>((res, curr) => {
                  const items = curr.compoundStatement()?.findAllNodes({ ctxType: ReturnStatementContext }) ?? null;
                  if (items && items.length > 0) {
                      res.push(...items);
                  }

                  return res;
              }, []);
    }

    public get isInlineCodeBlock(): boolean {
        return this._declarationPosition.stop.line === this._endToken.line;
    }

    public get declarationPosition(): IBslCodeRange {
        return this._declarationPosition;
    }

    public get codeBlock(): Array<StatementContext> {
        return this._statements;
    }

    public parentRegion: IBslRawRegion | null;

    protected override readonly _calcCodeBlockPosition = (): IBslCodeRange => {
        const subCodeBlock = this._parseContext.subCodeBlock();
        console.assert(subCodeBlock.start !== null && subCodeBlock.stop !== null);

        const startToken = subCodeBlock.start!;
        const stopToken = subCodeBlock.stop!;

        const isEmptyCode = startToken.line === this._endToken.line && startToken.column === this._endToken.column;
        const stopDeclaration = this._declarationPosition.stop;

        const start: IBslCodePosition = !isEmptyCode
            ? { line: startToken.line, column: startToken.column }
            : { line: stopDeclaration.line, column: stopDeclaration.column + 1 };

        const stop: IBslCodePosition = !isEmptyCode
            ? { line: stopToken.line, column: stopToken.column }
            : {
                  line: stopDeclaration.line,
                  column: Math.max(this._endToken.column - 1, start.column),
              };

        return { start, stop } as IBslCodeRange;
    };

    private _calcDeclarationPosition(): IBslCodeRange {
        console.assert(this._declaration.start !== null && this._declaration.stop !== null);

        const startDeclaration = this._declaration.start!;
        const stopDeclaration = this._declaration.stop!;

        const start: IBslCodePosition = { line: startDeclaration.line, column: startDeclaration.column };
        const stop: IBslCodePosition = { line: stopDeclaration.line, column: stopDeclaration.column };

        return { start, stop } as IBslCodeRange;
    }
}
