import { SITE_URL } from '../config/site';

export async function GET(context) {
	const site = context.site ?? new URL(SITE_URL);
	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		'  <sitemap>',
		`    <loc>${new URL('/sitemap-0.xml', site).toString()}</loc>`,
		'  </sitemap>',
		'</sitemapindex>',
	].join('\n');

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}
