---
title: 'Browser cache invalidation strategies when deploying static sites'
description: 'Deployed your static site but visitors still see the old version? Learn the definitive cache invalidation strategies for HTML, CSS, and JS files.'
blogId: 'blog-static-web-operations'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - 'cache invalidation'
  - 'static site'
  - 'CDN cache'
  - 'Cloudflare cache'
  - 'Netlify caching'
pubDate: '2026-04-17T11:21:36+09:00'
relatedSlugs:
  - 'what-to-check-first-when-static-assets-disappear-after-deploy'
updatedDate: '2026-04-17T11:21:36+09:00'
heroImage: '../../../assets/blog-placeholder-3.jpg'
heroImageAlt: 'Editorial hero image for the core concept of this post. Browser cache invalidation strategies when deploying static sites'
---
<p>It's Friday afternoon. You just deployed a critical hotfix to your static site. The Vercel dashboard shows a green checkmark. You open an Incognito window, verify the fix is live, and breathe a sigh of relief. But 10 minutes later, the customer support channel lights up. Users are still reporting the exact same error, looking at the exact same broken layout.</p>

<p>You didn't fail at deploying; you failed at cache invalidation. In the world of static site operations, pushing code to a server is only half the battle. The other half is fighting the browser's relentless desire to hold onto old files. If you don't explicitly separate your HTML caching strategy from your asset caching strategy, your users will be trapped in the past.</p>

<h2>1. The misconception: "Just purge the CDN cache"</h2>
<p>When an update doesn't appear, the first instinct of most developers is to log into Cloudflare or Netlify and frantically click the "Purge Cache" button. This clears the edge nodes, but it <em>completely ignores</em> the local cache living inside the user's browser. If a user's browser previously downloaded your `index.html` with a 24-hour cache limit, their browser will not even ask the CDN for a new version until tomorrow. You can purge the CDN a hundred times; the user will still see the broken site.</p>

<h2>2. The Golden Rule: Immutable Assets, Mutable HTML</h2>
<p>The only bulletproof cache invalidation strategy for static sites relies on a concept called "File Hashing." Modern build tools like Astro, Vite, Next.js, and Webpack automatically append a random string to your file names when they build your site, generating files like `main-A4B7D9.css` and `app-88XF2.js`.</p>
<p>Because the filename itself changes whenever the file's content changes, these assets are <strong>immutable</strong>. You can safely tell the browser to cache them forever. But `index.html` is different. The HTML file is the central "pointer" that tells the browser which hashed CSS and JS files to load. Therefore, the HTML file must remain <strong>mutable</strong> and must never be aggressively cached.</p>

<h2>3. The exact Cache-Control headers you must configure</h2>
<p>To enforce the Golden Rule, you must configure your hosting platform (Netlify, Vercel, Cloudflare Pages, AWS S3) to serve two distinct sets of headers:</p>
<ul>
  <li><strong>For HTML files (`*.html`):</strong> `Cache-Control: public, max-age=0, must-revalidate`<br>This strictly tells the browser: "You may store this, but you MUST ask the server if it has changed before using it." If it hasn't changed, the server returns a lightweight `304 Not Modified`.</li>
  <li><strong>For Hashed Assets (`/assets/*` or `/_astro/*`):</strong> `Cache-Control: public, max-age=31536000, immutable`<br>This tells the browser: "Cache this file for a full year. Do not even bother asking the server if it has changed." This is what makes modern static sites incredibly fast.</li>
</ul>

<h2>4. The Hidden Enemy: Rogue Service Workers</h2>
<p>If you've meticulously set your headers but a user is still stuck on an old version, you might be dealing with a rogue Service Worker. If you ever experimented with PWA (Progressive Web App) features and installed a Service Worker that aggressively caches network requests, it will intercept all calls before they even reach the browser's HTTP cache. If this happens, you cannot fix it from your CDN. You must deploy a specific script to the user's browser that explicitly calls `navigator.serviceWorker.getRegistrations()` and unregisters the old workers.</p>

<h2>5. The Post-Deploy Cache Troubleshooting Checklist</h2>
<p>If your deployment isn't showing up, do not panic. Follow these steps in order:</p>
<ul>
  <li><strong>Isolate the local cache:</strong> Open the URL in an Incognito/Private window. If the new version appears, the deployment worked, and the issue is purely a local browser cache issue.</li>
  <li><strong>Inspect the HTML header:</strong> Open the Network tab, refresh the page, and click on your main `index.html` request. Look at the `Cache-Control` header. If it's anything other than `max-age=0` (or `no-cache`), your hosting platform's configuration is overriding your intentions.</li>
  <li><strong>Verify the hashing:</strong> Look at the JS and CSS files loading in the Network tab. Do they have random hashes in their names? If they are just called `styles.css` or `main.js`, you need to enable hashing in your bundler configuration immediately.</li>
</ul>

<h2>What to do first</h2>
<p>Right now, go to your live production site. Open your browser's Developer Tools, go to the Network tab, ensure the "Disable cache" checkbox is unchecked, and refresh the page. Click on the very first document request (your `index.html`). Check the `Cache-Control` header. If it doesn't say `max-age=0`, stop what you're doing and fix your hosting configuration.</p>
