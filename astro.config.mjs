// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { getResolvedSiteUrl, readBlogSettingsFile } from './scripts/lib/blog-settings.mjs';

const deploySettings = readBlogSettingsFile('deploy.json');

// https://astro.build/config
export default defineConfig({
	site: getResolvedSiteUrl(deploySettings.production_url),
	integrations: [mdx(), sitemap()],
});
