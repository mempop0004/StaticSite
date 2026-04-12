---
title: 'Cloudflare Pages 설정 변경 후 다시 배포할 때 체크할 순서'
description: 'Cloudflare Pages에서 Build 설정을 바꾼 뒤 어떤 순서로 Redeploy, 배포 로그, 결과 화면을 확인해야 하는지 정리했다.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-404-fix-guide'
pubDate: 'Apr 10 2026'
updatedDate: 'Apr 10 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

Cloudflare Pages 404 문제를 해결하다 보면 설정값을 고친 뒤에도 바로 안 열리는 경우가 있다. 이때는 "설정은 바꿨는데 왜 그대로지?"가 아니라 `다시 배포가 실제로 돌았는지`를 확인해야 한다.

이 글은 `Cloudflare Pages 404 해결: index가 없을 때 가장 먼저 확인할 설정` 다음 단계로 보는 후속 점검 메모다.

## 가장 먼저 볼 것

설정을 바꾼 뒤에는 아래 세 가지만 순서대로 보면 된다.

1. 새 배포가 실제로 생성됐는가
2. 배포 로그에서 빌드가 성공했는가
3. 메인 주소가 새 배포를 보고 있는가

## 1. Settings만 바꾸고 끝내지 않는다

Cloudflare Pages는 설정값 변경 자체만으로 기대한 만큼 즉시 반영되지 않는 경우가 있다. 그래서 `Build command`, `Build output directory`, `Root directory`를 고쳤다면 곧바로 `Deployments` 탭으로 이동하는 습관이 좋다.

여기서 확인할 것은 간단하다.

- 가장 최근 배포 시간이 설정 변경 이후인가
- 상태가 `Success`인가
- Production 환경에 붙었는가

## 2. 새 배포가 없으면 직접 다시 배포한다

설정을 바꿨는데 새 배포가 없으면 기다리지 말고 `Redeploy` 또는 `Retry deployment`를 직접 실행하는 편이 빠르다.

가장 안전한 흐름은 아래다.

1. `Workers & Pages`
2. 대상 프로젝트 선택
3. `Deployments`
4. 가장 최근 배포 선택
5. `Retry deployment` 또는 `Redeploy`

버튼이 보이지 않거나 애매하면 작은 문구 수정이라도 커밋해서 `git push`를 다시 보내는 방법도 있다.

## 3. 빌드 로그에서는 두 줄만 먼저 찾는다

로그를 길게 다 읽을 필요는 없다. 아래 두 가지를 먼저 찾으면 된다.

- `npm run build`가 실행됐는가
- 결과물이 `dist`에 생성됐는가

Astro 기준으로는 빌드 로그에 정적 페이지 생성과 `dist` 출력 흐름이 보여야 한다. 여기서 실패하면 404 원인은 대개 Pages보다는 프로젝트 빌드 쪽이다.

## 4. 브라우저 확인은 시크릿 창으로 한 번 더

브라우저 캐시 때문에 예전 404가 남아 있는 것처럼 보일 수 있다. 새 배포가 성공한 뒤에는 시크릿 창이나 강력 새로고침으로 메인 주소를 다시 확인하는 편이 안전하다.

특히 아래 두 주소를 같이 보면 좋다.

- 메인 도메인
- 대표 글 URL

메인만 안 열리고 대표 글은 열리면 라우팅이나 홈 산출물 문제를 의심할 수 있고, 둘 다 안 열리면 배포 자체를 다시 봐야 한다.

## 5. 운영 기록에는 무엇을 남길까

이 블로그 단위에서는 하루 기록에 아래만 남겨도 충분하다.

- 검색 클릭 또는 노출 변화가 있었는가
- 대표 글에서 후속 글 이동이 있었는가
- 오늘 이 이슈 대응에 몇 분 걸렸는가

운영 기록 파일은 `ops/28day-records/blog-cf-pages-404.md`다.

## 마무리

Cloudflare Pages 404는 설정값을 고치는 것까지만으로 끝나지 않는다. `새 배포 생성`, `빌드 로그 확인`, `실제 화면 확인`까지 이어져야 운영 루프가 닫힌다.

원인 점검부터 다시 보고 싶다면 [`Cloudflare Pages 404 해결: index가 없을 때 가장 먼저 확인할 설정`](/blog/cloudflare-pages-404-fix-guide/)으로 돌아가면 된다.
