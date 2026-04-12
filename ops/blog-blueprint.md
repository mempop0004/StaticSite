# Blog Blueprint

이 문서는 블로그 하나를 새로 시작할 때 필요한 최소 설계 단위를 정의한다.

## Rule

- 확정: 블로그 하나는 주제 하나만 가진다
- 확정: 블로그는 포괄 브랜드가 아니라 실험 단위다
- 확정: 블로그를 만들기 전에 아래 항목을 먼저 채운다

## Required Fields

- `blog_id`
- `topic`
- `type`
- `reader`
- `search_reason`
- `adsense_fit`
- `automation_name`
- `daily_hours`
- `start_date`
- `review_date`
- `success_signal`
- `failure_signal`

## Field Meaning

- `blog_id`: 블로그 식별자
- `topic`: 블로그가 다루는 단일 주제
- `type`: `problem-solving`, `comparison`, `automation`
- `reader`: 이 주제에 맞는 독자층
- `search_reason`: 왜 검색 잔존 수요가 남는지
- `adsense_fit`: 애드센스형 트래픽에 왜 맞는지
- `automation_name`: Worker가 실행할 자동화 이름
- `daily_hours`: 하루 운영 예상 시간
- `start_date`: 운영 시작일
- `review_date`: 28일 리뷰 날짜
- `success_signal`: keep 판단 신호
- `failure_signal`: drop 판단 신호

## Blueprint Template

```text
blog_id:
topic:
type:
reader:
search_reason:
adsense_fit:
automation_name:
daily_hours:
start_date:
review_date:
success_signal:
failure_signal:
```

## Minimum Launch Condition

- 주제가 한 문장으로 설명돼야 한다
- 독자층이 붙어 있어야 한다
- 자동화 이름이 있어야 한다
- 28일 리뷰 날짜가 계산돼 있어야 한다
- 성공 신호와 실패 신호가 있어야 한다
