# Issue

- `issue_id: goal-0-issue-02-measurement-baseline`
- `goal_id: goal-0`
- `title: 28일 운영 측정 기준선 구축`
- `status: review`

# Goal Link

- `goal-0 blog로 돈 버는 시스템 만들기`

# Context

- running 블로그가 있어도 측정 장치가 없으면 keep, pause, drop 판단이 불가능하다.

# Scope

- `search_traffic`
- `page_depth`
- `related_clicks`
- `time_on_page`
- `adsense_signal`
- `ops_cost`

# Task

- 각 지표를 어디서 수집할지 정한다
- 자동/반자동/수기 구분을 정한다
- 28일 기록 파일과 점수판 반영 방식을 정한다

# Review Point

- 각 지표마다 수집 방법이 있는가
- running 블로그 2개를 실제로 기록할 수 있는가

# Current

- 각 지표를 `automatic`, `semi-manual`, `manual`로 분류했다
- running 블로그 2개 기준의 실제 수집 방식을 문서화했다
- 기록 파일과 점수판에 측정 기준 문서 연결을 추가했다

# Next

- review 후 다음 current issue로 이동

# Done

- `ops/measurement-baseline.md` 추가
- 점수판의 수집 기준 연결
- running 블로그 기록 파일에 측정 기준 연결

# Output

- `ops/measurement-baseline.md`
- `ops/28day-scorecard.md`
- `ops/28day-records/blog-cf-pages-404.md`
- `ops/28day-records/blog-hosting-vs-adsense.md`

# Resume Prompt

- review에서 각 지표가 실제 운영으로 채워질 수 있는지 확인한다.
