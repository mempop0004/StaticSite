import { readFileSync } from 'node:fs';
import path from 'node:path';
import { getResolvedSiteUrl } from '../../scripts/lib/blog-settings.mjs';

interface SiteSettings {
	blog_folder: string;
	blog_id: string;
	site_url: string;
	site_title: string;
	site_description: string;
	footer_copy_en?: string;
	footer_copy_ko?: string;
	default_locale: string;
	locales: string[];
}

const activeBlogFolder = process.env.BLOG_FOLDER || 'blog_001';
const settingsPath = path.join(process.cwd(), 'settings', 'blogs', activeBlogFolder, 'site.json');
const siteSettings = JSON.parse(readFileSync(settingsPath, 'utf-8')) as SiteSettings;

export const BLOG_FOLDER = siteSettings.blog_folder;
export const BLOG_ID = siteSettings.blog_id;
export const SITE_URL = getResolvedSiteUrl(siteSettings.site_url, activeBlogFolder);
export const SITE_TITLE = siteSettings.site_title;
export const SITE_DESCRIPTION = siteSettings.site_description;
export const SITE_FOOTER_COPY = {
	en: siteSettings.footer_copy_en ?? siteSettings.site_description,
	ko: siteSettings.footer_copy_ko ?? siteSettings.site_description,
} as const;
export const DEFAULT_LOCALE = siteSettings.default_locale;
export const SUPPORTED_LOCALES = siteSettings.locales;
