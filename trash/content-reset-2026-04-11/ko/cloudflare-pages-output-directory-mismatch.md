---
title: 'Cloudflare Pages output directory 불일치 점검'
description: 'Cloudflare Pages의 output directory가 실제 정적 산출물과 다를 때 어떤 문제가 생기는지 보는 더미 글이다.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-build-log-checklist'
  - 'cloudflare-pages-root-directory-mistake'
pubDate: 'Apr 16 2026'
updatedDate: 'Apr 16 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

Cloudflare Pages 배포가 어긋나는 가장 쉬운 방법 중 하나는 output folder를 잘못 넣는 것이다.

Astro 정적 빌드의 기본 산출물은 보통 `dist`다.

대시보드 설정이 다른 폴더를 가리키면, 빌드는 끝나도 잘못된 결과를 서비스할 수 있다.

다음 글은 [root directory 오설정 점검](/ko/blog/cloudflare-pages-root-directory-mistake/)이다.
