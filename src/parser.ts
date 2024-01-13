import { CharStream, CharStreams, CommonTokenStream, TerminalNode } from "antlr4ng";

import { BslGrammarParser } from "./bslGrammarParser";
import { BslGrammarLexer } from "./bslGrammarLexer";
import { BslVisitor } from "./bslVisitor";
import { BSLParserListener } from "./antlr/generated/BSLParserListener";

export { BslGrammarParser, CharStream, CommonTokenStream, BslGrammarLexer, BslVisitor, BSLParserListener as BslListener, TerminalNode };
export * from "./core/context";
export * from "./core/bslCodeEntities";
export * from "./core/bslSyntaxErrors";

export const createTokenStream = (data: string): CommonTokenStream => {
    const chars = CharStreams.fromString(data);
    const lexer = new BslGrammarLexer(chars);
    return new CommonTokenStream(lexer);
};

export const createParser = (data: string): BslGrammarParser => {
    return new BslGrammarParser(createTokenStream(data));
};
