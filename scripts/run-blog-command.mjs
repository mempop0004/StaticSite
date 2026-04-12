import { spawnSync } from 'node:child_process';
import { DEFAULT_BLOG_FOLDER } from './lib/blog-settings.mjs';

const [, , command, blogFolderArg] = process.argv;

if (!command) {
	console.error('Usage: node scripts/run-blog-command.mjs <build|dev|preview> [blog_001]');
	process.exit(1);
}

const blogFolder = blogFolderArg || process.env.BLOG_FOLDER || DEFAULT_BLOG_FOLDER;
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const result = spawnSync(npmCommand, ['run', command], {
	stdio: 'inherit',
	shell: process.platform === 'win32',
	env: {
		...process.env,
		BLOG_FOLDER: blogFolder,
		ASTRO_TELEMETRY_DISABLED: '1',
	},
});

if (result.error) {
	console.error(result.error);
	process.exit(1);
}

process.exit(result.status ?? 1);
