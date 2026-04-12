# Add Blog Unit

이 문서는 새 블로그 운영 단위를 추가할 때 수정해야 하는 최소 지점을 정리한다.

## Goal

- 새 블로그 1개를 기존 구조에 반복 가능한 방식으로 추가한다
- 블로그 추가 시 하드코딩 수정 지점을 최소화한다

## Required Edits

1. `src/data/blogUnits.ts`
- `BLOG_UNIT_IDS`에 새 `blog_id`를 추가한다
- `blogUnits` 배열에 새 운영 단위 메타데이터를 추가한다

2. `src/content/blog/ko/`
- 대표 글 1개를 추가한다
- 필요하면 후속 글 1개 이상을 추가한다
- 각 글에 `blogId`, `stage`, `relatedSlugs`를 넣는다

3. `src/content/blog/en/`
- 영어 대응 글을 추가한다

4. `ops/28day-records/`
- `blog_id` 기준 기록 파일을 만든다

5. `docs/active-blog-blueprints.md`
- 새 블로그 청사진을 추가한다

6. `queue/blog-portfolio-queue.md`
- 새 블로그 행을 추가한다

7. `ops/28day-scorecard.md`
- 새 블로그 점수판 행을 추가한다

## What No Longer Needs Direct Editing

- `src/content.config.ts`
  새 `blog_id`를 직접 하드코딩하지 않는다. `BLOG_UNIT_IDS`를 기준으로 검증한다.

## Launch Checklist

- 허브 경로가 생성되는가
- 대표 글이 있는가
- 후속 글 이동이 되는가
- 기록 파일이 있는가
- 점수판과 큐에 연결됐는가
- `npm run build`가 통과하는가
