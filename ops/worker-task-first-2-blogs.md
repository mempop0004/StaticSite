# Worker Task: First 2 Blogs

이 문서는 첫 2개 블로그를 실제 운영 가능한 상태로 올리기 위한 Worker 작업지시서다.

## Scope

대상 블로그는 아래 2개다.

- `blog-cf-pages-404`
- `blog-hosting-vs-adsense`

## Goal

- 각 블로그를 실제로 분리 가능한 단위로 만든다
- 각 블로그의 발행 루프를 만들거나 연결한다
- 28일 동안 기록 가능한 최소 측정 구조를 만든다
- Manager가 주간 점검할 수 있는 상태로 올린다

## Inputs

### blog-cf-pages-404

- goal: 문제 해결형 검색 유입 확보
- user_behavior: 해결 글 진입 후 관련 설정 글까지 이동
- required_assets: 단일 주제 블로그 구조, 발행 글, 관련 글 이동 장치, 기록 장치
- success_criteria: 검색 유입 신호와 관련 글 이동 신호가 생긴다

### blog-hosting-vs-adsense

- goal: 비교형 검색 유입 확보
- user_behavior: 비교 글 진입 후 추가 비교 또는 설정 글로 이동
- required_assets: 단일 주제 블로그 구조, 비교 글, 내부 이동 장치, 기록 장치
- success_criteria: 비교 검색 유입과 체류 신호가 생긴다

## Required Deliverables

1. 블로그 2개를 구분할 수 있는 실제 구조안
2. 각 블로그용 최소 발행 루프
3. 28일 기록 입력 위치 또는 파일
4. 최소 측정 장치 설계
5. 실행 후 Manager에게 넘길 결과 메모

## Work Items

### 1. Structure

- 현재 저장소에서 블로그 2개를 어떤 단위로 분리할지 정한다
- 완전 분리 저장소인지, 단일 저장소 내 분리 경로인지 정한다
- Manager가 이후 블로그 수를 늘려도 같은 패턴으로 복제할 수 있어야 한다

### 2. Publishing Loop

- 각 블로그가 최소 1개의 대표 글을 갖도록 한다
- 추가 글을 넣을 때 같은 구조로 반복할 수 있어야 한다
- 블로그별로 관련 글 이동 경로를 만들 수 있어야 한다

### 3. Measurement

- 아래 4개는 최소한 기록 가능해야 한다
- 검색 유입 신호
- 페이지 깊이
- 관련 글 이동
- 운영 시간 대비 부담

### 4. Reporting

- 작업 후 아래 내용을 Manager에게 보고한다
- 어떤 구조를 선택했는지
- 왜 그 구조가 확장 가능한지
- 무엇이 아직 미구현인지
- 다음 1주일 동안 실제로 운영 가능한 상태인지

## Boundaries

- Worker는 블로그 주제를 바꾸지 않는다
- Worker는 수익 모델을 바꾸지 않는다
- Worker는 2개 외 블로그를 먼저 확장하지 않는다
- Worker는 예쁜 UI보다 운영 가능성을 우선한다

## Definition Of Done

- `blog-cf-pages-404`가 실제 운영 단위로 존재한다
- `blog-hosting-vs-adsense`가 실제 운영 단위로 존재한다
- 두 블로그 모두 대표 글과 관련 이동 구조가 있다
- 28일 기록 위치가 정해져 있다
- Manager가 다음 점검에서 상태를 읽을 수 있다
