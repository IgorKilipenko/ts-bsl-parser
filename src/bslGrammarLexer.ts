import { CommonTokenStream, CharStreams } from "antlr4ng";
import { BSLLexer as BSLLexerBase } from "./antlr/generated/BSLLexer";

export class BslGrammarLexer extends BSLLexerBase {
    public static createTokenStream(data: string): CommonTokenStream {
        const chars = CharStreams.fromString(data);
        const lexer = new BslGrammarLexer(chars);
        return new CommonTokenStream(lexer);
    }
}
