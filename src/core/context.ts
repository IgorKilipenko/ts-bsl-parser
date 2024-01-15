import { type ParseTree, ParserRuleContext } from "antlr4ng";
import { FileContext } from "../antlr/generated/BSLParser";
import type { BslRawRegion } from "./bslCodeEntities";

export class BslParserRuleContext extends ParserRuleContext {
    private _regions: Array<BslRawRegion> | null = null;

    private _intentIndex: number | null = null;

    constructor(parent: ParserRuleContext | null, invokingStateNumber: number) {
        super(parent, invokingStateNumber);
    }

    get isModule(): boolean {
        return this instanceof FileContext && this.parent === null;
    }

    public get intentIndex() : number | null {
        return this._intentIndex;
    }

    public set intentIndex(value: number) {
        this._intentIndex = value;
    }

    public set regions(value: Array<Readonly<BslRawRegion>>) {
        this._regions = value;
    }

    public get regions(): Array<Readonly<BslRawRegion>> | null {
        return this._regions !== null ? [...this._regions] : null;
    }

    public findAllNodes<T extends ParserRuleContext = ParserRuleContext>({filter, ...options}: {
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
