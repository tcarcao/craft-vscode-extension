#!/bin/bash

# Update Craft Grammar Script
# Fetches the latest Craft.g4 grammar file and regenerates TypeScript parser files

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

CRAFT_REPO_URL="https://raw.githubusercontent.com/tcarcao/craft"
GRAMMAR_REMOTE_PATH="tools/antlr-grammar/Craft.g4"
TEMP_DIR="temp-grammar"
LOCAL_GRAMMAR_PATH="$TEMP_DIR/Craft.g4"

echo -e "${BLUE}🔄 Updating Craft Grammar and Parser Files${NC}"
echo ""

# Get branch/tag argument (defaults to main)
BRANCH=${1:-main}
echo -e "${BLUE}📥 Fetching grammar from branch/tag: ${YELLOW}$BRANCH${NC}"

# Create temp directory
mkdir -p $TEMP_DIR

# Download the grammar file
DOWNLOAD_URL="$CRAFT_REPO_URL/$BRANCH/$GRAMMAR_REMOTE_PATH"
echo -e "${BLUE}🌐 Downloading: $DOWNLOAD_URL${NC}"

if curl -f -s -o "$LOCAL_GRAMMAR_PATH" "$DOWNLOAD_URL"; then
    echo -e "${GREEN}✅ Grammar file downloaded successfully${NC}"
else
    echo -e "${RED}❌ Failed to download grammar file from $DOWNLOAD_URL${NC}"
    echo -e "${YELLOW}💡 Available options:${NC}"
    echo "  - Check if the branch/tag exists: $BRANCH"
    echo "  - Try with a different branch: ./update-grammar.sh main"
    echo "  - Try with a specific tag: ./update-grammar.sh v1.0.0"
    rm -rf $TEMP_DIR
    exit 1
fi

# Show grammar file info
echo ""
echo -e "${BLUE}📄 Grammar file info:${NC}"
echo "  Size: $(wc -c < "$LOCAL_GRAMMAR_PATH") bytes"
echo "  Lines: $(wc -l < "$LOCAL_GRAMMAR_PATH") lines"
echo ""

# Check if antlr-ng is available
if ! command -v npx &> /dev/null; then
    echo -e "${RED}❌ npx not found. Please install Node.js${NC}"
    rm -rf $TEMP_DIR
    exit 1
fi

# Navigate to server directory for generation
cd server

echo -e "${BLUE}🔧 Installing server dependencies...${NC}"
npm install

echo -e "${BLUE}⚙️  Generating TypeScript parser files...${NC}"

# Generate parser files using the downloaded grammar
npx antlr-ng -Dlanguage=TypeScript "../$LOCAL_GRAMMAR_PATH" -v true -o src/parser/generated --exact-output-dir

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Parser files generated successfully${NC}"
else
    echo -e "${RED}❌ Failed to generate parser files${NC}"
    cd ..
    rm -rf $TEMP_DIR
    exit 1
fi

cd ..

# Clean up temp directory
rm -rf $TEMP_DIR

# Show generated files
echo ""
echo -e "${BLUE}📁 Generated parser files:${NC}"
ls -la server/src/parser/generated/

echo ""
echo -e "${GREEN}✅ Grammar update completed successfully!${NC}"
echo ""
echo -e "${BLUE}🔄 Next steps:${NC}"
echo "  1. Test the extension: npm run dev"
echo "  2. Build the extension: npm run bundle"
echo "  3. Commit the updated parser files if everything works"
echo ""
echo -e "${YELLOW}💡 To update to a specific version:${NC}"
echo "  ./update-grammar.sh v1.2.0"
echo "  ./update-grammar.sh develop"