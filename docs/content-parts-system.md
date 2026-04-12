# Content Parts System

이 문서는 글마다 선택할 수 있는 필드와 조합 가능한 부품 목록을 정의한다.

목표는 `고정 템플릿`이 아니라 `필드 선택 + 부품 조합`으로 글 품질을 높이는 것이다.

단, SEO 메타 태그는 선택형이 아니라 모든 글에 강제되는 기본값이다.

## 1. Select Fields First

글을 쓰기 전에 아래 필드를 먼저 고른다.

이 필드들은 markdown 본문이 아니라 `frontmatter`에 넣는다.

### Purpose

- problem-fix
- comparison
- operations
- concept
- checklist
- log

### Search Intent

- fix
- compare
- choose
- learn
- verify

### Reader State

- first-time
- stuck
- validating
- operating

### Section Style

- step-by-step
- comparison-table
- explainer
- checklist
- field-note

### Image Need

- cover-only
- inline-needed
- table-better
- slot-needed

## 2. Content Parts

아래 부품은 글마다 골라서 조합한다.

### Core Parts

- lead paragraph
- problem statement
- scope block
- quick answer
- key checks
- step list
- summary
- next action
- related post link

### Problem-Fix Parts

- symptom list
- likely causes
- check order
- expected result
- retry checklist
- mistake warning

### Comparison Parts

- comparison intro
- criteria list
- comparison table
- best-for block
- tradeoff summary
- final pick

### Operations Parts

- baseline setup
- repeatable loop
- cost note
- maintenance note
- issue log
- review note

### Checklist Parts

- pre-check
- in-progress check
- post-check
- fail case
- done state

### Support Parts

- code block
- quote
- table
- note
- warning
- glossary
- faq

### Image Parts

- cover image
- inline screenshot
- inline diagram
- comparison visual
- image slot

## 3. Default Composition By Type

### problem-fix

- lead paragraph
- symptom list
- likely causes
- check order
- expected result
- related post link

### comparison

- lead paragraph
- criteria list
- comparison table
- best-for block
- tradeoff summary
- related post link

### operations

- lead paragraph
- baseline setup
- repeatable loop
- cost note
- maintenance note
- next action

### checklist

- lead paragraph
- pre-check
- in-progress check
- post-check
- done state

## 4. Image Decision

- 대표 이미지는 항상 넣는다
- 본문 이미지는 필요할 때만 넣는다
- 텍스트가 많으면 표를 우선한다
- 제작 가능하면 먼저 만든다
- 제작이 어렵거나 확정이 필요하면 image slot으로 남긴다

## 5. Review Rule

글 완성 후 아래를 본다.

- 필드 선택이 맞는가
- 부품 조합이 과한가
- 같은 역할의 섹션이 중복되는가
- 이미지가 꼭 필요한가
- 표가 더 나은가
- 다음 글로 이동할 내부 링크가 있는가

## 6. Frontmatter Input

실제 입력은 아래처럼 한다.

```yaml
---
title: 'Fixing a Cloudflare Pages 404: The first settings to check'
description: 'A short practical guide to the build command, output directory, and root directory settings that commonly cause a 404 on Cloudflare Pages.'
blogId: 'blog-cf-pages-404'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
relatedSlugs:
  - 'cloudflare-pages-redeploy-after-settings-change'
pubDate: 'Apr 09 2026'
updatedDate: 'Apr 09 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---
```

## 7. Field Meaning

- `purpose`: 이 글의 핵심 목적
- `searchIntent`: 사용자가 어떤 검색 의도로 들어오는지
- `readerState`: 독자가 어떤 상태인지
- `sectionStyle`: 본문을 어떤 방식으로 전개할지
- `imageNeed`: 커버만 필요한지, 본문 이미지가 필요한지, 표가 더 나은지
