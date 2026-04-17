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
	const koTitle = `문제와 보상을 같이 말하는 새 글 제목 ${blogNumber}-${postNumber}`;
	const enTitle = `New post title that states the problem and payoff ${blogNumber}-${postNumber}`;

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
이미지 설명: 글 전체를 대표하는 핵심 긴장이나 핵심 대비 한 장면

공통 기준:
- 핵심 포인트가 한 장면에서 바로 읽혀야 함
- 이 이미지는 본문 설명도가 아니라 대표 장면이어야 함
- 과장된 합성 느낌 금지
- 기사나 실전 가이드에 맞는 현실적인 구도
- no text
- no letters
- no pseudo-text
- no ui labels

직관성 체크:
- 썸네일로 봤을 때 1초 안에 핵심 대비가 읽혀야 함
- checklist board처럼 보이면 실패
- explanatory diagram처럼 보이면 실패

개별 프롬프트:
replace this with a concrete prompt

참고 검색어:
replace, search, keywords</prompt>
    </slot>
    <slot code="002" role="inline">
      <prompt>이 글의 본문에서 실제 설명을 돕는 보조 이미지를 만들어줘.

이미지 역할: 본문 설명 이미지
이미지 설명: 본문에서 가장 헷갈릴 수 있는 구조, 분류, 단계, 관계 하나를 설명하는 이미지

공통 기준:
- 글의 설명 맥락을 직접 보조해야 함
- 억지 장식 이미지 금지
- 현실적인 화면 또는 설명 장면
- no text
- no letters
- no pseudo-text
- no ui labels

직관성 체크:
- 독자가 본문을 읽다 멈춘 지점을 바로 설명해야 함
- hero cover처럼 보이면 실패
- mood image처럼 보이면 실패
- 대표 이미지와 같은 장면처럼 보이면 실패

개별 프롬프트:
replace this with a concrete prompt

참고 검색어:
replace, search, keywords</prompt>
    </slot>
  </images>

  <title lang="en">${enTitle}</title>
  <title lang="ko">${koTitle}</title>

  <description lang="en">Replace this with a real English description that explains why the click is worth it.</description>
  <description lang="ko">검색 결과에서 왜 이 글을 눌러야 하는지 설명하는 문장으로 교체한다.</description>

  <tags lang="en">replace, tags, here</tags>
  <tags lang="ko">교체, 태그, 여기</tags>

  <body lang="en"><![CDATA[
<p>Describe the exact failure or friction the reader is already experiencing. Do not start with a generic topic explanation.</p>

<p>Explain the core claim of the post in one line. Tell the reader what this post helps them decide or do faster.</p>

<h2>1. Explain what people usually get wrong first</h2>
<p>Show why the visible problem and the real problem are often different. This section should narrow the scope.</p>

<h2>2. Write the main section with real weight</h2>
<p>This should be the strongest section in the post. Go deeper here than anywhere else.</p>
<p>Add at least two of these: why it matters, what people misread, what failure looks like, what changes when the reader gets it right.</p>

<h2>3. Give 3 to 5 concrete decision criteria</h2>
<p>Replace this section with real criteria. The reader should be able to decide what to check, what to ignore, or what to do next.</p>
<ul>
  <li>criterion one</li>
  <li>criterion two</li>
  <li>criterion three</li>
</ul>

<h2>4. Add at least one concrete example</h2>
<p>Replace this with a real example that turns the abstract rule into a visible situation.</p>

<h2>5. Add one reusable asset</h2>
<p>Use this section for a checklist, prompt, comparison frame, verification order, or short template the reader can reuse immediately.</p>

<h2>What to do first</h2>
<p>End with one immediate action. Do not end with “read another post” or a broad summary.</p>
]]></body>

  <body lang="ko"><![CDATA[
<p>독자가 이미 겪고 있는 실패 상황이나 불편을 바로 적는다. 일반적인 주제 소개로 시작하지 않는다.</p>

<p>이 글의 핵심 명제를 한 줄로 적는다. 이 글을 읽고 독자가 무엇을 더 빨리 판단하거나 행동할 수 있는지 말한다.</p>

<h2>1. 사람들이 먼저 틀리는 지점을 설명한다</h2>
<p>겉으로 보이는 문제와 실제 문제의 차이를 먼저 적는다. 이 섹션은 범위를 자르는 역할을 해야 한다.</p>

<h2>2. 가장 중요한 핵심 섹션을 무게 있게 쓴다</h2>
<p>이 섹션은 글에서 가장 강해야 한다. 다른 섹션보다 더 자세하고 더 구체적으로 쓴다.</p>
<p>왜 중요한지, 사람들이 왜 자주 틀리는지, 실제 실패 장면이 어떤지, 맞게 잡았을 때 무엇이 달라지는지 중 최소 두 가지를 넣는다.</p>

<h2>3. 판단 기준 3개에서 5개를 준다</h2>
<p>이 섹션은 실제 기준으로 교체한다. 독자가 무엇을 먼저 보고, 무엇을 버리고, 무엇을 확인해야 하는지 남겨야 한다.</p>
<ul>
  <li>기준 1</li>
  <li>기준 2</li>
  <li>기준 3</li>
</ul>

<h2>4. 실제 예시를 최소 1개 넣는다</h2>
<p>추상 설명을 실제 장면으로 내리는 예시를 넣는다.</p>

<h2>5. 바로 쓸 수 있는 요소를 넣는다</h2>
<p>체크리스트, 프롬프트, 비교표, 점검 순서, 템플릿 중 하나를 넣는다.</p>

<h2>무엇부터 시작할까</h2>
<p>독자가 지금 바로 할 첫 행동 하나로 끝낸다. 다른 글 안내 문장으로 마무리하지 않는다.</p>
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
