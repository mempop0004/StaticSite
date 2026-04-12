---
title: 'Cloudflare Pages markdown stress test for blog template slots'
description: 'A dedicated dummy post that exercises headings, lists, quotes, code, tables, links, images, and long text blocks for UI review.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-404-fix-guide'
  - 'cloudflare-pages-build-log-checklist'
pubDate: 'Apr 18 2026'
updatedDate: 'Apr 18 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

This post exists to test how the blog template renders markdown blocks when the content is longer, denser, and more varied than a normal article.

## Heading level two

This paragraph checks normal body copy width, line height, inline links such as [Cloudflare Pages](https://pages.cloudflare.com/), and inline code like `npm run build`.

### Heading level three

This section checks short paragraphs, longer paragraphs, and how spacing changes between headings and lists.

#### Heading level four

If the visual rhythm breaks here, the template still needs work.

## Unordered list

- First bullet with a short line.
- Second bullet with a little more text to see wrapping on smaller widths.
- Third bullet with `inline code` and a [linked label](https://astro.build/).

## Ordered list

1. Open the project settings.
2. Review the build command.
3. Confirm the output directory.
4. Redeploy and recheck the live URL.

## Blockquote

> A template is only useful when ordinary markdown still looks stable under real content.

## Code block

```text
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory:
```

## Horizontal rule

---

## Strong and emphasis

You can mix **strong text**, *emphasis*, and `code` in a single sentence to test inline contrast.

## Table-like content

| check | value |
| --- | --- |
| branch | main |
| build | npm run build |
| output | dist |

## Mixed content

The template should keep working when a post moves from paragraph to list to quote to code block without looking cramped or inconsistent.

Return to [the main 404 guide](/blog/cloudflare-pages-404-fix-guide/).
