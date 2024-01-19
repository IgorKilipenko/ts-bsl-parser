import type { TerminalNode, ParseTree } from "antlr4ng";
import { ParserRuleContext } from "antlr4ng";
import { FileContext } from "../antlr/generated/BSLParser";

export interface WithTrailingSemicolon {
    SEMICOLON: () => TerminalNode | null;
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
        return typeof obj["SEMICOLON"] === 'function' ? obj.SEMICOLON() !== null : null;
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
}
