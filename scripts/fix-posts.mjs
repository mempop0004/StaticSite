import { readFileSync, writeFileSync, renameSync, existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();

function replaceInFile(filePath) {
	if (!existsSync(filePath)) return;
	const content = readFileSync(filePath, 'utf8');
	if (content.includes('cover-inline')) {
		const newContent = content.replace(/cover-inline/g, 'inline-needed');
		writeFileSync(filePath, newContent, 'utf8');
		console.log(`Updated: ${filePath}`);
	}
}

function walkAndReplace(dir) {
	if (!existsSync(dir)) return;
	for (const file of readdirSync(dir)) {
		const fullPath = path.join(dir, file);
		if (statSync(fullPath).isDirectory()) {
			walkAndReplace(fullPath);
		} else if (fullPath.endsWith('.html') || fullPath.endsWith('.md')) {
			replaceInFile(fullPath);
		}
	}
}

console.log('1. Replacing "cover-inline" globally...');
walkAndReplace(path.join(rootDir, 'content-source'));
walkAndReplace(path.join(rootDir, 'src', 'content', 'blog'));

console.log('2. Moving new posts to their correct locations as 006...');

const postsToMove = [
	{ blog: '001', sourceBase: 'post_blog_001_post_001' },
	{ blog: '002', sourceBase: 'post_blog_002_post_001' },
	{ blog: '003', sourceBase: 'post_blog_003_post_001' },
];

for (const { blog, sourceBase } of postsToMove) {
	const sourceHtml = path.join(rootDir, 'content-source', 'posts', `${sourceBase}.html`);
	const sourceDir = path.join(rootDir, 'content-source', 'posts', sourceBase);
	
	const destBase = `post_blog_${blog}_post_006`;
	const destHtml = path.join(rootDir, 'content-source', 'blogs', `blog_${blog}`, 'posts', `${destBase}.html`);
	const destDir = path.join(rootDir, 'content-source', 'blogs', `blog_${blog}`, 'posts', destBase);
	
	if (existsSync(sourceHtml)) {
		// Update title tag inside HTML before moving
		let content = readFileSync(sourceHtml, 'utf8');
		content = content.replace(new RegExp(`<title>${sourceBase}</title>`, 'g'), `<title>${destBase}</title>`);
		writeFileSync(sourceHtml, content, 'utf8');
		
		console.log(`Moving ${sourceHtml} to ${destHtml}`);
		renameSync(sourceHtml, destHtml);
	}
	
	if (existsSync(sourceDir)) {
		console.log(`Moving ${sourceDir} to ${destDir}`);
		renameSync(sourceDir, destDir);
	}
}

console.log('Done.');
