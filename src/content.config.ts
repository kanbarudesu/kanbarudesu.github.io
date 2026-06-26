import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(999),
    category: z.array(z.string()),
    summary: z.string(),
    thumbnail: z.string(),
    assetsDir: z.string(),
    video: z.string().optional().nullable(),
    demoUrl: z.string().optional().nullable(),
    sourceUrl: z.string().optional().nullable(),
    tech: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };