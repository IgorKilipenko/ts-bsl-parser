import { CharStream, CommonTokenStream } from 'antlr4';
import { BslGrammarParser } from "./bslGrammarParser";
import { BslGrammarLexer } from "./bslGrammarLexer";

export class Parser {

}

const bslCode = `
Процедура Тест(арг1)
    Сообщить("Привет!");
КонецПроцедуры
`;

const chars = new CharStream(bslCode);
const lexer = new BslGrammarLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new BslGrammarParser(tokens);
const tree = parser.funcDeclaration();
console.log({tree});
