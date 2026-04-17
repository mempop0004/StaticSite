---
title: '리뷰 파일과 포스트를 어긋나지 않게 연결하는 방법'
description: '리뷰 파일이 다른 포스트에 붙는 순간 품질 관리가 무너진다. blog id, post 번호, slug로 리뷰-포스트 매칭 규칙을 고정하는 방법을 정리한다.'
blogId: 'blog-web-content-production-system'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - '리뷰시스템'
  - '콘텐츠제작'
  - '파일매핑'
  - '품질관리'
  - '포스트검수'
pubDate: '2026-04-14T09:00:00+09:00'
updatedDate: '2026-04-14T09:00:00+09:00'
heroImage: '../../../assets/generated/post_blog_009_post_003-slot-001.png'
heroImageAlt: '이 글의 핵심 개념을 보여주는 대표 이미지. 리뷰 파일과 포스트를 어긋나지 않게 연결하는 방법'
---
<p>리뷰 시스템은 잘못된 피드백이 다른 포스트에 붙기 시작하는 순간부터 조용히 무너진다.</p>

<p>해법은 리뷰를 “코멘트 파일”이 아니라 “식별 레코드”로 다루는 것이다.</p>

<h2>1. 식별 필드를 고정한다</h2>
<p>모든 리뷰에 동일한 3개 필드를 넣는다. <strong>blog id</strong>, <strong>post 번호</strong>, <strong>slug</strong>. 하나라도 없으면 무효다.</p>

<h2>2. 어긋남은 즉시 실패로 본다</h2>
<p>slug가 바뀌면 리뷰 파일도 반드시 바뀌어야 한다. 안 바뀌면 빌드 실패나 검수 경고가 떠야 한다.</p>

<h2>3. 포스트 이동과 리뷰 이동을 묶는다</h2>
<p>포스트가 studio에서 실제 블로그 폴더로 이동하면 리뷰 파일도 같이 이동해야 한다. 남으면 연결이 끊긴다.</p>

<figure class="article-inline-image">
  <img src="/generated-post-assets/post_blog_009_post_003-slot-002.png" alt="blog id, post id, slug, generated markdown, review record가 이어진 식별 체인" loading="lazy" />
</figure>

<h2>What to do first</h2>
<p>모든 리뷰에 식별 필드를 적고 발행 전에 반드시 검증한다.</p>

<ul>
  <li>blog id + post 번호 + slug가 일치해야 한다</li>
  <li>리뷰 파일 이름은 slug와 같아야 한다</li>
  <li>리뷰 파일은 포스트 이동과 함께 움직여야 한다</li>
</ul>

<ul>
  <li><a href="/ko/units/blog-web-content-production-system/">콘텐츠 제작 시스템 유닛</a></li>
  <li><a href="/ko/blog/web-content-production-system-rules-you-should-fix-first/">기준 제작 규칙</a></li>
  <li><a href="/ko/blog/how-to-build-an-image-slot-based-content-production-system/">이미지 슬롯 워크플로</a></li>
</ul>
