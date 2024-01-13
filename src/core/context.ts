import { type ParseTree, ParserRuleContext, TerminalNode } from "antlr4ng";
import { FileContext } from "../antlr/generated/BSLParser";

export class BslParserRuleContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | null, invokingStateNumber: number) {
        super(parent, invokingStateNumber);
    }

    get isTerminalNode(): boolean {
        return this instanceof TerminalNode;
    }

    get isModule(): boolean {
        return this instanceof FileContext && this.parent === null;
    }

    public root: unknown | null;

    public findAllNodes<T extends ParserRuleContext = ParserRuleContext>(
        filter?: (node: T) => boolean,
    ): Array<T> | null {
        const findNodes = (tree: ParseTree, result: Array<T>) => {
            const ctx = tree as ParserRuleContext;
            if (!ctx) {
                return result;
            }

            const node = ctx as T;

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
