import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const requiredFiles = ['rss.xml', 'sitemap-index.xml', 'sitemap-0.xml'];

const missingFiles = requiredFiles.filter((file) => !existsSync(path.join(distDir, file)));

if (missingFiles.length > 0) {
	console.error(
		`[build-output] missing generated feed files: ${missingFiles.join(', ')}`,
	);
	process.exit(1);
}

console.log('[build-output] rss and sitemap files verified');
