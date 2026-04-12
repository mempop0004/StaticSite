# Blog Source Folders

이 폴더는 `검증 완료 후 넘기는 블로그별 폴더`다.

각 블로그는 아래 구조를 가진다.

```text
content-source/blogs/blog_00n/
├── posts/
├── review/
│   ├── posts/
│   └── memory.md
└── README.md
```

## Active Topic Folders

1. `blog_001` -> 일반인이 AI를 활용하는 방법
2. `blog_002` -> 개발자가 AI를 활용하는 방법
3. `blog_003` -> 정적 웹사이트 운영
4. `blog_004` -> 기술 블로그 운영
5. `blog_005` -> 개발자용 배포와 호스팅
6. `blog_006` -> 검색 유입형 웹 운영
7. `blog_007` -> 웹 자동화와 운영 시스템
8. `blog_008` -> 1인 웹사이트 운영
9. `blog_009` -> 웹 콘텐츠 제작 시스템
10. `blog_010` -> 실전 웹 문제 해결

## Mapping Rule

- 번호와 `blogId` 매핑은 [blog-index.json](G:\ct\studio-blog\content-source\blogs\blog-index.json) 하나로 관리한다.
- 새 작업 파일은 `blogId`에 맞는 번호를 자동으로 써야 한다.
- 예:
  - `blog-ai-for-everyday-users` -> `blog_001`
  - 첫 글 파일명 -> `post_blog_001_post_001.html`
