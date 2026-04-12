import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const postsDir = path.join(root, 'content-source', 'posts');
const sharedAssetsDir = path.join(postsDir, 'assets');
const slotGuidePath = path.join(sharedAssetsDir, 'slot-guides.json');
const blogIndexPath = path.join(root, 'content-source', 'blogs', 'blog-index.json');
const slotGuides = JSON.parse(readFileSync(slotGuidePath, 'utf-8'));
const blogIndex = JSON.parse(readFileSync(blogIndexPath, 'utf-8'));
function getSeoulTimestamp() {
	const now = new Date();
	const formatter = new Intl.DateTimeFormat('sv-SE', {
		timeZone: 'Asia/Seoul',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	});
	const parts = Object.fromEntries(formatter.formatToParts(now).map((part) => [part.type, part.value]));
	return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}+09:00`;
}

const nowTimestamp = getSeoulTimestamp();

function fail(message) {
	throw new Error(`[post-workspace] ${message}`);
}

function parseThreeDigit(value, label) {
	if (!value) {
		return null;
	}

	if (!/^\d{3}$/.test(value)) {
		fail(`${label} must be a 3-digit value like 001`);
	}

	return value;
}

function getBlogRecord(blogId) {
	return blogIndex.find((entry) => entry.blogId === blogId) ?? null;
}

function getExistingHtmlNames() {
	return existsSync(postsDir)
		? readdirSync(postsDir).filter((name) => /^post_blog_\d{3}_post_\d{3}\.html$/.test(name))
		: [];
}

function getNextPostNumber(blogNumber) {
	const matches = getExistingHtmlNames()
		.map((name) => name.match(/^post_blog_(\d{3})_post_(\d{3})\.html$/))
		.filter(Boolean)
		.map((match) => ({ blog: match[1], post: Number(match[2]) }))
		.filter((entry) => entry.blog === blogNumber)
		.sort((a, b) => a.post - b.post);

	const next = (matches.at(-1)?.post ?? 0) + 1;
	return String(next).padStart(3, '0');
}

function buildHtml({ blogNumber, postNumber, blogId }) {
	const workspaceName = `post_blog_${blogNumber}_post_${postNumber}`;
	const slug = `replace-with-slug-${blogNumber}-${postNumber}`;
	const koTitle = `새 글 제목 ${blogNumber}-${postNumber}`;
	const enTitle = `New post title ${blogNumber}-${postNumber}`;

	return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${workspaceName}</title>
  <link rel="stylesheet" href="./assets/posts.css">
</head>
<body>
  <div class="studio-shell">
    <header class="studio-topbar">
      <div>
        <h1 class="studio-title" data-title>${koTitle}</h1>
        <div class="studio-meta" data-date>작성 ${nowTimestamp}</div>
      </div>
      <div class="studio-actions">
        <button class="btn" data-copy-title>제목 복사</button>
      </div>
    </header>

    <div class="studio-main">
      <section class="studio-left">
        <div class="studio-tabs">
          <button class="studio-tab is-active" data-tab="preview">미리보기</button>
          <div class="locale-switch">
            <button class="locale-btn is-active" data-locale="ko">ko</button>
            <button class="locale-btn" data-locale="en">en</button>
          </div>
        </div>
        <div class="studio-content">
          <div class="post-preview is-active" data-panel="preview" data-preview></div>
        </div>
      </section>

      <aside class="studio-side">
        <section class="side-card">
          <h3>태그</h3>
          <div class="pill-list" data-tag-list></div>
        </section>

        <section class="side-card">
          <h3>이미지 슬롯</h3>
          <div class="side-label">같은 이름 폴더에 001, 002, 003 이미지를 넣는다. .sel 이 있으면 대표 이미지 우선이다.</div>
          <div data-slot-list></div>
        </section>
      </aside>
    </div>
  </div>

  <script id="post-source" type="text/plain">
<post
  slug="${slug}"
  blog-id="${blogId}"
  stage="pillar"
  purpose="problem-fix"
  search-intent="fix"
  reader-state="stuck"
  section-style="checklist"
  image-need="cover-only"
  timestamp="${nowTimestamp}"
  updated-date="${nowTimestamp}"
  hero-image="../../../assets/blog-placeholder-1.jpg"
  related-slugs=""
>
  <images>
    <slot code="001" role="cover">
      <prompt>이 글의 핵심 맥락을 한 장면에서 바로 읽을 수 있는 대표 이미지를 만들어줘.

이미지 역할: 대표 Hero 이미지
이미지 설명: 글 제목과 가장 잘 맞는 핵심 장면

공통 기준:
- 핵심 포인트가 한 장면에서 바로 읽혀야 함
- 과장된 합성 느낌 금지
- 기사나 실전 가이드에 맞는 현실적인 구도

개별 프롬프트:
replace this with a concrete prompt

참고 검색어:
replace, search, keywords</prompt>
    </slot>
    <slot code="002" role="inline">
      <prompt>이 글의 본문에서 실제 설명을 돕는 보조 이미지를 만들어줘.

이미지 역할: 본문 설명 이미지
이미지 설명: 핵심 비교나 과정 설명을 돕는 장면

공통 기준:
- 글의 설명 맥락을 직접 보조해야 함
- 억지 장식 이미지 금지
- 현실적인 화면 또는 설명 장면

개별 프롬프트:
replace this with a concrete prompt

참고 검색어:
replace, search, keywords</prompt>
    </slot>
  </images>

  <title lang="en">${enTitle}</title>
  <title lang="ko">${koTitle}</title>

  <description lang="en">Replace this with a real English description for the new post.</description>
  <description lang="ko">새 글 설명으로 교체한다.</description>

  <tags lang="en">replace, tags, here</tags>
  <tags lang="ko">교체, 태그, 여기</tags>

  <body lang="en"><![CDATA[
<p>Replace this English body with the real article.</p>

<h2>First section</h2>
<p>Write the first section here.</p>
]]></body>

  <body lang="ko"><![CDATA[
<p>이 한국어 본문을 실제 글로 교체한다.</p>

<h2>첫 번째 섹션</h2>
<p>첫 번째 섹션 내용을 여기에 쓴다.</p>
]]></body>
</post>
  </script>

  <script id="slot-guides" type="application/json">${JSON.stringify(slotGuides, null, 2)}</script>

  <script src="./assets/posts.js"></script>
</body>
</html>
`;
}

const blogId = process.argv[2];
const postNumberArg = parseThreeDigit(process.argv[3], 'post number');

if (!blogId) {
	fail('usage: node scripts/create-post-workspace.mjs <blogId> [001]');
}

const blogRecord = getBlogRecord(blogId);

if (!blogRecord) {
	fail(`unknown blogId: ${blogId}`);
}

const blogNumber = blogRecord.number;
const postNumber = postNumberArg ?? getNextPostNumber(blogNumber);
const workspaceName = `post_blog_${blogNumber}_post_${postNumber}`;
const htmlPath = path.join(postsDir, `${workspaceName}.html`);
const assetDir = path.join(postsDir, workspaceName);

if (existsSync(htmlPath) || existsSync(assetDir)) {
	fail(`${workspaceName} already exists`);
}

mkdirSync(assetDir, { recursive: true });
writeFileSync(htmlPath, buildHtml({ blogNumber, postNumber, blogId }), 'utf-8');

console.log(`[post-workspace] created ${workspaceName}`);
