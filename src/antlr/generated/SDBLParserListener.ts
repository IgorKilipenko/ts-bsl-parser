// Generated from ./src/antlr/SDBLParser.g4 by ANTLR 4.13.1

import type { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";

import { BslParserRuleContext } from "../../core/context.js";

import type { QueryPackageContext } from "./SDBLParser.js";
import type { QueriesContext } from "./SDBLParser.js";
import type { DropTableQueryContext } from "./SDBLParser.js";
import type { SelectQueryContext } from "./SDBLParser.js";
import type { SubqueryContext } from "./SDBLParser.js";
import type { UnionContext } from "./SDBLParser.js";
import type { QueryContext } from "./SDBLParser.js";
import type { LimitationsContext } from "./SDBLParser.js";
import type { TopContext } from "./SDBLParser.js";
import type { SelectedFieldsContext } from "./SDBLParser.js";
import type { SelectedFieldContext } from "./SDBLParser.js";
import type { AsteriskFieldContext } from "./SDBLParser.js";
import type { ExpressionFieldContext } from "./SDBLParser.js";
import type { ColumnFieldContext } from "./SDBLParser.js";
import type { EmptyTableFieldContext } from "./SDBLParser.js";
import type { EmptyTableColumnsContext } from "./SDBLParser.js";
import type { InlineTableFieldContext } from "./SDBLParser.js";
import type { RecordAutoNumberFunctionContext } from "./SDBLParser.js";
import type { GroupByItemContext } from "./SDBLParser.js";
import type { IndexingItemContext } from "./SDBLParser.js";
import type { OrderByContext } from "./SDBLParser.js";
import type { OrdersByExpessionContext } from "./SDBLParser.js";
import type { TotalByContext } from "./SDBLParser.js";
import type { TotalsGroupContext } from "./SDBLParser.js";
import type { PeriodicContext } from "./SDBLParser.js";
import type { ColumnContext } from "./SDBLParser.js";
import type { ExpressionContext } from "./SDBLParser.js";
import type { PrimitiveExpressionContext } from "./SDBLParser.js";
import type { CaseExpressionContext } from "./SDBLParser.js";
import type { CaseBranchContext } from "./SDBLParser.js";
import type { BracketExpressionContext } from "./SDBLParser.js";
import type { UnaryExpressionContext } from "./SDBLParser.js";
import type { FunctionCallContext } from "./SDBLParser.js";
import type { BuiltInFunctionsContext } from "./SDBLParser.js";
import type { AggregateFunctionsContext } from "./SDBLParser.js";
import type { ValueFunctionContext } from "./SDBLParser.js";
import type { CastFunctionContext } from "./SDBLParser.js";
import type { LogicalExpressionContext } from "./SDBLParser.js";
import type { PredicateContext } from "./SDBLParser.js";
import type { LikePredicateContext } from "./SDBLParser.js";
import type { IsNullPredicateContext } from "./SDBLParser.js";
import type { ComparePredicateContext } from "./SDBLParser.js";
import type { BetweenPredicateContext } from "./SDBLParser.js";
import type { InPredicateContext } from "./SDBLParser.js";
import type { RefsPredicateContext } from "./SDBLParser.js";
import type { ExpressionListContext } from "./SDBLParser.js";
import type { DataSourcesContext } from "./SDBLParser.js";
import type { DataSourceContext } from "./SDBLParser.js";
import type { TableContext } from "./SDBLParser.js";
import type { VirtualTableContext } from "./SDBLParser.js";
import type { VirtualTableParameterContext } from "./SDBLParser.js";
import type { ParameterTableContext } from "./SDBLParser.js";
import type { ExternalDataSourceTableContext } from "./SDBLParser.js";
import type { JoinPartContext } from "./SDBLParser.js";
import type { AliasContext } from "./SDBLParser.js";
import type { DatePartContext } from "./SDBLParser.js";
import type { MultiStringContext } from "./SDBLParser.js";
import type { SignContext } from "./SDBLParser.js";
import type { IdentifierContext } from "./SDBLParser.js";
import type { ParameterContext } from "./SDBLParser.js";
import type { MdoContext } from "./SDBLParser.js";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `SDBLParser`.
 */
export class SDBLParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SDBLParser.queryPackage`.
     * @param ctx the parse tree
     */
    enterQueryPackage?: (ctx: QueryPackageContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.queryPackage`.
     * @param ctx the parse tree
     */
    exitQueryPackage?: (ctx: QueryPackageContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.queries`.
     * @param ctx the parse tree
     */
    enterQueries?: (ctx: QueriesContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.queries`.
     * @param ctx the parse tree
     */
    exitQueries?: (ctx: QueriesContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.dropTableQuery`.
     * @param ctx the parse tree
     */
    enterDropTableQuery?: (ctx: DropTableQueryContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.dropTableQuery`.
     * @param ctx the parse tree
     */
    exitDropTableQuery?: (ctx: DropTableQueryContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.selectQuery`.
     * @param ctx the parse tree
     */
    enterSelectQuery?: (ctx: SelectQueryContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.selectQuery`.
     * @param ctx the parse tree
     */
    exitSelectQuery?: (ctx: SelectQueryContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.subquery`.
     * @param ctx the parse tree
     */
    enterSubquery?: (ctx: SubqueryContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.subquery`.
     * @param ctx the parse tree
     */
    exitSubquery?: (ctx: SubqueryContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.union`.
     * @param ctx the parse tree
     */
    enterUnion?: (ctx: UnionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.union`.
     * @param ctx the parse tree
     */
    exitUnion?: (ctx: UnionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.query`.
     * @param ctx the parse tree
     */
    enterQuery?: (ctx: QueryContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.query`.
     * @param ctx the parse tree
     */
    exitQuery?: (ctx: QueryContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.limitations`.
     * @param ctx the parse tree
     */
    enterLimitations?: (ctx: LimitationsContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.limitations`.
     * @param ctx the parse tree
     */
    exitLimitations?: (ctx: LimitationsContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.top`.
     * @param ctx the parse tree
     */
    enterTop?: (ctx: TopContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.top`.
     * @param ctx the parse tree
     */
    exitTop?: (ctx: TopContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.selectedFields`.
     * @param ctx the parse tree
     */
    enterSelectedFields?: (ctx: SelectedFieldsContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.selectedFields`.
     * @param ctx the parse tree
     */
    exitSelectedFields?: (ctx: SelectedFieldsContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.selectedField`.
     * @param ctx the parse tree
     */
    enterSelectedField?: (ctx: SelectedFieldContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.selectedField`.
     * @param ctx the parse tree
     */
    exitSelectedField?: (ctx: SelectedFieldContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.asteriskField`.
     * @param ctx the parse tree
     */
    enterAsteriskField?: (ctx: AsteriskFieldContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.asteriskField`.
     * @param ctx the parse tree
     */
    exitAsteriskField?: (ctx: AsteriskFieldContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.expressionField`.
     * @param ctx the parse tree
     */
    enterExpressionField?: (ctx: ExpressionFieldContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.expressionField`.
     * @param ctx the parse tree
     */
    exitExpressionField?: (ctx: ExpressionFieldContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.columnField`.
     * @param ctx the parse tree
     */
    enterColumnField?: (ctx: ColumnFieldContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.columnField`.
     * @param ctx the parse tree
     */
    exitColumnField?: (ctx: ColumnFieldContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.emptyTableField`.
     * @param ctx the parse tree
     */
    enterEmptyTableField?: (ctx: EmptyTableFieldContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.emptyTableField`.
     * @param ctx the parse tree
     */
    exitEmptyTableField?: (ctx: EmptyTableFieldContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.emptyTableColumns`.
     * @param ctx the parse tree
     */
    enterEmptyTableColumns?: (ctx: EmptyTableColumnsContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.emptyTableColumns`.
     * @param ctx the parse tree
     */
    exitEmptyTableColumns?: (ctx: EmptyTableColumnsContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.inlineTableField`.
     * @param ctx the parse tree
     */
    enterInlineTableField?: (ctx: InlineTableFieldContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.inlineTableField`.
     * @param ctx the parse tree
     */
    exitInlineTableField?: (ctx: InlineTableFieldContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.recordAutoNumberFunction`.
     * @param ctx the parse tree
     */
    enterRecordAutoNumberFunction?: (ctx: RecordAutoNumberFunctionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.recordAutoNumberFunction`.
     * @param ctx the parse tree
     */
    exitRecordAutoNumberFunction?: (ctx: RecordAutoNumberFunctionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.groupByItem`.
     * @param ctx the parse tree
     */
    enterGroupByItem?: (ctx: GroupByItemContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.groupByItem`.
     * @param ctx the parse tree
     */
    exitGroupByItem?: (ctx: GroupByItemContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.indexingItem`.
     * @param ctx the parse tree
     */
    enterIndexingItem?: (ctx: IndexingItemContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.indexingItem`.
     * @param ctx the parse tree
     */
    exitIndexingItem?: (ctx: IndexingItemContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.orderBy`.
     * @param ctx the parse tree
     */
    enterOrderBy?: (ctx: OrderByContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.orderBy`.
     * @param ctx the parse tree
     */
    exitOrderBy?: (ctx: OrderByContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.ordersByExpession`.
     * @param ctx the parse tree
     */
    enterOrdersByExpession?: (ctx: OrdersByExpessionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.ordersByExpession`.
     * @param ctx the parse tree
     */
    exitOrdersByExpession?: (ctx: OrdersByExpessionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.totalBy`.
     * @param ctx the parse tree
     */
    enterTotalBy?: (ctx: TotalByContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.totalBy`.
     * @param ctx the parse tree
     */
    exitTotalBy?: (ctx: TotalByContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.totalsGroup`.
     * @param ctx the parse tree
     */
    enterTotalsGroup?: (ctx: TotalsGroupContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.totalsGroup`.
     * @param ctx the parse tree
     */
    exitTotalsGroup?: (ctx: TotalsGroupContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.periodic`.
     * @param ctx the parse tree
     */
    enterPeriodic?: (ctx: PeriodicContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.periodic`.
     * @param ctx the parse tree
     */
    exitPeriodic?: (ctx: PeriodicContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.column`.
     * @param ctx the parse tree
     */
    enterColumn?: (ctx: ColumnContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.column`.
     * @param ctx the parse tree
     */
    exitColumn?: (ctx: ColumnContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.primitiveExpression`.
     * @param ctx the parse tree
     */
    enterPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.primitiveExpression`.
     * @param ctx the parse tree
     */
    exitPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.caseExpression`.
     * @param ctx the parse tree
     */
    enterCaseExpression?: (ctx: CaseExpressionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.caseExpression`.
     * @param ctx the parse tree
     */
    exitCaseExpression?: (ctx: CaseExpressionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.caseBranch`.
     * @param ctx the parse tree
     */
    enterCaseBranch?: (ctx: CaseBranchContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.caseBranch`.
     * @param ctx the parse tree
     */
    exitCaseBranch?: (ctx: CaseBranchContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.bracketExpression`.
     * @param ctx the parse tree
     */
    enterBracketExpression?: (ctx: BracketExpressionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.bracketExpression`.
     * @param ctx the parse tree
     */
    exitBracketExpression?: (ctx: BracketExpressionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.unaryExpression`.
     * @param ctx the parse tree
     */
    enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.unaryExpression`.
     * @param ctx the parse tree
     */
    exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.functionCall`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.functionCall`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.builtInFunctions`.
     * @param ctx the parse tree
     */
    enterBuiltInFunctions?: (ctx: BuiltInFunctionsContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.builtInFunctions`.
     * @param ctx the parse tree
     */
    exitBuiltInFunctions?: (ctx: BuiltInFunctionsContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.aggregateFunctions`.
     * @param ctx the parse tree
     */
    enterAggregateFunctions?: (ctx: AggregateFunctionsContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.aggregateFunctions`.
     * @param ctx the parse tree
     */
    exitAggregateFunctions?: (ctx: AggregateFunctionsContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.valueFunction`.
     * @param ctx the parse tree
     */
    enterValueFunction?: (ctx: ValueFunctionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.valueFunction`.
     * @param ctx the parse tree
     */
    exitValueFunction?: (ctx: ValueFunctionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.castFunction`.
     * @param ctx the parse tree
     */
    enterCastFunction?: (ctx: CastFunctionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.castFunction`.
     * @param ctx the parse tree
     */
    exitCastFunction?: (ctx: CastFunctionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.logicalExpression`.
     * @param ctx the parse tree
     */
    enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.logicalExpression`.
     * @param ctx the parse tree
     */
    exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.likePredicate`.
     * @param ctx the parse tree
     */
    enterLikePredicate?: (ctx: LikePredicateContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.likePredicate`.
     * @param ctx the parse tree
     */
    exitLikePredicate?: (ctx: LikePredicateContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.isNullPredicate`.
     * @param ctx the parse tree
     */
    enterIsNullPredicate?: (ctx: IsNullPredicateContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.isNullPredicate`.
     * @param ctx the parse tree
     */
    exitIsNullPredicate?: (ctx: IsNullPredicateContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.comparePredicate`.
     * @param ctx the parse tree
     */
    enterComparePredicate?: (ctx: ComparePredicateContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.comparePredicate`.
     * @param ctx the parse tree
     */
    exitComparePredicate?: (ctx: ComparePredicateContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.betweenPredicate`.
     * @param ctx the parse tree
     */
    enterBetweenPredicate?: (ctx: BetweenPredicateContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.betweenPredicate`.
     * @param ctx the parse tree
     */
    exitBetweenPredicate?: (ctx: BetweenPredicateContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.inPredicate`.
     * @param ctx the parse tree
     */
    enterInPredicate?: (ctx: InPredicateContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.inPredicate`.
     * @param ctx the parse tree
     */
    exitInPredicate?: (ctx: InPredicateContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.refsPredicate`.
     * @param ctx the parse tree
     */
    enterRefsPredicate?: (ctx: RefsPredicateContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.refsPredicate`.
     * @param ctx the parse tree
     */
    exitRefsPredicate?: (ctx: RefsPredicateContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.expressionList`.
     * @param ctx the parse tree
     */
    enterExpressionList?: (ctx: ExpressionListContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.expressionList`.
     * @param ctx the parse tree
     */
    exitExpressionList?: (ctx: ExpressionListContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.dataSources`.
     * @param ctx the parse tree
     */
    enterDataSources?: (ctx: DataSourcesContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.dataSources`.
     * @param ctx the parse tree
     */
    exitDataSources?: (ctx: DataSourcesContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.dataSource`.
     * @param ctx the parse tree
     */
    enterDataSource?: (ctx: DataSourceContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.dataSource`.
     * @param ctx the parse tree
     */
    exitDataSource?: (ctx: DataSourceContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.table`.
     * @param ctx the parse tree
     */
    enterTable?: (ctx: TableContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.table`.
     * @param ctx the parse tree
     */
    exitTable?: (ctx: TableContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.virtualTable`.
     * @param ctx the parse tree
     */
    enterVirtualTable?: (ctx: VirtualTableContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.virtualTable`.
     * @param ctx the parse tree
     */
    exitVirtualTable?: (ctx: VirtualTableContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.virtualTableParameter`.
     * @param ctx the parse tree
     */
    enterVirtualTableParameter?: (ctx: VirtualTableParameterContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.virtualTableParameter`.
     * @param ctx the parse tree
     */
    exitVirtualTableParameter?: (ctx: VirtualTableParameterContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.parameterTable`.
     * @param ctx the parse tree
     */
    enterParameterTable?: (ctx: ParameterTableContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.parameterTable`.
     * @param ctx the parse tree
     */
    exitParameterTable?: (ctx: ParameterTableContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.externalDataSourceTable`.
     * @param ctx the parse tree
     */
    enterExternalDataSourceTable?: (ctx: ExternalDataSourceTableContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.externalDataSourceTable`.
     * @param ctx the parse tree
     */
    exitExternalDataSourceTable?: (ctx: ExternalDataSourceTableContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.joinPart`.
     * @param ctx the parse tree
     */
    enterJoinPart?: (ctx: JoinPartContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.joinPart`.
     * @param ctx the parse tree
     */
    exitJoinPart?: (ctx: JoinPartContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.alias`.
     * @param ctx the parse tree
     */
    enterAlias?: (ctx: AliasContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.alias`.
     * @param ctx the parse tree
     */
    exitAlias?: (ctx: AliasContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.datePart`.
     * @param ctx the parse tree
     */
    enterDatePart?: (ctx: DatePartContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.datePart`.
     * @param ctx the parse tree
     */
    exitDatePart?: (ctx: DatePartContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.multiString`.
     * @param ctx the parse tree
     */
    enterMultiString?: (ctx: MultiStringContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.multiString`.
     * @param ctx the parse tree
     */
    exitMultiString?: (ctx: MultiStringContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.sign`.
     * @param ctx the parse tree
     */
    enterSign?: (ctx: SignContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.sign`.
     * @param ctx the parse tree
     */
    exitSign?: (ctx: SignContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.parameter`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.parameter`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;

    /**
     * Enter a parse tree produced by `SDBLParser.mdo`.
     * @param ctx the parse tree
     */
    enterMdo?: (ctx: MdoContext) => void;

    /**
     * Exit a parse tree produced by `SDBLParser.mdo`.
     * @param ctx the parse tree
     */
    exitMdo?: (ctx: MdoContext) => void;

    visitTerminal(node: TerminalNode): void {}

    visitErrorNode(node: ErrorNode): void {}

    enterEveryRule(node: ParserRuleContext): void {}

    exitEveryRule(node: ParserRuleContext): void {}
}
