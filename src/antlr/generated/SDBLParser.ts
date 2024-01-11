// Generated from ./src/antlr/SDBLParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import type { Token } from "antlr4ng";

import type { SDBLParserListener } from "./SDBLParserListener";
import type { SDBLParserVisitor } from "./SDBLParserVisitor";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type int = number;

import { BslParserRuleContext } from "../../core/context";

export class SDBLParser extends antlr.Parser {
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

    public static readonly literalNames = [
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

    public static readonly symbolicNames = [
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

    public static readonly ruleNames = [
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

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(
            this,
            SDBLParser._ATN,
            SDBLParser.decisionsToDFA,
            new antlr.PredictionContextCache()
        );
    }

    public queryPackage(): QueryPackageContext {
        let localContext = new QueryPackageContext(this.context, this.state);
        this.enterRule(localContext, 0, SDBLParser.RULE_queryPackage);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 122;
                this.queries();
                this.state = 127;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
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
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
                }
                this.state = 131;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public queries(): QueriesContext {
        let localContext = new QueriesContext(this.context, this.state);
        this.enterRule(localContext, 2, SDBLParser.RULE_queries);
        try {
            this.state = 137;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SDBLParser.SELECT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 135;
                        this.selectQuery();
                    }
                    break;
                case SDBLParser.DROP:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 136;
                        this.dropTableQuery();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public dropTableQuery(): DropTableQueryContext {
        let localContext = new DropTableQueryContext(this.context, this.state);
        this.enterRule(localContext, 4, SDBLParser.RULE_dropTableQuery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 139;
                this.match(SDBLParser.DROP);
                this.state = 140;
                localContext._temporaryTableName = this.identifier();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public selectQuery(): SelectQueryContext {
        let localContext = new SelectQueryContext(this.context, this.state);
        this.enterRule(localContext, 6, SDBLParser.RULE_selectQuery);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 142;
                this.subquery();
                this.state = 169;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                    case 1:
                        {
                            {
                                this.state = 143;
                                localContext._autoorder = this.match(SDBLParser.AUTOORDER);
                                this.state = 144;
                                localContext._orders = this.orderBy();
                                this.state = 145;
                                localContext._totals = this.totalBy();
                            }
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 147;
                                localContext._orders = this.orderBy();
                                this.state = 148;
                                localContext._autoorder = this.match(SDBLParser.AUTOORDER);
                                this.state = 149;
                                localContext._totals = this.totalBy();
                            }
                        }
                        break;
                    case 3:
                        {
                            {
                                this.state = 151;
                                localContext._orders = this.orderBy();
                                this.state = 152;
                                localContext._totals = this.totalBy();
                                this.state = 153;
                                localContext._autoorder = this.match(SDBLParser.AUTOORDER);
                            }
                        }
                        break;
                    case 4:
                        {
                            {
                                this.state = 155;
                                localContext._autoorder = this.match(SDBLParser.AUTOORDER);
                                this.state = 158;
                                this.errorHandler.sync(this);
                                switch (this.tokenStream.LA(1)) {
                                    case SDBLParser.ORDER:
                                        {
                                            this.state = 156;
                                            localContext._orders = this.orderBy();
                                        }
                                        break;
                                    case SDBLParser.TOTALS:
                                        {
                                            this.state = 157;
                                            localContext._totals = this.totalBy();
                                        }
                                        break;
                                    case SDBLParser.EOF:
                                    case SDBLParser.SEMICOLON:
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
                                localContext._orders = this.orderBy();
                                this.state = 163;
                                this.errorHandler.sync(this);
                                switch (this.tokenStream.LA(1)) {
                                    case SDBLParser.AUTOORDER:
                                        {
                                            this.state = 161;
                                            localContext._autoorder = this.match(SDBLParser.AUTOORDER);
                                        }
                                        break;
                                    case SDBLParser.TOTALS:
                                        {
                                            this.state = 162;
                                            localContext._totals = this.totalBy();
                                        }
                                        break;
                                    case SDBLParser.EOF:
                                    case SDBLParser.SEMICOLON:
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
                                localContext._totals = this.totalBy();
                                this.state = 167;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 24) {
                                    {
                                        this.state = 166;
                                        localContext._autoorder = this.match(SDBLParser.AUTOORDER);
                                    }
                                }
                            }
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public subquery(): SubqueryContext {
        let localContext = new SubqueryContext(this.context, this.state);
        this.enterRule(localContext, 8, SDBLParser.RULE_subquery);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 171;
                localContext._main = this.query();
                this.state = 173;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                    case 1:
                        {
                            this.state = 172;
                            this.orderBy();
                        }
                        break;
                }
                this.state = 180;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                        this.state = 176;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 175;
                                    localContext._union = this.union();
                                    localContext._unions.push(localContext._union);
                                }
                            }
                            this.state = 178;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 153);
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public union(): UnionContext {
        let localContext = new UnionContext(this.context, this.state);
        this.enterRule(localContext, 10, SDBLParser.RULE_union);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 182;
                this.match(SDBLParser.UNION);
                this.state = 184;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 152) {
                    {
                        this.state = 183;
                        this.match(SDBLParser.ALL);
                    }
                }

                this.state = 186;
                this.query();
                this.state = 188;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context)) {
                    case 1:
                        {
                            this.state = 187;
                            this.orderBy();
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public query(): QueryContext {
        let localContext = new QueryContext(this.context, this.state);
        this.enterRule(localContext, 12, SDBLParser.RULE_query);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 190;
                this.match(SDBLParser.SELECT);
                this.state = 192;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20 || _la === 30 || _la === 52) {
                    {
                        this.state = 191;
                        this.limitations();
                    }
                }

                this.state = 194;
                localContext._columns = this.selectedFields();
                this.state = 197;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 39) {
                    {
                        this.state = 195;
                        this.match(SDBLParser.INTO);
                        this.state = 196;
                        localContext._temporaryTableName = this.identifier();
                    }
                }

                this.state = 201;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 36) {
                    {
                        this.state = 199;
                        this.match(SDBLParser.FROM);
                        this.state = 200;
                        localContext._from_ = this.dataSources();
                    }
                }

                this.state = 205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 57) {
                    {
                        this.state = 203;
                        this.match(SDBLParser.WHERE);
                        this.state = 204;
                        localContext._where = this.logicalExpression();
                    }
                }

                this.state = 210;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 139) {
                    {
                        this.state = 207;
                        this.match(SDBLParser.GROUP);
                        this.state = 208;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 26 || _la === 49)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 209;
                        localContext._groupBy = this.groupByItem();
                    }
                }

                this.state = 214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 37) {
                    {
                        this.state = 212;
                        this.match(SDBLParser.HAVING);
                        this.state = 213;
                        localContext._having = this.logicalExpression();
                    }
                }

                this.state = 221;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 150) {
                    {
                        this.state = 216;
                        this.match(SDBLParser.FOR);
                        this.state = 217;
                        this.match(SDBLParser.UPDATE);
                        this.state = 219;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (((_la - 119) & ~0x1f) === 0 && ((1 << (_la - 119)) & 262143) !== 0) {
                            {
                                this.state = 218;
                                localContext._forUpdate = this.mdo();
                            }
                        }
                    }
                }

                this.state = 233;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 138) {
                    {
                        this.state = 223;
                        this.match(SDBLParser.INDEX);
                        this.state = 224;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 26 || _la === 49)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 225;
                        localContext._indexingItem = this.indexingItem();
                        localContext._indexes.push(localContext._indexingItem);
                        this.state = 230;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 7) {
                            {
                                {
                                    this.state = 226;
                                    this.match(SDBLParser.COMMA);
                                    this.state = 227;
                                    localContext._indexingItem = this.indexingItem();
                                    localContext._indexes.push(localContext._indexingItem);
                                }
                            }
                            this.state = 232;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public limitations(): LimitationsContext {
        let localContext = new LimitationsContext(this.context, this.state);
        this.enterRule(localContext, 14, SDBLParser.RULE_limitations);
        try {
            this.state = 276;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 238;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case SDBLParser.TOP:
                                    {
                                        this.state = 235;
                                        this.top();
                                    }
                                    break;
                                case SDBLParser.DISTINCT:
                                    {
                                        this.state = 236;
                                        this.match(SDBLParser.DISTINCT);
                                    }
                                    break;
                                case SDBLParser.ALLOWED:
                                    {
                                        this.state = 237;
                                        this.match(SDBLParser.ALLOWED);
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
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
                    this.enterOuterAlt(localContext, 3);
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
                    this.enterOuterAlt(localContext, 4);
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
                    this.enterOuterAlt(localContext, 5);
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
                    this.enterOuterAlt(localContext, 6);
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
                    this.enterOuterAlt(localContext, 7);
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
                    this.enterOuterAlt(localContext, 8);
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
                    this.enterOuterAlt(localContext, 9);
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
                    this.enterOuterAlt(localContext, 10);
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
                    this.enterOuterAlt(localContext, 11);
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
                    this.enterOuterAlt(localContext, 12);
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
                    this.enterOuterAlt(localContext, 13);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public top(): TopContext {
        let localContext = new TopContext(this.context, this.state);
        this.enterRule(localContext, 16, SDBLParser.RULE_top);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 278;
                this.match(SDBLParser.TOP);
                this.state = 279;
                localContext._count = this.match(SDBLParser.DECIMAL);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public selectedFields(): SelectedFieldsContext {
        let localContext = new SelectedFieldsContext(this.context, this.state);
        this.enterRule(localContext, 18, SDBLParser.RULE_selectedFields);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 281;
                localContext._selectedField = this.selectedField();
                localContext._fields.push(localContext._selectedField);
                this.state = 286;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 282;
                            this.match(SDBLParser.COMMA);
                            this.state = 283;
                            localContext._selectedField = this.selectedField();
                            localContext._fields.push(localContext._selectedField);
                        }
                    }
                    this.state = 288;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public selectedField(): SelectedFieldContext {
        let localContext = new SelectedFieldContext(this.context, this.state);
        this.enterRule(localContext, 20, SDBLParser.RULE_selectedField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 294;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context)) {
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
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context)) {
                    case 1:
                        {
                            this.state = 296;
                            this.alias();
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public asteriskField(): AsteriskFieldContext {
        let localContext = new AsteriskFieldContext(this.context, this.state);
        this.enterRule(localContext, 22, SDBLParser.RULE_asteriskField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 304;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
                            localContext._tableName = this.identifier();
                            this.state = 300;
                            this.match(SDBLParser.DOT);
                        }
                    }
                    this.state = 306;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 307;
                this.match(SDBLParser.MUL);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public expressionField(): ExpressionFieldContext {
        let localContext = new ExpressionFieldContext(this.context, this.state);
        this.enterRule(localContext, 24, SDBLParser.RULE_expressionField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 309;
                this.logicalExpression();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public columnField(): ColumnFieldContext {
        let localContext = new ColumnFieldContext(this.context, this.state);
        this.enterRule(localContext, 26, SDBLParser.RULE_columnField);
        try {
            this.state = 313;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SDBLParser.NULL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 311;
                        this.match(SDBLParser.NULL);
                    }
                    break;
                case SDBLParser.RECORDAUTONUMBER:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 312;
                        this.recordAutoNumberFunction();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public emptyTableField(): EmptyTableFieldContext {
        let localContext = new EmptyTableFieldContext(this.context, this.state);
        this.enterRule(localContext, 28, SDBLParser.RULE_emptyTableField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 315;
                localContext._emptyTable = this.match(SDBLParser.EMPTYTABLE);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public emptyTableColumns(): EmptyTableColumnsContext {
        let localContext = new EmptyTableColumnsContext(this.context, this.state);
        this.enterRule(localContext, 30, SDBLParser.RULE_emptyTableColumns);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 321;
                localContext._alias = this.alias();
                localContext._columns.push(localContext._alias);
                this.state = 326;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 322;
                            this.match(SDBLParser.COMMA);
                            this.state = 323;
                            localContext._alias = this.alias();
                            localContext._columns.push(localContext._alias);
                        }
                    }
                    this.state = 328;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public inlineTableField(): InlineTableFieldContext {
        let localContext = new InlineTableFieldContext(this.context, this.state);
        this.enterRule(localContext, 32, SDBLParser.RULE_inlineTableField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 329;
                localContext._inlineTable = this.column();
                this.state = 330;
                this.match(SDBLParser.DOT);
                this.state = 331;
                this.match(SDBLParser.LPAREN);
                this.state = 332;
                localContext._inlineTableFields = this.selectedFields();
                this.state = 333;
                this.match(SDBLParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public recordAutoNumberFunction(): RecordAutoNumberFunctionContext {
        let localContext = new RecordAutoNumberFunctionContext(this.context, this.state);
        this.enterRule(localContext, 34, SDBLParser.RULE_recordAutoNumberFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 335;
                localContext._doCall = this.match(SDBLParser.RECORDAUTONUMBER);
                this.state = 336;
                this.match(SDBLParser.LPAREN);
                this.state = 337;
                this.match(SDBLParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public groupByItem(): GroupByItemContext {
        let localContext = new GroupByItemContext(this.context, this.state);
        this.enterRule(localContext, 36, SDBLParser.RULE_groupByItem);
        let _la: number;
        try {
            this.state = 365;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SDBLParser.GROUPING:
                    this.enterOuterAlt(localContext, 1);
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
                            localContext._expressionList = this.expressionList();
                            localContext._groupingSet.push(localContext._expressionList);
                            this.state = 344;
                            this.match(SDBLParser.RPAREN);
                            this.state = 352;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 7) {
                                {
                                    {
                                        this.state = 345;
                                        this.match(SDBLParser.COMMA);
                                        this.state = 346;
                                        this.match(SDBLParser.LPAREN);
                                        this.state = 347;
                                        localContext._expressionList = this.expressionList();
                                        localContext._groupingSet.push(localContext._expressionList);
                                        this.state = 348;
                                        this.match(SDBLParser.RPAREN);
                                    }
                                }
                                this.state = 354;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                        }
                        this.state = 355;
                        this.match(SDBLParser.RPAREN);
                    }
                    break;
                case SDBLParser.LPAREN:
                case SDBLParser.PLUS:
                case SDBLParser.MINUS:
                case SDBLParser.AMPERSAND:
                case SDBLParser.CASE:
                case SDBLParser.CAST:
                case SDBLParser.DROP:
                case SDBLParser.END:
                case SDBLParser.FALSE:
                case SDBLParser.ISNULL:
                case SDBLParser.NULL:
                case SDBLParser.SELECT:
                case SDBLParser.TOTALS:
                case SDBLParser.TRUE:
                case SDBLParser.UNDEFINED:
                case SDBLParser.WHEN:
                case SDBLParser.ACOS:
                case SDBLParser.ASIN:
                case SDBLParser.ATAN:
                case SDBLParser.AVG:
                case SDBLParser.BEGINOFPERIOD:
                case SDBLParser.BOOLEAN:
                case SDBLParser.COS:
                case SDBLParser.COUNT:
                case SDBLParser.DATE:
                case SDBLParser.DATEADD:
                case SDBLParser.DATEDIFF:
                case SDBLParser.DATETIME:
                case SDBLParser.DAY:
                case SDBLParser.DAYOFYEAR:
                case SDBLParser.EMPTYTABLE:
                case SDBLParser.EMPTYREF:
                case SDBLParser.ENDOFPERIOD:
                case SDBLParser.EXP:
                case SDBLParser.HALFYEAR:
                case SDBLParser.HOUR:
                case SDBLParser.INT:
                case SDBLParser.LOG:
                case SDBLParser.LOG10:
                case SDBLParser.LOWER:
                case SDBLParser.MAX:
                case SDBLParser.MIN:
                case SDBLParser.MINUTE:
                case SDBLParser.MONTH:
                case SDBLParser.NUMBER:
                case SDBLParser.QUARTER:
                case SDBLParser.ONLY:
                case SDBLParser.PERIODS:
                case SDBLParser.REFS:
                case SDBLParser.PRESENTATION:
                case SDBLParser.RECORDAUTONUMBER:
                case SDBLParser.REFPRESENTATION:
                case SDBLParser.POW:
                case SDBLParser.ROUND:
                case SDBLParser.SECOND:
                case SDBLParser.SIN:
                case SDBLParser.SQRT:
                case SDBLParser.STOREDDATASIZE:
                case SDBLParser.STRING:
                case SDBLParser.STRINGLENGTH:
                case SDBLParser.STRFIND:
                case SDBLParser.STRREPLACE:
                case SDBLParser.SUBSTRING:
                case SDBLParser.SUM:
                case SDBLParser.TAN:
                case SDBLParser.TENDAYS:
                case SDBLParser.TRIMALL:
                case SDBLParser.TRIML:
                case SDBLParser.TRIMR:
                case SDBLParser.TYPE:
                case SDBLParser.UPPER:
                case SDBLParser.VALUE:
                case SDBLParser.VALUETYPE:
                case SDBLParser.WEEK:
                case SDBLParser.WEEKDAY:
                case SDBLParser.YEAR:
                case SDBLParser.UUID:
                case SDBLParser.ACCOUNTING_REGISTER_TYPE:
                case SDBLParser.ACCUMULATION_REGISTER_TYPE:
                case SDBLParser.BUSINESS_PROCESS_TYPE:
                case SDBLParser.CALCULATION_REGISTER_TYPE:
                case SDBLParser.CATALOG_TYPE:
                case SDBLParser.CHART_OF_ACCOUNTS_TYPE:
                case SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE:
                case SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE:
                case SDBLParser.CONSTANT_TYPE:
                case SDBLParser.DOCUMENT_TYPE:
                case SDBLParser.DOCUMENT_JOURNAL_TYPE:
                case SDBLParser.ENUM_TYPE:
                case SDBLParser.EXCHANGE_PLAN_TYPE:
                case SDBLParser.EXTERNAL_DATA_SOURCE_TYPE:
                case SDBLParser.FILTER_CRITERION_TYPE:
                case SDBLParser.INFORMATION_REGISTER_TYPE:
                case SDBLParser.SEQUENCE_TYPE:
                case SDBLParser.TASK_TYPE:
                case SDBLParser.ROUTEPOINT_FIELD:
                case SDBLParser.INDEX:
                case SDBLParser.GROUP:
                case SDBLParser.ORDER:
                case SDBLParser.GROUPEDBY:
                case SDBLParser.SET:
                case SDBLParser.RIGHT:
                case SDBLParser.LEFT:
                case SDBLParser.INNER:
                case SDBLParser.FULL:
                case SDBLParser.JOIN:
                case SDBLParser.OUTER:
                case SDBLParser.FOR:
                case SDBLParser.UPDATE:
                case SDBLParser.ALL:
                case SDBLParser.UNION:
                case SDBLParser.DECIMAL:
                case SDBLParser.FLOAT:
                case SDBLParser.STR:
                case SDBLParser.IDENTIFIER:
                case SDBLParser.ACTUAL_ACTION_PERIOD_VT:
                case SDBLParser.BALANCE_VT:
                case SDBLParser.BALANCE_AND_TURNOVERS_VT:
                case SDBLParser.BOUNDARIES_VT:
                case SDBLParser.DR_CR_TURNOVERS_VT:
                case SDBLParser.EXT_DIMENSIONS_VT:
                case SDBLParser.RECORDS_WITH_EXT_DIMENSIONS_VT:
                case SDBLParser.SCHEDULE_DATA_VT:
                case SDBLParser.SLICEFIRST_VT:
                case SDBLParser.SLICELAST_VT:
                case SDBLParser.TASK_BY_PERFORMER_VT:
                case SDBLParser.TURNOVERS_VT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 357;
                            localContext._expression = this.expression(0);
                            localContext._groupBy.push(localContext._expression);
                            this.state = 362;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 7) {
                                {
                                    {
                                        this.state = 358;
                                        this.match(SDBLParser.COMMA);
                                        this.state = 359;
                                        localContext._expression = this.expression(0);
                                        localContext._groupBy.push(localContext._expression);
                                    }
                                }
                                this.state = 364;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                        }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public indexingItem(): IndexingItemContext {
        let localContext = new IndexingItemContext(this.context, this.state);
        this.enterRule(localContext, 38, SDBLParser.RULE_indexingItem);
        try {
            this.state = 369;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SDBLParser.AMPERSAND:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 367;
                        this.parameter();
                    }
                    break;
                case SDBLParser.DROP:
                case SDBLParser.END:
                case SDBLParser.ISNULL:
                case SDBLParser.SELECT:
                case SDBLParser.TOTALS:
                case SDBLParser.ACOS:
                case SDBLParser.ASIN:
                case SDBLParser.ATAN:
                case SDBLParser.AVG:
                case SDBLParser.BEGINOFPERIOD:
                case SDBLParser.BOOLEAN:
                case SDBLParser.COS:
                case SDBLParser.COUNT:
                case SDBLParser.DATE:
                case SDBLParser.DATEADD:
                case SDBLParser.DATEDIFF:
                case SDBLParser.DATETIME:
                case SDBLParser.DAY:
                case SDBLParser.DAYOFYEAR:
                case SDBLParser.EMPTYTABLE:
                case SDBLParser.EMPTYREF:
                case SDBLParser.ENDOFPERIOD:
                case SDBLParser.EXP:
                case SDBLParser.HALFYEAR:
                case SDBLParser.HOUR:
                case SDBLParser.INT:
                case SDBLParser.LOG:
                case SDBLParser.LOG10:
                case SDBLParser.LOWER:
                case SDBLParser.MAX:
                case SDBLParser.MIN:
                case SDBLParser.MINUTE:
                case SDBLParser.MONTH:
                case SDBLParser.NUMBER:
                case SDBLParser.QUARTER:
                case SDBLParser.ONLY:
                case SDBLParser.PERIODS:
                case SDBLParser.REFS:
                case SDBLParser.PRESENTATION:
                case SDBLParser.RECORDAUTONUMBER:
                case SDBLParser.REFPRESENTATION:
                case SDBLParser.POW:
                case SDBLParser.ROUND:
                case SDBLParser.SECOND:
                case SDBLParser.SIN:
                case SDBLParser.SQRT:
                case SDBLParser.STOREDDATASIZE:
                case SDBLParser.STRING:
                case SDBLParser.STRINGLENGTH:
                case SDBLParser.STRFIND:
                case SDBLParser.STRREPLACE:
                case SDBLParser.SUBSTRING:
                case SDBLParser.SUM:
                case SDBLParser.TAN:
                case SDBLParser.TENDAYS:
                case SDBLParser.TRIMALL:
                case SDBLParser.TRIML:
                case SDBLParser.TRIMR:
                case SDBLParser.TYPE:
                case SDBLParser.UPPER:
                case SDBLParser.VALUE:
                case SDBLParser.VALUETYPE:
                case SDBLParser.WEEK:
                case SDBLParser.WEEKDAY:
                case SDBLParser.YEAR:
                case SDBLParser.UUID:
                case SDBLParser.ACCOUNTING_REGISTER_TYPE:
                case SDBLParser.ACCUMULATION_REGISTER_TYPE:
                case SDBLParser.BUSINESS_PROCESS_TYPE:
                case SDBLParser.CALCULATION_REGISTER_TYPE:
                case SDBLParser.CATALOG_TYPE:
                case SDBLParser.CHART_OF_ACCOUNTS_TYPE:
                case SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE:
                case SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE:
                case SDBLParser.CONSTANT_TYPE:
                case SDBLParser.DOCUMENT_TYPE:
                case SDBLParser.DOCUMENT_JOURNAL_TYPE:
                case SDBLParser.ENUM_TYPE:
                case SDBLParser.EXCHANGE_PLAN_TYPE:
                case SDBLParser.EXTERNAL_DATA_SOURCE_TYPE:
                case SDBLParser.FILTER_CRITERION_TYPE:
                case SDBLParser.INFORMATION_REGISTER_TYPE:
                case SDBLParser.SEQUENCE_TYPE:
                case SDBLParser.TASK_TYPE:
                case SDBLParser.ROUTEPOINT_FIELD:
                case SDBLParser.INDEX:
                case SDBLParser.GROUP:
                case SDBLParser.ORDER:
                case SDBLParser.SET:
                case SDBLParser.RIGHT:
                case SDBLParser.LEFT:
                case SDBLParser.INNER:
                case SDBLParser.FULL:
                case SDBLParser.JOIN:
                case SDBLParser.OUTER:
                case SDBLParser.FOR:
                case SDBLParser.UPDATE:
                case SDBLParser.ALL:
                case SDBLParser.UNION:
                case SDBLParser.IDENTIFIER:
                case SDBLParser.ACTUAL_ACTION_PERIOD_VT:
                case SDBLParser.BALANCE_VT:
                case SDBLParser.BALANCE_AND_TURNOVERS_VT:
                case SDBLParser.BOUNDARIES_VT:
                case SDBLParser.DR_CR_TURNOVERS_VT:
                case SDBLParser.EXT_DIMENSIONS_VT:
                case SDBLParser.RECORDS_WITH_EXT_DIMENSIONS_VT:
                case SDBLParser.SCHEDULE_DATA_VT:
                case SDBLParser.SLICEFIRST_VT:
                case SDBLParser.SLICELAST_VT:
                case SDBLParser.TASK_BY_PERFORMER_VT:
                case SDBLParser.TURNOVERS_VT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 368;
                        this.column();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public orderBy(): OrderByContext {
        let localContext = new OrderByContext(this.context, this.state);
        this.enterRule(localContext, 40, SDBLParser.RULE_orderBy);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 371;
                this.match(SDBLParser.ORDER);
                this.state = 372;
                _la = this.tokenStream.LA(1);
                if (!(_la === 26 || _la === 49)) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 373;
                localContext._ordersByExpession = this.ordersByExpession();
                localContext._orders.push(localContext._ordersByExpession);
                this.state = 376;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                        this.state = 374;
                        this.match(SDBLParser.COMMA);
                        this.state = 375;
                        localContext._ordersByExpession = this.ordersByExpession();
                        localContext._orders.push(localContext._ordersByExpession);
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public ordersByExpession(): OrdersByExpessionContext {
        let localContext = new OrdersByExpessionContext(this.context, this.state);
        this.enterRule(localContext, 42, SDBLParser.RULE_ordersByExpession);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 378;
                this.expression(0);
                this.state = 384;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SDBLParser.ASC:
                    case SDBLParser.DESC:
                        {
                            this.state = 379;
                            localContext._direction = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 23 || _la === 29)) {
                                localContext._direction = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                    case SDBLParser.HIERARCHY:
                        {
                            {
                                this.state = 380;
                                localContext._hierarchy = this.match(SDBLParser.HIERARCHY);
                                this.state = 382;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 29) {
                                    {
                                        this.state = 381;
                                        localContext._direction = this.match(SDBLParser.DESC);
                                    }
                                }
                            }
                        }
                        break;
                    case SDBLParser.EOF:
                    case SDBLParser.RPAREN:
                    case SDBLParser.SEMICOLON:
                    case SDBLParser.COMMA:
                    case SDBLParser.AUTOORDER:
                    case SDBLParser.TOTALS:
                    case SDBLParser.ORDER:
                    case SDBLParser.UNION:
                        break;
                    default:
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public totalBy(): TotalByContext {
        let localContext = new TotalByContext(this.context, this.state);
        this.enterRule(localContext, 44, SDBLParser.RULE_totalBy);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 386;
                this.match(SDBLParser.TOTALS);
                this.state = 388;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
                _la = this.tokenStream.LA(1);
                if (!(_la === 26 || _la === 49)) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 391;
                localContext._totalsGroup = this.totalsGroup();
                localContext._totalsGroups.push(localContext._totalsGroup);
                this.state = 396;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 392;
                            this.match(SDBLParser.COMMA);
                            this.state = 393;
                            localContext._totalsGroup = this.totalsGroup();
                            localContext._totalsGroups.push(localContext._totalsGroup);
                        }
                    }
                    this.state = 398;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public totalsGroup(): TotalsGroupContext {
        let localContext = new TotalsGroupContext(this.context, this.state);
        this.enterRule(localContext, 46, SDBLParser.RULE_totalsGroup);
        let _la: number;
        try {
            this.state = 411;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SDBLParser.OVERALL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 399;
                        this.match(SDBLParser.OVERALL);
                    }
                    break;
                case SDBLParser.LPAREN:
                case SDBLParser.PLUS:
                case SDBLParser.MINUS:
                case SDBLParser.AMPERSAND:
                case SDBLParser.CASE:
                case SDBLParser.CAST:
                case SDBLParser.DROP:
                case SDBLParser.END:
                case SDBLParser.FALSE:
                case SDBLParser.ISNULL:
                case SDBLParser.NULL:
                case SDBLParser.SELECT:
                case SDBLParser.TOTALS:
                case SDBLParser.TRUE:
                case SDBLParser.UNDEFINED:
                case SDBLParser.WHEN:
                case SDBLParser.ACOS:
                case SDBLParser.ASIN:
                case SDBLParser.ATAN:
                case SDBLParser.AVG:
                case SDBLParser.BEGINOFPERIOD:
                case SDBLParser.BOOLEAN:
                case SDBLParser.COS:
                case SDBLParser.COUNT:
                case SDBLParser.DATE:
                case SDBLParser.DATEADD:
                case SDBLParser.DATEDIFF:
                case SDBLParser.DATETIME:
                case SDBLParser.DAY:
                case SDBLParser.DAYOFYEAR:
                case SDBLParser.EMPTYTABLE:
                case SDBLParser.EMPTYREF:
                case SDBLParser.ENDOFPERIOD:
                case SDBLParser.EXP:
                case SDBLParser.HALFYEAR:
                case SDBLParser.HOUR:
                case SDBLParser.INT:
                case SDBLParser.LOG:
                case SDBLParser.LOG10:
                case SDBLParser.LOWER:
                case SDBLParser.MAX:
                case SDBLParser.MIN:
                case SDBLParser.MINUTE:
                case SDBLParser.MONTH:
                case SDBLParser.NUMBER:
                case SDBLParser.QUARTER:
                case SDBLParser.ONLY:
                case SDBLParser.PERIODS:
                case SDBLParser.REFS:
                case SDBLParser.PRESENTATION:
                case SDBLParser.RECORDAUTONUMBER:
                case SDBLParser.REFPRESENTATION:
                case SDBLParser.POW:
                case SDBLParser.ROUND:
                case SDBLParser.SECOND:
                case SDBLParser.SIN:
                case SDBLParser.SQRT:
                case SDBLParser.STOREDDATASIZE:
                case SDBLParser.STRING:
                case SDBLParser.STRINGLENGTH:
                case SDBLParser.STRFIND:
                case SDBLParser.STRREPLACE:
                case SDBLParser.SUBSTRING:
                case SDBLParser.SUM:
                case SDBLParser.TAN:
                case SDBLParser.TENDAYS:
                case SDBLParser.TRIMALL:
                case SDBLParser.TRIML:
                case SDBLParser.TRIMR:
                case SDBLParser.TYPE:
                case SDBLParser.UPPER:
                case SDBLParser.VALUE:
                case SDBLParser.VALUETYPE:
                case SDBLParser.WEEK:
                case SDBLParser.WEEKDAY:
                case SDBLParser.YEAR:
                case SDBLParser.UUID:
                case SDBLParser.ACCOUNTING_REGISTER_TYPE:
                case SDBLParser.ACCUMULATION_REGISTER_TYPE:
                case SDBLParser.BUSINESS_PROCESS_TYPE:
                case SDBLParser.CALCULATION_REGISTER_TYPE:
                case SDBLParser.CATALOG_TYPE:
                case SDBLParser.CHART_OF_ACCOUNTS_TYPE:
                case SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE:
                case SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE:
                case SDBLParser.CONSTANT_TYPE:
                case SDBLParser.DOCUMENT_TYPE:
                case SDBLParser.DOCUMENT_JOURNAL_TYPE:
                case SDBLParser.ENUM_TYPE:
                case SDBLParser.EXCHANGE_PLAN_TYPE:
                case SDBLParser.EXTERNAL_DATA_SOURCE_TYPE:
                case SDBLParser.FILTER_CRITERION_TYPE:
                case SDBLParser.INFORMATION_REGISTER_TYPE:
                case SDBLParser.SEQUENCE_TYPE:
                case SDBLParser.TASK_TYPE:
                case SDBLParser.ROUTEPOINT_FIELD:
                case SDBLParser.INDEX:
                case SDBLParser.GROUP:
                case SDBLParser.ORDER:
                case SDBLParser.GROUPEDBY:
                case SDBLParser.SET:
                case SDBLParser.RIGHT:
                case SDBLParser.LEFT:
                case SDBLParser.INNER:
                case SDBLParser.FULL:
                case SDBLParser.JOIN:
                case SDBLParser.OUTER:
                case SDBLParser.FOR:
                case SDBLParser.UPDATE:
                case SDBLParser.ALL:
                case SDBLParser.UNION:
                case SDBLParser.DECIMAL:
                case SDBLParser.FLOAT:
                case SDBLParser.STR:
                case SDBLParser.IDENTIFIER:
                case SDBLParser.ACTUAL_ACTION_PERIOD_VT:
                case SDBLParser.BALANCE_VT:
                case SDBLParser.BALANCE_AND_TURNOVERS_VT:
                case SDBLParser.BOUNDARIES_VT:
                case SDBLParser.DR_CR_TURNOVERS_VT:
                case SDBLParser.EXT_DIMENSIONS_VT:
                case SDBLParser.RECORDS_WITH_EXT_DIMENSIONS_VT:
                case SDBLParser.SCHEDULE_DATA_VT:
                case SDBLParser.SLICEFIRST_VT:
                case SDBLParser.SLICELAST_VT:
                case SDBLParser.TASK_BY_PERFORMER_VT:
                case SDBLParser.TURNOVERS_VT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 400;
                            this.expression(0);
                            this.state = 406;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context)) {
                                case 1:
                                    {
                                        {
                                            this.state = 402;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
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
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
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
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public periodic(): PeriodicContext {
        let localContext = new PeriodicContext(this.context, this.state);
        this.enterRule(localContext, 48, SDBLParser.RULE_periodic);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 413;
                this.match(SDBLParser.PERIODS);
                this.state = 414;
                this.match(SDBLParser.LPAREN);
                this.state = 415;
                localContext._periodType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if (
                    !(
                        (((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 67289281) !== 0) ||
                        (((_la - 107) & ~0x1f) === 0 && ((1 << (_la - 107)) & 1281) !== 0)
                    )
                ) {
                    localContext._periodType = this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 418;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context)) {
                    case 1:
                        {
                            this.state = 416;
                            this.match(SDBLParser.COMMA);
                            this.state = 417;
                            localContext._first = this.expression(0);
                        }
                        break;
                }
                this.state = 422;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                        this.state = 420;
                        this.match(SDBLParser.COMMA);
                        this.state = 421;
                        localContext._second = this.expression(0);
                    }
                }

                this.state = 424;
                this.match(SDBLParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public column(): ColumnContext {
        let localContext = new ColumnContext(this.context, this.state);
        this.enterRule(localContext, 50, SDBLParser.RULE_column);
        try {
            let alternative: number;
            this.state = 441;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 426;
                        localContext._mdoName = this.identifier();
                        this.state = 429;
                        this.errorHandler.sync(this);
                        alternative = 1;
                        do {
                            switch (alternative) {
                                case 1:
                                    {
                                        {
                                            this.state = 427;
                                            this.match(SDBLParser.DOT);
                                            this.state = 428;
                                            localContext._identifier = this.identifier();
                                            localContext._columnNames.push(localContext._identifier);
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                            this.state = 431;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
                        } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 433;
                        localContext._identifier = this.identifier();
                        localContext._columnNames.push(localContext._identifier);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 434;
                        this.mdo();
                        this.state = 437;
                        this.errorHandler.sync(this);
                        alternative = 1;
                        do {
                            switch (alternative) {
                                case 1:
                                    {
                                        {
                                            this.state = 435;
                                            this.match(SDBLParser.DOT);
                                            this.state = 436;
                                            localContext._identifier = this.identifier();
                                            localContext._columnNames.push(localContext._identifier);
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                            this.state = 439;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 46, this.context);
                        } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;

    public expression(_p: number): ExpressionContext;

    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 52;
        this.enterRecursionRule(localContext, 52, SDBLParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 450;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context)) {
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
                this.context!.stop = this.tokenStream.LT(-1);
                this.state = 457;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new ExpressionContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, SDBLParser.RULE_expression);
                                this.state = 452;
                                if (!this.precpred(this.context, 1)) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                }
                                this.state = 453;
                                localContext._binaryOperation = this.tokenStream.LT(1);
                                _la = this.tokenStream.LA(1);
                                if (!((_la & ~0x1f) === 0 && ((1 << _la) & 198144) !== 0)) {
                                    localContext._binaryOperation = this.errorHandler.recoverInline(this);
                                } else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 454;
                                this.expression(2);
                            }
                        }
                    }
                    this.state = 459;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public primitiveExpression(): PrimitiveExpressionContext {
        let localContext = new PrimitiveExpressionContext(this.context, this.state);
        this.enterRule(localContext, 54, SDBLParser.RULE_primitiveExpression);
        let _la: number;
        try {
            this.state = 495;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SDBLParser.NULL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 460;
                        this.match(SDBLParser.NULL);
                    }
                    break;
                case SDBLParser.UNDEFINED:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 461;
                        this.match(SDBLParser.UNDEFINED);
                    }
                    break;
                case SDBLParser.STR:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 462;
                        this.multiString();
                    }
                    break;
                case SDBLParser.DECIMAL:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 463;
                        this.match(SDBLParser.DECIMAL);
                    }
                    break;
                case SDBLParser.FLOAT:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 464;
                        this.match(SDBLParser.FLOAT);
                    }
                    break;
                case SDBLParser.FALSE:
                case SDBLParser.TRUE:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 465;
                        localContext._booleanValue = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 35 || _la === 54)) {
                            localContext._booleanValue = this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case SDBLParser.DATETIME:
                    this.enterOuterAlt(localContext, 7);
                    {
                        {
                            this.state = 466;
                            this.match(SDBLParser.DATETIME);
                            this.state = 467;
                            this.match(SDBLParser.LPAREN);
                            this.state = 468;
                            localContext._year = this.datePart();
                            this.state = 469;
                            this.match(SDBLParser.COMMA);
                            this.state = 470;
                            localContext._month = this.datePart();
                            this.state = 471;
                            this.match(SDBLParser.COMMA);
                            this.state = 472;
                            localContext._day = this.datePart();
                            this.state = 480;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 7) {
                                {
                                    this.state = 473;
                                    this.match(SDBLParser.COMMA);
                                    this.state = 474;
                                    localContext._hour = this.datePart();
                                    this.state = 475;
                                    this.match(SDBLParser.COMMA);
                                    this.state = 476;
                                    localContext._minute = this.datePart();
                                    this.state = 477;
                                    this.match(SDBLParser.COMMA);
                                    this.state = 478;
                                    localContext._second = this.datePart();
                                }
                            }

                            this.state = 482;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.AMPERSAND:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 484;
                        this.parameter();
                    }
                    break;
                case SDBLParser.TYPE:
                    this.enterOuterAlt(localContext, 9);
                    {
                        {
                            this.state = 485;
                            this.match(SDBLParser.TYPE);
                            this.state = 486;
                            this.match(SDBLParser.LPAREN);
                            this.state = 492;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case SDBLParser.ACCOUNTING_REGISTER_TYPE:
                                case SDBLParser.ACCUMULATION_REGISTER_TYPE:
                                case SDBLParser.BUSINESS_PROCESS_TYPE:
                                case SDBLParser.CALCULATION_REGISTER_TYPE:
                                case SDBLParser.CATALOG_TYPE:
                                case SDBLParser.CHART_OF_ACCOUNTS_TYPE:
                                case SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE:
                                case SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE:
                                case SDBLParser.CONSTANT_TYPE:
                                case SDBLParser.DOCUMENT_TYPE:
                                case SDBLParser.DOCUMENT_JOURNAL_TYPE:
                                case SDBLParser.ENUM_TYPE:
                                case SDBLParser.EXCHANGE_PLAN_TYPE:
                                case SDBLParser.EXTERNAL_DATA_SOURCE_TYPE:
                                case SDBLParser.FILTER_CRITERION_TYPE:
                                case SDBLParser.INFORMATION_REGISTER_TYPE:
                                case SDBLParser.SEQUENCE_TYPE:
                                case SDBLParser.TASK_TYPE:
                                    {
                                        this.state = 487;
                                        this.mdo();
                                    }
                                    break;
                                case SDBLParser.STRING:
                                    {
                                        this.state = 488;
                                        this.match(SDBLParser.STRING);
                                    }
                                    break;
                                case SDBLParser.BOOLEAN:
                                    {
                                        this.state = 489;
                                        this.match(SDBLParser.BOOLEAN);
                                    }
                                    break;
                                case SDBLParser.DATE:
                                    {
                                        this.state = 490;
                                        this.match(SDBLParser.DATE);
                                    }
                                    break;
                                case SDBLParser.NUMBER:
                                    {
                                        this.state = 491;
                                        this.match(SDBLParser.NUMBER);
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                            this.state = 494;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public caseExpression(): CaseExpressionContext {
        let localContext = new CaseExpressionContext(this.context, this.state);
        this.enterRule(localContext, 56, SDBLParser.RULE_caseExpression);
        let _la: number;
        try {
            this.state = 529;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 497;
                            this.match(SDBLParser.CASE);
                            this.state = 498;
                            localContext._caseExp = this.expression(0);
                            this.state = 500;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 499;
                                        this.caseBranch();
                                    }
                                }
                                this.state = 502;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 56);
                            this.state = 506;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 32) {
                                {
                                    this.state = 504;
                                    this.match(SDBLParser.ELSE);
                                    this.state = 505;
                                    localContext._elseExp = this.logicalExpression();
                                }
                            }

                            this.state = 508;
                            this.match(SDBLParser.END);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 510;
                            this.match(SDBLParser.CASE);
                            this.state = 512;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 511;
                                        this.caseBranch();
                                    }
                                }
                                this.state = 514;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 56);
                            this.state = 518;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 32) {
                                {
                                    this.state = 516;
                                    this.match(SDBLParser.ELSE);
                                    this.state = 517;
                                    localContext._elseExp = this.logicalExpression();
                                }
                            }

                            this.state = 520;
                            this.match(SDBLParser.END);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        {
                            this.state = 522;
                            this.caseBranch();
                            this.state = 525;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 32) {
                                {
                                    this.state = 523;
                                    this.match(SDBLParser.ELSE);
                                    this.state = 524;
                                    localContext._elseExp = this.logicalExpression();
                                }
                            }

                            this.state = 527;
                            this.match(SDBLParser.END);
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public caseBranch(): CaseBranchContext {
        let localContext = new CaseBranchContext(this.context, this.state);
        this.enterRule(localContext, 58, SDBLParser.RULE_caseBranch);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public bracketExpression(): BracketExpressionContext {
        let localContext = new BracketExpressionContext(this.context, this.state);
        this.enterRule(localContext, 60, SDBLParser.RULE_bracketExpression);
        try {
            this.state = 544;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
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
                    this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public unaryExpression(): UnaryExpressionContext {
        let localContext = new UnaryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 62, SDBLParser.RULE_unaryExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 546;
                this.sign();
                this.state = 547;
                this.expression(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 64, SDBLParser.RULE_functionCall);
        try {
            let alternative: number;
            this.state = 567;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SDBLParser.AVG:
                case SDBLParser.COUNT:
                case SDBLParser.MAX:
                case SDBLParser.MIN:
                case SDBLParser.SUM:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 549;
                        this.aggregateFunctions();
                    }
                    break;
                case SDBLParser.ISNULL:
                case SDBLParser.ACOS:
                case SDBLParser.ASIN:
                case SDBLParser.ATAN:
                case SDBLParser.BEGINOFPERIOD:
                case SDBLParser.COS:
                case SDBLParser.DATEADD:
                case SDBLParser.DATEDIFF:
                case SDBLParser.DAY:
                case SDBLParser.DAYOFYEAR:
                case SDBLParser.ENDOFPERIOD:
                case SDBLParser.EXP:
                case SDBLParser.HOUR:
                case SDBLParser.INT:
                case SDBLParser.LOG:
                case SDBLParser.LOG10:
                case SDBLParser.LOWER:
                case SDBLParser.MINUTE:
                case SDBLParser.MONTH:
                case SDBLParser.QUARTER:
                case SDBLParser.PRESENTATION:
                case SDBLParser.REFPRESENTATION:
                case SDBLParser.POW:
                case SDBLParser.ROUND:
                case SDBLParser.SECOND:
                case SDBLParser.SIN:
                case SDBLParser.SQRT:
                case SDBLParser.STOREDDATASIZE:
                case SDBLParser.STRINGLENGTH:
                case SDBLParser.STRFIND:
                case SDBLParser.STRREPLACE:
                case SDBLParser.SUBSTRING:
                case SDBLParser.TAN:
                case SDBLParser.TRIMALL:
                case SDBLParser.TRIML:
                case SDBLParser.TRIMR:
                case SDBLParser.UPPER:
                case SDBLParser.VALUETYPE:
                case SDBLParser.WEEK:
                case SDBLParser.WEEKDAY:
                case SDBLParser.YEAR:
                case SDBLParser.UUID:
                case SDBLParser.GROUPEDBY:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 550;
                        this.builtInFunctions();
                    }
                    break;
                case SDBLParser.VALUE:
                    this.enterOuterAlt(localContext, 3);
                    {
                        {
                            this.state = 551;
                            this.valueFunction();
                            this.state = 556;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 552;
                                            this.match(SDBLParser.DOT);
                                            this.state = 553;
                                            localContext._identifier = this.identifier();
                                            localContext._columnNames.push(localContext._identifier);
                                        }
                                    }
                                }
                                this.state = 558;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
                            }
                        }
                    }
                    break;
                case SDBLParser.CAST:
                    this.enterOuterAlt(localContext, 4);
                    {
                        {
                            this.state = 559;
                            this.castFunction();
                            this.state = 564;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 61, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 560;
                                            this.match(SDBLParser.DOT);
                                            this.state = 561;
                                            localContext._identifier = this.identifier();
                                            localContext._columnNames.push(localContext._identifier);
                                        }
                                    }
                                }
                                this.state = 566;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 61, this.context);
                            }
                        }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public builtInFunctions(): BuiltInFunctionsContext {
        let localContext = new BuiltInFunctionsContext(this.context, this.state);
        this.enterRule(localContext, 66, SDBLParser.RULE_builtInFunctions);
        let _la: number;
        try {
            this.state = 658;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SDBLParser.SUBSTRING:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 569;
                            localContext._doCall = this.match(SDBLParser.SUBSTRING);
                            this.state = 570;
                            this.match(SDBLParser.LPAREN);
                            this.state = 571;
                            localContext._string_ = this.expression(0);
                            this.state = 572;
                            this.match(SDBLParser.COMMA);
                            this.state = 573;
                            localContext._charNo = this.expression(0);
                            this.state = 574;
                            this.match(SDBLParser.COMMA);
                            this.state = 575;
                            localContext._count = this.expression(0);
                            this.state = 576;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.DAY:
                case SDBLParser.DAYOFYEAR:
                case SDBLParser.HOUR:
                case SDBLParser.MINUTE:
                case SDBLParser.MONTH:
                case SDBLParser.QUARTER:
                case SDBLParser.SECOND:
                case SDBLParser.WEEK:
                case SDBLParser.WEEKDAY:
                case SDBLParser.YEAR:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 578;
                            localContext._doCall = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (
                                !(
                                    (((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 67289219) !== 0) ||
                                    (((_la - 115) & ~0x1f) === 0 && ((1 << (_la - 115)) & 7) !== 0)
                                )
                            ) {
                                localContext._doCall = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 579;
                            this.match(SDBLParser.LPAREN);
                            this.state = 580;
                            localContext._date = this.expression(0);
                            this.state = 581;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.BEGINOFPERIOD:
                case SDBLParser.ENDOFPERIOD:
                    this.enterOuterAlt(localContext, 3);
                    {
                        {
                            this.state = 583;
                            localContext._doCall = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 62 || _la === 74)) {
                                localContext._doCall = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 584;
                            this.match(SDBLParser.LPAREN);
                            this.state = 585;
                            localContext._date = this.expression(0);
                            this.state = 586;
                            this.match(SDBLParser.COMMA);
                            this.state = 587;
                            localContext._periodType = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (
                                !(
                                    (((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 180417) !== 0) ||
                                    (((_la - 107) & ~0x1f) === 0 && ((1 << (_la - 107)) & 1281) !== 0)
                                )
                            ) {
                                localContext._periodType = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 588;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.DATEADD:
                    this.enterOuterAlt(localContext, 4);
                    {
                        {
                            this.state = 590;
                            localContext._doCall = this.match(SDBLParser.DATEADD);
                            this.state = 591;
                            this.match(SDBLParser.LPAREN);
                            this.state = 592;
                            localContext._date = this.expression(0);
                            this.state = 593;
                            this.match(SDBLParser.COMMA);
                            this.state = 594;
                            localContext._periodType = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (
                                !(
                                    (((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 67289281) !== 0) ||
                                    (((_la - 107) & ~0x1f) === 0 && ((1 << (_la - 107)) & 1281) !== 0)
                                )
                            ) {
                                localContext._periodType = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 595;
                            this.match(SDBLParser.COMMA);
                            this.state = 596;
                            localContext._count = this.expression(0);
                            this.state = 597;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.DATEDIFF:
                    this.enterOuterAlt(localContext, 5);
                    {
                        {
                            this.state = 599;
                            localContext._doCall = this.match(SDBLParser.DATEDIFF);
                            this.state = 600;
                            this.match(SDBLParser.LPAREN);
                            this.state = 601;
                            localContext._firstdate = this.expression(0);
                            this.state = 602;
                            this.match(SDBLParser.COMMA);
                            this.state = 603;
                            localContext._seconddate = this.expression(0);
                            this.state = 604;
                            this.match(SDBLParser.COMMA);
                            this.state = 605;
                            localContext._periodType = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (
                                !((((_la - 70) & ~0x1f) === 0 && ((1 << (_la - 70)) & 67289217) !== 0) || _la === 117)
                            ) {
                                localContext._periodType = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 606;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.PRESENTATION:
                case SDBLParser.REFPRESENTATION:
                case SDBLParser.VALUETYPE:
                case SDBLParser.GROUPEDBY:
                    this.enterOuterAlt(localContext, 6);
                    {
                        {
                            this.state = 608;
                            localContext._doCall = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!((((_la - 91) & ~0x1f) === 0 && ((1 << (_la - 91)) & 8388613) !== 0) || _la === 141)) {
                                localContext._doCall = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 609;
                            this.match(SDBLParser.LPAREN);
                            this.state = 610;
                            localContext._value = this.expression(0);
                            this.state = 611;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.ISNULL:
                    this.enterOuterAlt(localContext, 7);
                    {
                        {
                            this.state = 613;
                            localContext._doCall = this.match(SDBLParser.ISNULL);
                            this.state = 614;
                            this.match(SDBLParser.LPAREN);
                            this.state = 615;
                            localContext._first = this.logicalExpression();
                            this.state = 616;
                            this.match(SDBLParser.COMMA);
                            this.state = 617;
                            localContext._second = this.logicalExpression();
                            this.state = 618;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.ACOS:
                case SDBLParser.ASIN:
                case SDBLParser.ATAN:
                case SDBLParser.COS:
                case SDBLParser.EXP:
                case SDBLParser.INT:
                case SDBLParser.LOG:
                case SDBLParser.LOG10:
                case SDBLParser.POW:
                case SDBLParser.SIN:
                case SDBLParser.SQRT:
                case SDBLParser.TAN:
                    this.enterOuterAlt(localContext, 8);
                    {
                        {
                            this.state = 620;
                            localContext._doCall = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (
                                !(
                                    (((_la - 58) & ~0x1f) === 0 && ((1 << (_la - 58)) & 7471175) !== 0) ||
                                    (((_la - 94) & ~0x1f) === 0 && ((1 << (_la - 94)) & 4121) !== 0)
                                )
                            ) {
                                localContext._doCall = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 621;
                            this.match(SDBLParser.LPAREN);
                            this.state = 622;
                            localContext._decimal = this.expression(0);
                            this.state = 623;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.LOWER:
                case SDBLParser.STRINGLENGTH:
                case SDBLParser.TRIMALL:
                case SDBLParser.TRIML:
                case SDBLParser.TRIMR:
                case SDBLParser.UPPER:
                    this.enterOuterAlt(localContext, 9);
                    {
                        {
                            this.state = 625;
                            localContext._doCall = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(((_la - 81) & ~0x1f) === 0 && ((1 << (_la - 81)) & 3088056321) !== 0)) {
                                localContext._doCall = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 626;
                            this.match(SDBLParser.LPAREN);
                            this.state = 627;
                            localContext._string_ = this.expression(0);
                            this.state = 628;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.ROUND:
                    this.enterOuterAlt(localContext, 10);
                    {
                        {
                            this.state = 630;
                            localContext._doCall = this.match(SDBLParser.ROUND);
                            this.state = 631;
                            this.match(SDBLParser.LPAREN);
                            this.state = 632;
                            localContext._decimal = this.expression(0);
                            this.state = 633;
                            this.match(SDBLParser.COMMA);
                            this.state = 634;
                            localContext._precise = this.expression(0);
                            this.state = 635;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.STOREDDATASIZE:
                case SDBLParser.UUID:
                    this.enterOuterAlt(localContext, 11);
                    {
                        {
                            this.state = 637;
                            localContext._doCall = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 99 || _la === 118)) {
                                localContext._doCall = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 638;
                            this.match(SDBLParser.LPAREN);
                            this.state = 639;
                            localContext._value = this.expression(0);
                            this.state = 640;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.STRFIND:
                    this.enterOuterAlt(localContext, 12);
                    {
                        {
                            this.state = 642;
                            localContext._doCall = this.match(SDBLParser.STRFIND);
                            this.state = 643;
                            this.match(SDBLParser.LPAREN);
                            this.state = 644;
                            localContext._string_ = this.expression(0);
                            this.state = 645;
                            this.match(SDBLParser.COMMA);
                            this.state = 646;
                            localContext._substring1 = this.expression(0);
                            this.state = 647;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                case SDBLParser.STRREPLACE:
                    this.enterOuterAlt(localContext, 13);
                    {
                        {
                            this.state = 649;
                            localContext._doCall = this.match(SDBLParser.STRREPLACE);
                            this.state = 650;
                            this.match(SDBLParser.LPAREN);
                            this.state = 651;
                            localContext._string_ = this.expression(0);
                            this.state = 652;
                            this.match(SDBLParser.COMMA);
                            this.state = 653;
                            localContext._substring1 = this.expression(0);
                            this.state = 654;
                            this.match(SDBLParser.COMMA);
                            this.state = 655;
                            localContext._substring1 = this.expression(0);
                            this.state = 656;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public aggregateFunctions(): AggregateFunctionsContext {
        let localContext = new AggregateFunctionsContext(this.context, this.state);
        this.enterRule(localContext, 68, SDBLParser.RULE_aggregateFunctions);
        let _la: number;
        try {
            this.state = 675;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SDBLParser.AVG:
                case SDBLParser.MAX:
                case SDBLParser.MIN:
                case SDBLParser.SUM:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 660;
                            localContext._doCall = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!((((_la - 61) & ~0x1f) === 0 && ((1 << (_la - 61)) & 6291457) !== 0) || _la === 105)) {
                                localContext._doCall = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
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
                case SDBLParser.COUNT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 665;
                            localContext._doCall = this.match(SDBLParser.COUNT);
                            this.state = 666;
                            this.match(SDBLParser.LPAREN);
                            this.state = 672;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case SDBLParser.LPAREN:
                                case SDBLParser.PLUS:
                                case SDBLParser.MINUS:
                                case SDBLParser.AMPERSAND:
                                case SDBLParser.CASE:
                                case SDBLParser.CAST:
                                case SDBLParser.DISTINCT:
                                case SDBLParser.DROP:
                                case SDBLParser.END:
                                case SDBLParser.FALSE:
                                case SDBLParser.ISNULL:
                                case SDBLParser.NOT:
                                case SDBLParser.NULL:
                                case SDBLParser.SELECT:
                                case SDBLParser.TOTALS:
                                case SDBLParser.TRUE:
                                case SDBLParser.UNDEFINED:
                                case SDBLParser.WHEN:
                                case SDBLParser.ACOS:
                                case SDBLParser.ASIN:
                                case SDBLParser.ATAN:
                                case SDBLParser.AVG:
                                case SDBLParser.BEGINOFPERIOD:
                                case SDBLParser.BOOLEAN:
                                case SDBLParser.COS:
                                case SDBLParser.COUNT:
                                case SDBLParser.DATE:
                                case SDBLParser.DATEADD:
                                case SDBLParser.DATEDIFF:
                                case SDBLParser.DATETIME:
                                case SDBLParser.DAY:
                                case SDBLParser.DAYOFYEAR:
                                case SDBLParser.EMPTYTABLE:
                                case SDBLParser.EMPTYREF:
                                case SDBLParser.ENDOFPERIOD:
                                case SDBLParser.EXP:
                                case SDBLParser.HALFYEAR:
                                case SDBLParser.HOUR:
                                case SDBLParser.INT:
                                case SDBLParser.LOG:
                                case SDBLParser.LOG10:
                                case SDBLParser.LOWER:
                                case SDBLParser.MAX:
                                case SDBLParser.MIN:
                                case SDBLParser.MINUTE:
                                case SDBLParser.MONTH:
                                case SDBLParser.NUMBER:
                                case SDBLParser.QUARTER:
                                case SDBLParser.ONLY:
                                case SDBLParser.PERIODS:
                                case SDBLParser.REFS:
                                case SDBLParser.PRESENTATION:
                                case SDBLParser.RECORDAUTONUMBER:
                                case SDBLParser.REFPRESENTATION:
                                case SDBLParser.POW:
                                case SDBLParser.ROUND:
                                case SDBLParser.SECOND:
                                case SDBLParser.SIN:
                                case SDBLParser.SQRT:
                                case SDBLParser.STOREDDATASIZE:
                                case SDBLParser.STRING:
                                case SDBLParser.STRINGLENGTH:
                                case SDBLParser.STRFIND:
                                case SDBLParser.STRREPLACE:
                                case SDBLParser.SUBSTRING:
                                case SDBLParser.SUM:
                                case SDBLParser.TAN:
                                case SDBLParser.TENDAYS:
                                case SDBLParser.TRIMALL:
                                case SDBLParser.TRIML:
                                case SDBLParser.TRIMR:
                                case SDBLParser.TYPE:
                                case SDBLParser.UPPER:
                                case SDBLParser.VALUE:
                                case SDBLParser.VALUETYPE:
                                case SDBLParser.WEEK:
                                case SDBLParser.WEEKDAY:
                                case SDBLParser.YEAR:
                                case SDBLParser.UUID:
                                case SDBLParser.ACCOUNTING_REGISTER_TYPE:
                                case SDBLParser.ACCUMULATION_REGISTER_TYPE:
                                case SDBLParser.BUSINESS_PROCESS_TYPE:
                                case SDBLParser.CALCULATION_REGISTER_TYPE:
                                case SDBLParser.CATALOG_TYPE:
                                case SDBLParser.CHART_OF_ACCOUNTS_TYPE:
                                case SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE:
                                case SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE:
                                case SDBLParser.CONSTANT_TYPE:
                                case SDBLParser.DOCUMENT_TYPE:
                                case SDBLParser.DOCUMENT_JOURNAL_TYPE:
                                case SDBLParser.ENUM_TYPE:
                                case SDBLParser.EXCHANGE_PLAN_TYPE:
                                case SDBLParser.EXTERNAL_DATA_SOURCE_TYPE:
                                case SDBLParser.FILTER_CRITERION_TYPE:
                                case SDBLParser.INFORMATION_REGISTER_TYPE:
                                case SDBLParser.SEQUENCE_TYPE:
                                case SDBLParser.TASK_TYPE:
                                case SDBLParser.ROUTEPOINT_FIELD:
                                case SDBLParser.INDEX:
                                case SDBLParser.GROUP:
                                case SDBLParser.ORDER:
                                case SDBLParser.GROUPEDBY:
                                case SDBLParser.SET:
                                case SDBLParser.RIGHT:
                                case SDBLParser.LEFT:
                                case SDBLParser.INNER:
                                case SDBLParser.FULL:
                                case SDBLParser.JOIN:
                                case SDBLParser.OUTER:
                                case SDBLParser.FOR:
                                case SDBLParser.UPDATE:
                                case SDBLParser.ALL:
                                case SDBLParser.UNION:
                                case SDBLParser.DECIMAL:
                                case SDBLParser.FLOAT:
                                case SDBLParser.STR:
                                case SDBLParser.IDENTIFIER:
                                case SDBLParser.ACTUAL_ACTION_PERIOD_VT:
                                case SDBLParser.BALANCE_VT:
                                case SDBLParser.BALANCE_AND_TURNOVERS_VT:
                                case SDBLParser.BOUNDARIES_VT:
                                case SDBLParser.DR_CR_TURNOVERS_VT:
                                case SDBLParser.EXT_DIMENSIONS_VT:
                                case SDBLParser.RECORDS_WITH_EXT_DIMENSIONS_VT:
                                case SDBLParser.SCHEDULE_DATA_VT:
                                case SDBLParser.SLICEFIRST_VT:
                                case SDBLParser.SLICELAST_VT:
                                case SDBLParser.TASK_BY_PERFORMER_VT:
                                case SDBLParser.TURNOVERS_VT:
                                    {
                                        this.state = 668;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
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
                                case SDBLParser.MUL:
                                    {
                                        this.state = 671;
                                        this.match(SDBLParser.MUL);
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                            this.state = 674;
                            this.match(SDBLParser.RPAREN);
                        }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public valueFunction(): ValueFunctionContext {
        let localContext = new ValueFunctionContext(this.context, this.state);
        this.enterRule(localContext, 70, SDBLParser.RULE_valueFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 677;
                localContext._doCall = this.match(SDBLParser.VALUE);
                this.state = 678;
                this.match(SDBLParser.LPAREN);
                this.state = 706;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 67, this.context)) {
                    case 1:
                        {
                            {
                                this.state = 679;
                                localContext._type_ = this.tokenStream.LT(1);
                                _la = this.tokenStream.LA(1);
                                if (!(((_la - 121) & ~0x1f) === 0 && ((1 << (_la - 121)) & 40637) !== 0)) {
                                    localContext._type_ = this.errorHandler.recoverInline(this);
                                } else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 680;
                                this.match(SDBLParser.DOT);
                                this.state = 681;
                                localContext._mdoName = this.identifier();
                                this.state = 682;
                                this.match(SDBLParser.DOT);
                                this.state = 683;
                                localContext._emptyFer = this.match(SDBLParser.EMPTYREF);
                            }
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 685;
                                localContext._type_ = this.tokenStream.LT(1);
                                _la = this.tokenStream.LA(1);
                                if (!(((_la - 123) & ~0x1f) === 0 && ((1 << (_la - 123)) & 143) !== 0)) {
                                    localContext._type_ = this.errorHandler.recoverInline(this);
                                } else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 686;
                                this.match(SDBLParser.DOT);
                                this.state = 687;
                                localContext._mdoName = this.identifier();
                                this.state = 688;
                                this.match(SDBLParser.DOT);
                                this.state = 689;
                                localContext._predefinedName = this.identifier();
                            }
                        }
                        break;
                    case 3:
                        {
                            {
                                this.state = 691;
                                localContext._type_ = this.match(SDBLParser.BUSINESS_PROCESS_TYPE);
                                this.state = 692;
                                this.match(SDBLParser.DOT);
                                this.state = 693;
                                localContext._mdoName = this.identifier();
                                this.state = 694;
                                this.match(SDBLParser.DOT);
                                this.state = 695;
                                this.match(SDBLParser.ROUTEPOINT_FIELD);
                                this.state = 696;
                                this.match(SDBLParser.DOT);
                                this.state = 697;
                                localContext._routePointName = this.identifier();
                            }
                        }
                        break;
                    case 4:
                        {
                            {
                                this.state = 699;
                                localContext._systemName = this.identifier();
                                this.state = 700;
                                this.match(SDBLParser.DOT);
                                this.state = 701;
                                localContext._predefinedName = this.identifier();
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public castFunction(): CastFunctionContext {
        let localContext = new CastFunctionContext(this.context, this.state);
        this.enterRule(localContext, 72, SDBLParser.RULE_castFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 710;
                    localContext._doCall = this.match(SDBLParser.CAST);
                    this.state = 711;
                    this.match(SDBLParser.LPAREN);
                    this.state = 712;
                    localContext._value = this.expression(0);
                    this.state = 713;
                    this.match(SDBLParser.AS);
                    this.state = 733;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                        case SDBLParser.BOOLEAN:
                            {
                                this.state = 714;
                                localContext._type_ = this.match(SDBLParser.BOOLEAN);
                            }
                            break;
                        case SDBLParser.NUMBER:
                            {
                                {
                                    this.state = 715;
                                    localContext._type_ = this.match(SDBLParser.NUMBER);
                                    this.state = 723;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 4) {
                                        {
                                            this.state = 716;
                                            this.match(SDBLParser.LPAREN);
                                            this.state = 717;
                                            localContext._len = this.match(SDBLParser.DECIMAL);
                                            this.state = 720;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                            if (_la === 7) {
                                                {
                                                    this.state = 718;
                                                    this.match(SDBLParser.COMMA);
                                                    this.state = 719;
                                                    localContext._prec = this.match(SDBLParser.DECIMAL);
                                                }
                                            }

                                            this.state = 722;
                                            this.match(SDBLParser.RPAREN);
                                        }
                                    }
                                }
                            }
                            break;
                        case SDBLParser.STRING:
                            {
                                {
                                    this.state = 725;
                                    localContext._type_ = this.match(SDBLParser.STRING);
                                    this.state = 729;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 4) {
                                        {
                                            this.state = 726;
                                            this.match(SDBLParser.LPAREN);
                                            this.state = 727;
                                            localContext._len = this.match(SDBLParser.DECIMAL);
                                            this.state = 728;
                                            this.match(SDBLParser.RPAREN);
                                        }
                                    }
                                }
                            }
                            break;
                        case SDBLParser.DATE:
                            {
                                this.state = 731;
                                localContext._type_ = this.match(SDBLParser.DATE);
                            }
                            break;
                        case SDBLParser.ACCOUNTING_REGISTER_TYPE:
                        case SDBLParser.ACCUMULATION_REGISTER_TYPE:
                        case SDBLParser.BUSINESS_PROCESS_TYPE:
                        case SDBLParser.CALCULATION_REGISTER_TYPE:
                        case SDBLParser.CATALOG_TYPE:
                        case SDBLParser.CHART_OF_ACCOUNTS_TYPE:
                        case SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE:
                        case SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE:
                        case SDBLParser.CONSTANT_TYPE:
                        case SDBLParser.DOCUMENT_TYPE:
                        case SDBLParser.DOCUMENT_JOURNAL_TYPE:
                        case SDBLParser.ENUM_TYPE:
                        case SDBLParser.EXCHANGE_PLAN_TYPE:
                        case SDBLParser.EXTERNAL_DATA_SOURCE_TYPE:
                        case SDBLParser.FILTER_CRITERION_TYPE:
                        case SDBLParser.INFORMATION_REGISTER_TYPE:
                        case SDBLParser.SEQUENCE_TYPE:
                        case SDBLParser.TASK_TYPE:
                            {
                                this.state = 732;
                                this.mdo();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 735;
                    this.match(SDBLParser.RPAREN);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public logicalExpression(): LogicalExpressionContext {
        let localContext = new LogicalExpressionContext(this.context, this.state);
        this.enterRule(localContext, 74, SDBLParser.RULE_logicalExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 737;
                localContext._predicate = this.predicate();
                localContext._condidions.push(localContext._predicate);
                this.state = 742;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 21 || _la === 47) {
                    {
                        {
                            this.state = 738;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 21 || _la === 47)) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 739;
                            localContext._predicate = this.predicate();
                            localContext._condidions.push(localContext._predicate);
                        }
                    }
                    this.state = 744;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public predicate(): PredicateContext {
        let localContext = new PredicateContext(this.context, this.state);
        this.enterRule(localContext, 76, SDBLParser.RULE_predicate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 748;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 43) {
                    {
                        {
                            this.state = 745;
                            this.match(SDBLParser.NOT);
                        }
                    }
                    this.state = 750;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 762;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context)) {
                    case 1:
                        {
                            this.state = 751;
                            localContext._booleanPredicate = this.expression(0);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public likePredicate(): LikePredicateContext {
        let localContext = new LikePredicateContext(this.context, this.state);
        this.enterRule(localContext, 78, SDBLParser.RULE_likePredicate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 764;
                this.expression(0);
                this.state = 768;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 43) {
                    {
                        {
                            this.state = 765;
                            this.match(SDBLParser.NOT);
                        }
                    }
                    this.state = 770;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 771;
                this.match(SDBLParser.LIKE);
                this.state = 772;
                this.expression(0);
                this.state = 775;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34) {
                    {
                        this.state = 773;
                        this.match(SDBLParser.ESCAPE);
                        this.state = 774;
                        localContext._escape = this.multiString();
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public isNullPredicate(): IsNullPredicateContext {
        let localContext = new IsNullPredicateContext(this.context, this.state);
        this.enterRule(localContext, 80, SDBLParser.RULE_isNullPredicate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 777;
                this.expression(0);
                this.state = 778;
                this.match(SDBLParser.IS);
                this.state = 780;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public comparePredicate(): ComparePredicateContext {
        let localContext = new ComparePredicateContext(this.context, this.state);
        this.enterRule(localContext, 82, SDBLParser.RULE_comparePredicate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 784;
                this.expression(0);
                this.state = 785;
                localContext._compareOperation = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if (!((_la & ~0x1f) === 0 && ((1 << _la) & 63744) !== 0)) {
                    localContext._compareOperation = this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 786;
                this.expression(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public betweenPredicate(): BetweenPredicateContext {
        let localContext = new BetweenPredicateContext(this.context, this.state);
        this.enterRule(localContext, 84, SDBLParser.RULE_betweenPredicate);
        try {
            this.enterOuterAlt(localContext, 1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public inPredicate(): InPredicateContext {
        let localContext = new InPredicateContext(this.context, this.state);
        this.enterRule(localContext, 86, SDBLParser.RULE_inPredicate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 799;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context)) {
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
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 43) {
                    {
                        {
                            this.state = 801;
                            this.match(SDBLParser.NOT);
                        }
                    }
                    this.state = 806;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 807;
                this.match(SDBLParser.IN);
                this.state = 809;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 154) {
                    {
                        this.state = 808;
                        this.match(SDBLParser.HIERARCHY_FOR_IN);
                    }
                }

                this.state = 811;
                this.match(SDBLParser.LPAREN);
                this.state = 814;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context)) {
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public refsPredicate(): RefsPredicateContext {
        let localContext = new RefsPredicateContext(this.context, this.state);
        this.enterRule(localContext, 88, SDBLParser.RULE_refsPredicate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 818;
                this.expression(0);
                this.state = 819;
                this.match(SDBLParser.REFS);
                this.state = 820;
                this.mdo();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public expressionList(): ExpressionListContext {
        let localContext = new ExpressionListContext(this.context, this.state);
        this.enterRule(localContext, 90, SDBLParser.RULE_expressionList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 822;
                localContext._logicalExpression = this.logicalExpression();
                localContext._exp.push(localContext._logicalExpression);
                this.state = 827;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 823;
                            this.match(SDBLParser.COMMA);
                            this.state = 824;
                            localContext._logicalExpression = this.logicalExpression();
                            localContext._exp.push(localContext._logicalExpression);
                        }
                    }
                    this.state = 829;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public dataSources(): DataSourcesContext {
        let localContext = new DataSourcesContext(this.context, this.state);
        this.enterRule(localContext, 92, SDBLParser.RULE_dataSources);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 830;
                localContext._dataSource = this.dataSource();
                localContext._tables.push(localContext._dataSource);
                this.state = 835;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 831;
                            this.match(SDBLParser.COMMA);
                            this.state = 832;
                            localContext._dataSource = this.dataSource();
                            localContext._tables.push(localContext._dataSource);
                        }
                    }
                    this.state = 837;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public dataSource(): DataSourceContext {
        let localContext = new DataSourceContext(this.context, this.state);
        this.enterRule(localContext, 94, SDBLParser.RULE_dataSource);
        let _la: number;
        try {
            this.state = 870;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 90, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
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
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 862;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case SDBLParser.AMPERSAND:
                                case SDBLParser.DROP:
                                case SDBLParser.END:
                                case SDBLParser.ISNULL:
                                case SDBLParser.SELECT:
                                case SDBLParser.TOTALS:
                                case SDBLParser.ACOS:
                                case SDBLParser.ASIN:
                                case SDBLParser.ATAN:
                                case SDBLParser.AVG:
                                case SDBLParser.BEGINOFPERIOD:
                                case SDBLParser.BOOLEAN:
                                case SDBLParser.COS:
                                case SDBLParser.COUNT:
                                case SDBLParser.DATE:
                                case SDBLParser.DATEADD:
                                case SDBLParser.DATEDIFF:
                                case SDBLParser.DATETIME:
                                case SDBLParser.DAY:
                                case SDBLParser.DAYOFYEAR:
                                case SDBLParser.EMPTYTABLE:
                                case SDBLParser.EMPTYREF:
                                case SDBLParser.ENDOFPERIOD:
                                case SDBLParser.EXP:
                                case SDBLParser.HALFYEAR:
                                case SDBLParser.HOUR:
                                case SDBLParser.INT:
                                case SDBLParser.LOG:
                                case SDBLParser.LOG10:
                                case SDBLParser.LOWER:
                                case SDBLParser.MAX:
                                case SDBLParser.MIN:
                                case SDBLParser.MINUTE:
                                case SDBLParser.MONTH:
                                case SDBLParser.NUMBER:
                                case SDBLParser.QUARTER:
                                case SDBLParser.ONLY:
                                case SDBLParser.PERIODS:
                                case SDBLParser.REFS:
                                case SDBLParser.PRESENTATION:
                                case SDBLParser.RECORDAUTONUMBER:
                                case SDBLParser.REFPRESENTATION:
                                case SDBLParser.POW:
                                case SDBLParser.ROUND:
                                case SDBLParser.SECOND:
                                case SDBLParser.SIN:
                                case SDBLParser.SQRT:
                                case SDBLParser.STOREDDATASIZE:
                                case SDBLParser.STRING:
                                case SDBLParser.STRINGLENGTH:
                                case SDBLParser.STRFIND:
                                case SDBLParser.STRREPLACE:
                                case SDBLParser.SUBSTRING:
                                case SDBLParser.SUM:
                                case SDBLParser.TAN:
                                case SDBLParser.TENDAYS:
                                case SDBLParser.TRIMALL:
                                case SDBLParser.TRIML:
                                case SDBLParser.TRIMR:
                                case SDBLParser.TYPE:
                                case SDBLParser.UPPER:
                                case SDBLParser.VALUE:
                                case SDBLParser.VALUETYPE:
                                case SDBLParser.WEEK:
                                case SDBLParser.WEEKDAY:
                                case SDBLParser.YEAR:
                                case SDBLParser.UUID:
                                case SDBLParser.ACCOUNTING_REGISTER_TYPE:
                                case SDBLParser.ACCUMULATION_REGISTER_TYPE:
                                case SDBLParser.BUSINESS_PROCESS_TYPE:
                                case SDBLParser.CALCULATION_REGISTER_TYPE:
                                case SDBLParser.CATALOG_TYPE:
                                case SDBLParser.CHART_OF_ACCOUNTS_TYPE:
                                case SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE:
                                case SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE:
                                case SDBLParser.CONSTANT_TYPE:
                                case SDBLParser.DOCUMENT_TYPE:
                                case SDBLParser.DOCUMENT_JOURNAL_TYPE:
                                case SDBLParser.ENUM_TYPE:
                                case SDBLParser.EXCHANGE_PLAN_TYPE:
                                case SDBLParser.EXTERNAL_DATA_SOURCE_TYPE:
                                case SDBLParser.FILTER_CRITERION_TYPE:
                                case SDBLParser.INFORMATION_REGISTER_TYPE:
                                case SDBLParser.SEQUENCE_TYPE:
                                case SDBLParser.TASK_TYPE:
                                case SDBLParser.ROUTEPOINT_FIELD:
                                case SDBLParser.INDEX:
                                case SDBLParser.GROUP:
                                case SDBLParser.ORDER:
                                case SDBLParser.SET:
                                case SDBLParser.RIGHT:
                                case SDBLParser.LEFT:
                                case SDBLParser.INNER:
                                case SDBLParser.FULL:
                                case SDBLParser.JOIN:
                                case SDBLParser.OUTER:
                                case SDBLParser.FOR:
                                case SDBLParser.UPDATE:
                                case SDBLParser.ALL:
                                case SDBLParser.UNION:
                                case SDBLParser.IDENTIFIER:
                                case SDBLParser.ACTUAL_ACTION_PERIOD_VT:
                                case SDBLParser.BALANCE_VT:
                                case SDBLParser.BALANCE_AND_TURNOVERS_VT:
                                case SDBLParser.BOUNDARIES_VT:
                                case SDBLParser.DR_CR_TURNOVERS_VT:
                                case SDBLParser.EXT_DIMENSIONS_VT:
                                case SDBLParser.RECORDS_WITH_EXT_DIMENSIONS_VT:
                                case SDBLParser.SCHEDULE_DATA_VT:
                                case SDBLParser.SLICEFIRST_VT:
                                case SDBLParser.SLICELAST_VT:
                                case SDBLParser.TASK_BY_PERFORMER_VT:
                                case SDBLParser.TURNOVERS_VT:
                                    {
                                        {
                                            this.state = 846;
                                            this.errorHandler.sync(this);
                                            switch (
                                                this.interpreter.adaptivePredict(this.tokenStream, 84, this.context)
                                            ) {
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
                                            this.errorHandler.sync(this);
                                            switch (
                                                this.interpreter.adaptivePredict(this.tokenStream, 85, this.context)
                                            ) {
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
                                case SDBLParser.LPAREN:
                                    {
                                        {
                                            this.state = 851;
                                            this.match(SDBLParser.LPAREN);
                                            this.state = 856;
                                            this.errorHandler.sync(this);
                                            switch (
                                                this.interpreter.adaptivePredict(this.tokenStream, 86, this.context)
                                            ) {
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
                                            this.errorHandler.sync(this);
                                            switch (
                                                this.interpreter.adaptivePredict(this.tokenStream, 87, this.context)
                                            ) {
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
                                    throw new antlr.NoViableAltException(this);
                            }
                            this.state = 867;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (((_la - 144) & ~0x1f) === 0 && ((1 << (_la - 144)) & 31) !== 0) {
                                {
                                    {
                                        this.state = 864;
                                        localContext._joinPart = this.joinPart();
                                        localContext._joins.push(localContext._joinPart);
                                    }
                                }
                                this.state = 869;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public table(): TableContext {
        let localContext = new TableContext(this.context, this.state);
        this.enterRule(localContext, 96, SDBLParser.RULE_table);
        try {
            this.state = 878;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 91, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 872;
                        this.mdo();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 873;
                        this.mdo();
                        this.state = 874;
                        this.match(SDBLParser.DOT);
                        this.state = 875;
                        localContext._objectTableName = this.identifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 877;
                        localContext._tableName = this.identifier();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public virtualTable(): VirtualTableContext {
        let localContext = new VirtualTableContext(this.context, this.state);
        this.enterRule(localContext, 98, SDBLParser.RULE_virtualTable);
        let _la: number;
        try {
            this.state = 905;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 880;
                            this.mdo();
                            this.state = 881;
                            this.match(SDBLParser.DOT);
                            this.state = 882;
                            localContext._virtualTableName = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(((_la - 163) & ~0x1f) === 0 && ((1 << (_la - 163)) & 4095) !== 0)) {
                                localContext._virtualTableName = this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 894;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 4) {
                                {
                                    this.state = 883;
                                    this.match(SDBLParser.LPAREN);
                                    this.state = 884;
                                    localContext._virtualTableParameter = this.virtualTableParameter();
                                    localContext._virtualTableParameters.push(localContext._virtualTableParameter);
                                    this.state = 889;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 7) {
                                        {
                                            {
                                                this.state = 885;
                                                this.match(SDBLParser.COMMA);
                                                this.state = 886;
                                                localContext._virtualTableParameter = this.virtualTableParameter();
                                                localContext._virtualTableParameters.push(
                                                    localContext._virtualTableParameter
                                                );
                                            }
                                        }
                                        this.state = 891;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                    this.state = 892;
                                    this.match(SDBLParser.RPAREN);
                                }
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 896;
                            localContext._type_ = this.match(SDBLParser.FILTER_CRITERION_TYPE);
                            this.state = 897;
                            this.match(SDBLParser.DOT);
                            this.state = 898;
                            localContext._tableName = this.identifier();
                            this.state = 899;
                            this.match(SDBLParser.LPAREN);
                            this.state = 901;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public virtualTableParameter(): VirtualTableParameterContext {
        let localContext = new VirtualTableParameterContext(this.context, this.state);
        this.enterRule(localContext, 100, SDBLParser.RULE_virtualTableParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 908;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public parameterTable(): ParameterTableContext {
        let localContext = new ParameterTableContext(this.context, this.state);
        this.enterRule(localContext, 102, SDBLParser.RULE_parameterTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 910;
                this.parameter();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public externalDataSourceTable(): ExternalDataSourceTableContext {
        let localContext = new ExternalDataSourceTableContext(this.context, this.state);
        this.enterRule(localContext, 104, SDBLParser.RULE_externalDataSourceTable);
        try {
            this.state = 928;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
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
                        localContext._tableName = this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
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
                        localContext._cubeName = this.identifier();
                        this.state = 923;
                        this.match(SDBLParser.DOT);
                        this.state = 924;
                        this.match(SDBLParser.EDS_CUBE_DIMTABLE);
                        this.state = 925;
                        this.match(SDBLParser.DOT);
                        this.state = 926;
                        localContext._tableName = this.identifier();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public joinPart(): JoinPartContext {
        let localContext = new JoinPartContext(this.context, this.state);
        this.enterRule(localContext, 106, SDBLParser.RULE_joinPart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 948;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SDBLParser.RIGHT:
                        {
                            {
                                this.state = 930;
                                localContext._joinType = this.match(SDBLParser.RIGHT);
                                this.state = 932;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 149) {
                                    {
                                        this.state = 931;
                                        localContext._outerJoin = this.match(SDBLParser.OUTER);
                                    }
                                }

                                this.state = 934;
                                this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    case SDBLParser.LEFT:
                        {
                            {
                                this.state = 935;
                                localContext._joinType = this.match(SDBLParser.LEFT);
                                this.state = 937;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 149) {
                                    {
                                        this.state = 936;
                                        localContext._outerJoin = this.match(SDBLParser.OUTER);
                                    }
                                }

                                this.state = 939;
                                this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    case SDBLParser.FULL:
                        {
                            {
                                this.state = 940;
                                localContext._joinType = this.match(SDBLParser.FULL);
                                this.state = 942;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 149) {
                                    {
                                        this.state = 941;
                                        localContext._outerJoin = this.match(SDBLParser.OUTER);
                                    }
                                }

                                this.state = 944;
                                this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    case SDBLParser.INNER:
                        {
                            {
                                this.state = 945;
                                localContext._joinType = this.match(SDBLParser.INNER);
                                this.state = 946;
                                this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    case SDBLParser.JOIN:
                        {
                            {
                                this.state = 947;
                                localContext._joinType = this.match(SDBLParser.JOIN);
                            }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 950;
                localContext._source = this.dataSource();
                this.state = 951;
                _la = this.tokenStream.LA(1);
                if (!(_la === 46 || _la === 49)) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 952;
                localContext._condition = this.logicalExpression();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public alias(): AliasContext {
        let localContext = new AliasContext(this.context, this.state);
        this.enterRule(localContext, 108, SDBLParser.RULE_alias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 955;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                        this.state = 954;
                        this.match(SDBLParser.AS);
                    }
                }

                this.state = 957;
                localContext._name = this.identifier();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public datePart(): DatePartContext {
        let localContext = new DatePartContext(this.context, this.state);
        this.enterRule(localContext, 110, SDBLParser.RULE_datePart);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 961;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SDBLParser.AMPERSAND:
                        {
                            this.state = 959;
                            this.parameter();
                        }
                        break;
                    case SDBLParser.DECIMAL:
                        {
                            this.state = 960;
                            this.match(SDBLParser.DECIMAL);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public multiString(): MultiStringContext {
        let localContext = new MultiStringContext(this.context, this.state);
        this.enterRule(localContext, 112, SDBLParser.RULE_multiString);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 964;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 963;
                                    this.match(SDBLParser.STR);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 966;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public sign(): SignContext {
        let localContext = new SignContext(this.context, this.state);
        this.enterRule(localContext, 114, SDBLParser.RULE_sign);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 968;
                _la = this.tokenStream.LA(1);
                if (!(_la === 9 || _la === 10)) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 116, SDBLParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 970;
                _la = this.tokenStream.LA(1);
                if (
                    !(
                        (((_la - 31) & ~0x1f) === 0 && ((1 << (_la - 31)) & 4165469189) !== 0) ||
                        (((_la - 63) & ~0x1f) === 0 && ((1 << (_la - 63)) & 4294967295) !== 0) ||
                        (((_la - 95) & ~0x1f) === 0 && ((1 << (_la - 95)) & 4294967295) !== 0) ||
                        (((_la - 127) & ~0x1f) === 0 && ((1 << (_la - 127)) & 134168575) !== 0) ||
                        (((_la - 160) & ~0x1f) === 0 && ((1 << (_la - 160)) & 32761) !== 0)
                    )
                ) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public parameter(): ParameterContext {
        let localContext = new ParameterContext(this.context, this.state);
        this.enterRule(localContext, 118, SDBLParser.RULE_parameter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 972;
                this.match(SDBLParser.AMPERSAND);
                this.state = 973;
                localContext._name = this.match(SDBLParser.PARAMETER_IDENTIFIER);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public mdo(): MdoContext {
        let localContext = new MdoContext(this.context, this.state);
        this.enterRule(localContext, 120, SDBLParser.RULE_mdo);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 975;
                localContext._type_ = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if (!(((_la - 119) & ~0x1f) === 0 && ((1 << (_la - 119)) & 262143) !== 0)) {
                    localContext._type_ = this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 976;
                this.match(SDBLParser.DOT);
                this.state = 977;
                localContext._tableName = this.identifier();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
            case 26:
                return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }

    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
            case 0:
                return this.precpred(this.context, 1);
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

    private static __ATN: antlr.ATN;

    public static get _ATN(): antlr.ATN {
        if (!SDBLParser.__ATN) {
            SDBLParser.__ATN = new antlr.ATNDeserializer().deserialize(SDBLParser._serializedATN);
        }

        return SDBLParser.__ATN;
    }

    private static readonly vocabulary = new antlr.Vocabulary(SDBLParser.literalNames, SDBLParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SDBLParser.vocabulary;
    }

    private static readonly decisionsToDFA = SDBLParser._ATN.decisionToState.map(
        (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index)
    );
}

export class QueryPackageContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public queries(): QueriesContext[];

    public queries(i: number): QueriesContext | null;

    public queries(i?: number): QueriesContext[] | QueriesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QueriesContext);
        }

        return this.getRuleContext(i, QueriesContext);
    }

    public EOF(): antlr.TerminalNode {
        return this.getToken(SDBLParser.EOF, 0)!;
    }

    public SEMICOLON(): antlr.TerminalNode[];

    public SEMICOLON(i: number): antlr.TerminalNode | null;

    public SEMICOLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.SEMICOLON);
        } else {
            return this.getToken(SDBLParser.SEMICOLON, i);
        }
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_queryPackage;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterQueryPackage) {
            listener.enterQueryPackage(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitQueryPackage) {
            listener.exitQueryPackage(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitQueryPackage) {
            return visitor.visitQueryPackage(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class QueriesContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public selectQuery(): SelectQueryContext | null {
        return this.getRuleContext(0, SelectQueryContext);
    }

    public dropTableQuery(): DropTableQueryContext | null {
        return this.getRuleContext(0, DropTableQueryContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_queries;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterQueries) {
            listener.enterQueries(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitQueries) {
            listener.exitQueries(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitQueries) {
            return visitor.visitQueries(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DropTableQueryContext extends BslParserRuleContext {
    public _temporaryTableName?: IdentifierContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public DROP(): antlr.TerminalNode {
        return this.getToken(SDBLParser.DROP, 0)!;
    }

    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_dropTableQuery;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterDropTableQuery) {
            listener.enterDropTableQuery(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitDropTableQuery) {
            listener.exitDropTableQuery(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitDropTableQuery) {
            return visitor.visitDropTableQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SelectQueryContext extends BslParserRuleContext {
    public _autoorder?: Token | null;

    public _orders?: OrderByContext;

    public _totals?: TotalByContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public subquery(): SubqueryContext {
        return this.getRuleContext(0, SubqueryContext)!;
    }

    public AUTOORDER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.AUTOORDER, 0);
    }

    public orderBy(): OrderByContext | null {
        return this.getRuleContext(0, OrderByContext);
    }

    public totalBy(): TotalByContext | null {
        return this.getRuleContext(0, TotalByContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_selectQuery;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterSelectQuery) {
            listener.enterSelectQuery(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitSelectQuery) {
            listener.exitSelectQuery(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitSelectQuery) {
            return visitor.visitSelectQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubqueryContext extends BslParserRuleContext {
    public _main?: QueryContext;

    public _union?: UnionContext;

    public _unions: UnionContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }

    public orderBy(): OrderByContext | null {
        return this.getRuleContext(0, OrderByContext);
    }

    public union(): UnionContext[];

    public union(i: number): UnionContext | null;

    public union(i?: number): UnionContext[] | UnionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UnionContext);
        }

        return this.getRuleContext(i, UnionContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_subquery;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterSubquery) {
            listener.enterSubquery(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitSubquery) {
            listener.exitSubquery(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitSubquery) {
            return visitor.visitSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UnionContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public UNION(): antlr.TerminalNode {
        return this.getToken(SDBLParser.UNION, 0)!;
    }

    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }

    public ALL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ALL, 0);
    }

    public orderBy(): OrderByContext | null {
        return this.getRuleContext(0, OrderByContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_union;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterUnion) {
            listener.enterUnion(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitUnion) {
            listener.exitUnion(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitUnion) {
            return visitor.visitUnion(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class QueryContext extends BslParserRuleContext {
    public _columns?: SelectedFieldsContext;

    public _temporaryTableName?: IdentifierContext;

    public _from_?: DataSourcesContext;

    public _where?: LogicalExpressionContext;

    public _groupBy?: GroupByItemContext;

    public _having?: LogicalExpressionContext;

    public _forUpdate?: MdoContext;

    public _indexingItem?: IndexingItemContext;

    public _indexes: IndexingItemContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public SELECT(): antlr.TerminalNode {
        return this.getToken(SDBLParser.SELECT, 0)!;
    }

    public selectedFields(): SelectedFieldsContext {
        return this.getRuleContext(0, SelectedFieldsContext)!;
    }

    public limitations(): LimitationsContext | null {
        return this.getRuleContext(0, LimitationsContext);
    }

    public INTO(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.INTO, 0);
    }

    public FROM(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FROM, 0);
    }

    public WHERE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.WHERE, 0);
    }

    public GROUP(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.GROUP, 0);
    }

    public HAVING(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HAVING, 0);
    }

    public FOR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FOR, 0);
    }

    public UPDATE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.UPDATE, 0);
    }

    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.INDEX, 0);
    }

    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }

    public dataSources(): DataSourcesContext | null {
        return this.getRuleContext(0, DataSourcesContext);
    }

    public logicalExpression(): LogicalExpressionContext[];

    public logicalExpression(i: number): LogicalExpressionContext | null;

    public logicalExpression(i?: number): LogicalExpressionContext[] | LogicalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalExpressionContext);
        }

        return this.getRuleContext(i, LogicalExpressionContext);
    }

    public BY_EN(): antlr.TerminalNode[];

    public BY_EN(i: number): antlr.TerminalNode | null;

    public BY_EN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.BY_EN);
        } else {
            return this.getToken(SDBLParser.BY_EN, i);
        }
    }

    public PO_RU(): antlr.TerminalNode[];

    public PO_RU(i: number): antlr.TerminalNode | null;

    public PO_RU(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.PO_RU);
        } else {
            return this.getToken(SDBLParser.PO_RU, i);
        }
    }

    public groupByItem(): GroupByItemContext | null {
        return this.getRuleContext(0, GroupByItemContext);
    }

    public indexingItem(): IndexingItemContext[];

    public indexingItem(i: number): IndexingItemContext | null;

    public indexingItem(i?: number): IndexingItemContext[] | IndexingItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IndexingItemContext);
        }

        return this.getRuleContext(i, IndexingItemContext);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public mdo(): MdoContext | null {
        return this.getRuleContext(0, MdoContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_query;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LimitationsContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public top(): TopContext | null {
        return this.getRuleContext(0, TopContext);
    }

    public DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DISTINCT, 0);
    }

    public ALLOWED(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ALLOWED, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_limitations;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterLimitations) {
            listener.enterLimitations(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitLimitations) {
            listener.exitLimitations(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitLimitations) {
            return visitor.visitLimitations(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TopContext extends BslParserRuleContext {
    public _count?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public TOP(): antlr.TerminalNode {
        return this.getToken(SDBLParser.TOP, 0)!;
    }

    public DECIMAL(): antlr.TerminalNode {
        return this.getToken(SDBLParser.DECIMAL, 0)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_top;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterTop) {
            listener.enterTop(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitTop) {
            listener.exitTop(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitTop) {
            return visitor.visitTop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SelectedFieldsContext extends BslParserRuleContext {
    public _selectedField?: SelectedFieldContext;

    public _fields: SelectedFieldContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public selectedField(): SelectedFieldContext[];

    public selectedField(i: number): SelectedFieldContext | null;

    public selectedField(i?: number): SelectedFieldContext[] | SelectedFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectedFieldContext);
        }

        return this.getRuleContext(i, SelectedFieldContext);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_selectedFields;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterSelectedFields) {
            listener.enterSelectedFields(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitSelectedFields) {
            listener.exitSelectedFields(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitSelectedFields) {
            return visitor.visitSelectedFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SelectedFieldContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public asteriskField(): AsteriskFieldContext | null {
        return this.getRuleContext(0, AsteriskFieldContext);
    }

    public columnField(): ColumnFieldContext | null {
        return this.getRuleContext(0, ColumnFieldContext);
    }

    public emptyTableField(): EmptyTableFieldContext | null {
        return this.getRuleContext(0, EmptyTableFieldContext);
    }

    public inlineTableField(): InlineTableFieldContext | null {
        return this.getRuleContext(0, InlineTableFieldContext);
    }

    public expressionField(): ExpressionFieldContext | null {
        return this.getRuleContext(0, ExpressionFieldContext);
    }

    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_selectedField;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterSelectedField) {
            listener.enterSelectedField(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitSelectedField) {
            listener.exitSelectedField(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitSelectedField) {
            return visitor.visitSelectedField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AsteriskFieldContext extends BslParserRuleContext {
    public _tableName?: IdentifierContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public MUL(): antlr.TerminalNode {
        return this.getToken(SDBLParser.MUL, 0)!;
    }

    public DOT(): antlr.TerminalNode[];

    public DOT(i: number): antlr.TerminalNode | null;

    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.DOT);
        } else {
            return this.getToken(SDBLParser.DOT, i);
        }
    }

    public identifier(): IdentifierContext[];

    public identifier(i: number): IdentifierContext | null;

    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_asteriskField;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterAsteriskField) {
            listener.enterAsteriskField(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitAsteriskField) {
            listener.exitAsteriskField(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitAsteriskField) {
            return visitor.visitAsteriskField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExpressionFieldContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_expressionField;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterExpressionField) {
            listener.enterExpressionField(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitExpressionField) {
            listener.exitExpressionField(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionField) {
            return visitor.visitExpressionField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnFieldContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public NULL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.NULL, 0);
    }

    public recordAutoNumberFunction(): RecordAutoNumberFunctionContext | null {
        return this.getRuleContext(0, RecordAutoNumberFunctionContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_columnField;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterColumnField) {
            listener.enterColumnField(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitColumnField) {
            listener.exitColumnField(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitColumnField) {
            return visitor.visitColumnField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class EmptyTableFieldContext extends BslParserRuleContext {
    public _emptyTable?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public DOT(): antlr.TerminalNode {
        return this.getToken(SDBLParser.DOT, 0)!;
    }

    public LPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0)!;
    }

    public emptyTableColumns(): EmptyTableColumnsContext {
        return this.getRuleContext(0, EmptyTableColumnsContext)!;
    }

    public RPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0)!;
    }

    public EMPTYTABLE(): antlr.TerminalNode {
        return this.getToken(SDBLParser.EMPTYTABLE, 0)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_emptyTableField;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterEmptyTableField) {
            listener.enterEmptyTableField(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitEmptyTableField) {
            listener.exitEmptyTableField(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitEmptyTableField) {
            return visitor.visitEmptyTableField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class EmptyTableColumnsContext extends BslParserRuleContext {
    public _alias?: AliasContext;

    public _columns: AliasContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public alias(): AliasContext[];

    public alias(i: number): AliasContext | null;

    public alias(i?: number): AliasContext[] | AliasContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AliasContext);
        }

        return this.getRuleContext(i, AliasContext);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_emptyTableColumns;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterEmptyTableColumns) {
            listener.enterEmptyTableColumns(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitEmptyTableColumns) {
            listener.exitEmptyTableColumns(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitEmptyTableColumns) {
            return visitor.visitEmptyTableColumns(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class InlineTableFieldContext extends BslParserRuleContext {
    public _inlineTable?: ColumnContext;

    public _inlineTableFields?: SelectedFieldsContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public DOT(): antlr.TerminalNode {
        return this.getToken(SDBLParser.DOT, 0)!;
    }

    public LPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0)!;
    }

    public RPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0)!;
    }

    public column(): ColumnContext {
        return this.getRuleContext(0, ColumnContext)!;
    }

    public selectedFields(): SelectedFieldsContext {
        return this.getRuleContext(0, SelectedFieldsContext)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_inlineTableField;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterInlineTableField) {
            listener.enterInlineTableField(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitInlineTableField) {
            listener.exitInlineTableField(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitInlineTableField) {
            return visitor.visitInlineTableField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RecordAutoNumberFunctionContext extends BslParserRuleContext {
    public _doCall?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public LPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0)!;
    }

    public RPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0)!;
    }

    public RECORDAUTONUMBER(): antlr.TerminalNode {
        return this.getToken(SDBLParser.RECORDAUTONUMBER, 0)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_recordAutoNumberFunction;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterRecordAutoNumberFunction) {
            listener.enterRecordAutoNumberFunction(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitRecordAutoNumberFunction) {
            listener.exitRecordAutoNumberFunction(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitRecordAutoNumberFunction) {
            return visitor.visitRecordAutoNumberFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class GroupByItemContext extends BslParserRuleContext {
    public _expressionList?: ExpressionListContext;

    public _groupingSet: ExpressionListContext[] = [];

    public _expression?: ExpressionContext;

    public _groupBy: ExpressionContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public GROUPING(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.GROUPING, 0);
    }

    public SET(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SET, 0);
    }

    public LPAREN(): antlr.TerminalNode[];

    public LPAREN(i: number): antlr.TerminalNode | null;

    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.LPAREN);
        } else {
            return this.getToken(SDBLParser.LPAREN, i);
        }
    }

    public RPAREN(): antlr.TerminalNode[];

    public RPAREN(i: number): antlr.TerminalNode | null;

    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.RPAREN);
        } else {
            return this.getToken(SDBLParser.RPAREN, i);
        }
    }

    public expressionList(): ExpressionListContext[];

    public expressionList(i: number): ExpressionListContext | null;

    public expressionList(i?: number): ExpressionListContext[] | ExpressionListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionListContext);
        }

        return this.getRuleContext(i, ExpressionListContext);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public expression(): ExpressionContext[];

    public expression(i: number): ExpressionContext | null;

    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_groupByItem;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterGroupByItem) {
            listener.enterGroupByItem(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitGroupByItem) {
            listener.exitGroupByItem(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitGroupByItem) {
            return visitor.visitGroupByItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IndexingItemContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public parameter(): ParameterContext | null {
        return this.getRuleContext(0, ParameterContext);
    }

    public column(): ColumnContext | null {
        return this.getRuleContext(0, ColumnContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_indexingItem;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterIndexingItem) {
            listener.enterIndexingItem(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitIndexingItem) {
            listener.exitIndexingItem(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitIndexingItem) {
            return visitor.visitIndexingItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class OrderByContext extends BslParserRuleContext {
    public _ordersByExpession?: OrdersByExpessionContext;

    public _orders: OrdersByExpessionContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public ORDER(): antlr.TerminalNode {
        return this.getToken(SDBLParser.ORDER, 0)!;
    }

    public BY_EN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BY_EN, 0);
    }

    public PO_RU(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.PO_RU, 0);
    }

    public ordersByExpession(): OrdersByExpessionContext[];

    public ordersByExpession(i: number): OrdersByExpessionContext | null;

    public ordersByExpession(i?: number): OrdersByExpessionContext[] | OrdersByExpessionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrdersByExpessionContext);
        }

        return this.getRuleContext(i, OrdersByExpessionContext);
    }

    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.COMMA, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_orderBy;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterOrderBy) {
            listener.enterOrderBy(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitOrderBy) {
            listener.exitOrderBy(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitOrderBy) {
            return visitor.visitOrderBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class OrdersByExpessionContext extends BslParserRuleContext {
    public _direction?: Token | null;

    public _hierarchy?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }

    public ASC(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ASC, 0);
    }

    public DESC(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DESC, 0);
    }

    public HIERARCHY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HIERARCHY, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_ordersByExpession;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterOrdersByExpession) {
            listener.enterOrdersByExpession(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitOrdersByExpession) {
            listener.exitOrdersByExpession(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitOrdersByExpession) {
            return visitor.visitOrdersByExpession(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TotalByContext extends BslParserRuleContext {
    public _totalsGroup?: TotalsGroupContext;

    public _totalsGroups: TotalsGroupContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public TOTALS(): antlr.TerminalNode {
        return this.getToken(SDBLParser.TOTALS, 0)!;
    }

    public BY_EN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BY_EN, 0);
    }

    public PO_RU(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.PO_RU, 0);
    }

    public totalsGroup(): TotalsGroupContext[];

    public totalsGroup(i: number): TotalsGroupContext | null;

    public totalsGroup(i?: number): TotalsGroupContext[] | TotalsGroupContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TotalsGroupContext);
        }

        return this.getRuleContext(i, TotalsGroupContext);
    }

    public selectedFields(): SelectedFieldsContext | null {
        return this.getRuleContext(0, SelectedFieldsContext);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_totalBy;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterTotalBy) {
            listener.enterTotalBy(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitTotalBy) {
            listener.exitTotalBy(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitTotalBy) {
            return visitor.visitTotalBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TotalsGroupContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public OVERALL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.OVERALL, 0);
    }

    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }

    public periodic(): PeriodicContext | null {
        return this.getRuleContext(0, PeriodicContext);
    }

    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }

    public HIERARCHY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HIERARCHY, 0);
    }

    public ONLY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ONLY, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_totalsGroup;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterTotalsGroup) {
            listener.enterTotalsGroup(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitTotalsGroup) {
            listener.exitTotalsGroup(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitTotalsGroup) {
            return visitor.visitTotalsGroup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PeriodicContext extends BslParserRuleContext {
    public _periodType?: Token | null;

    public _first?: ExpressionContext;

    public _second?: ExpressionContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public PERIODS(): antlr.TerminalNode {
        return this.getToken(SDBLParser.PERIODS, 0)!;
    }

    public LPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0)!;
    }

    public RPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0)!;
    }

    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SECOND, 0);
    }

    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MINUTE, 0);
    }

    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HOUR, 0);
    }

    public DAY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DAY, 0);
    }

    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.WEEK, 0);
    }

    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MONTH, 0);
    }

    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.QUARTER, 0);
    }

    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.YEAR, 0);
    }

    public TENDAYS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TENDAYS, 0);
    }

    public HALFYEAR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HALFYEAR, 0);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public expression(): ExpressionContext[];

    public expression(i: number): ExpressionContext | null;

    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_periodic;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterPeriodic) {
            listener.enterPeriodic(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitPeriodic) {
            listener.exitPeriodic(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitPeriodic) {
            return visitor.visitPeriodic(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnContext extends BslParserRuleContext {
    public _mdoName?: IdentifierContext;

    public _identifier?: IdentifierContext;

    public _columnNames: IdentifierContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public identifier(): IdentifierContext[];

    public identifier(i: number): IdentifierContext | null;

    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }

    public DOT(): antlr.TerminalNode[];

    public DOT(i: number): antlr.TerminalNode | null;

    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.DOT);
        } else {
            return this.getToken(SDBLParser.DOT, i);
        }
    }

    public mdo(): MdoContext | null {
        return this.getRuleContext(0, MdoContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_column;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterColumn) {
            listener.enterColumn(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitColumn) {
            listener.exitColumn(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitColumn) {
            return visitor.visitColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExpressionContext extends BslParserRuleContext {
    public _binaryOperation?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public primitiveExpression(): PrimitiveExpressionContext | null {
        return this.getRuleContext(0, PrimitiveExpressionContext);
    }

    public functionCall(): FunctionCallContext | null {
        return this.getRuleContext(0, FunctionCallContext);
    }

    public caseExpression(): CaseExpressionContext | null {
        return this.getRuleContext(0, CaseExpressionContext);
    }

    public column(): ColumnContext | null {
        return this.getRuleContext(0, ColumnContext);
    }

    public bracketExpression(): BracketExpressionContext | null {
        return this.getRuleContext(0, BracketExpressionContext);
    }

    public unaryExpression(): UnaryExpressionContext | null {
        return this.getRuleContext(0, UnaryExpressionContext);
    }

    public expression(): ExpressionContext[];

    public expression(i: number): ExpressionContext | null;

    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }

    public MUL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MUL, 0);
    }

    public QUOTIENT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.QUOTIENT, 0);
    }

    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.PLUS, 0);
    }

    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MINUS, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_expression;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PrimitiveExpressionContext extends BslParserRuleContext {
    public _booleanValue?: Token | null;

    public _year?: DatePartContext;

    public _month?: DatePartContext;

    public _day?: DatePartContext;

    public _hour?: DatePartContext;

    public _minute?: DatePartContext;

    public _second?: DatePartContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public NULL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.NULL, 0);
    }

    public UNDEFINED(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.UNDEFINED, 0);
    }

    public multiString(): MultiStringContext | null {
        return this.getRuleContext(0, MultiStringContext);
    }

    public DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DECIMAL, 0);
    }

    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FLOAT, 0);
    }

    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TRUE, 0);
    }

    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FALSE, 0);
    }

    public DATETIME(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DATETIME, 0);
    }

    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public datePart(): DatePartContext[];

    public datePart(i: number): DatePartContext | null;

    public datePart(i?: number): DatePartContext[] | DatePartContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DatePartContext);
        }

        return this.getRuleContext(i, DatePartContext);
    }

    public parameter(): ParameterContext | null {
        return this.getRuleContext(0, ParameterContext);
    }

    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TYPE, 0);
    }

    public mdo(): MdoContext | null {
        return this.getRuleContext(0, MdoContext);
    }

    public STRING(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STRING, 0);
    }

    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BOOLEAN, 0);
    }

    public DATE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DATE, 0);
    }

    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.NUMBER, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_primitiveExpression;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterPrimitiveExpression) {
            listener.enterPrimitiveExpression(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitPrimitiveExpression) {
            listener.exitPrimitiveExpression(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitPrimitiveExpression) {
            return visitor.visitPrimitiveExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CaseExpressionContext extends BslParserRuleContext {
    public _caseExp?: ExpressionContext;

    public _elseExp?: LogicalExpressionContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public CASE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CASE, 0);
    }

    public END(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.END, 0);
    }

    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }

    public caseBranch(): CaseBranchContext[];

    public caseBranch(i: number): CaseBranchContext | null;

    public caseBranch(i?: number): CaseBranchContext[] | CaseBranchContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CaseBranchContext);
        }

        return this.getRuleContext(i, CaseBranchContext);
    }

    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ELSE, 0);
    }

    public logicalExpression(): LogicalExpressionContext | null {
        return this.getRuleContext(0, LogicalExpressionContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_caseExpression;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterCaseExpression) {
            listener.enterCaseExpression(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitCaseExpression) {
            listener.exitCaseExpression(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitCaseExpression) {
            return visitor.visitCaseExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CaseBranchContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public WHEN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.WHEN, 0)!;
    }

    public logicalExpression(): LogicalExpressionContext[];

    public logicalExpression(i: number): LogicalExpressionContext | null;

    public logicalExpression(i?: number): LogicalExpressionContext[] | LogicalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalExpressionContext);
        }

        return this.getRuleContext(i, LogicalExpressionContext);
    }

    public THEN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.THEN, 0)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_caseBranch;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterCaseBranch) {
            listener.enterCaseBranch(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitCaseBranch) {
            listener.exitCaseBranch(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitCaseBranch) {
            return visitor.visitCaseBranch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class BracketExpressionContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }

    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public subquery(): SubqueryContext | null {
        return this.getRuleContext(0, SubqueryContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_bracketExpression;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterBracketExpression) {
            listener.enterBracketExpression(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitBracketExpression) {
            listener.exitBracketExpression(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitBracketExpression) {
            return visitor.visitBracketExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UnaryExpressionContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public sign(): SignContext {
        return this.getRuleContext(0, SignContext)!;
    }

    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_unaryExpression;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterUnaryExpression) {
            listener.enterUnaryExpression(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitUnaryExpression) {
            listener.exitUnaryExpression(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitUnaryExpression) {
            return visitor.visitUnaryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FunctionCallContext extends BslParserRuleContext {
    public _identifier?: IdentifierContext;

    public _columnNames: IdentifierContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public aggregateFunctions(): AggregateFunctionsContext | null {
        return this.getRuleContext(0, AggregateFunctionsContext);
    }

    public builtInFunctions(): BuiltInFunctionsContext | null {
        return this.getRuleContext(0, BuiltInFunctionsContext);
    }

    public valueFunction(): ValueFunctionContext | null {
        return this.getRuleContext(0, ValueFunctionContext);
    }

    public DOT(): antlr.TerminalNode[];

    public DOT(i: number): antlr.TerminalNode | null;

    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.DOT);
        } else {
            return this.getToken(SDBLParser.DOT, i);
        }
    }

    public identifier(): IdentifierContext[];

    public identifier(i: number): IdentifierContext | null;

    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }

    public castFunction(): CastFunctionContext | null {
        return this.getRuleContext(0, CastFunctionContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_functionCall;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class BuiltInFunctionsContext extends BslParserRuleContext {
    public _doCall?: Token | null;

    public _string_?: ExpressionContext;

    public _charNo?: ExpressionContext;

    public _count?: ExpressionContext;

    public _date?: ExpressionContext;

    public _periodType?: Token | null;

    public _firstdate?: ExpressionContext;

    public _seconddate?: ExpressionContext;

    public _value?: ExpressionContext;

    public _first?: LogicalExpressionContext;

    public _second?: LogicalExpressionContext;

    public _decimal?: ExpressionContext;

    public _precise?: ExpressionContext;

    public _substring1?: ExpressionContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SUBSTRING, 0);
    }

    public expression(): ExpressionContext[];

    public expression(i: number): ExpressionContext | null;

    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }

    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.YEAR, 0);
    }

    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.QUARTER, 0);
    }

    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MONTH, 0);
    }

    public DAYOFYEAR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DAYOFYEAR, 0);
    }

    public DAY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DAY, 0);
    }

    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.WEEK, 0);
    }

    public WEEKDAY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.WEEKDAY, 0);
    }

    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HOUR, 0);
    }

    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MINUTE, 0);
    }

    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SECOND, 0);
    }

    public BEGINOFPERIOD(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BEGINOFPERIOD, 0);
    }

    public ENDOFPERIOD(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ENDOFPERIOD, 0);
    }

    public TENDAYS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TENDAYS, 0);
    }

    public HALFYEAR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HALFYEAR, 0);
    }

    public DATEADD(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DATEADD, 0);
    }

    public DATEDIFF(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DATEDIFF, 0);
    }

    public VALUETYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.VALUETYPE, 0);
    }

    public PRESENTATION(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.PRESENTATION, 0);
    }

    public REFPRESENTATION(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.REFPRESENTATION, 0);
    }

    public GROUPEDBY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.GROUPEDBY, 0);
    }

    public ISNULL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ISNULL, 0);
    }

    public logicalExpression(): LogicalExpressionContext[];

    public logicalExpression(i: number): LogicalExpressionContext | null;

    public logicalExpression(i?: number): LogicalExpressionContext[] | LogicalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalExpressionContext);
        }

        return this.getRuleContext(i, LogicalExpressionContext);
    }

    public ACOS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ACOS, 0);
    }

    public ASIN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ASIN, 0);
    }

    public ATAN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ATAN, 0);
    }

    public COS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.COS, 0);
    }

    public SIN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SIN, 0);
    }

    public TAN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TAN, 0);
    }

    public LOG(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LOG, 0);
    }

    public LOG10(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LOG10, 0);
    }

    public EXP(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXP, 0);
    }

    public POW(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.POW, 0);
    }

    public SQRT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SQRT, 0);
    }

    public INT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.INT, 0);
    }

    public LOWER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LOWER, 0);
    }

    public STRINGLENGTH(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STRINGLENGTH, 0);
    }

    public TRIMALL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TRIMALL, 0);
    }

    public TRIML(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TRIML, 0);
    }

    public TRIMR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TRIMR, 0);
    }

    public UPPER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.UPPER, 0);
    }

    public ROUND(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ROUND, 0);
    }

    public STOREDDATASIZE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STOREDDATASIZE, 0);
    }

    public UUID(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.UUID, 0);
    }

    public STRFIND(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STRFIND, 0);
    }

    public STRREPLACE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STRREPLACE, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_builtInFunctions;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterBuiltInFunctions) {
            listener.enterBuiltInFunctions(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitBuiltInFunctions) {
            listener.exitBuiltInFunctions(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitBuiltInFunctions) {
            return visitor.visitBuiltInFunctions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AggregateFunctionsContext extends BslParserRuleContext {
    public _doCall?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public logicalExpression(): LogicalExpressionContext | null {
        return this.getRuleContext(0, LogicalExpressionContext);
    }

    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public SUM(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SUM, 0);
    }

    public AVG(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.AVG, 0);
    }

    public MIN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MIN, 0);
    }

    public MAX(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MAX, 0);
    }

    public COUNT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.COUNT, 0);
    }

    public MUL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MUL, 0);
    }

    public DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DISTINCT, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_aggregateFunctions;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterAggregateFunctions) {
            listener.enterAggregateFunctions(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitAggregateFunctions) {
            listener.exitAggregateFunctions(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitAggregateFunctions) {
            return visitor.visitAggregateFunctions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ValueFunctionContext extends BslParserRuleContext {
    public _doCall?: Token | null;

    public _type_?: Token | null;

    public _mdoName?: IdentifierContext;

    public _emptyFer?: Token | null;

    public _predefinedName?: IdentifierContext;

    public _routePointName?: IdentifierContext;

    public _systemName?: IdentifierContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public LPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.LPAREN, 0)!;
    }

    public RPAREN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.RPAREN, 0)!;
    }

    public VALUE(): antlr.TerminalNode {
        return this.getToken(SDBLParser.VALUE, 0)!;
    }

    public DOT(): antlr.TerminalNode[];

    public DOT(i: number): antlr.TerminalNode | null;

    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.DOT);
        } else {
            return this.getToken(SDBLParser.DOT, i);
        }
    }

    public ROUTEPOINT_FIELD(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ROUTEPOINT_FIELD, 0);
    }

    public mdo(): MdoContext | null {
        return this.getRuleContext(0, MdoContext);
    }

    public identifier(): IdentifierContext[];

    public identifier(i: number): IdentifierContext | null;

    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }

    public EMPTYREF(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EMPTYREF, 0);
    }

    public BUSINESS_PROCESS_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BUSINESS_PROCESS_TYPE, 0);
    }

    public CATALOG_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CATALOG_TYPE, 0);
    }

    public DOCUMENT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DOCUMENT_TYPE, 0);
    }

    public FILTER_CRITERION_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FILTER_CRITERION_TYPE, 0);
    }

    public EXCHANGE_PLAN_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXCHANGE_PLAN_TYPE, 0);
    }

    public ENUM_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ENUM_TYPE, 0);
    }

    public CHART_OF_CHARACTERISTIC_TYPES_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE, 0);
    }

    public CHART_OF_ACCOUNTS_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CHART_OF_ACCOUNTS_TYPE, 0);
    }

    public CHART_OF_CALCULATION_TYPES_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE, 0);
    }

    public TASK_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TASK_TYPE, 0);
    }

    public EXTERNAL_DATA_SOURCE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXTERNAL_DATA_SOURCE_TYPE, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_valueFunction;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterValueFunction) {
            listener.enterValueFunction(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitValueFunction) {
            listener.exitValueFunction(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitValueFunction) {
            return visitor.visitValueFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CastFunctionContext extends BslParserRuleContext {
    public _doCall?: Token | null;

    public _value?: ExpressionContext;

    public _type_?: Token | null;

    public _len?: Token | null;

    public _prec?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public LPAREN(): antlr.TerminalNode[];

    public LPAREN(i: number): antlr.TerminalNode | null;

    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.LPAREN);
        } else {
            return this.getToken(SDBLParser.LPAREN, i);
        }
    }

    public AS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.AS, 0);
    }

    public RPAREN(): antlr.TerminalNode[];

    public RPAREN(i: number): antlr.TerminalNode | null;

    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.RPAREN);
        } else {
            return this.getToken(SDBLParser.RPAREN, i);
        }
    }

    public CAST(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CAST, 0);
    }

    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }

    public mdo(): MdoContext | null {
        return this.getRuleContext(0, MdoContext);
    }

    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BOOLEAN, 0);
    }

    public DATE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DATE, 0);
    }

    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.NUMBER, 0);
    }

    public STRING(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STRING, 0);
    }

    public DECIMAL(): antlr.TerminalNode[];

    public DECIMAL(i: number): antlr.TerminalNode | null;

    public DECIMAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.DECIMAL);
        } else {
            return this.getToken(SDBLParser.DECIMAL, i);
        }
    }

    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.COMMA, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_castFunction;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterCastFunction) {
            listener.enterCastFunction(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitCastFunction) {
            listener.exitCastFunction(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitCastFunction) {
            return visitor.visitCastFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LogicalExpressionContext extends BslParserRuleContext {
    public _predicate?: PredicateContext;

    public _condidions: PredicateContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public predicate(): PredicateContext[];

    public predicate(i: number): PredicateContext | null;

    public predicate(i?: number): PredicateContext[] | PredicateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PredicateContext);
        }

        return this.getRuleContext(i, PredicateContext);
    }

    public AND(): antlr.TerminalNode[];

    public AND(i: number): antlr.TerminalNode | null;

    public AND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.AND);
        } else {
            return this.getToken(SDBLParser.AND, i);
        }
    }

    public OR(): antlr.TerminalNode[];

    public OR(i: number): antlr.TerminalNode | null;

    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.OR);
        } else {
            return this.getToken(SDBLParser.OR, i);
        }
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_logicalExpression;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterLogicalExpression) {
            listener.enterLogicalExpression(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitLogicalExpression) {
            listener.exitLogicalExpression(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalExpression) {
            return visitor.visitLogicalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PredicateContext extends BslParserRuleContext {
    public _booleanPredicate?: ExpressionContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public likePredicate(): LikePredicateContext | null {
        return this.getRuleContext(0, LikePredicateContext);
    }

    public isNullPredicate(): IsNullPredicateContext | null {
        return this.getRuleContext(0, IsNullPredicateContext);
    }

    public comparePredicate(): ComparePredicateContext | null {
        return this.getRuleContext(0, ComparePredicateContext);
    }

    public betweenPredicate(): BetweenPredicateContext | null {
        return this.getRuleContext(0, BetweenPredicateContext);
    }

    public inPredicate(): InPredicateContext | null {
        return this.getRuleContext(0, InPredicateContext);
    }

    public refsPredicate(): RefsPredicateContext | null {
        return this.getRuleContext(0, RefsPredicateContext);
    }

    public NOT(): antlr.TerminalNode[];

    public NOT(i: number): antlr.TerminalNode | null;

    public NOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.NOT);
        } else {
            return this.getToken(SDBLParser.NOT, i);
        }
    }

    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }

    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public logicalExpression(): LogicalExpressionContext | null {
        return this.getRuleContext(0, LogicalExpressionContext);
    }

    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_predicate;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterPredicate) {
            listener.enterPredicate(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitPredicate) {
            listener.exitPredicate(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LikePredicateContext extends BslParserRuleContext {
    public _escape?: MultiStringContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public expression(): ExpressionContext[];

    public expression(i: number): ExpressionContext | null;

    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }

    public LIKE(): antlr.TerminalNode {
        return this.getToken(SDBLParser.LIKE, 0)!;
    }

    public NOT(): antlr.TerminalNode[];

    public NOT(i: number): antlr.TerminalNode | null;

    public NOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.NOT);
        } else {
            return this.getToken(SDBLParser.NOT, i);
        }
    }

    public ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ESCAPE, 0);
    }

    public multiString(): MultiStringContext | null {
        return this.getRuleContext(0, MultiStringContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_likePredicate;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterLikePredicate) {
            listener.enterLikePredicate(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitLikePredicate) {
            listener.exitLikePredicate(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitLikePredicate) {
            return visitor.visitLikePredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IsNullPredicateContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }

    public IS(): antlr.TerminalNode {
        return this.getToken(SDBLParser.IS, 0)!;
    }

    public NULL(): antlr.TerminalNode {
        return this.getToken(SDBLParser.NULL, 0)!;
    }

    public NOT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.NOT, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_isNullPredicate;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterIsNullPredicate) {
            listener.enterIsNullPredicate(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitIsNullPredicate) {
            listener.exitIsNullPredicate(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitIsNullPredicate) {
            return visitor.visitIsNullPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ComparePredicateContext extends BslParserRuleContext {
    public _compareOperation?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public expression(): ExpressionContext[];

    public expression(i: number): ExpressionContext | null;

    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }

    public LESS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LESS, 0);
    }

    public LESS_OR_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LESS_OR_EQUAL, 0);
    }

    public GREATER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.GREATER, 0);
    }

    public GREATER_OR_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.GREATER_OR_EQUAL, 0);
    }

    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ASSIGN, 0);
    }

    public NOT_EQUAL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.NOT_EQUAL, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_comparePredicate;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterComparePredicate) {
            listener.enterComparePredicate(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitComparePredicate) {
            listener.exitComparePredicate(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitComparePredicate) {
            return visitor.visitComparePredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class BetweenPredicateContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public expression(): ExpressionContext[];

    public expression(i: number): ExpressionContext | null;

    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }

    public BETWEEN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.BETWEEN, 0)!;
    }

    public AND(): antlr.TerminalNode {
        return this.getToken(SDBLParser.AND, 0)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_betweenPredicate;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterBetweenPredicate) {
            listener.enterBetweenPredicate(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitBetweenPredicate) {
            listener.exitBetweenPredicate(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitBetweenPredicate) {
            return visitor.visitBetweenPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class InPredicateContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public IN(): antlr.TerminalNode {
        return this.getToken(SDBLParser.IN, 0)!;
    }

    public LPAREN(): antlr.TerminalNode[];

    public LPAREN(i: number): antlr.TerminalNode | null;

    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.LPAREN);
        } else {
            return this.getToken(SDBLParser.LPAREN, i);
        }
    }

    public RPAREN(): antlr.TerminalNode[];

    public RPAREN(i: number): antlr.TerminalNode | null;

    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.RPAREN);
        } else {
            return this.getToken(SDBLParser.RPAREN, i);
        }
    }

    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }

    public subquery(): SubqueryContext | null {
        return this.getRuleContext(0, SubqueryContext);
    }

    public expressionList(): ExpressionListContext[];

    public expressionList(i: number): ExpressionListContext | null;

    public expressionList(i?: number): ExpressionListContext[] | ExpressionListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionListContext);
        }

        return this.getRuleContext(i, ExpressionListContext);
    }

    public NOT(): antlr.TerminalNode[];

    public NOT(i: number): antlr.TerminalNode | null;

    public NOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.NOT);
        } else {
            return this.getToken(SDBLParser.NOT, i);
        }
    }

    public HIERARCHY_FOR_IN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HIERARCHY_FOR_IN, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_inPredicate;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterInPredicate) {
            listener.enterInPredicate(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitInPredicate) {
            listener.exitInPredicate(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitInPredicate) {
            return visitor.visitInPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RefsPredicateContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }

    public REFS(): antlr.TerminalNode {
        return this.getToken(SDBLParser.REFS, 0)!;
    }

    public mdo(): MdoContext {
        return this.getRuleContext(0, MdoContext)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_refsPredicate;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterRefsPredicate) {
            listener.enterRefsPredicate(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitRefsPredicate) {
            listener.exitRefsPredicate(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitRefsPredicate) {
            return visitor.visitRefsPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExpressionListContext extends BslParserRuleContext {
    public _logicalExpression?: LogicalExpressionContext;

    public _exp: LogicalExpressionContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public logicalExpression(): LogicalExpressionContext[];

    public logicalExpression(i: number): LogicalExpressionContext | null;

    public logicalExpression(i?: number): LogicalExpressionContext[] | LogicalExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicalExpressionContext);
        }

        return this.getRuleContext(i, LogicalExpressionContext);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_expressionList;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DataSourcesContext extends BslParserRuleContext {
    public _dataSource?: DataSourceContext;

    public _tables: DataSourceContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public dataSource(): DataSourceContext[];

    public dataSource(i: number): DataSourceContext | null;

    public dataSource(i?: number): DataSourceContext[] | DataSourceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DataSourceContext);
        }

        return this.getRuleContext(i, DataSourceContext);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_dataSources;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterDataSources) {
            listener.enterDataSources(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitDataSources) {
            listener.exitDataSources(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitDataSources) {
            return visitor.visitDataSources(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DataSourceContext extends BslParserRuleContext {
    public _joinPart?: JoinPartContext;

    public _joins: JoinPartContext[] = [];

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public dataSource(): DataSourceContext | null {
        return this.getRuleContext(0, DataSourceContext);
    }

    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public joinPart(): JoinPartContext[];

    public joinPart(i: number): JoinPartContext | null;

    public joinPart(i?: number): JoinPartContext[] | JoinPartContext | null {
        if (i === undefined) {
            return this.getRuleContexts(JoinPartContext);
        }

        return this.getRuleContext(i, JoinPartContext);
    }

    public virtualTable(): VirtualTableContext | null {
        return this.getRuleContext(0, VirtualTableContext);
    }

    public table(): TableContext | null {
        return this.getRuleContext(0, TableContext);
    }

    public parameterTable(): ParameterTableContext | null {
        return this.getRuleContext(0, ParameterTableContext);
    }

    public externalDataSourceTable(): ExternalDataSourceTableContext | null {
        return this.getRuleContext(0, ExternalDataSourceTableContext);
    }

    public subquery(): SubqueryContext | null {
        return this.getRuleContext(0, SubqueryContext);
    }

    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_dataSource;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterDataSource) {
            listener.enterDataSource(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitDataSource) {
            listener.exitDataSource(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitDataSource) {
            return visitor.visitDataSource(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableContext extends BslParserRuleContext {
    public _objectTableName?: IdentifierContext;

    public _tableName?: IdentifierContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public mdo(): MdoContext | null {
        return this.getRuleContext(0, MdoContext);
    }

    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DOT, 0);
    }

    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_table;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterTable) {
            listener.enterTable(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitTable) {
            listener.exitTable(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitTable) {
            return visitor.visitTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class VirtualTableContext extends BslParserRuleContext {
    public _virtualTableName?: Token | null;

    public _virtualTableParameter?: VirtualTableParameterContext;

    public _virtualTableParameters: VirtualTableParameterContext[] = [];

    public _type_?: Token | null;

    public _tableName?: IdentifierContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public mdo(): MdoContext | null {
        return this.getRuleContext(0, MdoContext);
    }

    public DOT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DOT, 0);
    }

    public SLICELAST_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SLICELAST_VT, 0);
    }

    public SLICEFIRST_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SLICEFIRST_VT, 0);
    }

    public BOUNDARIES_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BOUNDARIES_VT, 0);
    }

    public TURNOVERS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TURNOVERS_VT, 0);
    }

    public BALANCE_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BALANCE_VT, 0);
    }

    public BALANCE_AND_TURNOVERS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BALANCE_AND_TURNOVERS_VT, 0);
    }

    public EXT_DIMENSIONS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXT_DIMENSIONS_VT, 0);
    }

    public RECORDS_WITH_EXT_DIMENSIONS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RECORDS_WITH_EXT_DIMENSIONS_VT, 0);
    }

    public DR_CR_TURNOVERS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DR_CR_TURNOVERS_VT, 0);
    }

    public ACTUAL_ACTION_PERIOD_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ACTUAL_ACTION_PERIOD_VT, 0);
    }

    public SCHEDULE_DATA_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SCHEDULE_DATA_VT, 0);
    }

    public TASK_BY_PERFORMER_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TASK_BY_PERFORMER_VT, 0);
    }

    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LPAREN, 0);
    }

    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RPAREN, 0);
    }

    public virtualTableParameter(): VirtualTableParameterContext[];

    public virtualTableParameter(i: number): VirtualTableParameterContext | null;

    public virtualTableParameter(i?: number): VirtualTableParameterContext[] | VirtualTableParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VirtualTableParameterContext);
        }

        return this.getRuleContext(i, VirtualTableParameterContext);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.COMMA);
        } else {
            return this.getToken(SDBLParser.COMMA, i);
        }
    }

    public FILTER_CRITERION_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FILTER_CRITERION_TYPE, 0);
    }

    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }

    public parameter(): ParameterContext | null {
        return this.getRuleContext(0, ParameterContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_virtualTable;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterVirtualTable) {
            listener.enterVirtualTable(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitVirtualTable) {
            listener.exitVirtualTable(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitVirtualTable) {
            return visitor.visitVirtualTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class VirtualTableParameterContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public logicalExpression(): LogicalExpressionContext | null {
        return this.getRuleContext(0, LogicalExpressionContext);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_virtualTableParameter;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterVirtualTableParameter) {
            listener.enterVirtualTableParameter(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitVirtualTableParameter) {
            listener.exitVirtualTableParameter(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitVirtualTableParameter) {
            return visitor.visitVirtualTableParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParameterTableContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public parameter(): ParameterContext {
        return this.getRuleContext(0, ParameterContext)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_parameterTable;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterParameterTable) {
            listener.enterParameterTable(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitParameterTable) {
            listener.exitParameterTable(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitParameterTable) {
            return visitor.visitParameterTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExternalDataSourceTableContext extends BslParserRuleContext {
    public _tableName?: IdentifierContext;

    public _cubeName?: IdentifierContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public mdo(): MdoContext {
        return this.getRuleContext(0, MdoContext)!;
    }

    public DOT(): antlr.TerminalNode[];

    public DOT(i: number): antlr.TerminalNode | null;

    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.DOT);
        } else {
            return this.getToken(SDBLParser.DOT, i);
        }
    }

    public EDS_TABLE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EDS_TABLE, 0);
    }

    public identifier(): IdentifierContext[];

    public identifier(i: number): IdentifierContext | null;

    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }

    public EDS_CUBE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EDS_CUBE, 0);
    }

    public EDS_CUBE_DIMTABLE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EDS_CUBE_DIMTABLE, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_externalDataSourceTable;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterExternalDataSourceTable) {
            listener.enterExternalDataSourceTable(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitExternalDataSourceTable) {
            listener.exitExternalDataSourceTable(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitExternalDataSourceTable) {
            return visitor.visitExternalDataSourceTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class JoinPartContext extends BslParserRuleContext {
    public _joinType?: Token | null;

    public _outerJoin?: Token | null;

    public _source?: DataSourceContext;

    public _condition?: LogicalExpressionContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public dataSource(): DataSourceContext {
        return this.getRuleContext(0, DataSourceContext)!;
    }

    public ON_EN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ON_EN, 0);
    }

    public PO_RU(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.PO_RU, 0);
    }

    public logicalExpression(): LogicalExpressionContext {
        return this.getRuleContext(0, LogicalExpressionContext)!;
    }

    public JOIN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.JOIN, 0);
    }

    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RIGHT, 0);
    }

    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LEFT, 0);
    }

    public FULL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FULL, 0);
    }

    public INNER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.INNER, 0);
    }

    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.OUTER, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_joinPart;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterJoinPart) {
            listener.enterJoinPart(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitJoinPart) {
            listener.exitJoinPart(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitJoinPart) {
            return visitor.visitJoinPart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AliasContext extends BslParserRuleContext {
    public _name?: IdentifierContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }

    public AS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.AS, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_alias;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterAlias) {
            listener.enterAlias(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitAlias) {
            listener.exitAlias(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DatePartContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public parameter(): ParameterContext | null {
        return this.getRuleContext(0, ParameterContext);
    }

    public DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DECIMAL, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_datePart;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterDatePart) {
            listener.enterDatePart(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitDatePart) {
            listener.exitDatePart(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitDatePart) {
            return visitor.visitDatePart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class MultiStringContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public STR(): antlr.TerminalNode[];

    public STR(i: number): antlr.TerminalNode | null;

    public STR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SDBLParser.STR);
        } else {
            return this.getToken(SDBLParser.STR, i);
        }
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_multiString;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterMultiString) {
            listener.enterMultiString(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitMultiString) {
            listener.exitMultiString(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitMultiString) {
            return visitor.visitMultiString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SignContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MINUS, 0);
    }

    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.PLUS, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_sign;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterSign) {
            listener.enterSign(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitSign) {
            listener.exitSign(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitSign) {
            return visitor.visitSign(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IdentifierContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.IDENTIFIER, 0);
    }

    public ACTUAL_ACTION_PERIOD_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ACTUAL_ACTION_PERIOD_VT, 0);
    }

    public BALANCE_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BALANCE_VT, 0);
    }

    public BALANCE_AND_TURNOVERS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BALANCE_AND_TURNOVERS_VT, 0);
    }

    public BOUNDARIES_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BOUNDARIES_VT, 0);
    }

    public DR_CR_TURNOVERS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DR_CR_TURNOVERS_VT, 0);
    }

    public EXT_DIMENSIONS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXT_DIMENSIONS_VT, 0);
    }

    public RECORDS_WITH_EXT_DIMENSIONS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RECORDS_WITH_EXT_DIMENSIONS_VT, 0);
    }

    public SCHEDULE_DATA_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SCHEDULE_DATA_VT, 0);
    }

    public SLICEFIRST_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SLICEFIRST_VT, 0);
    }

    public SLICELAST_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SLICELAST_VT, 0);
    }

    public TASK_BY_PERFORMER_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TASK_BY_PERFORMER_VT, 0);
    }

    public TURNOVERS_VT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TURNOVERS_VT, 0);
    }

    public ROUTEPOINT_FIELD(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ROUTEPOINT_FIELD, 0);
    }

    public BUSINESS_PROCESS_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BUSINESS_PROCESS_TYPE, 0);
    }

    public CATALOG_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CATALOG_TYPE, 0);
    }

    public DOCUMENT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DOCUMENT_TYPE, 0);
    }

    public INFORMATION_REGISTER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.INFORMATION_REGISTER_TYPE, 0);
    }

    public CONSTANT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CONSTANT_TYPE, 0);
    }

    public FILTER_CRITERION_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FILTER_CRITERION_TYPE, 0);
    }

    public EXCHANGE_PLAN_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXCHANGE_PLAN_TYPE, 0);
    }

    public SEQUENCE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SEQUENCE_TYPE, 0);
    }

    public DOCUMENT_JOURNAL_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DOCUMENT_JOURNAL_TYPE, 0);
    }

    public ENUM_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ENUM_TYPE, 0);
    }

    public CHART_OF_CHARACTERISTIC_TYPES_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE, 0);
    }

    public CHART_OF_ACCOUNTS_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CHART_OF_ACCOUNTS_TYPE, 0);
    }

    public CHART_OF_CALCULATION_TYPES_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE, 0);
    }

    public ACCUMULATION_REGISTER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ACCUMULATION_REGISTER_TYPE, 0);
    }

    public ACCOUNTING_REGISTER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ACCOUNTING_REGISTER_TYPE, 0);
    }

    public CALCULATION_REGISTER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CALCULATION_REGISTER_TYPE, 0);
    }

    public TASK_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TASK_TYPE, 0);
    }

    public EXTERNAL_DATA_SOURCE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXTERNAL_DATA_SOURCE_TYPE, 0);
    }

    public DROP(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DROP, 0);
    }

    public END(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.END, 0);
    }

    public ISNULL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ISNULL, 0);
    }

    public JOIN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.JOIN, 0);
    }

    public SELECT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SELECT, 0);
    }

    public TOTALS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TOTALS, 0);
    }

    public UNION(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.UNION, 0);
    }

    public UPDATE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.UPDATE, 0);
    }

    public AVG(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.AVG, 0);
    }

    public BEGINOFPERIOD(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BEGINOFPERIOD, 0);
    }

    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BOOLEAN, 0);
    }

    public COUNT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.COUNT, 0);
    }

    public DATE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DATE, 0);
    }

    public DATEADD(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DATEADD, 0);
    }

    public DATEDIFF(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DATEDIFF, 0);
    }

    public DATETIME(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DATETIME, 0);
    }

    public DAY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DAY, 0);
    }

    public DAYOFYEAR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DAYOFYEAR, 0);
    }

    public EMPTYTABLE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EMPTYTABLE, 0);
    }

    public EMPTYREF(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EMPTYREF, 0);
    }

    public ENDOFPERIOD(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ENDOFPERIOD, 0);
    }

    public HALFYEAR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HALFYEAR, 0);
    }

    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.HOUR, 0);
    }

    public MAX(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MAX, 0);
    }

    public MIN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MIN, 0);
    }

    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MINUTE, 0);
    }

    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.MONTH, 0);
    }

    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.NUMBER, 0);
    }

    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.QUARTER, 0);
    }

    public ONLY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ONLY, 0);
    }

    public PERIODS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.PERIODS, 0);
    }

    public REFS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.REFS, 0);
    }

    public PRESENTATION(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.PRESENTATION, 0);
    }

    public RECORDAUTONUMBER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RECORDAUTONUMBER, 0);
    }

    public REFPRESENTATION(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.REFPRESENTATION, 0);
    }

    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SECOND, 0);
    }

    public STRING(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STRING, 0);
    }

    public SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SUBSTRING, 0);
    }

    public SUM(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SUM, 0);
    }

    public TENDAYS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TENDAYS, 0);
    }

    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TYPE, 0);
    }

    public VALUE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.VALUE, 0);
    }

    public VALUETYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.VALUETYPE, 0);
    }

    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.WEEK, 0);
    }

    public WEEKDAY(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.WEEKDAY, 0);
    }

    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.YEAR, 0);
    }

    public ORDER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ORDER, 0);
    }

    public GROUP(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.GROUP, 0);
    }

    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.INDEX, 0);
    }

    public SET(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SET, 0);
    }

    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.RIGHT, 0);
    }

    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LEFT, 0);
    }

    public INNER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.INNER, 0);
    }

    public FULL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FULL, 0);
    }

    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.OUTER, 0);
    }

    public FOR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FOR, 0);
    }

    public ALL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ALL, 0);
    }

    public ACOS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ACOS, 0);
    }

    public ASIN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ASIN, 0);
    }

    public ATAN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ATAN, 0);
    }

    public COS(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.COS, 0);
    }

    public SIN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SIN, 0);
    }

    public TAN(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TAN, 0);
    }

    public LOG(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LOG, 0);
    }

    public LOG10(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LOG10, 0);
    }

    public EXP(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXP, 0);
    }

    public POW(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.POW, 0);
    }

    public SQRT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SQRT, 0);
    }

    public INT(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.INT, 0);
    }

    public LOWER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.LOWER, 0);
    }

    public STRINGLENGTH(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STRINGLENGTH, 0);
    }

    public TRIMALL(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TRIMALL, 0);
    }

    public TRIML(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TRIML, 0);
    }

    public TRIMR(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TRIMR, 0);
    }

    public UPPER(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.UPPER, 0);
    }

    public ROUND(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ROUND, 0);
    }

    public STOREDDATASIZE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STOREDDATASIZE, 0);
    }

    public UUID(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.UUID, 0);
    }

    public STRFIND(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STRFIND, 0);
    }

    public STRREPLACE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.STRREPLACE, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_identifier;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParameterContext extends BslParserRuleContext {
    public _name?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public AMPERSAND(): antlr.TerminalNode {
        return this.getToken(SDBLParser.AMPERSAND, 0)!;
    }

    public PARAMETER_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SDBLParser.PARAMETER_IDENTIFIER, 0)!;
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_parameter;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class MdoContext extends BslParserRuleContext {
    public _type_?: Token | null;

    public _tableName?: IdentifierContext;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public DOT(): antlr.TerminalNode {
        return this.getToken(SDBLParser.DOT, 0)!;
    }

    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }

    public BUSINESS_PROCESS_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.BUSINESS_PROCESS_TYPE, 0);
    }

    public CATALOG_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CATALOG_TYPE, 0);
    }

    public DOCUMENT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DOCUMENT_TYPE, 0);
    }

    public INFORMATION_REGISTER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.INFORMATION_REGISTER_TYPE, 0);
    }

    public CONSTANT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CONSTANT_TYPE, 0);
    }

    public FILTER_CRITERION_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.FILTER_CRITERION_TYPE, 0);
    }

    public EXCHANGE_PLAN_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXCHANGE_PLAN_TYPE, 0);
    }

    public SEQUENCE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.SEQUENCE_TYPE, 0);
    }

    public DOCUMENT_JOURNAL_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.DOCUMENT_JOURNAL_TYPE, 0);
    }

    public ENUM_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ENUM_TYPE, 0);
    }

    public CHART_OF_CHARACTERISTIC_TYPES_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CHART_OF_CHARACTERISTIC_TYPES_TYPE, 0);
    }

    public CHART_OF_ACCOUNTS_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CHART_OF_ACCOUNTS_TYPE, 0);
    }

    public CHART_OF_CALCULATION_TYPES_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CHART_OF_CALCULATION_TYPES_TYPE, 0);
    }

    public ACCUMULATION_REGISTER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ACCUMULATION_REGISTER_TYPE, 0);
    }

    public ACCOUNTING_REGISTER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.ACCOUNTING_REGISTER_TYPE, 0);
    }

    public CALCULATION_REGISTER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.CALCULATION_REGISTER_TYPE, 0);
    }

    public TASK_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.TASK_TYPE, 0);
    }

    public EXTERNAL_DATA_SOURCE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(SDBLParser.EXTERNAL_DATA_SOURCE_TYPE, 0);
    }

    public override get ruleIndex(): number {
        return SDBLParser.RULE_mdo;
    }

    public override enterRule(listener: SDBLParserListener): void {
        if (listener.enterMdo) {
            listener.enterMdo(this);
        }
    }

    public override exitRule(listener: SDBLParserListener): void {
        if (listener.exitMdo) {
            listener.exitMdo(this);
        }
    }

    public override accept<Result>(visitor: SDBLParserVisitor<Result>): Result | null {
        if (visitor.visitMdo) {
            return visitor.visitMdo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
