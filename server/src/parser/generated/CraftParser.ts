
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { CraftListener } from "./CraftListener.js";
import { CraftVisitor } from "./CraftVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class CraftParser extends antlr.Parser {
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
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly T__41 = 42;
    public static readonly T__42 = 43;
    public static readonly T__43 = 44;
    public static readonly DOMAINS = 45;
    public static readonly DATA_STORES = 46;
    public static readonly LANGUAGE = 47;
    public static readonly DEPLOYMENT = 48;
    public static readonly PERCENTAGE = 49;
    public static readonly IDENTIFIER = 50;
    public static readonly STRING = 51;
    public static readonly NEWLINE = 52;
    public static readonly WS = 53;
    public static readonly COMMENT = 54;
    public static readonly RULE_dsl = 0;
    public static readonly RULE_domain_def = 1;
    public static readonly RULE_domains_def = 2;
    public static readonly RULE_domain_block_list = 3;
    public static readonly RULE_domain_block = 4;
    public static readonly RULE_domain_name = 5;
    public static readonly RULE_subdomain_list = 6;
    public static readonly RULE_subdomain = 7;
    public static readonly RULE_actor_def = 8;
    public static readonly RULE_actors_def = 9;
    public static readonly RULE_actor_definition_list = 10;
    public static readonly RULE_actor_definition = 11;
    public static readonly RULE_actorType = 12;
    public static readonly RULE_actor_name = 13;
    public static readonly RULE_arch = 14;
    public static readonly RULE_arch_name = 15;
    public static readonly RULE_arch_sections = 16;
    public static readonly RULE_presentation_section = 17;
    public static readonly RULE_gateway_section = 18;
    public static readonly RULE_arch_component_list = 19;
    public static readonly RULE_arch_component = 20;
    public static readonly RULE_component_flow = 21;
    public static readonly RULE_component_chain = 22;
    public static readonly RULE_component_with_modifiers = 23;
    public static readonly RULE_component_name = 24;
    public static readonly RULE_component_modifiers = 25;
    public static readonly RULE_modifier_list = 26;
    public static readonly RULE_modifier = 27;
    public static readonly RULE_simple_component = 28;
    public static readonly RULE_exposure = 29;
    public static readonly RULE_exposure_name = 30;
    public static readonly RULE_exposure_properties = 31;
    public static readonly RULE_exposure_property = 32;
    public static readonly RULE_target_list = 33;
    public static readonly RULE_target = 34;
    public static readonly RULE_gateway_list = 35;
    public static readonly RULE_gateway = 36;
    public static readonly RULE_service_def = 37;
    public static readonly RULE_services_def = 38;
    public static readonly RULE_service_block_list = 39;
    public static readonly RULE_service_block = 40;
    public static readonly RULE_service_name = 41;
    public static readonly RULE_service_properties = 42;
    public static readonly RULE_service_property = 43;
    public static readonly RULE_deployment_strategy = 44;
    public static readonly RULE_deployment_type = 45;
    public static readonly RULE_deployment_config = 46;
    public static readonly RULE_deployment_rule = 47;
    public static readonly RULE_deployment_target = 48;
    public static readonly RULE_domain_list = 49;
    public static readonly RULE_domain_ref = 50;
    public static readonly RULE_datastore_list = 51;
    public static readonly RULE_datastore = 52;
    public static readonly RULE_use_case = 53;
    public static readonly RULE_scenario = 54;
    public static readonly RULE_trigger = 55;
    public static readonly RULE_external_trigger = 56;
    public static readonly RULE_action_block = 57;
    public static readonly RULE_action = 58;
    public static readonly RULE_sync_action = 59;
    public static readonly RULE_async_action = 60;
    public static readonly RULE_internal_action = 61;
    public static readonly RULE_return_action = 62;
    public static readonly RULE_phrase = 63;
    public static readonly RULE_phrase_word = 64;
    public static readonly RULE_connector_word = 65;
    public static readonly RULE_actor = 66;
    public static readonly RULE_domain = 67;
    public static readonly RULE_verb = 68;
    public static readonly RULE_identifier = 69;
    public static readonly RULE_quoted_event = 70;
    public static readonly RULE_string = 71;

    public static readonly literalNames = [
        null, "'domain'", "'{'", "'}'", "'actor'", "'actors'", "'user'", 
        "'system'", "'service'", "'arch'", "'presentation'", "':'", "'gateway'", 
        "'>'", "'['", "']'", "','", "'exposure'", "'to'", "'of'", "'through'", 
        "'services'", "'('", "')'", "'canary'", "'blue_green'", "'rolling'", 
        "'->'", "'use_case'", "'when'", "'listens'", "'asks'", "'notifies'", 
        "'returns'", "'a'", "'an'", "'the'", "'as'", "'from'", "'in'", "'on'", 
        "'at'", "'for'", "'with'", "'by'", "'domains'", "'data-stores'", 
        "'language'", "'deployment'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "DOMAINS", "DATA_STORES", "LANGUAGE", "DEPLOYMENT", "PERCENTAGE", 
        "IDENTIFIER", "STRING", "NEWLINE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "dsl", "domain_def", "domains_def", "domain_block_list", "domain_block", 
        "domain_name", "subdomain_list", "subdomain", "actor_def", "actors_def", 
        "actor_definition_list", "actor_definition", "actorType", "actor_name", 
        "arch", "arch_name", "arch_sections", "presentation_section", "gateway_section", 
        "arch_component_list", "arch_component", "component_flow", "component_chain", 
        "component_with_modifiers", "component_name", "component_modifiers", 
        "modifier_list", "modifier", "simple_component", "exposure", "exposure_name", 
        "exposure_properties", "exposure_property", "target_list", "target", 
        "gateway_list", "gateway", "service_def", "services_def", "service_block_list", 
        "service_block", "service_name", "service_properties", "service_property", 
        "deployment_strategy", "deployment_type", "deployment_config", "deployment_rule", 
        "deployment_target", "domain_list", "domain_ref", "datastore_list", 
        "datastore", "use_case", "scenario", "trigger", "external_trigger", 
        "action_block", "action", "sync_action", "async_action", "internal_action", 
        "return_action", "phrase", "phrase_word", "connector_word", "actor", 
        "domain", "verb", "identifier", "quoted_event", "string",
    ];

    public get grammarFileName(): string { return "Craft.g4"; }
    public get literalNames(): (string | null)[] { return CraftParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return CraftParser.symbolicNames; }
    public get ruleNames(): string[] { return CraftParser.ruleNames; }
    public get serializedATN(): number[] { return CraftParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, CraftParser._ATN, CraftParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public dsl(): DslContext {
        let localContext = new DslContext(this.context, this.state);
        this.enterRule(localContext, 0, CraftParser.RULE_dsl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 144;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 270664498) !== 0) || _la === 45) {
                {
                this.state = 159;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case CraftParser.T__8:
                    {
                    this.state = 150;
                    this.arch();
                    }
                    break;
                case CraftParser.T__20:
                    {
                    this.state = 151;
                    this.services_def();
                    }
                    break;
                case CraftParser.T__7:
                    {
                    this.state = 152;
                    this.service_def();
                    }
                    break;
                case CraftParser.T__16:
                    {
                    this.state = 153;
                    this.exposure();
                    }
                    break;
                case CraftParser.T__27:
                    {
                    this.state = 154;
                    this.use_case();
                    }
                    break;
                case CraftParser.T__0:
                    {
                    this.state = 155;
                    this.domain_def();
                    }
                    break;
                case CraftParser.DOMAINS:
                    {
                    this.state = 156;
                    this.domains_def();
                    }
                    break;
                case CraftParser.T__4:
                    {
                    this.state = 157;
                    this.actors_def();
                    }
                    break;
                case CraftParser.T__3:
                    {
                    this.state = 158;
                    this.actor_def();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 163;
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
        this.enterRule(localContext, 2, CraftParser.RULE_domain_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.match(CraftParser.T__0);
            this.state = 165;
            this.domain_name();
            this.state = 166;
            this.match(CraftParser.T__1);
            this.state = 170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 167;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 172;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 173;
            this.subdomain_list();
            this.state = 174;
            this.match(CraftParser.T__2);
            this.state = 178;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 175;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 180;
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
        this.enterRule(localContext, 4, CraftParser.RULE_domains_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 181;
            this.match(CraftParser.DOMAINS);
            this.state = 182;
            this.match(CraftParser.T__1);
            this.state = 186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 183;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 189;
            this.domain_block_list();
            this.state = 190;
            this.match(CraftParser.T__2);
            this.state = 194;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 191;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 196;
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
        this.enterRule(localContext, 6, CraftParser.RULE_domain_block_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 197;
            this.domain_block();
            this.state = 206;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 199;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 198;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 201;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 203;
                    this.domain_block();
                    }
                    }
                }
                this.state = 208;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 209;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 214;
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
        this.enterRule(localContext, 8, CraftParser.RULE_domain_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 215;
            this.domain_name();
            this.state = 216;
            this.match(CraftParser.T__1);
            this.state = 220;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 217;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 222;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 223;
            this.subdomain_list();
            this.state = 224;
            this.match(CraftParser.T__2);
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
        this.enterRule(localContext, 10, CraftParser.RULE_domain_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.identifier();
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
        this.enterRule(localContext, 12, CraftParser.RULE_subdomain_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 228;
            this.subdomain();
            this.state = 237;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 230;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 229;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 232;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 234;
                    this.subdomain();
                    }
                    }
                }
                this.state = 239;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            }
            this.state = 243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 240;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 245;
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
        this.enterRule(localContext, 14, CraftParser.RULE_subdomain);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 246;
            this.identifier();
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
    public actor_def(): Actor_defContext {
        let localContext = new Actor_defContext(this.context, this.state);
        this.enterRule(localContext, 16, CraftParser.RULE_actor_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 248;
            this.match(CraftParser.T__3);
            this.state = 249;
            this.actorType();
            this.state = 250;
            this.actor_name();
            this.state = 254;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 251;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 256;
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
    public actors_def(): Actors_defContext {
        let localContext = new Actors_defContext(this.context, this.state);
        this.enterRule(localContext, 18, CraftParser.RULE_actors_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 257;
            this.match(CraftParser.T__4);
            this.state = 258;
            this.match(CraftParser.T__1);
            this.state = 262;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 259;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 264;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 265;
            this.actor_definition_list();
            this.state = 266;
            this.match(CraftParser.T__2);
            this.state = 270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 267;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 272;
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
    public actor_definition_list(): Actor_definition_listContext {
        let localContext = new Actor_definition_listContext(this.context, this.state);
        this.enterRule(localContext, 20, CraftParser.RULE_actor_definition_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 273;
            this.actor_definition();
            this.state = 282;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 275;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 274;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 277;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 279;
                    this.actor_definition();
                    }
                    }
                }
                this.state = 284;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            }
            this.state = 288;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 285;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 290;
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
    public actor_definition(): Actor_definitionContext {
        let localContext = new Actor_definitionContext(this.context, this.state);
        this.enterRule(localContext, 22, CraftParser.RULE_actor_definition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 291;
            this.actorType();
            this.state = 292;
            this.actor_name();
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
    public actorType(): ActorTypeContext {
        let localContext = new ActorTypeContext(this.context, this.state);
        this.enterRule(localContext, 24, CraftParser.RULE_actorType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 294;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0))) {
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
    public actor_name(): Actor_nameContext {
        let localContext = new Actor_nameContext(this.context, this.state);
        this.enterRule(localContext, 26, CraftParser.RULE_actor_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
            this.identifier();
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
        this.enterRule(localContext, 28, CraftParser.RULE_arch);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 298;
            this.match(CraftParser.T__8);
            this.state = 300;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3342735346) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 393215) !== 0)) {
                {
                this.state = 299;
                this.arch_name();
                }
            }

            this.state = 302;
            this.match(CraftParser.T__1);
            this.state = 306;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 303;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 308;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 309;
            this.arch_sections();
            this.state = 310;
            this.match(CraftParser.T__2);
            this.state = 314;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 311;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 316;
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
        this.enterRule(localContext, 30, CraftParser.RULE_arch_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 317;
            this.identifier();
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
        this.enterRule(localContext, 32, CraftParser.RULE_arch_sections);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 321;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 321;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case CraftParser.T__9:
                    {
                    this.state = 319;
                    this.presentation_section();
                    }
                    break;
                case CraftParser.T__11:
                    {
                    this.state = 320;
                    this.gateway_section();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 323;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 10 || _la === 12);
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
        this.enterRule(localContext, 34, CraftParser.RULE_presentation_section);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 325;
            this.match(CraftParser.T__9);
            this.state = 326;
            this.match(CraftParser.T__10);
            this.state = 330;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 327;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 332;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 333;
            this.arch_component_list();
            this.state = 335;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 334;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 337;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 52);
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
        this.enterRule(localContext, 36, CraftParser.RULE_gateway_section);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 339;
            this.match(CraftParser.T__11);
            this.state = 340;
            this.match(CraftParser.T__10);
            this.state = 344;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 341;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 346;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 347;
            this.arch_component_list();
            this.state = 349;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 348;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 52);
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
        this.enterRule(localContext, 38, CraftParser.RULE_arch_component_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 353;
            this.arch_component();
            this.state = 362;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 355;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 354;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 357;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 359;
                    this.arch_component();
                    }
                    }
                }
                this.state = 364;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
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
        this.enterRule(localContext, 40, CraftParser.RULE_arch_component);
        try {
            this.state = 367;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 365;
                this.simple_component();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 366;
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
        this.enterRule(localContext, 42, CraftParser.RULE_component_flow);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 369;
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
        this.enterRule(localContext, 44, CraftParser.RULE_component_chain);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 371;
            this.component_with_modifiers();
            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 372;
                this.match(CraftParser.T__12);
                this.state = 373;
                this.component_with_modifiers();
                }
                }
                this.state = 378;
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
        this.enterRule(localContext, 46, CraftParser.RULE_component_with_modifiers);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 379;
            this.component_name();
            this.state = 381;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 380;
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
        this.enterRule(localContext, 48, CraftParser.RULE_component_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 383;
            this.identifier();
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
        this.enterRule(localContext, 50, CraftParser.RULE_component_modifiers);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 385;
            this.match(CraftParser.T__13);
            this.state = 386;
            this.modifier_list();
            this.state = 387;
            this.match(CraftParser.T__14);
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
        this.enterRule(localContext, 52, CraftParser.RULE_modifier_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 389;
            this.modifier();
            this.state = 394;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 16) {
                {
                {
                this.state = 390;
                this.match(CraftParser.T__15);
                this.state = 391;
                this.modifier();
                }
                }
                this.state = 396;
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
        this.enterRule(localContext, 54, CraftParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 397;
            this.identifier();
            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 398;
                this.match(CraftParser.T__10);
                this.state = 399;
                this.identifier();
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
        this.enterRule(localContext, 56, CraftParser.RULE_simple_component);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 402;
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
        this.enterRule(localContext, 58, CraftParser.RULE_exposure);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 404;
            this.match(CraftParser.T__16);
            this.state = 405;
            this.exposure_name();
            this.state = 406;
            this.match(CraftParser.T__1);
            this.state = 408;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 407;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 410;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 52);
            this.state = 412;
            this.exposure_properties();
            this.state = 413;
            this.match(CraftParser.T__2);
            this.state = 417;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 414;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 419;
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
        this.enterRule(localContext, 60, CraftParser.RULE_exposure_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 420;
            this.identifier();
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
        this.enterRule(localContext, 62, CraftParser.RULE_exposure_properties);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 422;
            this.exposure_property();
            this.state = 431;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 424;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 423;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 426;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 428;
                    this.exposure_property();
                    }
                    }
                }
                this.state = 433;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
            }
            this.state = 435;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 434;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 437;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 52);
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
        this.enterRule(localContext, 64, CraftParser.RULE_exposure_property);
        try {
            this.state = 448;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CraftParser.T__17:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 439;
                this.match(CraftParser.T__17);
                this.state = 440;
                this.match(CraftParser.T__10);
                this.state = 441;
                this.target_list();
                }
                break;
            case CraftParser.T__18:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 442;
                this.match(CraftParser.T__18);
                this.state = 443;
                this.match(CraftParser.T__10);
                this.state = 444;
                this.domain_list();
                }
                break;
            case CraftParser.T__19:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 445;
                this.match(CraftParser.T__19);
                this.state = 446;
                this.match(CraftParser.T__10);
                this.state = 447;
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
        this.enterRule(localContext, 66, CraftParser.RULE_target_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 450;
            this.target();
            this.state = 455;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 451;
                    this.match(CraftParser.T__15);
                    this.state = 452;
                    this.target();
                    }
                    }
                }
                this.state = 457;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            }
            this.state = 459;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 458;
                this.match(CraftParser.T__15);
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
        this.enterRule(localContext, 68, CraftParser.RULE_target);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 461;
            this.identifier();
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
        this.enterRule(localContext, 70, CraftParser.RULE_gateway_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 463;
            this.gateway();
            this.state = 468;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 464;
                    this.match(CraftParser.T__15);
                    this.state = 465;
                    this.gateway();
                    }
                    }
                }
                this.state = 470;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            }
            this.state = 472;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 471;
                this.match(CraftParser.T__15);
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
        this.enterRule(localContext, 72, CraftParser.RULE_gateway);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 474;
            this.identifier();
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
        this.enterRule(localContext, 74, CraftParser.RULE_service_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 476;
            this.match(CraftParser.T__7);
            this.state = 477;
            this.service_name();
            this.state = 478;
            this.match(CraftParser.T__1);
            this.state = 482;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 479;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 484;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 485;
            this.service_properties();
            this.state = 486;
            this.match(CraftParser.T__2);
            this.state = 490;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 487;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 492;
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
        this.enterRule(localContext, 76, CraftParser.RULE_services_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 493;
            this.match(CraftParser.T__20);
            this.state = 494;
            this.match(CraftParser.T__1);
            this.state = 498;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 495;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 500;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 502;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3342735346) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 917503) !== 0)) {
                {
                this.state = 501;
                this.service_block_list();
                }
            }

            this.state = 504;
            this.match(CraftParser.T__2);
            this.state = 508;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 505;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 510;
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
        this.enterRule(localContext, 78, CraftParser.RULE_service_block_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 511;
            this.service_block();
            this.state = 520;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 52, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 513;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 512;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 515;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 517;
                    this.service_block();
                    }
                    }
                }
                this.state = 522;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 52, this.context);
            }
            this.state = 526;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 523;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 528;
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
        this.enterRule(localContext, 80, CraftParser.RULE_service_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 529;
            this.service_name();
            this.state = 530;
            this.match(CraftParser.T__1);
            this.state = 534;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 531;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 536;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 537;
            this.service_properties();
            this.state = 538;
            this.match(CraftParser.T__2);
            this.state = 542;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 539;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                }
                this.state = 544;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
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
        this.enterRule(localContext, 82, CraftParser.RULE_service_name);
        try {
            this.state = 547;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CraftParser.T__0:
            case CraftParser.T__3:
            case CraftParser.T__4:
            case CraftParser.T__5:
            case CraftParser.T__6:
            case CraftParser.T__7:
            case CraftParser.T__8:
            case CraftParser.T__9:
            case CraftParser.T__11:
            case CraftParser.T__16:
            case CraftParser.T__17:
            case CraftParser.T__18:
            case CraftParser.T__19:
            case CraftParser.T__20:
            case CraftParser.T__23:
            case CraftParser.T__24:
            case CraftParser.T__25:
            case CraftParser.T__29:
            case CraftParser.T__30:
            case CraftParser.T__31:
            case CraftParser.T__32:
            case CraftParser.T__33:
            case CraftParser.T__34:
            case CraftParser.T__35:
            case CraftParser.T__36:
            case CraftParser.T__37:
            case CraftParser.T__38:
            case CraftParser.T__39:
            case CraftParser.T__40:
            case CraftParser.T__41:
            case CraftParser.T__42:
            case CraftParser.T__43:
            case CraftParser.DOMAINS:
            case CraftParser.DATA_STORES:
            case CraftParser.LANGUAGE:
            case CraftParser.DEPLOYMENT:
            case CraftParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 545;
                this.identifier();
                }
                break;
            case CraftParser.STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 546;
                this.match(CraftParser.STRING);
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
    public service_properties(): Service_propertiesContext {
        let localContext = new Service_propertiesContext(this.context, this.state);
        this.enterRule(localContext, 84, CraftParser.RULE_service_properties);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 549;
            this.service_property();
            this.state = 558;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 551;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 550;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 553;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 555;
                    this.service_property();
                    }
                    }
                }
                this.state = 560;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            }
            this.state = 564;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 561;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 566;
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
        this.enterRule(localContext, 86, CraftParser.RULE_service_property);
        try {
            this.state = 579;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CraftParser.DOMAINS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 567;
                this.match(CraftParser.DOMAINS);
                this.state = 568;
                this.match(CraftParser.T__10);
                this.state = 569;
                this.domain_list();
                }
                break;
            case CraftParser.DATA_STORES:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 570;
                this.match(CraftParser.DATA_STORES);
                this.state = 571;
                this.match(CraftParser.T__10);
                this.state = 572;
                this.datastore_list();
                }
                break;
            case CraftParser.LANGUAGE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 573;
                this.match(CraftParser.LANGUAGE);
                this.state = 574;
                this.match(CraftParser.T__10);
                this.state = 575;
                this.identifier();
                }
                break;
            case CraftParser.DEPLOYMENT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 576;
                this.match(CraftParser.DEPLOYMENT);
                this.state = 577;
                this.match(CraftParser.T__10);
                this.state = 578;
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
        this.enterRule(localContext, 88, CraftParser.RULE_deployment_strategy);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 581;
            this.deployment_type();
            this.state = 586;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 582;
                this.match(CraftParser.T__21);
                this.state = 583;
                this.deployment_config();
                this.state = 584;
                this.match(CraftParser.T__22);
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
        this.enterRule(localContext, 90, CraftParser.RULE_deployment_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 588;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
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
        this.enterRule(localContext, 92, CraftParser.RULE_deployment_config);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 590;
            this.deployment_rule();
            this.state = 595;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 16) {
                {
                {
                this.state = 591;
                this.match(CraftParser.T__15);
                this.state = 592;
                this.deployment_rule();
                }
                }
                this.state = 597;
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
        this.enterRule(localContext, 94, CraftParser.RULE_deployment_rule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 598;
            this.match(CraftParser.PERCENTAGE);
            this.state = 599;
            this.match(CraftParser.T__26);
            this.state = 600;
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
        this.enterRule(localContext, 96, CraftParser.RULE_deployment_target);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 602;
            this.identifier();
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
        this.enterRule(localContext, 98, CraftParser.RULE_domain_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 604;
            this.domain_ref();
            this.state = 609;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 605;
                    this.match(CraftParser.T__15);
                    this.state = 606;
                    this.domain_ref();
                    }
                    }
                }
                this.state = 611;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
            }
            this.state = 613;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 612;
                this.match(CraftParser.T__15);
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
        this.enterRule(localContext, 100, CraftParser.RULE_domain_ref);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 615;
            this.identifier();
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
        this.enterRule(localContext, 102, CraftParser.RULE_datastore_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 617;
            this.datastore();
            this.state = 622;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 618;
                    this.match(CraftParser.T__15);
                    this.state = 619;
                    this.datastore();
                    }
                    }
                }
                this.state = 624;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
            }
            this.state = 626;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 625;
                this.match(CraftParser.T__15);
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
        this.enterRule(localContext, 104, CraftParser.RULE_datastore);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 628;
            this.identifier();
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
        this.enterRule(localContext, 106, CraftParser.RULE_use_case);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 630;
            this.match(CraftParser.T__27);
            this.state = 631;
            this.string_();
            this.state = 632;
            this.match(CraftParser.T__1);
            this.state = 636;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 633;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 638;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 642;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 29) {
                {
                {
                this.state = 639;
                this.scenario();
                }
                }
                this.state = 644;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 645;
            this.match(CraftParser.T__2);
            this.state = 649;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 646;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 651;
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
        this.enterRule(localContext, 108, CraftParser.RULE_scenario);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 652;
            this.trigger();
            this.state = 653;
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
        this.enterRule(localContext, 110, CraftParser.RULE_trigger);
        let _la: number;
        try {
            this.state = 678;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 655;
                this.match(CraftParser.T__28);
                this.state = 656;
                this.domain();
                this.state = 657;
                this.match(CraftParser.T__29);
                this.state = 658;
                this.quoted_event();
                this.state = 660;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 659;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 662;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 664;
                this.match(CraftParser.T__28);
                this.state = 665;
                this.external_trigger();
                this.state = 667;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 666;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 669;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 671;
                this.match(CraftParser.T__28);
                this.state = 672;
                this.quoted_event();
                this.state = 674;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 673;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 676;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
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
        this.enterRule(localContext, 112, CraftParser.RULE_external_trigger);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 680;
            this.actor();
            this.state = 681;
            this.verb();
            this.state = 683;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                {
                this.state = 682;
                this.connector_word();
                }
                break;
            }
            this.state = 686;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4148041714) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 917503) !== 0)) {
                {
                this.state = 685;
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
        this.enterRule(localContext, 114, CraftParser.RULE_action_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 691;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3342735346) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 393215) !== 0)) {
                {
                {
                this.state = 688;
                this.action();
                }
                }
                this.state = 693;
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
        this.enterRule(localContext, 116, CraftParser.RULE_action);
        let _la: number;
        try {
            this.state = 718;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 694;
                this.async_action();
                this.state = 696;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 695;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 698;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 700;
                this.sync_action();
                this.state = 702;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 701;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 704;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 706;
                this.return_action();
                this.state = 708;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 707;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 710;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 712;
                this.internal_action();
                this.state = 714;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 713;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 716;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
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
        this.enterRule(localContext, 118, CraftParser.RULE_sync_action);
        try {
            this.state = 731;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 720;
                this.domain();
                this.state = 721;
                this.match(CraftParser.T__30);
                this.state = 722;
                this.domain();
                this.state = 723;
                this.connector_word();
                this.state = 724;
                this.phrase();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 726;
                this.domain();
                this.state = 727;
                this.match(CraftParser.T__30);
                this.state = 728;
                this.domain();
                this.state = 729;
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
        this.enterRule(localContext, 120, CraftParser.RULE_async_action);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 733;
            this.domain();
            this.state = 734;
            this.match(CraftParser.T__31);
            this.state = 735;
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
        this.enterRule(localContext, 122, CraftParser.RULE_internal_action);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 737;
            this.domain();
            this.state = 738;
            this.verb();
            this.state = 740;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context) ) {
            case 1:
                {
                this.state = 739;
                this.connector_word();
                }
                break;
            }
            this.state = 742;
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
    public return_action(): Return_actionContext {
        let localContext = new Return_actionContext(this.context, this.state);
        this.enterRule(localContext, 124, CraftParser.RULE_return_action);
        try {
            this.state = 760;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 744;
                this.domain();
                this.state = 745;
                this.match(CraftParser.T__32);
                this.state = 746;
                this.match(CraftParser.T__17);
                this.state = 747;
                this.domain();
                this.state = 749;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
                case 1:
                    {
                    this.state = 748;
                    this.connector_word();
                    }
                    break;
                }
                this.state = 751;
                this.phrase();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 753;
                this.domain();
                this.state = 754;
                this.match(CraftParser.T__32);
                this.state = 756;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
                case 1:
                    {
                    this.state = 755;
                    this.connector_word();
                    }
                    break;
                }
                this.state = 758;
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
    public phrase(): PhraseContext {
        let localContext = new PhraseContext(this.context, this.state);
        this.enterRule(localContext, 126, CraftParser.RULE_phrase);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 764;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 764;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case CraftParser.T__0:
                case CraftParser.T__3:
                case CraftParser.T__4:
                case CraftParser.T__5:
                case CraftParser.T__6:
                case CraftParser.T__7:
                case CraftParser.T__8:
                case CraftParser.T__9:
                case CraftParser.T__11:
                case CraftParser.T__16:
                case CraftParser.T__17:
                case CraftParser.T__18:
                case CraftParser.T__19:
                case CraftParser.T__20:
                case CraftParser.T__23:
                case CraftParser.T__24:
                case CraftParser.T__25:
                case CraftParser.T__27:
                case CraftParser.T__28:
                case CraftParser.T__29:
                case CraftParser.T__30:
                case CraftParser.T__31:
                case CraftParser.T__32:
                case CraftParser.T__33:
                case CraftParser.T__34:
                case CraftParser.T__35:
                case CraftParser.T__36:
                case CraftParser.T__37:
                case CraftParser.T__38:
                case CraftParser.T__39:
                case CraftParser.T__40:
                case CraftParser.T__41:
                case CraftParser.T__42:
                case CraftParser.T__43:
                case CraftParser.DOMAINS:
                case CraftParser.DATA_STORES:
                case CraftParser.LANGUAGE:
                case CraftParser.DEPLOYMENT:
                case CraftParser.IDENTIFIER:
                    {
                    this.state = 762;
                    this.phrase_word();
                    }
                    break;
                case CraftParser.STRING:
                    {
                    this.state = 763;
                    this.match(CraftParser.STRING);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 766;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4148041714) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 917503) !== 0));
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
    public phrase_word(): Phrase_wordContext {
        let localContext = new Phrase_wordContext(this.context, this.state);
        this.enterRule(localContext, 128, CraftParser.RULE_phrase_word);
        try {
            this.state = 772;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 768;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 769;
                this.connector_word();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 770;
                this.match(CraftParser.T__28);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 771;
                this.match(CraftParser.T__27);
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
    public connector_word(): Connector_wordContext {
        let localContext = new Connector_wordContext(this.context, this.state);
        this.enterRule(localContext, 130, CraftParser.RULE_connector_word);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 774;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & 134152193) !== 0))) {
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
        this.enterRule(localContext, 132, CraftParser.RULE_actor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 776;
            this.identifier();
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
        this.enterRule(localContext, 134, CraftParser.RULE_domain);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 778;
            this.identifier();
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
        this.enterRule(localContext, 136, CraftParser.RULE_verb);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 780;
            this.identifier();
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
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 138, CraftParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 782;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3342735346) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 393215) !== 0))) {
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
    public quoted_event(): Quoted_eventContext {
        let localContext = new Quoted_eventContext(this.context, this.state);
        this.enterRule(localContext, 140, CraftParser.RULE_quoted_event);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 784;
            this.match(CraftParser.STRING);
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
        this.enterRule(localContext, 142, CraftParser.RULE_string);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 786;
            this.match(CraftParser.STRING);
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
        4,1,54,789,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
        2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,
        7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,
        2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,1,0,
        5,0,146,8,0,10,0,12,0,149,9,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        0,5,0,160,8,0,10,0,12,0,163,9,0,1,1,1,1,1,1,1,1,5,1,169,8,1,10,1,
        12,1,172,9,1,1,1,1,1,1,1,5,1,177,8,1,10,1,12,1,180,9,1,1,2,1,2,1,
        2,5,2,185,8,2,10,2,12,2,188,9,2,1,2,1,2,1,2,5,2,193,8,2,10,2,12,
        2,196,9,2,1,3,1,3,4,3,200,8,3,11,3,12,3,201,1,3,5,3,205,8,3,10,3,
        12,3,208,9,3,1,3,5,3,211,8,3,10,3,12,3,214,9,3,1,4,1,4,1,4,5,4,219,
        8,4,10,4,12,4,222,9,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,4,6,231,8,6,11,
        6,12,6,232,1,6,5,6,236,8,6,10,6,12,6,239,9,6,1,6,5,6,242,8,6,10,
        6,12,6,245,9,6,1,7,1,7,1,8,1,8,1,8,1,8,5,8,253,8,8,10,8,12,8,256,
        9,8,1,9,1,9,1,9,5,9,261,8,9,10,9,12,9,264,9,9,1,9,1,9,1,9,5,9,269,
        8,9,10,9,12,9,272,9,9,1,10,1,10,4,10,276,8,10,11,10,12,10,277,1,
        10,5,10,281,8,10,10,10,12,10,284,9,10,1,10,5,10,287,8,10,10,10,12,
        10,290,9,10,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,3,14,301,
        8,14,1,14,1,14,5,14,305,8,14,10,14,12,14,308,9,14,1,14,1,14,1,14,
        5,14,313,8,14,10,14,12,14,316,9,14,1,15,1,15,1,16,1,16,4,16,322,
        8,16,11,16,12,16,323,1,17,1,17,1,17,5,17,329,8,17,10,17,12,17,332,
        9,17,1,17,1,17,4,17,336,8,17,11,17,12,17,337,1,18,1,18,1,18,5,18,
        343,8,18,10,18,12,18,346,9,18,1,18,1,18,4,18,350,8,18,11,18,12,18,
        351,1,19,1,19,4,19,356,8,19,11,19,12,19,357,1,19,5,19,361,8,19,10,
        19,12,19,364,9,19,1,20,1,20,3,20,368,8,20,1,21,1,21,1,22,1,22,1,
        22,5,22,375,8,22,10,22,12,22,378,9,22,1,23,1,23,3,23,382,8,23,1,
        24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,5,26,393,8,26,10,26,12,
        26,396,9,26,1,27,1,27,1,27,3,27,401,8,27,1,28,1,28,1,29,1,29,1,29,
        1,29,4,29,409,8,29,11,29,12,29,410,1,29,1,29,1,29,5,29,416,8,29,
        10,29,12,29,419,9,29,1,30,1,30,1,31,1,31,4,31,425,8,31,11,31,12,
        31,426,1,31,5,31,430,8,31,10,31,12,31,433,9,31,1,31,4,31,436,8,31,
        11,31,12,31,437,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,
        449,8,32,1,33,1,33,1,33,5,33,454,8,33,10,33,12,33,457,9,33,1,33,
        3,33,460,8,33,1,34,1,34,1,35,1,35,1,35,5,35,467,8,35,10,35,12,35,
        470,9,35,1,35,3,35,473,8,35,1,36,1,36,1,37,1,37,1,37,1,37,5,37,481,
        8,37,10,37,12,37,484,9,37,1,37,1,37,1,37,5,37,489,8,37,10,37,12,
        37,492,9,37,1,38,1,38,1,38,5,38,497,8,38,10,38,12,38,500,9,38,1,
        38,3,38,503,8,38,1,38,1,38,5,38,507,8,38,10,38,12,38,510,9,38,1,
        39,1,39,4,39,514,8,39,11,39,12,39,515,1,39,5,39,519,8,39,10,39,12,
        39,522,9,39,1,39,5,39,525,8,39,10,39,12,39,528,9,39,1,40,1,40,1,
        40,5,40,533,8,40,10,40,12,40,536,9,40,1,40,1,40,1,40,5,40,541,8,
        40,10,40,12,40,544,9,40,1,41,1,41,3,41,548,8,41,1,42,1,42,4,42,552,
        8,42,11,42,12,42,553,1,42,5,42,557,8,42,10,42,12,42,560,9,42,1,42,
        5,42,563,8,42,10,42,12,42,566,9,42,1,43,1,43,1,43,1,43,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,1,43,3,43,580,8,43,1,44,1,44,1,44,1,44,
        1,44,3,44,587,8,44,1,45,1,45,1,46,1,46,1,46,5,46,594,8,46,10,46,
        12,46,597,9,46,1,47,1,47,1,47,1,47,1,48,1,48,1,49,1,49,1,49,5,49,
        608,8,49,10,49,12,49,611,9,49,1,49,3,49,614,8,49,1,50,1,50,1,51,
        1,51,1,51,5,51,621,8,51,10,51,12,51,624,9,51,1,51,3,51,627,8,51,
        1,52,1,52,1,53,1,53,1,53,1,53,5,53,635,8,53,10,53,12,53,638,9,53,
        1,53,5,53,641,8,53,10,53,12,53,644,9,53,1,53,1,53,5,53,648,8,53,
        10,53,12,53,651,9,53,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,4,55,
        661,8,55,11,55,12,55,662,1,55,1,55,1,55,4,55,668,8,55,11,55,12,55,
        669,1,55,1,55,1,55,4,55,675,8,55,11,55,12,55,676,3,55,679,8,55,1,
        56,1,56,1,56,3,56,684,8,56,1,56,3,56,687,8,56,1,57,5,57,690,8,57,
        10,57,12,57,693,9,57,1,58,1,58,4,58,697,8,58,11,58,12,58,698,1,58,
        1,58,4,58,703,8,58,11,58,12,58,704,1,58,1,58,4,58,709,8,58,11,58,
        12,58,710,1,58,1,58,4,58,715,8,58,11,58,12,58,716,3,58,719,8,58,
        1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,732,
        8,59,1,60,1,60,1,60,1,60,1,61,1,61,1,61,3,61,741,8,61,1,61,1,61,
        1,62,1,62,1,62,1,62,1,62,3,62,750,8,62,1,62,1,62,1,62,1,62,1,62,
        3,62,757,8,62,1,62,1,62,3,62,761,8,62,1,63,1,63,4,63,765,8,63,11,
        63,12,63,766,1,64,1,64,1,64,1,64,3,64,773,8,64,1,65,1,65,1,66,1,
        66,1,67,1,67,1,68,1,68,1,69,1,69,1,70,1,70,1,71,1,71,1,71,0,0,72,
        0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
        46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,
        90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
        126,128,130,132,134,136,138,140,142,0,4,1,0,6,8,1,0,24,26,2,0,18,
        18,34,44,7,0,1,1,4,10,12,12,17,21,24,26,30,48,50,50,821,0,147,1,
        0,0,0,2,164,1,0,0,0,4,181,1,0,0,0,6,197,1,0,0,0,8,215,1,0,0,0,10,
        226,1,0,0,0,12,228,1,0,0,0,14,246,1,0,0,0,16,248,1,0,0,0,18,257,
        1,0,0,0,20,273,1,0,0,0,22,291,1,0,0,0,24,294,1,0,0,0,26,296,1,0,
        0,0,28,298,1,0,0,0,30,317,1,0,0,0,32,321,1,0,0,0,34,325,1,0,0,0,
        36,339,1,0,0,0,38,353,1,0,0,0,40,367,1,0,0,0,42,369,1,0,0,0,44,371,
        1,0,0,0,46,379,1,0,0,0,48,383,1,0,0,0,50,385,1,0,0,0,52,389,1,0,
        0,0,54,397,1,0,0,0,56,402,1,0,0,0,58,404,1,0,0,0,60,420,1,0,0,0,
        62,422,1,0,0,0,64,448,1,0,0,0,66,450,1,0,0,0,68,461,1,0,0,0,70,463,
        1,0,0,0,72,474,1,0,0,0,74,476,1,0,0,0,76,493,1,0,0,0,78,511,1,0,
        0,0,80,529,1,0,0,0,82,547,1,0,0,0,84,549,1,0,0,0,86,579,1,0,0,0,
        88,581,1,0,0,0,90,588,1,0,0,0,92,590,1,0,0,0,94,598,1,0,0,0,96,602,
        1,0,0,0,98,604,1,0,0,0,100,615,1,0,0,0,102,617,1,0,0,0,104,628,1,
        0,0,0,106,630,1,0,0,0,108,652,1,0,0,0,110,678,1,0,0,0,112,680,1,
        0,0,0,114,691,1,0,0,0,116,718,1,0,0,0,118,731,1,0,0,0,120,733,1,
        0,0,0,122,737,1,0,0,0,124,760,1,0,0,0,126,764,1,0,0,0,128,772,1,
        0,0,0,130,774,1,0,0,0,132,776,1,0,0,0,134,778,1,0,0,0,136,780,1,
        0,0,0,138,782,1,0,0,0,140,784,1,0,0,0,142,786,1,0,0,0,144,146,5,
        52,0,0,145,144,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,
        0,0,0,148,161,1,0,0,0,149,147,1,0,0,0,150,160,3,28,14,0,151,160,
        3,76,38,0,152,160,3,74,37,0,153,160,3,58,29,0,154,160,3,106,53,0,
        155,160,3,2,1,0,156,160,3,4,2,0,157,160,3,18,9,0,158,160,3,16,8,
        0,159,150,1,0,0,0,159,151,1,0,0,0,159,152,1,0,0,0,159,153,1,0,0,
        0,159,154,1,0,0,0,159,155,1,0,0,0,159,156,1,0,0,0,159,157,1,0,0,
        0,159,158,1,0,0,0,160,163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,
        0,162,1,1,0,0,0,163,161,1,0,0,0,164,165,5,1,0,0,165,166,3,10,5,0,
        166,170,5,2,0,0,167,169,5,52,0,0,168,167,1,0,0,0,169,172,1,0,0,0,
        170,168,1,0,0,0,170,171,1,0,0,0,171,173,1,0,0,0,172,170,1,0,0,0,
        173,174,3,12,6,0,174,178,5,3,0,0,175,177,5,52,0,0,176,175,1,0,0,
        0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,3,1,0,0,0,
        180,178,1,0,0,0,181,182,5,45,0,0,182,186,5,2,0,0,183,185,5,52,0,
        0,184,183,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,
        0,187,189,1,0,0,0,188,186,1,0,0,0,189,190,3,6,3,0,190,194,5,3,0,
        0,191,193,5,52,0,0,192,191,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,
        0,194,195,1,0,0,0,195,5,1,0,0,0,196,194,1,0,0,0,197,206,3,8,4,0,
        198,200,5,52,0,0,199,198,1,0,0,0,200,201,1,0,0,0,201,199,1,0,0,0,
        201,202,1,0,0,0,202,203,1,0,0,0,203,205,3,8,4,0,204,199,1,0,0,0,
        205,208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,212,1,0,0,0,
        208,206,1,0,0,0,209,211,5,52,0,0,210,209,1,0,0,0,211,214,1,0,0,0,
        212,210,1,0,0,0,212,213,1,0,0,0,213,7,1,0,0,0,214,212,1,0,0,0,215,
        216,3,10,5,0,216,220,5,2,0,0,217,219,5,52,0,0,218,217,1,0,0,0,219,
        222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,221,223,1,0,0,0,222,
        220,1,0,0,0,223,224,3,12,6,0,224,225,5,3,0,0,225,9,1,0,0,0,226,227,
        3,138,69,0,227,11,1,0,0,0,228,237,3,14,7,0,229,231,5,52,0,0,230,
        229,1,0,0,0,231,232,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,
        234,1,0,0,0,234,236,3,14,7,0,235,230,1,0,0,0,236,239,1,0,0,0,237,
        235,1,0,0,0,237,238,1,0,0,0,238,243,1,0,0,0,239,237,1,0,0,0,240,
        242,5,52,0,0,241,240,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,
        244,1,0,0,0,244,13,1,0,0,0,245,243,1,0,0,0,246,247,3,138,69,0,247,
        15,1,0,0,0,248,249,5,4,0,0,249,250,3,24,12,0,250,254,3,26,13,0,251,
        253,5,52,0,0,252,251,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,
        255,1,0,0,0,255,17,1,0,0,0,256,254,1,0,0,0,257,258,5,5,0,0,258,262,
        5,2,0,0,259,261,5,52,0,0,260,259,1,0,0,0,261,264,1,0,0,0,262,260,
        1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,0,265,266,
        3,20,10,0,266,270,5,3,0,0,267,269,5,52,0,0,268,267,1,0,0,0,269,272,
        1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,19,1,0,0,0,272,270,1,
        0,0,0,273,282,3,22,11,0,274,276,5,52,0,0,275,274,1,0,0,0,276,277,
        1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,281,
        3,22,11,0,280,275,1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,283,
        1,0,0,0,283,288,1,0,0,0,284,282,1,0,0,0,285,287,5,52,0,0,286,285,
        1,0,0,0,287,290,1,0,0,0,288,286,1,0,0,0,288,289,1,0,0,0,289,21,1,
        0,0,0,290,288,1,0,0,0,291,292,3,24,12,0,292,293,3,26,13,0,293,23,
        1,0,0,0,294,295,7,0,0,0,295,25,1,0,0,0,296,297,3,138,69,0,297,27,
        1,0,0,0,298,300,5,9,0,0,299,301,3,30,15,0,300,299,1,0,0,0,300,301,
        1,0,0,0,301,302,1,0,0,0,302,306,5,2,0,0,303,305,5,52,0,0,304,303,
        1,0,0,0,305,308,1,0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,309,
        1,0,0,0,308,306,1,0,0,0,309,310,3,32,16,0,310,314,5,3,0,0,311,313,
        5,52,0,0,312,311,1,0,0,0,313,316,1,0,0,0,314,312,1,0,0,0,314,315,
        1,0,0,0,315,29,1,0,0,0,316,314,1,0,0,0,317,318,3,138,69,0,318,31,
        1,0,0,0,319,322,3,34,17,0,320,322,3,36,18,0,321,319,1,0,0,0,321,
        320,1,0,0,0,322,323,1,0,0,0,323,321,1,0,0,0,323,324,1,0,0,0,324,
        33,1,0,0,0,325,326,5,10,0,0,326,330,5,11,0,0,327,329,5,52,0,0,328,
        327,1,0,0,0,329,332,1,0,0,0,330,328,1,0,0,0,330,331,1,0,0,0,331,
        333,1,0,0,0,332,330,1,0,0,0,333,335,3,38,19,0,334,336,5,52,0,0,335,
        334,1,0,0,0,336,337,1,0,0,0,337,335,1,0,0,0,337,338,1,0,0,0,338,
        35,1,0,0,0,339,340,5,12,0,0,340,344,5,11,0,0,341,343,5,52,0,0,342,
        341,1,0,0,0,343,346,1,0,0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,
        347,1,0,0,0,346,344,1,0,0,0,347,349,3,38,19,0,348,350,5,52,0,0,349,
        348,1,0,0,0,350,351,1,0,0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,
        37,1,0,0,0,353,362,3,40,20,0,354,356,5,52,0,0,355,354,1,0,0,0,356,
        357,1,0,0,0,357,355,1,0,0,0,357,358,1,0,0,0,358,359,1,0,0,0,359,
        361,3,40,20,0,360,355,1,0,0,0,361,364,1,0,0,0,362,360,1,0,0,0,362,
        363,1,0,0,0,363,39,1,0,0,0,364,362,1,0,0,0,365,368,3,56,28,0,366,
        368,3,42,21,0,367,365,1,0,0,0,367,366,1,0,0,0,368,41,1,0,0,0,369,
        370,3,44,22,0,370,43,1,0,0,0,371,376,3,46,23,0,372,373,5,13,0,0,
        373,375,3,46,23,0,374,372,1,0,0,0,375,378,1,0,0,0,376,374,1,0,0,
        0,376,377,1,0,0,0,377,45,1,0,0,0,378,376,1,0,0,0,379,381,3,48,24,
        0,380,382,3,50,25,0,381,380,1,0,0,0,381,382,1,0,0,0,382,47,1,0,0,
        0,383,384,3,138,69,0,384,49,1,0,0,0,385,386,5,14,0,0,386,387,3,52,
        26,0,387,388,5,15,0,0,388,51,1,0,0,0,389,394,3,54,27,0,390,391,5,
        16,0,0,391,393,3,54,27,0,392,390,1,0,0,0,393,396,1,0,0,0,394,392,
        1,0,0,0,394,395,1,0,0,0,395,53,1,0,0,0,396,394,1,0,0,0,397,400,3,
        138,69,0,398,399,5,11,0,0,399,401,3,138,69,0,400,398,1,0,0,0,400,
        401,1,0,0,0,401,55,1,0,0,0,402,403,3,46,23,0,403,57,1,0,0,0,404,
        405,5,17,0,0,405,406,3,60,30,0,406,408,5,2,0,0,407,409,5,52,0,0,
        408,407,1,0,0,0,409,410,1,0,0,0,410,408,1,0,0,0,410,411,1,0,0,0,
        411,412,1,0,0,0,412,413,3,62,31,0,413,417,5,3,0,0,414,416,5,52,0,
        0,415,414,1,0,0,0,416,419,1,0,0,0,417,415,1,0,0,0,417,418,1,0,0,
        0,418,59,1,0,0,0,419,417,1,0,0,0,420,421,3,138,69,0,421,61,1,0,0,
        0,422,431,3,64,32,0,423,425,5,52,0,0,424,423,1,0,0,0,425,426,1,0,
        0,0,426,424,1,0,0,0,426,427,1,0,0,0,427,428,1,0,0,0,428,430,3,64,
        32,0,429,424,1,0,0,0,430,433,1,0,0,0,431,429,1,0,0,0,431,432,1,0,
        0,0,432,435,1,0,0,0,433,431,1,0,0,0,434,436,5,52,0,0,435,434,1,0,
        0,0,436,437,1,0,0,0,437,435,1,0,0,0,437,438,1,0,0,0,438,63,1,0,0,
        0,439,440,5,18,0,0,440,441,5,11,0,0,441,449,3,66,33,0,442,443,5,
        19,0,0,443,444,5,11,0,0,444,449,3,98,49,0,445,446,5,20,0,0,446,447,
        5,11,0,0,447,449,3,70,35,0,448,439,1,0,0,0,448,442,1,0,0,0,448,445,
        1,0,0,0,449,65,1,0,0,0,450,455,3,68,34,0,451,452,5,16,0,0,452,454,
        3,68,34,0,453,451,1,0,0,0,454,457,1,0,0,0,455,453,1,0,0,0,455,456,
        1,0,0,0,456,459,1,0,0,0,457,455,1,0,0,0,458,460,5,16,0,0,459,458,
        1,0,0,0,459,460,1,0,0,0,460,67,1,0,0,0,461,462,3,138,69,0,462,69,
        1,0,0,0,463,468,3,72,36,0,464,465,5,16,0,0,465,467,3,72,36,0,466,
        464,1,0,0,0,467,470,1,0,0,0,468,466,1,0,0,0,468,469,1,0,0,0,469,
        472,1,0,0,0,470,468,1,0,0,0,471,473,5,16,0,0,472,471,1,0,0,0,472,
        473,1,0,0,0,473,71,1,0,0,0,474,475,3,138,69,0,475,73,1,0,0,0,476,
        477,5,8,0,0,477,478,3,82,41,0,478,482,5,2,0,0,479,481,5,52,0,0,480,
        479,1,0,0,0,481,484,1,0,0,0,482,480,1,0,0,0,482,483,1,0,0,0,483,
        485,1,0,0,0,484,482,1,0,0,0,485,486,3,84,42,0,486,490,5,3,0,0,487,
        489,5,52,0,0,488,487,1,0,0,0,489,492,1,0,0,0,490,488,1,0,0,0,490,
        491,1,0,0,0,491,75,1,0,0,0,492,490,1,0,0,0,493,494,5,21,0,0,494,
        498,5,2,0,0,495,497,5,52,0,0,496,495,1,0,0,0,497,500,1,0,0,0,498,
        496,1,0,0,0,498,499,1,0,0,0,499,502,1,0,0,0,500,498,1,0,0,0,501,
        503,3,78,39,0,502,501,1,0,0,0,502,503,1,0,0,0,503,504,1,0,0,0,504,
        508,5,3,0,0,505,507,5,52,0,0,506,505,1,0,0,0,507,510,1,0,0,0,508,
        506,1,0,0,0,508,509,1,0,0,0,509,77,1,0,0,0,510,508,1,0,0,0,511,520,
        3,80,40,0,512,514,5,52,0,0,513,512,1,0,0,0,514,515,1,0,0,0,515,513,
        1,0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,519,3,80,40,0,518,513,
        1,0,0,0,519,522,1,0,0,0,520,518,1,0,0,0,520,521,1,0,0,0,521,526,
        1,0,0,0,522,520,1,0,0,0,523,525,5,52,0,0,524,523,1,0,0,0,525,528,
        1,0,0,0,526,524,1,0,0,0,526,527,1,0,0,0,527,79,1,0,0,0,528,526,1,
        0,0,0,529,530,3,82,41,0,530,534,5,2,0,0,531,533,5,52,0,0,532,531,
        1,0,0,0,533,536,1,0,0,0,534,532,1,0,0,0,534,535,1,0,0,0,535,537,
        1,0,0,0,536,534,1,0,0,0,537,538,3,84,42,0,538,542,5,3,0,0,539,541,
        5,52,0,0,540,539,1,0,0,0,541,544,1,0,0,0,542,540,1,0,0,0,542,543,
        1,0,0,0,543,81,1,0,0,0,544,542,1,0,0,0,545,548,3,138,69,0,546,548,
        5,51,0,0,547,545,1,0,0,0,547,546,1,0,0,0,548,83,1,0,0,0,549,558,
        3,86,43,0,550,552,5,52,0,0,551,550,1,0,0,0,552,553,1,0,0,0,553,551,
        1,0,0,0,553,554,1,0,0,0,554,555,1,0,0,0,555,557,3,86,43,0,556,551,
        1,0,0,0,557,560,1,0,0,0,558,556,1,0,0,0,558,559,1,0,0,0,559,564,
        1,0,0,0,560,558,1,0,0,0,561,563,5,52,0,0,562,561,1,0,0,0,563,566,
        1,0,0,0,564,562,1,0,0,0,564,565,1,0,0,0,565,85,1,0,0,0,566,564,1,
        0,0,0,567,568,5,45,0,0,568,569,5,11,0,0,569,580,3,98,49,0,570,571,
        5,46,0,0,571,572,5,11,0,0,572,580,3,102,51,0,573,574,5,47,0,0,574,
        575,5,11,0,0,575,580,3,138,69,0,576,577,5,48,0,0,577,578,5,11,0,
        0,578,580,3,88,44,0,579,567,1,0,0,0,579,570,1,0,0,0,579,573,1,0,
        0,0,579,576,1,0,0,0,580,87,1,0,0,0,581,586,3,90,45,0,582,583,5,22,
        0,0,583,584,3,92,46,0,584,585,5,23,0,0,585,587,1,0,0,0,586,582,1,
        0,0,0,586,587,1,0,0,0,587,89,1,0,0,0,588,589,7,1,0,0,589,91,1,0,
        0,0,590,595,3,94,47,0,591,592,5,16,0,0,592,594,3,94,47,0,593,591,
        1,0,0,0,594,597,1,0,0,0,595,593,1,0,0,0,595,596,1,0,0,0,596,93,1,
        0,0,0,597,595,1,0,0,0,598,599,5,49,0,0,599,600,5,27,0,0,600,601,
        3,96,48,0,601,95,1,0,0,0,602,603,3,138,69,0,603,97,1,0,0,0,604,609,
        3,100,50,0,605,606,5,16,0,0,606,608,3,100,50,0,607,605,1,0,0,0,608,
        611,1,0,0,0,609,607,1,0,0,0,609,610,1,0,0,0,610,613,1,0,0,0,611,
        609,1,0,0,0,612,614,5,16,0,0,613,612,1,0,0,0,613,614,1,0,0,0,614,
        99,1,0,0,0,615,616,3,138,69,0,616,101,1,0,0,0,617,622,3,104,52,0,
        618,619,5,16,0,0,619,621,3,104,52,0,620,618,1,0,0,0,621,624,1,0,
        0,0,622,620,1,0,0,0,622,623,1,0,0,0,623,626,1,0,0,0,624,622,1,0,
        0,0,625,627,5,16,0,0,626,625,1,0,0,0,626,627,1,0,0,0,627,103,1,0,
        0,0,628,629,3,138,69,0,629,105,1,0,0,0,630,631,5,28,0,0,631,632,
        3,142,71,0,632,636,5,2,0,0,633,635,5,52,0,0,634,633,1,0,0,0,635,
        638,1,0,0,0,636,634,1,0,0,0,636,637,1,0,0,0,637,642,1,0,0,0,638,
        636,1,0,0,0,639,641,3,108,54,0,640,639,1,0,0,0,641,644,1,0,0,0,642,
        640,1,0,0,0,642,643,1,0,0,0,643,645,1,0,0,0,644,642,1,0,0,0,645,
        649,5,3,0,0,646,648,5,52,0,0,647,646,1,0,0,0,648,651,1,0,0,0,649,
        647,1,0,0,0,649,650,1,0,0,0,650,107,1,0,0,0,651,649,1,0,0,0,652,
        653,3,110,55,0,653,654,3,114,57,0,654,109,1,0,0,0,655,656,5,29,0,
        0,656,657,3,134,67,0,657,658,5,30,0,0,658,660,3,140,70,0,659,661,
        5,52,0,0,660,659,1,0,0,0,661,662,1,0,0,0,662,660,1,0,0,0,662,663,
        1,0,0,0,663,679,1,0,0,0,664,665,5,29,0,0,665,667,3,112,56,0,666,
        668,5,52,0,0,667,666,1,0,0,0,668,669,1,0,0,0,669,667,1,0,0,0,669,
        670,1,0,0,0,670,679,1,0,0,0,671,672,5,29,0,0,672,674,3,140,70,0,
        673,675,5,52,0,0,674,673,1,0,0,0,675,676,1,0,0,0,676,674,1,0,0,0,
        676,677,1,0,0,0,677,679,1,0,0,0,678,655,1,0,0,0,678,664,1,0,0,0,
        678,671,1,0,0,0,679,111,1,0,0,0,680,681,3,132,66,0,681,683,3,136,
        68,0,682,684,3,130,65,0,683,682,1,0,0,0,683,684,1,0,0,0,684,686,
        1,0,0,0,685,687,3,126,63,0,686,685,1,0,0,0,686,687,1,0,0,0,687,113,
        1,0,0,0,688,690,3,116,58,0,689,688,1,0,0,0,690,693,1,0,0,0,691,689,
        1,0,0,0,691,692,1,0,0,0,692,115,1,0,0,0,693,691,1,0,0,0,694,696,
        3,120,60,0,695,697,5,52,0,0,696,695,1,0,0,0,697,698,1,0,0,0,698,
        696,1,0,0,0,698,699,1,0,0,0,699,719,1,0,0,0,700,702,3,118,59,0,701,
        703,5,52,0,0,702,701,1,0,0,0,703,704,1,0,0,0,704,702,1,0,0,0,704,
        705,1,0,0,0,705,719,1,0,0,0,706,708,3,124,62,0,707,709,5,52,0,0,
        708,707,1,0,0,0,709,710,1,0,0,0,710,708,1,0,0,0,710,711,1,0,0,0,
        711,719,1,0,0,0,712,714,3,122,61,0,713,715,5,52,0,0,714,713,1,0,
        0,0,715,716,1,0,0,0,716,714,1,0,0,0,716,717,1,0,0,0,717,719,1,0,
        0,0,718,694,1,0,0,0,718,700,1,0,0,0,718,706,1,0,0,0,718,712,1,0,
        0,0,719,117,1,0,0,0,720,721,3,134,67,0,721,722,5,31,0,0,722,723,
        3,134,67,0,723,724,3,130,65,0,724,725,3,126,63,0,725,732,1,0,0,0,
        726,727,3,134,67,0,727,728,5,31,0,0,728,729,3,134,67,0,729,730,3,
        126,63,0,730,732,1,0,0,0,731,720,1,0,0,0,731,726,1,0,0,0,732,119,
        1,0,0,0,733,734,3,134,67,0,734,735,5,32,0,0,735,736,3,140,70,0,736,
        121,1,0,0,0,737,738,3,134,67,0,738,740,3,136,68,0,739,741,3,130,
        65,0,740,739,1,0,0,0,740,741,1,0,0,0,741,742,1,0,0,0,742,743,3,126,
        63,0,743,123,1,0,0,0,744,745,3,134,67,0,745,746,5,33,0,0,746,747,
        5,18,0,0,747,749,3,134,67,0,748,750,3,130,65,0,749,748,1,0,0,0,749,
        750,1,0,0,0,750,751,1,0,0,0,751,752,3,126,63,0,752,761,1,0,0,0,753,
        754,3,134,67,0,754,756,5,33,0,0,755,757,3,130,65,0,756,755,1,0,0,
        0,756,757,1,0,0,0,757,758,1,0,0,0,758,759,3,126,63,0,759,761,1,0,
        0,0,760,744,1,0,0,0,760,753,1,0,0,0,761,125,1,0,0,0,762,765,3,128,
        64,0,763,765,5,51,0,0,764,762,1,0,0,0,764,763,1,0,0,0,765,766,1,
        0,0,0,766,764,1,0,0,0,766,767,1,0,0,0,767,127,1,0,0,0,768,773,3,
        138,69,0,769,773,3,130,65,0,770,773,5,29,0,0,771,773,5,28,0,0,772,
        768,1,0,0,0,772,769,1,0,0,0,772,770,1,0,0,0,772,771,1,0,0,0,773,
        129,1,0,0,0,774,775,7,2,0,0,775,131,1,0,0,0,776,777,3,138,69,0,777,
        133,1,0,0,0,778,779,3,138,69,0,779,135,1,0,0,0,780,781,3,138,69,
        0,781,137,1,0,0,0,782,783,7,3,0,0,783,139,1,0,0,0,784,785,5,51,0,
        0,785,141,1,0,0,0,786,787,5,51,0,0,787,143,1,0,0,0,90,147,159,161,
        170,178,186,194,201,206,212,220,232,237,243,254,262,270,277,282,
        288,300,306,314,321,323,330,337,344,351,357,362,367,376,381,394,
        400,410,417,426,431,437,448,455,459,468,472,482,490,498,502,508,
        515,520,526,534,542,547,553,558,564,579,586,595,609,613,622,626,
        636,642,649,662,669,676,678,683,686,691,698,704,710,716,718,731,
        740,749,756,760,764,766,772
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!CraftParser.__ATN) {
            CraftParser.__ATN = new antlr.ATNDeserializer().deserialize(CraftParser._serializedATN);
        }

        return CraftParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(CraftParser.literalNames, CraftParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return CraftParser.vocabulary;
    }

    private static readonly decisionsToDFA = CraftParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class DslContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
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
    public actors_def(): Actors_defContext[];
    public actors_def(i: number): Actors_defContext | null;
    public actors_def(i?: number): Actors_defContext[] | Actors_defContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Actors_defContext);
        }

        return this.getRuleContext(i, Actors_defContext);
    }
    public actor_def(): Actor_defContext[];
    public actor_def(i: number): Actor_defContext | null;
    public actor_def(i?: number): Actor_defContext[] | Actor_defContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Actor_defContext);
        }

        return this.getRuleContext(i, Actor_defContext);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_dsl;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDsl) {
             listener.enterDsl(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDsl) {
             listener.exitDsl(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_domain_def;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDomain_def) {
             listener.enterDomain_def(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDomain_def) {
             listener.exitDomain_def(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return this.getToken(CraftParser.DOMAINS, 0)!;
    }
    public domain_block_list(): Domain_block_listContext {
        return this.getRuleContext(0, Domain_block_listContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_domains_def;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDomains_def) {
             listener.enterDomains_def(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDomains_def) {
             listener.exitDomains_def(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_domain_block_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDomain_block_list) {
             listener.enterDomain_block_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDomain_block_list) {
             listener.exitDomain_block_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_domain_block;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDomain_block) {
             listener.enterDomain_block(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDomain_block) {
             listener.exitDomain_block(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_domain_name;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDomain_name) {
             listener.enterDomain_name(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDomain_name) {
             listener.exitDomain_name(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_subdomain_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterSubdomain_list) {
             listener.enterSubdomain_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitSubdomain_list) {
             listener.exitSubdomain_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_subdomain;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterSubdomain) {
             listener.enterSubdomain(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitSubdomain) {
             listener.exitSubdomain(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitSubdomain) {
            return visitor.visitSubdomain(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Actor_defContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public actorType(): ActorTypeContext {
        return this.getRuleContext(0, ActorTypeContext)!;
    }
    public actor_name(): Actor_nameContext {
        return this.getRuleContext(0, Actor_nameContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_actor_def;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterActor_def) {
             listener.enterActor_def(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitActor_def) {
             listener.exitActor_def(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitActor_def) {
            return visitor.visitActor_def(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Actors_defContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public actor_definition_list(): Actor_definition_listContext {
        return this.getRuleContext(0, Actor_definition_listContext)!;
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_actors_def;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterActors_def) {
             listener.enterActors_def(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitActors_def) {
             listener.exitActors_def(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitActors_def) {
            return visitor.visitActors_def(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Actor_definition_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public actor_definition(): Actor_definitionContext[];
    public actor_definition(i: number): Actor_definitionContext | null;
    public actor_definition(i?: number): Actor_definitionContext[] | Actor_definitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Actor_definitionContext);
        }

        return this.getRuleContext(i, Actor_definitionContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_actor_definition_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterActor_definition_list) {
             listener.enterActor_definition_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitActor_definition_list) {
             listener.exitActor_definition_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitActor_definition_list) {
            return visitor.visitActor_definition_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Actor_definitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public actorType(): ActorTypeContext {
        return this.getRuleContext(0, ActorTypeContext)!;
    }
    public actor_name(): Actor_nameContext {
        return this.getRuleContext(0, Actor_nameContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_actor_definition;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterActor_definition) {
             listener.enterActor_definition(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitActor_definition) {
             listener.exitActor_definition(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitActor_definition) {
            return visitor.visitActor_definition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ActorTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_actorType;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterActorType) {
             listener.enterActorType(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitActorType) {
             listener.exitActorType(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitActorType) {
            return visitor.visitActorType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Actor_nameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_actor_name;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterActor_name) {
             listener.enterActor_name(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitActor_name) {
             listener.exitActor_name(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitActor_name) {
            return visitor.visitActor_name(this);
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_arch;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterArch) {
             listener.enterArch(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitArch) {
             listener.exitArch(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_arch_name;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterArch_name) {
             listener.enterArch_name(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitArch_name) {
             listener.exitArch_name(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_arch_sections;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterArch_sections) {
             listener.enterArch_sections(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitArch_sections) {
             listener.exitArch_sections(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_presentation_section;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterPresentation_section) {
             listener.enterPresentation_section(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitPresentation_section) {
             listener.exitPresentation_section(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_gateway_section;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterGateway_section) {
             listener.enterGateway_section(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitGateway_section) {
             listener.exitGateway_section(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_arch_component_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterArch_component_list) {
             listener.enterArch_component_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitArch_component_list) {
             listener.exitArch_component_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_arch_component;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterArch_component) {
             listener.enterArch_component(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitArch_component) {
             listener.exitArch_component(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_component_flow;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterComponent_flow) {
             listener.enterComponent_flow(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitComponent_flow) {
             listener.exitComponent_flow(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_component_chain;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterComponent_chain) {
             listener.enterComponent_chain(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitComponent_chain) {
             listener.exitComponent_chain(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_component_with_modifiers;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterComponent_with_modifiers) {
             listener.enterComponent_with_modifiers(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitComponent_with_modifiers) {
             listener.exitComponent_with_modifiers(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_component_name;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterComponent_name) {
             listener.enterComponent_name(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitComponent_name) {
             listener.exitComponent_name(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_component_modifiers;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterComponent_modifiers) {
             listener.enterComponent_modifiers(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitComponent_modifiers) {
             listener.exitComponent_modifiers(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_modifier_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterModifier_list) {
             listener.enterModifier_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitModifier_list) {
             listener.exitModifier_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_modifier;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterModifier) {
             listener.enterModifier(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitModifier) {
             listener.exitModifier(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_simple_component;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterSimple_component) {
             listener.enterSimple_component(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitSimple_component) {
             listener.exitSimple_component(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_exposure;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterExposure) {
             listener.enterExposure(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitExposure) {
             listener.exitExposure(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_exposure_name;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterExposure_name) {
             listener.enterExposure_name(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitExposure_name) {
             listener.exitExposure_name(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_exposure_properties;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterExposure_properties) {
             listener.enterExposure_properties(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitExposure_properties) {
             listener.exitExposure_properties(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_exposure_property;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterExposure_property) {
             listener.enterExposure_property(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitExposure_property) {
             listener.exitExposure_property(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_target_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterTarget_list) {
             listener.enterTarget_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitTarget_list) {
             listener.exitTarget_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_target;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterTarget) {
             listener.enterTarget(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitTarget) {
             listener.exitTarget(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_gateway_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterGateway_list) {
             listener.enterGateway_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitGateway_list) {
             listener.exitGateway_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_gateway;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterGateway) {
             listener.enterGateway(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitGateway) {
             listener.exitGateway(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_service_def;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterService_def) {
             listener.enterService_def(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitService_def) {
             listener.exitService_def(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public service_block_list(): Service_block_listContext | null {
        return this.getRuleContext(0, Service_block_listContext);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_services_def;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterServices_def) {
             listener.enterServices_def(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitServices_def) {
             listener.exitServices_def(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_service_block_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterService_block_list) {
             listener.enterService_block_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitService_block_list) {
             listener.exitService_block_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_service_block;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterService_block) {
             listener.enterService_block(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitService_block) {
             listener.exitService_block(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(CraftParser.STRING, 0);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_service_name;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterService_name) {
             listener.enterService_name(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitService_name) {
             listener.exitService_name(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_service_properties;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterService_properties) {
             listener.enterService_properties(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitService_properties) {
             listener.exitService_properties(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return this.getToken(CraftParser.DOMAINS, 0);
    }
    public domain_list(): Domain_listContext | null {
        return this.getRuleContext(0, Domain_listContext);
    }
    public DATA_STORES(): antlr.TerminalNode | null {
        return this.getToken(CraftParser.DATA_STORES, 0);
    }
    public datastore_list(): Datastore_listContext | null {
        return this.getRuleContext(0, Datastore_listContext);
    }
    public LANGUAGE(): antlr.TerminalNode | null {
        return this.getToken(CraftParser.LANGUAGE, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public DEPLOYMENT(): antlr.TerminalNode | null {
        return this.getToken(CraftParser.DEPLOYMENT, 0);
    }
    public deployment_strategy(): Deployment_strategyContext | null {
        return this.getRuleContext(0, Deployment_strategyContext);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_service_property;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterService_property) {
             listener.enterService_property(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitService_property) {
             listener.exitService_property(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_deployment_strategy;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDeployment_strategy) {
             listener.enterDeployment_strategy(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDeployment_strategy) {
             listener.exitDeployment_strategy(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_deployment_type;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDeployment_type) {
             listener.enterDeployment_type(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDeployment_type) {
             listener.exitDeployment_type(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_deployment_config;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDeployment_config) {
             listener.enterDeployment_config(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDeployment_config) {
             listener.exitDeployment_config(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return this.getToken(CraftParser.PERCENTAGE, 0)!;
    }
    public deployment_target(): Deployment_targetContext {
        return this.getRuleContext(0, Deployment_targetContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_deployment_rule;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDeployment_rule) {
             listener.enterDeployment_rule(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDeployment_rule) {
             listener.exitDeployment_rule(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_deployment_target;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDeployment_target) {
             listener.enterDeployment_target(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDeployment_target) {
             listener.exitDeployment_target(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_domain_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDomain_list) {
             listener.enterDomain_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDomain_list) {
             listener.exitDomain_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_domain_ref;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDomain_ref) {
             listener.enterDomain_ref(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDomain_ref) {
             listener.exitDomain_ref(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_datastore_list;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDatastore_list) {
             listener.enterDatastore_list(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDatastore_list) {
             listener.exitDatastore_list(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_datastore;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDatastore) {
             listener.enterDatastore(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDatastore) {
             listener.exitDatastore(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
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
        return CraftParser.RULE_use_case;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterUse_case) {
             listener.enterUse_case(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitUse_case) {
             listener.exitUse_case(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_scenario;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterScenario) {
             listener.enterScenario(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitScenario) {
             listener.exitScenario(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public domain(): DomainContext | null {
        return this.getRuleContext(0, DomainContext);
    }
    public quoted_event(): Quoted_eventContext | null {
        return this.getRuleContext(0, Quoted_eventContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public external_trigger(): External_triggerContext | null {
        return this.getRuleContext(0, External_triggerContext);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_trigger;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterTrigger) {
             listener.enterTrigger(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitTrigger) {
             listener.exitTrigger(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public connector_word(): Connector_wordContext | null {
        return this.getRuleContext(0, Connector_wordContext);
    }
    public phrase(): PhraseContext | null {
        return this.getRuleContext(0, PhraseContext);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_external_trigger;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterExternal_trigger) {
             listener.enterExternal_trigger(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitExternal_trigger) {
             listener.exitExternal_trigger(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_action_block;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterAction_block) {
             listener.enterAction_block(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitAction_block) {
             listener.exitAction_block(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    		return this.getTokens(CraftParser.NEWLINE);
    	} else {
    		return this.getToken(CraftParser.NEWLINE, i);
    	}
    }
    public sync_action(): Sync_actionContext | null {
        return this.getRuleContext(0, Sync_actionContext);
    }
    public return_action(): Return_actionContext | null {
        return this.getRuleContext(0, Return_actionContext);
    }
    public internal_action(): Internal_actionContext | null {
        return this.getRuleContext(0, Internal_actionContext);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_action;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterAction) {
             listener.enterAction(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitAction) {
             listener.exitAction(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_sync_action;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterSync_action) {
             listener.enterSync_action(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitSync_action) {
             listener.exitSync_action(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_async_action;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterAsync_action) {
             listener.enterAsync_action(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitAsync_action) {
             listener.exitAsync_action(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return CraftParser.RULE_internal_action;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterInternal_action) {
             listener.enterInternal_action(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitInternal_action) {
             listener.exitInternal_action(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitInternal_action) {
            return visitor.visitInternal_action(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Return_actionContext extends antlr.ParserRuleContext {
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
    public phrase(): PhraseContext {
        return this.getRuleContext(0, PhraseContext)!;
    }
    public connector_word(): Connector_wordContext | null {
        return this.getRuleContext(0, Connector_wordContext);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_return_action;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterReturn_action) {
             listener.enterReturn_action(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitReturn_action) {
             listener.exitReturn_action(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitReturn_action) {
            return visitor.visitReturn_action(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PhraseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public phrase_word(): Phrase_wordContext[];
    public phrase_word(i: number): Phrase_wordContext | null;
    public phrase_word(i?: number): Phrase_wordContext[] | Phrase_wordContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Phrase_wordContext);
        }

        return this.getRuleContext(i, Phrase_wordContext);
    }
    public STRING(): antlr.TerminalNode[];
    public STRING(i: number): antlr.TerminalNode | null;
    public STRING(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(CraftParser.STRING);
    	} else {
    		return this.getToken(CraftParser.STRING, i);
    	}
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_phrase;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterPhrase) {
             listener.enterPhrase(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitPhrase) {
             listener.exitPhrase(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitPhrase) {
            return visitor.visitPhrase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Phrase_wordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public connector_word(): Connector_wordContext | null {
        return this.getRuleContext(0, Connector_wordContext);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_phrase_word;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterPhrase_word) {
             listener.enterPhrase_word(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitPhrase_word) {
             listener.exitPhrase_word(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitPhrase_word) {
            return visitor.visitPhrase_word(this);
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
        return CraftParser.RULE_connector_word;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterConnector_word) {
             listener.enterConnector_word(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitConnector_word) {
             listener.exitConnector_word(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_actor;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterActor) {
             listener.enterActor(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitActor) {
             listener.exitActor(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_domain;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterDomain) {
             listener.enterDomain(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitDomain) {
             listener.exitDomain(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_verb;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterVerb) {
             listener.enterVerb(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitVerb) {
             listener.exitVerb(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitVerb) {
            return visitor.visitVerb(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(CraftParser.IDENTIFIER, 0);
    }
    public DOMAINS(): antlr.TerminalNode | null {
        return this.getToken(CraftParser.DOMAINS, 0);
    }
    public DATA_STORES(): antlr.TerminalNode | null {
        return this.getToken(CraftParser.DATA_STORES, 0);
    }
    public LANGUAGE(): antlr.TerminalNode | null {
        return this.getToken(CraftParser.LANGUAGE, 0);
    }
    public DEPLOYMENT(): antlr.TerminalNode | null {
        return this.getToken(CraftParser.DEPLOYMENT, 0);
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_identifier;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
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
        return this.getToken(CraftParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_quoted_event;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterQuoted_event) {
             listener.enterQuoted_event(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitQuoted_event) {
             listener.exitQuoted_event(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
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
        return this.getToken(CraftParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return CraftParser.RULE_string;
    }
    public override enterRule(listener: CraftListener): void {
        if(listener.enterString) {
             listener.enterString(this);
        }
    }
    public override exitRule(listener: CraftListener): void {
        if(listener.exitString) {
             listener.exitString(this);
        }
    }
    public override accept<Result>(visitor: CraftVisitor<Result>): Result | null {
        if (visitor.visitString) {
            return visitor.visitString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
