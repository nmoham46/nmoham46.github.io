#!/bin/bash
# ─────────────────────────────────────────────────────────────
#  sync-assets.sh  –  Syncs files from the Portfolio source
#  folder into public/assets/ so Next.js picks them up live.
#
#  Usage:
#    npm run sync-assets          # one-time copy
#    npm run sync-assets:watch    # auto-watch & sync on change
# ─────────────────────────────────────────────────────────────

SRC="/Users/nafeezahamed/Documents/Personal/Portfolio"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/assets"

sync_files() {
  # Profile photo  (replace with any .png/.jpg named "Professional Photo.*")
  if ls "$SRC"/Professional\ Photo.* 2>/dev/null | grep -q .; then
    src_photo=$(ls "$SRC"/Professional\ Photo.* | head -1)
    ext="${src_photo##*.}"
    cp "$src_photo" "$DEST/profile.$ext"
    # Always keep profile.png as canonical name if needed
    if [ "$ext" != "png" ]; then
      cp "$src_photo" "$DEST/profile.png"
    fi
    echo "✓ Profile photo synced  ← $src_photo"
  fi

  # Resume PDF
  if ls "$SRC"/*.pdf 2>/dev/null | grep -q .; then
    src_pdf=$(ls "$SRC"/*.pdf | head -1)
    cp "$src_pdf" "$DEST/resume.pdf"
    echo "✓ Resume PDF synced     ← $src_pdf"
  fi
}

if [ "$1" = "--watch" ]; then
  echo "👀  Watching $SRC for changes... (Ctrl+C to stop)"
  sync_files

  # Use fswatch if available, otherwise poll every 3 seconds
  if command -v fswatch &>/dev/null; then
    fswatch -0 "$SRC" | while IFS= read -r -d "" _; do
      sync_files
    done
  else
    echo "   (tip: brew install fswatch for instant file-watch)"
    while true; do
      sleep 3
      sync_files
    done
  fi
else
  sync_files
  echo "✅  Sync complete → $DEST"
fi
