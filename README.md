# Brian Kibet — AI Trainer & LLM Evaluation Specialist

Personal portfolio website for Brian Kibet (xBraan1), showcasing expertise in AI model evaluation, RLHF, SFT data creation, prompt engineering, and model quality assurance.

## Tech Stack

- **React 18** + **TypeScript** — UI framework
- **Vite** — Build tool
- **Tailwind CSS v4** — Styling (pure black & white luxury theme)
- **React Router v6** — Client-side routing
- **Lucide React** — Icons
- **Cloudflare Workers** — Deployment platform (static assets + Worker)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, stats, expertise preview, CTA |
| `/about` | Background, approach, professional timeline |
| `/expertise` | Searchable/filterable expertise areas |
| `/services` | 9 service categories with detail views |
| `/experience` | Work history and education |
| `/work` | Filterable illustrative case studies |
| `/skills` | Tabbed technical skills display |
| `/insights` | Articles with individual detail pages |
| `/faq` | Searchable accordion FAQ |
| `/contact` | Validated contact form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/cookies` | Cookie policy |

## Development

```bash
npm install
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run typecheck  # TypeScript type checking
```

## Deployment (Cloudflare Workers)

### Prerequisites

1. Cloudflare account
2. Wrangler CLI: `npm install -g wrangler`
3. Authenticate: `wrangler login`

### Deploy

```bash
npm run build
npx wrangler deploy
```

### GitHub Actions

The repository includes a CI/CD workflow (`.github/workflows/deploy.yml`) that auto-deploys on push to `main`.

**Required GitHub Secrets:**
- `CLOUDFLARE_API_TOKEN` — API token with Workers edit permission
- `CLOUDFLARE_ACCOUNT_ID` — Your Cloudflare account ID

### Local Preview

```bash
npx wrangler dev
```

## Architecture

- **Platform**: Cloudflare Workers (NOT Pages)
- **Worker entry**: `worker/index.ts` — serves static assets with security headers
- **SPA routing**: Configured via `not_found_handling = "single-page-application"` in `wrangler.toml`
- **Code splitting**: Per-page lazy loading for optimal performance
- **Security headers**: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy

## Build Output

```
dist/index.html                     1.26 kB │ gzip:  0.63 kB
dist/assets/index-*.css            27.46 kB │ gzip:  5.80 kB
dist/assets/vendor-*.js           162.92 kB │ gzip: 53.28 kB
dist/assets/index-*.js             58.94 kB │ gzip: 18.44 kB
(per-page chunks: 0.3 – 10.4 kB each)
```

Total gzipped: ~86 KB

## License

© Brian Kibet. All rights reserved.
