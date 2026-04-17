import { cpSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const rootDir = process.cwd();
const deployDir = path.join(rootDir, '.deploy');

// Folders/files that should NOT be copied from studio-blog to blog_xxx_live
const ignoredNames = new Set([
	'.git',
	'node_modules',
	'.deploy',
	'dist',
	'.astro',
	'.github',
	'.vscode'
]);

const args = process.argv.slice(2);
if (args.length === 0) {
	console.error('Usage: node scripts/deploy-live-repos.mjs <blog_numbers...>');
	console.error('Example: node scripts/deploy-live-repos.mjs 001 002 003');
	process.exit(1);
}

// Ensure .deploy directory exists
if (!existsSync(deployDir)) {
	console.error(`[deploy] Error: .deploy directory not found at ${deployDir}`);
	process.exit(1);
}

const targetBlogs = args.map(arg => {
	// e.g. "1" -> "001"
	const padded = arg.padStart(3, '0');
	return `blog_${padded}_live`;
});

console.log(`[deploy] Target blogs: ${targetBlogs.join(', ')}`);

// Get all files and dirs in root
const rootEntries = readdirSync(rootDir);

for (const targetName of targetBlogs) {
	const targetPath = path.join(deployDir, targetName);
	if (!existsSync(targetPath)) {
		console.warn(`[deploy] Warning: Target directory ${targetPath} does not exist. Skipping...`);
		continue;
	}

	console.log(`\n[deploy] === Syncing to ${targetName} ===`);
	
	for (const entryName of rootEntries) {
		if (ignoredNames.has(entryName)) continue;
		
		const sourceEntryPath = path.join(rootDir, entryName);
		const targetEntryPath = path.join(targetPath, entryName);
		
		try {
			cpSync(sourceEntryPath, targetEntryPath, { recursive: true, force: true });
		} catch (error) {
			console.error(`[deploy] Error copying ${entryName} to ${targetName}:`, error.message);
		}
	}
	
	console.log(`[deploy] Files synced. Committing and pushing...`);
	
	const gitAdd = spawnSync('git', ['add', '.'], { cwd: targetPath, stdio: 'inherit' });
	if (gitAdd.error) console.error(`[deploy] git add error:`, gitAdd.error);
	
	const gitCommit = spawnSync('git', ['commit', '-m', 'deploy: sync from studio-blog'], { cwd: targetPath, stdio: 'inherit' });
	
	const gitPush = spawnSync('git', ['push'], { cwd: targetPath, stdio: 'inherit' });
	if (gitPush.error) {
		console.error(`[deploy] git push error:`, gitPush.error);
	} else {
		console.log(`[deploy] ${targetName} pushed successfully.`);
	}
}

console.log(`\n[deploy] All done.`);
