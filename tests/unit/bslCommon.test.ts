import { BslRawFunction, createParser } from "../../src/parser";
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

            const func = new BslRawFunction(rawData.isVoid ? parser.procedure() : parser.function_());
            expect(func.isVoid).toBe(rawData.isVoid ?? false);

            // Function without parsed exceptions
            expect(func.hasParsingExceptions).toBe(false);

            // Check function name
            expect(func.name).toBe(rawData.name);

            // Is public function
            expect(func.isPublic).toBe(true);

            // Is async function
            expect(func.isAsync).toBe(rawData.isAsync);

            // Check function args:
            // Has parameters and parameters count > 0
            expect(func.args.length).toBe(rawData.args?.length ?? 0);

            // Check all args names
            expect(
                rawData.args?.reduce<boolean>((res, rawArg) => {
                    return (
                        res &&
                        !!func.args.find(
                            (funcArg) => funcArg.IDENTIFIER().symbol.text === TestingUtils.removeArgDefVal(rawArg),
                        )
                    );
                }, true),
            ).toBe(true);

            // Check has return value if is no void function or not return value if is procedure
            expect(!!func.returnStatements?.length).toBe(!rawData.isVoid);
        };

        const rawData = {
            name: "Тест",
            isVoid: true,
            isPublic: true,
            isAsync: true,
            args: ["Аргумент1", "Аргумент2", "ОпциональныйАргумент1 = Неопределено"],
        };

        testItem(rawData);
        testItem({ ...rawData, isVoid: false, body: `
            Если Истина Тогда
                Возврат 0;
            КонеЕсли;
            Возврат 1;
        ` });
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

describe("Bsl syntax tests", () => {
    test("Statement without semi d't has exception", () => {
        const bslCode = `
        Если Истина Тогда
        КонецЕсли
        `;

        const parser = createParser(bslCode);
        const statement = parser.ifStatement();

        expect(statement.exception).toBeNull();
        expect(statement.isHasTrailingSemi).toBe(false);
    });
});
