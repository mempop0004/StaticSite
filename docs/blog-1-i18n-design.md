# Blog-1 I18N Design

## Goal

- blog-1을 한국어와 영어 2개 언어로 운영할 수 있는 구조를 먼저 설계한다.
- 구현보다 먼저 URL, 콘텐츠, 페이지 기준을 고정한다.

## Default Language

- default locale: `ko`
- supported locales: `ko`, `en`
- 한국어를 원본 운영 언어로 본다.

## URL Strategy

- 한국어 홈: `/`
- 한국어 글 목록: `/blog/`
- 한국어 글 상세: `/blog/<slug>/`
- 영어 홈: `/en/`
- 영어 글 목록: `/en/blog/`
- 영어 글 상세: `/en/blog/<slug>/`

## Why This Strategy

- 현재 live site가 한국어 단일 구조로 이미 열려 있으므로 한국어 URL은 그대로 유지하는 편이 안전하다.
- 영어만 `/en` prefix를 쓰면 기존 한국어 URL 자산과 검색 경로를 최대한 유지할 수 있다.
- default locale을 한국어로 유지하면 blog-1의 현재 상태와도 맞다.

## Content Structure

- 현재 `src/content/blog/` 단일 구조는 장기적으로 분리한다.
- 권장 구조:

```text
src/content/
  blog/
    ko/
      <slug>.md
    en/
      <slug>.md
```

- 같은 주제의 한영 글은 같은 `slug`를 공유한다.
- 언어 차이는 폴더로 구분하고, slug는 가급적 동일하게 유지한다.

## Content Pair Rule

- 한국어와 영어는 같은 주제의 대응 콘텐츠로 관리한다.
- 기계 번역본처럼 다루지 않고, 각 언어에서 읽기 자연스럽게 유지한다.
- 영어 글이 아직 없으면 영어 경로에서 fallback 정책을 별도로 정해야 한다.

## Page Strategy

- 홈:
  - 한국어 홈은 현재 `/`를 유지한다.
  - 영어 홈은 `/en/`에 별도 페이지를 둔다.
- 글 목록:
  - 한국어와 영어 목록은 경로와 데이터 소스만 다르고 레이아웃은 최대한 공유한다.
- 글 상세:
  - 공통 레이아웃은 재사용하고, locale에 따라 콘텐츠만 갈아낀다.

## Component Strategy

- `Header`, `Footer`, `BaseHead`는 locale 입력을 받을 수 있게 확장한다.
- 네비게이션 라벨, 메타 설명, canonical, alternate language 링크는 locale 기준으로 바뀌어야 한다.
- 공통 UI는 재사용하되 텍스트는 locale 별 분리 가능해야 한다.

## Settings Impact

- `settings/blog-1/site.json`의 `default_locale`과 `locales`는 현재 설계와 맞다.
- 이후 locale별 제목, 설명, 네비게이션 문구가 필요하면 settings 또는 locale dictionary 구조를 추가한다.

## Implementation Order

1. 콘텐츠 구조를 `ko/en` 폴더 기준으로 재설계한다
2. locale별 라우트 엔트리 구조를 만든다
3. 공통 컴포넌트를 locale 대응으로 바꾼다
4. 한국어 기존 경로와 영어 `/en` 경로를 같이 지원한다

## Current Decision

- blog-1은 `ko` 기본, `en` 확장 구조로 간다.
- 한국어는 기존 URL 유지, 영어만 `/en` prefix를 쓴다.
- 콘텐츠는 장기적으로 `src/content/blog/ko`와 `src/content/blog/en`으로 분리한다.
