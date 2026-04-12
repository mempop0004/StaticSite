# Issue

- `issue_id: goal-0-issue-01-portfolio-structure-generalize`
- `goal_id: goal-0`
- `title: 블로그 포트폴리오 구조를 확장 가능하게 일반화`
- `status: review`

# Goal Link

- `goal-0 blog로 돈 버는 시스템 만들기`

# Context

- 현재는 첫 2개 블로그를 위한 구조가 생겼지만, 새 블로그를 추가할 때 코드 수정 지점이 많다.
- 포트폴리오를 계속 늘리려면 블로그 추가 비용이 낮아야 한다.

# Scope

- `blog_id` 추가 비용을 줄이는 구조 정리
- 새 블로그 추가 시 필요한 파일/설정 지점 정리
- 고정값 기반 구조를 일반화할 수 있는지 검토

# Task

- 현재 운영 단위 구조의 하드코딩 지점을 찾는다
- 새 블로그 추가 절차를 문서화하거나 코드 구조를 정리한다
- 최소 복제 단위를 정의한다

# Review Point

- 새 블로그를 만들 때 코드 수정 지점이 명확히 줄었는가
- 새 블로그 추가 절차가 재현 가능한가

# Current

- `blog_id` 하드코딩 지점을 조사했다
- `src/content.config.ts`의 enum 하드코딩을 `src/data/blogUnits.ts`의 `BLOG_UNIT_IDS` 기준으로 바꿨다
- 새 블로그 추가 절차를 `ops/add-blog-unit.md`로 문서화했다

# Next

- review 후 다음 current issue로 이동

# Done

- `BLOG_UNIT_IDS`를 단일 진입점으로 만들었다
- content schema가 `BLOG_UNIT_IDS`를 재사용하도록 정리했다
- 새 블로그 추가 최소 절차 문서를 만들었다

# Output

- `src/data/blogUnits.ts`
- `src/content.config.ts`
- `ops/add-blog-unit.md`

# Resume Prompt

- review에서 새 블로그 추가 비용이 실제로 줄었는지 확인한다.
