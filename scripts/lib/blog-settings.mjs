import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

export const DEFAULT_BLOG_FOLDER = 'blog_001';

export function getActiveBlogFolder() {
	return process.env.BLOG_FOLDER || DEFAULT_BLOG_FOLDER;
}

export function getBlogSettingsDir(root = process.cwd(), blogFolder = getActiveBlogFolder()) {
	return path.join(root, 'settings', 'blogs', blogFolder);
}

export function readBlogSettingsFile(fileName, root = process.cwd(), blogFolder = getActiveBlogFolder()) {
	const targetPath = path.join(getBlogSettingsDir(root, blogFolder), fileName);
	if (!existsSync(targetPath)) {
		throw new Error(`[blog-settings] Missing ${fileName} for ${blogFolder}: ${targetPath}`);
	}

	return JSON.parse(readFileSync(targetPath, 'utf-8'));
}

export function getFallbackSiteUrl(blogFolder = getActiveBlogFolder()) {
	return `https://${blogFolder}.example.invalid`;
}

export function getResolvedSiteUrl(url, blogFolder = getActiveBlogFolder()) {
	if (typeof url === 'string' && url.trim()) {
		return url.trim();
	}

	return getFallbackSiteUrl(blogFolder);
}
