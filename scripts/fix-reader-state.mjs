import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();

function replaceInFile(filePath) {
	if (!existsSync(filePath)) return;
	let content = readFileSync(filePath, 'utf8');
	let changed = false;

	if (filePath.endsWith('.html')) {
		if (content.includes('reader-state="improving"')) {
			content = content.replace(/reader-state="improving"/g, 'reader-state="operating"');
			changed = true;
		}
		if (content.includes('reader-state="planning"')) {
			content = content.replace(/reader-state="planning"/g, 'reader-state="first-time"');
			changed = true;
		}
		if (content.includes('reader-state="organizing"')) {
			content = content.replace(/reader-state="organizing"/g, 'reader-state="operating"');
			changed = true;
		}
	} else if (filePath.endsWith('.md')) {
		if (content.includes("readerState: 'improving'")) {
			content = content.replace(/readerState: 'improving'/g, "readerState: 'operating'");
			changed = true;
		}
		if (content.includes("readerState: 'planning'")) {
			content = content.replace(/readerState: 'planning'/g, "readerState: 'first-time'");
			changed = true;
		}
		if (content.includes("readerState: 'organizing'")) {
			content = content.replace(/readerState: 'organizing'/g, "readerState: 'operating'");
			changed = true;
		}
	}

	if (changed) {
		writeFileSync(filePath, content, 'utf8');
		console.log(`Updated reader-state in: ${filePath}`);
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

console.log('Replacing invalid reader-state values globally...');
walkAndReplace(path.join(rootDir, 'content-source'));
walkAndReplace(path.join(rootDir, 'src', 'content', 'blog'));
console.log('Done.');
