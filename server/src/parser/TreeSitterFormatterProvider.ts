/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextDocument } from 'vscode-languageserver-textdocument';
import { TextEdit, Range, Position } from 'vscode-languageserver/node.js';
import { Logger } from '../utils/Logger.js';

/**
 * Pure query-driven Tree-sitter formatter for Craft DSL
 * NO hardcoded node.type checks - everything driven by format.scm queries
 */
export class TreeSitterFormatterProvider {
  private query: any = null;

  constructor(private parser: any, private language: any) {
    this.initializeQuery();
  }

  private initializeQuery(): void {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const path = require('path');
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const fs = require('fs');

      const queryPath = path.join(__dirname, '../resources/queries/format.scm');
      const querySource = fs.readFileSync(queryPath, 'utf8');

      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const TreeSitter = require('web-tree-sitter');
      this.query = new TreeSitter.Query(this.language, querySource);

      Logger.info('✅ Formatting query loaded');
    } catch (error) {
      Logger.warn('⚠️ Could not load formatting query:', error);
    }
  }

  async formatDocument(document: TextDocument): Promise<TextEdit[]> {
    if (!this.parser || !this.query) {
      Logger.warn('Tree-sitter parser/query not initialized - formatting disabled');
      return [];
    }

    const text = document.getText();
    const tree = this.parser.parse(text);
    const formatted = this.formatWithQuery(tree.rootNode, text);

    if (formatted === text) {
      return [];
    }

    return [{
      range: Range.create(
        Position.create(0, 0),
        document.positionAt(text.length)
      ),
      newText: formatted
    }];
  }

  private formatWithQuery(rootNode: any, sourceText: string): string {
    const captures = this.query.captures(rootNode);
    const context = new FormattingContext(sourceText, captures);
    return this.formatNode(rootNode, context, 0);
  }

  private formatNode(node: any, ctx: FormattingContext, indent: number): string {
    const roles = ctx.getRoles(node);

    if (roles.has('identifier') || roles.has('string') ||
      roles.has('number') || roles.has('number.percentage') ||
      roles.has('boolean')) {
      return ctx.getText(node);
    }

    if (roles.has('comment')) {
      return this.formatComment(node, ctx, indent);
    }

    if (roles.has('brace.open') || roles.has('brace.close')) {
      return ''; // Handled by block formatters
    }

    if (roles.has('token.colon')) {
      return ':';
    }

    if (roles.has('token.arrow')) {
      return ctx.getText(node); // Could be '>' or '->'
    }

    if (roles.has('token.paren.open') || roles.has('token.paren.close')) {
      return ctx.getText(node); // '(' or ')'
    }

    if (roles.has('token.comma')) {
      return ',';
    }

    if (this.hasRoleStartingWith(roles, 'keyword.')) {
      return ctx.getText(node); // to, asks, etc.
    }

    if (ctx.hasRole(node, "content.actor-type")) {
      return ctx.getText(node);
    }

    if (ctx.hasRole(node, "content.connector-word")) {
      return ctx.getText(node);
    }

    if (roles.has('arch.section')) {
      return this.formatArchSection(node, ctx);
    }

    if (roles.has('content.when-clause')) {
      return this.formatWhenClause(node, ctx);
    }

    if (roles.has('content.identifier-list')) {
      return this.formatIdentifierList(node, ctx);
    }

    if (roles.has('content.component')) {
      return this.formatArchComponent(node, ctx);
    }

    if (roles.has('content.component-list')) {
      return this.formatComponentList(node, ctx);
    }

    if (roles.has('content.component-flow')) {
      return this.formatComponentFlow(node, ctx);
    }

    if (roles.has('content.component-with-modifiers')) {
      return this.formatComponent(node, ctx);
    }

    if (roles.has('content.component-modifiers')) {
      return this.formatComponentModifiers(node, ctx);
    }

    if (roles.has('content.modifier')) {
      return this.formatComponentModifier(node, ctx);
    }

    if (roles.has('content.exposure-to-property')) {
      return `${' '.repeat(indent * 4)}to: ${this.unwrapAndFormat(node, ctx, 0)}`;
    }

    if (roles.has('content.exposure-through-property')) {
      return `${' '.repeat(indent * 4)}through: ${this.unwrapAndFormat(node, ctx, 0)}`;
    }

    if (roles.has('content.exposure-of-property')) {
      return `${' '.repeat(indent * 4)}of: ${this.unwrapAndFormat(node, ctx, 0)}`;
    }

    if (roles.has('content.domains-property')) {
      return `${' '.repeat(indent * 4)}domains: ${this.unwrapAndFormat(node, ctx, 0)}`; 
    }

    if (roles.has('content.language-property')) {
      return `${' '.repeat(indent * 4)}language: ${this.unwrapAndFormat(node, ctx, 0)}`; 
    }

    if (roles.has('content.data-stores-property')) {
      return `${' '.repeat(indent * 4)}data-stores: ${this.unwrapAndFormat(node, ctx, 0)}`; 
    }

    if (roles.has('content.deployment-property')) {
      return `${' '.repeat(indent * 4)}deployment: ${this.unwrapAndFormat(node, ctx, 0)}`; 
    }

    if (roles.has('content.deployment-type')) {
      return ctx.getText(node);
    }

    if (roles.has('content.deployment-rules')) {
      return this.formatDeploymentRules(node, ctx);
    }

    if (roles.has('content.deployment-rule')) {
      return this.formatDeploymentRule(node, ctx);
    }

    if (roles.has('content.action')) {
      const ind = 2;
      return `${' '.repeat(ind * 4)}${this.unwrapAndFormat(node, ctx, 0)}`; 
    }

    if (this.hasRoleStartingWith(roles, 'content.')) {
      return this.formatContentNode(node, ctx, indent);
    }

    if (ctx.hasRole(node, 'block.actor')) {
      return this.formatBlockActor(node, ctx);
    }

    if (ctx.hasTopLevelRole(node) || this.hasRoleStartingWith(roles, 'block.')) {
      return this.formatBlock(node, ctx, indent);
    }

    if (node.children && node.children.length > 0) {
      return this.unwrapAndFormat(node, ctx, indent);
    }

    return '';
  }

  private hasRoleStartingWith(roles: Set<string>, prefix: string): boolean {
    for (const role of roles) {
      if (role.startsWith(prefix)) {
        return true;
      }
    }
    return false;
  }

  private unwrapAndFormat(node: any, ctx: FormattingContext, indent: number): string {
    // Special case: root level (no parent)
    if (!node.parent) {
      const topLevelBlocks = node.children
        .filter((child: any) => ctx.hasTopLevelRole(child))
        .map((child: any) => this.formatNode(child, ctx, 0))
        .filter((text: string) => text.trim().length > 0);

      return topLevelBlocks.join('\n\n') + '\n';
    }

    // Unknown container - unwrap by recursively formatting children
    const children = node.children
      .map((child: any) => this.formatNode(child, ctx, indent))
      .filter((text: string) => text.trim().length > 0);

    return children.join('');
  }

  private isStructuralToken(node: any, ctx: FormattingContext): boolean {
    const roles = ctx.getRoles(node);
    if (roles.has('brace.open') || roles.has('brace.close')) {
      return true;
    }

    const text = ctx.getText(node);
    return text === '{' || text === '}' || text === '' || text.trim() === '';
  }

  private formatBlockActor(node: any, ctx: FormattingContext) {
    const components = [];
    for (const child of node.children) {
      const formatted = this.formatNode(child, ctx, 2);
      if (formatted.trim()) {
        components.push(formatted);
      }
    }
    return "actor " + components.join(" ");
  }

  private formatBlock(node: any, ctx: FormattingContext, indent: number): string {
    const ind = ' '.repeat(indent * 4);
    const lines: string[] = [];

    // Build block header
    const header = this.buildBlockHeader(node, ctx);

    // Get block content (everything between braces)
    const blockContent = this.getBlockContent(node, ctx);

    // Check if this is a special block type
    const roles = ctx.getRoles(node);

    if (roles.has('block.arch')) {
      // Arch block: format in order, sections get special formatting
      for (const child of blockContent) {
        const childRoles = ctx.getRoles(child);
        const formatted = this.formatNode(child, ctx, indent + 1);
        if (formatted.trim()) {
          lines.push(formatted);
          // Add blank line after sections
          if (childRoles.has('arch.section')) {
            lines.push('');
          }
        }
      }
      // Remove trailing blank line if present
      if (lines[lines.length - 1] === '') {
        lines.pop();
      }
    } else if (roles.has('block.usecase')) {
      // Use case block: format in order, when clauses get special formatting
      for (const child of blockContent) {
        const formatted = this.formatNode(child, ctx, indent + 1);
        if (formatted.trim()) {
          lines.push(formatted);
        }
      }
    } else {
      // Regular block: format all content items
      for (const child of blockContent) {
        const formatted = this.formatNode(child, ctx, indent + 1);
        if (formatted.trim()) {
          lines.push(formatted);
        }
      }
    }

    let content = lines.join('\n');

    if (!content.startsWith("\n")) {
      content = "\n" + content;
    }

    // ensure always single \n in the end
    content = content.replace(/\n*$/, '\n');

    return `${ind}${header} {${content}${ind}}`;
  }

  private buildBlockHeader(node: any, ctx: FormattingContext): string {
    const parts: string[] = [];

    for (const child of node.children) {
      const roles = ctx.getRoles(child);

      // Stop at opening brace
      if (roles.has('brace.open')) {
        break;
      }

      // Skip structural tokens
      if (this.isStructuralToken(child, ctx)) {
        continue;
      }

      // Include identifiers, strings, keywords
      if (roles.has('identifier') || roles.has('string') ||
        roles.size === 0) {
        const text = ctx.getText(child).trim();
        if (text && text !== '{') {
          parts.push(text);
        }
      }
    }

    return parts.join(' ');
  }

  private getBlockContent(node: any, ctx: FormattingContext): any[] {
    const content: any[] = [];
    let insideBlock = false;

    for (const child of node.children) {
      const roles = ctx.getRoles(child);

      if (roles.has('brace.open')) {
        insideBlock = true;
        continue;
      }

      if (roles.has('brace.close')) {
        break;
      }

      if (insideBlock && !this.isStructuralToken(child, ctx)) {
        content.push(child);
      }
    }

    return content;
  }

  /**
   * ARCH SECTION: Format as "header:\n    children"
   * Rule: Section header followed by colon, children indented
   * Delegates child formatting to formatNode
   */
  private formatArchSection(node: any, ctx: FormattingContext): string {
    const indent = 1;
    const ind = ' '.repeat(indent * 4);
    const lines: string[] = [];

    // Find the first identifier (header) and collect other children
    let foundHeader = false;
    const childrenToFormat: any[] = [];

    for (const child of node.children) {
      const roles = ctx.getRoles(child);

      // First identifier is the header
      if (!foundHeader && (roles.has('arch.presentation-section') || roles.has('arch.gateway-section'))) {
        const header = ctx.getText(child).trim();
        lines.push(`${ind}${header}:`);
        foundHeader = true;
      }
      // Skip colons - we add them ourselves
      else if (ctx.getText(child).trim() === ':') {
        continue;
      }
      // Everything else is a child to format
      else if (!this.isStructuralToken(child, ctx)) {
        childrenToFormat.push(child);
      }
    }

    // Format children with increased indent - delegate to formatNode
    for (const child of childrenToFormat) {
      const formatted = this.formatNode(child, ctx, 0);
      if (formatted.trim()) {
        lines.push(formatted);
      }
    }

    return "\n" + lines.join('\n');
  }

  /**
   * WHEN CLAUSE: Format as "when trigger\n    actions"
   * Rule: "when" keyword + trigger on first line, actions indented
   * Delegates child formatting to formatNode
   */
  private formatWhenClause(node: any, ctx: FormattingContext): string {
    const indent = 1;
    const ind = ' '.repeat(indent * 4);

    // Build "when trigger" line
    const whenParts: string[] = [];
    const childrenToFormat: any[] = [];

    for (const child of node.children) {
      const roles = ctx.getRoles(child);

      if (roles.has('content.trigger')) {
        const trigger = this.formatNode(child, ctx, 0);
        whenParts.push(trigger);
      } else if (!this.isStructuralToken(child, ctx)) {
        childrenToFormat.push(child);
      }
    }

    const whenClause = `${ind}when ${whenParts.join(' ')}\n`;

    // Format actions with increased indent - delegate to formatNode
    const lines: string[] = [];
    for (const child of childrenToFormat) {
      const formatted = this.formatNode(child, ctx, indent + 1);
      if (formatted.trim()) {
        lines.push(formatted);
      }
    }

    return whenClause + lines.join('\n') + '\n\n';
  }

  private formatArchComponent(node: any, ctx: FormattingContext): string {
    const indent = 2;
    const ind = ' '.repeat(indent * 4);
    const components = [];
    for (const child of node.children) {
      const formatted = this.formatNode(child, ctx, 0);
      if (formatted.trim()) {
        components.push(formatted);
      }
    }
    return ind + components.join("\n");
  }

  private formatIdentifierList(node: any, ctx: FormattingContext): string {
    const identifiers = [];
    for (const child of node.children) {
      const formatted = this.formatNode(child, ctx, 0);
      if (formatted.trim()) {
        identifiers.push(formatted);
      }
    }
    return identifiers.join(", ");
  }

  private formatComponentList(node: any, ctx: FormattingContext): string {
    const components = [];
    for (const child of node.children) {
      const formatted = this.formatNode(child, ctx, 2);
      if (formatted.trim()) {
        components.push(formatted);
      }
    }
    return components.join("\n");
  }

  private formatComponentFlow(node: any, ctx: FormattingContext): string {
    const components = [];
    for (const child of node.children) {
      const formatted = this.formatNode(child, ctx, 0);
      if (formatted.trim()) {
        components.push(formatted);
      }
    }
    return components.join(" > ");
  }

  private formatComponent(node: any, ctx: FormattingContext): string {
    const component = [];
    for (const child of node.children) {
      const formatted = this.formatNode(child, ctx, 0);
      if (formatted.trim()) {
        component.push(formatted);
      }
    }
    return component.join("");
  }

  private formatComponentModifiers(node: any, ctx: FormattingContext): string {
    if (node.children && node.children.length > 0) {
      const parts = node.children
        .map((child: any) => this.formatNode(child, ctx, 0))
        .filter((text: string) => text.trim().length > 0);
      return `[${parts.join(', ')}]`;
    }
    return "[]";
  }

  private formatComponentModifier(node: any, ctx: FormattingContext): string {
    let key = null, value = null;

    for (const child of node.children) {
      const roles = ctx.getRoles(child);

      if (roles.has('content.modifier-key')) {
        key = ctx.getText(child).trim();
      } else if (roles.has('content.modifier-value')) {
        value = ctx.getText(child).trim();
      }
    }

    if (!key && !value) {
      return "";
    }

    if (!value) {
      return key!;
    }
    return `${key}:${value}`;
  }

  private formatContentNode(node: any, ctx: FormattingContext, indent: number): string {
    const ind = ' '.repeat(indent * 4);

    // If node has children, format them inline (space-separated)
    if (node.children && node.children.length > 0) {
      const parts = node.children
        .filter((child: any) => !this.isStructuralToken(child, ctx))
        .map((child: any) => this.formatNode(child, ctx, 0))
        .filter((text: string) => text.trim().length > 0);

      return `${ind}${parts.join(' ')}`;
    }

    // Leaf content node - just return indented text
    return `${ind}${ctx.getText(node).trim()}`;
  }

  private formatDeploymentRules(node: any, ctx: FormattingContext): string {
    if (node.children && node.children.length > 0) {
      const parts = node.children
        .map((child: any) => this.formatNode(child, ctx, 0))
        .filter((text: string) => text.trim().length > 0);
      return `(${parts.join(', ')})`;
    }
    return "()";
  }

  private formatDeploymentRule(node: any, ctx: FormattingContext): string {
    let percentage = null, label = null;

    for (const child of node.children) {
      const roles = ctx.getRoles(child);

      if (roles.has('number.percentage')) {
        percentage = ctx.getText(child).trim();
      } else if (roles.has('identifier')) {
        label = ctx.getText(child).trim();
      }
    }

    if (!percentage && !label) {
      return "";
    }

    if (!label) {
      return percentage!;
    }
    return `${percentage} -> ${label}`;
  }

  private formatComment(node: any, ctx: FormattingContext, indent: number): string {
    const ind = ' '.repeat(indent * 4);
    return `${ind}${ctx.getText(node).trim()}`;
  }
}

/**
 * Formatting context - maps nodes to their roles from queries
 */
class FormattingContext {
  private nodeRoles = new Map<number, Set<string>>();

  constructor(
    private sourceText: string,
    captures: any[]
  ) {
    // Map each node to ALL its roles
    for (const capture of captures) {
      const nodeId = capture.node.id;
      const role = capture.name;

      if (!this.nodeRoles.has(nodeId)) {
        this.nodeRoles.set(nodeId, new Set());
      }
      this.nodeRoles.get(nodeId)!.add(role);
    }
  }

  getText(node: any): string {
    return node.text || this.sourceText.slice(node.startIndex, node.endIndex);
  }

  getRoles(node: any): Set<string> {
    return this.nodeRoles.get(node.id) || new Set();
  }

  hasTopLevelRole(node: any): boolean {
    const roles = this.getRoles(node);
    if (roles.has("comment")) {
      return true;
    }

    return roles.has('top-level.block')
      || roles.has('block.services')
      || roles.has('block.service')
      || roles.has('block.arch')
      || roles.has('block.usecase')
      || roles.has('block.domains')
      || roles.has('block.domain')
      || roles.has('block.exposure')
      || roles.has('block.actors')
      || roles.has('block.actor')
      ;
  }

  hasRole(node: any, role: string): boolean {
    const roles = this.getRoles(node);
    if (roles.has("comment")) {
      return true;
    }
    return roles.has(role);
  }
}
