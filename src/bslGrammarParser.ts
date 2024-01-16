import type { TokenStream } from "antlr4ng";
import type { FileContext } from "./antlr/generated/BSLParser";
import { BSLParser as BSLParserBase } from "./antlr/generated/BSLParser";
import { BslGrammarLexer } from "./bslGrammarLexer";
import type { IParsedInfo as IParsingInfo } from "./core/bslListener";
import { BslListener } from "./core/bslListener";

export class BslGrammarParser extends BSLParserBase implements Disposable {
    public static create(data: string): BslGrammarParser {
        return new BslGrammarParser(data);
    }

    private _listener: BslListener = new BslListener();

    constructor(input: TokenStream | string) {
        super(typeof input === "string" ? BslGrammarLexer.createTokenStream(input as string) : (input as TokenStream));
        this.addParseListener(this._listener);
    }

    public get parsingInfo(): IParsingInfo {
        return this._listener.parsingInfo;
    }

    public parseModule(): { ctx: FileContext; parsingInfo: IParsingInfo } {
        const ctx = this.file();
        const parsingInfo: IParsingInfo = this.parsingInfo!;
        console.assert(parsingInfo !== null);

        return {
            ctx,
            parsingInfo,
        };
    }

    public override file(): FileContext {
        return super.file();
    }

    private _removeListeners() {
        this.removeParseListeners();
        this.removeErrorListeners();
    }

    [Symbol.dispose]() {
        this._removeListeners();
    }
}
