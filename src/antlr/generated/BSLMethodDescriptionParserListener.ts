// Generated from ./src/antlr/BSLMethodDescriptionParser.g4 by ANTLR 4.13.1

import type { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";

import { BslParserRuleContext } from "../../core/context.js";

import type { MethodDescriptionContext } from "./BSLMethodDescriptionParser.js";
import type { DeprecateContext } from "./BSLMethodDescriptionParser.js";
import type { DeprecateDescriptionContext } from "./BSLMethodDescriptionParser.js";
import type { DescriptionBlockContext } from "./BSLMethodDescriptionParser.js";
import type { DescriptionContext } from "./BSLMethodDescriptionParser.js";
import type { DescriptionStringContext } from "./BSLMethodDescriptionParser.js";
import type { ExamplesContext } from "./BSLMethodDescriptionParser.js";
import type { ExamplesStringContext } from "./BSLMethodDescriptionParser.js";
import type { CallOptionsContext } from "./BSLMethodDescriptionParser.js";
import type { CallOptionsStringContext } from "./BSLMethodDescriptionParser.js";
import type { ParametersContext } from "./BSLMethodDescriptionParser.js";
import type { ParameterStringContext } from "./BSLMethodDescriptionParser.js";
import type { ParameterContext } from "./BSLMethodDescriptionParser.js";
import type { SubParameterContext } from "./BSLMethodDescriptionParser.js";
import type { ParameterNameContext } from "./BSLMethodDescriptionParser.js";
import type { ReturnsValuesContext } from "./BSLMethodDescriptionParser.js";
import type { ReturnsValuesStringContext } from "./BSLMethodDescriptionParser.js";
import type { ReturnsValueContext } from "./BSLMethodDescriptionParser.js";
import type { TypesBlockContext } from "./BSLMethodDescriptionParser.js";
import type { TypeDescriptionContext } from "./BSLMethodDescriptionParser.js";
import type { TypeContext } from "./BSLMethodDescriptionParser.js";
import type { SimpleTypeContext } from "./BSLMethodDescriptionParser.js";
import type { ListTypesContext } from "./BSLMethodDescriptionParser.js";
import type { ComplexTypeContext } from "./BSLMethodDescriptionParser.js";
import type { HyperlinkTypeContext } from "./BSLMethodDescriptionParser.js";
import type { SpitterContext } from "./BSLMethodDescriptionParser.js";
import type { HyperlinkBlockContext } from "./BSLMethodDescriptionParser.js";
import type { StartPartContext } from "./BSLMethodDescriptionParser.js";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `BSLMethodDescriptionParser`.
 */
export class BSLMethodDescriptionParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.methodDescription`.
     * @param ctx the parse tree
     */
    enterMethodDescription?: (ctx: MethodDescriptionContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.methodDescription`.
     * @param ctx the parse tree
     */
    exitMethodDescription?: (ctx: MethodDescriptionContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.deprecate`.
     * @param ctx the parse tree
     */
    enterDeprecate?: (ctx: DeprecateContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.deprecate`.
     * @param ctx the parse tree
     */
    exitDeprecate?: (ctx: DeprecateContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.deprecateDescription`.
     * @param ctx the parse tree
     */
    enterDeprecateDescription?: (ctx: DeprecateDescriptionContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.deprecateDescription`.
     * @param ctx the parse tree
     */
    exitDeprecateDescription?: (ctx: DeprecateDescriptionContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.descriptionBlock`.
     * @param ctx the parse tree
     */
    enterDescriptionBlock?: (ctx: DescriptionBlockContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.descriptionBlock`.
     * @param ctx the parse tree
     */
    exitDescriptionBlock?: (ctx: DescriptionBlockContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.description`.
     * @param ctx the parse tree
     */
    enterDescription?: (ctx: DescriptionContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.description`.
     * @param ctx the parse tree
     */
    exitDescription?: (ctx: DescriptionContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.descriptionString`.
     * @param ctx the parse tree
     */
    enterDescriptionString?: (ctx: DescriptionStringContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.descriptionString`.
     * @param ctx the parse tree
     */
    exitDescriptionString?: (ctx: DescriptionStringContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.examples`.
     * @param ctx the parse tree
     */
    enterExamples?: (ctx: ExamplesContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.examples`.
     * @param ctx the parse tree
     */
    exitExamples?: (ctx: ExamplesContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.examplesString`.
     * @param ctx the parse tree
     */
    enterExamplesString?: (ctx: ExamplesStringContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.examplesString`.
     * @param ctx the parse tree
     */
    exitExamplesString?: (ctx: ExamplesStringContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.callOptions`.
     * @param ctx the parse tree
     */
    enterCallOptions?: (ctx: CallOptionsContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.callOptions`.
     * @param ctx the parse tree
     */
    exitCallOptions?: (ctx: CallOptionsContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.callOptionsString`.
     * @param ctx the parse tree
     */
    enterCallOptionsString?: (ctx: CallOptionsStringContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.callOptionsString`.
     * @param ctx the parse tree
     */
    exitCallOptionsString?: (ctx: CallOptionsStringContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.parameters`.
     * @param ctx the parse tree
     */
    enterParameters?: (ctx: ParametersContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.parameters`.
     * @param ctx the parse tree
     */
    exitParameters?: (ctx: ParametersContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.parameterString`.
     * @param ctx the parse tree
     */
    enterParameterString?: (ctx: ParameterStringContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.parameterString`.
     * @param ctx the parse tree
     */
    exitParameterString?: (ctx: ParameterStringContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.parameter`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.parameter`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.subParameter`.
     * @param ctx the parse tree
     */
    enterSubParameter?: (ctx: SubParameterContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.subParameter`.
     * @param ctx the parse tree
     */
    exitSubParameter?: (ctx: SubParameterContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.parameterName`.
     * @param ctx the parse tree
     */
    enterParameterName?: (ctx: ParameterNameContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.parameterName`.
     * @param ctx the parse tree
     */
    exitParameterName?: (ctx: ParameterNameContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.returnsValues`.
     * @param ctx the parse tree
     */
    enterReturnsValues?: (ctx: ReturnsValuesContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.returnsValues`.
     * @param ctx the parse tree
     */
    exitReturnsValues?: (ctx: ReturnsValuesContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.returnsValuesString`.
     * @param ctx the parse tree
     */
    enterReturnsValuesString?: (ctx: ReturnsValuesStringContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.returnsValuesString`.
     * @param ctx the parse tree
     */
    exitReturnsValuesString?: (ctx: ReturnsValuesStringContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.returnsValue`.
     * @param ctx the parse tree
     */
    enterReturnsValue?: (ctx: ReturnsValueContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.returnsValue`.
     * @param ctx the parse tree
     */
    exitReturnsValue?: (ctx: ReturnsValueContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.typesBlock`.
     * @param ctx the parse tree
     */
    enterTypesBlock?: (ctx: TypesBlockContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.typesBlock`.
     * @param ctx the parse tree
     */
    exitTypesBlock?: (ctx: TypesBlockContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.typeDescription`.
     * @param ctx the parse tree
     */
    enterTypeDescription?: (ctx: TypeDescriptionContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.typeDescription`.
     * @param ctx the parse tree
     */
    exitTypeDescription?: (ctx: TypeDescriptionContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.simpleType`.
     * @param ctx the parse tree
     */
    enterSimpleType?: (ctx: SimpleTypeContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.simpleType`.
     * @param ctx the parse tree
     */
    exitSimpleType?: (ctx: SimpleTypeContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.listTypes`.
     * @param ctx the parse tree
     */
    enterListTypes?: (ctx: ListTypesContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.listTypes`.
     * @param ctx the parse tree
     */
    exitListTypes?: (ctx: ListTypesContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.complexType`.
     * @param ctx the parse tree
     */
    enterComplexType?: (ctx: ComplexTypeContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.complexType`.
     * @param ctx the parse tree
     */
    exitComplexType?: (ctx: ComplexTypeContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.hyperlinkType`.
     * @param ctx the parse tree
     */
    enterHyperlinkType?: (ctx: HyperlinkTypeContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.hyperlinkType`.
     * @param ctx the parse tree
     */
    exitHyperlinkType?: (ctx: HyperlinkTypeContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.spitter`.
     * @param ctx the parse tree
     */
    enterSpitter?: (ctx: SpitterContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.spitter`.
     * @param ctx the parse tree
     */
    exitSpitter?: (ctx: SpitterContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.hyperlinkBlock`.
     * @param ctx the parse tree
     */
    enterHyperlinkBlock?: (ctx: HyperlinkBlockContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.hyperlinkBlock`.
     * @param ctx the parse tree
     */
    exitHyperlinkBlock?: (ctx: HyperlinkBlockContext) => void;

    /**
     * Enter a parse tree produced by `BSLMethodDescriptionParser.startPart`.
     * @param ctx the parse tree
     */
    enterStartPart?: (ctx: StartPartContext) => void;

    /**
     * Exit a parse tree produced by `BSLMethodDescriptionParser.startPart`.
     * @param ctx the parse tree
     */
    exitStartPart?: (ctx: StartPartContext) => void;

    visitTerminal(node: TerminalNode): void {}

    visitErrorNode(node: ErrorNode): void {}

    enterEveryRule(node: ParserRuleContext): void {}

    exitEveryRule(node: ParserRuleContext): void {}
}
