
import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ArchDSLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class ArchDSLVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `ArchDSLParser.dsl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDsl?: (ctx: DslContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.domain_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_def?: (ctx: Domain_defContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.domains_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomains_def?: (ctx: Domains_defContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.domain_block_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_block_list?: (ctx: Domain_block_listContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.domain_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_block?: (ctx: Domain_blockContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.domain_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_name?: (ctx: Domain_nameContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.subdomain_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubdomain_list?: (ctx: Subdomain_listContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.subdomain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubdomain?: (ctx: SubdomainContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.arch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch?: (ctx: ArchContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.arch_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch_name?: (ctx: Arch_nameContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.arch_sections`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch_sections?: (ctx: Arch_sectionsContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.presentation_section`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPresentation_section?: (ctx: Presentation_sectionContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.gateway_section`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGateway_section?: (ctx: Gateway_sectionContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.arch_component_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch_component_list?: (ctx: Arch_component_listContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.arch_component`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArch_component?: (ctx: Arch_componentContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.component_flow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_flow?: (ctx: Component_flowContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.component_chain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_chain?: (ctx: Component_chainContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.component_with_modifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_with_modifiers?: (ctx: Component_with_modifiersContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.component_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_name?: (ctx: Component_nameContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.component_modifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponent_modifiers?: (ctx: Component_modifiersContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.modifier_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier_list?: (ctx: Modifier_listContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier?: (ctx: ModifierContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.simple_component`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_component?: (ctx: Simple_componentContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.exposure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExposure?: (ctx: ExposureContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.exposure_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExposure_name?: (ctx: Exposure_nameContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.exposure_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExposure_properties?: (ctx: Exposure_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.exposure_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExposure_property?: (ctx: Exposure_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.target_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_list?: (ctx: Target_listContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget?: (ctx: TargetContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.gateway_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGateway_list?: (ctx: Gateway_listContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.gateway`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGateway?: (ctx: GatewayContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.service_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_def?: (ctx: Service_defContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.services_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitServices_def?: (ctx: Services_defContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.service_block_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_block_list?: (ctx: Service_block_listContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.service_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_block?: (ctx: Service_blockContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.service_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_name?: (ctx: Service_nameContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.service_properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_properties?: (ctx: Service_propertiesContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.service_property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitService_property?: (ctx: Service_propertyContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.deployment_strategy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_strategy?: (ctx: Deployment_strategyContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.deployment_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_type?: (ctx: Deployment_typeContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.deployment_config`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_config?: (ctx: Deployment_configContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.deployment_rule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_rule?: (ctx: Deployment_ruleContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.deployment_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeployment_target?: (ctx: Deployment_targetContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.domain_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_list?: (ctx: Domain_listContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.domain_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain_ref?: (ctx: Domain_refContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.datastore_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatastore_list?: (ctx: Datastore_listContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.datastore`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatastore?: (ctx: DatastoreContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.use_case`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUse_case?: (ctx: Use_caseContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.scenario`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScenario?: (ctx: ScenarioContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger?: (ctx: TriggerContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.external_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExternal_trigger?: (ctx: External_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.action_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAction_block?: (ctx: Action_blockContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAction?: (ctx: ActionContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.sync_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSync_action?: (ctx: Sync_actionContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.async_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsync_action?: (ctx: Async_actionContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.internal_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInternal_action?: (ctx: Internal_actionContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.phrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPhrase?: (ctx: PhraseContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.connector_word`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnector_word?: (ctx: Connector_wordContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.actor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActor?: (ctx: ActorContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.domain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomain?: (ctx: DomainContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.verb`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerb?: (ctx: VerbContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.quoted_event`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuoted_event?: (ctx: Quoted_eventContext) => Result;
    /**
     * Visit a parse tree produced by `ArchDSLParser.string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString?: (ctx: StringContext) => Result;
}

