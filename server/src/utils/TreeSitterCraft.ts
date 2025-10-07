/* eslint-disable @typescript-eslint/no-require-imports */
import { Logger } from './Logger.js';
import * as path from 'path';

const TreeSitter = require('web-tree-sitter');
const { Parser, Language } = TreeSitter;

// Import the WASM file URL for esbuild
const TreeSitterWasmUrl = require('web-tree-sitter/tree-sitter.wasm');
// Import the Craft language WASM file for esbuild bundling
const CraftWasmUrl = require('tree-sitter-craft/tree-sitter-craft.wasm');

export async function initializeParser(): Promise<typeof Parser> {
	try {
		Logger.info('🔄 Initializing Tree-sitter WASM for Craft...');

		await Parser.init({
			locateFile(scriptName: string, _scriptDirectory: string) {
				if (scriptName === 'tree-sitter.wasm') {
					// Return absolute path to the bundled WASM file
					return path.join(__dirname, TreeSitterWasmUrl);
				}
				return scriptName;
			}
		});
		Logger.info('✅ Tree-sitter WASM runtime initialized');

		// Load the Craft WASM language from bundled resources
		const wasmPath = path.join(__dirname, CraftWasmUrl);
		Logger.debug(`📁 Loading Craft WASM from: ${wasmPath}`);

		const language = await Language.load(wasmPath);
		Logger.info('✅ Craft language loaded');

		const parser = new Parser();
		parser.setLanguage(language);

		Logger.info('✅ Tree-sitter Craft ready (WASM)');
		return parser;
	} catch (error) {
		Logger.error('❌ Failed to initialize Tree-sitter:', error);
		Logger.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
	}
}