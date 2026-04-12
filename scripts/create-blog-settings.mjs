import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { DEFAULT_BLOG_FOLDER, getBlogSettingsDir } from './lib/blog-settings.mjs';

const root = process.cwd();
const [, , blogFolderArg] = process.argv;

if (!blogFolderArg) {
	console.error('Usage: node scripts/create-blog-settings.mjs <blog_002>');
	process.exit(1);
}

const sourceDir = getBlogSettingsDir(root, DEFAULT_BLOG_FOLDER);
const targetDir = getBlogSettingsDir(root, blogFolderArg);

if (existsSync(targetDir)) {
	console.error(`[blog-settings] ${blogFolderArg} already exists: ${targetDir}`);
	process.exit(1);
}

mkdirSync(targetDir, { recursive: true });
cpSync(sourceDir, targetDir, { recursive: true });

const sitePath = path.join(targetDir, 'site.json');
const deployPath = path.join(targetDir, 'deploy.json');

const site = JSON.parse(readFileSync(sitePath, 'utf-8'));
site.blog_folder = blogFolderArg;

const deploy = JSON.parse(readFileSync(deployPath, 'utf-8'));
deploy.blog_folder = blogFolderArg;
deploy.github_repo = '';
deploy.production_url = '';

writeFileSync(sitePath, `${JSON.stringify(site, null, 2)}\n`, 'utf-8');
writeFileSync(deployPath, `${JSON.stringify(deploy, null, 2)}\n`, 'utf-8');

console.log(`[blog-settings] created ${blogFolderArg}`);
