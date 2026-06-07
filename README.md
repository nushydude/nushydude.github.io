# nushydude.github.io

Anusha Dharmasena's personal site and blog, built with Astro and deployed to GitHub Pages.

Live at **https://nushydude.github.io**.

## Stack

- **Astro 6** — static site generator
- **TypeScript** — strict config
- **Tailwind CSS 4** — via the `@tailwindcss/vite` plugin (CSS-first; there is no `tailwind.config` file — tokens live in `src/styles/global.css`)
- **MDX** — for blog posts
- **Astro Content Collections** — typed content with Zod schemas
- **RSS** (`@astrojs/rss`) and **sitemap** (`@astrojs/sitemap`)

Requires Node `>=22.12.0`.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # type-check + build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  pages/        # routes: home, projects (+ [slug]), blog (+ [slug], tags/[tag]),
                #   about, resume, contact, now, uses, 404, rss.xml
  layouts/      # BaseLayout.astro — head, SEO/OG meta, JSON-LD, skip link
  components/   # site/, blog/, projects/ UI
  content/
    blog/       # *.mdx posts
    projects/   # *.md project pages
  content.config.ts  # collection schemas (blog, projects)
  lib/site.ts        # site title, URL, nav, social links
  styles/global.css  # Tailwind import + design tokens
public/         # static assets: images, icons, manifest, robots.txt, resume PDF
```

The sitemap (`sitemap-index.xml`) is generated at build time by `@astrojs/sitemap`.

## Content model

- **Blog posts** — `src/content/blog/*.mdx`. Frontmatter: `title`, `summary`, `publishedAt`, optional `updatedAt`, `tags`, `draft`, `featured`, `coverImage`, `ogImage`, `canonicalUrl`.
- **Project pages** — `src/content/projects/*.md`. Frontmatter: `title`, `summary`, `status`, `role`, `stack`, `tags`, `yearStart` (+ optional `yearEnd`), `flagship`/`featured`, `sortOrder`, `links`, `heroImage`, `gallery`, `coverImage`, `ogImage`, `draft`.
- Schemas are defined and validated in `src/content.config.ts`.
- Global site config (nav, social links, email, base URL) lives in `src/lib/site.ts`.

The site is dark-theme only (`color-scheme: dark`).

## Deployment

Pushes to `master` are built and deployed to GitHub Pages by `.github/workflows/deploy.yml`. The workflow runs `npm ci`, runs `npm run build`, uploads `dist/`, and deploys via the official Pages actions on Node 22.

GitHub setup:
- repository: `nushydude/nushydude.github.io`
- default branch: `master`
- Pages source: **GitHub Actions**

## Notes

- `vite` is declared as a direct dependency to keep the `@tailwindcss/vite` plugin on a known-good major; a newer resolved Vite once broke the Tailwind integration.
- The default social/OG card lives at `public/images/og/og-default.svg`. Regenerate the PNG with:
  ```bash
  sips -s format png public/images/og/og-default.svg --out public/images/og/og-default.png
  ```
- Some project visuals are intentional mocks rather than live screenshots: crypto-stdev and LightFrame use hand-made SVGs (to avoid exposing real financial values / because LightFrame screenshots aren't captured yet), while Fiscava and Pantry Ping use real product screenshots with demo data.
- Known gap: the profile photo (`public/images/profile/profile.jpg`) is only 200×200 — a higher-resolution version would sharpen the home and about pages.

## License

[MIT](LICENSE).
