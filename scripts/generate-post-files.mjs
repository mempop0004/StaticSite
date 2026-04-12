import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const legacySourceDir = path.join(root, 'content-source', 'posts');
const blogSourceRoot = path.join(root, 'content-source', 'blogs');
const blogIndexPath = path.join(blogSourceRoot, 'blog-index.json');
const outputDir = path.join(root, 'src', 'content', 'blog');
const generatedAssetDir = path.join(root, 'src', 'assets', 'generated');
const generatedPublicAssetDir = path.join(root, 'public', 'generated-post-assets');
const locales = ['en', 'ko'];
const REQUIRED_ATTRS = [
	'slug',
	'blogId',
	'stage',
	'purpose',
	'searchIntent',
	'readerState',
	'sectionStyle',
	'imageNeed',
	'timestamp',
];
const blogIndex = existsSync(blogIndexPath) ? JSON.parse(readFileSync(blogIndexPath, 'utf-8')) : [];

function sleep(ms) {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function isBusyError(error) {
	return error?.code === 'EBUSY' || error?.code === 'EPERM';
}

function canReuseCopiedFile(sourcePath, targetPath) {
	if (!existsSync(targetPath)) {
		return false;
	}

	const sourceStats = statSync(sourcePath);
	const targetStats = statSync(targetPath);
	return (
		sourceStats.size === targetStats.size &&
		Math.trunc(sourceStats.mtimeMs) === Math.trunc(targetStats.mtimeMs)
	);
}

function copyFileWithRetry(sourcePath, targetPath) {
	if (canReuseCopiedFile(sourcePath, targetPath)) {
		return;
	}

	const retryDelays = [80, 160, 320, 640, 1000];

	for (let attempt = 0; attempt <= retryDelays.length; attempt += 1) {
		try {
			copyFileSync(sourcePath, targetPath);
			return;
		} catch (error) {
			if (!isBusyError(error) || attempt === retryDelays.length) {
				throw error;
			}
			sleep(retryDelays[attempt]);
			if (canReuseCopiedFile(sourcePath, targetPath)) {
				return;
			}
		}
	}
}

function fail(message) {
	throw new Error(`[post-workspace] ${message}`);
}

function yamlQuote(value) {
	return `'${String(value).replace(/'/g, "''")}'`;
}

function clampText(value, limit = 140) {
	const normalized = String(value).replace(/\s+/g, ' ').trim();
	if (normalized.length <= limit) {
		return normalized;
	}
	return `${normalized.slice(0, limit).trim()}...`;
}

function buildHeroImageAlt(locale, title, description) {
	if (locale === 'ko') {
		return clampText(`이 글의 핵심 개념을 보여주는 대표 이미지. ${title}`);
	}
	return clampText(`Editorial hero image for the core concept of this post. ${title}`);
}

function serializeFrontmatter(post, locale) {
	const lines = [
		'---',
		`title: ${yamlQuote(post.title[locale])}`,
		`description: ${yamlQuote(post.description[locale])}`,
		`blogId: ${yamlQuote(post.blogId)}`,
		`stage: ${yamlQuote(post.stage)}`,
		`purpose: ${yamlQuote(post.purpose)}`,
		`searchIntent: ${yamlQuote(post.searchIntent)}`,
		`readerState: ${yamlQuote(post.readerState)}`,
		`sectionStyle: ${yamlQuote(post.sectionStyle)}`,
		`imageNeed: ${yamlQuote(post.imageNeed)}`,
		'tags:',
		...(post.tags[locale] ?? []).map((tag) => `  - ${yamlQuote(tag)}`),
		`pubDate: ${yamlQuote(post.pubDate)}`,
	];

	if ((post.relatedSlugs ?? []).length > 0) {
		lines.push('relatedSlugs:');
		lines.push(...post.relatedSlugs.map((slug) => `  - ${yamlQuote(slug)}`));
	}

	if (post.updatedDate) {
		lines.push(`updatedDate: ${yamlQuote(post.updatedDate)}`);
	}

	if (post.heroImage) {
		lines.push(`heroImage: ${yamlQuote(post.heroImage)}`);
		lines.push(`heroImageAlt: ${yamlQuote(post.heroImageAlt[locale])}`);
	}

	lines.push('---', '');
	return lines.join('\n');
}

function parseAttributes(raw) {
	return Object.fromEntries(
		[...raw.matchAll(/([a-z-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]),
	);
}

function kebabToCamelCase(value) {
	return value.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

function parseSingleTag(source, tag, lang) {
	const pattern = new RegExp(`<${tag}\\s+lang="${lang}">([\\s\\S]*?)<\\/${tag}>`);
	const match = source.match(pattern);
	return match ? match[1].trim() : '';
}

function parseBody(source, lang) {
	const pattern = new RegExp(
		`<body\\s+lang="${lang}"><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/body>`,
	);
	const match = source.match(pattern);
	return match ? match[1].trim() : '';
}

function parseSlots(workspaceDir) {
	const slotsDir = workspaceDir;

	if (!existsSync(slotsDir)) {
		return [];
	}

	const assetFiles = readdirSync(slotsDir)
		.filter((file) =>
		/^\d{3}(?:\.sel)?\.(png|jpg|jpeg|webp|avif)$/i.test(file),
		)
		.sort((a, b) => a.localeCompare(b));
	const source = readFileSync(`${workspaceDir}.html`, 'utf-8');
	const slotMatches = [...source.matchAll(/<slot\s+code="(\d{3})"[\s\S]*?<\/slot>/g)];

	return slotMatches
		.map(([, code]) => {
			const matchingAssets = assetFiles.filter((asset) => asset.startsWith(`${code}.`) || asset.startsWith(`${code}.sel.`));
			const selectedAsset =
				matchingAssets.find((asset) => asset.startsWith(`${code}.sel.`)) ??
				matchingAssets[0] ??
				null;
			return {
				code,
				assets: matchingAssets,
				selectedAssetName: selectedAsset,
				asset: selectedAsset ? path.join(workspaceDir, selectedAsset) : null,
			};
		})
		.sort((a, b) => a.code.localeCompare(b.code));
}

function copyGeneratedAsset(slot, workspaceDir) {
	if (!slot?.asset) {
		return null;
	}

	mkdirSync(generatedAssetDir, { recursive: true });
	mkdirSync(generatedPublicAssetDir, { recursive: true });
	const sourceBase = path.basename(workspaceDir);
	const sourceExt = path.extname(slot.asset);
	const targetFileName = `${sourceBase}-slot-${slot.code}${sourceExt.toLowerCase()}`;
	const targetPath = path.join(generatedAssetDir, targetFileName);
	const publicTargetPath = path.join(generatedPublicAssetDir, targetFileName);

	copyFileWithRetry(slot.asset, targetPath);
	copyFileWithRetry(slot.asset, publicTargetPath);

	return {
		srcAssetPath: `../../../assets/generated/${targetFileName}`,
		publicPath: `/generated-post-assets/${targetFileName}`,
	};
}

function renderImageSlotMarkup(src, alt) {
	return [
		'<figure class="article-inline-image">',
		`  <img src="${src}" alt="${alt}" loading="lazy" decoding="async">`,
		'</figure>',
	].join('\n');
}

function replaceImageSlots(body, locale, slots) {
	if (!body) {
		return body;
	}

	return body.replace(
		/<image-slot\s+code="(\d{3})"\s+alt-en="([^"]*)"\s+alt-ko="([^"]*)"><\/image-slot>/g,
		(_, code, altEn, altKo) => {
			const slot = slots.find((entry) => entry.code === code && entry.generatedAsset);
			if (!slot) {
				return '';
			}
			const alt = locale === 'ko' ? altKo : altEn;
			return renderImageSlotMarkup(slot.generatedPublicPath, alt);
		},
	);
}

function parseSourceFile(workspaceDir) {
	const filePath = `${workspaceDir}.html`;
	const source = readFileSync(filePath, 'utf-8');
	const postMatch = source.match(/<post\s+([\s\S]*?)>/);

	if (!postMatch) {
		throw new Error(`Missing <post> root in ${filePath}`);
	}

	const attrs = Object.fromEntries(
		Object.entries(parseAttributes(postMatch[1])).map(([key, value]) => [kebabToCamelCase(key), value]),
	);
	const slots = parseSlots(workspaceDir);
	for (const slot of slots) {
		const copied = copyGeneratedAsset(slot, workspaceDir);
		slot.generatedAsset = copied?.srcAssetPath ?? null;
		slot.generatedPublicPath = copied?.publicPath ?? null;
	}
	const selectedCoverSlot =
		slots.find((slot) => slot.asset && slot.code === '001' && slot.selectedAssetName?.includes('.sel.')) ??
		slots.find((slot) => slot.asset && slot.selectedAssetName?.includes('.sel.')) ??
		slots.find((slot) => slot.asset && slot.code === '001') ??
		slots.find((slot) => slot.asset) ??
		null;

	const parsed = {
		slug: attrs.slug,
		blogId: attrs.blogId,
		stage: attrs.stage,
		workspaceName: path.basename(workspaceDir),
		purpose: attrs.purpose,
		searchIntent: attrs.searchIntent,
		readerState: attrs.readerState,
		sectionStyle: attrs.sectionStyle,
		imageNeed: attrs.imageNeed,
		timestamp: attrs.timestamp ?? attrs.pubDate,
		pubDate: attrs.timestamp ?? attrs.pubDate,
		updatedDate: attrs.updatedDate,
		heroImage: selectedCoverSlot?.generatedAsset ?? attrs.heroImage,
		relatedSlugs: (attrs.relatedSlugs ?? '')
			.split(',')
			.map((item) => item.trim())
			.filter(Boolean),
		title: {
			en: parseSingleTag(source, 'title', 'en'),
			ko: parseSingleTag(source, 'title', 'ko'),
		},
		description: {
			en: parseSingleTag(source, 'description', 'en'),
			ko: parseSingleTag(source, 'description', 'ko'),
		},
		heroImageAlt: {
			en: '',
			ko: '',
		},
		tags: {
			en: parseSingleTag(source, 'tags', 'en')
				.split(',')
				.map((item) => item.trim())
				.filter(Boolean),
			ko: parseSingleTag(source, 'tags', 'ko')
				.split(',')
				.map((item) => item.trim())
				.filter(Boolean),
		},
		body: {
			en: '',
			ko: '',
		},
		slots,
	};

	parsed.body = {
		en: replaceImageSlots(parseBody(source, 'en'), 'en', slots),
		ko: replaceImageSlots(parseBody(source, 'ko'), 'ko', slots),
	};

	parsed.heroImageAlt = {
		en: buildHeroImageAlt('en', parsed.title.en, parsed.description.en),
		ko: buildHeroImageAlt('ko', parsed.title.ko, parsed.description.ko),
	};

	validatePostWorkspace(parsed, workspaceDir, source, filePath);

	return parsed;
}

function validateLocaleField(post, field, locale, workspaceDir) {
	const value = post[field]?.[locale];
	if (!value || !String(value).trim()) {
		fail(`${path.basename(workspaceDir)}: missing ${field}.${locale}`);
	}
}

function validatePostWorkspace(post, workspaceDir, source, filePath) {
	const sourceBase = path.basename(workspaceDir);
	const workspaceMatch = sourceBase.match(/^post_blog_(\d{3})_post_(\d{3})$/);

	if (!workspaceMatch) {
		fail(`${sourceBase}: folder name must match post_blog_000_post_000`);
	}

	const workspaceBlogNumber = workspaceMatch[1];

	if (path.basename(filePath, '.html') !== sourceBase) {
		fail(`${sourceBase}: html file name and folder name must match`);
	}

	for (const attr of REQUIRED_ATTRS) {
		if (!post[attr] || !String(post[attr]).trim()) {
			fail(`${sourceBase}: missing required attr ${attr}`);
		}
	}

	const blogRecord = blogIndex.find((entry) => entry.blogId === post.blogId);
	if (!blogRecord) {
		fail(`${sourceBase}: unknown blogId ${post.blogId}`);
	}
	if (blogRecord.number !== workspaceBlogNumber) {
		fail(`${sourceBase}: workspace blog number ${workspaceBlogNumber} does not match ${post.blogId} -> blog_${blogRecord.number}`);
	}

	for (const locale of locales) {
		validateLocaleField(post, 'title', locale, workspaceDir);
		validateLocaleField(post, 'description', locale, workspaceDir);
		validateLocaleField(post, 'body', locale, workspaceDir);
		if ((post.tags?.[locale] ?? []).length === 0) {
			fail(`${sourceBase}: missing tags.${locale}`);
		}
	}

	const slotCodes = post.slots.map((slot) => slot.code);
	const uniqueCodes = new Set(slotCodes);

	if (slotCodes.length !== uniqueCodes.size) {
		fail(`${sourceBase}: duplicate image slot code found`);
	}

	for (const slot of post.slots) {
		if (!/^\d{3}$/.test(slot.code)) {
			fail(`${sourceBase}: invalid slot code ${slot.code}`);
		}
		const slotPattern = new RegExp(
			`<slot\\s+code="${slot.code}"[\\s\\S]*?<prompt>([\\s\\S]*?)<\\/prompt>[\\s\\S]*?<\\/slot>`,
		);
		const slotMatch = source.match(slotPattern);
		if (!slotMatch || !slotMatch[1].trim()) {
			fail(`${sourceBase}: slot ${slot.code} is missing prompt`);
		}
		if (slot.assets.length > 1 && !slot.assets.some((file) => file.includes('.sel.'))) {
			fail(`${sourceBase}: slot ${slot.code} has multiple images but no .sel selection`);
		}
	}

	const allAssetFiles = existsSync(workspaceDir)
		? readdirSync(workspaceDir).filter((file) => /^\d{3}(?:\.sel)?\.(png|jpg|jpeg|webp|avif)$/i.test(file))
		: [];
	const selectedAssets = allAssetFiles.filter((file) => file.includes('.sel.'));

	if (selectedAssets.length > 1) {
		fail(`${sourceBase}: only one .sel image is allowed`);
	}

	if (allAssetFiles.length > 0 && !allAssetFiles.some((file) => /^001(?:\.sel)?\./i.test(file))) {
		fail(`${sourceBase}: first cover image must start with 001`);
	}
}

function collectWorkspaceDirs(parentDir) {
	if (!existsSync(parentDir)) {
		return [];
	}

	return readdirSync(parentDir)
		.map((name) => path.join(parentDir, name))
		.filter(
			(entryPath) =>
				statSync(entryPath).isDirectory() &&
				existsSync(`${entryPath}.html`) &&
				path.basename(entryPath) !== 'assets',
		);
}

function loadSources() {
	const legacyEntries = collectWorkspaceDirs(legacySourceDir);
	const blogEntries = existsSync(blogSourceRoot)
		? readdirSync(blogSourceRoot)
				.map((name) => path.join(blogSourceRoot, name, 'posts'))
				.flatMap((postsDir) => collectWorkspaceDirs(postsDir))
		: [];

	return [...legacyEntries, ...blogEntries].map((entryPath) => parseSourceFile(entryPath));
}

const posts = loadSources();

for (const locale of locales) {
	mkdirSync(path.join(outputDir, locale), { recursive: true });
}

for (const post of posts) {
	for (const locale of locales) {
		const frontmatter = serializeFrontmatter(post, locale);
		const body = post.body[locale].trim();
		const targetPath = path.join(outputDir, locale, `${post.slug}.md`);
		writeFileSync(targetPath, `${frontmatter}${body}\n`, 'utf-8');
	}
}
