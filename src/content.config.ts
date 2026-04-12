import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BLOG_UNIT_IDS } from './data/blogUnits';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			blogId: z.enum(BLOG_UNIT_IDS),
			stage: z.enum(['pillar', 'supporting']),
			purpose: z
				.enum(['problem-fix', 'comparison', 'operations', 'concept', 'checklist', 'log'])
				.default('concept'),
			searchIntent: z.enum(['fix', 'compare', 'choose', 'learn', 'verify']).default('learn'),
			readerState: z
				.enum(['first-time', 'stuck', 'validating', 'operating'])
				.default('first-time'),
			sectionStyle: z
				.enum(['step-by-step', 'comparison-table', 'explainer', 'checklist', 'field-note'])
				.default('explainer'),
			imageNeed: z.enum(['cover-only', 'inline-needed', 'table-better', 'slot-needed']).default('cover-only'),
			tags: z.array(z.string()).default([]),
			relatedSlugs: z.array(z.string()).default([]),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			heroImageAlt: z.string().default(''),
		}),
});

export const collections = { blog };
