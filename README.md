# Studio Blog

이 저장소는 블로그 UI 하나를 만드는 프로젝트가 아니라 `blog로 돈 버는 시스템`을 관리하는 워크스페이스다. 코드와 운영 문서를 함께 두되, Codex의 기본 역할은 개발 담당이 아니라 CMO 보좌 역할이다.

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run blog:build -- blog_001`
- `npm run blog:dev -- blog_001`
- `npm run blog:preview -- blog_001`
- `npm run post:focus -- blog_003 004`

## Structure

```text
.
├── checklist/             # 작업 후 점검 목록
├── docs/                  # 프로젝트 규칙 문서
├── ops/                   # 운영 절차
├── public/                # 정적 파일
├── queue/                 # turn-skill 기준 작업 큐
├── rule/                  # 작업 전 규칙
├── settings/              # 블로그별 실제 설정값
├── src/
│   ├── assets/            # 빌드 포함 자산
│   ├── components/        # 재사용 UI
│   ├── config/            # 사이트 설정
│   ├── content/           # Markdown 콘텐츠
│   ├── layouts/           # 레이아웃
│   ├── pages/             # 라우트
│   └── styles/            # 스타일
├── astro.config.mjs
├── package.json
└── README.md
```

루트 운영 기준은 `rule/root-rule.md`, 점검은 `checklist/root-checklist.md`, 읽기 순서는 `ops/root-read-order.md`를 따른다.
네이밍 기준은 `rule/naming-rule.md`를 따른다.
출력 기준은 `rule/output-rule.md`를 따른다.
SEO 기준은 `rule/seo-rule.md`를 따른다.
글 조합 기준은 `rule/content-parts-rule.md`와 `docs/content-parts-system.md`를 따른다.
고품질 글 방향은 `docs/high-quality-post-direction.md`를 따른다.
글 품질 점검은 `checklist/high-quality-post-checklist.md`를 따른다.
현재 반복 약점은 `docs/current-quality-gaps.md`를 본다.
이미지 프롬프트 기준은 `rule/image-prompt-rule.md`를 따른다.
현재 이미지 판정은 `docs/current-image-decisions.md`를 본다.
블로그 타입별 이미지 기준은 `docs/blog-image-fit-guide.md`를 따른다.
리뷰 사이클 기준은 `rule/review-cycle-rule.md`를 따른다.
실제 블로그별 값은 `settings/blogs/blog_00n/`을 기준으로 관리한다.

## Revenue Pipeline

- 검색 의도가 강한 문제를 찾는다.
- 문제 해결형 글을 발행해 검색 유입을 만든다.
- 글 안에서 체크리스트, 템플릿, 서비스, 상담 같은 전환 지점을 노출한다.
- 방문자를 이메일, 문의, 구매 가능한 리드로 전환한다.
- 전환이 난 주제를 다시 묶어 상품과 운영 자동화로 확장한다.

## CMO Assistant Files

- `ops/cmo-assistant-system.md`: Codex의 역할과 작업 방식
- `queue/cmo-agreement-queue.md`: Codex가 혼자 확정하면 안 되는 합의 대기 항목
- `docs/cmo-project-frame.md`: 현재까지 확정된 프로젝트 프레임
- `ops/goal-issue-system.md`: goal을 issue로 쪼개 관리하는 기준
- `docs/goal-register.md`: 현재 추적 중인 상위 goal 목록

## Content Flow

- 글은 `src/content/blog/`에 추가한다.
- 사이트 공통 설정은 `src/config/site.ts`에서 관리한다.
- 활성 블로그는 `BLOG_FOLDER=blog_00n` 또는 `npm run blog:build -- blog_00n`으로 고른다.
- 이미 완료된 글 작업기를 다시 열 때는 `npm run post:focus -- blog_003 004`처럼 쓴다.
- `post:focus`는 `content-source/posts/`에 작업 파일이 없으면 블로그 보관 폴더에서 같은 포스트를 다시 꺼내온다.
- 작업 진행 상태는 `queue/` 아래 turn-skill 형식으로 관리한다.
- 운영 기준은 `ops/revenue-pipeline.md`를 우선 참고한다.
- 하루 시작 키워드 선정 기준은 `ops/daily-keyword-routine.md`를 따른다.
- 글 완료 기준은 `ops/content-completion-system.md`를 따른다.
- 운영 직전 블로그별 구조는 `docs/blog-folder-structure.md`를 따른다.
- 실제 운영 전 점검은 `checklist/pre-operation-checklist.md`를 따른다.

## Queue Rule

- 새 작업은 goal부터 적는다.
- goal이 생기면 먼저 `queue/issue/` 아래 이슈 md를 전부 만든다.
- 그 다음 `queue/issue-queue.md`에서 current 이슈 하나만 처리한다.
- 처리 후 review를 거쳐 done으로 닫는다.
