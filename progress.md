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
