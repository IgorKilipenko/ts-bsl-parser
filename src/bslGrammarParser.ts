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

    private _listener: BslListener | null = null;

    constructor(input: TokenStream | string) {
        super(typeof input === "string" ? BslGrammarLexer.createTokenStream(input as string) : (input as TokenStream));
    }

    public get parsingInfo(): IParsingInfo | null {
        return this._listener?.parsingInfo ?? null;
    }

    public parseModule(): FileContext {
        return this.file();
    }

    public override file(): FileContext {
        if (this._listener !== null) {
            this.removeParseListener(this._listener);
        }

        this._listener = new BslListener();
        this.addParseListener(this._listener);

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
