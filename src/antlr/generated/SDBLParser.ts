// Generated from ./src/antlr/SDBLParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
    ATN,
    ATNDeserializer,
    DecisionState,
    DFA,
    FailedPredicateException,
    RecognitionException,
    NoViableAltException,
    BailErrorStrategy,
    Parser,
    ParserATNSimulator,
    RuleContext,
    ParserRuleContext,
    PredictionMode,
    PredictionContextCache,
    TerminalNode,
    RuleNode,
    Token,
    TokenStream,
    Interval,
    IntervalSet,
} from "antlr4";
import SDBLParserListener from "./SDBLParserListener.js";
import SDBLParserVisitor from "./SDBLParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import { BslParserRuleContext } from "../../core/context";

export default class SDBLParser extends Parser {
    public static readonly WHITE_SPACE = 1;

    public static readonly LINE_COMMENT = 2;

    public static readonly DOT = 3;

    public static readonly LPAREN = 4;

    public static readonly RPAREN = 5;

    public static readonly SEMICOLON = 6;

    public static readonly COMMA = 7;

    public static readonly ASSIGN = 8;

    public static readonly PLUS = 9;

    public static readonly MINUS = 10;

    public static readonly LESS_OR_EQUAL = 11;

    public static readonly NOT_EQUAL = 12;

    public static readonly LESS = 13;

    public static readonly GREATER_OR_EQUAL = 14;

    public static readonly GREATER = 15;

    public static readonly MUL = 16;

    public static readonly QUOTIENT = 17;

    public static readonly AMPERSAND = 18;

    public static readonly BRACE = 19;

    public static readonly ALLOWED = 20;

    public static readonly AND = 21;

    public static readonly AS = 22;

    public static readonly ASC = 23;

    public static readonly AUTOORDER = 24;

    public static readonly BETWEEN = 25;

    public static readonly BY_EN = 26;

    public static readonly CASE = 27;

    public static readonly CAST = 28;

    public static readonly DESC = 29;

    public static readonly DISTINCT = 30;

    public static readonly DROP = 31;

    public static readonly ELSE = 32;

    public static readonly END = 33;

    public static readonly ESCAPE = 34;

    public static readonly FALSE = 35;

    public static readonly FROM = 36;

    public static readonly HAVING = 37;

    public static readonly HIERARCHY = 38;

    public static readonly INTO = 39;

    public static readonly IS = 40;

    public static readonly ISNULL = 41;

    public static readonly LIKE = 42;

    public static readonly NOT = 43;

    public static readonly NULL = 44;

    public static readonly OF = 45;

    public static readonly ON_EN = 46;

    public static readonly OR = 47;

    public static readonly OVERALL = 48;

    public static readonly PO_RU = 49;

    public static readonly SELECT = 50;

    public static readonly THEN = 51;

    public static readonly TOP = 52;

    public static readonly TOTALS = 53;

    public static readonly TRUE = 54;

    public static readonly UNDEFINED = 55;

    public static readonly WHEN = 56;

    public static readonly WHERE = 57;

    public static readonly ACOS = 58;

    public static readonly ASIN = 59;

    public static readonly ATAN = 60;

    public static readonly AVG = 61;

    public static readonly BEGINOFPERIOD = 62;

    public static readonly BOOLEAN = 63;

    public static readonly COS = 64;

    public static readonly COUNT = 65;

    public static readonly DATE = 66;

    public static readonly DATEADD = 67;

    public static readonly DATEDIFF = 68;

    public static readonly DATETIME = 69;

    public static readonly DAY = 70;

    public static readonly DAYOFYEAR = 71;

    public static readonly EMPTYTABLE = 72;

    public static readonly EMPTYREF = 73;

    public static readonly ENDOFPERIOD = 74;

    public static readonly EXP = 75;

    public static readonly HALFYEAR = 76;

    public static readonly HOUR = 77;

    public static readonly INT = 78;

    public static readonly LOG = 79;

    public static readonly LOG10 = 80;

    public static readonly LOWER = 81;

    public static readonly MAX = 82;

    public static readonly MIN = 83;

    public static readonly MINUTE = 84;

    public static readonly MONTH = 85;

    public static readonly NUMBER = 86;

    public static readonly QUARTER = 87;

    public static readonly ONLY = 88;

    public static readonly PERIODS = 89;

    public static readonly REFS = 90;

    public static readonly PRESENTATION = 91;

    public static readonly RECORDAUTONUMBER = 92;

    public static readonly REFPRESENTATION = 93;

    public static readonly POW = 94;

    public static readonly ROUND = 95;

    public static readonly SECOND = 96;

    public static readonly SIN = 97;

    public static readonly SQRT = 98;

    public static readonly STOREDDATASIZE = 99;

    public static readonly STRING = 100;

    public static readonly STRINGLENGTH = 101;

    public static readonly STRFIND = 102;

    public static readonly STRREPLACE = 103;

    public static readonly SUBSTRING = 104;

    public static readonly SUM = 105;

    public static readonly TAN = 106;

    public static readonly TENDAYS = 107;

    public static readonly TRIMALL = 108;

    public static readonly TRIML = 109;

    public static readonly TRIMR = 110;

    public static readonly TYPE = 111;

    public static readonly UPPER = 112;

    public static readonly VALUE = 113;

    public static readonly VALUETYPE = 114;

    public static readonly WEEK = 115;

    public static readonly WEEKDAY = 116;

    public static readonly YEAR = 117;

    public static readonly UUID = 118;

    public static readonly ACCOUNTING_REGISTER_TYPE = 119;

    public static readonly ACCUMULATION_REGISTER_TYPE = 120;

    public static readonly BUSINESS_PROCESS_TYPE = 121;

    public static readonly CALCULATION_REGISTER_TYPE = 122;

    public static readonly CATALOG_TYPE = 123;

    public static readonly CHART_OF_ACCOUNTS_TYPE = 124;

    public static readonly CHART_OF_CALCULATION_TYPES_TYPE = 125;

    public static readonly CHART_OF_CHARACTERISTIC_TYPES_TYPE = 126;

    public static readonly CONSTANT_TYPE = 127;

    public static readonly DOCUMENT_TYPE = 128;

    public static readonly DOCUMENT_JOURNAL_TYPE = 129;

    public static readonly ENUM_TYPE = 130;

    public static readonly EXCHANGE_PLAN_TYPE = 131;

    public static readonly EXTERNAL_DATA_SOURCE_TYPE = 132;

    public static readonly FILTER_CRITERION_TYPE = 133;

    public static readonly INFORMATION_REGISTER_TYPE = 134;

    public static readonly SEQUENCE_TYPE = 135;

    public static readonly TASK_TYPE = 136;

    public static readonly ROUTEPOINT_FIELD = 137;

    public static readonly INDEX = 138;

    public static readonly GROUP = 139;

    public static readonly ORDER = 140;

    public static readonly GROUPEDBY = 141;

    public static readonly GROUPING = 142;

    public static readonly SET = 143;

    public static readonly RIGHT = 144;

    public static readonly LEFT = 145;

    public static readonly INNER = 146;

    public static readonly FULL = 147;

    public static readonly JOIN = 148;

    public static readonly OUTER = 149;

    public static readonly FOR = 150;

    public static readonly UPDATE = 151;

    public static readonly ALL = 152;

    public static readonly UNION = 153;

    public static readonly HIERARCHY_FOR_IN = 154;

    public static readonly IN = 155;

    public static readonly DECIMAL = 156;

    public static readonly FLOAT = 157;

    public static readonly STR = 158;

    public static readonly INCORRECT_IDENTIFIER = 159;

    public static readonly IDENTIFIER = 160;

    public static readonly UNKNOWN = 161;

    public static readonly PARAMETER_IDENTIFIER = 162;

    public static readonly ACTUAL_ACTION_PERIOD_VT = 163;

    public static readonly BALANCE_VT = 164;

    public static readonly BALANCE_AND_TURNOVERS_VT = 165;

    public static readonly BOUNDARIES_VT = 166;

    public static readonly DR_CR_TURNOVERS_VT = 167;

    public static readonly EXT_DIMENSIONS_VT = 168;

    public static readonly RECORDS_WITH_EXT_DIMENSIONS_VT = 169;

    public static readonly SCHEDULE_DATA_VT = 170;

    public static readonly SLICEFIRST_VT = 171;

    public static readonly SLICELAST_VT = 172;

    public static readonly TASK_BY_PERFORMER_VT = 173;

    public static readonly TURNOVERS_VT = 174;

    public static readonly BRACE_IDENTIFIER = 175;

    public static readonly BRACE_START = 176;

    public static readonly EDS_TABLE = 177;

    public static readonly EDS_CUBE = 178;

    public static readonly EDS_CUBE_DIMTABLE = 179;

    public static readonly EOF = Token.EOF;

    public static readonly RULE_queryPackage = 0;

    public static readonly RULE_queries = 1;

    public static readonly RULE_dropTableQuery = 2;

    public static readonly RULE_selectQuery = 3;

    public static readonly RULE_subquery = 4;

    public static readonly RULE_union = 5;

    public static readonly RULE_query = 6;

    public static readonly RULE_limitations = 7;

    public static readonly RULE_top = 8;

    public static readonly RULE_selectedFields = 9;

    public static readonly RULE_selectedField = 10;

    public static readonly RULE_asteriskField = 11;

    public static readonly RULE_expressionField = 12;

    public static readonly RULE_columnField = 13;

    public static readonly RULE_emptyTableField = 14;

    public static readonly RULE_emptyTableColumns = 15;

    public static readonly RULE_inlineTableField = 16;

    public static readonly RULE_recordAutoNumberFunction = 17;

    public static readonly RULE_groupByItem = 18;

    public static readonly RULE_indexingItem = 19;

    public static readonly RULE_orderBy = 20;

    public static readonly RULE_ordersByExpession = 21;

    public static readonly RULE_totalBy = 22;

    public static readonly RULE_totalsGroup = 23;

    public static readonly RULE_periodic = 24;

    public static readonly RULE_column = 25;

    public static readonly RULE_expression = 26;

    public static readonly RULE_primitiveExpression = 27;

    public static readonly RULE_caseExpression = 28;

    public static readonly RULE_caseBranch = 29;

    public static readonly RULE_bracketExpression = 30;

    public static readonly RULE_unaryExpression = 31;

    public static readonly RULE_functionCall = 32;

    public static readonly RULE_builtInFunctions = 33;

    public static readonly RULE_aggregateFunctions = 34;

    public static readonly RULE_valueFunction = 35;

    public static readonly RULE_castFunction = 36;

    public static readonly RULE_logicalExpression = 37;

    public static readonly RULE_predicate = 38;

    public static readonly RULE_likePredicate = 39;

    public static readonly RULE_isNullPredicate = 40;

    public static readonly RULE_comparePredicate = 41;

    public static readonly RULE_betweenPredicate = 42;

    public static readonly RULE_inPredicate = 43;

    public static readonly RULE_refsPredicate = 44;

    public static readonly RULE_expressionList = 45;

    public static readonly RULE_dataSources = 46;

    public static readonly RULE_dataSource = 47;

    public static readonly RULE_table = 48;

    public static readonly RULE_virtualTable = 49;

    public static readonly RULE_virtualTableParameter = 50;

    public static readonly RULE_parameterTable = 51;

    public static readonly RULE_externalDataSourceTable = 52;

    public static readonly RULE_joinPart = 53;

    public static readonly RULE_alias = 54;

    public static readonly RULE_datePart = 55;

    public static readonly RULE_multiString = 56;

    public static readonly RULE_sign = 57;

    public static readonly RULE_identifier = 58;

    public static readonly RULE_parameter = 59;

    public static readonly RULE_mdo = 60;

    public static readonly literalNames: (string | null)[] = [
        null,
        null,
        null,
        "'.'",
        "'('",
        "')'",
        "';'",
        "','",
        "'='",
        "'+'",
        "'-'",
        "'<='",
        "'<>'",
        "'<'",
        "'>='",
        "'>'",
        "'*'",
        "'/'",
        "'&'",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "'\"'",
    ];

    public static readonly symbolicNames: (string | null)[] = [
        null,
        "WHITE_SPACE",
        "LINE_COMMENT",
        "DOT",
        "LPAREN",
        "RPAREN",
        "SEMICOLON",
        "COMMA",
        "ASSIGN",
        "PLUS",
        "MINUS",
        "LESS_OR_EQUAL",
        "NOT_EQUAL",
        "LESS",
        "GREATER_OR_EQUAL",
        "GREATER",
        "MUL",
        "QUOTIENT",
        "AMPERSAND",
        "BRACE",
        "ALLOWED",
        "AND",
        "AS",
        "ASC",
        "AUTOORDER",
        "BETWEEN",
        "BY_EN",
        "CASE",
        "CAST",
        "DESC",
        "DISTINCT",
        "DROP",
        "ELSE",
        "END",
        "ESCAPE",
        "FALSE",
        "FROM",
        "HAVING",
        "HIERARCHY",
        "INTO",
        "IS",
        "ISNULL",
        "LIKE",
        "NOT",
        "NULL",
        "OF",
        "ON_EN",
        "OR",
        "OVERALL",
        "PO_RU",
        "SELECT",
        "THEN",
        "TOP",
        "TOTALS",
        "TRUE",
        "UNDEFINED",
        "WHEN",
        "WHERE",
        "ACOS",
        "ASIN",
        "ATAN",
        "AVG",
        "BEGINOFPERIOD",
        "BOOLEAN",
        "COS",
        "COUNT",
        "DATE",
        "DATEADD",
        "DATEDIFF",
        "DATETIME",
        "DAY",
        "DAYOFYEAR",
        "EMPTYTABLE",
        "EMPTYREF",
        "ENDOFPERIOD",
        "EXP",
        "HALFYEAR",
        "HOUR",
        "INT",
        "LOG",
        "LOG10",
        "LOWER",
        "MAX",
        "MIN",
        "MINUTE",
        "MONTH",
        "NUMBER",
        "QUARTER",
        "ONLY",
        "PERIODS",
        "REFS",
        "PRESENTATION",
        "RECORDAUTONUMBER",
        "REFPRESENTATION",
        "POW",
        "ROUND",
        "SECOND",
        "SIN",
        "SQRT",
        "STOREDDATASIZE",
        "STRING",
        "STRINGLENGTH",
        "STRFIND",
        "STRREPLACE",
        "SUBSTRING",
        "SUM",
        "TAN",
        "TENDAYS",
        "TRIMALL",
        "TRIML",
        "TRIMR",
        "TYPE",
        "UPPER",
        "VALUE",
        "VALUETYPE",
        "WEEK",
        "WEEKDAY",
        "YEAR",
        "UUID",
        "ACCOUNTING_REGISTER_TYPE",
        "ACCUMULATION_REGISTER_TYPE",
        "BUSINESS_PROCESS_TYPE",
        "CALCULATION_REGISTER_TYPE",
        "CATALOG_TYPE",
        "CHART_OF_ACCOUNTS_TYPE",
        "CHART_OF_CALCULATION_TYPES_TYPE",
        "CHART_OF_CHARACTERISTIC_TYPES_TYPE",
        "CONSTANT_TYPE",
        "DOCUMENT_TYPE",
        "DOCUMENT_JOURNAL_TYPE",
        "ENUM_TYPE",
        "EXCHANGE_PLAN_TYPE",
        "EXTERNAL_DATA_SOURCE_TYPE",
        "FILTER_CRITERION_TYPE",
        "INFORMATION_REGISTER_TYPE",
        "SEQUENCE_TYPE",
        "TASK_TYPE",
        "ROUTEPOINT_FIELD",
        "INDEX",
        "GROUP",
        "ORDER",
        "GROUPEDBY",
        "GROUPING",
        "SET",
        "RIGHT",
        "LEFT",
        "INNER",
        "FULL",
        "JOIN",
        "OUTER",
        "FOR",
        "UPDATE",
        "ALL",
        "UNION",
        "HIERARCHY_FOR_IN",
        "IN",
        "DECIMAL",
        "FLOAT",
        "STR",
        "INCORRECT_IDENTIFIER",
        "IDENTIFIER",
        "UNKNOWN",
        "PARAMETER_IDENTIFIER",
        "ACTUAL_ACTION_PERIOD_VT",
        "BALANCE_VT",
        "BALANCE_AND_TURNOVERS_VT",
        "BOUNDARIES_VT",
        "DR_CR_TURNOVERS_VT",
        "EXT_DIMENSIONS_VT",
        "RECORDS_WITH_EXT_DIMENSIONS_VT",
        "SCHEDULE_DATA_VT",
        "SLICEFIRST_VT",
        "SLICELAST_VT",
        "TASK_BY_PERFORMER_VT",
        "TURNOVERS_VT",
        "BRACE_IDENTIFIER",
        "BRACE_START",
        "EDS_TABLE",
        "EDS_CUBE",
        "EDS_CUBE_DIMTABLE",
    ];

    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        "queryPackage",
        "queries",
        "dropTableQuery",
        "selectQuery",
        "subquery",
        "union",
        "query",
        "limitations",
        "top",
        "selectedFields",
        "selectedField",
        "asteriskField",
        "expressionField",
        "columnField",
        "emptyTableField",
        "emptyTableColumns",
        "inlineTableField",
        "recordAutoNumberFunction",
        "groupByItem",
        "indexingItem",
        "orderBy",
        "ordersByExpession",
        "totalBy",
        "totalsGroup",
        "periodic",
        "column",
        "expression",
        "primitiveExpression",
        "caseExpression",
        "caseBranch",
        "bracketExpression",
        "unaryExpression",
        "functionCall",
        "builtInFunctions",
        "aggregateFunctions",
        "valueFunction",
        "castFunction",
        "logicalExpression",
        "predicate",
        "likePredicate",
        "isNullPredicate",
        "comparePredicate",
        "betweenPredicate",
        "inPredicate",
        "refsPredicate",
        "expressionList",
        "dataSources",
        "dataSource",
        "table",
        "virtualTable",
        "virtualTableParameter",
        "parameterTable",
        "externalDataSourceTable",
        "joinPart",
        "alias",
        "datePart",
        "multiString",
        "sign",
        "identifier",
        "parameter",
        "mdo",
    ];

    public get grammarFileName(): string {
        return "SDBLParser.g4";
    }

    public get literalNames(): (string | null)[] {
        return SDBLParser.literalNames;
    }

    public get symbolicNames(): (string | null)[] {
        return SDBLParser.symbolicNames;
    }

    public get ruleNames(): string[] {
        return SDBLParser.ruleNames;
    }

    public get serializedATN(): number[] {
        return SDBLParser._serializedATN;
    }

    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
        return new FailedPredicateException(this, predicate, message);
    }

    constructor(input: TokenStream) {
        super(input);
        this._interp = new ParserATNSimulator(
            this,
            SDBLParser._ATN,
            SDBLParser.DecisionsToDFA,
            new PredictionContextCache()
        );
    }

    // @RuleVersion(0)
    public queryPackage(): QueryPackageContext {
        let localctx: QueryPackageContext = new QueryPackageContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, SDBLParser.RULE_queryPackage);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 122;
                this.queries();
                this.state = 127;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 123;
                                this.match(SDBLParser.SEMICOLON);
                                this.state = 124;
                                this.queries();
                            }
                        }
                    }
                    this.state = 129;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
                }
                this.state = 131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 6) {
                    {
                        this.state = 130;
                        this.match(SDBLParser.SEMICOLON);
                    }
                }

                this.state = 133;
                this.match(SDBLParser.EOF);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public queries(): QueriesContext {
        let localctx: QueriesContext = new QueriesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, SDBLParser.RULE_queries);
        try {
            this.state = 137;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 50:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 135;
                        this.selectQuery();
                    }
                    break;
                case 31:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 136;
                        this.dropTableQuery();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public dropTableQuery(): DropTableQueryContext {
        let localctx: DropTableQueryContext = new DropTableQueryContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, SDBLParser.RULE_dropTableQuery);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 139;
                this.match(SDBLParser.DROP);
                this.state = 140;
                localctx._temporaryTableName = this.identifier();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public selectQuery(): SelectQueryContext {
        let localctx: SelectQueryContext = new SelectQueryContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, SDBLParser.RULE_selectQuery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 142;
                this.subquery();
                this.state = 169;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            {
                                this.state = 143;
                                localctx._autoorder = this.match(SDBLParser.AUTOORDER);
                                this.state = 144;
                                localctx._orders = this.orderBy();
                                this.state = 145;
                                localctx._totals = this.totalBy();
                            }
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 147;
                                localctx._orders = this.orderBy();
                                this.state = 148;
                                localctx._autoorder = this.match(SDBLParser.AUTOORDER);
                                this.state = 149;
                                localctx._totals = this.totalBy();
                            }
                        }
                        break;
                    case 3:
                        {
                            {
                                this.state = 151;
                                localctx._orders = this.orderBy();
                                this.state = 152;
                                localctx._totals = this.totalBy();
                                this.state = 153;
                                localctx._autoorder = this.match(SDBLParser.AUTOORDER);
                            }
                        }
                        break;
                    case 4:
                        {
                            {
                                this.state = 155;
                                localctx._autoorder = this.match(SDBLParser.AUTOORDER);
                                this.state = 158;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case 140:
                                        {
                                            this.state = 156;
                                            localctx._orders = this.orderBy();
                                        }
                                        break;
                                    case 53:
                                        {
                                            this.state = 157;
                                            localctx._totals = this.totalBy();
                                        }
                                        break;
                                    case -1:
                                    case 6:
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                        break;
                    case 5:
                        {
                            {
                                this.state = 160;
                                localctx._orders = this.orderBy();
                                this.state = 163;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case 24:
                                        {
                                            this.state = 161;
                                            localctx._autoorder = this.match(SDBLParser.AUTOORDER);
                                        }
                                        break;
                                    case 53:
                                        {
                                            this.state = 162;
                                            localctx._totals = this.totalBy();
                                        }
                                        break;
                                    case -1:
                                    case 6:
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                        break;
                    case 6:
                        {
                            {
                                this.state = 165;
                                localctx._totals = this.totalBy();
                                this.state = 167;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 24) {
                                    {
                                        this.state = 166;
                                        localctx._autoorder = this.match(SDBLParser.AUTOORDER);
                                    }
                                }
                            }
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public subquery(): SubqueryContext {
        let localctx: SubqueryContext = new SubqueryContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, SDBLParser.RULE_subquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 171;
                localctx._main = this.query();
                this.state = 173;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 172;
                            this.orderBy();
                        }
                        break;
                }
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 153) {
                    {
                        this.state = 176;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 175;
                                    localctx._union = this.union();
                                    localctx._unions.push(localctx._union);
                                }
                            }
                            this.state = 178;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === 153);
                    }
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public union(): UnionContext {
        let localctx: UnionContext = new UnionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, SDBLParser.RULE_union);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 182;
                this.match(SDBLParser.UNION);
                this.state = 184;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 152) {
                    {
                        this.state = 183;
                        this.match(SDBLParser.ALL);
                    }
                }

                this.state = 186;
                this.query();
                this.state = 188;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 187;
                            this.orderBy();
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public query(): QueryContext {
        let localctx: QueryContext = new QueryContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, SDBLParser.RULE_query);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 190;
                this.match(SDBLParser.SELECT);
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 20 || _la === 30 || _la === 52) {
                    {
                        this.state = 191;
                        this.limitations();
                    }
                }

                this.state = 194;
                localctx._columns = this.selectedFields();
                this.state = 197;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 39) {
                    {
                        this.state = 195;
                        this.match(SDBLParser.INTO);
                        this.state = 196;
                        localctx._temporaryTableName = this.identifier();
                    }
                }

                this.state = 201;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 36) {
                    {
                        this.state = 199;
                        this.match(SDBLParser.FROM);
                        this.state = 200;
                        localctx._from_ = this.dataSources();
                    }
                }

                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 57) {
                    {
                        this.state = 203;
                        this.match(SDBLParser.WHERE);
                        this.state = 204;
                        localctx._where = this.logicalExpression();
                    }
                }

                this.state = 210;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 139) {
                    {
                        this.state = 207;
                        this.match(SDBLParser.GROUP);
                        this.state = 208;
                        _la = this._input.LA(1);
                        if (!(_la === 26 || _la === 49)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 209;
                        localctx._groupBy = this.groupByItem();
                    }
                }

                this.state = 214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 37) {
                    {
                        this.state = 212;
                        this.match(SDBLParser.HAVING);
                        this.state = 213;
                        localctx._having = this.logicalExpression();
                    }
                }

                this.state = 221;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 150) {
                    {
                        this.state = 216;
                        this.match(SDBLParser.FOR);
                        this.state = 217;
                        this.match(SDBLParser.UPDATE);
                        this.state = 219;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((_la - 119) & ~0x1f) === 0 && ((1 << (_la - 119)) & 262143) !== 0) {
                            {
                                this.state = 218;
                                localctx._forUpdate = this.mdo();
                            }
                        }
                    }
                }

                this.state = 233;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 138) {
                    {
                        this.state = 223;
                        this.match(SDBLParser.INDEX);
                        this.state = 224;
                        _la = this._input.LA(1);
                        if (!(_la === 26 || _la === 49)) {
                            this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 225;
                        localctx._indexingItem = this.indexingItem();
                        localctx._indexes.push(localctx._indexingItem);
                        this.state = 230;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === 7) {
                            {
                                {
                                    this.state = 226;
                                    this.match(SDBLParser.COMMA);
                                    this.state = 227;
                                    localctx._indexingItem = this.indexingItem();
                                    localctx._indexes.push(localctx._indexingItem);
                                }
                            }
                            this.state = 232;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public limitations(): LimitationsContext {
        let localctx: LimitationsContext = new LimitationsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, SDBLParser.RULE_limitations);
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 238;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 52:
                                    {
                                        this.state = 235;
                                        this.top();
                                    }
                                    break;
                                case 30:
                                    {
                                        this.state = 236;
                                        this.match(SDBLParser.DISTINCT);
                                    }
                                    break;
                                case 20:
                                    {
                                        this.state = 237;
                                        this.match(SDBLParser.ALLOWED);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 240;
                            this.match(SDBLParser.ALLOWED);
                            this.state = 241;
                            this.match(SDBLParser.DISTINCT);
                            this.state = 242;
                            this.top();
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        {
                            this.state = 243;
                            this.match(SDBLParser.ALLOWED);
                            this.state = 244;
                            this.top();
                            this.state = 245;
                            this.match(SDBLParser.DISTINCT);
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        {
                            this.state = 247;
                            this.top();
                            this.state = 248;
                            this.match(SDBLParser.ALLOWED);
                            this.state = 249;
                            this.match(SDBLParser.DISTINCT);
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        {
                            this.state = 251;
                            this.top();
                            this.state = 252;
                            this.match(SDBLParser.DISTINCT);
                            this.state = 253;
                            this.match(SDBLParser.ALLOWED);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        {
                            this.state = 255;
                            this.match(SDBLParser.DISTINCT);
                            this.state = 256;
                            this.match(SDBLParser.ALLOWED);
                            this.state = 257;
                            this.top();
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        {
                            this.state = 258;
                            this.match(SDBLParser.DISTINCT);
                            this.state = 259;
                            this.top();
                            this.state = 260;
                            this.match(SDBLParser.ALLOWED);
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        {
                            this.state = 262;
                            this.match(SDBLParser.ALLOWED);
                            this.state = 263;
                            this.match(SDBLParser.DISTINCT);
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        {
                            this.state = 264;
                            this.match(SDBLParser.ALLOWED);
                            this.state = 265;
                            this.top();
                        }
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                    {
                        {
                            this.state = 266;
                            this.match(SDBLParser.DISTINCT);
                            this.state = 267;
                            this.match(SDBLParser.ALLOWED);
                        }
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                    {
                        {
                            this.state = 268;
                            this.match(SDBLParser.DISTINCT);
                            this.state = 269;
                            this.top();
                        }
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localctx, 12);
                    {
                        {
                            this.state = 270;
                            this.top();
                            this.state = 271;
                            this.match(SDBLParser.ALLOWED);
                        }
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 13);
                    {
                        {
                            this.state = 273;
                            this.top();
                            this.state = 274;
                            this.match(SDBLParser.DISTINCT);
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public top(): TopContext {
        let localctx: TopContext = new TopContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, SDBLParser.RULE_top);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 278;
                this.match(SDBLParser.TOP);
                this.state = 279;
                localctx._count = this.match(SDBLParser.DECIMAL);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public selectedFields(): SelectedFieldsContext {
        let localctx: SelectedFieldsContext = new SelectedFieldsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, SDBLParser.RULE_selectedFields);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 281;
                localctx._selectedField = this.selectedField();
                localctx._fields.push(localctx._selectedField);
                this.state = 286;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 282;
                            this.match(SDBLParser.COMMA);
                            this.state = 283;
                            localctx._selectedField = this.selectedField();
                            localctx._fields.push(localctx._selectedField);
                        }
                    }
                    this.state = 288;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public selectedField(): SelectedFieldContext {
        let localctx: SelectedFieldContext = new SelectedFieldContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, SDBLParser.RULE_selectedField);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 294;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 25, this._ctx)) {
                    case 1:
                        {
                            this.state = 289;
                            this.asteriskField();
                        }
                        break;
                    case 2:
                        {
                            this.state = 290;
                            this.columnField();
                        }
                        break;
                    case 3:
                        {
                            this.state = 291;
                            this.emptyTableField();
                        }
                        break;
                    case 4:
                        {
                            this.state = 292;
                            this.inlineTableField();
                        }
                        break;
                    case 5:
                        {
                            this.state = 293;
                            this.expressionField();
                        }
                        break;
                }
                this.state = 297;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            this.state = 296;
                            this.alias();
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public asteriskField(): AsteriskFieldContext {
        let localctx: AsteriskFieldContext = new AsteriskFieldContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, SDBLParser.RULE_asteriskField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (
                    (((_la - 31) & ~0x1f) === 0 && ((1 << (_la - 31)) & 4165469189) !== 0) ||
                    (((_la - 63) & ~0x1f) === 0 && ((1 << (_la - 63)) & 4294967295) !== 0) ||
                    (((_la - 95) & ~0x1f) === 0 && ((1 << (_la - 95)) & 4294967295) !== 0) ||
                    (((_la - 127) & ~0x1f) === 0 && ((1 << (_la - 127)) & 134168575) !== 0) ||
                    (((_la - 160) & ~0x1f) === 0 && ((1 << (_la - 160)) & 32761) !== 0)
                ) {
                    {
                        {
                            this.state = 299;
                            localctx._tableName = this.identifier();
                            this.state = 300;
                            this.match(SDBLParser.DOT);
                        }
                    }
                    this.state = 306;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 307;
                this.match(SDBLParser.MUL);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public expressionField(): ExpressionFieldContext {
        let localctx: ExpressionFieldContext = new ExpressionFieldContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, SDBLParser.RULE_expressionField);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 309;
                this.logicalExpression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public columnField(): ColumnFieldContext {
        let localctx: ColumnFieldContext = new ColumnFieldContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, SDBLParser.RULE_columnField);
        try {
            this.state = 313;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 44:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 311;
                        this.match(SDBLParser.NULL);
                    }
                    break;
                case 92:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 312;
                        this.recordAutoNumberFunction();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public emptyTableField(): EmptyTableFieldContext {
        let localctx: EmptyTableFieldContext = new EmptyTableFieldContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, SDBLParser.RULE_emptyTableField);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 315;
                localctx._emptyTable = this.match(SDBLParser.EMPTYTABLE);
                this.state = 316;
                this.match(SDBLParser.DOT);
                this.state = 317;
                this.match(SDBLParser.LPAREN);
                this.state = 318;
                this.emptyTableColumns();
                this.state = 319;
                this.match(SDBLParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public emptyTableColumns(): EmptyTableColumnsContext {
        let localctx: EmptyTableColumnsContext = new EmptyTableColumnsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, SDBLParser.RULE_emptyTableColumns);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 321;
                localctx._alias = this.alias();
                localctx._columns.push(localctx._alias);
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 322;
                            this.match(SDBLParser.COMMA);
                            this.state = 323;
                            localctx._alias = this.alias();
                            localctx._columns.push(localctx._alias);
                        }
                    }
                    this.state = 328;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public inlineTableField(): InlineTableFieldContext {
        let localctx: InlineTableFieldContext = new InlineTableFieldContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, SDBLParser.RULE_inlineTableField);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 329;
                localctx._inlineTable = this.column();
                this.state = 330;
                this.match(SDBLParser.DOT);
                this.state = 331;
                this.match(SDBLParser.LPAREN);
                this.state = 332;
                localctx._inlineTableFields = this.selectedFields();
                this.state = 333;
                this.match(SDBLParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public recordAutoNumberFunction(): RecordAutoNumberFunctionContext {
        let localctx: RecordAutoNumberFunctionContext = new RecordAutoNumberFunctionContext(
            this,
            this._ctx,
            this.state
        );
        this.enterRule(localctx, 34, SDBLParser.RULE_recordAutoNumberFunction);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 335;
                localctx._doCall = this.match(SDBLParser.RECORDAUTONUMBER);
                this.state = 336;
                this.match(SDBLParser.LPAREN);
                this.state = 337;
                this.match(SDBLParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public groupByItem(): GroupByItemContext {
        let localctx: GroupByItemContext = new GroupByItemContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, SDBLParser.RULE_groupByItem);
        let _la: number;
        try {
            this.state = 365;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 142:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 339;
                        this.match(SDBLParser.GROUPING);
                        this.state = 340;
                        this.match(SDBLParser.SET);
                        this.state = 341;
                        this.match(SDBLParser.LPAREN);
                        {
                            this.state = 342;
                            this.match(SDBLParser.LPAREN);
                            this.state = 343;
                            localctx._expressionList = this.expressionList();
                            localctx._groupingSet.push(localctx._expressionList);
                            this.state = 344;
                            this.match(SDBLParser.RPAREN);
                            this.state = 352;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 7) {
                                {
                                    {
                                        this.state = 345;
                                        this.match(SDBLParser.COMMA);
                                        this.state = 346;
                                        this.match(SDBLParser.LPAREN);
                                        this.state = 347;
                                        localctx._expressionList = this.expressionList();
                                        localctx._groupingSet.push(localctx._expressionList);
                                        this.state = 348;
                                        this.match(SDBLParser.RPAREN);
                                    }
                                }
                                this.state = 354;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        this.state = 355;
                        this.match(SDBLParser.RPAREN);
                    }
                    break;
                case 4:
                case 9:
                case 10:
                case 18:
                case 27:
                case 28:
                case 31:
                case 33:
                case 35:
                case 41:
                case 44:
                case 50:
                case 53:
                case 54:
                case 55:
                case 56:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 125:
                case 126:
                case 127:
                case 128:
                case 129:
                case 130:
                case 131:
                case 132:
                case 133:
                case 134:
                case 135:
                case 136:
                case 137:
                case 138:
                case 139:
                case 140:
                case 141:
                case 143:
                case 144:
                case 145:
                case 146:
                case 147:
                case 148:
                case 149:
                case 150:
                case 151:
                case 152:
                case 153:
                case 156:
                case 157:
                case 158:
                case 160:
                case 163:
                case 164:
                case 165:
                case 166:
                case 167:
                case 168:
                case 169:
                case 170:
                case 171:
                case 172:
                case 173:
                case 174:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 357;
                            localctx._expression = this.expression(0);
                            localctx._groupBy.push(localctx._expression);
                            this.state = 362;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 7) {
                                {
                                    {
                                        this.state = 358;
                                        this.match(SDBLParser.COMMA);
                                        this.state = 359;
                                        localctx._expression = this.expression(0);
                                        localctx._groupBy.push(localctx._expression);
                                    }
                                }
                                this.state = 364;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public indexingItem(): IndexingItemContext {
        let localctx: IndexingItemContext = new IndexingItemContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, SDBLParser.RULE_indexingItem);
        try {
            this.state = 369;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 18:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 367;
                        this.parameter();
                    }
                    break;
                case 31:
                case 33:
                case 41:
                case 50:
                case 53:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 125:
                case 126:
                case 127:
                case 128:
                case 129:
                case 130:
                case 131:
                case 132:
                case 133:
                case 134:
                case 135:
                case 136:
                case 137:
                case 138:
                case 139:
                case 140:
                case 143:
                case 144:
                case 145:
                case 146:
                case 147:
                case 148:
                case 149:
                case 150:
                case 151:
                case 152:
                case 153:
                case 160:
                case 163:
                case 164:
                case 165:
                case 166:
                case 167:
                case 168:
                case 169:
                case 170:
                case 171:
                case 172:
                case 173:
                case 174:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 368;
                        this.column();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public orderBy(): OrderByContext {
        let localctx: OrderByContext = new OrderByContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, SDBLParser.RULE_orderBy);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 371;
                this.match(SDBLParser.ORDER);
                this.state = 372;
                _la = this._input.LA(1);
                if (!(_la === 26 || _la === 49)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 373;
                localctx._ordersByExpession = this.ordersByExpession();
                localctx._orders.push(localctx._ordersByExpession);
                this.state = 376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 7) {
                    {
                        this.state = 374;
                        this.match(SDBLParser.COMMA);
                        this.state = 375;
                        localctx._ordersByExpession = this.ordersByExpession();
                        localctx._orders.push(localctx._ordersByExpession);
                    }
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public ordersByExpession(): OrdersByExpessionContext {
        let localctx: OrdersByExpessionContext = new OrdersByExpessionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, SDBLParser.RULE_ordersByExpession);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 378;
                this.expression(0);
                this.state = 384;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 23:
                    case 29:
                        {
                            this.state = 379;
                            localctx._direction = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === 23 || _la === 29)) {
                                localctx._direction = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                    case 38:
                        {
                            {
                                this.state = 380;
                                localctx._hierarchy = this.match(SDBLParser.HIERARCHY);
                                this.state = 382;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 29) {
                                    {
                                        this.state = 381;
                                        localctx._direction = this.match(SDBLParser.DESC);
                                    }
                                }
                            }
                        }
                        break;
                    case -1:
                    case 5:
                    case 6:
                    case 7:
                    case 24:
                    case 53:
                    case 140:
                    case 153:
                        break;
                    default:
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public totalBy(): TotalByContext {
        let localctx: TotalByContext = new TotalByContext(this, this._ctx, this.state);
        this.enterRule(localctx, 44, SDBLParser.RULE_totalBy);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 386;
                this.match(SDBLParser.TOTALS);
                this.state = 388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (
                    ((_la & ~0x1f) === 0 && ((1 << _la) & 2550466064) !== 0) ||
                    (((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4277275909) !== 0) ||
                    (((_la - 65) & ~0x1f) === 0 && ((1 << (_la - 65)) & 4294967295) !== 0) ||
                    (((_la - 97) & ~0x1f) === 0 && ((1 << (_la - 97)) & 4294967295) !== 0) ||
                    (((_la - 129) & ~0x1f) === 0 && ((1 << (_la - 129)) & 3120553983) !== 0) ||
                    (((_la - 163) & ~0x1f) === 0 && ((1 << (_la - 163)) & 4095) !== 0)
                ) {
                    {
                        this.state = 387;
                        this.selectedFields();
                    }
                }

                this.state = 390;
                _la = this._input.LA(1);
                if (!(_la === 26 || _la === 49)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 391;
                localctx._totalsGroup = this.totalsGroup();
                localctx._totalsGroups.push(localctx._totalsGroup);
                this.state = 396;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 392;
                            this.match(SDBLParser.COMMA);
                            this.state = 393;
                            localctx._totalsGroup = this.totalsGroup();
                            localctx._totalsGroups.push(localctx._totalsGroup);
                        }
                    }
                    this.state = 398;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public totalsGroup(): TotalsGroupContext {
        let localctx: TotalsGroupContext = new TotalsGroupContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, SDBLParser.RULE_totalsGroup);
        let _la: number;
        try {
            this.state = 411;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 48:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 399;
                        this.match(SDBLParser.OVERALL);
                    }
                    break;
                case 4:
                case 9:
                case 10:
                case 18:
                case 27:
                case 28:
                case 31:
                case 33:
                case 35:
                case 41:
                case 44:
                case 50:
                case 53:
                case 54:
                case 55:
                case 56:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                case 123:
                case 124:
                case 125:
                case 126:
                case 127:
                case 128:
                case 129:
                case 130:
                case 131:
                case 132:
                case 133:
                case 134:
                case 135:
                case 136:
                case 137:
                case 138:
                case 139:
                case 140:
                case 141:
                case 143:
                case 144:
                case 145:
                case 146:
                case 147:
                case 148:
                case 149:
                case 150:
                case 151:
                case 152:
                case 153:
                case 156:
                case 157:
                case 158:
                case 160:
                case 163:
                case 164:
                case 165:
                case 166:
                case 167:
                case 168:
                case 169:
                case 170:
                case 171:
                case 172:
                case 173:
                case 174:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 400;
                            this.expression(0);
                            this.state = 406;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
                                case 1:
                                    {
                                        {
                                            this.state = 402;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === 88) {
                                                {
                                                    this.state = 401;
                                                    this.match(SDBLParser.ONLY);
                                                }
                                            }

                                            this.state = 404;
                                            this.match(SDBLParser.HIERARCHY);
                                        }
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 405;
                                        this.periodic();
                                    }
                                    break;
                            }
                            this.state = 409;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (
                                (((_la - 22) & ~0x1f) === 0 && ((1 << (_la - 22)) & 2416445953) !== 0) ||
                                (((_la - 58) & ~0x1f) === 0 && ((1 << (_la - 58)) & 4294967295) !== 0) ||
                                (((_la - 90) & ~0x1f) === 0 && ((1 << (_la - 90)) & 4294967295) !== 0) ||
                                (((_la - 122) & ~0x1f) === 0 && ((1 << (_la - 122)) & 4293394431) !== 0) ||
                                (((_la - 160) & ~0x1f) === 0 && ((1 << (_la - 160)) & 32761) !== 0)
                            ) {
                                {
                                    this.state = 408;
                                    this.alias();
                                }
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public periodic(): PeriodicContext {
        let localctx: PeriodicContext = new PeriodicContext(this, this._ctx, this.state);
        this.enterRule(localctx, 48, SDBLParser.RULE_periodic);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 413;
                this.match(SDBLParser.PERIODS);
                this.state = 414;
                this.match(SDBLParser.LPAREN);
                this.state = 415;
                localctx._periodType = this._input.LT(1);
                _la = this._input.LA(1);
                if (
                    !(
                        (((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 67289281) !== 0) ||
                        (((_la - 107) & ~0x1f) === 0 && ((1 << (_la - 107)) & 1281) !== 0)
                    )
                ) {
                    localctx._periodType = this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 418;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 43, this._ctx)) {
                    case 1:
                        {
                            this.state = 416;
                            this.match(SDBLParser.COMMA);
                            this.state = 417;
                            localctx._first = this.expression(0);
                        }
                        break;
                }
                this.state = 422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 7) {
                    {
                        this.state = 420;
                        this.match(SDBLParser.COMMA);
                        this.state = 421;
                        localctx._second = this.expression(0);
                    }
                }

                this.state = 424;
                this.match(SDBLParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public column(): ColumnContext {
        let localctx: ColumnContext = new ColumnContext(this, this._ctx, this.state);
        this.enterRule(localctx, 50, SDBLParser.RULE_column);
        try {
            let _alt: number;
            this.state = 441;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 426;
                        localctx._mdoName = this.identifier();
                        this.state = 429;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 427;
                                            this.match(SDBLParser.DOT);
                                            this.state = 428;
                                            localctx._identifier = this.identifier();
                                            localctx._columnNames.push(localctx._identifier);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 431;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 433;
                        localctx._identifier = this.identifier();
                        localctx._columnNames.push(localctx._identifier);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 434;
                        this.mdo();
                        this.state = 437;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 435;
                                            this.match(SDBLParser.DOT);
                                            this.state = 436;
                                            localctx._identifier = this.identifier();
                                            localctx._columnNames.push(localctx._identifier);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 439;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    public expression(): ExpressionContext;

    public expression(_p: number): ExpressionContext;

    // @RuleVersion(0)
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx: ParserRuleContext = this._ctx;
        let _parentState: number = this.state;
        let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
        let _prevctx: ExpressionContext = localctx;
        let _startState: number = 52;
        this.enterRecursionRule(localctx, 52, SDBLParser.RULE_expression, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 450;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 48, this._ctx)) {
                    case 1:
                        {
                            this.state = 444;
                            this.primitiveExpression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 445;
                            this.functionCall();
                        }
                        break;
                    case 3:
                        {
                            this.state = 446;
                            this.caseExpression();
                        }
                        break;
                    case 4:
                        {
                            this.state = 447;
                            this.column();
                        }
                        break;
                    case 5:
                        {
                            this.state = 448;
                            this.bracketExpression();
                        }
                        break;
                    case 6:
                        {
                            this.state = 449;
                            this.unaryExpression();
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 457;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new ExpressionContext(this, _parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, SDBLParser.RULE_expression);
                                this.state = 452;
                                if (!this.precpred(this._ctx, 1)) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 453;
                                localctx._binaryOperation = this._input.LT(1);
                                _la = this._input.LA(1);
                                if (!((_la & ~0x1f) === 0 && ((1 << _la) & 198144) !== 0)) {
                                    localctx._binaryOperation = this._errHandler.recoverInline(this);
                                } else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 454;
                                this.expression(2);
                            }
                        }
                    }
                    this.state = 459;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }

    // @RuleVersion(0)
    public primitiveExpression(): PrimitiveExpressionContext {
        let localctx: PrimitiveExpressionContext = new PrimitiveExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, SDBLParser.RULE_primitiveExpression);
        let _la: number;
        try {
            this.state = 495;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 44:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 460;
                        this.match(SDBLParser.NULL);
                    }
                    break;
                case 55:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 461;
                        this.match(SDBLParser.UNDEFINED);
                    }
                    break;
                case 158:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 462;
                        this.multiString();
                    }
                    break;
                case 156:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 463;
                        this.match(SDBLParser.DECIMAL);
                    }
                    break;
                case 157:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 464;
                        this.match(SDBLParser.FLOAT);
                    }
                    break;
                case 35:
                case 54:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 465;
                        localctx._booleanValue = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === 35 || _la === 54)) {
                            localctx._booleanValue = this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 69:
                    this.enterOuterAlt(localctx, 7);
                    {
                        {
                            this.state = 466;
                            this.match(SDBLParser.DATETIME);
                            this.state = 467;
                            this.match(SDBLParser.LPAREN);
                            this.state = 468;
                            localctx._year = this.datePart();
                            this.state = 469;
                            this.match(SDBLParser.COMMA);
                            this.state = 470;
                            localctx._month = this.datePart();
                            this.state = 471;
                            this.match(SDBLParser.COMMA);
                            this.state = 472;
                            localctx._day = this.datePart();
                            this.state = 480;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 7) {
                                {
                                    this.state = 473;
                                    this.match(SDBLParser.COMMA);
                                    this.state = 474;
                                    localctx._hour = this.datePart();
                                    this.state = 475;
                                    this.match(SDBLParser.COMMA);
                                    this.state = 476;
                                    localctx._minute = this.datePart();
                                    this.state = 477;
                                    this.match(SDBLParser.COMMA);
                                    this.state = 478;
                                    localctx._second = this.datePart();
                                }
                            }

                            this.state = 482;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 18:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 484;
                        this.parameter();
                    }
                    break;
                case 111:
                    this.enterOuterAlt(localctx, 9);
                    {
                        {
                            this.state = 485;
                            this.match(SDBLParser.TYPE);
                            this.state = 486;
                            this.match(SDBLParser.LPAREN);
                            this.state = 492;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 119:
                                case 120:
                                case 121:
                                case 122:
                                case 123:
                                case 124:
                                case 125:
                                case 126:
                                case 127:
                                case 128:
                                case 129:
                                case 130:
                                case 131:
                                case 132:
                                case 133:
                                case 134:
                                case 135:
                                case 136:
                                    {
                                        this.state = 487;
                                        this.mdo();
                                    }
                                    break;
                                case 100:
                                    {
                                        this.state = 488;
                                        this.match(SDBLParser.STRING);
                                    }
                                    break;
                                case 63:
                                    {
                                        this.state = 489;
                                        this.match(SDBLParser.BOOLEAN);
                                    }
                                    break;
                                case 66:
                                    {
                                        this.state = 490;
                                        this.match(SDBLParser.DATE);
                                    }
                                    break;
                                case 86:
                                    {
                                        this.state = 491;
                                        this.match(SDBLParser.NUMBER);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 494;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public caseExpression(): CaseExpressionContext {
        let localctx: CaseExpressionContext = new CaseExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, SDBLParser.RULE_caseExpression);
        let _la: number;
        try {
            this.state = 529;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 58, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 497;
                            this.match(SDBLParser.CASE);
                            this.state = 498;
                            localctx._caseExp = this.expression(0);
                            this.state = 500;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 499;
                                        this.caseBranch();
                                    }
                                }
                                this.state = 502;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === 56);
                            this.state = 506;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 32) {
                                {
                                    this.state = 504;
                                    this.match(SDBLParser.ELSE);
                                    this.state = 505;
                                    localctx._elseExp = this.logicalExpression();
                                }
                            }

                            this.state = 508;
                            this.match(SDBLParser.END);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 510;
                            this.match(SDBLParser.CASE);
                            this.state = 512;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 511;
                                        this.caseBranch();
                                    }
                                }
                                this.state = 514;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === 56);
                            this.state = 518;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 32) {
                                {
                                    this.state = 516;
                                    this.match(SDBLParser.ELSE);
                                    this.state = 517;
                                    localctx._elseExp = this.logicalExpression();
                                }
                            }

                            this.state = 520;
                            this.match(SDBLParser.END);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        {
                            this.state = 522;
                            this.caseBranch();
                            this.state = 525;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 32) {
                                {
                                    this.state = 523;
                                    this.match(SDBLParser.ELSE);
                                    this.state = 524;
                                    localctx._elseExp = this.logicalExpression();
                                }
                            }

                            this.state = 527;
                            this.match(SDBLParser.END);
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public caseBranch(): CaseBranchContext {
        let localctx: CaseBranchContext = new CaseBranchContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, SDBLParser.RULE_caseBranch);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 531;
                this.match(SDBLParser.WHEN);
                this.state = 532;
                this.logicalExpression();
                this.state = 533;
                this.match(SDBLParser.THEN);
                this.state = 534;
                this.logicalExpression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public bracketExpression(): BracketExpressionContext {
        let localctx: BracketExpressionContext = new BracketExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, SDBLParser.RULE_bracketExpression);
        try {
            this.state = 544;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 536;
                            this.match(SDBLParser.LPAREN);
                            this.state = 537;
                            this.expression(0);
                            this.state = 538;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 540;
                            this.match(SDBLParser.LPAREN);
                            this.state = 541;
                            this.subquery();
                            this.state = 542;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public unaryExpression(): UnaryExpressionContext {
        let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, SDBLParser.RULE_unaryExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 546;
                this.sign();
                this.state = 547;
                this.expression(0);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public functionCall(): FunctionCallContext {
        let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
        this.enterRule(localctx, 64, SDBLParser.RULE_functionCall);
        try {
            let _alt: number;
            this.state = 567;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 61:
                case 65:
                case 82:
                case 83:
                case 105:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 549;
                        this.aggregateFunctions();
                    }
                    break;
                case 41:
                case 58:
                case 59:
                case 60:
                case 62:
                case 64:
                case 67:
                case 68:
                case 70:
                case 71:
                case 74:
                case 75:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 84:
                case 85:
                case 87:
                case 91:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 101:
                case 102:
                case 103:
                case 104:
                case 106:
                case 108:
                case 109:
                case 110:
                case 112:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 141:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 550;
                        this.builtInFunctions();
                    }
                    break;
                case 113:
                    this.enterOuterAlt(localctx, 3);
                    {
                        {
                            this.state = 551;
                            this.valueFunction();
                            this.state = 556;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 552;
                                            this.match(SDBLParser.DOT);
                                            this.state = 553;
                                            localctx._identifier = this.identifier();
                                            localctx._columnNames.push(localctx._identifier);
                                        }
                                    }
                                }
                                this.state = 558;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
                            }
                        }
                    }
                    break;
                case 28:
                    this.enterOuterAlt(localctx, 4);
                    {
                        {
                            this.state = 559;
                            this.castFunction();
                            this.state = 564;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 560;
                                            this.match(SDBLParser.DOT);
                                            this.state = 561;
                                            localctx._identifier = this.identifier();
                                            localctx._columnNames.push(localctx._identifier);
                                        }
                                    }
                                }
                                this.state = 566;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public builtInFunctions(): BuiltInFunctionsContext {
        let localctx: BuiltInFunctionsContext = new BuiltInFunctionsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 66, SDBLParser.RULE_builtInFunctions);
        let _la: number;
        try {
            this.state = 658;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 104:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 569;
                            localctx._doCall = this.match(SDBLParser.SUBSTRING);
                            this.state = 570;
                            this.match(SDBLParser.LPAREN);
                            this.state = 571;
                            localctx._string_ = this.expression(0);
                            this.state = 572;
                            this.match(SDBLParser.COMMA);
                            this.state = 573;
                            localctx._charNo = this.expression(0);
                            this.state = 574;
                            this.match(SDBLParser.COMMA);
                            this.state = 575;
                            localctx._count = this.expression(0);
                            this.state = 576;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 70:
                case 71:
                case 77:
                case 84:
                case 85:
                case 87:
                case 96:
                case 115:
                case 116:
                case 117:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 578;
                            localctx._doCall = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (
                                !(
                                    (((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 67289219) !== 0) ||
                                    (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 7) !== 0)
                                )
                            ) {
                                localctx._doCall = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 579;
                            this.match(SDBLParser.LPAREN);
                            this.state = 580;
                            localctx._date = this.expression(0);
                            this.state = 581;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 62:
                case 74:
                    this.enterOuterAlt(localctx, 3);
                    {
                        {
                            this.state = 583;
                            localctx._doCall = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === 62 || _la === 74)) {
                                localctx._doCall = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 584;
                            this.match(SDBLParser.LPAREN);
                            this.state = 585;
                            localctx._date = this.expression(0);
                            this.state = 586;
                            this.match(SDBLParser.COMMA);
                            this.state = 587;
                            localctx._periodType = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (
                                !(
                                    (((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 180417) !== 0) ||
                                    (((_la - 107) & ~0x1f) === 0 && ((1 << (_la - 107)) & 1281) !== 0)
                                )
                            ) {
                                localctx._periodType = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 588;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 67:
                    this.enterOuterAlt(localctx, 4);
                    {
                        {
                            this.state = 590;
                            localctx._doCall = this.match(SDBLParser.DATEADD);
                            this.state = 591;
                            this.match(SDBLParser.LPAREN);
                            this.state = 592;
                            localctx._date = this.expression(0);
                            this.state = 593;
                            this.match(SDBLParser.COMMA);
                            this.state = 594;
                            localctx._periodType = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (
                                !(
                                    (((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 67289281) !== 0) ||
                                    (((_la - 107) & ~0x1f) === 0 && ((1 << (_la - 107)) & 1281) !== 0)
                                )
                            ) {
                                localctx._periodType = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 595;
                            this.match(SDBLParser.COMMA);
                            this.state = 596;
                            localctx._count = this.expression(0);
                            this.state = 597;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 68:
                    this.enterOuterAlt(localctx, 5);
                    {
                        {
                            this.state = 599;
                            localctx._doCall = this.match(SDBLParser.DATEDIFF);
                            this.state = 600;
                            this.match(SDBLParser.LPAREN);
                            this.state = 601;
                            localctx._firstdate = this.expression(0);
                            this.state = 602;
                            this.match(SDBLParser.COMMA);
                            this.state = 603;
                            localctx._seconddate = this.expression(0);
                            this.state = 604;
                            this.match(SDBLParser.COMMA);
                            this.state = 605;
                            localctx._periodType = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (
                                !((((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 67289217) !== 0) || _la === 117)
                            ) {
                                localctx._periodType = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 606;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 91:
                case 93:
                case 114:
                case 141:
                    this.enterOuterAlt(localctx, 6);
                    {
                        {
                            this.state = 608;
                            localctx._doCall = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!((((_la - 91) & ~0x1f) === 0 && ((1 << (_la - 91)) & 8388613) !== 0) || _la === 141)) {
                                localctx._doCall = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 609;
                            this.match(SDBLParser.LPAREN);
                            this.state = 610;
                            localctx._value = this.expression(0);
                            this.state = 611;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 41:
                    this.enterOuterAlt(localctx, 7);
                    {
                        {
                            this.state = 613;
                            localctx._doCall = this.match(SDBLParser.ISNULL);
                            this.state = 614;
                            this.match(SDBLParser.LPAREN);
                            this.state = 615;
                            localctx._first = this.logicalExpression();
                            this.state = 616;
                            this.match(SDBLParser.COMMA);
                            this.state = 617;
                            localctx._second = this.logicalExpression();
                            this.state = 618;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 58:
                case 59:
                case 60:
                case 64:
                case 75:
                case 78:
                case 79:
                case 80:
                case 94:
                case 97:
                case 98:
                case 106:
                    this.enterOuterAlt(localctx, 8);
                    {
                        {
                            this.state = 620;
                            localctx._doCall = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (
                                !(
                                    (((_la - 58) & ~0x1f) === 0 && ((1 << (_la - 58)) & 7471175) !== 0) ||
                                    (((_la - 94) & ~0x1f) === 0 && ((1 << (_la - 94)) & 4121) !== 0)
                                )
                            ) {
                                localctx._doCall = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 621;
                            this.match(SDBLParser.LPAREN);
                            this.state = 622;
                            localctx._decimal = this.expression(0);
                            this.state = 623;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 81:
                case 101:
                case 108:
                case 109:
                case 110:
                case 112:
                    this.enterOuterAlt(localctx, 9);
                    {
                        {
                            this.state = 625;
                            localctx._doCall = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(((_la - 81) & ~0x1f) === 0 && ((1 << (_la - 81)) & 3088056321) !== 0)) {
                                localctx._doCall = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 626;
                            this.match(SDBLParser.LPAREN);
                            this.state = 627;
                            localctx._string_ = this.expression(0);
                            this.state = 628;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 95:
                    this.enterOuterAlt(localctx, 10);
                    {
                        {
                            this.state = 630;
                            localctx._doCall = this.match(SDBLParser.ROUND);
                            this.state = 631;
                            this.match(SDBLParser.LPAREN);
                            this.state = 632;
                            localctx._decimal = this.expression(0);
                            this.state = 633;
                            this.match(SDBLParser.COMMA);
                            this.state = 634;
                            localctx._precise = this.expression(0);
                            this.state = 635;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 99:
                case 118:
                    this.enterOuterAlt(localctx, 11);
                    {
                        {
                            this.state = 637;
                            localctx._doCall = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === 99 || _la === 118)) {
                                localctx._doCall = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 638;
                            this.match(SDBLParser.LPAREN);
                            this.state = 639;
                            localctx._value = this.expression(0);
                            this.state = 640;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 102:
                    this.enterOuterAlt(localctx, 12);
                    {
                        {
                            this.state = 642;
                            localctx._doCall = this.match(SDBLParser.STRFIND);
                            this.state = 643;
                            this.match(SDBLParser.LPAREN);
                            this.state = 644;
                            localctx._string_ = this.expression(0);
                            this.state = 645;
                            this.match(SDBLParser.COMMA);
                            this.state = 646;
                            localctx._substring1 = this.expression(0);
                            this.state = 647;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 103:
                    this.enterOuterAlt(localctx, 13);
                    {
                        {
                            this.state = 649;
                            localctx._doCall = this.match(SDBLParser.STRREPLACE);
                            this.state = 650;
                            this.match(SDBLParser.LPAREN);
                            this.state = 651;
                            localctx._string_ = this.expression(0);
                            this.state = 652;
                            this.match(SDBLParser.COMMA);
                            this.state = 653;
                            localctx._substring1 = this.expression(0);
                            this.state = 654;
                            this.match(SDBLParser.COMMA);
                            this.state = 655;
                            localctx._substring1 = this.expression(0);
                            this.state = 656;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public aggregateFunctions(): AggregateFunctionsContext {
        let localctx: AggregateFunctionsContext = new AggregateFunctionsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 68, SDBLParser.RULE_aggregateFunctions);
        let _la: number;
        try {
            this.state = 675;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 61:
                case 82:
                case 83:
                case 105:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 660;
                            localctx._doCall = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!((((_la - 61) & ~0x1f) === 0 && ((1 << (_la - 61)) & 6291457) !== 0) || _la === 105)) {
                                localctx._doCall = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 661;
                            this.match(SDBLParser.LPAREN);
                            this.state = 662;
                            this.logicalExpression();
                            this.state = 663;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 65:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 665;
                            localctx._doCall = this.match(SDBLParser.COUNT);
                            this.state = 666;
                            this.match(SDBLParser.LPAREN);
                            this.state = 672;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 4:
                                case 9:
                                case 10:
                                case 18:
                                case 27:
                                case 28:
                                case 30:
                                case 31:
                                case 33:
                                case 35:
                                case 41:
                                case 43:
                                case 44:
                                case 50:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 58:
                                case 59:
                                case 60:
                                case 61:
                                case 62:
                                case 63:
                                case 64:
                                case 65:
                                case 66:
                                case 67:
                                case 68:
                                case 69:
                                case 70:
                                case 71:
                                case 72:
                                case 73:
                                case 74:
                                case 75:
                                case 76:
                                case 77:
                                case 78:
                                case 79:
                                case 80:
                                case 81:
                                case 82:
                                case 83:
                                case 84:
                                case 85:
                                case 86:
                                case 87:
                                case 88:
                                case 89:
                                case 90:
                                case 91:
                                case 92:
                                case 93:
                                case 94:
                                case 95:
                                case 96:
                                case 97:
                                case 98:
                                case 99:
                                case 100:
                                case 101:
                                case 102:
                                case 103:
                                case 104:
                                case 105:
                                case 106:
                                case 107:
                                case 108:
                                case 109:
                                case 110:
                                case 111:
                                case 112:
                                case 113:
                                case 114:
                                case 115:
                                case 116:
                                case 117:
                                case 118:
                                case 119:
                                case 120:
                                case 121:
                                case 122:
                                case 123:
                                case 124:
                                case 125:
                                case 126:
                                case 127:
                                case 128:
                                case 129:
                                case 130:
                                case 131:
                                case 132:
                                case 133:
                                case 134:
                                case 135:
                                case 136:
                                case 137:
                                case 138:
                                case 139:
                                case 140:
                                case 141:
                                case 143:
                                case 144:
                                case 145:
                                case 146:
                                case 147:
                                case 148:
                                case 149:
                                case 150:
                                case 151:
                                case 152:
                                case 153:
                                case 156:
                                case 157:
                                case 158:
                                case 160:
                                case 163:
                                case 164:
                                case 165:
                                case 166:
                                case 167:
                                case 168:
                                case 169:
                                case 170:
                                case 171:
                                case 172:
                                case 173:
                                case 174:
                                    {
                                        this.state = 668;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 30) {
                                            {
                                                this.state = 667;
                                                this.match(SDBLParser.DISTINCT);
                                            }
                                        }

                                        this.state = 670;
                                        this.logicalExpression();
                                    }
                                    break;
                                case 16:
                                    {
                                        this.state = 671;
                                        this.match(SDBLParser.MUL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 674;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public valueFunction(): ValueFunctionContext {
        let localctx: ValueFunctionContext = new ValueFunctionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 70, SDBLParser.RULE_valueFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 677;
                localctx._doCall = this.match(SDBLParser.VALUE);
                this.state = 678;
                this.match(SDBLParser.LPAREN);
                this.state = 706;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 67, this._ctx)) {
                    case 1:
                        {
                            {
                                this.state = 679;
                                localctx._type_ = this._input.LT(1);
                                _la = this._input.LA(1);
                                if (!(((_la - 121) & ~0x1f) === 0 && ((1 << (_la - 121)) & 40637) !== 0)) {
                                    localctx._type_ = this._errHandler.recoverInline(this);
                                } else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 680;
                                this.match(SDBLParser.DOT);
                                this.state = 681;
                                localctx._mdoName = this.identifier();
                                this.state = 682;
                                this.match(SDBLParser.DOT);
                                this.state = 683;
                                localctx._emptyFer = this.match(SDBLParser.EMPTYREF);
                            }
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 685;
                                localctx._type_ = this._input.LT(1);
                                _la = this._input.LA(1);
                                if (!(((_la - 123) & ~0x1f) === 0 && ((1 << (_la - 123)) & 143) !== 0)) {
                                    localctx._type_ = this._errHandler.recoverInline(this);
                                } else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 686;
                                this.match(SDBLParser.DOT);
                                this.state = 687;
                                localctx._mdoName = this.identifier();
                                this.state = 688;
                                this.match(SDBLParser.DOT);
                                this.state = 689;
                                localctx._predefinedName = this.identifier();
                            }
                        }
                        break;
                    case 3:
                        {
                            {
                                this.state = 691;
                                localctx._type_ = this.match(SDBLParser.BUSINESS_PROCESS_TYPE);
                                this.state = 692;
                                this.match(SDBLParser.DOT);
                                this.state = 693;
                                localctx._mdoName = this.identifier();
                                this.state = 694;
                                this.match(SDBLParser.DOT);
                                this.state = 695;
                                this.match(SDBLParser.ROUTEPOINT_FIELD);
                                this.state = 696;
                                this.match(SDBLParser.DOT);
                                this.state = 697;
                                localctx._routePointName = this.identifier();
                            }
                        }
                        break;
                    case 4:
                        {
                            {
                                this.state = 699;
                                localctx._systemName = this.identifier();
                                this.state = 700;
                                this.match(SDBLParser.DOT);
                                this.state = 701;
                                localctx._predefinedName = this.identifier();
                            }
                        }
                        break;
                    case 5:
                        {
                            {
                                this.state = 703;
                                this.mdo();
                                this.state = 704;
                                this.match(SDBLParser.DOT);
                            }
                        }
                        break;
                }
                this.state = 708;
                this.match(SDBLParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public castFunction(): CastFunctionContext {
        let localctx: CastFunctionContext = new CastFunctionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 72, SDBLParser.RULE_castFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 710;
                    localctx._doCall = this.match(SDBLParser.CAST);
                    this.state = 711;
                    this.match(SDBLParser.LPAREN);
                    this.state = 712;
                    localctx._value = this.expression(0);
                    this.state = 713;
                    this.match(SDBLParser.AS);
                    this.state = 733;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case 63:
                            {
                                this.state = 714;
                                localctx._type_ = this.match(SDBLParser.BOOLEAN);
                            }
                            break;
                        case 86:
                            {
                                {
                                    this.state = 715;
                                    localctx._type_ = this.match(SDBLParser.NUMBER);
                                    this.state = 723;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === 4) {
                                        {
                                            this.state = 716;
                                            this.match(SDBLParser.LPAREN);
                                            this.state = 717;
                                            localctx._len = this.match(SDBLParser.DECIMAL);
                                            this.state = 720;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            if (_la === 7) {
                                                {
                                                    this.state = 718;
                                                    this.match(SDBLParser.COMMA);
                                                    this.state = 719;
                                                    localctx._prec = this.match(SDBLParser.DECIMAL);
                                                }
                                            }

                                            this.state = 722;
                                            this.match(SDBLParser.RPAREN);
                                        }
                                    }
                                }
                            }
                            break;
                        case 100:
                            {
                                {
                                    this.state = 725;
                                    localctx._type_ = this.match(SDBLParser.STRING);
                                    this.state = 729;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === 4) {
                                        {
                                            this.state = 726;
                                            this.match(SDBLParser.LPAREN);
                                            this.state = 727;
                                            localctx._len = this.match(SDBLParser.DECIMAL);
                                            this.state = 728;
                                            this.match(SDBLParser.RPAREN);
                                        }
                                    }
                                }
                            }
                            break;
                        case 66:
                            {
                                this.state = 731;
                                localctx._type_ = this.match(SDBLParser.DATE);
                            }
                            break;
                        case 119:
                        case 120:
                        case 121:
                        case 122:
                        case 123:
                        case 124:
                        case 125:
                        case 126:
                        case 127:
                        case 128:
                        case 129:
                        case 130:
                        case 131:
                        case 132:
                        case 133:
                        case 134:
                        case 135:
                        case 136:
                            {
                                this.state = 732;
                                this.mdo();
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 735;
                    this.match(SDBLParser.RPAREN);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public logicalExpression(): LogicalExpressionContext {
        let localctx: LogicalExpressionContext = new LogicalExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 74, SDBLParser.RULE_logicalExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 737;
                localctx._predicate = this.predicate();
                localctx._condidions.push(localctx._predicate);
                this.state = 742;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 21 || _la === 47) {
                    {
                        {
                            this.state = 738;
                            _la = this._input.LA(1);
                            if (!(_la === 21 || _la === 47)) {
                                this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 739;
                            localctx._predicate = this.predicate();
                            localctx._condidions.push(localctx._predicate);
                        }
                    }
                    this.state = 744;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public predicate(): PredicateContext {
        let localctx: PredicateContext = new PredicateContext(this, this._ctx, this.state);
        this.enterRule(localctx, 76, SDBLParser.RULE_predicate);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 43) {
                    {
                        {
                            this.state = 745;
                            this.match(SDBLParser.NOT);
                        }
                    }
                    this.state = 750;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 762;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 751;
                            localctx._booleanPredicate = this.expression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 752;
                            this.likePredicate();
                        }
                        break;
                    case 3:
                        {
                            this.state = 753;
                            this.isNullPredicate();
                        }
                        break;
                    case 4:
                        {
                            this.state = 754;
                            this.comparePredicate();
                        }
                        break;
                    case 5:
                        {
                            this.state = 755;
                            this.betweenPredicate();
                        }
                        break;
                    case 6:
                        {
                            this.state = 756;
                            this.inPredicate();
                        }
                        break;
                    case 7:
                        {
                            this.state = 757;
                            this.refsPredicate();
                        }
                        break;
                    case 8:
                        {
                            {
                                this.state = 758;
                                this.match(SDBLParser.LPAREN);
                                this.state = 759;
                                this.logicalExpression();
                                this.state = 760;
                                this.match(SDBLParser.RPAREN);
                            }
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public likePredicate(): LikePredicateContext {
        let localctx: LikePredicateContext = new LikePredicateContext(this, this._ctx, this.state);
        this.enterRule(localctx, 78, SDBLParser.RULE_likePredicate);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 764;
                this.expression(0);
                this.state = 768;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 43) {
                    {
                        {
                            this.state = 765;
                            this.match(SDBLParser.NOT);
                        }
                    }
                    this.state = 770;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 771;
                this.match(SDBLParser.LIKE);
                this.state = 772;
                this.expression(0);
                this.state = 775;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 34) {
                    {
                        this.state = 773;
                        this.match(SDBLParser.ESCAPE);
                        this.state = 774;
                        localctx._escape = this.multiString();
                    }
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public isNullPredicate(): IsNullPredicateContext {
        let localctx: IsNullPredicateContext = new IsNullPredicateContext(this, this._ctx, this.state);
        this.enterRule(localctx, 80, SDBLParser.RULE_isNullPredicate);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 777;
                this.expression(0);
                this.state = 778;
                this.match(SDBLParser.IS);
                this.state = 780;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 43) {
                    {
                        this.state = 779;
                        this.match(SDBLParser.NOT);
                    }
                }

                this.state = 782;
                this.match(SDBLParser.NULL);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public comparePredicate(): ComparePredicateContext {
        let localctx: ComparePredicateContext = new ComparePredicateContext(this, this._ctx, this.state);
        this.enterRule(localctx, 82, SDBLParser.RULE_comparePredicate);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 784;
                this.expression(0);
                this.state = 785;
                localctx._compareOperation = this._input.LT(1);
                _la = this._input.LA(1);
                if (!((_la & ~0x1f) === 0 && ((1 << _la) & 63744) !== 0)) {
                    localctx._compareOperation = this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 786;
                this.expression(0);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public betweenPredicate(): BetweenPredicateContext {
        let localctx: BetweenPredicateContext = new BetweenPredicateContext(this, this._ctx, this.state);
        this.enterRule(localctx, 84, SDBLParser.RULE_betweenPredicate);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 788;
                this.expression(0);
                this.state = 789;
                this.match(SDBLParser.BETWEEN);
                this.state = 790;
                this.expression(0);
                this.state = 791;
                this.match(SDBLParser.AND);
                this.state = 792;
                this.expression(0);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public inPredicate(): InPredicateContext {
        let localctx: InPredicateContext = new InPredicateContext(this, this._ctx, this.state);
        this.enterRule(localctx, 86, SDBLParser.RULE_inPredicate);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 799;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 78, this._ctx)) {
                    case 1:
                        {
                            this.state = 794;
                            this.expression(0);
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 795;
                                this.match(SDBLParser.LPAREN);
                                this.state = 796;
                                this.expressionList();
                                this.state = 797;
                                this.match(SDBLParser.RPAREN);
                            }
                        }
                        break;
                }
                this.state = 804;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 43) {
                    {
                        {
                            this.state = 801;
                            this.match(SDBLParser.NOT);
                        }
                    }
                    this.state = 806;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 807;
                this.match(SDBLParser.IN);
                this.state = 809;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 154) {
                    {
                        this.state = 808;
                        this.match(SDBLParser.HIERARCHY_FOR_IN);
                    }
                }

                this.state = 811;
                this.match(SDBLParser.LPAREN);
                this.state = 814;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 81, this._ctx)) {
                    case 1:
                        {
                            this.state = 812;
                            this.subquery();
                        }
                        break;
                    case 2:
                        {
                            this.state = 813;
                            this.expressionList();
                        }
                        break;
                }
                this.state = 816;
                this.match(SDBLParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public refsPredicate(): RefsPredicateContext {
        let localctx: RefsPredicateContext = new RefsPredicateContext(this, this._ctx, this.state);
        this.enterRule(localctx, 88, SDBLParser.RULE_refsPredicate);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 818;
                this.expression(0);
                this.state = 819;
                this.match(SDBLParser.REFS);
                this.state = 820;
                this.mdo();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public expressionList(): ExpressionListContext {
        let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 90, SDBLParser.RULE_expressionList);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 822;
                localctx._logicalExpression = this.logicalExpression();
                localctx._exp.push(localctx._logicalExpression);
                this.state = 827;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 823;
                            this.match(SDBLParser.COMMA);
                            this.state = 824;
                            localctx._logicalExpression = this.logicalExpression();
                            localctx._exp.push(localctx._logicalExpression);
                        }
                    }
                    this.state = 829;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public dataSources(): DataSourcesContext {
        let localctx: DataSourcesContext = new DataSourcesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 92, SDBLParser.RULE_dataSources);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 830;
                localctx._dataSource = this.dataSource();
                localctx._tables.push(localctx._dataSource);
                this.state = 835;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 831;
                            this.match(SDBLParser.COMMA);
                            this.state = 832;
                            localctx._dataSource = this.dataSource();
                            localctx._tables.push(localctx._dataSource);
                        }
                    }
                    this.state = 837;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public dataSource(): DataSourceContext {
        let localctx: DataSourceContext = new DataSourceContext(this, this._ctx, this.state);
        this.enterRule(localctx, 94, SDBLParser.RULE_dataSource);
        let _la: number;
        try {
            this.state = 870;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 90, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 838;
                            this.match(SDBLParser.LPAREN);
                            this.state = 839;
                            this.dataSource();
                            this.state = 840;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 862;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 18:
                                case 31:
                                case 33:
                                case 41:
                                case 50:
                                case 53:
                                case 58:
                                case 59:
                                case 60:
                                case 61:
                                case 62:
                                case 63:
                                case 64:
                                case 65:
                                case 66:
                                case 67:
                                case 68:
                                case 69:
                                case 70:
                                case 71:
                                case 72:
                                case 73:
                                case 74:
                                case 75:
                                case 76:
                                case 77:
                                case 78:
                                case 79:
                                case 80:
                                case 81:
                                case 82:
                                case 83:
                                case 84:
                                case 85:
                                case 86:
                                case 87:
                                case 88:
                                case 89:
                                case 90:
                                case 91:
                                case 92:
                                case 93:
                                case 94:
                                case 95:
                                case 96:
                                case 97:
                                case 98:
                                case 99:
                                case 100:
                                case 101:
                                case 102:
                                case 103:
                                case 104:
                                case 105:
                                case 106:
                                case 107:
                                case 108:
                                case 109:
                                case 110:
                                case 111:
                                case 112:
                                case 113:
                                case 114:
                                case 115:
                                case 116:
                                case 117:
                                case 118:
                                case 119:
                                case 120:
                                case 121:
                                case 122:
                                case 123:
                                case 124:
                                case 125:
                                case 126:
                                case 127:
                                case 128:
                                case 129:
                                case 130:
                                case 131:
                                case 132:
                                case 133:
                                case 134:
                                case 135:
                                case 136:
                                case 137:
                                case 138:
                                case 139:
                                case 140:
                                case 143:
                                case 144:
                                case 145:
                                case 146:
                                case 147:
                                case 148:
                                case 149:
                                case 150:
                                case 151:
                                case 152:
                                case 153:
                                case 160:
                                case 163:
                                case 164:
                                case 165:
                                case 166:
                                case 167:
                                case 168:
                                case 169:
                                case 170:
                                case 171:
                                case 172:
                                case 173:
                                case 174:
                                    {
                                        {
                                            this.state = 846;
                                            this._errHandler.sync(this);
                                            switch (this._interp.adaptivePredict(this._input, 84, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 842;
                                                        this.virtualTable();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 843;
                                                        this.table();
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 844;
                                                        this.parameterTable();
                                                    }
                                                    break;
                                                case 4:
                                                    {
                                                        this.state = 845;
                                                        this.externalDataSourceTable();
                                                    }
                                                    break;
                                            }
                                            this.state = 849;
                                            this._errHandler.sync(this);
                                            switch (this._interp.adaptivePredict(this._input, 85, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 848;
                                                        this.alias();
                                                    }
                                                    break;
                                            }
                                        }
                                    }
                                    break;
                                case 4:
                                    {
                                        {
                                            this.state = 851;
                                            this.match(SDBLParser.LPAREN);
                                            this.state = 856;
                                            this._errHandler.sync(this);
                                            switch (this._interp.adaptivePredict(this._input, 86, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 852;
                                                        this.virtualTable();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 853;
                                                        this.table();
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 854;
                                                        this.parameterTable();
                                                    }
                                                    break;
                                                case 4:
                                                    {
                                                        this.state = 855;
                                                        this.subquery();
                                                    }
                                                    break;
                                            }
                                            this.state = 858;
                                            this.match(SDBLParser.RPAREN);
                                            this.state = 860;
                                            this._errHandler.sync(this);
                                            switch (this._interp.adaptivePredict(this._input, 87, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 859;
                                                        this.alias();
                                                    }
                                                    break;
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 867;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((_la - 144) & ~0x1f) === 0 && ((1 << (_la - 144)) & 31) !== 0) {
                                {
                                    {
                                        this.state = 864;
                                        localctx._joinPart = this.joinPart();
                                        localctx._joins.push(localctx._joinPart);
                                    }
                                }
                                this.state = 869;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public table(): TableContext {
        let localctx: TableContext = new TableContext(this, this._ctx, this.state);
        this.enterRule(localctx, 96, SDBLParser.RULE_table);
        try {
            this.state = 878;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 91, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 872;
                        this.mdo();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 873;
                        this.mdo();
                        this.state = 874;
                        this.match(SDBLParser.DOT);
                        this.state = 875;
                        localctx._objectTableName = this.identifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 877;
                        localctx._tableName = this.identifier();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public virtualTable(): VirtualTableContext {
        let localctx: VirtualTableContext = new VirtualTableContext(this, this._ctx, this.state);
        this.enterRule(localctx, 98, SDBLParser.RULE_virtualTable);
        let _la: number;
        try {
            this.state = 905;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 95, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 880;
                            this.mdo();
                            this.state = 881;
                            this.match(SDBLParser.DOT);
                            this.state = 882;
                            localctx._virtualTableName = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(((_la - 163) & ~0x1f) === 0 && ((1 << (_la - 163)) & 4095) !== 0)) {
                                localctx._virtualTableName = this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 894;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 4) {
                                {
                                    this.state = 883;
                                    this.match(SDBLParser.LPAREN);
                                    this.state = 884;
                                    localctx._virtualTableParameter = this.virtualTableParameter();
                                    localctx._virtualTableParameters.push(localctx._virtualTableParameter);
                                    this.state = 889;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === 7) {
                                        {
                                            {
                                                this.state = 885;
                                                this.match(SDBLParser.COMMA);
                                                this.state = 886;
                                                localctx._virtualTableParameter = this.virtualTableParameter();
                                                localctx._virtualTableParameters.push(localctx._virtualTableParameter);
                                            }
                                        }
                                        this.state = 891;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 892;
                                    this.match(SDBLParser.RPAREN);
                                }
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 896;
                            localctx._type_ = this.match(SDBLParser.FILTER_CRITERION_TYPE);
                            this.state = 897;
                            this.match(SDBLParser.DOT);
                            this.state = 898;
                            localctx._tableName = this.identifier();
                            this.state = 899;
                            this.match(SDBLParser.LPAREN);
                            this.state = 901;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 18) {
                                {
                                    this.state = 900;
                                    this.parameter();
                                }
                            }

                            this.state = 903;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public virtualTableParameter(): VirtualTableParameterContext {
        let localctx: VirtualTableParameterContext = new VirtualTableParameterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 100, SDBLParser.RULE_virtualTableParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 908;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (
                    ((_la & ~0x1f) === 0 && ((1 << _la) & 2550400528) !== 0) ||
                    (((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 4277275909) !== 0) ||
                    (((_la - 65) & ~0x1f) === 0 && ((1 << (_la - 65)) & 4294967295) !== 0) ||
                    (((_la - 97) & ~0x1f) === 0 && ((1 << (_la - 97)) & 4294967295) !== 0) ||
                    (((_la - 129) & ~0x1f) === 0 && ((1 << (_la - 129)) & 3120553983) !== 0) ||
                    (((_la - 163) & ~0x1f) === 0 && ((1 << (_la - 163)) & 4095) !== 0)
                ) {
                    {
                        this.state = 907;
                        this.logicalExpression();
                    }
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public parameterTable(): ParameterTableContext {
        let localctx: ParameterTableContext = new ParameterTableContext(this, this._ctx, this.state);
        this.enterRule(localctx, 102, SDBLParser.RULE_parameterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 910;
                this.parameter();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public externalDataSourceTable(): ExternalDataSourceTableContext {
        let localctx: ExternalDataSourceTableContext = new ExternalDataSourceTableContext(this, this._ctx, this.state);
        this.enterRule(localctx, 104, SDBLParser.RULE_externalDataSourceTable);
        try {
            this.state = 928;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 97, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 912;
                        this.mdo();
                        this.state = 913;
                        this.match(SDBLParser.DOT);
                        this.state = 914;
                        this.match(SDBLParser.EDS_TABLE);
                        this.state = 915;
                        this.match(SDBLParser.DOT);
                        this.state = 916;
                        localctx._tableName = this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 918;
                        this.mdo();
                        this.state = 919;
                        this.match(SDBLParser.DOT);
                        this.state = 920;
                        this.match(SDBLParser.EDS_CUBE);
                        this.state = 921;
                        this.match(SDBLParser.DOT);
                        this.state = 922;
                        localctx._cubeName = this.identifier();
                        this.state = 923;
                        this.match(SDBLParser.DOT);
                        this.state = 924;
                        this.match(SDBLParser.EDS_CUBE_DIMTABLE);
                        this.state = 925;
                        this.match(SDBLParser.DOT);
                        this.state = 926;
                        localctx._tableName = this.identifier();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public joinPart(): JoinPartContext {
        let localctx: JoinPartContext = new JoinPartContext(this, this._ctx, this.state);
        this.enterRule(localctx, 106, SDBLParser.RULE_joinPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 948;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 144:
                        {
                            {
                                this.state = 930;
                                localctx._joinType = this.match(SDBLParser.RIGHT);
                                this.state = 932;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 149) {
                                    {
                                        this.state = 931;
                                        localctx._outerJoin = this.match(SDBLParser.OUTER);
                                    }
                                }

                                this.state = 934;
                                this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    case 145:
                        {
                            {
                                this.state = 935;
                                localctx._joinType = this.match(SDBLParser.LEFT);
                                this.state = 937;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 149) {
                                    {
                                        this.state = 936;
                                        localctx._outerJoin = this.match(SDBLParser.OUTER);
                                    }
                                }

                                this.state = 939;
                                this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    case 147:
                        {
                            {
                                this.state = 940;
                                localctx._joinType = this.match(SDBLParser.FULL);
                                this.state = 942;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 149) {
                                    {
                                        this.state = 941;
                                        localctx._outerJoin = this.match(SDBLParser.OUTER);
                                    }
                                }

                                this.state = 944;
                                this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    case 146:
                        {
                            {
                                this.state = 945;
                                localctx._joinType = this.match(SDBLParser.INNER);
                                this.state = 946;
                                this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    case 148:
                        {
                            {
                                this.state = 947;
                                localctx._joinType = this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 950;
                localctx._source = this.dataSource();
                this.state = 951;
                _la = this._input.LA(1);
                if (!(_la === 46 || _la === 49)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 952;
                localctx._condition = this.logicalExpression();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public alias(): AliasContext {
        let localctx: AliasContext = new AliasContext(this, this._ctx, this.state);
        this.enterRule(localctx, 108, SDBLParser.RULE_alias);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 955;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 22) {
                    {
                        this.state = 954;
                        this.match(SDBLParser.AS);
                    }
                }

                this.state = 957;
                localctx._name = this.identifier();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public datePart(): DatePartContext {
        let localctx: DatePartContext = new DatePartContext(this, this._ctx, this.state);
        this.enterRule(localctx, 110, SDBLParser.RULE_datePart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 961;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 18:
                        {
                            this.state = 959;
                            this.parameter();
                        }
                        break;
                    case 156:
                        {
                            this.state = 960;
                            this.match(SDBLParser.DECIMAL);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public multiString(): MultiStringContext {
        let localctx: MultiStringContext = new MultiStringContext(this, this._ctx, this.state);
        this.enterRule(localctx, 112, SDBLParser.RULE_multiString);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 964;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 963;
                                    this.match(SDBLParser.STR);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 966;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public sign(): SignContext {
        let localctx: SignContext = new SignContext(this, this._ctx, this.state);
        this.enterRule(localctx, 114, SDBLParser.RULE_sign);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 968;
                _la = this._input.LA(1);
                if (!(_la === 9 || _la === 10)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public identifier(): IdentifierContext {
        let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 116, SDBLParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 970;
                _la = this._input.LA(1);
                if (
                    !(
                        (((_la - 31) & ~0x1f) === 0 && ((1 << (_la - 31)) & 4165469189) !== 0) ||
                        (((_la - 63) & ~0x1f) === 0 && ((1 << (_la - 63)) & 4294967295) !== 0) ||
                        (((_la - 95) & ~0x1f) === 0 && ((1 << (_la - 95)) & 4294967295) !== 0) ||
                        (((_la - 127) & ~0x1f) === 0 && ((1 << (_la - 127)) & 134168575) !== 0) ||
                        (((_la - 160) & ~0x1f) === 0 && ((1 << (_la - 160)) & 32761) !== 0)
                    )
                ) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public parameter(): ParameterContext {
        let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 118, SDBLParser.RULE_parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 972;
                this.match(SDBLParser.AMPERSAND);
                this.state = 973;
                localctx._name = this.match(SDBLParser.PARAMETER_IDENTIFIER);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // @RuleVersion(0)
    public mdo(): MdoContext {
        let localctx: MdoContext = new MdoContext(this, this._ctx, this.state);
        this.enterRule(localctx, 120, SDBLParser.RULE_mdo);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 975;
                localctx._type_ = this._input.LT(1);
                _la = this._input.LA(1);
                if (!(((_la - 119) & ~0x1f) === 0 && ((1 << (_la - 119)) & 262143) !== 0)) {
                    localctx._type_ = this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 976;
                this.match(SDBLParser.DOT);
                this.state = 977;
                localctx._tableName = this.identifier();
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
            case 26:
                return this.expression_sempred(localctx as ExpressionContext, predIndex);
        }
        return true;
    }

    private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4, 1, 179, 980, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7,
        2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2,
        16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2,
        24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2,
        32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2,
        40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2,
        48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2,
        56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60, 1, 0, 1, 0, 1, 0, 5, 0, 126, 8, 0, 10, 0, 12,
        0, 129, 9, 0, 1, 0, 3, 0, 132, 8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 138, 8, 1, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1,
        3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 159, 8, 3, 1, 3, 1, 3, 1,
        3, 3, 3, 164, 8, 3, 1, 3, 1, 3, 3, 3, 168, 8, 3, 3, 3, 170, 8, 3, 1, 4, 1, 4, 3, 4, 174, 8, 4, 1, 4, 4, 4, 177,
        8, 4, 11, 4, 12, 4, 178, 3, 4, 181, 8, 4, 1, 5, 1, 5, 3, 5, 185, 8, 5, 1, 5, 1, 5, 3, 5, 189, 8, 5, 1, 6, 1, 6,
        3, 6, 193, 8, 6, 1, 6, 1, 6, 1, 6, 3, 6, 198, 8, 6, 1, 6, 1, 6, 3, 6, 202, 8, 6, 1, 6, 1, 6, 3, 6, 206, 8, 6, 1,
        6, 1, 6, 1, 6, 3, 6, 211, 8, 6, 1, 6, 1, 6, 3, 6, 215, 8, 6, 1, 6, 1, 6, 1, 6, 3, 6, 220, 8, 6, 3, 6, 222, 8, 6,
        1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 229, 8, 6, 10, 6, 12, 6, 232, 9, 6, 3, 6, 234, 8, 6, 1, 7, 1, 7, 1, 7, 3, 7,
        239, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7,
        1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1,
        7, 3, 7, 277, 8, 7, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 5, 9, 285, 8, 9, 10, 9, 12, 9, 288, 9, 9, 1, 10, 1, 10,
        1, 10, 1, 10, 1, 10, 3, 10, 295, 8, 10, 1, 10, 3, 10, 298, 8, 10, 1, 11, 1, 11, 1, 11, 5, 11, 303, 8, 11, 10,
        11, 12, 11, 306, 9, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 13, 1, 13, 3, 13, 314, 8, 13, 1, 14, 1, 14, 1, 14, 1, 14,
        1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 5, 15, 325, 8, 15, 10, 15, 12, 15, 328, 9, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1,
        16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1,
        18, 5, 18, 351, 8, 18, 10, 18, 12, 18, 354, 9, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 5, 18, 361, 8, 18, 10, 18,
        12, 18, 364, 9, 18, 3, 18, 366, 8, 18, 1, 19, 1, 19, 3, 19, 370, 8, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3,
        20, 377, 8, 20, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 383, 8, 21, 3, 21, 385, 8, 21, 1, 22, 1, 22, 3, 22, 389, 8,
        22, 1, 22, 1, 22, 1, 22, 1, 22, 5, 22, 395, 8, 22, 10, 22, 12, 22, 398, 9, 22, 1, 23, 1, 23, 1, 23, 3, 23, 403,
        8, 23, 1, 23, 1, 23, 3, 23, 407, 8, 23, 1, 23, 3, 23, 410, 8, 23, 3, 23, 412, 8, 23, 1, 24, 1, 24, 1, 24, 1, 24,
        1, 24, 3, 24, 419, 8, 24, 1, 24, 1, 24, 3, 24, 423, 8, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 4, 25, 430, 8, 25,
        11, 25, 12, 25, 431, 1, 25, 1, 25, 1, 25, 1, 25, 4, 25, 438, 8, 25, 11, 25, 12, 25, 439, 3, 25, 442, 8, 25, 1,
        26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 451, 8, 26, 1, 26, 1, 26, 1, 26, 5, 26, 456, 8, 26, 10, 26,
        12, 26, 459, 9, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27,
        1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 481, 8, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1,
        27, 1, 27, 1, 27, 1, 27, 3, 27, 493, 8, 27, 1, 27, 3, 27, 496, 8, 27, 1, 28, 1, 28, 1, 28, 4, 28, 501, 8, 28,
        11, 28, 12, 28, 502, 1, 28, 1, 28, 3, 28, 507, 8, 28, 1, 28, 1, 28, 1, 28, 1, 28, 4, 28, 513, 8, 28, 11, 28, 12,
        28, 514, 1, 28, 1, 28, 3, 28, 519, 8, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 526, 8, 28, 1, 28, 1, 28, 3,
        28, 530, 8, 28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 3,
        30, 545, 8, 30, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 5, 32, 555, 8, 32, 10, 32, 12, 32, 558,
        9, 32, 1, 32, 1, 32, 1, 32, 5, 32, 563, 8, 32, 10, 32, 12, 32, 566, 9, 32, 3, 32, 568, 8, 32, 1, 33, 1, 33, 1,
        33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1,
        33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1,
        33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1,
        33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1,
        33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1,
        33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 3, 33, 659, 8, 33, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1,
        34, 1, 34, 3, 34, 669, 8, 34, 1, 34, 1, 34, 3, 34, 673, 8, 34, 1, 34, 3, 34, 676, 8, 34, 1, 35, 1, 35, 1, 35, 1,
        35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1,
        35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 707, 8, 35, 1, 35, 1, 35, 1, 36, 1,
        36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 3, 36, 721, 8, 36, 1, 36, 3, 36, 724, 8, 36, 1, 36,
        1, 36, 1, 36, 1, 36, 3, 36, 730, 8, 36, 1, 36, 1, 36, 3, 36, 734, 8, 36, 1, 36, 1, 36, 1, 37, 1, 37, 1, 37, 5,
        37, 741, 8, 37, 10, 37, 12, 37, 744, 9, 37, 1, 38, 5, 38, 747, 8, 38, 10, 38, 12, 38, 750, 9, 38, 1, 38, 1, 38,
        1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 3, 38, 763, 8, 38, 1, 39, 1, 39, 5, 39, 767, 8,
        39, 10, 39, 12, 39, 770, 9, 39, 1, 39, 1, 39, 1, 39, 1, 39, 3, 39, 776, 8, 39, 1, 40, 1, 40, 1, 40, 3, 40, 781,
        8, 40, 1, 40, 1, 40, 1, 41, 1, 41, 1, 41, 1, 41, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 43, 1, 43, 1, 43,
        1, 43, 1, 43, 3, 43, 800, 8, 43, 1, 43, 5, 43, 803, 8, 43, 10, 43, 12, 43, 806, 9, 43, 1, 43, 1, 43, 3, 43, 810,
        8, 43, 1, 43, 1, 43, 1, 43, 3, 43, 815, 8, 43, 1, 43, 1, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 45, 1, 45, 1, 45, 5,
        45, 826, 8, 45, 10, 45, 12, 45, 829, 9, 45, 1, 46, 1, 46, 1, 46, 5, 46, 834, 8, 46, 10, 46, 12, 46, 837, 9, 46,
        1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 3, 47, 847, 8, 47, 1, 47, 3, 47, 850, 8, 47, 1, 47, 1,
        47, 1, 47, 1, 47, 1, 47, 3, 47, 857, 8, 47, 1, 47, 1, 47, 3, 47, 861, 8, 47, 3, 47, 863, 8, 47, 1, 47, 5, 47,
        866, 8, 47, 10, 47, 12, 47, 869, 9, 47, 3, 47, 871, 8, 47, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 3, 48, 879,
        8, 48, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 5, 49, 888, 8, 49, 10, 49, 12, 49, 891, 9, 49, 1, 49, 1,
        49, 3, 49, 895, 8, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 3, 49, 902, 8, 49, 1, 49, 1, 49, 3, 49, 906, 8, 49, 1,
        50, 3, 50, 909, 8, 50, 1, 51, 1, 51, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1,
        52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 3, 52, 929, 8, 52, 1, 53, 1, 53, 3, 53, 933, 8, 53, 1, 53, 1, 53, 1, 53,
        3, 53, 938, 8, 53, 1, 53, 1, 53, 1, 53, 3, 53, 943, 8, 53, 1, 53, 1, 53, 1, 53, 1, 53, 3, 53, 949, 8, 53, 1, 53,
        1, 53, 1, 53, 1, 53, 1, 54, 3, 54, 956, 8, 54, 1, 54, 1, 54, 1, 55, 1, 55, 3, 55, 962, 8, 55, 1, 56, 4, 56, 965,
        8, 56, 11, 56, 12, 56, 966, 1, 57, 1, 57, 1, 58, 1, 58, 1, 59, 1, 59, 1, 59, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60,
        0, 1, 52, 61, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50,
        52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104,
        106, 108, 110, 112, 114, 116, 118, 120, 0, 23, 2, 0, 26, 26, 49, 49, 2, 0, 23, 23, 29, 29, 8, 0, 70, 70, 76, 77,
        84, 85, 87, 87, 96, 96, 107, 107, 115, 115, 117, 117, 2, 0, 9, 10, 16, 17, 2, 0, 35, 35, 54, 54, 6, 0, 70, 71,
        77, 77, 84, 85, 87, 87, 96, 96, 115, 117, 2, 0, 62, 62, 74, 74, 7, 0, 70, 70, 76, 77, 84, 85, 87, 87, 107, 107,
        115, 115, 117, 117, 6, 0, 70, 70, 77, 77, 84, 85, 87, 87, 96, 96, 117, 117, 4, 0, 91, 91, 93, 93, 114, 114, 141,
        141, 7, 0, 58, 60, 64, 64, 75, 75, 78, 80, 94, 94, 97, 98, 106, 106, 4, 0, 81, 81, 101, 101, 108, 110, 112, 112,
        2, 0, 99, 99, 118, 118, 3, 0, 61, 61, 82, 83, 105, 105, 5, 0, 121, 121, 123, 126, 128, 128, 130, 133, 136, 136,
        2, 0, 123, 126, 130, 130, 2, 0, 21, 21, 47, 47, 2, 0, 8, 8, 11, 15, 1, 0, 163, 174, 2, 0, 46, 46, 49, 49, 1, 0,
        9, 10, 9, 0, 31, 31, 33, 33, 41, 41, 50, 50, 53, 53, 58, 140, 143, 153, 160, 160, 163, 174, 1, 0, 119, 136,
        1096, 0, 122, 1, 0, 0, 0, 2, 137, 1, 0, 0, 0, 4, 139, 1, 0, 0, 0, 6, 142, 1, 0, 0, 0, 8, 171, 1, 0, 0, 0, 10,
        182, 1, 0, 0, 0, 12, 190, 1, 0, 0, 0, 14, 276, 1, 0, 0, 0, 16, 278, 1, 0, 0, 0, 18, 281, 1, 0, 0, 0, 20, 294, 1,
        0, 0, 0, 22, 304, 1, 0, 0, 0, 24, 309, 1, 0, 0, 0, 26, 313, 1, 0, 0, 0, 28, 315, 1, 0, 0, 0, 30, 321, 1, 0, 0,
        0, 32, 329, 1, 0, 0, 0, 34, 335, 1, 0, 0, 0, 36, 365, 1, 0, 0, 0, 38, 369, 1, 0, 0, 0, 40, 371, 1, 0, 0, 0, 42,
        378, 1, 0, 0, 0, 44, 386, 1, 0, 0, 0, 46, 411, 1, 0, 0, 0, 48, 413, 1, 0, 0, 0, 50, 441, 1, 0, 0, 0, 52, 450, 1,
        0, 0, 0, 54, 495, 1, 0, 0, 0, 56, 529, 1, 0, 0, 0, 58, 531, 1, 0, 0, 0, 60, 544, 1, 0, 0, 0, 62, 546, 1, 0, 0,
        0, 64, 567, 1, 0, 0, 0, 66, 658, 1, 0, 0, 0, 68, 675, 1, 0, 0, 0, 70, 677, 1, 0, 0, 0, 72, 710, 1, 0, 0, 0, 74,
        737, 1, 0, 0, 0, 76, 748, 1, 0, 0, 0, 78, 764, 1, 0, 0, 0, 80, 777, 1, 0, 0, 0, 82, 784, 1, 0, 0, 0, 84, 788, 1,
        0, 0, 0, 86, 799, 1, 0, 0, 0, 88, 818, 1, 0, 0, 0, 90, 822, 1, 0, 0, 0, 92, 830, 1, 0, 0, 0, 94, 870, 1, 0, 0,
        0, 96, 878, 1, 0, 0, 0, 98, 905, 1, 0, 0, 0, 100, 908, 1, 0, 0, 0, 102, 910, 1, 0, 0, 0, 104, 928, 1, 0, 0, 0,
        106, 948, 1, 0, 0, 0, 108, 955, 1, 0, 0, 0, 110, 961, 1, 0, 0, 0, 112, 964, 1, 0, 0, 0, 114, 968, 1, 0, 0, 0,
        116, 970, 1, 0, 0, 0, 118, 972, 1, 0, 0, 0, 120, 975, 1, 0, 0, 0, 122, 127, 3, 2, 1, 0, 123, 124, 5, 6, 0, 0,
        124, 126, 3, 2, 1, 0, 125, 123, 1, 0, 0, 0, 126, 129, 1, 0, 0, 0, 127, 125, 1, 0, 0, 0, 127, 128, 1, 0, 0, 0,
        128, 131, 1, 0, 0, 0, 129, 127, 1, 0, 0, 0, 130, 132, 5, 6, 0, 0, 131, 130, 1, 0, 0, 0, 131, 132, 1, 0, 0, 0,
        132, 133, 1, 0, 0, 0, 133, 134, 5, 0, 0, 1, 134, 1, 1, 0, 0, 0, 135, 138, 3, 6, 3, 0, 136, 138, 3, 4, 2, 0, 137,
        135, 1, 0, 0, 0, 137, 136, 1, 0, 0, 0, 138, 3, 1, 0, 0, 0, 139, 140, 5, 31, 0, 0, 140, 141, 3, 116, 58, 0, 141,
        5, 1, 0, 0, 0, 142, 169, 3, 8, 4, 0, 143, 144, 5, 24, 0, 0, 144, 145, 3, 40, 20, 0, 145, 146, 3, 44, 22, 0, 146,
        170, 1, 0, 0, 0, 147, 148, 3, 40, 20, 0, 148, 149, 5, 24, 0, 0, 149, 150, 3, 44, 22, 0, 150, 170, 1, 0, 0, 0,
        151, 152, 3, 40, 20, 0, 152, 153, 3, 44, 22, 0, 153, 154, 5, 24, 0, 0, 154, 170, 1, 0, 0, 0, 155, 158, 5, 24, 0,
        0, 156, 159, 3, 40, 20, 0, 157, 159, 3, 44, 22, 0, 158, 156, 1, 0, 0, 0, 158, 157, 1, 0, 0, 0, 158, 159, 1, 0,
        0, 0, 159, 170, 1, 0, 0, 0, 160, 163, 3, 40, 20, 0, 161, 164, 5, 24, 0, 0, 162, 164, 3, 44, 22, 0, 163, 161, 1,
        0, 0, 0, 163, 162, 1, 0, 0, 0, 163, 164, 1, 0, 0, 0, 164, 170, 1, 0, 0, 0, 165, 167, 3, 44, 22, 0, 166, 168, 5,
        24, 0, 0, 167, 166, 1, 0, 0, 0, 167, 168, 1, 0, 0, 0, 168, 170, 1, 0, 0, 0, 169, 143, 1, 0, 0, 0, 169, 147, 1,
        0, 0, 0, 169, 151, 1, 0, 0, 0, 169, 155, 1, 0, 0, 0, 169, 160, 1, 0, 0, 0, 169, 165, 1, 0, 0, 0, 169, 170, 1, 0,
        0, 0, 170, 7, 1, 0, 0, 0, 171, 173, 3, 12, 6, 0, 172, 174, 3, 40, 20, 0, 173, 172, 1, 0, 0, 0, 173, 174, 1, 0,
        0, 0, 174, 180, 1, 0, 0, 0, 175, 177, 3, 10, 5, 0, 176, 175, 1, 0, 0, 0, 177, 178, 1, 0, 0, 0, 178, 176, 1, 0,
        0, 0, 178, 179, 1, 0, 0, 0, 179, 181, 1, 0, 0, 0, 180, 176, 1, 0, 0, 0, 180, 181, 1, 0, 0, 0, 181, 9, 1, 0, 0,
        0, 182, 184, 5, 153, 0, 0, 183, 185, 5, 152, 0, 0, 184, 183, 1, 0, 0, 0, 184, 185, 1, 0, 0, 0, 185, 186, 1, 0,
        0, 0, 186, 188, 3, 12, 6, 0, 187, 189, 3, 40, 20, 0, 188, 187, 1, 0, 0, 0, 188, 189, 1, 0, 0, 0, 189, 11, 1, 0,
        0, 0, 190, 192, 5, 50, 0, 0, 191, 193, 3, 14, 7, 0, 192, 191, 1, 0, 0, 0, 192, 193, 1, 0, 0, 0, 193, 194, 1, 0,
        0, 0, 194, 197, 3, 18, 9, 0, 195, 196, 5, 39, 0, 0, 196, 198, 3, 116, 58, 0, 197, 195, 1, 0, 0, 0, 197, 198, 1,
        0, 0, 0, 198, 201, 1, 0, 0, 0, 199, 200, 5, 36, 0, 0, 200, 202, 3, 92, 46, 0, 201, 199, 1, 0, 0, 0, 201, 202, 1,
        0, 0, 0, 202, 205, 1, 0, 0, 0, 203, 204, 5, 57, 0, 0, 204, 206, 3, 74, 37, 0, 205, 203, 1, 0, 0, 0, 205, 206, 1,
        0, 0, 0, 206, 210, 1, 0, 0, 0, 207, 208, 5, 139, 0, 0, 208, 209, 7, 0, 0, 0, 209, 211, 3, 36, 18, 0, 210, 207,
        1, 0, 0, 0, 210, 211, 1, 0, 0, 0, 211, 214, 1, 0, 0, 0, 212, 213, 5, 37, 0, 0, 213, 215, 3, 74, 37, 0, 214, 212,
        1, 0, 0, 0, 214, 215, 1, 0, 0, 0, 215, 221, 1, 0, 0, 0, 216, 217, 5, 150, 0, 0, 217, 219, 5, 151, 0, 0, 218,
        220, 3, 120, 60, 0, 219, 218, 1, 0, 0, 0, 219, 220, 1, 0, 0, 0, 220, 222, 1, 0, 0, 0, 221, 216, 1, 0, 0, 0, 221,
        222, 1, 0, 0, 0, 222, 233, 1, 0, 0, 0, 223, 224, 5, 138, 0, 0, 224, 225, 7, 0, 0, 0, 225, 230, 3, 38, 19, 0,
        226, 227, 5, 7, 0, 0, 227, 229, 3, 38, 19, 0, 228, 226, 1, 0, 0, 0, 229, 232, 1, 0, 0, 0, 230, 228, 1, 0, 0, 0,
        230, 231, 1, 0, 0, 0, 231, 234, 1, 0, 0, 0, 232, 230, 1, 0, 0, 0, 233, 223, 1, 0, 0, 0, 233, 234, 1, 0, 0, 0,
        234, 13, 1, 0, 0, 0, 235, 239, 3, 16, 8, 0, 236, 239, 5, 30, 0, 0, 237, 239, 5, 20, 0, 0, 238, 235, 1, 0, 0, 0,
        238, 236, 1, 0, 0, 0, 238, 237, 1, 0, 0, 0, 239, 277, 1, 0, 0, 0, 240, 241, 5, 20, 0, 0, 241, 242, 5, 30, 0, 0,
        242, 277, 3, 16, 8, 0, 243, 244, 5, 20, 0, 0, 244, 245, 3, 16, 8, 0, 245, 246, 5, 30, 0, 0, 246, 277, 1, 0, 0,
        0, 247, 248, 3, 16, 8, 0, 248, 249, 5, 20, 0, 0, 249, 250, 5, 30, 0, 0, 250, 277, 1, 0, 0, 0, 251, 252, 3, 16,
        8, 0, 252, 253, 5, 30, 0, 0, 253, 254, 5, 20, 0, 0, 254, 277, 1, 0, 0, 0, 255, 256, 5, 30, 0, 0, 256, 257, 5,
        20, 0, 0, 257, 277, 3, 16, 8, 0, 258, 259, 5, 30, 0, 0, 259, 260, 3, 16, 8, 0, 260, 261, 5, 20, 0, 0, 261, 277,
        1, 0, 0, 0, 262, 263, 5, 20, 0, 0, 263, 277, 5, 30, 0, 0, 264, 265, 5, 20, 0, 0, 265, 277, 3, 16, 8, 0, 266,
        267, 5, 30, 0, 0, 267, 277, 5, 20, 0, 0, 268, 269, 5, 30, 0, 0, 269, 277, 3, 16, 8, 0, 270, 271, 3, 16, 8, 0,
        271, 272, 5, 20, 0, 0, 272, 277, 1, 0, 0, 0, 273, 274, 3, 16, 8, 0, 274, 275, 5, 30, 0, 0, 275, 277, 1, 0, 0, 0,
        276, 238, 1, 0, 0, 0, 276, 240, 1, 0, 0, 0, 276, 243, 1, 0, 0, 0, 276, 247, 1, 0, 0, 0, 276, 251, 1, 0, 0, 0,
        276, 255, 1, 0, 0, 0, 276, 258, 1, 0, 0, 0, 276, 262, 1, 0, 0, 0, 276, 264, 1, 0, 0, 0, 276, 266, 1, 0, 0, 0,
        276, 268, 1, 0, 0, 0, 276, 270, 1, 0, 0, 0, 276, 273, 1, 0, 0, 0, 277, 15, 1, 0, 0, 0, 278, 279, 5, 52, 0, 0,
        279, 280, 5, 156, 0, 0, 280, 17, 1, 0, 0, 0, 281, 286, 3, 20, 10, 0, 282, 283, 5, 7, 0, 0, 283, 285, 3, 20, 10,
        0, 284, 282, 1, 0, 0, 0, 285, 288, 1, 0, 0, 0, 286, 284, 1, 0, 0, 0, 286, 287, 1, 0, 0, 0, 287, 19, 1, 0, 0, 0,
        288, 286, 1, 0, 0, 0, 289, 295, 3, 22, 11, 0, 290, 295, 3, 26, 13, 0, 291, 295, 3, 28, 14, 0, 292, 295, 3, 32,
        16, 0, 293, 295, 3, 24, 12, 0, 294, 289, 1, 0, 0, 0, 294, 290, 1, 0, 0, 0, 294, 291, 1, 0, 0, 0, 294, 292, 1, 0,
        0, 0, 294, 293, 1, 0, 0, 0, 295, 297, 1, 0, 0, 0, 296, 298, 3, 108, 54, 0, 297, 296, 1, 0, 0, 0, 297, 298, 1, 0,
        0, 0, 298, 21, 1, 0, 0, 0, 299, 300, 3, 116, 58, 0, 300, 301, 5, 3, 0, 0, 301, 303, 1, 0, 0, 0, 302, 299, 1, 0,
        0, 0, 303, 306, 1, 0, 0, 0, 304, 302, 1, 0, 0, 0, 304, 305, 1, 0, 0, 0, 305, 307, 1, 0, 0, 0, 306, 304, 1, 0, 0,
        0, 307, 308, 5, 16, 0, 0, 308, 23, 1, 0, 0, 0, 309, 310, 3, 74, 37, 0, 310, 25, 1, 0, 0, 0, 311, 314, 5, 44, 0,
        0, 312, 314, 3, 34, 17, 0, 313, 311, 1, 0, 0, 0, 313, 312, 1, 0, 0, 0, 314, 27, 1, 0, 0, 0, 315, 316, 5, 72, 0,
        0, 316, 317, 5, 3, 0, 0, 317, 318, 5, 4, 0, 0, 318, 319, 3, 30, 15, 0, 319, 320, 5, 5, 0, 0, 320, 29, 1, 0, 0,
        0, 321, 326, 3, 108, 54, 0, 322, 323, 5, 7, 0, 0, 323, 325, 3, 108, 54, 0, 324, 322, 1, 0, 0, 0, 325, 328, 1, 0,
        0, 0, 326, 324, 1, 0, 0, 0, 326, 327, 1, 0, 0, 0, 327, 31, 1, 0, 0, 0, 328, 326, 1, 0, 0, 0, 329, 330, 3, 50,
        25, 0, 330, 331, 5, 3, 0, 0, 331, 332, 5, 4, 0, 0, 332, 333, 3, 18, 9, 0, 333, 334, 5, 5, 0, 0, 334, 33, 1, 0,
        0, 0, 335, 336, 5, 92, 0, 0, 336, 337, 5, 4, 0, 0, 337, 338, 5, 5, 0, 0, 338, 35, 1, 0, 0, 0, 339, 340, 5, 142,
        0, 0, 340, 341, 5, 143, 0, 0, 341, 342, 5, 4, 0, 0, 342, 343, 5, 4, 0, 0, 343, 344, 3, 90, 45, 0, 344, 352, 5,
        5, 0, 0, 345, 346, 5, 7, 0, 0, 346, 347, 5, 4, 0, 0, 347, 348, 3, 90, 45, 0, 348, 349, 5, 5, 0, 0, 349, 351, 1,
        0, 0, 0, 350, 345, 1, 0, 0, 0, 351, 354, 1, 0, 0, 0, 352, 350, 1, 0, 0, 0, 352, 353, 1, 0, 0, 0, 353, 355, 1, 0,
        0, 0, 354, 352, 1, 0, 0, 0, 355, 356, 5, 5, 0, 0, 356, 366, 1, 0, 0, 0, 357, 362, 3, 52, 26, 0, 358, 359, 5, 7,
        0, 0, 359, 361, 3, 52, 26, 0, 360, 358, 1, 0, 0, 0, 361, 364, 1, 0, 0, 0, 362, 360, 1, 0, 0, 0, 362, 363, 1, 0,
        0, 0, 363, 366, 1, 0, 0, 0, 364, 362, 1, 0, 0, 0, 365, 339, 1, 0, 0, 0, 365, 357, 1, 0, 0, 0, 366, 37, 1, 0, 0,
        0, 367, 370, 3, 118, 59, 0, 368, 370, 3, 50, 25, 0, 369, 367, 1, 0, 0, 0, 369, 368, 1, 0, 0, 0, 370, 39, 1, 0,
        0, 0, 371, 372, 5, 140, 0, 0, 372, 373, 7, 0, 0, 0, 373, 376, 3, 42, 21, 0, 374, 375, 5, 7, 0, 0, 375, 377, 3,
        42, 21, 0, 376, 374, 1, 0, 0, 0, 376, 377, 1, 0, 0, 0, 377, 41, 1, 0, 0, 0, 378, 384, 3, 52, 26, 0, 379, 385, 7,
        1, 0, 0, 380, 382, 5, 38, 0, 0, 381, 383, 5, 29, 0, 0, 382, 381, 1, 0, 0, 0, 382, 383, 1, 0, 0, 0, 383, 385, 1,
        0, 0, 0, 384, 379, 1, 0, 0, 0, 384, 380, 1, 0, 0, 0, 384, 385, 1, 0, 0, 0, 385, 43, 1, 0, 0, 0, 386, 388, 5, 53,
        0, 0, 387, 389, 3, 18, 9, 0, 388, 387, 1, 0, 0, 0, 388, 389, 1, 0, 0, 0, 389, 390, 1, 0, 0, 0, 390, 391, 7, 0,
        0, 0, 391, 396, 3, 46, 23, 0, 392, 393, 5, 7, 0, 0, 393, 395, 3, 46, 23, 0, 394, 392, 1, 0, 0, 0, 395, 398, 1,
        0, 0, 0, 396, 394, 1, 0, 0, 0, 396, 397, 1, 0, 0, 0, 397, 45, 1, 0, 0, 0, 398, 396, 1, 0, 0, 0, 399, 412, 5, 48,
        0, 0, 400, 406, 3, 52, 26, 0, 401, 403, 5, 88, 0, 0, 402, 401, 1, 0, 0, 0, 402, 403, 1, 0, 0, 0, 403, 404, 1, 0,
        0, 0, 404, 407, 5, 38, 0, 0, 405, 407, 3, 48, 24, 0, 406, 402, 1, 0, 0, 0, 406, 405, 1, 0, 0, 0, 406, 407, 1, 0,
        0, 0, 407, 409, 1, 0, 0, 0, 408, 410, 3, 108, 54, 0, 409, 408, 1, 0, 0, 0, 409, 410, 1, 0, 0, 0, 410, 412, 1, 0,
        0, 0, 411, 399, 1, 0, 0, 0, 411, 400, 1, 0, 0, 0, 412, 47, 1, 0, 0, 0, 413, 414, 5, 89, 0, 0, 414, 415, 5, 4, 0,
        0, 415, 418, 7, 2, 0, 0, 416, 417, 5, 7, 0, 0, 417, 419, 3, 52, 26, 0, 418, 416, 1, 0, 0, 0, 418, 419, 1, 0, 0,
        0, 419, 422, 1, 0, 0, 0, 420, 421, 5, 7, 0, 0, 421, 423, 3, 52, 26, 0, 422, 420, 1, 0, 0, 0, 422, 423, 1, 0, 0,
        0, 423, 424, 1, 0, 0, 0, 424, 425, 5, 5, 0, 0, 425, 49, 1, 0, 0, 0, 426, 429, 3, 116, 58, 0, 427, 428, 5, 3, 0,
        0, 428, 430, 3, 116, 58, 0, 429, 427, 1, 0, 0, 0, 430, 431, 1, 0, 0, 0, 431, 429, 1, 0, 0, 0, 431, 432, 1, 0, 0,
        0, 432, 442, 1, 0, 0, 0, 433, 442, 3, 116, 58, 0, 434, 437, 3, 120, 60, 0, 435, 436, 5, 3, 0, 0, 436, 438, 3,
        116, 58, 0, 437, 435, 1, 0, 0, 0, 438, 439, 1, 0, 0, 0, 439, 437, 1, 0, 0, 0, 439, 440, 1, 0, 0, 0, 440, 442, 1,
        0, 0, 0, 441, 426, 1, 0, 0, 0, 441, 433, 1, 0, 0, 0, 441, 434, 1, 0, 0, 0, 442, 51, 1, 0, 0, 0, 443, 444, 6, 26,
        -1, 0, 444, 451, 3, 54, 27, 0, 445, 451, 3, 64, 32, 0, 446, 451, 3, 56, 28, 0, 447, 451, 3, 50, 25, 0, 448, 451,
        3, 60, 30, 0, 449, 451, 3, 62, 31, 0, 450, 443, 1, 0, 0, 0, 450, 445, 1, 0, 0, 0, 450, 446, 1, 0, 0, 0, 450,
        447, 1, 0, 0, 0, 450, 448, 1, 0, 0, 0, 450, 449, 1, 0, 0, 0, 451, 457, 1, 0, 0, 0, 452, 453, 10, 1, 0, 0, 453,
        454, 7, 3, 0, 0, 454, 456, 3, 52, 26, 2, 455, 452, 1, 0, 0, 0, 456, 459, 1, 0, 0, 0, 457, 455, 1, 0, 0, 0, 457,
        458, 1, 0, 0, 0, 458, 53, 1, 0, 0, 0, 459, 457, 1, 0, 0, 0, 460, 496, 5, 44, 0, 0, 461, 496, 5, 55, 0, 0, 462,
        496, 3, 112, 56, 0, 463, 496, 5, 156, 0, 0, 464, 496, 5, 157, 0, 0, 465, 496, 7, 4, 0, 0, 466, 467, 5, 69, 0, 0,
        467, 468, 5, 4, 0, 0, 468, 469, 3, 110, 55, 0, 469, 470, 5, 7, 0, 0, 470, 471, 3, 110, 55, 0, 471, 472, 5, 7, 0,
        0, 472, 480, 3, 110, 55, 0, 473, 474, 5, 7, 0, 0, 474, 475, 3, 110, 55, 0, 475, 476, 5, 7, 0, 0, 476, 477, 3,
        110, 55, 0, 477, 478, 5, 7, 0, 0, 478, 479, 3, 110, 55, 0, 479, 481, 1, 0, 0, 0, 480, 473, 1, 0, 0, 0, 480, 481,
        1, 0, 0, 0, 481, 482, 1, 0, 0, 0, 482, 483, 5, 5, 0, 0, 483, 496, 1, 0, 0, 0, 484, 496, 3, 118, 59, 0, 485, 486,
        5, 111, 0, 0, 486, 492, 5, 4, 0, 0, 487, 493, 3, 120, 60, 0, 488, 493, 5, 100, 0, 0, 489, 493, 5, 63, 0, 0, 490,
        493, 5, 66, 0, 0, 491, 493, 5, 86, 0, 0, 492, 487, 1, 0, 0, 0, 492, 488, 1, 0, 0, 0, 492, 489, 1, 0, 0, 0, 492,
        490, 1, 0, 0, 0, 492, 491, 1, 0, 0, 0, 493, 494, 1, 0, 0, 0, 494, 496, 5, 5, 0, 0, 495, 460, 1, 0, 0, 0, 495,
        461, 1, 0, 0, 0, 495, 462, 1, 0, 0, 0, 495, 463, 1, 0, 0, 0, 495, 464, 1, 0, 0, 0, 495, 465, 1, 0, 0, 0, 495,
        466, 1, 0, 0, 0, 495, 484, 1, 0, 0, 0, 495, 485, 1, 0, 0, 0, 496, 55, 1, 0, 0, 0, 497, 498, 5, 27, 0, 0, 498,
        500, 3, 52, 26, 0, 499, 501, 3, 58, 29, 0, 500, 499, 1, 0, 0, 0, 501, 502, 1, 0, 0, 0, 502, 500, 1, 0, 0, 0,
        502, 503, 1, 0, 0, 0, 503, 506, 1, 0, 0, 0, 504, 505, 5, 32, 0, 0, 505, 507, 3, 74, 37, 0, 506, 504, 1, 0, 0, 0,
        506, 507, 1, 0, 0, 0, 507, 508, 1, 0, 0, 0, 508, 509, 5, 33, 0, 0, 509, 530, 1, 0, 0, 0, 510, 512, 5, 27, 0, 0,
        511, 513, 3, 58, 29, 0, 512, 511, 1, 0, 0, 0, 513, 514, 1, 0, 0, 0, 514, 512, 1, 0, 0, 0, 514, 515, 1, 0, 0, 0,
        515, 518, 1, 0, 0, 0, 516, 517, 5, 32, 0, 0, 517, 519, 3, 74, 37, 0, 518, 516, 1, 0, 0, 0, 518, 519, 1, 0, 0, 0,
        519, 520, 1, 0, 0, 0, 520, 521, 5, 33, 0, 0, 521, 530, 1, 0, 0, 0, 522, 525, 3, 58, 29, 0, 523, 524, 5, 32, 0,
        0, 524, 526, 3, 74, 37, 0, 525, 523, 1, 0, 0, 0, 525, 526, 1, 0, 0, 0, 526, 527, 1, 0, 0, 0, 527, 528, 5, 33, 0,
        0, 528, 530, 1, 0, 0, 0, 529, 497, 1, 0, 0, 0, 529, 510, 1, 0, 0, 0, 529, 522, 1, 0, 0, 0, 530, 57, 1, 0, 0, 0,
        531, 532, 5, 56, 0, 0, 532, 533, 3, 74, 37, 0, 533, 534, 5, 51, 0, 0, 534, 535, 3, 74, 37, 0, 535, 59, 1, 0, 0,
        0, 536, 537, 5, 4, 0, 0, 537, 538, 3, 52, 26, 0, 538, 539, 5, 5, 0, 0, 539, 545, 1, 0, 0, 0, 540, 541, 5, 4, 0,
        0, 541, 542, 3, 8, 4, 0, 542, 543, 5, 5, 0, 0, 543, 545, 1, 0, 0, 0, 544, 536, 1, 0, 0, 0, 544, 540, 1, 0, 0, 0,
        545, 61, 1, 0, 0, 0, 546, 547, 3, 114, 57, 0, 547, 548, 3, 52, 26, 0, 548, 63, 1, 0, 0, 0, 549, 568, 3, 68, 34,
        0, 550, 568, 3, 66, 33, 0, 551, 556, 3, 70, 35, 0, 552, 553, 5, 3, 0, 0, 553, 555, 3, 116, 58, 0, 554, 552, 1,
        0, 0, 0, 555, 558, 1, 0, 0, 0, 556, 554, 1, 0, 0, 0, 556, 557, 1, 0, 0, 0, 557, 568, 1, 0, 0, 0, 558, 556, 1, 0,
        0, 0, 559, 564, 3, 72, 36, 0, 560, 561, 5, 3, 0, 0, 561, 563, 3, 116, 58, 0, 562, 560, 1, 0, 0, 0, 563, 566, 1,
        0, 0, 0, 564, 562, 1, 0, 0, 0, 564, 565, 1, 0, 0, 0, 565, 568, 1, 0, 0, 0, 566, 564, 1, 0, 0, 0, 567, 549, 1, 0,
        0, 0, 567, 550, 1, 0, 0, 0, 567, 551, 1, 0, 0, 0, 567, 559, 1, 0, 0, 0, 568, 65, 1, 0, 0, 0, 569, 570, 5, 104,
        0, 0, 570, 571, 5, 4, 0, 0, 571, 572, 3, 52, 26, 0, 572, 573, 5, 7, 0, 0, 573, 574, 3, 52, 26, 0, 574, 575, 5,
        7, 0, 0, 575, 576, 3, 52, 26, 0, 576, 577, 5, 5, 0, 0, 577, 659, 1, 0, 0, 0, 578, 579, 7, 5, 0, 0, 579, 580, 5,
        4, 0, 0, 580, 581, 3, 52, 26, 0, 581, 582, 5, 5, 0, 0, 582, 659, 1, 0, 0, 0, 583, 584, 7, 6, 0, 0, 584, 585, 5,
        4, 0, 0, 585, 586, 3, 52, 26, 0, 586, 587, 5, 7, 0, 0, 587, 588, 7, 7, 0, 0, 588, 589, 5, 5, 0, 0, 589, 659, 1,
        0, 0, 0, 590, 591, 5, 67, 0, 0, 591, 592, 5, 4, 0, 0, 592, 593, 3, 52, 26, 0, 593, 594, 5, 7, 0, 0, 594, 595, 7,
        2, 0, 0, 595, 596, 5, 7, 0, 0, 596, 597, 3, 52, 26, 0, 597, 598, 5, 5, 0, 0, 598, 659, 1, 0, 0, 0, 599, 600, 5,
        68, 0, 0, 600, 601, 5, 4, 0, 0, 601, 602, 3, 52, 26, 0, 602, 603, 5, 7, 0, 0, 603, 604, 3, 52, 26, 0, 604, 605,
        5, 7, 0, 0, 605, 606, 7, 8, 0, 0, 606, 607, 5, 5, 0, 0, 607, 659, 1, 0, 0, 0, 608, 609, 7, 9, 0, 0, 609, 610, 5,
        4, 0, 0, 610, 611, 3, 52, 26, 0, 611, 612, 5, 5, 0, 0, 612, 659, 1, 0, 0, 0, 613, 614, 5, 41, 0, 0, 614, 615, 5,
        4, 0, 0, 615, 616, 3, 74, 37, 0, 616, 617, 5, 7, 0, 0, 617, 618, 3, 74, 37, 0, 618, 619, 5, 5, 0, 0, 619, 659,
        1, 0, 0, 0, 620, 621, 7, 10, 0, 0, 621, 622, 5, 4, 0, 0, 622, 623, 3, 52, 26, 0, 623, 624, 5, 5, 0, 0, 624, 659,
        1, 0, 0, 0, 625, 626, 7, 11, 0, 0, 626, 627, 5, 4, 0, 0, 627, 628, 3, 52, 26, 0, 628, 629, 5, 5, 0, 0, 629, 659,
        1, 0, 0, 0, 630, 631, 5, 95, 0, 0, 631, 632, 5, 4, 0, 0, 632, 633, 3, 52, 26, 0, 633, 634, 5, 7, 0, 0, 634, 635,
        3, 52, 26, 0, 635, 636, 5, 5, 0, 0, 636, 659, 1, 0, 0, 0, 637, 638, 7, 12, 0, 0, 638, 639, 5, 4, 0, 0, 639, 640,
        3, 52, 26, 0, 640, 641, 5, 5, 0, 0, 641, 659, 1, 0, 0, 0, 642, 643, 5, 102, 0, 0, 643, 644, 5, 4, 0, 0, 644,
        645, 3, 52, 26, 0, 645, 646, 5, 7, 0, 0, 646, 647, 3, 52, 26, 0, 647, 648, 5, 5, 0, 0, 648, 659, 1, 0, 0, 0,
        649, 650, 5, 103, 0, 0, 650, 651, 5, 4, 0, 0, 651, 652, 3, 52, 26, 0, 652, 653, 5, 7, 0, 0, 653, 654, 3, 52, 26,
        0, 654, 655, 5, 7, 0, 0, 655, 656, 3, 52, 26, 0, 656, 657, 5, 5, 0, 0, 657, 659, 1, 0, 0, 0, 658, 569, 1, 0, 0,
        0, 658, 578, 1, 0, 0, 0, 658, 583, 1, 0, 0, 0, 658, 590, 1, 0, 0, 0, 658, 599, 1, 0, 0, 0, 658, 608, 1, 0, 0, 0,
        658, 613, 1, 0, 0, 0, 658, 620, 1, 0, 0, 0, 658, 625, 1, 0, 0, 0, 658, 630, 1, 0, 0, 0, 658, 637, 1, 0, 0, 0,
        658, 642, 1, 0, 0, 0, 658, 649, 1, 0, 0, 0, 659, 67, 1, 0, 0, 0, 660, 661, 7, 13, 0, 0, 661, 662, 5, 4, 0, 0,
        662, 663, 3, 74, 37, 0, 663, 664, 5, 5, 0, 0, 664, 676, 1, 0, 0, 0, 665, 666, 5, 65, 0, 0, 666, 672, 5, 4, 0, 0,
        667, 669, 5, 30, 0, 0, 668, 667, 1, 0, 0, 0, 668, 669, 1, 0, 0, 0, 669, 670, 1, 0, 0, 0, 670, 673, 3, 74, 37, 0,
        671, 673, 5, 16, 0, 0, 672, 668, 1, 0, 0, 0, 672, 671, 1, 0, 0, 0, 673, 674, 1, 0, 0, 0, 674, 676, 5, 5, 0, 0,
        675, 660, 1, 0, 0, 0, 675, 665, 1, 0, 0, 0, 676, 69, 1, 0, 0, 0, 677, 678, 5, 113, 0, 0, 678, 706, 5, 4, 0, 0,
        679, 680, 7, 14, 0, 0, 680, 681, 5, 3, 0, 0, 681, 682, 3, 116, 58, 0, 682, 683, 5, 3, 0, 0, 683, 684, 5, 73, 0,
        0, 684, 707, 1, 0, 0, 0, 685, 686, 7, 15, 0, 0, 686, 687, 5, 3, 0, 0, 687, 688, 3, 116, 58, 0, 688, 689, 5, 3,
        0, 0, 689, 690, 3, 116, 58, 0, 690, 707, 1, 0, 0, 0, 691, 692, 5, 121, 0, 0, 692, 693, 5, 3, 0, 0, 693, 694, 3,
        116, 58, 0, 694, 695, 5, 3, 0, 0, 695, 696, 5, 137, 0, 0, 696, 697, 5, 3, 0, 0, 697, 698, 3, 116, 58, 0, 698,
        707, 1, 0, 0, 0, 699, 700, 3, 116, 58, 0, 700, 701, 5, 3, 0, 0, 701, 702, 3, 116, 58, 0, 702, 707, 1, 0, 0, 0,
        703, 704, 3, 120, 60, 0, 704, 705, 5, 3, 0, 0, 705, 707, 1, 0, 0, 0, 706, 679, 1, 0, 0, 0, 706, 685, 1, 0, 0, 0,
        706, 691, 1, 0, 0, 0, 706, 699, 1, 0, 0, 0, 706, 703, 1, 0, 0, 0, 707, 708, 1, 0, 0, 0, 708, 709, 5, 5, 0, 0,
        709, 71, 1, 0, 0, 0, 710, 711, 5, 28, 0, 0, 711, 712, 5, 4, 0, 0, 712, 713, 3, 52, 26, 0, 713, 733, 5, 22, 0, 0,
        714, 734, 5, 63, 0, 0, 715, 723, 5, 86, 0, 0, 716, 717, 5, 4, 0, 0, 717, 720, 5, 156, 0, 0, 718, 719, 5, 7, 0,
        0, 719, 721, 5, 156, 0, 0, 720, 718, 1, 0, 0, 0, 720, 721, 1, 0, 0, 0, 721, 722, 1, 0, 0, 0, 722, 724, 5, 5, 0,
        0, 723, 716, 1, 0, 0, 0, 723, 724, 1, 0, 0, 0, 724, 734, 1, 0, 0, 0, 725, 729, 5, 100, 0, 0, 726, 727, 5, 4, 0,
        0, 727, 728, 5, 156, 0, 0, 728, 730, 5, 5, 0, 0, 729, 726, 1, 0, 0, 0, 729, 730, 1, 0, 0, 0, 730, 734, 1, 0, 0,
        0, 731, 734, 5, 66, 0, 0, 732, 734, 3, 120, 60, 0, 733, 714, 1, 0, 0, 0, 733, 715, 1, 0, 0, 0, 733, 725, 1, 0,
        0, 0, 733, 731, 1, 0, 0, 0, 733, 732, 1, 0, 0, 0, 734, 735, 1, 0, 0, 0, 735, 736, 5, 5, 0, 0, 736, 73, 1, 0, 0,
        0, 737, 742, 3, 76, 38, 0, 738, 739, 7, 16, 0, 0, 739, 741, 3, 76, 38, 0, 740, 738, 1, 0, 0, 0, 741, 744, 1, 0,
        0, 0, 742, 740, 1, 0, 0, 0, 742, 743, 1, 0, 0, 0, 743, 75, 1, 0, 0, 0, 744, 742, 1, 0, 0, 0, 745, 747, 5, 43, 0,
        0, 746, 745, 1, 0, 0, 0, 747, 750, 1, 0, 0, 0, 748, 746, 1, 0, 0, 0, 748, 749, 1, 0, 0, 0, 749, 762, 1, 0, 0, 0,
        750, 748, 1, 0, 0, 0, 751, 763, 3, 52, 26, 0, 752, 763, 3, 78, 39, 0, 753, 763, 3, 80, 40, 0, 754, 763, 3, 82,
        41, 0, 755, 763, 3, 84, 42, 0, 756, 763, 3, 86, 43, 0, 757, 763, 3, 88, 44, 0, 758, 759, 5, 4, 0, 0, 759, 760,
        3, 74, 37, 0, 760, 761, 5, 5, 0, 0, 761, 763, 1, 0, 0, 0, 762, 751, 1, 0, 0, 0, 762, 752, 1, 0, 0, 0, 762, 753,
        1, 0, 0, 0, 762, 754, 1, 0, 0, 0, 762, 755, 1, 0, 0, 0, 762, 756, 1, 0, 0, 0, 762, 757, 1, 0, 0, 0, 762, 758, 1,
        0, 0, 0, 763, 77, 1, 0, 0, 0, 764, 768, 3, 52, 26, 0, 765, 767, 5, 43, 0, 0, 766, 765, 1, 0, 0, 0, 767, 770, 1,
        0, 0, 0, 768, 766, 1, 0, 0, 0, 768, 769, 1, 0, 0, 0, 769, 771, 1, 0, 0, 0, 770, 768, 1, 0, 0, 0, 771, 772, 5,
        42, 0, 0, 772, 775, 3, 52, 26, 0, 773, 774, 5, 34, 0, 0, 774, 776, 3, 112, 56, 0, 775, 773, 1, 0, 0, 0, 775,
        776, 1, 0, 0, 0, 776, 79, 1, 0, 0, 0, 777, 778, 3, 52, 26, 0, 778, 780, 5, 40, 0, 0, 779, 781, 5, 43, 0, 0, 780,
        779, 1, 0, 0, 0, 780, 781, 1, 0, 0, 0, 781, 782, 1, 0, 0, 0, 782, 783, 5, 44, 0, 0, 783, 81, 1, 0, 0, 0, 784,
        785, 3, 52, 26, 0, 785, 786, 7, 17, 0, 0, 786, 787, 3, 52, 26, 0, 787, 83, 1, 0, 0, 0, 788, 789, 3, 52, 26, 0,
        789, 790, 5, 25, 0, 0, 790, 791, 3, 52, 26, 0, 791, 792, 5, 21, 0, 0, 792, 793, 3, 52, 26, 0, 793, 85, 1, 0, 0,
        0, 794, 800, 3, 52, 26, 0, 795, 796, 5, 4, 0, 0, 796, 797, 3, 90, 45, 0, 797, 798, 5, 5, 0, 0, 798, 800, 1, 0,
        0, 0, 799, 794, 1, 0, 0, 0, 799, 795, 1, 0, 0, 0, 800, 804, 1, 0, 0, 0, 801, 803, 5, 43, 0, 0, 802, 801, 1, 0,
        0, 0, 803, 806, 1, 0, 0, 0, 804, 802, 1, 0, 0, 0, 804, 805, 1, 0, 0, 0, 805, 807, 1, 0, 0, 0, 806, 804, 1, 0, 0,
        0, 807, 809, 5, 155, 0, 0, 808, 810, 5, 154, 0, 0, 809, 808, 1, 0, 0, 0, 809, 810, 1, 0, 0, 0, 810, 811, 1, 0,
        0, 0, 811, 814, 5, 4, 0, 0, 812, 815, 3, 8, 4, 0, 813, 815, 3, 90, 45, 0, 814, 812, 1, 0, 0, 0, 814, 813, 1, 0,
        0, 0, 815, 816, 1, 0, 0, 0, 816, 817, 5, 5, 0, 0, 817, 87, 1, 0, 0, 0, 818, 819, 3, 52, 26, 0, 819, 820, 5, 90,
        0, 0, 820, 821, 3, 120, 60, 0, 821, 89, 1, 0, 0, 0, 822, 827, 3, 74, 37, 0, 823, 824, 5, 7, 0, 0, 824, 826, 3,
        74, 37, 0, 825, 823, 1, 0, 0, 0, 826, 829, 1, 0, 0, 0, 827, 825, 1, 0, 0, 0, 827, 828, 1, 0, 0, 0, 828, 91, 1,
        0, 0, 0, 829, 827, 1, 0, 0, 0, 830, 835, 3, 94, 47, 0, 831, 832, 5, 7, 0, 0, 832, 834, 3, 94, 47, 0, 833, 831,
        1, 0, 0, 0, 834, 837, 1, 0, 0, 0, 835, 833, 1, 0, 0, 0, 835, 836, 1, 0, 0, 0, 836, 93, 1, 0, 0, 0, 837, 835, 1,
        0, 0, 0, 838, 839, 5, 4, 0, 0, 839, 840, 3, 94, 47, 0, 840, 841, 5, 5, 0, 0, 841, 871, 1, 0, 0, 0, 842, 847, 3,
        98, 49, 0, 843, 847, 3, 96, 48, 0, 844, 847, 3, 102, 51, 0, 845, 847, 3, 104, 52, 0, 846, 842, 1, 0, 0, 0, 846,
        843, 1, 0, 0, 0, 846, 844, 1, 0, 0, 0, 846, 845, 1, 0, 0, 0, 847, 849, 1, 0, 0, 0, 848, 850, 3, 108, 54, 0, 849,
        848, 1, 0, 0, 0, 849, 850, 1, 0, 0, 0, 850, 863, 1, 0, 0, 0, 851, 856, 5, 4, 0, 0, 852, 857, 3, 98, 49, 0, 853,
        857, 3, 96, 48, 0, 854, 857, 3, 102, 51, 0, 855, 857, 3, 8, 4, 0, 856, 852, 1, 0, 0, 0, 856, 853, 1, 0, 0, 0,
        856, 854, 1, 0, 0, 0, 856, 855, 1, 0, 0, 0, 857, 858, 1, 0, 0, 0, 858, 860, 5, 5, 0, 0, 859, 861, 3, 108, 54, 0,
        860, 859, 1, 0, 0, 0, 860, 861, 1, 0, 0, 0, 861, 863, 1, 0, 0, 0, 862, 846, 1, 0, 0, 0, 862, 851, 1, 0, 0, 0,
        863, 867, 1, 0, 0, 0, 864, 866, 3, 106, 53, 0, 865, 864, 1, 0, 0, 0, 866, 869, 1, 0, 0, 0, 867, 865, 1, 0, 0, 0,
        867, 868, 1, 0, 0, 0, 868, 871, 1, 0, 0, 0, 869, 867, 1, 0, 0, 0, 870, 838, 1, 0, 0, 0, 870, 862, 1, 0, 0, 0,
        871, 95, 1, 0, 0, 0, 872, 879, 3, 120, 60, 0, 873, 874, 3, 120, 60, 0, 874, 875, 5, 3, 0, 0, 875, 876, 3, 116,
        58, 0, 876, 879, 1, 0, 0, 0, 877, 879, 3, 116, 58, 0, 878, 872, 1, 0, 0, 0, 878, 873, 1, 0, 0, 0, 878, 877, 1,
        0, 0, 0, 879, 97, 1, 0, 0, 0, 880, 881, 3, 120, 60, 0, 881, 882, 5, 3, 0, 0, 882, 894, 7, 18, 0, 0, 883, 884, 5,
        4, 0, 0, 884, 889, 3, 100, 50, 0, 885, 886, 5, 7, 0, 0, 886, 888, 3, 100, 50, 0, 887, 885, 1, 0, 0, 0, 888, 891,
        1, 0, 0, 0, 889, 887, 1, 0, 0, 0, 889, 890, 1, 0, 0, 0, 890, 892, 1, 0, 0, 0, 891, 889, 1, 0, 0, 0, 892, 893, 5,
        5, 0, 0, 893, 895, 1, 0, 0, 0, 894, 883, 1, 0, 0, 0, 894, 895, 1, 0, 0, 0, 895, 906, 1, 0, 0, 0, 896, 897, 5,
        133, 0, 0, 897, 898, 5, 3, 0, 0, 898, 899, 3, 116, 58, 0, 899, 901, 5, 4, 0, 0, 900, 902, 3, 118, 59, 0, 901,
        900, 1, 0, 0, 0, 901, 902, 1, 0, 0, 0, 902, 903, 1, 0, 0, 0, 903, 904, 5, 5, 0, 0, 904, 906, 1, 0, 0, 0, 905,
        880, 1, 0, 0, 0, 905, 896, 1, 0, 0, 0, 906, 99, 1, 0, 0, 0, 907, 909, 3, 74, 37, 0, 908, 907, 1, 0, 0, 0, 908,
        909, 1, 0, 0, 0, 909, 101, 1, 0, 0, 0, 910, 911, 3, 118, 59, 0, 911, 103, 1, 0, 0, 0, 912, 913, 3, 120, 60, 0,
        913, 914, 5, 3, 0, 0, 914, 915, 5, 177, 0, 0, 915, 916, 5, 3, 0, 0, 916, 917, 3, 116, 58, 0, 917, 929, 1, 0, 0,
        0, 918, 919, 3, 120, 60, 0, 919, 920, 5, 3, 0, 0, 920, 921, 5, 178, 0, 0, 921, 922, 5, 3, 0, 0, 922, 923, 3,
        116, 58, 0, 923, 924, 5, 3, 0, 0, 924, 925, 5, 179, 0, 0, 925, 926, 5, 3, 0, 0, 926, 927, 3, 116, 58, 0, 927,
        929, 1, 0, 0, 0, 928, 912, 1, 0, 0, 0, 928, 918, 1, 0, 0, 0, 929, 105, 1, 0, 0, 0, 930, 932, 5, 144, 0, 0, 931,
        933, 5, 149, 0, 0, 932, 931, 1, 0, 0, 0, 932, 933, 1, 0, 0, 0, 933, 934, 1, 0, 0, 0, 934, 949, 5, 148, 0, 0,
        935, 937, 5, 145, 0, 0, 936, 938, 5, 149, 0, 0, 937, 936, 1, 0, 0, 0, 937, 938, 1, 0, 0, 0, 938, 939, 1, 0, 0,
        0, 939, 949, 5, 148, 0, 0, 940, 942, 5, 147, 0, 0, 941, 943, 5, 149, 0, 0, 942, 941, 1, 0, 0, 0, 942, 943, 1, 0,
        0, 0, 943, 944, 1, 0, 0, 0, 944, 949, 5, 148, 0, 0, 945, 946, 5, 146, 0, 0, 946, 949, 5, 148, 0, 0, 947, 949, 5,
        148, 0, 0, 948, 930, 1, 0, 0, 0, 948, 935, 1, 0, 0, 0, 948, 940, 1, 0, 0, 0, 948, 945, 1, 0, 0, 0, 948, 947, 1,
        0, 0, 0, 949, 950, 1, 0, 0, 0, 950, 951, 3, 94, 47, 0, 951, 952, 7, 19, 0, 0, 952, 953, 3, 74, 37, 0, 953, 107,
        1, 0, 0, 0, 954, 956, 5, 22, 0, 0, 955, 954, 1, 0, 0, 0, 955, 956, 1, 0, 0, 0, 956, 957, 1, 0, 0, 0, 957, 958,
        3, 116, 58, 0, 958, 109, 1, 0, 0, 0, 959, 962, 3, 118, 59, 0, 960, 962, 5, 156, 0, 0, 961, 959, 1, 0, 0, 0, 961,
        960, 1, 0, 0, 0, 962, 111, 1, 0, 0, 0, 963, 965, 5, 158, 0, 0, 964, 963, 1, 0, 0, 0, 965, 966, 1, 0, 0, 0, 966,
        964, 1, 0, 0, 0, 966, 967, 1, 0, 0, 0, 967, 113, 1, 0, 0, 0, 968, 969, 7, 20, 0, 0, 969, 115, 1, 0, 0, 0, 970,
        971, 7, 21, 0, 0, 971, 117, 1, 0, 0, 0, 972, 973, 5, 18, 0, 0, 973, 974, 5, 162, 0, 0, 974, 119, 1, 0, 0, 0,
        975, 976, 7, 22, 0, 0, 976, 977, 5, 3, 0, 0, 977, 978, 3, 116, 58, 0, 978, 121, 1, 0, 0, 0, 105, 127, 131, 137,
        158, 163, 167, 169, 173, 178, 180, 184, 188, 192, 197, 201, 205, 210, 214, 219, 221, 230, 233, 238, 276, 286,
        294, 297, 304, 313, 326, 352, 362, 365, 369, 376, 382, 384, 388, 396, 402, 406, 409, 411, 418, 422, 431, 439,
        441, 450, 457, 480, 492, 495, 502, 506, 514, 518, 525, 529, 544, 556, 564, 567, 658, 668, 672, 675, 706, 720,
        723, 729, 733, 742, 748, 762, 768, 775, 780, 799, 804, 809, 814, 827, 835, 846, 849, 856, 860, 862, 867, 870,
        878, 889, 894, 901, 905, 908, 928, 932, 937, 942, 948, 955, 961, 966,
    ];

    private static __ATN: ATN;

    public static get _ATN(): ATN {
        if (!SDBLParser.__ATN) {
            SDBLParser.__ATN = new ATNDeserializer().deserialize(SDBLParser._serializedATN);
        }

        return SDBLParser.__ATN;
    }

    static DecisionsToDFA = SDBLParser._ATN.decisionToState.map(
        (ds: DecisionState, index: number) => new DFA(ds, index)
    );
}

export class QueryPackageContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public queries_list(): QueriesContext[] {
        return this.getTypedRuleContexts(QueriesContext) as QueriesContext[];
    }

    public queries(i: number): QueriesContext {
        return this.getTypedRuleContext(QueriesContext, i) as QueriesContext;
    }

    public EOF(): TerminalNode {
        return this.getToken(SDBLParser.EOF, 0);
    }

    public SEMICOLON_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.SEMICOLON);
    }

    public SEMICOLON(i: number): TerminalNode {
        return this.getToken(SDBLParser.SEMICOLON, i);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_queryPackage;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterQueryPackage) {
            listener.enterQueryPackage(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitQueryPackage) {
            listener.exitQueryPackage(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitQueryPackage) {
            return visitor.visitQueryPackage(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class QueriesContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public selectQuery(): SelectQueryContext {
        return this.getTypedRuleContext(SelectQueryContext, 0) as SelectQueryContext;
    }

    public dropTableQuery(): DropTableQueryContext {
        return this.getTypedRuleContext(DropTableQueryContext, 0) as DropTableQueryContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_queries;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterQueries) {
            listener.enterQueries(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitQueries) {
            listener.exitQueries(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitQueries) {
            return visitor.visitQueries(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DropTableQueryContext extends BslParserRuleContext {
    public _temporaryTableName!: IdentifierContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public DROP(): TerminalNode {
        return this.getToken(SDBLParser.DROP, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_dropTableQuery;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterDropTableQuery) {
            listener.enterDropTableQuery(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitDropTableQuery) {
            listener.exitDropTableQuery(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitDropTableQuery) {
            return visitor.visitDropTableQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SelectQueryContext extends BslParserRuleContext {
    public _autoorder!: Token;

    public _orders!: OrderByContext;

    public _totals!: TotalByContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public subquery(): SubqueryContext {
        return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
    }

    public AUTOORDER(): TerminalNode {
        return this.getToken(SDBLParser.AUTOORDER, 0);
    }

    public orderBy(): OrderByContext {
        return this.getTypedRuleContext(OrderByContext, 0) as OrderByContext;
    }

    public totalBy(): TotalByContext {
        return this.getTypedRuleContext(TotalByContext, 0) as TotalByContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_selectQuery;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterSelectQuery) {
            listener.enterSelectQuery(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitSelectQuery) {
            listener.exitSelectQuery(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitSelectQuery) {
            return visitor.visitSelectQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubqueryContext extends BslParserRuleContext {
    public _main!: QueryContext;

    public _union!: UnionContext;

    public _unions: UnionContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public query(): QueryContext {
        return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
    }

    public orderBy(): OrderByContext {
        return this.getTypedRuleContext(OrderByContext, 0) as OrderByContext;
    }

    public union_list(): UnionContext[] {
        return this.getTypedRuleContexts(UnionContext) as UnionContext[];
    }

    public union(i: number): UnionContext {
        return this.getTypedRuleContext(UnionContext, i) as UnionContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_subquery;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterSubquery) {
            listener.enterSubquery(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitSubquery) {
            listener.exitSubquery(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitSubquery) {
            return visitor.visitSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UnionContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public UNION(): TerminalNode {
        return this.getToken(SDBLParser.UNION, 0);
    }

    public query(): QueryContext {
        return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
    }

    public ALL(): TerminalNode {
        return this.getToken(SDBLParser.ALL, 0);
    }

    public orderBy(): OrderByContext {
        return this.getTypedRuleContext(OrderByContext, 0) as OrderByContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_union;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterUnion) {
            listener.enterUnion(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitUnion) {
            listener.exitUnion(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitUnion) {
            return visitor.visitUnion(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class QueryContext extends BslParserRuleContext {
    public _columns!: SelectedFieldsContext;

    public _temporaryTableName!: IdentifierContext;

    public _from_!: DataSourcesContext;

    public _where!: LogicalExpressionContext;

    public _groupBy!: GroupByItemContext;

    public _having!: LogicalExpressionContext;

    public _forUpdate!: MdoContext;

    public _indexingItem!: IndexingItemContext;

    public _indexes: IndexingItemContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public SELECT(): TerminalNode {
        return this.getToken(SDBLParser.SELECT, 0);
    }

    public selectedFields(): SelectedFieldsContext {
        return this.getTypedRuleContext(SelectedFieldsContext, 0) as SelectedFieldsContext;
    }

    public limitations(): LimitationsContext {
        return this.getTypedRuleContext(LimitationsContext, 0) as LimitationsContext;
    }

    public INTO(): TerminalNode {
        return this.getToken(SDBLParser.INTO, 0);
    }

    public FROM(): TerminalNode {
        return this.getToken(SDBLParser.FROM, 0);
    }

    public WHERE(): TerminalNode {
        return this.getToken(SDBLParser.WHERE, 0);
    }

    public GROUP(): TerminalNode {
        return this.getToken(SDBLParser.GROUP, 0);
    }

    public HAVING(): TerminalNode {
        return this.getToken(SDBLParser.HAVING, 0);
    }

    public FOR(): TerminalNode {
        return this.getToken(SDBLParser.FOR, 0);
    }

    public UPDATE(): TerminalNode {
        return this.getToken(SDBLParser.UPDATE, 0);
    }

    public INDEX(): TerminalNode {
        return this.getToken(SDBLParser.INDEX, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public dataSources(): DataSourcesContext {
        return this.getTypedRuleContext(DataSourcesContext, 0) as DataSourcesContext;
    }

    public logicalExpression_list(): LogicalExpressionContext[] {
        return this.getTypedRuleContexts(LogicalExpressionContext) as LogicalExpressionContext[];
    }

    public logicalExpression(i: number): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, i) as LogicalExpressionContext;
    }

    public BY_EN_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.BY_EN);
    }

    public BY_EN(i: number): TerminalNode {
        return this.getToken(SDBLParser.BY_EN, i);
    }

    public PO_RU_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.PO_RU);
    }

    public PO_RU(i: number): TerminalNode {
        return this.getToken(SDBLParser.PO_RU, i);
    }

    public groupByItem(): GroupByItemContext {
        return this.getTypedRuleContext(GroupByItemContext, 0) as GroupByItemContext;
    }

    public indexingItem_list(): IndexingItemContext[] {
        return this.getTypedRuleContexts(IndexingItemContext) as IndexingItemContext[];
    }

    public indexingItem(i: number): IndexingItemContext {
        return this.getTypedRuleContext(IndexingItemContext, i) as IndexingItemContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public mdo(): MdoContext {
        return this.getTypedRuleContext(MdoContext, 0) as MdoContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_query;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LimitationsContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public top(): TopContext {
        return this.getTypedRuleContext(TopContext, 0) as TopContext;
    }

    public DISTINCT(): TerminalNode {
        return this.getToken(SDBLParser.DISTINCT, 0);
    }

    public ALLOWED(): TerminalNode {
        return this.getToken(SDBLParser.ALLOWED, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_limitations;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterLimitations) {
            listener.enterLimitations(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitLimitations) {
            listener.exitLimitations(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitLimitations) {
            return visitor.visitLimitations(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TopContext extends BslParserRuleContext {
    public _count!: Token;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public TOP(): TerminalNode {
        return this.getToken(SDBLParser.TOP, 0);
    }

    public DECIMAL(): TerminalNode {
        return this.getToken(SDBLParser.DECIMAL, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_top;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterTop) {
            listener.enterTop(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitTop) {
            listener.exitTop(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitTop) {
            return visitor.visitTop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SelectedFieldsContext extends BslParserRuleContext {
    public _selectedField!: SelectedFieldContext;

    public _fields: SelectedFieldContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public selectedField_list(): SelectedFieldContext[] {
        return this.getTypedRuleContexts(SelectedFieldContext) as SelectedFieldContext[];
    }

    public selectedField(i: number): SelectedFieldContext {
        return this.getTypedRuleContext(SelectedFieldContext, i) as SelectedFieldContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_selectedFields;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterSelectedFields) {
            listener.enterSelectedFields(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitSelectedFields) {
            listener.exitSelectedFields(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitSelectedFields) {
            return visitor.visitSelectedFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SelectedFieldContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public asteriskField(): AsteriskFieldContext {
        return this.getTypedRuleContext(AsteriskFieldContext, 0) as AsteriskFieldContext;
    }

    public columnField(): ColumnFieldContext {
        return this.getTypedRuleContext(ColumnFieldContext, 0) as ColumnFieldContext;
    }

    public emptyTableField(): EmptyTableFieldContext {
        return this.getTypedRuleContext(EmptyTableFieldContext, 0) as EmptyTableFieldContext;
    }

    public inlineTableField(): InlineTableFieldContext {
        return this.getTypedRuleContext(InlineTableFieldContext, 0) as InlineTableFieldContext;
    }

    public expressionField(): ExpressionFieldContext {
        return this.getTypedRuleContext(ExpressionFieldContext, 0) as ExpressionFieldContext;
    }

    public alias(): AliasContext {
        return this.getTypedRuleContext(AliasContext, 0) as AliasContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_selectedField;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterSelectedField) {
            listener.enterSelectedField(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitSelectedField) {
            listener.exitSelectedField(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitSelectedField) {
            return visitor.visitSelectedField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AsteriskFieldContext extends BslParserRuleContext {
    public _tableName!: IdentifierContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public MUL(): TerminalNode {
        return this.getToken(SDBLParser.MUL, 0);
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(SDBLParser.DOT, i);
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_asteriskField;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterAsteriskField) {
            listener.enterAsteriskField(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitAsteriskField) {
            listener.exitAsteriskField(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitAsteriskField) {
            return visitor.visitAsteriskField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExpressionFieldContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public logicalExpression(): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_expressionField;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterExpressionField) {
            listener.enterExpressionField(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitExpressionField) {
            listener.exitExpressionField(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitExpressionField) {
            return visitor.visitExpressionField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnFieldContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public NULL(): TerminalNode {
        return this.getToken(SDBLParser.NULL, 0);
    }

    public recordAutoNumberFunction(): RecordAutoNumberFunctionContext {
        return this.getTypedRuleContext(RecordAutoNumberFunctionContext, 0) as RecordAutoNumberFunctionContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_columnField;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterColumnField) {
            listener.enterColumnField(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitColumnField) {
            listener.exitColumnField(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitColumnField) {
            return visitor.visitColumnField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class EmptyTableFieldContext extends BslParserRuleContext {
    public _emptyTable!: Token;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public DOT(): TerminalNode {
        return this.getToken(SDBLParser.DOT, 0);
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public emptyTableColumns(): EmptyTableColumnsContext {
        return this.getTypedRuleContext(EmptyTableColumnsContext, 0) as EmptyTableColumnsContext;
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public EMPTYTABLE(): TerminalNode {
        return this.getToken(SDBLParser.EMPTYTABLE, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_emptyTableField;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterEmptyTableField) {
            listener.enterEmptyTableField(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitEmptyTableField) {
            listener.exitEmptyTableField(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitEmptyTableField) {
            return visitor.visitEmptyTableField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class EmptyTableColumnsContext extends BslParserRuleContext {
    public _alias!: AliasContext;

    public _columns: AliasContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public alias_list(): AliasContext[] {
        return this.getTypedRuleContexts(AliasContext) as AliasContext[];
    }

    public alias(i: number): AliasContext {
        return this.getTypedRuleContext(AliasContext, i) as AliasContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_emptyTableColumns;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterEmptyTableColumns) {
            listener.enterEmptyTableColumns(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitEmptyTableColumns) {
            listener.exitEmptyTableColumns(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitEmptyTableColumns) {
            return visitor.visitEmptyTableColumns(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class InlineTableFieldContext extends BslParserRuleContext {
    public _inlineTable!: ColumnContext;

    public _inlineTableFields!: SelectedFieldsContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public DOT(): TerminalNode {
        return this.getToken(SDBLParser.DOT, 0);
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public column(): ColumnContext {
        return this.getTypedRuleContext(ColumnContext, 0) as ColumnContext;
    }

    public selectedFields(): SelectedFieldsContext {
        return this.getTypedRuleContext(SelectedFieldsContext, 0) as SelectedFieldsContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_inlineTableField;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterInlineTableField) {
            listener.enterInlineTableField(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitInlineTableField) {
            listener.exitInlineTableField(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitInlineTableField) {
            return visitor.visitInlineTableField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RecordAutoNumberFunctionContext extends BslParserRuleContext {
    public _doCall!: Token;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public RECORDAUTONUMBER(): TerminalNode {
        return this.getToken(SDBLParser.RECORDAUTONUMBER, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_recordAutoNumberFunction;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterRecordAutoNumberFunction) {
            listener.enterRecordAutoNumberFunction(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitRecordAutoNumberFunction) {
            listener.exitRecordAutoNumberFunction(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitRecordAutoNumberFunction) {
            return visitor.visitRecordAutoNumberFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class GroupByItemContext extends BslParserRuleContext {
    public _expressionList!: ExpressionListContext;

    public _groupingSet: ExpressionListContext[] = [];

    public _expression!: ExpressionContext;

    public _groupBy: ExpressionContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public GROUPING(): TerminalNode {
        return this.getToken(SDBLParser.GROUPING, 0);
    }

    public SET(): TerminalNode {
        return this.getToken(SDBLParser.SET, 0);
    }

    public LPAREN_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.LPAREN);
    }

    public LPAREN(i: number): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, i);
    }

    public RPAREN_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.RPAREN);
    }

    public RPAREN(i: number): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, i);
    }

    public expressionList_list(): ExpressionListContext[] {
        return this.getTypedRuleContexts(ExpressionListContext) as ExpressionListContext[];
    }

    public expressionList(i: number): ExpressionListContext {
        return this.getTypedRuleContext(ExpressionListContext, i) as ExpressionListContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_groupByItem;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterGroupByItem) {
            listener.enterGroupByItem(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitGroupByItem) {
            listener.exitGroupByItem(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitGroupByItem) {
            return visitor.visitGroupByItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IndexingItemContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public parameter(): ParameterContext {
        return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
    }

    public column(): ColumnContext {
        return this.getTypedRuleContext(ColumnContext, 0) as ColumnContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_indexingItem;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterIndexingItem) {
            listener.enterIndexingItem(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitIndexingItem) {
            listener.exitIndexingItem(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitIndexingItem) {
            return visitor.visitIndexingItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class OrderByContext extends BslParserRuleContext {
    public _ordersByExpession!: OrdersByExpessionContext;

    public _orders: OrdersByExpessionContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ORDER(): TerminalNode {
        return this.getToken(SDBLParser.ORDER, 0);
    }

    public BY_EN(): TerminalNode {
        return this.getToken(SDBLParser.BY_EN, 0);
    }

    public PO_RU(): TerminalNode {
        return this.getToken(SDBLParser.PO_RU, 0);
    }

    public ordersByExpession_list(): OrdersByExpessionContext[] {
        return this.getTypedRuleContexts(OrdersByExpessionContext) as OrdersByExpessionContext[];
    }

    public ordersByExpession(i: number): OrdersByExpessionContext {
        return this.getTypedRuleContext(OrdersByExpessionContext, i) as OrdersByExpessionContext;
    }

    public COMMA(): TerminalNode {
        return this.getToken(SDBLParser.COMMA, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_orderBy;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterOrderBy) {
            listener.enterOrderBy(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitOrderBy) {
            listener.exitOrderBy(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitOrderBy) {
            return visitor.visitOrderBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class OrdersByExpessionContext extends BslParserRuleContext {
    public _direction!: Token;

    public _hierarchy!: Token;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public ASC(): TerminalNode {
        return this.getToken(SDBLParser.ASC, 0);
    }

    public DESC(): TerminalNode {
        return this.getToken(SDBLParser.DESC, 0);
    }

    public HIERARCHY(): TerminalNode {
        return this.getToken(SDBLParser.HIERARCHY, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_ordersByExpession;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterOrdersByExpession) {
            listener.enterOrdersByExpession(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitOrdersByExpession) {
            listener.exitOrdersByExpession(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitOrdersByExpession) {
            return visitor.visitOrdersByExpession(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TotalByContext extends BslParserRuleContext {
    public _totalsGroup!: TotalsGroupContext;

    public _totalsGroups: TotalsGroupContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public TOTALS(): TerminalNode {
        return this.getToken(SDBLParser.TOTALS, 0);
    }

    public BY_EN(): TerminalNode {
        return this.getToken(SDBLParser.BY_EN, 0);
    }

    public PO_RU(): TerminalNode {
        return this.getToken(SDBLParser.PO_RU, 0);
    }

    public totalsGroup_list(): TotalsGroupContext[] {
        return this.getTypedRuleContexts(TotalsGroupContext) as TotalsGroupContext[];
    }

    public totalsGroup(i: number): TotalsGroupContext {
        return this.getTypedRuleContext(TotalsGroupContext, i) as TotalsGroupContext;
    }

    public selectedFields(): SelectedFieldsContext {
        return this.getTypedRuleContext(SelectedFieldsContext, 0) as SelectedFieldsContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_totalBy;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterTotalBy) {
            listener.enterTotalBy(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitTotalBy) {
            listener.exitTotalBy(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitTotalBy) {
            return visitor.visitTotalBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TotalsGroupContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OVERALL(): TerminalNode {
        return this.getToken(SDBLParser.OVERALL, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public periodic(): PeriodicContext {
        return this.getTypedRuleContext(PeriodicContext, 0) as PeriodicContext;
    }

    public alias(): AliasContext {
        return this.getTypedRuleContext(AliasContext, 0) as AliasContext;
    }

    public HIERARCHY(): TerminalNode {
        return this.getToken(SDBLParser.HIERARCHY, 0);
    }

    public ONLY(): TerminalNode {
        return this.getToken(SDBLParser.ONLY, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_totalsGroup;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterTotalsGroup) {
            listener.enterTotalsGroup(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitTotalsGroup) {
            listener.exitTotalsGroup(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitTotalsGroup) {
            return visitor.visitTotalsGroup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PeriodicContext extends BslParserRuleContext {
    public _periodType!: Token;

    public _first!: ExpressionContext;

    public _second!: ExpressionContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PERIODS(): TerminalNode {
        return this.getToken(SDBLParser.PERIODS, 0);
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public SECOND(): TerminalNode {
        return this.getToken(SDBLParser.SECOND, 0);
    }

    public MINUTE(): TerminalNode {
        return this.getToken(SDBLParser.MINUTE, 0);
    }

    public HOUR(): TerminalNode {
        return this.getToken(SDBLParser.HOUR, 0);
    }

    public DAY(): TerminalNode {
        return this.getToken(SDBLParser.DAY, 0);
    }

    public WEEK(): TerminalNode {
        return this.getToken(SDBLParser.WEEK, 0);
    }

    public MONTH(): TerminalNode {
        return this.getToken(SDBLParser.MONTH, 0);
    }

    public QUARTER(): TerminalNode {
        return this.getToken(SDBLParser.QUARTER, 0);
    }

    public YEAR(): TerminalNode {
        return this.getToken(SDBLParser.YEAR, 0);
    }

    public TENDAYS(): TerminalNode {
        return this.getToken(SDBLParser.TENDAYS, 0);
    }

    public HALFYEAR(): TerminalNode {
        return this.getToken(SDBLParser.HALFYEAR, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_periodic;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterPeriodic) {
            listener.enterPeriodic(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitPeriodic) {
            listener.exitPeriodic(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitPeriodic) {
            return visitor.visitPeriodic(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnContext extends BslParserRuleContext {
    public _mdoName!: IdentifierContext;

    public _identifier!: IdentifierContext;

    public _columnNames: IdentifierContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(SDBLParser.DOT, i);
    }

    public mdo(): MdoContext {
        return this.getTypedRuleContext(MdoContext, 0) as MdoContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_column;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterColumn) {
            listener.enterColumn(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitColumn) {
            listener.exitColumn(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitColumn) {
            return visitor.visitColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExpressionContext extends BslParserRuleContext {
    public _binaryOperation!: Token;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public primitiveExpression(): PrimitiveExpressionContext {
        return this.getTypedRuleContext(PrimitiveExpressionContext, 0) as PrimitiveExpressionContext;
    }

    public functionCall(): FunctionCallContext {
        return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
    }

    public caseExpression(): CaseExpressionContext {
        return this.getTypedRuleContext(CaseExpressionContext, 0) as CaseExpressionContext;
    }

    public column(): ColumnContext {
        return this.getTypedRuleContext(ColumnContext, 0) as ColumnContext;
    }

    public bracketExpression(): BracketExpressionContext {
        return this.getTypedRuleContext(BracketExpressionContext, 0) as BracketExpressionContext;
    }

    public unaryExpression(): UnaryExpressionContext {
        return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public MUL(): TerminalNode {
        return this.getToken(SDBLParser.MUL, 0);
    }

    public QUOTIENT(): TerminalNode {
        return this.getToken(SDBLParser.QUOTIENT, 0);
    }

    public PLUS(): TerminalNode {
        return this.getToken(SDBLParser.PLUS, 0);
    }

    public MINUS(): TerminalNode {
        return this.getToken(SDBLParser.MINUS, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_expression;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PrimitiveExpressionContext extends BslParserRuleContext {
    public _booleanValue!: Token;

    public _year!: DatePartContext;

    public _month!: DatePartContext;

    public _day!: DatePartContext;

    public _hour!: DatePartContext;

    public _minute!: DatePartContext;

    public _second!: DatePartContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public NULL(): TerminalNode {
        return this.getToken(SDBLParser.NULL, 0);
    }

    public UNDEFINED(): TerminalNode {
        return this.getToken(SDBLParser.UNDEFINED, 0);
    }

    public multiString(): MultiStringContext {
        return this.getTypedRuleContext(MultiStringContext, 0) as MultiStringContext;
    }

    public DECIMAL(): TerminalNode {
        return this.getToken(SDBLParser.DECIMAL, 0);
    }

    public FLOAT(): TerminalNode {
        return this.getToken(SDBLParser.FLOAT, 0);
    }

    public TRUE(): TerminalNode {
        return this.getToken(SDBLParser.TRUE, 0);
    }

    public FALSE(): TerminalNode {
        return this.getToken(SDBLParser.FALSE, 0);
    }

    public DATETIME(): TerminalNode {
        return this.getToken(SDBLParser.DATETIME, 0);
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public datePart_list(): DatePartContext[] {
        return this.getTypedRuleContexts(DatePartContext) as DatePartContext[];
    }

    public datePart(i: number): DatePartContext {
        return this.getTypedRuleContext(DatePartContext, i) as DatePartContext;
    }

    public parameter(): ParameterContext {
        return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
    }

    public TYPE(): TerminalNode {
        return this.getToken(SDBLParser.TYPE, 0);
    }

    public mdo(): MdoContext {
        return this.getTypedRuleContext(MdoContext, 0) as MdoContext;
    }

    public STRING(): TerminalNode {
        return this.getToken(SDBLParser.STRING, 0);
    }

    public BOOLEAN(): TerminalNode {
        return this.getToken(SDBLParser.BOOLEAN, 0);
    }

    public DATE(): TerminalNode {
        return this.getToken(SDBLParser.DATE, 0);
    }

    public NUMBER(): TerminalNode {
        return this.getToken(SDBLParser.NUMBER, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_primitiveExpression;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterPrimitiveExpression) {
            listener.enterPrimitiveExpression(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitPrimitiveExpression) {
            listener.exitPrimitiveExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitPrimitiveExpression) {
            return visitor.visitPrimitiveExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CaseExpressionContext extends BslParserRuleContext {
    public _caseExp!: ExpressionContext;

    public _elseExp!: LogicalExpressionContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public CASE(): TerminalNode {
        return this.getToken(SDBLParser.CASE, 0);
    }

    public END(): TerminalNode {
        return this.getToken(SDBLParser.END, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public caseBranch_list(): CaseBranchContext[] {
        return this.getTypedRuleContexts(CaseBranchContext) as CaseBranchContext[];
    }

    public caseBranch(i: number): CaseBranchContext {
        return this.getTypedRuleContext(CaseBranchContext, i) as CaseBranchContext;
    }

    public ELSE(): TerminalNode {
        return this.getToken(SDBLParser.ELSE, 0);
    }

    public logicalExpression(): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_caseExpression;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterCaseExpression) {
            listener.enterCaseExpression(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitCaseExpression) {
            listener.exitCaseExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitCaseExpression) {
            return visitor.visitCaseExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CaseBranchContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public WHEN(): TerminalNode {
        return this.getToken(SDBLParser.WHEN, 0);
    }

    public logicalExpression_list(): LogicalExpressionContext[] {
        return this.getTypedRuleContexts(LogicalExpressionContext) as LogicalExpressionContext[];
    }

    public logicalExpression(i: number): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, i) as LogicalExpressionContext;
    }

    public THEN(): TerminalNode {
        return this.getToken(SDBLParser.THEN, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_caseBranch;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterCaseBranch) {
            listener.enterCaseBranch(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitCaseBranch) {
            listener.exitCaseBranch(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitCaseBranch) {
            return visitor.visitCaseBranch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class BracketExpressionContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public subquery(): SubqueryContext {
        return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_bracketExpression;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterBracketExpression) {
            listener.enterBracketExpression(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitBracketExpression) {
            listener.exitBracketExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitBracketExpression) {
            return visitor.visitBracketExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UnaryExpressionContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public sign(): SignContext {
        return this.getTypedRuleContext(SignContext, 0) as SignContext;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_unaryExpression;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterUnaryExpression) {
            listener.enterUnaryExpression(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitUnaryExpression) {
            listener.exitUnaryExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitUnaryExpression) {
            return visitor.visitUnaryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FunctionCallContext extends BslParserRuleContext {
    public _identifier!: IdentifierContext;

    public _columnNames: IdentifierContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public aggregateFunctions(): AggregateFunctionsContext {
        return this.getTypedRuleContext(AggregateFunctionsContext, 0) as AggregateFunctionsContext;
    }

    public builtInFunctions(): BuiltInFunctionsContext {
        return this.getTypedRuleContext(BuiltInFunctionsContext, 0) as BuiltInFunctionsContext;
    }

    public valueFunction(): ValueFunctionContext {
        return this.getTypedRuleContext(ValueFunctionContext, 0) as ValueFunctionContext;
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(SDBLParser.DOT, i);
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public castFunction(): CastFunctionContext {
        return this.getTypedRuleContext(CastFunctionContext, 0) as CastFunctionContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_functionCall;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class BuiltInFunctionsContext extends BslParserRuleContext {
    public _doCall!: Token;

    public _string_!: ExpressionContext;

    public _charNo!: ExpressionContext;

    public _count!: ExpressionContext;

    public _date!: ExpressionContext;

    public _periodType!: Token;

    public _firstdate!: ExpressionContext;

    public _seconddate!: ExpressionContext;

    public _value!: ExpressionContext;

    public _first!: LogicalExpressionContext;

    public _second!: LogicalExpressionContext;

    public _decimal!: ExpressionContext;

    public _precise!: ExpressionContext;

    public _substring1!: ExpressionContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public SUBSTRING(): TerminalNode {
        return this.getToken(SDBLParser.SUBSTRING, 0);
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public YEAR(): TerminalNode {
        return this.getToken(SDBLParser.YEAR, 0);
    }

    public QUARTER(): TerminalNode {
        return this.getToken(SDBLParser.QUARTER, 0);
    }

    public MONTH(): TerminalNode {
        return this.getToken(SDBLParser.MONTH, 0);
    }

    public DAYOFYEAR(): TerminalNode {
        return this.getToken(SDBLParser.DAYOFYEAR, 0);
    }

    public DAY(): TerminalNode {
        return this.getToken(SDBLParser.DAY, 0);
    }

    public WEEK(): TerminalNode {
        return this.getToken(SDBLParser.WEEK, 0);
    }

    public WEEKDAY(): TerminalNode {
        return this.getToken(SDBLParser.WEEKDAY, 0);
    }

    public HOUR(): TerminalNode {
        return this.getToken(SDBLParser.HOUR, 0);
    }

    public MINUTE(): TerminalNode {
        return this.getToken(SDBLParser.MINUTE, 0);
    }

    public SECOND(): TerminalNode {
        return this.getToken(SDBLParser.SECOND, 0);
    }

    public BEGINOFPERIOD(): TerminalNode {
        return this.getToken(SDBLParser.BEGINOFPERIOD, 0);
    }

    public ENDOFPERIOD(): TerminalNode {
        return this.getToken(SDBLParser.ENDOFPERIOD, 0);
    }

    public TENDAYS(): TerminalNode {
        return this.getToken(SDBLParser.TENDAYS, 0);
    }

    public HALFYEAR(): TerminalNode {
        return this.getToken(SDBLParser.HALFYEAR, 0);
    }

    public DATEADD(): TerminalNode {
        return this.getToken(SDBLParser.DATEADD, 0);
    }

    public DATEDIFF(): TerminalNode {
        return this.getToken(SDBLParser.DATEDIFF, 0);
    }

    public VALUETYPE(): TerminalNode {
        return this.getToken(SDBLParser.VALUETYPE, 0);
    }

    public PRESENTATION(): TerminalNode {
        return this.getToken(SDBLParser.PRESENTATION, 0);
    }

    public REFPRESENTATION(): TerminalNode {
        return this.getToken(SDBLParser.REFPRESENTATION, 0);
    }

    public GROUPEDBY(): TerminalNode {
        return this.getToken(SDBLParser.GROUPEDBY, 0);
    }

    public ISNULL(): TerminalNode {
        return this.getToken(SDBLParser.ISNULL, 0);
    }

    public logicalExpression_list(): LogicalExpressionContext[] {
        return this.getTypedRuleContexts(LogicalExpressionContext) as LogicalExpressionContext[];
    }

    public logicalExpression(i: number): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, i) as LogicalExpressionContext;
    }

    public ACOS(): TerminalNode {
        return this.getToken(SDBLParser.ACOS, 0);
    }

    public ASIN(): TerminalNode {
        return this.getToken(SDBLParser.ASIN, 0);
    }

    public ATAN(): TerminalNode {
        return this.getToken(SDBLParser.ATAN, 0);
    }

    public COS(): TerminalNode {
        return this.getToken(SDBLParser.COS, 0);
    }

    public SIN(): TerminalNode {
        return this.getToken(SDBLParser.SIN, 0);
    }

    public TAN(): TerminalNode {
        return this.getToken(SDBLParser.TAN, 0);
    }

    public LOG(): TerminalNode {
        return this.getToken(SDBLParser.LOG, 0);
    }

    public LOG10(): TerminalNode {
        return this.getToken(SDBLParser.LOG10, 0);
    }

    public EXP(): TerminalNode {
        return this.getToken(SDBLParser.EXP, 0);
    }

    public POW(): TerminalNode {
        return this.getToken(SDBLParser.POW, 0);
    }

    public SQRT(): TerminalNode {
        return this.getToken(SDBLParser.SQRT, 0);
    }

    public INT(): TerminalNode {
        return this.getToken(SDBLParser.INT, 0);
    }

    public LOWER(): TerminalNode {
        return this.getToken(SDBLParser.LOWER, 0);
    }

    public STRINGLENGTH(): TerminalNode {
        return this.getToken(SDBLParser.STRINGLENGTH, 0);
    }

    public TRIMALL(): TerminalNode {
        return this.getToken(SDBLParser.TRIMALL, 0);
    }

    public TRIML(): TerminalNode {
        return this.getToken(SDBLParser.TRIML, 0);
    }

    public TRIMR(): TerminalNode {
        return this.getToken(SDBLParser.TRIMR, 0);
    }

    public UPPER(): TerminalNode {
        return this.getToken(SDBLParser.UPPER, 0);
    }

    public ROUND(): TerminalNode {
        return this.getToken(SDBLParser.ROUND, 0);
    }

    public STOREDDATASIZE(): TerminalNode {
        return this.getToken(SDBLParser.STOREDDATASIZE, 0);
    }

    public UUID(): TerminalNode {
        return this.getToken(SDBLParser.UUID, 0);
    }

    public STRFIND(): TerminalNode {
        return this.getToken(SDBLParser.STRFIND, 0);
    }

    public STRREPLACE(): TerminalNode {
        return this.getToken(SDBLParser.STRREPLACE, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_builtInFunctions;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterBuiltInFunctions) {
            listener.enterBuiltInFunctions(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitBuiltInFunctions) {
            listener.exitBuiltInFunctions(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitBuiltInFunctions) {
            return visitor.visitBuiltInFunctions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AggregateFunctionsContext extends BslParserRuleContext {
    public _doCall!: Token;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public logicalExpression(): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public SUM(): TerminalNode {
        return this.getToken(SDBLParser.SUM, 0);
    }

    public AVG(): TerminalNode {
        return this.getToken(SDBLParser.AVG, 0);
    }

    public MIN(): TerminalNode {
        return this.getToken(SDBLParser.MIN, 0);
    }

    public MAX(): TerminalNode {
        return this.getToken(SDBLParser.MAX, 0);
    }

    public COUNT(): TerminalNode {
        return this.getToken(SDBLParser.COUNT, 0);
    }

    public MUL(): TerminalNode {
        return this.getToken(SDBLParser.MUL, 0);
    }

    public DISTINCT(): TerminalNode {
        return this.getToken(SDBLParser.DISTINCT, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_aggregateFunctions;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterAggregateFunctions) {
            listener.enterAggregateFunctions(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitAggregateFunctions) {
            listener.exitAggregateFunctions(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitAggregateFunctions) {
            return visitor.visitAggregateFunctions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ValueFunctionContext extends BslParserRuleContext {
    public _doCall!: Token;

    public _type_!: Token;

    public _mdoName!: IdentifierContext;

    public _emptyFer!: Token;

    public _predefinedName!: IdentifierContext;

    public _routePointName!: IdentifierContext;

    public _systemName!: IdentifierContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public VALUE(): TerminalNode {
        return this.getToken(SDBLParser.VALUE, 0);
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(SDBLParser.DOT, i);
    }

    public ROUTEPOINT_FIELD(): TerminalNode {
        return this.getToken(SDBLParser.ROUTEPOINT_FIELD, 0);
    }

    public mdo(): MdoContext {
        return this.getTypedRuleContext(MdoContext, 0) as MdoContext;
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public EMPTYREF(): TerminalNode {
        return this.getToken(SDBLParser.EMPTYREF, 0);
    }

    public BUSINESS_PROCESS_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.BUSINESS_PROCESS_TYPE, 0);
    }

    public CATALOG_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CATALOG_TYPE, 0);
    }

    public DOCUMENT_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.DOCUMENT_TYPE, 0);
    }

    public FILTER_CRITERION_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.FILTER_CRITERION_TYPE, 0);
    }

    public EXCHANGE_PLAN_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.EXCHANGE_PLAN_TYPE, 0);
    }

    public ENUM_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.ENUM_TYPE, 0);
    }

    public CHART_OF_CHARACTERISTIC_TYPES_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE, 0);
    }

    public CHART_OF_ACCOUNTS_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CHART_OF_ACCOUNTS_TYPE, 0);
    }

    public CHART_OF_CALCULATION_TYPES_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE, 0);
    }

    public TASK_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.TASK_TYPE, 0);
    }

    public EXTERNAL_DATA_SOURCE_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.EXTERNAL_DATA_SOURCE_TYPE, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_valueFunction;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterValueFunction) {
            listener.enterValueFunction(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitValueFunction) {
            listener.exitValueFunction(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitValueFunction) {
            return visitor.visitValueFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CastFunctionContext extends BslParserRuleContext {
    public _doCall!: Token;

    public _value!: ExpressionContext;

    public _type_!: Token;

    public _len!: Token;

    public _prec!: Token;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LPAREN_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.LPAREN);
    }

    public LPAREN(i: number): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, i);
    }

    public AS(): TerminalNode {
        return this.getToken(SDBLParser.AS, 0);
    }

    public RPAREN_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.RPAREN);
    }

    public RPAREN(i: number): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, i);
    }

    public CAST(): TerminalNode {
        return this.getToken(SDBLParser.CAST, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public mdo(): MdoContext {
        return this.getTypedRuleContext(MdoContext, 0) as MdoContext;
    }

    public BOOLEAN(): TerminalNode {
        return this.getToken(SDBLParser.BOOLEAN, 0);
    }

    public DATE(): TerminalNode {
        return this.getToken(SDBLParser.DATE, 0);
    }

    public NUMBER(): TerminalNode {
        return this.getToken(SDBLParser.NUMBER, 0);
    }

    public STRING(): TerminalNode {
        return this.getToken(SDBLParser.STRING, 0);
    }

    public DECIMAL_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.DECIMAL);
    }

    public DECIMAL(i: number): TerminalNode {
        return this.getToken(SDBLParser.DECIMAL, i);
    }

    public COMMA(): TerminalNode {
        return this.getToken(SDBLParser.COMMA, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_castFunction;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterCastFunction) {
            listener.enterCastFunction(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitCastFunction) {
            listener.exitCastFunction(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitCastFunction) {
            return visitor.visitCastFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LogicalExpressionContext extends BslParserRuleContext {
    public _predicate!: PredicateContext;

    public _condidions: PredicateContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public predicate_list(): PredicateContext[] {
        return this.getTypedRuleContexts(PredicateContext) as PredicateContext[];
    }

    public predicate(i: number): PredicateContext {
        return this.getTypedRuleContext(PredicateContext, i) as PredicateContext;
    }

    public AND_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.AND);
    }

    public AND(i: number): TerminalNode {
        return this.getToken(SDBLParser.AND, i);
    }

    public OR_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.OR);
    }

    public OR(i: number): TerminalNode {
        return this.getToken(SDBLParser.OR, i);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_logicalExpression;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterLogicalExpression) {
            listener.enterLogicalExpression(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitLogicalExpression) {
            listener.exitLogicalExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitLogicalExpression) {
            return visitor.visitLogicalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PredicateContext extends BslParserRuleContext {
    public _booleanPredicate!: ExpressionContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public likePredicate(): LikePredicateContext {
        return this.getTypedRuleContext(LikePredicateContext, 0) as LikePredicateContext;
    }

    public isNullPredicate(): IsNullPredicateContext {
        return this.getTypedRuleContext(IsNullPredicateContext, 0) as IsNullPredicateContext;
    }

    public comparePredicate(): ComparePredicateContext {
        return this.getTypedRuleContext(ComparePredicateContext, 0) as ComparePredicateContext;
    }

    public betweenPredicate(): BetweenPredicateContext {
        return this.getTypedRuleContext(BetweenPredicateContext, 0) as BetweenPredicateContext;
    }

    public inPredicate(): InPredicateContext {
        return this.getTypedRuleContext(InPredicateContext, 0) as InPredicateContext;
    }

    public refsPredicate(): RefsPredicateContext {
        return this.getTypedRuleContext(RefsPredicateContext, 0) as RefsPredicateContext;
    }

    public NOT_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.NOT);
    }

    public NOT(i: number): TerminalNode {
        return this.getToken(SDBLParser.NOT, i);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public logicalExpression(): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_predicate;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterPredicate) {
            listener.enterPredicate(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitPredicate) {
            listener.exitPredicate(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LikePredicateContext extends BslParserRuleContext {
    public _escape!: MultiStringContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public LIKE(): TerminalNode {
        return this.getToken(SDBLParser.LIKE, 0);
    }

    public NOT_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.NOT);
    }

    public NOT(i: number): TerminalNode {
        return this.getToken(SDBLParser.NOT, i);
    }

    public ESCAPE(): TerminalNode {
        return this.getToken(SDBLParser.ESCAPE, 0);
    }

    public multiString(): MultiStringContext {
        return this.getTypedRuleContext(MultiStringContext, 0) as MultiStringContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_likePredicate;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterLikePredicate) {
            listener.enterLikePredicate(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitLikePredicate) {
            listener.exitLikePredicate(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitLikePredicate) {
            return visitor.visitLikePredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IsNullPredicateContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public IS(): TerminalNode {
        return this.getToken(SDBLParser.IS, 0);
    }

    public NULL(): TerminalNode {
        return this.getToken(SDBLParser.NULL, 0);
    }

    public NOT(): TerminalNode {
        return this.getToken(SDBLParser.NOT, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_isNullPredicate;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterIsNullPredicate) {
            listener.enterIsNullPredicate(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitIsNullPredicate) {
            listener.exitIsNullPredicate(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitIsNullPredicate) {
            return visitor.visitIsNullPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ComparePredicateContext extends BslParserRuleContext {
    public _compareOperation!: Token;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public LESS(): TerminalNode {
        return this.getToken(SDBLParser.LESS, 0);
    }

    public LESS_OR_EQUAL(): TerminalNode {
        return this.getToken(SDBLParser.LESS_OR_EQUAL, 0);
    }

    public GREATER(): TerminalNode {
        return this.getToken(SDBLParser.GREATER, 0);
    }

    public GREATER_OR_EQUAL(): TerminalNode {
        return this.getToken(SDBLParser.GREATER_OR_EQUAL, 0);
    }

    public ASSIGN(): TerminalNode {
        return this.getToken(SDBLParser.ASSIGN, 0);
    }

    public NOT_EQUAL(): TerminalNode {
        return this.getToken(SDBLParser.NOT_EQUAL, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_comparePredicate;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterComparePredicate) {
            listener.enterComparePredicate(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitComparePredicate) {
            listener.exitComparePredicate(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitComparePredicate) {
            return visitor.visitComparePredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class BetweenPredicateContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public BETWEEN(): TerminalNode {
        return this.getToken(SDBLParser.BETWEEN, 0);
    }

    public AND(): TerminalNode {
        return this.getToken(SDBLParser.AND, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_betweenPredicate;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterBetweenPredicate) {
            listener.enterBetweenPredicate(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitBetweenPredicate) {
            listener.exitBetweenPredicate(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitBetweenPredicate) {
            return visitor.visitBetweenPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class InPredicateContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IN(): TerminalNode {
        return this.getToken(SDBLParser.IN, 0);
    }

    public LPAREN_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.LPAREN);
    }

    public LPAREN(i: number): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, i);
    }

    public RPAREN_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.RPAREN);
    }

    public RPAREN(i: number): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, i);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public subquery(): SubqueryContext {
        return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
    }

    public expressionList_list(): ExpressionListContext[] {
        return this.getTypedRuleContexts(ExpressionListContext) as ExpressionListContext[];
    }

    public expressionList(i: number): ExpressionListContext {
        return this.getTypedRuleContext(ExpressionListContext, i) as ExpressionListContext;
    }

    public NOT_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.NOT);
    }

    public NOT(i: number): TerminalNode {
        return this.getToken(SDBLParser.NOT, i);
    }

    public HIERARCHY_FOR_IN(): TerminalNode {
        return this.getToken(SDBLParser.HIERARCHY_FOR_IN, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_inPredicate;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterInPredicate) {
            listener.enterInPredicate(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitInPredicate) {
            listener.exitInPredicate(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitInPredicate) {
            return visitor.visitInPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RefsPredicateContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public REFS(): TerminalNode {
        return this.getToken(SDBLParser.REFS, 0);
    }

    public mdo(): MdoContext {
        return this.getTypedRuleContext(MdoContext, 0) as MdoContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_refsPredicate;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterRefsPredicate) {
            listener.enterRefsPredicate(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitRefsPredicate) {
            listener.exitRefsPredicate(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitRefsPredicate) {
            return visitor.visitRefsPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExpressionListContext extends BslParserRuleContext {
    public _logicalExpression!: LogicalExpressionContext;

    public _exp: LogicalExpressionContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public logicalExpression_list(): LogicalExpressionContext[] {
        return this.getTypedRuleContexts(LogicalExpressionContext) as LogicalExpressionContext[];
    }

    public logicalExpression(i: number): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, i) as LogicalExpressionContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_expressionList;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DataSourcesContext extends BslParserRuleContext {
    public _dataSource!: DataSourceContext;

    public _tables: DataSourceContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public dataSource_list(): DataSourceContext[] {
        return this.getTypedRuleContexts(DataSourceContext) as DataSourceContext[];
    }

    public dataSource(i: number): DataSourceContext {
        return this.getTypedRuleContext(DataSourceContext, i) as DataSourceContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_dataSources;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterDataSources) {
            listener.enterDataSources(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitDataSources) {
            listener.exitDataSources(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitDataSources) {
            return visitor.visitDataSources(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DataSourceContext extends BslParserRuleContext {
    public _joinPart!: JoinPartContext;

    public _joins: JoinPartContext[] = [];

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public dataSource(): DataSourceContext {
        return this.getTypedRuleContext(DataSourceContext, 0) as DataSourceContext;
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public joinPart_list(): JoinPartContext[] {
        return this.getTypedRuleContexts(JoinPartContext) as JoinPartContext[];
    }

    public joinPart(i: number): JoinPartContext {
        return this.getTypedRuleContext(JoinPartContext, i) as JoinPartContext;
    }

    public virtualTable(): VirtualTableContext {
        return this.getTypedRuleContext(VirtualTableContext, 0) as VirtualTableContext;
    }

    public table(): TableContext {
        return this.getTypedRuleContext(TableContext, 0) as TableContext;
    }

    public parameterTable(): ParameterTableContext {
        return this.getTypedRuleContext(ParameterTableContext, 0) as ParameterTableContext;
    }

    public externalDataSourceTable(): ExternalDataSourceTableContext {
        return this.getTypedRuleContext(ExternalDataSourceTableContext, 0) as ExternalDataSourceTableContext;
    }

    public subquery(): SubqueryContext {
        return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
    }

    public alias(): AliasContext {
        return this.getTypedRuleContext(AliasContext, 0) as AliasContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_dataSource;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterDataSource) {
            listener.enterDataSource(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitDataSource) {
            listener.exitDataSource(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitDataSource) {
            return visitor.visitDataSource(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableContext extends BslParserRuleContext {
    public _objectTableName!: IdentifierContext;

    public _tableName!: IdentifierContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public mdo(): MdoContext {
        return this.getTypedRuleContext(MdoContext, 0) as MdoContext;
    }

    public DOT(): TerminalNode {
        return this.getToken(SDBLParser.DOT, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_table;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterTable) {
            listener.enterTable(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitTable) {
            listener.exitTable(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitTable) {
            return visitor.visitTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class VirtualTableContext extends BslParserRuleContext {
    public _virtualTableName!: Token;

    public _virtualTableParameter!: VirtualTableParameterContext;

    public _virtualTableParameters: VirtualTableParameterContext[] = [];

    public _type_!: Token;

    public _tableName!: IdentifierContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public mdo(): MdoContext {
        return this.getTypedRuleContext(MdoContext, 0) as MdoContext;
    }

    public DOT(): TerminalNode {
        return this.getToken(SDBLParser.DOT, 0);
    }

    public SLICELAST_VT(): TerminalNode {
        return this.getToken(SDBLParser.SLICELAST_VT, 0);
    }

    public SLICEFIRST_VT(): TerminalNode {
        return this.getToken(SDBLParser.SLICEFIRST_VT, 0);
    }

    public BOUNDARIES_VT(): TerminalNode {
        return this.getToken(SDBLParser.BOUNDARIES_VT, 0);
    }

    public TURNOVERS_VT(): TerminalNode {
        return this.getToken(SDBLParser.TURNOVERS_VT, 0);
    }

    public BALANCE_VT(): TerminalNode {
        return this.getToken(SDBLParser.BALANCE_VT, 0);
    }

    public BALANCE_AND_TURNOVERS_VT(): TerminalNode {
        return this.getToken(SDBLParser.BALANCE_AND_TURNOVERS_VT, 0);
    }

    public EXT_DIMENSIONS_VT(): TerminalNode {
        return this.getToken(SDBLParser.EXT_DIMENSIONS_VT, 0);
    }

    public RECORDS_WITH_EXT_DIMENSIONS_VT(): TerminalNode {
        return this.getToken(SDBLParser.RECORDS_WITH_EXT_DIMENSIONS_VT, 0);
    }

    public DR_CR_TURNOVERS_VT(): TerminalNode {
        return this.getToken(SDBLParser.DR_CR_TURNOVERS_VT, 0);
    }

    public ACTUAL_ACTION_PERIOD_VT(): TerminalNode {
        return this.getToken(SDBLParser.ACTUAL_ACTION_PERIOD_VT, 0);
    }

    public SCHEDULE_DATA_VT(): TerminalNode {
        return this.getToken(SDBLParser.SCHEDULE_DATA_VT, 0);
    }

    public TASK_BY_PERFORMER_VT(): TerminalNode {
        return this.getToken(SDBLParser.TASK_BY_PERFORMER_VT, 0);
    }

    public LPAREN(): TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public virtualTableParameter_list(): VirtualTableParameterContext[] {
        return this.getTypedRuleContexts(VirtualTableParameterContext) as VirtualTableParameterContext[];
    }

    public virtualTableParameter(i: number): VirtualTableParameterContext {
        return this.getTypedRuleContext(VirtualTableParameterContext, i) as VirtualTableParameterContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(SDBLParser.COMMA, i);
    }

    public FILTER_CRITERION_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.FILTER_CRITERION_TYPE, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public parameter(): ParameterContext {
        return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_virtualTable;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterVirtualTable) {
            listener.enterVirtualTable(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitVirtualTable) {
            listener.exitVirtualTable(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitVirtualTable) {
            return visitor.visitVirtualTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class VirtualTableParameterContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public logicalExpression(): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_virtualTableParameter;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterVirtualTableParameter) {
            listener.enterVirtualTableParameter(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitVirtualTableParameter) {
            listener.exitVirtualTableParameter(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitVirtualTableParameter) {
            return visitor.visitVirtualTableParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParameterTableContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public parameter(): ParameterContext {
        return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_parameterTable;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterParameterTable) {
            listener.enterParameterTable(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitParameterTable) {
            listener.exitParameterTable(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitParameterTable) {
            return visitor.visitParameterTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExternalDataSourceTableContext extends BslParserRuleContext {
    public _tableName!: IdentifierContext;

    public _cubeName!: IdentifierContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public mdo(): MdoContext {
        return this.getTypedRuleContext(MdoContext, 0) as MdoContext;
    }

    public DOT_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.DOT);
    }

    public DOT(i: number): TerminalNode {
        return this.getToken(SDBLParser.DOT, i);
    }

    public EDS_TABLE(): TerminalNode {
        return this.getToken(SDBLParser.EDS_TABLE, 0);
    }

    public identifier_list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
    }

    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
    }

    public EDS_CUBE(): TerminalNode {
        return this.getToken(SDBLParser.EDS_CUBE, 0);
    }

    public EDS_CUBE_DIMTABLE(): TerminalNode {
        return this.getToken(SDBLParser.EDS_CUBE_DIMTABLE, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_externalDataSourceTable;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterExternalDataSourceTable) {
            listener.enterExternalDataSourceTable(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitExternalDataSourceTable) {
            listener.exitExternalDataSourceTable(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitExternalDataSourceTable) {
            return visitor.visitExternalDataSourceTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class JoinPartContext extends BslParserRuleContext {
    public _joinType!: Token;

    public _outerJoin!: Token;

    public _source!: DataSourceContext;

    public _condition!: LogicalExpressionContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public dataSource(): DataSourceContext {
        return this.getTypedRuleContext(DataSourceContext, 0) as DataSourceContext;
    }

    public ON_EN(): TerminalNode {
        return this.getToken(SDBLParser.ON_EN, 0);
    }

    public PO_RU(): TerminalNode {
        return this.getToken(SDBLParser.PO_RU, 0);
    }

    public logicalExpression(): LogicalExpressionContext {
        return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
    }

    public JOIN(): TerminalNode {
        return this.getToken(SDBLParser.JOIN, 0);
    }

    public RIGHT(): TerminalNode {
        return this.getToken(SDBLParser.RIGHT, 0);
    }

    public LEFT(): TerminalNode {
        return this.getToken(SDBLParser.LEFT, 0);
    }

    public FULL(): TerminalNode {
        return this.getToken(SDBLParser.FULL, 0);
    }

    public INNER(): TerminalNode {
        return this.getToken(SDBLParser.INNER, 0);
    }

    public OUTER(): TerminalNode {
        return this.getToken(SDBLParser.OUTER, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_joinPart;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterJoinPart) {
            listener.enterJoinPart(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitJoinPart) {
            listener.exitJoinPart(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitJoinPart) {
            return visitor.visitJoinPart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AliasContext extends BslParserRuleContext {
    public _name!: IdentifierContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public AS(): TerminalNode {
        return this.getToken(SDBLParser.AS, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_alias;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterAlias) {
            listener.enterAlias(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitAlias) {
            listener.exitAlias(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DatePartContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public parameter(): ParameterContext {
        return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
    }

    public DECIMAL(): TerminalNode {
        return this.getToken(SDBLParser.DECIMAL, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_datePart;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterDatePart) {
            listener.enterDatePart(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitDatePart) {
            listener.exitDatePart(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitDatePart) {
            return visitor.visitDatePart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class MultiStringContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public STR_list(): TerminalNode[] {
        return this.getTokens(SDBLParser.STR);
    }

    public STR(i: number): TerminalNode {
        return this.getToken(SDBLParser.STR, i);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_multiString;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterMultiString) {
            listener.enterMultiString(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitMultiString) {
            listener.exitMultiString(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitMultiString) {
            return visitor.visitMultiString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SignContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public MINUS(): TerminalNode {
        return this.getToken(SDBLParser.MINUS, 0);
    }

    public PLUS(): TerminalNode {
        return this.getToken(SDBLParser.PLUS, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_sign;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterSign) {
            listener.enterSign(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitSign) {
            listener.exitSign(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitSign) {
            return visitor.visitSign(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IdentifierContext extends BslParserRuleContext {
    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(SDBLParser.IDENTIFIER, 0);
    }

    public ACTUAL_ACTION_PERIOD_VT(): TerminalNode {
        return this.getToken(SDBLParser.ACTUAL_ACTION_PERIOD_VT, 0);
    }

    public BALANCE_VT(): TerminalNode {
        return this.getToken(SDBLParser.BALANCE_VT, 0);
    }

    public BALANCE_AND_TURNOVERS_VT(): TerminalNode {
        return this.getToken(SDBLParser.BALANCE_AND_TURNOVERS_VT, 0);
    }

    public BOUNDARIES_VT(): TerminalNode {
        return this.getToken(SDBLParser.BOUNDARIES_VT, 0);
    }

    public DR_CR_TURNOVERS_VT(): TerminalNode {
        return this.getToken(SDBLParser.DR_CR_TURNOVERS_VT, 0);
    }

    public EXT_DIMENSIONS_VT(): TerminalNode {
        return this.getToken(SDBLParser.EXT_DIMENSIONS_VT, 0);
    }

    public RECORDS_WITH_EXT_DIMENSIONS_VT(): TerminalNode {
        return this.getToken(SDBLParser.RECORDS_WITH_EXT_DIMENSIONS_VT, 0);
    }

    public SCHEDULE_DATA_VT(): TerminalNode {
        return this.getToken(SDBLParser.SCHEDULE_DATA_VT, 0);
    }

    public SLICEFIRST_VT(): TerminalNode {
        return this.getToken(SDBLParser.SLICEFIRST_VT, 0);
    }

    public SLICELAST_VT(): TerminalNode {
        return this.getToken(SDBLParser.SLICELAST_VT, 0);
    }

    public TASK_BY_PERFORMER_VT(): TerminalNode {
        return this.getToken(SDBLParser.TASK_BY_PERFORMER_VT, 0);
    }

    public TURNOVERS_VT(): TerminalNode {
        return this.getToken(SDBLParser.TURNOVERS_VT, 0);
    }

    public ROUTEPOINT_FIELD(): TerminalNode {
        return this.getToken(SDBLParser.ROUTEPOINT_FIELD, 0);
    }

    public BUSINESS_PROCESS_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.BUSINESS_PROCESS_TYPE, 0);
    }

    public CATALOG_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CATALOG_TYPE, 0);
    }

    public DOCUMENT_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.DOCUMENT_TYPE, 0);
    }

    public INFORMATION_REGISTER_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.INFORMATION_REGISTER_TYPE, 0);
    }

    public CONSTANT_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CONSTANT_TYPE, 0);
    }

    public FILTER_CRITERION_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.FILTER_CRITERION_TYPE, 0);
    }

    public EXCHANGE_PLAN_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.EXCHANGE_PLAN_TYPE, 0);
    }

    public SEQUENCE_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.SEQUENCE_TYPE, 0);
    }

    public DOCUMENT_JOURNAL_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.DOCUMENT_JOURNAL_TYPE, 0);
    }

    public ENUM_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.ENUM_TYPE, 0);
    }

    public CHART_OF_CHARACTERISTIC_TYPES_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE, 0);
    }

    public CHART_OF_ACCOUNTS_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CHART_OF_ACCOUNTS_TYPE, 0);
    }

    public CHART_OF_CALCULATION_TYPES_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE, 0);
    }

    public ACCUMULATION_REGISTER_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.ACCUMULATION_REGISTER_TYPE, 0);
    }

    public ACCOUNTING_REGISTER_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.ACCOUNTING_REGISTER_TYPE, 0);
    }

    public CALCULATION_REGISTER_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CALCULATION_REGISTER_TYPE, 0);
    }

    public TASK_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.TASK_TYPE, 0);
    }

    public EXTERNAL_DATA_SOURCE_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.EXTERNAL_DATA_SOURCE_TYPE, 0);
    }

    public DROP(): TerminalNode {
        return this.getToken(SDBLParser.DROP, 0);
    }

    public END(): TerminalNode {
        return this.getToken(SDBLParser.END, 0);
    }

    public ISNULL(): TerminalNode {
        return this.getToken(SDBLParser.ISNULL, 0);
    }

    public JOIN(): TerminalNode {
        return this.getToken(SDBLParser.JOIN, 0);
    }

    public SELECT(): TerminalNode {
        return this.getToken(SDBLParser.SELECT, 0);
    }

    public TOTALS(): TerminalNode {
        return this.getToken(SDBLParser.TOTALS, 0);
    }

    public UNION(): TerminalNode {
        return this.getToken(SDBLParser.UNION, 0);
    }

    public UPDATE(): TerminalNode {
        return this.getToken(SDBLParser.UPDATE, 0);
    }

    public AVG(): TerminalNode {
        return this.getToken(SDBLParser.AVG, 0);
    }

    public BEGINOFPERIOD(): TerminalNode {
        return this.getToken(SDBLParser.BEGINOFPERIOD, 0);
    }

    public BOOLEAN(): TerminalNode {
        return this.getToken(SDBLParser.BOOLEAN, 0);
    }

    public COUNT(): TerminalNode {
        return this.getToken(SDBLParser.COUNT, 0);
    }

    public DATE(): TerminalNode {
        return this.getToken(SDBLParser.DATE, 0);
    }

    public DATEADD(): TerminalNode {
        return this.getToken(SDBLParser.DATEADD, 0);
    }

    public DATEDIFF(): TerminalNode {
        return this.getToken(SDBLParser.DATEDIFF, 0);
    }

    public DATETIME(): TerminalNode {
        return this.getToken(SDBLParser.DATETIME, 0);
    }

    public DAY(): TerminalNode {
        return this.getToken(SDBLParser.DAY, 0);
    }

    public DAYOFYEAR(): TerminalNode {
        return this.getToken(SDBLParser.DAYOFYEAR, 0);
    }

    public EMPTYTABLE(): TerminalNode {
        return this.getToken(SDBLParser.EMPTYTABLE, 0);
    }

    public EMPTYREF(): TerminalNode {
        return this.getToken(SDBLParser.EMPTYREF, 0);
    }

    public ENDOFPERIOD(): TerminalNode {
        return this.getToken(SDBLParser.ENDOFPERIOD, 0);
    }

    public HALFYEAR(): TerminalNode {
        return this.getToken(SDBLParser.HALFYEAR, 0);
    }

    public HOUR(): TerminalNode {
        return this.getToken(SDBLParser.HOUR, 0);
    }

    public MAX(): TerminalNode {
        return this.getToken(SDBLParser.MAX, 0);
    }

    public MIN(): TerminalNode {
        return this.getToken(SDBLParser.MIN, 0);
    }

    public MINUTE(): TerminalNode {
        return this.getToken(SDBLParser.MINUTE, 0);
    }

    public MONTH(): TerminalNode {
        return this.getToken(SDBLParser.MONTH, 0);
    }

    public NUMBER(): TerminalNode {
        return this.getToken(SDBLParser.NUMBER, 0);
    }

    public QUARTER(): TerminalNode {
        return this.getToken(SDBLParser.QUARTER, 0);
    }

    public ONLY(): TerminalNode {
        return this.getToken(SDBLParser.ONLY, 0);
    }

    public PERIODS(): TerminalNode {
        return this.getToken(SDBLParser.PERIODS, 0);
    }

    public REFS(): TerminalNode {
        return this.getToken(SDBLParser.REFS, 0);
    }

    public PRESENTATION(): TerminalNode {
        return this.getToken(SDBLParser.PRESENTATION, 0);
    }

    public RECORDAUTONUMBER(): TerminalNode {
        return this.getToken(SDBLParser.RECORDAUTONUMBER, 0);
    }

    public REFPRESENTATION(): TerminalNode {
        return this.getToken(SDBLParser.REFPRESENTATION, 0);
    }

    public SECOND(): TerminalNode {
        return this.getToken(SDBLParser.SECOND, 0);
    }

    public STRING(): TerminalNode {
        return this.getToken(SDBLParser.STRING, 0);
    }

    public SUBSTRING(): TerminalNode {
        return this.getToken(SDBLParser.SUBSTRING, 0);
    }

    public SUM(): TerminalNode {
        return this.getToken(SDBLParser.SUM, 0);
    }

    public TENDAYS(): TerminalNode {
        return this.getToken(SDBLParser.TENDAYS, 0);
    }

    public TYPE(): TerminalNode {
        return this.getToken(SDBLParser.TYPE, 0);
    }

    public VALUE(): TerminalNode {
        return this.getToken(SDBLParser.VALUE, 0);
    }

    public VALUETYPE(): TerminalNode {
        return this.getToken(SDBLParser.VALUETYPE, 0);
    }

    public WEEK(): TerminalNode {
        return this.getToken(SDBLParser.WEEK, 0);
    }

    public WEEKDAY(): TerminalNode {
        return this.getToken(SDBLParser.WEEKDAY, 0);
    }

    public YEAR(): TerminalNode {
        return this.getToken(SDBLParser.YEAR, 0);
    }

    public ORDER(): TerminalNode {
        return this.getToken(SDBLParser.ORDER, 0);
    }

    public GROUP(): TerminalNode {
        return this.getToken(SDBLParser.GROUP, 0);
    }

    public INDEX(): TerminalNode {
        return this.getToken(SDBLParser.INDEX, 0);
    }

    public SET(): TerminalNode {
        return this.getToken(SDBLParser.SET, 0);
    }

    public RIGHT(): TerminalNode {
        return this.getToken(SDBLParser.RIGHT, 0);
    }

    public LEFT(): TerminalNode {
        return this.getToken(SDBLParser.LEFT, 0);
    }

    public INNER(): TerminalNode {
        return this.getToken(SDBLParser.INNER, 0);
    }

    public FULL(): TerminalNode {
        return this.getToken(SDBLParser.FULL, 0);
    }

    public OUTER(): TerminalNode {
        return this.getToken(SDBLParser.OUTER, 0);
    }

    public FOR(): TerminalNode {
        return this.getToken(SDBLParser.FOR, 0);
    }

    public ALL(): TerminalNode {
        return this.getToken(SDBLParser.ALL, 0);
    }

    public ACOS(): TerminalNode {
        return this.getToken(SDBLParser.ACOS, 0);
    }

    public ASIN(): TerminalNode {
        return this.getToken(SDBLParser.ASIN, 0);
    }

    public ATAN(): TerminalNode {
        return this.getToken(SDBLParser.ATAN, 0);
    }

    public COS(): TerminalNode {
        return this.getToken(SDBLParser.COS, 0);
    }

    public SIN(): TerminalNode {
        return this.getToken(SDBLParser.SIN, 0);
    }

    public TAN(): TerminalNode {
        return this.getToken(SDBLParser.TAN, 0);
    }

    public LOG(): TerminalNode {
        return this.getToken(SDBLParser.LOG, 0);
    }

    public LOG10(): TerminalNode {
        return this.getToken(SDBLParser.LOG10, 0);
    }

    public EXP(): TerminalNode {
        return this.getToken(SDBLParser.EXP, 0);
    }

    public POW(): TerminalNode {
        return this.getToken(SDBLParser.POW, 0);
    }

    public SQRT(): TerminalNode {
        return this.getToken(SDBLParser.SQRT, 0);
    }

    public INT(): TerminalNode {
        return this.getToken(SDBLParser.INT, 0);
    }

    public LOWER(): TerminalNode {
        return this.getToken(SDBLParser.LOWER, 0);
    }

    public STRINGLENGTH(): TerminalNode {
        return this.getToken(SDBLParser.STRINGLENGTH, 0);
    }

    public TRIMALL(): TerminalNode {
        return this.getToken(SDBLParser.TRIMALL, 0);
    }

    public TRIML(): TerminalNode {
        return this.getToken(SDBLParser.TRIML, 0);
    }

    public TRIMR(): TerminalNode {
        return this.getToken(SDBLParser.TRIMR, 0);
    }

    public UPPER(): TerminalNode {
        return this.getToken(SDBLParser.UPPER, 0);
    }

    public ROUND(): TerminalNode {
        return this.getToken(SDBLParser.ROUND, 0);
    }

    public STOREDDATASIZE(): TerminalNode {
        return this.getToken(SDBLParser.STOREDDATASIZE, 0);
    }

    public UUID(): TerminalNode {
        return this.getToken(SDBLParser.UUID, 0);
    }

    public STRFIND(): TerminalNode {
        return this.getToken(SDBLParser.STRFIND, 0);
    }

    public STRREPLACE(): TerminalNode {
        return this.getToken(SDBLParser.STRREPLACE, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_identifier;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParameterContext extends BslParserRuleContext {
    public _name!: Token;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public AMPERSAND(): TerminalNode {
        return this.getToken(SDBLParser.AMPERSAND, 0);
    }

    public PARAMETER_IDENTIFIER(): TerminalNode {
        return this.getToken(SDBLParser.PARAMETER_IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_parameter;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class MdoContext extends BslParserRuleContext {
    public _type_!: Token;

    public _tableName!: IdentifierContext;

    constructor(parser?: SDBLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public DOT(): TerminalNode {
        return this.getToken(SDBLParser.DOT, 0);
    }

    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
    }

    public BUSINESS_PROCESS_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.BUSINESS_PROCESS_TYPE, 0);
    }

    public CATALOG_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CATALOG_TYPE, 0);
    }

    public DOCUMENT_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.DOCUMENT_TYPE, 0);
    }

    public INFORMATION_REGISTER_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.INFORMATION_REGISTER_TYPE, 0);
    }

    public CONSTANT_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CONSTANT_TYPE, 0);
    }

    public FILTER_CRITERION_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.FILTER_CRITERION_TYPE, 0);
    }

    public EXCHANGE_PLAN_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.EXCHANGE_PLAN_TYPE, 0);
    }

    public SEQUENCE_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.SEQUENCE_TYPE, 0);
    }

    public DOCUMENT_JOURNAL_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.DOCUMENT_JOURNAL_TYPE, 0);
    }

    public ENUM_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.ENUM_TYPE, 0);
    }

    public CHART_OF_CHARACTERISTIC_TYPES_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE, 0);
    }

    public CHART_OF_ACCOUNTS_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CHART_OF_ACCOUNTS_TYPE, 0);
    }

    public CHART_OF_CALCULATION_TYPES_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE, 0);
    }

    public ACCUMULATION_REGISTER_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.ACCUMULATION_REGISTER_TYPE, 0);
    }

    public ACCOUNTING_REGISTER_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.ACCOUNTING_REGISTER_TYPE, 0);
    }

    public CALCULATION_REGISTER_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.CALCULATION_REGISTER_TYPE, 0);
    }

    public TASK_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.TASK_TYPE, 0);
    }

    public EXTERNAL_DATA_SOURCE_TYPE(): TerminalNode {
        return this.getToken(SDBLParser.EXTERNAL_DATA_SOURCE_TYPE, 0);
    }

    public get ruleIndex(): number {
        return SDBLParser.RULE_mdo;
    }

    public enterRule(listener: SDBLParserListener): void {
        if (listener.enterMdo) {
            listener.enterMdo(this);
        }
    }

    public exitRule(listener: SDBLParserListener): void {
        if (listener.exitMdo) {
            listener.exitMdo(this);
        }
    }

    // @Override
    public accept<Result>(visitor: SDBLParserVisitor<Result>): Result {
        if (visitor.visitMdo) {
            return visitor.visitMdo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
