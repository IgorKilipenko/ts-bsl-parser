export class TestingUtils {
    public static prepareBslCode = (code: string) => {
        return code.replace(/(?:^\s+)|(\s+$)/g, "");
    };

    public static removeArgDefVal = (arg: string) => {
        return arg.replace(/\s*=\s*[\S]+$/, "");
    };

    public static parseStrArg = (arg: string) => {
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

    public static buildBslFunction = (options: {
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
}
