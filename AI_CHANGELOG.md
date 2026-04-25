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
2026-04-25

### Task
Refine drywall repair page for high-intent conversion

### Files Changed
- drywall-repair.html

### Summary of Changes
- Tightened hero headline/lead to emphasize Tulsa drywall repair and clean blend-focused finish outcomes.
- Strengthened `Good Fit For` and repair-scope sections with problem-focused homeowner intent language (holes, water damage, ceilings, bad prior patches, texture mismatch, movement cracks).
- Updated 3-step approach wording to reinforce assess/cause -> proper repair prep -> texture/finish blending.
- Added requested image-support line, stronger trust framing with realistic texture-expectation language, and friction-reducing CTA helper lines about texting photos.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Refine repairs page for stronger repair-service positioning

### Files Changed
- repairs.html

### Summary of Changes
- Tightened hero headline and lead copy to emphasize Tulsa-focused residential repair scope (doors, drywall, trim, exterior repairs, punch-list work, and troubleshooting).
- Updated section headings and bullets to feel more repair-specific and less generic, including stronger older-home and exterior repair fit language.
- Refined punch-list/exterior support copy and trust section language, including a more natural maintenance-plan fit mention.
- Kept existing repair, carpentry, and fence images in place with minimal structure changes.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Restructure core service pages for conversion flow

### Files Changed
- services.html
- repairs.html
- remodels.html
- drywall-repair.html
- maintenance.html
- structural.html

### Summary of Changes
- Reworked content flow on six service pages to follow a clearer conversion sequence: service-specific intro, good-fit guidance, project/examples, three-step approach, trust block, and direct CTA.
- Added practical 3-step approach sections across pages (`Look at the issue`, `Explain the repair/project path`, `Complete the work cleanly and correctly`) with page-specific wording.
- Added or improved trust sections to reinforce experience, licensed/insured status, and practical problem-solving; included maintenance-plan references on repairs, drywall, and maintenance-related contexts.
- Standardized final CTA messaging to: `Tell us what needs fixed or improved, and we&rsquo;ll help you figure out the right next step.`
- Removed repetitive wording and replaced broad repeated phrasing with more page-specific copy, including eliminating all `small remodel` language on the targeted service pages.

### Risks / Follow-up
- No structural/layout overhaul was performed; follow-up copy tuning can be done later based on conversion analytics or lead-quality feedback.

### Date
2026-04-25

### Task
Audit and trim non-critical image priority loading

### Files Changed
- remodels.html

### Summary of Changes
- Audited all `loading=\"eager\"` and `fetchpriority=\"high\"` image usages.
- Kept intentional high-priority behavior for homepage hero preload and header logo images.
- Downgraded non-hero content image `kitchen-remodel-white-cabinets-island-tulsa.webp` on `remodels.html` from eager/high to lazy/async.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Improve content image layout stability

### Files Changed
- styles.css
- index.html
- about.html
- services.html
- repairs.html
- remodels.html

### Summary of Changes
- Added `height: auto;` to `.rhythm-img` in global stylesheet to preserve intrinsic proportions while images scale responsively.
- Kept global `aspect-ratio` unset to avoid distortion across mixed portrait/landscape project photos.
- Added intrinsic `width` and `height` attributes to all in-content `.rhythm-img` elements on key pages to reduce cumulative layout shift without altering layout structure.

### Risks / Follow-up
- None; sizing behavior remains responsive via existing `.rhythm-img { width: 100%; }`.

### Date
2026-04-25

### Task
Add natural internal links across key pages

### Files Changed
- services.html
- about.html
- index.html

### Summary of Changes
- Added contextual internal links from `services.html` to `repairs.html` and `remodels.html` near relevant project sections.
- Added a natural About-page sentence linking to `services.html` and `remodels.html`.
- Added homepage contextual links to `remodels.html` (project examples) and `services.html` (service categories) in existing content blocks.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Footer cleanup and repetitive copy reduction pass

### Files Changed
- index.html
- about.html
- services.html
- repairs.html
- structural.html
- remodels.html
- schedule.html
- estimator.html
- service-area.html
- reviews.html
- maintenance.html
- drywall-repair.html

### Summary of Changes
- Removed footer `Call or Text for a Quote` link from the bottom nav/footer tools list across primary pages.
- Replaced footer heading `Company` with `Credentials` and moved licensing detail into that footer column.
- Added placeholder license-number row (`OK License #: [Add Number]`) next to existing `Licensed and Insured` in footer to support final compliance once exact number is provided.
- Reduced repeated service-page helper copy by removing duplicate `Text Jon about your project` lines on service pages where it repeated.

### Risks / Follow-up
- Exact license number was not present in repository content; placeholder was used and should be replaced with the actual number.

### Date
2026-04-25

### Task
Add lightweight custom projects section

### Files Changed
- services.html

### Summary of Changes
- Added a new lightweight `Custom Projects` section to `services.html` using existing section/grid/card patterns.
- Inserted requested images: fireplace feature wall, TV feature wall, and yurt custom wood floor project.
- Added the exact requested intro line and concise 1–2 sentence descriptions for each project item.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Update About page bio imagery to project-based visuals

### Files Changed
- about.html

### Summary of Changes
- Removed the existing single bio image from the About page and replaced it with three requested project images.
- Added alt text focused on family-owned business context, custom woodworking, and precision craftsmanship.
- Added the requested supporting line below the image group while keeping layout simple and consistent with existing section styling.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Add fence project images to services and repairs pages

### Files Changed
- repairs.html
- services.html

### Summary of Changes
- Added cedar fence close-up image to `repairs.html` with grouped caption in the small-project/handyman context.
- Added wide backyard fence project image to `services.html` in a dedicated outdoor projects block with grouped caption.
- Used each fence image once in a distinct logical placement to avoid duplicate identical placement.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Add custom shower image section to bathroom remodeling content

### Files Changed
- remodels.html

### Summary of Changes
- Added a new bathroom remodeling section on `remodels.html` with consistent existing `section` and `grid-2` layout styles.
- Inserted `images/custom-tile-shower-installation-tulsa-ok.webp` with the exact requested alt text.
- Added the requested supporting line adjacent to the image content block.
- No homepage changes made.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Add open-concept remodel images to remodeling page

### Files Changed
- remodels.html

### Summary of Changes
- Extended the kitchen remodeling media block on `remodels.html` with requested open-concept supporting text.
- Added `images/open-concept-home-remodel-tulsa-ok.webp` using the requested alt text (using existing optimized WebP asset with same slug; no `.jpg` file exists in repo).
- Added optional secondary image `images/open-dining-living-area-remodel-flooring-tulsa.webp` with distinct alt text and clean two-column spacing.

### Risks / Follow-up
- If a `.jpg` is later added and specifically required, source path can be swapped directly.

### Date
2026-04-25

### Task
Add optimized kitchen remodel images on remodels page

### Files Changed
- remodels.html

### Summary of Changes
- Added a new kitchen remodeling image section near the top of `remodels.html`.
- Inserted primary image `images/kitchen-remodel-white-cabinets-island-tulsa.webp` with the exact requested alt text and high-priority loading attributes.
- Inserted secondary image `images/kitchen-remodel-gray-cabinets-wood-beam-tulsa.webp` with lazy loading.
- Added the requested supporting paragraph adjacent to the image block.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Add homepage before and after section

### Files Changed
- index.html

### Summary of Changes
- Inserted a new `Before & After` section directly below the homepage hero.
- Added two before images using the requested naming pattern (`kitchen-remodel-before-tulsa-1.webp`, `kitchen-remodel-before-tulsa-2.webp`) and one strong after image (`home-renovation-open-living-area-tulsa-ok.webp`).
- Added the exact provided shared caption and project summary paragraph while keeping layout simple with existing grid/image classes.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Set hero accessibility text for background image

### Files Changed
- index.html

### Summary of Changes
- Kept homepage hero image source as `/images/home-renovation-open-living-area-tulsa-ok.webp` and retained existing high-priority preload behavior.
- Added hero section accessibility label using `role="img"` and requested descriptive text via `aria-label`.
- No hero text, layout, or styling changes.

### Risks / Follow-up
- None.

### Date
2026-04-25

### Task
Standardize image loading behavior and formats

### Files Changed
- index.html
- about.html
- services.html
- repairs.html
- structural.html
- remodels.html
- schedule.html
- estimator.html
- service-area.html
- reviews.html
- maintenance.html
- drywall-repair.html

### Summary of Changes
- Added explicit image loading attributes across site image tags: header logos set to eager/high priority; footer and content images set to lazy loading.
- Added intrinsic dimensions on shared logo images to reduce layout shift risk while preserving existing CSS-driven sizing.
- Added hero image preload + high fetch priority in `index.html` for the homepage CSS background hero image.
- Updated `repairs.html` in-content image source from `images/carpentry.png` to available WebP asset `images/carpentry-work-miter-saw-cutting-wood.webp`.

### Risks / Follow-up
- `about.html` still references `images/HeadshotPiper.jpg`; no matching WebP asset with the same subject/name exists in the current `images` directory.

### Date
2026-04-25

### Task
Switch homepage hero image to SEO-optimized filename

### Files Changed
- styles.css

### Summary of Changes
- Updated `.homepage-hero` background image URL to `/images/home-renovation-open-living-area-tulsa-ok.webp`.
- Left hero layout, overlay, typography, and CTA structure unchanged.
- Verified old hero filename reference was removed from code.

### Risks / Follow-up
- Confirm final visual crop in production cache after deploy.

### Date
2026-04-23

### Task
Update homepage hero background image to 20220319_111846.webp

### Files Changed
- styles.css

### Summary of Changes
- Swapped `.homepage-hero` background image URL from `images/LAHeroV1.jpg` to `images/20220319_111846.webp` (no other CSS or copy changes).

### Risks / Follow-up
- None; confirm asset `images/20220319_111846.webp` deploys with the site.

### Date
2026-04-21

### Task
Improve homepage hero subtext readability on image background

### Files Changed
- styles.css

### Summary of Changes
- Increased homepage hero image overlay opacity slightly to improve text contrast over bright image areas.
- Added hero-specific subtext readability styling (`.homepage-hero .lead`) with lighter text color and subtle text shadow.
- Kept hero layout, copy, CTA structure, and section order unchanged.

### Risks / Follow-up
- If the image crop shifts across uncommon screen sizes, overlay strength can be fine-tuned slightly without structural changes.

### Date
2026-04-21

### Task
Add homepage hero background image with readable overlay

### Files Changed
- index.html
- styles.css

### Summary of Changes
- Added a small hero-specific class hook (`homepage-hero`) to the existing homepage hero section without changing structure, copy, or CTA layout.
- Applied `images/L&AHeroV1.JPG` as the hero background image using `background-size: cover`, centered positioning, and no-repeat.
- Added a subtle dark linear-gradient overlay for text contrast and a mobile-specific background-position adjustment for better crop behavior.

### Risks / Follow-up
- Overlay strength and mobile crop may benefit from minor visual tuning after live review on target devices.

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
