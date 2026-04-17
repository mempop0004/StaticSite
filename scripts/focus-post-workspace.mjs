import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const root = process.cwd();
const blogIndexPath = path.join(root, 'content-source', 'blogs', 'blog-index.json');
const postsDir = path.join(root, 'content-source', 'posts');
const blogsDir = path.join(root, 'content-source', 'blogs');
const blogIndex = JSON.parse(readFileSync(blogIndexPath, 'utf-8'));

function fail(message) {
	throw new Error(`[post-focus] ${message}`);
}

function normalizePostNumber(value) {
	if (!value) {
		fail('usage: node scripts/focus-post-workspace.mjs <blog_003|003|blogId> <004>');
	}

	if (!/^\d{1,3}$/.test(value)) {
		fail(`invalid post number: ${value}`);
	}

	return value.padStart(3, '0');
}

function resolveBlogRecord(value) {
	if (!value) {
		fail('blog target is required');
	}

	const normalized = value.trim();
	const blogNumber = normalized.match(/^\d{1,3}$/)?.[0]?.padStart(3, '0');

	return (
		blogIndex.find((entry) => entry.folder === normalized) ??
		blogIndex.find((entry) => entry.blogId === normalized) ??
		(blogNumber ? blogIndex.find((entry) => entry.number === blogNumber) : null)
	);
}

function ensureCopied(sourcePath, targetPath) {
	if (!existsSync(sourcePath)) {
		return false;
	}

	if (existsSync(targetPath)) {
		return true;
	}

	const targetParent = path.dirname(targetPath);
	mkdirSync(targetParent, { recursive: true });

	if (sourcePath.endsWith('.html')) {
		copyFileSync(sourcePath, targetPath);
		return true;
	}

	cpSync(sourcePath, targetPath, { recursive: true });
	return true;
}

const blogTarget = process.argv[2];
const postNumber = normalizePostNumber(process.argv[3]);
const blogRecord = resolveBlogRecord(blogTarget);

if (!blogRecord) {
	fail(`unknown blog target: ${blogTarget}`);
}

const workspaceName = `post_blog_${blogRecord.number}_post_${postNumber}`;
const workspaceHtml = path.join(postsDir, `${workspaceName}.html`);
const workspaceAssets = path.join(postsDir, workspaceName);

const archivedHtml = path.join(blogsDir, blogRecord.folder, 'posts', `${workspaceName}.html`);
const archivedAssets = path.join(blogsDir, blogRecord.folder, 'posts', workspaceName);

const hasWorkspaceHtml = existsSync(workspaceHtml);
const hasWorkspaceAssets = existsSync(workspaceAssets);

if (!hasWorkspaceHtml || !hasWorkspaceAssets) {
	const htmlCopied = ensureCopied(archivedHtml, workspaceHtml);
	const assetsCopied = ensureCopied(archivedAssets, workspaceAssets);

	if (!htmlCopied && !assetsCopied) {
		const createResult = spawnSync(
			process.execPath,
			[
				path.join(root, 'scripts', 'create-post-workspace.mjs'),
				blogRecord.blogId,
				postNumber,
			],
			{ cwd: root, encoding: 'utf-8' }
		);

		if (createResult.status !== 0) {
			fail(`${workspaceName} not found and could not be created automatically`);
		}
	}
}

console.log(`[post-focus] ready ${workspaceName}`);
console.log(`[post-focus] html ${path.relative(root, workspaceHtml)}`);
console.log(`[post-focus] assets ${path.relative(root, workspaceAssets)}`);
console.log(`[post-focus] blog ${blogRecord.folder} (${blogRecord.blogId})`);
