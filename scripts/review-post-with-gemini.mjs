import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import os from 'node:os';

const root = process.cwd();
function fail(message) {
	throw new Error(`[post-review] ${message}`);
}

const slug = process.argv[2];

if (!slug) {
	fail('usage: node scripts/review-post-with-gemini.mjs <slug>');
}

const koPath = path.join(root, 'src', 'content', 'blog', 'ko', `${slug}.md`);
const enPath = path.join(root, 'src', 'content', 'blog', 'en', `${slug}.md`);

if (!existsSync(koPath)) {
	fail(`missing ko post: ${koPath}`);
}

if (!existsSync(enPath)) {
	fail(`missing en post: ${enPath}`);
}

const koContent = readFileSync(koPath, 'utf-8');
const enContent = readFileSync(enPath, 'utf-8');

const prompt = `너는 블로그 운영 편집 리뷰어다.

아래 두 포스트(ko/en)를 리뷰해서 markdown 보고서를 작성해라.

리뷰 목표:
- 실제 발행 기준에서 글 품질을 높이는 것
- 검색 의도 적합성, 제목/설명 품질, 도입, 섹션 구조, 중복 표현, readability, 내부 링크 관점에서 본다
- 번역 품질 자체보다 ko/en 메시지 일관성과 정보 누락 여부를 본다
- 과장 칭찬 금지
- 실무적으로 고쳐야 할 것만 말한다

반드시 아래 형식으로 출력해라.

# Post Review

## Verdict
- 3줄 이내 총평

## Strengths
- 3~6개

## Problems
- 심각도 높은 순서로 3~8개
- 각 항목은 왜 문제인지와 어떤 식으로 고치면 되는지 같이 쓴다

## SEO
- title
- description
- search intent fit
- internal link

## Structure
- lead
- section flow
- duplication
- conclusion

## KO/EN Consistency
- 일치하는 점
- 빠진 점
- 어색한 점

## Better Title Options
- ko 3개
- en 3개

## Better Description Options
- ko 2개
- en 2개

## Revision Priority
1. 
2. 
3. 
`;

const reviewInput = `[KO POST]
${koContent}

[EN POST]
${enContent}
`;

const tempInputPath = path.join(os.tmpdir(), `post-review-${slug}-${Date.now()}.txt`);
writeFileSync(tempInputPath, reviewInput, 'utf-8');

const result = spawnSync(
	'powershell',
	[
		'-NoProfile',
		'-Command',
		`Get-Content -Raw '${tempInputPath.replace(/'/g, "''")}' | gemini -p @'\n${prompt}\n'@ --output-format text`,
	],
	{
		cwd: root,
		encoding: 'utf-8',
		maxBuffer: 1024 * 1024 * 8,
	},
);

try {
	unlinkSync(tempInputPath);
} catch {}

if (result.error) {
	throw result.error;
}

if (result.status !== 0) {
	fail(result.stderr || result.stdout || `gemini exited with code ${result.status}`);
}

const reviewDir = path.join(root, 'review', 'posts');
mkdirSync(reviewDir, { recursive: true });
const targetPath = path.join(reviewDir, `${slug}.review.md`);
writeFileSync(targetPath, result.stdout.trimEnd() + '\n', 'utf-8');

console.log(`[post-review] wrote ${targetPath}`);
