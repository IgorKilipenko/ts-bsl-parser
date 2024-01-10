import { CharStreams, CommonTokenStream } from "antlr4ng";

import { BslGrammarParser } from "./bslGrammarParser.js";
import { BslGrammarLexer } from "./bslGrammarLexer.js";

// export {
//     BslGrammarParser,
//     CharStream, CommonTokenStream,
//     BslGrammarLexer
// };

export const createTokenStream = (data: string) : CommonTokenStream => {
    const chars = CharStreams.fromString(data);
    const lexer = new BslGrammarLexer(chars);
    return new CommonTokenStream(lexer);
};

export const createParser = (data: string) : BslGrammarParser => {
    return new BslGrammarParser(createTokenStream(data));
};

const bslCode = `
Процедура Тест(арг1)
    текст = "Привет!";
    Сообщить(текст);
КонецПроцедуры
`;

const chars = CharStreams.fromString(bslCode);
const lexer = new BslGrammarLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new BslGrammarParser(tokens);
const tree = parser.procDeclaration();
console.log({ tree });
