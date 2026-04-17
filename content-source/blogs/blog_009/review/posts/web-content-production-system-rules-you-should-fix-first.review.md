# Post Review

## Verdict
- 영문(EN) 포스트는 시스템적인 콘텐츠 생산 체계를 잘 요약하고 있으나, 국문(KO) 포스트는 인코딩 문제로 인해 텍스트 전체가 손상(????)되어 발행이 불가능한 상태임.
- 운영 효율을 강조하는 실무적인 내용은 좋으나, 두 포스트 모두 결론(Conclusion) 없이 갑자기 끝나는 구조적 결함이 있음.

## Strengths
- **시스템적 접근:** 단순한 글쓰기 팁이 아니라 '생산 시스템(Production System)' 관점에서 이미지, 메타데이터, 리뷰 프로세스를 다룸.
- **실무적 통찰:** "품질 검사는 비용이 저렴해야 한다(Rule 6)"와 같이 실제 운영 단계에서 병목이 될 수 있는 지점을 정확히 짚음.
- **명확한 구조:** 6가지 규칙을 넘버링하여 가독성이 높고 체크리스트 형태로 활용하기 좋음.

## Problems
1. **KO 포스트 텍스트 깨짐 (심각):** 한글 본문 및 메타데이터(Title, Alt text 등) 전체가 물음표(`?`)로 표시됨. 인코딩 설정을 UTF-8로 재확인하고 다시 생성해야 함.
2. **결론(Conclusion) 부재:** 6번 항목 이후 요약이나 다음 단계로의 유도가 없어 글이 미완성된 느낌을 줌. 시스템 구축의 기대 효과를 언급하며 마무리할 필요가 있음.
3. **내부 링크 부족:** `blogId`나 관련 가이드로 연결되는 내부 링크가 본문에 전혀 포함되지 않음. 'pillar' 단계의 글이므로 하위 실행 포스트로의 연결 고리가 필요함.
4. **리드 문단 가독성:** 도입부(Lead)가 HTML `<p>` 태그로만 감싸져 있어 시각적 임팩트가 약함. 핵심 문장을 볼드 처리하거나 인용구 스타일을 활용해 독자의 시선을 잡아야 함.

## SEO
- **title:** EN은 명확함. KO는 인코딩 수정 후 "웹 콘텐츠 제작 시스템 구축 전 필수 6규칙" 등으로 설정 권장.
- **description:** EN은 핵심 키워드(scale, structure, metadata)를 잘 포함함.
- **search intent fit:** 'learn/operating' 의도에 맞게 방법론을 제시하고 있어 적합함.
- **internal link:** 전혀 없음. 'content production', 'editorial workflow' 관련 기존 문서 링크 추가 필요.

## Structure
- **lead:** 문제 상황(비용 증가, 비효율)을 잘 제시함.
- **section flow:** 규칙 1(구조)에서 규칙 6(검증)까지 흐름이 논리적임.
- **duplication:** 중복 표현은 없으나, 각 항목의 설명이 다소 짧아 예시가 부족해 보일 수 있음.
- **conclusion:** 없음 (보강 필수).

## KO/EN Consistency
- **일치하는 점:** 6개 섹션 구조와 메타데이터 항목(tags, pubDate 등)은 일치함.
- **빠진 점:** KO 포스트의 텍스트가 깨져 있어 실제 정보 누락 여부를 대조할 수 없음.
- **어색한 점:** EN 포스트의 Rule 3 제목 "Metadata needs a rule, not inspiration"은 좋으나, 본문에서 'inspiration'에 대한 대비 설명이 부족함.

## Better Title Options
- **ko 3개**
  1. 웹 콘텐츠 제작 시스템 구축 전 반드시 정해야 할 6가지 운영 규칙
  2. 콘텐츠 생산 효율을 2배 높이는 시스템 설계 가이드: 6개 핵심 원칙
  3. 무너지는 콘텐츠 제작 프로세스, '이 6가지'부터 시스템화하세요
- **en 3개**
  1. 6 Essential Rules for Scaling Your Web Content Production System
  2. Building a Content Engine? Don't Skip These 6 Operational Pillars
  3. From Messy to Systematic: 6 Rules to Lock Down Your Content Workflow

## Better Description Options
- **ko 2개**
  1. 콘텐츠 제작 비용은 줄이고 속도는 높이는 법. 제작 구조, 이미지 역할, 메타데이터 등 시스템화를 위한 6가지 필수 운영 규칙을 정리했습니다.
  2. 웹 콘텐츠 대량 생산을 위해 반드시 정의해야 할 6가지 체크리스트. 개인의 감이 아닌 시스템으로 움직이는 제작 환경을 만드세요.
- **en 2개**
  1. Learn how to turn manual writing into a scalable production system by locking down 6 critical rules for structure, images, and metadata.
  2. Stop reinventing your process for every post. Discover the 6 operational rules needed to build a repeatable and efficient content production engine.

## Revision Priority
1. **KO 인코딩 복구:** 한글 텍스트가 정상적으로 노출되도록 전체 재작성.
2. **결론 섹션 추가:** 시스템 도입 시 얻을 수 있는 이점(확장성, 비용 절감)을 강조하며 마무리 문단 추가.
3. **내부 링크 삽입:** 'pillar' 콘텐츠로서 관련 운영 가이드나 툴셋으로 연결되는 링크 배치.
