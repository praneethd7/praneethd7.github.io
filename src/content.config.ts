import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    guide: z.string().optional(),
    category: z.enum(['Generative AI', 'Reinforcement Learning', 'Autonomous Vehicles', 'Computer Vision', 'Other']),
    type: z.enum(['current', 'previous', 'course']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  })
});

const activities = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/activities" }),
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    type: z.enum(['responsibility', 'competition', 'design', 'hobby']),
    order: z.number().default(99),
  })
});

export const collections = { projects, activities };
