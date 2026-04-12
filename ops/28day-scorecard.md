# 28 Day Scorecard

이 문서는 28일 동안 운영한 블로그를 결과 기준으로 평가하기 위한 점수판이다.

## Rule

- 확정: 점수판의 대상은 `블로그`다
- 확정: 블로그 하나당 점수판 한 줄을 가진다
- 확정: 28일이 지나면 `keep`, `pause`, `drop` 판단의 근거로 쓴다
- 확정: 수집 기준은 `ops/measurement-baseline.md`를 따른다

## Metrics

- `search_traffic`
- `page_depth`
- `time_on_page`
- `related_clicks`
- `adsense_signal`
- `ops_cost`
- `decision`
- `note`

## Metric Meaning

- `search_traffic`: 검색 유입 존재 여부와 흐름
- `page_depth`: 추가 페이지 이동 정도
- `time_on_page`: 체류 시간 경향
- `related_clicks`: 관련 글 이동 신호
- `adsense_signal`: 광고 수익 기여 신호
- `ops_cost`: 하루 운영 시간 대비 부담
- `decision`: `keep`, `pause`, `drop`
- `note`: 해석 메모

## Scorecard

| blog | start_date | review_date | search_traffic | page_depth | time_on_page | related_clicks | adsense_signal | ops_cost | decision | note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| blog-cf-pages-404 | 2026-04-10 | 2026-05-08 | pending | pending | pending | pending | pending | 1h/day | pending | record: ops/28day-records/blog-cf-pages-404.md |
| blog-hosting-vs-adsense | 2026-04-10 | 2026-05-08 | pending | pending | pending | pending | pending | 2h/day | pending | record: ops/28day-records/blog-hosting-vs-adsense.md |

## Rating Guide

- `high`: 유지 가치가 높음
- `mid`: 더 봐야 함
- `low`: 폐기 가능성 높음
- `n/a`: 아직 측정 장치가 없거나 해당 없음

## Decision Hint

- `keep`: 검색 유입과 운영 효율이 같이 나옴
- `pause`: 유입은 있으나 비용이 큼, 또는 데이터가 애매함
- `drop`: 유입과 광고 신호가 약하고 운영 비용만 듦
