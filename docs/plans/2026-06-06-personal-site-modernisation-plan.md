# Personal Site Modernisation Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Rebuild `nushydude.github.io` as a modern personal website that doubles as a blog and an app/project showcase, while preserving the useful personal-story material from the old site.

**Architecture:** Build a new static-content-first site in Astro with TypeScript, Tailwind, and MDX. Keep content in typed collections for blog posts and projects, render mostly static pages for speed and SEO, and use small interactive islands only where they genuinely improve UX.

**Tech Stack:** Astro, TypeScript, Tailwind CSS, MDX, Astro Content Collections, Astro Image, RSS, sitemap, optional Pagefind search, Plausible or Umami analytics, optional Giscus comments.

---

## Why a rebuild instead of an in-place update

The existing repo is a single static page built with Bootstrap 3, jQuery 1.12, and Font Awesome 4.6. It has no content model, no build pipeline, no SEO metadata system, and no sensible path to a maintainable blog or project showcase. Rebuilding is lower-risk than trying to incrementally modernise the current HTML/CSS/JS.

---

## Product intent

The new site should do four jobs well:

1. Present who Anusha is **now**, not who he was in 2016.
2. Showcase the products and apps he has built.
3. Provide a clean, search-engine-friendly blog.
4. Make it easy for the right people to get in touch.

### Primary audience
- Technical peers
- Potential collaborators or employers
- People discovering Anusha through his products or blog posts

### Secondary audience
- Friends/family checking the personal site
- Recruiters who need a concise overview and resume link

---

## Recommended site map

### Public routes
- `/` — homepage
- `/about` — current bio, background, working style
- `/projects` — index of apps / products / experiments
- `/projects/[slug]` — individual project case study page
- `/blog` — blog index
- `/blog/[slug]` — individual blog post page
- `/resume` — online resume with PDF download
- `/contact` — contact page / preferred channels
- `/now` — optional now page for current focus
- `/uses` — optional tools / setup page
- `/404` — custom not-found page

### Generated machine-readable routes
- `/rss.xml`
- `/sitemap-index.xml` or `/sitemap.xml`
- `/robots.txt`

---

## Proposed folder structure

```text
/
├─ public/
│  ├─ favicon.ico
│  ├─ images/
│  │  ├─ profile/
│  │  ├─ projects/
│  │  ├─ blog/
│  │  └─ og/
│  └─ resume/
│     └─ anusha-dharmasena-resume.pdf
├─ src/
│  ├─ components/
│  │  ├─ site/
│  │  │  ├─ Header.astro
│  │  │  ├─ Footer.astro
│  │  │  ├─ ThemeToggle.astro
│  │  │  └─ SEO.astro
│  │  ├─ home/
│  │  │  ├─ Hero.astro
│  │  │  ├─ FeaturedProjects.astro
│  │  │  ├─ RecentPosts.astro
│  │  │  └─ ExperienceSummary.astro
│  │  ├─ projects/
│  │  │  ├─ ProjectCard.astro
│  │  │  ├─ ProjectMeta.astro
│  │  │  └─ ProjectGrid.astro
│  │  ├─ blog/
│  │  │  ├─ PostCard.astro
│  │  │  ├─ PostHeader.astro
│  │  │  ├─ TagList.astro
│  │  │  └─ ReadingTime.astro
│  │  └─ content/
│  │     ├─ Prose.astro
│  │     ├─ Callout.astro
│  │     └─ Figure.astro
│  ├─ content/
│  │  ├─ blog/
│  │  │  ├─ rebuilding-my-personal-site.mdx
│  │  │  └─ ...
│  │  ├─ projects/
│  │  │  ├─ fiscava.md
│  │  │  ├─ pantry-ping.md
│  │  │  └─ ...
│  │  └─ config.ts
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  ├─ BlogPostLayout.astro
│  │  └─ ProjectLayout.astro
│  ├─ lib/
│  │  ├─ site.ts
│  │  ├─ seo.ts
│  │  ├─ dates.ts
│  │  ├─ content.ts
│  │  └─ analytics.ts
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ about.astro
│  │  ├─ projects/
│  │  │  ├─ index.astro
│  │  │  └─ [slug].astro
│  │  ├─ blog/
│  │  │  ├─ index.astro
│  │  │  └─ [slug].astro
│  │  ├─ resume.astro
│  │  ├─ contact.astro
│  │  ├─ now.astro
│  │  ├─ uses.astro
│  │  ├─ rss.xml.ts
│  │  └─ 404.astro
│  ├─ styles/
│  │  └─ global.css
│  └─ env.d.ts
├─ astro.config.mjs
├─ tailwind.config.mjs
├─ tsconfig.json
├─ package.json
└─ README.md
```

---

## Visual direction

### Design goals
- Clean and modern without looking over-designed
- Content-first
- More mature and credible than the current Bootstrap look
- Stronger emphasis on projects and writing
- Good typography on mobile and desktop

### Recommended design characteristics
- Neutral base palette with one confident accent colour
- Large, readable type scale
- Wider layout flexibility than the current narrow one-page sections
- Clear card/grid system for projects and posts
- Strong image treatment for project thumbnails and article headers
- Optional dark mode if it does not delay launch

### Content hierarchy on the homepage
1. Hero: who Anusha is now
2. Featured projects/apps
3. Recent writing
4. Selected experience / background
5. Call to action

---

## Content strategy

### Homepage
Must answer in under 10 seconds:
- who are you?
- what do you build?
- where should I click next?

### About page
Should replace the old long single-page biography with:
- a short present-day summary
- a concise career arc: Sri Lanka → Japan → Australia
- what you work on now
- how you like to build
- optional personal flavour without overdoing it

### Projects section
This is the main upgrade over the old site.
Each project should answer:
- what is it?
- why did you build it?
- what was your role?
- what stack / architecture did you choose?
- what trade-offs or lessons matter?

### Blog section
Keep it simple and durable:
- MDX posts in git
- no CMS in phase 1
- tags, reading time, RSS, SEO, syntax highlighting
- comments only if you genuinely want them

---

## Recommended first five project pages

These should be the initial launch set unless content gaps force changes.

### 1. Fiscava
**Why it belongs:** Strongest personal product signal. Shows product thinking, domain depth, and sustained execution.

Include:
- product summary
- finance/problem framing
- architecture overview
- frontend/backend notes
- what changed from ExpenseFlow to Fiscava
- screenshots or UI states

### 2. pantry-ping
**Why it belongs:** Distinctive, practical, high-relatability product. Good showcase of product sense and household workflow thinking.

Include:
- problem statement
- shopping list + pantry model
- recurring staples / household collaboration angles
- UX choices
- architecture and platform notes

### 3. Lithodomos / Ancient World work
**Why it belongs:** Differentiating experience. Not many personal sites can show archaeology + immersive web product work.

Include:
- product context
- your role
- technical constraints
- visualisation / front-end challenges
- outcomes or interesting lessons

### 4. crypto-stdev
**Why it belongs:** Demonstrates data/product thinking, domain-specific tooling, and iteration across versions.

Include:
- what the product does
- key features
- decision-support angle
- architecture evolution if relevant

### 5. One smaller build / experiment page
Pick one of:
- `lightframe`
- `bin-check`
- another concise but polished internal tool

**Why it belongs:** Shows range and bias to shipping.

---

## Recommended first five blog posts

These should seed the blog so it does not launch empty.

### 1. Rebuilding my personal website after leaving it untouched for years
Use the current rebuild itself as an honest launch post.

### 2. What I learned building pantry-ping
Practical, product-focused, and likely easy to write.

### 3. Designing Fiscava: from expense tracking to a fuller personal finance product
Strong story arc and domain depth.

### 4. Working across product domains: retail, household tools, finance, and archaeology
A good positioning post.

### 5. How I decide whether a side project is worth continuing
Personal, reusable, and distinct from generic tech blogging.

---

## Component list

### Site-wide
- `BaseLayout`
- `SEO`
- `Header`
- `Footer`
- `ThemeToggle` (optional)
- `Container`
- `SectionHeading`
- `CTA`

### Homepage
- `Hero`
- `FeaturedProjects`
- `RecentPosts`
- `ExperienceSummary`
- `ContactStrip`

### Projects
- `ProjectCard`
- `ProjectGrid`
- `ProjectMeta`
- `TechStackList`
- `ProjectLinks`
- `ScreenshotGallery`

### Blog
- `PostCard`
- `PostHeader`
- `TagList`
- `ReadingTime`
- `TableOfContents` (optional)
- `RelatedPosts` (optional)

### MDX/content helpers
- `Prose`
- `Callout`
- `Figure`
- `CodeBlock` if custom treatment is needed

---

## SEO and discoverability requirements

Must have at launch:
- unique title and description per page
- canonical URLs
- Open Graph metadata
- Twitter/X card metadata
- sitemap
- RSS feed
- robots.txt
- sensible heading hierarchy
- compressed images with meaningful alt text

Nice to have later:
- JSON-LD for articles / person / website
- auto-generated OG images
- static search index

---

## Analytics and contact recommendations

### Analytics
Prefer:
- Plausible
- Umami

Avoid reusing the old Universal Analytics snippet.

### Contact
Prefer one of:
- `mailto:` plus clear social/contact links
- Formspree / Resend / Web3Forms with explicit spam handling

Avoid carrying over the old form unchanged without verifying deliverability and abuse protection.

---

## Migration checklist

### Content to keep
- broad personal/career arc
- selected personal tone
- profile image if still representative
- resume PDF as a fallback download

### Content to rewrite
- homepage intro
- current role summary
- all career copy after Japan/Australia to reflect reality now
- social links
- contact text
- footer / copyright

### Content to remove
- Google+ link
- dated platform clutter
- old one-page scroll structure
- legacy form validation JS
- outdated hobby framing that no longer represents you

### Assets to verify
- logo usage: keep, refresh, or retire
- banner imagery
- profile photo
- resume PDF accuracy
- project screenshots availability

---

## Phased implementation plan

### Task 1: Create the new app scaffold

**Objective:** Replace the repo’s static-site foundation with a modern Astro-based application skeleton.

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `tsconfig.json`
- Create: `src/pages/index.astro`
- Create: `src/styles/global.css`
- Modify: `README.md`

**Step 1: Initialise Astro with TypeScript**
Run:
```bash
npm create astro@latest . -- --template basics --typescript strict --install
```
Expected: Astro scaffold created successfully.

**Step 2: Add Tailwind support**
Run:
```bash
npx astro add tailwind
```
Expected: Astro config and Tailwind setup updated.

**Step 3: Create a bare homepage shell**
Implement a minimal `src/pages/index.astro` that renders a placeholder page using the site layout.

**Step 4: Start the dev server**
Run:
```bash
npm run dev
```
Expected: local Astro page loads.

**Step 5: Commit**
```bash
git add .
git commit -m "feat: bootstrap astro site foundation"
```

---

### Task 2: Add site configuration and reusable layout primitives

**Objective:** Centralise site metadata and create the base layout/components needed by all pages.

**Files:**
- Create: `src/lib/site.ts`
- Create: `src/components/site/SEO.astro`
- Create: `src/components/site/Header.astro`
- Create: `src/components/site/Footer.astro`
- Create: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/index.astro`

**Step 1: Add site constants**
Create `src/lib/site.ts` with title, description, URL, nav items, social links.

**Step 2: Build base layout**
Create `BaseLayout.astro` with metadata hooks and global shell.

**Step 3: Build header and footer**
Implement reusable nav/footer with updated links only.

**Step 4: Wire homepage to the layout**
Render the new header/footer around a stub homepage.

**Step 5: Verify manually**
Run:
```bash
npm run dev
```
Expected: page renders with header/footer and no console errors.

---

### Task 3: Add typed content collections for blog and projects

**Objective:** Create a durable content model before designing final pages.

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/blog/rebuilding-my-personal-site.mdx`
- Create: `src/content/projects/fiscava.md`
- Create: `src/content/projects/pantry-ping.md`
- Create: `src/content/projects/lithodomos-ancient-world.md`
- Create: `src/content/projects/crypto-stdev.md`
- Create: `src/content/projects/lightframe.md`

**Step 1: Define collection schemas**
Add typed blog and project schemas with frontmatter validation.

**Step 2: Seed one blog post and five project entries**
Create draft content entries with realistic metadata and placeholder sections.

**Step 3: Verify content loads**
Run:
```bash
npm run astro check
```
Expected: collections validate successfully.

---

### Task 4: Build homepage sections

**Objective:** Turn the homepage into a current, high-signal landing page.

**Files:**
- Create: `src/components/home/Hero.astro`
- Create: `src/components/home/FeaturedProjects.astro`
- Create: `src/components/home/RecentPosts.astro`
- Create: `src/components/home/ExperienceSummary.astro`
- Modify: `src/pages/index.astro`

**Step 1: Build the hero**
Use current positioning, not old 2016 copy.

**Step 2: Add featured projects section**
Read from the project collection.

**Step 3: Add recent posts section**
Read from the blog collection.

**Step 4: Add concise experience summary**
Keep it tight and present-day.

**Step 5: Verify visually**
Run dev server and inspect mobile + desktop.

---

### Task 5: Build project listing and project detail pages

**Objective:** Make projects/apps a first-class part of the site.

**Files:**
- Create: `src/pages/projects/index.astro`
- Create: `src/pages/projects/[slug].astro`
- Create: `src/components/projects/ProjectCard.astro`
- Create: `src/layouts/ProjectLayout.astro`

**Step 1: Build project index grid**
Render all projects with filters optional later, not now.

**Step 2: Build project detail route**
Generate static pages from the project collection.

**Step 3: Add metadata blocks**
Show role, stack, links, and status clearly.

**Step 4: Verify route generation**
Run:
```bash
npm run build
```
Expected: static project pages generated successfully.

---

### Task 6: Build blog listing and blog detail pages

**Objective:** Launch a simple but proper blog.

**Files:**
- Create: `src/pages/blog/index.astro`
- Create: `src/pages/blog/[slug].astro`
- Create: `src/components/blog/PostCard.astro`
- Create: `src/layouts/BlogPostLayout.astro`

**Step 1: Build blog index**
List posts with title, summary, date, tags.

**Step 2: Build blog detail route**
Generate static pages from the blog collection.

**Step 3: Add reading time and tags**
Keep it simple but polished.

**Step 4: Verify article rendering**
Run:
```bash
npm run build
```
Expected: blog pages render with correct metadata.

---

### Task 7: Build supporting pages

**Objective:** Replace the old one-page sections with proper standalone pages.

**Files:**
- Create: `src/pages/about.astro`
- Create: `src/pages/resume.astro`
- Create: `src/pages/contact.astro`
- Create: `src/pages/now.astro`
- Create: `src/pages/404.astro`

**Step 1: Write About page**
Present an up-to-date professional/personal summary.

**Step 2: Write Resume page**
Offer both readable summary and PDF download.

**Step 3: Write Contact page**
Use a trustworthy, minimal contact approach.

**Step 4: Add Now page**
Optional, but useful for freshness.

---

### Task 8: Add SEO, feeds, and machine-readable outputs

**Objective:** Make the site discoverable and shareable.

**Files:**
- Create: `src/pages/rss.xml.ts`
- Create: `public/robots.txt`
- Modify: `astro.config.mjs`
- Modify: `src/components/site/SEO.astro`

**Step 1: Add sitemap integration**
Configure Astro sitemap.

**Step 2: Add RSS output**
Generate feed from blog collection.

**Step 3: Add OG/Twitter metadata**
Centralise per-page metadata.

**Step 4: Verify output**
Run:
```bash
npm run build
```
Expected: sitemap and RSS files generated.

---

### Task 9: Migrate and refresh assets

**Objective:** Keep only the assets that still help the brand.

**Files:**
- Create: `public/images/...`
- Create: `public/resume/anusha-dharmasena-resume.pdf`
- Remove or archive: old Bootstrap, jQuery, and Font Awesome vendor assets once no longer needed

**Step 1: Copy only still-useful assets**
Profile image, resume PDF, selected screenshots.

**Step 2: Compress and rename sensibly**
Use clean filenames and modern formats where practical.

**Step 3: Remove old vendor dependencies from the rendered site**
Verify no page references legacy directories.

---

### Task 10: Launch polish

**Objective:** Tighten the site for production.

**Files:**
- Modify: multiple files as needed

**Step 1: Add analytics**
Use Plausible or Umami.

**Step 2: Add social preview polish**
Ensure good title/description/image output.

**Step 3: Verify accessibility and responsiveness**
Manual pass on mobile and desktop.

**Step 4: Build and preview**
Run:
```bash
npm run build
npm run preview
```
Expected: production build works locally.

**Step 5: Commit**
```bash
git add .
git commit -m "feat: launch modern personal site"
```

---

## Non-goals for phase 1

Do not add these unless a concrete need appears:
- headless CMS
- newsletter system
- complex search backend
- auth
- fancy animations as a dependency
- over-engineered filtering on day one

---

## Acceptance criteria

The rebuild is successful when:
- the site clearly represents Anusha today
- the homepage highlights projects and writing, not just biography
- at least five project pages exist
- at least five blog post drafts or posts exist
- the stack is modern and maintainable
- the site builds statically and performs well
- metadata, RSS, and sitemap are present
- the old single-page Bootstrap/jQuery implementation is retired

---

## Suggested implementation order in plain English

1. Scaffold Astro + Tailwind
2. Add base layout and site config
3. Define typed content collections
4. Seed project and blog content
5. Build homepage
6. Build projects
7. Build blog
8. Build about/resume/contact
9. Add SEO/RSS/sitemap
10. Polish and launch
