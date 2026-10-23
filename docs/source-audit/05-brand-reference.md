# 05 — Brand Reference (typography, colour, logo, visual identity)

**Evidence labels:** **Verified** = read from the theme's CSS variables, computed styles in the browser, or logo pixels · **Estimate** = visual judgement from screenshots.

---

## 1. Logo

| Asset | File | Size | Notes |
|---|---|---|---|
| Primary logo (header) | `wp-content/uploads/2024/09/mahamukti-yoga-bali-logo.png` | 278×72 PNG, 13 KB | Red dove/bird mark inside a red circular swoosh + wordmark "**Mahamukti**" (black, heavy slab serif) over "**Yoga Retreats** Bali" ("Yoga Retreats" in red, "Bali" in black bold). Transparent background. **Low resolution** — blurs on retina screens. Also used as Organization logo in JSON-LD. |
| Footer logo (on black) | `wp-content/uploads/2020/12/footer-logo.png` | 200×52 PNG, 11 KB | Same mark; "Mahamukti" white, "Yoga Retreats" white, "**Bali**" yellow (#FFCC00). |
| Site icon / favicon | `wp-content/uploads/2024/09/cropped-mahamukti-yoga-bali-{32x32,180x180,192x192}.png` | 32/180/192 px | Red bird mark on white. |
| Hot-linked logo (Bali Retreat page) | `https://mahamuktiyoga.com/wp-content/uploads/2023/05/mahamukti-yoga-school-logo.png` | — | **Returns 404** — broken. |
| `2026/03/logo.svg` | 52×23 SVG | — | Not the brand logo (vector text "Lo…" placeholder / Google wordmark used by the reviews widget). Do not use. |

**No vector (SVG) version of the brand logo exists in the media library.** Phase 2 should ask the client for an SVG or high-resolution PNG (see 08).

Placement: header left, ~250px wide on desktop, ~160px on mobile; footer centred. The mobile menu overlay shows the site name as green text instead of the logo.

---

## 2. Typography

### 2.1 Theme-configured fonts (Verified — `--theme-font-*` CSS variables)

| Role | Family | Size | Weight | Line height | Letter spacing | Transform |
|---|---|---|---|---|---|---|
| Body (`p`) | **Open Sans**, sans-serif | 1rem (16px; rendered 17px on most pages) | 400 | 1.68em | inherit | none |
| H1 | **Crimson Pro**, serif | 3.35em | 400 | 1em | -0.03em | none |
| H2 | Crimson Pro | 2.761em | 400 | 1.021em | inherit | none |
| H3 | Crimson Pro | 2.05em | 500 | 1.086em | inherit | none |
| H4 | Crimson Pro | 1.64em | 500 | 1.214em | inherit | none |
| H5 | Crimson Pro | 1.47em | 500 | 1.417em | -0.02em | none |
| H6 | Crimson Pro | 1.294em | 500 | 1.474em | -0.01em | none |
| Logo text | Crimson Pro | 1.7em | 500 | 1.25em | 0 | none |
| Buttons | Crimson Pro | 15px | 600 | 21px | 0.07em | **uppercase** |
| Menu | Crimson Pro | 18px | 500 | 1.5em | 0 | none |
| Sub-menu | Open Sans | 14px | 600 | 1.5em | 0 | none |
| Inputs | inherit (Open Sans) | 16px | 400 | 1.5em | 0.1px | none |
| Meta/info | inherit | 13px | 400 | 1.5em | 0 | none |

Loaded from Google Fonts: Open Sans (300–800, italics), Crimson Pro (200–900, italics), Lora (400–700), Roboto 400. Elementor global kit defaults (Roboto / Roboto Slab, #6EC1E4 etc.) are **unused template defaults** — ignore them.

### 2.2 What actually renders (Verified — computed styles, desktop, all 38 crawled routes)

18 font families are rendered somewhere on the site:

| Family | Approx. share of visible text | Pages | Origin |
|---|---|---|---|
| Open Sans | ~55% | all 37 | Theme body |
| **Times New Roman** | ~12% | 15 (Home, About, Teacher, Location, all course/retreat pages, 4 posts) | Inline `font-family` pasted into Elementor text widgets; falls back to the system serif. **Unintentional** — the biggest typographic inconsistency on the site. |
| Crimson Pro | ~9% | all 37 | Theme headings, menu, buttons |
| Outfit | 1 page | Osho TTC | Elementor widget override |
| League Spartan | 1 page | Bali Retreat (custom template) | Template CSS |
| Trustindex Poppins | 1 page | Student Reviews | Third-party widget |
| Roboto | 7 pages | Elementor defaults | |
| Lora | 1 page | Meditation & Breath | |
| EB Garamond | 2 pages | 200 hr, Osho TTC | |
| Albert Sans, Abril Fatface | 1 page each | Meditation & Breath | |
| Days One | 4 pages | 200 hr, Yin, Tantra, Yog Nidra | |
| Amaranth, Acme, Afacad | 1 page each | 200 hr, 100 hr Meditation, Yin | |
| Caveat | 1 page | About (teacher quote) | |
| Arial, Helvetica | 5 / 2 pages | Pasted inline styles | |

Representative rendered sizes (desktop): Home H1 40px Crimson Pro 400 (letter-spacing -1.7px); section H2 46.9px Crimson Pro 400; H3 34.85px/500; page-banner H1 ~57px; card titles 28px/500; menu 18px/500; body 17px Open Sans / 20px Times New Roman in pasted blocks; footer 14px Open Sans; buttons 15px Crimson Pro 600 uppercase, 1.05px tracking.

### 2.3 Typography takeaway for Phase 2
The established brand pairing is **a refined serif for headings (Crimson Pro) + a humanist sans for body (Open Sans)**. Everything else is accidental. Phase 2 must use exactly two families (see [09](./09-phase-2-recommendations.md)); keeping Crimson Pro + Open Sans, or choosing close equivalents, would preserve recognisability. The final choice is deferred to Phase 2 as instructed — candidate options are listed there.

No font files exist locally; all fonts were served by Google Fonts (and Trustindex for its widget).

---

## 3. Colour

### 3.1 Theme palette (Verified — `--theme-color-*` CSS variables, "light" scheme)

| Token | HEX | Use |
|---|---|---|
| bg_color | `#FAF8F8` | Page background (warm off-white) — the most used background |
| alter_bg_color | `#FFFFFF` | Cards / alternate sections |
| bd_color | `#D8D8D8` | Borders, input borders |
| text | `#848484` | Body text |
| text_light | `#A5A3A3` | Meta text, placeholders |
| text_dark | `#080808` | Headings |
| **text_link** (primary accent) | **`#63C643`** | Links, primary rounded buttons, active states |
| text_hover | `#54BC33` | Link/button hover |
| text_link2 / hover2 | `#6DCCFF` / `#66C0F0` | Theme secondary (rarely visible) |
| text_link3 / hover3 | `#B5D0A9` / `#AFC6A5` | Theme tertiary (rarely visible) |
| extra_bg_color | `#080808` | Footer / dark sections |
| extra_bg_hover | `#1D1C1C` | Dark hover |
| extra_bd_color | `#343434` | Dark borders |
| extra_text | `#888383` | Text on dark |
| extra_link3 | `#DDB837` | Theme gold (on dark) |
| inverse_link | `#FFFFFF` | Text on buttons |

### 3.2 Brand colours from the logo (Verified — pixel sampling)

| Colour | HEX | Where |
|---|---|---|
| **Logo red** | **`#E31E25`** | Bird mark, "Yoga Retreats" |
| Logo black | `#181818` | "Mahamukti", "Bali" |
| Footer-logo yellow | `#FFCC00` | "Bali" on dark footer logo |

### 3.3 Other colours actually rendered (Verified — computed styles)

| HEX | Role | Assessment |
|---|---|---|
| `#FC4B00` | "Book Now" header button background (radius 3px) | Orange-red CTA — close to but not the logo red |
| `#FA590B`, `#FF1F1F`-ish (estimate) | Osho TTC "REGISTER NOW !" buttons | Page-specific |
| `#AD2725` / `#BE2424` | "UPCOMING YOGA COURSES IN BALI 2026" eyebrow (Home), red H2/eyebrows on course pages | Deep brand red used for eyebrows |
| `#AA7015` | "Upcoming Yoga Retreats in Bali" H2 (Home) | Gold/ochre — one-off |
| `#295A6F` | "200 hour Yoga Teacher Training in Bali" link-title (Home) | Teal-blue — one-off |
| `#333333`, `#1F1818`, `#000000` | Body text in pasted blocks | Darker than theme `#848484` |
| `#EDEAE5`, `#F5F2ED` | Beige section backgrounds (course pages, Osho TTC) | Warm neutrals |
| `#E2CECE` | Stats row background (About, Teacher) | Dusty pink |
| `#775A5A` | "Room Includes" panel (Location) | Mauve-brown |
| `#1A1719`, `#1F242E` | Dark feature sections | |
| `#339966` | Inline green text in some content | Pasted |
| Bali Retreat template: red ≈ `#E5262D` (estimate), soft pink tints, cream `#F7F1EE`-ish (estimate) | Separate design system on that one page | |

### 3.4 Colour takeaway
- **Recognisable brand colours:** logo red `#E31E25` + near-black `#181818`/`#080808` + warm off-white `#FAF8F8`, with the theme's fresh green `#63C643` as the existing UI accent (buttons, links).
- The site currently mixes **two competing CTA colours** (green rounded buttons and orange-red/red square buttons). Phase 2 should choose one primary CTA colour — likely aligned to the logo red, keeping green as a secondary accent or dropping it (client decision; see 08).
- Gold `#AA7015`, teal `#295A6F`, pink `#E2CECE`, mauve `#775A5A` are incidental per-section choices, not brand colours.
- Theme secondary blues (`#6DCCFF`) and Elementor kit defaults (`#6EC1E4`, `#61CE70`, `#4054B2`) are template leftovers.

---

## 4. Other visual identity elements

| Element | Observation |
|---|---|
| Border radius | Theme `--theme-var-rad: 0px`. In practice: green buttons are fully rounded pills (30px); header Book Now 3px; Home hero photos ~20px rounded; Bali Retreat uses 12–16px rounded cards (estimate). Mixed. |
| Shadows | Mostly flat. Bali Retreat cards use soft shadows. |
| Image treatment | Real photography of group classes, Akhilesh in white clothing, Balinese temples, jungle shala, rice paddies, retreat rooms. Many images are phone photos (WhatsApp exports, `IMG_2023…`), some stock (Freepik-style numbered files `2151416405.jpg`), some with Goa/Switzerland in filename. Overlapping rounded photo collage on Home hero; full-bleed photo cards with dark gradient + white text for programme cards; page banners with dark overlay. |
| Icons | Line icons (theme "trx_addons_icons"/fontello) in green for features; custom JPG icons on Osho TTC (asana/meditation/pranayama); Font Awesome social icons. |
| Decorative motifs | Ganesh illustration + decorative divider line above the Home mission statement; Om/lotus imagery in photos; mandala-like background on some banners. |
| Backgrounds | Off-white, white, beige, black footer; parallax image behind Home video. |
| Motion | Elementor entrance animations (fade/slide in on scroll), animated/typed underline word in Home mission headline, custom mouse-follower cursor, hover underline on menu items, back-to-top. |
| Tone | Spiritual, traditional-Indian-meets-Bali, warm and personal (founder-led), with sales-style copy on course pages. |

### Do not carry forward
Times New Roman blocks; per-page decorative fonts; one-off heading colours; mixed button shapes/colours; the stray header bullet; demo social icons (Dribbble/AncoraThemes); the Bali Retreat page's separate visual language (unless the client wants it as the new direction — see 08).
