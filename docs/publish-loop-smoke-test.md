# Publish Loop Smoke Test

## Goal

- blog-1 발행 루프를 실제 운영 기준으로 어디까지 검증할 수 있는지 확인한다.

## Checked

- live site: `https://blog-1ye.pages.dev/`
- blog list: `https://blog-1ye.pages.dev/blog/`
- current local working repo: `https://github.com/golrazo/studio-blog.git`
- Cloudflare Pages connected repo: `https://github.com/mempop0002-lgtm/blog`

## Result

- live site는 정상 응답한다.
- `/blog/` 목록에는 현재 게시글 2개가 노출된다.
- 현재 로컬 저장소에서 `push`한 내용이 Cloudflare Pages로 바로 이어진다고 보장할 수 없다.

## Blocker

- Cloudflare Pages가 보는 저장소와 현재 로컬 작업 저장소가 다르다.
- 따라서 현재 저장소에서 글을 추가해도 `git push -> Pages 반영`의 full loop를 직접 검증할 수 없다.

## Smoke Test Scope

- 가능한 범위:
  - live site 응답 확인
  - 현재 목록/기본 페이지 노출 확인
  - Codespace build 검증
- 불가능한 범위:
  - 현재 로컬 저장소 commit이 Pages 실사이트에 반영되는지 확인

## Next Step

- 둘 중 하나를 먼저 정해야 한다.
- `Cloudflare Pages connected repo`를 현재 작업 저장소로 바꾸거나,
- 현재 작업 저장소에서 배포 저장소로 반영되는 운영 절차를 별도로 정의해야 한다.
