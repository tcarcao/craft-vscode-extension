# Craft Language VS Code Extension

A powerful VS Code extension providing syntax highlighting, language server support, and visual diagram generation for the Craft architecture modeling language.

## Features

- **Syntax Highlighting**: Tree-sitter based semantic highlighting for Craft DSL
- **Language Server**: Real-time validation, completion, and formatting
- **Domain Visualization**: Interactive tree views for domains and use cases
- **Service Visualization**: Explore services, boundaries, and architectural relationships
- **Live Preview**: Generate C4, context map, sequence, and domain diagrams
- **Real-time Updates**: Views update automatically as you edit DSL files

## Structure

```
.
├── client/                 # Language Client & UI
│   ├── src/
│   │   ├── extension.ts    # Main extension entry point
│   │   ├── providers/      # Webview providers for domain/service views
│   │   ├── services/       # DSL extraction and processing services
│   │   ├── webview/        # React components for tree views
│   │   └── TreeSitterHighlightProvider.ts
├── server/                 # Language Server
│   └── src/
│       └── server.ts       # Language server implementation
├── resources/              # Tree-sitter grammar and queries
├── dist/                   # Bundled extension files
└── package.json           # Extension manifest and build scripts
```

## Installation

### From VS Code Marketplace (Recommended)

1. Open VS Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open the Extensions view
3. Search for "Craft Language"
4. Click "Install"

Or install via command line:
```bash
code --install-extension tcarcao.craft
```

### From GitHub Releases

1. Go to the [Releases](https://github.com/tcarcao/craft-vscode-extension/releases) page
2. Download the latest `.vsix` file
3. Open VS Code
4. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the command palette
5. Type "Extensions: Install from VSIX..." and select it
6. Choose the downloaded `.vsix` file

Or install from command line:
```bash
code --install-extension craft-0.0.4.vsix
```

### For Developers - Building from Source

#### Prerequisites
```bash
# Install dependencies
npm install
```

#### Development Workflow
```bash
# Development mode (watch files, rebuild on changes)
npm run dev

# Debug in VS Code
# Press F5 to launch Extension Development Host
# Uses debug configuration for sourcemaps
```

#### Production Packaging
```bash
# Build optimized bundle
npm run bundle

# Package extension
npx @vscode/vsce package

# Install locally
code --install-extension craft-0.0.1.vsix
```

## Grammar Updates

The extension uses pre-generated parser files from the main Craft project. To update to the latest grammar:

```bash
# Update to latest grammar from main branch
npm run update-grammar

# Or update to specific version/branch
./update-grammar.sh v1.2.0
./update-grammar.sh develop
```

This script:
1. Downloads the latest `Craft.g4` grammar file from the main repository
2. Regenerates TypeScript parser files using ANTLR
3. Updates the `server/src/parser/generated/` directory

**Note**: Only run this when you want to sync with upstream grammar changes.

## Build Scripts

- `npm run bundle` - Production build (minified, optimized)
- `npm run dev` - Development build with watch mode  
- `npm run debug` - Debug build with sourcemaps
- `npm run update-grammar` - Update grammar from main Craft repository
- `npm run bundle-client` - Bundle main extension code
- `npm run bundle-server` - Bundle language server
- `npm run bundle-webviews` - Bundle React webview components
- `npm run copy-static-assets` - Copy CSS and icon assets

## Extension Architecture

### Bundled Structure (`dist/`)
- `client.js` - Main extension bundle (~711KB)
- `server.js` - Language server bundle (~1.4MB) 
- `webview/domains.js` - Domain tree React app (~158KB)
- `webview/services.js` - Services tree React app (~161KB)
- `styles/treeStyles.css` - UI styles
- `@vscode/codicons/` - VS Code icons
- `tree-sitter-XXXXX.wasm` - Tree-sitter grammar (~206KB)

### Key Components
- **TreeSitterHighlightProvider**: Semantic syntax highlighting
- **DomainsViewProvider**: Interactive domain exploration
- **ServicesViewProvider**: Service architecture visualization  
- **Language Server**: Validation, completion, formatting via tree-sitter

## Development

### Debug Configuration
The extension includes two debug configurations:

1. **Launch Client (TypeScript)** - Debug uncompiled TypeScript source
2. **Launch Client (Bundled)** - Debug bundled production code

### File Watching
```bash
# Watch and rebuild everything
npm run dev

# Watch individual components
npm run dev-client      # Main extension
npm run dev-server      # Language server  
npm run dev-webviews    # React webviews
```

### Testing
1. Press F5 in VS Code to launch Extension Development Host
2. Open a `.craft` file to test:
   - Syntax highlighting
   - Domain/Service tree views (sidebar)
   - Preview commands (Ctrl+Shift+C/M/S/D)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test thoroughly
4. Run `npm run bundle` to ensure production build works
5. Submit a pull request

## Publishing

```bash
# Build and package
npm run bundle
npx @vscode/vsce package

# Publish to marketplace (requires publisher account)
npx @vscode/vsce publish
```