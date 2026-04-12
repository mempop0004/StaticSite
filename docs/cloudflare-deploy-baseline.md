# Cloudflare Deploy Baseline

## Site

- production url: `https://blog-1ye.pages.dev/`
- canonical base url: `https://blog-1ye.pages.dev`

## Cloudflare Pages

- platform: `Cloudflare Pages`
- production branch: `main`
- build command: `npm run build`
- build output directory: `dist`
- root directory: `(empty)`

## GitHub Repository

- cloudflare connected repo: `https://github.com/mempop0002-lgtm/blog`
- current local origin: `https://github.com/golrazo/studio-blog.git`

## Notes

- 현재 로컬 작업 저장소와 Cloudflare Pages 연결 저장소가 다르다.
- 실서비스 배포 기준은 `blog-1ye.pages.dev`를 우선 기준으로 둔다.
- 배포 구조를 단순하게 유지하려면 장기적으로는 작업 저장소와 배포 저장소 관계를 명확히 정리해야 한다.
- 실제 배포 설정 원천은 `settings/blog-1/deploy.json`이다.
