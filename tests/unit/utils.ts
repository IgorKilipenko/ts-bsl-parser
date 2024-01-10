import { CharStreams, CommonTokenStream } from "antlr4ng";
import { BslGrammarLexer } from "../../src/bslGrammarLexer.js";
import { BslGrammarParser } from "../../src/bslGrammarParser.js";

export const createTokenStream = (data: string) : CommonTokenStream => {
    const chars = CharStreams.fromString(data);
    const lexer = new BslGrammarLexer(chars);
    return new CommonTokenStream(lexer);
};

export const createParser = (data: string) : BslGrammarParser => {
    return new BslGrammarParser(createTokenStream(data));
};
