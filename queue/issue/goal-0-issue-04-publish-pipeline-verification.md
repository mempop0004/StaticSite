# Issue

- `issue_id: goal-0-issue-04-publish-pipeline-verification`
- `goal_id: goal-0`
- `title: working repo에서 live site까지 발행 파이프라인 검증`
- `status: review`

# Goal Link

- `goal-0 blog로 돈 버는 시스템 만들기`

# Context

- 현재 저장소와 실서비스 저장소가 분리돼 있어 full publish loop가 확인되지 않았다.

# Scope

- working repo
- publish repo
- Cloudflare Pages
- live site 확인

# Task

- 현재 발행 절차를 다시 점검한다
- 실제 반영 경로를 검증한다
- 막히는 지점과 수동 단계 기록

# Review Point

- 새 글이 live site까지 도달하는지 검증됐는가

# Current

- publish pipeline 문서와 deploy 설정 파일을 대조했다
- 지금 시점에 확인된 사실과 미검증 구간을 분리했다
- full publish 검증이 막히는 blocker를 문서화했다

# Next

- review 후 실제 publish 실행 issue와 연결

# Done

- `ops/publish-verification-baseline.md` 추가
- verified / not verified / blocker 구분 완료

# Output

- `ops/publish-verification-baseline.md`
- `ops/publish-pipeline.md`
- `ops/publish-flow.md`
- `settings/blog-1/deploy.json`

# Resume Prompt

- review에서 실제 publish 실행 전 필요한 조건을 다시 확인한다.
