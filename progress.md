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

