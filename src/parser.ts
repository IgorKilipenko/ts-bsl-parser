import { CharStream, CharStreams, CommonTokenStream, TerminalNode } from "antlr4ng";

import { BslGrammarParser } from "./bslGrammarParser";
import { BslGrammarLexer } from "./bslGrammarLexer";
import { BslVisitor } from "./bslVisitor";
import { BslListener } from "./core/bslListener";

export { BslGrammarParser, CharStream, CommonTokenStream, BslGrammarLexer, BslVisitor, TerminalNode };
export * from "./core/context";
export * from "./core/bslCodeEntities";
export * from "./core/bslSyntaxErrors";
export * from "./core/bslListener";

export const createTokenStream = (data: string): CommonTokenStream => {
    return BslGrammarLexer.createTokenStream(data);
};

export const createParser = (data: string): BslGrammarParser => {
    return BslGrammarParser.create(data);
};
