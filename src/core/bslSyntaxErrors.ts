import type { BslParserRuleContext } from "./context";

export class BslSyntaxError extends SyntaxError {
    constructor(
        message: string,
        public readonly source: BslParserRuleContext | null = null,
    ) {
        super(message);
    }
}
