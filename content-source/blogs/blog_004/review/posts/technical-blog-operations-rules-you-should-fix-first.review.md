# Post Review

## Verdict
- 기술 블로그 운영의 핵심인 '시스템화'를 잘 짚은 실무적인 가이드라인임.
- KO 포스트의 텍스트 인코딩/렌더링 문제(물음표 속출)로 인해 현재 상태로는 발행이 절대 불가능함.
- EN 포스트는 문장이 다소 딱딱하지만 논리가 명확하며, 운영 효율성에 초점이 맞춰져 있어 타겟 독자(운영자)에게 유용함.

## Strengths
- **운영 단위(Topic Unit) 강조**: 개별 포스트가 아닌 '운영 단위'로 사고하게 하여 블로그의 파편화를 막는 통찰을 제공함.
- **이미지/슬러그 규칙의 단순화**: 창의성보다 '의사결정 비용 감소'에 초점을 맞춘 점이 운영자 관점에서 매우 실무적임.
- **리뷰 메모리(Review Memory)**: 단순히 글을 고치는 것이 아니라 시스템을 강화하는 과정으로서의 리뷰를 정의한 점이 훌륭함.
- **체크리스트 스타일**: `sectionStyle: 'checklist'`에 맞게 각 항목이 명확하게 구분되어 가독성이 좋음.

## Problems
- **KO 텍스트 파손 (Critical)**: 한국어 본문 전체가 깨진 문자(`?`)로 노출됨. 인코딩 확인 및 재작성이 필수적임.
- **내부 링크 규칙의 추상성**: "디자인하라"는 조언은 좋으나, 구체적으로 어떤 구조(예: Pillar-Cluster 모델)를 권장하는지 예시가 부족함.
- **EN 제목의 어색함**: "rules you should lock"은 의미는 통하지만, "Rules to Set in Stone"이나 "Essential Rules to Lock Down"이 더 자연스러운 표현임.
- **결론부의 힘**: 7가지 규칙을 나열한 뒤, '가장 먼저 해야 할 것'을 요약했으나 독자가 바로 실행할 수 있는 액션 아이템(Action Item)으로 연결되는 느낌이 약함.

## SEO
- **title**: 현재 제목은 너무 길거나 평이함. '기술 블로그', '운영', '시스템' 키워드를 전면에 배치해야 함.
- **description**: KO/EN 모두 핵심 내용을 잘 요약하고 있으나, "무엇을 얻을 수 있는지(Benefit)"가 더 강조되어야 함.
- **search intent fit**: '기술 블로그 운영 방법', '블로그 관리 규칙' 등을 검색하는 운영자 의도에 정확히 부합함.
- **internal link**: 본문에서 내부 링크의 중요성을 강조하면서도 정작 본문 내에 관련 포스트나 가이드로 연결되는 링크 예시가 보이지 않음.

## Structure
- **lead**: EN 기준, 블로그가 "표류(drift)"하는 이유를 설명하며 공감을 유도하는 도입부가 좋음.
- **section flow**: 주제 정의 -> 패턴 고정 -> 슬러그/링크 -> 이미지 -> 리뷰 -> 측정으로 이어지는 흐름이 논리적임.
- **duplication**: 1번(Topic unit)과 4번(Internal link)이 겹칠 수 있으므로, 4번에서 유닛 내 연결 구조를 구체화하면 중복 느낌이 사라질 것임.
- **conclusion**: 'First 4 things'를 언급하며 우선순위를 정해준 점이 좋음.

## KO/EN Consistency
- **일치하는 점**: 메타데이터 구조와 7가지 항목의 순서가 완벽하게 일치함.
- **빠진 점**: KO 본문 파손으로 내용 비교가 불가능하나, 메타데이터상 `tags`의 KO 버전이 EN에 비해 다소 파편화되어 있음.
- **어색한 점**: EN의 "Measure what makes the unit stronger" 문구는 운영적 관점에서는 좋으나, 일반적인 블로거에게는 다소 모호하게 들릴 수 있음.

## Better Title Options
- **ko 1**: 기술 블로그 운영이 쉬워지는 7가지 시스템 규칙
- **ko 2**: 글쓰기보다 중요한 기술 블로그 운영 수칙 7가지
- **ko 3**: 20개 포스트 발행 전 반드시 고정해야 할 블로그 운영 가이드
- **en 1**: 7 Essential Rules to Lock Down Before Operating a Technical Blog
- **en 2**: Stop the Drift: 7 Operational Rules for Sustainable Technical Blogging
- **en 3**: How to Systematize Your Technical Blog: 7 Rules for Early Setup

## Better Description Options
- **ko 1**: 기술 블로그가 중구난방이 되지 않으려면? 주제 단위, 슬러그, 내부 링크 등 운영 효율을 극대화하는 7가지 핵심 규칙을 지금 고정하세요.
- **ko 2**: 포스트가 쌓일수록 관리가 힘들어지는 기술 블로그를 위한 필독 가이드. 의사결정 비용을 줄이고 지속 가능한 운영을 돕는 시스템 구축법.
- **en 1**: Tired of inconsistent blog posts? Learn 7 operational rules to lock down early, from topic units to image patterns, for a scalable technical blog.
- **en 2**: Fix your technical blog operations before you scale. A practical guide on setting rules for titles, slugs, and internal links to ensure long-term consistency.

## Revision Priority
1. **KO 본문 인코딩 및 내용 복구**: 깨진 문자를 정상적인 한국어로 재작성하는 것이 최우선임.
2. **EN 제목 및 소제목 다듬기**: "Lock down" 등 좀 더 임팩트 있는 표현으로 수정하여 전문성을 높임.
3. **내부 링크 예시 보강**: 4번 항목에서 실제 어떤 식으로 링크 구조를 가져가야 하는지(예: Topic Unit Page로의 역링크 등) 한 줄 정도 구체적 사례 추가.
