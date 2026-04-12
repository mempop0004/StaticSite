---
title: 'Cloudflare Pages 404: the first 4 settings to check'
description: 'A practical Cloudflare Pages 404 guide for static sites. Check the production branch, build command, output directory, and root directory before chasing deeper causes.'
blogId: 'blog-cf-pages-404'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - 'cloudflare-pages'
  - '404'
  - 'astro'
  - 'static-site'
  - 'deployment'
relatedSlugs:
  - 'cloudflare-pages-redeploy-after-settings-change'
pubDate: 'Apr 09 2026'
updatedDate: 'Apr 09 2026'
heroImage: '../../../assets/generated/post_blog_001_post_001-slot-001.png'
heroImageAlt: 'Hero image for Cloudflare Pages 404: the first 4 settings to check. A practical Cloudflare Pages 404 guide for static sites. Check the produ...'
---
<p>If your Cloudflare Pages site returns <code>404 Not Found</code> on the main URL, do not start with edge cases. For a static site, the fastest fix usually comes from verifying the small number of settings that decide whether Cloudflare can build and publish the correct output at all.</p>

<p>For most Astro or static blog projects, the first four settings to check are:</p>

<ul>
  <li><code>Production branch</code></li>
  <li><code>Build command</code></li>
  <li><code>Build output directory</code></li>
  <li><code>Root directory</code></li>
</ul>

<p>For a standard Astro project, the safe defaults usually look like this:</p>

<table>
  <thead>
    <tr>
      <th>setting</th>
      <th>expected value for a normal Astro site</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Production branch</td>
      <td><code>main</code></td>
    </tr>
    <tr>
      <td>Build command</td>
      <td><code>npm run build</code></td>
    </tr>
    <tr>
      <td>Build output directory</td>
      <td><code>dist</code></td>
    </tr>
    <tr>
      <td>Root directory</td>
      <td>blank</td>
    </tr>
  </tbody>
</table>

<p>If one of those values is wrong, Cloudflare Pages may deploy the wrong branch, skip the build, or look for files in the wrong location. That is enough to produce a 404 even when the project works locally.</p>

<h2>Start with the simplest explanation</h2>

<p>When people see a 404 on the homepage, they often jump straight to:</p>

<ul>
  <li>missing routes</li>
  <li>redirect issues</li>
  <li>DNS confusion</li>
  <li>framework-specific adapter problems</li>
</ul>

<p>Those problems can happen, but they are usually not the first thing to check on a normal static site.</p>

<p>For a new Pages project or a recently changed blog, the more common failure is simpler: Cloudflare does not know what to build or where the final files live.</p>

<p>If your local build succeeds and produces <code>dist/index.html</code>, but the site still shows a 404, configuration is the first suspect.</p>

<h2>1. Confirm the repository and production branch</h2>

<p>Before looking at commands or folders, confirm that the Pages project is connected to the right repository and the right branch.</p>

<p>The common failure pattern is:</p>

<ul>
  <li>the repository is correct, but the production branch is wrong</li>
  <li>the repository points to an older test project</li>
  <li>the live content is on <code>main</code>, but Pages is watching another branch</li>
</ul>

<p>If that happens, Cloudflare can build successfully and still publish the wrong code.</p>

<p>For most small blogs, the expected branch is:</p>

<pre><code>main</code></pre>

<p>If you changed branch strategy recently, verify the setting before changing anything else.</p>

<h2>2. Check that the build command is not empty</h2>

<p>Cloudflare Pages cannot publish a static site unless it runs the build step that produces the output files.</p>

<p>For Astro, the expected build command is usually:</p>

<pre><code>npm run build</code></pre>

<p>This matters more than many people expect. If the build command is empty, outdated, or copied from another framework, the project may never create the correct static output.</p>

<p>Typical bad states include:</p>

<ul>
  <li>build command left blank</li>
  <li>command copied from another starter</li>
  <li>command points to a different package or workspace</li>
  <li>command succeeds locally but was never updated in Pages settings</li>
</ul>

<p>If you are unsure, compare the Pages setting directly with the command you use locally.</p>

<h2>3. Verify the build output directory</h2>

<p>For a default Astro static build, the generated site goes into:</p>

<pre><code>dist</code></pre>

<p>If Cloudflare Pages is pointed at the wrong output directory, it may complete the build but still fail to publish the actual homepage files.</p>

<p>This is one of the most common reasons for a homepage 404 on a static site.</p>

<p>You should specifically check whether:</p>

<ul>
  <li>the output directory is blank</li>
  <li>the output directory still points to another framework default</li>
  <li>the project was moved, but the path was not updated</li>
</ul>

<p>For a standard Astro setup, <code>dist</code> is usually the right answer.</p>

<h2>4. Leave the root directory blank unless you truly need it</h2>

<p>The <code>Root directory</code> setting causes trouble because it looks harmless. If the repository itself is already the Astro project root, the safest choice is usually to leave this field blank.</p>

<p>You only need a root directory when the real site lives in a subfolder.</p>

<p>Common failure patterns:</p>

<ul>
  <li>setting <code>Root directory</code> even though the project is already at repo root</li>
  <li>copying a monorepo setting into a simple repo</li>
  <li>pointing Pages at a subfolder that does not contain the real <code>package.json</code></li>
</ul>

<p>If Cloudflare starts from the wrong folder, it may fail to find the build command or the final output path even though both are correct inside the real project.</p>

<h2>The fastest recovery order</h2>

<p>If the homepage is 404 and you want the shortest path to a fix, use this order:</p>

<ol>
  <li>confirm repository and production branch</li>
  <li>confirm build command</li>
  <li>confirm output directory</li>
  <li>confirm root directory is blank unless the project is in a subfolder</li>
  <li>redeploy after correcting the values</li>
</ol>

<p>That order matters because it moves from high-impact checks to lower-level verification without wasting time.</p>

<h2>What this means for an Astro blog</h2>

<p>If your project is a normal Astro blog and not a complicated monorepo, the baseline is usually simple:</p>

<ul>
  <li>branch: <code>main</code></li>
  <li>build command: <code>npm run build</code></li>
  <li>output directory: <code>dist</code></li>
  <li>root directory: blank</li>
</ul>

<p>That is why a Cloudflare Pages 404 should usually be treated as a settings verification problem first, not an architecture problem.</p>

<h2>When this guide is not enough</h2>

<p>If all four settings are correct and the site is still failing, the next step is not to guess. At that point you should verify that a new deployment actually ran and that the production URL is serving the latest successful build.</p>

<p>Use the follow-up checklist here:</p>

<p><a href="/blog/cloudflare-pages-redeploy-after-settings-change/">What to check after changing Cloudflare Pages settings and redeploying</a></p>
