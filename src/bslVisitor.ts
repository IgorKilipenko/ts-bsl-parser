import { type ParseTree } from "antlr4";
import { type FileContext, SubsContext } from "./antlr/generated/BSLParser";
import BSLParserVisitor from "./antlr/generated/BSLParserVisitor";
import { BslGrammarParser } from "./bslGrammarParser";

export interface IContextTree {
    isModule: boolean
    isFunction: boolean
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

    public readonly asModule = () : MainTree => {
        return this.isModule && (this as unknown as MainTree);
    };
}

export interface IModuleTree extends IContextTree {
    subContext: SubsContext;
}

export class MainTree extends ContextTree implements IModuleTree, ParseTree {
    //private _ctx: FileContext;
    private _subContext: SubsContext;

    constructor (private readonly ctx: FileContext) {
        super();
        this._subContext = ctx.children.find((tree) => tree instanceof SubsContext) as SubsContext;
    }

    get subContext(): SubsContext | null {
        return this._subContext;
    }

    getText = () =>  {
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
