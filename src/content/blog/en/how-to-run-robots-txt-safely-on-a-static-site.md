---
title: 'How to run robots.txt safely on a static site'
description: 'A small robots.txt mistake can block indexing or expose the wrong paths. This guide explains what to lock, what not to block, and how to keep static site crawl rules safe.'
blogId: 'blog-static-web-operations'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - 'robots.txt'
  - 'static site'
  - 'crawl rules'
  - 'indexing'
  - 'sitemap'
pubDate: '2026-04-13T10:21:40+09:00'
updatedDate: '2026-04-13T10:21:40+09:00'
heroImage: '../../../assets/generated/post_blog_003_post_002-slot-001.png'
heroImageAlt: 'Editorial hero image for the core concept of this post. How to run robots.txt safely on a static site'
---
<p>On a static site, robots.txt is small enough to feel harmless. That is exactly why it causes expensive mistakes. One bad block can hide your entire content set from search or stop useful assets from being crawled.</p>

<p>Use the <a href="/units/blog-static-web-operations/">static website operations unit page</a> as the index for follow-up posts on indexing, assets, domains, and deployment checks.</p>

<h2>1. Robots is a crawl rule, not a privacy rule</h2>
<p>The first thing to lock is the purpose. Robots.txt tells crawlers what not to request. It does not protect private content by itself.</p>

<h2>2. Block less than you think</h2>
<p>Many sites block folders because they look technical. That is often wrong. Templates, assets, locale paths, or generated pages can disappear from search workflows if you block too broadly.</p>
<figure class="article-inline-image">
  <img src="/generated-post-assets/post_blog_003_post_002-slot-002.png" alt="An explanatory image showing a robots.txt allow/deny setup that keeps important pages crawlable while blocking noise." loading="lazy" decoding="async">
</figure>

<h2>3. Always keep the sitemap reference</h2>
<p>If you rely on search discovery, the sitemap line should be treated as part of your baseline. It belongs in the file and it should point to the live sitemap URL.</p>
<pre><code>User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml</code></pre>

<h2>4. Verify the live file, not the local guess</h2>
<p>In static operations, a correct local file does not matter if the deployed host is serving something else. Always open the live robots URL after deployment.</p>

<h2>What to do first</h2>
<p>Review your current robots.txt with one question: is it blocking anything that search still needs to crawl? If the answer is unclear, your rule set is too loose to trust.</p>
