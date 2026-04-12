# Structure Rule

## Goal

- 이 프로젝트는 Astro 기반 정적 기술 블로그다.
- 구조는 "설정은 루트와 `src/config/`, 화면은 `src/pages|components|layouts`, 콘텐츠는 `src/content`, 정적 자산은 `public`, 작업 큐는 `queue`"로 분리한다.

## Root Rule

- 루트에는 실행과 빌드에 필요한 설정 파일만 둔다.
- 루트에는 사람이 바로 읽는 운영 폴더도 둔다.
- 빌드 산출물과 의존성 폴더는 루트에 두되 Git 추적 대상에서 제외한다.
- 프로젝트 운영용 queue는 루트의 `queue/`에만 둔다.
- 프로젝트 문서는 `README.md`, `rule/`, `checklist/`, `ops/`, `docs/` 아래에 둔다.

## Source Rule

- `src/pages/`: 라우트 엔트리 파일만 둔다.
- `src/components/`: 재사용 UI 조각만 둔다.
- `src/layouts/`: 페이지 레이아웃만 둔다.
- `src/content/`: 게시글 같은 원본 콘텐츠만 둔다.
- `src/styles/`: 전역 또는 공용 스타일만 둔다.
- `src/assets/`: 빌드에 포함되는 이미지, 폰트 자산만 둔다.
- `src/config/`: 사이트 제목, 설명, 네비게이션처럼 앱 설정 성격의 코드만 둔다.

## Naming Rule

- 설정 파일은 의미가 드러나도록 `site.ts`처럼 목적 기반 이름을 쓴다.
- 콘텐츠 파일명은 주제와 시점을 드러내는 kebab-case를 유지한다.
- 라우트와 컴포넌트 외의 범용 이름인 `consts.ts` 같은 파일은 새로 만들지 않는다.
- 세부 네이밍 규칙은 `rule/naming-rule.md`를 따른다.

## Queue Rule

- 진행 중 이슈는 `queue/issue-queue.md`, `queue/flow-queue.md`, `queue/task-queue.md`, `queue/issue/<issue-id>.md`에서만 관리한다.
- 마지막 push가 끝난 이슈는 queue 본체와 `queue/issue/`에서 제거한다.

## Applied To Current Project

- 사이트 상수 파일을 `src/config/site.ts`로 이동한다.
- 구조 기준 문서는 `docs/structure-rule.md`에 둔다.
- `README.md`는 현재 프로젝트 구조와 운영 흐름 기준으로 갱신한다.
- 루트 운영 기준은 `rule/root-rule.md`, `checklist/root-checklist.md`, `ops/root-read-order.md`에 둔다.
- 주제별 운영 최소 세트는 `rule/content-rule.md`, `rule/i18n-rule.md`, `rule/deploy-rule.md`, `ops/publish-flow.md`, `checklist/post-publish-checklist.md`를 따른다.
- 네이밍 기준은 `rule/naming-rule.md`에 둔다.
