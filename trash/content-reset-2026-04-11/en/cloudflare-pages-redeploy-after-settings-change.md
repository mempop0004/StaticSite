---
title: 'What to check after changing Cloudflare Pages settings and redeploying'
description: 'A short follow-up checklist for verifying redeploys, build logs, and the live URL after updating Cloudflare Pages build settings.'
blogId: 'blog-cf-pages-404'
stage: 'supporting'
relatedSlugs:
  - 'cloudflare-pages-404-fix-guide'
pubDate: 'Apr 10 2026'
updatedDate: 'Apr 10 2026'
heroImage: '../../../assets/blog-placeholder-4.jpg'
---

Fixing the settings is only the first half of a Cloudflare Pages 404 recovery. After the change, the next question is whether the new deployment actually ran and whether the live site is serving that deployment.

Use this as the follow-up post after the main 404 guide.

## The short checklist

1. confirm a new deployment exists
2. confirm the build finished successfully
3. confirm the main URL is serving the updated deployment

## Check the Deployments tab right away

After changing `Build command`, `Build output directory`, or `Root directory`, go straight to the `Deployments` tab. The important checks are:

- the latest deployment happened after the settings change
- the status is `Success`
- the deployment is attached to production

## Trigger a redeploy when nothing new appears

If no deployment was created, use `Redeploy` or `Retry deployment` instead of waiting. A small commit and push is also fine when you want to force a fresh build from Git.

## Read the build log with a narrow goal

You do not need to read everything. Start with two checks:

- did `npm run build` execute
- did the project produce `dist`

For a normal Astro build, the output should clearly show static pages being generated into `dist`.

## Recheck the site in a fresh browser session

If the deployment succeeded, open the main URL in a private window or with a hard refresh. Cached 404 responses can waste time during verification.

Checking both the homepage and the lead post URL is useful:

- if the homepage fails but the post works, the homepage output may be the issue
- if both fail, go back to the deployment itself

## What to log in the 28-day record

For this operating unit, a minimal daily note is enough:

- any change in search clicks or impressions
- whether the lead post moved readers into the follow-up post
- how much time the issue took that day

The record file is `ops/28day-records/blog-cf-pages-404.md`.

Return to [the main Cloudflare Pages 404 guide](/en/blog/cloudflare-pages-404-fix-guide/) if you need the first-stage diagnosis again.
