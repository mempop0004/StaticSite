import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../config/i18n';
import { BLOG_ID } from '../config/site';

export type BlogEntry = CollectionEntry<'blog'>;
export const INITIAL_POST_LIMIT = 10;
export const MAX_POST_LIMIT = 30;
export const SEARCH_RESULT_LIMIT = 30;
export const TITLE_UI_LIMIT = 90;
export const DESCRIPTION_UI_LIMIT = 160;
export const SEARCH_EXCERPT_LIMIT = 600;
export interface SearchDocument {
	title: string;
	description: string;
	slug: string;
	locale: Locale;
	blogId: BlogEntry['data']['blogId'];
	stage: BlogEntry['data']['stage'];
	tags: string[];
	pubDate: string;
	content: string;
	url: string;
}

export async function getBlogPosts(locale: Locale) {
	const posts = await getCollection('blog');

	return posts
		.filter((post) => post.id.startsWith(`${locale}/`) && post.data.blogId === BLOG_ID)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getLocalizedSlug(post: BlogEntry, locale: Locale) {
	return post.id.replace(`${locale}/`, '');
}

export async function getBlogPostsByUnit(locale: Locale, blogId: BlogEntry['data']['blogId']) {
	const posts = await getBlogPosts(locale);
	return posts.filter((post) => post.data.blogId === blogId);
}

export async function getRelatedPosts(post: BlogEntry, locale: Locale) {
	const posts = await getBlogPosts(locale);
	return posts.filter((entry) => post.data.relatedSlugs.includes(getLocalizedSlug(entry, locale)));
}

function stripMarkdown(markdown: string) {
	return markdown
		.replace(/^---[\s\S]*?---/, '')
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		.replace(/^>\s?/gm, '')
		.replace(/^#+\s?/gm, '')
		.replace(/^\s*[-*+]\s+/gm, '')
		.replace(/^\s*\d+\.\s+/gm, '')
		.replace(/\|/g, ' ')
		.replace(/\n+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function clampText(text: string, limit: number) {
	if (text.length <= limit) {
		return text;
	}

	return `${text.slice(0, limit).trim()}...`;
}

export async function getSearchDocuments(locale: Locale): Promise<SearchDocument[]> {
	const posts = await getBlogPosts(locale);

	return posts.map((post) => {
		const slug = getLocalizedSlug(post, locale);
		const url = locale === 'en' ? `/blog/${slug}/` : `/ko/blog/${slug}/`;

		return {
			title: post.data.title,
			description: post.data.description,
			slug,
			locale,
			blogId: post.data.blogId,
			stage: post.data.stage,
			tags: post.data.tags ?? [],
			pubDate: post.data.pubDate.toISOString(),
			content: clampText(stripMarkdown(post.body), SEARCH_EXCERPT_LIMIT),
			url,
		};
	});
}

export function getVisiblePosts<T>(posts: T[], limit = INITIAL_POST_LIMIT) {
	return posts.slice(0, Math.min(limit, MAX_POST_LIMIT));
}

export function getVisibleSearchResults<T>(results: T[]) {
	return results.slice(0, SEARCH_RESULT_LIMIT);
}

export function getUiTitle(text: string) {
	return clampText(text, TITLE_UI_LIMIT);
}

export function getUiDescription(text: string) {
	return clampText(text, DESCRIPTION_UI_LIMIT);
}
