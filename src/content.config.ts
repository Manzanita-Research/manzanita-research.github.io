import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const farmStand = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/farm-stand" }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string().nullable(),
    url: z.string().url(),
    stargazerCount: z.number(),
    pushedAt: z.string(),
    isArchived: z.boolean(),
  }),
});

export const collections = { "farm-stand": farmStand, projects };
