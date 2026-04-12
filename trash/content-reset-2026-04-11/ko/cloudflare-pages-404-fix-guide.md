---
title: 'Cloudflare Pages 404가 날 때 가장 먼저 확인할 4가지'
description: 'Cloudflare Pages 메인 주소가 404일 때는 먼저 Production branch, Build command, Build output directory, Root directory부터 확인해야 한다. 정적 사이트 기준의 가장 실전적인 첫 점검 순서를 정리했다.'
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
  - '정적사이트'
  - '배포'
relatedSlugs:
  - 'cloudflare-pages-redeploy-after-settings-change'
pubDate: 'Apr 09 2026'
updatedDate: 'Apr 09 2026'
heroImage: '../../../assets/generated/post_blog_001_post_001-slot-001.png'
heroImageAlt: 'Cloudflare Pages 404가 날 때 가장 먼저 확인할 4가지를 설명하는 대표 이미지. Cloudflare Pages 메인 주소가 404일 때는 먼저 Production branch, Build command, Build output dire...'
---
<p>Cloudflare Pages 메인 주소에서 <code>404 Not Found</code>가 뜨면 많은 사람들이 먼저 라우트 문제나 <code>index.html</code> 누락을 의심한다. 하지만 정적 사이트에서는 그보다 먼저 <code>Cloudflare가 무엇을 빌드하고 어디를 배포해야 하는지 제대로 알고 있는가</code>를 확인하는 편이 훨씬 빠르다.</p>

<p>정적 블로그 기준으로 가장 먼저 확인할 것은 아래 네 가지다.</p>

<ul>
  <li><code>Production branch</code></li>
  <li><code>Build command</code></li>
  <li><code>Build output directory</code></li>
  <li><code>Root directory</code></li>
</ul>

<p>Astro 프로젝트라면 보통 아래 값이 맞다.</p>

<table>
  <thead>
    <tr>
      <th>설정 항목</th>
      <th>일반적인 Astro 기준 값</th>
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
      <td>비움</td>
    </tr>
  </tbody>
</table>

<p>이 네 값 중 하나라도 틀리면, 로컬에서 정상적으로 빌드되더라도 Cloudflare Pages는 실제 사이트 파일을 올바르게 배포하지 못할 수 있다.</p>

<h2>왜 이 네 가지를 먼저 봐야 하는가</h2>

<p>메인 페이지 404를 보면 흔히 이런 쪽부터 생각하게 된다.</p>

<ul>
  <li>라우트 설정 문제</li>
  <li>리다이렉트 문제</li>
  <li>DNS 문제</li>
  <li>adapter 문제</li>
</ul>

<p>이런 경우도 물론 있다. 하지만 새로 만든 프로젝트이거나 설정을 방금 바꾼 정적 사이트라면, 더 흔한 원인은 훨씬 단순하다.</p>

<p>Cloudflare Pages가:</p>

<ul>
  <li>어떤 branch를 production으로 볼지</li>
  <li>어떤 명령으로 빌드할지</li>
  <li>어떤 폴더를 결과물로 볼지</li>
  <li>어느 디렉터리에서 시작할지</li>
</ul>

<p>이 네 가지를 제대로 알지 못하는 상태다.</p>

<p>즉 메인 페이지 404는 종종 “파일이 아예 없는 문제”가 아니라 “배포 기준이 잘못된 문제”다.</p>

<h2>1. Production branch가 맞는지 확인</h2>

<p>가장 먼저 볼 것은 Pages 프로젝트가 실제로 어떤 branch를 production으로 보고 있는지다.</p>

<p>흔한 실패 패턴은 아래와 같다.</p>

<ul>
  <li>실제 최신 코드는 <code>main</code>에 있는데 다른 branch를 보고 있음</li>
  <li>테스트용 branch를 production으로 보고 있음</li>
  <li>저장소는 맞지만 branch가 틀려서 오래된 코드가 계속 배포됨</li>
</ul>

<p>이 경우 빌드 자체는 성공해도 메인 사이트는 계속 잘못된 상태를 유지할 수 있다.</p>

<p>일반적인 정적 블로그라면 보통 아래를 기대한다.</p>

<pre><code>main</code></pre>

<h2>2. Build command가 비어 있지 않은지 확인</h2>

<p>Cloudflare Pages는 정적 파일을 직접 만들어주지 않는다. <code>Build command</code>를 통해 어떤 명령으로 산출물을 생성해야 하는지를 알아야 한다.</p>

<p>Astro 기준으로는 보통 아래가 맞다.</p>

<pre><code>npm run build</code></pre>

<p>이 값이 비어 있거나, 다른 프레임워크에서 복사한 명령이 남아 있으면 사이트 파일이 아예 생성되지 않거나 잘못된 빌드가 수행된다.</p>

<p>특히 아래 상황을 자주 본다.</p>

<ul>
  <li>build command가 비어 있음</li>
  <li>예전 starter의 명령이 그대로 남아 있음</li>
  <li>workspace 경로가 바뀌었는데 명령은 예전 기준임</li>
</ul>

<p>로컬에서 쓰는 명령과 Pages 설정의 명령이 같아야 한다.</p>

<h2>3. Build output directory가 <code>dist</code>인지 확인</h2>

<p>Astro의 기본 정적 산출물은 <code>dist</code> 폴더에 생성된다. 따라서 Cloudflare Pages는 빌드 후 <code>dist</code>를 실제 배포 폴더로 봐야 한다.</p>

<p>정상 빌드가 끝났는데도 메인 사이트가 404인 경우, 이 항목이 비어 있거나 잘못된 경우가 많다.</p>

<p>Astro에서는 보통 아래가 맞다.</p>

<pre><code>dist</code></pre>

<p>이 값이 틀리면 Cloudflare는 실제 결과물 대신 빈 폴더나 다른 경로를 보게 된다.</p>

<p>즉 로컬에는 <code>dist/index.html</code>이 있는데도 메인 주소에서 404가 날 수 있다.</p>

<h2>4. Root directory는 정말 필요할 때만 쓴다</h2>

<p>저장소 루트 자체가 Astro 프로젝트라면 <code>Root directory</code>는 보통 비워두는 편이 맞다. 이 값을 하위 폴더로 잘못 지정하면 Cloudflare는 엉뚱한 경로에서 <code>package.json</code>이나 <code>dist</code>를 찾게 된다.</p>

<p>이 설정은 monorepo나 하위 폴더 프로젝트일 때만 필요하다.</p>

<p>단일 블로그 저장소라면 괜히 넣지 않는 편이 더 안전하다.</p>

<h2>가장 빠른 점검 순서</h2>

<p>메인 페이지가 404일 때는 아래 순서로 보면 된다.</p>

<ol>
  <li>Pages 프로젝트가 올바른 저장소와 <code>Production branch</code>를 보고 있는지 확인</li>
  <li><code>Build command</code>가 <code>npm run build</code>인지 확인</li>
  <li><code>Build output directory</code>가 <code>dist</code>인지 확인</li>
  <li><code>Root directory</code>가 비어 있는지 확인</li>
  <li>설정을 고친 뒤 새 배포를 실행</li>
</ol>

<p>이 순서를 쓰면 불필요하게 복잡한 원인부터 뒤지는 시간을 줄일 수 있다.</p>

<h2>Astro 블로그 기준으로 기억할 값</h2>

<p>보통 아래만 기억하면 된다.</p>

<ul>
  <li><code>Production branch</code>: <code>main</code></li>
  <li><code>Build command</code>: <code>npm run build</code></li>
  <li><code>Build output directory</code>: <code>dist</code></li>
  <li><code>Root directory</code>: 비움</li>
</ul>

<p>즉 Cloudflare Pages 404는 먼저 “배포 기준 4개가 맞는가”를 보는 문제다.</p>

<h2>이 글로 해결되지 않는 경우</h2>

<p>이 네 가지가 모두 맞는데도 문제가 남아 있다면, 다음으로 봐야 할 것은 “새 배포가 실제로 생성됐는가”와 “그 배포가 production에 붙었는가”다.</p>

<p>다음 단계는 여기서 이어 보면 된다.</p>

<p><a href="/ko/blog/cloudflare-pages-redeploy-after-settings-change/">설정 변경 후 다시 배포할 때 체크할 순서</a></p>
