import { FunctionContext, ProcedureContext } from "../../src/antlr/generated/BSLParser";
import { createParser } from "../../src/parser";
import { RegionTestUtils } from "./utils/regionTestingUtils";
import { TestingUtils } from "./utils/testingUtils";

describe("Bsl regions tests", () => {
    test("check region", () => {
        const bslCode = TestingUtils.prepareBslCode(`
        #Область Область1
            Перем пер1;
            Процедура Тест1()
                Если Истина Тогда
                КонецЕсли;
            КонецПроцедуры
            #Область Область1Область1
                Процедура Тест1_1()
                    Если Истина Тогда
                    КонецЕсли;
                КонецПроцедуры
                Процедура Тест1_2()
                    Если Истина Тогда
                    КонецЕсли;
                КонецПроцедуры
            #КонецОбласти
        #КонецОбласти
        #Область Область2
        #КонецОбласти
        `);

        const parser = createParser(bslCode);
        const { parsingInfo } = parser.parseModule();
        expect(parsingInfo.regions.length).toBe(2);
        expect(parsingInfo.activeContextQueue.length).toBe(4);
        expect(RegionTestUtils.checkRegionsQueue(parsingInfo.activeContextQueue)).toBe(true);
    });
});

describe("Bsl functions tests", () => {
    test("check simple procedure", () => {
        const bslCode = TestingUtils.buildBslFunction({
            name: "ПроцедураТест",
            isVoid: true,
            body: TestingUtils.prepareBslCode(`
                    Сообщить("Текст");
                    `),
        });

        const parser = createParser(bslCode);
        const procedure = parser.procedure();
        expect(procedure && !procedure.exception).toBe(true);
    });

    test("check procedure declaration without args", () => {
        const bslCode = TestingUtils.buildBslFunction({
            name: "ПроцедураТест",
            isVoid: true,
        });

        const parser = createParser(bslCode);
        const procedure = parser.procedure();
        expect(procedure.exception).toBe(null);

        const procDeclaration = procedure.procDeclaration();

        expect(procDeclaration.subName().IDENTIFIER().symbol.text).toBe("ПроцедураТест");
        expect(procDeclaration.EXPORT_KEYWORD()).toBe(null);
        expect(procDeclaration.ASYNC_KEYWORD()).toBe(null);
        expect(procDeclaration.paramList()).toBe(null);
    });

    test("check function with full signature", () => {
        const testItem = (rawData: Parameters<typeof TestingUtils.buildBslFunction>[0]) => {
            const bslCode = TestingUtils.buildBslFunction(rawData);
            const parser = createParser(bslCode);

            const func = rawData.isVoid ? parser.procedure() : parser.function_();
            expect(func instanceof (rawData.isVoid ? ProcedureContext : FunctionContext)).toBe(true);

            // Function without parsed exceptions
            expect(func.exception).toBe(null);

            const declaration = rawData.isVoid
                ? (func as ProcedureContext).procDeclaration()
                : (func as FunctionContext).funcDeclaration();

            // Declaration without parsed exceptions
            expect(!!declaration.exception).toBe(false);

            // Check function name
            expect(declaration.subName().IDENTIFIER().symbol.text).toBe(rawData.name);

            // Is public function
            expect(!!declaration.EXPORT_KEYWORD()).toBe(rawData.isPublic);

            // Is async function
            expect(!!declaration.ASYNC_KEYWORD()).toBe(rawData.isAsync);

            // Check function args:
            // Has parameters and parameters count > 0
            expect(!!declaration.paramList() && !!declaration.paramList()?.param()?.length).toBe(
                !!rawData.args?.length,
            );

            const args = declaration.paramList()!.param();
            expect(args.length).toBe(rawData.args?.length ?? 0);

            // Check all args names
            expect(
                rawData.args?.reduce<boolean>((res, rawArg) => {
                    return (
                        res &&
                        !!args.find(
                            (funcArg) => funcArg.IDENTIFIER().symbol.text === TestingUtils.removeArgDefVal(rawArg),
                        )
                    );
                }, true),
            ).toBe(true);

            // Check has return value if is no void function or not return value if is procedure
            const returnStatement = rawData.isVoid
                ? null
                : (func as FunctionContext)
                      .subCodeBlock()
                      .codeBlock()
                      .statement()
                      .filter((s) => !!s.compoundStatement()?.returnStatement())
                      .at(0) ?? null;

            expect(!!returnStatement).toBe(!rawData.isVoid);
        };

        const rawData = {
            name: "Тест",
            isVoid: true,
            isPublic: true,
            isAsync: true,
            args: ["Аргумент1", "Аргумент2", "ОпциональныйАргумент1 = Неопределено"],
        };

        testItem(rawData);
        testItem({ ...rawData, isVoid: false, body: "Возврат Неопределено;" });
    });
});

describe("Bsl functions tests", () => {
    test("check simple function", () => {
        const bslCode = TestingUtils.prepareBslCode(`
        Функция ТестФункция()
        КонецФункции
        `);

        const parser = createParser(bslCode);
        const func = parser.function_();
        expect(func && func.exception === null).toBe(true);
    });
});
