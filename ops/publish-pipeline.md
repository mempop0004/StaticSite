# Publish Pipeline

## Roles

- working repo: `https://github.com/golrazo/studio-blog`
- verification environment: `https://bookish-trout-g77v666g99pf9r4r.github.dev/`
- publish repo: `https://github.com/mempop0002-lgtm/blog`
- live site: `https://blog-1ye.pages.dev/`

## Pipeline

1. 작업은 `golrazo/studio-blog`에서 진행한다
2. 가벼운 확인은 로컬에서 한다
3. build 검증은 Codespace에서 한다
4. 작업 저장소에 commit 하고 push 한다
5. 검증이 끝난 내용을 실제 발행 저장소 `mempop0002-lgtm/blog`에 반영한다
6. Cloudflare Pages가 발행 저장소 기준으로 자동 배포한다
7. live site `blog-1ye.pages.dev`에서 최종 결과를 확인한다

## Important

- 현재 기준으로 `working repo push`와 `live publish`는 같은 이벤트가 아니다.
- 실제 발행은 `publish repo` 반영 이후에만 일어난다.
- 따라서 publish 완료 기준은 `working repo push`가 아니라 `publish repo 반영 + live site 확인`이다.

## Current Gap

- 현재는 `working repo -> publish repo` 반영 절차가 수동 규칙 수준으로도 아직 고정되지 않았다.
- 다음 단계에서는 이 반영 방식을 수동 절차 또는 자동화 후보로 더 좁혀야 한다.
