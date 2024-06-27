// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			type: z.string(),
			desktopImg: z.object({
				url: image(),
				alt: z.string(),
			}),
			mobileImg: z.object({
				url: image(),
				url_lazy: image(),
				alt: z.string(),
			}),
			codeUrl: z.string().optional(),
			previewUrl: z.string().optional(),
			technologies: z.array(z.string()),
		}),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	projects: projectsCollection,
};
