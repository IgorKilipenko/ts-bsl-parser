// Generated from ./src/antlr/BSLMethodDescriptionParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import type { Token } from "antlr4ng";

import type { BSLMethodDescriptionParserListener } from "./BSLMethodDescriptionParserListener.js";
import type { BSLMethodDescriptionParserVisitor } from "./BSLMethodDescriptionParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type int = number;

import { BslParserRuleContext } from "../../core/context.js";

export class BSLMethodDescriptionParser extends antlr.Parser {
    public static readonly PARAMETERS_KEYWORD = 1;

    public static readonly RETURNS_KEYWORD = 2;

    public static readonly EXAMPLE_KEYWORD = 3;

    public static readonly CALL_OPTIONS_KEYWORD = 4;

    public static readonly DEPRECATE_KEYWORD = 5;

    public static readonly SEE_KEYWORD = 6;

    public static readonly OF_KEYWORD = 7;

    public static readonly EOL = 8;

    public static readonly SPACE = 9;

    public static readonly STAR = 10;

    public static readonly DASH = 11;

    public static readonly COLON = 12;

    public static readonly COMMA = 13;

    public static readonly COMMENT = 14;

    public static readonly WORD = 15;

    public static readonly DOTSWORD = 16;

    public static readonly LPAREN = 17;

    public static readonly RPAREN = 18;

    public static readonly ANYSYMBOL = 19;

    public static readonly RULE_methodDescription = 0;

    public static readonly RULE_deprecate = 1;

    public static readonly RULE_deprecateDescription = 2;

    public static readonly RULE_descriptionBlock = 3;

    public static readonly RULE_description = 4;

    public static readonly RULE_descriptionString = 5;

    public static readonly RULE_examples = 6;

    public static readonly RULE_examplesString = 7;

    public static readonly RULE_callOptions = 8;

    public static readonly RULE_callOptionsString = 9;

    public static readonly RULE_parameters = 10;

    public static readonly RULE_parameterString = 11;

    public static readonly RULE_parameter = 12;

    public static readonly RULE_subParameter = 13;

    public static readonly RULE_parameterName = 14;

    public static readonly RULE_returnsValues = 15;

    public static readonly RULE_returnsValuesString = 16;

    public static readonly RULE_returnsValue = 17;

    public static readonly RULE_typesBlock = 18;

    public static readonly RULE_typeDescription = 19;

    public static readonly RULE_type = 20;

    public static readonly RULE_simpleType = 21;

    public static readonly RULE_listTypes = 22;

    public static readonly RULE_complexType = 23;

    public static readonly RULE_hyperlinkType = 24;

    public static readonly RULE_spitter = 25;

    public static readonly RULE_hyperlinkBlock = 26;

    public static readonly RULE_startPart = 27;

    public static readonly literalNames = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "':'",
        "','",
        "'//'",
        null,
        null,
        "'('",
        "')'",
    ];

    public static readonly symbolicNames = [
        null,
        "PARAMETERS_KEYWORD",
        "RETURNS_KEYWORD",
        "EXAMPLE_KEYWORD",
        "CALL_OPTIONS_KEYWORD",
        "DEPRECATE_KEYWORD",
        "SEE_KEYWORD",
        "OF_KEYWORD",
        "EOL",
        "SPACE",
        "STAR",
        "DASH",
        "COLON",
        "COMMA",
        "COMMENT",
        "WORD",
        "DOTSWORD",
        "LPAREN",
        "RPAREN",
        "ANYSYMBOL",
    ];

    public static readonly ruleNames = [
        "methodDescription",
        "deprecate",
        "deprecateDescription",
        "descriptionBlock",
        "description",
        "descriptionString",
        "examples",
        "examplesString",
        "callOptions",
        "callOptionsString",
        "parameters",
        "parameterString",
        "parameter",
        "subParameter",
        "parameterName",
        "returnsValues",
        "returnsValuesString",
        "returnsValue",
        "typesBlock",
        "typeDescription",
        "type",
        "simpleType",
        "listTypes",
        "complexType",
        "hyperlinkType",
        "spitter",
        "hyperlinkBlock",
        "startPart",
    ];

    public get grammarFileName(): string {
        return "BSLMethodDescriptionParser.g4";
    }

    public get literalNames(): (string | null)[] {
        return BSLMethodDescriptionParser.literalNames;
    }

    public get symbolicNames(): (string | null)[] {
        return BSLMethodDescriptionParser.symbolicNames;
    }

    public get ruleNames(): string[] {
        return BSLMethodDescriptionParser.ruleNames;
    }

    public get serializedATN(): number[] {
        return BSLMethodDescriptionParser._serializedATN;
    }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(
            this,
            BSLMethodDescriptionParser._ATN,
            BSLMethodDescriptionParser.decisionsToDFA,
            new antlr.PredictionContextCache()
        );
    }

    public methodDescription(): MethodDescriptionContext {
        let localContext = new MethodDescriptionContext(this.context, this.state);
        this.enterRule(localContext, 0, BSLMethodDescriptionParser.RULE_methodDescription);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 200;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context)) {
                    case 1:
                        {
                            {
                                this.state = 57;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context)) {
                                    case 1:
                                        {
                                            this.state = 56;
                                            this.deprecate();
                                        }
                                        break;
                                }
                                this.state = 60;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context)) {
                                    case 1:
                                        {
                                            this.state = 59;
                                            this.descriptionBlock();
                                        }
                                        break;
                                }
                                this.state = 63;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context)) {
                                    case 1:
                                        {
                                            this.state = 62;
                                            this.parameters();
                                        }
                                        break;
                                }
                                this.state = 66;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context)) {
                                    case 1:
                                        {
                                            this.state = 65;
                                            this.callOptions();
                                        }
                                        break;
                                }
                                this.state = 69;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
                                    case 1:
                                        {
                                            this.state = 68;
                                            this.returnsValues();
                                        }
                                        break;
                                }
                                this.state = 72;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 9 || _la === 14) {
                                    {
                                        this.state = 71;
                                        this.examples();
                                    }
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 75;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                                    case 1:
                                        {
                                            this.state = 74;
                                            this.deprecate();
                                        }
                                        break;
                                }
                                this.state = 78;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                                    case 1:
                                        {
                                            this.state = 77;
                                            this.descriptionBlock();
                                        }
                                        break;
                                }
                                this.state = 81;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context)) {
                                    case 1:
                                        {
                                            this.state = 80;
                                            this.parameters();
                                        }
                                        break;
                                }
                                this.state = 84;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context)) {
                                    case 1:
                                        {
                                            this.state = 83;
                                            this.examples();
                                        }
                                        break;
                                }
                                this.state = 87;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context)) {
                                    case 1:
                                        {
                                            this.state = 86;
                                            this.returnsValues();
                                        }
                                        break;
                                }
                                this.state = 90;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 9 || _la === 14) {
                                    {
                                        this.state = 89;
                                        this.callOptions();
                                    }
                                }
                            }
                        }
                        break;
                    case 3:
                        {
                            {
                                this.state = 93;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context)) {
                                    case 1:
                                        {
                                            this.state = 92;
                                            this.deprecate();
                                        }
                                        break;
                                }
                                this.state = 96;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context)) {
                                    case 1:
                                        {
                                            this.state = 95;
                                            this.descriptionBlock();
                                        }
                                        break;
                                }
                                this.state = 99;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)) {
                                    case 1:
                                        {
                                            this.state = 98;
                                            this.parameters();
                                        }
                                        break;
                                }
                                this.state = 102;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context)) {
                                    case 1:
                                        {
                                            this.state = 101;
                                            this.callOptions();
                                        }
                                        break;
                                }
                                this.state = 105;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context)) {
                                    case 1:
                                        {
                                            this.state = 104;
                                            this.examples();
                                        }
                                        break;
                                }
                                this.state = 108;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 9 || _la === 14) {
                                    {
                                        this.state = 107;
                                        this.returnsValues();
                                    }
                                }
                            }
                        }
                        break;
                    case 4:
                        {
                            {
                                this.state = 111;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context)) {
                                    case 1:
                                        {
                                            this.state = 110;
                                            this.deprecate();
                                        }
                                        break;
                                }
                                this.state = 114;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context)) {
                                    case 1:
                                        {
                                            this.state = 113;
                                            this.descriptionBlock();
                                        }
                                        break;
                                }
                                this.state = 117;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context)) {
                                    case 1:
                                        {
                                            this.state = 116;
                                            this.parameters();
                                        }
                                        break;
                                }
                                this.state = 120;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context)) {
                                    case 1:
                                        {
                                            this.state = 119;
                                            this.examples();
                                        }
                                        break;
                                }
                                this.state = 123;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context)) {
                                    case 1:
                                        {
                                            this.state = 122;
                                            this.callOptions();
                                        }
                                        break;
                                }
                                this.state = 126;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 9 || _la === 14) {
                                    {
                                        this.state = 125;
                                        this.returnsValues();
                                    }
                                }
                            }
                        }
                        break;
                    case 5:
                        {
                            {
                                this.state = 129;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context)) {
                                    case 1:
                                        {
                                            this.state = 128;
                                            this.descriptionBlock();
                                        }
                                        break;
                                }
                                this.state = 132;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context)) {
                                    case 1:
                                        {
                                            this.state = 131;
                                            this.parameters();
                                        }
                                        break;
                                }
                                this.state = 135;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context)) {
                                    case 1:
                                        {
                                            this.state = 134;
                                            this.callOptions();
                                        }
                                        break;
                                }
                                this.state = 138;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context)) {
                                    case 1:
                                        {
                                            this.state = 137;
                                            this.returnsValues();
                                        }
                                        break;
                                }
                                this.state = 141;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context)) {
                                    case 1:
                                        {
                                            this.state = 140;
                                            this.examples();
                                        }
                                        break;
                                }
                                this.state = 144;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 9 || _la === 14) {
                                    {
                                        this.state = 143;
                                        this.deprecate();
                                    }
                                }
                            }
                        }
                        break;
                    case 6:
                        {
                            {
                                this.state = 147;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context)) {
                                    case 1:
                                        {
                                            this.state = 146;
                                            this.descriptionBlock();
                                        }
                                        break;
                                }
                                this.state = 150;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context)) {
                                    case 1:
                                        {
                                            this.state = 149;
                                            this.parameters();
                                        }
                                        break;
                                }
                                this.state = 153;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context)) {
                                    case 1:
                                        {
                                            this.state = 152;
                                            this.examples();
                                        }
                                        break;
                                }
                                this.state = 156;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context)) {
                                    case 1:
                                        {
                                            this.state = 155;
                                            this.returnsValues();
                                        }
                                        break;
                                }
                                this.state = 159;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context)) {
                                    case 1:
                                        {
                                            this.state = 158;
                                            this.callOptions();
                                        }
                                        break;
                                }
                                this.state = 162;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 9 || _la === 14) {
                                    {
                                        this.state = 161;
                                        this.deprecate();
                                    }
                                }
                            }
                        }
                        break;
                    case 7:
                        {
                            {
                                this.state = 165;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context)) {
                                    case 1:
                                        {
                                            this.state = 164;
                                            this.descriptionBlock();
                                        }
                                        break;
                                }
                                this.state = 168;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context)) {
                                    case 1:
                                        {
                                            this.state = 167;
                                            this.parameters();
                                        }
                                        break;
                                }
                                this.state = 171;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context)) {
                                    case 1:
                                        {
                                            this.state = 170;
                                            this.callOptions();
                                        }
                                        break;
                                }
                                this.state = 174;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context)) {
                                    case 1:
                                        {
                                            this.state = 173;
                                            this.examples();
                                        }
                                        break;
                                }
                                this.state = 177;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context)) {
                                    case 1:
                                        {
                                            this.state = 176;
                                            this.returnsValues();
                                        }
                                        break;
                                }
                                this.state = 180;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 9 || _la === 14) {
                                    {
                                        this.state = 179;
                                        this.deprecate();
                                    }
                                }
                            }
                        }
                        break;
                    case 8:
                        {
                            {
                                this.state = 183;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context)) {
                                    case 1:
                                        {
                                            this.state = 182;
                                            this.descriptionBlock();
                                        }
                                        break;
                                }
                                this.state = 186;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context)) {
                                    case 1:
                                        {
                                            this.state = 185;
                                            this.parameters();
                                        }
                                        break;
                                }
                                this.state = 189;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context)) {
                                    case 1:
                                        {
                                            this.state = 188;
                                            this.examples();
                                        }
                                        break;
                                }
                                this.state = 192;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context)) {
                                    case 1:
                                        {
                                            this.state = 191;
                                            this.callOptions();
                                        }
                                        break;
                                }
                                this.state = 195;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context)) {
                                    case 1:
                                        {
                                            this.state = 194;
                                            this.returnsValues();
                                        }
                                        break;
                                }
                                this.state = 198;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 9 || _la === 14) {
                                    {
                                        this.state = 197;
                                        this.deprecate();
                                    }
                                }
                            }
                        }
                        break;
                }
                this.state = 202;
                this.match(BSLMethodDescriptionParser.EOF);
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

    public deprecate(): DeprecateContext {
        let localContext = new DeprecateContext(this.context, this.state);
        this.enterRule(localContext, 2, BSLMethodDescriptionParser.RULE_deprecate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 204;
                this.startPart();
                this.state = 205;
                this.match(BSLMethodDescriptionParser.DEPRECATE_KEYWORD);
                this.state = 208;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context)) {
                    case 1:
                        {
                            this.state = 206;
                            this.match(BSLMethodDescriptionParser.SPACE);
                            this.state = 207;
                            this.deprecateDescription();
                        }
                        break;
                }
                this.state = 211;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8) {
                    {
                        this.state = 210;
                        this.match(BSLMethodDescriptionParser.EOL);
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

    public deprecateDescription(): DeprecateDescriptionContext {
        let localContext = new DeprecateDescriptionContext(this.context, this.state);
        this.enterRule(localContext, 4, BSLMethodDescriptionParser.RULE_deprecateDescription);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 213;
                _la = this.tokenStream.LA(1);
                if (_la <= 0 || _la === 8 || _la === 9) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 217;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 51, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 214;
                                _la = this.tokenStream.LA(1);
                                if (_la <= 0 || _la === 8) {
                                    this.errorHandler.recoverInline(this);
                                } else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                    }
                    this.state = 219;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 51, this.context);
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

    public descriptionBlock(): DescriptionBlockContext {
        let localContext = new DescriptionBlockContext(this.context, this.state);
        this.enterRule(localContext, 6, BSLMethodDescriptionParser.RULE_descriptionBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 222;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context)) {
                    case 1:
                        {
                            this.state = 220;
                            this.hyperlinkBlock();
                        }
                        break;
                    case 2:
                        {
                            this.state = 221;
                            this.description();
                        }
                        break;
                }
                this.state = 225;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8) {
                    {
                        this.state = 224;
                        this.match(BSLMethodDescriptionParser.EOL);
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

    public description(): DescriptionContext {
        let localContext = new DescriptionContext(this.context, this.state);
        this.enterRule(localContext, 8, BSLMethodDescriptionParser.RULE_description);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 228;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 227;
                                    this.descriptionString();
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 230;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
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

    public descriptionString(): DescriptionStringContext {
        let localContext = new DescriptionStringContext(this.context, this.state);
        this.enterRule(localContext, 10, BSLMethodDescriptionParser.RULE_descriptionString);
        let _la: number;
        try {
            let alternative: number;
            this.state = 246;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 232;
                            this.startPart();
                            this.state = 233;
                            _la = this.tokenStream.LA(1);
                            if (_la <= 0 || ((_la & ~0x1f) === 0 && ((1 << _la) & 830) !== 0)) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 237;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 234;
                                            _la = this.tokenStream.LA(1);
                                            if (_la <= 0 || _la === 8) {
                                                this.errorHandler.recoverInline(this);
                                            } else {
                                                this.errorHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }
                                }
                                this.state = 239;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
                            }
                            this.state = 241;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context)) {
                                case 1:
                                    {
                                        this.state = 240;
                                        this.match(BSLMethodDescriptionParser.EOL);
                                    }
                                    break;
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 243;
                            this.startPart();
                            this.state = 244;
                            this.match(BSLMethodDescriptionParser.EOL);
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

    public examples(): ExamplesContext {
        let localContext = new ExamplesContext(this.context, this.state);
        this.enterRule(localContext, 12, BSLMethodDescriptionParser.RULE_examples);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 248;
                this.startPart();
                this.state = 249;
                this.match(BSLMethodDescriptionParser.EXAMPLE_KEYWORD);
                this.state = 257;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8) {
                    {
                        this.state = 250;
                        this.match(BSLMethodDescriptionParser.EOL);
                        this.state = 254;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 251;
                                        this.examplesString();
                                    }
                                }
                            }
                            this.state = 256;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
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

    public examplesString(): ExamplesStringContext {
        let localContext = new ExamplesStringContext(this.context, this.state);
        this.enterRule(localContext, 14, BSLMethodDescriptionParser.RULE_examplesString);
        let _la: number;
        try {
            let alternative: number;
            this.state = 274;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 259;
                            this.startPart();
                            this.state = 260;
                            _la = this.tokenStream.LA(1);
                            if (_la <= 0 || ((_la & ~0x1f) === 0 && ((1 << _la) & 788) !== 0)) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 264;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 261;
                                            _la = this.tokenStream.LA(1);
                                            if (_la <= 0 || _la === 8) {
                                                this.errorHandler.recoverInline(this);
                                            } else {
                                                this.errorHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }
                                }
                                this.state = 266;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
                            }
                            this.state = 268;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 8) {
                                {
                                    this.state = 267;
                                    this.match(BSLMethodDescriptionParser.EOL);
                                }
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 270;
                            this.startPart();
                            this.state = 272;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 8) {
                                {
                                    this.state = 271;
                                    this.match(BSLMethodDescriptionParser.EOL);
                                }
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

    public callOptions(): CallOptionsContext {
        let localContext = new CallOptionsContext(this.context, this.state);
        this.enterRule(localContext, 16, BSLMethodDescriptionParser.RULE_callOptions);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 276;
                this.startPart();
                this.state = 277;
                this.match(BSLMethodDescriptionParser.CALL_OPTIONS_KEYWORD);
                this.state = 285;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8) {
                    {
                        this.state = 278;
                        this.match(BSLMethodDescriptionParser.EOL);
                        this.state = 282;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 64, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 279;
                                        this.callOptionsString();
                                    }
                                }
                            }
                            this.state = 284;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 64, this.context);
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

    public callOptionsString(): CallOptionsStringContext {
        let localContext = new CallOptionsStringContext(this.context, this.state);
        this.enterRule(localContext, 18, BSLMethodDescriptionParser.RULE_callOptionsString);
        let _la: number;
        try {
            let alternative: number;
            this.state = 302;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 287;
                            this.startPart();
                            this.state = 288;
                            _la = this.tokenStream.LA(1);
                            if (_la <= 0 || ((_la & ~0x1f) === 0 && ((1 << _la) & 780) !== 0)) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 292;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 289;
                                            _la = this.tokenStream.LA(1);
                                            if (_la <= 0 || _la === 8) {
                                                this.errorHandler.recoverInline(this);
                                            } else {
                                                this.errorHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }
                                }
                                this.state = 294;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
                            }
                            this.state = 296;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 8) {
                                {
                                    this.state = 295;
                                    this.match(BSLMethodDescriptionParser.EOL);
                                }
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 298;
                            this.startPart();
                            this.state = 300;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 8) {
                                {
                                    this.state = 299;
                                    this.match(BSLMethodDescriptionParser.EOL);
                                }
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

    public parameters(): ParametersContext {
        let localContext = new ParametersContext(this.context, this.state);
        this.enterRule(localContext, 20, BSLMethodDescriptionParser.RULE_parameters);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 304;
                this.startPart();
                this.state = 305;
                this.match(BSLMethodDescriptionParser.PARAMETERS_KEYWORD);
                this.state = 307;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context)) {
                    case 1:
                        {
                            this.state = 306;
                            this.match(BSLMethodDescriptionParser.SPACE);
                        }
                        break;
                }
                this.state = 318;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context)) {
                    case 1:
                        {
                            this.state = 309;
                            this.match(BSLMethodDescriptionParser.EOL);
                            this.state = 316;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context)) {
                                case 1:
                                    {
                                        this.state = 310;
                                        this.hyperlinkBlock();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 312;
                                        this.errorHandler.sync(this);
                                        alternative = 1;
                                        do {
                                            switch (alternative) {
                                                case 1:
                                                    {
                                                        {
                                                            this.state = 311;
                                                            this.parameterString();
                                                        }
                                                    }
                                                    break;
                                                default:
                                                    throw new antlr.NoViableAltException(this);
                                            }
                                            this.state = 314;
                                            this.errorHandler.sync(this);
                                            alternative = this.interpreter.adaptivePredict(
                                                this.tokenStream,
                                                71,
                                                this.context
                                            );
                                        } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                                    }
                                    break;
                            }
                        }
                        break;
                }
                this.state = 321;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8) {
                    {
                        this.state = 320;
                        this.match(BSLMethodDescriptionParser.EOL);
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

    public parameterString(): ParameterStringContext {
        let localContext = new ParameterStringContext(this.context, this.state);
        this.enterRule(localContext, 22, BSLMethodDescriptionParser.RULE_parameterString);
        try {
            this.state = 335;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 323;
                        this.parameter();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 324;
                            this.startPart();
                            this.state = 325;
                            this.typesBlock();
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 327;
                        this.subParameter();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        {
                            this.state = 328;
                            this.startPart();
                            this.state = 329;
                            this.typeDescription();
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        {
                            this.state = 331;
                            this.startPart();
                            this.state = 333;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context)) {
                                case 1:
                                    {
                                        this.state = 332;
                                        this.match(BSLMethodDescriptionParser.EOL);
                                    }
                                    break;
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

    public parameter(): ParameterContext {
        let localContext = new ParameterContext(this.context, this.state);
        this.enterRule(localContext, 24, BSLMethodDescriptionParser.RULE_parameter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 337;
                this.startPart();
                this.state = 338;
                this.parameterName();
                this.state = 339;
                this.typesBlock();
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

    public subParameter(): SubParameterContext {
        let localContext = new SubParameterContext(this.context, this.state);
        this.enterRule(localContext, 26, BSLMethodDescriptionParser.RULE_subParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 341;
                this.startPart();
                this.state = 342;
                this.match(BSLMethodDescriptionParser.STAR);
                this.state = 344;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                        this.state = 343;
                        this.match(BSLMethodDescriptionParser.SPACE);
                    }
                }

                this.state = 346;
                this.parameterName();
                this.state = 347;
                this.typesBlock();
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

    public parameterName(): ParameterNameContext {
        let localContext = new ParameterNameContext(this.context, this.state);
        this.enterRule(localContext, 28, BSLMethodDescriptionParser.RULE_parameterName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 349;
                this.match(BSLMethodDescriptionParser.WORD);
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

    public returnsValues(): ReturnsValuesContext {
        let localContext = new ReturnsValuesContext(this.context, this.state);
        this.enterRule(localContext, 30, BSLMethodDescriptionParser.RULE_returnsValues);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 351;
                this.startPart();
                this.state = 352;
                this.match(BSLMethodDescriptionParser.RETURNS_KEYWORD);
                this.state = 354;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context)) {
                    case 1:
                        {
                            this.state = 353;
                            this.match(BSLMethodDescriptionParser.SPACE);
                        }
                        break;
                }
                this.state = 365;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context)) {
                    case 1:
                        {
                            this.state = 356;
                            this.match(BSLMethodDescriptionParser.EOL);
                            this.state = 363;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context)) {
                                case 1:
                                    {
                                        this.state = 357;
                                        this.hyperlinkBlock();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 359;
                                        this.errorHandler.sync(this);
                                        alternative = 1;
                                        do {
                                            switch (alternative) {
                                                case 1:
                                                    {
                                                        {
                                                            this.state = 358;
                                                            this.returnsValuesString();
                                                        }
                                                    }
                                                    break;
                                                default:
                                                    throw new antlr.NoViableAltException(this);
                                            }
                                            this.state = 361;
                                            this.errorHandler.sync(this);
                                            alternative = this.interpreter.adaptivePredict(
                                                this.tokenStream,
                                                79,
                                                this.context
                                            );
                                        } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                                    }
                                    break;
                            }
                        }
                        break;
                }
                this.state = 368;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8) {
                    {
                        this.state = 367;
                        this.match(BSLMethodDescriptionParser.EOL);
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

    public returnsValuesString(): ReturnsValuesStringContext {
        let localContext = new ReturnsValuesStringContext(this.context, this.state);
        this.enterRule(localContext, 32, BSLMethodDescriptionParser.RULE_returnsValuesString);
        try {
            this.state = 382;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 370;
                        this.returnsValue();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 371;
                            this.startPart();
                            this.state = 372;
                            this.typesBlock();
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 374;
                        this.subParameter();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        {
                            this.state = 375;
                            this.startPart();
                            this.state = 376;
                            this.typeDescription();
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        {
                            this.state = 378;
                            this.startPart();
                            this.state = 380;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context)) {
                                case 1:
                                    {
                                        this.state = 379;
                                        this.match(BSLMethodDescriptionParser.EOL);
                                    }
                                    break;
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

    public returnsValue(): ReturnsValueContext {
        let localContext = new ReturnsValueContext(this.context, this.state);
        this.enterRule(localContext, 34, BSLMethodDescriptionParser.RULE_returnsValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 384;
                this.startPart();
                this.state = 385;
                this.type_();
                this.state = 391;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case BSLMethodDescriptionParser.SPACE:
                    case BSLMethodDescriptionParser.DASH:
                        {
                            {
                                this.state = 386;
                                this.spitter();
                                this.state = 388;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context)) {
                                    case 1:
                                        {
                                            this.state = 387;
                                            this.typeDescription();
                                        }
                                        break;
                                }
                            }
                        }
                        break;
                    case BSLMethodDescriptionParser.EOL:
                        {
                            this.state = 390;
                            this.match(BSLMethodDescriptionParser.EOL);
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

    public typesBlock(): TypesBlockContext {
        let localContext = new TypesBlockContext(this.context, this.state);
        this.enterRule(localContext, 36, BSLMethodDescriptionParser.RULE_typesBlock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 393;
                this.spitter();
                this.state = 394;
                this.type_();
                this.state = 400;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case BSLMethodDescriptionParser.SPACE:
                    case BSLMethodDescriptionParser.DASH:
                        {
                            {
                                this.state = 395;
                                this.spitter();
                                this.state = 397;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context)) {
                                    case 1:
                                        {
                                            this.state = 396;
                                            this.typeDescription();
                                        }
                                        break;
                                }
                            }
                        }
                        break;
                    case BSLMethodDescriptionParser.EOL:
                        {
                            this.state = 399;
                            this.match(BSLMethodDescriptionParser.EOL);
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

    public typeDescription(): TypeDescriptionContext {
        let localContext = new TypeDescriptionContext(this.context, this.state);
        this.enterRule(localContext, 38, BSLMethodDescriptionParser.RULE_typeDescription);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 403;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                        this.state = 402;
                        this.match(BSLMethodDescriptionParser.SPACE);
                    }
                }

                this.state = 405;
                _la = this.tokenStream.LA(1);
                if (_la <= 0 || ((_la & ~0x1f) === 0 && ((1 << _la) & 1820) !== 0)) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 409;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((_la & ~0x1f) === 0 && ((1 << _la) & 1048318) !== 0) {
                    {
                        {
                            this.state = 406;
                            _la = this.tokenStream.LA(1);
                            if (_la <= 0 || _la === 8) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 411;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 412;
                this.match(BSLMethodDescriptionParser.EOL);
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

    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 40, BSLMethodDescriptionParser.RULE_type);
        let _la: number;
        try {
            this.state = 421;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 414;
                        this.hyperlinkType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 415;
                        this.listTypes();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        {
                            this.state = 416;
                            this.simpleType();
                            this.state = 418;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 12) {
                                {
                                    this.state = 417;
                                    this.match(BSLMethodDescriptionParser.COLON);
                                }
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 420;
                        this.complexType();
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

    public simpleType(): SimpleTypeContext {
        let localContext = new SimpleTypeContext(this.context, this.state);
        this.enterRule(localContext, 42, BSLMethodDescriptionParser.RULE_simpleType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 423;
                _la = this.tokenStream.LA(1);
                if (!(_la === 15 || _la === 16)) {
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

    public listTypes(): ListTypesContext {
        let localContext = new ListTypesContext(this.context, this.state);
        this.enterRule(localContext, 44, BSLMethodDescriptionParser.RULE_listTypes);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 428;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context)) {
                    case 1:
                        {
                            this.state = 425;
                            this.simpleType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 426;
                            this.complexType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 427;
                            this.hyperlinkType();
                        }
                        break;
                }
                this.state = 439;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 430;
                                    this.match(BSLMethodDescriptionParser.COMMA);
                                    this.state = 432;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 9) {
                                        {
                                            this.state = 431;
                                            this.match(BSLMethodDescriptionParser.SPACE);
                                        }
                                    }

                                    this.state = 437;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context)) {
                                        case 1:
                                            {
                                                this.state = 434;
                                                this.simpleType();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 435;
                                                this.complexType();
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 436;
                                                this.hyperlinkType();
                                            }
                                            break;
                                    }
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 441;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context);
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

    public complexType(): ComplexTypeContext {
        let localContext = new ComplexTypeContext(this.context, this.state);
        this.enterRule(localContext, 46, BSLMethodDescriptionParser.RULE_complexType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 443;
                localContext._collection = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if (!(_la === 15 || _la === 16)) {
                    localContext._collection = this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 444;
                this.match(BSLMethodDescriptionParser.SPACE);
                this.state = 445;
                this.match(BSLMethodDescriptionParser.OF_KEYWORD);
                this.state = 446;
                this.match(BSLMethodDescriptionParser.SPACE);
                this.state = 447;
                this.type_();
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

    public hyperlinkType(): HyperlinkTypeContext {
        let localContext = new HyperlinkTypeContext(this.context, this.state);
        this.enterRule(localContext, 48, BSLMethodDescriptionParser.RULE_hyperlinkType);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 449;
                this.match(BSLMethodDescriptionParser.SEE_KEYWORD);
                this.state = 450;
                this.match(BSLMethodDescriptionParser.SPACE);
                this.state = 451;
                localContext._link = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if (!(_la === 15 || _la === 16)) {
                    localContext._link = this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 460;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 452;
                        this.match(BSLMethodDescriptionParser.LPAREN);
                        this.state = 456;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 453;
                                        localContext._linkParams = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (_la <= 0 || _la === 8) {
                                            localContext._linkParams = this.errorHandler.recoverInline(this);
                                        } else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                }
                            }
                            this.state = 458;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
                        }
                        this.state = 459;
                        this.match(BSLMethodDescriptionParser.RPAREN);
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

    public spitter(): SpitterContext {
        let localContext = new SpitterContext(this.context, this.state);
        this.enterRule(localContext, 50, BSLMethodDescriptionParser.RULE_spitter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 463;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                        this.state = 462;
                        this.match(BSLMethodDescriptionParser.SPACE);
                    }
                }

                this.state = 465;
                this.match(BSLMethodDescriptionParser.DASH);
                this.state = 467;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context)) {
                    case 1:
                        {
                            this.state = 466;
                            this.match(BSLMethodDescriptionParser.SPACE);
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

    public hyperlinkBlock(): HyperlinkBlockContext {
        let localContext = new HyperlinkBlockContext(this.context, this.state);
        this.enterRule(localContext, 52, BSLMethodDescriptionParser.RULE_hyperlinkBlock);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 474;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 101, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 469;
                                this.startPart();
                                this.state = 470;
                                this.match(BSLMethodDescriptionParser.EOL);
                            }
                        }
                    }
                    this.state = 476;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 101, this.context);
                }
                this.state = 477;
                this.startPart();
                this.state = 478;
                this.hyperlinkType();
                this.state = 480;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context)) {
                    case 1:
                        {
                            this.state = 479;
                            this.match(BSLMethodDescriptionParser.SPACE);
                        }
                        break;
                }
                this.state = 486;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 482;
                                this.match(BSLMethodDescriptionParser.EOL);
                                this.state = 483;
                                this.startPart();
                            }
                        }
                    }
                    this.state = 488;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context);
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

    public startPart(): StartPartContext {
        let localContext = new StartPartContext(this.context, this.state);
        this.enterRule(localContext, 54, BSLMethodDescriptionParser.RULE_startPart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 490;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                        this.state = 489;
                        this.match(BSLMethodDescriptionParser.SPACE);
                    }
                }

                this.state = 492;
                this.match(BSLMethodDescriptionParser.COMMENT);
                this.state = 494;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context)) {
                    case 1:
                        {
                            this.state = 493;
                            this.match(BSLMethodDescriptionParser.SPACE);
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

    public static readonly _serializedATN: number[] = [
        4, 1, 19, 497, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7,
        2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2,
        16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2,
        24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 1, 0, 3, 0, 58, 8, 0, 1, 0, 3, 0, 61, 8, 0, 1, 0, 3, 0, 64,
        8, 0, 1, 0, 3, 0, 67, 8, 0, 1, 0, 3, 0, 70, 8, 0, 1, 0, 3, 0, 73, 8, 0, 1, 0, 3, 0, 76, 8, 0, 1, 0, 3, 0, 79, 8,
        0, 1, 0, 3, 0, 82, 8, 0, 1, 0, 3, 0, 85, 8, 0, 1, 0, 3, 0, 88, 8, 0, 1, 0, 3, 0, 91, 8, 0, 1, 0, 3, 0, 94, 8, 0,
        1, 0, 3, 0, 97, 8, 0, 1, 0, 3, 0, 100, 8, 0, 1, 0, 3, 0, 103, 8, 0, 1, 0, 3, 0, 106, 8, 0, 1, 0, 3, 0, 109, 8,
        0, 1, 0, 3, 0, 112, 8, 0, 1, 0, 3, 0, 115, 8, 0, 1, 0, 3, 0, 118, 8, 0, 1, 0, 3, 0, 121, 8, 0, 1, 0, 3, 0, 124,
        8, 0, 1, 0, 3, 0, 127, 8, 0, 1, 0, 3, 0, 130, 8, 0, 1, 0, 3, 0, 133, 8, 0, 1, 0, 3, 0, 136, 8, 0, 1, 0, 3, 0,
        139, 8, 0, 1, 0, 3, 0, 142, 8, 0, 1, 0, 3, 0, 145, 8, 0, 1, 0, 3, 0, 148, 8, 0, 1, 0, 3, 0, 151, 8, 0, 1, 0, 3,
        0, 154, 8, 0, 1, 0, 3, 0, 157, 8, 0, 1, 0, 3, 0, 160, 8, 0, 1, 0, 3, 0, 163, 8, 0, 1, 0, 3, 0, 166, 8, 0, 1, 0,
        3, 0, 169, 8, 0, 1, 0, 3, 0, 172, 8, 0, 1, 0, 3, 0, 175, 8, 0, 1, 0, 3, 0, 178, 8, 0, 1, 0, 3, 0, 181, 8, 0, 1,
        0, 3, 0, 184, 8, 0, 1, 0, 3, 0, 187, 8, 0, 1, 0, 3, 0, 190, 8, 0, 1, 0, 3, 0, 193, 8, 0, 1, 0, 3, 0, 196, 8, 0,
        1, 0, 3, 0, 199, 8, 0, 3, 0, 201, 8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 209, 8, 1, 1, 1, 3, 1, 212, 8,
        1, 1, 2, 1, 2, 5, 2, 216, 8, 2, 10, 2, 12, 2, 219, 9, 2, 1, 3, 1, 3, 3, 3, 223, 8, 3, 1, 3, 3, 3, 226, 8, 3, 1,
        4, 4, 4, 229, 8, 4, 11, 4, 12, 4, 230, 1, 5, 1, 5, 1, 5, 5, 5, 236, 8, 5, 10, 5, 12, 5, 239, 9, 5, 1, 5, 3, 5,
        242, 8, 5, 1, 5, 1, 5, 1, 5, 3, 5, 247, 8, 5, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 253, 8, 6, 10, 6, 12, 6, 256, 9, 6,
        3, 6, 258, 8, 6, 1, 7, 1, 7, 1, 7, 5, 7, 263, 8, 7, 10, 7, 12, 7, 266, 9, 7, 1, 7, 3, 7, 269, 8, 7, 1, 7, 1, 7,
        3, 7, 273, 8, 7, 3, 7, 275, 8, 7, 1, 8, 1, 8, 1, 8, 1, 8, 5, 8, 281, 8, 8, 10, 8, 12, 8, 284, 9, 8, 3, 8, 286,
        8, 8, 1, 9, 1, 9, 1, 9, 5, 9, 291, 8, 9, 10, 9, 12, 9, 294, 9, 9, 1, 9, 3, 9, 297, 8, 9, 1, 9, 1, 9, 3, 9, 301,
        8, 9, 3, 9, 303, 8, 9, 1, 10, 1, 10, 1, 10, 3, 10, 308, 8, 10, 1, 10, 1, 10, 1, 10, 4, 10, 313, 8, 10, 11, 10,
        12, 10, 314, 3, 10, 317, 8, 10, 3, 10, 319, 8, 10, 1, 10, 3, 10, 322, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
        1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 334, 8, 11, 3, 11, 336, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1,
        13, 1, 13, 3, 13, 345, 8, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 3, 15, 355, 8, 15, 1, 15,
        1, 15, 1, 15, 4, 15, 360, 8, 15, 11, 15, 12, 15, 361, 3, 15, 364, 8, 15, 3, 15, 366, 8, 15, 1, 15, 3, 15, 369,
        8, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 381, 8, 16, 3, 16, 383, 8,
        16, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 389, 8, 17, 1, 17, 3, 17, 392, 8, 17, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18,
        398, 8, 18, 1, 18, 3, 18, 401, 8, 18, 1, 19, 3, 19, 404, 8, 19, 1, 19, 1, 19, 5, 19, 408, 8, 19, 10, 19, 12, 19,
        411, 9, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 419, 8, 20, 1, 20, 3, 20, 422, 8, 20, 1, 21, 1, 21,
        1, 22, 1, 22, 1, 22, 3, 22, 429, 8, 22, 1, 22, 1, 22, 3, 22, 433, 8, 22, 1, 22, 1, 22, 1, 22, 3, 22, 438, 8, 22,
        4, 22, 440, 8, 22, 11, 22, 12, 22, 441, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1,
        24, 5, 24, 455, 8, 24, 10, 24, 12, 24, 458, 9, 24, 1, 24, 3, 24, 461, 8, 24, 1, 25, 3, 25, 464, 8, 25, 1, 25, 1,
        25, 3, 25, 468, 8, 25, 1, 26, 1, 26, 1, 26, 5, 26, 473, 8, 26, 10, 26, 12, 26, 476, 9, 26, 1, 26, 1, 26, 1, 26,
        3, 26, 481, 8, 26, 1, 26, 1, 26, 5, 26, 485, 8, 26, 10, 26, 12, 26, 488, 9, 26, 1, 27, 3, 27, 491, 8, 27, 1, 27,
        1, 27, 3, 27, 495, 8, 27, 1, 27, 0, 0, 28, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
        36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 0, 7, 1, 0, 8, 9, 1, 0, 8, 8, 2, 0, 1, 5, 8, 9, 3, 0, 2, 2, 4, 4, 8, 9,
        2, 0, 2, 3, 8, 9, 2, 0, 2, 4, 8, 10, 1, 0, 15, 16, 592, 0, 200, 1, 0, 0, 0, 2, 204, 1, 0, 0, 0, 4, 213, 1, 0, 0,
        0, 6, 222, 1, 0, 0, 0, 8, 228, 1, 0, 0, 0, 10, 246, 1, 0, 0, 0, 12, 248, 1, 0, 0, 0, 14, 274, 1, 0, 0, 0, 16,
        276, 1, 0, 0, 0, 18, 302, 1, 0, 0, 0, 20, 304, 1, 0, 0, 0, 22, 335, 1, 0, 0, 0, 24, 337, 1, 0, 0, 0, 26, 341, 1,
        0, 0, 0, 28, 349, 1, 0, 0, 0, 30, 351, 1, 0, 0, 0, 32, 382, 1, 0, 0, 0, 34, 384, 1, 0, 0, 0, 36, 393, 1, 0, 0,
        0, 38, 403, 1, 0, 0, 0, 40, 421, 1, 0, 0, 0, 42, 423, 1, 0, 0, 0, 44, 428, 1, 0, 0, 0, 46, 443, 1, 0, 0, 0, 48,
        449, 1, 0, 0, 0, 50, 463, 1, 0, 0, 0, 52, 474, 1, 0, 0, 0, 54, 490, 1, 0, 0, 0, 56, 58, 3, 2, 1, 0, 57, 56, 1,
        0, 0, 0, 57, 58, 1, 0, 0, 0, 58, 60, 1, 0, 0, 0, 59, 61, 3, 6, 3, 0, 60, 59, 1, 0, 0, 0, 60, 61, 1, 0, 0, 0, 61,
        63, 1, 0, 0, 0, 62, 64, 3, 20, 10, 0, 63, 62, 1, 0, 0, 0, 63, 64, 1, 0, 0, 0, 64, 66, 1, 0, 0, 0, 65, 67, 3, 16,
        8, 0, 66, 65, 1, 0, 0, 0, 66, 67, 1, 0, 0, 0, 67, 69, 1, 0, 0, 0, 68, 70, 3, 30, 15, 0, 69, 68, 1, 0, 0, 0, 69,
        70, 1, 0, 0, 0, 70, 72, 1, 0, 0, 0, 71, 73, 3, 12, 6, 0, 72, 71, 1, 0, 0, 0, 72, 73, 1, 0, 0, 0, 73, 201, 1, 0,
        0, 0, 74, 76, 3, 2, 1, 0, 75, 74, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 78, 1, 0, 0, 0, 77, 79, 3, 6, 3, 0, 78,
        77, 1, 0, 0, 0, 78, 79, 1, 0, 0, 0, 79, 81, 1, 0, 0, 0, 80, 82, 3, 20, 10, 0, 81, 80, 1, 0, 0, 0, 81, 82, 1, 0,
        0, 0, 82, 84, 1, 0, 0, 0, 83, 85, 3, 12, 6, 0, 84, 83, 1, 0, 0, 0, 84, 85, 1, 0, 0, 0, 85, 87, 1, 0, 0, 0, 86,
        88, 3, 30, 15, 0, 87, 86, 1, 0, 0, 0, 87, 88, 1, 0, 0, 0, 88, 90, 1, 0, 0, 0, 89, 91, 3, 16, 8, 0, 90, 89, 1, 0,
        0, 0, 90, 91, 1, 0, 0, 0, 91, 201, 1, 0, 0, 0, 92, 94, 3, 2, 1, 0, 93, 92, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0, 94,
        96, 1, 0, 0, 0, 95, 97, 3, 6, 3, 0, 96, 95, 1, 0, 0, 0, 96, 97, 1, 0, 0, 0, 97, 99, 1, 0, 0, 0, 98, 100, 3, 20,
        10, 0, 99, 98, 1, 0, 0, 0, 99, 100, 1, 0, 0, 0, 100, 102, 1, 0, 0, 0, 101, 103, 3, 16, 8, 0, 102, 101, 1, 0, 0,
        0, 102, 103, 1, 0, 0, 0, 103, 105, 1, 0, 0, 0, 104, 106, 3, 12, 6, 0, 105, 104, 1, 0, 0, 0, 105, 106, 1, 0, 0,
        0, 106, 108, 1, 0, 0, 0, 107, 109, 3, 30, 15, 0, 108, 107, 1, 0, 0, 0, 108, 109, 1, 0, 0, 0, 109, 201, 1, 0, 0,
        0, 110, 112, 3, 2, 1, 0, 111, 110, 1, 0, 0, 0, 111, 112, 1, 0, 0, 0, 112, 114, 1, 0, 0, 0, 113, 115, 3, 6, 3, 0,
        114, 113, 1, 0, 0, 0, 114, 115, 1, 0, 0, 0, 115, 117, 1, 0, 0, 0, 116, 118, 3, 20, 10, 0, 117, 116, 1, 0, 0, 0,
        117, 118, 1, 0, 0, 0, 118, 120, 1, 0, 0, 0, 119, 121, 3, 12, 6, 0, 120, 119, 1, 0, 0, 0, 120, 121, 1, 0, 0, 0,
        121, 123, 1, 0, 0, 0, 122, 124, 3, 16, 8, 0, 123, 122, 1, 0, 0, 0, 123, 124, 1, 0, 0, 0, 124, 126, 1, 0, 0, 0,
        125, 127, 3, 30, 15, 0, 126, 125, 1, 0, 0, 0, 126, 127, 1, 0, 0, 0, 127, 201, 1, 0, 0, 0, 128, 130, 3, 6, 3, 0,
        129, 128, 1, 0, 0, 0, 129, 130, 1, 0, 0, 0, 130, 132, 1, 0, 0, 0, 131, 133, 3, 20, 10, 0, 132, 131, 1, 0, 0, 0,
        132, 133, 1, 0, 0, 0, 133, 135, 1, 0, 0, 0, 134, 136, 3, 16, 8, 0, 135, 134, 1, 0, 0, 0, 135, 136, 1, 0, 0, 0,
        136, 138, 1, 0, 0, 0, 137, 139, 3, 30, 15, 0, 138, 137, 1, 0, 0, 0, 138, 139, 1, 0, 0, 0, 139, 141, 1, 0, 0, 0,
        140, 142, 3, 12, 6, 0, 141, 140, 1, 0, 0, 0, 141, 142, 1, 0, 0, 0, 142, 144, 1, 0, 0, 0, 143, 145, 3, 2, 1, 0,
        144, 143, 1, 0, 0, 0, 144, 145, 1, 0, 0, 0, 145, 201, 1, 0, 0, 0, 146, 148, 3, 6, 3, 0, 147, 146, 1, 0, 0, 0,
        147, 148, 1, 0, 0, 0, 148, 150, 1, 0, 0, 0, 149, 151, 3, 20, 10, 0, 150, 149, 1, 0, 0, 0, 150, 151, 1, 0, 0, 0,
        151, 153, 1, 0, 0, 0, 152, 154, 3, 12, 6, 0, 153, 152, 1, 0, 0, 0, 153, 154, 1, 0, 0, 0, 154, 156, 1, 0, 0, 0,
        155, 157, 3, 30, 15, 0, 156, 155, 1, 0, 0, 0, 156, 157, 1, 0, 0, 0, 157, 159, 1, 0, 0, 0, 158, 160, 3, 16, 8, 0,
        159, 158, 1, 0, 0, 0, 159, 160, 1, 0, 0, 0, 160, 162, 1, 0, 0, 0, 161, 163, 3, 2, 1, 0, 162, 161, 1, 0, 0, 0,
        162, 163, 1, 0, 0, 0, 163, 201, 1, 0, 0, 0, 164, 166, 3, 6, 3, 0, 165, 164, 1, 0, 0, 0, 165, 166, 1, 0, 0, 0,
        166, 168, 1, 0, 0, 0, 167, 169, 3, 20, 10, 0, 168, 167, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 171, 1, 0, 0, 0,
        170, 172, 3, 16, 8, 0, 171, 170, 1, 0, 0, 0, 171, 172, 1, 0, 0, 0, 172, 174, 1, 0, 0, 0, 173, 175, 3, 12, 6, 0,
        174, 173, 1, 0, 0, 0, 174, 175, 1, 0, 0, 0, 175, 177, 1, 0, 0, 0, 176, 178, 3, 30, 15, 0, 177, 176, 1, 0, 0, 0,
        177, 178, 1, 0, 0, 0, 178, 180, 1, 0, 0, 0, 179, 181, 3, 2, 1, 0, 180, 179, 1, 0, 0, 0, 180, 181, 1, 0, 0, 0,
        181, 201, 1, 0, 0, 0, 182, 184, 3, 6, 3, 0, 183, 182, 1, 0, 0, 0, 183, 184, 1, 0, 0, 0, 184, 186, 1, 0, 0, 0,
        185, 187, 3, 20, 10, 0, 186, 185, 1, 0, 0, 0, 186, 187, 1, 0, 0, 0, 187, 189, 1, 0, 0, 0, 188, 190, 3, 12, 6, 0,
        189, 188, 1, 0, 0, 0, 189, 190, 1, 0, 0, 0, 190, 192, 1, 0, 0, 0, 191, 193, 3, 16, 8, 0, 192, 191, 1, 0, 0, 0,
        192, 193, 1, 0, 0, 0, 193, 195, 1, 0, 0, 0, 194, 196, 3, 30, 15, 0, 195, 194, 1, 0, 0, 0, 195, 196, 1, 0, 0, 0,
        196, 198, 1, 0, 0, 0, 197, 199, 3, 2, 1, 0, 198, 197, 1, 0, 0, 0, 198, 199, 1, 0, 0, 0, 199, 201, 1, 0, 0, 0,
        200, 57, 1, 0, 0, 0, 200, 75, 1, 0, 0, 0, 200, 93, 1, 0, 0, 0, 200, 111, 1, 0, 0, 0, 200, 129, 1, 0, 0, 0, 200,
        147, 1, 0, 0, 0, 200, 165, 1, 0, 0, 0, 200, 183, 1, 0, 0, 0, 201, 202, 1, 0, 0, 0, 202, 203, 5, 0, 0, 1, 203, 1,
        1, 0, 0, 0, 204, 205, 3, 54, 27, 0, 205, 208, 5, 5, 0, 0, 206, 207, 5, 9, 0, 0, 207, 209, 3, 4, 2, 0, 208, 206,
        1, 0, 0, 0, 208, 209, 1, 0, 0, 0, 209, 211, 1, 0, 0, 0, 210, 212, 5, 8, 0, 0, 211, 210, 1, 0, 0, 0, 211, 212, 1,
        0, 0, 0, 212, 3, 1, 0, 0, 0, 213, 217, 8, 0, 0, 0, 214, 216, 8, 1, 0, 0, 215, 214, 1, 0, 0, 0, 216, 219, 1, 0,
        0, 0, 217, 215, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 5, 1, 0, 0, 0, 219, 217, 1, 0, 0, 0, 220, 223, 3, 52, 26,
        0, 221, 223, 3, 8, 4, 0, 222, 220, 1, 0, 0, 0, 222, 221, 1, 0, 0, 0, 223, 225, 1, 0, 0, 0, 224, 226, 5, 8, 0, 0,
        225, 224, 1, 0, 0, 0, 225, 226, 1, 0, 0, 0, 226, 7, 1, 0, 0, 0, 227, 229, 3, 10, 5, 0, 228, 227, 1, 0, 0, 0,
        229, 230, 1, 0, 0, 0, 230, 228, 1, 0, 0, 0, 230, 231, 1, 0, 0, 0, 231, 9, 1, 0, 0, 0, 232, 233, 3, 54, 27, 0,
        233, 237, 8, 2, 0, 0, 234, 236, 8, 1, 0, 0, 235, 234, 1, 0, 0, 0, 236, 239, 1, 0, 0, 0, 237, 235, 1, 0, 0, 0,
        237, 238, 1, 0, 0, 0, 238, 241, 1, 0, 0, 0, 239, 237, 1, 0, 0, 0, 240, 242, 5, 8, 0, 0, 241, 240, 1, 0, 0, 0,
        241, 242, 1, 0, 0, 0, 242, 247, 1, 0, 0, 0, 243, 244, 3, 54, 27, 0, 244, 245, 5, 8, 0, 0, 245, 247, 1, 0, 0, 0,
        246, 232, 1, 0, 0, 0, 246, 243, 1, 0, 0, 0, 247, 11, 1, 0, 0, 0, 248, 249, 3, 54, 27, 0, 249, 257, 5, 3, 0, 0,
        250, 254, 5, 8, 0, 0, 251, 253, 3, 14, 7, 0, 252, 251, 1, 0, 0, 0, 253, 256, 1, 0, 0, 0, 254, 252, 1, 0, 0, 0,
        254, 255, 1, 0, 0, 0, 255, 258, 1, 0, 0, 0, 256, 254, 1, 0, 0, 0, 257, 250, 1, 0, 0, 0, 257, 258, 1, 0, 0, 0,
        258, 13, 1, 0, 0, 0, 259, 260, 3, 54, 27, 0, 260, 264, 8, 3, 0, 0, 261, 263, 8, 1, 0, 0, 262, 261, 1, 0, 0, 0,
        263, 266, 1, 0, 0, 0, 264, 262, 1, 0, 0, 0, 264, 265, 1, 0, 0, 0, 265, 268, 1, 0, 0, 0, 266, 264, 1, 0, 0, 0,
        267, 269, 5, 8, 0, 0, 268, 267, 1, 0, 0, 0, 268, 269, 1, 0, 0, 0, 269, 275, 1, 0, 0, 0, 270, 272, 3, 54, 27, 0,
        271, 273, 5, 8, 0, 0, 272, 271, 1, 0, 0, 0, 272, 273, 1, 0, 0, 0, 273, 275, 1, 0, 0, 0, 274, 259, 1, 0, 0, 0,
        274, 270, 1, 0, 0, 0, 275, 15, 1, 0, 0, 0, 276, 277, 3, 54, 27, 0, 277, 285, 5, 4, 0, 0, 278, 282, 5, 8, 0, 0,
        279, 281, 3, 18, 9, 0, 280, 279, 1, 0, 0, 0, 281, 284, 1, 0, 0, 0, 282, 280, 1, 0, 0, 0, 282, 283, 1, 0, 0, 0,
        283, 286, 1, 0, 0, 0, 284, 282, 1, 0, 0, 0, 285, 278, 1, 0, 0, 0, 285, 286, 1, 0, 0, 0, 286, 17, 1, 0, 0, 0,
        287, 288, 3, 54, 27, 0, 288, 292, 8, 4, 0, 0, 289, 291, 8, 1, 0, 0, 290, 289, 1, 0, 0, 0, 291, 294, 1, 0, 0, 0,
        292, 290, 1, 0, 0, 0, 292, 293, 1, 0, 0, 0, 293, 296, 1, 0, 0, 0, 294, 292, 1, 0, 0, 0, 295, 297, 5, 8, 0, 0,
        296, 295, 1, 0, 0, 0, 296, 297, 1, 0, 0, 0, 297, 303, 1, 0, 0, 0, 298, 300, 3, 54, 27, 0, 299, 301, 5, 8, 0, 0,
        300, 299, 1, 0, 0, 0, 300, 301, 1, 0, 0, 0, 301, 303, 1, 0, 0, 0, 302, 287, 1, 0, 0, 0, 302, 298, 1, 0, 0, 0,
        303, 19, 1, 0, 0, 0, 304, 305, 3, 54, 27, 0, 305, 307, 5, 1, 0, 0, 306, 308, 5, 9, 0, 0, 307, 306, 1, 0, 0, 0,
        307, 308, 1, 0, 0, 0, 308, 318, 1, 0, 0, 0, 309, 316, 5, 8, 0, 0, 310, 317, 3, 52, 26, 0, 311, 313, 3, 22, 11,
        0, 312, 311, 1, 0, 0, 0, 313, 314, 1, 0, 0, 0, 314, 312, 1, 0, 0, 0, 314, 315, 1, 0, 0, 0, 315, 317, 1, 0, 0, 0,
        316, 310, 1, 0, 0, 0, 316, 312, 1, 0, 0, 0, 316, 317, 1, 0, 0, 0, 317, 319, 1, 0, 0, 0, 318, 309, 1, 0, 0, 0,
        318, 319, 1, 0, 0, 0, 319, 321, 1, 0, 0, 0, 320, 322, 5, 8, 0, 0, 321, 320, 1, 0, 0, 0, 321, 322, 1, 0, 0, 0,
        322, 21, 1, 0, 0, 0, 323, 336, 3, 24, 12, 0, 324, 325, 3, 54, 27, 0, 325, 326, 3, 36, 18, 0, 326, 336, 1, 0, 0,
        0, 327, 336, 3, 26, 13, 0, 328, 329, 3, 54, 27, 0, 329, 330, 3, 38, 19, 0, 330, 336, 1, 0, 0, 0, 331, 333, 3,
        54, 27, 0, 332, 334, 5, 8, 0, 0, 333, 332, 1, 0, 0, 0, 333, 334, 1, 0, 0, 0, 334, 336, 1, 0, 0, 0, 335, 323, 1,
        0, 0, 0, 335, 324, 1, 0, 0, 0, 335, 327, 1, 0, 0, 0, 335, 328, 1, 0, 0, 0, 335, 331, 1, 0, 0, 0, 336, 23, 1, 0,
        0, 0, 337, 338, 3, 54, 27, 0, 338, 339, 3, 28, 14, 0, 339, 340, 3, 36, 18, 0, 340, 25, 1, 0, 0, 0, 341, 342, 3,
        54, 27, 0, 342, 344, 5, 10, 0, 0, 343, 345, 5, 9, 0, 0, 344, 343, 1, 0, 0, 0, 344, 345, 1, 0, 0, 0, 345, 346, 1,
        0, 0, 0, 346, 347, 3, 28, 14, 0, 347, 348, 3, 36, 18, 0, 348, 27, 1, 0, 0, 0, 349, 350, 5, 15, 0, 0, 350, 29, 1,
        0, 0, 0, 351, 352, 3, 54, 27, 0, 352, 354, 5, 2, 0, 0, 353, 355, 5, 9, 0, 0, 354, 353, 1, 0, 0, 0, 354, 355, 1,
        0, 0, 0, 355, 365, 1, 0, 0, 0, 356, 363, 5, 8, 0, 0, 357, 364, 3, 52, 26, 0, 358, 360, 3, 32, 16, 0, 359, 358,
        1, 0, 0, 0, 360, 361, 1, 0, 0, 0, 361, 359, 1, 0, 0, 0, 361, 362, 1, 0, 0, 0, 362, 364, 1, 0, 0, 0, 363, 357, 1,
        0, 0, 0, 363, 359, 1, 0, 0, 0, 363, 364, 1, 0, 0, 0, 364, 366, 1, 0, 0, 0, 365, 356, 1, 0, 0, 0, 365, 366, 1, 0,
        0, 0, 366, 368, 1, 0, 0, 0, 367, 369, 5, 8, 0, 0, 368, 367, 1, 0, 0, 0, 368, 369, 1, 0, 0, 0, 369, 31, 1, 0, 0,
        0, 370, 383, 3, 34, 17, 0, 371, 372, 3, 54, 27, 0, 372, 373, 3, 36, 18, 0, 373, 383, 1, 0, 0, 0, 374, 383, 3,
        26, 13, 0, 375, 376, 3, 54, 27, 0, 376, 377, 3, 38, 19, 0, 377, 383, 1, 0, 0, 0, 378, 380, 3, 54, 27, 0, 379,
        381, 5, 8, 0, 0, 380, 379, 1, 0, 0, 0, 380, 381, 1, 0, 0, 0, 381, 383, 1, 0, 0, 0, 382, 370, 1, 0, 0, 0, 382,
        371, 1, 0, 0, 0, 382, 374, 1, 0, 0, 0, 382, 375, 1, 0, 0, 0, 382, 378, 1, 0, 0, 0, 383, 33, 1, 0, 0, 0, 384,
        385, 3, 54, 27, 0, 385, 391, 3, 40, 20, 0, 386, 388, 3, 50, 25, 0, 387, 389, 3, 38, 19, 0, 388, 387, 1, 0, 0, 0,
        388, 389, 1, 0, 0, 0, 389, 392, 1, 0, 0, 0, 390, 392, 5, 8, 0, 0, 391, 386, 1, 0, 0, 0, 391, 390, 1, 0, 0, 0,
        392, 35, 1, 0, 0, 0, 393, 394, 3, 50, 25, 0, 394, 400, 3, 40, 20, 0, 395, 397, 3, 50, 25, 0, 396, 398, 3, 38,
        19, 0, 397, 396, 1, 0, 0, 0, 397, 398, 1, 0, 0, 0, 398, 401, 1, 0, 0, 0, 399, 401, 5, 8, 0, 0, 400, 395, 1, 0,
        0, 0, 400, 399, 1, 0, 0, 0, 401, 37, 1, 0, 0, 0, 402, 404, 5, 9, 0, 0, 403, 402, 1, 0, 0, 0, 403, 404, 1, 0, 0,
        0, 404, 405, 1, 0, 0, 0, 405, 409, 8, 5, 0, 0, 406, 408, 8, 1, 0, 0, 407, 406, 1, 0, 0, 0, 408, 411, 1, 0, 0, 0,
        409, 407, 1, 0, 0, 0, 409, 410, 1, 0, 0, 0, 410, 412, 1, 0, 0, 0, 411, 409, 1, 0, 0, 0, 412, 413, 5, 8, 0, 0,
        413, 39, 1, 0, 0, 0, 414, 422, 3, 48, 24, 0, 415, 422, 3, 44, 22, 0, 416, 418, 3, 42, 21, 0, 417, 419, 5, 12, 0,
        0, 418, 417, 1, 0, 0, 0, 418, 419, 1, 0, 0, 0, 419, 422, 1, 0, 0, 0, 420, 422, 3, 46, 23, 0, 421, 414, 1, 0, 0,
        0, 421, 415, 1, 0, 0, 0, 421, 416, 1, 0, 0, 0, 421, 420, 1, 0, 0, 0, 422, 41, 1, 0, 0, 0, 423, 424, 7, 6, 0, 0,
        424, 43, 1, 0, 0, 0, 425, 429, 3, 42, 21, 0, 426, 429, 3, 46, 23, 0, 427, 429, 3, 48, 24, 0, 428, 425, 1, 0, 0,
        0, 428, 426, 1, 0, 0, 0, 428, 427, 1, 0, 0, 0, 429, 439, 1, 0, 0, 0, 430, 432, 5, 13, 0, 0, 431, 433, 5, 9, 0,
        0, 432, 431, 1, 0, 0, 0, 432, 433, 1, 0, 0, 0, 433, 437, 1, 0, 0, 0, 434, 438, 3, 42, 21, 0, 435, 438, 3, 46,
        23, 0, 436, 438, 3, 48, 24, 0, 437, 434, 1, 0, 0, 0, 437, 435, 1, 0, 0, 0, 437, 436, 1, 0, 0, 0, 438, 440, 1, 0,
        0, 0, 439, 430, 1, 0, 0, 0, 440, 441, 1, 0, 0, 0, 441, 439, 1, 0, 0, 0, 441, 442, 1, 0, 0, 0, 442, 45, 1, 0, 0,
        0, 443, 444, 7, 6, 0, 0, 444, 445, 5, 9, 0, 0, 445, 446, 5, 7, 0, 0, 446, 447, 5, 9, 0, 0, 447, 448, 3, 40, 20,
        0, 448, 47, 1, 0, 0, 0, 449, 450, 5, 6, 0, 0, 450, 451, 5, 9, 0, 0, 451, 460, 7, 6, 0, 0, 452, 456, 5, 17, 0, 0,
        453, 455, 8, 1, 0, 0, 454, 453, 1, 0, 0, 0, 455, 458, 1, 0, 0, 0, 456, 454, 1, 0, 0, 0, 456, 457, 1, 0, 0, 0,
        457, 459, 1, 0, 0, 0, 458, 456, 1, 0, 0, 0, 459, 461, 5, 18, 0, 0, 460, 452, 1, 0, 0, 0, 460, 461, 1, 0, 0, 0,
        461, 49, 1, 0, 0, 0, 462, 464, 5, 9, 0, 0, 463, 462, 1, 0, 0, 0, 463, 464, 1, 0, 0, 0, 464, 465, 1, 0, 0, 0,
        465, 467, 5, 11, 0, 0, 466, 468, 5, 9, 0, 0, 467, 466, 1, 0, 0, 0, 467, 468, 1, 0, 0, 0, 468, 51, 1, 0, 0, 0,
        469, 470, 3, 54, 27, 0, 470, 471, 5, 8, 0, 0, 471, 473, 1, 0, 0, 0, 472, 469, 1, 0, 0, 0, 473, 476, 1, 0, 0, 0,
        474, 472, 1, 0, 0, 0, 474, 475, 1, 0, 0, 0, 475, 477, 1, 0, 0, 0, 476, 474, 1, 0, 0, 0, 477, 478, 3, 54, 27, 0,
        478, 480, 3, 48, 24, 0, 479, 481, 5, 9, 0, 0, 480, 479, 1, 0, 0, 0, 480, 481, 1, 0, 0, 0, 481, 486, 1, 0, 0, 0,
        482, 483, 5, 8, 0, 0, 483, 485, 3, 54, 27, 0, 484, 482, 1, 0, 0, 0, 485, 488, 1, 0, 0, 0, 486, 484, 1, 0, 0, 0,
        486, 487, 1, 0, 0, 0, 487, 53, 1, 0, 0, 0, 488, 486, 1, 0, 0, 0, 489, 491, 5, 9, 0, 0, 490, 489, 1, 0, 0, 0,
        490, 491, 1, 0, 0, 0, 491, 492, 1, 0, 0, 0, 492, 494, 5, 14, 0, 0, 493, 495, 5, 9, 0, 0, 494, 493, 1, 0, 0, 0,
        494, 495, 1, 0, 0, 0, 495, 55, 1, 0, 0, 0, 106, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102,
        105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168,
        171, 174, 177, 180, 183, 186, 189, 192, 195, 198, 200, 208, 211, 217, 222, 225, 230, 237, 241, 246, 254, 257,
        264, 268, 272, 274, 282, 285, 292, 296, 300, 302, 307, 314, 316, 318, 321, 333, 335, 344, 354, 361, 363, 365,
        368, 380, 382, 388, 391, 397, 400, 403, 409, 418, 421, 428, 432, 437, 441, 456, 460, 463, 467, 474, 480, 486,
        490, 494,
    ];

    private static __ATN: antlr.ATN;

    public static get _ATN(): antlr.ATN {
        if (!BSLMethodDescriptionParser.__ATN) {
            BSLMethodDescriptionParser.__ATN = new antlr.ATNDeserializer().deserialize(
                BSLMethodDescriptionParser._serializedATN
            );
        }

        return BSLMethodDescriptionParser.__ATN;
    }

    private static readonly vocabulary = new antlr.Vocabulary(
        BSLMethodDescriptionParser.literalNames,
        BSLMethodDescriptionParser.symbolicNames,
        []
    );

    public override get vocabulary(): antlr.Vocabulary {
        return BSLMethodDescriptionParser.vocabulary;
    }

    private static readonly decisionsToDFA = BSLMethodDescriptionParser._ATN.decisionToState.map(
        (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index)
    );
}

export class MethodDescriptionContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public EOF(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.EOF, 0)!;
    }

    public deprecate(): DeprecateContext | null {
        return this.getRuleContext(0, DeprecateContext);
    }

    public descriptionBlock(): DescriptionBlockContext | null {
        return this.getRuleContext(0, DescriptionBlockContext);
    }

    public parameters(): ParametersContext | null {
        return this.getRuleContext(0, ParametersContext);
    }

    public callOptions(): CallOptionsContext | null {
        return this.getRuleContext(0, CallOptionsContext);
    }

    public returnsValues(): ReturnsValuesContext | null {
        return this.getRuleContext(0, ReturnsValuesContext);
    }

    public examples(): ExamplesContext | null {
        return this.getRuleContext(0, ExamplesContext);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_methodDescription;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterMethodDescription) {
            listener.enterMethodDescription(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitMethodDescription) {
            listener.exitMethodDescription(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitMethodDescription) {
            return visitor.visitMethodDescription(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DeprecateContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext {
        return this.getRuleContext(0, StartPartContext)!;
    }

    public DEPRECATE_KEYWORD(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.DEPRECATE_KEYWORD, 0)!;
    }

    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0);
    }

    public deprecateDescription(): DeprecateDescriptionContext | null {
        return this.getRuleContext(0, DeprecateDescriptionContext);
    }

    public EOL(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EOL, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_deprecate;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterDeprecate) {
            listener.enterDeprecate(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitDeprecate) {
            listener.exitDeprecate(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitDeprecate) {
            return visitor.visitDeprecate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DeprecateDescriptionContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0);
    }

    public EOL(): antlr.TerminalNode[];

    public EOL(i: number): antlr.TerminalNode | null;

    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.EOL);
        } else {
            return this.getToken(BSLMethodDescriptionParser.EOL, i);
        }
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_deprecateDescription;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterDeprecateDescription) {
            listener.enterDeprecateDescription(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitDeprecateDescription) {
            listener.exitDeprecateDescription(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitDeprecateDescription) {
            return visitor.visitDeprecateDescription(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DescriptionBlockContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public hyperlinkBlock(): HyperlinkBlockContext | null {
        return this.getRuleContext(0, HyperlinkBlockContext);
    }

    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }

    public EOL(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EOL, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_descriptionBlock;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterDescriptionBlock) {
            listener.enterDescriptionBlock(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitDescriptionBlock) {
            listener.exitDescriptionBlock(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitDescriptionBlock) {
            return visitor.visitDescriptionBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DescriptionContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public descriptionString(): DescriptionStringContext[];

    public descriptionString(i: number): DescriptionStringContext | null;

    public descriptionString(i?: number): DescriptionStringContext[] | DescriptionStringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionStringContext);
        }

        return this.getRuleContext(i, DescriptionStringContext);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_description;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterDescription) {
            listener.enterDescription(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitDescription) {
            listener.exitDescription(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitDescription) {
            return visitor.visitDescription(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DescriptionStringContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext | null {
        return this.getRuleContext(0, StartPartContext);
    }

    public PARAMETERS_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.PARAMETERS_KEYWORD, 0);
    }

    public RETURNS_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.RETURNS_KEYWORD, 0);
    }

    public EXAMPLE_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EXAMPLE_KEYWORD, 0);
    }

    public CALL_OPTIONS_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.CALL_OPTIONS_KEYWORD, 0);
    }

    public DEPRECATE_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.DEPRECATE_KEYWORD, 0);
    }

    public EOL(): antlr.TerminalNode[];

    public EOL(i: number): antlr.TerminalNode | null;

    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.EOL);
        } else {
            return this.getToken(BSLMethodDescriptionParser.EOL, i);
        }
    }

    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_descriptionString;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterDescriptionString) {
            listener.enterDescriptionString(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitDescriptionString) {
            listener.exitDescriptionString(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitDescriptionString) {
            return visitor.visitDescriptionString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExamplesContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext {
        return this.getRuleContext(0, StartPartContext)!;
    }

    public EXAMPLE_KEYWORD(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.EXAMPLE_KEYWORD, 0)!;
    }

    public EOL(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EOL, 0);
    }

    public examplesString(): ExamplesStringContext[];

    public examplesString(i: number): ExamplesStringContext | null;

    public examplesString(i?: number): ExamplesStringContext[] | ExamplesStringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExamplesStringContext);
        }

        return this.getRuleContext(i, ExamplesStringContext);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_examples;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterExamples) {
            listener.enterExamples(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitExamples) {
            listener.exitExamples(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitExamples) {
            return visitor.visitExamples(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExamplesStringContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext | null {
        return this.getRuleContext(0, StartPartContext);
    }

    public CALL_OPTIONS_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.CALL_OPTIONS_KEYWORD, 0);
    }

    public RETURNS_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.RETURNS_KEYWORD, 0);
    }

    public EOL(): antlr.TerminalNode[];

    public EOL(i: number): antlr.TerminalNode | null;

    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.EOL);
        } else {
            return this.getToken(BSLMethodDescriptionParser.EOL, i);
        }
    }

    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_examplesString;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterExamplesString) {
            listener.enterExamplesString(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitExamplesString) {
            listener.exitExamplesString(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitExamplesString) {
            return visitor.visitExamplesString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CallOptionsContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext {
        return this.getRuleContext(0, StartPartContext)!;
    }

    public CALL_OPTIONS_KEYWORD(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.CALL_OPTIONS_KEYWORD, 0)!;
    }

    public EOL(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EOL, 0);
    }

    public callOptionsString(): CallOptionsStringContext[];

    public callOptionsString(i: number): CallOptionsStringContext | null;

    public callOptionsString(i?: number): CallOptionsStringContext[] | CallOptionsStringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CallOptionsStringContext);
        }

        return this.getRuleContext(i, CallOptionsStringContext);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_callOptions;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterCallOptions) {
            listener.enterCallOptions(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitCallOptions) {
            listener.exitCallOptions(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitCallOptions) {
            return visitor.visitCallOptions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CallOptionsStringContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext | null {
        return this.getRuleContext(0, StartPartContext);
    }

    public RETURNS_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.RETURNS_KEYWORD, 0);
    }

    public EXAMPLE_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EXAMPLE_KEYWORD, 0);
    }

    public EOL(): antlr.TerminalNode[];

    public EOL(i: number): antlr.TerminalNode | null;

    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.EOL);
        } else {
            return this.getToken(BSLMethodDescriptionParser.EOL, i);
        }
    }

    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_callOptionsString;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterCallOptionsString) {
            listener.enterCallOptionsString(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitCallOptionsString) {
            listener.exitCallOptionsString(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitCallOptionsString) {
            return visitor.visitCallOptionsString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParametersContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext {
        return this.getRuleContext(0, StartPartContext)!;
    }

    public PARAMETERS_KEYWORD(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.PARAMETERS_KEYWORD, 0)!;
    }

    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0);
    }

    public EOL(): antlr.TerminalNode[];

    public EOL(i: number): antlr.TerminalNode | null;

    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.EOL);
        } else {
            return this.getToken(BSLMethodDescriptionParser.EOL, i);
        }
    }

    public hyperlinkBlock(): HyperlinkBlockContext | null {
        return this.getRuleContext(0, HyperlinkBlockContext);
    }

    public parameterString(): ParameterStringContext[];

    public parameterString(i: number): ParameterStringContext | null;

    public parameterString(i?: number): ParameterStringContext[] | ParameterStringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterStringContext);
        }

        return this.getRuleContext(i, ParameterStringContext);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_parameters;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterParameters) {
            listener.enterParameters(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitParameters) {
            listener.exitParameters(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitParameters) {
            return visitor.visitParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParameterStringContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public parameter(): ParameterContext | null {
        return this.getRuleContext(0, ParameterContext);
    }

    public startPart(): StartPartContext | null {
        return this.getRuleContext(0, StartPartContext);
    }

    public typesBlock(): TypesBlockContext | null {
        return this.getRuleContext(0, TypesBlockContext);
    }

    public subParameter(): SubParameterContext | null {
        return this.getRuleContext(0, SubParameterContext);
    }

    public typeDescription(): TypeDescriptionContext | null {
        return this.getRuleContext(0, TypeDescriptionContext);
    }

    public EOL(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EOL, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_parameterString;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterParameterString) {
            listener.enterParameterString(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitParameterString) {
            listener.exitParameterString(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitParameterString) {
            return visitor.visitParameterString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParameterContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext {
        return this.getRuleContext(0, StartPartContext)!;
    }

    public parameterName(): ParameterNameContext {
        return this.getRuleContext(0, ParameterNameContext)!;
    }

    public typesBlock(): TypesBlockContext {
        return this.getRuleContext(0, TypesBlockContext)!;
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_parameter;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubParameterContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext {
        return this.getRuleContext(0, StartPartContext)!;
    }

    public STAR(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.STAR, 0)!;
    }

    public parameterName(): ParameterNameContext {
        return this.getRuleContext(0, ParameterNameContext)!;
    }

    public typesBlock(): TypesBlockContext {
        return this.getRuleContext(0, TypesBlockContext)!;
    }

    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_subParameter;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterSubParameter) {
            listener.enterSubParameter(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitSubParameter) {
            listener.exitSubParameter(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitSubParameter) {
            return visitor.visitSubParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParameterNameContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public WORD(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.WORD, 0)!;
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_parameterName;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterParameterName) {
            listener.enterParameterName(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitParameterName) {
            listener.exitParameterName(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitParameterName) {
            return visitor.visitParameterName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ReturnsValuesContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext {
        return this.getRuleContext(0, StartPartContext)!;
    }

    public RETURNS_KEYWORD(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.RETURNS_KEYWORD, 0)!;
    }

    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0);
    }

    public EOL(): antlr.TerminalNode[];

    public EOL(i: number): antlr.TerminalNode | null;

    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.EOL);
        } else {
            return this.getToken(BSLMethodDescriptionParser.EOL, i);
        }
    }

    public hyperlinkBlock(): HyperlinkBlockContext | null {
        return this.getRuleContext(0, HyperlinkBlockContext);
    }

    public returnsValuesString(): ReturnsValuesStringContext[];

    public returnsValuesString(i: number): ReturnsValuesStringContext | null;

    public returnsValuesString(i?: number): ReturnsValuesStringContext[] | ReturnsValuesStringContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ReturnsValuesStringContext);
        }

        return this.getRuleContext(i, ReturnsValuesStringContext);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_returnsValues;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterReturnsValues) {
            listener.enterReturnsValues(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitReturnsValues) {
            listener.exitReturnsValues(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitReturnsValues) {
            return visitor.visitReturnsValues(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ReturnsValuesStringContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public returnsValue(): ReturnsValueContext | null {
        return this.getRuleContext(0, ReturnsValueContext);
    }

    public startPart(): StartPartContext | null {
        return this.getRuleContext(0, StartPartContext);
    }

    public typesBlock(): TypesBlockContext | null {
        return this.getRuleContext(0, TypesBlockContext);
    }

    public subParameter(): SubParameterContext | null {
        return this.getRuleContext(0, SubParameterContext);
    }

    public typeDescription(): TypeDescriptionContext | null {
        return this.getRuleContext(0, TypeDescriptionContext);
    }

    public EOL(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EOL, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_returnsValuesString;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterReturnsValuesString) {
            listener.enterReturnsValuesString(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitReturnsValuesString) {
            listener.exitReturnsValuesString(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitReturnsValuesString) {
            return visitor.visitReturnsValuesString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ReturnsValueContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext {
        return this.getRuleContext(0, StartPartContext)!;
    }

    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }

    public EOL(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EOL, 0);
    }

    public spitter(): SpitterContext | null {
        return this.getRuleContext(0, SpitterContext);
    }

    public typeDescription(): TypeDescriptionContext | null {
        return this.getRuleContext(0, TypeDescriptionContext);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_returnsValue;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterReturnsValue) {
            listener.enterReturnsValue(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitReturnsValue) {
            listener.exitReturnsValue(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitReturnsValue) {
            return visitor.visitReturnsValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TypesBlockContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public spitter(): SpitterContext[];

    public spitter(i: number): SpitterContext | null;

    public spitter(i?: number): SpitterContext[] | SpitterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SpitterContext);
        }

        return this.getRuleContext(i, SpitterContext);
    }

    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }

    public EOL(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EOL, 0);
    }

    public typeDescription(): TypeDescriptionContext | null {
        return this.getRuleContext(0, TypeDescriptionContext);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_typesBlock;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterTypesBlock) {
            listener.enterTypesBlock(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitTypesBlock) {
            listener.exitTypesBlock(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitTypesBlock) {
            return visitor.visitTypesBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TypeDescriptionContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public EOL(): antlr.TerminalNode[];

    public EOL(i: number): antlr.TerminalNode | null;

    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.EOL);
        } else {
            return this.getToken(BSLMethodDescriptionParser.EOL, i);
        }
    }

    public RETURNS_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.RETURNS_KEYWORD, 0);
    }

    public EXAMPLE_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.EXAMPLE_KEYWORD, 0);
    }

    public CALL_OPTIONS_KEYWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.CALL_OPTIONS_KEYWORD, 0);
    }

    public SPACE(): antlr.TerminalNode[];

    public SPACE(i: number): antlr.TerminalNode | null;

    public SPACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.SPACE);
        } else {
            return this.getToken(BSLMethodDescriptionParser.SPACE, i);
        }
    }

    public STAR(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.STAR, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_typeDescription;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterTypeDescription) {
            listener.enterTypeDescription(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitTypeDescription) {
            listener.exitTypeDescription(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitTypeDescription) {
            return visitor.visitTypeDescription(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TypeContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public hyperlinkType(): HyperlinkTypeContext | null {
        return this.getRuleContext(0, HyperlinkTypeContext);
    }

    public listTypes(): ListTypesContext | null {
        return this.getRuleContext(0, ListTypesContext);
    }

    public simpleType(): SimpleTypeContext | null {
        return this.getRuleContext(0, SimpleTypeContext);
    }

    public COLON(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.COLON, 0);
    }

    public complexType(): ComplexTypeContext | null {
        return this.getRuleContext(0, ComplexTypeContext);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_type;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SimpleTypeContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public WORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.WORD, 0);
    }

    public DOTSWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.DOTSWORD, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_simpleType;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterSimpleType) {
            listener.enterSimpleType(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitSimpleType) {
            listener.exitSimpleType(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitSimpleType) {
            return visitor.visitSimpleType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ListTypesContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public simpleType(): SimpleTypeContext[];

    public simpleType(i: number): SimpleTypeContext | null;

    public simpleType(i?: number): SimpleTypeContext[] | SimpleTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SimpleTypeContext);
        }

        return this.getRuleContext(i, SimpleTypeContext);
    }

    public complexType(): ComplexTypeContext[];

    public complexType(i: number): ComplexTypeContext | null;

    public complexType(i?: number): ComplexTypeContext[] | ComplexTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ComplexTypeContext);
        }

        return this.getRuleContext(i, ComplexTypeContext);
    }

    public hyperlinkType(): HyperlinkTypeContext[];

    public hyperlinkType(i: number): HyperlinkTypeContext | null;

    public hyperlinkType(i?: number): HyperlinkTypeContext[] | HyperlinkTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HyperlinkTypeContext);
        }

        return this.getRuleContext(i, HyperlinkTypeContext);
    }

    public COMMA(): antlr.TerminalNode[];

    public COMMA(i: number): antlr.TerminalNode | null;

    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.COMMA);
        } else {
            return this.getToken(BSLMethodDescriptionParser.COMMA, i);
        }
    }

    public SPACE(): antlr.TerminalNode[];

    public SPACE(i: number): antlr.TerminalNode | null;

    public SPACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.SPACE);
        } else {
            return this.getToken(BSLMethodDescriptionParser.SPACE, i);
        }
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_listTypes;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterListTypes) {
            listener.enterListTypes(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitListTypes) {
            listener.exitListTypes(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitListTypes) {
            return visitor.visitListTypes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ComplexTypeContext extends BslParserRuleContext {
    public _collection?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public SPACE(): antlr.TerminalNode[];

    public SPACE(i: number): antlr.TerminalNode | null;

    public SPACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.SPACE);
        } else {
            return this.getToken(BSLMethodDescriptionParser.SPACE, i);
        }
    }

    public OF_KEYWORD(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.OF_KEYWORD, 0)!;
    }

    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }

    public WORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.WORD, 0);
    }

    public DOTSWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.DOTSWORD, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_complexType;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterComplexType) {
            listener.enterComplexType(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitComplexType) {
            listener.exitComplexType(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitComplexType) {
            return visitor.visitComplexType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class HyperlinkTypeContext extends BslParserRuleContext {
    public _link?: Token | null;

    public _linkParams?: Token | null;

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public SEE_KEYWORD(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.SEE_KEYWORD, 0)!;
    }

    public SPACE(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0)!;
    }

    public WORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.WORD, 0);
    }

    public DOTSWORD(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.DOTSWORD, 0);
    }

    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.LPAREN, 0);
    }

    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.RPAREN, 0);
    }

    public EOL(): antlr.TerminalNode[];

    public EOL(i: number): antlr.TerminalNode | null;

    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.EOL);
        } else {
            return this.getToken(BSLMethodDescriptionParser.EOL, i);
        }
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_hyperlinkType;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterHyperlinkType) {
            listener.enterHyperlinkType(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitHyperlinkType) {
            listener.exitHyperlinkType(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitHyperlinkType) {
            return visitor.visitHyperlinkType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SpitterContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public DASH(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.DASH, 0)!;
    }

    public SPACE(): antlr.TerminalNode[];

    public SPACE(i: number): antlr.TerminalNode | null;

    public SPACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.SPACE);
        } else {
            return this.getToken(BSLMethodDescriptionParser.SPACE, i);
        }
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_spitter;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterSpitter) {
            listener.enterSpitter(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitSpitter) {
            listener.exitSpitter(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitSpitter) {
            return visitor.visitSpitter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class HyperlinkBlockContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public startPart(): StartPartContext[];

    public startPart(i: number): StartPartContext | null;

    public startPart(i?: number): StartPartContext[] | StartPartContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StartPartContext);
        }

        return this.getRuleContext(i, StartPartContext);
    }

    public hyperlinkType(): HyperlinkTypeContext {
        return this.getRuleContext(0, HyperlinkTypeContext)!;
    }

    public EOL(): antlr.TerminalNode[];

    public EOL(i: number): antlr.TerminalNode | null;

    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.EOL);
        } else {
            return this.getToken(BSLMethodDescriptionParser.EOL, i);
        }
    }

    public SPACE(): antlr.TerminalNode | null {
        return this.getToken(BSLMethodDescriptionParser.SPACE, 0);
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_hyperlinkBlock;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterHyperlinkBlock) {
            listener.enterHyperlinkBlock(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitHyperlinkBlock) {
            listener.exitHyperlinkBlock(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitHyperlinkBlock) {
            return visitor.visitHyperlinkBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class StartPartContext extends BslParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }

    public COMMENT(): antlr.TerminalNode {
        return this.getToken(BSLMethodDescriptionParser.COMMENT, 0)!;
    }

    public SPACE(): antlr.TerminalNode[];

    public SPACE(i: number): antlr.TerminalNode | null;

    public SPACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(BSLMethodDescriptionParser.SPACE);
        } else {
            return this.getToken(BSLMethodDescriptionParser.SPACE, i);
        }
    }

    public override get ruleIndex(): number {
        return BSLMethodDescriptionParser.RULE_startPart;
    }

    public override enterRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.enterStartPart) {
            listener.enterStartPart(this);
        }
    }

    public override exitRule(listener: BSLMethodDescriptionParserListener): void {
        if (listener.exitStartPart) {
            listener.exitStartPart(this);
        }
    }

    public override accept<Result>(visitor: BSLMethodDescriptionParserVisitor<Result>): Result | null {
        if (visitor.visitStartPart) {
            return visitor.visitStartPart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
