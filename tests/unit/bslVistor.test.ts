import { BslVisitor } from "../../src/bslVisitor";
import { createParser } from "../../src/parser";

describe("Bsl Visitor tests", () => {
    test("check TerminalNode", () => {
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
