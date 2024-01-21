import type { TerminalNode, ParseTree } from "antlr4ng";
import { ParserRuleContext } from "antlr4ng";
import {
    AssignmentContext,
    CallStatementContext,
    FileContext,
    ForEachStatementContext,
    ForStatementContext,
    FunctionContext,
    IfStatementContext,
    LabelContext,
    ProcedureContext,
    RemoveHandlerStatementContext,
    ReturnStatementContext,
    TryStatementContext,
    WaitStatementContext,
    WhileStatementContext,
} from "../antlr/generated/BSLParser";

export type BslControlFlowBlockContext = IfStatementContext | TryStatementContext;
export type BslIterationsBlockContext = WhileStatementContext | ForStatementContext | ForEachStatementContext;

export interface WithTrailingSemicolon {
    SEMICOLON: () => TerminalNode | null;
}

export class BslParserContextTypeConverter {
    public static isCompoundStatementBlockItem<T extends BslParserRuleContext>(ctx: T): boolean {
        return (
            ctx instanceof IfStatementContext ||
            ctx instanceof TryStatementContext ||
            ctx instanceof WhileStatementContext ||
            ctx instanceof ForStatementContext ||
            ctx instanceof ForEachStatementContext
        );
    }

    public static isCompoundStatementItem<T extends BslParserRuleContext>(ctx: T): boolean {
        return BslParserContextTypeConverter.isCompoundStatementBlockItem(ctx) || (
            ctx instanceof ReturnStatementContext ||
            ctx instanceof IfStatementContext ||
            ctx instanceof ForStatementContext ||
            ctx instanceof IfStatementContext ||
            ctx instanceof TryStatementContext ||
            ctx instanceof ForStatementContext ||
            ctx instanceof WhileStatementContext ||
            ctx instanceof RemoveHandlerStatementContext
        );
    }

    public static isStatementItem<T extends BslParserRuleContext>(ctx: T): boolean {
        return BslParserContextTypeConverter.isCompoundStatementItem(ctx) || (
            ctx instanceof LabelContext ||
            ctx instanceof CallStatementContext ||
            ctx instanceof WaitStatementContext ||
            ctx instanceof AssignmentContext
            //! || ctx instanceof PreprocessorContext   //!
        );
    }

    public static isIfStatementContext<T extends BslParserRuleContext>(ctx: T): boolean {
        return ctx instanceof IfStatementContext;
    }

    public static isFunctionContext<T extends BslParserRuleContext>(ctx: T): boolean {
        return ctx instanceof FunctionContext || this instanceof ProcedureContext;
    }
}

export class BslParserRuleContext extends ParserRuleContext {
    private _indentIndex: number | null = null;

    constructor(parent: ParserRuleContext | null, invokingStateNumber: number) {
        super(parent, invokingStateNumber);
    }

    get isModule(): boolean {
        return this instanceof FileContext && this.parent === null;
    }

    public get indentIndex(): number | null {
        return this._indentIndex;
    }

    public set indentIndex(value: number) {
        this._indentIndex = value;
    }

    public get isHasTrailingSemi(): boolean | null {
        const obj = this as unknown as WithTrailingSemicolon;
        return typeof obj["SEMICOLON"] === "function" ? obj.SEMICOLON() !== null : null;
    }

    public findAllNodes<T extends ParserRuleContext = ParserRuleContext>({
        filter,
        ...options
    }: {
        ctxType?: new (...args: unknown[]) => T;
        filter?: (node: T) => boolean;
    }): Array<T> | null {
        const findNodes = (tree: ParseTree, result: Array<T>) => {
            const ctx = tree as ParserRuleContext;
            if (!ctx) {
                return result;
            }

            const ctxType = options.ctxType ?? ParserRuleContext;
            const node = ctx instanceof ctxType ? (ctx as T) : null;

            node && (!filter || filter(node)) && result.push(node);

            ctx.children?.forEach((childNode) => {
                findNodes(childNode, result);
            });

            return result;
        };

        return (
            this.children?.reduce<Array<T>>((res, tree) => {
                findNodes(tree, res);
                return res;
            }, []) ?? null
        );
    }

    public get isCompoundStatementBlockItem(): boolean {
        return BslParserContextTypeConverter.isCompoundStatementBlockItem(this);
    }

    public get isCompoundStatementItem(): boolean {
        return BslParserContextTypeConverter.isCompoundStatementItem(this);
    }

    public get isStatementItem(): boolean {
        return BslParserContextTypeConverter.isStatementItem(this);
    }

    public get isIfStatementContext(): boolean {
        return BslParserContextTypeConverter.isIfStatementContext(this);
    }

    public get isFunctionContext(): boolean {
        return BslParserContextTypeConverter.isFunctionContext(this);
    }
}
