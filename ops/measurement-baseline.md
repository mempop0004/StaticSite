# Measurement Baseline

이 문서는 28일 운영 점수판의 각 지표를 실제로 어떻게 채우는지 정한다.

## Rule

- 확정: 점수판의 모든 지표는 데이터 소스가 있어야 한다
- 확정: 데이터 수집 방식은 `automatic`, `semi-manual`, `manual`로 구분한다
- 확정: 현재 기준선은 외부 분석 도구 완전 연동 전의 최소 운영 기준이다

## Collection Types

- `automatic`: 코드나 도구가 자동으로 집계
- `semi-manual`: 외부 도구에서 값을 보고 기록 파일에 옮김
- `manual`: 작업자가 직접 판단해 기록

## Metric Map

### search_traffic

- collection_type: `semi-manual`
- source: Search Console page performance
- record_rule: 운영 단위의 대표 글과 후속 글 URL 기준으로 일일 또는 주간 흐름을 기록한다
- score_rule:
  - `high`: 검색 유입이 생기고 증가 흐름이 보인다
  - `mid`: 유입은 있으나 약하다
  - `low`: 유입이 거의 없다

### page_depth

- collection_type: `manual`
- source: 대표 글에서 후속 글 또는 허브로 이어지는 실제 내부 이동 여부
- record_rule: 대표 글에서 후속 글로 이동이 있었는지 일일 메모와 주간 요약으로 남긴다
- score_rule:
  - `high`: 대표 글 이후 다른 페이지 이동이 반복된다
  - `mid`: 이동이 드물게 있다
  - `low`: 대표 글 단일 이탈이 대부분이다

### time_on_page

- collection_type: `semi-manual`
- source: 기존 분석 도구가 있으면 해당 페이지 체류 지표, 없으면 수집 보류
- record_rule: 비교형 블로그처럼 체류가 중요한 경우만 기록한다
- score_rule:
  - `high`: 체류가 비교형 글로서 충분히 길다
  - `mid`: 체류는 있으나 확신이 약하다
  - `low`: 체류가 매우 짧다
- note: 외부 분석 도구가 없으면 `n/a`로 기록 가능

### related_clicks

- collection_type: `manual`
- source: 후속 글 조회 흐름과 내부 링크 클릭 신호 메모
- record_rule: 후속 글 조회 증가나 내부 이동 정황을 일일 로그에 적는다
- score_rule:
  - `high`: 후속 글 이동이 반복된다
  - `mid`: 이동이 일부 있다
  - `low`: 관련 이동이 거의 없다

### adsense_signal

- collection_type: `manual`
- source: 애드센스 연동 전에는 직접 수익이 아니라 광고 친화 지표로 대체
- record_rule: 현재는 `search_traffic + page_depth + time_on_page` 조합으로 간접 판단한다
- score_rule:
  - `high`: 광고 노출에 유리한 트래픽과 체류가 함께 보인다
  - `mid`: 일부 신호만 있다
  - `low`: 광고 수익으로 이어질 신호가 약하다
- note: 애드센스 연결 후에는 실제 수익/노출 기준으로 대체한다

### ops_cost

- collection_type: `manual`
- source: 작업자가 실제 사용한 시간
- record_rule: 분 단위 또는 시간 단위로 기록 파일에 적는다
- score_rule:
  - `high`: 적은 시간으로 운영 가능
  - `mid`: 감당 가능하나 부담이 있다
  - `low`: 운영 비용이 과하다

## Record Update Rule

- 일일 로그는 raw 메모를 적는다
- 주간 요약은 `high`, `mid`, `low`, `n/a`로 압축한다
- 점수판은 주간 요약과 28일 전체 흐름을 바탕으로 채운다

## Current Baseline For Running Blogs

### blog-cf-pages-404

- `search_traffic`: Search Console 기준 `semi-manual`
- `page_depth`: 대표 글 -> 후속 글 이동 메모 기준 `manual`
- `related_clicks`: 후속 글 이동 메모 기준 `manual`
- `ops_cost`: 운영 시간 기록 기준 `manual`
- `time_on_page`: `n/a`
- `adsense_signal`: 위 지표 조합의 간접 판단

### blog-hosting-vs-adsense

- `search_traffic`: Search Console 기준 `semi-manual`
- `page_depth`: 대표 글 -> 후속 비교 글 이동 메모 기준 `manual`
- `time_on_page`: 외부 분석 도구가 있으면 `semi-manual`, 없으면 `n/a`
- `related_clicks`: 후속 글 이동 메모 기준 `manual`
- `ops_cost`: 운영 시간 기록 기준 `manual`
- `adsense_signal`: 위 지표 조합의 간접 판단
