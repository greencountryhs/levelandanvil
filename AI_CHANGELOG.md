# AI Change Log

Tracks meaningful AI-assisted changes in this repository.

## Entry Template

### Date
YYYY-MM-DD

### Task
Short task name

### Files Changed
- path/to/file.ext
- path/to/another-file.ext

### Summary of Changes
- What changed
- Why it changed
- User-visible impact (if any)

### Risks / Follow-up
- Any known risk, assumption, or item needing manual review
- `None` if no known follow-up

---

## Entries

<!-- Add newest entries at the top under this line -->

### Date
2026-04-21

### Task
Refine homepage final CTA hierarchy and project-fit action links

### Files Changed
- index.html
- styles.css

### Summary of Changes
- Updated homepage final CTA copy for stronger trust-focused framing and added helper line clarifying direct human contact.
- Added subtle panel styling to final CTA container via new `.homepage-final-cta-panel` class (slightly lighter background, low-opacity border, soft shadow) while preserving layout.
- Simplified project-fit block by removing buttons and converting inline phrases to actionable links (`Call, text` -> `tel:9188846615`, `email us` -> `schedule.html`) using `.project-fit-links` styling for consistent link behavior.

### Risks / Follow-up
- Project-fit link styling intentionally underlines linked phrases for clarity/accessibility; if a less prominent treatment is preferred, underline intensity can be tuned later.

### Date
2026-04-21

### Task
Create SEO-focused drywall repair service page

### Files Changed
- drywall-repair.html

### Summary of Changes
- Added new `drywall-repair.html` page using the existing service-page shell and spacing patterns without redesign.
- Implemented requested page structure: hero, common drywall problems, what we handle, why homeowners call us, real-work placeholder, and final CTA section.
- Added required SEO basics (`Drywall Repair Tulsa | Level & Anvil` title and requested meta description) and used Tulsa naturally across page content.

### Risks / Follow-up
- Page is created and ready for linking; no nav or cross-page links were added in this task per scope.

### Date
2026-04-21

### Task
Polish homepage trust strip alignment and review card click cue

### Files Changed
- styles.css

### Summary of Changes
- Updated trust-strip base flex alignment to center across all screen sizes for cleaner wrapping and balanced presentation.
- Tuned trust-strip spacing with controlled two-axis gap and centered trust-item text for better visual consistency.
- Kept existing clickable review-card affordance and added one subtle extra cue: reviewer meta text shifts to a lighter gold on hover.

### Risks / Follow-up
- Review-card hover cue relies on existing inline meta color and uses `!important` for reliable override; behavior remains subtle and layout-safe.

### Date
2026-04-21

### Task
Add subtle affordance for clickable homepage review cards

### Files Changed
- styles.css

### Summary of Changes
- Added targeted CSS for clickable review-card pattern used on homepage review links.
- Introduced pointer cursor and smooth transition (`transform` + `box-shadow`) in base state.
- Added subtle hover treatment (small lift and soft shadow increase) to improve click affordance without changing layout.

### Risks / Follow-up
- Uses `:has()` for precise targeting; supported in modern browsers. If legacy browser support becomes a requirement, a fallback selector may be needed.

### Date
2026-04-21

### Task
Improve mobile trust-strip wrapping alignment

### Files Changed
- styles.css

### Summary of Changes
- Added a mobile-only override for `.credibility-strip .container` to use `justify-content: center` at `max-width: 850px`.
- Preserved desktop trust-strip behavior (`space-between`) and existing wrapping/gap styles.
- This improves visual balance when trust items wrap on smaller screens.

### Risks / Follow-up
- No desktop layout changes expected; mobile centering may slightly alter exact horizontal spacing distribution by design.

### Date
2026-04-21

### Task
Homepage and About cleanup for experience, fit CTA, stars, and nonprofit naming

### Files Changed
- index.html
- about.html

### Summary of Changes
- Standardized remaining `25`/`25+` experience references to `20+` wording in homepage and About lead/meta text.
- Added actionable CTA buttons under the homepage `Not sure if your project fits?` block (`Call or Text for a Quote`, `Contact Us`) while preserving existing section styling.
- Added visible five-star treatment to each homepage review card without changing review quote text.
- Updated nonprofit display name from `Tulsa Area Forest School` to `Tulsa Forest School` on homepage and About page.

### Risks / Follow-up
- Forest school link URL remains unchanged (`tulsaareaforestschool.org`) by design; only visible naming was updated.

### Date
2026-04-21

### Task
Update shared footer text and About page community section

### Files Changed
- about.html
- index.html
- services.html
- repairs.html
- structural.html
- remodels.html
- schedule.html
- estimator.html
- service-area.html
- reviews.html
- maintenance.html

### Summary of Changes
- Added `Licensed and Insured` to the footer company list across pages.
- Replaced the footer service-area sentence with: `Residential repair, drywall, restoration, and small-project help across Tulsa and Green Country.`
- Added the Forest School community block to `about.html` below the first CTA in the bio section flow.

### Risks / Follow-up
- Footer text was updated sitewide where the shared footer pattern exists to keep messaging consistent.

### Date
2026-04-21

### Task
Add human-contact supporting CTA language

### Files Changed
- about.html
- services.html
- repairs.html
- structural.html
- remodels.html

### Summary of Changes
- Added concise supporting CTA lines near natural contact prompts to reinforce direct, human communication without changing primary CTAs.
- Introduced requested messaging variants (`Text Jon about your project`, `Chat with a real person (no bots)`, `Call or text Jon directly — no call centers, no bots.`) across five core service/about pages.
- Kept additions minimal and localized to avoid clutter and preserve existing hierarchy.

### Risks / Follow-up
- Supporting lines use plain ASCII punctuation for consistency with existing page copy.

### Date
2026-04-21

### Task
Homepage trust and section-flow restructuring

### Files Changed
- index.html

### Summary of Changes
- Updated the hero trust strip bullets to the new requested phrasing and sequence.
- Reordered homepage section flow so services are followed by two new trust/fit sections, then reviews, then final CTA, with Forest School moved below the final CTA.
- Added new sections: `Why Homeowners Choose Level & Anvil` and `What We&rsquo;re Best Fit For` with requested bullet content and supporting lines.
- Removed `The Level & Anvil Way` and `Budget Transparency` sections entirely.

### Risks / Follow-up
- Section flow and copy are updated as requested without design changes; if desired later, visual emphasis can be tuned in a separate styling pass.

### Date
2026-04-21

### Task
Broaden maintenance page property language

### Files Changed
- maintenance.html

### Summary of Changes
- Updated maintenance hero subheadline to broader property language for inclusivity.
- Rewrote the `Who It&rsquo;s For` bullets to remove over-specific property categories while keeping practical clarity.
- Added a concise CTA helper line: `Text "Maintenance" to get started`.

### Risks / Follow-up
- Tone is intentionally broad and flexible; if needed, future edits can tune specificity based on actual lead quality.

### Date
2026-04-21

### Task
Add light discoverability links for maintenance page

### Files Changed
- services.html

### Summary of Changes
- Added one low-prominence supporting card on `services.html` beneath the primary three service pillars with concise optional-maintenance messaging and a link to `maintenance.html`.
- Added a single optional footer `Services` link on `services.html` for `Home Maintenance Plan` without altering primary nav or homepage prominence.
- Kept maintenance positioned as secondary support service, not a core service pillar.

### Risks / Follow-up
- Footer service link was added only on `services.html` (not globally) to keep promotion intentionally limited; global footer consistency can be revisited in a separate task if desired.

### Date
2026-04-21

### Task
Create lightweight home maintenance service page

### Files Changed
- maintenance.html

### Summary of Changes
- Added new `maintenance.html` page using the existing service-page shell and styling conventions (hero, content sections, centered CTA, sticky mobile CTA, shared footer block).
- Implemented requested maintenance-plan messaging with practical, homeowner-friendly tone and no pricing or tier complexity.
- Structured CTAs to keep the page lightweight and contact-focused: primary `Contact Us` to `schedule.html`, secondary `Call or Text for a Quote` to `tel:9188846615`.

### Risks / Follow-up
- No global navigation links were added in this task per scope; page is ready for routing/linking when you decide where it should be surfaced.

### Date
2026-04-21

### Task
Remove browse-away CTAs from contact page

### Files Changed
- schedule.html

### Summary of Changes
- Removed all `View Services` secondary CTA buttons from `schedule.html` in the main hero CTA row and footer CTA block.
- Kept the page focused on contact-only conversion actions: Tally form submission and `Call or Text for a Quote` (`tel:9188846615`).
- Preserved existing section structure and spacing with minimal edits.

### Risks / Follow-up
- `schedule.html` still includes global nav links to site sections (intentional, unchanged). Main in-page CTAs are now contact-focused only.

### Date
2026-04-21

### Task
Fix mobile sticky CTA visibility and label

### Files Changed
- styles.css
- index.html
- about.html
- services.html
- repairs.html
- structural.html
- remodels.html
- reviews.html
- service-area.html
- schedule.html
- estimator.html

### Summary of Changes
- Diagnosed sticky CTA visibility issue as reliance on a single width-based media query (`max-width: 850px`) where some mobile contexts were not reliably triggering that rule, leaving base `display: none`.
- Improved sticky visibility reliability by keeping existing mobile breakpoint behavior and adding a touch-device fallback media query (`hover: none` and `pointer: coarse`) to show the bar in mobile/touch contexts.
- Added safe-area aware bottom padding for the sticky bar and mobile/touch bottom body padding to reduce content overlap.
- Standardized sticky CTA label sitewide from `Text or Get a Quote` to `Contact Us` while keeping route `schedule.html`.

### Risks / Follow-up
- On some touch-capable larger devices, sticky CTA may appear by design due to touch fallback query; this is intentional to favor mobile/touch visibility reliability.

### Date
2026-04-21

### Task
UX cleanup for nav, mobile CTA, and contact form presentation

### Files Changed
- index.html
- about.html
- services.html
- repairs.html
- structural.html
- remodels.html
- reviews.html
- service-area.html
- schedule.html
- estimator.html

### Summary of Changes
- Added clear `Contact` links to both desktop header navigation and mobile hamburger navigation across all primary site pages, routing to `schedule.html`.
- Standardized mobile sticky CTA sitewide to `Text or Get a Quote` and routed it to `schedule.html` instead of direct `tel:` links.
- Cleaned `schedule.html` form presentation by removing duplicate custom title/subtitle above the Tally embed and adding a minimal light wrapper to improve embedded text readability against the dark page section.
- Improved visual centering of the bottom CTA lead copy on `reviews.html` with constrained width and centered spacing.

### Risks / Follow-up
- Confirm sticky CTA destination behavior on mobile devices to ensure expected scroll and page-load experience when landing on `schedule.html`.
- Tally iframe internal styling is third-party controlled; wrapper-based readability improvement is intentionally minimal and non-brittle.

### Date
2026-04-21

### Task
Embed Tally form on contact page

### Files Changed
- schedule.html

### Summary of Changes
- Embedded the provided Tally form code in the main contact content area of `schedule.html` below the existing phone-first CTA row.
- Added a short form heading and intro line to support the secondary form-first path while preserving the primary call/text conversion path.
- Kept structure and styling intact by using the existing main section container and a full-width responsive wrapper.

### Risks / Follow-up
- Confirm in-browser that Tally loads and dynamic height behavior works as expected across desktop/mobile.

### Date
2026-04-21

### Task
Focused punctuation and reviews cleanup pass

### Files Changed
- index.html
- reviews.html
- structural.html
- repairs.html
- service-area.html
- remodels.html

### Summary of Changes
- Cleaned accidental punctuation/symbol artifacts (`?` and placeholder markers) in hero/support bullets, service lists, structural key-benefit bullets, and review metadata.
- Updated review framing details per request (Nathan label, Celinda line punctuation, Ken duplicate removal, Michael service label update) and added visible gold 5-star rows on `reviews.html`.
- Made homepage review cards clickable to `reviews.html`, softened limiting size/scope wording on repair-related copy, and applied the service-area sentence update.

### Risks / Follow-up
- No `Brandy E.` review instance was present in current `reviews.html`, so no direct Brandy-specific edit was possible.
- Some question marks were intentionally retained where they are valid sentence punctuation in headings/body copy.

### Date
2026-04-21

### Task
Final QA consistency fixes for route-safe contact pages

### Files Changed
- schedule.html
- estimator.html

### Summary of Changes
- Fixed low-risk CTA consistency issues on route-safe pages by removing duplicate/conflicting secondary actions.
- Updated `schedule.html` to use stable contact-page wording and replaced self-referential secondary CTAs with `View Services` links where appropriate.
- Updated `estimator.html` hero and mobile CTA to restore clear primary/secondary distinction (`Call or Text for a Quote` primary, `Contact Us` secondary).

### Risks / Follow-up
- `schedule.html` intentionally keeps one active `Contact Us` link in footer internal links to preserve page context while avoiding duplicate entries.

### Date
2026-04-21

### Task
Improve service area page for local trust and repair-fit clarity

### Files Changed
- service-area.html

### Summary of Changes
- Rewrote the service-area hero and intro copy to clearly connect Tulsa-area coverage with repair-first homeowner services.
- Updated local section heading and supporting copy to read more naturally while preserving existing location list structure.
- Reframed the right-side support card toward project-fit clarity and practical homeowner expectations, with CTA wording aligned to current contact flow.

### Risks / Follow-up
- Existing structure uses a static location list and one support card; richer area-specific service detail would require additional sections in a future scoped pass.

### Date
2026-04-21

### Task
Reposition remodels page for focused homeowner project fit

### Files Changed
- remodels.html

### Summary of Changes
- Rewrote hero and supporting copy to frame remodel work as focused, practical, and secondary to the core repair-first business direction.
- Updated service and fit descriptions to emphasize small remodels, restoration-minded older-home updates, and repair-informed decision making.
- Kept existing page structure, links, and CTA destinations while shifting tone away from abstract/consulting-heavy framing.

### Risks / Follow-up
- Existing page architecture still groups a wide range of remodel project types together; tighter segmentation would require additional sections or dedicated pages.

### Date
2026-04-21

### Task
Add compact Thumbtack trust section to reviews page

### Files Changed
- reviews.html

### Summary of Changes
- Added one compact "Earlier Work & Long-Term Client Feedback" section to `reviews.html` between the existing long-form testimonial and the page CTA.
- Included four selected verified Thumbtack excerpts focused on roof repair, handyman reliability, speed/effectiveness, and repeat-hire trust signals.
- Kept the new content scannable with short excerpts, names/initials, service type, date context, and verified labels, without modifying existing review content blocks.

### Risks / Follow-up
- One selected review is pressure-washing focused; retained because it provides a strong repeat-hire trust signal despite lower repair relevance.

### Date
2026-04-21

### Task
Improve reviews page framing for homeowner trust signals

### Files Changed
- reviews.html

### Summary of Changes
- Strengthened reviews intro copy to emphasize Tulsa-area trust, real project context, and homeowner-relevant outcomes.
- Added light contextual framing labels above testimonials to clarify work types (repairs, rentals, troubleshooting, cost/value) without changing any quote text.
- Updated bottom CTA lead copy to a more practical, low-friction homeowner action prompt while keeping primary/secondary CTA labels and routes intact.

### Risks / Follow-up
- Current layout presents one long-form review as a single large block; clearer scannability would require structural redesign beyond this scope.

### Date
2026-04-21

### Task
Rewrite about page for homeowner trust and repair-fit clarity

### Files Changed
- about.html

### Summary of Changes
- Rewrote About page intro and main body copy to emphasize practical homeowner trust signals: 25+ years in trades, direct involvement, root-cause problem solving, and honest scope.
- Shifted tone from abstract philosophy toward clear fit messaging for older homes, repeated/tricky repairs, and repair-first projects.
- Kept existing layout intact and added a simple secondary in-content `Contact Us` path while preserving primary call/text CTA.

### Risks / Follow-up
- Current structure is intentionally concise; if deeper credibility proof (case snapshots, process bullets) is needed later, add within a future scoped content pass.

### Date
2026-04-21

### Task
Reposition structural page for serious homeowner repair concerns

### Files Changed
- structural.html

### Summary of Changes
- Rewrote hero and core service messaging to address practical homeowner concerns (water damage, ceiling issues, settling/sagging, and corrective work coordination) in clearer language.
- Updated both structural and water columns to focus on root-cause clarity, practical outcomes, and reassuring next steps rather than consultant-heavy framing.
- Refined bottom CTA copy to be more approachable while keeping existing layout and conversion links unchanged.

### Risks / Follow-up
- Existing two-column structure still groups many concerns under broad categories; deeper service segmentation would require additional sections or dedicated pages in a future pass.

### Date
2026-04-21

### Task
Reposition repairs page for high-intent homeowner leads

### Files Changed
- repairs.html

### Summary of Changes
- Rewrote the repairs page hero and core service copy to emphasize practical homeowner repair needs in Tulsa.
- Updated service list language to clearly call out drywall/texture matching, door work, trim/finish carpentry, punch-list repairs, and troubleshooting.
- Revised small-project CTA wording to align with the contact-first conversion path while preserving existing page structure and links.

### Risks / Follow-up
- The current page structure supports one main service list block; deeper category detail would require additional sections or dedicated service pages in a future pass.

### Date
2026-04-21

### Task
Reposition services hub for repair-first homeowner clarity

### Files Changed
- services.html

### Summary of Changes
- Rewrote `services.html` intro and service pillar cards to prioritize homeowner-friendly residential repair categories before broader advanced framing.
- Updated service card headings/descriptions and mapped each card to the closest existing destination page (`repairs.html`, `structural.html`, `remodels.html`) without adding new routes.
- Refined the "How to Start" copy to remove leftover scheduling/evaluation language and align with contact-first lead flow.

### Risks / Follow-up
- Specific category labels (drywall/doors/water-damage/historic repair) still point to broader existing pages; dedicated category landing pages may be added later for tighter intent match.

### Date
2026-04-21

### Task
Rewrite homepage services cards for repair-first clarity

### Files Changed
- index.html

### Summary of Changes
- Updated the homepage services section heading and three service card labels/descriptions to emphasize homeowner-friendly repair categories.
- Kept the existing three-card layout, section order, and design structure while clarifying service intent for Tulsa residential lead generation.
- Updated service card link text and destinations to map clearly to existing pages (`repairs.html`, `structural.html`) without introducing new routes.

### Risks / Follow-up
- Category labels are now more specific than current destination pages; consider future dedicated landing pages for drywall/doors/water-damage categories if deeper ad/SEO targeting is needed.

### Date
2026-04-21

### Task
Rewrite homepage hero for Tulsa repair clarity

### Files Changed
- index.html

### Summary of Changes
- Updated homepage hero copy to lead with Tulsa residential repair and small-project positioning while preserving layout and CTA structure.
- Rewrote the adjacent trust strip to emphasize practical homeowner trust signals: years in trades, licensing, insurance, local service area, and reviews.
- Kept primary and secondary hero CTA labels and destinations unchanged to maintain the standardized contact flow.

### Risks / Follow-up
- Quick visual check recommended on desktop/mobile to confirm trust-strip items still wrap cleanly with five entries in the current layout.

### Date
2026-04-21

### Task
Final CTA normalization and footer contact cleanup

### Files Changed
- index.html
- services.html
- repairs.html
- structural.html
- remodels.html
- renovation-consultation.html
- process.html
- about.html
- service-area.html
- reviews.html
- schedule.html
- estimator.html

### Summary of Changes
- Standardized CTA language to the final model: primary `Call or Text for a Quote` (`tel:9188846615`) and secondary `Contact Us` (`schedule.html`).
- Replaced remaining evaluation/scheduling/availability wording and CTA-style consultation labels with contact-first wording.
- Reapplied footer contact blocks across the site to ensure no fake form UI remains and both footer actions are consistent.

### Risks / Follow-up
- `Renovation Consultation` remains in service taxonomy and page titles intentionally.
- A few non-CTA narrative references to planning/consultation context remain by design and may be simplified later if desired.

### Date
2026-04-21

### Task
Standardize CTA language and replace non-functional footer form

### Files Changed
- index.html
- services.html
- repairs.html
- structural.html
- remodels.html
- renovation-consultation.html
- process.html
- about.html
- service-area.html
- reviews.html
- schedule.html
- estimator.html

### Summary of Changes
- Replaced non-functional footer form UI on site pages with a clear contact CTA block using the same layout container (`.footer-cta-form`) and two explicit actions.
- Standardized contact paths so primary CTA text maps to `tel:9188846615` (`Call or Text for a Quote`) and secondary CTA text maps to `schedule.html` (`Get a Quote`/`Contact Us`).
- Updated remaining CTA-style scheduling/availability wording to contact-first wording and kept `schedule.html` as the route-safe main contact page.

### Risks / Follow-up
- `Renovation Consultation` remains as a service title/link by design; if desired, a separate service naming pass can further simplify vocabulary.
- Recommend one manual click-through pass on mobile and desktop to confirm no page has competing primary CTAs above the fold.

### Date
2026-04-21

### Task
Remove calendar-based scheduling flow

### Files Changed
- index.html
- services.html
- repairs.html
- structural.html
- remodels.html
- renovation-consultation.html
- process.html
- about.html
- service-area.html
- reviews.html
- estimator.html
- schedule.html

### Summary of Changes
- Replaced all links to `schedule.html` with direct quote/contact paths (`tel:9188846615`) so users are no longer directed to a booking route.
- Replaced scheduling-first CTA text with contact-first alternatives such as "Call or Text for a Quote" and "Contact Us".
- Removed Calendly-based scheduling content by converting `schedule.html` into a route-safe contact handoff page with quote and contact options.

### Risks / Follow-up
- Some links now use direct phone intent; manually verify behavior on desktop/mobile to ensure desired UX.
- If a dedicated contact page is added later, update phone-intent links to that page for a fuller non-phone intake path.

### Date
2026-04-21

### Task
Remove exit-intent guide popup

### Files Changed
- index.html
- services.html
- repairs.html
- structural.html
- remodels.html
- renovation-consultation.html
- process.html
- about.html
- service-area.html
- schedule.html
- reviews.html
- estimator.html
- styles.css
- js/exit-intent.js (deleted)

### Summary of Changes
- Removed the `js/exit-intent.js` script include from all user-facing HTML pages so the popup no longer initializes.
- Removed `.exit-popup-*` CSS rules from `styles.css` that styled the injected overlay/modal.
- Deleted `js/exit-intent.js`, which handled mouseleave trigger, DOM injection, localStorage popup gating, and guide lead form behavior.

### Risks / Follow-up
- Verify in-browser on desktop and mobile that no popup or overlay appears and there are no console 404s for the removed script.
- `None` for functional regressions expected from this isolated removal.

### Date
2026-04-21

### Task
De-link and retire estimator user path

### Files Changed
- index.html
- services.html
- repairs.html
- structural.html
- remodels.html
- renovation-consultation.html
- process.html
- about.html
- service-area.html
- schedule.html
- reviews.html
- estimator.html

### Summary of Changes
- Removed user-facing estimator links from global navigation patterns and replaced estimator-focused CTAs with existing quote/service paths.
- Updated page-level estimator copy/buttons to route users to `schedule.html` (`Get a Quote`) or `services.html` (`View Services`) to keep conversion flow intact.
- Replaced `estimator.html` interactive tool with a route-safe handoff page so direct visits are redirected in-page to quote/services actions.

### Risks / Follow-up
- Some pages still use "Schedule an Evaluation" as primary CTA text; this remains functional but may need a separate sitewide wording standardization pass.
- Manually click through all primary pages to confirm no estimator references remain in rendered UI after deployment.
