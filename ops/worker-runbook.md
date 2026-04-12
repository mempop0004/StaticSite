# Worker Runbook

이 문서는 Worker가 블로그 하나를 실제 운영 상태로 올릴 때 따르는 실행 절차다.

## Worker Goal

- 블로그 후보를 `candidate`에서 `running`으로 바꾼다
- 28일 운영에 필요한 최소 실행물을 만든다
- 실행 결과를 기록 가능한 상태로 만든다

## Inputs From Manager

- 목표
- 사용자 행동
- 필요한 페이지 또는 자산
- 성공 판단 기준

## Run Steps

1. `queue/blog-portfolio-queue.md`에서 실행할 블로그 한 개를 선택한다
2. `ops/blog-blueprint.md` 템플릿으로 블로그 설계를 채운다
3. 블로그 주제에 맞는 자동화 이름과 실행 범위를 정리한다
4. 시작일과 28일 후 리뷰일을 계산한다
5. `queue/blog-portfolio-queue.md`의 상태를 `running`으로 바꾼다
6. `ops/28day-scorecard.md`에 해당 블로그의 점수판 행을 추가한다
7. 첫 실행 메모를 남긴다

## Output

- 블로그 설계 청사진 1개
- 블로그 큐 상태 변경
- 28일 점수판 등록
- 첫 실행 메모

## Worker Boundaries

- Worker는 수익 모델을 바꾸지 않는다
- Worker는 keep, pause, drop을 단독 결정하지 않는다
- Worker는 Manager 승인 없이 포트폴리오 구조를 바꾸지 않는다
