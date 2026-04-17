---
title: 'How to match review files and posts without drift'
description: 'Review systems break when feedback attaches to the wrong post. This guide fixes matching rules with stable identity fields and movement rules.'
blogId: 'blog-web-content-production-system'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - 'review system'
  - 'content production'
  - 'file mapping'
  - 'quality control'
  - 'post review'
pubDate: '2026-04-14T09:00:00+09:00'
updatedDate: '2026-04-14T09:00:00+09:00'
heroImage: '../../../assets/generated/post_blog_009_post_003-slot-001.png'
heroImageAlt: 'Editorial hero image for the core concept of this post. How to match review files and posts without drift'
---
<p>Review systems fail quietly when feedback drifts onto the wrong post.</p>

<p>The fix is to treat every review as a record that must prove identity, not just a comment file.</p>

<h2>1. Lock the identity fields</h2>
<p>Use the same three fields everywhere: <strong>blog id</strong>, <strong>post number</strong>, and <strong>slug</strong>. A review without all three should be invalid.</p>

<h2>2. Make mismatches fail early</h2>
<p>When a slug changes, the review file must change too. If not, it should fail the build or be flagged before it attaches.</p>

<h2>3. Move reviews with the post</h2>
<p>When a post moves from studio to the real blog folder, its review file moves with it. If it stays behind, the link is broken.</p>

<figure class="article-inline-image">
  <img src="/generated-post-assets/post_blog_009_post_003-slot-002.png" alt="Identity chain linking blog id, post id, slug, generated markdown, and review record" loading="lazy" />
</figure>

<h2>What to do first</h2>
<p>Write the identity fields on every review and verify them before publishing.</p>

<ul>
  <li>blog id + post number + slug must match</li>
  <li>review file name must match slug</li>
  <li>review file moves with the post file</li>
</ul>

<ul>
  <li><a href="/en/units/blog-web-content-production-system/">Content production system unit</a></li>
  <li><a href="/en/blog/web-content-production-system-rules-you-should-fix-first/">Foundational production rules</a></li>
  <li><a href="/en/blog/how-to-build-an-image-slot-based-content-production-system/">Image slot workflow</a></li>
</ul>
