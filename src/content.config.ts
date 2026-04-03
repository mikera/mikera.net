import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const manifesto = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/manifesto' }),
  schema: z.object({
    title: z.string(),
    order: z.number()
  })
})

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    order: z.number()
  })
})

export const collections = { manifesto, essays }
