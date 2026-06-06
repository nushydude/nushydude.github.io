# Publish checklist

## Ready now

- Astro site structure is in place
- blog and projects use content collections
- homepage, about, resume, now, uses, contact, blog, and project pages build successfully
- GitHub Actions workflow for Pages deploy exists at `.github/workflows/deploy.yml`
- build verified locally with `npm run build`

## Before flipping it live

### 1. Visual quality
- Replace the current profile photo with a more deliberate headshot.
- Replace the temporary project SVG cards with real screenshots or sharper diagrams where possible.
- Spot-check mobile spacing on the homepage, project cards, and blog posts.

### 2. Content quality
- Re-read all blog posts once in the browser rather than only in source.
- Add any public contact endpoint you are comfortable exposing, or leave the contact page intentionally minimal.
- Decide whether `lightframe` stays as-is or gets a more concrete problem statement.

### 3. Repository cleanup
Legacy static-site files are still present in the repo root from the old Bootstrap version. They are not part of the new Astro build, but they do create noise.

Candidates to remove after confirmation:
- `index.html`
- `bootstrap/`
- `css/`
- `font-awesome-4.6.3/`
- `img/`
- `js/`
- `files/`
- root `favicon.ico`

### 4. GitHub Pages settings
In GitHub:
- open repository settings
- go to **Pages**
- set **Source** to **GitHub Actions**
- ensure the default branch is `master` if that is the branch you intend to publish from

### 5. First deploy sanity checks
After the first push:
- confirm the Actions workflow passes
- confirm the generated site URL is correct
- check homepage, `/projects/`, one project detail page, `/blog/`, and one blog post
- confirm resume PDF downloads correctly
- confirm `rss.xml` and sitemap are reachable

## Local verification commands

```bash
npm run build
npm run preview
```

## Current biggest weakness
The site now feels structurally launch-ready. The most obvious thing still holding it back is the quality of the real imagery, especially the profile photo.
