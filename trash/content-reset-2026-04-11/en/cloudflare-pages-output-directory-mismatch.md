---
title: 'Cloudflare Pages output directory mismatch check'
description: 'A small dummy article about what happens when the Cloudflare Pages output directory does not match the actual static build output.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-build-log-checklist'
  - 'cloudflare-pages-root-directory-mistake'
pubDate: 'Apr 16 2026'
updatedDate: 'Apr 16 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

One of the easiest ways to create a broken deploy is to point Cloudflare Pages at the wrong output folder.

For a normal Astro static build, the expected output is `dist`.

If the dashboard points somewhere else, Cloudflare Pages can finish the build and still publish the wrong thing.

The next step is [checking whether the root directory itself is wrong](/blog/cloudflare-pages-root-directory-mistake/).
