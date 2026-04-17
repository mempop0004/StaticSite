# Post Review

## Verdict
- 전체적으로 웹 자동화 운영(Ops)의 핵심을 찌르는 실무적인 가이드라인을 담고 있습니다.
- KO 포스트의 인코딩 문제(깨짐 현상)가 심각하여 현재 상태로는 발행이 불가능합니다.
- 'Pillar' 스테이지 콘텐츠치고는 각 섹션의 설명이 너무 짧아 독자에게 충분한 가치를 주기엔 깊이가 부족합니다.

## Strengths
- **명확한 구조:** 6가지 원칙을 번호를 매겨 제시하여 가독성이 높습니다.
- **실무 중심적 관점:** 기술적 구현보다 운영(Ownership, Cadence) 관점을 강조한 점이 훌륭합니다.
- **메타데이터 정합성:** `blogId`, `stage`, `tags` 등 Frontmatter 설정이 체계적입니다.
- **KO/EN 대응:** 두 언어 간의 구조와 논리 전개가 완벽하게 일치합니다.

## Problems
- **KO 텍스트 인코딩 오류 (Critical):** 한국어 본문과 제목이 `????`로 표시되어 내용을 확인할 수 없습니다. 파일 저장 시 UTF-8 인코딩 확인이 필수적입니다.
- **내용의 휘발성 (Depth):** 각 항목에 대한 설명이 1~2문장에 그치고 있습니다. 'Pillar' 콘텐츠라면 각 규칙이 왜 중요한지, 어기면 어떤 문제가 생기는지 구체적인 예시(Case Study)가 추가되어야 합니다.
- **결론부 부재:** 6번 항목 이후 글이 갑자기 끝납니다. 내용을 요약하거나 다음 단계(Next Step)를 제시하는 맺음말이 필요합니다.
- **이미지 Alt Text의 기계적 반복:** 제목을 그대로 복사한 느낌이 강합니다. 이미지의 시각적 요소를 설명하면서 키워드를 녹여내는 방식이 좋습니다.

## SEO
- **title:** 핵심 키워드(Web Automation, Ops, Rules)가 잘 포함되어 있으나 조금 더 "해결책" 중심의 어조가 필요합니다.
- **description:** EN 버전은 요약이 잘 되어 있으나, KO 버전은 깨짐 현상으로 인해 수정이 필요합니다.
- **search intent fit:** 'Learn' 의도에 맞게 원칙을 제시하고 있으나, 학습자가 실질적인 액션 아이템을 얻기엔 정보량이 다소 적습니다.
- **internal link:** 본문에 관련 가이드나 다른 운영 원칙 포스트로의 내부 링크가 전혀 없습니다. (예: CI/CD 설정 가이드 등 연결 권장)

## Structure
- **lead:** 자동화가 왜 망가지는지(Operating rules 부재)를 지적하며 독자의 공감을 잘 유도합니다.
- **section flow:** 규칙 1(수동 유지)부터 규칙 6(리뷰 주기)까지 논리적으로 매끄럽게 연결됩니다.
- **duplication:** 항목 간의 내용 중복은 없습니다.
- **conclusion:** **[보완 필요]** 요약 섹션이나 실행을 촉구하는 문구가 누락되었습니다.

## KO/EN Consistency
- **일치하는 점:** 6가지 규칙의 순서와 핵심 메시지가 동일합니다.
- **빠진 점:** KO 버전의 인코딩 문제로 인해 세부 표현의 뉘앙스 차이를 비교하기 어렵습니다.
- **어색한 점:** EN 버전의 'Lock the trigger' 표현은 명확하나, KO 버전에서 이를 어떻게 번역했는지 확인이 필요합니다 (예: '트리거 확정' 또는 '발행 조건 명시' 등).

## Better Title Options
- **ko**
  1. 웹 자동화 도입 전 반드시 확정해야 할 운영 규칙 6가지
  2. 실패하는 웹 자동화 시스템의 공통점과 6가지 해결책
  3. 지속 가능한 웹 Ops 구축을 위한 체크리스트: 자동화의 핵심 원칙
- **en**
  1. 6 Essential Rules for Stable Web Automation and Ops
  2. Why Your Web Automation Fails: 6 Governance Rules to Fix It
  3. Beyond Scripts: Building a Reliable Web Ops System in 6 Steps

## Better Description Options
- **ko**
  1. 웹 자동화가 복잡해지는 이유는 운영 규칙의 부재 때문입니다. 성공적인 웹 Ops 구축을 위해 반드시 정해야 할 6가지 핵심 원칙을 확인하세요.
  2. 자동화 스크립트를 짜기 전, 체크 범위부터 리뷰 주기까지 6가지 운영 기준을 먼저 세우세요. 시스템의 안정성을 결정짓는 운영 가이드입니다.
- **en**
  1. Web automation fails without clear operating rules. Master these 6 essential rules—from trigger locking to ownership—to build a system that actually scales.
  2. Don't let your automation become technical debt. Learn the 6 governance principles required to turn messy scripts into a professional web operations system.

## Revision Priority
1. **KO 인코딩 복구:** 최우선 순위입니다. 텍스트가 깨지지 않도록 재작성/저장이 필요합니다.
2. **섹션별 상세 내용 보완:** 각 6가지 규칙마다 "실행 예시"나 "주의사항"을 1~2문장씩 더 추가하여 정보의 밀도를 높여야 합니다.
3. **결론 및 CTA 추가:** 독자가 이 규칙을 자신의 시스템에 어떻게 적용할지 안내하는 마무리 문단을 추가하십시오.
