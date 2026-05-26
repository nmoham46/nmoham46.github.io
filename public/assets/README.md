# Portfolio Assets

Drop updated files here and the portfolio picks them up instantly (no code changes needed).

| File | Purpose |
|------|---------|
| `profile.png` | Your professional profile photo (shown in Hero section) |
| `profile-casual.jpg` | Casual photo (backup) |
| `resume.pdf` | Your resume — linked from the Resume download button |

## How to update

1. Replace `profile.png` with your new photo (keep the same filename)
2. Replace `resume.pdf` with your updated resume (keep the same filename)
3. Hard-refresh the browser (`Cmd+Shift+R`) — done!

## Auto-sync from Portfolio folder

If you have updated files in `/Users/nafeezahamed/Documents/Personal/Portfolio/`:

```bash
# One-time sync
npm run sync-assets

# Watch mode — syncs automatically whenever files change in the source folder
npm run sync-assets:watch
```

The watch mode uses `fswatch` for instant detection. Install it with:
```bash
brew install fswatch
```
