import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const farmStand = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/farm-stand" }),
});

export const collections = { "farm-stand": farmStand };
