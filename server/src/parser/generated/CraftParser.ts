
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
    public static readonly RULE_connector_word = 64;
    public static readonly RULE_actor = 65;
    public static readonly RULE_domain = 66;
    public static readonly RULE_verb = 67;
    public static readonly RULE_identifier = 68;
    public static readonly RULE_quoted_event = 69;
    public static readonly RULE_string = 70;

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
        "return_action", "phrase", "connector_word", "actor", "domain", 
        "verb", "identifier", "quoted_event", "string",
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
            this.state = 145;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 142;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 147;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 270664498) !== 0) || _la === 45) {
                {
                this.state = 157;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case CraftParser.T__8:
                    {
                    this.state = 148;
                    this.arch();
                    }
                    break;
                case CraftParser.T__20:
                    {
                    this.state = 149;
                    this.services_def();
                    }
                    break;
                case CraftParser.T__7:
                    {
                    this.state = 150;
                    this.service_def();
                    }
                    break;
                case CraftParser.T__16:
                    {
                    this.state = 151;
                    this.exposure();
                    }
                    break;
                case CraftParser.T__27:
                    {
                    this.state = 152;
                    this.use_case();
                    }
                    break;
                case CraftParser.T__0:
                    {
                    this.state = 153;
                    this.domain_def();
                    }
                    break;
                case CraftParser.DOMAINS:
                    {
                    this.state = 154;
                    this.domains_def();
                    }
                    break;
                case CraftParser.T__4:
                    {
                    this.state = 155;
                    this.actors_def();
                    }
                    break;
                case CraftParser.T__3:
                    {
                    this.state = 156;
                    this.actor_def();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 161;
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
            this.state = 162;
            this.match(CraftParser.T__0);
            this.state = 163;
            this.domain_name();
            this.state = 164;
            this.match(CraftParser.T__1);
            this.state = 168;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 165;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 170;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 171;
            this.subdomain_list();
            this.state = 172;
            this.match(CraftParser.T__2);
            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 173;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 178;
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
            this.state = 179;
            this.match(CraftParser.DOMAINS);
            this.state = 180;
            this.match(CraftParser.T__1);
            this.state = 184;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 181;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 186;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 187;
            this.domain_block_list();
            this.state = 188;
            this.match(CraftParser.T__2);
            this.state = 192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 189;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 194;
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
            this.state = 195;
            this.domain_block();
            this.state = 204;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 197;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 196;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 199;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 201;
                    this.domain_block();
                    }
                    }
                }
                this.state = 206;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            this.state = 210;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 207;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 212;
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
            this.state = 213;
            this.domain_name();
            this.state = 214;
            this.match(CraftParser.T__1);
            this.state = 218;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 215;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 220;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 221;
            this.subdomain_list();
            this.state = 222;
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
            this.state = 224;
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
            this.state = 226;
            this.subdomain();
            this.state = 235;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 228;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 227;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 230;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 232;
                    this.subdomain();
                    }
                    }
                }
                this.state = 237;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            }
            this.state = 241;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 238;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 243;
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
            this.state = 244;
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
            this.state = 246;
            this.match(CraftParser.T__3);
            this.state = 247;
            this.actorType();
            this.state = 248;
            this.actor_name();
            this.state = 252;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 249;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 254;
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
            this.state = 255;
            this.match(CraftParser.T__4);
            this.state = 256;
            this.match(CraftParser.T__1);
            this.state = 260;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 257;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 262;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 263;
            this.actor_definition_list();
            this.state = 264;
            this.match(CraftParser.T__2);
            this.state = 268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 265;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 270;
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
            this.state = 271;
            this.actor_definition();
            this.state = 280;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 273;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 272;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 275;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 277;
                    this.actor_definition();
                    }
                    }
                }
                this.state = 282;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            }
            this.state = 286;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 283;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 288;
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
            this.state = 289;
            this.actorType();
            this.state = 290;
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
            this.state = 292;
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
            this.state = 294;
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
            this.state = 296;
            this.match(CraftParser.T__8);
            this.state = 298;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3342735346) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 393213) !== 0)) {
                {
                this.state = 297;
                this.arch_name();
                }
            }

            this.state = 300;
            this.match(CraftParser.T__1);
            this.state = 304;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 301;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 306;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 307;
            this.arch_sections();
            this.state = 308;
            this.match(CraftParser.T__2);
            this.state = 312;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 309;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 314;
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
            this.state = 315;
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
            this.state = 319;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 319;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case CraftParser.T__9:
                    {
                    this.state = 317;
                    this.presentation_section();
                    }
                    break;
                case CraftParser.T__11:
                    {
                    this.state = 318;
                    this.gateway_section();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 321;
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
            this.state = 323;
            this.match(CraftParser.T__9);
            this.state = 324;
            this.match(CraftParser.T__10);
            this.state = 328;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 325;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 330;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 331;
            this.arch_component_list();
            this.state = 333;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 332;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 335;
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
            this.state = 337;
            this.match(CraftParser.T__11);
            this.state = 338;
            this.match(CraftParser.T__10);
            this.state = 342;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 339;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 344;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 345;
            this.arch_component_list();
            this.state = 347;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 346;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 349;
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
            this.state = 351;
            this.arch_component();
            this.state = 360;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 353;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 352;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 355;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 357;
                    this.arch_component();
                    }
                    }
                }
                this.state = 362;
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
            this.state = 365;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 363;
                this.simple_component();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 364;
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
            this.state = 367;
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
            this.state = 369;
            this.component_with_modifiers();
            this.state = 374;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13) {
                {
                {
                this.state = 370;
                this.match(CraftParser.T__12);
                this.state = 371;
                this.component_with_modifiers();
                }
                }
                this.state = 376;
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
            this.state = 377;
            this.component_name();
            this.state = 379;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 378;
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
            this.state = 381;
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
            this.state = 383;
            this.match(CraftParser.T__13);
            this.state = 384;
            this.modifier_list();
            this.state = 385;
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
            this.state = 387;
            this.modifier();
            this.state = 392;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 16) {
                {
                {
                this.state = 388;
                this.match(CraftParser.T__15);
                this.state = 389;
                this.modifier();
                }
                }
                this.state = 394;
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
            this.state = 395;
            this.identifier();
            this.state = 398;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 396;
                this.match(CraftParser.T__10);
                this.state = 397;
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
            this.state = 400;
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
            this.state = 402;
            this.match(CraftParser.T__16);
            this.state = 403;
            this.exposure_name();
            this.state = 404;
            this.match(CraftParser.T__1);
            this.state = 406;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 405;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 408;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 52);
            this.state = 410;
            this.exposure_properties();
            this.state = 411;
            this.match(CraftParser.T__2);
            this.state = 415;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 412;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 417;
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
            this.state = 418;
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
            this.state = 420;
            this.exposure_property();
            this.state = 429;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 422;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 421;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 424;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 426;
                    this.exposure_property();
                    }
                    }
                }
                this.state = 431;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
            }
            this.state = 433;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 432;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 435;
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
            this.state = 446;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CraftParser.T__17:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 437;
                this.match(CraftParser.T__17);
                this.state = 438;
                this.match(CraftParser.T__10);
                this.state = 439;
                this.target_list();
                }
                break;
            case CraftParser.T__18:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 440;
                this.match(CraftParser.T__18);
                this.state = 441;
                this.match(CraftParser.T__10);
                this.state = 442;
                this.domain_list();
                }
                break;
            case CraftParser.T__19:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 443;
                this.match(CraftParser.T__19);
                this.state = 444;
                this.match(CraftParser.T__10);
                this.state = 445;
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
            this.state = 448;
            this.target();
            this.state = 453;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 449;
                    this.match(CraftParser.T__15);
                    this.state = 450;
                    this.target();
                    }
                    }
                }
                this.state = 455;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
            }
            this.state = 457;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 456;
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
            this.state = 459;
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
            this.state = 461;
            this.gateway();
            this.state = 466;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 462;
                    this.match(CraftParser.T__15);
                    this.state = 463;
                    this.gateway();
                    }
                    }
                }
                this.state = 468;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            }
            this.state = 470;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 469;
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
            this.state = 472;
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
            this.state = 474;
            this.match(CraftParser.T__7);
            this.state = 475;
            this.service_name();
            this.state = 476;
            this.match(CraftParser.T__1);
            this.state = 480;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 477;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 482;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 483;
            this.service_properties();
            this.state = 484;
            this.match(CraftParser.T__2);
            this.state = 488;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 485;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 490;
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
            this.state = 491;
            this.match(CraftParser.T__20);
            this.state = 492;
            this.match(CraftParser.T__1);
            this.state = 496;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 493;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 498;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 500;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3342735346) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 917501) !== 0)) {
                {
                this.state = 499;
                this.service_block_list();
                }
            }

            this.state = 502;
            this.match(CraftParser.T__2);
            this.state = 506;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 503;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 508;
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
            this.state = 509;
            this.service_block();
            this.state = 518;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 52, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 511;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 510;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 513;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 515;
                    this.service_block();
                    }
                    }
                }
                this.state = 520;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 52, this.context);
            }
            this.state = 524;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 521;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 526;
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
            this.state = 527;
            this.service_name();
            this.state = 528;
            this.match(CraftParser.T__1);
            this.state = 532;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 529;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 534;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 535;
            this.service_properties();
            this.state = 536;
            this.match(CraftParser.T__2);
            this.state = 540;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 537;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                }
                this.state = 542;
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
            this.state = 545;
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
                this.state = 543;
                this.identifier();
                }
                break;
            case CraftParser.STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 544;
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
            this.state = 547;
            this.service_property();
            this.state = 556;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 549;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 548;
                        this.match(CraftParser.NEWLINE);
                        }
                        }
                        this.state = 551;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 52);
                    this.state = 553;
                    this.service_property();
                    }
                    }
                }
                this.state = 558;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            }
            this.state = 562;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 559;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 564;
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
            this.state = 577;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case CraftParser.DOMAINS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 565;
                this.match(CraftParser.DOMAINS);
                this.state = 566;
                this.match(CraftParser.T__10);
                this.state = 567;
                this.domain_list();
                }
                break;
            case CraftParser.DATA_STORES:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 568;
                this.match(CraftParser.DATA_STORES);
                this.state = 569;
                this.match(CraftParser.T__10);
                this.state = 570;
                this.datastore_list();
                }
                break;
            case CraftParser.LANGUAGE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 571;
                this.match(CraftParser.LANGUAGE);
                this.state = 572;
                this.match(CraftParser.T__10);
                this.state = 573;
                this.identifier();
                }
                break;
            case CraftParser.DEPLOYMENT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 574;
                this.match(CraftParser.DEPLOYMENT);
                this.state = 575;
                this.match(CraftParser.T__10);
                this.state = 576;
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
            this.state = 579;
            this.deployment_type();
            this.state = 584;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 580;
                this.match(CraftParser.T__21);
                this.state = 581;
                this.deployment_config();
                this.state = 582;
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
            this.state = 586;
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
            this.state = 588;
            this.deployment_rule();
            this.state = 593;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 16) {
                {
                {
                this.state = 589;
                this.match(CraftParser.T__15);
                this.state = 590;
                this.deployment_rule();
                }
                }
                this.state = 595;
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
            this.state = 596;
            this.match(CraftParser.PERCENTAGE);
            this.state = 597;
            this.match(CraftParser.T__26);
            this.state = 598;
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
            this.state = 600;
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
            this.state = 602;
            this.domain_ref();
            this.state = 607;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 603;
                    this.match(CraftParser.T__15);
                    this.state = 604;
                    this.domain_ref();
                    }
                    }
                }
                this.state = 609;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
            }
            this.state = 611;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 610;
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
            this.state = 613;
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
            this.state = 615;
            this.datastore();
            this.state = 620;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 616;
                    this.match(CraftParser.T__15);
                    this.state = 617;
                    this.datastore();
                    }
                    }
                }
                this.state = 622;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
            }
            this.state = 624;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16) {
                {
                this.state = 623;
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
            this.state = 626;
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
            this.state = 628;
            this.match(CraftParser.T__27);
            this.state = 629;
            this.string_();
            this.state = 630;
            this.match(CraftParser.T__1);
            this.state = 634;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 631;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 636;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 640;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 29) {
                {
                {
                this.state = 637;
                this.scenario();
                }
                }
                this.state = 642;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 643;
            this.match(CraftParser.T__2);
            this.state = 647;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 52) {
                {
                {
                this.state = 644;
                this.match(CraftParser.NEWLINE);
                }
                }
                this.state = 649;
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
            this.state = 650;
            this.trigger();
            this.state = 651;
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
            this.state = 676;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 653;
                this.match(CraftParser.T__28);
                this.state = 654;
                this.domain();
                this.state = 655;
                this.match(CraftParser.T__29);
                this.state = 656;
                this.quoted_event();
                this.state = 658;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 657;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 660;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 662;
                this.match(CraftParser.T__28);
                this.state = 663;
                this.external_trigger();
                this.state = 665;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 664;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 667;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 669;
                this.match(CraftParser.T__28);
                this.state = 670;
                this.quoted_event();
                this.state = 672;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 671;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 674;
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
            this.state = 678;
            this.actor();
            this.state = 679;
            this.verb();
            this.state = 681;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                {
                this.state = 680;
                this.connector_word();
                }
                break;
            }
            this.state = 684;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3342735346) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 917501) !== 0)) {
                {
                this.state = 683;
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
            this.state = 689;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3342735346) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 393213) !== 0)) {
                {
                {
                this.state = 686;
                this.action();
                }
                }
                this.state = 691;
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
            this.state = 716;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 692;
                this.async_action();
                this.state = 694;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 693;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 696;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 698;
                this.sync_action();
                this.state = 700;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 699;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 702;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 704;
                this.internal_action();
                this.state = 706;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 705;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 708;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 52);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 710;
                this.return_action();
                this.state = 712;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 711;
                    this.match(CraftParser.NEWLINE);
                    }
                    }
                    this.state = 714;
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
            this.state = 729;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 718;
                this.domain();
                this.state = 719;
                this.match(CraftParser.T__30);
                this.state = 720;
                this.domain();
                this.state = 721;
                this.connector_word();
                this.state = 722;
                this.phrase();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 724;
                this.domain();
                this.state = 725;
                this.match(CraftParser.T__30);
                this.state = 726;
                this.domain();
                this.state = 727;
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
            this.state = 731;
            this.domain();
            this.state = 732;
            this.match(CraftParser.T__31);
            this.state = 733;
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
            this.state = 735;
            this.domain();
            this.state = 736;
            this.verb();
            this.state = 738;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context) ) {
            case 1:
                {
                this.state = 737;
                this.connector_word();
                }
                break;
            }
            this.state = 740;
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
            this.state = 758;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 742;
                this.domain();
                this.state = 743;
                this.match(CraftParser.T__32);
                this.state = 745;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
                case 1:
                    {
                    this.state = 744;
                    this.connector_word();
                    }
                    break;
                }
                this.state = 747;
                this.phrase();
                this.state = 748;
                this.match(CraftParser.T__17);
                this.state = 749;
                this.domain();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 751;
                this.domain();
                this.state = 752;
                this.match(CraftParser.T__32);
                this.state = 754;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
                case 1:
                    {
                    this.state = 753;
                    this.connector_word();
                    }
                    break;
                }
                this.state = 756;
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
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 763;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    this.state = 763;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context) ) {
                    case 1:
                        {
                        this.state = 760;
                        this.identifier();
                        }
                        break;
                    case 2:
                        {
                        this.state = 761;
                        this.match(CraftParser.STRING);
                        }
                        break;
                    case 3:
                        {
                        this.state = 762;
                        this.connector_word();
                        }
                        break;
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 765;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 88, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
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
        this.enterRule(localContext, 128, CraftParser.RULE_connector_word);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 767;
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
        this.enterRule(localContext, 130, CraftParser.RULE_actor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 769;
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
        this.enterRule(localContext, 132, CraftParser.RULE_domain);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 771;
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
        this.enterRule(localContext, 134, CraftParser.RULE_verb);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 773;
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
        this.enterRule(localContext, 136, CraftParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 775;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3342735346) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 393213) !== 0))) {
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
        this.enterRule(localContext, 138, CraftParser.RULE_quoted_event);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 777;
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
        this.enterRule(localContext, 140, CraftParser.RULE_string);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 779;
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
        4,1,54,782,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
        2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,
        7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,
        2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,1,0,5,0,144,8,
        0,10,0,12,0,147,9,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,5,0,158,
        8,0,10,0,12,0,161,9,0,1,1,1,1,1,1,1,1,5,1,167,8,1,10,1,12,1,170,
        9,1,1,1,1,1,1,1,5,1,175,8,1,10,1,12,1,178,9,1,1,2,1,2,1,2,5,2,183,
        8,2,10,2,12,2,186,9,2,1,2,1,2,1,2,5,2,191,8,2,10,2,12,2,194,9,2,
        1,3,1,3,4,3,198,8,3,11,3,12,3,199,1,3,5,3,203,8,3,10,3,12,3,206,
        9,3,1,3,5,3,209,8,3,10,3,12,3,212,9,3,1,4,1,4,1,4,5,4,217,8,4,10,
        4,12,4,220,9,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,4,6,229,8,6,11,6,12,6,
        230,1,6,5,6,234,8,6,10,6,12,6,237,9,6,1,6,5,6,240,8,6,10,6,12,6,
        243,9,6,1,7,1,7,1,8,1,8,1,8,1,8,5,8,251,8,8,10,8,12,8,254,9,8,1,
        9,1,9,1,9,5,9,259,8,9,10,9,12,9,262,9,9,1,9,1,9,1,9,5,9,267,8,9,
        10,9,12,9,270,9,9,1,10,1,10,4,10,274,8,10,11,10,12,10,275,1,10,5,
        10,279,8,10,10,10,12,10,282,9,10,1,10,5,10,285,8,10,10,10,12,10,
        288,9,10,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,3,14,299,8,
        14,1,14,1,14,5,14,303,8,14,10,14,12,14,306,9,14,1,14,1,14,1,14,5,
        14,311,8,14,10,14,12,14,314,9,14,1,15,1,15,1,16,1,16,4,16,320,8,
        16,11,16,12,16,321,1,17,1,17,1,17,5,17,327,8,17,10,17,12,17,330,
        9,17,1,17,1,17,4,17,334,8,17,11,17,12,17,335,1,18,1,18,1,18,5,18,
        341,8,18,10,18,12,18,344,9,18,1,18,1,18,4,18,348,8,18,11,18,12,18,
        349,1,19,1,19,4,19,354,8,19,11,19,12,19,355,1,19,5,19,359,8,19,10,
        19,12,19,362,9,19,1,20,1,20,3,20,366,8,20,1,21,1,21,1,22,1,22,1,
        22,5,22,373,8,22,10,22,12,22,376,9,22,1,23,1,23,3,23,380,8,23,1,
        24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,5,26,391,8,26,10,26,12,
        26,394,9,26,1,27,1,27,1,27,3,27,399,8,27,1,28,1,28,1,29,1,29,1,29,
        1,29,4,29,407,8,29,11,29,12,29,408,1,29,1,29,1,29,5,29,414,8,29,
        10,29,12,29,417,9,29,1,30,1,30,1,31,1,31,4,31,423,8,31,11,31,12,
        31,424,1,31,5,31,428,8,31,10,31,12,31,431,9,31,1,31,4,31,434,8,31,
        11,31,12,31,435,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,
        447,8,32,1,33,1,33,1,33,5,33,452,8,33,10,33,12,33,455,9,33,1,33,
        3,33,458,8,33,1,34,1,34,1,35,1,35,1,35,5,35,465,8,35,10,35,12,35,
        468,9,35,1,35,3,35,471,8,35,1,36,1,36,1,37,1,37,1,37,1,37,5,37,479,
        8,37,10,37,12,37,482,9,37,1,37,1,37,1,37,5,37,487,8,37,10,37,12,
        37,490,9,37,1,38,1,38,1,38,5,38,495,8,38,10,38,12,38,498,9,38,1,
        38,3,38,501,8,38,1,38,1,38,5,38,505,8,38,10,38,12,38,508,9,38,1,
        39,1,39,4,39,512,8,39,11,39,12,39,513,1,39,5,39,517,8,39,10,39,12,
        39,520,9,39,1,39,5,39,523,8,39,10,39,12,39,526,9,39,1,40,1,40,1,
        40,5,40,531,8,40,10,40,12,40,534,9,40,1,40,1,40,1,40,5,40,539,8,
        40,10,40,12,40,542,9,40,1,41,1,41,3,41,546,8,41,1,42,1,42,4,42,550,
        8,42,11,42,12,42,551,1,42,5,42,555,8,42,10,42,12,42,558,9,42,1,42,
        5,42,561,8,42,10,42,12,42,564,9,42,1,43,1,43,1,43,1,43,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,1,43,3,43,578,8,43,1,44,1,44,1,44,1,44,
        1,44,3,44,585,8,44,1,45,1,45,1,46,1,46,1,46,5,46,592,8,46,10,46,
        12,46,595,9,46,1,47,1,47,1,47,1,47,1,48,1,48,1,49,1,49,1,49,5,49,
        606,8,49,10,49,12,49,609,9,49,1,49,3,49,612,8,49,1,50,1,50,1,51,
        1,51,1,51,5,51,619,8,51,10,51,12,51,622,9,51,1,51,3,51,625,8,51,
        1,52,1,52,1,53,1,53,1,53,1,53,5,53,633,8,53,10,53,12,53,636,9,53,
        1,53,5,53,639,8,53,10,53,12,53,642,9,53,1,53,1,53,5,53,646,8,53,
        10,53,12,53,649,9,53,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,4,55,
        659,8,55,11,55,12,55,660,1,55,1,55,1,55,4,55,666,8,55,11,55,12,55,
        667,1,55,1,55,1,55,4,55,673,8,55,11,55,12,55,674,3,55,677,8,55,1,
        56,1,56,1,56,3,56,682,8,56,1,56,3,56,685,8,56,1,57,5,57,688,8,57,
        10,57,12,57,691,9,57,1,58,1,58,4,58,695,8,58,11,58,12,58,696,1,58,
        1,58,4,58,701,8,58,11,58,12,58,702,1,58,1,58,4,58,707,8,58,11,58,
        12,58,708,1,58,1,58,4,58,713,8,58,11,58,12,58,714,3,58,717,8,58,
        1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,730,
        8,59,1,60,1,60,1,60,1,60,1,61,1,61,1,61,3,61,739,8,61,1,61,1,61,
        1,62,1,62,1,62,3,62,746,8,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,
        3,62,755,8,62,1,62,1,62,3,62,759,8,62,1,63,1,63,1,63,4,63,764,8,
        63,11,63,12,63,765,1,64,1,64,1,65,1,65,1,66,1,66,1,67,1,67,1,68,
        1,68,1,69,1,69,1,70,1,70,1,70,0,0,71,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
        66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
        108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
        140,0,4,1,0,6,8,1,0,24,26,2,0,18,18,34,44,8,0,1,1,4,10,12,12,17,
        21,24,26,30,32,34,48,50,50,813,0,145,1,0,0,0,2,162,1,0,0,0,4,179,
        1,0,0,0,6,195,1,0,0,0,8,213,1,0,0,0,10,224,1,0,0,0,12,226,1,0,0,
        0,14,244,1,0,0,0,16,246,1,0,0,0,18,255,1,0,0,0,20,271,1,0,0,0,22,
        289,1,0,0,0,24,292,1,0,0,0,26,294,1,0,0,0,28,296,1,0,0,0,30,315,
        1,0,0,0,32,319,1,0,0,0,34,323,1,0,0,0,36,337,1,0,0,0,38,351,1,0,
        0,0,40,365,1,0,0,0,42,367,1,0,0,0,44,369,1,0,0,0,46,377,1,0,0,0,
        48,381,1,0,0,0,50,383,1,0,0,0,52,387,1,0,0,0,54,395,1,0,0,0,56,400,
        1,0,0,0,58,402,1,0,0,0,60,418,1,0,0,0,62,420,1,0,0,0,64,446,1,0,
        0,0,66,448,1,0,0,0,68,459,1,0,0,0,70,461,1,0,0,0,72,472,1,0,0,0,
        74,474,1,0,0,0,76,491,1,0,0,0,78,509,1,0,0,0,80,527,1,0,0,0,82,545,
        1,0,0,0,84,547,1,0,0,0,86,577,1,0,0,0,88,579,1,0,0,0,90,586,1,0,
        0,0,92,588,1,0,0,0,94,596,1,0,0,0,96,600,1,0,0,0,98,602,1,0,0,0,
        100,613,1,0,0,0,102,615,1,0,0,0,104,626,1,0,0,0,106,628,1,0,0,0,
        108,650,1,0,0,0,110,676,1,0,0,0,112,678,1,0,0,0,114,689,1,0,0,0,
        116,716,1,0,0,0,118,729,1,0,0,0,120,731,1,0,0,0,122,735,1,0,0,0,
        124,758,1,0,0,0,126,763,1,0,0,0,128,767,1,0,0,0,130,769,1,0,0,0,
        132,771,1,0,0,0,134,773,1,0,0,0,136,775,1,0,0,0,138,777,1,0,0,0,
        140,779,1,0,0,0,142,144,5,52,0,0,143,142,1,0,0,0,144,147,1,0,0,0,
        145,143,1,0,0,0,145,146,1,0,0,0,146,159,1,0,0,0,147,145,1,0,0,0,
        148,158,3,28,14,0,149,158,3,76,38,0,150,158,3,74,37,0,151,158,3,
        58,29,0,152,158,3,106,53,0,153,158,3,2,1,0,154,158,3,4,2,0,155,158,
        3,18,9,0,156,158,3,16,8,0,157,148,1,0,0,0,157,149,1,0,0,0,157,150,
        1,0,0,0,157,151,1,0,0,0,157,152,1,0,0,0,157,153,1,0,0,0,157,154,
        1,0,0,0,157,155,1,0,0,0,157,156,1,0,0,0,158,161,1,0,0,0,159,157,
        1,0,0,0,159,160,1,0,0,0,160,1,1,0,0,0,161,159,1,0,0,0,162,163,5,
        1,0,0,163,164,3,10,5,0,164,168,5,2,0,0,165,167,5,52,0,0,166,165,
        1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,171,
        1,0,0,0,170,168,1,0,0,0,171,172,3,12,6,0,172,176,5,3,0,0,173,175,
        5,52,0,0,174,173,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,
        1,0,0,0,177,3,1,0,0,0,178,176,1,0,0,0,179,180,5,45,0,0,180,184,5,
        2,0,0,181,183,5,52,0,0,182,181,1,0,0,0,183,186,1,0,0,0,184,182,1,
        0,0,0,184,185,1,0,0,0,185,187,1,0,0,0,186,184,1,0,0,0,187,188,3,
        6,3,0,188,192,5,3,0,0,189,191,5,52,0,0,190,189,1,0,0,0,191,194,1,
        0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,5,1,0,0,0,194,192,1,0,
        0,0,195,204,3,8,4,0,196,198,5,52,0,0,197,196,1,0,0,0,198,199,1,0,
        0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,203,3,8,
        4,0,202,197,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,205,1,0,
        0,0,205,210,1,0,0,0,206,204,1,0,0,0,207,209,5,52,0,0,208,207,1,0,
        0,0,209,212,1,0,0,0,210,208,1,0,0,0,210,211,1,0,0,0,211,7,1,0,0,
        0,212,210,1,0,0,0,213,214,3,10,5,0,214,218,5,2,0,0,215,217,5,52,
        0,0,216,215,1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,
        0,0,219,221,1,0,0,0,220,218,1,0,0,0,221,222,3,12,6,0,222,223,5,3,
        0,0,223,9,1,0,0,0,224,225,3,136,68,0,225,11,1,0,0,0,226,235,3,14,
        7,0,227,229,5,52,0,0,228,227,1,0,0,0,229,230,1,0,0,0,230,228,1,0,
        0,0,230,231,1,0,0,0,231,232,1,0,0,0,232,234,3,14,7,0,233,228,1,0,
        0,0,234,237,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,241,1,0,
        0,0,237,235,1,0,0,0,238,240,5,52,0,0,239,238,1,0,0,0,240,243,1,0,
        0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,13,1,0,0,0,243,241,1,0,0,
        0,244,245,3,136,68,0,245,15,1,0,0,0,246,247,5,4,0,0,247,248,3,24,
        12,0,248,252,3,26,13,0,249,251,5,52,0,0,250,249,1,0,0,0,251,254,
        1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,17,1,0,0,0,254,252,1,
        0,0,0,255,256,5,5,0,0,256,260,5,2,0,0,257,259,5,52,0,0,258,257,1,
        0,0,0,259,262,1,0,0,0,260,258,1,0,0,0,260,261,1,0,0,0,261,263,1,
        0,0,0,262,260,1,0,0,0,263,264,3,20,10,0,264,268,5,3,0,0,265,267,
        5,52,0,0,266,265,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,269,
        1,0,0,0,269,19,1,0,0,0,270,268,1,0,0,0,271,280,3,22,11,0,272,274,
        5,52,0,0,273,272,1,0,0,0,274,275,1,0,0,0,275,273,1,0,0,0,275,276,
        1,0,0,0,276,277,1,0,0,0,277,279,3,22,11,0,278,273,1,0,0,0,279,282,
        1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,281,286,1,0,0,0,282,280,
        1,0,0,0,283,285,5,52,0,0,284,283,1,0,0,0,285,288,1,0,0,0,286,284,
        1,0,0,0,286,287,1,0,0,0,287,21,1,0,0,0,288,286,1,0,0,0,289,290,3,
        24,12,0,290,291,3,26,13,0,291,23,1,0,0,0,292,293,7,0,0,0,293,25,
        1,0,0,0,294,295,3,136,68,0,295,27,1,0,0,0,296,298,5,9,0,0,297,299,
        3,30,15,0,298,297,1,0,0,0,298,299,1,0,0,0,299,300,1,0,0,0,300,304,
        5,2,0,0,301,303,5,52,0,0,302,301,1,0,0,0,303,306,1,0,0,0,304,302,
        1,0,0,0,304,305,1,0,0,0,305,307,1,0,0,0,306,304,1,0,0,0,307,308,
        3,32,16,0,308,312,5,3,0,0,309,311,5,52,0,0,310,309,1,0,0,0,311,314,
        1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,29,1,0,0,0,314,312,1,
        0,0,0,315,316,3,136,68,0,316,31,1,0,0,0,317,320,3,34,17,0,318,320,
        3,36,18,0,319,317,1,0,0,0,319,318,1,0,0,0,320,321,1,0,0,0,321,319,
        1,0,0,0,321,322,1,0,0,0,322,33,1,0,0,0,323,324,5,10,0,0,324,328,
        5,11,0,0,325,327,5,52,0,0,326,325,1,0,0,0,327,330,1,0,0,0,328,326,
        1,0,0,0,328,329,1,0,0,0,329,331,1,0,0,0,330,328,1,0,0,0,331,333,
        3,38,19,0,332,334,5,52,0,0,333,332,1,0,0,0,334,335,1,0,0,0,335,333,
        1,0,0,0,335,336,1,0,0,0,336,35,1,0,0,0,337,338,5,12,0,0,338,342,
        5,11,0,0,339,341,5,52,0,0,340,339,1,0,0,0,341,344,1,0,0,0,342,340,
        1,0,0,0,342,343,1,0,0,0,343,345,1,0,0,0,344,342,1,0,0,0,345,347,
        3,38,19,0,346,348,5,52,0,0,347,346,1,0,0,0,348,349,1,0,0,0,349,347,
        1,0,0,0,349,350,1,0,0,0,350,37,1,0,0,0,351,360,3,40,20,0,352,354,
        5,52,0,0,353,352,1,0,0,0,354,355,1,0,0,0,355,353,1,0,0,0,355,356,
        1,0,0,0,356,357,1,0,0,0,357,359,3,40,20,0,358,353,1,0,0,0,359,362,
        1,0,0,0,360,358,1,0,0,0,360,361,1,0,0,0,361,39,1,0,0,0,362,360,1,
        0,0,0,363,366,3,56,28,0,364,366,3,42,21,0,365,363,1,0,0,0,365,364,
        1,0,0,0,366,41,1,0,0,0,367,368,3,44,22,0,368,43,1,0,0,0,369,374,
        3,46,23,0,370,371,5,13,0,0,371,373,3,46,23,0,372,370,1,0,0,0,373,
        376,1,0,0,0,374,372,1,0,0,0,374,375,1,0,0,0,375,45,1,0,0,0,376,374,
        1,0,0,0,377,379,3,48,24,0,378,380,3,50,25,0,379,378,1,0,0,0,379,
        380,1,0,0,0,380,47,1,0,0,0,381,382,3,136,68,0,382,49,1,0,0,0,383,
        384,5,14,0,0,384,385,3,52,26,0,385,386,5,15,0,0,386,51,1,0,0,0,387,
        392,3,54,27,0,388,389,5,16,0,0,389,391,3,54,27,0,390,388,1,0,0,0,
        391,394,1,0,0,0,392,390,1,0,0,0,392,393,1,0,0,0,393,53,1,0,0,0,394,
        392,1,0,0,0,395,398,3,136,68,0,396,397,5,11,0,0,397,399,3,136,68,
        0,398,396,1,0,0,0,398,399,1,0,0,0,399,55,1,0,0,0,400,401,3,46,23,
        0,401,57,1,0,0,0,402,403,5,17,0,0,403,404,3,60,30,0,404,406,5,2,
        0,0,405,407,5,52,0,0,406,405,1,0,0,0,407,408,1,0,0,0,408,406,1,0,
        0,0,408,409,1,0,0,0,409,410,1,0,0,0,410,411,3,62,31,0,411,415,5,
        3,0,0,412,414,5,52,0,0,413,412,1,0,0,0,414,417,1,0,0,0,415,413,1,
        0,0,0,415,416,1,0,0,0,416,59,1,0,0,0,417,415,1,0,0,0,418,419,3,136,
        68,0,419,61,1,0,0,0,420,429,3,64,32,0,421,423,5,52,0,0,422,421,1,
        0,0,0,423,424,1,0,0,0,424,422,1,0,0,0,424,425,1,0,0,0,425,426,1,
        0,0,0,426,428,3,64,32,0,427,422,1,0,0,0,428,431,1,0,0,0,429,427,
        1,0,0,0,429,430,1,0,0,0,430,433,1,0,0,0,431,429,1,0,0,0,432,434,
        5,52,0,0,433,432,1,0,0,0,434,435,1,0,0,0,435,433,1,0,0,0,435,436,
        1,0,0,0,436,63,1,0,0,0,437,438,5,18,0,0,438,439,5,11,0,0,439,447,
        3,66,33,0,440,441,5,19,0,0,441,442,5,11,0,0,442,447,3,98,49,0,443,
        444,5,20,0,0,444,445,5,11,0,0,445,447,3,70,35,0,446,437,1,0,0,0,
        446,440,1,0,0,0,446,443,1,0,0,0,447,65,1,0,0,0,448,453,3,68,34,0,
        449,450,5,16,0,0,450,452,3,68,34,0,451,449,1,0,0,0,452,455,1,0,0,
        0,453,451,1,0,0,0,453,454,1,0,0,0,454,457,1,0,0,0,455,453,1,0,0,
        0,456,458,5,16,0,0,457,456,1,0,0,0,457,458,1,0,0,0,458,67,1,0,0,
        0,459,460,3,136,68,0,460,69,1,0,0,0,461,466,3,72,36,0,462,463,5,
        16,0,0,463,465,3,72,36,0,464,462,1,0,0,0,465,468,1,0,0,0,466,464,
        1,0,0,0,466,467,1,0,0,0,467,470,1,0,0,0,468,466,1,0,0,0,469,471,
        5,16,0,0,470,469,1,0,0,0,470,471,1,0,0,0,471,71,1,0,0,0,472,473,
        3,136,68,0,473,73,1,0,0,0,474,475,5,8,0,0,475,476,3,82,41,0,476,
        480,5,2,0,0,477,479,5,52,0,0,478,477,1,0,0,0,479,482,1,0,0,0,480,
        478,1,0,0,0,480,481,1,0,0,0,481,483,1,0,0,0,482,480,1,0,0,0,483,
        484,3,84,42,0,484,488,5,3,0,0,485,487,5,52,0,0,486,485,1,0,0,0,487,
        490,1,0,0,0,488,486,1,0,0,0,488,489,1,0,0,0,489,75,1,0,0,0,490,488,
        1,0,0,0,491,492,5,21,0,0,492,496,5,2,0,0,493,495,5,52,0,0,494,493,
        1,0,0,0,495,498,1,0,0,0,496,494,1,0,0,0,496,497,1,0,0,0,497,500,
        1,0,0,0,498,496,1,0,0,0,499,501,3,78,39,0,500,499,1,0,0,0,500,501,
        1,0,0,0,501,502,1,0,0,0,502,506,5,3,0,0,503,505,5,52,0,0,504,503,
        1,0,0,0,505,508,1,0,0,0,506,504,1,0,0,0,506,507,1,0,0,0,507,77,1,
        0,0,0,508,506,1,0,0,0,509,518,3,80,40,0,510,512,5,52,0,0,511,510,
        1,0,0,0,512,513,1,0,0,0,513,511,1,0,0,0,513,514,1,0,0,0,514,515,
        1,0,0,0,515,517,3,80,40,0,516,511,1,0,0,0,517,520,1,0,0,0,518,516,
        1,0,0,0,518,519,1,0,0,0,519,524,1,0,0,0,520,518,1,0,0,0,521,523,
        5,52,0,0,522,521,1,0,0,0,523,526,1,0,0,0,524,522,1,0,0,0,524,525,
        1,0,0,0,525,79,1,0,0,0,526,524,1,0,0,0,527,528,3,82,41,0,528,532,
        5,2,0,0,529,531,5,52,0,0,530,529,1,0,0,0,531,534,1,0,0,0,532,530,
        1,0,0,0,532,533,1,0,0,0,533,535,1,0,0,0,534,532,1,0,0,0,535,536,
        3,84,42,0,536,540,5,3,0,0,537,539,5,52,0,0,538,537,1,0,0,0,539,542,
        1,0,0,0,540,538,1,0,0,0,540,541,1,0,0,0,541,81,1,0,0,0,542,540,1,
        0,0,0,543,546,3,136,68,0,544,546,5,51,0,0,545,543,1,0,0,0,545,544,
        1,0,0,0,546,83,1,0,0,0,547,556,3,86,43,0,548,550,5,52,0,0,549,548,
        1,0,0,0,550,551,1,0,0,0,551,549,1,0,0,0,551,552,1,0,0,0,552,553,
        1,0,0,0,553,555,3,86,43,0,554,549,1,0,0,0,555,558,1,0,0,0,556,554,
        1,0,0,0,556,557,1,0,0,0,557,562,1,0,0,0,558,556,1,0,0,0,559,561,
        5,52,0,0,560,559,1,0,0,0,561,564,1,0,0,0,562,560,1,0,0,0,562,563,
        1,0,0,0,563,85,1,0,0,0,564,562,1,0,0,0,565,566,5,45,0,0,566,567,
        5,11,0,0,567,578,3,98,49,0,568,569,5,46,0,0,569,570,5,11,0,0,570,
        578,3,102,51,0,571,572,5,47,0,0,572,573,5,11,0,0,573,578,3,136,68,
        0,574,575,5,48,0,0,575,576,5,11,0,0,576,578,3,88,44,0,577,565,1,
        0,0,0,577,568,1,0,0,0,577,571,1,0,0,0,577,574,1,0,0,0,578,87,1,0,
        0,0,579,584,3,90,45,0,580,581,5,22,0,0,581,582,3,92,46,0,582,583,
        5,23,0,0,583,585,1,0,0,0,584,580,1,0,0,0,584,585,1,0,0,0,585,89,
        1,0,0,0,586,587,7,1,0,0,587,91,1,0,0,0,588,593,3,94,47,0,589,590,
        5,16,0,0,590,592,3,94,47,0,591,589,1,0,0,0,592,595,1,0,0,0,593,591,
        1,0,0,0,593,594,1,0,0,0,594,93,1,0,0,0,595,593,1,0,0,0,596,597,5,
        49,0,0,597,598,5,27,0,0,598,599,3,96,48,0,599,95,1,0,0,0,600,601,
        3,136,68,0,601,97,1,0,0,0,602,607,3,100,50,0,603,604,5,16,0,0,604,
        606,3,100,50,0,605,603,1,0,0,0,606,609,1,0,0,0,607,605,1,0,0,0,607,
        608,1,0,0,0,608,611,1,0,0,0,609,607,1,0,0,0,610,612,5,16,0,0,611,
        610,1,0,0,0,611,612,1,0,0,0,612,99,1,0,0,0,613,614,3,136,68,0,614,
        101,1,0,0,0,615,620,3,104,52,0,616,617,5,16,0,0,617,619,3,104,52,
        0,618,616,1,0,0,0,619,622,1,0,0,0,620,618,1,0,0,0,620,621,1,0,0,
        0,621,624,1,0,0,0,622,620,1,0,0,0,623,625,5,16,0,0,624,623,1,0,0,
        0,624,625,1,0,0,0,625,103,1,0,0,0,626,627,3,136,68,0,627,105,1,0,
        0,0,628,629,5,28,0,0,629,630,3,140,70,0,630,634,5,2,0,0,631,633,
        5,52,0,0,632,631,1,0,0,0,633,636,1,0,0,0,634,632,1,0,0,0,634,635,
        1,0,0,0,635,640,1,0,0,0,636,634,1,0,0,0,637,639,3,108,54,0,638,637,
        1,0,0,0,639,642,1,0,0,0,640,638,1,0,0,0,640,641,1,0,0,0,641,643,
        1,0,0,0,642,640,1,0,0,0,643,647,5,3,0,0,644,646,5,52,0,0,645,644,
        1,0,0,0,646,649,1,0,0,0,647,645,1,0,0,0,647,648,1,0,0,0,648,107,
        1,0,0,0,649,647,1,0,0,0,650,651,3,110,55,0,651,652,3,114,57,0,652,
        109,1,0,0,0,653,654,5,29,0,0,654,655,3,132,66,0,655,656,5,30,0,0,
        656,658,3,138,69,0,657,659,5,52,0,0,658,657,1,0,0,0,659,660,1,0,
        0,0,660,658,1,0,0,0,660,661,1,0,0,0,661,677,1,0,0,0,662,663,5,29,
        0,0,663,665,3,112,56,0,664,666,5,52,0,0,665,664,1,0,0,0,666,667,
        1,0,0,0,667,665,1,0,0,0,667,668,1,0,0,0,668,677,1,0,0,0,669,670,
        5,29,0,0,670,672,3,138,69,0,671,673,5,52,0,0,672,671,1,0,0,0,673,
        674,1,0,0,0,674,672,1,0,0,0,674,675,1,0,0,0,675,677,1,0,0,0,676,
        653,1,0,0,0,676,662,1,0,0,0,676,669,1,0,0,0,677,111,1,0,0,0,678,
        679,3,130,65,0,679,681,3,134,67,0,680,682,3,128,64,0,681,680,1,0,
        0,0,681,682,1,0,0,0,682,684,1,0,0,0,683,685,3,126,63,0,684,683,1,
        0,0,0,684,685,1,0,0,0,685,113,1,0,0,0,686,688,3,116,58,0,687,686,
        1,0,0,0,688,691,1,0,0,0,689,687,1,0,0,0,689,690,1,0,0,0,690,115,
        1,0,0,0,691,689,1,0,0,0,692,694,3,120,60,0,693,695,5,52,0,0,694,
        693,1,0,0,0,695,696,1,0,0,0,696,694,1,0,0,0,696,697,1,0,0,0,697,
        717,1,0,0,0,698,700,3,118,59,0,699,701,5,52,0,0,700,699,1,0,0,0,
        701,702,1,0,0,0,702,700,1,0,0,0,702,703,1,0,0,0,703,717,1,0,0,0,
        704,706,3,122,61,0,705,707,5,52,0,0,706,705,1,0,0,0,707,708,1,0,
        0,0,708,706,1,0,0,0,708,709,1,0,0,0,709,717,1,0,0,0,710,712,3,124,
        62,0,711,713,5,52,0,0,712,711,1,0,0,0,713,714,1,0,0,0,714,712,1,
        0,0,0,714,715,1,0,0,0,715,717,1,0,0,0,716,692,1,0,0,0,716,698,1,
        0,0,0,716,704,1,0,0,0,716,710,1,0,0,0,717,117,1,0,0,0,718,719,3,
        132,66,0,719,720,5,31,0,0,720,721,3,132,66,0,721,722,3,128,64,0,
        722,723,3,126,63,0,723,730,1,0,0,0,724,725,3,132,66,0,725,726,5,
        31,0,0,726,727,3,132,66,0,727,728,3,126,63,0,728,730,1,0,0,0,729,
        718,1,0,0,0,729,724,1,0,0,0,730,119,1,0,0,0,731,732,3,132,66,0,732,
        733,5,32,0,0,733,734,3,138,69,0,734,121,1,0,0,0,735,736,3,132,66,
        0,736,738,3,134,67,0,737,739,3,128,64,0,738,737,1,0,0,0,738,739,
        1,0,0,0,739,740,1,0,0,0,740,741,3,126,63,0,741,123,1,0,0,0,742,743,
        3,132,66,0,743,745,5,33,0,0,744,746,3,128,64,0,745,744,1,0,0,0,745,
        746,1,0,0,0,746,747,1,0,0,0,747,748,3,126,63,0,748,749,5,18,0,0,
        749,750,3,132,66,0,750,759,1,0,0,0,751,752,3,132,66,0,752,754,5,
        33,0,0,753,755,3,128,64,0,754,753,1,0,0,0,754,755,1,0,0,0,755,756,
        1,0,0,0,756,757,3,126,63,0,757,759,1,0,0,0,758,742,1,0,0,0,758,751,
        1,0,0,0,759,125,1,0,0,0,760,764,3,136,68,0,761,764,5,51,0,0,762,
        764,3,128,64,0,763,760,1,0,0,0,763,761,1,0,0,0,763,762,1,0,0,0,764,
        765,1,0,0,0,765,763,1,0,0,0,765,766,1,0,0,0,766,127,1,0,0,0,767,
        768,7,2,0,0,768,129,1,0,0,0,769,770,3,136,68,0,770,131,1,0,0,0,771,
        772,3,136,68,0,772,133,1,0,0,0,773,774,3,136,68,0,774,135,1,0,0,
        0,775,776,7,3,0,0,776,137,1,0,0,0,777,778,5,51,0,0,778,139,1,0,0,
        0,779,780,5,51,0,0,780,141,1,0,0,0,89,145,157,159,168,176,184,192,
        199,204,210,218,230,235,241,252,260,268,275,280,286,298,304,312,
        319,321,328,335,342,349,355,360,365,374,379,392,398,408,415,424,
        429,435,446,453,457,466,470,480,488,496,500,506,513,518,524,532,
        540,545,551,556,562,577,584,593,607,611,620,624,634,640,647,660,
        667,674,676,681,684,689,696,702,708,714,716,729,738,745,754,758,
        763,765
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
    public internal_action(): Internal_actionContext | null {
        return this.getRuleContext(0, Internal_actionContext);
    }
    public return_action(): Return_actionContext | null {
        return this.getRuleContext(0, Return_actionContext);
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
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
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
    public connector_word(): Connector_wordContext[];
    public connector_word(i: number): Connector_wordContext | null;
    public connector_word(i?: number): Connector_wordContext[] | Connector_wordContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Connector_wordContext);
        }

        return this.getRuleContext(i, Connector_wordContext);
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
