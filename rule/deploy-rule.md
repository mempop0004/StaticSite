# Deploy Rule

- 배포 기준은 정적 빌드 + Git push + 호스트 자동 배포다.
- 로컬 환경이 저사양이면 build는 필수로 로컬에서 하지 않는다.
- build 검증 기본 위치는 Codespace다.
- 배포 대상은 Cloudflare Pages 무료 호스팅을 기본 전제로 둔다.
- `astro.config.mjs`의 `site` 값은 실서비스 URL과 정확히 맞아야 한다.
- 배포 설정은 앱 코드와 분리해 문서로도 남긴다.
- 운영 중 배포 관련 변경을 하면 `ops/publish-flow.md`와 관련 체크리스트를 함께 확인한다.
- 현재 production 기준 URL은 `https://blog-1ye.pages.dev`다.
- 현재 Cloudflare Pages 연결 저장소는 `https://github.com/mempop0002-lgtm/blog`다.
- 배포 실제값 원천은 `settings/blog-1/deploy.json`이다.
- 현재 검증용 Codespace는 `https://bookish-trout-g77v666g99pf9r4r.github.dev/`다.
- 현재 publish pipeline은 `working repo -> Codespace 검증 -> publish repo -> Cloudflare Pages` 구조다.
- publish 완료 기준은 live site 확인까지 포함한다.
