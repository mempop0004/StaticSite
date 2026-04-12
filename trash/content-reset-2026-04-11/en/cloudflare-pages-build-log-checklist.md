---
title: 'Cloudflare Pages build log checklist for a broken deploy'
description: 'A simple dummy post about what to scan first in a Cloudflare Pages build log when a deploy does not look right.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-404-fix-guide'
  - 'cloudflare-pages-output-directory-mismatch'
pubDate: 'Apr 17 2026'
updatedDate: 'Apr 17 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

When a deploy fails, the build log is usually the fastest place to reduce confusion.

Start with three checks:

- did the right branch build
- did `npm run build` actually run
- did the output mention `dist`

If those three lines look wrong, you can usually narrow the issue fast.

Next, continue with [the output directory mismatch check](/blog/cloudflare-pages-output-directory-mismatch/).
