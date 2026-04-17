---
title: 'How to build a repeatable image-slot content system'
description: 'Image work stops blocking publishing when every asset follows a fixed slot, prompt rule, and stage. This guide shows how to map files, prompts, and review states into one repeatable system.'
blogId: 'blog-web-content-production-system'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - 'image slots'
  - 'content workflow'
  - 'publishing system'
  - 'metadata'
  - 'production system'
pubDate: '2026-04-13T10:21:41+09:00'
updatedDate: '2026-04-13T10:21:41+09:00'
heroImage: '../../../assets/generated/post_blog_009_post_002-slot-001.png'
heroImageAlt: 'Editorial hero image for the core concept of this post. How to build a repeatable image-slot content system'
---
<p>Content systems often break at the image step because images still live outside the production structure. Writing has templates, metadata has rules, and review has states, but images often remain last-minute requests attached to a post by memory.</p>

<p>Use the <a href="/units/blog-web-content-production-system/">web content production system unit page</a> as the index for follow-up posts, and keep this workflow tied to <a href="/blog/web-content-production-system-rules-you-should-fix-first/">the baseline content-system guide</a>.</p>

<h2>1. Give each slot one fixed role</h2>
<p>The simplest stable rule is enough to change the workflow: 001 is always the hero image and 002 is always the inline explanatory image. Once the role is fixed, the team stops renegotiating every asset.</p>

<h2>2. Make the file mapping obvious</h2>
<p>A slot system works when the article file, image folder, prompt block, and generated asset path all line up. The more visible that mapping is, the easier it becomes to review and replace assets.</p>
<pre><code>post_blog_009_post_002.html
post_blog_009_post_002/001.png
post_blog_009_post_002/002.png
public/generated-post-assets/post_blog_009_post_002-slot-002.png</code></pre>

<image-slot code="002" alt="An image-slot content system showing post file, slot images, prompt mapping, generated asset path, and release stage."></image-slot>

<h2>3. Prompts should inherit the slot role</h2>
<p>Hero images and inline explanatory images solve different problems, so they need different prompt logic. The slot should define the prompt direction before image generation starts.</p>
<ul>
  <li>001 hero: one scene, one message, thumbnail readability</li>
  <li>002 inline: process support, comparison, or structure explanation</li>
</ul>

<h2>4. Add visible production states</h2>
<p>The system becomes smoother when every post can be seen as one of a few states: draft, ready for images, waiting for 001, waiting for 002, review complete, or publish-ready. Hidden image state is what creates late friction.</p>

<h2>5. Store one real example per slot</h2>
<p>The workflow becomes teachable when each slot has one real working example. New contributors can copy an existing 001 or 002 pattern instead of guessing prompt shape, alt text, and file path rules from scratch.</p>

<h2>What to do first</h2>
<p>Start with only two slots and one visible state rule. If you can repeatedly map the article file, 001 hero, 002 inline, and generated asset path without confusion, the rest of the image workflow becomes much easier to scale.</p>
