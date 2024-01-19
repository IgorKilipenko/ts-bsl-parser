/* eslint-disable no-duplicate-imports */
// Generated from ./src/antlr/SDBLParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";

import type { QueryPackageContext } from "./SDBLParser";
import type { QueriesContext } from "./SDBLParser";
import type { DropTableQueryContext } from "./SDBLParser";
import type { SelectQueryContext } from "./SDBLParser";
import type { SubqueryContext } from "./SDBLParser";
import type { UnionContext } from "./SDBLParser";
import type { QueryContext } from "./SDBLParser";
import type { LimitationsContext } from "./SDBLParser";
import type { TopContext } from "./SDBLParser";
import type { SelectedFieldsContext } from "./SDBLParser";
import type { SelectedFieldContext } from "./SDBLParser";
import type { AsteriskFieldContext } from "./SDBLParser";
import type { ExpressionFieldContext } from "./SDBLParser";
import type { ColumnFieldContext } from "./SDBLParser";
import type { EmptyTableFieldContext } from "./SDBLParser";
import type { EmptyTableColumnsContext } from "./SDBLParser";
import type { InlineTableFieldContext } from "./SDBLParser";
import type { RecordAutoNumberFunctionContext } from "./SDBLParser";
import type { GroupByItemContext } from "./SDBLParser";
import type { IndexingItemContext } from "./SDBLParser";
import type { OrderByContext } from "./SDBLParser";
import type { OrdersByExpessionContext } from "./SDBLParser";
import type { TotalByContext } from "./SDBLParser";
import type { TotalsGroupContext } from "./SDBLParser";
import type { PeriodicContext } from "./SDBLParser";
import type { ColumnContext } from "./SDBLParser";
import type { ExpressionContext } from "./SDBLParser";
import type { PrimitiveExpressionContext } from "./SDBLParser";
import type { CaseExpressionContext } from "./SDBLParser";
import type { CaseBranchContext } from "./SDBLParser";
import type { BracketExpressionContext } from "./SDBLParser";
import type { UnaryExpressionContext } from "./SDBLParser";
import type { FunctionCallContext } from "./SDBLParser";
import type { BuiltInFunctionsContext } from "./SDBLParser";
import type { AggregateFunctionsContext } from "./SDBLParser";
import type { ValueFunctionContext } from "./SDBLParser";
import type { CastFunctionContext } from "./SDBLParser";
import type { LogicalExpressionContext } from "./SDBLParser";
import type { PredicateContext } from "./SDBLParser";
import type { LikePredicateContext } from "./SDBLParser";
import type { IsNullPredicateContext } from "./SDBLParser";
import type { ComparePredicateContext } from "./SDBLParser";
import type { BetweenPredicateContext } from "./SDBLParser";
import type { InPredicateContext } from "./SDBLParser";
import type { RefsPredicateContext } from "./SDBLParser";
import type { ExpressionListContext } from "./SDBLParser";
import type { DataSourcesContext } from "./SDBLParser";
import type { DataSourceContext } from "./SDBLParser";
import type { TableContext } from "./SDBLParser";
import type { VirtualTableContext } from "./SDBLParser";
import type { VirtualTableParameterContext } from "./SDBLParser";
import type { ParameterTableContext } from "./SDBLParser";
import type { ExternalDataSourceTableContext } from "./SDBLParser";
import type { JoinPartContext } from "./SDBLParser";
import type { AliasContext } from "./SDBLParser";
import type { DatePartContext } from "./SDBLParser";
import type { MultiStringContext } from "./SDBLParser";
import type { SignContext } from "./SDBLParser";
import type { IdentifierContext } from "./SDBLParser";
import type { ParameterContext } from "./SDBLParser";
import type { MdoContext } from "./SDBLParser";

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SDBLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SDBLParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SDBLParser.queryPackage`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPackage?: (ctx: QueryPackageContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.queries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueries?: (ctx: QueriesContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.dropTableQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTableQuery?: (ctx: DropTableQueryContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.selectQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectQuery?: (ctx: SelectQueryContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.subquery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery?: (ctx: SubqueryContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.union`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnion?: (ctx: UnionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery?: (ctx: QueryContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.limitations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitations?: (ctx: LimitationsContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.top`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTop?: (ctx: TopContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.selectedFields`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectedFields?: (ctx: SelectedFieldsContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.selectedField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectedField?: (ctx: SelectedFieldContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.asteriskField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsteriskField?: (ctx: AsteriskFieldContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.expressionField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionField?: (ctx: ExpressionFieldContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.columnField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnField?: (ctx: ColumnFieldContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.emptyTableField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyTableField?: (ctx: EmptyTableFieldContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.emptyTableColumns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyTableColumns?: (ctx: EmptyTableColumnsContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.inlineTableField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTableField?: (ctx: InlineTableFieldContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.recordAutoNumberFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecordAutoNumberFunction?: (ctx: RecordAutoNumberFunctionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.groupByItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByItem?: (ctx: GroupByItemContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.indexingItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexingItem?: (ctx: IndexingItemContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.orderBy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderBy?: (ctx: OrderByContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.ordersByExpession`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrdersByExpession?: (ctx: OrdersByExpessionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.totalBy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTotalBy?: (ctx: TotalByContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.totalsGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTotalsGroup?: (ctx: TotalsGroupContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.periodic`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPeriodic?: (ctx: PeriodicContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn?: (ctx: ColumnContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.primitiveExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveExpression?: (ctx: PrimitiveExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.caseExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseExpression?: (ctx: CaseExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.caseBranch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseBranch?: (ctx: CaseBranchContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.bracketExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBracketExpression?: (ctx: BracketExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.unaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.builtInFunctions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBuiltInFunctions?: (ctx: BuiltInFunctionsContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.aggregateFunctions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateFunctions?: (ctx: AggregateFunctionsContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.valueFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueFunction?: (ctx: ValueFunctionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.castFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastFunction?: (ctx: CastFunctionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.logicalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.likePredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLikePredicate?: (ctx: LikePredicateContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.isNullPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsNullPredicate?: (ctx: IsNullPredicateContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.comparePredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparePredicate?: (ctx: ComparePredicateContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.betweenPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBetweenPredicate?: (ctx: BetweenPredicateContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.inPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInPredicate?: (ctx: InPredicateContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.refsPredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefsPredicate?: (ctx: RefsPredicateContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.expressionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionList?: (ctx: ExpressionListContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.dataSources`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataSources?: (ctx: DataSourcesContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.dataSource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataSource?: (ctx: DataSourceContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable?: (ctx: TableContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.virtualTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVirtualTable?: (ctx: VirtualTableContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.virtualTableParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVirtualTableParameter?: (ctx: VirtualTableParameterContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.parameterTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterTable?: (ctx: ParameterTableContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.externalDataSourceTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExternalDataSourceTable?: (ctx: ExternalDataSourceTableContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.joinPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinPart?: (ctx: JoinPartContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias?: (ctx: AliasContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.datePart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatePart?: (ctx: DatePartContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.multiString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiString?: (ctx: MultiStringContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.sign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSign?: (ctx: SignContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;

    /**
     * Visit a parse tree produced by `SDBLParser.mdo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMdo?: (ctx: MdoContext) => Result;
}
