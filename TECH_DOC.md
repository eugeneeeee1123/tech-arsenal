# Web Programming Final Project: TECH ARSENAL Personal Technology Catalogue

## 1. Project overview

TECH ARSENAL is a multi-page catalogue documenting 60 devices across five categories: smartphones, tablets, laptops, desktop workstations, and audio peripherals. A shared navigation header connects four pages:

Live Deployment (Vercel): https://tech-arsenal.vercel.app

Figure: Scan QR code or click URL above to access the live deployment on Vercel

```text
tech/
├── index.html              # Entrance portal with collection metrics and flagship highlight
├── tech-arsenal.html       # Catalogue index with 60 device records, search, filters, and modal dossier
├── comparison-lab.html     # Interactive hardware comparison laboratory with difference highlight
├── topology.html           # Desk workstation topology and physical zone routing map
├── arsenal-pages.css       # Unified stylesheet with CSS custom properties, grid layouts, and media queries
├── arsenal-site.js         # Navigation controller, hamburger menu lifecycle, and status seal updates
├── assets/
│   ├── data/
│   │   ├── devices.js      # Global JavaScript data layer with 60 structured device records
│   │   └── devices.json    # JSON fallback dataset for cross-platform data ingestion
│   ├── fonts/              # Self-hosted variable font files (Instrument Sans and IBM Plex Mono)
│   │   ├── InstrumentSans-Variable.woff2
│   │   ├── InstrumentSans-Italic-Variable.woff2
│   │   ├── IBMPlexMono-Regular.woff2
│   │   └── IBMPlexMono-Medium.woff2
│   └── images/             # Transparent WebP product assets optimized for high-DPI displays
│       ├── arsenal-spark.webp
│       ├── macstudio-m4-ultra-transparent.webp
│       ├── macbook-pro-16.webp
│       ├── legion-5-15ahp10.webp
│       └── ... (60+ product assets)
├── docs/                   # Documentation and development notes
│   ├── PRODUCT.md          # Product purpose, user profiles, and design principles
│   └── progress.md         # Detailed development history, changelog, and diff records
└── README.md               # Repository overview, architecture notes, and local execution instructions
```

*[SCREENSHOT 1: Homepage (index.html) in desktop browser, showing the navigation bar, live collection statistics ledger, and Mac Studio flagship preview]*

---

## 2. Page structure and semantic HTML

Every page uses semantic HTML5 elements for document structure and accessibility:

- `<header>`: holds site branding, home link, hamburger button, and main navigation.
- `<nav>`: encloses links with `aria-label="Site navigation"` and `aria-current="page"` on the active route.
- `<main>`: holds primary content, split into `<section>` chapters and tools.
- `<section>`: groups category chapters (phones, tablets, laptops, audio) and comparison surfaces.
- `<article>`: wraps individual device cards in `tech-arsenal.html` and workstation nodes in `topology.html`.
- `<footer>`: holds collection metadata, status indicators, and legal notices.

Form controls follow accessibility standards. The catalogue search input uses `type="search"`, a clear placeholder, and `aria-describedby` linked to the live result counter. Comparison dropdowns group items by category with `<optgroup>`, while slot pickers and the difference checkbox include `aria-label` attributes. Device cards include `role="button"`, `aria-haspopup="dialog"`, `aria-controls="techDossier"`, and dynamic `aria-expanded` flags.

Images across all pages include descriptive `alt` attributes identifying the specific hardware model and configuration rather than filenames.

*[SCREENSHOT 2: HTML source code or browser DevTools Elements panel displaying semantic tags (<header>, <nav>, <main>, <section>, <article>)]*

---

## 3. Responsive layout and styling

All styles are written in custom CSS without external frameworks:

- Layout systems: The catalogue in `tech-arsenal.html` and workstation cards in `topology.html` use CSS Grid (`minmax(280px, 1fr)`) with a full-width featured lead card. Flexbox aligns navigation bars, control strips, and camera lens badges.
- Media queries: Breakpoints at 1080px, 900px, 760px, 640px, and 375px adapt layouts. Below 900px, bento panels stack. Below 640px, the catalogue collapses to a single column, and the comparison lab switches from three slots to two.
- Mobile navigation drawer: At 640px and below, horizontal links collapse into a slide-down menu toggled by the hamburger button.
- Mobile dossier surface: Below 760px, the modal becomes a full-height sheet using dynamic viewport units (`100dvh`), touch scrolling, and safe-area insets (`env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`).
- CSS custom properties: Theme variables in `:root` define colors, fonts, and spacing, including `--bg` (#0a0d12), `--panel-solid` (#131a26), `--line` (rgba(160, 176, 204, 0.14)), and `--accent` (#6f86ff).
- Interactive styling: Buttons, links, and cards provide visual feedback through `:hover` and `:focus-visible` states. A `prefers-reduced-motion` media query disables non-essential animations.

*[SCREENSHOT 3: Catalogue page (tech-arsenal.html) in desktop view, showing the multi-column CSS Grid and featured lead card]*

*[SCREENSHOT 4: Mobile view in browser DevTools (tested at 375px width), showing the single-column layout and open mobile navigation drawer]*

---

## 4. JavaScript functionality and form validation

Client-side interactivity runs on vanilla JavaScript in `arsenal-site.js`, `devices.js`, and page-level scripts:

- Real-time search and category filtering: Users filter cards by category (mobile, tablet, laptop, desktop, audio) or query without reloads. The script updates result counters, recalculates lead cards, and displays an empty state if no matches occur.
- Detail dossier modal: Clicking a card opens an overlay with full specs and unified camera chips. The script locks body scroll, compensates for scrollbar width to prevent layout shift, traps Tab focus, and restores focus on close (via Escape or backdrop click).
- Hardware comparison engine: In `comparison-lab.html`, users compare two or three devices side by side. Selectors stay synchronized to disable duplicate choices, specs align through a canonical taxonomy, and a toggle highlights differences.
- View mode switcher: A toggle switches between the card grid and a compact manifest list view. The selection persists in `localStorage` under `arsenal-view-mode-v2`.
- Image fallback handling: Image error listeners catch broken paths, substitute a local spark icon, apply an `is-missing-image` border, and display the device label.

*[SCREENSHOT 5: Detail dossier modal open on screen, showing structured device specifications and unified camera suite chips]*

*[SCREENSHOT 6: Comparison Lab (comparison-lab.html) with multiple devices selected and difference highlighting active]*

*[SCREENSHOT 7: Filtered catalogue search query displayed on screen with instant result summary count]*

---

## 5. Key code implementations and complex logic

Four features required specialized client-side logic:

### Unified camera optics and sensor parsing engine

In `tech-arsenal.html`, `buildUnifiedCamera()` parses separate camera strings, sensor models, and focal lengths using regular expressions, standardizes lens roles, sorts optics from ultra-wide to periscope telephoto, and renders structured chips:

```javascript
function buildUnifiedCamera(sysHtml, sensHtml, focHtml) {
    const sensors = parseSensorModules(specPlainText(sensHtml || ""));
    const system = parseSystemModules(specPlainText(sysHtml || ""));
    let modules = sensors.length ? mergeModuleLists(sensors, system) : system;
    if (!modules.length) return { modules: [], notes: [] };

    const focals = parseFocalParts(specPlainText(focHtml || ""));
    modules = sortCameraModules(modules);
    const leftoverNative = assignNativeFocals(modules, focals.native);
    const notes = leftoverNative.length
        ? ["Native: " + leftoverNative.join(" / "), ...focals.notes]
        : focals.notes.slice();

    return { modules, notes };
}
```

### Canonical specification taxonomy alignment and difference highlighting

In `comparison-lab.html`, devices use varying component labels (such as "SoC", "Processor", and "CPU"). The script standardizes these via `CANONICAL_TAXONOMY`, builds synchronized rows, and adds a `highlight-diff` class when values differ:

```javascript
const CANONICAL_TAXONOMY = [
    { label: "PROCESSOR / SOC", aliases: ["soc", "processor", "platform", "cpu"] },
    { label: "GRAPHICS / GPU", aliases: ["graphics", "gpu"] },
    { label: "MEMORY", aliases: ["memory", "ram"] },
    { label: "STORAGE", aliases: ["storage", "ssd", "rom"] },
    { label: "DISPLAY", aliases: ["display", "screen", "display panel"] },
    { label: "CAMERA SYSTEM", aliases: ["camera system", "imaging tech"] },
    { label: "BATTERY & POWER", aliases: ["battery", "battery & charging", "battery life"] }
];

function renderTable(chosen, isDiffHighlight) {
    const table = document.getElementById("compareTable");
    table.classList.toggle("highlight-diff", isDiffHighlight);

    const headRow = document.getElementById("compareHeadRow");
    headRow.innerHTML = '<th scope="col">SPECIFICATION</th>' + chosen.map((d) =>
        `<th scope="col">
            <div class="compare-head-cell">
                <div class="compare-head-thumb"><img src="${escapeHtml(d.img)}" alt="${escapeHtml(d.title)}" width="46" height="46"></div>
                <div class="compare-head-meta">
                    <span class="compare-head-lot">N° ${escapeHtml(d.lot)}</span>
                    <h3 class="compare-head-title">${escapeHtml(d.title)}</h3>
                </div>
            </div>
        </th>`
    ).join("");
}
```

### Accessible modal dossier lifecycle with scrollbar compensation

In `tech-arsenal.html`, `openDossier()` locks body scroll without layout shift by injecting `--dossier-scrollbar-gap`, sets ARIA states, traps keyboard focus in the dialog, and restores focus to the invoker card on exit:

```javascript
function openDossier(card) {
    const details = card.querySelector(".hidden-details");
    if (!details) return;

    dossierInvoker = card;
    selectedCard = card;
    cards.forEach((item) => item.setAttribute("aria-expanded", String(item === card)));

    dossierBody.scrollTop = 0;
    const scrollbarGap = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
    document.documentElement.classList.add("dossier-open");
    document.body.classList.add("dossier-open");
    document.body.style.setProperty("--dossier-scrollbar-gap", `${scrollbarGap}px`);

    dossier.hidden = false;
    dossierClose.focus({ preventScroll: true });
    requestAnimationFrame(() => {
        if (!dossier.hidden && selectedCard === card) dossier.classList.add("is-open");
    });
}

function closeTechDossier() {
    if (dossier.hidden) return;
    const restoreTarget = dossierInvoker;
    dossier.hidden = true;
    dossier.classList.remove("is-open");
    document.documentElement.classList.remove("dossier-open");
    document.body.classList.remove("dossier-open");
    document.body.style.removeProperty("--dossier-scrollbar-gap");

    if (selectedCard) selectedCard.setAttribute("aria-expanded", "false");
    selectedCard = null;
    dossierInvoker = null;
    if (isVisibleFocusable(restoreTarget)) restoreTarget.focus({ preventScroll: true });
}
```

### Responsive mobile navigation drawer with keyboard escape listener

In `arsenal-site.js`, the navigation controller toggles `aria-expanded`, closes the mobile drawer on outside clicks or Escape key presses, and returns focus to the hamburger button:

```javascript
const hamburgerBtn = document.querySelector(".hamburger-btn");
const pageNav = document.querySelector(".page-nav");

function setOpen(open) {
    pageNav.classList.toggle("is-open", open);
    hamburgerBtn.classList.toggle("is-active", open);
    hamburgerBtn.setAttribute("aria-expanded", String(open));
}

hamburgerBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(!pageNav.classList.contains("is-open"));
});

document.addEventListener("click", (event) => {
    if (!pageNav.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        setOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !pageNav.classList.contains("is-open")) return;
    setOpen(false);
    hamburgerBtn.focus();
});
```

---

## 6. Usability, accessibility, and bonus features

Usability and extra features implemented in the project include:

- Contrast and typography: Text (`--text: #edf2fb`) on dark panels (`--bg: #0a0d12`, `--panel-solid: #131a26`) meets WCAG AA contrast standards. Monospace numbers (`--mono: "IBM Plex Mono"`) use tabular figures for clean vertical alignment.
- Keyboard navigation: Interactive cards, filter buttons, and dialogs support full Tab navigation with `:focus-visible` outlines. Pressing the slash key (`/`) immediately focuses the search input.
- Asset optimization: Images converted to transparent WebP files reduced total asset payload by 97 percent (from 50MB+ down to ~1.4MB). Fonts are self-hosted WOFF2 files preloaded in `<head>`.
- Manifest list view (Extra feature): A toggle switches between the card grid and a compact manifest list view, saved to `localStorage` across reloads.
- Image fallback engine (Extra feature): Image load errors trigger a script that swaps in a fallback spark icon and displays the device model name.
- Dynamic collection statistics ledger (Extra feature): The homepage hero calculates total, owned, and wishlist counts directly from the JavaScript data array with zero-padded formatting (060, 005, 055).

*[SCREENSHOT 8: Manifest list view active in tech-arsenal.html, or DevTools Application tab showing localStorage keys]*

---

## 7. Hardware engineering and technology research

To ensure the archive reflects real consumer electronics engineering, the collection documents verified technical principles:

- Mobile optical sensor formats: 1.0-inch type smartphone image sensors (such as the Sony LYT-900 and IMX989) possess an active diagonal area of approximately 15.86mm. Housing this sensor surface requires asymmetric camera bumps and 8P hybrid glass-plastic elements to maintain a short flange focal distance without severe optical corner aberration.
- Foldable teardrop hinge mechanics: Modern foldable phones use waterdrop hinges with dual-track synchronization. Bending ultra-thin glass (UTG) along a teardrop curve with a radius above 1.5mm disperses mechanical stress across a broader surface, preventing localized fatigue creases.
- Silicon thermal limits and vapor chamber cooling: High-performance mobile processors (such as Apple M4 and Snapdragon 8 Gen 3) reach peak power draws between 10W and 14W during intensive workloads. Dissipating this thermal load inside sub-8mm chassis requires vapor chambers exceeding 10,000mm² to prevent thermal throttling.
- Silicon-carbon battery anode chemistry: Replacing traditional graphite anodes with silicon-carbon composite materials increases negative electrode energy density by 10 to 15 percent. This chemical density allows phone manufacturers to fit 5,500mAh to 6,000mAh capacities inside slim frames while supporting dual-cell fast charging.
- Low-Temperature Polycrystalline Oxide (LTPO) backplanes: LTPO combines energy-efficient IGZO thin-film transistors for pixel switching with LTPS transistors for drive circuitry. This hybrid architecture lowers off-state leakage currents, allowing refresh rates to drop from 120Hz down to 1Hz on static images to conserve battery.
- Periscope telephoto light path refraction: Folded optics route incoming light through a 90-degree prism along the phone body, achieving equivalent focal lengths of 70mm to 120mm without adding vertical chassis thickness.
- Acoustic transducer architectures: In-ear audio monitors use 10mm to 11mm dynamic drivers with polyurethane or liquid crystal polymer diaphragms for low-frequency response, paired with balanced armature or planar magnetic micro-tweeters for high-frequency detail.

---

## 8. Submission screenshot checklist

| Number | Target page | Recommended capture view |
| :--- | :--- | :--- |
| Screenshot 1 | `index.html` | Top navigation bar, hero card, and statistics ledger on desktop |
| Screenshot 2 | `index.html` or `tech-arsenal.html` | Browser DevTools Elements panel displaying semantic tags (`<header>`, `<nav>`, `<main>`) |
| Screenshot 3 | `tech-arsenal.html` | Desktop view of device grid cards and category filter toolbar |
| Screenshot 4 | Any page | Mobile responsive view (375px width) showing single-column layout or open navigation menu |
| Screenshot 5 | `tech-arsenal.html` | Active detail dossier modal displaying device data and camera suite |
| Screenshot 6 | `comparison-lab.html` | Comparison Lab with two or three devices selected and difference highlighting active |
| Screenshot 7 | `tech-arsenal.html` | Real-time search query active with filtered results and dynamic counter banner |
| Screenshot 8 | `tech-arsenal.html` | Manifest list view mode active or DevTools Application tab showing `localStorage` keys |
