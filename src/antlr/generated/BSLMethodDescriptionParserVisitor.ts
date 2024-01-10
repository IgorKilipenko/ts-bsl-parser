// Generated from ./src/antlr/BSLMethodDescriptionParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BSLMethodDescriptionParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class BSLMethodDescriptionParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.methodDescription`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodDescription?: (ctx: MethodDescriptionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.deprecate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeprecate?: (ctx: DeprecateContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.deprecateDescription`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeprecateDescription?: (ctx: DeprecateDescriptionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.descriptionBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescriptionBlock?: (ctx: DescriptionBlockContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.description`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescription?: (ctx: DescriptionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.descriptionString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescriptionString?: (ctx: DescriptionStringContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.examples`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExamples?: (ctx: ExamplesContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.examplesString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExamplesString?: (ctx: ExamplesStringContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.callOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallOptions?: (ctx: CallOptionsContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.callOptionsString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallOptionsString?: (ctx: CallOptionsStringContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameters?: (ctx: ParametersContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.parameterString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterString?: (ctx: ParameterStringContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.subParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubParameter?: (ctx: SubParameterContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.parameterName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterName?: (ctx: ParameterNameContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.returnsValues`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnsValues?: (ctx: ReturnsValuesContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.returnsValuesString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnsValuesString?: (ctx: ReturnsValuesStringContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.returnsValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnsValue?: (ctx: ReturnsValueContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.typesBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypesBlock?: (ctx: TypesBlockContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.typeDescription`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeDescription?: (ctx: TypeDescriptionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.simpleType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleType?: (ctx: SimpleTypeContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.listTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListTypes?: (ctx: ListTypesContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.complexType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexType?: (ctx: ComplexTypeContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.hyperlinkType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHyperlinkType?: (ctx: HyperlinkTypeContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.spitter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpitter?: (ctx: SpitterContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.hyperlinkBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHyperlinkBlock?: (ctx: HyperlinkBlockContext) => Result;

    /**
     * Visit a parse tree produced by `BSLMethodDescriptionParser.startPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartPart?: (ctx: StartPartContext) => Result;
}

