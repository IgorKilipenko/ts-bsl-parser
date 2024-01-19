import type { IfStatementContext } from "../../src/antlr/generated/BSLParser";
import { BslRawFunction, createParser } from "../../src/parser";
import { RegionTestUtils } from "./utils/regionTestingUtils";
import { TestingUtils } from "./utils/testingUtils";

describe("Bsl regions tests", () => {
    test("check region", () => {
        const bslFunctionsCode = [
            TestingUtils.buildBslFunction({
                name: "Тест1",
                isVoid: true,
                body: TestingUtils.prepareBslCode(`
                Если Истина Тогда
                КонецЕсли;
                `),
            }),
            TestingUtils.buildBslFunction({
                name: "Тест1_1",
                isVoid: true,
                body: TestingUtils.prepareBslCode(`
                Если Истина Тогда
                КонецЕсли;
                `),
            }),
            TestingUtils.buildBslFunction({
                name: "Тест1_2",
                isVoid: true,
                body: TestingUtils.prepareBslCode(`
                Если Истина Тогда
                КонецЕсли;
                `),
            }),
        ];

        const bslRegionsCode = {
            get main() {
                return TestingUtils.prepareBslCode(`
                #Область Область1
                    Перем пер1;
                    ${bslFunctionsCode[0]}
                    ${this._region2}
                #КонецОбласти
                ${this._region3}
                `);
            },
            get _region2() {
                return TestingUtils.prepareBslCode(`
                #Область Область1_1
                    ${bslFunctionsCode[1]}
                    ${bslFunctionsCode[2]}
                #КонецОбласти
                `);
            },
            _region3: TestingUtils.prepareBslCode(`
            #Область Область2
            #КонецОбласти
            `),
        };

        const bslCode = TestingUtils.prepareBslCode(bslRegionsCode.main);

        const parser = createParser(bslCode);
        const { parsingInfo } = parser.parseModule();
        expect(parsingInfo.regions.length).toBe(2);
        expect(parsingInfo.activeContextQueue.length).toBe(4);
        expect(RegionTestUtils.checkRegionsQueue(parsingInfo.activeContextQueue)).toBe(true);

        expect(parsingInfo.regions.at(0)?.functions?.length).toBe(1);
        expect(parsingInfo.regions.at(0)?.regions?.at(0)?.functions?.length).toBe(2);
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
        testItem({
            ...rawData,
            isVoid: false,
            body: `
            Если Истина Тогда
                Возврат 0;
            КонеЕсли;
            Возврат 1;
        `,
        });
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
    test("Statement with & without semi d't has exception", () => {
        const testItem = (statement: IfStatementContext, withSemi = true) => {
            expect(statement.exception).toBeNull();
            expect(statement.isHasTrailingSemi).toBe(withSemi);
        }

        const bslCode = TestingUtils.prepareBslCode(`
        Если Истина Тогда
        КонецЕсли
        `);

        // Without semi
        testItem(createParser(bslCode).ifStatement(), false);

        // With semi
        testItem(createParser(bslCode + ";").ifStatement(), true);
    });
});
