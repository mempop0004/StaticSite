import { readFileSync } from 'node:fs';
import path from 'node:path';

export async function GET() {
	const filePath = path.join(process.cwd(), 'content-source', 'posts', 'assets', 'posts.css');

	return new Response(readFileSync(filePath, 'utf-8'), {
		headers: {
			'Content-Type': 'text/css; charset=utf-8',
		},
	});
}
