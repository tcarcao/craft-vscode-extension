# Testing Locally

Four layers, ordered from fastest to slowest. Run them in order when verifying a change.

---

## Layer 1 — Go unit tests

Run in `../craft/` (the language server repo):

```bash
make test          # go test ./...
make vet           # go vet on all hand-written packages
```

These cover the parser, sema, workspace, and LSP handler logic. Always run first — they are the fastest signal.

---

## Layer 2 — LSP features with a local binary

Use this when you've changed the Go server and want to test LSP behaviour in VS Code without publishing a release.

**1. Build the binary:**

```bash
# in ../craft/
go build -o /tmp/craft-lsp ./cmd/craft
```

**2. Point the extension at it:**

In VS Code → Settings → search for `craft.lsp.executablePath`:

```
/tmp/craft-lsp
```

When this setting is non-empty and the file exists, `binaryManager.ts` skips the GitHub download entirely.

**3. Reload and open a `.craft` file.** The LSP starts immediately with your local binary.

**4. Inspect logs:**

The extension uses the debug launch args when run from the Extension Development Host (Layer 4), writing to:

```
/tmp/craft-lsp-debug.log
```

When running normally (not from F5), logs go to stderr which VS Code captures in the Output panel → "Craft Language Server".

**5. Unset `executablePath` when done** so you don't accidentally keep using a stale local binary.

---

## Layer 3 — GitHub release download flow

Use this after publishing a new release tag to verify that the artifacts are well-formed and the full download path works.

### 3a — Verify the release artifacts (no VS Code needed)

```bash
# in ../craft/
make test-release
# or for a specific version:
./scripts/test-release.sh 0.1.0
```

This script:
1. Downloads `checksums.txt` from the GitHub release
2. Downloads the archive for the current platform
3. Verifies the SHA256
4. Extracts and runs `craft --version` and `craft lsp --help`
5. Runs the macOS Gatekeeper workaround (`xattr -dr com.apple.quarantine`) if on macOS

If this passes, the artifact is correctly formed and installable.

### 3b — Test the extension download path end-to-end

1. **Make sure `craft.lsp.executablePath` is empty** in VS Code settings.

2. **Clear the cached binary:**

   ```bash
   ./clear-lsp-cache.sh
   ```

   This deletes `~/Library/Application Support/Code/User/globalStorage/tcarcao.craft-arch-diagrams/craft-lsp/` (macOS) or the Linux equivalent.

3. **Reload VS Code** and open a `.craft` file.

4. A progress notification ("Downloading Craft language server v...") should appear in the bottom-right corner. Watch it complete.

5. Verify the LSP is working: syntax highlighting, diagnostics on a broken file, hover.

---

## Layer 4 — Extension Development Host

Use this when you've changed the TypeScript extension code itself and want to test it without packaging a `.vsix`.

1. Open the `craft-vscode-extension/` folder in VS Code.

2. Press **F5** → pick **"Launch Client (Bundled)"**.

   This runs `npm run debug` (esbuild, no minification, sourcemaps) and opens a new VS Code window with your local extension loaded.

3. In the new window, set `craft.lsp.executablePath` to your local binary (Layer 2) or leave it unset to trigger a download (Layer 3).

4. Make changes → re-run F5 to pick them up (or keep a terminal running `npm run dev` for watch mode).

---

## Quick reference

| Goal | Command |
|------|---------|
| Verify Go logic | `make test` in `../craft/` |
| Test LSP features locally | set `craft.lsp.executablePath=/tmp/craft-lsp` |
| Verify a published release artifact | `make test-release` in `../craft/` |
| Force re-download in VS Code | `./clear-lsp-cache.sh`, unset `executablePath`, reload |
| Test extension TS changes | F5 → "Launch Client (Bundled)" |
| Tail LSP logs | `tail -f /tmp/craft-lsp-debug.log` (debug mode only) |
