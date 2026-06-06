import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'maintained', 'archived', 'client-work']),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    yearStart: z.number(),
    yearEnd: z.number().optional(),
    links: z
      .object({
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
        appStore: z.string().url().optional(),
        caseStudy: z.string().url().optional(),
      })
      .optional(),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
