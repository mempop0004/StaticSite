---
title: 'How to generate boilerplate code safely with AI'
description: 'Generating boilerplate code with AI saves hours, but blindly copy-pasting creates hidden bugs. Learn the exact criteria for safely generating and verifying repetitive code.'
blogId: 'blog-ai-for-developers'
stage: 'pillar'
purpose: 'problem-fix'
searchIntent: 'fix'
readerState: 'stuck'
sectionStyle: 'checklist'
imageNeed: 'cover-only'
tags:
  - 'AI coding'
  - 'boilerplate'
  - 'GitHub Copilot'
  - 'ChatGPT'
  - 'code generation'
pubDate: '2026-04-17T11:21:35+09:00'
relatedSlugs:
  - 'questions-to-ask-ai-first-when-reading-unfamiliar-legacy-code'
updatedDate: '2026-04-17T11:21:35+09:00'
heroImage: '../../../assets/generated/post_blog_002_post_006-slot-001.png'
heroImageAlt: 'Editorial hero image for the core concept of this post. How to generate boilerplate code safely with AI'
---
<p>It's 2 PM, and you've just been handed a ticket to create 15 CRUD endpoints and their corresponding unit tests. It's the kind of mindless, repetitive boilerplate work that developers dread. Naturally, you open your AI assistant, prompt it to "generate the endpoints," copy the result, paste it into your editor, and hit run. Immediately, the compiler throws five errors. You spend the next hour fixing hallucinations, mismatched types, and weird variable names.</p>

<p>You thought AI would save you time, but you ended up spending more time debugging its output than it would have taken to write the code from scratch. AI is blazingly fast at writing boilerplate, but you must treat its output exactly like code written by a junior developer who has never read your project's internal wiki. In this post, I'll share the exact criteria I use to safely generate and integrate repetitive code without polluting the architecture.</p>

<h2>1. The trap of "Blind Copy-Pasting"</h2>
<p>The visible problem with AI code generation is that the AI might hallucinate a non-existent method or use a deprecated library version. You can usually catch these quickly.</p>
<p>But the <em>real</em> danger is much more insidious: boilerplate code often dictates the architectural shape of your entire feature. If the AI hallucinates an error-handling pattern that doesn't match your project's standards—and you blindly paste it across 20 files—you haven't just added code. You've injected architectural tech debt. Six months from now, when you need to update the error logging format, you'll have to manually hunt down and refactor all 20 of those endpoints.</p>

<h2>2. Provide the blueprint, don't ask for a design</h2>
<p>The biggest mistake developers make is treating the AI like a senior software architect. They type, "Write a user controller." The AI then has to guess your preferred framework, your ORM of choice, and your team's specific error-handling style.</p>
<p>Instead, you should provide a verified "Golden Template" from your own codebase. Feed the AI an existing, perfectly written `ProductController` and say: "Create a `UserController` following this exact same pattern, naming convention, and error handling." By doing this, you remove all guesswork. The AI stops trying to be an architect and starts acting as a high-speed typist constrained by your rules.</p>

<h2>3. My 3 criteria for verifying AI-generated boilerplate</h2>
<p>Before you ever type `git commit`, run the generated code through these three non-negotiable checks:</p>
<ul>
  <li><strong>Dependency Check:</strong> Did the AI silently invent a helper utility or import a package that doesn't exist in your `package.json`? (e.g., importing `lodash` when your team only uses native array methods).</li>
  <li><strong>Naming Convention Match:</strong> Does the generated code follow your project's specific casing (e.g., using `camelCase` for variables but `PascalCase` for classes) and suffix rules (e.g., calling it `UserService` instead of `UserManager`)?</li>
  <li><strong>Error Handling Boundary:</strong> Does the new code catch and format exceptions exactly the same way your custom global error middleware expects?</li>
</ul>

<h2>4. Let the compiler do the heavy lifting</h2>
<p>If you use a statically typed language like TypeScript, Rust, or Go, use it as an unbreakable shield. Don't ask the AI to generate the implementation first. Generate (or manually write) the interface or type definitions first, and manually verify them. Once your types are locked in, ask the AI to implement the boilerplate that satisfies those exact types. If the AI hallucinates a field or returns the wrong type, the compiler will instantly draw a red squiggly line under it.</p>

<h2>5. The "Safe Boilerplate" Prompt Template</h2>
<p>Stop ad-hoc prompting. Use this exact template to generate safe, consistent boilerplate:</p>
<blockquote>
<p>I need to create a new [Component/Endpoint] for the [Entity Name] domain.<br><br>
Please use the provided code snippet as your absolute structural template.<br>
1. Keep the exact same import structures and error handling logic.<br>
2. Only modify the domain-specific logic to fit [Entity Name].<br>
3. Do not introduce any new external libraries or helper functions.<br>
<br>
[Paste your Golden Template Code Here]</p>
</blockquote>

<h2>What to do first</h2>
<p>Open your current project and find the single most well-written, standard-compliant file in the codebase. Copy its contents, save it in a scratchpad as your "Golden Template," and use it alongside the prompt above the very next time you need to generate code.</p>
