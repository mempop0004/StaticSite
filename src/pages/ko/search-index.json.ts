import { getSearchDocuments } from '../../lib/blog';

export async function GET() {
	const documents = await getSearchDocuments('ko');

	return new Response(JSON.stringify(documents), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
}
