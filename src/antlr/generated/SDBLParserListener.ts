// Generated from ./src/antlr/SDBLParser.g4 by ANTLR 4.13.1

import { ParseTreeListener } from "antlr4";

import { BslParserRuleContext } from "../../core/context";

import { QueryPackageContext } from "./SDBLParser";
import { QueriesContext } from "./SDBLParser";
import { DropTableQueryContext } from "./SDBLParser";
import { SelectQueryContext } from "./SDBLParser";
import { SubqueryContext } from "./SDBLParser";
import { UnionContext } from "./SDBLParser";
import { QueryContext } from "./SDBLParser";
import { LimitationsContext } from "./SDBLParser";
import { TopContext } from "./SDBLParser";
import { SelectedFieldsContext } from "./SDBLParser";
import { SelectedFieldContext } from "./SDBLParser";
import { AsteriskFieldContext } from "./SDBLParser";
import { ExpressionFieldContext } from "./SDBLParser";
import { ColumnFieldContext } from "./SDBLParser";
import { EmptyTableFieldContext } from "./SDBLParser";
import { EmptyTableColumnsContext } from "./SDBLParser";
import { InlineTableFieldContext } from "./SDBLParser";
import { RecordAutoNumberFunctionContext } from "./SDBLParser";
import { GroupByItemContext } from "./SDBLParser";
import { IndexingItemContext } from "./SDBLParser";
import { OrderByContext } from "./SDBLParser";
import { OrdersByExpessionContext } from "./SDBLParser";
import { TotalByContext } from "./SDBLParser";
import { TotalsGroupContext } from "./SDBLParser";
import { PeriodicContext } from "./SDBLParser";
import { ColumnContext } from "./SDBLParser";
import { ExpressionContext } from "./SDBLParser";
import { PrimitiveExpressionContext } from "./SDBLParser";
import { CaseExpressionContext } from "./SDBLParser";
import { CaseBranchContext } from "./SDBLParser";
import { BracketExpressionContext } from "./SDBLParser";
import { UnaryExpressionContext } from "./SDBLParser";
import { FunctionCallContext } from "./SDBLParser";
import { BuiltInFunctionsContext } from "./SDBLParser";
import { AggregateFunctionsContext } from "./SDBLParser";
import { ValueFunctionContext } from "./SDBLParser";
import { CastFunctionContext } from "./SDBLParser";
import { LogicalExpressionContext } from "./SDBLParser";
import { PredicateContext } from "./SDBLParser";
import { LikePredicateContext } from "./SDBLParser";
import { IsNullPredicateContext } from "./SDBLParser";
import { ComparePredicateContext } from "./SDBLParser";
import { BetweenPredicateContext } from "./SDBLParser";
import { InPredicateContext } from "./SDBLParser";
import { RefsPredicateContext } from "./SDBLParser";
import { ExpressionListContext } from "./SDBLParser";
import { DataSourcesContext } from "./SDBLParser";
import { DataSourceContext } from "./SDBLParser";
import { TableContext } from "./SDBLParser";
import { VirtualTableContext } from "./SDBLParser";
import { VirtualTableParameterContext } from "./SDBLParser";
import { ParameterTableContext } from "./SDBLParser";
import { ExternalDataSourceTableContext } from "./SDBLParser";
import { JoinPartContext } from "./SDBLParser";
import { AliasContext } from "./SDBLParser";
import { DatePartContext } from "./SDBLParser";
import { MultiStringContext } from "./SDBLParser";
import { SignContext } from "./SDBLParser";
import { IdentifierContext } from "./SDBLParser";
import { ParameterContext } from "./SDBLParser";
import { MdoContext } from "./SDBLParser";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `SDBLParser`.
 */
export default class SDBLParserListener extends ParseTreeListener {
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
}
