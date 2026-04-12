import { getSearchDocuments } from '../lib/blog';

export async function GET() {
	const documents = await getSearchDocuments('en');

	return new Response(JSON.stringify(documents), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
}
