// Generated from ./src/antlr/BSLParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";

import { BslParserRuleContext } from "../../core/context.js";

import type { FileContext } from "./BSLParser.js";
import type { Preproc_nativeContext } from "./BSLParser.js";
import type { UsedLibContext } from "./BSLParser.js";
import type { UseContext } from "./BSLParser.js";
import type { ModuleAnnotationsContext } from "./BSLParser.js";
import type { ShebangContext } from "./BSLParser.js";
import type { RegionStartContext } from "./BSLParser.js";
import type { RegionEndContext } from "./BSLParser.js";
import type { RegionNameContext } from "./BSLParser.js";
import type { Preproc_ifContext } from "./BSLParser.js";
import type { Preproc_elsifContext } from "./BSLParser.js";
import type { Preproc_elseContext } from "./BSLParser.js";
import type { Preproc_endifContext } from "./BSLParser.js";
import type { Preproc_expressionContext } from "./BSLParser.js";
import type { Preproc_logicalOperandContext } from "./BSLParser.js";
import type { Preproc_logicalExpressionContext } from "./BSLParser.js";
import type { Preproc_symbolContext } from "./BSLParser.js";
import type { Preproc_unknownSymbolContext } from "./BSLParser.js";
import type { Preproc_boolOperationContext } from "./BSLParser.js";
import type { PreprocessorContext } from "./BSLParser.js";
import type { CompilerDirectiveSymbolContext } from "./BSLParser.js";
import type { CompilerDirectiveContext } from "./BSLParser.js";
import type { AnnotationNameContext } from "./BSLParser.js";
import type { AnnotationParamNameContext } from "./BSLParser.js";
import type { AnnotationContext } from "./BSLParser.js";
import type { AnnotationParamsContext } from "./BSLParser.js";
import type { AnnotationParamContext } from "./BSLParser.js";
import type { Var_nameContext } from "./BSLParser.js";
import type { ModuleVarsContext } from "./BSLParser.js";
import type { ModuleVarContext } from "./BSLParser.js";
import type { ModuleVarsListContext } from "./BSLParser.js";
import type { ModuleVarDeclarationContext } from "./BSLParser.js";
import type { SubVarsContext } from "./BSLParser.js";
import type { SubVarContext } from "./BSLParser.js";
import type { SubVarsListContext } from "./BSLParser.js";
import type { SubVarDeclarationContext } from "./BSLParser.js";
import type { SubNameContext } from "./BSLParser.js";
import type { SubsContext } from "./BSLParser.js";
import type { SubContext } from "./BSLParser.js";
import type { ProcedureContext } from "./BSLParser.js";
import type { FunctionContext } from "./BSLParser.js";
import type { ProcDeclarationContext } from "./BSLParser.js";
import type { FuncDeclarationContext } from "./BSLParser.js";
import type { SubCodeBlockContext } from "./BSLParser.js";
import type { ContinueStatementContext } from "./BSLParser.js";
import type { BreakStatementContext } from "./BSLParser.js";
import type { RaiseStatementContext } from "./BSLParser.js";
import type { IfStatementContext } from "./BSLParser.js";
import type { IfBranchContext } from "./BSLParser.js";
import type { ElsifBranchContext } from "./BSLParser.js";
import type { ElseBranchContext } from "./BSLParser.js";
import type { WhileStatementContext } from "./BSLParser.js";
import type { ForStatementContext } from "./BSLParser.js";
import type { ForEachStatementContext } from "./BSLParser.js";
import type { TryStatementContext } from "./BSLParser.js";
import type { ReturnStatementContext } from "./BSLParser.js";
import type { ExecuteStatementContext } from "./BSLParser.js";
import type { CallStatementContext } from "./BSLParser.js";
import type { WaitStatementContext } from "./BSLParser.js";
import type { LabelNameContext } from "./BSLParser.js";
import type { LabelContext } from "./BSLParser.js";
import type { GotoStatementContext } from "./BSLParser.js";
import type { TryCodeBlockContext } from "./BSLParser.js";
import type { ExceptCodeBlockContext } from "./BSLParser.js";
import type { EventContext } from "./BSLParser.js";
import type { HandlerContext } from "./BSLParser.js";
import type { AddHandlerStatementContext } from "./BSLParser.js";
import type { RemoveHandlerStatementContext } from "./BSLParser.js";
import type { TernaryOperatorContext } from "./BSLParser.js";
import type { WaitExpressionContext } from "./BSLParser.js";
import type { FileCodeBlockBeforeSubContext } from "./BSLParser.js";
import type { FileCodeBlockContext } from "./BSLParser.js";
import type { CodeBlockContext } from "./BSLParser.js";
import type { NumericContext } from "./BSLParser.js";
import type { ParamListContext } from "./BSLParser.js";
import type { ParamContext } from "./BSLParser.js";
import type { DefaultValueContext } from "./BSLParser.js";
import type { ConstValueContext } from "./BSLParser.js";
import type { MultilineStringContext } from "./BSLParser.js";
import type { StringContext } from "./BSLParser.js";
import type { StatementContext } from "./BSLParser.js";
import type { AssignmentContext } from "./BSLParser.js";
import type { CallParamListContext } from "./BSLParser.js";
import type { CallParamContext } from "./BSLParser.js";
import type { ExpressionContext } from "./BSLParser.js";
import type { OperationContext } from "./BSLParser.js";
import type { CompareOperationContext } from "./BSLParser.js";
import type { BoolOperationContext } from "./BSLParser.js";
import type { UnaryModifierContext } from "./BSLParser.js";
import type { MemberContext } from "./BSLParser.js";
import type { NewExpressionContext } from "./BSLParser.js";
import type { TypeNameContext } from "./BSLParser.js";
import type { MethodCallContext } from "./BSLParser.js";
import type { GlobalMethodCallContext } from "./BSLParser.js";
import type { MethodNameContext } from "./BSLParser.js";
import type { ComplexIdentifierContext } from "./BSLParser.js";
import type { ModifierContext } from "./BSLParser.js";
import type { AcceptorContext } from "./BSLParser.js";
import type { LValueContext } from "./BSLParser.js";
import type { AccessCallContext } from "./BSLParser.js";
import type { AccessIndexContext } from "./BSLParser.js";
import type { AccessPropertyContext } from "./BSLParser.js";
import type { DoCallContext } from "./BSLParser.js";
import type { CompoundStatementContext } from "./BSLParser.js";

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BSLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class BSLParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `BSLParser.file`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFile?: (ctx: FileContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_native`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_native?: (ctx: Preproc_nativeContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.usedLib`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsedLib?: (ctx: UsedLibContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.use`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUse?: (ctx: UseContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.moduleAnnotations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleAnnotations?: (ctx: ModuleAnnotationsContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.shebang`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShebang?: (ctx: ShebangContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.regionStart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegionStart?: (ctx: RegionStartContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.regionEnd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegionEnd?: (ctx: RegionEndContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.regionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegionName?: (ctx: RegionNameContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_if`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_if?: (ctx: Preproc_ifContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_elsif`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_elsif?: (ctx: Preproc_elsifContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_else`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_else?: (ctx: Preproc_elseContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_endif`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_endif?: (ctx: Preproc_endifContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_expression?: (ctx: Preproc_expressionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_logicalOperand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_logicalOperand?: (ctx: Preproc_logicalOperandContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_logicalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_logicalExpression?: (ctx: Preproc_logicalExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_symbol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_symbol?: (ctx: Preproc_symbolContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_unknownSymbol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_unknownSymbol?: (ctx: Preproc_unknownSymbolContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preproc_boolOperation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreproc_boolOperation?: (ctx: Preproc_boolOperationContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.preprocessor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreprocessor?: (ctx: PreprocessorContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.compilerDirectiveSymbol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompilerDirectiveSymbol?: (ctx: CompilerDirectiveSymbolContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.compilerDirective`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompilerDirective?: (ctx: CompilerDirectiveContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.annotationName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationName?: (ctx: AnnotationNameContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.annotationParamName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationParamName?: (ctx: AnnotationParamNameContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.annotation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotation?: (ctx: AnnotationContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.annotationParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationParams?: (ctx: AnnotationParamsContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.annotationParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationParam?: (ctx: AnnotationParamContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.var_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_name?: (ctx: Var_nameContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.moduleVars`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleVars?: (ctx: ModuleVarsContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.moduleVar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleVar?: (ctx: ModuleVarContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.moduleVarsList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleVarsList?: (ctx: ModuleVarsListContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.moduleVarDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleVarDeclaration?: (ctx: ModuleVarDeclarationContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.subVars`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubVars?: (ctx: SubVarsContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.subVar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubVar?: (ctx: SubVarContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.subVarsList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubVarsList?: (ctx: SubVarsListContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.subVarDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubVarDeclaration?: (ctx: SubVarDeclarationContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.subName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubName?: (ctx: SubNameContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.subs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubs?: (ctx: SubsContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.sub`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSub?: (ctx: SubContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.procedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure?: (ctx: ProcedureContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction?: (ctx: FunctionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.procDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcDeclaration?: (ctx: ProcDeclarationContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.funcDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncDeclaration?: (ctx: FuncDeclarationContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.subCodeBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubCodeBlock?: (ctx: SubCodeBlockContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.continueStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.breakStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.raiseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRaiseStatement?: (ctx: RaiseStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.ifBranch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfBranch?: (ctx: IfBranchContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.elsifBranch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElsifBranch?: (ctx: ElsifBranchContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.elseBranch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElseBranch?: (ctx: ElseBranchContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.whileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.forStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStatement?: (ctx: ForStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.forEachStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForEachStatement?: (ctx: ForEachStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.tryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTryStatement?: (ctx: TryStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.executeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecuteStatement?: (ctx: ExecuteStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.callStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallStatement?: (ctx: CallStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.waitStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWaitStatement?: (ctx: WaitStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.labelName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelName?: (ctx: LabelNameContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabel?: (ctx: LabelContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.gotoStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGotoStatement?: (ctx: GotoStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.tryCodeBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTryCodeBlock?: (ctx: TryCodeBlockContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.exceptCodeBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExceptCodeBlock?: (ctx: ExceptCodeBlockContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.event`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent?: (ctx: EventContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.handler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandler?: (ctx: HandlerContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.addHandlerStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddHandlerStatement?: (ctx: AddHandlerStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.removeHandlerStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveHandlerStatement?: (ctx: RemoveHandlerStatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.ternaryOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTernaryOperator?: (ctx: TernaryOperatorContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.waitExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWaitExpression?: (ctx: WaitExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.fileCodeBlockBeforeSub`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileCodeBlockBeforeSub?: (ctx: FileCodeBlockBeforeSubContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.fileCodeBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileCodeBlock?: (ctx: FileCodeBlockContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.codeBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCodeBlock?: (ctx: CodeBlockContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.numeric`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric?: (ctx: NumericContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.paramList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamList?: (ctx: ParamListContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.defaultValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultValue?: (ctx: DefaultValueContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.constValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstValue?: (ctx: ConstValueContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.multilineString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultilineString?: (ctx: MultilineStringContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString?: (ctx: StringContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.callParamList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallParamList?: (ctx: CallParamListContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.callParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallParam?: (ctx: CallParamContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.operation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperation?: (ctx: OperationContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.compareOperation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompareOperation?: (ctx: CompareOperationContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.boolOperation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolOperation?: (ctx: BoolOperationContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.unaryModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryModifier?: (ctx: UnaryModifierContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.member`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMember?: (ctx: MemberContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.newExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNewExpression?: (ctx: NewExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.typeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeName?: (ctx: TypeNameContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.methodCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodCall?: (ctx: MethodCallContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.globalMethodCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGlobalMethodCall?: (ctx: GlobalMethodCallContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.methodName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodName?: (ctx: MethodNameContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.complexIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexIdentifier?: (ctx: ComplexIdentifierContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier?: (ctx: ModifierContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.acceptor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAcceptor?: (ctx: AcceptorContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.lValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLValue?: (ctx: LValueContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.accessCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccessCall?: (ctx: AccessCallContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.accessIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccessIndex?: (ctx: AccessIndexContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.accessProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccessProperty?: (ctx: AccessPropertyContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.doCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoCall?: (ctx: DoCallContext) => Result;

    /**
     * Visit a parse tree produced by `BSLParser.compoundStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;
}
