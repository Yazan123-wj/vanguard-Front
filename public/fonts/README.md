# Font files (TODO)

Drop your self-hosted `.woff2` files here before production:

| File | Role | Notes |
|------|------|-------|
| `display.woff2` | `--font-display` | Wide/condensed grotesk, variable weight, used large and sparingly |
| `body.woff2` | `--font-body` | Neutral grotesk, high legibility at 16–18px |

Both are wired in `src/styles/fonts.ts` via `next/font/local` with `display: 'swap'` and `preload: true`.

**Scaffold note:** `body.woff2` and `display.woff2` currently contain placeholder files so the project builds. Replace both with your brand fonts.
