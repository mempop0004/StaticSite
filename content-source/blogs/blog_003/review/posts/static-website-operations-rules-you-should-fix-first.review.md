# Post Review

## Verdict
- 정적 사이트 구축(Build)이 아닌 운영(Ops) 관점의 실무적인 규칙을 잘 짚어낸 전문적인 글입니다.
- 다만, KO 버전의 인코딩 오류와 태그 깨짐 등 기술적 완성도가 낮아 즉시 발행은 불가능한 상태입니다.
- 전체적으로 톤앤매너가 건조하여, 독자가 왜 이 7가지를 '지금' 당장 고정해야 하는지에 대한 긴박함이 부족합니다.

## Strengths
- **실무 중심적 접근**: 단순 가이드가 아닌 '규칙(Rule)'과 '고정(Lock)'이라는 키워드로 운영의 안정성을 강조함.
- **명확한 구조**: 7가지 체크리스트 형태로 구성되어 가독성이 좋고 실천이 용이함.
- **운영 철학 반영**: "리뷰는 시스템을 개선해야 한다"는 7번 항목은 단순 기술 블로그 이상의 통찰력을 제공함.
- **일관된 타겟팅**: 정적 사이트를 운영해보며 한계를 느껴본 중급 이상의 운영자에게 소구력이 높음.

## Problems
- **기술적 서식 오류 (중요)**: KO 버전의 `<h2>` 태그 4번, 5번 항목이 `</h2>` 대신 `/h2>`로 닫혀 있어 레이아웃이 깨질 위험이 큼.
- **리드문의 흡입력 부족**: "대부분의 사이트는 프레임워크가 아니라 운영 규칙이 없어서 실패한다"는 핵심 메시지가 더 강력하게 전면 배치되어야 함.
- **KO 버전의 번역투 및 인코딩**: `???`로 표시된 깨진 글자가 많으며, 문장 구조가 영어 직역에 가까워 한국어 독자에게는 딱딱하게 느껴짐.
- **내부 링크 부재**: 'studio-post'나 '시스템 규칙' 등을 언급하면서 다른 관련 가이드나 이전 포스트로의 연결이 전혀 없음.
- **4번 항목의 추상성**: 이미지 규칙에서 '슬롯 번호'나 '로케일 세이프'에 대한 구체적인 예시나 스크린샷이 없어 초보 운영자에게는 모호함.

## SEO
- **Title**: 현재 제목은 너무 서술적임. "왜 내 사이트는 배포할 때마다 깨질까?" 같은 문제 해결형 키워드 고려 필요.
- **Description**: 핵심 키워드(정적 웹사이트, 배포 규칙, SEO, 운영 자동화)는 포함되어 있으나, 리스트 나열형이라 클릭률이 낮을 수 있음.
- **Search Intent Fit**: '정적 사이트 운영', 'Static Site Operations' 검색 의도에 정확히 부합함.
- **Internal Link**: 블로그 내 '운영 규칙' 관련 다른 포스트(예: 이미지 최적화 가이드, 배포 파이프라인 설정 등) 링크 추가 필요.

## Structure
- **Lead**: 문제 제기(Pain Point) -> 해결책(7가지 규칙) -> 기대 효과 순으로 보강 필요.
- **Section Flow**: URL(기초)에서 리뷰(고도화)로 이어지는 흐름은 매우 논리적임.
- **Duplication**: 1번(URL)과 6번(검증 파일)은 '검색 환경 설정'이라는 측면에서 내용이 일부 중복됨. 하나로 합치거나 차별점을 명확히 해야 함.
- **Conclusion**: 단순히 요약으로 끝나지 말고, "지금 바로 당신의 config 파일을 열어보라"는 식의 CTA(Call to Action) 추가 권장.

## KO/EN Consistency
- **일치하는 점**: 전체적인 7단계 구조와 핵심 논지는 완벽하게 일치함.
- **빠진 점**: KO 버전 3번 항목에서 'studio-post'라는 고유 명칭이 언급되는데, EN 버전에는 이 용어가 생략되어 시스템 명칭의 일관성이 떨어짐.
- **어색한 점**: KO 버전의 "정적 사이트가 페이지의 모음이 아니라 운영체제가 되는 방법"은 EN의 "operating system"을 직역한 것인데, 한국어 문맥에서는 '운영 시스템' 혹은 '체계'가 더 적절함.

## Better Title Options
- **KO**
  1. 정적 사이트 운영이 편해지는 '배포 전 필수 고정 규칙' 7가지
  2. 왜 내 블로그는 매번 배포가 꼬일까? - 정적 웹 운영의 7가지 골든 룰
  3. Static Site Ops: 첫 글을 올리기 전 반드시 결정해야 할 7가지 설정
- **EN**
  1. Don't Launch Your Static Site Without Locking These 7 Rules
  2. From Pages to Systems: 7 Essential Rules for Static Site Operations
  3. Why Your Static Site Fails After Deploy — and How to Fix the Ops

## Better Description Options
- **KO**
  1. 정적 웹사이트 운영 중 발생하는 오류와 혼란을 막고 싶나요? 사이트 URL부터 이미지 규칙까지, 발행 전 반드시 고정해야 할 7가지 실무 규칙을 공개합니다.
  2. 단순 구축을 넘어 지속 가능한 블로그 운영을 위한 체크리스트. 검색 엔진 최적화와 배포 안정성을 동시에 잡는 7가지 운영 시스템 구축 가이드.
- **EN**
  1. Stop breaking your static site with every deploy. Master these 7 operational rules—from canonical URLs to image workflows—to turn your blog into a stable publishing system.
  2. Why do static sites fail after the first few posts? Learn the 7 critical "Lock-in" rules for URLs, deployment targets, and review loops that ensure long-term stability.

## Revision Priority
1. **HTML 태그 및 인코딩 수정**: 깨진 글자 복원 및 `<h2>` 닫는 태그 오류 즉시 수정.
2. **리드문 강화**: 도입부에서 '운영 체계가 없을 때 겪는 고통'을 더 강조하여 독자의 공감을 유도.
3. **KO 버전 문장 다듬기**: 직역투 문장을 한국어 IT 실무 용어와 자연스러운 말투로 교정.
4. **내부 링크 및 예시 보강**: 4번(이미지), 5번(피드) 항목에 실제 적용 예시나 설정 코드 한 줄이라도 추가하여 구체성 확보.
