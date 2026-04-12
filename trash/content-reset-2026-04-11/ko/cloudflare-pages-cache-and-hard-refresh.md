---
title: 'Cloudflare Pages cache와 hard refresh 점검'
description: 'Cloudflare Pages에서 실제 배포 문제와 브라우저 캐시 문제를 구분하기 위한 더미 글이다.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-production-branch-check'
  - 'cloudflare-pages-custom-domain-404-check'
pubDate: 'Apr 13 2026'
updatedDate: 'Apr 13 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

깨져 보이는 페이지가 항상 배포 문제인 것은 아니다. 브라우저가 이전 응답을 들고 있는 경우도 있다.

그래서 hard refresh나 private window 확인이 여전히 유용하다.

private window에서는 정상인데 기존 탭만 이상하면, 배포는 멀쩡할 수 있다.

다음 글은 [custom domain 404 기본 점검](/ko/blog/cloudflare-pages-custom-domain-404-check/)이다.
