# Post Review

## Verdict
실무 운영 관점에서 매우 유용한 체크리스트이나, **KO 포스트의 인코딩/텍스트 깨짐 현상이 치명적**입니다. 내용적으로는 '운 좋게 고치는 것'이 아닌 '시스템으로 해결하는 것'을 강조하여 타겟 독자(개발자/운영자)에게 신뢰감을 줍니다.

## Strengths
- **실무적 접근:** 단순 기술 나열이 아니라 '증상과 원인 분리', '로그보다 표면 확인 우선' 등 시니어급의 노하우가 잘 녹아 있습니다.
- **구조적 명확성:** 6가지 원칙을 번호를 매겨 제시하여 가독성이 높습니다.
- **내부 링크 활용:** 관련 유닛(Unit) 페이지를 도입부에서 언급하여 사이트 내 체류 시간과 권위를 높입니다.
- **일관된 톤앤매너:** 전문적이고 단호한 어조를 유지하여 가이드로서의 무게감이 있습니다.

## Problems
1. **KO 버전 텍스트 깨짐 (Critical):** 한국어 본문 대부분이 `?`로 표시되어 읽을 수 없습니다. 인코딩 설정(UTF-8)을 확인하고 원본 텍스트로 재복구가 시급합니다.
2. **EN 버전 특수문자 오류 (High):** 도입부의 `"??et?? check random things"` 부분에 잘못된 인코딩이나 특수문자(Smart Quotes 등)가 포함되어 가독성을 해칩니다.
3. **결론의 빈약함 (Medium):** 6번 원칙 이후 바로 결론으로 넘어가는데, 독자가 당장 오늘 적용해볼 수 있는 '작은 행동(Next Step)'을 좀 더 구체적으로 제시하면 좋습니다.
4. **이미지 Alt 텍스트 미흡 (Low):** `heroImageAlt`가 단순히 제목을 반복하고 있습니다. 이미지의 시각적 요소를 설명하거나 검색 엔진이 맥락을 이해할 수 있는 구체적인 설명이 필요합니다.

## SEO
- **title:** 현재 제목은 다소 평이합니다. '시간 단축'이나 '시스템화' 같은 키워드를 포함하는 것이 클릭률(CTR)에 유리합니다.
- **description:** 정보 요약은 잘 되어 있으나, 글자 수가 다소 길어 검색 결과에서 잘릴 우려가 있습니다. 핵심 문장을 앞으로 배치해야 합니다.
- **search intent fit:** '웹 장애 해결'을 원하는 사용자의 의도(Fix)에 정확히 부합합니다.
- **internal link:** `/units/blog-real-world-web-troubleshooting/` 링크가 적절히 배치되었습니다.

## Structure
- **lead:** 문제 상황(무작위 대응)을 먼저 제시하여 공감을 유도하는 방식이 좋습니다.
- **section flow:** 증상 파악 -> 우선순위 -> 로그 확인 -> 자산/경로 -> 시스템(리다이렉트) -> 예방 순으로 논리적입니다.
- **duplication:** 내용상 중복은 없으나, 각 섹션의 길이가 균등하지 않아 4, 5번 항목에도 2번처럼 구체적인 예시(Example)를 추가하면 균형이 맞을 것 같습니다.
- **conclusion:** 'What to lock first' 섹션을 별도 H2가 아닌 요약 박스나 불렛 포인트로 처리하는 것이 깔끔합니다.

## KO/EN Consistency
- **일치하는 점:** 메타데이터(blogId, stage, tags 등)와 전체적인 섹션 구조는 일치합니다.
- **빠진 점:** KO 버전의 인코딩 문제로 인해 세부 문장의 뉘앙스 차이를 비교하기 불가능합니다.
- **어색한 점:** 태그 리스트에서 KO 버전은 인코딩 문제로 단어가 잘려 보입니다.

## Better Title Options
- **ko 3개**
  1. 웹 장애 대응 시간을 절반으로 줄이는 6가지 철칙
  2. 추측하지 마세요: 실무 웹 트러블슈팅을 위한 시스템 가이드
  3. 반복되는 웹 오류를 뿌리 뽑는 6단계 체크리스트
- **en 3개**
  1. Stop Guessing: 6 Rules for Systematic Web Troubleshooting
  2. How to Build a Repeatable Web Incident Response System
  3. Beyond 404s: 6 Principles to Lock Down Your Troubleshooting Process

## Better Description Options
- **ko 2개**
  1. 매번 처음부터 시작하는 웹 장애 대응은 이제 그만. 증상 분류부터 재발 방지까지, 실무 시간을 단축하는 6가지 시스템 원칙을 공개합니다.
  2. 404 에러부터 리다이렉트 루프까지, 웹 트러블슈팅의 속도를 높이는 법. 로그를 뒤지기 전에 반드시 확인해야 할 6가지 체크리스트를 확인하세요.
- **en 2개**
  1. Stop chasing web errors by luck. Learn 6 professional rules to group symptoms, verify surfaces, and build a repeatable troubleshooting system.
  2. Turn firefighting into a process. This guide covers the essential baseline for web diagnostics, asset paths, and routing verification.

## Revision Priority
1. **KO 본문 복구:** 가장 우선적으로 한국어 텍스트 인코딩 문제를 해결하고 내용을 채워넣어야 합니다.
2. **EN 특수문자 정제:** 도입부 및 본문의 깨진 특수문자(`??`)를 교정합니다.
3. **제목 및 설명 최적화:** 위 제안된 옵션을 참고하여 CTR을 높일 수 있는 제목으로 수정합니다.
4. **결론 보강:** 마지막 섹션에 '지금 바로 팀의 체크리스트에 추가할 항목' 등의 구체적인 가이드를 추가합니다.
