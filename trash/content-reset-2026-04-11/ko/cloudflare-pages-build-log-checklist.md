---
title: 'Cloudflare Pages 빌드 로그에서 먼저 볼 체크리스트'
description: '배포가 이상할 때 Cloudflare Pages 빌드 로그에서 가장 먼저 확인할 항목을 정리한 더미 글이다.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-404-fix-guide'
  - 'cloudflare-pages-output-directory-mismatch'
pubDate: 'Apr 17 2026'
updatedDate: 'Apr 17 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

배포가 실패했을 때 빌드 로그는 가장 빨리 혼란을 줄여주는 화면이다.

먼저 아래 세 가지를 본다.

- 어떤 branch가 빌드됐는가
- `npm run build`가 실제로 실행됐는가
- 출력에 `dist`가 보이는가

이 세 줄만 봐도 문제 범위를 빨리 좁힐 수 있다.

다음 글은 [output directory 불일치 점검](/ko/blog/cloudflare-pages-output-directory-mismatch/)이다.
