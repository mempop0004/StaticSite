# Content Rule

- 게시글 원본은 `src/content/blog/` 아래에 둔다.
- 게시글 파일명은 주제와 맥락이 드러나는 kebab-case를 쓴다.
- 하나의 글은 하나의 핵심 질문에 답해야 한다.
- 글 제목은 검색 의도를 반영하고, 설명은 클릭 이유를 제공해야 한다.
- frontmatter에는 최소 `title`, `description`, `pubDate`, `purpose`, `searchIntent`, `readerState`, `sectionStyle`, `imageNeed`를 넣는다.
- `updatedDate`는 실제 의미 있는 수정이 있을 때만 넣는다.
- 대표 이미지는 없으면 기본 placeholder를 쓰되, 장기적으로는 글별 이미지 기준을 따로 만든다.
- 홈, 글 목록, RSS에서 바로 노출되므로 제목과 설명은 초안 상태로 두지 않는다.
- 발행 전에는 `checklist/post-publish-checklist.md`를 확인한다.
