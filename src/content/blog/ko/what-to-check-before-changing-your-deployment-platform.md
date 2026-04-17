---
title: '배포 플랫폼을 바꾸기 전에 먼저 확인해야 할 것'
description: '플랫폼 이전은 코드보다 숨어 있는 운영 가정 때문에 더 자주 실패한다. 도메인, 환경 변수, 빌드 출력, 리다이렉트, 로그, 롤백을 컷오버 전에 어떻게 잠글지 정리한다.'
blogId: 'blog-developer-deployment-and-hosting'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - '배포플랫폼'
  - '호스팅이전'
  - '도메인'
  - '환경변수'
  - '운영리스크'
pubDate: '2026-04-14T09:00:00+09:00'
relatedSlugs:
  - 'deployment-and-hosting-rules-you-should-fix-first'
  - 'cloudflare-pages-vs-vercel-how-to-choose-for-operations'
updatedDate: '2026-04-14T09:00:00+09:00'
heroImage: '../../../assets/generated/post_blog_005_post_003-slot-001.png'
heroImageAlt: '이 글의 핵심 개념을 보여주는 대표 이미지. 배포 플랫폼을 바꾸기 전에 먼저 확인해야 할 것'
---
<p>플랫폼 이전은 보통 새 플랫폼이 코드를 못 띄워서 실패하지 않는다. 지금 플랫폼이 조용히 대신해주던 일을 팀이 적어두지 않았기 때문에 실패한다. 커스텀 도메인, 프리뷰 동작, redirect, 피드 경로, 이미지 경로, 로그 확인 방식이 실제 이전 표면이다.</p>

<p>후속 글은 <a href="/ko/units/blog-developer-deployment-and-hosting/">배포와 호스팅 유닛 페이지</a>를 기준으로 더 좁은 플랫폼 글로 이어가면 된다. 기본 기준이 먼저 필요하면 <a href="/ko/blog/deployment-and-hosting-rules-you-should-fix-first/">먼저 고정해야 할 배포와 호스팅 기준</a>부터 보고, 아직 플랫폼 선택 단계라면 <a href="/ko/blog/cloudflare-pages-vs-vercel-how-to-choose-for-operations/">Cloudflare Pages vs Vercel 비교 글</a>로 이어가면 된다.</p>

<h2>1. 기능표보다 공개 표면을 먼저 잠근다</h2>
<p>실제 이전에서는 플랫폼 기능표보다 도메인 동작이 더 중요하다. 현재 live 기준을 먼저 적어라. 커스텀 도메인, HTTPS 강제, trailing slash 규칙, robots.txt, sitemap URL, RSS URL, public 자산 경로, 사용자가 이미 기대하는 redirect 규칙이 무엇인지부터 적는다.</p>
<p>타깃 플랫폼이 이중 하나만 조용히 바꿔도 이전 리스크는 생각보다 훨씬 커진다.</p>

<h2>2. 빌드 가정과 런타임 가정을 분리한다</h2>
<p>“빌드가 된다”는 말은 절반만 맞다. 먼저 빌드 출력에 속한 가정과 런타임 동작에 속한 가정을 분리해야 한다.</p>
<ul>
  <li>빌드 층: output 디렉터리, 자산 경로, 이미지 최적화, 정적 export 규칙</li>
  <li>런타임 층: 환경 변수, 서버리스 동작, rewrite, redirect, 프리뷰 인증, 로그 접근</li>
</ul>
<p>이 두 층이 한 체크리스트 안에서 뒤섞이면 컷오버 후 문제가 났을 때 디버깅이 훨씬 어려워진다.</p>

<h2>3. 도메인을 옮기기 전에 생성 결과를 먼저 본다</h2>
<p>안전한 이전 순서는 지루할 정도로 단순하다. 먼저 generated build를 검증하고, 임시 URL에서 공개 결과를 확인하고, 그 뒤에야 메인 도메인을 움직인다.</p>
<p>즉 타깃 플랫폼에서 페이지, feed, sitemap, redirect, 자산 경로가 실제 public URL에서 어떻게 보이는지를 DNS 변경 전에 먼저 확인해야 한다.</p>
<figure class="article-inline-image">
  <img src="/generated-post-assets/post_blog_005_post_003-slot-002.png" alt="배포 플랫폼 이전 전에 도메인, 환경 변수, 빌드 출력, 리다이렉트, 로그, 롤백 항목을 그룹으로 정리한 마이그레이션 체크리스트를 보여주는 설명 이미지." loading="lazy" decoding="async">
</figure>

<h2>4. 환경 변수는 복사본이 아니라 의존성 목록으로 다시 적는다</h2>
<p>환경 변수를 그냥 복사하면 빠지는 것이 많다. 어떤 기능이 어떤 변수를 필요로 하는지, 빠지면 무엇이 깨지는지, 빌드 타임 변수인지 런타임 변수인지 의존성 목록으로 다시 적어야 한다.</p>
<p>이렇게 다시 적으면 자주 놓치는 항목이 드러난다. 분석 키 누락, 인증 callback URL 오류, origin URL 불일치, webhook endpoint 누락, 잘못된 환경으로 복사된 secret 같은 것들이다.</p>

<h2>5. 롤백은 컷오버 전에 문장으로 써놔야 한다</h2>
<p>“문제가 생기면 다시 돌린다”는 건 롤백 계획이 아니다. 어떤 도메인 레코드를 되돌리고, 어떤 배포를 그대로 남겨두고, 어떤 환경 변수는 손대지 않고, 새 플랫폼을 몇 분 또는 몇 시간 관찰한 뒤 완료로 볼지까지 적어야 한다.</p>
<p>좋은 롤백 계획은 압박 상황에서도 한 사람이 공개 표면을 빠르게 원래 상태로 되돌릴 수 있어야 한다.</p>

<h2>무엇부터 시작할까</h2>
<p>빈 체크리스트에 여섯 항목만 먼저 적어라. 도메인, 환경 변수, 빌드 출력, redirect, 로그, 롤백이다. 그다음 현재 live 시스템을 기준으로 그 칸을 채워라. 이 목록을 명확하게 채우지 못한다면 아직 플랫폼 기능 비교보다 이전 준비가 먼저다.</p>
