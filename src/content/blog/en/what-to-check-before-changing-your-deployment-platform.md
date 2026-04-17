---
title: 'What to check before changing your deployment platform'
description: 'Most platform moves fail from hidden operating assumptions, not code. This guide shows what to lock around domains, env vars, build output, redirects, logs, and rollback before cutover.'
blogId: 'blog-developer-deployment-and-hosting'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - 'deployment platform'
  - 'hosting migration'
  - 'domain'
  - 'env vars'
  - 'ops risk'
pubDate: '2026-04-14T09:00:00+09:00'
relatedSlugs:
  - 'deployment-and-hosting-rules-you-should-fix-first'
  - 'cloudflare-pages-vs-vercel-how-to-choose-for-operations'
updatedDate: '2026-04-14T09:00:00+09:00'
heroImage: '../../../assets/generated/post_blog_005_post_003-slot-001.png'
heroImageAlt: 'Editorial hero image for the core concept of this post. What to check before changing your deployment platform'
---
<p>Platform migrations rarely fail because the new platform cannot serve your code. They fail because the current platform was quietly handling more than the team wrote down. Custom domains, preview behavior, redirects, feed paths, image assumptions, and logging habits are usually the real migration surface.</p>

<p>Use the <a href="/units/blog-developer-deployment-and-hosting/">deployment and hosting unit page</a> as the index for narrower platform guides. If you need the baseline first, start with <a href="/blog/deployment-and-hosting-rules-you-should-fix-first/">the rules you should fix first</a>. If your decision is still at the platform-comparison stage, continue with <a href="/blog/cloudflare-pages-vs-vercel-how-to-choose-for-operations/">Cloudflare Pages vs Vercel</a>.</p>

<h2>1. Lock public surfaces before you compare features</h2>
<p>Your domain behavior matters more than the platform feature list. List the current live assumptions first: custom domains, HTTPS enforcement, trailing slash policy, robots.txt, sitemap URL, RSS URL, public asset paths, and any redirect rules that users already depend on.</p>
<p>If the target platform changes even one of those by accident, the migration is already carrying more risk than the team thinks.</p>

<h2>2. Separate build assumptions from runtime assumptions</h2>
<p>Many teams say “the build works” and stop too early. That only covers one layer. You still need to list which assumptions belong to build output and which belong to runtime behavior.</p>
<ul>
  <li>Build layer: output directory, asset path rules, image optimization, static export assumptions</li>
  <li>Runtime layer: environment variables, serverless behavior, rewrites, redirects, preview auth, log access</li>
</ul>
<p>If those two layers are mixed in one vague checklist, the migration will be harder to debug when something breaks after cutover.</p>

<h2>3. Do not move domains before you verify the generated output</h2>
<p>A safe sequence is boring on purpose. First verify the generated build. Then verify the public output on a temporary URL. Only after that should the main domain move.</p>
<p>That means checking the real public behavior of pages, feeds, sitemap, redirects, and assets on the target platform before you cut over DNS.</p>
<figure class="article-inline-image">
  <img src="/generated-post-assets/post_blog_005_post_003-slot-002.png" alt="A document-style migration checklist showing domains, environment variables, build output, redirects, logs, and rollback groups before a deployment platform move." loading="lazy" decoding="async">
</figure>

<h2>4. Environment variables should be rewritten as a dependency list</h2>
<p>Do not copy environment variables blindly. Rewrite them as a dependency list instead: which feature needs which variable, what breaks when it is missing, and whether the variable belongs to build time or runtime.</p>
<p>That simple rewrite catches the common mistakes: missing analytics keys, broken auth callbacks, wrong origin URLs, stale webhook endpoints, or secrets copied into the wrong environment.</p>

<h2>5. Write the rollback before the cutover</h2>
<p>If rollback is still “we will switch back if needed,” then rollback does not exist yet. Write the exact rollback boundary: which domain record changes back, which deployment remains available, which environment variables stay untouched, and how long you will observe the new platform before calling the move complete.</p>
<p>A good rollback plan should let one person revert the public surface quickly without having to rediscover the old settings under pressure.</p>

<h2>What to do first</h2>
<p>Open a blank checklist and write six groups only: domains, environment variables, build output, redirects, logs, and rollback. Fill those groups using your current live system before you compare platform features. If you cannot fill that sheet clearly, the migration decision is still early.</p>
