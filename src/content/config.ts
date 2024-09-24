import { defineCollection, z } from "astro:content";
// z -> zod schema (Validar esquemas)

const servicios = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    // buy: z.object({})
  }),
});

export const collections = { servicios };
