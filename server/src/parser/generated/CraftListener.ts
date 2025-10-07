
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { DslContext } from "./CraftParser.js";
import { Domain_defContext } from "./CraftParser.js";
import { Domains_defContext } from "./CraftParser.js";
import { Domain_block_listContext } from "./CraftParser.js";
import { Domain_blockContext } from "./CraftParser.js";
import { Domain_nameContext } from "./CraftParser.js";
import { Subdomain_listContext } from "./CraftParser.js";
import { SubdomainContext } from "./CraftParser.js";
import { Actor_defContext } from "./CraftParser.js";
import { Actors_defContext } from "./CraftParser.js";
import { Actor_definition_listContext } from "./CraftParser.js";
import { Actor_definitionContext } from "./CraftParser.js";
import { ActorTypeContext } from "./CraftParser.js";
import { Actor_nameContext } from "./CraftParser.js";
import { ArchContext } from "./CraftParser.js";
import { Arch_nameContext } from "./CraftParser.js";
import { Arch_sectionsContext } from "./CraftParser.js";
import { Presentation_sectionContext } from "./CraftParser.js";
import { Gateway_sectionContext } from "./CraftParser.js";
import { Arch_component_listContext } from "./CraftParser.js";
import { Arch_componentContext } from "./CraftParser.js";
import { Component_flowContext } from "./CraftParser.js";
import { Component_chainContext } from "./CraftParser.js";
import { Component_with_modifiersContext } from "./CraftParser.js";
import { Component_nameContext } from "./CraftParser.js";
import { Component_modifiersContext } from "./CraftParser.js";
import { Modifier_listContext } from "./CraftParser.js";
import { ModifierContext } from "./CraftParser.js";
import { Simple_componentContext } from "./CraftParser.js";
import { ExposureContext } from "./CraftParser.js";
import { Exposure_nameContext } from "./CraftParser.js";
import { Exposure_propertiesContext } from "./CraftParser.js";
import { Exposure_propertyContext } from "./CraftParser.js";
import { Target_listContext } from "./CraftParser.js";
import { TargetContext } from "./CraftParser.js";
import { Gateway_listContext } from "./CraftParser.js";
import { GatewayContext } from "./CraftParser.js";
import { Service_defContext } from "./CraftParser.js";
import { Services_defContext } from "./CraftParser.js";
import { Service_block_listContext } from "./CraftParser.js";
import { Service_blockContext } from "./CraftParser.js";
import { Service_nameContext } from "./CraftParser.js";
import { Service_propertiesContext } from "./CraftParser.js";
import { Service_propertyContext } from "./CraftParser.js";
import { Deployment_strategyContext } from "./CraftParser.js";
import { Deployment_typeContext } from "./CraftParser.js";
import { Deployment_configContext } from "./CraftParser.js";
import { Deployment_ruleContext } from "./CraftParser.js";
import { Deployment_targetContext } from "./CraftParser.js";
import { Domain_listContext } from "./CraftParser.js";
import { Domain_refContext } from "./CraftParser.js";
import { Datastore_listContext } from "./CraftParser.js";
import { DatastoreContext } from "./CraftParser.js";
import { Use_caseContext } from "./CraftParser.js";
import { ScenarioContext } from "./CraftParser.js";
import { TriggerContext } from "./CraftParser.js";
import { External_triggerContext } from "./CraftParser.js";
import { Action_blockContext } from "./CraftParser.js";
import { ActionContext } from "./CraftParser.js";
import { Sync_actionContext } from "./CraftParser.js";
import { Async_actionContext } from "./CraftParser.js";
import { Internal_actionContext } from "./CraftParser.js";
import { Return_actionContext } from "./CraftParser.js";
import { PhraseContext } from "./CraftParser.js";
import { Connector_wordContext } from "./CraftParser.js";
import { ActorContext } from "./CraftParser.js";
import { DomainContext } from "./CraftParser.js";
import { VerbContext } from "./CraftParser.js";
import { IdentifierContext } from "./CraftParser.js";
import { Quoted_eventContext } from "./CraftParser.js";
import { StringContext } from "./CraftParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CraftParser`.
 */
export class CraftListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `CraftParser.dsl`.
     * @param ctx the parse tree
     */
    enterDsl?: (ctx: DslContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.dsl`.
     * @param ctx the parse tree
     */
    exitDsl?: (ctx: DslContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.domain_def`.
     * @param ctx the parse tree
     */
    enterDomain_def?: (ctx: Domain_defContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.domain_def`.
     * @param ctx the parse tree
     */
    exitDomain_def?: (ctx: Domain_defContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.domains_def`.
     * @param ctx the parse tree
     */
    enterDomains_def?: (ctx: Domains_defContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.domains_def`.
     * @param ctx the parse tree
     */
    exitDomains_def?: (ctx: Domains_defContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.domain_block_list`.
     * @param ctx the parse tree
     */
    enterDomain_block_list?: (ctx: Domain_block_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.domain_block_list`.
     * @param ctx the parse tree
     */
    exitDomain_block_list?: (ctx: Domain_block_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.domain_block`.
     * @param ctx the parse tree
     */
    enterDomain_block?: (ctx: Domain_blockContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.domain_block`.
     * @param ctx the parse tree
     */
    exitDomain_block?: (ctx: Domain_blockContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.domain_name`.
     * @param ctx the parse tree
     */
    enterDomain_name?: (ctx: Domain_nameContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.domain_name`.
     * @param ctx the parse tree
     */
    exitDomain_name?: (ctx: Domain_nameContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.subdomain_list`.
     * @param ctx the parse tree
     */
    enterSubdomain_list?: (ctx: Subdomain_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.subdomain_list`.
     * @param ctx the parse tree
     */
    exitSubdomain_list?: (ctx: Subdomain_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.subdomain`.
     * @param ctx the parse tree
     */
    enterSubdomain?: (ctx: SubdomainContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.subdomain`.
     * @param ctx the parse tree
     */
    exitSubdomain?: (ctx: SubdomainContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.actor_def`.
     * @param ctx the parse tree
     */
    enterActor_def?: (ctx: Actor_defContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.actor_def`.
     * @param ctx the parse tree
     */
    exitActor_def?: (ctx: Actor_defContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.actors_def`.
     * @param ctx the parse tree
     */
    enterActors_def?: (ctx: Actors_defContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.actors_def`.
     * @param ctx the parse tree
     */
    exitActors_def?: (ctx: Actors_defContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.actor_definition_list`.
     * @param ctx the parse tree
     */
    enterActor_definition_list?: (ctx: Actor_definition_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.actor_definition_list`.
     * @param ctx the parse tree
     */
    exitActor_definition_list?: (ctx: Actor_definition_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.actor_definition`.
     * @param ctx the parse tree
     */
    enterActor_definition?: (ctx: Actor_definitionContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.actor_definition`.
     * @param ctx the parse tree
     */
    exitActor_definition?: (ctx: Actor_definitionContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.actorType`.
     * @param ctx the parse tree
     */
    enterActorType?: (ctx: ActorTypeContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.actorType`.
     * @param ctx the parse tree
     */
    exitActorType?: (ctx: ActorTypeContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.actor_name`.
     * @param ctx the parse tree
     */
    enterActor_name?: (ctx: Actor_nameContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.actor_name`.
     * @param ctx the parse tree
     */
    exitActor_name?: (ctx: Actor_nameContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.arch`.
     * @param ctx the parse tree
     */
    enterArch?: (ctx: ArchContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.arch`.
     * @param ctx the parse tree
     */
    exitArch?: (ctx: ArchContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.arch_name`.
     * @param ctx the parse tree
     */
    enterArch_name?: (ctx: Arch_nameContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.arch_name`.
     * @param ctx the parse tree
     */
    exitArch_name?: (ctx: Arch_nameContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.arch_sections`.
     * @param ctx the parse tree
     */
    enterArch_sections?: (ctx: Arch_sectionsContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.arch_sections`.
     * @param ctx the parse tree
     */
    exitArch_sections?: (ctx: Arch_sectionsContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.presentation_section`.
     * @param ctx the parse tree
     */
    enterPresentation_section?: (ctx: Presentation_sectionContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.presentation_section`.
     * @param ctx the parse tree
     */
    exitPresentation_section?: (ctx: Presentation_sectionContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.gateway_section`.
     * @param ctx the parse tree
     */
    enterGateway_section?: (ctx: Gateway_sectionContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.gateway_section`.
     * @param ctx the parse tree
     */
    exitGateway_section?: (ctx: Gateway_sectionContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.arch_component_list`.
     * @param ctx the parse tree
     */
    enterArch_component_list?: (ctx: Arch_component_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.arch_component_list`.
     * @param ctx the parse tree
     */
    exitArch_component_list?: (ctx: Arch_component_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.arch_component`.
     * @param ctx the parse tree
     */
    enterArch_component?: (ctx: Arch_componentContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.arch_component`.
     * @param ctx the parse tree
     */
    exitArch_component?: (ctx: Arch_componentContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.component_flow`.
     * @param ctx the parse tree
     */
    enterComponent_flow?: (ctx: Component_flowContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.component_flow`.
     * @param ctx the parse tree
     */
    exitComponent_flow?: (ctx: Component_flowContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.component_chain`.
     * @param ctx the parse tree
     */
    enterComponent_chain?: (ctx: Component_chainContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.component_chain`.
     * @param ctx the parse tree
     */
    exitComponent_chain?: (ctx: Component_chainContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.component_with_modifiers`.
     * @param ctx the parse tree
     */
    enterComponent_with_modifiers?: (ctx: Component_with_modifiersContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.component_with_modifiers`.
     * @param ctx the parse tree
     */
    exitComponent_with_modifiers?: (ctx: Component_with_modifiersContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.component_name`.
     * @param ctx the parse tree
     */
    enterComponent_name?: (ctx: Component_nameContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.component_name`.
     * @param ctx the parse tree
     */
    exitComponent_name?: (ctx: Component_nameContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.component_modifiers`.
     * @param ctx the parse tree
     */
    enterComponent_modifiers?: (ctx: Component_modifiersContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.component_modifiers`.
     * @param ctx the parse tree
     */
    exitComponent_modifiers?: (ctx: Component_modifiersContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.modifier_list`.
     * @param ctx the parse tree
     */
    enterModifier_list?: (ctx: Modifier_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.modifier_list`.
     * @param ctx the parse tree
     */
    exitModifier_list?: (ctx: Modifier_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.modifier`.
     * @param ctx the parse tree
     */
    enterModifier?: (ctx: ModifierContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.modifier`.
     * @param ctx the parse tree
     */
    exitModifier?: (ctx: ModifierContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.simple_component`.
     * @param ctx the parse tree
     */
    enterSimple_component?: (ctx: Simple_componentContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.simple_component`.
     * @param ctx the parse tree
     */
    exitSimple_component?: (ctx: Simple_componentContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.exposure`.
     * @param ctx the parse tree
     */
    enterExposure?: (ctx: ExposureContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.exposure`.
     * @param ctx the parse tree
     */
    exitExposure?: (ctx: ExposureContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.exposure_name`.
     * @param ctx the parse tree
     */
    enterExposure_name?: (ctx: Exposure_nameContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.exposure_name`.
     * @param ctx the parse tree
     */
    exitExposure_name?: (ctx: Exposure_nameContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.exposure_properties`.
     * @param ctx the parse tree
     */
    enterExposure_properties?: (ctx: Exposure_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.exposure_properties`.
     * @param ctx the parse tree
     */
    exitExposure_properties?: (ctx: Exposure_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.exposure_property`.
     * @param ctx the parse tree
     */
    enterExposure_property?: (ctx: Exposure_propertyContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.exposure_property`.
     * @param ctx the parse tree
     */
    exitExposure_property?: (ctx: Exposure_propertyContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.target_list`.
     * @param ctx the parse tree
     */
    enterTarget_list?: (ctx: Target_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.target_list`.
     * @param ctx the parse tree
     */
    exitTarget_list?: (ctx: Target_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.target`.
     * @param ctx the parse tree
     */
    enterTarget?: (ctx: TargetContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.target`.
     * @param ctx the parse tree
     */
    exitTarget?: (ctx: TargetContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.gateway_list`.
     * @param ctx the parse tree
     */
    enterGateway_list?: (ctx: Gateway_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.gateway_list`.
     * @param ctx the parse tree
     */
    exitGateway_list?: (ctx: Gateway_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.gateway`.
     * @param ctx the parse tree
     */
    enterGateway?: (ctx: GatewayContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.gateway`.
     * @param ctx the parse tree
     */
    exitGateway?: (ctx: GatewayContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.service_def`.
     * @param ctx the parse tree
     */
    enterService_def?: (ctx: Service_defContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.service_def`.
     * @param ctx the parse tree
     */
    exitService_def?: (ctx: Service_defContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.services_def`.
     * @param ctx the parse tree
     */
    enterServices_def?: (ctx: Services_defContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.services_def`.
     * @param ctx the parse tree
     */
    exitServices_def?: (ctx: Services_defContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.service_block_list`.
     * @param ctx the parse tree
     */
    enterService_block_list?: (ctx: Service_block_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.service_block_list`.
     * @param ctx the parse tree
     */
    exitService_block_list?: (ctx: Service_block_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.service_block`.
     * @param ctx the parse tree
     */
    enterService_block?: (ctx: Service_blockContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.service_block`.
     * @param ctx the parse tree
     */
    exitService_block?: (ctx: Service_blockContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.service_name`.
     * @param ctx the parse tree
     */
    enterService_name?: (ctx: Service_nameContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.service_name`.
     * @param ctx the parse tree
     */
    exitService_name?: (ctx: Service_nameContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.service_properties`.
     * @param ctx the parse tree
     */
    enterService_properties?: (ctx: Service_propertiesContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.service_properties`.
     * @param ctx the parse tree
     */
    exitService_properties?: (ctx: Service_propertiesContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.service_property`.
     * @param ctx the parse tree
     */
    enterService_property?: (ctx: Service_propertyContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.service_property`.
     * @param ctx the parse tree
     */
    exitService_property?: (ctx: Service_propertyContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.deployment_strategy`.
     * @param ctx the parse tree
     */
    enterDeployment_strategy?: (ctx: Deployment_strategyContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.deployment_strategy`.
     * @param ctx the parse tree
     */
    exitDeployment_strategy?: (ctx: Deployment_strategyContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.deployment_type`.
     * @param ctx the parse tree
     */
    enterDeployment_type?: (ctx: Deployment_typeContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.deployment_type`.
     * @param ctx the parse tree
     */
    exitDeployment_type?: (ctx: Deployment_typeContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.deployment_config`.
     * @param ctx the parse tree
     */
    enterDeployment_config?: (ctx: Deployment_configContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.deployment_config`.
     * @param ctx the parse tree
     */
    exitDeployment_config?: (ctx: Deployment_configContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.deployment_rule`.
     * @param ctx the parse tree
     */
    enterDeployment_rule?: (ctx: Deployment_ruleContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.deployment_rule`.
     * @param ctx the parse tree
     */
    exitDeployment_rule?: (ctx: Deployment_ruleContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.deployment_target`.
     * @param ctx the parse tree
     */
    enterDeployment_target?: (ctx: Deployment_targetContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.deployment_target`.
     * @param ctx the parse tree
     */
    exitDeployment_target?: (ctx: Deployment_targetContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.domain_list`.
     * @param ctx the parse tree
     */
    enterDomain_list?: (ctx: Domain_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.domain_list`.
     * @param ctx the parse tree
     */
    exitDomain_list?: (ctx: Domain_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.domain_ref`.
     * @param ctx the parse tree
     */
    enterDomain_ref?: (ctx: Domain_refContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.domain_ref`.
     * @param ctx the parse tree
     */
    exitDomain_ref?: (ctx: Domain_refContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.datastore_list`.
     * @param ctx the parse tree
     */
    enterDatastore_list?: (ctx: Datastore_listContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.datastore_list`.
     * @param ctx the parse tree
     */
    exitDatastore_list?: (ctx: Datastore_listContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.datastore`.
     * @param ctx the parse tree
     */
    enterDatastore?: (ctx: DatastoreContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.datastore`.
     * @param ctx the parse tree
     */
    exitDatastore?: (ctx: DatastoreContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.use_case`.
     * @param ctx the parse tree
     */
    enterUse_case?: (ctx: Use_caseContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.use_case`.
     * @param ctx the parse tree
     */
    exitUse_case?: (ctx: Use_caseContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.scenario`.
     * @param ctx the parse tree
     */
    enterScenario?: (ctx: ScenarioContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.scenario`.
     * @param ctx the parse tree
     */
    exitScenario?: (ctx: ScenarioContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.trigger`.
     * @param ctx the parse tree
     */
    enterTrigger?: (ctx: TriggerContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.trigger`.
     * @param ctx the parse tree
     */
    exitTrigger?: (ctx: TriggerContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.external_trigger`.
     * @param ctx the parse tree
     */
    enterExternal_trigger?: (ctx: External_triggerContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.external_trigger`.
     * @param ctx the parse tree
     */
    exitExternal_trigger?: (ctx: External_triggerContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.action_block`.
     * @param ctx the parse tree
     */
    enterAction_block?: (ctx: Action_blockContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.action_block`.
     * @param ctx the parse tree
     */
    exitAction_block?: (ctx: Action_blockContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.action`.
     * @param ctx the parse tree
     */
    enterAction?: (ctx: ActionContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.action`.
     * @param ctx the parse tree
     */
    exitAction?: (ctx: ActionContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.sync_action`.
     * @param ctx the parse tree
     */
    enterSync_action?: (ctx: Sync_actionContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.sync_action`.
     * @param ctx the parse tree
     */
    exitSync_action?: (ctx: Sync_actionContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.async_action`.
     * @param ctx the parse tree
     */
    enterAsync_action?: (ctx: Async_actionContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.async_action`.
     * @param ctx the parse tree
     */
    exitAsync_action?: (ctx: Async_actionContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.internal_action`.
     * @param ctx the parse tree
     */
    enterInternal_action?: (ctx: Internal_actionContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.internal_action`.
     * @param ctx the parse tree
     */
    exitInternal_action?: (ctx: Internal_actionContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.return_action`.
     * @param ctx the parse tree
     */
    enterReturn_action?: (ctx: Return_actionContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.return_action`.
     * @param ctx the parse tree
     */
    exitReturn_action?: (ctx: Return_actionContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.phrase`.
     * @param ctx the parse tree
     */
    enterPhrase?: (ctx: PhraseContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.phrase`.
     * @param ctx the parse tree
     */
    exitPhrase?: (ctx: PhraseContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.connector_word`.
     * @param ctx the parse tree
     */
    enterConnector_word?: (ctx: Connector_wordContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.connector_word`.
     * @param ctx the parse tree
     */
    exitConnector_word?: (ctx: Connector_wordContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.actor`.
     * @param ctx the parse tree
     */
    enterActor?: (ctx: ActorContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.actor`.
     * @param ctx the parse tree
     */
    exitActor?: (ctx: ActorContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.domain`.
     * @param ctx the parse tree
     */
    enterDomain?: (ctx: DomainContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.domain`.
     * @param ctx the parse tree
     */
    exitDomain?: (ctx: DomainContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.verb`.
     * @param ctx the parse tree
     */
    enterVerb?: (ctx: VerbContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.verb`.
     * @param ctx the parse tree
     */
    exitVerb?: (ctx: VerbContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.quoted_event`.
     * @param ctx the parse tree
     */
    enterQuoted_event?: (ctx: Quoted_eventContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.quoted_event`.
     * @param ctx the parse tree
     */
    exitQuoted_event?: (ctx: Quoted_eventContext) => void;
    /**
     * Enter a parse tree produced by `CraftParser.string`.
     * @param ctx the parse tree
     */
    enterString?: (ctx: StringContext) => void;
    /**
     * Exit a parse tree produced by `CraftParser.string`.
     * @param ctx the parse tree
     */
    exitString?: (ctx: StringContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

