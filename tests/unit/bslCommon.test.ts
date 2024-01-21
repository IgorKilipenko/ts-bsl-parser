import { IfStatementContext } from "../../src/antlr/generated/BSLParser";
import { BslRawFunction, BslRawIfStatement, createParser } from "../../src/parser";
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

describe("Bsl functions context tests", () => {
    test("check simple procedure context", () => {
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

    test("check procedure declaration context without args", () => {
        const bslCode = TestingUtils.buildBslFunction({
            name: "ПроцедураТест",
            isVoid: true,
        });

        const parser = createParser(bslCode);
        const procedure = parser.procedure();
        expect(procedure.exception).toBeNull();

        const procDeclaration = procedure.procDeclaration();

        expect(procDeclaration.subName().IDENTIFIER().symbol.text).toBe("ПроцедураТест");
        expect(procDeclaration.EXPORT_KEYWORD()).toBeNull();
        expect(procDeclaration.ASYNC_KEYWORD()).toBeNull();
        expect(procDeclaration.paramList()).toBeNull();
    });

    test("check simple function context", () => {
        const bslCode = TestingUtils.prepareBslCode(`
        Функция ТестФункция()
        КонецФункции
        `);

        const parser = createParser(bslCode);
        const func = parser.function_();
        expect(func && func.exception === null).toBe(true);
    });
});

describe("Bsl functions tests", () => {
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
            КонецЕсли;
            Возврат 1;
        `,
        });
    });
});

describe("Bsl syntax tests", () => {
    test("statement with & without semi d't has exception", () => {
        const testItem = (statement: IfStatementContext, withSemi = true) => {
            expect(statement.exception).toBeNull();
            expect(statement.isHasTrailingSemi).toBe(withSemi);
        };

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

describe("Bsl code blocks tests", () => {
    test("functions empty code block position test", () => {
        const bslCodeBase = TestingUtils.prepareBslCode(`
            Процедура Тест1()
            КонецПроцедуры
        `);

        // Position must be at def stop
        let bslCode = bslCodeBase;
        let func = new BslRawFunction(createParser(bslCode).procedure());
        expect(func.codeBlockPosition.start.line).toBe(1);
        expect(func.codeBlockPosition.start.column).toBe(/\r?\n/.exec(bslCode)?.index);
        expect(func.codeBlockPosition.stop.line === func.codeBlockPosition.start.line).toBe(true);
        expect(func.codeBlockPosition.stop.column === func.codeBlockPosition.start.column).toBe(true);

        // Check position for inline function with empty code
        bslCode = bslCodeBase.replace(/(\r?\n)+/, "");
        func = new BslRawFunction(createParser(bslCode).procedure());
        expect(func.codeBlockPosition?.start.line).toBe(1);
        expect(func.codeBlockPosition.start.column).toBe(/\s+КонецПроцедуры/.exec(bslCode)?.index);
        expect(func.codeBlockPosition?.stop.line === func.codeBlockPosition.start.line).toBe(true);
        expect(func.codeBlockPosition?.stop.column).toBe((/КонецПроцедуры/.exec(bslCode)?.index ?? 0) - 1);

        // Check position for inline function with not empty code
        bslCode = bslCodeBase.replace(/(\r?\n)+/, " var1 = 1;");
        func = new BslRawFunction(createParser(bslCode).procedure());
        expect(func.codeBlockPosition.start.line).toBe(1);
        expect(func.codeBlockPosition.start.column).toBe(/var1/.exec(bslCode)?.index ?? -1);
        expect(func.codeBlockPosition.stop.line === func.codeBlockPosition.start.line).toBe(true);
        expect(func.codeBlockPosition.stop.column === func.codeBlockPosition.start.column).toBe(false);
    });

    describe("Bsl compound statement blocks tests", () => {
        test("compound statements empty code block position test", () => {
            const bslCodeBase = TestingUtils.prepareBslCode(`
            Если Истина Тогда
            КонецЕсли;
            `);

            // Position must be at def stop
            let bslCode = bslCodeBase;
            let statement = new BslRawIfStatement(createParser(bslCode).ifStatement());
            expect(statement.codeBlockPosition.start.line).toBe(1);
            expect(statement.codeBlockPosition.start.column).toBe(/\r?\n/.exec(bslCode)?.index);
            expect(statement.codeBlockPosition.stop.line === statement.codeBlockPosition.start.line).toBe(true);
            expect(statement.codeBlockPosition.stop.column === statement.codeBlockPosition.start.column).toBe(true);

            // Check position for inline statement with empty code
            bslCode = bslCodeBase.replace(/(\r?\n)+/, "");
            statement = new BslRawIfStatement(createParser(bslCode).ifStatement());
            expect(statement.codeBlockPosition.start.line).toBe(1);
            expect(statement.codeBlockPosition.start.column).toBe(/\s+КонецЕсли/.exec(bslCode)?.index);
            expect(statement.codeBlockPosition.stop.line === statement.codeBlockPosition.start.line).toBe(true);
            expect(statement.codeBlockPosition?.stop.column).toBe((/КонецЕсли/.exec(bslCode)?.index ?? 0) - 1);

            // Check position for inline statement with not empty code
            bslCode = bslCodeBase.replace(/(\r?\n)+/, " var1 = 1;");
            statement = new BslRawIfStatement(createParser(bslCode).ifStatement());
            expect(statement.codeBlockPosition.start.line).toBe(1);
            expect(statement.codeBlockPosition.start.column).toBe(/var1/.exec(bslCode)?.index ?? -1);
            expect(statement.codeBlockPosition.stop.line === statement.codeBlockPosition.start.line).toBe(true);
            expect(statement.codeBlockPosition.stop.column === statement.codeBlockPosition.start.column).toBe(false);
        });
    });
});

describe("Bsl statements tests", () => {
    describe("Bsl If/Else statements tests", () => {
        test("check if/else statements without else/elseif", () => {
            const bslCode = TestingUtils.prepareBslCode(`
            Если Истина Тогда
            КонецЕсли;
            `);

            const statement = createParser(bslCode).ifStatement();
            expect(statement.exception).toBeNull();
            expect(statement.isHasTrailingSemi).toBe(true);
            expect(statement.elseBranch()).toBeNull();
            expect(statement.elsifBranch().length).toBe(0);
            expect(statement.ifBranch().expression().member().length).toBe(1);
        });

        test("check if/else statements with all items", () => {
            const bslCode = TestingUtils.prepareBslCode(`
            Если Истина Тогда
            ИначеЕсли Ложь Тогда
            Иначе
            КонецЕсли;
            `);

            const statement = createParser(bslCode).ifStatement();
            expect(statement.exception).toBeNull();
            expect(statement.isHasTrailingSemi).toBe(true);
            expect(statement.elseBranch()).not.toBeNull();
            expect(statement.elsifBranch().length).toBe(1);
            expect(statement.ifBranch().expression().member().length).toBe(1);
            expect(statement.elsifBranch(0)?.expression().member().length).toBe(1);
        });

        test("check nested if/else statements", () => {
            const bslCode = TestingUtils.prepareBslCode(`
            Если Истина Тогда
                Если Истина Тогда
                КонецЕсли;
            ИначеЕсли Ложь Тогда
                Если Истина Тогда
                КонецЕсли;
            Иначе
                Если Истина Тогда
                КонецЕсли;
            КонецЕсли;
            `);

            const statement = createParser(bslCode).ifStatement();
            expect(statement.exception).toBeNull();
            expect(statement.isHasTrailingSemi).toBe(true);
            expect(statement.elseBranch()).not.toBeNull();
            expect(statement.elsifBranch().length).toBe(1);
            expect(statement.ifBranch().expression().member().length).toBe(1);
            expect(statement.elsifBranch(0)?.expression().member().length).toBe(1);

            const elseBranch = statement.elseBranch()!;
            const parent = elseBranch.getParentCodeBlock();
            expect(parent).toEqual(statement);
            const nestedIfStatement = elseBranch.codeBlock();
            expect(nestedIfStatement?.getParentCodeBlock()).toBe(statement);
        });

        test("check parent if/else block", () => {
            const bslCode = TestingUtils.prepareBslCode(`
            Если Истина Тогда
                Если Истина Тогда
                КонецЕсли;
            ИначеЕсли Ложь Тогда
                Если Истина Тогда
                КонецЕсли;
            Иначе
                Если Истина Тогда
                КонецЕсли;
            КонецЕсли;
            `);

            const statement = createParser(bslCode).ifStatement();
            const elseBranch = statement.elseBranch()!;
            const parent = elseBranch.getParentCodeBlock();
            expect(parent).toEqual(statement);
            const nestedIfStatement = elseBranch.codeBlock();
            expect(nestedIfStatement?.getParentCodeBlock()).toBe(statement);
        });
    });
});
