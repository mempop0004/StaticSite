import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const postsDir = path.join(process.cwd(), 'content-source', 'posts');

export function getStaticPaths() {
	const workspaces = readdirSync(postsDir)
		.filter((name) => /^post_blog_\d{3}_post_\d{3}\.html$/.test(name))
		.map((name) => ({
			params: {
				workspace: name.replace(/\.html$/, ''),
			},
		}));

	return workspaces;
}

export async function GET({ params }) {
	const workspace = params.workspace;
	const filePath = path.join(postsDir, `${workspace}.html`);

	if (!workspace || !existsSync(filePath)) {
		return new Response('Not found', { status: 404 });
	}

	return new Response(readFileSync(filePath, 'utf-8'), {
		headers: {
			'Content-Type': 'text/html; charset=utf-8',
		},
	});
}
