# nushydude.github.io

Modern rebuild of Anusha Dharmasena's personal site using Astro, TypeScript, Tailwind, and MDX.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Astro Content Collections
- MDX
- RSS + sitemap

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content model

- Blog posts: `src/content/blog/*.mdx`
- Project pages: `src/content/projects/*.md`
- Site configuration: `src/lib/site.ts`
- Public assets: `public/`

## Deployment

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

Expected GitHub setup:
- repository: `nushydude/nushydude.github.io`
- default branch: `master`
- Pages source: **GitHub Actions**

Once that is enabled, pushes to `master` will:
- run `npm ci`
- run `npm run build`
- upload `dist/`
- deploy to GitHub Pages

## Notes

- The Astro build under `src/` is the only publish path; the old Bootstrap static site has been removed.
- The main remaining quality gap is visual: a higher-resolution profile photo (the current one is 200×200) and real product screenshots for LightFrame would lift the site noticeably.
- `vite@7.3.5` is pinned because a newer resolved Vite major broke the Tailwind integration during setup.
- Default social/OG card lives at `public/images/og/og-default.svg`; regenerate the PNG with `sips -s format png public/images/og/og-default.svg --out public/images/og/og-default.png`.
