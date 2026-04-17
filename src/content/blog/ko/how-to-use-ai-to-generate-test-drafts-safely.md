---
title: 'AI로 테스트 초안을 만들고 사람이 마무리하는 방법'
description: 'AI는 테스트에서 빈 화면 비용을 줄일 때 가장 유용하고, 판단을 대신할 때 가장 위험하다. 추측한 assertion과 상상한 setup을 걸러내면서 테스트 초안을 쓰는 실전 흐름을 정리한다.'
blogId: 'blog-ai-for-developers'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - 'AI테스트'
  - '테스트초안'
  - '개발자AI'
  - '테스트작성'
  - '안전한AI'
pubDate: '2026-04-14T09:00:00+09:00'
relatedSlugs:
  - 'ai-code-review-checklist-for-safer-pull-requests'
  - 'practical-ways-developers-can-start-with-ai'
updatedDate: '2026-04-14T09:00:00+09:00'
heroImage: '../../../assets/generated/post_blog_002_post_003-slot-001.png'
heroImageAlt: '이 글의 핵심 개념을 보여주는 대표 이미지. AI로 테스트 초안을 만들고 사람이 마무리하는 방법'
---
<p>AI는 테스트를 대신 써주는 도구라기보다, 빈 화면 비용을 줄여주는 도구로 쓸 때 가장 실용적이다. 위험해지는 순간은 생성된 테스트를 곧바로 “이 동작을 이해했다는 증거”처럼 다루기 시작할 때다.</p>

<p>안전한 출발점은 좁다. 이미 동작을 알고 있는 모듈이 있고, 테스트 파일을 0부터 여는 비용만 줄이고 싶을 때다. 그 틈을 AI가 메우게 해야 한다.</p>

<p>이 글은 <a href="/ko/units/blog-ai-for-developers/">개발자 AI 활용 유닛 페이지</a>, <a href="/ko/blog/ai-code-review-checklist-for-safer-pull-requests/">AI 코드 리뷰 체크리스트</a>, <a href="/ko/blog/practical-ways-developers-can-start-with-ai/">개발자 AI 시작 글</a>과 같이 묶어 읽는 편이 맞다.</p>

<h2>1. 이미 신뢰하는 동작에서 시작한다</h2>
<p>가장 나쁜 출발점은 아직 로직이 흔들리는 기능 브랜치다. 가장 좋은 출발점은 기대 동작이 이미 코드나 기존 사용 예시로 보이는 함수다.</p>
<ul>
  <li><strong>잘 맞는 경우:</strong> 순수 함수, 검증 로직, serializer, mapper, formatter</li>
  <li><strong>더 위험한 경우:</strong> 인증 흐름, 결제 로직, 경쟁 상태, 상태가 많은 비동기 흐름</li>
</ul>

<h2>2. “완성 테스트”가 아니라 경로별 초안을 요청한다</h2>
<p>“테스트 다 써줘”보다, 세 가지 경로의 초안을 요청하는 편이 훨씬 안전하다.</p>
<ul>
  <li>정상 경로</li>
  <li>실패 경로</li>
  <li>경계 조건</li>
</ul>

<p>이렇게 요청하면 출력이 짧고 검토 가능하게 남는다. 번듯하지만 가짜로 완성된 테스트 묶음보다, 짧고 불완전한 초안이 낫다.</p>

<h2>3. 스타일보다 assertion을 먼저 본다</h2>
<p>나쁜 AI 테스트의 핵심 문제는 포맷이 아니다. assertion이 약하거나, 동작을 추측했거나, 실제 리스크를 전혀 건드리지 못하는 데 있다.</p>

<p>먼저 이 네 가지를 본다.</p>
<ul>
  <li>assertion이 구현 디테일이 아니라 실제 동작을 검증하는가</li>
  <li>실패 경로가 정말 그 이유로 실패하는가</li>
  <li>경계 조건이 실제 운영에서 나오는가</li>
  <li>없는 fixture, setup, mock을 상상해서 쓰지 않았는가</li>
</ul>

<figure class="article-inline-image">
  <img src="/generated-post-assets/post_blog_002_post_003-slot-002.png" alt="기존 동작, AI가 만든 테스트 초안, 그리고 assertion·경계 조건·숨은 가정 검토 표시를 함께 보여주는 평면 설명 이미지." loading="lazy" decoding="async">
</figure>

<h2>4. 숨은 가정을 진짜 버그 후보로 본다</h2>
<p>실무에서 더 비싼 실패는 테스트 이름이 이상한 것이 아니다. 실제로 없는 문맥을 AI가 조용히 상상해버리는 것이다.</p>
<p>예를 들면 이런 식이다.</p>
<ul>
  <li>코드베이스에 없는 fixture를 전제로 한다</li>
  <li>테스트에서 설정되지 않는 env var를 가정한다</li>
  <li>운영 응답 형태와 다른 mock 응답을 쓴다</li>
  <li>부작용을 검증해야 하는데 assertion이 빠져 있다</li>
</ul>

<h2>5. 프롬프트와 체크리스트를 짧게 고정한다</h2>
<p>이 작업은 프롬프트도 좁게 주는 편이 좋다.</p>
<blockquote>
  <p>이 함수의 테스트 초안을 만들어줘. normal path, failure path, realistic edge case로 나눠줘. 넓은 테스트 세트보다 작은 assertion 위주로 작성하고, setup이 불명확하면 추측하지 말고 uncertain으로 표시해줘.</p>
</blockquote>

<p>그리고 결과는 같은 체크리스트로 검토한다.</p>
<ol>
  <li>각 테스트가 실제 동작과 연결되는가</li>
  <li>최소 한 개의 실패 경로가 들어갔는가</li>
  <li>경계 조건이 실제 사용에서 나온 것인가</li>
  <li>없는 setup이나 숨은 문맥을 상상하지 않았는가</li>
  <li>각 assertion이 왜 pass/fail 해야 하는지 설명할 수 있는가</li>
</ol>

<h2>무엇부터 시작할까</h2>
<p>안정적인 모듈 하나를 고르고, 세 가지 경로 초안만 받는 것부터 시작해라. 그다음 바로 방어할 수 있는 assertion만 남기고, 나머지 경계 조건은 직접 채우면 된다. 그러면 AI는 권위가 아니라 가속 도구로 남는다.</p>
