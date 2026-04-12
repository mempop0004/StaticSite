# Active Blog Blueprints

현재 `running` 상태로 올리는 블로그 2개의 청사진이다.

## 1. blog-cf-pages-404

```text
blog_id: blog-cf-pages-404
topic: Cloudflare Pages 404 fix
type: problem-solving
reader: static hosting beginners
search_reason: 실제 오류 상황에서 즉시 해결법과 설정값을 찾기 위해 검색이 남는다
adsense_fit: 문제 해결형 검색 유입은 의도가 분명하고 관련 설정 글로 이어질 가능성이 높다
automation_name: cf-pages-error-runbook
daily_hours: 1h
start_date: 2026-04-10
review_date: 2026-05-08
success_signal: 검색 유입이 생기고 관련 설정 글 이동이 발생한다
failure_signal: 검색 유입이 약하고 추가 글 이동 없이 단일 이탈만 반복된다
structure_path: /units/blog-cf-pages-404/
lead_post: /blog/cloudflare-pages-404-fix-guide/
follow_up_post: /blog/cloudflare-pages-redeploy-after-settings-change/
record_path: ops/28day-records/blog-cf-pages-404.md
```

## 2. blog-hosting-vs-adsense

```text
blog_id: blog-hosting-vs-adsense
topic: Cloudflare Pages vs Netlify for Adsense blogs
type: comparison
reader: monetizing blog starters
search_reason: 호스팅 선택 전 비교, 제한, 상업성, 애드센스 적합성을 검토하려는 검색이 남는다
adsense_fit: 비교형 글은 체류 시간이 길고 후속 비교 글 이동을 만들기 쉽다
automation_name: hosting-vs-comparison
daily_hours: 2h
start_date: 2026-04-10
review_date: 2026-05-08
success_signal: 비교 검색 유입이 발생하고 관련 비교 글 또는 설정 글 이동이 나온다
failure_signal: 유입이 약하거나 체류가 낮고 운영 시간 대비 확장 가치가 없다
structure_path: /units/blog-hosting-vs-adsense/
lead_post: /blog/2026-tech-blog-hosting-comparison/
follow_up_post: /blog/cloudflare-pages-vs-netlify-for-adsense-blogs/
record_path: ops/28day-records/blog-hosting-vs-adsense.md
```

## Why These Two

- 기존 저장소에 이미 씨앗 콘텐츠가 있다
- 문제 해결형과 비교형을 동시에 시험할 수 있다
- 애드센스 초기 단계에 필요한 검색 잔존 수요와 페이지 깊이를 같이 볼 수 있다

## Current Running Structure

- 각 블로그는 `/units/<blog_id>/` 허브와 대표 글 1개, 후속 글 1개를 가진다.
- 측정은 대표 글과 후속 글의 페이지 이동, Search Console 페이지 단위 성과, 운영 시간 기록으로 최소 운영한다.
- 28일 운영 기록은 `ops/28day-records/` 아래 블로그별 파일에 남긴다.
