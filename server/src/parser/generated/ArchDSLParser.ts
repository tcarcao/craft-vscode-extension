
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { ArchDSLListener } from "./ArchDSLListener.js";
import { ArchDSLVisitor } from "./ArchDSLVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class ArchDSLParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly DOMAINS = 40;
    public static readonly DATA_STORES = 41;
    public static readonly LANGUAGE = 42;
    public static readonly DEPLOYMENT = 43;
    public static readonly PERCENTAGE = 44;
    public static readonly IDENTIFIER = 45;
    public static readonly STRING = 46;
    public static readonly NEWLINE = 47;
    public static readonly WS = 48;
    public static readonly COMMENT = 49;
    public static readonly RULE_dsl = 0;
    public static readonly RULE_domain_def = 1;
    public static readonly RULE_domains_def = 2;
    public static readonly RULE_domain_block_list = 3;
    public static readonly RULE_domain_block = 4;
    public static readonly RULE_domain_name = 5;
    public static readonly RULE_subdomain_list = 6;
    public static readonly RULE_subdomain = 7;
    public static readonly RULE_arch = 8;
    public static readonly RULE_arch_name = 9;
    public static readonly RULE_arch_sections = 10;
    public static readonly RULE_presentation_section = 11;
    public static readonly RULE_gateway_section = 12;
    public static readonly RULE_arch_component_list = 13;
    public static readonly RULE_arch_component = 14;
    public static readonly RULE_component_flow = 15;
    public static readonly RULE_component_chain = 16;
    public static readonly RULE_component_with_modifiers = 17;
    public static readonly RULE_component_name = 18;
    public static readonly RULE_component_modifiers = 19;
    public static readonly RULE_modifier_list = 20;
    public static readonly RULE_modifier = 21;
    public static readonly RULE_simple_component = 22;
    public static readonly RULE_exposure = 23;
    public static readonly RULE_exposure_name = 24;
    public static readonly RULE_exposure_properties = 25;
    public static readonly RULE_exposure_property = 26;
    public static readonly RULE_target_list = 27;
    public static readonly RULE_target = 28;
    public static readonly RULE_gateway_list = 29;
    public static readonly RULE_gateway = 30;
    public static readonly RULE_service_def = 31;
    public static readonly RULE_services_def = 32;
    public static readonly RULE_service_block_list = 33;
    public static readonly RULE_service_block = 34;
    public static readonly RULE_service_name = 35;
    public static readonly RULE_service_properties = 36;
    public static readonly RULE_service_property = 37;
    public static readonly RULE_deployment_strategy = 38;
    public static readonly RULE_deployment_type = 39;
    public static readonly RULE_deployment_config = 40;
    public static readonly RULE_deployment_rule = 41;
    public static readonly RULE_deployment_target = 42;
    public static readonly RULE_domain_list = 43;
    public static readonly RULE_domain_ref = 44;
    public static readonly RULE_datastore_list = 45;
    public static readonly RULE_datastore = 46;
    public static readonly RULE_use_case = 47;
    public static readonly RULE_scenario = 48;
    public static readonly RULE_trigger = 49;
    public static readonly RULE_external_trigger = 50;
    public static readonly RULE_action_block = 51;
    public static readonly RULE_action = 52;
    public static readonly RULE_sync_action = 53;
    public static readonly RULE_async_action = 54;
    public static readonly RULE_internal_action = 55;
    public static readonly RULE_phrase = 56;
    public static readonly RULE_connector_word = 57;
    public static readonly RULE_actor = 58;
    public static readonly RULE_domain = 59;
    public static readonly RULE_verb = 60;
    public static readonly RULE_quoted_event = 61;
    public static readonly RULE_string = 62;

    public static readonly literalNames = [
        null, "'domain'", "'{'", "'}'", "'arch'", "'presentation'", "':'", 
        "'gateway'", "'>'", "'['", "']'", "','", "'exposure'", "'to'", "'of'", 
        "'through'", "'service'", "'services'", "'('", "')'", "'canary'", 
        "'blue_green'", "'rolling'", "'->'", "'use_case'", "'when'", "'listens'", 
        "'asks'", "'notifies'", "'a'", "'an'", "'the'", "'as'", "'from'", 
        "'in'", "'on'", "'at'", "'for'", "'with'", "'by'", "'domains'", 
        "'data-stores'", "'language'", "'deployment'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, "DOMAINS", "DATA_STORES", 
        "LANGUAGE", "DEPLOYMENT", "PERCENTAGE", "IDENTIFIER", "STRING", 
        "NEWLINE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "dsl", "domain_def", "domains_def", "domain_block_list", "domain_block", 
        "domain_name", "subdomain_list", "subdomain", "arch", "arch_name", 
        "arch_sections", "presentation_section", "gateway_section", "arch_component_list", 
        "arch_component", "component_flow", "component_chain", "component_with_modifiers", 
        "component_name", "component_modifiers", "modifier_list", "modifier", 
        "simple_component", "exposure", "exposure_name", "exposure_properties", 
        "exposure_property", "target_list", "target", "gateway_list", "gateway", 
        "service_def", "services_def", "service_block_list", "service_block", 
        "service_name", "service_properties", "service_property", "deployment_strategy", 
        "deployment_type", "deployment_config", "deployment_rule", "deployment_target", 
        "domain_list", "domain_ref", "datastore_list", "datastore", "use_case", 
        "scenario", "trigger", "external_trigger", "action_block", "action", 
        "sync_action", "async_action", "internal_action", "phrase", "connector_word", 
        "actor", "domain", "verb", "quoted_event", "string",
    ];

    public get grammarFileName(): string { return "ArchDSL.g4"; }
    public get literalNames(): (string | null)[] { return ArchDSLParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return ArchDSLParser.symbolicNames; }
    public get ruleNames(): string[] { return ArchDSLParser.ruleNames; }
    public get serializedATN(): number[] { return ArchDSLParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, ArchDSLParser._ATN, ArchDSLParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public dsl(): DslContext {
        let localContext = new DslContext(this.context, this.state);
        this.enterRule(localContext, 0, ArchDSLParser.RULE_dsl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16977938) !== 0) || _la === 40) {
                {
                this.state = 133;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ArchDSLParser.T__3:
                    {
                    this.state = 126;
                    this.arch();
                    }
                    break;
                case ArchDSLParser.T__16:
                    {
                    this.state = 127;
                    this.services_def();
                    }
                    break;
                case ArchDSLParser.T__15:
                    {
                    this.state = 128;
                    this.service_def();
                    }
                    break;
                case ArchDSLParser.T__11:
                    {
                    this.state = 129;
                    this.exposure();
                    }
                    break;
                case ArchDSLParser.T__23:
                    {
                    this.state = 130;
                    this.use_case();
                    }
                    break;
                case ArchDSLParser.T__0:
                    {
                    this.state = 131;
                    this.domain_def();
                    }
                    break;
                case ArchDSLParser.DOMAINS:
                    {
                    this.state = 132;
                    this.domains_def();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 137;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public domain_def(): Domain_defContext {
        let localContext = new Domain_defContext(this.context, this.state);
        this.enterRule(localContext, 2, ArchDSLParser.RULE_domain_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 138;
            this.match(ArchDSLParser.T__0);
            this.state = 139;
            this.domain_name();
            this.state = 140;
            this.match(ArchDSLParser.T__1);
            this.state = 144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 141;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 146;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 147;
            this.subdomain_list();
            this.state = 148;
            this.match(ArchDSLParser.T__2);
            this.state = 152;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 149;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 154;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public domains_def(): Domains_defContext {
        let localContext = new Domains_defContext(this.context, this.state);
        this.enterRule(localContext, 4, ArchDSLParser.RULE_domains_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 155;
            this.match(ArchDSLParser.DOMAINS);
            this.state = 156;
            this.match(ArchDSLParser.T__1);
            this.state = 160;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 157;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 162;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 163;
            this.domain_block_list();
            this.state = 164;
            this.match(ArchDSLParser.T__2);
            this.state = 168;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 165;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 170;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public domain_block_list(): Domain_block_listContext {
        let localContext = new Domain_block_listContext(this.context, this.state);
        this.enterRule(localContext, 6, ArchDSLParser.RULE_domain_block_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 171;
            this.domain_block();
            this.state = 180;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 173;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 172;
                        this.match(ArchDSLParser.NEWLINE);
                        }
                        }
                        this.state = 175;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 47);
                    this.state = 177;
                    this.domain_block();
                    }
                    }
                }
                this.state = 182;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            }
            this.state = 186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 183;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public domain_block(): Domain_blockContext {
        let localContext = new Domain_blockContext(this.context, this.state);
        this.enterRule(localContext, 8, ArchDSLParser.RULE_domain_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 189;
            this.domain_name();
            this.state = 190;
            this.match(ArchDSLParser.T__1);
            this.state = 194;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 191;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 196;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 197;
            this.subdomain_list();
            this.state = 198;
            this.match(ArchDSLParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public domain_name(): Domain_nameContext {
        let localContext = new Domain_nameContext(this.context, this.state);
        this.enterRule(localContext, 10, ArchDSLParser.RULE_domain_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 200;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subdomain_list(): Subdomain_listContext {
        let localContext = new Subdomain_listContext(this.context, this.state);
        this.enterRule(localContext, 12, ArchDSLParser.RULE_subdomain_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 202;
            this.subdomain();
            this.state = 211;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 204;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 203;
                        this.match(ArchDSLParser.NEWLINE);
                        }
                        }
                        this.state = 206;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 47);
                    this.state = 208;
                    this.subdomain();
                    }
                    }
                }
                this.state = 213;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            }
            this.state = 217;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 214;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subdomain(): SubdomainContext {
        let localContext = new SubdomainContext(this.context, this.state);
        this.enterRule(localContext, 14, ArchDSLParser.RULE_subdomain);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 220;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arch(): ArchContext {
        let localContext = new ArchContext(this.context, this.state);
        this.enterRule(localContext, 16, ArchDSLParser.RULE_arch);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 222;
            this.match(ArchDSLParser.T__3);
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 223;
                this.arch_name();
                }
            }

            this.state = 226;
            this.match(ArchDSLParser.T__1);
            this.state = 230;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 227;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 232;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 233;
            this.arch_sections();
            this.state = 234;
            this.match(ArchDSLParser.T__2);
            this.state = 238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 235;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arch_name(): Arch_nameContext {
        let localContext = new Arch_nameContext(this.context, this.state);
        this.enterRule(localContext, 18, ArchDSLParser.RULE_arch_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 241;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arch_sections(): Arch_sectionsContext {
        let localContext = new Arch_sectionsContext(this.context, this.state);
        this.enterRule(localContext, 20, ArchDSLParser.RULE_arch_sections);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 245;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ArchDSLParser.T__4:
                    {
                    this.state = 243;
                    this.presentation_section();
                    }
                    break;
                case ArchDSLParser.T__6:
                    {
                    this.state = 244;
                    this.gateway_section();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 247;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 5 || _la === 7);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public presentation_section(): Presentation_sectionContext {
        let localContext = new Presentation_sectionContext(this.context, this.state);
        this.enterRule(localContext, 22, ArchDSLParser.RULE_presentation_section);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 249;
            this.match(ArchDSLParser.T__4);
            this.state = 250;
            this.match(ArchDSLParser.T__5);
            this.state = 254;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 251;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 256;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 257;
            this.arch_component_list();
            this.state = 259;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 258;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 261;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 47);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gateway_section(): Gateway_sectionContext {
        let localContext = new Gateway_sectionContext(this.context, this.state);
        this.enterRule(localContext, 24, ArchDSLParser.RULE_gateway_section);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 263;
            this.match(ArchDSLParser.T__6);
            this.state = 264;
            this.match(ArchDSLParser.T__5);
            this.state = 268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 265;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 270;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 271;
            this.arch_component_list();
            this.state = 273;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 272;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 275;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 47);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arch_component_list(): Arch_component_listContext {
        let localContext = new Arch_component_listContext(this.context, this.state);
        this.enterRule(localContext, 26, ArchDSLParser.RULE_arch_component_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 277;
            this.arch_component();
            this.state = 286;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 279;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 278;
                        this.match(ArchDSLParser.NEWLINE);
                        }
                        }
                        this.state = 281;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 47);
                    this.state = 283;
                    this.arch_component();
                    }
                    }
                }
                this.state = 288;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arch_component(): Arch_componentContext {
        let localContext = new Arch_componentContext(this.context, this.state);
        this.enterRule(localContext, 28, ArchDSLParser.RULE_arch_component);
        try {
            this.state = 291;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 289;
                this.simple_component();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 290;
                this.component_flow();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public component_flow(): Component_flowContext {
        let localContext = new Component_flowContext(this.context, this.state);
        this.enterRule(localContext, 30, ArchDSLParser.RULE_component_flow);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 293;
            this.component_chain();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public component_chain(): Component_chainContext {
        let localContext = new Component_chainContext(this.context, this.state);
        this.enterRule(localContext, 32, ArchDSLParser.RULE_component_chain);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 295;
            this.component_with_modifiers();
            this.state = 300;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 296;
                this.match(ArchDSLParser.T__7);
                this.state = 297;
                this.component_with_modifiers();
                }
                }
                this.state = 302;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public component_with_modifiers(): Component_with_modifiersContext {
        let localContext = new Component_with_modifiersContext(this.context, this.state);
        this.enterRule(localContext, 34, ArchDSLParser.RULE_component_with_modifiers);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 303;
            this.component_name();
            this.state = 305;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 304;
                this.component_modifiers();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public component_name(): Component_nameContext {
        let localContext = new Component_nameContext(this.context, this.state);
        this.enterRule(localContext, 36, ArchDSLParser.RULE_component_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public component_modifiers(): Component_modifiersContext {
        let localContext = new Component_modifiersContext(this.context, this.state);
        this.enterRule(localContext, 38, ArchDSLParser.RULE_component_modifiers);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 309;
            this.match(ArchDSLParser.T__8);
            this.state = 310;
            this.modifier_list();
            this.state = 311;
            this.match(ArchDSLParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifier_list(): Modifier_listContext {
        let localContext = new Modifier_listContext(this.context, this.state);
        this.enterRule(localContext, 40, ArchDSLParser.RULE_modifier_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 313;
            this.modifier();
            this.state = 318;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 11) {
                {
                {
                this.state = 314;
                this.match(ArchDSLParser.T__10);
                this.state = 315;
                this.modifier();
                }
                }
                this.state = 320;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifier(): ModifierContext {
        let localContext = new ModifierContext(this.context, this.state);
        this.enterRule(localContext, 42, ArchDSLParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 321;
            this.match(ArchDSLParser.IDENTIFIER);
            this.state = 324;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 322;
                this.match(ArchDSLParser.T__5);
                this.state = 323;
                this.match(ArchDSLParser.IDENTIFIER);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simple_component(): Simple_componentContext {
        let localContext = new Simple_componentContext(this.context, this.state);
        this.enterRule(localContext, 44, ArchDSLParser.RULE_simple_component);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 326;
            this.component_with_modifiers();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exposure(): ExposureContext {
        let localContext = new ExposureContext(this.context, this.state);
        this.enterRule(localContext, 46, ArchDSLParser.RULE_exposure);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
            this.match(ArchDSLParser.T__11);
            this.state = 329;
            this.exposure_name();
            this.state = 330;
            this.match(ArchDSLParser.T__1);
            this.state = 332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 331;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 334;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 47);
            this.state = 336;
            this.exposure_properties();
            this.state = 337;
            this.match(ArchDSLParser.T__2);
            this.state = 341;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 338;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 343;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exposure_name(): Exposure_nameContext {
        let localContext = new Exposure_nameContext(this.context, this.state);
        this.enterRule(localContext, 48, ArchDSLParser.RULE_exposure_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 344;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exposure_properties(): Exposure_propertiesContext {
        let localContext = new Exposure_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 50, ArchDSLParser.RULE_exposure_properties);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 346;
            this.exposure_property();
            this.state = 355;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 348;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 347;
                        this.match(ArchDSLParser.NEWLINE);
                        }
                        }
                        this.state = 350;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 47);
                    this.state = 352;
                    this.exposure_property();
                    }
                    }
                }
                this.state = 357;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            }
            this.state = 359;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 358;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 361;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 47);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exposure_property(): Exposure_propertyContext {
        let localContext = new Exposure_propertyContext(this.context, this.state);
        this.enterRule(localContext, 52, ArchDSLParser.RULE_exposure_property);
        try {
            this.state = 372;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ArchDSLParser.T__12:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 363;
                this.match(ArchDSLParser.T__12);
                this.state = 364;
                this.match(ArchDSLParser.T__5);
                this.state = 365;
                this.target_list();
                }
                break;
            case ArchDSLParser.T__13:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 366;
                this.match(ArchDSLParser.T__13);
                this.state = 367;
                this.match(ArchDSLParser.T__5);
                this.state = 368;
                this.domain_list();
                }
                break;
            case ArchDSLParser.T__14:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 369;
                this.match(ArchDSLParser.T__14);
                this.state = 370;
                this.match(ArchDSLParser.T__5);
                this.state = 371;
                this.gateway_list();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public target_list(): Target_listContext {
        let localContext = new Target_listContext(this.context, this.state);
        this.enterRule(localContext, 54, ArchDSLParser.RULE_target_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 374;
            this.target();
            this.state = 379;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 375;
                    this.match(ArchDSLParser.T__10);
                    this.state = 376;
                    this.target();
                    }
                    }
                }
                this.state = 381;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            }
            this.state = 383;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 382;
                this.match(ArchDSLParser.T__10);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public target(): TargetContext {
        let localContext = new TargetContext(this.context, this.state);
        this.enterRule(localContext, 56, ArchDSLParser.RULE_target);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 385;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gateway_list(): Gateway_listContext {
        let localContext = new Gateway_listContext(this.context, this.state);
        this.enterRule(localContext, 58, ArchDSLParser.RULE_gateway_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 387;
            this.gateway();
            this.state = 392;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 388;
                    this.match(ArchDSLParser.T__10);
                    this.state = 389;
                    this.gateway();
                    }
                    }
                }
                this.state = 394;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
            }
            this.state = 396;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 395;
                this.match(ArchDSLParser.T__10);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gateway(): GatewayContext {
        let localContext = new GatewayContext(this.context, this.state);
        this.enterRule(localContext, 60, ArchDSLParser.RULE_gateway);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 398;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public service_def(): Service_defContext {
        let localContext = new Service_defContext(this.context, this.state);
        this.enterRule(localContext, 62, ArchDSLParser.RULE_service_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 400;
            this.match(ArchDSLParser.T__15);
            this.state = 401;
            this.service_name();
            this.state = 402;
            this.match(ArchDSLParser.T__1);
            this.state = 406;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 403;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 408;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 409;
            this.service_properties();
            this.state = 410;
            this.match(ArchDSLParser.T__2);
            this.state = 414;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 411;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 416;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public services_def(): Services_defContext {
        let localContext = new Services_defContext(this.context, this.state);
        this.enterRule(localContext, 64, ArchDSLParser.RULE_services_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 417;
            this.match(ArchDSLParser.T__16);
            this.state = 418;
            this.match(ArchDSLParser.T__1);
            this.state = 422;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 419;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 424;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 426;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45 || _la === 46) {
                {
                this.state = 425;
                this.service_block_list();
                }
            }

            this.state = 428;
            this.match(ArchDSLParser.T__2);
            this.state = 432;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 429;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 434;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public service_block_list(): Service_block_listContext {
        let localContext = new Service_block_listContext(this.context, this.state);
        this.enterRule(localContext, 66, ArchDSLParser.RULE_service_block_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 435;
            this.service_block();
            this.state = 444;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 437;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 436;
                        this.match(ArchDSLParser.NEWLINE);
                        }
                        }
                        this.state = 439;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 47);
                    this.state = 441;
                    this.service_block();
                    }
                    }
                }
                this.state = 446;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            }
            this.state = 450;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 447;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 452;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public service_block(): Service_blockContext {
        let localContext = new Service_blockContext(this.context, this.state);
        this.enterRule(localContext, 68, ArchDSLParser.RULE_service_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 453;
            this.service_name();
            this.state = 454;
            this.match(ArchDSLParser.T__1);
            this.state = 458;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 455;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 460;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 461;
            this.service_properties();
            this.state = 462;
            this.match(ArchDSLParser.T__2);
            this.state = 466;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 463;
                    this.match(ArchDSLParser.NEWLINE);
                    }
                    }
                }
                this.state = 468;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public service_name(): Service_nameContext {
        let localContext = new Service_nameContext(this.context, this.state);
        this.enterRule(localContext, 70, ArchDSLParser.RULE_service_name);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 469;
            _la = this.tokenStream.LA(1);
            if(!(_la === 45 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public service_properties(): Service_propertiesContext {
        let localContext = new Service_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 72, ArchDSLParser.RULE_service_properties);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 471;
            this.service_property();
            this.state = 480;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 50, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 473;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 472;
                        this.match(ArchDSLParser.NEWLINE);
                        }
                        }
                        this.state = 475;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 47);
                    this.state = 477;
                    this.service_property();
                    }
                    }
                }
                this.state = 482;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 50, this.context);
            }
            this.state = 486;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 483;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 488;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public service_property(): Service_propertyContext {
        let localContext = new Service_propertyContext(this.context, this.state);
        this.enterRule(localContext, 74, ArchDSLParser.RULE_service_property);
        try {
            this.state = 501;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ArchDSLParser.DOMAINS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 489;
                this.match(ArchDSLParser.DOMAINS);
                this.state = 490;
                this.match(ArchDSLParser.T__5);
                this.state = 491;
                this.domain_list();
                }
                break;
            case ArchDSLParser.DATA_STORES:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 492;
                this.match(ArchDSLParser.DATA_STORES);
                this.state = 493;
                this.match(ArchDSLParser.T__5);
                this.state = 494;
                this.datastore_list();
                }
                break;
            case ArchDSLParser.LANGUAGE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 495;
                this.match(ArchDSLParser.LANGUAGE);
                this.state = 496;
                this.match(ArchDSLParser.T__5);
                this.state = 497;
                this.match(ArchDSLParser.IDENTIFIER);
                }
                break;
            case ArchDSLParser.DEPLOYMENT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 498;
                this.match(ArchDSLParser.DEPLOYMENT);
                this.state = 499;
                this.match(ArchDSLParser.T__5);
                this.state = 500;
                this.deployment_strategy();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deployment_strategy(): Deployment_strategyContext {
        let localContext = new Deployment_strategyContext(this.context, this.state);
        this.enterRule(localContext, 76, ArchDSLParser.RULE_deployment_strategy);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 503;
            this.deployment_type();
            this.state = 508;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 504;
                this.match(ArchDSLParser.T__17);
                this.state = 505;
                this.deployment_config();
                this.state = 506;
                this.match(ArchDSLParser.T__18);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deployment_type(): Deployment_typeContext {
        let localContext = new Deployment_typeContext(this.context, this.state);
        this.enterRule(localContext, 78, ArchDSLParser.RULE_deployment_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 510;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7340032) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deployment_config(): Deployment_configContext {
        let localContext = new Deployment_configContext(this.context, this.state);
        this.enterRule(localContext, 80, ArchDSLParser.RULE_deployment_config);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 512;
            this.deployment_rule();
            this.state = 517;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 11) {
                {
                {
                this.state = 513;
                this.match(ArchDSLParser.T__10);
                this.state = 514;
                this.deployment_rule();
                }
                }
                this.state = 519;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deployment_rule(): Deployment_ruleContext {
        let localContext = new Deployment_ruleContext(this.context, this.state);
        this.enterRule(localContext, 82, ArchDSLParser.RULE_deployment_rule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 520;
            this.match(ArchDSLParser.PERCENTAGE);
            this.state = 521;
            this.match(ArchDSLParser.T__22);
            this.state = 522;
            this.deployment_target();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deployment_target(): Deployment_targetContext {
        let localContext = new Deployment_targetContext(this.context, this.state);
        this.enterRule(localContext, 84, ArchDSLParser.RULE_deployment_target);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 524;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public domain_list(): Domain_listContext {
        let localContext = new Domain_listContext(this.context, this.state);
        this.enterRule(localContext, 86, ArchDSLParser.RULE_domain_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 526;
            this.domain_ref();
            this.state = 531;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 527;
                    this.match(ArchDSLParser.T__10);
                    this.state = 528;
                    this.domain_ref();
                    }
                    }
                }
                this.state = 533;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            }
            this.state = 535;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 534;
                this.match(ArchDSLParser.T__10);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public domain_ref(): Domain_refContext {
        let localContext = new Domain_refContext(this.context, this.state);
        this.enterRule(localContext, 88, ArchDSLParser.RULE_domain_ref);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 537;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public datastore_list(): Datastore_listContext {
        let localContext = new Datastore_listContext(this.context, this.state);
        this.enterRule(localContext, 90, ArchDSLParser.RULE_datastore_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 539;
            this.datastore();
            this.state = 544;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 57, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 540;
                    this.match(ArchDSLParser.T__10);
                    this.state = 541;
                    this.datastore();
                    }
                    }
                }
                this.state = 546;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 57, this.context);
            }
            this.state = 548;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 547;
                this.match(ArchDSLParser.T__10);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public datastore(): DatastoreContext {
        let localContext = new DatastoreContext(this.context, this.state);
        this.enterRule(localContext, 92, ArchDSLParser.RULE_datastore);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 550;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public use_case(): Use_caseContext {
        let localContext = new Use_caseContext(this.context, this.state);
        this.enterRule(localContext, 94, ArchDSLParser.RULE_use_case);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 552;
            this.match(ArchDSLParser.T__23);
            this.state = 553;
            this.string_();
            this.state = 554;
            this.match(ArchDSLParser.T__1);
            this.state = 558;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 555;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 560;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 564;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25) {
                {
                {
                this.state = 561;
                this.scenario();
                }
                }
                this.state = 566;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 567;
            this.match(ArchDSLParser.T__2);
            this.state = 571;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 568;
                this.match(ArchDSLParser.NEWLINE);
                }
                }
                this.state = 573;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scenario(): ScenarioContext {
        let localContext = new ScenarioContext(this.context, this.state);
        this.enterRule(localContext, 96, ArchDSLParser.RULE_scenario);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 574;
            this.trigger();
            this.state = 575;
            this.action_block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trigger(): TriggerContext {
        let localContext = new TriggerContext(this.context, this.state);
        this.enterRule(localContext, 98, ArchDSLParser.RULE_trigger);
        let _la: number;
        try {
            this.state = 600;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 577;
                this.match(ArchDSLParser.T__24);
                this.state = 578;
                this.external_trigger();
                this.state = 580;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 579;
                    this.match(ArchDSLParser.NEWLINE);
                    }
                    }
                    this.state = 582;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 47);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 584;
                this.match(ArchDSLParser.T__24);
                this.state = 585;
                this.quoted_event();
                this.state = 587;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 586;
                    this.match(ArchDSLParser.NEWLINE);
                    }
                    }
                    this.state = 589;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 47);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 591;
                this.match(ArchDSLParser.T__24);
                this.state = 592;
                this.domain();
                this.state = 593;
                this.match(ArchDSLParser.T__25);
                this.state = 594;
                this.quoted_event();
                this.state = 596;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 595;
                    this.match(ArchDSLParser.NEWLINE);
                    }
                    }
                    this.state = 598;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 47);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public external_trigger(): External_triggerContext {
        let localContext = new External_triggerContext(this.context, this.state);
        this.enterRule(localContext, 100, ArchDSLParser.RULE_external_trigger);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 602;
            this.actor();
            this.state = 603;
            this.verb();
            this.state = 605;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758104576) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 24831) !== 0)) {
                {
                this.state = 604;
                this.phrase();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public action_block(): Action_blockContext {
        let localContext = new Action_blockContext(this.context, this.state);
        this.enterRule(localContext, 102, ArchDSLParser.RULE_action_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 610;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 45) {
                {
                {
                this.state = 607;
                this.action();
                }
                }
                this.state = 612;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public action(): ActionContext {
        let localContext = new ActionContext(this.context, this.state);
        this.enterRule(localContext, 104, ArchDSLParser.RULE_action);
        let _la: number;
        try {
            this.state = 631;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 613;
                this.async_action();
                this.state = 615;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 614;
                    this.match(ArchDSLParser.NEWLINE);
                    }
                    }
                    this.state = 617;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 47);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 619;
                this.sync_action();
                this.state = 621;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 620;
                    this.match(ArchDSLParser.NEWLINE);
                    }
                    }
                    this.state = 623;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 47);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 625;
                this.internal_action();
                this.state = 627;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 626;
                    this.match(ArchDSLParser.NEWLINE);
                    }
                    }
                    this.state = 629;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 47);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sync_action(): Sync_actionContext {
        let localContext = new Sync_actionContext(this.context, this.state);
        this.enterRule(localContext, 106, ArchDSLParser.RULE_sync_action);
        try {
            this.state = 644;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 633;
                this.domain();
                this.state = 634;
                this.match(ArchDSLParser.T__26);
                this.state = 635;
                this.domain();
                this.state = 636;
                this.connector_word();
                this.state = 637;
                this.phrase();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 639;
                this.domain();
                this.state = 640;
                this.match(ArchDSLParser.T__26);
                this.state = 641;
                this.domain();
                this.state = 642;
                this.phrase();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public async_action(): Async_actionContext {
        let localContext = new Async_actionContext(this.context, this.state);
        this.enterRule(localContext, 108, ArchDSLParser.RULE_async_action);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 646;
            this.domain();
            this.state = 647;
            this.match(ArchDSLParser.T__27);
            this.state = 648;
            this.quoted_event();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public internal_action(): Internal_actionContext {
        let localContext = new Internal_actionContext(this.context, this.state);
        this.enterRule(localContext, 110, ArchDSLParser.RULE_internal_action);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 650;
            this.domain();
            this.state = 651;
            this.verb();
            this.state = 653;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                {
                this.state = 652;
                this.connector_word();
                }
                break;
            }
            this.state = 655;
            this.phrase();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public phrase(): PhraseContext {
        let localContext = new PhraseContext(this.context, this.state);
        this.enterRule(localContext, 112, ArchDSLParser.RULE_phrase);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 660;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 660;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ArchDSLParser.IDENTIFIER:
                    {
                    this.state = 657;
                    this.match(ArchDSLParser.IDENTIFIER);
                    }
                    break;
                case ArchDSLParser.STRING:
                    {
                    this.state = 658;
                    this.match(ArchDSLParser.STRING);
                    }
                    break;
                case ArchDSLParser.T__12:
                case ArchDSLParser.T__28:
                case ArchDSLParser.T__29:
                case ArchDSLParser.T__30:
                case ArchDSLParser.T__31:
                case ArchDSLParser.T__32:
                case ArchDSLParser.T__33:
                case ArchDSLParser.T__34:
                case ArchDSLParser.T__35:
                case ArchDSLParser.T__36:
                case ArchDSLParser.T__37:
                case ArchDSLParser.T__38:
                    {
                    this.state = 659;
                    this.connector_word();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 662;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758104576) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 24831) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public connector_word(): Connector_wordContext {
        let localContext = new Connector_wordContext(this.context, this.state);
        this.enterRule(localContext, 114, ArchDSLParser.RULE_connector_word);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 664;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & 134152193) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public actor(): ActorContext {
        let localContext = new ActorContext(this.context, this.state);
        this.enterRule(localContext, 116, ArchDSLParser.RULE_actor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 666;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public domain(): DomainContext {
        let localContext = new DomainContext(this.context, this.state);
        this.enterRule(localContext, 118, ArchDSLParser.RULE_domain);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 668;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public verb(): VerbContext {
        let localContext = new VerbContext(this.context, this.state);
        this.enterRule(localContext, 120, ArchDSLParser.RULE_verb);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 670;
            this.match(ArchDSLParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public quoted_event(): Quoted_eventContext {
        let localContext = new Quoted_eventContext(this.context, this.state);
        this.enterRule(localContext, 122, ArchDSLParser.RULE_quoted_event);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 672;
            this.match(ArchDSLParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public string_(): StringContext {
        let localContext = new StringContext(this.context, this.state);
        this.enterRule(localContext, 124, ArchDSLParser.RULE_string);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 674;
            this.match(ArchDSLParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,49,677,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
        2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,
        7,59,2,60,7,60,2,61,7,61,2,62,7,62,1,0,1,0,1,0,1,0,1,0,1,0,1,0,5,
        0,134,8,0,10,0,12,0,137,9,0,1,1,1,1,1,1,1,1,5,1,143,8,1,10,1,12,
        1,146,9,1,1,1,1,1,1,1,5,1,151,8,1,10,1,12,1,154,9,1,1,2,1,2,1,2,
        5,2,159,8,2,10,2,12,2,162,9,2,1,2,1,2,1,2,5,2,167,8,2,10,2,12,2,
        170,9,2,1,3,1,3,4,3,174,8,3,11,3,12,3,175,1,3,5,3,179,8,3,10,3,12,
        3,182,9,3,1,3,5,3,185,8,3,10,3,12,3,188,9,3,1,4,1,4,1,4,5,4,193,
        8,4,10,4,12,4,196,9,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,4,6,205,8,6,11,
        6,12,6,206,1,6,5,6,210,8,6,10,6,12,6,213,9,6,1,6,5,6,216,8,6,10,
        6,12,6,219,9,6,1,7,1,7,1,8,1,8,3,8,225,8,8,1,8,1,8,5,8,229,8,8,10,
        8,12,8,232,9,8,1,8,1,8,1,8,5,8,237,8,8,10,8,12,8,240,9,8,1,9,1,9,
        1,10,1,10,4,10,246,8,10,11,10,12,10,247,1,11,1,11,1,11,5,11,253,
        8,11,10,11,12,11,256,9,11,1,11,1,11,4,11,260,8,11,11,11,12,11,261,
        1,12,1,12,1,12,5,12,267,8,12,10,12,12,12,270,9,12,1,12,1,12,4,12,
        274,8,12,11,12,12,12,275,1,13,1,13,4,13,280,8,13,11,13,12,13,281,
        1,13,5,13,285,8,13,10,13,12,13,288,9,13,1,14,1,14,3,14,292,8,14,
        1,15,1,15,1,16,1,16,1,16,5,16,299,8,16,10,16,12,16,302,9,16,1,17,
        1,17,3,17,306,8,17,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,
        5,20,317,8,20,10,20,12,20,320,9,20,1,21,1,21,1,21,3,21,325,8,21,
        1,22,1,22,1,23,1,23,1,23,1,23,4,23,333,8,23,11,23,12,23,334,1,23,
        1,23,1,23,5,23,340,8,23,10,23,12,23,343,9,23,1,24,1,24,1,25,1,25,
        4,25,349,8,25,11,25,12,25,350,1,25,5,25,354,8,25,10,25,12,25,357,
        9,25,1,25,4,25,360,8,25,11,25,12,25,361,1,26,1,26,1,26,1,26,1,26,
        1,26,1,26,1,26,1,26,3,26,373,8,26,1,27,1,27,1,27,5,27,378,8,27,10,
        27,12,27,381,9,27,1,27,3,27,384,8,27,1,28,1,28,1,29,1,29,1,29,5,
        29,391,8,29,10,29,12,29,394,9,29,1,29,3,29,397,8,29,1,30,1,30,1,
        31,1,31,1,31,1,31,5,31,405,8,31,10,31,12,31,408,9,31,1,31,1,31,1,
        31,5,31,413,8,31,10,31,12,31,416,9,31,1,32,1,32,1,32,5,32,421,8,
        32,10,32,12,32,424,9,32,1,32,3,32,427,8,32,1,32,1,32,5,32,431,8,
        32,10,32,12,32,434,9,32,1,33,1,33,4,33,438,8,33,11,33,12,33,439,
        1,33,5,33,443,8,33,10,33,12,33,446,9,33,1,33,5,33,449,8,33,10,33,
        12,33,452,9,33,1,34,1,34,1,34,5,34,457,8,34,10,34,12,34,460,9,34,
        1,34,1,34,1,34,5,34,465,8,34,10,34,12,34,468,9,34,1,35,1,35,1,36,
        1,36,4,36,474,8,36,11,36,12,36,475,1,36,5,36,479,8,36,10,36,12,36,
        482,9,36,1,36,5,36,485,8,36,10,36,12,36,488,9,36,1,37,1,37,1,37,
        1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,502,8,37,1,38,
        1,38,1,38,1,38,1,38,3,38,509,8,38,1,39,1,39,1,40,1,40,1,40,5,40,
        516,8,40,10,40,12,40,519,9,40,1,41,1,41,1,41,1,41,1,42,1,42,1,43,
        1,43,1,43,5,43,530,8,43,10,43,12,43,533,9,43,1,43,3,43,536,8,43,
        1,44,1,44,1,45,1,45,1,45,5,45,543,8,45,10,45,12,45,546,9,45,1,45,
        3,45,549,8,45,1,46,1,46,1,47,1,47,1,47,1,47,5,47,557,8,47,10,47,
        12,47,560,9,47,1,47,5,47,563,8,47,10,47,12,47,566,9,47,1,47,1,47,
        5,47,570,8,47,10,47,12,47,573,9,47,1,48,1,48,1,48,1,49,1,49,1,49,
        4,49,581,8,49,11,49,12,49,582,1,49,1,49,1,49,4,49,588,8,49,11,49,
        12,49,589,1,49,1,49,1,49,1,49,1,49,4,49,597,8,49,11,49,12,49,598,
        3,49,601,8,49,1,50,1,50,1,50,3,50,606,8,50,1,51,5,51,609,8,51,10,
        51,12,51,612,9,51,1,52,1,52,4,52,616,8,52,11,52,12,52,617,1,52,1,
        52,4,52,622,8,52,11,52,12,52,623,1,52,1,52,4,52,628,8,52,11,52,12,
        52,629,3,52,632,8,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,53,3,53,645,8,53,1,54,1,54,1,54,1,54,1,55,1,55,1,55,3,55,
        654,8,55,1,55,1,55,1,56,1,56,1,56,4,56,661,8,56,11,56,12,56,662,
        1,57,1,57,1,58,1,58,1,59,1,59,1,60,1,60,1,61,1,61,1,62,1,62,1,62,
        0,0,63,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
        86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
        122,124,0,3,1,0,45,46,1,0,20,22,2,0,13,13,29,39,700,0,135,1,0,0,
        0,2,138,1,0,0,0,4,155,1,0,0,0,6,171,1,0,0,0,8,189,1,0,0,0,10,200,
        1,0,0,0,12,202,1,0,0,0,14,220,1,0,0,0,16,222,1,0,0,0,18,241,1,0,
        0,0,20,245,1,0,0,0,22,249,1,0,0,0,24,263,1,0,0,0,26,277,1,0,0,0,
        28,291,1,0,0,0,30,293,1,0,0,0,32,295,1,0,0,0,34,303,1,0,0,0,36,307,
        1,0,0,0,38,309,1,0,0,0,40,313,1,0,0,0,42,321,1,0,0,0,44,326,1,0,
        0,0,46,328,1,0,0,0,48,344,1,0,0,0,50,346,1,0,0,0,52,372,1,0,0,0,
        54,374,1,0,0,0,56,385,1,0,0,0,58,387,1,0,0,0,60,398,1,0,0,0,62,400,
        1,0,0,0,64,417,1,0,0,0,66,435,1,0,0,0,68,453,1,0,0,0,70,469,1,0,
        0,0,72,471,1,0,0,0,74,501,1,0,0,0,76,503,1,0,0,0,78,510,1,0,0,0,
        80,512,1,0,0,0,82,520,1,0,0,0,84,524,1,0,0,0,86,526,1,0,0,0,88,537,
        1,0,0,0,90,539,1,0,0,0,92,550,1,0,0,0,94,552,1,0,0,0,96,574,1,0,
        0,0,98,600,1,0,0,0,100,602,1,0,0,0,102,610,1,0,0,0,104,631,1,0,0,
        0,106,644,1,0,0,0,108,646,1,0,0,0,110,650,1,0,0,0,112,660,1,0,0,
        0,114,664,1,0,0,0,116,666,1,0,0,0,118,668,1,0,0,0,120,670,1,0,0,
        0,122,672,1,0,0,0,124,674,1,0,0,0,126,134,3,16,8,0,127,134,3,64,
        32,0,128,134,3,62,31,0,129,134,3,46,23,0,130,134,3,94,47,0,131,134,
        3,2,1,0,132,134,3,4,2,0,133,126,1,0,0,0,133,127,1,0,0,0,133,128,
        1,0,0,0,133,129,1,0,0,0,133,130,1,0,0,0,133,131,1,0,0,0,133,132,
        1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,1,1,
        0,0,0,137,135,1,0,0,0,138,139,5,1,0,0,139,140,3,10,5,0,140,144,5,
        2,0,0,141,143,5,47,0,0,142,141,1,0,0,0,143,146,1,0,0,0,144,142,1,
        0,0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,144,1,0,0,0,147,148,3,
        12,6,0,148,152,5,3,0,0,149,151,5,47,0,0,150,149,1,0,0,0,151,154,
        1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,3,1,0,0,0,154,152,1,
        0,0,0,155,156,5,40,0,0,156,160,5,2,0,0,157,159,5,47,0,0,158,157,
        1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,163,
        1,0,0,0,162,160,1,0,0,0,163,164,3,6,3,0,164,168,5,3,0,0,165,167,
        5,47,0,0,166,165,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,168,169,
        1,0,0,0,169,5,1,0,0,0,170,168,1,0,0,0,171,180,3,8,4,0,172,174,5,
        47,0,0,173,172,1,0,0,0,174,175,1,0,0,0,175,173,1,0,0,0,175,176,1,
        0,0,0,176,177,1,0,0,0,177,179,3,8,4,0,178,173,1,0,0,0,179,182,1,
        0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,186,1,0,0,0,182,180,1,
        0,0,0,183,185,5,47,0,0,184,183,1,0,0,0,185,188,1,0,0,0,186,184,1,
        0,0,0,186,187,1,0,0,0,187,7,1,0,0,0,188,186,1,0,0,0,189,190,3,10,
        5,0,190,194,5,2,0,0,191,193,5,47,0,0,192,191,1,0,0,0,193,196,1,0,
        0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,194,1,0,
        0,0,197,198,3,12,6,0,198,199,5,3,0,0,199,9,1,0,0,0,200,201,5,45,
        0,0,201,11,1,0,0,0,202,211,3,14,7,0,203,205,5,47,0,0,204,203,1,0,
        0,0,205,206,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,208,1,0,
        0,0,208,210,3,14,7,0,209,204,1,0,0,0,210,213,1,0,0,0,211,209,1,0,
        0,0,211,212,1,0,0,0,212,217,1,0,0,0,213,211,1,0,0,0,214,216,5,47,
        0,0,215,214,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,
        0,0,218,13,1,0,0,0,219,217,1,0,0,0,220,221,5,45,0,0,221,15,1,0,0,
        0,222,224,5,4,0,0,223,225,3,18,9,0,224,223,1,0,0,0,224,225,1,0,0,
        0,225,226,1,0,0,0,226,230,5,2,0,0,227,229,5,47,0,0,228,227,1,0,0,
        0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,233,1,0,0,
        0,232,230,1,0,0,0,233,234,3,20,10,0,234,238,5,3,0,0,235,237,5,47,
        0,0,236,235,1,0,0,0,237,240,1,0,0,0,238,236,1,0,0,0,238,239,1,0,
        0,0,239,17,1,0,0,0,240,238,1,0,0,0,241,242,5,45,0,0,242,19,1,0,0,
        0,243,246,3,22,11,0,244,246,3,24,12,0,245,243,1,0,0,0,245,244,1,
        0,0,0,246,247,1,0,0,0,247,245,1,0,0,0,247,248,1,0,0,0,248,21,1,0,
        0,0,249,250,5,5,0,0,250,254,5,6,0,0,251,253,5,47,0,0,252,251,1,0,
        0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,257,1,0,
        0,0,256,254,1,0,0,0,257,259,3,26,13,0,258,260,5,47,0,0,259,258,1,
        0,0,0,260,261,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,23,1,0,
        0,0,263,264,5,7,0,0,264,268,5,6,0,0,265,267,5,47,0,0,266,265,1,0,
        0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,271,1,0,
        0,0,270,268,1,0,0,0,271,273,3,26,13,0,272,274,5,47,0,0,273,272,1,
        0,0,0,274,275,1,0,0,0,275,273,1,0,0,0,275,276,1,0,0,0,276,25,1,0,
        0,0,277,286,3,28,14,0,278,280,5,47,0,0,279,278,1,0,0,0,280,281,1,
        0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,283,1,0,0,0,283,285,3,
        28,14,0,284,279,1,0,0,0,285,288,1,0,0,0,286,284,1,0,0,0,286,287,
        1,0,0,0,287,27,1,0,0,0,288,286,1,0,0,0,289,292,3,44,22,0,290,292,
        3,30,15,0,291,289,1,0,0,0,291,290,1,0,0,0,292,29,1,0,0,0,293,294,
        3,32,16,0,294,31,1,0,0,0,295,300,3,34,17,0,296,297,5,8,0,0,297,299,
        3,34,17,0,298,296,1,0,0,0,299,302,1,0,0,0,300,298,1,0,0,0,300,301,
        1,0,0,0,301,33,1,0,0,0,302,300,1,0,0,0,303,305,3,36,18,0,304,306,
        3,38,19,0,305,304,1,0,0,0,305,306,1,0,0,0,306,35,1,0,0,0,307,308,
        5,45,0,0,308,37,1,0,0,0,309,310,5,9,0,0,310,311,3,40,20,0,311,312,
        5,10,0,0,312,39,1,0,0,0,313,318,3,42,21,0,314,315,5,11,0,0,315,317,
        3,42,21,0,316,314,1,0,0,0,317,320,1,0,0,0,318,316,1,0,0,0,318,319,
        1,0,0,0,319,41,1,0,0,0,320,318,1,0,0,0,321,324,5,45,0,0,322,323,
        5,6,0,0,323,325,5,45,0,0,324,322,1,0,0,0,324,325,1,0,0,0,325,43,
        1,0,0,0,326,327,3,34,17,0,327,45,1,0,0,0,328,329,5,12,0,0,329,330,
        3,48,24,0,330,332,5,2,0,0,331,333,5,47,0,0,332,331,1,0,0,0,333,334,
        1,0,0,0,334,332,1,0,0,0,334,335,1,0,0,0,335,336,1,0,0,0,336,337,
        3,50,25,0,337,341,5,3,0,0,338,340,5,47,0,0,339,338,1,0,0,0,340,343,
        1,0,0,0,341,339,1,0,0,0,341,342,1,0,0,0,342,47,1,0,0,0,343,341,1,
        0,0,0,344,345,5,45,0,0,345,49,1,0,0,0,346,355,3,52,26,0,347,349,
        5,47,0,0,348,347,1,0,0,0,349,350,1,0,0,0,350,348,1,0,0,0,350,351,
        1,0,0,0,351,352,1,0,0,0,352,354,3,52,26,0,353,348,1,0,0,0,354,357,
        1,0,0,0,355,353,1,0,0,0,355,356,1,0,0,0,356,359,1,0,0,0,357,355,
        1,0,0,0,358,360,5,47,0,0,359,358,1,0,0,0,360,361,1,0,0,0,361,359,
        1,0,0,0,361,362,1,0,0,0,362,51,1,0,0,0,363,364,5,13,0,0,364,365,
        5,6,0,0,365,373,3,54,27,0,366,367,5,14,0,0,367,368,5,6,0,0,368,373,
        3,86,43,0,369,370,5,15,0,0,370,371,5,6,0,0,371,373,3,58,29,0,372,
        363,1,0,0,0,372,366,1,0,0,0,372,369,1,0,0,0,373,53,1,0,0,0,374,379,
        3,56,28,0,375,376,5,11,0,0,376,378,3,56,28,0,377,375,1,0,0,0,378,
        381,1,0,0,0,379,377,1,0,0,0,379,380,1,0,0,0,380,383,1,0,0,0,381,
        379,1,0,0,0,382,384,5,11,0,0,383,382,1,0,0,0,383,384,1,0,0,0,384,
        55,1,0,0,0,385,386,5,45,0,0,386,57,1,0,0,0,387,392,3,60,30,0,388,
        389,5,11,0,0,389,391,3,60,30,0,390,388,1,0,0,0,391,394,1,0,0,0,392,
        390,1,0,0,0,392,393,1,0,0,0,393,396,1,0,0,0,394,392,1,0,0,0,395,
        397,5,11,0,0,396,395,1,0,0,0,396,397,1,0,0,0,397,59,1,0,0,0,398,
        399,5,45,0,0,399,61,1,0,0,0,400,401,5,16,0,0,401,402,3,70,35,0,402,
        406,5,2,0,0,403,405,5,47,0,0,404,403,1,0,0,0,405,408,1,0,0,0,406,
        404,1,0,0,0,406,407,1,0,0,0,407,409,1,0,0,0,408,406,1,0,0,0,409,
        410,3,72,36,0,410,414,5,3,0,0,411,413,5,47,0,0,412,411,1,0,0,0,413,
        416,1,0,0,0,414,412,1,0,0,0,414,415,1,0,0,0,415,63,1,0,0,0,416,414,
        1,0,0,0,417,418,5,17,0,0,418,422,5,2,0,0,419,421,5,47,0,0,420,419,
        1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,423,1,0,0,0,423,426,
        1,0,0,0,424,422,1,0,0,0,425,427,3,66,33,0,426,425,1,0,0,0,426,427,
        1,0,0,0,427,428,1,0,0,0,428,432,5,3,0,0,429,431,5,47,0,0,430,429,
        1,0,0,0,431,434,1,0,0,0,432,430,1,0,0,0,432,433,1,0,0,0,433,65,1,
        0,0,0,434,432,1,0,0,0,435,444,3,68,34,0,436,438,5,47,0,0,437,436,
        1,0,0,0,438,439,1,0,0,0,439,437,1,0,0,0,439,440,1,0,0,0,440,441,
        1,0,0,0,441,443,3,68,34,0,442,437,1,0,0,0,443,446,1,0,0,0,444,442,
        1,0,0,0,444,445,1,0,0,0,445,450,1,0,0,0,446,444,1,0,0,0,447,449,
        5,47,0,0,448,447,1,0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,450,451,
        1,0,0,0,451,67,1,0,0,0,452,450,1,0,0,0,453,454,3,70,35,0,454,458,
        5,2,0,0,455,457,5,47,0,0,456,455,1,0,0,0,457,460,1,0,0,0,458,456,
        1,0,0,0,458,459,1,0,0,0,459,461,1,0,0,0,460,458,1,0,0,0,461,462,
        3,72,36,0,462,466,5,3,0,0,463,465,5,47,0,0,464,463,1,0,0,0,465,468,
        1,0,0,0,466,464,1,0,0,0,466,467,1,0,0,0,467,69,1,0,0,0,468,466,1,
        0,0,0,469,470,7,0,0,0,470,71,1,0,0,0,471,480,3,74,37,0,472,474,5,
        47,0,0,473,472,1,0,0,0,474,475,1,0,0,0,475,473,1,0,0,0,475,476,1,
        0,0,0,476,477,1,0,0,0,477,479,3,74,37,0,478,473,1,0,0,0,479,482,
        1,0,0,0,480,478,1,0,0,0,480,481,1,0,0,0,481,486,1,0,0,0,482,480,
        1,0,0,0,483,485,5,47,0,0,484,483,1,0,0,0,485,488,1,0,0,0,486,484,
        1,0,0,0,486,487,1,0,0,0,487,73,1,0,0,0,488,486,1,0,0,0,489,490,5,
        40,0,0,490,491,5,6,0,0,491,502,3,86,43,0,492,493,5,41,0,0,493,494,
        5,6,0,0,494,502,3,90,45,0,495,496,5,42,0,0,496,497,5,6,0,0,497,502,
        5,45,0,0,498,499,5,43,0,0,499,500,5,6,0,0,500,502,3,76,38,0,501,
        489,1,0,0,0,501,492,1,0,0,0,501,495,1,0,0,0,501,498,1,0,0,0,502,
        75,1,0,0,0,503,508,3,78,39,0,504,505,5,18,0,0,505,506,3,80,40,0,
        506,507,5,19,0,0,507,509,1,0,0,0,508,504,1,0,0,0,508,509,1,0,0,0,
        509,77,1,0,0,0,510,511,7,1,0,0,511,79,1,0,0,0,512,517,3,82,41,0,
        513,514,5,11,0,0,514,516,3,82,41,0,515,513,1,0,0,0,516,519,1,0,0,
        0,517,515,1,0,0,0,517,518,1,0,0,0,518,81,1,0,0,0,519,517,1,0,0,0,
        520,521,5,44,0,0,521,522,5,23,0,0,522,523,3,84,42,0,523,83,1,0,0,
        0,524,525,5,45,0,0,525,85,1,0,0,0,526,531,3,88,44,0,527,528,5,11,
        0,0,528,530,3,88,44,0,529,527,1,0,0,0,530,533,1,0,0,0,531,529,1,
        0,0,0,531,532,1,0,0,0,532,535,1,0,0,0,533,531,1,0,0,0,534,536,5,
        11,0,0,535,534,1,0,0,0,535,536,1,0,0,0,536,87,1,0,0,0,537,538,5,
        45,0,0,538,89,1,0,0,0,539,544,3,92,46,0,540,541,5,11,0,0,541,543,
        3,92,46,0,542,540,1,0,0,0,543,546,1,0,0,0,544,542,1,0,0,0,544,545,
        1,0,0,0,545,548,1,0,0,0,546,544,1,0,0,0,547,549,5,11,0,0,548,547,
        1,0,0,0,548,549,1,0,0,0,549,91,1,0,0,0,550,551,5,45,0,0,551,93,1,
        0,0,0,552,553,5,24,0,0,553,554,3,124,62,0,554,558,5,2,0,0,555,557,
        5,47,0,0,556,555,1,0,0,0,557,560,1,0,0,0,558,556,1,0,0,0,558,559,
        1,0,0,0,559,564,1,0,0,0,560,558,1,0,0,0,561,563,3,96,48,0,562,561,
        1,0,0,0,563,566,1,0,0,0,564,562,1,0,0,0,564,565,1,0,0,0,565,567,
        1,0,0,0,566,564,1,0,0,0,567,571,5,3,0,0,568,570,5,47,0,0,569,568,
        1,0,0,0,570,573,1,0,0,0,571,569,1,0,0,0,571,572,1,0,0,0,572,95,1,
        0,0,0,573,571,1,0,0,0,574,575,3,98,49,0,575,576,3,102,51,0,576,97,
        1,0,0,0,577,578,5,25,0,0,578,580,3,100,50,0,579,581,5,47,0,0,580,
        579,1,0,0,0,581,582,1,0,0,0,582,580,1,0,0,0,582,583,1,0,0,0,583,
        601,1,0,0,0,584,585,5,25,0,0,585,587,3,122,61,0,586,588,5,47,0,0,
        587,586,1,0,0,0,588,589,1,0,0,0,589,587,1,0,0,0,589,590,1,0,0,0,
        590,601,1,0,0,0,591,592,5,25,0,0,592,593,3,118,59,0,593,594,5,26,
        0,0,594,596,3,122,61,0,595,597,5,47,0,0,596,595,1,0,0,0,597,598,
        1,0,0,0,598,596,1,0,0,0,598,599,1,0,0,0,599,601,1,0,0,0,600,577,
        1,0,0,0,600,584,1,0,0,0,600,591,1,0,0,0,601,99,1,0,0,0,602,603,3,
        116,58,0,603,605,3,120,60,0,604,606,3,112,56,0,605,604,1,0,0,0,605,
        606,1,0,0,0,606,101,1,0,0,0,607,609,3,104,52,0,608,607,1,0,0,0,609,
        612,1,0,0,0,610,608,1,0,0,0,610,611,1,0,0,0,611,103,1,0,0,0,612,
        610,1,0,0,0,613,615,3,108,54,0,614,616,5,47,0,0,615,614,1,0,0,0,
        616,617,1,0,0,0,617,615,1,0,0,0,617,618,1,0,0,0,618,632,1,0,0,0,
        619,621,3,106,53,0,620,622,5,47,0,0,621,620,1,0,0,0,622,623,1,0,
        0,0,623,621,1,0,0,0,623,624,1,0,0,0,624,632,1,0,0,0,625,627,3,110,
        55,0,626,628,5,47,0,0,627,626,1,0,0,0,628,629,1,0,0,0,629,627,1,
        0,0,0,629,630,1,0,0,0,630,632,1,0,0,0,631,613,1,0,0,0,631,619,1,
        0,0,0,631,625,1,0,0,0,632,105,1,0,0,0,633,634,3,118,59,0,634,635,
        5,27,0,0,635,636,3,118,59,0,636,637,3,114,57,0,637,638,3,112,56,
        0,638,645,1,0,0,0,639,640,3,118,59,0,640,641,5,27,0,0,641,642,3,
        118,59,0,642,643,3,112,56,0,643,645,1,0,0,0,644,633,1,0,0,0,644,
        639,1,0,0,0,645,107,1,0,0,0,646,647,3,118,59,0,647,648,5,28,0,0,
        648,649,3,122,61,0,649,109,1,0,0,0,650,651,3,118,59,0,651,653,3,
        120,60,0,652,654,3,114,57,0,653,652,1,0,0,0,653,654,1,0,0,0,654,
        655,1,0,0,0,655,656,3,112,56,0,656,111,1,0,0,0,657,661,5,45,0,0,
        658,661,5,46,0,0,659,661,3,114,57,0,660,657,1,0,0,0,660,658,1,0,
        0,0,660,659,1,0,0,0,661,662,1,0,0,0,662,660,1,0,0,0,662,663,1,0,
        0,0,663,113,1,0,0,0,664,665,7,2,0,0,665,115,1,0,0,0,666,667,5,45,
        0,0,667,117,1,0,0,0,668,669,5,45,0,0,669,119,1,0,0,0,670,671,5,45,
        0,0,671,121,1,0,0,0,672,673,5,46,0,0,673,123,1,0,0,0,674,675,5,46,
        0,0,675,125,1,0,0,0,76,133,135,144,152,160,168,175,180,186,194,206,
        211,217,224,230,238,245,247,254,261,268,275,281,286,291,300,305,
        318,324,334,341,350,355,361,372,379,383,392,396,406,414,422,426,
        432,439,444,450,458,466,475,480,486,501,508,517,531,535,544,548,
        558,564,571,582,589,598,600,605,610,617,623,629,631,644,653,660,
        662
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ArchDSLParser.__ATN) {
            ArchDSLParser.__ATN = new antlr.ATNDeserializer().deserialize(ArchDSLParser._serializedATN);
        }

        return ArchDSLParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ArchDSLParser.literalNames, ArchDSLParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ArchDSLParser.vocabulary;
    }

    private static readonly decisionsToDFA = ArchDSLParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class DslContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arch(): ArchContext[];
    public arch(i: number): ArchContext | null;
    public arch(i?: number): ArchContext[] | ArchContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArchContext);
        }

        return this.getRuleContext(i, ArchContext);
    }
    public services_def(): Services_defContext[];
    public services_def(i: number): Services_defContext | null;
    public services_def(i?: number): Services_defContext[] | Services_defContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Services_defContext);
        }

        return this.getRuleContext(i, Services_defContext);
    }
    public service_def(): Service_defContext[];
    public service_def(i: number): Service_defContext | null;
    public service_def(i?: number): Service_defContext[] | Service_defContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Service_defContext);
        }

        return this.getRuleContext(i, Service_defContext);
    }
    public exposure(): ExposureContext[];
    public exposure(i: number): ExposureContext | null;
    public exposure(i?: number): ExposureContext[] | ExposureContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExposureContext);
        }

        return this.getRuleContext(i, ExposureContext);
    }
    public use_case(): Use_caseContext[];
    public use_case(i: number): Use_caseContext | null;
    public use_case(i?: number): Use_caseContext[] | Use_caseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Use_caseContext);
        }

        return this.getRuleContext(i, Use_caseContext);
    }
    public domain_def(): Domain_defContext[];
    public domain_def(i: number): Domain_defContext | null;
    public domain_def(i?: number): Domain_defContext[] | Domain_defContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Domain_defContext);
        }

        return this.getRuleContext(i, Domain_defContext);
    }
    public domains_def(): Domains_defContext[];
    public domains_def(i: number): Domains_defContext | null;
    public domains_def(i?: number): Domains_defContext[] | Domains_defContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Domains_defContext);
        }

        return this.getRuleContext(i, Domains_defContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_dsl;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDsl) {
             listener.enterDsl(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDsl) {
             listener.exitDsl(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDsl) {
            return visitor.visitDsl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Domain_defContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public domain_name(): Domain_nameContext {
        return this.getRuleContext(0, Domain_nameContext)!;
    }
    public subdomain_list(): Subdomain_listContext {
        return this.getRuleContext(0, Subdomain_listContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_domain_def;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDomain_def) {
             listener.enterDomain_def(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDomain_def) {
             listener.exitDomain_def(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDomain_def) {
            return visitor.visitDomain_def(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Domains_defContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOMAINS(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.DOMAINS, 0)!;
    }
    public domain_block_list(): Domain_block_listContext {
        return this.getRuleContext(0, Domain_block_listContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_domains_def;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDomains_def) {
             listener.enterDomains_def(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDomains_def) {
             listener.exitDomains_def(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDomains_def) {
            return visitor.visitDomains_def(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Domain_block_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public domain_block(): Domain_blockContext[];
    public domain_block(i: number): Domain_blockContext | null;
    public domain_block(i?: number): Domain_blockContext[] | Domain_blockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Domain_blockContext);
        }

        return this.getRuleContext(i, Domain_blockContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_domain_block_list;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDomain_block_list) {
             listener.enterDomain_block_list(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDomain_block_list) {
             listener.exitDomain_block_list(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDomain_block_list) {
            return visitor.visitDomain_block_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Domain_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public domain_name(): Domain_nameContext {
        return this.getRuleContext(0, Domain_nameContext)!;
    }
    public subdomain_list(): Subdomain_listContext {
        return this.getRuleContext(0, Subdomain_listContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_domain_block;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDomain_block) {
             listener.enterDomain_block(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDomain_block) {
             listener.exitDomain_block(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDomain_block) {
            return visitor.visitDomain_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Domain_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_domain_name;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDomain_name) {
             listener.enterDomain_name(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDomain_name) {
             listener.exitDomain_name(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDomain_name) {
            return visitor.visitDomain_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Subdomain_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public subdomain(): SubdomainContext[];
    public subdomain(i: number): SubdomainContext | null;
    public subdomain(i?: number): SubdomainContext[] | SubdomainContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SubdomainContext);
        }

        return this.getRuleContext(i, SubdomainContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_subdomain_list;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterSubdomain_list) {
             listener.enterSubdomain_list(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitSubdomain_list) {
             listener.exitSubdomain_list(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitSubdomain_list) {
            return visitor.visitSubdomain_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SubdomainContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_subdomain;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterSubdomain) {
             listener.enterSubdomain(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitSubdomain) {
             listener.exitSubdomain(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitSubdomain) {
            return visitor.visitSubdomain(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arch_sections(): Arch_sectionsContext {
        return this.getRuleContext(0, Arch_sectionsContext)!;
    }
    public arch_name(): Arch_nameContext | null {
        return this.getRuleContext(0, Arch_nameContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_arch;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterArch) {
             listener.enterArch(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitArch) {
             listener.exitArch(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitArch) {
            return visitor.visitArch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Arch_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_arch_name;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterArch_name) {
             listener.enterArch_name(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitArch_name) {
             listener.exitArch_name(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitArch_name) {
            return visitor.visitArch_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Arch_sectionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public presentation_section(): Presentation_sectionContext[];
    public presentation_section(i: number): Presentation_sectionContext | null;
    public presentation_section(i?: number): Presentation_sectionContext[] | Presentation_sectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Presentation_sectionContext);
        }

        return this.getRuleContext(i, Presentation_sectionContext);
    }
    public gateway_section(): Gateway_sectionContext[];
    public gateway_section(i: number): Gateway_sectionContext | null;
    public gateway_section(i?: number): Gateway_sectionContext[] | Gateway_sectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Gateway_sectionContext);
        }

        return this.getRuleContext(i, Gateway_sectionContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_arch_sections;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterArch_sections) {
             listener.enterArch_sections(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitArch_sections) {
             listener.exitArch_sections(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitArch_sections) {
            return visitor.visitArch_sections(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Presentation_sectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arch_component_list(): Arch_component_listContext {
        return this.getRuleContext(0, Arch_component_listContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_presentation_section;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterPresentation_section) {
             listener.enterPresentation_section(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitPresentation_section) {
             listener.exitPresentation_section(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitPresentation_section) {
            return visitor.visitPresentation_section(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Gateway_sectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arch_component_list(): Arch_component_listContext {
        return this.getRuleContext(0, Arch_component_listContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_gateway_section;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterGateway_section) {
             listener.enterGateway_section(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitGateway_section) {
             listener.exitGateway_section(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitGateway_section) {
            return visitor.visitGateway_section(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Arch_component_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arch_component(): Arch_componentContext[];
    public arch_component(i: number): Arch_componentContext | null;
    public arch_component(i?: number): Arch_componentContext[] | Arch_componentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Arch_componentContext);
        }

        return this.getRuleContext(i, Arch_componentContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_arch_component_list;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterArch_component_list) {
             listener.enterArch_component_list(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitArch_component_list) {
             listener.exitArch_component_list(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitArch_component_list) {
            return visitor.visitArch_component_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Arch_componentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simple_component(): Simple_componentContext | null {
        return this.getRuleContext(0, Simple_componentContext);
    }
    public component_flow(): Component_flowContext | null {
        return this.getRuleContext(0, Component_flowContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_arch_component;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterArch_component) {
             listener.enterArch_component(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitArch_component) {
             listener.exitArch_component(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitArch_component) {
            return visitor.visitArch_component(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Component_flowContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public component_chain(): Component_chainContext {
        return this.getRuleContext(0, Component_chainContext)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_component_flow;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterComponent_flow) {
             listener.enterComponent_flow(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitComponent_flow) {
             listener.exitComponent_flow(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitComponent_flow) {
            return visitor.visitComponent_flow(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Component_chainContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public component_with_modifiers(): Component_with_modifiersContext[];
    public component_with_modifiers(i: number): Component_with_modifiersContext | null;
    public component_with_modifiers(i?: number): Component_with_modifiersContext[] | Component_with_modifiersContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Component_with_modifiersContext);
        }

        return this.getRuleContext(i, Component_with_modifiersContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_component_chain;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterComponent_chain) {
             listener.enterComponent_chain(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitComponent_chain) {
             listener.exitComponent_chain(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitComponent_chain) {
            return visitor.visitComponent_chain(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Component_with_modifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public component_name(): Component_nameContext {
        return this.getRuleContext(0, Component_nameContext)!;
    }
    public component_modifiers(): Component_modifiersContext | null {
        return this.getRuleContext(0, Component_modifiersContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_component_with_modifiers;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterComponent_with_modifiers) {
             listener.enterComponent_with_modifiers(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitComponent_with_modifiers) {
             listener.exitComponent_with_modifiers(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitComponent_with_modifiers) {
            return visitor.visitComponent_with_modifiers(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Component_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_component_name;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterComponent_name) {
             listener.enterComponent_name(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitComponent_name) {
             listener.exitComponent_name(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitComponent_name) {
            return visitor.visitComponent_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Component_modifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public modifier_list(): Modifier_listContext {
        return this.getRuleContext(0, Modifier_listContext)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_component_modifiers;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterComponent_modifiers) {
             listener.enterComponent_modifiers(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitComponent_modifiers) {
             listener.exitComponent_modifiers(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitComponent_modifiers) {
            return visitor.visitComponent_modifiers(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Modifier_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_modifier_list;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterModifier_list) {
             listener.enterModifier_list(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitModifier_list) {
             listener.exitModifier_list(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitModifier_list) {
            return visitor.visitModifier_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.IDENTIFIER);
    	} else {
    		return this.getToken(ArchDSLParser.IDENTIFIER, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_modifier;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterModifier) {
             listener.enterModifier(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitModifier) {
             listener.exitModifier(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Simple_componentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public component_with_modifiers(): Component_with_modifiersContext {
        return this.getRuleContext(0, Component_with_modifiersContext)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_simple_component;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterSimple_component) {
             listener.enterSimple_component(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitSimple_component) {
             listener.exitSimple_component(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitSimple_component) {
            return visitor.visitSimple_component(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExposureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exposure_name(): Exposure_nameContext {
        return this.getRuleContext(0, Exposure_nameContext)!;
    }
    public exposure_properties(): Exposure_propertiesContext {
        return this.getRuleContext(0, Exposure_propertiesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_exposure;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterExposure) {
             listener.enterExposure(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitExposure) {
             listener.exitExposure(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitExposure) {
            return visitor.visitExposure(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Exposure_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_exposure_name;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterExposure_name) {
             listener.enterExposure_name(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitExposure_name) {
             listener.exitExposure_name(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitExposure_name) {
            return visitor.visitExposure_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Exposure_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exposure_property(): Exposure_propertyContext[];
    public exposure_property(i: number): Exposure_propertyContext | null;
    public exposure_property(i?: number): Exposure_propertyContext[] | Exposure_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Exposure_propertyContext);
        }

        return this.getRuleContext(i, Exposure_propertyContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_exposure_properties;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterExposure_properties) {
             listener.enterExposure_properties(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitExposure_properties) {
             listener.exitExposure_properties(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitExposure_properties) {
            return visitor.visitExposure_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Exposure_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public target_list(): Target_listContext | null {
        return this.getRuleContext(0, Target_listContext);
    }
    public domain_list(): Domain_listContext | null {
        return this.getRuleContext(0, Domain_listContext);
    }
    public gateway_list(): Gateway_listContext | null {
        return this.getRuleContext(0, Gateway_listContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_exposure_property;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterExposure_property) {
             listener.enterExposure_property(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitExposure_property) {
             listener.exitExposure_property(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitExposure_property) {
            return visitor.visitExposure_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Target_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public target(): TargetContext[];
    public target(i: number): TargetContext | null;
    public target(i?: number): TargetContext[] | TargetContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TargetContext);
        }

        return this.getRuleContext(i, TargetContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_target_list;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterTarget_list) {
             listener.enterTarget_list(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitTarget_list) {
             listener.exitTarget_list(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitTarget_list) {
            return visitor.visitTarget_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TargetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_target;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterTarget) {
             listener.enterTarget(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitTarget) {
             listener.exitTarget(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitTarget) {
            return visitor.visitTarget(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Gateway_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public gateway(): GatewayContext[];
    public gateway(i: number): GatewayContext | null;
    public gateway(i?: number): GatewayContext[] | GatewayContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GatewayContext);
        }

        return this.getRuleContext(i, GatewayContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_gateway_list;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterGateway_list) {
             listener.enterGateway_list(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitGateway_list) {
             listener.exitGateway_list(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitGateway_list) {
            return visitor.visitGateway_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GatewayContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_gateway;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterGateway) {
             listener.enterGateway(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitGateway) {
             listener.exitGateway(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitGateway) {
            return visitor.visitGateway(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Service_defContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public service_name(): Service_nameContext {
        return this.getRuleContext(0, Service_nameContext)!;
    }
    public service_properties(): Service_propertiesContext {
        return this.getRuleContext(0, Service_propertiesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_service_def;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterService_def) {
             listener.enterService_def(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitService_def) {
             listener.exitService_def(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitService_def) {
            return visitor.visitService_def(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Services_defContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public service_block_list(): Service_block_listContext | null {
        return this.getRuleContext(0, Service_block_listContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_services_def;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterServices_def) {
             listener.enterServices_def(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitServices_def) {
             listener.exitServices_def(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitServices_def) {
            return visitor.visitServices_def(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Service_block_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public service_block(): Service_blockContext[];
    public service_block(i: number): Service_blockContext | null;
    public service_block(i?: number): Service_blockContext[] | Service_blockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Service_blockContext);
        }

        return this.getRuleContext(i, Service_blockContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_service_block_list;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterService_block_list) {
             listener.enterService_block_list(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitService_block_list) {
             listener.exitService_block_list(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitService_block_list) {
            return visitor.visitService_block_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Service_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public service_name(): Service_nameContext {
        return this.getRuleContext(0, Service_nameContext)!;
    }
    public service_properties(): Service_propertiesContext {
        return this.getRuleContext(0, Service_propertiesContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_service_block;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterService_block) {
             listener.enterService_block(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitService_block) {
             listener.exitService_block(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitService_block) {
            return visitor.visitService_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Service_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(ArchDSLParser.STRING, 0);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_service_name;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterService_name) {
             listener.enterService_name(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitService_name) {
             listener.exitService_name(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitService_name) {
            return visitor.visitService_name(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Service_propertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public service_property(): Service_propertyContext[];
    public service_property(i: number): Service_propertyContext | null;
    public service_property(i?: number): Service_propertyContext[] | Service_propertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Service_propertyContext);
        }

        return this.getRuleContext(i, Service_propertyContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_service_properties;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterService_properties) {
             listener.enterService_properties(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitService_properties) {
             listener.exitService_properties(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitService_properties) {
            return visitor.visitService_properties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Service_propertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOMAINS(): antlr.TerminalNode | null {
        return this.getToken(ArchDSLParser.DOMAINS, 0);
    }
    public domain_list(): Domain_listContext | null {
        return this.getRuleContext(0, Domain_listContext);
    }
    public DATA_STORES(): antlr.TerminalNode | null {
        return this.getToken(ArchDSLParser.DATA_STORES, 0);
    }
    public datastore_list(): Datastore_listContext | null {
        return this.getRuleContext(0, Datastore_listContext);
    }
    public LANGUAGE(): antlr.TerminalNode | null {
        return this.getToken(ArchDSLParser.LANGUAGE, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0);
    }
    public DEPLOYMENT(): antlr.TerminalNode | null {
        return this.getToken(ArchDSLParser.DEPLOYMENT, 0);
    }
    public deployment_strategy(): Deployment_strategyContext | null {
        return this.getRuleContext(0, Deployment_strategyContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_service_property;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterService_property) {
             listener.enterService_property(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitService_property) {
             listener.exitService_property(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitService_property) {
            return visitor.visitService_property(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Deployment_strategyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public deployment_type(): Deployment_typeContext {
        return this.getRuleContext(0, Deployment_typeContext)!;
    }
    public deployment_config(): Deployment_configContext | null {
        return this.getRuleContext(0, Deployment_configContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_deployment_strategy;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDeployment_strategy) {
             listener.enterDeployment_strategy(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDeployment_strategy) {
             listener.exitDeployment_strategy(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDeployment_strategy) {
            return visitor.visitDeployment_strategy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Deployment_typeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_deployment_type;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDeployment_type) {
             listener.enterDeployment_type(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDeployment_type) {
             listener.exitDeployment_type(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDeployment_type) {
            return visitor.visitDeployment_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Deployment_configContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public deployment_rule(): Deployment_ruleContext[];
    public deployment_rule(i: number): Deployment_ruleContext | null;
    public deployment_rule(i?: number): Deployment_ruleContext[] | Deployment_ruleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Deployment_ruleContext);
        }

        return this.getRuleContext(i, Deployment_ruleContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_deployment_config;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDeployment_config) {
             listener.enterDeployment_config(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDeployment_config) {
             listener.exitDeployment_config(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDeployment_config) {
            return visitor.visitDeployment_config(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Deployment_ruleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PERCENTAGE(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.PERCENTAGE, 0)!;
    }
    public deployment_target(): Deployment_targetContext {
        return this.getRuleContext(0, Deployment_targetContext)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_deployment_rule;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDeployment_rule) {
             listener.enterDeployment_rule(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDeployment_rule) {
             listener.exitDeployment_rule(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDeployment_rule) {
            return visitor.visitDeployment_rule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Deployment_targetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_deployment_target;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDeployment_target) {
             listener.enterDeployment_target(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDeployment_target) {
             listener.exitDeployment_target(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDeployment_target) {
            return visitor.visitDeployment_target(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Domain_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public domain_ref(): Domain_refContext[];
    public domain_ref(i: number): Domain_refContext | null;
    public domain_ref(i?: number): Domain_refContext[] | Domain_refContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Domain_refContext);
        }

        return this.getRuleContext(i, Domain_refContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_domain_list;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDomain_list) {
             listener.enterDomain_list(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDomain_list) {
             listener.exitDomain_list(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDomain_list) {
            return visitor.visitDomain_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Domain_refContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_domain_ref;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDomain_ref) {
             listener.enterDomain_ref(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDomain_ref) {
             listener.exitDomain_ref(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDomain_ref) {
            return visitor.visitDomain_ref(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Datastore_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public datastore(): DatastoreContext[];
    public datastore(i: number): DatastoreContext | null;
    public datastore(i?: number): DatastoreContext[] | DatastoreContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DatastoreContext);
        }

        return this.getRuleContext(i, DatastoreContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_datastore_list;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDatastore_list) {
             listener.enterDatastore_list(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDatastore_list) {
             listener.exitDatastore_list(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDatastore_list) {
            return visitor.visitDatastore_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatastoreContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_datastore;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDatastore) {
             listener.enterDatastore(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDatastore) {
             listener.exitDatastore(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDatastore) {
            return visitor.visitDatastore(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Use_caseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public scenario(): ScenarioContext[];
    public scenario(i: number): ScenarioContext | null;
    public scenario(i?: number): ScenarioContext[] | ScenarioContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ScenarioContext);
        }

        return this.getRuleContext(i, ScenarioContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_use_case;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterUse_case) {
             listener.enterUse_case(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitUse_case) {
             listener.exitUse_case(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitUse_case) {
            return visitor.visitUse_case(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScenarioContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public trigger(): TriggerContext {
        return this.getRuleContext(0, TriggerContext)!;
    }
    public action_block(): Action_blockContext {
        return this.getRuleContext(0, Action_blockContext)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_scenario;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterScenario) {
             listener.enterScenario(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitScenario) {
             listener.exitScenario(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitScenario) {
            return visitor.visitScenario(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TriggerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public external_trigger(): External_triggerContext | null {
        return this.getRuleContext(0, External_triggerContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public quoted_event(): Quoted_eventContext | null {
        return this.getRuleContext(0, Quoted_eventContext);
    }
    public domain(): DomainContext | null {
        return this.getRuleContext(0, DomainContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_trigger;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterTrigger) {
             listener.enterTrigger(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitTrigger) {
             listener.exitTrigger(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitTrigger) {
            return visitor.visitTrigger(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class External_triggerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public actor(): ActorContext {
        return this.getRuleContext(0, ActorContext)!;
    }
    public verb(): VerbContext {
        return this.getRuleContext(0, VerbContext)!;
    }
    public phrase(): PhraseContext | null {
        return this.getRuleContext(0, PhraseContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_external_trigger;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterExternal_trigger) {
             listener.enterExternal_trigger(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitExternal_trigger) {
             listener.exitExternal_trigger(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitExternal_trigger) {
            return visitor.visitExternal_trigger(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Action_blockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public action(): ActionContext[];
    public action(i: number): ActionContext | null;
    public action(i?: number): ActionContext[] | ActionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ActionContext);
        }

        return this.getRuleContext(i, ActionContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_action_block;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterAction_block) {
             listener.enterAction_block(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitAction_block) {
             listener.exitAction_block(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitAction_block) {
            return visitor.visitAction_block(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ActionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public async_action(): Async_actionContext | null {
        return this.getRuleContext(0, Async_actionContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.NEWLINE);
    	} else {
    		return this.getToken(ArchDSLParser.NEWLINE, i);
    	}
    }
    public sync_action(): Sync_actionContext | null {
        return this.getRuleContext(0, Sync_actionContext);
    }
    public internal_action(): Internal_actionContext | null {
        return this.getRuleContext(0, Internal_actionContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_action;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterAction) {
             listener.enterAction(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitAction) {
             listener.exitAction(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitAction) {
            return visitor.visitAction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Sync_actionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public domain(): DomainContext[];
    public domain(i: number): DomainContext | null;
    public domain(i?: number): DomainContext[] | DomainContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DomainContext);
        }

        return this.getRuleContext(i, DomainContext);
    }
    public connector_word(): Connector_wordContext | null {
        return this.getRuleContext(0, Connector_wordContext);
    }
    public phrase(): PhraseContext {
        return this.getRuleContext(0, PhraseContext)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_sync_action;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterSync_action) {
             listener.enterSync_action(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitSync_action) {
             listener.exitSync_action(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitSync_action) {
            return visitor.visitSync_action(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Async_actionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public domain(): DomainContext {
        return this.getRuleContext(0, DomainContext)!;
    }
    public quoted_event(): Quoted_eventContext {
        return this.getRuleContext(0, Quoted_eventContext)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_async_action;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterAsync_action) {
             listener.enterAsync_action(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitAsync_action) {
             listener.exitAsync_action(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitAsync_action) {
            return visitor.visitAsync_action(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Internal_actionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public domain(): DomainContext {
        return this.getRuleContext(0, DomainContext)!;
    }
    public verb(): VerbContext {
        return this.getRuleContext(0, VerbContext)!;
    }
    public phrase(): PhraseContext {
        return this.getRuleContext(0, PhraseContext)!;
    }
    public connector_word(): Connector_wordContext | null {
        return this.getRuleContext(0, Connector_wordContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_internal_action;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterInternal_action) {
             listener.enterInternal_action(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitInternal_action) {
             listener.exitInternal_action(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitInternal_action) {
            return visitor.visitInternal_action(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PhraseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.IDENTIFIER);
    	} else {
    		return this.getToken(ArchDSLParser.IDENTIFIER, i);
    	}
    }
    public STRING(): antlr.TerminalNode[];
    public STRING(i: number): antlr.TerminalNode | null;
    public STRING(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ArchDSLParser.STRING);
    	} else {
    		return this.getToken(ArchDSLParser.STRING, i);
    	}
    }
    public connector_word(): Connector_wordContext[];
    public connector_word(i: number): Connector_wordContext | null;
    public connector_word(i?: number): Connector_wordContext[] | Connector_wordContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Connector_wordContext);
        }

        return this.getRuleContext(i, Connector_wordContext);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_phrase;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterPhrase) {
             listener.enterPhrase(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitPhrase) {
             listener.exitPhrase(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitPhrase) {
            return visitor.visitPhrase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Connector_wordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_connector_word;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterConnector_word) {
             listener.enterConnector_word(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitConnector_word) {
             listener.exitConnector_word(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitConnector_word) {
            return visitor.visitConnector_word(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ActorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_actor;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterActor) {
             listener.enterActor(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitActor) {
             listener.exitActor(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitActor) {
            return visitor.visitActor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DomainContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_domain;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterDomain) {
             listener.enterDomain(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitDomain) {
             listener.exitDomain(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitDomain) {
            return visitor.visitDomain(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VerbContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_verb;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterVerb) {
             listener.enterVerb(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitVerb) {
             listener.exitVerb(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitVerb) {
            return visitor.visitVerb(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Quoted_eventContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_quoted_event;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterQuoted_event) {
             listener.enterQuoted_event(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitQuoted_event) {
             listener.exitQuoted_event(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitQuoted_event) {
            return visitor.visitQuoted_event(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(ArchDSLParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return ArchDSLParser.RULE_string;
    }
    public override enterRule(listener: ArchDSLListener): void {
        if(listener.enterString) {
             listener.enterString(this);
        }
    }
    public override exitRule(listener: ArchDSLListener): void {
        if(listener.exitString) {
             listener.exitString(this);
        }
    }
    public override accept<Result>(visitor: ArchDSLVisitor<Result>): Result | null {
        if (visitor.visitString) {
            return visitor.visitString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
