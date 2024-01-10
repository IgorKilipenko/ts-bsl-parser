import { type ParseTree, ParserRuleContext, TerminalNode } from "antlr4ng";
import { FileContext } from "../antlr/generated/BSLParser.js";

export class BslParserRuleContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | null, invokingStateNumber: number) {
        super(parent, invokingStateNumber);
    }

    get isTerminalNode() : boolean {
        return this instanceof TerminalNode;
    }

    get isModule() : boolean {
        return this instanceof FileContext && this.parent === null;
    }

    public readonly findAllNodes = (filter?: (node: TerminalNode | ParserRuleContext) => boolean): Array<ParseTree> | null => {
        const findNodes = (tree: ParseTree, result: Array<ParseTree>) => {
            const node = tree instanceof TerminalNode ? tree as TerminalNode : tree instanceof ParserRuleContext
                ? tree as ParserRuleContext : null;

            if (!node) {
                return result;
            }

            (!filter || filter(node)) &&
                result.push(node);

            node && node instanceof ParserRuleContext &&
                node.children?.forEach((tree) => {
                    findNodes(tree as ParserRuleContext, result);
                });

            return result;
        };

        return this.children?.reduce<Array<ParseTree>>((res, tree) => {
            findNodes(tree, res);
            return res;
        }, []) ?? null;
    };
}
