---
title: 'Cloudflare Pages markdown 슬롯 스트레스 테스트'
description: '헤딩, 리스트, 인용문, 코드, 표, 링크, 긴 문단을 한 번에 넣어 블로그 템플레이트 표시를 점검하는 더미 글이다.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-404-fix-guide'
  - 'cloudflare-pages-build-log-checklist'
pubDate: 'Apr 18 2026'
updatedDate: 'Apr 18 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

이 글은 일반 글보다 더 다양한 markdown 블록을 한 번에 넣어서, 템플레이트가 어디서 깨지는지 확인하기 위한 테스트용 글이다.

## 헤딩 레벨 2

이 문단은 기본 본문 폭, 줄 간격, [링크](https://pages.cloudflare.com/), `inline code` 표시를 같이 점검한다.

### 헤딩 레벨 3

짧은 문단과 긴 문단이 섞일 때 간격이 자연스러운지도 같이 본다.

#### 헤딩 레벨 4

여기서 리듬이 깨지면 템플레이트는 아직 손볼 부분이 남은 것이다.

## 순서 없는 리스트

- 짧은 항목
- 줄바꿈이 생길 만큼 조금 더 긴 항목
- `inline code`와 [링크](https://astro.build/)가 섞인 항목

## 순서 있는 리스트

1. 프로젝트 설정을 연다
2. build command를 본다
3. output directory를 본다
4. 다시 배포하고 live URL을 확인한다

## 인용문

> 템플레이트는 복잡한 markdown에서도 안정적으로 보여야 한다.

## 코드 블록

```text
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory:
```

## 구분선

---

## 강조 텍스트

이 문장에서는 **굵은 글씨**, *기울임*, `코드`가 함께 들어간다.

## 표

| check | value |
| --- | --- |
| branch | main |
| build | npm run build |
| output | dist |

## 혼합 콘텐츠

문단, 리스트, 인용문, 코드 블록이 이어져도 템플레이트가 답답하거나 어긋나 보이지 않아야 한다.

다시 [메인 404 가이드](/ko/blog/cloudflare-pages-404-fix-guide/)로 돌아간다.
