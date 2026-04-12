---
title: 'Cloudflare Pages production branch check'
description: 'A quick dummy post about confirming the production branch when a Cloudflare Pages site is not updating as expected.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-root-directory-mistake'
  - 'cloudflare-pages-cache-and-hard-refresh'
pubDate: 'Apr 14 2026'
updatedDate: 'Apr 14 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

Sometimes the site is fine and the problem is simpler: the production branch is watching the wrong branch.

If the latest content is on `main` but Pages is watching a different branch, the live site will never catch up.

Confirm the production branch before chasing lower-level build issues.

After that, use [the cache and hard refresh check](/blog/cloudflare-pages-cache-and-hard-refresh/).
