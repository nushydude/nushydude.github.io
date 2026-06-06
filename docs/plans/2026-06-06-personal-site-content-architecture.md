# Personal Site Content Architecture

This document supports `docs/plans/2026-06-06-personal-site-modernisation-plan.md` and focuses on the content model, page content, and migration inputs for the rebuilt site.

---

## Desired site positioning

**Working positioning statement:**

> Tech lead and product-minded software builder creating practical tools across personal finance, household workflows, and immersive digital experiences.

This is stronger than the current site’s older framing around learning web development.

---

## Homepage content outline

### Hero
**Purpose:** Immediately communicate who Anusha is now.

**Suggested content shape:**
- Name
- One-line positioning statement
- Short paragraph on current focus
- Primary CTA: `View projects`
- Secondary CTA: `Read the blog` or `Get in touch`

**Possible draft direction:**
- Building practical digital products across finance, household tooling, and cultural/immersive experiences.

### Featured projects section
Show 3 featured cards on the homepage:
- Fiscava
- pantry-ping
- Lithodomos / Ancient World

### Recent writing section
Show 3 latest blog posts.

### Experience summary section
One tight summary block:
- Sri Lanka
- Japan
- Australia
- current leadership/product work

### Contact strip
Simple CTA with preferred contact route.

---

## About page content outline

### Section 1: Present-day summary
Short professional summary in current terms.

### Section 2: Career path
Use the old site as source material, but rewrite it in a tighter form:
- Sri Lanka: early engineering and language/cross-cultural experience
- Japan: Canon, printer drivers, PDF/SVG, agile work, deep technical rigour
- Australia: broader product/front-end/leadership work

### Section 3: What I like building
Good place to mention:
- useful products
- good tooling
- thoughtful UX
- practical systems over hype

### Section 4: Outside work
Optional light personal flavour:
- family
- gaming / interests
- writing / tinkering

Avoid making this page feel like a CV dump.

---

## Resume page content outline

### Recommended structure
- Short summary
- Current role(s)
- Selected experience
- Skills / technologies
- Download PDF button

The page should still work even if someone never downloads the PDF.

---

## Contact page content outline

### Keep it simple
- Short invitation
- Best ways to reach you
- Optional lightweight form
- Links to GitHub / LinkedIn / relevant socials only

### Remove or avoid
- outdated social networks
- cluttered icon wall
- any contact mechanism you do not actually monitor

---

## Project collection schema

Suggested frontmatter for `src/content/projects/*.md`:

```ts
{
  title: string;
  slug: string;
  summary: string;
  featured: boolean;
  status: 'active' | 'maintained' | 'archived' | 'client-work';
  role: string;
  stack: string[];
  tags: string[];
  yearStart: number;
  yearEnd?: number;
  links?: {
    live?: string;
    repo?: string;
    appStore?: string;
    caseStudy?: string;
  };
  coverImage?: string;
  ogImage?: string;
  draft?: boolean;
}
```

### Recommended body structure for each project page
- Overview
- Problem / context
- What I built
- Architecture / stack
- Product decisions
- Challenges / trade-offs
- Outcome / current status
- Links

---

## Blog collection schema

Suggested frontmatter for `src/content/blog/*.mdx`:

```ts
{
  title: string;
  slug: string;
  summary: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  draft: boolean;
  featured: boolean;
  coverImage?: string;
  ogImage?: string;
  canonicalUrl?: string;
}
```

### Blog categories to start with
- Engineering
- Product
- Side projects
- Architecture
- Personal notes

Keep categories/tags sparse at launch.

---

## Recommended first five project pages

### Fiscava
**Angle:** A personal finance product that grew beyond a simple tracker.

**Sections to prepare:**
- What problem you wanted to solve
- Why it evolved from ExpenseFlow
- Key architecture decisions
- Frontend/backend boundaries
- Lessons from product iteration

### pantry-ping
**Angle:** Household shopping and pantry coordination with practical UX.

**Sections to prepare:**
- Motivation from daily life
- Shopping list + pantry model
- Recurring staples
- UX decisions
- Technical approach

### Lithodomos / Ancient World
**Angle:** Building for historical/archaeological visualisation and immersive digital experiences.

**Sections to prepare:**
- Domain context
- Role on the product
- Front-end and visualisation constraints
- Interesting engineering or product problems

### crypto-stdev
**Angle:** Decision-support and portfolio tooling in a complex domain.

**Sections to prepare:**
- Problem framing
- Signal / portfolio functionality
- Architecture or version evolution
- Learnings from domain complexity

### lightframe or another small polished utility
**Angle:** Fast, focused shipping and range.

**Sections to prepare:**
- What the tool does
- Why it exists
- What made it interesting despite being smaller

---

## Recommended first five blog posts

### 1. Rebuilding my personal website after leaving it untouched for years
**Reason:** Natural launch post; gives the blog an origin story.

### 2. What I learned building pantry-ping
**Reason:** Practical, relatable, product-centred.

### 3. Designing Fiscava: from expense tracking to a broader finance product
**Reason:** Strong product evolution story.

### 4. Working across finance, household tools, and archaeology software
**Reason:** Distinctive positioning.

### 5. How I decide which side projects are worth continuing
**Reason:** Personal, opinionated, durable.

---

## Social/profile links to keep or review

### Keep / verify
- GitHub
- LinkedIn
- any blog domain still owned and used

### Review before keeping
- X/Twitter
- YouTube
- Facebook

### Remove
- Google+

---

## Migration source map from the old site

### Old section: About me
**Keep:** broad personal/career intro
**Rewrite:** everything else in current language

### Old section: Career
**Keep:** high-level Sri Lanka / Japan / Australia arc
**Rewrite:** all role descriptions to reflect today

### Old section: Resume
**Keep:** PDF download concept
**Improve:** readable HTML summary page

### Old section: Contact
**Keep:** intent
**Replace:** old form implementation and social clutter

---

## Suggested editorial tone

- direct
- calm
- technical without jargon-for-jargon’s-sake
- reflective when useful
- not overbranded
- not performative / startup-marketing voice

This should sound like you, not like a generic portfolio template.

---

## Launch content checklist

Before launch, make sure the new site has:
- homepage hero copy
- updated about copy
- at least 5 project entries
- at least 5 blog post drafts or published posts
- updated social links
- updated resume PDF
- 3–6 project screenshots
- favicon and OG image

---

## Open decisions

These should be resolved before implementation starts in earnest:

1. **Primary domain**
   - stay on GitHub Pages URL?
   - use a custom domain?

2. **Comment system**
   - none at launch?
   - Giscus later?

3. **Analytics**
   - Plausible or Umami?

4. **Contact method**
   - email only?
   - hosted form?

5. **Dark mode**
   - launch with it?
   - or defer to phase 2?

6. **Project visibility**
   - which private/client projects should be described publicly?

---

## Recommended default answers if you want to move quickly

- Domain: keep current domain first, custom domain later
- Comments: none at launch
- Analytics: Plausible
- Contact: simple form or mailto + LinkedIn/GitHub
- Dark mode: include only if easy, otherwise defer
- Project visibility: start with public-safe summaries, avoid sensitive client detail
