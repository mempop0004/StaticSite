---
title: 'Cloudflare Pages production branch 점검'
description: 'Cloudflare Pages 사이트가 예상대로 갱신되지 않을 때 production branch를 먼저 확인하는 더미 글이다.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-root-directory-mistake'
  - 'cloudflare-pages-cache-and-hard-refresh'
pubDate: 'Apr 14 2026'
updatedDate: 'Apr 14 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

사이트 자체는 멀쩡한데 production branch가 잘못 잡혀 있는 경우도 많다.

최신 글은 `main`에 있는데 Pages가 다른 branch를 보고 있으면 live site는 갱신되지 않는다.

낮은 수준의 빌드 문제를 보기 전에 production branch부터 확인하는 편이 빠르다.

다음 글은 [cache와 hard refresh 점검](/ko/blog/cloudflare-pages-cache-and-hard-refresh/)이다.
