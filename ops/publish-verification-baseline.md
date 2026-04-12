# Publish Verification Baseline

이 문서는 working repo에서 live site까지의 발행 검증 상태를 정리한다.

## Verified Facts

- working repo: `https://github.com/golrazo/studio-blog`
- publish repo: `https://github.com/mempop0002-lgtm/blog`
- production url: `https://blog-1ye.pages.dev`
- hosting provider: `cloudflare-pages`
- production branch: `main`
- build command: `npm run build`
- output dir: `dist`
- root dir: `""`

## Current Pipeline

1. 작업은 working repo에서 한다
2. 로컬 또는 Codespace에서 build를 확인한다
3. working repo에 commit/push 한다
4. 검증된 변경을 publish repo에 반영한다
5. Cloudflare Pages가 publish repo 기준으로 배포한다
6. live site를 확인한다

## Verified Now

- 로컬 `npm run build`는 현재 통과한다
- publish repo와 live site 정보는 문서와 설정 파일에 있다
- `working repo push`와 `live publish`가 같은 이벤트가 아니라는 점은 확인돼 있다

## Not Verified Yet

- working repo의 변경이 publish repo로 실제 반영되는지
- publish repo 반영 후 Cloudflare Pages가 실제 배포하는지
- live site에서 최신 변경이 열리는지

## Blockers

- `working repo -> publish repo` 반영 절차가 아직 수동이며 고정되지 않았다
- 현재 작업 트리는 dirty 상태여서 지금 시점의 변경을 publish 검증 대상으로 쓰기 어렵다
- live publish 검증은 publish repo 반영 권한과 절차가 필요하다

## Decision

- 현재 이슈는 `full publish verified`가 아니라 `verification baseline documented` 상태다
- 실제 live 검증은 이후 별도 실행 단계에서 진행해야 한다

## Next Verification Step

1. publish 대상 변경 범위를 고정한다
2. working repo에서 검증 가능한 commit 상태를 만든다
3. publish repo 반영 절차를 실행한다
4. live site를 확인한다
