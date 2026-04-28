# AI_CONTEXT.md

## Project identity

This repository is for the public-facing website for **Level & Anvil** at **levelandanvil.com**.

This is a customer-facing business website, not an internal operations app.
Do not treat this project like a SaaS dashboard unless explicitly requested.

The purpose of this site is to:
- present the company clearly and professionally
- build trust with homeowners, property owners, and better-fit clients
- explain services in plain language
- generate leads through contact, quote, or consultation CTAs
- support credibility, discoverability, and conversion

## Business context

Level & Anvil is a small business focused on practical, high-value property work, consulting, and handyman work.
The brand sits between:
- skilled repair and remodeling work
- restoration and modernization thinking
- systems-minded consulting and problem solving

The company should be presented as capable, thoughtful, and trustworthy.
It should not sound corporate, overbuilt, or like a venture-backed software company.

## Positioning

The website should communicate a mix of:
- repair strategy
- restoration
- modernization
- practical problem solving
- high-accountability small business service

When in doubt, favor language that sounds:
- grounded
- clear
- competent
- professional
- straightforward

Avoid language that sounds:
- hype-driven
- vague
- overly trendy
- startup-branded
- fake-premium
- overly salesy

## Site goals

Prioritize the following outcomes:
1. clear explanation of what the business does
2. trust and credibility
3. easy contact and next steps
4. mobile usability
5. strong local/service SEO
6. fast load times and maintainable code

## Development philosophy

Make small, safe, production-friendly improvements.

Prefer:
- surgical edits
- clean incremental improvements
- readability
- maintainability
- preserving working code
- improving UX, clarity, and conversion without overengineering

Avoid:
- broad rewrites
- speculative refactors
- adding complexity without a clear benefit
- introducing app-style systems into a marketing site
- replacing working code just because a different pattern exists

## What this repo is not

Unless explicitly requested, do not add or assume:
- admin dashboards
- user auth systems
- customer accounts
- complex backend workflows
- database-driven app features
- fake or placeholder integrations presented as real
- heavy product logic
- overbuilt UI systems

This site should remain a lean customer-facing website unless the user explicitly chooses to expand it.

## Brand and voice

Write in a tone that is:
- clear
- direct
- professional
- warm but not gushy
- competent
- plainspoken

Prefer:
- short paragraphs
- concrete wording
- useful headers
- service clarity
- direct CTAs

Avoid:
- buzzwords
- generic AI-marketing phrasing
- exaggerated claims
- filler copy
- long blocks of text that reduce readability

## Trust and factuality rules

Do not invent or exaggerate:
- certifications
- licenses
- affiliations
- awards
- partnerships
- testimonials
- reviews
- project counts
- years in business
- service areas
- case studies
- guarantees

Only use claims that are:
- already present in the repo
- explicitly provided by the user
- clearly supported by existing content

If credibility content is missing, improve structure and presentation rather than making up proof.

## UX priorities

Every change should support at least one of these:
- better clarity
- better trust
- better conversion
- better mobile usability
- better accessibility
- better performance

Prefer pages that clearly answer:
- what do you do
- who do you help
- why should someone trust you
- what should they do next

## Content priorities

When working on page copy, prioritize:
1. clear headline
2. clear explanation of service/value
3. trust-building support
4. easy next step
5. concise readable structure

Do not add extra sections just to make a page feel bigger.
Do not use vague filler just to improve "marketing tone."

## CTA guidance

CTA language should be simple and practical.

Good patterns:
- Get in touch
- Request a quote
- Ask about your project
- See services
- Start the conversation

Avoid gimmicky or aggressive CTA language.

## Design and UI guidance

The visual style should feel:
- clean
- confident
- simple
- trustworthy
- polished
- readable

Prefer:
- consistent spacing
- obvious hierarchy
- strong readability
- clear buttons
- restrained use of effects
- layouts that work well on mobile

Avoid:
- clutter
- unnecessary animation
- oversized UI patterns
- inconsistent spacing
- weak contrast
- tiny tap targets
- decorative elements that slow down the page without adding value

## Accessibility

Preserve or improve accessibility where possible:
- use semantic HTML
- ensure form controls have labels
- preserve keyboard accessibility
- keep contrast readable
- do not rely on color alone for meaning
- keep interactive elements clear and usable on mobile

## SEO guidance

The site should support search visibility without becoming robotic.

Prioritize:
- strong page titles
- useful meta descriptions
- one clear H1 per page
- descriptive headings
- natural service and location language
- crawlable text content
- internal links where useful and natural

Avoid:
- keyword stuffing
- duplicate metadata systems
- fake FAQ schema
- fake review schema
- invented business metadata

Only add structured data that is accurate and supported.

### Crawling (`robots.txt` and `sitemap.xml`)

- **Production base URL:** `https://levelandanvil.com`. This repo is static HTML with no build step, so canonical URLs are maintained in HTML (`<link rel="canonical">`, `og:url`), `sitemap.xml`, `robots.txt`, and JSON-LD—not via `SITE_URL` / `NEXT_PUBLIC_*` env vars (those apply when a framework or CI substitutes values at build time).
- **Deploy layout:** `robots.txt` and `sitemap.xml` live at the **repository root** next to `index.html`, so they are served at `/robots.txt` and `/sitemap.xml` on typical static hosts (including Vercel).
- **Canonical URL shape (required):** `vercel.json` sets **`cleanUrls: true`** and **`trailingSlash: false`**. Treat **extensionless paths** as canonical:
  - Homepage: `https://levelandanvil.com/` (trailing slash only on the root).
  - Other pages: `https://levelandanvil.com/services`, `/about`, `/schedule`, etc.—**no** `.html` in links, sitemap, canonical tags, or Open Graph `og:url`.
  - Source files remain `*.html` on disk; Vercel serves them at clean paths.
- **Internal links:** Use **root-absolute paths** (for example `href="/services"`, `href="/"`), not `services.html`.
- **JSON-LD:** `LocalBusiness` **`@id`** and **`url`** use the organization homepage **`https://levelandanvil.com/`** (with trailing slash). **`image`** stays `https://levelandanvil.com/images/...`.
- **Adding a page:** Add `your-page.html`, link it with `href="/your-page"`, add `<url><loc>https://levelandanvil.com/your-page</loc></url>` to `sitemap.xml`, and set canonical/`og:url` on that page to the same URL.
- **Verification:** After deploy, open `https://levelandanvil.com/robots.txt` and `https://levelandanvil.com/sitemap.xml`. Optionally submit the sitemap URL in Google Search Console.

## Performance guidance

Favor performance-conscious choices.

Prefer:
- lightweight solutions
- optimized images
- small dependencies
- simple interactions
- server-friendly patterns where appropriate

Avoid:
- large unnecessary libraries
- client-side complexity without clear value
- visual effects that hurt performance
- bloated components for simple content sections

## Code guidance

Prefer code that is:
- readable
- maintainable
- conservative
- easy for a small business owner to live with

Do not introduce new patterns unless they clearly improve the codebase.
Do not perform unrelated cleanup unless it directly helps the requested task.

When changing code:
- inspect relevant files first
- identify the smallest necessary change
- touch the fewest files possible
- preserve existing architecture unless there is a real problem to solve

## Content safety for business claims

Be especially careful with:
- insurance wording
- licensing wording
- scope-of-service claims
- pricing language
- availability claims
- geographic coverage claims
- legal or permit-related statements

Do not overstate business capabilities.
Do not make promises the business may not want to legally or operationally guarantee.

## Suggested workflow for AI edits

Before making changes:
1. inspect the relevant files
2. identify the smallest likely change set
3. explain what is being changed
4. avoid touching unrelated code

After making changes:
1. summarize what changed
2. list files changed
3. note assumptions
4. note any items needing manual review
5. mention any unverified behavior

## Default decision rules

If there is ambiguity, choose the option that is:
- simpler
- more honest
- easier to maintain
- less risky in production
- more helpful to a real customer visiting the site

If a change would add major complexity, do not do it unless explicitly requested.
If working code already solves the problem adequately, prefer targeted improvement over replacement.

## Short project summary for AI agents

This is a lean, customer-facing website for Level & Anvil.
The site should present the business clearly, build trust, rank well locally, and convert visitors into inquiries.
Keep changes small, practical, readable, and production-safe.
Do not turn the site into a complex app unless explicitly requested.