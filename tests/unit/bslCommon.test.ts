import {
    CompoundStatementContext,
    FunctionContext,
    ProcedureContext,
    StatementContext,
} from "../../src/antlr/generated/BSLParser";
import { createParser } from "../../src/parser";

const prepareBslCode = (code: string) => {
    return code.replace(/(?:^\s+)|(\s+$)/g, "");
};

const removeArgDefVal = (arg: string) => {
    return arg.replace(/\s*=\s*[\S]+$/, "");
};

const parseStrArg = (arg: string) => {
    const pattern = /^\s*(?<name>\S+)(?:\s*=\s*(?<defaultValue>\S+))?\s*$/;
    const m = pattern.exec(arg);
    if (!m || !m.groups) {
        return null;
    }

    if (!m.groups.name) {
        return null;
    }

    return { ...(m.groups as typeof m.groups & { name: string; defaultValue?: string }) };
};

const buildBslFunction = (options: {
    isVoid?: boolean;
    name: string;
    body?: string;
    args?: string[];
    isPublic?: boolean;
    isAsync?: boolean;
}) => {
    const isEmptyString = (line: string) => {
        return !/\S/.test(line);
    };

    const replaceIndents = <T extends string | string[] = string[]>(
        data: T,
        sourceCount?: number,
        preprocess?: (line: string) => string,
    ): T => {
        const isArray = Array.isArray(data);
        let line = Array.isArray(data) ? data.find((line) => !isEmptyString(line)) ?? "" : (data as string);

        if (!isArray && isEmptyString(line)) {
            return line as T;
        }

        sourceCount = sourceCount ?? /(?<=^\s+|^)\S/.exec(line)?.index ?? 0;

        if (!isArray) {
            if (sourceCount > 0) {
                line = line.replace(new RegExp(`^\\s{${sourceCount}}`), "");
            }

            return `${" ".repeat(4)}${line}` as T;
        }

        return data.reduce<string[]>((res, line) => {
            let buf = replaceIndents(line, sourceCount!);
            buf = preprocess ? preprocess(buf) : buf;
            res.push(buf);
            return res;
        }, []) as T;
    };

    const { isVoid = false, name, args = [], body = "", isPublic = false, isAsync = false } = options;
    const funcDef = `${isAsync ? "Асинх " : ""}${isVoid ? "Процедура" : "Функция"} ${name}(${args.join(", ")})${
        isPublic ? " Экспорт" : ""
    }`;
    const funcBody = replaceIndents(body.split(/(?:\r?\n)+/)).reduce<string>((res, line, i, arr) => {
        res += `${replaceIndents(line)}${i < arr.length - 1 ? "\n" : ""}`;
        return res;
    }, "");
    const funcEnd = `Конец${isVoid ? "Процедуры" : "Функции"}`;

    return `${funcDef}\n${funcBody}${isEmptyString(funcBody) ? "" : "\n"}${funcEnd}`;
};

describe("Bsl functions tests", () => {
    test("check region", () => {
        const bslCode = prepareBslCode(`
        #Область Область1
            Процедура Тест1()
                Если Истина Тогда
                КонецЕсли;
            КонецПроцедуры
            #Область Область1Область1
            #КонецОбласти
        #КонецОбласти

        #Область Область2
        #КонецОбласти
        `);

        const parser = createParser(bslCode);
        const module = parser.parseModule();
        const parseInfo = parser.parsingInfo;
        expect(parseInfo?.regions.length === 2).toBe(true);

    });
    test("check simple procedure", () => {
        const bslCode = buildBslFunction({
            name: "ПроцедураТест",
            isVoid: true,
            body: prepareBslCode(`
                    Сообщить("Текст");
                    `),
        });

        const parser = createParser(bslCode);
        const procedure = parser.procedure();
        expect(procedure && !procedure.exception).toBe(true);
    });

    test("check procedure declaration without args", () => {
        const bslCode = buildBslFunction({
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
        const testItem = (rawData: Parameters<typeof buildBslFunction>[0]) => {
            const bslCode = buildBslFunction(rawData);
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
                        res && !!args.find((funcArg) => funcArg.IDENTIFIER().symbol.text === removeArgDefVal(rawArg))
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
        const bslCode = prepareBslCode(`
        Функция ТестФункция()
        КонецФункции
        `);

        const parser = createParser(bslCode);
        const func = parser.function_();
        expect(func && func.exception === null).toBe(true);
    });
});
