import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    schema: z.object({
        inProgress: z.boolean(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        link: z.string(),
        img_alt: z.string().optional(),
    }),
});

const comptencesCollection = defineCollection({
    schema: z.object({
        inProgress: z.boolean(),
        title: z.string(),
        description: z.string(),
        UEs: z.array(z.string()),
        img_alt: z.string().optional(),
        link: z.string().optional(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),
});

export const collections = {
    projects: projectsCollection,
    comptences: comptencesCollection,
};