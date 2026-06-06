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

## Launch notes

- The Astro rebuild is the publish path.
- Legacy static-site files still exist in the repo root and can be removed once you are happy there is nothing worth preserving from the old site.
- The current remaining quality gap is mostly visual: a stronger profile photo and real project screenshots would lift the site noticeably.
- `vite@7.3.5` is pinned because a newer resolved Vite major broke the Tailwind integration during setup.

See `docs/publish-checklist.md` for the final pre-launch checklist.
