# Goal Issue System

이 문서는 이 프로젝트의 goal 관리 방식을 정의한다.

## Core Rule

- 확정: goal 관리는 이슈 태스크 방식으로 한다
- 확정: goal을 바로 실행하지 않는다
- 확정: goal은 먼저 이슈들로 쪼갠다
- 확정: 첫 작업은 `queue/issue/` 아래에 필요한 이슈 md를 전부 만드는 것이다
- 확정: 이후에는 이슈를 하나씩 처리하고 리뷰한다

## Flow

1. goal을 한 문장으로 적는다
2. goal을 완료 가능한 이슈들로 분해한다
3. 분해된 모든 이슈를 `queue/issue/*.md`로 먼저 만든다
4. `queue/issue-queue.md`에 current, waiting, review, done 상태를 기록한다
5. current 이슈 하나만 처리한다
6. 처리 후 review 상태로 넘긴다
7. 리뷰가 끝나면 done으로 닫고 다음 이슈로 이동한다

## First Action Rule

- 새 goal이 생기면 바로 코드 수정부터 들어가지 않는다
- 먼저 아래 두 가지를 만든다
- `goal 문서`
- `issue md 파일들`

## Issue Granularity

- 이슈 하나는 한 번의 처리와 한 번의 리뷰가 가능한 크기여야 한다
- 이슈 하나에 여러 goal을 섞지 않는다
- 이슈 하나는 결과가 문서나 코드로 남아야 한다

## Status Rule

- `candidate`: 아직 큐에만 있음
- `current`: 지금 처리 중
- `review`: 처리 완료, 리뷰 대기
- `done`: 리뷰 완료
- `blocked`: 막힘

## Ownership

- `Owner`: goal 승인과 리뷰 판단
- `Manager`: goal 분해, 이슈 생성, 큐 상태 관리
- `Worker`: current 이슈 실행

## Success Condition

- goal이 문서화돼 있다
- 필요한 이슈들이 먼저 다 생성돼 있다
- current는 항상 1개다
- 모든 실행은 이슈 단위로 추적 가능하다
