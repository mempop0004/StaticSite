import { readFileSync } from 'node:fs';
import path from 'node:path';

export async function GET() {
	const filePath = path.join(process.cwd(), 'content-source', 'posts', 'assets', 'posts.js');

	return new Response(readFileSync(filePath, 'utf-8'), {
		headers: {
			'Content-Type': 'application/javascript; charset=utf-8',
		},
	});
}
