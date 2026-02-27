#!/usr/bin/env bash
# Build the Astro site and sync output to the root for GitHub Pages deployment.
# Usage: ./build.sh [--push]
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
ASTRO="$ROOT/astro-src"
DIST="$ASTRO/dist"

echo "→ Building Astro..."
cd "$ASTRO"
node_modules/.bin/astro build

echo "→ Syncing dist/ to root..."
PAGES=(
  index.html
  404.html
  about/index.html
  contact/index.html
  stack/index.html
  lab/index.html
  post/index.html
  post/agent-memory-framework/index.html
  post/applyops-agentic-job-search/index.html
  post/agentic-task-orchestration/index.html
  post/consumeraffairs-ai-platform/index.html
  post/digibrain/index.html
  post/speakeasy/index.html
  post/amazon-dash-cart/index.html
  post/signify-lightfinder/index.html
)

for page in "${PAGES[@]}"; do
  src="$DIST/$page"
  dst="$ROOT/$page"
  if [ -f "$src" ]; then
    mkdir -p "$(dirname "$dst")"
    cp "$src" "$dst"
    echo "  copied $page"
  else
    echo "  skip   $page (not in dist)"
  fi
done

# Sync public data files
if [ -d "$DIST/data" ]; then
  cp -r "$DIST/data/." "$ROOT/data/"
  echo "  synced data/"
fi

echo "→ Done."

if [ "${1:-}" = "--push" ]; then
  cd "$ROOT"
  git add -A
  git diff --cached --quiet && echo "Nothing to commit." && exit 0
  git commit -m "Rebuild site from Astro source

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
  git push origin main
  echo "→ Pushed."
fi
