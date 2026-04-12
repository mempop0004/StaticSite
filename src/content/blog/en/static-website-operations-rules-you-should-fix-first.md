---
title: '7 static website rules you should lock before operating the site'
description: 'Before you run a static website, fix the rules for site URL, deployment target, content structure, image handling, search feeds, verification files, and review flow. This guide explains the seven decisions that should be locked early.'
blogId: 'blog-static-web-operations'
stage: 'pillar'
purpose: 'operations'
searchIntent: 'learn'
readerState: 'operating'
sectionStyle: 'checklist'
imageNeed: 'inline-needed'
tags:
  - 'static site'
  - 'deployment'
  - 'sitemap'
  - 'rss'
  - 'operations'
  - 'checklist'
pubDate: '2026-04-12T10:54:58+09:00'
updatedDate: '2026-04-12T10:54:58+09:00'
heroImage: '../../../assets/generated/post_blog_003_post_001-slot-001.png'
heroImageAlt: 'Editorial hero image for the core concept of this post. 7 static website rules you should lock before operating the site'
---
<p>Most static sites do not fail because the framework is wrong. They fail because basic operating rules are still undecided when the second or third post goes live. That is when canonical URLs drift, feeds go stale, verification files disappear, image paths split, and deploys start publishing the wrong thing.</p>

<p>If you want a static site that stays stable after launch, you need to lock a small set of rules before volume arrives. This guide is the first operating checklist for that job.</p>

<h2>1. Lock the site URL before you publish anything</h2>
<p>Your canonical tags, RSS links, sitemap URLs, verification files, and search console registration all depend on one base address. If the site URL is not fixed, every downstream feed and metadata file becomes unstable.</p>
<p>A simple rule works: every blog gets one production URL, and that URL is written into its settings before the second post is published.</p>

<h2>2. Treat the deploy target as part of the content system</h2>
<p>A static site is not only HTML generation. The deploy repository, branch, build command, root directory, and output directory all belong to the operating system of the blog. If those are not fixed, the site can build locally but publish the wrong result remotely.</p>
<p>That is why each blog in this studio has its own deploy target and build command, instead of sharing one vague deployment path.</p>

<h2>3. Separate writing workspace from live blog workspace</h2>
<p>Drafting, image review, and slot checks should happen in the studio workspace first. Only after verification should a post move into the blog-specific folder. That split reduces accidental publish mistakes and makes each blog easier to reason about.</p>

<figure class="article-inline-image">
  <img src="/generated-post-assets/post_blog_003_post_001-slot-002.png" alt="A diagram showing the early setup rules for a static website operation workflow." loading="lazy" decoding="async">
</figure>

<h2>4. Fix image handling rules before the second article</h2>
<p>Image workflows break fast when there is no rule for hero selection, inline image placement, public asset copying, compression, and alt text. The rule should be mechanical: slot numbering, selected asset priority, generated asset path, and locale-safe images.</p>
<p>For example, decide now that <code>001</code> is the default hero, <code>.sel</code> overrides selection, inline images must use explicit slot codes, and generated public paths must stay predictable. If that rule is loose, every new post becomes a custom exception.</p>

<h2>5. Generate sitemap and RSS as part of the build, not as an afterthought</h2>
<p>Search-facing files should not depend on manual updates. RSS and sitemap belong to the build output, and the build should fail when they are missing. That turns search hygiene into a system rule instead of a reminder.</p>
<p>A practical rule is simple: if <code>/rss.xml</code>, <code>/ko/rss.xml</code>, or <code>/sitemap.xml</code> are missing after build, the build should stop. That is much safer than remembering to update feeds later.</p>

<h2>6. Keep verification files and search setup inside the same operating loop</h2>
<p>Search Console, Naver, and other verification files are easy to forget because they feel external. In practice, they are part of publishing. They should live in the repo, be deployed with the site, and be checked from the live URL.</p>

<h2>7. Review should improve the system, not just the current post</h2>
<p>A review cycle that only edits one article is too weak. The better pattern is: review the post, fix the post, then write the rule into memory so the next post starts stronger. That is how a static site stops being a collection of pages and becomes an operating system.</p>

<h2>What to do next</h2>
<p>If you are setting up a static site now, start by fixing the site URL, deploy target, image rule, and feed rule first. Those four decisions remove most of the instability that appears after the first few posts.</p>
<p>Then move to the next operational layer in the <a href="/units/blog-static-web-operations/">static web operations unit</a> and keep adding rules only when they reduce future mistakes, not when they add ceremony.</p>
