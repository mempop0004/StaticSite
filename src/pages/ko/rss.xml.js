import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../../config/site';
import { getSearchDocuments } from '../../lib/blog';
import { escapeXml, formatRssDate } from '../../lib/xml';

export async function GET(context) {
	const documents = await getSearchDocuments('ko');
	const site = context.site ?? new URL(SITE_URL);
	const selfUrl = new URL('/ko/rss.xml', site).toString();
	const channelLink = new URL('/ko/', site).toString();
	const lastBuildDate = documents[0]?.pubDate ?? new Date().toISOString();
	const items = documents
		.map((document) => {
			const link = new URL(document.url, site).toString();
			return [
				'  <item>',
				`    <title>${escapeXml(document.title)}</title>`,
				`    <link>${escapeXml(link)}</link>`,
				`    <description>${escapeXml(document.description)}</description>`,
				`    <pubDate>${formatRssDate(document.pubDate)}</pubDate>`,
				`    <guid isPermaLink="true">${escapeXml(link)}</guid>`,
				'  </item>',
			].join('\n');
		})
		.join('\n');

	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
		'<channel>',
		`  <title>${escapeXml(SITE_TITLE)}</title>`,
		`  <link>${escapeXml(channelLink)}</link>`,
		`  <description>${escapeXml(SITE_DESCRIPTION)}</description>`,
		'  <language>ko</language>',
		`  <lastBuildDate>${formatRssDate(lastBuildDate)}</lastBuildDate>`,
		`  <atom:link href="${escapeXml(selfUrl)}" rel="self" type="application/rss+xml" />`,
		items,
		'</channel>',
		'</rss>',
	].join('\n');

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
		},
	});
}
