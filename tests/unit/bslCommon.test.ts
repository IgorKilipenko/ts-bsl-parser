import { BslVisitor } from "../../src/bslVisitor";
import { createParser, createTokenStream } from "./utils";

const prepareBslCode = (code: string) => {
    return code.replace(/(?:^\s+)|(\s+$)/g, "");
};

describe("Bsl Lexer regions tests", () => {
    test("check region name", () => {
        const bslCode = prepareBslCode(`
        Процедура Тест(арг1)
            текст = "Привет!";
            Сообщить(текст);
        КонецПроцедуры
        `);

        const parser = createParser(bslCode);
        const visitor = new BslVisitor();
        const res = visitor.visitFile(parser.file());
        //parser.codeBlock().
        expect("Тест").toBe("Тест");
    });

    test("check method name", () => {
        const bslCode = prepareBslCode(`
        Процедура Тест(арг1)
            текст = "Привет!";
            Сообщить(текст);
        КонецПроцедуры
        `);

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
        const bslCode = prepareBslCode(`
        Процедура Тест(арг1) Экспорт
            текст = "Привет!";
            Сообщить(текст);
        КонецПроцедуры
        `);

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
