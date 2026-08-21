# Changelog

## [0.2.8] — 2026-08-21

### Changed
- **Bundled LSP binary updated to `craft v2.19.0`.** Craft files now indent at 4 spaces by default, and the editor is told so explicitly: `[craft]` in `configurationDefaults` now sets `editor.tabSize: 4` and `editor.detectIndentation: false`, alongside the existing `editor.semanticHighlighting.enabled`. Previously VS Code's `editor.detectIndentation` inferred `tabSize` per file from that file's own content, so an existing 2-space file would autoindent at 2 forever while `craft fmt` and format-on-save produced 4, with no error. A workspace that wants a different width adds a `.craftfmt` file with `indent = 2` (or another value); the language server reads it, not the editor setting.
- **Trailing `//` comments are now column-aligned within their block**, and a wrapped `contexts:` list indents its continuation lines.

### Fixed
- **Editing `.craftfmt` now takes effect immediately, without reloading the window.** The extension's file watcher only matched `**/*.craft`, so the language server's handler for `.craftfmt` changes, which drops its resolved-config cache when the file changes, was never actually notified. The watcher now matches `**/{*.craft,.craftfmt}`.

## [0.2.7] — 2026-08-16

### Added
- **Bundled LSP binary updated to `craft v2.18.0`, which lets a tag value be a list.** `channels: web, mobile` now parses, in the same comma-separated shape a service block's `contexts:` already uses: each item is a bare slug (which may carry slashes and hyphens, so `re/renewal-flow` stays one item) or a quoted string, the two mix freely, and a list may wrap across lines. Previously a comma was an error and the only way to carry more than one thing was a quoted string.

  Quote an item to keep a comma *inside* it: `note: "one, value"` is one value, `channels: web, mobile` is two.

### Fixed
- **A tag that failed to parse no longer appears in the model.** Writing `channels: web, mobile` used to underline the line and then, separately, hand every consumer of the parsed document a tag called `mobile` with an empty value: the tail of the failed value, read back as a key nobody had typed. The squiggles were right; the model behind them was not, and nothing built on the model had any way to tell.

  A statement that does not parse is now discarded whole. That covers more than the comma case: a key with no `:`, a `:` with no value, and a value that is not a value all now leave nothing behind rather than a tag whose value is a lie.

- **The `tags` block is documented** for the first time, in the language docs under Use Cases. It had no documentation anywhere, so the quoted-value form was discoverable only by reading the parser.

## [0.2.6] — 2026-08-16

### Fixed
- **Bundled LSP binary updated to `craft v2.17.2`.** A `when` block that ends up outside any `use_case`, which in practice means one stray `}` closed a `use_case` earlier than you meant it to, was thrown away in full: no scenario, no actions, no participants. Nothing in the block reached the model, so nothing built on it saw the block either, and the only sign was a single warning squiggle on the word `when`. Diagrams, outlines, and every other view of the file agreed those lines had never been written.

  The block is still not part of the model, because it is not valid Craft, but the loss is now visible. It is reported as an error rather than a warning, the squiggle covers every line that was discarded rather than the four characters of `when`, and the message names the count and the cause: `unexpected "when" at top level: lines 6-8 were skipped and are not part of the model; a "when" block belongs inside a use_case, and "Settle a seller invoice" (opened at line 1) was already closed at line 4, so that "}" may be extra`.

  If you gate anything on a clean Problems panel, expect files that were previously clean to surface this. That is the point: they were losing content.

## [0.2.5] — 2026-08-14

### Fixed
- **Bundled LSP binary updated to `craft v2.17.1`.** A domain-qualified reference in a `use_case` body, such as `Subscriptions asks re/billing for a fresh charge attempt`, was underlined as an unresolved reference. This affected every bounded-context slot in a use case: any action's subject, the `asks` target, the `returns` target, and the `when ... listens` trigger context. The qualified form has always been valid Craft, and it is the only way to name a bounded context whose name is declared in two domains, so those references had no spelling the editor would accept. On a large model this was the overwhelming majority of the problems reported: across a 193-file architecture repository the count dropped from 940 to 98.
- **Go-to-definition, and the file a problem is reported against, no longer change between runs.** Several checks pick one place to report a finding when the same name appears in more than one file, and which file won was effectively random on each run of the language server. The visible symptoms were a problem jumping to a different file in the Problems panel after a reload, and go-to-definition on a name declared in two files landing somewhere different than it did a moment ago. Both are now stable, and the Problems panel is sorted by file and position.

  If you have a saved list of Craft problems and their locations from an earlier version, re-derive it: the problems themselves were real, but the file and line next to some of them may not have been.

## [0.2.4] — 2026-08-07

### Changed
- **Bundled LSP binary updated to `craft v2.17.0`.** Formatting (`textDocument/formatting`, and format-on-save if you have it enabled) is rewritten as a single walk over the language server's token stream. Every non-whitespace token is now written back verbatim, exactly once, in document order, and the only thing the formatter decides is the whitespace between them, so there is no longer any per-construct code path that can silently drop part of your file.

  Visible differences when you format: a comment written after an action stays on that line instead of being lifted above it; a comment between a field and its value no longer splits the field across two lines; line breaks you put inside a wrapped value are kept rather than joined; and a minified block such as `service Foo{contexts: A}` expands into an indented block. Trailing operation annotations still align into a column, and now do so correctly on a line where a block comment closes.

### Fixed
- **Formatting is idempotent for every document.** Two cases could change a file on each save without ever settling. A file containing an unterminated block comment gained a blank line every time it was formatted, without bound, which under format-on-save meant the file grew as you typed. An empty file and a whitespace-only file alternated between empty and a single newline forever. Both are fixed, and formatting is now verified to reach a fixed point across every `.craft` file in the craft repository.
- **Formatting no longer rewrites whitespace inside a comment.** A bracket in comment text, as in `Billing asks Gateway to charge /* see [1]`, was mistaken for an operation annotation by the alignment pass and padded out to the surrounding column.
- **A file that does not parse cleanly keeps its exact bytes.** The language server's syntax tree now reproduces its source file byte for byte, which is asserted rather than assumed. Previously an unterminated string lost its opening quote inside the tree, so anything rebuilt from it lost a character of your file.

## [0.2.3] — 2026-08-07

### Changed
- **Bundled LSP binary updated to `craft v2.16.0`.** This is a breaking release for `.craft` files: a `kind:` prefix (`bc:`/`domain:`/`service:`/`term:`) is now rejected in every use_case bounded-context slot -- an asks target, a returns target, an action's subject, and a trigger's subject -- as `craft/syntax/kind-prefix-in-target`. Write the bare name or the qualified `<domain>/<name>` form instead, which is now accepted in all four of those slots (previously only the asks target took it). See the craft CHANGELOG for the full v2.16.0 list, including the new `craft fmt` CLI command and twelve fixed formatter content-loss defects.

### Added
- **Syntax highlighting for operation annotations.** A trailing `[POST /v1/charges]` on an action line now colours: the recognised protocol verb (`GET`/`POST`/`PUT`/`PATCH`/`DELETE`/`HEAD`/`OPTIONS`/`GRPC`/`TOPIC`/`QUERY`) as a keyword, the rest of the bracket as payload text. Only the last `[...]` on a line whose `]` is the line's final token is recognised as the annotation, matching the parser: an earlier `[` in the phrase, or one that never closes before end of line, stays plain prose. This is a TextMate-grammar rule for before the language server connects (and for whenever semantic highlighting is off); the LSP's own semantic tokens for the annotation take over once connected.

### Fixed
- **The grammar no longer paints an illegal `kind:` prefix as a valid slug.** A `kind:` prefix in an asks target, a returns target, an action's subject, or a trigger's subject is now a parse error, so those four positions are coloured as invalid instead of falling through to the generic node-slug rule that colours a well-formed slug. `context_map` and `glossary` edge endpoints are unaffected by this change -- they still accept a `kind:` prefix syntactically.

## [0.2.2] — 2026-08-05

### Fixed
- **Bundled LSP binary updated to `craft v2.15.2`, which fixes syntax highlighting dying on files that contain non-ASCII characters.** An accented name, an em dash in a comment, or an emoji anywhere in a `.craft` file made every `textDocument/semanticTokens/full` request fail with `internal error: runtime error: slice bounds out of range`, so the file lost its semantic colouring entirely and the error repeated on each edit.
  - Cause was in the language server's parser: the lexer counts columns in runes, but the tree builder treated them as byte offsets, so on a line holding a multi-byte character the syntax tree ended up wider than the source and the trailing token positions pointed past end-of-file.
- **Edits on lines containing non-ASCII characters no longer corrupt the document the server sees.** LSP sends character offsets as UTF-16 code units; the server was reading them as bytes, so an incremental change on such a line was applied at the wrong offset, occasionally splitting a character in half. The server's copy of the buffer then silently disagreed with the editor's, which could surface as diagnostics pointing at text that is not there.
- **Positions on non-ASCII lines are now correct across the board:** go-to-definition targets and where it triggers, document symbols, hovers, diagnostic squiggles, and semantic-token spans. All were shifted right by one column per extra byte, and highlight spans ran too wide, so colouring bled onto whatever followed an accented word.

Pure-ASCII files are unaffected by every item above.

## [0.2.1] — 2026-07-27

### Changed
- **Bundled LSP binary updated to `craft v2.15.1`** (was `v2.8.2`, six minor versions behind). This is the first release carrying the DSL vNext language features, so the editor now reports them:
  - Typed refs on `notifies`/`listens`/`asks` — event refs (`notifies order.OrderCreated`) and node slugs (`bc:re/subscriptions`, `term:billing/dunning`, `service:subscriptions-api`).
  - `craft/lint/deprecated-string-ref` on the legacy quoted event form (`notifies "Order Created"`), pointing at the typed-ref replacement.
  - `craft/sema/malformed-slug` on badly shaped slugs, plus the `context_map` (v2.12.0) and `glossary` (v2.13.0) blocks with their cross-validation lints.
  - `catalog_ref:` service anchor (renamed from `opslevel:` in v2.15.0).
- **Releases now pick their Marketplace channel from the version number.** Odd minor (`0.3.x`) publishes to the pre-release channel; even minor (`0.2.x`) publishes to stable, per [VS Code's pre-release recommendation](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#prerelease-extensions). Every release since `v0.1.0` had gone out with a hardcoded `--pre-release`, so users on the default stable channel never received the LSP-based extension at all. The GitHub release's `prerelease` flag follows the same signal.
- The VSIX attached to the GitHub release is now the exact artifact published to both registries (`vsce publish --packagePath`), rather than a separately repackaged one. Packaging happens after the channel is resolved, so the pre-release property is baked into the manifest that ships.

### Added
- **Syntax highlighting for typed refs.** Event refs colour their qualifier and event name separately (`order` vs `OrderCreated`); node slugs colour the kind prefix, namespace, and name separately.
- **Syntax highlighting for `context_map` and `glossary`.** Both block keywords, all eight DDD relationship patterns, the three glossary relation verbs, and the endpoints on either side of an edge (including bare `re/billing` paths and `Wallet/balance` term nodes).
- `catalog_ref:` and `repo:` are now highlighted as service fields.

### Fixed
- **A slash in prose no longer starts a comment.** The TextMate grammar matched `//` anywhere, so `Order asks Y for http://api` coloured the rest of the line as a comment. It now requires the `//` to be at line start or preceded by whitespace, matching the lexer's rule (craft v2.9.0 flexible prose). Genuine trailing comments are unaffected.

### Notes
- **This is the first release to reach the stable Marketplace channel.** Every release from `v0.1.0` through `v0.2.0` published to the pre-release channel only, so users on the default channel had never received the LSP-based extension. Under the new convention, `0.2.x` (even minor) is stable and `0.3.x` (odd minor) would be pre-release.
- `craft v2.15.1` fixes diagnostic positions in the `craft` CLI and `pkg/craft`. The LSP path was never affected, so this release's editor behaviour is the same as it would have been on `v2.15.0`; the pin moves to `v2.15.1` to keep the bundled binary current.

---

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
