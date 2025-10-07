
import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CraftParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class CraftVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `CraftParser.dsl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDsl?: (ctx: DslContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.domain_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_def?: (ctx: Domain_defContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.domains_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomains_def?: (ctx: Domains_defContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.domain_block_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_block_list?: (ctx: Domain_block_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.domain_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_block?: (ctx: Domain_blockContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.domain_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_name?: (ctx: Domain_nameContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.subdomain_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubdomain_list?: (ctx: Subdomain_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.subdomain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubdomain?: (ctx: SubdomainContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.actor_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActor_def?: (ctx: Actor_defContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.actors_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActors_def?: (ctx: Actors_defContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.actor_definition_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActor_definition_list?: (ctx: Actor_definition_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.actor_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActor_definition?: (ctx: Actor_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.actorType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActorType?: (ctx: ActorTypeContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.actor_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActor_name?: (ctx: Actor_nameContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.arch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch?: (ctx: ArchContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.arch_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch_name?: (ctx: Arch_nameContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.arch_sections`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch_sections?: (ctx: Arch_sectionsContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.presentation_section`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPresentation_section?: (ctx: Presentation_sectionContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.gateway_section`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGateway_section?: (ctx: Gateway_sectionContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.arch_component_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch_component_list?: (ctx: Arch_component_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.arch_component`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch_component?: (ctx: Arch_componentContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.component_flow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_flow?: (ctx: Component_flowContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.component_chain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_chain?: (ctx: Component_chainContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.component_with_modifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_with_modifiers?: (ctx: Component_with_modifiersContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.component_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_name?: (ctx: Component_nameContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.component_modifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_modifiers?: (ctx: Component_modifiersContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.modifier_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier_list?: (ctx: Modifier_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier?: (ctx: ModifierContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.simple_component`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_component?: (ctx: Simple_componentContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.exposure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExposure?: (ctx: ExposureContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.exposure_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExposure_name?: (ctx: Exposure_nameContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.exposure_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExposure_properties?: (ctx: Exposure_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.exposure_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExposure_property?: (ctx: Exposure_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.target_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_list?: (ctx: Target_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget?: (ctx: TargetContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.gateway_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGateway_list?: (ctx: Gateway_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.gateway`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGateway?: (ctx: GatewayContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.service_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_def?: (ctx: Service_defContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.services_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitServices_def?: (ctx: Services_defContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.service_block_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_block_list?: (ctx: Service_block_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.service_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_block?: (ctx: Service_blockContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.service_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_name?: (ctx: Service_nameContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.service_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_properties?: (ctx: Service_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.service_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_property?: (ctx: Service_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.deployment_strategy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_strategy?: (ctx: Deployment_strategyContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.deployment_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_type?: (ctx: Deployment_typeContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.deployment_config`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_config?: (ctx: Deployment_configContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.deployment_rule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_rule?: (ctx: Deployment_ruleContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.deployment_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_target?: (ctx: Deployment_targetContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.domain_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_list?: (ctx: Domain_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.domain_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_ref?: (ctx: Domain_refContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.datastore_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatastore_list?: (ctx: Datastore_listContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.datastore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatastore?: (ctx: DatastoreContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.use_case`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUse_case?: (ctx: Use_caseContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.scenario`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScenario?: (ctx: ScenarioContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger?: (ctx: TriggerContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.external_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExternal_trigger?: (ctx: External_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.action_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAction_block?: (ctx: Action_blockContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAction?: (ctx: ActionContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.sync_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSync_action?: (ctx: Sync_actionContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.async_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsync_action?: (ctx: Async_actionContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.internal_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInternal_action?: (ctx: Internal_actionContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.return_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn_action?: (ctx: Return_actionContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.phrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPhrase?: (ctx: PhraseContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.connector_word`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnector_word?: (ctx: Connector_wordContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.actor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActor?: (ctx: ActorContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.domain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain?: (ctx: DomainContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.verb`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerb?: (ctx: VerbContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.quoted_event`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuoted_event?: (ctx: Quoted_eventContext) => Result;
    /**
     * Visit a parse tree produced by `CraftParser.string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString?: (ctx: StringContext) => Result;
}

