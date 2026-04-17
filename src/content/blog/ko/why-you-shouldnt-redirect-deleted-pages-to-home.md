---
title: '삭제된 페이지를 홈으로 보내면 안 되는 이유'
description: '삭제된 URL을 전부 홈으로 보내면 정리한 것처럼 보여도 사용자와 검색엔진 모두에게 혼란을 준다. 홈 리다이렉트가 왜 나쁜 기본값인지 정리한다.'
blogId: 'blog-real-world-web-troubleshooting'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - '리다이렉트'
  - '404'
  - '홈페이지이동'
  - '문제해결'
  - 'SEO'
pubDate: '2026-04-14T09:00:00+09:00'
updatedDate: '2026-04-14T09:00:00+09:00'
heroImage: '../../../assets/generated/post_blog_010_post_003-slot-001.png'
heroImageAlt: '이 글의 핵심 개념을 보여주는 대표 이미지. 삭제된 페이지를 홈으로 보내면 안 되는 이유'
---
<p>삭제된 URL을 전부 홈으로 보내면 리포트는 깔끔해 보여도 실제 상태는 가려진다.</p>

<p>사용자와 검색엔진 모두 “삭제됨”인지 “이동됨”인지 분명히 알 수 없는 상태가 된다.</p>

<h2>사용자가 먼저 느끼는 문제</h2>
<p>사용자는 즉시 맥락을 잃는다. 홈은 원래 찾던 질문을 해결해주지 못하는 경우가 대부분이다.</p>

<h2>검색엔진이 받는 신호</h2>
<p>모든 URL이 홈으로 이동하면 신호가 섞인다. 이동인지 삭제인지 모호해지고, 크롤러는 판단을 늦춘다.</p>

<h2>대신 해야 할 처리</h2>
<p>실제 대체물이 있을 때만 redirect를 쓰고, 아니라면 404나 410으로 정직하게 끝내야 한다.</p>

<figure class="article-inline-image">
  <img src="/generated-post-assets/post_blog_010_post_003-slot-002.png" alt="홈 리다이렉트와 404/410 처리 비교 시트" loading="lazy" />
</figure>

<h2>What to do first</h2>
<p>삭제된 URL 묶음을 하나 고른 뒤, 실제 대체물이 없는 경우부터 홈 리다이렉트를 끊어라.</p>

<ul>
  <li><a href="/ko/units/blog-real-world-web-troubleshooting/">실전 웹 문제 해결 유닛</a></li>
  <li><a href="/ko/blog/real-world-web-troubleshooting-rules-you-should-fix-first/">기준 문제 해결 규칙</a></li>
  <li><a href="/ko/blog/when-to-use-404-410-and-redirects/">404/410 판단 가이드</a></li>
</ul>
