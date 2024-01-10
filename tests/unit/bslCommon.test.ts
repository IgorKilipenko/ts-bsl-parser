import { BslVisitor } from "../../src/bslVisitor.js";
import { createParser, createTokenStream } from "./utils.js";

describe("Bsl Lexer regions tests", () => {
    beforeEach(() => {

    });

    test('check method name', () => {
        const bslCode = `
        Процедура Тест(арг1)
            текст = "Привет!";
            Сообщить(текст);
        КонецПроцедуры
        `.replace(/(?:^\s+)|(\s+$)/, "");

        const parser = createParser(bslCode);
        const visitor = new BslVisitor();
        const res = visitor.visitFile(parser.file());
        //parser.codeBlock().
        expect("Тест").toBe("Тест");
    });
});

describe("Context common tests", () => {
    const parser = createParser("");

    beforeEach(() => {
        parser.reset();
    });

    test("has module context", () => {
        const bslCode = `
        Процедура Тест(арг1) Экспорт
            текст = "Привет!";
            Сообщить(текст);
        КонецПроцедуры
        `.replace(/(?:^\s+)|(\s+$)/, "");

        parser.tokenStream = createTokenStream(bslCode);
        const ctx = parser.file();

        expect(ctx.isModule).toBe(true);
    });

    test("has module context2", () => {
        const bslCode = `
        #Область ПрограммныйИнтерфейс
        Перем переменная1;

        // Описание процедуры Тест
        //
        Процедура Тест(аргумент1) Экспорт
            текст = "Привет!";
            Сообщить(текст);
        КонецПроцедуры

        // Описание процедуры Тест2
        //
        Процедура Тест2(аргумент1) Экспорт
            текст = "Привет!";
            Сообщить(текст);
        КонецПроцедуры
        #КонецОбласти // ПрограммныйИнтерфейс
        `.replace(/(?:^\s+)|(\s+$)/, "");

        parser.tokenStream = createTokenStream(bslCode);
        const ctx = parser.file();

        expect(ctx.isModule).toBe(true);
    });
});

