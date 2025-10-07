
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { DslContext } from "./ArchDSLParser.js";
import { Domain_defContext } from "./ArchDSLParser.js";
import { Domains_defContext } from "./ArchDSLParser.js";
import { Domain_block_listContext } from "./ArchDSLParser.js";
import { Domain_blockContext } from "./ArchDSLParser.js";
import { Domain_nameContext } from "./ArchDSLParser.js";
import { Subdomain_listContext } from "./ArchDSLParser.js";
import { SubdomainContext } from "./ArchDSLParser.js";
import { ArchContext } from "./ArchDSLParser.js";
import { Arch_nameContext } from "./ArchDSLParser.js";
import { Arch_sectionsContext } from "./ArchDSLParser.js";
import { Presentation_sectionContext } from "./ArchDSLParser.js";
import { Gateway_sectionContext } from "./ArchDSLParser.js";
import { Arch_component_listContext } from "./ArchDSLParser.js";
import { Arch_componentContext } from "./ArchDSLParser.js";
import { Component_flowContext } from "./ArchDSLParser.js";
import { Component_chainContext } from "./ArchDSLParser.js";
import { Component_with_modifiersContext } from "./ArchDSLParser.js";
import { Component_nameContext } from "./ArchDSLParser.js";
import { Component_modifiersContext } from "./ArchDSLParser.js";
import { Modifier_listContext } from "./ArchDSLParser.js";
import { ModifierContext } from "./ArchDSLParser.js";
import { Simple_componentContext } from "./ArchDSLParser.js";
import { ExposureContext } from "./ArchDSLParser.js";
import { Exposure_nameContext } from "./ArchDSLParser.js";
import { Exposure_propertiesContext } from "./ArchDSLParser.js";
import { Exposure_propertyContext } from "./ArchDSLParser.js";
import { Target_listContext } from "./ArchDSLParser.js";
import { TargetContext } from "./ArchDSLParser.js";
import { Gateway_listContext } from "./ArchDSLParser.js";
import { GatewayContext } from "./ArchDSLParser.js";
import { Service_defContext } from "./ArchDSLParser.js";
import { Services_defContext } from "./ArchDSLParser.js";
import { Service_block_listContext } from "./ArchDSLParser.js";
import { Service_blockContext } from "./ArchDSLParser.js";
import { Service_nameContext } from "./ArchDSLParser.js";
import { Service_propertiesContext } from "./ArchDSLParser.js";
import { Service_propertyContext } from "./ArchDSLParser.js";
import { Deployment_strategyContext } from "./ArchDSLParser.js";
import { Deployment_typeContext } from "./ArchDSLParser.js";
import { Deployment_configContext } from "./ArchDSLParser.js";
import { Deployment_ruleContext } from "./ArchDSLParser.js";
import { Deployment_targetContext } from "./ArchDSLParser.js";
import { Domain_listContext } from "./ArchDSLParser.js";
import { Domain_refContext } from "./ArchDSLParser.js";
import { Datastore_listContext } from "./ArchDSLParser.js";
import { DatastoreContext } from "./ArchDSLParser.js";
import { Use_caseContext } from "./ArchDSLParser.js";
import { ScenarioContext } from "./ArchDSLParser.js";
import { TriggerContext } from "./ArchDSLParser.js";
import { External_triggerContext } from "./ArchDSLParser.js";
import { Action_blockContext } from "./ArchDSLParser.js";
import { ActionContext } from "./ArchDSLParser.js";
import { Sync_actionContext } from "./ArchDSLParser.js";
import { Async_actionContext } from "./ArchDSLParser.js";
import { Internal_actionContext } from "./ArchDSLParser.js";
import { PhraseContext } from "./ArchDSLParser.js";
import { Connector_wordContext } from "./ArchDSLParser.js";
import { ActorContext } from "./ArchDSLParser.js";
import { DomainContext } from "./ArchDSLParser.js";
import { VerbContext } from "./ArchDSLParser.js";
import { Quoted_eventContext } from "./ArchDSLParser.js";
import { StringContext } from "./ArchDSLParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ArchDSLParser`.
 */
export class ArchDSLListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `ArchDSLParser.dsl`.
     * @param ctx the parse tree
     */
    enterDsl?: (ctx: DslContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.dsl`.
     * @param ctx the parse tree
     */
    exitDsl?: (ctx: DslContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.domain_def`.
     * @param ctx the parse tree
     */
    enterDomain_def?: (ctx: Domain_defContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.domain_def`.
     * @param ctx the parse tree
     */
    exitDomain_def?: (ctx: Domain_defContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.domains_def`.
     * @param ctx the parse tree
     */
    enterDomains_def?: (ctx: Domains_defContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.domains_def`.
     * @param ctx the parse tree
     */
    exitDomains_def?: (ctx: Domains_defContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.domain_block_list`.
     * @param ctx the parse tree
     */
    enterDomain_block_list?: (ctx: Domain_block_listContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.domain_block_list`.
     * @param ctx the parse tree
     */
    exitDomain_block_list?: (ctx: Domain_block_listContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.domain_block`.
     * @param ctx the parse tree
     */
    enterDomain_block?: (ctx: Domain_blockContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.domain_block`.
     * @param ctx the parse tree
     */
    exitDomain_block?: (ctx: Domain_blockContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.domain_name`.
     * @param ctx the parse tree
     */
    enterDomain_name?: (ctx: Domain_nameContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.domain_name`.
     * @param ctx the parse tree
     */
    exitDomain_name?: (ctx: Domain_nameContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.subdomain_list`.
     * @param ctx the parse tree
     */
    enterSubdomain_list?: (ctx: Subdomain_listContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.subdomain_list`.
     * @param ctx the parse tree
     */
    exitSubdomain_list?: (ctx: Subdomain_listContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.subdomain`.
     * @param ctx the parse tree
     */
    enterSubdomain?: (ctx: SubdomainContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.subdomain`.
     * @param ctx the parse tree
     */
    exitSubdomain?: (ctx: SubdomainContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.arch`.
     * @param ctx the parse tree
     */
    enterArch?: (ctx: ArchContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.arch`.
     * @param ctx the parse tree
     */
    exitArch?: (ctx: ArchContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.arch_name`.
     * @param ctx the parse tree
     */
    enterArch_name?: (ctx: Arch_nameContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.arch_name`.
     * @param ctx the parse tree
     */
    exitArch_name?: (ctx: Arch_nameContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.arch_sections`.
     * @param ctx the parse tree
     */
    enterArch_sections?: (ctx: Arch_sectionsContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.arch_sections`.
     * @param ctx the parse tree
     */
    exitArch_sections?: (ctx: Arch_sectionsContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.presentation_section`.
     * @param ctx the parse tree
     */
    enterPresentation_section?: (ctx: Presentation_sectionContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.presentation_section`.
     * @param ctx the parse tree
     */
    exitPresentation_section?: (ctx: Presentation_sectionContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.gateway_section`.
     * @param ctx the parse tree
     */
    enterGateway_section?: (ctx: Gateway_sectionContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.gateway_section`.
     * @param ctx the parse tree
     */
    exitGateway_section?: (ctx: Gateway_sectionContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.arch_component_list`.
     * @param ctx the parse tree
     */
    enterArch_component_list?: (ctx: Arch_component_listContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.arch_component_list`.
     * @param ctx the parse tree
     */
    exitArch_component_list?: (ctx: Arch_component_listContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.arch_component`.
     * @param ctx the parse tree
     */
    enterArch_component?: (ctx: Arch_componentContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.arch_component`.
     * @param ctx the parse tree
     */
    exitArch_component?: (ctx: Arch_componentContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.component_flow`.
     * @param ctx the parse tree
     */
    enterComponent_flow?: (ctx: Component_flowContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.component_flow`.
     * @param ctx the parse tree
     */
    exitComponent_flow?: (ctx: Component_flowContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.component_chain`.
     * @param ctx the parse tree
     */
    enterComponent_chain?: (ctx: Component_chainContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.component_chain`.
     * @param ctx the parse tree
     */
    exitComponent_chain?: (ctx: Component_chainContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.component_with_modifiers`.
     * @param ctx the parse tree
     */
    enterComponent_with_modifiers?: (ctx: Component_with_modifiersContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.component_with_modifiers`.
     * @param ctx the parse tree
     */
    exitComponent_with_modifiers?: (ctx: Component_with_modifiersContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.component_name`.
     * @param ctx the parse tree
     */
    enterComponent_name?: (ctx: Component_nameContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.component_name`.
     * @param ctx the parse tree
     */
    exitComponent_name?: (ctx: Component_nameContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.component_modifiers`.
     * @param ctx the parse tree
     */
    enterComponent_modifiers?: (ctx: Component_modifiersContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.component_modifiers`.
     * @param ctx the parse tree
     */
    exitComponent_modifiers?: (ctx: Component_modifiersContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.modifier_list`.
     * @param ctx the parse tree
     */
    enterModifier_list?: (ctx: Modifier_listContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.modifier_list`.
     * @param ctx the parse tree
     */
    exitModifier_list?: (ctx: Modifier_listContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.modifier`.
     * @param ctx the parse tree
     */
    enterModifier?: (ctx: ModifierContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.modifier`.
     * @param ctx the parse tree
     */
    exitModifier?: (ctx: ModifierContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.simple_component`.
     * @param ctx the parse tree
     */
    enterSimple_component?: (ctx: Simple_componentContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.simple_component`.
     * @param ctx the parse tree
     */
    exitSimple_component?: (ctx: Simple_componentContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.exposure`.
     * @param ctx the parse tree
     */
    enterExposure?: (ctx: ExposureContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.exposure`.
     * @param ctx the parse tree
     */
    exitExposure?: (ctx: ExposureContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.exposure_name`.
     * @param ctx the parse tree
     */
    enterExposure_name?: (ctx: Exposure_nameContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.exposure_name`.
     * @param ctx the parse tree
     */
    exitExposure_name?: (ctx: Exposure_nameContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.exposure_properties`.
     * @param ctx the parse tree
     */
    enterExposure_properties?: (ctx: Exposure_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.exposure_properties`.
     * @param ctx the parse tree
     */
    exitExposure_properties?: (ctx: Exposure_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.exposure_property`.
     * @param ctx the parse tree
     */
    enterExposure_property?: (ctx: Exposure_propertyContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.exposure_property`.
     * @param ctx the parse tree
     */
    exitExposure_property?: (ctx: Exposure_propertyContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.target_list`.
     * @param ctx the parse tree
     */
    enterTarget_list?: (ctx: Target_listContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.target_list`.
     * @param ctx the parse tree
     */
    exitTarget_list?: (ctx: Target_listContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.target`.
     * @param ctx the parse tree
     */
    enterTarget?: (ctx: TargetContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.target`.
     * @param ctx the parse tree
     */
    exitTarget?: (ctx: TargetContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.gateway_list`.
     * @param ctx the parse tree
     */
    enterGateway_list?: (ctx: Gateway_listContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.gateway_list`.
     * @param ctx the parse tree
     */
    exitGateway_list?: (ctx: Gateway_listContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.gateway`.
     * @param ctx the parse tree
     */
    enterGateway?: (ctx: GatewayContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.gateway`.
     * @param ctx the parse tree
     */
    exitGateway?: (ctx: GatewayContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.service_def`.
     * @param ctx the parse tree
     */
    enterService_def?: (ctx: Service_defContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.service_def`.
     * @param ctx the parse tree
     */
    exitService_def?: (ctx: Service_defContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.services_def`.
     * @param ctx the parse tree
     */
    enterServices_def?: (ctx: Services_defContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.services_def`.
     * @param ctx the parse tree
     */
    exitServices_def?: (ctx: Services_defContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.service_block_list`.
     * @param ctx the parse tree
     */
    enterService_block_list?: (ctx: Service_block_listContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.service_block_list`.
     * @param ctx the parse tree
     */
    exitService_block_list?: (ctx: Service_block_listContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.service_block`.
     * @param ctx the parse tree
     */
    enterService_block?: (ctx: Service_blockContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.service_block`.
     * @param ctx the parse tree
     */
    exitService_block?: (ctx: Service_blockContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.service_name`.
     * @param ctx the parse tree
     */
    enterService_name?: (ctx: Service_nameContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.service_name`.
     * @param ctx the parse tree
     */
    exitService_name?: (ctx: Service_nameContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.service_properties`.
     * @param ctx the parse tree
     */
    enterService_properties?: (ctx: Service_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.service_properties`.
     * @param ctx the parse tree
     */
    exitService_properties?: (ctx: Service_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.service_property`.
     * @param ctx the parse tree
     */
    enterService_property?: (ctx: Service_propertyContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.service_property`.
     * @param ctx the parse tree
     */
    exitService_property?: (ctx: Service_propertyContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.deployment_strategy`.
     * @param ctx the parse tree
     */
    enterDeployment_strategy?: (ctx: Deployment_strategyContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.deployment_strategy`.
     * @param ctx the parse tree
     */
    exitDeployment_strategy?: (ctx: Deployment_strategyContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.deployment_type`.
     * @param ctx the parse tree
     */
    enterDeployment_type?: (ctx: Deployment_typeContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.deployment_type`.
     * @param ctx the parse tree
     */
    exitDeployment_type?: (ctx: Deployment_typeContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.deployment_config`.
     * @param ctx the parse tree
     */
    enterDeployment_config?: (ctx: Deployment_configContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.deployment_config`.
     * @param ctx the parse tree
     */
    exitDeployment_config?: (ctx: Deployment_configContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.deployment_rule`.
     * @param ctx the parse tree
     */
    enterDeployment_rule?: (ctx: Deployment_ruleContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.deployment_rule`.
     * @param ctx the parse tree
     */
    exitDeployment_rule?: (ctx: Deployment_ruleContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.deployment_target`.
     * @param ctx the parse tree
     */
    enterDeployment_target?: (ctx: Deployment_targetContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.deployment_target`.
     * @param ctx the parse tree
     */
    exitDeployment_target?: (ctx: Deployment_targetContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.domain_list`.
     * @param ctx the parse tree
     */
    enterDomain_list?: (ctx: Domain_listContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.domain_list`.
     * @param ctx the parse tree
     */
    exitDomain_list?: (ctx: Domain_listContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.domain_ref`.
     * @param ctx the parse tree
     */
    enterDomain_ref?: (ctx: Domain_refContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.domain_ref`.
     * @param ctx the parse tree
     */
    exitDomain_ref?: (ctx: Domain_refContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.datastore_list`.
     * @param ctx the parse tree
     */
    enterDatastore_list?: (ctx: Datastore_listContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.datastore_list`.
     * @param ctx the parse tree
     */
    exitDatastore_list?: (ctx: Datastore_listContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.datastore`.
     * @param ctx the parse tree
     */
    enterDatastore?: (ctx: DatastoreContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.datastore`.
     * @param ctx the parse tree
     */
    exitDatastore?: (ctx: DatastoreContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.use_case`.
     * @param ctx the parse tree
     */
    enterUse_case?: (ctx: Use_caseContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.use_case`.
     * @param ctx the parse tree
     */
    exitUse_case?: (ctx: Use_caseContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.scenario`.
     * @param ctx the parse tree
     */
    enterScenario?: (ctx: ScenarioContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.scenario`.
     * @param ctx the parse tree
     */
    exitScenario?: (ctx: ScenarioContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.trigger`.
     * @param ctx the parse tree
     */
    enterTrigger?: (ctx: TriggerContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.trigger`.
     * @param ctx the parse tree
     */
    exitTrigger?: (ctx: TriggerContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.external_trigger`.
     * @param ctx the parse tree
     */
    enterExternal_trigger?: (ctx: External_triggerContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.external_trigger`.
     * @param ctx the parse tree
     */
    exitExternal_trigger?: (ctx: External_triggerContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.action_block`.
     * @param ctx the parse tree
     */
    enterAction_block?: (ctx: Action_blockContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.action_block`.
     * @param ctx the parse tree
     */
    exitAction_block?: (ctx: Action_blockContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.action`.
     * @param ctx the parse tree
     */
    enterAction?: (ctx: ActionContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.action`.
     * @param ctx the parse tree
     */
    exitAction?: (ctx: ActionContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.sync_action`.
     * @param ctx the parse tree
     */
    enterSync_action?: (ctx: Sync_actionContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.sync_action`.
     * @param ctx the parse tree
     */
    exitSync_action?: (ctx: Sync_actionContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.async_action`.
     * @param ctx the parse tree
     */
    enterAsync_action?: (ctx: Async_actionContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.async_action`.
     * @param ctx the parse tree
     */
    exitAsync_action?: (ctx: Async_actionContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.internal_action`.
     * @param ctx the parse tree
     */
    enterInternal_action?: (ctx: Internal_actionContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.internal_action`.
     * @param ctx the parse tree
     */
    exitInternal_action?: (ctx: Internal_actionContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.phrase`.
     * @param ctx the parse tree
     */
    enterPhrase?: (ctx: PhraseContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.phrase`.
     * @param ctx the parse tree
     */
    exitPhrase?: (ctx: PhraseContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.connector_word`.
     * @param ctx the parse tree
     */
    enterConnector_word?: (ctx: Connector_wordContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.connector_word`.
     * @param ctx the parse tree
     */
    exitConnector_word?: (ctx: Connector_wordContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.actor`.
     * @param ctx the parse tree
     */
    enterActor?: (ctx: ActorContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.actor`.
     * @param ctx the parse tree
     */
    exitActor?: (ctx: ActorContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.domain`.
     * @param ctx the parse tree
     */
    enterDomain?: (ctx: DomainContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.domain`.
     * @param ctx the parse tree
     */
    exitDomain?: (ctx: DomainContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.verb`.
     * @param ctx the parse tree
     */
    enterVerb?: (ctx: VerbContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.verb`.
     * @param ctx the parse tree
     */
    exitVerb?: (ctx: VerbContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.quoted_event`.
     * @param ctx the parse tree
     */
    enterQuoted_event?: (ctx: Quoted_eventContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.quoted_event`.
     * @param ctx the parse tree
     */
    exitQuoted_event?: (ctx: Quoted_eventContext) => void;
    /**
     * Enter a parse tree produced by `ArchDSLParser.string`.
     * @param ctx the parse tree
     */
    enterString?: (ctx: StringContext) => void;
    /**
     * Exit a parse tree produced by `ArchDSLParser.string`.
     * @param ctx the parse tree
     */
    exitString?: (ctx: StringContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

