# Changelog

## [0.1.0] — 2026-04-24 (pre-release)

### Added
- LSP-powered editing: diagnostics, document outline, hover, semantic colouring, go-to-definition, and folding ranges.
- Automatic `craft` binary download on first `.craft` file open (rust-analyzer style). The binary is cached in VS Code global storage and updated automatically when the extension updates.
- `craft.lsp.executablePath` setting to override the managed binary with a local build.
- TextMate grammar for baseline syntax colouring (keywords, strings, comments) — works without the LSP.

### Changed
- `server/` directory (previous Node.js LSP) removed. All language intelligence is now served by the Go `craft lsp` subprocess.
- Tree-sitter client-side highlighting removed; TextMate grammar provides equivalent coverage.
- Diagram preview (`previewC4`, `previewDomain`) continues to use the HTTP `craft server` — no change to existing workflow.

### Notes
- This is a pre-release. Install via the VS Code "Pre-release" channel or from the VSIX file.
- macOS: see the `craft` CHANGELOG for the Gatekeeper workaround if the binary is quarantined on first download.
