# Tech Arsenal Progress Log

This file records the shipped changes for the site. Each entry separates the human-facing changes from the Git diff summary, so future updates can be appended without digging through GitHub history.

Repository: https://github.com/eugeneeeee1123/tech-arsenal

## 2026-07-07 - v0.1 / First GitHub Push

Commit: `252a53a` (`252a53ade7e8bd62e28fab6e78562127bf59e9ea`)

Message: `Build tech arsenal site`

Push: `main` was pushed to `origin/main` at `https://github.com/eugeneeeee1123/tech-arsenal.git`.

### Changes

- Built the first complete Tech Arsenal static site and pushed it to a new GitHub repository.
- Created a five-page site structure: Home, Timeline, Notes, Compare, and Horizon.
- Rebuilt `index.html` from scratch around the "机器留痕" direction, focusing on personal device taste, memory, hand-feel, and long-term interest instead of generic "best gear" copy.
- Added shared navigation across the site with consistent labels: `home`, `timeline`, `notes`, `compare`, and `horizon`.
- Added a custom white spark icon asset for the site mark and removed the old template-button concept from the home header.
- Added a unified external stylesheet, `arsenal-pages.css`, to keep all pages visually consistent.
- Added `comparison-lab.html` as an interactive comparison page for shortlisted devices and tradeoffs.
- Added `arsenal-compare.js` to power the compare-page slot switching.
- Added `provenance.html` as the timeline/provenance page for how devices entered the collection.
- Added `field-notes.html` as the post-ownership notes page for what still feels good after the hype.
- Added `on-the-horizon.html` as the watchlist/consideration page for devices not yet in the main archive.
- Kept `tech-arsenal.html` in the repository as the original template/reference file, but it is no longer linked as the main site experience.
- Added `tech-arsenal-内容扩展建议.md` as the content expansion notes file.

### Diff

Overall diff: `12 files changed, 3413 insertions(+)`.

What the diff changed:

- `index.html` added the real home page: shared broadcast bar, white spark site mark, main navigation, `机器留痕` hero, overview copy, CTA buttons, three-stat strip, taste criteria cards, collection framing sections, equal-width route cards, and closing CTA.
- `provenance.html` added the Timeline page: provenance-focused hero, phase-based device history, Mi 9 / iPhone 11 / Galaxy A51 / EarPods / DeathAdder V2 Pro story anchors, and fields for future timeline data.
- `field-notes.html` added the Notes page: post-ownership framing, after-hype evaluation copy, note clusters for Mi 9 / iPhone 11 / EarPods, and a reusable four-question note format.
- `comparison-lab.html` added the Compare page: interactive candidate buttons, three-slot comparison table, default Fold / Ultra / iPhone setup, Pixel replacement option, and next-step cards for sorting/highlighting.
- `on-the-horizon.html` added the Horizon page: watchlist structure for devices still being considered instead of already archived.
- `arsenal-pages.css` added the shared visual system: dark editorial background, blue accent palette, framed navigation, responsive shell layout, hero panels, card grids, route cards, comparison table styling, mobile breakpoints, and the home route grid fix so the lower three cards divide evenly.
- `arsenal-compare.js` added the compare interaction logic: device data, slot state, button activation, table rendering, and click handlers for switching comparison candidates.
- `assets/images/arsenal-spark.png` added the final white spark icon used in the home header.
- `assets/images/template-spark.png` and `assets/images/template-spark-source.png` kept the generated/source spark assets used while replacing the earlier cheap icon direction.
- `tech-arsenal.html` added the original template/reference page that started the visual direction, but it is not used as the main linked experience.
- `tech-arsenal-内容扩展建议.md` added the content planning notes that guided the multi-page expansion.

Added files:

- `index.html` - 220 inserted lines.
- `provenance.html` - 141 inserted lines.
- `field-notes.html` - 128 inserted lines.
- `comparison-lab.html` - 175 inserted lines.
- `on-the-horizon.html` - 128 inserted lines.
- `arsenal-pages.css` - 872 inserted lines.
- `arsenal-compare.js` - 68 inserted lines.
- `tech-arsenal.html` - 1611 inserted lines.
- `tech-arsenal-内容扩展建议.md` - 70 inserted lines.
- `assets/images/arsenal-spark.png` - binary image asset, 25,316 bytes.
- `assets/images/template-spark.png` - binary image asset, 25,316 bytes.
- `assets/images/template-spark-source.png` - binary source image asset, 726,990 bytes.

Notes:

- The local `Icon\r` file is Mac/Finder metadata and was intentionally not included in the GitHub push.
- This is the first recorded version, so the diff is an initial-add diff rather than a modification diff against an earlier site version.

## 2026-07-14 - v0.2 / Add Progress Log

Commit: `7e7291d`

Message: `Add progress log`

Push: `main` was pushed from `252a53a` to `7e7291d` on `origin/main`.

### Changes

- Added `progress.md` so the project has a visible change log inside the repository.
- Started the log from the first GitHub version instead of only documenting future changes.
- Recorded the first push, original commit message, file list, insertions, and image asset sizes.
- Explicitly noted that the local `Icon\r` metadata file was not uploaded.

### Diff

Overall diff: `1 file changed, 53 insertions(+)`.

What the diff changed:

- `progress.md` was created.
- The file added the first progress entry for `252a53a Build tech arsenal site`.
- The first entry separated `Changes` from `Diff`, but the diff section was still mostly file counts and did not yet explain what each diff actually changed.

Added files:

- `progress.md` - 53 inserted lines.

## 2026-07-14 - v0.3 / Expand Diff Details

Commit: this update.

Message: `Expand progress diff details`

Push: this entry should be pushed to `origin/main` after commit.

### Changes

- Expanded `progress.md` so the diff section explains what changed, not only which files changed.
- Added per-file explanations for the first site commit.
- Added a missing entry for the previous `Add progress log` commit.
- Kept the format reusable for future updates: `Changes`, `Diff`, `What the diff changed`, and file-level summary.

### Diff

Overall diff: `progress.md` updated.

What the diff changed:

- Added a `What the diff changed` subsection under the first version.
- Documented the functional/design purpose of each added HTML, CSS, JS, image, and planning file.
- Added a `v0.2 / Add Progress Log` entry for commit `7e7291d`.
- Added this `v0.3 / Expand Diff Details` entry to record the current documentation update.

## 2026-08-23 - v0.4 / Unify the bilingual site and redesign the catalogue

Commit: this update.

Message: `Unify site language and redesign catalogue`

Push: this entry is pushed to `origin/main` after commit.

### Changes

- Unified the shared navigation across every page with the same home mark, fixed-width structure, active-page state, and bilingual Chinese / English labels.
- Added `arsenal-site.js` to apply shared bilingual pairs, page navigation, home-link behavior, language notes, and translated metadata consistently.
- Simplified the oversized page titles on Timeline, Field Notes, Compare, and Horizon so each page uses a restrained title lockup instead of a full-screen slogan.
- Reworked `tech-arsenal.html` into a high-end annual-index catalogue: one lead device per chapter, compact supporting rows, search, category filters, dossier details, and the existing compare/open-record interactions.
- Refined `arsenal-pages.css` around the blue editorial system, responsive navigation, smaller title scale, quieter rules, consistent controls, and mobile layouts.
- Replaced the Legion and MacBook product art with regenerated transparent-background assets. WebP is used by the catalogue for loading speed, with PNG siblings retained as fallbacks.
- Added `PRODUCT.md` to preserve the catalogue’s product purpose, users, design constraints, and redesign principles for future work.

### Diff

Overall diff: `13 files changed` plus two regenerated image pairs; the tracked HTML/CSS changes add `2154 insertions` and remove `572 lines` before the new shared script, product brief, and binary assets are counted.

What the diff changed:

- `arsenal-pages.css` gained the shared bilingual chrome, blue theme overrides, compact navigation, catalogue controls, lead-card hierarchy, dossier panel, responsive breakpoints, and reduced-motion handling.
- `index.html`, `provenance.html`, `field-notes.html`, `comparison-lab.html`, and `on-the-horizon.html` now share the same bilingual data attributes, restrained English titles, home-mark return link, and `arsenal-site.js` runtime.
- `tech-arsenal.html` received the catalogue redesign, consistent navigation, bilingual copy, search/filter layout, featured chapter cards, dossier details, and the local transparent product images.
- `arsenal-site.js` centralizes bilingual rendering and shared page chrome instead of duplicating navigation markup on every page.
- `PRODUCT.md` documents the site’s purpose, audience, catalogue principles, and constraints.
- `assets/images/legion-5-15ahp10.webp` / `.png` and `assets/images/macbook-pro-16.webp` / `.png` are the new transparent product assets; WebP sizes are approximately 96 KB and 29 KB respectively.

## 2026-08-23 - v0.5 / Expand the catalogue and refresh device assets

Commit: this update.

Message: `Expand catalogue and refresh device assets`

Push: this entry is pushed to `origin/main` after commit.

### Changes

- Expanded the shared site navigation with the Setup and Decision pages, and added the new `decision.html`, `topology.html`, and `specs.html` routes.
- Added `specs-data.js` as the structured product-spec catalogue used by the specification index.
- Reworked the catalogue cards and dossier content in `tech-arsenal.html`, including the newly added tablet and laptop records.
- Added a featured creator section to the home page and kept the bilingual page chrome consistent across the site.
- Added `all-source-code.md` and `site-copy-simplified.md` as project documentation and content references.
- Added regenerated raster product assets for Galaxy Tab, iPad mini, iPad Pro, MacBook Air, MacBook Neo, MSI Prestige, and Acer Swift; the iPad assets use PNG alpha rather than SVG clipping.
- Added enhanced iPad Pro and iPad mini PNGs with restored detail and transparent backgrounds, while retaining the earlier source variants.

### Diff

Overall diff: the catalogue, shared styles, shared navigation, new routes, documentation, and device image set were updated together for the current site state.

What the diff changed:

- `arsenal-pages.css` gained the expanded catalogue layout, device-card treatments, navigation states, route layouts, and responsive styling.
- `arsenal-site.js` registered the new Setup and Decision routes and kept shared bilingual behavior aligned with the expanded navigation.
- The existing site pages now expose the expanded navigation and shared page structure.
- `tech-arsenal.html` now references the current local product images and exposes the broader catalogue records.
- `decision.html`, `topology.html`, and `specs.html` added the decision helper, setup map, and product-spec index experiences.
- `specs-data.js` added the structured device records and specifications used by the spec index.
- The new PNG assets are raster product images intended for the catalogue; no SVG cutout workflow was used for these device assets.

## 2026-08-25 - v0.6 / Review Git history from 2026-08-19 to 2026-08-25

History window: `2026-08-19` through `2026-08-25`, inclusive.

### Reviewed commits

- `9947047` (`2026-08-23 07:51 +0800`) — `Unify site language and redesign catalogue`: unified the bilingual site chrome, redesigned the annual-index catalogue, added shared navigation/runtime behavior, documented the product direction in `PRODUCT.md`, and replaced the Legion and MacBook product art with transparent assets.
- `b9a668a` (`2026-08-23 22:30 +0800`) — `feat(catalogue): expand catalogue and refresh device assets`: added the Setup, Decision, and Specs routes, expanded the structured device catalogue, refreshed tablet and laptop records, added source/copy documentation, and added the current raster product asset set.
- No commits were found on August 19–22 or August 24–25.

### Diff summary

- `9947047`: 14 files changed, with `2,519` insertions and `572` deletions.
- `b9a668a`: 29 files changed, with `10,394` insertions and `947` deletions.
- At review time, `main` and `origin/main` both pointed to `b9a668a`.

This entry records the Git history review and is not committed yet.

## 2026-09-01 - v0.7 / Xiaomi 11 Pro, Legion Y700, Pixel 11 Pro Fold, and Camera Sensor Metadata

Commit: `87b7a0d` (`87b7a0d31690e28f502900cfc394030074b94267`)

Message: `feat(catalogue): add Xiaomi 11 Pro, Legion Y700, Pixel 11 Pro Fold and complete camera sensor specs`

Push: `main` was pushed from `9e5f702` to `87b7a0d` on `origin/main` at `https://github.com/eugeneeeee1123/tech-arsenal.git`.

### Changes

- Added Xiaomi 11 Pro (`N° 051`, `mobile`) to `tech-arsenal.html` and `specs-data.js` with custom-calibrated 20:9 aspect ratio image asset (`assets/images/xiaomi11pro.png`), 6.81" 2K 120Hz E4 quad-curved AMOLED display, IP68 water resistance, and 1/1.12" Samsung GN2 main camera.
- Tuned scaling rules for `xiaomi11pro.png` in `arsenal-pages.css` to prevent image overflow while preserving optimal visual prominence in the grid.
- Added Lenovo Legion Y700 Gen 3 (`N° 052`, `tablet`) compact gaming slate with Snapdragon 8 Gen 3, 8.8" 2.5K 165Hz display, 10,004mm² QianKun VC cooling architecture, dual USB-C ports with bypass charging, and pending image fallback state.
- Added Google Pixel 11 Pro Fold (`N° 053`, `mobile`) foldable flagship with 8.0" Super Actua Flex 120Hz inner display, 6.3" Actua outer display, aerospace gear hinge, Tensor G4, Gemini Nano AI, and pending image fallback state.
- Researched, verified, and supplemented optical sensor formats (e.g., 1/1.12", 1/1.28", 1/1.32", 1/1.56", 1/1.7", 1/2.0", 1.0") and specific sensor model names (Sony IMX700 RYYB, IMX766, IMX789, IMX803, IMX858, LYT-900; Samsung GN2, HP2, HM3, GNK, GM5; OmniVision OV48C, OV64B; GalaxyCore GC02M1, etc.) across all 30 smartphone cards.
- Synchronized structured metadata into `specs-data.js` and added missing records so that `specs.html` displays comprehensive camera sensor breakdowns side-by-side with camera systems.
- Updated catalogue statistics across `tech-arsenal.html`: 053 catalogued records, 048 pursuing, 31 smartphones, 6 tablets.
- Added `.gitignore` to prevent OS (`.DS_Store`) and IDE editor cache directories from polluting repository history.

### Diff

Overall diff: `8 files changed, 341 insertions(+), 33 deletions(-)`.

What the diff changed:

- `tech-arsenal.html` added cards `N° 051` (Xiaomi 11 Pro), `N° 052` (Legion Y700), and `N° 053` (Pixel 11 Pro Fold), updated front `.spec-row` values, and added `data-label="Camera Sensors"` across all smartphone cards.
- `specs-data.js` added `051`, `052`, `053` records, added missing mobile records (`045` Mi 10 Pro, `046` Find X9 Ultra, `047` X70 Pro, `048` OnePlus 9 Pro, `049` Galaxy A72, `050` Mi CC9 Pro), and populated `Camera Sensor` size and model data.
- `arsenal-pages.css` added image scale transform overrides for Xiaomi 11 Pro and missing image placeholder styling.
- `arsenal-site.js` added Chinese/English dictionary translations for newly added devices.
- `assets/images/xiaomi11pro.png` added the calibrated transparent product image asset.
- `.gitignore` added exclusions for `.DS_Store`, `.impeccable/`, and `.vscode/`.
- `agents.md` added the agent workflow guidelines.

