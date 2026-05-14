# Changelog

## [0.2.0] — 2026-05-14

### Added
- **Mermaid preview commands.** Three new commands render Mermaid diagrams in-editor via the bundled `mermaid` npm package:
  - `Craft: Preview Mermaid Domain`
  - `Craft: Preview Mermaid Sequence`
  - `Craft: Preview Mermaid C4`
  Each opens a single reusable webview. Diagrams render client-side — no server-side image generation, works offline (no CDN fetches).
- **Export commands.** Two new commands shell out to the bundled `craft` CLI:
  - `Craft: Copy Diagram as Mermaid` — puts Mermaid source on the system clipboard.
  - `Craft: Export Diagram as Markdown` — writes `.md` files (Mermaid wrapped in fenced blocks) to a user-selected directory. GitHub renders them inline.
- **`craft.mermaid.theme` setting.** Choose between `default`, `dark`, `forest`, and `neutral` Mermaid themes for in-editor previews.

### Changed
- Bundled `mermaid@10` (~600 KB minified) is now included in the VSIX. No CDN fetches.
- Bundled LSP binary updated to `craft v2.8.2`. v2.8.2 adds the `/preview/mermaid/{domain,sequence,c4}` server endpoints the new commands call.

### Notes
- The new Mermaid commands are Command Palette only in this release. Side-panel buttons in the Domains/Services views continue to use the existing PlantUML preview pipeline. A "Preview as Mermaid" entry in the side panel can land in a follow-up.

---

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
