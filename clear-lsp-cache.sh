#!/usr/bin/env bash
# Remove the cached LSP binary so VS Code re-downloads it on next activation.
# Run this before testing the GitHub release download flow end-to-end.
set -euo pipefail

EXT_ID="tcarcao.craft-arch-diagrams"

case "$(uname -s)" in
  Darwin) GLOBAL_STORAGE="$HOME/Library/Application Support/Code/User/globalStorage" ;;
  Linux)  GLOBAL_STORAGE="$HOME/.config/Code/User/globalStorage" ;;
  *) echo "error: unsupported OS" >&2; exit 1 ;;
esac

CACHE_DIR="${GLOBAL_STORAGE}/${EXT_ID}/craft-lsp"

if [[ ! -d "$CACHE_DIR" ]]; then
  echo "cache directory does not exist — nothing to clear"
  echo "  expected: $CACHE_DIR"
  exit 0
fi

echo "removing: $CACHE_DIR"
rm -rf "$CACHE_DIR"
echo "done — VS Code will re-download the binary next time the extension activates"
echo ""
echo "next steps:"
echo "  1. make sure craft.lsp.executablePath is unset in VS Code settings"
echo "  2. open (or reload) VS Code with a .craft file"
echo "  3. watch the download notification in the bottom-right corner"
