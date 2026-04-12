---
title: 'Cloudflare Pages root directory mistake to avoid'
description: 'A short dummy post about the root directory field and why it often causes confusion on simple static projects.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-output-directory-mismatch'
  - 'cloudflare-pages-production-branch-check'
pubDate: 'Apr 15 2026'
updatedDate: 'Apr 15 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

On a simple single-project repository, the safest root directory is often no root directory at all.

If you point the dashboard to the wrong subfolder, the build can lose access to the real `package.json` or the actual output.

When that happens, the fix is usually to clear the field and redeploy.

Then move to [the production branch check](/blog/cloudflare-pages-production-branch-check/).
