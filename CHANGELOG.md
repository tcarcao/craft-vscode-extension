# Changelog

## [0.1.11] — 2026-05-14

### Changed
- Bundled LSP binary updated to `craft v2.8.1`. Brings per-use-case filtering and splitting (`--use-case`, `--split`), Mermaid output format (`--format puml|mermaid|mermaid-md`), `--stdout` piping, `--force` for .md no-clobber, and a wide set of PlantUML/Mermaid diagram-quality fixes. See the craft CHANGELOG for the full list.

### Notes
- The new craft CLI features are surfaced when users run the bundled binary directly (e.g. via the command palette → "Run Terminal Command" → `craft generate ...`). In-editor preview commands continue to use the PlantUML render path. Mermaid-aware preview / export commands will be added in a follow-up release.

---

## [0.1.10] — 2026-05-04

### Changed
- Bundled LSP binary updated to `craft v2.7.0`.

---

## [0.1.9] — 2026-05-01 (not in previous changelog)

### Changed
- LSP version bump to `2.6.1`.

---

## [0.1.4] — 2026-04-27

### Changed
- Bundled LSP binary updated to `craft v2.5.2` (fixes parse error on numeric tokens in action phrases).

---

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
