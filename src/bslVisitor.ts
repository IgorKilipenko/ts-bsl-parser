import { Interval, ParseTreeVisitor, Parser, type ParseTree } from "antlr4ng";
import { type FileContext, SubsContext } from "./antlr/generated/BSLParser";
import { BSLParserVisitor as BSLParserVisitor } from "./antlr/generated/BSLParserVisitor";
import { BslGrammarParser } from "./bslGrammarParser";

export interface IContextTree {
    isModule: boolean;
    isFunction: boolean;
}

class ContextTree implements IContextTree {
    public get isModule() {
        return false;
    }

    public get isFunction() {
        return false;
    }

    public get isProcedure() {
        return false;
    }

    public readonly asModule = (): MainTree | null => {
        return this.isModule ? (this as unknown as MainTree) : null;
    };
}

export interface IModuleTree extends IContextTree {
    subContext: SubsContext | null;
}

export class MainTree extends ContextTree implements IModuleTree, ParseTree {
    //private _ctx: FileContext;
    private _subContext: SubsContext;

    constructor(private readonly ctx: FileContext) {
        super();
        this._subContext = ctx.children?.find((tree) => tree instanceof SubsContext) as SubsContext;
    }

    parent: ParseTree;

    getPayload(): unknown {
        throw new Error("Method not implemented.");
    }

    getChild(i: number): ParseTree {
        throw new Error("Method not implemented.");
    }

    accept<T>(visitor: ParseTreeVisitor<T>): T {
        throw new Error("Method not implemented.");
    }

    getChildCount(): number {
        throw new Error("Method not implemented.");
    }

    toStringTree(ruleNames: string[], recog: Parser): string {
        throw new Error("Method not implemented.");
    }

    getSourceInterval(): Interval {
        throw new Error("Method not implemented.");
    }

    get subContext(): SubsContext | null {
        return this._subContext;
    }

    getText = () => {
        return this.ctx.getText();
    };

    public override get isModule() {
        return true;
    }
}

export class BslVisitor extends BSLParserVisitor<IContextTree> {
    /**
     * Visit a parse tree produced by `BSLParser.file`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    public override visitFile = (ctx: FileContext) => {
        return new MainTree(ctx);
    };
}
