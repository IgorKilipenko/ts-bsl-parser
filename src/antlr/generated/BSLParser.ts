// Generated from ./src/antlr/BSLParser.g4 by ANTLR 4.13.1
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
import BSLParserListener from "./BSLParserListener.js";
import BSLParserVisitor from "./BSLParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import { BslParserRuleContext } from "../../core/context";

export default class BSLParser extends Parser {
    public static readonly LINE_COMMENT = 1;

    public static readonly WHITE_SPACE = 2;

    public static readonly DOT = 3;

    public static readonly LBRACK = 4;

    public static readonly RBRACK = 5;

    public static readonly LPAREN = 6;

    public static readonly RPAREN = 7;

    public static readonly COLON = 8;

    public static readonly SEMICOLON = 9;

    public static readonly COMMA = 10;

    public static readonly ASSIGN = 11;

    public static readonly PLUS = 12;

    public static readonly MINUS = 13;

    public static readonly LESS_OR_EQUAL = 14;

    public static readonly NOT_EQUAL = 15;

    public static readonly LESS = 16;

    public static readonly GREATER_OR_EQUAL = 17;

    public static readonly GREATER = 18;

    public static readonly MUL = 19;

    public static readonly QUOTIENT = 20;

    public static readonly MODULO = 21;

    public static readonly QUESTION = 22;

    public static readonly AMPERSAND = 23;

    public static readonly PREPROC_DELETE = 24;

    public static readonly PREPROC_INSERT = 25;

    public static readonly PREPROC_ENDINSERT = 26;

    public static readonly HASH = 27;

    public static readonly BAR = 28;

    public static readonly TILDA = 29;

    public static readonly TRUE = 30;

    public static readonly FALSE = 31;

    public static readonly UNDEFINED = 32;

    public static readonly NULL = 33;

    public static readonly DECIMAL = 34;

    public static readonly DATETIME = 35;

    public static readonly FLOAT = 36;

    public static readonly STRING = 37;

    public static readonly STRINGSTART = 38;

    public static readonly STRINGTAIL = 39;

    public static readonly STRINGPART = 40;

    public static readonly PROCEDURE_KEYWORD = 41;

    public static readonly FUNCTION_KEYWORD = 42;

    public static readonly ENDPROCEDURE_KEYWORD = 43;

    public static readonly ENDFUNCTION_KEYWORD = 44;

    public static readonly EXPORT_KEYWORD = 45;

    public static readonly VAL_KEYWORD = 46;

    public static readonly ENDIF_KEYWORD = 47;

    public static readonly ENDDO_KEYWORD = 48;

    public static readonly IF_KEYWORD = 49;

    public static readonly ELSIF_KEYWORD = 50;

    public static readonly ELSE_KEYWORD = 51;

    public static readonly THEN_KEYWORD = 52;

    public static readonly WHILE_KEYWORD = 53;

    public static readonly DO_KEYWORD = 54;

    public static readonly FOR_KEYWORD = 55;

    public static readonly TO_KEYWORD = 56;

    public static readonly EACH_KEYWORD = 57;

    public static readonly IN_KEYWORD = 58;

    public static readonly TRY_KEYWORD = 59;

    public static readonly EXCEPT_KEYWORD = 60;

    public static readonly ENDTRY_KEYWORD = 61;

    public static readonly RETURN_KEYWORD = 62;

    public static readonly CONTINUE_KEYWORD = 63;

    public static readonly RAISE_KEYWORD = 64;

    public static readonly VAR_KEYWORD = 65;

    public static readonly NOT_KEYWORD = 66;

    public static readonly OR_KEYWORD = 67;

    public static readonly AND_KEYWORD = 68;

    public static readonly NEW_KEYWORD = 69;

    public static readonly GOTO_KEYWORD = 70;

    public static readonly BREAK_KEYWORD = 71;

    public static readonly EXECUTE_KEYWORD = 72;

    public static readonly ADDHANDLER_KEYWORD = 73;

    public static readonly REMOVEHANDLER_KEYWORD = 74;

    public static readonly ASYNC_KEYWORD = 75;

    public static readonly IDENTIFIER = 76;

    public static readonly UNKNOWN = 77;

    public static readonly PREPROC_EXCLAMATION_MARK = 78;

    public static readonly PREPROC_LPAREN = 79;

    public static readonly PREPROC_RPAREN = 80;

    public static readonly PREPROC_STRING = 81;

    public static readonly PREPROC_NATIVE = 82;

    public static readonly PREPROC_USE_KEYWORD = 83;

    public static readonly PREPROC_REGION = 84;

    public static readonly PREPROC_END_REGION = 85;

    public static readonly PREPROC_NOT_KEYWORD = 86;

    public static readonly PREPROC_OR_KEYWORD = 87;

    public static readonly PREPROC_AND_KEYWORD = 88;

    public static readonly PREPROC_IF_KEYWORD = 89;

    public static readonly PREPROC_THEN_KEYWORD = 90;

    public static readonly PREPROC_ELSIF_KEYWORD = 91;

    public static readonly PREPROC_ENDIF_KEYWORD = 92;

    public static readonly PREPROC_ELSE_KEYWORD = 93;

    public static readonly PREPROC_MOBILEAPPCLIENT_SYMBOL = 94;

    public static readonly PREPROC_MOBILEAPPSERVER_SYMBOL = 95;

    public static readonly PREPROC_MOBILECLIENT_SYMBOL = 96;

    public static readonly PREPROC_THICKCLIENTORDINARYAPPLICATION_SYMBOL = 97;

    public static readonly PREPROC_THICKCLIENTMANAGEDAPPLICATION_SYMBOL = 98;

    public static readonly PREPROC_EXTERNALCONNECTION_SYMBOL = 99;

    public static readonly PREPROC_THINCLIENT_SYMBOL = 100;

    public static readonly PREPROC_WEBCLIENT_SYMBOL = 101;

    public static readonly PREPROC_ATCLIENT_SYMBOL = 102;

    public static readonly PREPROC_CLIENT_SYMBOL = 103;

    public static readonly PREPROC_ATSERVER_SYMBOL = 104;

    public static readonly PREPROC_SERVER_SYMBOL = 105;

    public static readonly PREPROC_MOBILE_STANDALONE_SERVER = 106;

    public static readonly PREPROC_LINUX = 107;

    public static readonly PREPROC_WINDOWS = 108;

    public static readonly PREPROC_MACOS = 109;

    public static readonly PREPROC_IDENTIFIER = 110;

    public static readonly PREPROC_NEWLINE = 111;

    public static readonly PREPROC_ANY = 112;

    public static readonly ANNOTATION_ATSERVERNOCONTEXT_SYMBOL = 113;

    public static readonly ANNOTATION_ATCLIENTATSERVERNOCONTEXT_SYMBOL = 114;

    public static readonly ANNOTATION_ATCLIENTATSERVER_SYMBOL = 115;

    public static readonly ANNOTATION_ATCLIENT_SYMBOL = 116;

    public static readonly ANNOTATION_ATSERVER_SYMBOL = 117;

    public static readonly ANNOTATION_BEFORE_SYMBOL = 118;

    public static readonly ANNOTATION_AFTER_SYMBOL = 119;

    public static readonly ANNOTATION_AROUND_SYMBOL = 120;

    public static readonly ANNOTATION_CHANGEANDVALIDATE_SYMBOL = 121;

    public static readonly ANNOTATION_CUSTOM_SYMBOL = 122;

    public static readonly ANNOTATION_UNKNOWN = 123;

    public static readonly PREPROC_ENDDELETE = 124;

    public static readonly PREPROC_DELETE_ANY = 125;

    public static readonly AWAIT_KEYWORD = 126;

    public static readonly EOF = Token.EOF;

    public static readonly RULE_file = 0;

    public static readonly RULE_preproc_native = 1;

    public static readonly RULE_usedLib = 2;

    public static readonly RULE_use = 3;

    public static readonly RULE_moduleAnnotations = 4;

    public static readonly RULE_shebang = 5;

    public static readonly RULE_regionStart = 6;

    public static readonly RULE_regionEnd = 7;

    public static readonly RULE_regionName = 8;

    public static readonly RULE_preproc_if = 9;

    public static readonly RULE_preproc_elsif = 10;

    public static readonly RULE_preproc_else = 11;

    public static readonly RULE_preproc_endif = 12;

    public static readonly RULE_preproc_expression = 13;

    public static readonly RULE_preproc_logicalOperand = 14;

    public static readonly RULE_preproc_logicalExpression = 15;

    public static readonly RULE_preproc_symbol = 16;

    public static readonly RULE_preproc_unknownSymbol = 17;

    public static readonly RULE_preproc_boolOperation = 18;

    public static readonly RULE_preprocessor = 19;

    public static readonly RULE_compilerDirectiveSymbol = 20;

    public static readonly RULE_compilerDirective = 21;

    public static readonly RULE_annotationName = 22;

    public static readonly RULE_annotationParamName = 23;

    public static readonly RULE_annotation = 24;

    public static readonly RULE_annotationParams = 25;

    public static readonly RULE_annotationParam = 26;

    public static readonly RULE_var_name = 27;

    public static readonly RULE_moduleVars = 28;

    public static readonly RULE_moduleVar = 29;

    public static readonly RULE_moduleVarsList = 30;

    public static readonly RULE_moduleVarDeclaration = 31;

    public static readonly RULE_subVars = 32;

    public static readonly RULE_subVar = 33;

    public static readonly RULE_subVarsList = 34;

    public static readonly RULE_subVarDeclaration = 35;

    public static readonly RULE_subName = 36;

    public static readonly RULE_subs = 37;

    public static readonly RULE_sub = 38;

    public static readonly RULE_procedure = 39;

    public static readonly RULE_function = 40;

    public static readonly RULE_procDeclaration = 41;

    public static readonly RULE_funcDeclaration = 42;

    public static readonly RULE_subCodeBlock = 43;

    public static readonly RULE_continueStatement = 44;

    public static readonly RULE_breakStatement = 45;

    public static readonly RULE_raiseStatement = 46;

    public static readonly RULE_ifStatement = 47;

    public static readonly RULE_ifBranch = 48;

    public static readonly RULE_elsifBranch = 49;

    public static readonly RULE_elseBranch = 50;

    public static readonly RULE_whileStatement = 51;

    public static readonly RULE_forStatement = 52;

    public static readonly RULE_forEachStatement = 53;

    public static readonly RULE_tryStatement = 54;

    public static readonly RULE_returnStatement = 55;

    public static readonly RULE_executeStatement = 56;

    public static readonly RULE_callStatement = 57;

    public static readonly RULE_waitStatement = 58;

    public static readonly RULE_labelName = 59;

    public static readonly RULE_label = 60;

    public static readonly RULE_gotoStatement = 61;

    public static readonly RULE_tryCodeBlock = 62;

    public static readonly RULE_exceptCodeBlock = 63;

    public static readonly RULE_event = 64;

    public static readonly RULE_handler = 65;

    public static readonly RULE_addHandlerStatement = 66;

    public static readonly RULE_removeHandlerStatement = 67;

    public static readonly RULE_ternaryOperator = 68;

    public static readonly RULE_waitExpression = 69;

    public static readonly RULE_fileCodeBlockBeforeSub = 70;

    public static readonly RULE_fileCodeBlock = 71;

    public static readonly RULE_codeBlock = 72;

    public static readonly RULE_numeric = 73;

    public static readonly RULE_paramList = 74;

    public static readonly RULE_param = 75;

    public static readonly RULE_defaultValue = 76;

    public static readonly RULE_constValue = 77;

    public static readonly RULE_multilineString = 78;

    public static readonly RULE_string = 79;

    public static readonly RULE_statement = 80;

    public static readonly RULE_assignment = 81;

    public static readonly RULE_callParamList = 82;

    public static readonly RULE_callParam = 83;

    public static readonly RULE_expression = 84;

    public static readonly RULE_operation = 85;

    public static readonly RULE_compareOperation = 86;

    public static readonly RULE_boolOperation = 87;

    public static readonly RULE_unaryModifier = 88;

    public static readonly RULE_member = 89;

    public static readonly RULE_newExpression = 90;

    public static readonly RULE_typeName = 91;

    public static readonly RULE_methodCall = 92;

    public static readonly RULE_globalMethodCall = 93;

    public static readonly RULE_methodName = 94;

    public static readonly RULE_complexIdentifier = 95;

    public static readonly RULE_modifier = 96;

    public static readonly RULE_acceptor = 97;

    public static readonly RULE_lValue = 98;

    public static readonly RULE_accessCall = 99;

    public static readonly RULE_accessIndex = 100;

    public static readonly RULE_accessProperty = 101;

    public static readonly RULE_doCall = 102;

    public static readonly RULE_compoundStatement = 103;

    public static readonly literalNames: (string | null)[] = [
        null,
        null,
        null,
        "'.'",
        "'['",
        "']'",
        null,
        null,
        "':'",
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
        "'%'",
        "'?'",
        "'&'",
        null,
        null,
        null,
        "'#'",
        "'|'",
        "'~'",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "'!'",
    ];

    public static readonly symbolicNames: (string | null)[] = [
        null,
        "LINE_COMMENT",
        "WHITE_SPACE",
        "DOT",
        "LBRACK",
        "RBRACK",
        "LPAREN",
        "RPAREN",
        "COLON",
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
        "MODULO",
        "QUESTION",
        "AMPERSAND",
        "PREPROC_DELETE",
        "PREPROC_INSERT",
        "PREPROC_ENDINSERT",
        "HASH",
        "BAR",
        "TILDA",
        "TRUE",
        "FALSE",
        "UNDEFINED",
        "NULL",
        "DECIMAL",
        "DATETIME",
        "FLOAT",
        "STRING",
        "STRINGSTART",
        "STRINGTAIL",
        "STRINGPART",
        "PROCEDURE_KEYWORD",
        "FUNCTION_KEYWORD",
        "ENDPROCEDURE_KEYWORD",
        "ENDFUNCTION_KEYWORD",
        "EXPORT_KEYWORD",
        "VAL_KEYWORD",
        "ENDIF_KEYWORD",
        "ENDDO_KEYWORD",
        "IF_KEYWORD",
        "ELSIF_KEYWORD",
        "ELSE_KEYWORD",
        "THEN_KEYWORD",
        "WHILE_KEYWORD",
        "DO_KEYWORD",
        "FOR_KEYWORD",
        "TO_KEYWORD",
        "EACH_KEYWORD",
        "IN_KEYWORD",
        "TRY_KEYWORD",
        "EXCEPT_KEYWORD",
        "ENDTRY_KEYWORD",
        "RETURN_KEYWORD",
        "CONTINUE_KEYWORD",
        "RAISE_KEYWORD",
        "VAR_KEYWORD",
        "NOT_KEYWORD",
        "OR_KEYWORD",
        "AND_KEYWORD",
        "NEW_KEYWORD",
        "GOTO_KEYWORD",
        "BREAK_KEYWORD",
        "EXECUTE_KEYWORD",
        "ADDHANDLER_KEYWORD",
        "REMOVEHANDLER_KEYWORD",
        "ASYNC_KEYWORD",
        "IDENTIFIER",
        "UNKNOWN",
        "PREPROC_EXCLAMATION_MARK",
        "PREPROC_LPAREN",
        "PREPROC_RPAREN",
        "PREPROC_STRING",
        "PREPROC_NATIVE",
        "PREPROC_USE_KEYWORD",
        "PREPROC_REGION",
        "PREPROC_END_REGION",
        "PREPROC_NOT_KEYWORD",
        "PREPROC_OR_KEYWORD",
        "PREPROC_AND_KEYWORD",
        "PREPROC_IF_KEYWORD",
        "PREPROC_THEN_KEYWORD",
        "PREPROC_ELSIF_KEYWORD",
        "PREPROC_ENDIF_KEYWORD",
        "PREPROC_ELSE_KEYWORD",
        "PREPROC_MOBILEAPPCLIENT_SYMBOL",
        "PREPROC_MOBILEAPPSERVER_SYMBOL",
        "PREPROC_MOBILECLIENT_SYMBOL",
        "PREPROC_THICKCLIENTORDINARYAPPLICATION_SYMBOL",
        "PREPROC_THICKCLIENTMANAGEDAPPLICATION_SYMBOL",
        "PREPROC_EXTERNALCONNECTION_SYMBOL",
        "PREPROC_THINCLIENT_SYMBOL",
        "PREPROC_WEBCLIENT_SYMBOL",
        "PREPROC_ATCLIENT_SYMBOL",
        "PREPROC_CLIENT_SYMBOL",
        "PREPROC_ATSERVER_SYMBOL",
        "PREPROC_SERVER_SYMBOL",
        "PREPROC_MOBILE_STANDALONE_SERVER",
        "PREPROC_LINUX",
        "PREPROC_WINDOWS",
        "PREPROC_MACOS",
        "PREPROC_IDENTIFIER",
        "PREPROC_NEWLINE",
        "PREPROC_ANY",
        "ANNOTATION_ATSERVERNOCONTEXT_SYMBOL",
        "ANNOTATION_ATCLIENTATSERVERNOCONTEXT_SYMBOL",
        "ANNOTATION_ATCLIENTATSERVER_SYMBOL",
        "ANNOTATION_ATCLIENT_SYMBOL",
        "ANNOTATION_ATSERVER_SYMBOL",
        "ANNOTATION_BEFORE_SYMBOL",
        "ANNOTATION_AFTER_SYMBOL",
        "ANNOTATION_AROUND_SYMBOL",
        "ANNOTATION_CHANGEANDVALIDATE_SYMBOL",
        "ANNOTATION_CUSTOM_SYMBOL",
        "ANNOTATION_UNKNOWN",
        "PREPROC_ENDDELETE",
        "PREPROC_DELETE_ANY",
        "AWAIT_KEYWORD",
    ];

    public static readonly ruleNames: string[] = [
        "file",
        "preproc_native",
        "usedLib",
        "use",
        "moduleAnnotations",
        "shebang",
        "regionStart",
        "regionEnd",
        "regionName",
        "preproc_if",
        "preproc_elsif",
        "preproc_else",
        "preproc_endif",
        "preproc_expression",
        "preproc_logicalOperand",
        "preproc_logicalExpression",
        "preproc_symbol",
        "preproc_unknownSymbol",
        "preproc_boolOperation",
        "preprocessor",
        "compilerDirectiveSymbol",
        "compilerDirective",
        "annotationName",
        "annotationParamName",
        "annotation",
        "annotationParams",
        "annotationParam",
        "var_name",
        "moduleVars",
        "moduleVar",
        "moduleVarsList",
        "moduleVarDeclaration",
        "subVars",
        "subVar",
        "subVarsList",
        "subVarDeclaration",
        "subName",
        "subs",
        "sub",
        "procedure",
        "function",
        "procDeclaration",
        "funcDeclaration",
        "subCodeBlock",
        "continueStatement",
        "breakStatement",
        "raiseStatement",
        "ifStatement",
        "ifBranch",
        "elsifBranch",
        "elseBranch",
        "whileStatement",
        "forStatement",
        "forEachStatement",
        "tryStatement",
        "returnStatement",
        "executeStatement",
        "callStatement",
        "waitStatement",
        "labelName",
        "label",
        "gotoStatement",
        "tryCodeBlock",
        "exceptCodeBlock",
        "event",
        "handler",
        "addHandlerStatement",
        "removeHandlerStatement",
        "ternaryOperator",
        "waitExpression",
        "fileCodeBlockBeforeSub",
        "fileCodeBlock",
        "codeBlock",
        "numeric",
        "paramList",
        "param",
        "defaultValue",
        "constValue",
        "multilineString",
        "string",
        "statement",
        "assignment",
        "callParamList",
        "callParam",
        "expression",
        "operation",
        "compareOperation",
        "boolOperation",
        "unaryModifier",
        "member",
        "newExpression",
        "typeName",
        "methodCall",
        "globalMethodCall",
        "methodName",
        "complexIdentifier",
        "modifier",
        "acceptor",
        "lValue",
        "accessCall",
        "accessIndex",
        "accessProperty",
        "doCall",
        "compoundStatement",
    ];

    public get grammarFileName(): string {
        return "BSLParser.g4";
    }

    public get literalNames(): (string | null)[] {
        return BSLParser.literalNames;
    }

    public get symbolicNames(): (string | null)[] {
        return BSLParser.symbolicNames;
    }

    public get ruleNames(): string[] {
        return BSLParser.ruleNames;
    }

    public get serializedATN(): number[] {
        return BSLParser._serializedATN;
    }

    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
        return new FailedPredicateException(this, predicate, message);
    }

    constructor(input: TokenStream) {
        super(input);
        this._interp = new ParserATNSimulator(
            this,
            BSLParser._ATN,
            BSLParser.DecisionsToDFA,
            new PredictionContextCache()
        );
    }

    // @RuleVersion(0)
    public file(): FileContext {
        let localctx: FileContext = new FileContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, BSLParser.RULE_file);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 209;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 208;
                            this.shebang();
                        }
                        break;
                }
                this.state = 212;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 211;
                            this.moduleAnnotations();
                        }
                        break;
                }
                this.state = 217;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 214;
                                this.preprocessor();
                            }
                        }
                    }
                    this.state = 219;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
                }
                this.state = 221;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 220;
                            this.moduleVars();
                        }
                        break;
                }
                this.state = 226;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 223;
                                this.preprocessor();
                            }
                        }
                    }
                    this.state = 228;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
                }
                this.state = 232;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 229;
                            this.fileCodeBlockBeforeSub();
                            this.state = 230;
                            this.subs();
                        }
                        break;
                }
                this.state = 234;
                this.fileCodeBlock();
                this.state = 235;
                this.match(BSLParser.EOF);
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
    public preproc_native(): Preproc_nativeContext {
        let localctx: Preproc_nativeContext = new Preproc_nativeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, BSLParser.RULE_preproc_native);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 237;
                this.match(BSLParser.HASH);
                this.state = 238;
                this.match(BSLParser.PREPROC_NATIVE);
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
    public usedLib(): UsedLibContext {
        let localctx: UsedLibContext = new UsedLibContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, BSLParser.RULE_usedLib);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 240;
                _la = this._input.LA(1);
                if (!(_la === 81 || _la === 110)) {
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
    public use(): UseContext {
        let localctx: UseContext = new UseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, BSLParser.RULE_use);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 242;
                this.match(BSLParser.HASH);
                this.state = 243;
                this.match(BSLParser.PREPROC_USE_KEYWORD);
                this.state = 244;
                this.usedLib();
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
    public moduleAnnotations(): ModuleAnnotationsContext {
        let localctx: ModuleAnnotationsContext = new ModuleAnnotationsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, BSLParser.RULE_moduleAnnotations);
        try {
            let _alt: number;
            this.state = 267;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 246;
                            this.preproc_native();
                            this.state = 250;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 247;
                                            this.use();
                                        }
                                    }
                                }
                                this.state = 252;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 254;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 253;
                                                this.use();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                                this.state = 256;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                            this.state = 259;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 258;
                                        this.preproc_native();
                                    }
                                    break;
                            }
                            this.state = 264;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 261;
                                            this.use();
                                        }
                                    }
                                }
                                this.state = 266;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
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
    public shebang(): ShebangContext {
        let localctx: ShebangContext = new ShebangContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, BSLParser.RULE_shebang);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 269;
                this.match(BSLParser.HASH);
                this.state = 270;
                this.match(BSLParser.PREPROC_EXCLAMATION_MARK);
                this.state = 274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 110 || _la === 112) {
                    {
                        {
                            this.state = 271;
                            _la = this._input.LA(1);
                            if (!(_la === 110 || _la === 112)) {
                                this._errHandler.recoverInline(this);
                            } else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 276;
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
    public regionStart(): RegionStartContext {
        let localctx: RegionStartContext = new RegionStartContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, BSLParser.RULE_regionStart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 277;
                this.match(BSLParser.PREPROC_REGION);
                this.state = 278;
                this.regionName();
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
    public regionEnd(): RegionEndContext {
        let localctx: RegionEndContext = new RegionEndContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, BSLParser.RULE_regionEnd);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 280;
                this.match(BSLParser.PREPROC_END_REGION);
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
    public regionName(): RegionNameContext {
        let localctx: RegionNameContext = new RegionNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, BSLParser.RULE_regionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 282;
                this.match(BSLParser.PREPROC_IDENTIFIER);
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
    public preproc_if(): Preproc_ifContext {
        let localctx: Preproc_ifContext = new Preproc_ifContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, BSLParser.RULE_preproc_if);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 284;
                this.match(BSLParser.PREPROC_IF_KEYWORD);
                this.state = 285;
                this.preproc_expression();
                this.state = 286;
                this.match(BSLParser.PREPROC_THEN_KEYWORD);
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
    public preproc_elsif(): Preproc_elsifContext {
        let localctx: Preproc_elsifContext = new Preproc_elsifContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, BSLParser.RULE_preproc_elsif);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 288;
                this.match(BSLParser.PREPROC_ELSIF_KEYWORD);
                this.state = 289;
                this.preproc_expression();
                this.state = 290;
                this.match(BSLParser.PREPROC_THEN_KEYWORD);
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
    public preproc_else(): Preproc_elseContext {
        let localctx: Preproc_elseContext = new Preproc_elseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, BSLParser.RULE_preproc_else);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 292;
                this.match(BSLParser.PREPROC_ELSE_KEYWORD);
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
    public preproc_endif(): Preproc_endifContext {
        let localctx: Preproc_endifContext = new Preproc_endifContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, BSLParser.RULE_preproc_endif);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 294;
                this.match(BSLParser.PREPROC_ENDIF_KEYWORD);
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
    public preproc_expression(): Preproc_expressionContext {
        let localctx: Preproc_expressionContext = new Preproc_expressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, BSLParser.RULE_preproc_expression);
        let _la: number;
        try {
            this.state = 304;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 297;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 86) {
                                {
                                    this.state = 296;
                                    this.match(BSLParser.PREPROC_NOT_KEYWORD);
                                }
                            }

                            {
                                this.state = 299;
                                this.match(BSLParser.PREPROC_LPAREN);
                                this.state = 300;
                                this.preproc_expression();
                                this.state = 301;
                                this.match(BSLParser.PREPROC_RPAREN);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 303;
                        this.preproc_logicalExpression();
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
    public preproc_logicalOperand(): Preproc_logicalOperandContext {
        let localctx: Preproc_logicalOperandContext = new Preproc_logicalOperandContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, BSLParser.RULE_preproc_logicalOperand);
        let _la: number;
        try {
            this.state = 321;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 16, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 306;
                            this.match(BSLParser.PREPROC_LPAREN);
                            this.state = 308;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 14, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 307;
                                        this.match(BSLParser.PREPROC_NOT_KEYWORD);
                                    }
                                    break;
                            }
                            this.state = 310;
                            this.preproc_logicalOperand();
                            this.state = 311;
                            this.match(BSLParser.PREPROC_RPAREN);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        {
                            this.state = 314;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 86) {
                                {
                                    this.state = 313;
                                    this.match(BSLParser.PREPROC_NOT_KEYWORD);
                                }
                            }

                            this.state = 316;
                            this.preproc_symbol();
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        {
                            this.state = 317;
                            this.match(BSLParser.PREPROC_LPAREN);
                            this.state = 318;
                            this.preproc_logicalExpression();
                            this.state = 319;
                            this.match(BSLParser.PREPROC_RPAREN);
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
    public preproc_logicalExpression(): Preproc_logicalExpressionContext {
        let localctx: Preproc_logicalExpressionContext = new Preproc_logicalExpressionContext(
            this,
            this._ctx,
            this.state
        );
        this.enterRule(localctx, 30, BSLParser.RULE_preproc_logicalExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 323;
                this.preproc_logicalOperand();
                this.state = 329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 87 || _la === 88) {
                    {
                        {
                            this.state = 324;
                            this.preproc_boolOperation();
                            this.state = 325;
                            this.preproc_logicalOperand();
                        }
                    }
                    this.state = 331;
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
    public preproc_symbol(): Preproc_symbolContext {
        let localctx: Preproc_symbolContext = new Preproc_symbolContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, BSLParser.RULE_preproc_symbol);
        try {
            this.state = 349;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 103:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 332;
                        this.match(BSLParser.PREPROC_CLIENT_SYMBOL);
                    }
                    break;
                case 102:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 333;
                        this.match(BSLParser.PREPROC_ATCLIENT_SYMBOL);
                    }
                    break;
                case 105:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 334;
                        this.match(BSLParser.PREPROC_SERVER_SYMBOL);
                    }
                    break;
                case 104:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 335;
                        this.match(BSLParser.PREPROC_ATSERVER_SYMBOL);
                    }
                    break;
                case 94:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 336;
                        this.match(BSLParser.PREPROC_MOBILEAPPCLIENT_SYMBOL);
                    }
                    break;
                case 95:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 337;
                        this.match(BSLParser.PREPROC_MOBILEAPPSERVER_SYMBOL);
                    }
                    break;
                case 96:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 338;
                        this.match(BSLParser.PREPROC_MOBILECLIENT_SYMBOL);
                    }
                    break;
                case 97:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 339;
                        this.match(BSLParser.PREPROC_THICKCLIENTORDINARYAPPLICATION_SYMBOL);
                    }
                    break;
                case 98:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 340;
                        this.match(BSLParser.PREPROC_THICKCLIENTMANAGEDAPPLICATION_SYMBOL);
                    }
                    break;
                case 99:
                    this.enterOuterAlt(localctx, 10);
                    {
                        this.state = 341;
                        this.match(BSLParser.PREPROC_EXTERNALCONNECTION_SYMBOL);
                    }
                    break;
                case 100:
                    this.enterOuterAlt(localctx, 11);
                    {
                        this.state = 342;
                        this.match(BSLParser.PREPROC_THINCLIENT_SYMBOL);
                    }
                    break;
                case 101:
                    this.enterOuterAlt(localctx, 12);
                    {
                        this.state = 343;
                        this.match(BSLParser.PREPROC_WEBCLIENT_SYMBOL);
                    }
                    break;
                case 106:
                    this.enterOuterAlt(localctx, 13);
                    {
                        this.state = 344;
                        this.match(BSLParser.PREPROC_MOBILE_STANDALONE_SERVER);
                    }
                    break;
                case 107:
                    this.enterOuterAlt(localctx, 14);
                    {
                        this.state = 345;
                        this.match(BSLParser.PREPROC_LINUX);
                    }
                    break;
                case 108:
                    this.enterOuterAlt(localctx, 15);
                    {
                        this.state = 346;
                        this.match(BSLParser.PREPROC_WINDOWS);
                    }
                    break;
                case 109:
                    this.enterOuterAlt(localctx, 16);
                    {
                        this.state = 347;
                        this.match(BSLParser.PREPROC_MACOS);
                    }
                    break;
                case 110:
                    this.enterOuterAlt(localctx, 17);
                    {
                        this.state = 348;
                        this.preproc_unknownSymbol();
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
    public preproc_unknownSymbol(): Preproc_unknownSymbolContext {
        let localctx: Preproc_unknownSymbolContext = new Preproc_unknownSymbolContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, BSLParser.RULE_preproc_unknownSymbol);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 351;
                this.match(BSLParser.PREPROC_IDENTIFIER);
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
    public preproc_boolOperation(): Preproc_boolOperationContext {
        let localctx: Preproc_boolOperationContext = new Preproc_boolOperationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, BSLParser.RULE_preproc_boolOperation);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 353;
                _la = this._input.LA(1);
                if (!(_la === 87 || _la === 88)) {
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
    public preprocessor(): PreprocessorContext {
        let localctx: PreprocessorContext = new PreprocessorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, BSLParser.RULE_preprocessor);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 355;
                this.match(BSLParser.HASH);
                this.state = 362;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 84:
                        {
                            this.state = 356;
                            this.regionStart();
                        }
                        break;
                    case 85:
                        {
                            this.state = 357;
                            this.regionEnd();
                        }
                        break;
                    case 89:
                        {
                            this.state = 358;
                            this.preproc_if();
                        }
                        break;
                    case 91:
                        {
                            this.state = 359;
                            this.preproc_elsif();
                        }
                        break;
                    case 93:
                        {
                            this.state = 360;
                            this.preproc_else();
                        }
                        break;
                    case 92:
                        {
                            this.state = 361;
                            this.preproc_endif();
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
    public compilerDirectiveSymbol(): CompilerDirectiveSymbolContext {
        let localctx: CompilerDirectiveSymbolContext = new CompilerDirectiveSymbolContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, BSLParser.RULE_compilerDirectiveSymbol);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 364;
                _la = this._input.LA(1);
                if (!(((_la - 113) & ~0x1f) === 0 && ((1 << (_la - 113)) & 31) !== 0)) {
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
    public compilerDirective(): CompilerDirectiveContext {
        let localctx: CompilerDirectiveContext = new CompilerDirectiveContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, BSLParser.RULE_compilerDirective);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 366;
                this.match(BSLParser.AMPERSAND);
                this.state = 367;
                this.compilerDirectiveSymbol();
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
    public annotationName(): AnnotationNameContext {
        let localctx: AnnotationNameContext = new AnnotationNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 44, BSLParser.RULE_annotationName);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 369;
                _la = this._input.LA(1);
                if (!(((_la - 118) & ~0x1f) === 0 && ((1 << (_la - 118)) & 31) !== 0)) {
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
    public annotationParamName(): AnnotationParamNameContext {
        let localctx: AnnotationParamNameContext = new AnnotationParamNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, BSLParser.RULE_annotationParamName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 371;
                this.match(BSLParser.IDENTIFIER);
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
    public annotation(): AnnotationContext {
        let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 48, BSLParser.RULE_annotation);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 373;
                this.match(BSLParser.AMPERSAND);
                this.state = 374;
                this.annotationName();
                this.state = 376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 6) {
                    {
                        this.state = 375;
                        this.annotationParams();
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
    public annotationParams(): AnnotationParamsContext {
        let localctx: AnnotationParamsContext = new AnnotationParamsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 50, BSLParser.RULE_annotationParams);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 378;
                this.match(BSLParser.LPAREN);
                this.state = 387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la - 12) & ~0x1f) === 0 && ((1 << (_la - 12)) & 133955587) !== 0) || _la === 76) {
                    {
                        this.state = 379;
                        this.annotationParam();
                        this.state = 384;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === 10) {
                            {
                                {
                                    this.state = 380;
                                    this.match(BSLParser.COMMA);
                                    this.state = 381;
                                    this.annotationParam();
                                }
                            }
                            this.state = 386;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }

                this.state = 389;
                this.match(BSLParser.RPAREN);
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
    public annotationParam(): AnnotationParamContext {
        let localctx: AnnotationParamContext = new AnnotationParamContext(this, this._ctx, this.state);
        this.enterRule(localctx, 52, BSLParser.RULE_annotationParam);
        let _la: number;
        try {
            this.state = 397;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 76:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 391;
                            this.annotationParamName();
                            this.state = 394;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 11) {
                                {
                                    this.state = 392;
                                    this.match(BSLParser.ASSIGN);
                                    this.state = 393;
                                    this.constValue();
                                }
                            }
                        }
                    }
                    break;
                case 12:
                case 13:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 396;
                        this.constValue();
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
    public var_name(): Var_nameContext {
        let localctx: Var_nameContext = new Var_nameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, BSLParser.RULE_var_name);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 399;
                this.match(BSLParser.IDENTIFIER);
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
    public moduleVars(): ModuleVarsContext {
        let localctx: ModuleVarsContext = new ModuleVarsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, BSLParser.RULE_moduleVars);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 402;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 401;
                                    this.moduleVar();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 404;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
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
    public moduleVar(): ModuleVarContext {
        let localctx: ModuleVarContext = new ModuleVarContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, BSLParser.RULE_moduleVar);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 23 || _la === 27) {
                    {
                        this.state = 409;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 26, this._ctx)) {
                            case 1:
                                {
                                    this.state = 406;
                                    this.preprocessor();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 407;
                                    this.compilerDirective();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 408;
                                    this.annotation();
                                }
                                break;
                        }
                    }
                    this.state = 413;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 414;
                this.match(BSLParser.VAR_KEYWORD);
                this.state = 415;
                this.moduleVarsList();
                this.state = 417;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 416;
                            this.match(BSLParser.SEMICOLON);
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
    public moduleVarsList(): ModuleVarsListContext {
        let localctx: ModuleVarsListContext = new ModuleVarsListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, BSLParser.RULE_moduleVarsList);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 419;
                this.moduleVarDeclaration();
                this.state = 424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 10) {
                    {
                        {
                            this.state = 420;
                            this.match(BSLParser.COMMA);
                            this.state = 421;
                            this.moduleVarDeclaration();
                        }
                    }
                    this.state = 426;
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
    public moduleVarDeclaration(): ModuleVarDeclarationContext {
        let localctx: ModuleVarDeclarationContext = new ModuleVarDeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, BSLParser.RULE_moduleVarDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 427;
                this.var_name();
                this.state = 429;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 45) {
                    {
                        this.state = 428;
                        this.match(BSLParser.EXPORT_KEYWORD);
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
    public subVars(): SubVarsContext {
        let localctx: SubVarsContext = new SubVarsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 64, BSLParser.RULE_subVars);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 432;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 431;
                                    this.subVar();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 434;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
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
    public subVar(): SubVarContext {
        let localctx: SubVarContext = new SubVarContext(this, this._ctx, this.state);
        this.enterRule(localctx, 66, BSLParser.RULE_subVar);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 441;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 23 || _la === 27) {
                    {
                        this.state = 439;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 32, this._ctx)) {
                            case 1:
                                {
                                    this.state = 436;
                                    this.preprocessor();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 437;
                                    this.compilerDirective();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 438;
                                    this.annotation();
                                }
                                break;
                        }
                    }
                    this.state = 443;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 444;
                this.match(BSLParser.VAR_KEYWORD);
                this.state = 445;
                this.subVarsList();
                this.state = 447;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 34, this._ctx)) {
                    case 1:
                        {
                            this.state = 446;
                            this.match(BSLParser.SEMICOLON);
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
    public subVarsList(): SubVarsListContext {
        let localctx: SubVarsListContext = new SubVarsListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 68, BSLParser.RULE_subVarsList);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 449;
                this.subVarDeclaration();
                this.state = 454;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 10) {
                    {
                        {
                            this.state = 450;
                            this.match(BSLParser.COMMA);
                            this.state = 451;
                            this.subVarDeclaration();
                        }
                    }
                    this.state = 456;
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
    public subVarDeclaration(): SubVarDeclarationContext {
        let localctx: SubVarDeclarationContext = new SubVarDeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 70, BSLParser.RULE_subVarDeclaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 457;
                this.var_name();
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
    public subName(): SubNameContext {
        let localctx: SubNameContext = new SubNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 72, BSLParser.RULE_subName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 459;
                this.match(BSLParser.IDENTIFIER);
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
    public subs(): SubsContext {
        let localctx: SubsContext = new SubsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 74, BSLParser.RULE_subs);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 462;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 461;
                                    this.sub();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 464;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
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
    public sub(): SubContext {
        let localctx: SubContext = new SubContext(this, this._ctx, this.state);
        this.enterRule(localctx, 76, BSLParser.RULE_sub);
        try {
            this.state = 468;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 466;
                        this.procedure();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 467;
                        this.function_();
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
    public procedure(): ProcedureContext {
        let localctx: ProcedureContext = new ProcedureContext(this, this._ctx, this.state);
        this.enterRule(localctx, 78, BSLParser.RULE_procedure);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 470;
                this.procDeclaration();
                this.state = 471;
                this.subCodeBlock();
                this.state = 472;
                this.match(BSLParser.ENDPROCEDURE_KEYWORD);
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
    public function_(): FunctionContext {
        let localctx: FunctionContext = new FunctionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 80, BSLParser.RULE_function);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 474;
                this.funcDeclaration();
                this.state = 475;
                this.subCodeBlock();
                this.state = 476;
                this.match(BSLParser.ENDFUNCTION_KEYWORD);
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
    public procDeclaration(): ProcDeclarationContext {
        let localctx: ProcDeclarationContext = new ProcDeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 82, BSLParser.RULE_procDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 23 || _la === 27) {
                    {
                        this.state = 481;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
                            case 1:
                                {
                                    this.state = 478;
                                    this.preprocessor();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 479;
                                    this.compilerDirective();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 480;
                                    this.annotation();
                                }
                                break;
                        }
                    }
                    this.state = 485;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 487;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 75) {
                    {
                        this.state = 486;
                        this.match(BSLParser.ASYNC_KEYWORD);
                    }
                }

                this.state = 489;
                this.match(BSLParser.PROCEDURE_KEYWORD);
                this.state = 490;
                this.subName();
                this.state = 491;
                this.match(BSLParser.LPAREN);
                this.state = 493;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 23 || _la === 46 || _la === 76) {
                    {
                        this.state = 492;
                        this.paramList();
                    }
                }

                this.state = 495;
                this.match(BSLParser.RPAREN);
                this.state = 497;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 45) {
                    {
                        this.state = 496;
                        this.match(BSLParser.EXPORT_KEYWORD);
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
    public funcDeclaration(): FuncDeclarationContext {
        let localctx: FuncDeclarationContext = new FuncDeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 84, BSLParser.RULE_funcDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 23 || _la === 27) {
                    {
                        this.state = 502;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 43, this._ctx)) {
                            case 1:
                                {
                                    this.state = 499;
                                    this.preprocessor();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 500;
                                    this.compilerDirective();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 501;
                                    this.annotation();
                                }
                                break;
                        }
                    }
                    this.state = 506;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 508;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 75) {
                    {
                        this.state = 507;
                        this.match(BSLParser.ASYNC_KEYWORD);
                    }
                }

                this.state = 510;
                this.match(BSLParser.FUNCTION_KEYWORD);
                this.state = 511;
                this.subName();
                this.state = 512;
                this.match(BSLParser.LPAREN);
                this.state = 514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 23 || _la === 46 || _la === 76) {
                    {
                        this.state = 513;
                        this.paramList();
                    }
                }

                this.state = 516;
                this.match(BSLParser.RPAREN);
                this.state = 518;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 45) {
                    {
                        this.state = 517;
                        this.match(BSLParser.EXPORT_KEYWORD);
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
    public subCodeBlock(): SubCodeBlockContext {
        let localctx: SubCodeBlockContext = new SubCodeBlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 86, BSLParser.RULE_subCodeBlock);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 521;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 48, this._ctx)) {
                    case 1:
                        {
                            this.state = 520;
                            this.subVars();
                        }
                        break;
                }
                this.state = 523;
                this.codeBlock();
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
    public continueStatement(): ContinueStatementContext {
        let localctx: ContinueStatementContext = new ContinueStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 88, BSLParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 525;
                this.match(BSLParser.CONTINUE_KEYWORD);
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
    public breakStatement(): BreakStatementContext {
        let localctx: BreakStatementContext = new BreakStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 90, BSLParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 527;
                this.match(BSLParser.BREAK_KEYWORD);
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
    public raiseStatement(): RaiseStatementContext {
        let localctx: RaiseStatementContext = new RaiseStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 92, BSLParser.RULE_raiseStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 529;
                this.match(BSLParser.RAISE_KEYWORD);
                this.state = 532;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
                    case 1:
                        {
                            this.state = 530;
                            this.doCall();
                        }
                        break;
                    case 2:
                        {
                            this.state = 531;
                            this.expression();
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
    public ifStatement(): IfStatementContext {
        let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 94, BSLParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 534;
                this.ifBranch();
                this.state = 538;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 50) {
                    {
                        {
                            this.state = 535;
                            this.elsifBranch();
                        }
                    }
                    this.state = 540;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 542;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 51) {
                    {
                        this.state = 541;
                        this.elseBranch();
                    }
                }

                this.state = 544;
                this.match(BSLParser.ENDIF_KEYWORD);
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
    public ifBranch(): IfBranchContext {
        let localctx: IfBranchContext = new IfBranchContext(this, this._ctx, this.state);
        this.enterRule(localctx, 96, BSLParser.RULE_ifBranch);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 546;
                this.match(BSLParser.IF_KEYWORD);
                this.state = 547;
                this.expression();
                this.state = 548;
                this.match(BSLParser.THEN_KEYWORD);
                this.state = 549;
                this.codeBlock();
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
    public elsifBranch(): ElsifBranchContext {
        let localctx: ElsifBranchContext = new ElsifBranchContext(this, this._ctx, this.state);
        this.enterRule(localctx, 98, BSLParser.RULE_elsifBranch);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 551;
                this.match(BSLParser.ELSIF_KEYWORD);
                this.state = 552;
                this.expression();
                this.state = 553;
                this.match(BSLParser.THEN_KEYWORD);
                this.state = 554;
                this.codeBlock();
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
    public elseBranch(): ElseBranchContext {
        let localctx: ElseBranchContext = new ElseBranchContext(this, this._ctx, this.state);
        this.enterRule(localctx, 100, BSLParser.RULE_elseBranch);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 556;
                this.match(BSLParser.ELSE_KEYWORD);
                this.state = 557;
                this.codeBlock();
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
    public whileStatement(): WhileStatementContext {
        let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 102, BSLParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 559;
                this.match(BSLParser.WHILE_KEYWORD);
                this.state = 560;
                this.expression();
                this.state = 561;
                this.match(BSLParser.DO_KEYWORD);
                this.state = 562;
                this.codeBlock();
                this.state = 563;
                this.match(BSLParser.ENDDO_KEYWORD);
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
    public forStatement(): ForStatementContext {
        let localctx: ForStatementContext = new ForStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 104, BSLParser.RULE_forStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 565;
                this.match(BSLParser.FOR_KEYWORD);
                this.state = 566;
                this.match(BSLParser.IDENTIFIER);
                this.state = 567;
                this.match(BSLParser.ASSIGN);
                this.state = 568;
                this.expression();
                this.state = 569;
                this.match(BSLParser.TO_KEYWORD);
                this.state = 570;
                this.expression();
                this.state = 571;
                this.match(BSLParser.DO_KEYWORD);
                this.state = 572;
                this.codeBlock();
                this.state = 573;
                this.match(BSLParser.ENDDO_KEYWORD);
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
    public forEachStatement(): ForEachStatementContext {
        let localctx: ForEachStatementContext = new ForEachStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 106, BSLParser.RULE_forEachStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 575;
                this.match(BSLParser.FOR_KEYWORD);
                this.state = 576;
                this.match(BSLParser.EACH_KEYWORD);
                this.state = 577;
                this.match(BSLParser.IDENTIFIER);
                this.state = 578;
                this.match(BSLParser.IN_KEYWORD);
                this.state = 579;
                this.expression();
                this.state = 580;
                this.match(BSLParser.DO_KEYWORD);
                this.state = 581;
                this.codeBlock();
                this.state = 582;
                this.match(BSLParser.ENDDO_KEYWORD);
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
    public tryStatement(): TryStatementContext {
        let localctx: TryStatementContext = new TryStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 108, BSLParser.RULE_tryStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 584;
                this.match(BSLParser.TRY_KEYWORD);
                this.state = 585;
                this.tryCodeBlock();
                this.state = 586;
                this.match(BSLParser.EXCEPT_KEYWORD);
                this.state = 587;
                this.exceptCodeBlock();
                this.state = 588;
                this.match(BSLParser.ENDTRY_KEYWORD);
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
    public returnStatement(): ReturnStatementContext {
        let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 110, BSLParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 590;
                this.match(BSLParser.RETURN_KEYWORD);
                this.state = 592;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 52, this._ctx)) {
                    case 1:
                        {
                            this.state = 591;
                            this.expression();
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
    public executeStatement(): ExecuteStatementContext {
        let localctx: ExecuteStatementContext = new ExecuteStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 112, BSLParser.RULE_executeStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 594;
                this.match(BSLParser.EXECUTE_KEYWORD);
                this.state = 597;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 53, this._ctx)) {
                    case 1:
                        {
                            this.state = 595;
                            this.doCall();
                        }
                        break;
                    case 2:
                        {
                            this.state = 596;
                            this.callParamList();
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
    public callStatement(): CallStatementContext {
        let localctx: CallStatementContext = new CallStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 114, BSLParser.RULE_callStatement);
        try {
            let _alt: number;
            this.state = 611;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 56, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 601;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 54, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 599;
                                        this.match(BSLParser.IDENTIFIER);
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 600;
                                        this.globalMethodCall();
                                    }
                                    break;
                            }
                            this.state = 606;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 603;
                                            this.modifier();
                                        }
                                    }
                                }
                                this.state = 608;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
                            }
                            this.state = 609;
                            this.accessCall();
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 610;
                        this.globalMethodCall();
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
    public waitStatement(): WaitStatementContext {
        let localctx: WaitStatementContext = new WaitStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 116, BSLParser.RULE_waitStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 613;
                this.waitExpression();
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
    public labelName(): LabelNameContext {
        let localctx: LabelNameContext = new LabelNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 118, BSLParser.RULE_labelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 615;
                this.match(BSLParser.IDENTIFIER);
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
    public label(): LabelContext {
        let localctx: LabelContext = new LabelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 120, BSLParser.RULE_label);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 617;
                this.match(BSLParser.TILDA);
                this.state = 618;
                this.labelName();
                this.state = 619;
                this.match(BSLParser.COLON);
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
    public gotoStatement(): GotoStatementContext {
        let localctx: GotoStatementContext = new GotoStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 122, BSLParser.RULE_gotoStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 621;
                this.match(BSLParser.GOTO_KEYWORD);
                this.state = 622;
                this.match(BSLParser.TILDA);
                this.state = 623;
                this.labelName();
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
    public tryCodeBlock(): TryCodeBlockContext {
        let localctx: TryCodeBlockContext = new TryCodeBlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 124, BSLParser.RULE_tryCodeBlock);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 625;
                this.codeBlock();
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
    public exceptCodeBlock(): ExceptCodeBlockContext {
        let localctx: ExceptCodeBlockContext = new ExceptCodeBlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 126, BSLParser.RULE_exceptCodeBlock);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 627;
                this.codeBlock();
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
    public event(): EventContext {
        let localctx: EventContext = new EventContext(this, this._ctx, this.state);
        this.enterRule(localctx, 128, BSLParser.RULE_event);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 629;
                this.expression();
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
    public handler(): HandlerContext {
        let localctx: HandlerContext = new HandlerContext(this, this._ctx, this.state);
        this.enterRule(localctx, 130, BSLParser.RULE_handler);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 631;
                this.expression();
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
    public addHandlerStatement(): AddHandlerStatementContext {
        let localctx: AddHandlerStatementContext = new AddHandlerStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 132, BSLParser.RULE_addHandlerStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 633;
                this.match(BSLParser.ADDHANDLER_KEYWORD);
                this.state = 634;
                this.event();
                this.state = 635;
                this.match(BSLParser.COMMA);
                this.state = 636;
                this.handler();
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
    public removeHandlerStatement(): RemoveHandlerStatementContext {
        let localctx: RemoveHandlerStatementContext = new RemoveHandlerStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 134, BSLParser.RULE_removeHandlerStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 638;
                this.match(BSLParser.REMOVEHANDLER_KEYWORD);
                this.state = 639;
                this.event();
                this.state = 640;
                this.match(BSLParser.COMMA);
                this.state = 641;
                this.handler();
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
    public ternaryOperator(): TernaryOperatorContext {
        let localctx: TernaryOperatorContext = new TernaryOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 136, BSLParser.RULE_ternaryOperator);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 643;
                this.match(BSLParser.QUESTION);
                this.state = 644;
                this.match(BSLParser.LPAREN);
                this.state = 645;
                this.expression();
                this.state = 646;
                this.match(BSLParser.COMMA);
                this.state = 647;
                this.expression();
                this.state = 648;
                this.match(BSLParser.COMMA);
                this.state = 649;
                this.expression();
                this.state = 650;
                this.match(BSLParser.RPAREN);
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
    public waitExpression(): WaitExpressionContext {
        let localctx: WaitExpressionContext = new WaitExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 138, BSLParser.RULE_waitExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 652;
                this.match(BSLParser.AWAIT_KEYWORD);
                this.state = 653;
                this.expression();
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
    public fileCodeBlockBeforeSub(): FileCodeBlockBeforeSubContext {
        let localctx: FileCodeBlockBeforeSubContext = new FileCodeBlockBeforeSubContext(this, this._ctx, this.state);
        this.enterRule(localctx, 140, BSLParser.RULE_fileCodeBlockBeforeSub);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 655;
                this.codeBlock();
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
    public fileCodeBlock(): FileCodeBlockContext {
        let localctx: FileCodeBlockContext = new FileCodeBlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 142, BSLParser.RULE_fileCodeBlock);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 657;
                this.codeBlock();
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
    public codeBlock(): CodeBlockContext {
        let localctx: CodeBlockContext = new CodeBlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 144, BSLParser.RULE_codeBlock);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 663;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 661;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 57, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 659;
                                        this.statement();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 660;
                                        this.preprocessor();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 665;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
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
    public numeric(): NumericContext {
        let localctx: NumericContext = new NumericContext(this, this._ctx, this.state);
        this.enterRule(localctx, 146, BSLParser.RULE_numeric);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 666;
                _la = this._input.LA(1);
                if (!(_la === 34 || _la === 36)) {
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
    public paramList(): ParamListContext {
        let localctx: ParamListContext = new ParamListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 148, BSLParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 668;
                this.param();
                this.state = 673;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 10) {
                    {
                        {
                            this.state = 669;
                            this.match(BSLParser.COMMA);
                            this.state = 670;
                            this.param();
                        }
                    }
                    this.state = 675;
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
    public param(): ParamContext {
        let localctx: ParamContext = new ParamContext(this, this._ctx, this.state);
        this.enterRule(localctx, 150, BSLParser.RULE_param);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 679;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 23) {
                    {
                        {
                            this.state = 676;
                            this.annotation();
                        }
                    }
                    this.state = 681;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 683;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 46) {
                    {
                        this.state = 682;
                        this.match(BSLParser.VAL_KEYWORD);
                    }
                }

                this.state = 685;
                this.match(BSLParser.IDENTIFIER);
                this.state = 688;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 11) {
                    {
                        this.state = 686;
                        this.match(BSLParser.ASSIGN);
                        this.state = 687;
                        this.defaultValue();
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
    public defaultValue(): DefaultValueContext {
        let localctx: DefaultValueContext = new DefaultValueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 152, BSLParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 690;
                this.constValue();
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
    public constValue(): ConstValueContext {
        let localctx: ConstValueContext = new ConstValueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 154, BSLParser.RULE_constValue);
        let _la: number;
        try {
            this.state = 702;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 12:
                case 13:
                case 34:
                case 36:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 693;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 12 || _la === 13) {
                            {
                                this.state = 692;
                                _la = this._input.LA(1);
                                if (!(_la === 12 || _la === 13)) {
                                    this._errHandler.recoverInline(this);
                                } else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }

                        this.state = 695;
                        this.numeric();
                    }
                    break;
                case 37:
                case 38:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 696;
                        this.string_();
                    }
                    break;
                case 30:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 697;
                        this.match(BSLParser.TRUE);
                    }
                    break;
                case 31:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 698;
                        this.match(BSLParser.FALSE);
                    }
                    break;
                case 32:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 699;
                        this.match(BSLParser.UNDEFINED);
                    }
                    break;
                case 33:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 700;
                        this.match(BSLParser.NULL);
                    }
                    break;
                case 35:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 701;
                        this.match(BSLParser.DATETIME);
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
    public multilineString(): MultilineStringContext {
        let localctx: MultilineStringContext = new MultilineStringContext(this, this._ctx, this.state);
        this.enterRule(localctx, 156, BSLParser.RULE_multilineString);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 704;
                this.match(BSLParser.STRINGSTART);
                this.state = 710;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((_la - 27) & ~0x1f) === 0 && ((1 << (_la - 27)) & 8195) !== 0) {
                    {
                        this.state = 708;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case 40:
                                {
                                    this.state = 705;
                                    this.match(BSLParser.STRINGPART);
                                }
                                break;
                            case 28:
                                {
                                    this.state = 706;
                                    this.match(BSLParser.BAR);
                                }
                                break;
                            case 27:
                                {
                                    this.state = 707;
                                    this.preprocessor();
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                    }
                    this.state = 712;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 713;
                this.match(BSLParser.STRINGTAIL);
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
    public string_(): StringContext {
        let localctx: StringContext = new StringContext(this, this._ctx, this.state);
        this.enterRule(localctx, 158, BSLParser.RULE_string);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 717;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 717;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case 37:
                                {
                                    this.state = 715;
                                    this.match(BSLParser.STRING);
                                }
                                break;
                            case 38:
                                {
                                    this.state = 716;
                                    this.multilineString();
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                    }
                    this.state = 719;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 37 || _la === 38);
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
    public statement(): StatementContext {
        let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 160, BSLParser.RULE_statement);
        try {
            this.state = 742;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 27:
                case 29:
                case 49:
                case 53:
                case 55:
                case 59:
                case 62:
                case 63:
                case 64:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 76:
                case 126:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 736;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 29:
                                    {
                                        {
                                            this.state = 721;
                                            this.label();
                                            this.state = 727;
                                            this._errHandler.sync(this);
                                            switch (this._interp.adaptivePredict(this._input, 69, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 722;
                                                        this.callStatement();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 723;
                                                        this.waitStatement();
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 724;
                                                        this.compoundStatement();
                                                    }
                                                    break;
                                                case 4:
                                                    {
                                                        this.state = 725;
                                                        this.assignment();
                                                    }
                                                    break;
                                                case 5:
                                                    {
                                                        this.state = 726;
                                                        this.preprocessor();
                                                    }
                                                    break;
                                            }
                                        }
                                    }
                                    break;
                                case 27:
                                case 49:
                                case 53:
                                case 55:
                                case 59:
                                case 62:
                                case 63:
                                case 64:
                                case 70:
                                case 71:
                                case 72:
                                case 73:
                                case 74:
                                case 76:
                                case 126:
                                    {
                                        this.state = 734;
                                        this._errHandler.sync(this);
                                        switch (this._interp.adaptivePredict(this._input, 70, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 729;
                                                    this.callStatement();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 730;
                                                    this.waitStatement();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 731;
                                                    this.compoundStatement();
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 732;
                                                    this.assignment();
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 733;
                                                    this.preprocessor();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 739;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 72, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 738;
                                        this.match(BSLParser.SEMICOLON);
                                    }
                                    break;
                            }
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 741;
                        this.match(BSLParser.SEMICOLON);
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
    public assignment(): AssignmentContext {
        let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 162, BSLParser.RULE_assignment);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 744;
                this.lValue();
                this.state = 748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 27) {
                    {
                        {
                            this.state = 745;
                            this.preprocessor();
                        }
                    }
                    this.state = 750;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 751;
                this.match(BSLParser.ASSIGN);
                {
                    this.state = 755;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === 27) {
                        {
                            {
                                this.state = 752;
                                this.preprocessor();
                            }
                        }
                        this.state = 757;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 758;
                    this.expression();
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
    public callParamList(): CallParamListContext {
        let localctx: CallParamListContext = new CallParamListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 164, BSLParser.RULE_callParamList);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 760;
                this.callParam();
                this.state = 765;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 10) {
                    {
                        {
                            this.state = 761;
                            this.match(BSLParser.COMMA);
                            this.state = 762;
                            this.callParam();
                        }
                    }
                    this.state = 767;
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
    public callParam(): CallParamContext {
        let localctx: CallParamContext = new CallParamContext(this, this._ctx, this.state);
        this.enterRule(localctx, 166, BSLParser.RULE_callParam);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 769;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1:
                        {
                            this.state = 768;
                            this.expression();
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
    public expression(): ExpressionContext {
        let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 168, BSLParser.RULE_expression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 771;
                this.member();
                this.state = 794;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 81, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 775;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === 27) {
                                    {
                                        {
                                            this.state = 772;
                                            this.preprocessor();
                                        }
                                    }
                                    this.state = 777;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 778;
                                this.operation();
                                this.state = 782;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === 27) {
                                    {
                                        {
                                            this.state = 779;
                                            this.preprocessor();
                                        }
                                    }
                                    this.state = 784;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 785;
                                this.member();
                                this.state = 789;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 786;
                                                this.preprocessor();
                                            }
                                        }
                                    }
                                    this.state = 791;
                                    this._errHandler.sync(this);
                                    _alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 796;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 81, this._ctx);
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
    public operation(): OperationContext {
        let localctx: OperationContext = new OperationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 170, BSLParser.RULE_operation);
        try {
            this.state = 804;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 12:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 797;
                        this.match(BSLParser.PLUS);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 798;
                        this.match(BSLParser.MINUS);
                    }
                    break;
                case 19:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 799;
                        this.match(BSLParser.MUL);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 800;
                        this.match(BSLParser.QUOTIENT);
                    }
                    break;
                case 21:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 801;
                        this.match(BSLParser.MODULO);
                    }
                    break;
                case 67:
                case 68:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 802;
                        this.boolOperation();
                    }
                    break;
                case 11:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 803;
                        this.compareOperation();
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
    public compareOperation(): CompareOperationContext {
        let localctx: CompareOperationContext = new CompareOperationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 172, BSLParser.RULE_compareOperation);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 806;
                _la = this._input.LA(1);
                if (!((_la & ~0x1f) === 0 && ((1 << _la) & 509952) !== 0)) {
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
    public boolOperation(): BoolOperationContext {
        let localctx: BoolOperationContext = new BoolOperationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 174, BSLParser.RULE_boolOperation);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 808;
                _la = this._input.LA(1);
                if (!(_la === 67 || _la === 68)) {
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
    public unaryModifier(): UnaryModifierContext {
        let localctx: UnaryModifierContext = new UnaryModifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 176, BSLParser.RULE_unaryModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 810;
                _la = this._input.LA(1);
                if (!(_la === 12 || _la === 13 || _la === 66)) {
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
    public member(): MemberContext {
        let localctx: MemberContext = new MemberContext(this, this._ctx, this.state);
        this.enterRule(localctx, 178, BSLParser.RULE_member);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 813;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 83, this._ctx)) {
                    case 1:
                        {
                            this.state = 812;
                            this.unaryModifier();
                        }
                        break;
                }
                this.state = 832;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 86, this._ctx)) {
                    case 1:
                        {
                            this.state = 815;
                            this.constValue();
                        }
                        break;
                    case 2:
                        {
                            this.state = 816;
                            this.complexIdentifier();
                        }
                        break;
                    case 3:
                        {
                            {
                                {
                                    this.state = 817;
                                    this.match(BSLParser.LPAREN);
                                    this.state = 818;
                                    this.expression();
                                    this.state = 819;
                                    this.match(BSLParser.RPAREN);
                                }
                                this.state = 824;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === 3 || _la === 4) {
                                    {
                                        {
                                            this.state = 821;
                                            this.modifier();
                                        }
                                    }
                                    this.state = 826;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        break;
                    case 4:
                        {
                            this.state = 829;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 85, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 827;
                                        this.match(BSLParser.IDENTIFIER);
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 828;
                                        this.globalMethodCall();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 5:
                        {
                            this.state = 831;
                            this.waitExpression();
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
    public newExpression(): NewExpressionContext {
        let localctx: NewExpressionContext = new NewExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 180, BSLParser.RULE_newExpression);
        let _la: number;
        try {
            this.state = 841;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 88, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 834;
                        this.match(BSLParser.NEW_KEYWORD);
                        this.state = 835;
                        this.typeName();
                        this.state = 837;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 6) {
                            {
                                this.state = 836;
                                this.doCall();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 839;
                        this.match(BSLParser.NEW_KEYWORD);
                        this.state = 840;
                        this.doCall();
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
    public typeName(): TypeNameContext {
        let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 182, BSLParser.RULE_typeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 843;
                this.match(BSLParser.IDENTIFIER);
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
    public methodCall(): MethodCallContext {
        let localctx: MethodCallContext = new MethodCallContext(this, this._ctx, this.state);
        this.enterRule(localctx, 184, BSLParser.RULE_methodCall);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 845;
                this.methodName();
                this.state = 846;
                this.doCall();
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
    public globalMethodCall(): GlobalMethodCallContext {
        let localctx: GlobalMethodCallContext = new GlobalMethodCallContext(this, this._ctx, this.state);
        this.enterRule(localctx, 186, BSLParser.RULE_globalMethodCall);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 848;
                this.methodName();
                this.state = 849;
                this.doCall();
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
    public methodName(): MethodNameContext {
        let localctx: MethodNameContext = new MethodNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 188, BSLParser.RULE_methodName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 851;
                this.match(BSLParser.IDENTIFIER);
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
    public complexIdentifier(): ComplexIdentifierContext {
        let localctx: ComplexIdentifierContext = new ComplexIdentifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 190, BSLParser.RULE_complexIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 857;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 89, this._ctx)) {
                    case 1:
                        {
                            this.state = 853;
                            this.match(BSLParser.IDENTIFIER);
                        }
                        break;
                    case 2:
                        {
                            this.state = 854;
                            this.newExpression();
                        }
                        break;
                    case 3:
                        {
                            this.state = 855;
                            this.ternaryOperator();
                        }
                        break;
                    case 4:
                        {
                            this.state = 856;
                            this.globalMethodCall();
                        }
                        break;
                }
                this.state = 862;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 3 || _la === 4) {
                    {
                        {
                            this.state = 859;
                            this.modifier();
                        }
                    }
                    this.state = 864;
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
    public modifier(): ModifierContext {
        let localctx: ModifierContext = new ModifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 192, BSLParser.RULE_modifier);
        try {
            this.state = 868;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 91, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 865;
                        this.accessProperty();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 866;
                        this.accessIndex();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 867;
                        this.accessCall();
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
    public acceptor(): AcceptorContext {
        let localctx: AcceptorContext = new AcceptorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 194, BSLParser.RULE_acceptor);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 873;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 92, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 870;
                                this.modifier();
                            }
                        }
                    }
                    this.state = 875;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 92, this._ctx);
                }
                this.state = 878;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 3:
                        {
                            this.state = 876;
                            this.accessProperty();
                        }
                        break;
                    case 4:
                        {
                            this.state = 877;
                            this.accessIndex();
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
    public lValue(): LValueContext {
        let localctx: LValueContext = new LValueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 196, BSLParser.RULE_lValue);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 882;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 94, this._ctx)) {
                    case 1:
                        {
                            this.state = 880;
                            this.match(BSLParser.IDENTIFIER);
                        }
                        break;
                    case 2:
                        {
                            this.state = 881;
                            this.globalMethodCall();
                        }
                        break;
                }
                this.state = 885;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3 || _la === 4) {
                    {
                        this.state = 884;
                        this.acceptor();
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
    public accessCall(): AccessCallContext {
        let localctx: AccessCallContext = new AccessCallContext(this, this._ctx, this.state);
        this.enterRule(localctx, 198, BSLParser.RULE_accessCall);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 887;
                this.match(BSLParser.DOT);
                this.state = 888;
                this.methodCall();
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
    public accessIndex(): AccessIndexContext {
        let localctx: AccessIndexContext = new AccessIndexContext(this, this._ctx, this.state);
        this.enterRule(localctx, 200, BSLParser.RULE_accessIndex);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 890;
                this.match(BSLParser.LBRACK);
                this.state = 891;
                this.expression();
                this.state = 892;
                this.match(BSLParser.RBRACK);
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
    public accessProperty(): AccessPropertyContext {
        let localctx: AccessPropertyContext = new AccessPropertyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 202, BSLParser.RULE_accessProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 894;
                this.match(BSLParser.DOT);
                this.state = 895;
                this.match(BSLParser.IDENTIFIER);
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
    public doCall(): DoCallContext {
        let localctx: DoCallContext = new DoCallContext(this, this._ctx, this.state);
        this.enterRule(localctx, 204, BSLParser.RULE_doCall);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 897;
                this.match(BSLParser.LPAREN);
                this.state = 898;
                this.callParamList();
                this.state = 899;
                this.match(BSLParser.RPAREN);
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
    public compoundStatement(): CompoundStatementContext {
        let localctx: CompoundStatementContext = new CompoundStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 206, BSLParser.RULE_compoundStatement);
        try {
            this.state = 914;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 96, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 901;
                        this.ifStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 902;
                        this.whileStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 903;
                        this.forStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 904;
                        this.forEachStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 905;
                        this.tryStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 906;
                        this.returnStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 907;
                        this.continueStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 908;
                        this.breakStatement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 909;
                        this.raiseStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                    {
                        this.state = 910;
                        this.executeStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                    {
                        this.state = 911;
                        this.gotoStatement();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localctx, 12);
                    {
                        this.state = 912;
                        this.addHandlerStatement();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 13);
                    {
                        this.state = 913;
                        this.removeHandlerStatement();
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

    public static readonly _serializedATN: number[] = [
        4, 1, 126, 917, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7,
        2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2,
        16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2,
        24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2,
        32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2,
        40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2,
        48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2,
        56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2,
        64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2,
        72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2,
        80, 7, 80, 2, 81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2,
        88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2,
        96, 7, 96, 2, 97, 7, 97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7,
        103, 1, 0, 3, 0, 210, 8, 0, 1, 0, 3, 0, 213, 8, 0, 1, 0, 5, 0, 216, 8, 0, 10, 0, 12, 0, 219, 9, 0, 1, 0, 3, 0,
        222, 8, 0, 1, 0, 5, 0, 225, 8, 0, 10, 0, 12, 0, 228, 9, 0, 1, 0, 1, 0, 1, 0, 3, 0, 233, 8, 0, 1, 0, 1, 0, 1, 0,
        1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 5, 4, 249, 8, 4, 10, 4, 12, 4, 252, 9, 4, 1,
        4, 4, 4, 255, 8, 4, 11, 4, 12, 4, 256, 1, 4, 3, 4, 260, 8, 4, 1, 4, 5, 4, 263, 8, 4, 10, 4, 12, 4, 266, 9, 4, 3,
        4, 268, 8, 4, 1, 5, 1, 5, 1, 5, 5, 5, 273, 8, 5, 10, 5, 12, 5, 276, 9, 5, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1,
        8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12, 1, 12, 1, 13, 3, 13, 298, 8, 13, 1,
        13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 305, 8, 13, 1, 14, 1, 14, 3, 14, 309, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14,
        3, 14, 315, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 322, 8, 14, 1, 15, 1, 15, 1, 15, 1, 15, 5, 15, 328,
        8, 15, 10, 15, 12, 15, 331, 9, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16,
        1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 350, 8, 16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1,
        19, 1, 19, 1, 19, 1, 19, 3, 19, 363, 8, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23, 1, 23, 1,
        24, 1, 24, 1, 24, 3, 24, 377, 8, 24, 1, 25, 1, 25, 1, 25, 1, 25, 5, 25, 383, 8, 25, 10, 25, 12, 25, 386, 9, 25,
        3, 25, 388, 8, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 3, 26, 395, 8, 26, 1, 26, 3, 26, 398, 8, 26, 1, 27, 1, 27,
        1, 28, 4, 28, 403, 8, 28, 11, 28, 12, 28, 404, 1, 29, 1, 29, 1, 29, 5, 29, 410, 8, 29, 10, 29, 12, 29, 413, 9,
        29, 1, 29, 1, 29, 1, 29, 3, 29, 418, 8, 29, 1, 30, 1, 30, 1, 30, 5, 30, 423, 8, 30, 10, 30, 12, 30, 426, 9, 30,
        1, 31, 1, 31, 3, 31, 430, 8, 31, 1, 32, 4, 32, 433, 8, 32, 11, 32, 12, 32, 434, 1, 33, 1, 33, 1, 33, 5, 33, 440,
        8, 33, 10, 33, 12, 33, 443, 9, 33, 1, 33, 1, 33, 1, 33, 3, 33, 448, 8, 33, 1, 34, 1, 34, 1, 34, 5, 34, 453, 8,
        34, 10, 34, 12, 34, 456, 9, 34, 1, 35, 1, 35, 1, 36, 1, 36, 1, 37, 4, 37, 463, 8, 37, 11, 37, 12, 37, 464, 1,
        38, 1, 38, 3, 38, 469, 8, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 40, 1, 40, 1, 40, 1, 40, 1, 41, 1, 41, 1, 41, 5,
        41, 482, 8, 41, 10, 41, 12, 41, 485, 9, 41, 1, 41, 3, 41, 488, 8, 41, 1, 41, 1, 41, 1, 41, 1, 41, 3, 41, 494, 8,
        41, 1, 41, 1, 41, 3, 41, 498, 8, 41, 1, 42, 1, 42, 1, 42, 5, 42, 503, 8, 42, 10, 42, 12, 42, 506, 9, 42, 1, 42,
        3, 42, 509, 8, 42, 1, 42, 1, 42, 1, 42, 1, 42, 3, 42, 515, 8, 42, 1, 42, 1, 42, 3, 42, 519, 8, 42, 1, 43, 3, 43,
        522, 8, 43, 1, 43, 1, 43, 1, 44, 1, 44, 1, 45, 1, 45, 1, 46, 1, 46, 1, 46, 3, 46, 533, 8, 46, 1, 47, 1, 47, 5,
        47, 537, 8, 47, 10, 47, 12, 47, 540, 9, 47, 1, 47, 3, 47, 543, 8, 47, 1, 47, 1, 47, 1, 48, 1, 48, 1, 48, 1, 48,
        1, 48, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 50, 1, 50, 1, 50, 1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 52,
        1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53,
        1, 53, 1, 53, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 55, 1, 55, 3, 55, 593, 8, 55, 1, 56, 1, 56, 1, 56, 3,
        56, 598, 8, 56, 1, 57, 1, 57, 3, 57, 602, 8, 57, 1, 57, 5, 57, 605, 8, 57, 10, 57, 12, 57, 608, 9, 57, 1, 57, 1,
        57, 3, 57, 612, 8, 57, 1, 58, 1, 58, 1, 59, 1, 59, 1, 60, 1, 60, 1, 60, 1, 60, 1, 61, 1, 61, 1, 61, 1, 61, 1,
        62, 1, 62, 1, 63, 1, 63, 1, 64, 1, 64, 1, 65, 1, 65, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 67, 1, 67, 1, 67, 1,
        67, 1, 67, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 69, 1, 69, 1, 69, 1, 70, 1, 70, 1,
        71, 1, 71, 1, 72, 1, 72, 5, 72, 662, 8, 72, 10, 72, 12, 72, 665, 9, 72, 1, 73, 1, 73, 1, 74, 1, 74, 1, 74, 5,
        74, 672, 8, 74, 10, 74, 12, 74, 675, 9, 74, 1, 75, 5, 75, 678, 8, 75, 10, 75, 12, 75, 681, 9, 75, 1, 75, 3, 75,
        684, 8, 75, 1, 75, 1, 75, 1, 75, 3, 75, 689, 8, 75, 1, 76, 1, 76, 1, 77, 3, 77, 694, 8, 77, 1, 77, 1, 77, 1, 77,
        1, 77, 1, 77, 1, 77, 1, 77, 3, 77, 703, 8, 77, 1, 78, 1, 78, 1, 78, 1, 78, 5, 78, 709, 8, 78, 10, 78, 12, 78,
        712, 9, 78, 1, 78, 1, 78, 1, 79, 1, 79, 4, 79, 718, 8, 79, 11, 79, 12, 79, 719, 1, 80, 1, 80, 1, 80, 1, 80, 1,
        80, 1, 80, 3, 80, 728, 8, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 3, 80, 735, 8, 80, 3, 80, 737, 8, 80, 1, 80, 3,
        80, 740, 8, 80, 1, 80, 3, 80, 743, 8, 80, 1, 81, 1, 81, 5, 81, 747, 8, 81, 10, 81, 12, 81, 750, 9, 81, 1, 81, 1,
        81, 5, 81, 754, 8, 81, 10, 81, 12, 81, 757, 9, 81, 1, 81, 1, 81, 1, 82, 1, 82, 1, 82, 5, 82, 764, 8, 82, 10, 82,
        12, 82, 767, 9, 82, 1, 83, 3, 83, 770, 8, 83, 1, 84, 1, 84, 5, 84, 774, 8, 84, 10, 84, 12, 84, 777, 9, 84, 1,
        84, 1, 84, 5, 84, 781, 8, 84, 10, 84, 12, 84, 784, 9, 84, 1, 84, 1, 84, 5, 84, 788, 8, 84, 10, 84, 12, 84, 791,
        9, 84, 5, 84, 793, 8, 84, 10, 84, 12, 84, 796, 9, 84, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 1, 85, 3, 85,
        805, 8, 85, 1, 86, 1, 86, 1, 87, 1, 87, 1, 88, 1, 88, 1, 89, 3, 89, 814, 8, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1,
        89, 1, 89, 1, 89, 5, 89, 823, 8, 89, 10, 89, 12, 89, 826, 9, 89, 1, 89, 1, 89, 3, 89, 830, 8, 89, 1, 89, 3, 89,
        833, 8, 89, 1, 90, 1, 90, 1, 90, 3, 90, 838, 8, 90, 1, 90, 1, 90, 3, 90, 842, 8, 90, 1, 91, 1, 91, 1, 92, 1, 92,
        1, 92, 1, 93, 1, 93, 1, 93, 1, 94, 1, 94, 1, 95, 1, 95, 1, 95, 1, 95, 3, 95, 858, 8, 95, 1, 95, 5, 95, 861, 8,
        95, 10, 95, 12, 95, 864, 9, 95, 1, 96, 1, 96, 1, 96, 3, 96, 869, 8, 96, 1, 97, 5, 97, 872, 8, 97, 10, 97, 12,
        97, 875, 9, 97, 1, 97, 1, 97, 3, 97, 879, 8, 97, 1, 98, 1, 98, 3, 98, 883, 8, 98, 1, 98, 3, 98, 886, 8, 98, 1,
        99, 1, 99, 1, 99, 1, 100, 1, 100, 1, 100, 1, 100, 1, 101, 1, 101, 1, 101, 1, 102, 1, 102, 1, 102, 1, 102, 1,
        103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 3, 103,
        915, 8, 103, 1, 103, 0, 0, 104, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
        42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96,
        98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140,
        142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184,
        186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 0, 10, 2, 0, 81, 81, 110, 110, 2, 0, 110, 110, 112, 112,
        1, 0, 87, 88, 1, 0, 113, 117, 1, 0, 118, 122, 2, 0, 34, 34, 36, 36, 1, 0, 12, 13, 2, 0, 11, 11, 14, 18, 1, 0,
        67, 68, 2, 0, 12, 13, 66, 66, 969, 0, 209, 1, 0, 0, 0, 2, 237, 1, 0, 0, 0, 4, 240, 1, 0, 0, 0, 6, 242, 1, 0, 0,
        0, 8, 267, 1, 0, 0, 0, 10, 269, 1, 0, 0, 0, 12, 277, 1, 0, 0, 0, 14, 280, 1, 0, 0, 0, 16, 282, 1, 0, 0, 0, 18,
        284, 1, 0, 0, 0, 20, 288, 1, 0, 0, 0, 22, 292, 1, 0, 0, 0, 24, 294, 1, 0, 0, 0, 26, 304, 1, 0, 0, 0, 28, 321, 1,
        0, 0, 0, 30, 323, 1, 0, 0, 0, 32, 349, 1, 0, 0, 0, 34, 351, 1, 0, 0, 0, 36, 353, 1, 0, 0, 0, 38, 355, 1, 0, 0,
        0, 40, 364, 1, 0, 0, 0, 42, 366, 1, 0, 0, 0, 44, 369, 1, 0, 0, 0, 46, 371, 1, 0, 0, 0, 48, 373, 1, 0, 0, 0, 50,
        378, 1, 0, 0, 0, 52, 397, 1, 0, 0, 0, 54, 399, 1, 0, 0, 0, 56, 402, 1, 0, 0, 0, 58, 411, 1, 0, 0, 0, 60, 419, 1,
        0, 0, 0, 62, 427, 1, 0, 0, 0, 64, 432, 1, 0, 0, 0, 66, 441, 1, 0, 0, 0, 68, 449, 1, 0, 0, 0, 70, 457, 1, 0, 0,
        0, 72, 459, 1, 0, 0, 0, 74, 462, 1, 0, 0, 0, 76, 468, 1, 0, 0, 0, 78, 470, 1, 0, 0, 0, 80, 474, 1, 0, 0, 0, 82,
        483, 1, 0, 0, 0, 84, 504, 1, 0, 0, 0, 86, 521, 1, 0, 0, 0, 88, 525, 1, 0, 0, 0, 90, 527, 1, 0, 0, 0, 92, 529, 1,
        0, 0, 0, 94, 534, 1, 0, 0, 0, 96, 546, 1, 0, 0, 0, 98, 551, 1, 0, 0, 0, 100, 556, 1, 0, 0, 0, 102, 559, 1, 0, 0,
        0, 104, 565, 1, 0, 0, 0, 106, 575, 1, 0, 0, 0, 108, 584, 1, 0, 0, 0, 110, 590, 1, 0, 0, 0, 112, 594, 1, 0, 0, 0,
        114, 611, 1, 0, 0, 0, 116, 613, 1, 0, 0, 0, 118, 615, 1, 0, 0, 0, 120, 617, 1, 0, 0, 0, 122, 621, 1, 0, 0, 0,
        124, 625, 1, 0, 0, 0, 126, 627, 1, 0, 0, 0, 128, 629, 1, 0, 0, 0, 130, 631, 1, 0, 0, 0, 132, 633, 1, 0, 0, 0,
        134, 638, 1, 0, 0, 0, 136, 643, 1, 0, 0, 0, 138, 652, 1, 0, 0, 0, 140, 655, 1, 0, 0, 0, 142, 657, 1, 0, 0, 0,
        144, 663, 1, 0, 0, 0, 146, 666, 1, 0, 0, 0, 148, 668, 1, 0, 0, 0, 150, 679, 1, 0, 0, 0, 152, 690, 1, 0, 0, 0,
        154, 702, 1, 0, 0, 0, 156, 704, 1, 0, 0, 0, 158, 717, 1, 0, 0, 0, 160, 742, 1, 0, 0, 0, 162, 744, 1, 0, 0, 0,
        164, 760, 1, 0, 0, 0, 166, 769, 1, 0, 0, 0, 168, 771, 1, 0, 0, 0, 170, 804, 1, 0, 0, 0, 172, 806, 1, 0, 0, 0,
        174, 808, 1, 0, 0, 0, 176, 810, 1, 0, 0, 0, 178, 813, 1, 0, 0, 0, 180, 841, 1, 0, 0, 0, 182, 843, 1, 0, 0, 0,
        184, 845, 1, 0, 0, 0, 186, 848, 1, 0, 0, 0, 188, 851, 1, 0, 0, 0, 190, 857, 1, 0, 0, 0, 192, 868, 1, 0, 0, 0,
        194, 873, 1, 0, 0, 0, 196, 882, 1, 0, 0, 0, 198, 887, 1, 0, 0, 0, 200, 890, 1, 0, 0, 0, 202, 894, 1, 0, 0, 0,
        204, 897, 1, 0, 0, 0, 206, 914, 1, 0, 0, 0, 208, 210, 3, 10, 5, 0, 209, 208, 1, 0, 0, 0, 209, 210, 1, 0, 0, 0,
        210, 212, 1, 0, 0, 0, 211, 213, 3, 8, 4, 0, 212, 211, 1, 0, 0, 0, 212, 213, 1, 0, 0, 0, 213, 217, 1, 0, 0, 0,
        214, 216, 3, 38, 19, 0, 215, 214, 1, 0, 0, 0, 216, 219, 1, 0, 0, 0, 217, 215, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0,
        218, 221, 1, 0, 0, 0, 219, 217, 1, 0, 0, 0, 220, 222, 3, 56, 28, 0, 221, 220, 1, 0, 0, 0, 221, 222, 1, 0, 0, 0,
        222, 226, 1, 0, 0, 0, 223, 225, 3, 38, 19, 0, 224, 223, 1, 0, 0, 0, 225, 228, 1, 0, 0, 0, 226, 224, 1, 0, 0, 0,
        226, 227, 1, 0, 0, 0, 227, 232, 1, 0, 0, 0, 228, 226, 1, 0, 0, 0, 229, 230, 3, 140, 70, 0, 230, 231, 3, 74, 37,
        0, 231, 233, 1, 0, 0, 0, 232, 229, 1, 0, 0, 0, 232, 233, 1, 0, 0, 0, 233, 234, 1, 0, 0, 0, 234, 235, 3, 142, 71,
        0, 235, 236, 5, 0, 0, 1, 236, 1, 1, 0, 0, 0, 237, 238, 5, 27, 0, 0, 238, 239, 5, 82, 0, 0, 239, 3, 1, 0, 0, 0,
        240, 241, 7, 0, 0, 0, 241, 5, 1, 0, 0, 0, 242, 243, 5, 27, 0, 0, 243, 244, 5, 83, 0, 0, 244, 245, 3, 4, 2, 0,
        245, 7, 1, 0, 0, 0, 246, 250, 3, 2, 1, 0, 247, 249, 3, 6, 3, 0, 248, 247, 1, 0, 0, 0, 249, 252, 1, 0, 0, 0, 250,
        248, 1, 0, 0, 0, 250, 251, 1, 0, 0, 0, 251, 268, 1, 0, 0, 0, 252, 250, 1, 0, 0, 0, 253, 255, 3, 6, 3, 0, 254,
        253, 1, 0, 0, 0, 255, 256, 1, 0, 0, 0, 256, 254, 1, 0, 0, 0, 256, 257, 1, 0, 0, 0, 257, 259, 1, 0, 0, 0, 258,
        260, 3, 2, 1, 0, 259, 258, 1, 0, 0, 0, 259, 260, 1, 0, 0, 0, 260, 264, 1, 0, 0, 0, 261, 263, 3, 6, 3, 0, 262,
        261, 1, 0, 0, 0, 263, 266, 1, 0, 0, 0, 264, 262, 1, 0, 0, 0, 264, 265, 1, 0, 0, 0, 265, 268, 1, 0, 0, 0, 266,
        264, 1, 0, 0, 0, 267, 246, 1, 0, 0, 0, 267, 254, 1, 0, 0, 0, 268, 9, 1, 0, 0, 0, 269, 270, 5, 27, 0, 0, 270,
        274, 5, 78, 0, 0, 271, 273, 7, 1, 0, 0, 272, 271, 1, 0, 0, 0, 273, 276, 1, 0, 0, 0, 274, 272, 1, 0, 0, 0, 274,
        275, 1, 0, 0, 0, 275, 11, 1, 0, 0, 0, 276, 274, 1, 0, 0, 0, 277, 278, 5, 84, 0, 0, 278, 279, 3, 16, 8, 0, 279,
        13, 1, 0, 0, 0, 280, 281, 5, 85, 0, 0, 281, 15, 1, 0, 0, 0, 282, 283, 5, 110, 0, 0, 283, 17, 1, 0, 0, 0, 284,
        285, 5, 89, 0, 0, 285, 286, 3, 26, 13, 0, 286, 287, 5, 90, 0, 0, 287, 19, 1, 0, 0, 0, 288, 289, 5, 91, 0, 0,
        289, 290, 3, 26, 13, 0, 290, 291, 5, 90, 0, 0, 291, 21, 1, 0, 0, 0, 292, 293, 5, 93, 0, 0, 293, 23, 1, 0, 0, 0,
        294, 295, 5, 92, 0, 0, 295, 25, 1, 0, 0, 0, 296, 298, 5, 86, 0, 0, 297, 296, 1, 0, 0, 0, 297, 298, 1, 0, 0, 0,
        298, 299, 1, 0, 0, 0, 299, 300, 5, 79, 0, 0, 300, 301, 3, 26, 13, 0, 301, 302, 5, 80, 0, 0, 302, 305, 1, 0, 0,
        0, 303, 305, 3, 30, 15, 0, 304, 297, 1, 0, 0, 0, 304, 303, 1, 0, 0, 0, 305, 27, 1, 0, 0, 0, 306, 308, 5, 79, 0,
        0, 307, 309, 5, 86, 0, 0, 308, 307, 1, 0, 0, 0, 308, 309, 1, 0, 0, 0, 309, 310, 1, 0, 0, 0, 310, 311, 3, 28, 14,
        0, 311, 312, 5, 80, 0, 0, 312, 322, 1, 0, 0, 0, 313, 315, 5, 86, 0, 0, 314, 313, 1, 0, 0, 0, 314, 315, 1, 0, 0,
        0, 315, 316, 1, 0, 0, 0, 316, 322, 3, 32, 16, 0, 317, 318, 5, 79, 0, 0, 318, 319, 3, 30, 15, 0, 319, 320, 5, 80,
        0, 0, 320, 322, 1, 0, 0, 0, 321, 306, 1, 0, 0, 0, 321, 314, 1, 0, 0, 0, 321, 317, 1, 0, 0, 0, 322, 29, 1, 0, 0,
        0, 323, 329, 3, 28, 14, 0, 324, 325, 3, 36, 18, 0, 325, 326, 3, 28, 14, 0, 326, 328, 1, 0, 0, 0, 327, 324, 1, 0,
        0, 0, 328, 331, 1, 0, 0, 0, 329, 327, 1, 0, 0, 0, 329, 330, 1, 0, 0, 0, 330, 31, 1, 0, 0, 0, 331, 329, 1, 0, 0,
        0, 332, 350, 5, 103, 0, 0, 333, 350, 5, 102, 0, 0, 334, 350, 5, 105, 0, 0, 335, 350, 5, 104, 0, 0, 336, 350, 5,
        94, 0, 0, 337, 350, 5, 95, 0, 0, 338, 350, 5, 96, 0, 0, 339, 350, 5, 97, 0, 0, 340, 350, 5, 98, 0, 0, 341, 350,
        5, 99, 0, 0, 342, 350, 5, 100, 0, 0, 343, 350, 5, 101, 0, 0, 344, 350, 5, 106, 0, 0, 345, 350, 5, 107, 0, 0,
        346, 350, 5, 108, 0, 0, 347, 350, 5, 109, 0, 0, 348, 350, 3, 34, 17, 0, 349, 332, 1, 0, 0, 0, 349, 333, 1, 0, 0,
        0, 349, 334, 1, 0, 0, 0, 349, 335, 1, 0, 0, 0, 349, 336, 1, 0, 0, 0, 349, 337, 1, 0, 0, 0, 349, 338, 1, 0, 0, 0,
        349, 339, 1, 0, 0, 0, 349, 340, 1, 0, 0, 0, 349, 341, 1, 0, 0, 0, 349, 342, 1, 0, 0, 0, 349, 343, 1, 0, 0, 0,
        349, 344, 1, 0, 0, 0, 349, 345, 1, 0, 0, 0, 349, 346, 1, 0, 0, 0, 349, 347, 1, 0, 0, 0, 349, 348, 1, 0, 0, 0,
        350, 33, 1, 0, 0, 0, 351, 352, 5, 110, 0, 0, 352, 35, 1, 0, 0, 0, 353, 354, 7, 2, 0, 0, 354, 37, 1, 0, 0, 0,
        355, 362, 5, 27, 0, 0, 356, 363, 3, 12, 6, 0, 357, 363, 3, 14, 7, 0, 358, 363, 3, 18, 9, 0, 359, 363, 3, 20, 10,
        0, 360, 363, 3, 22, 11, 0, 361, 363, 3, 24, 12, 0, 362, 356, 1, 0, 0, 0, 362, 357, 1, 0, 0, 0, 362, 358, 1, 0,
        0, 0, 362, 359, 1, 0, 0, 0, 362, 360, 1, 0, 0, 0, 362, 361, 1, 0, 0, 0, 363, 39, 1, 0, 0, 0, 364, 365, 7, 3, 0,
        0, 365, 41, 1, 0, 0, 0, 366, 367, 5, 23, 0, 0, 367, 368, 3, 40, 20, 0, 368, 43, 1, 0, 0, 0, 369, 370, 7, 4, 0,
        0, 370, 45, 1, 0, 0, 0, 371, 372, 5, 76, 0, 0, 372, 47, 1, 0, 0, 0, 373, 374, 5, 23, 0, 0, 374, 376, 3, 44, 22,
        0, 375, 377, 3, 50, 25, 0, 376, 375, 1, 0, 0, 0, 376, 377, 1, 0, 0, 0, 377, 49, 1, 0, 0, 0, 378, 387, 5, 6, 0,
        0, 379, 384, 3, 52, 26, 0, 380, 381, 5, 10, 0, 0, 381, 383, 3, 52, 26, 0, 382, 380, 1, 0, 0, 0, 383, 386, 1, 0,
        0, 0, 384, 382, 1, 0, 0, 0, 384, 385, 1, 0, 0, 0, 385, 388, 1, 0, 0, 0, 386, 384, 1, 0, 0, 0, 387, 379, 1, 0, 0,
        0, 387, 388, 1, 0, 0, 0, 388, 389, 1, 0, 0, 0, 389, 390, 5, 7, 0, 0, 390, 51, 1, 0, 0, 0, 391, 394, 3, 46, 23,
        0, 392, 393, 5, 11, 0, 0, 393, 395, 3, 154, 77, 0, 394, 392, 1, 0, 0, 0, 394, 395, 1, 0, 0, 0, 395, 398, 1, 0,
        0, 0, 396, 398, 3, 154, 77, 0, 397, 391, 1, 0, 0, 0, 397, 396, 1, 0, 0, 0, 398, 53, 1, 0, 0, 0, 399, 400, 5, 76,
        0, 0, 400, 55, 1, 0, 0, 0, 401, 403, 3, 58, 29, 0, 402, 401, 1, 0, 0, 0, 403, 404, 1, 0, 0, 0, 404, 402, 1, 0,
        0, 0, 404, 405, 1, 0, 0, 0, 405, 57, 1, 0, 0, 0, 406, 410, 3, 38, 19, 0, 407, 410, 3, 42, 21, 0, 408, 410, 3,
        48, 24, 0, 409, 406, 1, 0, 0, 0, 409, 407, 1, 0, 0, 0, 409, 408, 1, 0, 0, 0, 410, 413, 1, 0, 0, 0, 411, 409, 1,
        0, 0, 0, 411, 412, 1, 0, 0, 0, 412, 414, 1, 0, 0, 0, 413, 411, 1, 0, 0, 0, 414, 415, 5, 65, 0, 0, 415, 417, 3,
        60, 30, 0, 416, 418, 5, 9, 0, 0, 417, 416, 1, 0, 0, 0, 417, 418, 1, 0, 0, 0, 418, 59, 1, 0, 0, 0, 419, 424, 3,
        62, 31, 0, 420, 421, 5, 10, 0, 0, 421, 423, 3, 62, 31, 0, 422, 420, 1, 0, 0, 0, 423, 426, 1, 0, 0, 0, 424, 422,
        1, 0, 0, 0, 424, 425, 1, 0, 0, 0, 425, 61, 1, 0, 0, 0, 426, 424, 1, 0, 0, 0, 427, 429, 3, 54, 27, 0, 428, 430,
        5, 45, 0, 0, 429, 428, 1, 0, 0, 0, 429, 430, 1, 0, 0, 0, 430, 63, 1, 0, 0, 0, 431, 433, 3, 66, 33, 0, 432, 431,
        1, 0, 0, 0, 433, 434, 1, 0, 0, 0, 434, 432, 1, 0, 0, 0, 434, 435, 1, 0, 0, 0, 435, 65, 1, 0, 0, 0, 436, 440, 3,
        38, 19, 0, 437, 440, 3, 42, 21, 0, 438, 440, 3, 48, 24, 0, 439, 436, 1, 0, 0, 0, 439, 437, 1, 0, 0, 0, 439, 438,
        1, 0, 0, 0, 440, 443, 1, 0, 0, 0, 441, 439, 1, 0, 0, 0, 441, 442, 1, 0, 0, 0, 442, 444, 1, 0, 0, 0, 443, 441, 1,
        0, 0, 0, 444, 445, 5, 65, 0, 0, 445, 447, 3, 68, 34, 0, 446, 448, 5, 9, 0, 0, 447, 446, 1, 0, 0, 0, 447, 448, 1,
        0, 0, 0, 448, 67, 1, 0, 0, 0, 449, 454, 3, 70, 35, 0, 450, 451, 5, 10, 0, 0, 451, 453, 3, 70, 35, 0, 452, 450,
        1, 0, 0, 0, 453, 456, 1, 0, 0, 0, 454, 452, 1, 0, 0, 0, 454, 455, 1, 0, 0, 0, 455, 69, 1, 0, 0, 0, 456, 454, 1,
        0, 0, 0, 457, 458, 3, 54, 27, 0, 458, 71, 1, 0, 0, 0, 459, 460, 5, 76, 0, 0, 460, 73, 1, 0, 0, 0, 461, 463, 3,
        76, 38, 0, 462, 461, 1, 0, 0, 0, 463, 464, 1, 0, 0, 0, 464, 462, 1, 0, 0, 0, 464, 465, 1, 0, 0, 0, 465, 75, 1,
        0, 0, 0, 466, 469, 3, 78, 39, 0, 467, 469, 3, 80, 40, 0, 468, 466, 1, 0, 0, 0, 468, 467, 1, 0, 0, 0, 469, 77, 1,
        0, 0, 0, 470, 471, 3, 82, 41, 0, 471, 472, 3, 86, 43, 0, 472, 473, 5, 43, 0, 0, 473, 79, 1, 0, 0, 0, 474, 475,
        3, 84, 42, 0, 475, 476, 3, 86, 43, 0, 476, 477, 5, 44, 0, 0, 477, 81, 1, 0, 0, 0, 478, 482, 3, 38, 19, 0, 479,
        482, 3, 42, 21, 0, 480, 482, 3, 48, 24, 0, 481, 478, 1, 0, 0, 0, 481, 479, 1, 0, 0, 0, 481, 480, 1, 0, 0, 0,
        482, 485, 1, 0, 0, 0, 483, 481, 1, 0, 0, 0, 483, 484, 1, 0, 0, 0, 484, 487, 1, 0, 0, 0, 485, 483, 1, 0, 0, 0,
        486, 488, 5, 75, 0, 0, 487, 486, 1, 0, 0, 0, 487, 488, 1, 0, 0, 0, 488, 489, 1, 0, 0, 0, 489, 490, 5, 41, 0, 0,
        490, 491, 3, 72, 36, 0, 491, 493, 5, 6, 0, 0, 492, 494, 3, 148, 74, 0, 493, 492, 1, 0, 0, 0, 493, 494, 1, 0, 0,
        0, 494, 495, 1, 0, 0, 0, 495, 497, 5, 7, 0, 0, 496, 498, 5, 45, 0, 0, 497, 496, 1, 0, 0, 0, 497, 498, 1, 0, 0,
        0, 498, 83, 1, 0, 0, 0, 499, 503, 3, 38, 19, 0, 500, 503, 3, 42, 21, 0, 501, 503, 3, 48, 24, 0, 502, 499, 1, 0,
        0, 0, 502, 500, 1, 0, 0, 0, 502, 501, 1, 0, 0, 0, 503, 506, 1, 0, 0, 0, 504, 502, 1, 0, 0, 0, 504, 505, 1, 0, 0,
        0, 505, 508, 1, 0, 0, 0, 506, 504, 1, 0, 0, 0, 507, 509, 5, 75, 0, 0, 508, 507, 1, 0, 0, 0, 508, 509, 1, 0, 0,
        0, 509, 510, 1, 0, 0, 0, 510, 511, 5, 42, 0, 0, 511, 512, 3, 72, 36, 0, 512, 514, 5, 6, 0, 0, 513, 515, 3, 148,
        74, 0, 514, 513, 1, 0, 0, 0, 514, 515, 1, 0, 0, 0, 515, 516, 1, 0, 0, 0, 516, 518, 5, 7, 0, 0, 517, 519, 5, 45,
        0, 0, 518, 517, 1, 0, 0, 0, 518, 519, 1, 0, 0, 0, 519, 85, 1, 0, 0, 0, 520, 522, 3, 64, 32, 0, 521, 520, 1, 0,
        0, 0, 521, 522, 1, 0, 0, 0, 522, 523, 1, 0, 0, 0, 523, 524, 3, 144, 72, 0, 524, 87, 1, 0, 0, 0, 525, 526, 5, 63,
        0, 0, 526, 89, 1, 0, 0, 0, 527, 528, 5, 71, 0, 0, 528, 91, 1, 0, 0, 0, 529, 532, 5, 64, 0, 0, 530, 533, 3, 204,
        102, 0, 531, 533, 3, 168, 84, 0, 532, 530, 1, 0, 0, 0, 532, 531, 1, 0, 0, 0, 532, 533, 1, 0, 0, 0, 533, 93, 1,
        0, 0, 0, 534, 538, 3, 96, 48, 0, 535, 537, 3, 98, 49, 0, 536, 535, 1, 0, 0, 0, 537, 540, 1, 0, 0, 0, 538, 536,
        1, 0, 0, 0, 538, 539, 1, 0, 0, 0, 539, 542, 1, 0, 0, 0, 540, 538, 1, 0, 0, 0, 541, 543, 3, 100, 50, 0, 542, 541,
        1, 0, 0, 0, 542, 543, 1, 0, 0, 0, 543, 544, 1, 0, 0, 0, 544, 545, 5, 47, 0, 0, 545, 95, 1, 0, 0, 0, 546, 547, 5,
        49, 0, 0, 547, 548, 3, 168, 84, 0, 548, 549, 5, 52, 0, 0, 549, 550, 3, 144, 72, 0, 550, 97, 1, 0, 0, 0, 551,
        552, 5, 50, 0, 0, 552, 553, 3, 168, 84, 0, 553, 554, 5, 52, 0, 0, 554, 555, 3, 144, 72, 0, 555, 99, 1, 0, 0, 0,
        556, 557, 5, 51, 0, 0, 557, 558, 3, 144, 72, 0, 558, 101, 1, 0, 0, 0, 559, 560, 5, 53, 0, 0, 560, 561, 3, 168,
        84, 0, 561, 562, 5, 54, 0, 0, 562, 563, 3, 144, 72, 0, 563, 564, 5, 48, 0, 0, 564, 103, 1, 0, 0, 0, 565, 566, 5,
        55, 0, 0, 566, 567, 5, 76, 0, 0, 567, 568, 5, 11, 0, 0, 568, 569, 3, 168, 84, 0, 569, 570, 5, 56, 0, 0, 570,
        571, 3, 168, 84, 0, 571, 572, 5, 54, 0, 0, 572, 573, 3, 144, 72, 0, 573, 574, 5, 48, 0, 0, 574, 105, 1, 0, 0, 0,
        575, 576, 5, 55, 0, 0, 576, 577, 5, 57, 0, 0, 577, 578, 5, 76, 0, 0, 578, 579, 5, 58, 0, 0, 579, 580, 3, 168,
        84, 0, 580, 581, 5, 54, 0, 0, 581, 582, 3, 144, 72, 0, 582, 583, 5, 48, 0, 0, 583, 107, 1, 0, 0, 0, 584, 585, 5,
        59, 0, 0, 585, 586, 3, 124, 62, 0, 586, 587, 5, 60, 0, 0, 587, 588, 3, 126, 63, 0, 588, 589, 5, 61, 0, 0, 589,
        109, 1, 0, 0, 0, 590, 592, 5, 62, 0, 0, 591, 593, 3, 168, 84, 0, 592, 591, 1, 0, 0, 0, 592, 593, 1, 0, 0, 0,
        593, 111, 1, 0, 0, 0, 594, 597, 5, 72, 0, 0, 595, 598, 3, 204, 102, 0, 596, 598, 3, 164, 82, 0, 597, 595, 1, 0,
        0, 0, 597, 596, 1, 0, 0, 0, 598, 113, 1, 0, 0, 0, 599, 602, 5, 76, 0, 0, 600, 602, 3, 186, 93, 0, 601, 599, 1,
        0, 0, 0, 601, 600, 1, 0, 0, 0, 602, 606, 1, 0, 0, 0, 603, 605, 3, 192, 96, 0, 604, 603, 1, 0, 0, 0, 605, 608, 1,
        0, 0, 0, 606, 604, 1, 0, 0, 0, 606, 607, 1, 0, 0, 0, 607, 609, 1, 0, 0, 0, 608, 606, 1, 0, 0, 0, 609, 612, 3,
        198, 99, 0, 610, 612, 3, 186, 93, 0, 611, 601, 1, 0, 0, 0, 611, 610, 1, 0, 0, 0, 612, 115, 1, 0, 0, 0, 613, 614,
        3, 138, 69, 0, 614, 117, 1, 0, 0, 0, 615, 616, 5, 76, 0, 0, 616, 119, 1, 0, 0, 0, 617, 618, 5, 29, 0, 0, 618,
        619, 3, 118, 59, 0, 619, 620, 5, 8, 0, 0, 620, 121, 1, 0, 0, 0, 621, 622, 5, 70, 0, 0, 622, 623, 5, 29, 0, 0,
        623, 624, 3, 118, 59, 0, 624, 123, 1, 0, 0, 0, 625, 626, 3, 144, 72, 0, 626, 125, 1, 0, 0, 0, 627, 628, 3, 144,
        72, 0, 628, 127, 1, 0, 0, 0, 629, 630, 3, 168, 84, 0, 630, 129, 1, 0, 0, 0, 631, 632, 3, 168, 84, 0, 632, 131,
        1, 0, 0, 0, 633, 634, 5, 73, 0, 0, 634, 635, 3, 128, 64, 0, 635, 636, 5, 10, 0, 0, 636, 637, 3, 130, 65, 0, 637,
        133, 1, 0, 0, 0, 638, 639, 5, 74, 0, 0, 639, 640, 3, 128, 64, 0, 640, 641, 5, 10, 0, 0, 641, 642, 3, 130, 65, 0,
        642, 135, 1, 0, 0, 0, 643, 644, 5, 22, 0, 0, 644, 645, 5, 6, 0, 0, 645, 646, 3, 168, 84, 0, 646, 647, 5, 10, 0,
        0, 647, 648, 3, 168, 84, 0, 648, 649, 5, 10, 0, 0, 649, 650, 3, 168, 84, 0, 650, 651, 5, 7, 0, 0, 651, 137, 1,
        0, 0, 0, 652, 653, 5, 126, 0, 0, 653, 654, 3, 168, 84, 0, 654, 139, 1, 0, 0, 0, 655, 656, 3, 144, 72, 0, 656,
        141, 1, 0, 0, 0, 657, 658, 3, 144, 72, 0, 658, 143, 1, 0, 0, 0, 659, 662, 3, 160, 80, 0, 660, 662, 3, 38, 19, 0,
        661, 659, 1, 0, 0, 0, 661, 660, 1, 0, 0, 0, 662, 665, 1, 0, 0, 0, 663, 661, 1, 0, 0, 0, 663, 664, 1, 0, 0, 0,
        664, 145, 1, 0, 0, 0, 665, 663, 1, 0, 0, 0, 666, 667, 7, 5, 0, 0, 667, 147, 1, 0, 0, 0, 668, 673, 3, 150, 75, 0,
        669, 670, 5, 10, 0, 0, 670, 672, 3, 150, 75, 0, 671, 669, 1, 0, 0, 0, 672, 675, 1, 0, 0, 0, 673, 671, 1, 0, 0,
        0, 673, 674, 1, 0, 0, 0, 674, 149, 1, 0, 0, 0, 675, 673, 1, 0, 0, 0, 676, 678, 3, 48, 24, 0, 677, 676, 1, 0, 0,
        0, 678, 681, 1, 0, 0, 0, 679, 677, 1, 0, 0, 0, 679, 680, 1, 0, 0, 0, 680, 683, 1, 0, 0, 0, 681, 679, 1, 0, 0, 0,
        682, 684, 5, 46, 0, 0, 683, 682, 1, 0, 0, 0, 683, 684, 1, 0, 0, 0, 684, 685, 1, 0, 0, 0, 685, 688, 5, 76, 0, 0,
        686, 687, 5, 11, 0, 0, 687, 689, 3, 152, 76, 0, 688, 686, 1, 0, 0, 0, 688, 689, 1, 0, 0, 0, 689, 151, 1, 0, 0,
        0, 690, 691, 3, 154, 77, 0, 691, 153, 1, 0, 0, 0, 692, 694, 7, 6, 0, 0, 693, 692, 1, 0, 0, 0, 693, 694, 1, 0, 0,
        0, 694, 695, 1, 0, 0, 0, 695, 703, 3, 146, 73, 0, 696, 703, 3, 158, 79, 0, 697, 703, 5, 30, 0, 0, 698, 703, 5,
        31, 0, 0, 699, 703, 5, 32, 0, 0, 700, 703, 5, 33, 0, 0, 701, 703, 5, 35, 0, 0, 702, 693, 1, 0, 0, 0, 702, 696,
        1, 0, 0, 0, 702, 697, 1, 0, 0, 0, 702, 698, 1, 0, 0, 0, 702, 699, 1, 0, 0, 0, 702, 700, 1, 0, 0, 0, 702, 701, 1,
        0, 0, 0, 703, 155, 1, 0, 0, 0, 704, 710, 5, 38, 0, 0, 705, 709, 5, 40, 0, 0, 706, 709, 5, 28, 0, 0, 707, 709, 3,
        38, 19, 0, 708, 705, 1, 0, 0, 0, 708, 706, 1, 0, 0, 0, 708, 707, 1, 0, 0, 0, 709, 712, 1, 0, 0, 0, 710, 708, 1,
        0, 0, 0, 710, 711, 1, 0, 0, 0, 711, 713, 1, 0, 0, 0, 712, 710, 1, 0, 0, 0, 713, 714, 5, 39, 0, 0, 714, 157, 1,
        0, 0, 0, 715, 718, 5, 37, 0, 0, 716, 718, 3, 156, 78, 0, 717, 715, 1, 0, 0, 0, 717, 716, 1, 0, 0, 0, 718, 719,
        1, 0, 0, 0, 719, 717, 1, 0, 0, 0, 719, 720, 1, 0, 0, 0, 720, 159, 1, 0, 0, 0, 721, 727, 3, 120, 60, 0, 722, 728,
        3, 114, 57, 0, 723, 728, 3, 116, 58, 0, 724, 728, 3, 206, 103, 0, 725, 728, 3, 162, 81, 0, 726, 728, 3, 38, 19,
        0, 727, 722, 1, 0, 0, 0, 727, 723, 1, 0, 0, 0, 727, 724, 1, 0, 0, 0, 727, 725, 1, 0, 0, 0, 727, 726, 1, 0, 0, 0,
        727, 728, 1, 0, 0, 0, 728, 737, 1, 0, 0, 0, 729, 735, 3, 114, 57, 0, 730, 735, 3, 116, 58, 0, 731, 735, 3, 206,
        103, 0, 732, 735, 3, 162, 81, 0, 733, 735, 3, 38, 19, 0, 734, 729, 1, 0, 0, 0, 734, 730, 1, 0, 0, 0, 734, 731,
        1, 0, 0, 0, 734, 732, 1, 0, 0, 0, 734, 733, 1, 0, 0, 0, 735, 737, 1, 0, 0, 0, 736, 721, 1, 0, 0, 0, 736, 734, 1,
        0, 0, 0, 737, 739, 1, 0, 0, 0, 738, 740, 5, 9, 0, 0, 739, 738, 1, 0, 0, 0, 739, 740, 1, 0, 0, 0, 740, 743, 1, 0,
        0, 0, 741, 743, 5, 9, 0, 0, 742, 736, 1, 0, 0, 0, 742, 741, 1, 0, 0, 0, 743, 161, 1, 0, 0, 0, 744, 748, 3, 196,
        98, 0, 745, 747, 3, 38, 19, 0, 746, 745, 1, 0, 0, 0, 747, 750, 1, 0, 0, 0, 748, 746, 1, 0, 0, 0, 748, 749, 1, 0,
        0, 0, 749, 751, 1, 0, 0, 0, 750, 748, 1, 0, 0, 0, 751, 755, 5, 11, 0, 0, 752, 754, 3, 38, 19, 0, 753, 752, 1, 0,
        0, 0, 754, 757, 1, 0, 0, 0, 755, 753, 1, 0, 0, 0, 755, 756, 1, 0, 0, 0, 756, 758, 1, 0, 0, 0, 757, 755, 1, 0, 0,
        0, 758, 759, 3, 168, 84, 0, 759, 163, 1, 0, 0, 0, 760, 765, 3, 166, 83, 0, 761, 762, 5, 10, 0, 0, 762, 764, 3,
        166, 83, 0, 763, 761, 1, 0, 0, 0, 764, 767, 1, 0, 0, 0, 765, 763, 1, 0, 0, 0, 765, 766, 1, 0, 0, 0, 766, 165, 1,
        0, 0, 0, 767, 765, 1, 0, 0, 0, 768, 770, 3, 168, 84, 0, 769, 768, 1, 0, 0, 0, 769, 770, 1, 0, 0, 0, 770, 167, 1,
        0, 0, 0, 771, 794, 3, 178, 89, 0, 772, 774, 3, 38, 19, 0, 773, 772, 1, 0, 0, 0, 774, 777, 1, 0, 0, 0, 775, 773,
        1, 0, 0, 0, 775, 776, 1, 0, 0, 0, 776, 778, 1, 0, 0, 0, 777, 775, 1, 0, 0, 0, 778, 782, 3, 170, 85, 0, 779, 781,
        3, 38, 19, 0, 780, 779, 1, 0, 0, 0, 781, 784, 1, 0, 0, 0, 782, 780, 1, 0, 0, 0, 782, 783, 1, 0, 0, 0, 783, 785,
        1, 0, 0, 0, 784, 782, 1, 0, 0, 0, 785, 789, 3, 178, 89, 0, 786, 788, 3, 38, 19, 0, 787, 786, 1, 0, 0, 0, 788,
        791, 1, 0, 0, 0, 789, 787, 1, 0, 0, 0, 789, 790, 1, 0, 0, 0, 790, 793, 1, 0, 0, 0, 791, 789, 1, 0, 0, 0, 792,
        775, 1, 0, 0, 0, 793, 796, 1, 0, 0, 0, 794, 792, 1, 0, 0, 0, 794, 795, 1, 0, 0, 0, 795, 169, 1, 0, 0, 0, 796,
        794, 1, 0, 0, 0, 797, 805, 5, 12, 0, 0, 798, 805, 5, 13, 0, 0, 799, 805, 5, 19, 0, 0, 800, 805, 5, 20, 0, 0,
        801, 805, 5, 21, 0, 0, 802, 805, 3, 174, 87, 0, 803, 805, 3, 172, 86, 0, 804, 797, 1, 0, 0, 0, 804, 798, 1, 0,
        0, 0, 804, 799, 1, 0, 0, 0, 804, 800, 1, 0, 0, 0, 804, 801, 1, 0, 0, 0, 804, 802, 1, 0, 0, 0, 804, 803, 1, 0, 0,
        0, 805, 171, 1, 0, 0, 0, 806, 807, 7, 7, 0, 0, 807, 173, 1, 0, 0, 0, 808, 809, 7, 8, 0, 0, 809, 175, 1, 0, 0, 0,
        810, 811, 7, 9, 0, 0, 811, 177, 1, 0, 0, 0, 812, 814, 3, 176, 88, 0, 813, 812, 1, 0, 0, 0, 813, 814, 1, 0, 0, 0,
        814, 832, 1, 0, 0, 0, 815, 833, 3, 154, 77, 0, 816, 833, 3, 190, 95, 0, 817, 818, 5, 6, 0, 0, 818, 819, 3, 168,
        84, 0, 819, 820, 5, 7, 0, 0, 820, 824, 1, 0, 0, 0, 821, 823, 3, 192, 96, 0, 822, 821, 1, 0, 0, 0, 823, 826, 1,
        0, 0, 0, 824, 822, 1, 0, 0, 0, 824, 825, 1, 0, 0, 0, 825, 833, 1, 0, 0, 0, 826, 824, 1, 0, 0, 0, 827, 830, 5,
        76, 0, 0, 828, 830, 3, 186, 93, 0, 829, 827, 1, 0, 0, 0, 829, 828, 1, 0, 0, 0, 830, 833, 1, 0, 0, 0, 831, 833,
        3, 138, 69, 0, 832, 815, 1, 0, 0, 0, 832, 816, 1, 0, 0, 0, 832, 817, 1, 0, 0, 0, 832, 829, 1, 0, 0, 0, 832, 831,
        1, 0, 0, 0, 833, 179, 1, 0, 0, 0, 834, 835, 5, 69, 0, 0, 835, 837, 3, 182, 91, 0, 836, 838, 3, 204, 102, 0, 837,
        836, 1, 0, 0, 0, 837, 838, 1, 0, 0, 0, 838, 842, 1, 0, 0, 0, 839, 840, 5, 69, 0, 0, 840, 842, 3, 204, 102, 0,
        841, 834, 1, 0, 0, 0, 841, 839, 1, 0, 0, 0, 842, 181, 1, 0, 0, 0, 843, 844, 5, 76, 0, 0, 844, 183, 1, 0, 0, 0,
        845, 846, 3, 188, 94, 0, 846, 847, 3, 204, 102, 0, 847, 185, 1, 0, 0, 0, 848, 849, 3, 188, 94, 0, 849, 850, 3,
        204, 102, 0, 850, 187, 1, 0, 0, 0, 851, 852, 5, 76, 0, 0, 852, 189, 1, 0, 0, 0, 853, 858, 5, 76, 0, 0, 854, 858,
        3, 180, 90, 0, 855, 858, 3, 136, 68, 0, 856, 858, 3, 186, 93, 0, 857, 853, 1, 0, 0, 0, 857, 854, 1, 0, 0, 0,
        857, 855, 1, 0, 0, 0, 857, 856, 1, 0, 0, 0, 858, 862, 1, 0, 0, 0, 859, 861, 3, 192, 96, 0, 860, 859, 1, 0, 0, 0,
        861, 864, 1, 0, 0, 0, 862, 860, 1, 0, 0, 0, 862, 863, 1, 0, 0, 0, 863, 191, 1, 0, 0, 0, 864, 862, 1, 0, 0, 0,
        865, 869, 3, 202, 101, 0, 866, 869, 3, 200, 100, 0, 867, 869, 3, 198, 99, 0, 868, 865, 1, 0, 0, 0, 868, 866, 1,
        0, 0, 0, 868, 867, 1, 0, 0, 0, 869, 193, 1, 0, 0, 0, 870, 872, 3, 192, 96, 0, 871, 870, 1, 0, 0, 0, 872, 875, 1,
        0, 0, 0, 873, 871, 1, 0, 0, 0, 873, 874, 1, 0, 0, 0, 874, 878, 1, 0, 0, 0, 875, 873, 1, 0, 0, 0, 876, 879, 3,
        202, 101, 0, 877, 879, 3, 200, 100, 0, 878, 876, 1, 0, 0, 0, 878, 877, 1, 0, 0, 0, 879, 195, 1, 0, 0, 0, 880,
        883, 5, 76, 0, 0, 881, 883, 3, 186, 93, 0, 882, 880, 1, 0, 0, 0, 882, 881, 1, 0, 0, 0, 883, 885, 1, 0, 0, 0,
        884, 886, 3, 194, 97, 0, 885, 884, 1, 0, 0, 0, 885, 886, 1, 0, 0, 0, 886, 197, 1, 0, 0, 0, 887, 888, 5, 3, 0, 0,
        888, 889, 3, 184, 92, 0, 889, 199, 1, 0, 0, 0, 890, 891, 5, 4, 0, 0, 891, 892, 3, 168, 84, 0, 892, 893, 5, 5, 0,
        0, 893, 201, 1, 0, 0, 0, 894, 895, 5, 3, 0, 0, 895, 896, 5, 76, 0, 0, 896, 203, 1, 0, 0, 0, 897, 898, 5, 6, 0,
        0, 898, 899, 3, 164, 82, 0, 899, 900, 5, 7, 0, 0, 900, 205, 1, 0, 0, 0, 901, 915, 3, 94, 47, 0, 902, 915, 3,
        102, 51, 0, 903, 915, 3, 104, 52, 0, 904, 915, 3, 106, 53, 0, 905, 915, 3, 108, 54, 0, 906, 915, 3, 110, 55, 0,
        907, 915, 3, 88, 44, 0, 908, 915, 3, 90, 45, 0, 909, 915, 3, 92, 46, 0, 910, 915, 3, 112, 56, 0, 911, 915, 3,
        122, 61, 0, 912, 915, 3, 132, 66, 0, 913, 915, 3, 134, 67, 0, 914, 901, 1, 0, 0, 0, 914, 902, 1, 0, 0, 0, 914,
        903, 1, 0, 0, 0, 914, 904, 1, 0, 0, 0, 914, 905, 1, 0, 0, 0, 914, 906, 1, 0, 0, 0, 914, 907, 1, 0, 0, 0, 914,
        908, 1, 0, 0, 0, 914, 909, 1, 0, 0, 0, 914, 910, 1, 0, 0, 0, 914, 911, 1, 0, 0, 0, 914, 912, 1, 0, 0, 0, 914,
        913, 1, 0, 0, 0, 915, 207, 1, 0, 0, 0, 97, 209, 212, 217, 221, 226, 232, 250, 256, 259, 264, 267, 274, 297, 304,
        308, 314, 321, 329, 349, 362, 376, 384, 387, 394, 397, 404, 409, 411, 417, 424, 429, 434, 439, 441, 447, 454,
        464, 468, 481, 483, 487, 493, 497, 502, 504, 508, 514, 518, 521, 532, 538, 542, 592, 597, 601, 606, 611, 661,
        663, 673, 679, 683, 688, 693, 702, 708, 710, 717, 719, 727, 734, 736, 739, 742, 748, 755, 765, 769, 775, 782,
        789, 794, 804, 813, 824, 829, 832, 837, 841, 857, 862, 868, 873, 878, 882, 885, 914,
    ];

    private static __ATN: ATN;

    public static get _ATN(): ATN {
        if (!BSLParser.__ATN) {
            BSLParser.__ATN = new ATNDeserializer().deserialize(BSLParser._serializedATN);
        }

        return BSLParser.__ATN;
    }

    static DecisionsToDFA = BSLParser._ATN.decisionToState.map(
        (ds: DecisionState, index: number) => new DFA(ds, index)
    );
}

export class FileContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public fileCodeBlock(): FileCodeBlockContext {
        return this.getTypedRuleContext(FileCodeBlockContext, 0) as FileCodeBlockContext;
    }

    public EOF(): TerminalNode {
        return this.getToken(BSLParser.EOF, 0);
    }

    public shebang(): ShebangContext {
        return this.getTypedRuleContext(ShebangContext, 0) as ShebangContext;
    }

    public moduleAnnotations(): ModuleAnnotationsContext {
        return this.getTypedRuleContext(ModuleAnnotationsContext, 0) as ModuleAnnotationsContext;
    }

    public preprocessor_list(): PreprocessorContext[] {
        return this.getTypedRuleContexts(PreprocessorContext) as PreprocessorContext[];
    }

    public preprocessor(i: number): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, i) as PreprocessorContext;
    }

    public moduleVars(): ModuleVarsContext {
        return this.getTypedRuleContext(ModuleVarsContext, 0) as ModuleVarsContext;
    }

    public fileCodeBlockBeforeSub(): FileCodeBlockBeforeSubContext {
        return this.getTypedRuleContext(FileCodeBlockBeforeSubContext, 0) as FileCodeBlockBeforeSubContext;
    }

    public subs(): SubsContext {
        return this.getTypedRuleContext(SubsContext, 0) as SubsContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_file;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterFile) {
            listener.enterFile(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitFile) {
            listener.exitFile(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitFile) {
            return visitor.visitFile(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_nativeContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public HASH(): TerminalNode {
        return this.getToken(BSLParser.HASH, 0);
    }

    public PREPROC_NATIVE(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_NATIVE, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_native;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_native) {
            listener.enterPreproc_native(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_native) {
            listener.exitPreproc_native(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_native) {
            return visitor.visitPreproc_native(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UsedLibContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_STRING(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_STRING, 0);
    }

    public PREPROC_IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_usedLib;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterUsedLib) {
            listener.enterUsedLib(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitUsedLib) {
            listener.exitUsedLib(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitUsedLib) {
            return visitor.visitUsedLib(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UseContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public HASH(): TerminalNode {
        return this.getToken(BSLParser.HASH, 0);
    }

    public PREPROC_USE_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_USE_KEYWORD, 0);
    }

    public usedLib(): UsedLibContext {
        return this.getTypedRuleContext(UsedLibContext, 0) as UsedLibContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_use;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterUse) {
            listener.enterUse(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitUse) {
            listener.exitUse(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitUse) {
            return visitor.visitUse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ModuleAnnotationsContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public preproc_native(): Preproc_nativeContext {
        return this.getTypedRuleContext(Preproc_nativeContext, 0) as Preproc_nativeContext;
    }

    public use_list(): UseContext[] {
        return this.getTypedRuleContexts(UseContext) as UseContext[];
    }

    public use(i: number): UseContext {
        return this.getTypedRuleContext(UseContext, i) as UseContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_moduleAnnotations;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterModuleAnnotations) {
            listener.enterModuleAnnotations(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitModuleAnnotations) {
            listener.exitModuleAnnotations(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitModuleAnnotations) {
            return visitor.visitModuleAnnotations(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ShebangContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public HASH(): TerminalNode {
        return this.getToken(BSLParser.HASH, 0);
    }

    public PREPROC_EXCLAMATION_MARK(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_EXCLAMATION_MARK, 0);
    }

    public PREPROC_ANY_list(): TerminalNode[] {
        return this.getTokens(BSLParser.PREPROC_ANY);
    }

    public PREPROC_ANY(i: number): TerminalNode {
        return this.getToken(BSLParser.PREPROC_ANY, i);
    }

    public PREPROC_IDENTIFIER_list(): TerminalNode[] {
        return this.getTokens(BSLParser.PREPROC_IDENTIFIER);
    }

    public PREPROC_IDENTIFIER(i: number): TerminalNode {
        return this.getToken(BSLParser.PREPROC_IDENTIFIER, i);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_shebang;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterShebang) {
            listener.enterShebang(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitShebang) {
            listener.exitShebang(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitShebang) {
            return visitor.visitShebang(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RegionStartContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_REGION(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_REGION, 0);
    }

    public regionName(): RegionNameContext {
        return this.getTypedRuleContext(RegionNameContext, 0) as RegionNameContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_regionStart;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterRegionStart) {
            listener.enterRegionStart(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitRegionStart) {
            listener.exitRegionStart(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitRegionStart) {
            return visitor.visitRegionStart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RegionEndContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_END_REGION(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_END_REGION, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_regionEnd;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterRegionEnd) {
            listener.enterRegionEnd(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitRegionEnd) {
            listener.exitRegionEnd(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitRegionEnd) {
            return visitor.visitRegionEnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RegionNameContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_regionName;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterRegionName) {
            listener.enterRegionName(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitRegionName) {
            listener.exitRegionName(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitRegionName) {
            return visitor.visitRegionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_ifContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_IF_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_IF_KEYWORD, 0);
    }

    public preproc_expression(): Preproc_expressionContext {
        return this.getTypedRuleContext(Preproc_expressionContext, 0) as Preproc_expressionContext;
    }

    public PREPROC_THEN_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_THEN_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_if;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_if) {
            listener.enterPreproc_if(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_if) {
            listener.exitPreproc_if(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_if) {
            return visitor.visitPreproc_if(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_elsifContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_ELSIF_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_ELSIF_KEYWORD, 0);
    }

    public preproc_expression(): Preproc_expressionContext {
        return this.getTypedRuleContext(Preproc_expressionContext, 0) as Preproc_expressionContext;
    }

    public PREPROC_THEN_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_THEN_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_elsif;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_elsif) {
            listener.enterPreproc_elsif(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_elsif) {
            listener.exitPreproc_elsif(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_elsif) {
            return visitor.visitPreproc_elsif(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_elseContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_ELSE_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_ELSE_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_else;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_else) {
            listener.enterPreproc_else(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_else) {
            listener.exitPreproc_else(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_else) {
            return visitor.visitPreproc_else(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_endifContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_ENDIF_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_ENDIF_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_endif;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_endif) {
            listener.enterPreproc_endif(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_endif) {
            listener.exitPreproc_endif(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_endif) {
            return visitor.visitPreproc_endif(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_expressionContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_LPAREN(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_LPAREN, 0);
    }

    public preproc_expression(): Preproc_expressionContext {
        return this.getTypedRuleContext(Preproc_expressionContext, 0) as Preproc_expressionContext;
    }

    public PREPROC_RPAREN(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_RPAREN, 0);
    }

    public PREPROC_NOT_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_NOT_KEYWORD, 0);
    }

    public preproc_logicalExpression(): Preproc_logicalExpressionContext {
        return this.getTypedRuleContext(Preproc_logicalExpressionContext, 0) as Preproc_logicalExpressionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_expression;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_expression) {
            listener.enterPreproc_expression(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_expression) {
            listener.exitPreproc_expression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_expression) {
            return visitor.visitPreproc_expression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_logicalOperandContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_LPAREN(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_LPAREN, 0);
    }

    public preproc_logicalOperand(): Preproc_logicalOperandContext {
        return this.getTypedRuleContext(Preproc_logicalOperandContext, 0) as Preproc_logicalOperandContext;
    }

    public PREPROC_RPAREN(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_RPAREN, 0);
    }

    public PREPROC_NOT_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_NOT_KEYWORD, 0);
    }

    public preproc_symbol(): Preproc_symbolContext {
        return this.getTypedRuleContext(Preproc_symbolContext, 0) as Preproc_symbolContext;
    }

    public preproc_logicalExpression(): Preproc_logicalExpressionContext {
        return this.getTypedRuleContext(Preproc_logicalExpressionContext, 0) as Preproc_logicalExpressionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_logicalOperand;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_logicalOperand) {
            listener.enterPreproc_logicalOperand(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_logicalOperand) {
            listener.exitPreproc_logicalOperand(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_logicalOperand) {
            return visitor.visitPreproc_logicalOperand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_logicalExpressionContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public preproc_logicalOperand_list(): Preproc_logicalOperandContext[] {
        return this.getTypedRuleContexts(Preproc_logicalOperandContext) as Preproc_logicalOperandContext[];
    }

    public preproc_logicalOperand(i: number): Preproc_logicalOperandContext {
        return this.getTypedRuleContext(Preproc_logicalOperandContext, i) as Preproc_logicalOperandContext;
    }

    public preproc_boolOperation_list(): Preproc_boolOperationContext[] {
        return this.getTypedRuleContexts(Preproc_boolOperationContext) as Preproc_boolOperationContext[];
    }

    public preproc_boolOperation(i: number): Preproc_boolOperationContext {
        return this.getTypedRuleContext(Preproc_boolOperationContext, i) as Preproc_boolOperationContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_logicalExpression;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_logicalExpression) {
            listener.enterPreproc_logicalExpression(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_logicalExpression) {
            listener.exitPreproc_logicalExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_logicalExpression) {
            return visitor.visitPreproc_logicalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_symbolContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_CLIENT_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_CLIENT_SYMBOL, 0);
    }

    public PREPROC_ATCLIENT_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_ATCLIENT_SYMBOL, 0);
    }

    public PREPROC_SERVER_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_SERVER_SYMBOL, 0);
    }

    public PREPROC_ATSERVER_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_ATSERVER_SYMBOL, 0);
    }

    public PREPROC_MOBILEAPPCLIENT_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_MOBILEAPPCLIENT_SYMBOL, 0);
    }

    public PREPROC_MOBILEAPPSERVER_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_MOBILEAPPSERVER_SYMBOL, 0);
    }

    public PREPROC_MOBILECLIENT_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_MOBILECLIENT_SYMBOL, 0);
    }

    public PREPROC_THICKCLIENTORDINARYAPPLICATION_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_THICKCLIENTORDINARYAPPLICATION_SYMBOL, 0);
    }

    public PREPROC_THICKCLIENTMANAGEDAPPLICATION_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_THICKCLIENTMANAGEDAPPLICATION_SYMBOL, 0);
    }

    public PREPROC_EXTERNALCONNECTION_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_EXTERNALCONNECTION_SYMBOL, 0);
    }

    public PREPROC_THINCLIENT_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_THINCLIENT_SYMBOL, 0);
    }

    public PREPROC_WEBCLIENT_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_WEBCLIENT_SYMBOL, 0);
    }

    public PREPROC_MOBILE_STANDALONE_SERVER(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_MOBILE_STANDALONE_SERVER, 0);
    }

    public PREPROC_LINUX(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_LINUX, 0);
    }

    public PREPROC_WINDOWS(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_WINDOWS, 0);
    }

    public PREPROC_MACOS(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_MACOS, 0);
    }

    public preproc_unknownSymbol(): Preproc_unknownSymbolContext {
        return this.getTypedRuleContext(Preproc_unknownSymbolContext, 0) as Preproc_unknownSymbolContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_symbol;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_symbol) {
            listener.enterPreproc_symbol(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_symbol) {
            listener.exitPreproc_symbol(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_symbol) {
            return visitor.visitPreproc_symbol(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_unknownSymbolContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_unknownSymbol;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_unknownSymbol) {
            listener.enterPreproc_unknownSymbol(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_unknownSymbol) {
            listener.exitPreproc_unknownSymbol(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_unknownSymbol) {
            return visitor.visitPreproc_unknownSymbol(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Preproc_boolOperationContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PREPROC_OR_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_OR_KEYWORD, 0);
    }

    public PREPROC_AND_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PREPROC_AND_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preproc_boolOperation;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreproc_boolOperation) {
            listener.enterPreproc_boolOperation(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreproc_boolOperation) {
            listener.exitPreproc_boolOperation(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreproc_boolOperation) {
            return visitor.visitPreproc_boolOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PreprocessorContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public HASH(): TerminalNode {
        return this.getToken(BSLParser.HASH, 0);
    }

    public regionStart(): RegionStartContext {
        return this.getTypedRuleContext(RegionStartContext, 0) as RegionStartContext;
    }

    public regionEnd(): RegionEndContext {
        return this.getTypedRuleContext(RegionEndContext, 0) as RegionEndContext;
    }

    public preproc_if(): Preproc_ifContext {
        return this.getTypedRuleContext(Preproc_ifContext, 0) as Preproc_ifContext;
    }

    public preproc_elsif(): Preproc_elsifContext {
        return this.getTypedRuleContext(Preproc_elsifContext, 0) as Preproc_elsifContext;
    }

    public preproc_else(): Preproc_elseContext {
        return this.getTypedRuleContext(Preproc_elseContext, 0) as Preproc_elseContext;
    }

    public preproc_endif(): Preproc_endifContext {
        return this.getTypedRuleContext(Preproc_endifContext, 0) as Preproc_endifContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_preprocessor;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterPreprocessor) {
            listener.enterPreprocessor(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitPreprocessor) {
            listener.exitPreprocessor(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitPreprocessor) {
            return visitor.visitPreprocessor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CompilerDirectiveSymbolContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ANNOTATION_ATSERVERNOCONTEXT_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_ATSERVERNOCONTEXT_SYMBOL, 0);
    }

    public ANNOTATION_ATCLIENTATSERVERNOCONTEXT_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_ATCLIENTATSERVERNOCONTEXT_SYMBOL, 0);
    }

    public ANNOTATION_ATCLIENTATSERVER_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_ATCLIENTATSERVER_SYMBOL, 0);
    }

    public ANNOTATION_ATCLIENT_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_ATCLIENT_SYMBOL, 0);
    }

    public ANNOTATION_ATSERVER_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_ATSERVER_SYMBOL, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_compilerDirectiveSymbol;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterCompilerDirectiveSymbol) {
            listener.enterCompilerDirectiveSymbol(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitCompilerDirectiveSymbol) {
            listener.exitCompilerDirectiveSymbol(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitCompilerDirectiveSymbol) {
            return visitor.visitCompilerDirectiveSymbol(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CompilerDirectiveContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public AMPERSAND(): TerminalNode {
        return this.getToken(BSLParser.AMPERSAND, 0);
    }

    public compilerDirectiveSymbol(): CompilerDirectiveSymbolContext {
        return this.getTypedRuleContext(CompilerDirectiveSymbolContext, 0) as CompilerDirectiveSymbolContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_compilerDirective;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterCompilerDirective) {
            listener.enterCompilerDirective(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitCompilerDirective) {
            listener.exitCompilerDirective(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitCompilerDirective) {
            return visitor.visitCompilerDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AnnotationNameContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ANNOTATION_CUSTOM_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_CUSTOM_SYMBOL, 0);
    }

    public ANNOTATION_BEFORE_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_BEFORE_SYMBOL, 0);
    }

    public ANNOTATION_AFTER_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_AFTER_SYMBOL, 0);
    }

    public ANNOTATION_AROUND_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_AROUND_SYMBOL, 0);
    }

    public ANNOTATION_CHANGEANDVALIDATE_SYMBOL(): TerminalNode {
        return this.getToken(BSLParser.ANNOTATION_CHANGEANDVALIDATE_SYMBOL, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_annotationName;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAnnotationName) {
            listener.enterAnnotationName(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAnnotationName) {
            listener.exitAnnotationName(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAnnotationName) {
            return visitor.visitAnnotationName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AnnotationParamNameContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_annotationParamName;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAnnotationParamName) {
            listener.enterAnnotationParamName(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAnnotationParamName) {
            listener.exitAnnotationParamName(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAnnotationParamName) {
            return visitor.visitAnnotationParamName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AnnotationContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public AMPERSAND(): TerminalNode {
        return this.getToken(BSLParser.AMPERSAND, 0);
    }

    public annotationName(): AnnotationNameContext {
        return this.getTypedRuleContext(AnnotationNameContext, 0) as AnnotationNameContext;
    }

    public annotationParams(): AnnotationParamsContext {
        return this.getTypedRuleContext(AnnotationParamsContext, 0) as AnnotationParamsContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_annotation;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AnnotationParamsContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(BSLParser.LPAREN, 0);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(BSLParser.RPAREN, 0);
    }

    public annotationParam_list(): AnnotationParamContext[] {
        return this.getTypedRuleContexts(AnnotationParamContext) as AnnotationParamContext[];
    }

    public annotationParam(i: number): AnnotationParamContext {
        return this.getTypedRuleContext(AnnotationParamContext, i) as AnnotationParamContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(BSLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(BSLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_annotationParams;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAnnotationParams) {
            listener.enterAnnotationParams(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAnnotationParams) {
            listener.exitAnnotationParams(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAnnotationParams) {
            return visitor.visitAnnotationParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AnnotationParamContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public annotationParamName(): AnnotationParamNameContext {
        return this.getTypedRuleContext(AnnotationParamNameContext, 0) as AnnotationParamNameContext;
    }

    public ASSIGN(): TerminalNode {
        return this.getToken(BSLParser.ASSIGN, 0);
    }

    public constValue(): ConstValueContext {
        return this.getTypedRuleContext(ConstValueContext, 0) as ConstValueContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_annotationParam;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAnnotationParam) {
            listener.enterAnnotationParam(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAnnotationParam) {
            listener.exitAnnotationParam(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAnnotationParam) {
            return visitor.visitAnnotationParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class Var_nameContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_var_name;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterVar_name) {
            listener.enterVar_name(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitVar_name) {
            listener.exitVar_name(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitVar_name) {
            return visitor.visitVar_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ModuleVarsContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public moduleVar_list(): ModuleVarContext[] {
        return this.getTypedRuleContexts(ModuleVarContext) as ModuleVarContext[];
    }

    public moduleVar(i: number): ModuleVarContext {
        return this.getTypedRuleContext(ModuleVarContext, i) as ModuleVarContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_moduleVars;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterModuleVars) {
            listener.enterModuleVars(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitModuleVars) {
            listener.exitModuleVars(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitModuleVars) {
            return visitor.visitModuleVars(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ModuleVarContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public VAR_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.VAR_KEYWORD, 0);
    }

    public moduleVarsList(): ModuleVarsListContext {
        return this.getTypedRuleContext(ModuleVarsListContext, 0) as ModuleVarsListContext;
    }

    public preprocessor_list(): PreprocessorContext[] {
        return this.getTypedRuleContexts(PreprocessorContext) as PreprocessorContext[];
    }

    public preprocessor(i: number): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, i) as PreprocessorContext;
    }

    public compilerDirective_list(): CompilerDirectiveContext[] {
        return this.getTypedRuleContexts(CompilerDirectiveContext) as CompilerDirectiveContext[];
    }

    public compilerDirective(i: number): CompilerDirectiveContext {
        return this.getTypedRuleContext(CompilerDirectiveContext, i) as CompilerDirectiveContext;
    }

    public annotation_list(): AnnotationContext[] {
        return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
    }

    public annotation(i: number): AnnotationContext {
        return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(BSLParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_moduleVar;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterModuleVar) {
            listener.enterModuleVar(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitModuleVar) {
            listener.exitModuleVar(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitModuleVar) {
            return visitor.visitModuleVar(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ModuleVarsListContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public moduleVarDeclaration_list(): ModuleVarDeclarationContext[] {
        return this.getTypedRuleContexts(ModuleVarDeclarationContext) as ModuleVarDeclarationContext[];
    }

    public moduleVarDeclaration(i: number): ModuleVarDeclarationContext {
        return this.getTypedRuleContext(ModuleVarDeclarationContext, i) as ModuleVarDeclarationContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(BSLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(BSLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_moduleVarsList;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterModuleVarsList) {
            listener.enterModuleVarsList(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitModuleVarsList) {
            listener.exitModuleVarsList(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitModuleVarsList) {
            return visitor.visitModuleVarsList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ModuleVarDeclarationContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public var_name(): Var_nameContext {
        return this.getTypedRuleContext(Var_nameContext, 0) as Var_nameContext;
    }

    public EXPORT_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.EXPORT_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_moduleVarDeclaration;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterModuleVarDeclaration) {
            listener.enterModuleVarDeclaration(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitModuleVarDeclaration) {
            listener.exitModuleVarDeclaration(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitModuleVarDeclaration) {
            return visitor.visitModuleVarDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubVarsContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public subVar_list(): SubVarContext[] {
        return this.getTypedRuleContexts(SubVarContext) as SubVarContext[];
    }

    public subVar(i: number): SubVarContext {
        return this.getTypedRuleContext(SubVarContext, i) as SubVarContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_subVars;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterSubVars) {
            listener.enterSubVars(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitSubVars) {
            listener.exitSubVars(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitSubVars) {
            return visitor.visitSubVars(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubVarContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public VAR_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.VAR_KEYWORD, 0);
    }

    public subVarsList(): SubVarsListContext {
        return this.getTypedRuleContext(SubVarsListContext, 0) as SubVarsListContext;
    }

    public preprocessor_list(): PreprocessorContext[] {
        return this.getTypedRuleContexts(PreprocessorContext) as PreprocessorContext[];
    }

    public preprocessor(i: number): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, i) as PreprocessorContext;
    }

    public compilerDirective_list(): CompilerDirectiveContext[] {
        return this.getTypedRuleContexts(CompilerDirectiveContext) as CompilerDirectiveContext[];
    }

    public compilerDirective(i: number): CompilerDirectiveContext {
        return this.getTypedRuleContext(CompilerDirectiveContext, i) as CompilerDirectiveContext;
    }

    public annotation_list(): AnnotationContext[] {
        return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
    }

    public annotation(i: number): AnnotationContext {
        return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(BSLParser.SEMICOLON, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_subVar;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterSubVar) {
            listener.enterSubVar(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitSubVar) {
            listener.exitSubVar(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitSubVar) {
            return visitor.visitSubVar(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubVarsListContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public subVarDeclaration_list(): SubVarDeclarationContext[] {
        return this.getTypedRuleContexts(SubVarDeclarationContext) as SubVarDeclarationContext[];
    }

    public subVarDeclaration(i: number): SubVarDeclarationContext {
        return this.getTypedRuleContext(SubVarDeclarationContext, i) as SubVarDeclarationContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(BSLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(BSLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_subVarsList;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterSubVarsList) {
            listener.enterSubVarsList(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitSubVarsList) {
            listener.exitSubVarsList(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitSubVarsList) {
            return visitor.visitSubVarsList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubVarDeclarationContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public var_name(): Var_nameContext {
        return this.getTypedRuleContext(Var_nameContext, 0) as Var_nameContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_subVarDeclaration;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterSubVarDeclaration) {
            listener.enterSubVarDeclaration(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitSubVarDeclaration) {
            listener.exitSubVarDeclaration(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitSubVarDeclaration) {
            return visitor.visitSubVarDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubNameContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_subName;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterSubName) {
            listener.enterSubName(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitSubName) {
            listener.exitSubName(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitSubName) {
            return visitor.visitSubName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubsContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public sub_list(): SubContext[] {
        return this.getTypedRuleContexts(SubContext) as SubContext[];
    }

    public sub(i: number): SubContext {
        return this.getTypedRuleContext(SubContext, i) as SubContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_subs;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterSubs) {
            listener.enterSubs(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitSubs) {
            listener.exitSubs(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitSubs) {
            return visitor.visitSubs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public procedure(): ProcedureContext {
        return this.getTypedRuleContext(ProcedureContext, 0) as ProcedureContext;
    }

    public function_(): FunctionContext {
        return this.getTypedRuleContext(FunctionContext, 0) as FunctionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_sub;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterSub) {
            listener.enterSub(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitSub) {
            listener.exitSub(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitSub) {
            return visitor.visitSub(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ProcedureContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public procDeclaration(): ProcDeclarationContext {
        return this.getTypedRuleContext(ProcDeclarationContext, 0) as ProcDeclarationContext;
    }

    public subCodeBlock(): SubCodeBlockContext {
        return this.getTypedRuleContext(SubCodeBlockContext, 0) as SubCodeBlockContext;
    }

    public ENDPROCEDURE_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ENDPROCEDURE_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_procedure;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterProcedure) {
            listener.enterProcedure(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitProcedure) {
            listener.exitProcedure(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitProcedure) {
            return visitor.visitProcedure(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FunctionContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public funcDeclaration(): FuncDeclarationContext {
        return this.getTypedRuleContext(FuncDeclarationContext, 0) as FuncDeclarationContext;
    }

    public subCodeBlock(): SubCodeBlockContext {
        return this.getTypedRuleContext(SubCodeBlockContext, 0) as SubCodeBlockContext;
    }

    public ENDFUNCTION_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ENDFUNCTION_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_function;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ProcDeclarationContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PROCEDURE_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.PROCEDURE_KEYWORD, 0);
    }

    public subName(): SubNameContext {
        return this.getTypedRuleContext(SubNameContext, 0) as SubNameContext;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(BSLParser.LPAREN, 0);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(BSLParser.RPAREN, 0);
    }

    public preprocessor_list(): PreprocessorContext[] {
        return this.getTypedRuleContexts(PreprocessorContext) as PreprocessorContext[];
    }

    public preprocessor(i: number): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, i) as PreprocessorContext;
    }

    public compilerDirective_list(): CompilerDirectiveContext[] {
        return this.getTypedRuleContexts(CompilerDirectiveContext) as CompilerDirectiveContext[];
    }

    public compilerDirective(i: number): CompilerDirectiveContext {
        return this.getTypedRuleContext(CompilerDirectiveContext, i) as CompilerDirectiveContext;
    }

    public annotation_list(): AnnotationContext[] {
        return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
    }

    public annotation(i: number): AnnotationContext {
        return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
    }

    public ASYNC_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ASYNC_KEYWORD, 0);
    }

    public paramList(): ParamListContext {
        return this.getTypedRuleContext(ParamListContext, 0) as ParamListContext;
    }

    public EXPORT_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.EXPORT_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_procDeclaration;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterProcDeclaration) {
            listener.enterProcDeclaration(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitProcDeclaration) {
            listener.exitProcDeclaration(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitProcDeclaration) {
            return visitor.visitProcDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FuncDeclarationContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public FUNCTION_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.FUNCTION_KEYWORD, 0);
    }

    public subName(): SubNameContext {
        return this.getTypedRuleContext(SubNameContext, 0) as SubNameContext;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(BSLParser.LPAREN, 0);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(BSLParser.RPAREN, 0);
    }

    public preprocessor_list(): PreprocessorContext[] {
        return this.getTypedRuleContexts(PreprocessorContext) as PreprocessorContext[];
    }

    public preprocessor(i: number): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, i) as PreprocessorContext;
    }

    public compilerDirective_list(): CompilerDirectiveContext[] {
        return this.getTypedRuleContexts(CompilerDirectiveContext) as CompilerDirectiveContext[];
    }

    public compilerDirective(i: number): CompilerDirectiveContext {
        return this.getTypedRuleContext(CompilerDirectiveContext, i) as CompilerDirectiveContext;
    }

    public annotation_list(): AnnotationContext[] {
        return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
    }

    public annotation(i: number): AnnotationContext {
        return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
    }

    public ASYNC_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ASYNC_KEYWORD, 0);
    }

    public paramList(): ParamListContext {
        return this.getTypedRuleContext(ParamListContext, 0) as ParamListContext;
    }

    public EXPORT_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.EXPORT_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_funcDeclaration;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterFuncDeclaration) {
            listener.enterFuncDeclaration(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitFuncDeclaration) {
            listener.exitFuncDeclaration(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitFuncDeclaration) {
            return visitor.visitFuncDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubCodeBlockContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public subVars(): SubVarsContext {
        return this.getTypedRuleContext(SubVarsContext, 0) as SubVarsContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_subCodeBlock;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterSubCodeBlock) {
            listener.enterSubCodeBlock(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitSubCodeBlock) {
            listener.exitSubCodeBlock(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitSubCodeBlock) {
            return visitor.visitSubCodeBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ContinueStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public CONTINUE_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.CONTINUE_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_continueStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class BreakStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public BREAK_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.BREAK_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_breakStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RaiseStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public RAISE_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.RAISE_KEYWORD, 0);
    }

    public doCall(): DoCallContext {
        return this.getTypedRuleContext(DoCallContext, 0) as DoCallContext;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_raiseStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterRaiseStatement) {
            listener.enterRaiseStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitRaiseStatement) {
            listener.exitRaiseStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitRaiseStatement) {
            return visitor.visitRaiseStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IfStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ifBranch(): IfBranchContext {
        return this.getTypedRuleContext(IfBranchContext, 0) as IfBranchContext;
    }

    public ENDIF_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ENDIF_KEYWORD, 0);
    }

    public elsifBranch_list(): ElsifBranchContext[] {
        return this.getTypedRuleContexts(ElsifBranchContext) as ElsifBranchContext[];
    }

    public elsifBranch(i: number): ElsifBranchContext {
        return this.getTypedRuleContext(ElsifBranchContext, i) as ElsifBranchContext;
    }

    public elseBranch(): ElseBranchContext {
        return this.getTypedRuleContext(ElseBranchContext, 0) as ElseBranchContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_ifStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IfBranchContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IF_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.IF_KEYWORD, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public THEN_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.THEN_KEYWORD, 0);
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_ifBranch;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterIfBranch) {
            listener.enterIfBranch(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitIfBranch) {
            listener.exitIfBranch(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitIfBranch) {
            return visitor.visitIfBranch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ElsifBranchContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ELSIF_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ELSIF_KEYWORD, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public THEN_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.THEN_KEYWORD, 0);
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_elsifBranch;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterElsifBranch) {
            listener.enterElsifBranch(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitElsifBranch) {
            listener.exitElsifBranch(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitElsifBranch) {
            return visitor.visitElsifBranch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ElseBranchContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ELSE_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ELSE_KEYWORD, 0);
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_elseBranch;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterElseBranch) {
            listener.enterElseBranch(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitElseBranch) {
            listener.exitElseBranch(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitElseBranch) {
            return visitor.visitElseBranch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WhileStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public WHILE_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.WHILE_KEYWORD, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public DO_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.DO_KEYWORD, 0);
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public ENDDO_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ENDDO_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_whileStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ForStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public FOR_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.FOR_KEYWORD, 0);
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public ASSIGN(): TerminalNode {
        return this.getToken(BSLParser.ASSIGN, 0);
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public TO_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.TO_KEYWORD, 0);
    }

    public DO_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.DO_KEYWORD, 0);
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public ENDDO_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ENDDO_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_forStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ForEachStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public FOR_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.FOR_KEYWORD, 0);
    }

    public EACH_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.EACH_KEYWORD, 0);
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public IN_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.IN_KEYWORD, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public DO_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.DO_KEYWORD, 0);
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public ENDDO_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ENDDO_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_forEachStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterForEachStatement) {
            listener.enterForEachStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitForEachStatement) {
            listener.exitForEachStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitForEachStatement) {
            return visitor.visitForEachStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TryStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public TRY_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.TRY_KEYWORD, 0);
    }

    public tryCodeBlock(): TryCodeBlockContext {
        return this.getTypedRuleContext(TryCodeBlockContext, 0) as TryCodeBlockContext;
    }

    public EXCEPT_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.EXCEPT_KEYWORD, 0);
    }

    public exceptCodeBlock(): ExceptCodeBlockContext {
        return this.getTypedRuleContext(ExceptCodeBlockContext, 0) as ExceptCodeBlockContext;
    }

    public ENDTRY_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ENDTRY_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_tryStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterTryStatement) {
            listener.enterTryStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitTryStatement) {
            listener.exitTryStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitTryStatement) {
            return visitor.visitTryStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ReturnStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public RETURN_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.RETURN_KEYWORD, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_returnStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExecuteStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public EXECUTE_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.EXECUTE_KEYWORD, 0);
    }

    public doCall(): DoCallContext {
        return this.getTypedRuleContext(DoCallContext, 0) as DoCallContext;
    }

    public callParamList(): CallParamListContext {
        return this.getTypedRuleContext(CallParamListContext, 0) as CallParamListContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_executeStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterExecuteStatement) {
            listener.enterExecuteStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitExecuteStatement) {
            listener.exitExecuteStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitExecuteStatement) {
            return visitor.visitExecuteStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CallStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public accessCall(): AccessCallContext {
        return this.getTypedRuleContext(AccessCallContext, 0) as AccessCallContext;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public globalMethodCall(): GlobalMethodCallContext {
        return this.getTypedRuleContext(GlobalMethodCallContext, 0) as GlobalMethodCallContext;
    }

    public modifier_list(): ModifierContext[] {
        return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
    }

    public modifier(i: number): ModifierContext {
        return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_callStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterCallStatement) {
            listener.enterCallStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitCallStatement) {
            listener.exitCallStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitCallStatement) {
            return visitor.visitCallStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WaitStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public waitExpression(): WaitExpressionContext {
        return this.getTypedRuleContext(WaitExpressionContext, 0) as WaitExpressionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_waitStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterWaitStatement) {
            listener.enterWaitStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitWaitStatement) {
            listener.exitWaitStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitWaitStatement) {
            return visitor.visitWaitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LabelNameContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_labelName;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterLabelName) {
            listener.enterLabelName(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitLabelName) {
            listener.exitLabelName(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitLabelName) {
            return visitor.visitLabelName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LabelContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public TILDA(): TerminalNode {
        return this.getToken(BSLParser.TILDA, 0);
    }

    public labelName(): LabelNameContext {
        return this.getTypedRuleContext(LabelNameContext, 0) as LabelNameContext;
    }

    public COLON(): TerminalNode {
        return this.getToken(BSLParser.COLON, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_label;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterLabel) {
            listener.enterLabel(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitLabel) {
            listener.exitLabel(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitLabel) {
            return visitor.visitLabel(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class GotoStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public GOTO_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.GOTO_KEYWORD, 0);
    }

    public TILDA(): TerminalNode {
        return this.getToken(BSLParser.TILDA, 0);
    }

    public labelName(): LabelNameContext {
        return this.getTypedRuleContext(LabelNameContext, 0) as LabelNameContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_gotoStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterGotoStatement) {
            listener.enterGotoStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitGotoStatement) {
            listener.exitGotoStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitGotoStatement) {
            return visitor.visitGotoStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TryCodeBlockContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_tryCodeBlock;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterTryCodeBlock) {
            listener.enterTryCodeBlock(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitTryCodeBlock) {
            listener.exitTryCodeBlock(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitTryCodeBlock) {
            return visitor.visitTryCodeBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExceptCodeBlockContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_exceptCodeBlock;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterExceptCodeBlock) {
            listener.enterExceptCodeBlock(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitExceptCodeBlock) {
            listener.exitExceptCodeBlock(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitExceptCodeBlock) {
            return visitor.visitExceptCodeBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class EventContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_event;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterEvent) {
            listener.enterEvent(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitEvent) {
            listener.exitEvent(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitEvent) {
            return visitor.visitEvent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class HandlerContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_handler;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterHandler) {
            listener.enterHandler(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitHandler) {
            listener.exitHandler(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitHandler) {
            return visitor.visitHandler(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AddHandlerStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ADDHANDLER_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.ADDHANDLER_KEYWORD, 0);
    }

    public event(): EventContext {
        return this.getTypedRuleContext(EventContext, 0) as EventContext;
    }

    public COMMA(): TerminalNode {
        return this.getToken(BSLParser.COMMA, 0);
    }

    public handler(): HandlerContext {
        return this.getTypedRuleContext(HandlerContext, 0) as HandlerContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_addHandlerStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAddHandlerStatement) {
            listener.enterAddHandlerStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAddHandlerStatement) {
            listener.exitAddHandlerStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAddHandlerStatement) {
            return visitor.visitAddHandlerStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RemoveHandlerStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public REMOVEHANDLER_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.REMOVEHANDLER_KEYWORD, 0);
    }

    public event(): EventContext {
        return this.getTypedRuleContext(EventContext, 0) as EventContext;
    }

    public COMMA(): TerminalNode {
        return this.getToken(BSLParser.COMMA, 0);
    }

    public handler(): HandlerContext {
        return this.getTypedRuleContext(HandlerContext, 0) as HandlerContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_removeHandlerStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterRemoveHandlerStatement) {
            listener.enterRemoveHandlerStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitRemoveHandlerStatement) {
            listener.exitRemoveHandlerStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitRemoveHandlerStatement) {
            return visitor.visitRemoveHandlerStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TernaryOperatorContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public QUESTION(): TerminalNode {
        return this.getToken(BSLParser.QUESTION, 0);
    }

    public LPAREN(): TerminalNode {
        return this.getToken(BSLParser.LPAREN, 0);
    }

    public expression_list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
    }

    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(BSLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(BSLParser.COMMA, i);
    }

    public RPAREN(): TerminalNode {
        return this.getToken(BSLParser.RPAREN, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_ternaryOperator;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterTernaryOperator) {
            listener.enterTernaryOperator(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitTernaryOperator) {
            listener.exitTernaryOperator(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitTernaryOperator) {
            return visitor.visitTernaryOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WaitExpressionContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public AWAIT_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.AWAIT_KEYWORD, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_waitExpression;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterWaitExpression) {
            listener.enterWaitExpression(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitWaitExpression) {
            listener.exitWaitExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitWaitExpression) {
            return visitor.visitWaitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FileCodeBlockBeforeSubContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_fileCodeBlockBeforeSub;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterFileCodeBlockBeforeSub) {
            listener.enterFileCodeBlockBeforeSub(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitFileCodeBlockBeforeSub) {
            listener.exitFileCodeBlockBeforeSub(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitFileCodeBlockBeforeSub) {
            return visitor.visitFileCodeBlockBeforeSub(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FileCodeBlockContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public codeBlock(): CodeBlockContext {
        return this.getTypedRuleContext(CodeBlockContext, 0) as CodeBlockContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_fileCodeBlock;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterFileCodeBlock) {
            listener.enterFileCodeBlock(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitFileCodeBlock) {
            listener.exitFileCodeBlock(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitFileCodeBlock) {
            return visitor.visitFileCodeBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CodeBlockContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public statement_list(): StatementContext[] {
        return this.getTypedRuleContexts(StatementContext) as StatementContext[];
    }

    public statement(i: number): StatementContext {
        return this.getTypedRuleContext(StatementContext, i) as StatementContext;
    }

    public preprocessor_list(): PreprocessorContext[] {
        return this.getTypedRuleContexts(PreprocessorContext) as PreprocessorContext[];
    }

    public preprocessor(i: number): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, i) as PreprocessorContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_codeBlock;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterCodeBlock) {
            listener.enterCodeBlock(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitCodeBlock) {
            listener.exitCodeBlock(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitCodeBlock) {
            return visitor.visitCodeBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class NumericContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public FLOAT(): TerminalNode {
        return this.getToken(BSLParser.FLOAT, 0);
    }

    public DECIMAL(): TerminalNode {
        return this.getToken(BSLParser.DECIMAL, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_numeric;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterNumeric) {
            listener.enterNumeric(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitNumeric) {
            listener.exitNumeric(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitNumeric) {
            return visitor.visitNumeric(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParamListContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public param_list(): ParamContext[] {
        return this.getTypedRuleContexts(ParamContext) as ParamContext[];
    }

    public param(i: number): ParamContext {
        return this.getTypedRuleContext(ParamContext, i) as ParamContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(BSLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(BSLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_paramList;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParamContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public annotation_list(): AnnotationContext[] {
        return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
    }

    public annotation(i: number): AnnotationContext {
        return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
    }

    public VAL_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.VAL_KEYWORD, 0);
    }

    public ASSIGN(): TerminalNode {
        return this.getToken(BSLParser.ASSIGN, 0);
    }

    public defaultValue(): DefaultValueContext {
        return this.getTypedRuleContext(DefaultValueContext, 0) as DefaultValueContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_param;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterParam) {
            listener.enterParam(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitParam) {
            listener.exitParam(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DefaultValueContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public constValue(): ConstValueContext {
        return this.getTypedRuleContext(ConstValueContext, 0) as ConstValueContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_defaultValue;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterDefaultValue) {
            listener.enterDefaultValue(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitDefaultValue) {
            listener.exitDefaultValue(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitDefaultValue) {
            return visitor.visitDefaultValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ConstValueContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public numeric(): NumericContext {
        return this.getTypedRuleContext(NumericContext, 0) as NumericContext;
    }

    public MINUS(): TerminalNode {
        return this.getToken(BSLParser.MINUS, 0);
    }

    public PLUS(): TerminalNode {
        return this.getToken(BSLParser.PLUS, 0);
    }

    public string_(): StringContext {
        return this.getTypedRuleContext(StringContext, 0) as StringContext;
    }

    public TRUE(): TerminalNode {
        return this.getToken(BSLParser.TRUE, 0);
    }

    public FALSE(): TerminalNode {
        return this.getToken(BSLParser.FALSE, 0);
    }

    public UNDEFINED(): TerminalNode {
        return this.getToken(BSLParser.UNDEFINED, 0);
    }

    public NULL(): TerminalNode {
        return this.getToken(BSLParser.NULL, 0);
    }

    public DATETIME(): TerminalNode {
        return this.getToken(BSLParser.DATETIME, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_constValue;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterConstValue) {
            listener.enterConstValue(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitConstValue) {
            listener.exitConstValue(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitConstValue) {
            return visitor.visitConstValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class MultilineStringContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public STRINGSTART(): TerminalNode {
        return this.getToken(BSLParser.STRINGSTART, 0);
    }

    public STRINGTAIL(): TerminalNode {
        return this.getToken(BSLParser.STRINGTAIL, 0);
    }

    public STRINGPART_list(): TerminalNode[] {
        return this.getTokens(BSLParser.STRINGPART);
    }

    public STRINGPART(i: number): TerminalNode {
        return this.getToken(BSLParser.STRINGPART, i);
    }

    public BAR_list(): TerminalNode[] {
        return this.getTokens(BSLParser.BAR);
    }

    public BAR(i: number): TerminalNode {
        return this.getToken(BSLParser.BAR, i);
    }

    public preprocessor_list(): PreprocessorContext[] {
        return this.getTypedRuleContexts(PreprocessorContext) as PreprocessorContext[];
    }

    public preprocessor(i: number): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, i) as PreprocessorContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_multilineString;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterMultilineString) {
            listener.enterMultilineString(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitMultilineString) {
            listener.exitMultilineString(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitMultilineString) {
            return visitor.visitMultilineString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class StringContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public STRING_list(): TerminalNode[] {
        return this.getTokens(BSLParser.STRING);
    }

    public STRING(i: number): TerminalNode {
        return this.getToken(BSLParser.STRING, i);
    }

    public multilineString_list(): MultilineStringContext[] {
        return this.getTypedRuleContexts(MultilineStringContext) as MultilineStringContext[];
    }

    public multilineString(i: number): MultilineStringContext {
        return this.getTypedRuleContext(MultilineStringContext, i) as MultilineStringContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_string;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitString) {
            return visitor.visitString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class StatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public SEMICOLON(): TerminalNode {
        return this.getToken(BSLParser.SEMICOLON, 0);
    }

    public label(): LabelContext {
        return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
    }

    public callStatement(): CallStatementContext {
        return this.getTypedRuleContext(CallStatementContext, 0) as CallStatementContext;
    }

    public waitStatement(): WaitStatementContext {
        return this.getTypedRuleContext(WaitStatementContext, 0) as WaitStatementContext;
    }

    public compoundStatement(): CompoundStatementContext {
        return this.getTypedRuleContext(CompoundStatementContext, 0) as CompoundStatementContext;
    }

    public assignment(): AssignmentContext {
        return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
    }

    public preprocessor(): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, 0) as PreprocessorContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_statement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AssignmentContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public lValue(): LValueContext {
        return this.getTypedRuleContext(LValueContext, 0) as LValueContext;
    }

    public ASSIGN(): TerminalNode {
        return this.getToken(BSLParser.ASSIGN, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public preprocessor_list(): PreprocessorContext[] {
        return this.getTypedRuleContexts(PreprocessorContext) as PreprocessorContext[];
    }

    public preprocessor(i: number): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, i) as PreprocessorContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_assignment;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CallParamListContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public callParam_list(): CallParamContext[] {
        return this.getTypedRuleContexts(CallParamContext) as CallParamContext[];
    }

    public callParam(i: number): CallParamContext {
        return this.getTypedRuleContext(CallParamContext, i) as CallParamContext;
    }

    public COMMA_list(): TerminalNode[] {
        return this.getTokens(BSLParser.COMMA);
    }

    public COMMA(i: number): TerminalNode {
        return this.getToken(BSLParser.COMMA, i);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_callParamList;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterCallParamList) {
            listener.enterCallParamList(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitCallParamList) {
            listener.exitCallParamList(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitCallParamList) {
            return visitor.visitCallParamList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CallParamContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_callParam;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterCallParam) {
            listener.enterCallParam(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitCallParam) {
            listener.exitCallParam(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitCallParam) {
            return visitor.visitCallParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExpressionContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public member_list(): MemberContext[] {
        return this.getTypedRuleContexts(MemberContext) as MemberContext[];
    }

    public member(i: number): MemberContext {
        return this.getTypedRuleContext(MemberContext, i) as MemberContext;
    }

    public operation_list(): OperationContext[] {
        return this.getTypedRuleContexts(OperationContext) as OperationContext[];
    }

    public operation(i: number): OperationContext {
        return this.getTypedRuleContext(OperationContext, i) as OperationContext;
    }

    public preprocessor_list(): PreprocessorContext[] {
        return this.getTypedRuleContexts(PreprocessorContext) as PreprocessorContext[];
    }

    public preprocessor(i: number): PreprocessorContext {
        return this.getTypedRuleContext(PreprocessorContext, i) as PreprocessorContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_expression;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class OperationContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public PLUS(): TerminalNode {
        return this.getToken(BSLParser.PLUS, 0);
    }

    public MINUS(): TerminalNode {
        return this.getToken(BSLParser.MINUS, 0);
    }

    public MUL(): TerminalNode {
        return this.getToken(BSLParser.MUL, 0);
    }

    public QUOTIENT(): TerminalNode {
        return this.getToken(BSLParser.QUOTIENT, 0);
    }

    public MODULO(): TerminalNode {
        return this.getToken(BSLParser.MODULO, 0);
    }

    public boolOperation(): BoolOperationContext {
        return this.getTypedRuleContext(BoolOperationContext, 0) as BoolOperationContext;
    }

    public compareOperation(): CompareOperationContext {
        return this.getTypedRuleContext(CompareOperationContext, 0) as CompareOperationContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_operation;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterOperation) {
            listener.enterOperation(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitOperation) {
            listener.exitOperation(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitOperation) {
            return visitor.visitOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CompareOperationContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LESS(): TerminalNode {
        return this.getToken(BSLParser.LESS, 0);
    }

    public LESS_OR_EQUAL(): TerminalNode {
        return this.getToken(BSLParser.LESS_OR_EQUAL, 0);
    }

    public GREATER(): TerminalNode {
        return this.getToken(BSLParser.GREATER, 0);
    }

    public GREATER_OR_EQUAL(): TerminalNode {
        return this.getToken(BSLParser.GREATER_OR_EQUAL, 0);
    }

    public ASSIGN(): TerminalNode {
        return this.getToken(BSLParser.ASSIGN, 0);
    }

    public NOT_EQUAL(): TerminalNode {
        return this.getToken(BSLParser.NOT_EQUAL, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_compareOperation;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterCompareOperation) {
            listener.enterCompareOperation(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitCompareOperation) {
            listener.exitCompareOperation(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitCompareOperation) {
            return visitor.visitCompareOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class BoolOperationContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public OR_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.OR_KEYWORD, 0);
    }

    public AND_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.AND_KEYWORD, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_boolOperation;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterBoolOperation) {
            listener.enterBoolOperation(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitBoolOperation) {
            listener.exitBoolOperation(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitBoolOperation) {
            return visitor.visitBoolOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UnaryModifierContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public NOT_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.NOT_KEYWORD, 0);
    }

    public MINUS(): TerminalNode {
        return this.getToken(BSLParser.MINUS, 0);
    }

    public PLUS(): TerminalNode {
        return this.getToken(BSLParser.PLUS, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_unaryModifier;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterUnaryModifier) {
            listener.enterUnaryModifier(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitUnaryModifier) {
            listener.exitUnaryModifier(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitUnaryModifier) {
            return visitor.visitUnaryModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class MemberContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public constValue(): ConstValueContext {
        return this.getTypedRuleContext(ConstValueContext, 0) as ConstValueContext;
    }

    public complexIdentifier(): ComplexIdentifierContext {
        return this.getTypedRuleContext(ComplexIdentifierContext, 0) as ComplexIdentifierContext;
    }

    public waitExpression(): WaitExpressionContext {
        return this.getTypedRuleContext(WaitExpressionContext, 0) as WaitExpressionContext;
    }

    public unaryModifier(): UnaryModifierContext {
        return this.getTypedRuleContext(UnaryModifierContext, 0) as UnaryModifierContext;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public globalMethodCall(): GlobalMethodCallContext {
        return this.getTypedRuleContext(GlobalMethodCallContext, 0) as GlobalMethodCallContext;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(BSLParser.LPAREN, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public RPAREN(): TerminalNode {
        return this.getToken(BSLParser.RPAREN, 0);
    }

    public modifier_list(): ModifierContext[] {
        return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
    }

    public modifier(i: number): ModifierContext {
        return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_member;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterMember) {
            listener.enterMember(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitMember) {
            listener.exitMember(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitMember) {
            return visitor.visitMember(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class NewExpressionContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public NEW_KEYWORD(): TerminalNode {
        return this.getToken(BSLParser.NEW_KEYWORD, 0);
    }

    public typeName(): TypeNameContext {
        return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
    }

    public doCall(): DoCallContext {
        return this.getTypedRuleContext(DoCallContext, 0) as DoCallContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_newExpression;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterNewExpression) {
            listener.enterNewExpression(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitNewExpression) {
            listener.exitNewExpression(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitNewExpression) {
            return visitor.visitNewExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TypeNameContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_typeName;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterTypeName) {
            listener.enterTypeName(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitTypeName) {
            listener.exitTypeName(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitTypeName) {
            return visitor.visitTypeName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class MethodCallContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public methodName(): MethodNameContext {
        return this.getTypedRuleContext(MethodNameContext, 0) as MethodNameContext;
    }

    public doCall(): DoCallContext {
        return this.getTypedRuleContext(DoCallContext, 0) as DoCallContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_methodCall;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterMethodCall) {
            listener.enterMethodCall(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitMethodCall) {
            listener.exitMethodCall(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitMethodCall) {
            return visitor.visitMethodCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class GlobalMethodCallContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public methodName(): MethodNameContext {
        return this.getTypedRuleContext(MethodNameContext, 0) as MethodNameContext;
    }

    public doCall(): DoCallContext {
        return this.getTypedRuleContext(DoCallContext, 0) as DoCallContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_globalMethodCall;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterGlobalMethodCall) {
            listener.enterGlobalMethodCall(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitGlobalMethodCall) {
            listener.exitGlobalMethodCall(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitGlobalMethodCall) {
            return visitor.visitGlobalMethodCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class MethodNameContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_methodName;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterMethodName) {
            listener.enterMethodName(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitMethodName) {
            listener.exitMethodName(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitMethodName) {
            return visitor.visitMethodName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ComplexIdentifierContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public newExpression(): NewExpressionContext {
        return this.getTypedRuleContext(NewExpressionContext, 0) as NewExpressionContext;
    }

    public ternaryOperator(): TernaryOperatorContext {
        return this.getTypedRuleContext(TernaryOperatorContext, 0) as TernaryOperatorContext;
    }

    public globalMethodCall(): GlobalMethodCallContext {
        return this.getTypedRuleContext(GlobalMethodCallContext, 0) as GlobalMethodCallContext;
    }

    public modifier_list(): ModifierContext[] {
        return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
    }

    public modifier(i: number): ModifierContext {
        return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_complexIdentifier;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterComplexIdentifier) {
            listener.enterComplexIdentifier(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitComplexIdentifier) {
            listener.exitComplexIdentifier(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitComplexIdentifier) {
            return visitor.visitComplexIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ModifierContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public accessProperty(): AccessPropertyContext {
        return this.getTypedRuleContext(AccessPropertyContext, 0) as AccessPropertyContext;
    }

    public accessIndex(): AccessIndexContext {
        return this.getTypedRuleContext(AccessIndexContext, 0) as AccessIndexContext;
    }

    public accessCall(): AccessCallContext {
        return this.getTypedRuleContext(AccessCallContext, 0) as AccessCallContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_modifier;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterModifier) {
            listener.enterModifier(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitModifier) {
            listener.exitModifier(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AcceptorContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public accessProperty(): AccessPropertyContext {
        return this.getTypedRuleContext(AccessPropertyContext, 0) as AccessPropertyContext;
    }

    public accessIndex(): AccessIndexContext {
        return this.getTypedRuleContext(AccessIndexContext, 0) as AccessIndexContext;
    }

    public modifier_list(): ModifierContext[] {
        return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
    }

    public modifier(i: number): ModifierContext {
        return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_acceptor;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAcceptor) {
            listener.enterAcceptor(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAcceptor) {
            listener.exitAcceptor(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAcceptor) {
            return visitor.visitAcceptor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LValueContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public globalMethodCall(): GlobalMethodCallContext {
        return this.getTypedRuleContext(GlobalMethodCallContext, 0) as GlobalMethodCallContext;
    }

    public acceptor(): AcceptorContext {
        return this.getTypedRuleContext(AcceptorContext, 0) as AcceptorContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_lValue;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterLValue) {
            listener.enterLValue(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitLValue) {
            listener.exitLValue(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitLValue) {
            return visitor.visitLValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AccessCallContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public DOT(): TerminalNode {
        return this.getToken(BSLParser.DOT, 0);
    }

    public methodCall(): MethodCallContext {
        return this.getTypedRuleContext(MethodCallContext, 0) as MethodCallContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_accessCall;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAccessCall) {
            listener.enterAccessCall(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAccessCall) {
            listener.exitAccessCall(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAccessCall) {
            return visitor.visitAccessCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AccessIndexContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LBRACK(): TerminalNode {
        return this.getToken(BSLParser.LBRACK, 0);
    }

    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
    }

    public RBRACK(): TerminalNode {
        return this.getToken(BSLParser.RBRACK, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_accessIndex;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAccessIndex) {
            listener.enterAccessIndex(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAccessIndex) {
            listener.exitAccessIndex(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAccessIndex) {
            return visitor.visitAccessIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AccessPropertyContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public DOT(): TerminalNode {
        return this.getToken(BSLParser.DOT, 0);
    }

    public IDENTIFIER(): TerminalNode {
        return this.getToken(BSLParser.IDENTIFIER, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_accessProperty;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterAccessProperty) {
            listener.enterAccessProperty(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitAccessProperty) {
            listener.exitAccessProperty(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitAccessProperty) {
            return visitor.visitAccessProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DoCallContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public LPAREN(): TerminalNode {
        return this.getToken(BSLParser.LPAREN, 0);
    }

    public callParamList(): CallParamListContext {
        return this.getTypedRuleContext(CallParamListContext, 0) as CallParamListContext;
    }

    public RPAREN(): TerminalNode {
        return this.getToken(BSLParser.RPAREN, 0);
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_doCall;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterDoCall) {
            listener.enterDoCall(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitDoCall) {
            listener.exitDoCall(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitDoCall) {
            return visitor.visitDoCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CompoundStatementContext extends BslParserRuleContext {
    constructor(parser?: BSLParser, parent?: ParserRuleContext, invokingState?: number) {
        super(parent, invokingState);
        this.parser = parser;
    }

    public ifStatement(): IfStatementContext {
        return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
    }

    public whileStatement(): WhileStatementContext {
        return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
    }

    public forStatement(): ForStatementContext {
        return this.getTypedRuleContext(ForStatementContext, 0) as ForStatementContext;
    }

    public forEachStatement(): ForEachStatementContext {
        return this.getTypedRuleContext(ForEachStatementContext, 0) as ForEachStatementContext;
    }

    public tryStatement(): TryStatementContext {
        return this.getTypedRuleContext(TryStatementContext, 0) as TryStatementContext;
    }

    public returnStatement(): ReturnStatementContext {
        return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
    }

    public continueStatement(): ContinueStatementContext {
        return this.getTypedRuleContext(ContinueStatementContext, 0) as ContinueStatementContext;
    }

    public breakStatement(): BreakStatementContext {
        return this.getTypedRuleContext(BreakStatementContext, 0) as BreakStatementContext;
    }

    public raiseStatement(): RaiseStatementContext {
        return this.getTypedRuleContext(RaiseStatementContext, 0) as RaiseStatementContext;
    }

    public executeStatement(): ExecuteStatementContext {
        return this.getTypedRuleContext(ExecuteStatementContext, 0) as ExecuteStatementContext;
    }

    public gotoStatement(): GotoStatementContext {
        return this.getTypedRuleContext(GotoStatementContext, 0) as GotoStatementContext;
    }

    public addHandlerStatement(): AddHandlerStatementContext {
        return this.getTypedRuleContext(AddHandlerStatementContext, 0) as AddHandlerStatementContext;
    }

    public removeHandlerStatement(): RemoveHandlerStatementContext {
        return this.getTypedRuleContext(RemoveHandlerStatementContext, 0) as RemoveHandlerStatementContext;
    }

    public get ruleIndex(): number {
        return BSLParser.RULE_compoundStatement;
    }

    public enterRule(listener: BSLParserListener): void {
        if (listener.enterCompoundStatement) {
            listener.enterCompoundStatement(this);
        }
    }

    public exitRule(listener: BSLParserListener): void {
        if (listener.exitCompoundStatement) {
            listener.exitCompoundStatement(this);
        }
    }

    // @Override
    public accept<Result>(visitor: BSLParserVisitor<Result>): Result {
        if (visitor.visitCompoundStatement) {
            return visitor.visitCompoundStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
