# Current Project Map

## Project Identity

- 프로젝트 이름은 `Static Log Korea`다.
- 현재 구현은 Astro 정적 블로그 1개 안에서 `blog_id` 기준 운영 단위 2개를 분리한 구조다.
- 주제는 정적 사이트 운영, 블로그 호스팅, 배포 자동화다.
- 현재 UI와 콘텐츠는 한국어 중심이다.
- 사용자 목표로는 이후 영어/한국어 2개 언어 지원이 필요하지만, 현재 저장소에는 다국어 구조가 아직 없다.

## Runtime And Build

- 프레임워크는 `astro`다.
- 콘텐츠는 `@astrojs/mdx`와 Astro Content Collections로 읽는다.
- RSS와 sitemap을 생성한다.
- 로컬 명령은 `dev`, `build`, `preview`만 있다.
- 현재 `astro.config.mjs`의 `site` 값은 `https://blog-1ye.pages.dev`다.

## Root Structure

- `README.md`: 현재 프로젝트 개요와 구조 요약.
- `docs/structure-rule.md`: 폴더 및 파일 기준 문서.
- `docs/current-project-map.md`: 현재 저장소 상태 문서.
- `settings/blog-1/*.json`: blog-1의 실제 사이트 및 배포 설정 원천.
- `queue/`: turn-skill 방식 작업 큐.
- `src/`: 실제 앱 코드와 콘텐츠.
- `public/`: favicon 정적 파일.
- `astro.config.mjs`, `tsconfig.json`, `package.json`: 빌드 및 타입 설정.
- `ops/28day-records/`: 블로그별 28일 운영 기록 파일.

## Source Structure

### `src/config`

- `site.ts`
  `settings/blog-1/site.json`을 읽어 사이트 제목, 설명, URL 관련 값을 노출한다.

### `src/pages`

- `index.astro`
  홈 페이지. 블로그의 성격과 운영 방향을 설명하는 소개형 랜딩이다.
- `about.astro`
  블로그 존재 이유와 운영 원칙을 설명한다.
- `blog/index.astro`
  `blog` 컬렉션 글 목록 페이지다.
- `blog/[...slug].astro`
  개별 글 상세 페이지를 정적 라우트로 생성한다.
- `units/[blogId].astro`
  블로그 운영 단위 허브 페이지를 정적 라우트로 생성한다.
- `rss.xml.js`
  `blog` 컬렉션으로 RSS를 만든다.

### `src/layouts`

- `BlogPost.astro`
  개별 글 페이지 레이아웃이다.

### `src/components`

- `BaseHead.astro`
  전역 CSS, locale별 canonical, hreflang, OG, Twitter, RSS 링크를 넣는다.
- `Header.astro`
  상단 네비게이션이다.
- `HeaderLink.astro`
  현재 경로 기준 active 링크 처리를 한다.
- `Footer.astro`
  하단 푸터다.
- `FormattedDate.astro`
  날짜를 영문 포맷으로 렌더링한다.
- `BlogUnitRail.astro`
  글 상세에서 운영 단위 정보와 관련 글 이동 링크를 붙인다.

### `src/data`

- `blogUnits.ts`
  현재 running 상태인 블로그 운영 단위 2개의 메타데이터와 발행 루프를 관리한다.

### `src/content`

- `content.config.ts`
  `blog` 컬렉션 스키마를 정의한다.
- `content/blog/ko/*.md`
  현재 한국어 게시글 원본을 담는다.
- `content/blog/en/*.md`
  현재 영어 게시글 원본을 담는다.

### `src/assets`

- 현재 실제 사용하는 이미지 자산과 Atkinson 폰트를 담는다.

### `src/styles`

- `global.css`
  Bear Blog 기반 전역 스타일이다.

## Current Content State

- 게시글은 현재 한국어 2개, 영어 2개다.
- 게시글은 현재 한국어 4개, 영어 4개다.
- 주제는 `호스팅 비교`, `Cloudflare Pages 404 해결`이며 각 주제는 대표 글과 후속 글로 묶여 있다.
- 한영 글은 같은 slug를 공유한다.
- 기본 한국어 목록과 영어 `/en/blog/` 목록이 분리된다.
- 운영 단위 허브는 `/units/blog-cf-pages-404/`, `/units/blog-hosting-vs-adsense/`와 영어 대응 경로로 제공된다.

## Current Queue State

- 이 문서는 특정 current issue가 아니라 현재 저장소 상태를 설명하는 기준 문서다.

## Confirmed Facts

- 현재는 `단일 언어 한국어 블로그 1개` 구현이다.
- 현재는 `단일 콘텐츠 컬렉션 blog`를 유지하면서 `blogId` frontmatter로 운영 단위를 분리한다.
- 현재는 `정적 배포 전제` 구조다.
- 현재 production 기준 URL은 `https://blog-1ye.pages.dev`다.
- 현재 Cloudflare Pages 연결 저장소는 `https://github.com/mempop0002-lgtm/blog`다.
- 현재 blog-1의 site/deploy 값 원천은 `settings/blog-1/*.json`이다.
- 현재 publish pipeline은 `golrazo/studio-blog -> Codespace -> mempop0002-lgtm/blog -> Cloudflare Pages`다.
- 현재는 `광고, 분석, 다국어 라우팅, 자동 생성 파이프라인`이 아직 구현되지 않았다.

## Unknowns Or Gaps

- 현재 로컬 작업 저장소와 Cloudflare Pages 연결 저장소의 관계가 문서 수준에서만 정리돼 있다.
- 현재 저장소 기준 full publish loop는 repo mismatch 때문에 직접 검증되지 않았다.
- 영어 버전 콘텐츠 구조와 `/en` 라우팅은 1차 구현됐지만 locale dictionary와 alternate metadata는 아직 부족하다.
- 영어 버전 콘텐츠 구조와 `/en` 라우팅은 1차 구현됐고 locale별 canonical/hreflang도 1차 반영됐다.
- 애드센스, privacy policy, ads.txt, 외부 analytics 스크립트는 아직 없다.
- 애드센스 준비 기준의 공용 필수 자산은 `about`만 있고 `privacy policy`, `contact`, `ads.txt`는 아직 없다.
- 최소 측정은 페이지 경로 단위 성과와 `ops/28day-records/` 수기 기록을 기준으로 운영한다.
- 자동 운영 파이프라인은 queue와 Git push 흐름 외에는 아직 없다.
