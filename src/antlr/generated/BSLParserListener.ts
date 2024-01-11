// Generated from ./src/antlr/BSLParser.g4 by ANTLR 4.13.1

import type { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";

import { BslParserRuleContext } from "../../core/context";

import type { FileContext } from "./BSLParser";
import type { Preproc_nativeContext } from "./BSLParser";
import type { UsedLibContext } from "./BSLParser";
import type { UseContext } from "./BSLParser";
import type { ModuleAnnotationsContext } from "./BSLParser";
import type { ShebangContext } from "./BSLParser";
import type { RegionStartContext } from "./BSLParser";
import type { RegionEndContext } from "./BSLParser";
import type { RegionNameContext } from "./BSLParser";
import type { Preproc_ifContext } from "./BSLParser";
import type { Preproc_elsifContext } from "./BSLParser";
import type { Preproc_elseContext } from "./BSLParser";
import type { Preproc_endifContext } from "./BSLParser";
import type { Preproc_expressionContext } from "./BSLParser";
import type { Preproc_logicalOperandContext } from "./BSLParser";
import type { Preproc_logicalExpressionContext } from "./BSLParser";
import type { Preproc_symbolContext } from "./BSLParser";
import type { Preproc_unknownSymbolContext } from "./BSLParser";
import type { Preproc_boolOperationContext } from "./BSLParser";
import type { PreprocessorContext } from "./BSLParser";
import type { CompilerDirectiveSymbolContext } from "./BSLParser";
import type { CompilerDirectiveContext } from "./BSLParser";
import type { AnnotationNameContext } from "./BSLParser";
import type { AnnotationParamNameContext } from "./BSLParser";
import type { AnnotationContext } from "./BSLParser";
import type { AnnotationParamsContext } from "./BSLParser";
import type { AnnotationParamContext } from "./BSLParser";
import type { Var_nameContext } from "./BSLParser";
import type { ModuleVarsContext } from "./BSLParser";
import type { ModuleVarContext } from "./BSLParser";
import type { ModuleVarsListContext } from "./BSLParser";
import type { ModuleVarDeclarationContext } from "./BSLParser";
import type { SubVarsContext } from "./BSLParser";
import type { SubVarContext } from "./BSLParser";
import type { SubVarsListContext } from "./BSLParser";
import type { SubVarDeclarationContext } from "./BSLParser";
import type { SubNameContext } from "./BSLParser";
import type { SubsContext } from "./BSLParser";
import type { SubContext } from "./BSLParser";
import type { ProcedureContext } from "./BSLParser";
import type { FunctionContext } from "./BSLParser";
import type { ProcDeclarationContext } from "./BSLParser";
import type { FuncDeclarationContext } from "./BSLParser";
import type { SubCodeBlockContext } from "./BSLParser";
import type { ContinueStatementContext } from "./BSLParser";
import type { BreakStatementContext } from "./BSLParser";
import type { RaiseStatementContext } from "./BSLParser";
import type { IfStatementContext } from "./BSLParser";
import type { IfBranchContext } from "./BSLParser";
import type { ElsifBranchContext } from "./BSLParser";
import type { ElseBranchContext } from "./BSLParser";
import type { WhileStatementContext } from "./BSLParser";
import type { ForStatementContext } from "./BSLParser";
import type { ForEachStatementContext } from "./BSLParser";
import type { TryStatementContext } from "./BSLParser";
import type { ReturnStatementContext } from "./BSLParser";
import type { ExecuteStatementContext } from "./BSLParser";
import type { CallStatementContext } from "./BSLParser";
import type { WaitStatementContext } from "./BSLParser";
import type { LabelNameContext } from "./BSLParser";
import type { LabelContext } from "./BSLParser";
import type { GotoStatementContext } from "./BSLParser";
import type { TryCodeBlockContext } from "./BSLParser";
import type { ExceptCodeBlockContext } from "./BSLParser";
import type { EventContext } from "./BSLParser";
import type { HandlerContext } from "./BSLParser";
import type { AddHandlerStatementContext } from "./BSLParser";
import type { RemoveHandlerStatementContext } from "./BSLParser";
import type { TernaryOperatorContext } from "./BSLParser";
import type { WaitExpressionContext } from "./BSLParser";
import type { FileCodeBlockBeforeSubContext } from "./BSLParser";
import type { FileCodeBlockContext } from "./BSLParser";
import type { CodeBlockContext } from "./BSLParser";
import type { NumericContext } from "./BSLParser";
import type { ParamListContext } from "./BSLParser";
import type { ParamContext } from "./BSLParser";
import type { DefaultValueContext } from "./BSLParser";
import type { ConstValueContext } from "./BSLParser";
import type { MultilineStringContext } from "./BSLParser";
import type { StringContext } from "./BSLParser";
import type { StatementContext } from "./BSLParser";
import type { AssignmentContext } from "./BSLParser";
import type { CallParamListContext } from "./BSLParser";
import type { CallParamContext } from "./BSLParser";
import type { ExpressionContext } from "./BSLParser";
import type { OperationContext } from "./BSLParser";
import type { CompareOperationContext } from "./BSLParser";
import type { BoolOperationContext } from "./BSLParser";
import type { UnaryModifierContext } from "./BSLParser";
import type { MemberContext } from "./BSLParser";
import type { NewExpressionContext } from "./BSLParser";
import type { TypeNameContext } from "./BSLParser";
import type { MethodCallContext } from "./BSLParser";
import type { GlobalMethodCallContext } from "./BSLParser";
import type { MethodNameContext } from "./BSLParser";
import type { ComplexIdentifierContext } from "./BSLParser";
import type { ModifierContext } from "./BSLParser";
import type { AcceptorContext } from "./BSLParser";
import type { LValueContext } from "./BSLParser";
import type { AccessCallContext } from "./BSLParser";
import type { AccessIndexContext } from "./BSLParser";
import type { AccessPropertyContext } from "./BSLParser";
import type { DoCallContext } from "./BSLParser";
import type { CompoundStatementContext } from "./BSLParser";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `BSLParser`.
 */
export class BSLParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `BSLParser.file`.
     * @param ctx the parse tree
     */
    enterFile?: (ctx: FileContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.file`.
     * @param ctx the parse tree
     */
    exitFile?: (ctx: FileContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_native`.
     * @param ctx the parse tree
     */
    enterPreproc_native?: (ctx: Preproc_nativeContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_native`.
     * @param ctx the parse tree
     */
    exitPreproc_native?: (ctx: Preproc_nativeContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.usedLib`.
     * @param ctx the parse tree
     */
    enterUsedLib?: (ctx: UsedLibContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.usedLib`.
     * @param ctx the parse tree
     */
    exitUsedLib?: (ctx: UsedLibContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.use`.
     * @param ctx the parse tree
     */
    enterUse?: (ctx: UseContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.use`.
     * @param ctx the parse tree
     */
    exitUse?: (ctx: UseContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.moduleAnnotations`.
     * @param ctx the parse tree
     */
    enterModuleAnnotations?: (ctx: ModuleAnnotationsContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.moduleAnnotations`.
     * @param ctx the parse tree
     */
    exitModuleAnnotations?: (ctx: ModuleAnnotationsContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.shebang`.
     * @param ctx the parse tree
     */
    enterShebang?: (ctx: ShebangContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.shebang`.
     * @param ctx the parse tree
     */
    exitShebang?: (ctx: ShebangContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.regionStart`.
     * @param ctx the parse tree
     */
    enterRegionStart?: (ctx: RegionStartContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.regionStart`.
     * @param ctx the parse tree
     */
    exitRegionStart?: (ctx: RegionStartContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.regionEnd`.
     * @param ctx the parse tree
     */
    enterRegionEnd?: (ctx: RegionEndContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.regionEnd`.
     * @param ctx the parse tree
     */
    exitRegionEnd?: (ctx: RegionEndContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.regionName`.
     * @param ctx the parse tree
     */
    enterRegionName?: (ctx: RegionNameContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.regionName`.
     * @param ctx the parse tree
     */
    exitRegionName?: (ctx: RegionNameContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_if`.
     * @param ctx the parse tree
     */
    enterPreproc_if?: (ctx: Preproc_ifContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_if`.
     * @param ctx the parse tree
     */
    exitPreproc_if?: (ctx: Preproc_ifContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_elsif`.
     * @param ctx the parse tree
     */
    enterPreproc_elsif?: (ctx: Preproc_elsifContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_elsif`.
     * @param ctx the parse tree
     */
    exitPreproc_elsif?: (ctx: Preproc_elsifContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_else`.
     * @param ctx the parse tree
     */
    enterPreproc_else?: (ctx: Preproc_elseContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_else`.
     * @param ctx the parse tree
     */
    exitPreproc_else?: (ctx: Preproc_elseContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_endif`.
     * @param ctx the parse tree
     */
    enterPreproc_endif?: (ctx: Preproc_endifContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_endif`.
     * @param ctx the parse tree
     */
    exitPreproc_endif?: (ctx: Preproc_endifContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_expression`.
     * @param ctx the parse tree
     */
    enterPreproc_expression?: (ctx: Preproc_expressionContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_expression`.
     * @param ctx the parse tree
     */
    exitPreproc_expression?: (ctx: Preproc_expressionContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_logicalOperand`.
     * @param ctx the parse tree
     */
    enterPreproc_logicalOperand?: (ctx: Preproc_logicalOperandContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_logicalOperand`.
     * @param ctx the parse tree
     */
    exitPreproc_logicalOperand?: (ctx: Preproc_logicalOperandContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_logicalExpression`.
     * @param ctx the parse tree
     */
    enterPreproc_logicalExpression?: (ctx: Preproc_logicalExpressionContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_logicalExpression`.
     * @param ctx the parse tree
     */
    exitPreproc_logicalExpression?: (ctx: Preproc_logicalExpressionContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_symbol`.
     * @param ctx the parse tree
     */
    enterPreproc_symbol?: (ctx: Preproc_symbolContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_symbol`.
     * @param ctx the parse tree
     */
    exitPreproc_symbol?: (ctx: Preproc_symbolContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_unknownSymbol`.
     * @param ctx the parse tree
     */
    enterPreproc_unknownSymbol?: (ctx: Preproc_unknownSymbolContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_unknownSymbol`.
     * @param ctx the parse tree
     */
    exitPreproc_unknownSymbol?: (ctx: Preproc_unknownSymbolContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preproc_boolOperation`.
     * @param ctx the parse tree
     */
    enterPreproc_boolOperation?: (ctx: Preproc_boolOperationContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preproc_boolOperation`.
     * @param ctx the parse tree
     */
    exitPreproc_boolOperation?: (ctx: Preproc_boolOperationContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.preprocessor`.
     * @param ctx the parse tree
     */
    enterPreprocessor?: (ctx: PreprocessorContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.preprocessor`.
     * @param ctx the parse tree
     */
    exitPreprocessor?: (ctx: PreprocessorContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.compilerDirectiveSymbol`.
     * @param ctx the parse tree
     */
    enterCompilerDirectiveSymbol?: (ctx: CompilerDirectiveSymbolContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.compilerDirectiveSymbol`.
     * @param ctx the parse tree
     */
    exitCompilerDirectiveSymbol?: (ctx: CompilerDirectiveSymbolContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.compilerDirective`.
     * @param ctx the parse tree
     */
    enterCompilerDirective?: (ctx: CompilerDirectiveContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.compilerDirective`.
     * @param ctx the parse tree
     */
    exitCompilerDirective?: (ctx: CompilerDirectiveContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.annotationName`.
     * @param ctx the parse tree
     */
    enterAnnotationName?: (ctx: AnnotationNameContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.annotationName`.
     * @param ctx the parse tree
     */
    exitAnnotationName?: (ctx: AnnotationNameContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.annotationParamName`.
     * @param ctx the parse tree
     */
    enterAnnotationParamName?: (ctx: AnnotationParamNameContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.annotationParamName`.
     * @param ctx the parse tree
     */
    exitAnnotationParamName?: (ctx: AnnotationParamNameContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.annotation`.
     * @param ctx the parse tree
     */
    enterAnnotation?: (ctx: AnnotationContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.annotation`.
     * @param ctx the parse tree
     */
    exitAnnotation?: (ctx: AnnotationContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.annotationParams`.
     * @param ctx the parse tree
     */
    enterAnnotationParams?: (ctx: AnnotationParamsContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.annotationParams`.
     * @param ctx the parse tree
     */
    exitAnnotationParams?: (ctx: AnnotationParamsContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.annotationParam`.
     * @param ctx the parse tree
     */
    enterAnnotationParam?: (ctx: AnnotationParamContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.annotationParam`.
     * @param ctx the parse tree
     */
    exitAnnotationParam?: (ctx: AnnotationParamContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.var_name`.
     * @param ctx the parse tree
     */
    enterVar_name?: (ctx: Var_nameContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.var_name`.
     * @param ctx the parse tree
     */
    exitVar_name?: (ctx: Var_nameContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.moduleVars`.
     * @param ctx the parse tree
     */
    enterModuleVars?: (ctx: ModuleVarsContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.moduleVars`.
     * @param ctx the parse tree
     */
    exitModuleVars?: (ctx: ModuleVarsContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.moduleVar`.
     * @param ctx the parse tree
     */
    enterModuleVar?: (ctx: ModuleVarContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.moduleVar`.
     * @param ctx the parse tree
     */
    exitModuleVar?: (ctx: ModuleVarContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.moduleVarsList`.
     * @param ctx the parse tree
     */
    enterModuleVarsList?: (ctx: ModuleVarsListContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.moduleVarsList`.
     * @param ctx the parse tree
     */
    exitModuleVarsList?: (ctx: ModuleVarsListContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.moduleVarDeclaration`.
     * @param ctx the parse tree
     */
    enterModuleVarDeclaration?: (ctx: ModuleVarDeclarationContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.moduleVarDeclaration`.
     * @param ctx the parse tree
     */
    exitModuleVarDeclaration?: (ctx: ModuleVarDeclarationContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.subVars`.
     * @param ctx the parse tree
     */
    enterSubVars?: (ctx: SubVarsContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.subVars`.
     * @param ctx the parse tree
     */
    exitSubVars?: (ctx: SubVarsContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.subVar`.
     * @param ctx the parse tree
     */
    enterSubVar?: (ctx: SubVarContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.subVar`.
     * @param ctx the parse tree
     */
    exitSubVar?: (ctx: SubVarContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.subVarsList`.
     * @param ctx the parse tree
     */
    enterSubVarsList?: (ctx: SubVarsListContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.subVarsList`.
     * @param ctx the parse tree
     */
    exitSubVarsList?: (ctx: SubVarsListContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.subVarDeclaration`.
     * @param ctx the parse tree
     */
    enterSubVarDeclaration?: (ctx: SubVarDeclarationContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.subVarDeclaration`.
     * @param ctx the parse tree
     */
    exitSubVarDeclaration?: (ctx: SubVarDeclarationContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.subName`.
     * @param ctx the parse tree
     */
    enterSubName?: (ctx: SubNameContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.subName`.
     * @param ctx the parse tree
     */
    exitSubName?: (ctx: SubNameContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.subs`.
     * @param ctx the parse tree
     */
    enterSubs?: (ctx: SubsContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.subs`.
     * @param ctx the parse tree
     */
    exitSubs?: (ctx: SubsContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.sub`.
     * @param ctx the parse tree
     */
    enterSub?: (ctx: SubContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.sub`.
     * @param ctx the parse tree
     */
    exitSub?: (ctx: SubContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.procedure`.
     * @param ctx the parse tree
     */
    enterProcedure?: (ctx: ProcedureContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.procedure`.
     * @param ctx the parse tree
     */
    exitProcedure?: (ctx: ProcedureContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.function`.
     * @param ctx the parse tree
     */
    enterFunction?: (ctx: FunctionContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.function`.
     * @param ctx the parse tree
     */
    exitFunction?: (ctx: FunctionContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.procDeclaration`.
     * @param ctx the parse tree
     */
    enterProcDeclaration?: (ctx: ProcDeclarationContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.procDeclaration`.
     * @param ctx the parse tree
     */
    exitProcDeclaration?: (ctx: ProcDeclarationContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.funcDeclaration`.
     * @param ctx the parse tree
     */
    enterFuncDeclaration?: (ctx: FuncDeclarationContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.funcDeclaration`.
     * @param ctx the parse tree
     */
    exitFuncDeclaration?: (ctx: FuncDeclarationContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.subCodeBlock`.
     * @param ctx the parse tree
     */
    enterSubCodeBlock?: (ctx: SubCodeBlockContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.subCodeBlock`.
     * @param ctx the parse tree
     */
    exitSubCodeBlock?: (ctx: SubCodeBlockContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.continueStatement`.
     * @param ctx the parse tree
     */
    enterContinueStatement?: (ctx: ContinueStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.continueStatement`.
     * @param ctx the parse tree
     */
    exitContinueStatement?: (ctx: ContinueStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.breakStatement`.
     * @param ctx the parse tree
     */
    enterBreakStatement?: (ctx: BreakStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.breakStatement`.
     * @param ctx the parse tree
     */
    exitBreakStatement?: (ctx: BreakStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.raiseStatement`.
     * @param ctx the parse tree
     */
    enterRaiseStatement?: (ctx: RaiseStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.raiseStatement`.
     * @param ctx the parse tree
     */
    exitRaiseStatement?: (ctx: RaiseStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.ifStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.ifStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.ifBranch`.
     * @param ctx the parse tree
     */
    enterIfBranch?: (ctx: IfBranchContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.ifBranch`.
     * @param ctx the parse tree
     */
    exitIfBranch?: (ctx: IfBranchContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.elsifBranch`.
     * @param ctx the parse tree
     */
    enterElsifBranch?: (ctx: ElsifBranchContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.elsifBranch`.
     * @param ctx the parse tree
     */
    exitElsifBranch?: (ctx: ElsifBranchContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.elseBranch`.
     * @param ctx the parse tree
     */
    enterElseBranch?: (ctx: ElseBranchContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.elseBranch`.
     * @param ctx the parse tree
     */
    exitElseBranch?: (ctx: ElseBranchContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.whileStatement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.whileStatement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.forStatement`.
     * @param ctx the parse tree
     */
    enterForStatement?: (ctx: ForStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.forStatement`.
     * @param ctx the parse tree
     */
    exitForStatement?: (ctx: ForStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.forEachStatement`.
     * @param ctx the parse tree
     */
    enterForEachStatement?: (ctx: ForEachStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.forEachStatement`.
     * @param ctx the parse tree
     */
    exitForEachStatement?: (ctx: ForEachStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.tryStatement`.
     * @param ctx the parse tree
     */
    enterTryStatement?: (ctx: TryStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.tryStatement`.
     * @param ctx the parse tree
     */
    exitTryStatement?: (ctx: TryStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.executeStatement`.
     * @param ctx the parse tree
     */
    enterExecuteStatement?: (ctx: ExecuteStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.executeStatement`.
     * @param ctx the parse tree
     */
    exitExecuteStatement?: (ctx: ExecuteStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.callStatement`.
     * @param ctx the parse tree
     */
    enterCallStatement?: (ctx: CallStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.callStatement`.
     * @param ctx the parse tree
     */
    exitCallStatement?: (ctx: CallStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.waitStatement`.
     * @param ctx the parse tree
     */
    enterWaitStatement?: (ctx: WaitStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.waitStatement`.
     * @param ctx the parse tree
     */
    exitWaitStatement?: (ctx: WaitStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.labelName`.
     * @param ctx the parse tree
     */
    enterLabelName?: (ctx: LabelNameContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.labelName`.
     * @param ctx the parse tree
     */
    exitLabelName?: (ctx: LabelNameContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.label`.
     * @param ctx the parse tree
     */
    enterLabel?: (ctx: LabelContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.label`.
     * @param ctx the parse tree
     */
    exitLabel?: (ctx: LabelContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.gotoStatement`.
     * @param ctx the parse tree
     */
    enterGotoStatement?: (ctx: GotoStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.gotoStatement`.
     * @param ctx the parse tree
     */
    exitGotoStatement?: (ctx: GotoStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.tryCodeBlock`.
     * @param ctx the parse tree
     */
    enterTryCodeBlock?: (ctx: TryCodeBlockContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.tryCodeBlock`.
     * @param ctx the parse tree
     */
    exitTryCodeBlock?: (ctx: TryCodeBlockContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.exceptCodeBlock`.
     * @param ctx the parse tree
     */
    enterExceptCodeBlock?: (ctx: ExceptCodeBlockContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.exceptCodeBlock`.
     * @param ctx the parse tree
     */
    exitExceptCodeBlock?: (ctx: ExceptCodeBlockContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.event`.
     * @param ctx the parse tree
     */
    enterEvent?: (ctx: EventContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.event`.
     * @param ctx the parse tree
     */
    exitEvent?: (ctx: EventContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.handler`.
     * @param ctx the parse tree
     */
    enterHandler?: (ctx: HandlerContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.handler`.
     * @param ctx the parse tree
     */
    exitHandler?: (ctx: HandlerContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.addHandlerStatement`.
     * @param ctx the parse tree
     */
    enterAddHandlerStatement?: (ctx: AddHandlerStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.addHandlerStatement`.
     * @param ctx the parse tree
     */
    exitAddHandlerStatement?: (ctx: AddHandlerStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.removeHandlerStatement`.
     * @param ctx the parse tree
     */
    enterRemoveHandlerStatement?: (ctx: RemoveHandlerStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.removeHandlerStatement`.
     * @param ctx the parse tree
     */
    exitRemoveHandlerStatement?: (ctx: RemoveHandlerStatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.ternaryOperator`.
     * @param ctx the parse tree
     */
    enterTernaryOperator?: (ctx: TernaryOperatorContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.ternaryOperator`.
     * @param ctx the parse tree
     */
    exitTernaryOperator?: (ctx: TernaryOperatorContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.waitExpression`.
     * @param ctx the parse tree
     */
    enterWaitExpression?: (ctx: WaitExpressionContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.waitExpression`.
     * @param ctx the parse tree
     */
    exitWaitExpression?: (ctx: WaitExpressionContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.fileCodeBlockBeforeSub`.
     * @param ctx the parse tree
     */
    enterFileCodeBlockBeforeSub?: (ctx: FileCodeBlockBeforeSubContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.fileCodeBlockBeforeSub`.
     * @param ctx the parse tree
     */
    exitFileCodeBlockBeforeSub?: (ctx: FileCodeBlockBeforeSubContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.fileCodeBlock`.
     * @param ctx the parse tree
     */
    enterFileCodeBlock?: (ctx: FileCodeBlockContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.fileCodeBlock`.
     * @param ctx the parse tree
     */
    exitFileCodeBlock?: (ctx: FileCodeBlockContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.codeBlock`.
     * @param ctx the parse tree
     */
    enterCodeBlock?: (ctx: CodeBlockContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.codeBlock`.
     * @param ctx the parse tree
     */
    exitCodeBlock?: (ctx: CodeBlockContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.numeric`.
     * @param ctx the parse tree
     */
    enterNumeric?: (ctx: NumericContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.numeric`.
     * @param ctx the parse tree
     */
    exitNumeric?: (ctx: NumericContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.paramList`.
     * @param ctx the parse tree
     */
    enterParamList?: (ctx: ParamListContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.paramList`.
     * @param ctx the parse tree
     */
    exitParamList?: (ctx: ParamListContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.param`.
     * @param ctx the parse tree
     */
    enterParam?: (ctx: ParamContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.param`.
     * @param ctx the parse tree
     */
    exitParam?: (ctx: ParamContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.defaultValue`.
     * @param ctx the parse tree
     */
    enterDefaultValue?: (ctx: DefaultValueContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.defaultValue`.
     * @param ctx the parse tree
     */
    exitDefaultValue?: (ctx: DefaultValueContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.constValue`.
     * @param ctx the parse tree
     */
    enterConstValue?: (ctx: ConstValueContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.constValue`.
     * @param ctx the parse tree
     */
    exitConstValue?: (ctx: ConstValueContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.multilineString`.
     * @param ctx the parse tree
     */
    enterMultilineString?: (ctx: MultilineStringContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.multilineString`.
     * @param ctx the parse tree
     */
    exitMultilineString?: (ctx: MultilineStringContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.string`.
     * @param ctx the parse tree
     */
    enterString?: (ctx: StringContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.string`.
     * @param ctx the parse tree
     */
    exitString?: (ctx: StringContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.callParamList`.
     * @param ctx the parse tree
     */
    enterCallParamList?: (ctx: CallParamListContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.callParamList`.
     * @param ctx the parse tree
     */
    exitCallParamList?: (ctx: CallParamListContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.callParam`.
     * @param ctx the parse tree
     */
    enterCallParam?: (ctx: CallParamContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.callParam`.
     * @param ctx the parse tree
     */
    exitCallParam?: (ctx: CallParamContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.operation`.
     * @param ctx the parse tree
     */
    enterOperation?: (ctx: OperationContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.operation`.
     * @param ctx the parse tree
     */
    exitOperation?: (ctx: OperationContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.compareOperation`.
     * @param ctx the parse tree
     */
    enterCompareOperation?: (ctx: CompareOperationContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.compareOperation`.
     * @param ctx the parse tree
     */
    exitCompareOperation?: (ctx: CompareOperationContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.boolOperation`.
     * @param ctx the parse tree
     */
    enterBoolOperation?: (ctx: BoolOperationContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.boolOperation`.
     * @param ctx the parse tree
     */
    exitBoolOperation?: (ctx: BoolOperationContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.unaryModifier`.
     * @param ctx the parse tree
     */
    enterUnaryModifier?: (ctx: UnaryModifierContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.unaryModifier`.
     * @param ctx the parse tree
     */
    exitUnaryModifier?: (ctx: UnaryModifierContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.member`.
     * @param ctx the parse tree
     */
    enterMember?: (ctx: MemberContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.member`.
     * @param ctx the parse tree
     */
    exitMember?: (ctx: MemberContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.newExpression`.
     * @param ctx the parse tree
     */
    enterNewExpression?: (ctx: NewExpressionContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.newExpression`.
     * @param ctx the parse tree
     */
    exitNewExpression?: (ctx: NewExpressionContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.typeName`.
     * @param ctx the parse tree
     */
    enterTypeName?: (ctx: TypeNameContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.typeName`.
     * @param ctx the parse tree
     */
    exitTypeName?: (ctx: TypeNameContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.methodCall`.
     * @param ctx the parse tree
     */
    enterMethodCall?: (ctx: MethodCallContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.methodCall`.
     * @param ctx the parse tree
     */
    exitMethodCall?: (ctx: MethodCallContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.globalMethodCall`.
     * @param ctx the parse tree
     */
    enterGlobalMethodCall?: (ctx: GlobalMethodCallContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.globalMethodCall`.
     * @param ctx the parse tree
     */
    exitGlobalMethodCall?: (ctx: GlobalMethodCallContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.methodName`.
     * @param ctx the parse tree
     */
    enterMethodName?: (ctx: MethodNameContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.methodName`.
     * @param ctx the parse tree
     */
    exitMethodName?: (ctx: MethodNameContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.complexIdentifier`.
     * @param ctx the parse tree
     */
    enterComplexIdentifier?: (ctx: ComplexIdentifierContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.complexIdentifier`.
     * @param ctx the parse tree
     */
    exitComplexIdentifier?: (ctx: ComplexIdentifierContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.modifier`.
     * @param ctx the parse tree
     */
    enterModifier?: (ctx: ModifierContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.modifier`.
     * @param ctx the parse tree
     */
    exitModifier?: (ctx: ModifierContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.acceptor`.
     * @param ctx the parse tree
     */
    enterAcceptor?: (ctx: AcceptorContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.acceptor`.
     * @param ctx the parse tree
     */
    exitAcceptor?: (ctx: AcceptorContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.lValue`.
     * @param ctx the parse tree
     */
    enterLValue?: (ctx: LValueContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.lValue`.
     * @param ctx the parse tree
     */
    exitLValue?: (ctx: LValueContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.accessCall`.
     * @param ctx the parse tree
     */
    enterAccessCall?: (ctx: AccessCallContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.accessCall`.
     * @param ctx the parse tree
     */
    exitAccessCall?: (ctx: AccessCallContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.accessIndex`.
     * @param ctx the parse tree
     */
    enterAccessIndex?: (ctx: AccessIndexContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.accessIndex`.
     * @param ctx the parse tree
     */
    exitAccessIndex?: (ctx: AccessIndexContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.accessProperty`.
     * @param ctx the parse tree
     */
    enterAccessProperty?: (ctx: AccessPropertyContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.accessProperty`.
     * @param ctx the parse tree
     */
    exitAccessProperty?: (ctx: AccessPropertyContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.doCall`.
     * @param ctx the parse tree
     */
    enterDoCall?: (ctx: DoCallContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.doCall`.
     * @param ctx the parse tree
     */
    exitDoCall?: (ctx: DoCallContext) => void;

    /**
     * Enter a parse tree produced by `BSLParser.compoundStatement`.
     * @param ctx the parse tree
     */
    enterCompoundStatement?: (ctx: CompoundStatementContext) => void;

    /**
     * Exit a parse tree produced by `BSLParser.compoundStatement`.
     * @param ctx the parse tree
     */
    exitCompoundStatement?: (ctx: CompoundStatementContext) => void;

    visitTerminal(node: TerminalNode): void {}

    visitErrorNode(node: ErrorNode): void {}

    enterEveryRule(node: ParserRuleContext): void {}

    exitEveryRule(node: ParserRuleContext): void {}
}
