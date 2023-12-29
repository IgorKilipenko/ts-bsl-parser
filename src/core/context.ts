import { type ParseTree, ParserRuleContext, TerminalNode } from "antlr4";

export class BslParserRuleContext extends ParserRuleContext {
    constructor(parent?: ParserRuleContext, invokingStateNumber?: number) {
        super(parent, invokingStateNumber);
    }

    get isTerminalNode() {
        return this instanceof TerminalNode;
    }

    public readonly findAllNodes = (filter?: (node: TerminalNode | ParserRuleContext) => boolean): Array<ParseTree> => {
        const findNodes = (tree: ParseTree, result: Array<ParseTree>) => {
            const node = tree instanceof TerminalNode ? tree as TerminalNode : tree instanceof ParserRuleContext
                ? tree as ParserRuleContext : null;

            if (!node) {
                return result;
            }

            (!filter || filter(node)) &&
                result.push(node);

            node && node instanceof ParserRuleContext &&
                node.children.forEach((tree) => {
                    findNodes(tree as ParserRuleContext, result);
                });

            return result;
        };

        return this.children.reduce<Array<ParseTree>>((res, tree) => {
            findNodes(tree, res);
            return res;
        }, []);
    };
}
