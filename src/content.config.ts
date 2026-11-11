import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per page - the filename is the URL (index.md is the home
// page, about.md is /about/).
const pages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
	schema: z.object({
		// Shown as the page's <h1>, and in the browser tab.
		title: z.string(),
		// Falls back to the site-wide description when omitted.
		description: z.string().optional(),
	}),
});

export const collections = { pages };
