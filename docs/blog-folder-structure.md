# Blog Folder Structure

이 문서는 실제 운영 직전 기준의 `블로그별 폴더 구조`를 정의한다.

현재는 `content-source/posts/`에서 실제 작업과 검증을 하고, 완료 후 블로그별 폴더로 넘긴다.

## Goal Structure

```text
content-source/
├── posts/
│   └── assets/
│       ├── posts.css
│       ├── posts.js
│       └── slot-guides.json
└── blogs/
    └── blog_001/
        ├── posts/
        │   ├── post_blog_001_post_001.html
        │   ├── post_blog_001_post_001/
        │   │   ├── 001.png
        │   │   └── 002.png
        ├── review/
        │   ├── posts/
        │   │   └── practical-ways-everyday-users-can-start-with-ai.review.md
        │   └── memory.md
        └── README.md
```

## Meaning

- `content-source/posts/*.html`
  - 실제 작업 파일
- `content-source/posts/<same-name-folder>/`
  - 이미지 슬롯 파일 폴더
- `content-source/posts/assets/`
  - 공용 작업기 css, js, 슬롯 가이드
- `content-source/blogs/blog_00n/`
  - 검증이 끝난 뒤 넘기는 블로그별 보관/운영 폴더
- `content-source/blogs/blog_00n/review/posts/`
  - 완료된 글 리뷰 결과
- `content-source/blogs/blog_00n/review/memory.md`
  - 블로그별 누적 품질 규칙

## Rule

- 블로그 폴더는 `blog_001` 같은 번호형으로 관리한다.
- 번호와 실제 `blogId` 매핑은 [blog-index.json](G:\ct\studio-blog\content-source\blogs\blog-index.json) 하나로 고정한다.
- 작업 파일도 그 번호를 반드시 따라야 한다.
  - 예: `blog-ai-for-everyday-users` -> `blog_001` -> `post_blog_001_post_001`
- 실제 작업과 화면 검증은 `content-source/posts/`에서 한다.
- Codespace에서 확인이 끝난 뒤 각 블로그 폴더로 이동한다.
- 리뷰 결과와 누적 규칙은 최종적으로 블로그별 폴더에 둔다.
- 공용 작업기 자산은 `content-source/posts/assets/` 하나만 쓴다.

## Current State

- 현재 저장소에는 `content-source/blogs/blog_001` ~ `blog_010`이 실제로 생성되어 있다.
- 공용 작업장은 `content-source/posts/`이고, 지금은 `assets/`만 남아 있다.
- 첫 번째 블로그의 첫 글 `post_blog_001_post_001`은 검증이 끝나 `content-source/blogs/blog_001/posts/`로 이동했다.
- 즉, 지금 기준은 `공용 작업 -> Codespace 검증 -> 번호형 블로그 폴더 이동`이며, 첫 번째 블로그는 이미 그 단계를 통과했다.
