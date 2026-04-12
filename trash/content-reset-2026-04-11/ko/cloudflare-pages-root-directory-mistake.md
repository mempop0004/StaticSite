---
title: 'Cloudflare Pages root directory에서 자주 하는 실수'
description: '단순한 정적 프로젝트에서 root directory 설정이 왜 자주 혼란을 만드는지 정리한 더미 글이다.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-output-directory-mismatch'
  - 'cloudflare-pages-production-branch-check'
pubDate: 'Apr 15 2026'
updatedDate: 'Apr 15 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

단일 프로젝트 저장소라면 가장 안전한 root directory는 비워두기인 경우가 많다.

대시보드가 잘못된 하위 폴더를 가리키면 실제 `package.json`이나 산출물 폴더를 찾지 못할 수 있다.

이럴 때는 값을 지우고 다시 배포하는 편이 가장 단순하다.

다음 글은 [production branch 점검](/ko/blog/cloudflare-pages-production-branch-check/)이다.
