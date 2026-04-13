# Post Review

## Verdict
- 영문(EN) 포스트는 실무적인 통찰을 담고 있으나 'Pillar' 단계라고 하기엔 분량이 너무 빈약함.
- 국문(KO) 포스트는 텍스트 인코딩 문제 또는 유실로 인해 대다수 글자가 `?`로 노출되어 발행이 불가능한 상태임.
- 전반적으로 기술 블로그로서의 전문성을 보여주기 위해 코드 예시(Snippet) 추가가 절실함.

## Strengths
- **정적 사이트 특화:** 일반적인 robots.txt 가이드가 아닌 '정적 사이트 운영' 환경(배포 후 검증 등)을 타겟팅한 점이 좋음.
- **명확한 구조:** 4단계의 논리적 흐름(개념 -> 주의점 -> 필수요소 -> 검증)이 깔끔함.
- **실무적 관점:** 'Robots는 프라이버시 규칙이 아니다'라는 점을 명시하여 흔한 오해를 바로잡음.

## Problems
1. **KO 포스트 텍스트 깨짐 (치명적):** 국문 포스트의 제목, 설명, 본문 전반에 걸쳐 글자가 `?`로 깨져 있음. 인코딩 확인 및 전체 재작성이 필요함.
2. **콘텐츠 깊이 부족:** `stage: 'pillar'`(기둥 콘텐츠)로 설정되어 있으나, 설명이 지나치게 추상적임. 구체적인 `User-agent`, `Allow/Disallow` 코드 예시가 포함되어야 함.
3. **HTML 문법 오류:** KO 본문 3번 섹션에서 `</h2>`가 `/h2>`로 잘못 닫혀 있음.
4. **모호한 표현:** 'Run robots.txt'라는 표현은 어색함. 파일은 '실행'하는 것이 아니라 '구성(Configure)'하거나 '배치(Deploy)'하는 것임.
5. **내부 링크 부재:** `blog-static-web-operations` 시리즈의 다른 글이나 관련 가이드로 유도하는 내부 링크가 본문에 전혀 없음.

## SEO
- **title:** 현재 제목은 검색 키워드('robots.txt 설정법', '정적 사이트 SEO' 등)를 충분히 반영하지 못함.
- **description:** EN 버전은 양호하나, KO 버전은 깨짐 현상으로 인해 검색 결과 노출 시 클릭률(CTR) 저하가 확실시됨.
- **search intent fit:** 'Fix' 의도에 맞게 구체적인 '잘못된 예시 vs 잘된 예시' 코드 비교가 필요함.
- **internal link:** 관련 포스트(예: 사이트맵 생성 자동화, 정적 사이트 배포 체크리스트 등) 링크 추가 필요.

## Structure
- **lead:** 정적 사이트에서 발생할 수 있는 구체적인 피해 사례(예: 전체 인덱싱 차단)를 언급하여 위기감을 조성하면 더 효과적임.
- **section flow:** 논리적이나, 각 섹션 끝에 'Action Item'을 한 문장으로 요약해주면 더 읽기 편함.
- **duplication:** 내용 중복은 없으나, EN/KO 모두 문단이 짧아 내용이 부실해 보일 수 있음.
- **conclusion:** 'What to do first' 섹션에서 구체적인 체크 리스트나 도구(Google Search Console 등)를 추천하며 마무리할 것.

## KO/EN Consistency
- **일치하는 점:** 섹션 구성과 메타데이터(날짜, 태그 등)는 일치함.
- **빠진 점:** KO 버전에서 HTML 태그 오류로 인해 구조적 일관성이 깨짐.
- **어색한 점:** EN의 'Run safely'가 KO에서는 '안전하게 실행'으로 직역될 가능성이 높은데, '안전한 설정 및 관리'가 더 적절함.

## Better Title Options
- **ko**
  1. 정적 사이트 SEO를 망치는 robots.txt 실수 4가지와 해결법
  2. robots.txt 가이드: 정적 웹사이트에서 검색 노출 차단을 방지하는 법
  3. [체크리스트] 배포 전 반드시 확인해야 할 robots.txt 설정 원칙
- **en**
  1. 4 Common robots.txt Mistakes on Static Sites (and How to Fix Them)
  2. Static Site SEO: A Safe Guide to Configuring robots.txt
  3. How to Manage robots.txt Without Blocking Your Search Traffic

## Better Description Options
- **ko**
  1. 정적 사이트에서 robots.txt 설정 실수 하나는 전체 인덱싱 차단으로 이어집니다. 안전한 경로 차단과 사이트맵 연결법을 확인하세요.
  2. robots.txt는 보안 도구가 아닌 크롤링 규칙입니다. 정적 웹 운영 시 검색 노출을 최적화하기 위한 올바른 설정 가이드를 제공합니다.
- **en**
  1. A tiny robots.txt error can de-index your entire static site. Learn what to block, what to keep open, and how to verify after deployment.
  2. Master robots.txt for static web operations. Avoid common indexing pitfalls and ensure search engines find your content effectively.

## Revision Priority
1. **KO 텍스트 복구:** 깨진 문자를 정상적인 한국어로 복구하고 HTML 태그 오류 수정.
2. **코드 스니펫 추가:** 각 섹션에 해당하는 실제 `robots.txt` 설정 예시 코드 삽입.
3. **분량 보강:** 'Pillar' 콘텐츠 위상에 맞게 각 섹션의 설명 문단을 2~3문장씩 추가하여 전문성 강화.
