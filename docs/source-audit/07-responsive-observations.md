# 07 — Responsive Observations

**Method:** headless Chrome 155 via Playwright, 2026-10-23. Tested viewports: **desktop 1440×900**, **tablet 768×1024**, **mobile 390×844** (mobile user-agent, touch, `isMobile`). Every route was loaded at all three widths, scrolled to the bottom to trigger lazy-loading, then measured and captured. Screenshots: [screenshots/README.md](./screenshots/README.md).

**Limitations:** no real devices; no intermediate breakpoint sweep (e.g. 1024, 1280); hover states not captured; mobile sub-menu expansion, accordions and carousels were not operated; some lazy images remained blank in full-page captures; entrance animations had to be force-revealed for full-page shots, so fold shots show sections whose text had not yet animated in.

---

## 1. Measured results (all routes)

"Layout wider than viewport" = document `scrollWidth` exceeded the viewport. On mobile, Chrome's mobile emulation zooms the page out to fit, so a 394px layout on a 390px screen means the page is rendered slightly scaled down and can be dragged sideways.

| Route | Desktop 1440 height | Tablet 768 height | Mobile 390 height | Layout wider than viewport | Mobile menu toggle |
|---|---|---|---|---|---|
| `home` | 7412 | 8103 | 9335 | none | yes |
| `osho-bali` | 1889 | 1234 | 1317 | none | yes |
| `osho-bali__yoga-teacher-training-osho-bali` | 9064 | 10769 | 13914 | none | no |
| `meditation-breath-training-bali` | 7346 | 7904 | 10343 | none | no |
| `bali-retreat` | 4792 | 7857 | 5048 | mobile: 980px | no |
| `photo-gallery` | 2189 | 1542 | 1536 | tablet: 773px, mobile: 394px | yes |
| `frequently-asked-questions` | 1699 | 1474 | 1133 | tablet: 773px, mobile: 394px | yes |
| `payment-refunds` | 2173 | 2032 | 2496 | tablet: 773px, mobile: 394px | yes |
| `yoga-student-reviews-bali` | 1543 | 1393 | 1075 | tablet: 773px, mobile: 394px | yes |
| `yoga-event-calendar-bali` | 3993 | 3625 | 4720 | tablet: 773px, mobile: 394px | yes |
| `200-hour-yoga-teacher-training` | 9808 | 11938 | 14353 | tablet: 773px, mobile: 394px | yes |
| `100-hour-meditation-teacher-training` | 4504 | 5218 | 6321 | tablet: 773px, mobile: 394px | yes |
| `100-hour-yin-yan-course` | 4672 | 5351 | 6828 | tablet: 773px, mobile: 394px | yes |
| `yog-nidra-retreat-bali` | 4825 | 5580 | 7145 | tablet: 773px, mobile: 394px | yes |
| `tantra-yoga-retreat-bali` | 4398 | 4946 | 5992 | tablet: 773px, mobile: 394px | yes |
| `our-retreat-location-bali` | 3460 | 3295 | 3755 | tablet: 773px, mobile: 394px | yes |
| `about-mahamukti-yoga-bali` | 4309 | 6200 | 6539 | tablet: 773px, mobile: 394px | yes |
| `yoga-teacher-akhilesh-bodhi` | 3844 | 3593 | 3780 | tablet: 773px, mobile: 394px | yes |
| `yoga-retreat` | 5456 | 4557 | 4719 | none | yes |
| `yoga-membership` | 3111 | 2441 | 2927 | none | yes |
| `contact-mahamukti-yoga-bali` | 2106 | 1818 | 1915 | tablet: 773px, mobile: 394px | yes |
| `blog` | 4138 | 3361 | 4610 | none | yes |
| `yoga-poses-for-7-chakras` | 10186 | 8885 | 11961 | none | yes |
| `yoga-poses-to-correct-bad-posture` | 11683 | 9774 | 9608 | none | yes |
| `top-10-yoga-poses-exercises-for-beginners` | 18034 | 13803 | 14530 | none | yes |
| `kundalini-tantra-yoga` | 7406 | 7847 | 10085 | mobile: 465px | yes |
| `what-is-tantra-yoga` | 7339 | 7008 | 10576 | none | yes |
| `why-choose-mahamukti-yoga-retreats-bali` | 8593 | 8473 | 11581 | none | yes |
| `why-a-yoga-retreat-at-mahamukti-bali-could-be-your-most-transformative-journey-yet` | 11660 | 14098 | 22781 | none | yes |
| `how-to-choose-the-best-yoga-teacher-training-program-in-bali` | 15502 | 21444 | 37142 | none | yes |
| `beginners-guide-to-yoga-retreats-in-bali-with-mahamukti` | 18073 | 24451 | 40068 | none | yes |
| `category__yoga-pose` | 3082 | 3299 | 3026 | none | yes |
| `tag__yoga-poses` | 1889 | 1896 | 1852 | none | yes |
| `services__yoga-teacher-training-bali-ubud` | 1371 | 1227 | 999 | none | yes |
| `services` | 1916 | 1419 | 1664 | none | yes |
| `team__jason-lee` | 1528 | 1307 | 1296 | none | yes |
| `author__mahamuktiyoga` | 8213 | 7820 | 6693 | none | yes |
| `this-page-does-not-exist-audit-404` | 1338 | 1024 | 844 | none | yes |

---

## 2. Key findings

### 2.1 Header & navigation
- **Desktop (1440):** top bar (51px, #FAF8F8) + white header (~120px). Logo left, 7 menu items centred, "Book Now" on Home only. Menu items have an underline active/hover state. Header is **not sticky** (only the back-to-top button and the custom cursor are fixed).
- **Tablet & mobile (standard pages):** top bar stacks (phone + location on one row, socials below); header shows logo, hamburger, and on Home the "Book Now" button. Hamburger opens a full-screen black overlay (see `home--mobile--menu-open.jpg`): site name as green text (not the logo), tagline, top-level items with → arrows for sub-menus, social icons (including a demo Dribbble icon). Menu items fade in sequentially.
- **Osho TTC & Meditation & Breath (mobile/tablet):** no hamburger. On Osho TTC the desktop menu is squeezed into the header and clipped after "About us" (`osho-bali__yoga-teacher-training-osho-bali--mobile--fold.jpg`). Meditation & Breath has no site navigation at all (Elementor Canvas).
- **Bali Retreat:** own nav (Home, Dates, About, Schedule, Location, Book / Enquire); **no viewport meta tag**, so phones render a 980px-wide desktop layout zoomed out (tiny text, `bali-retreat--mobile--fold.jpg`). Tablet height 7,857px vs 4,792px desktop shows its own CSS breakpoints do partly apply at 768.

### 2.2 Systematic 4–5px horizontal overflow
14 standard Elementor pages are 773px wide at 768 and 394px wide at 390. The offending element is the top-level Elementor wrapper/section (right edge at 783/400px) — typical of negative-margin column gaps or a `100vw` section plus scrollbar. Result: slight sideways scroll/zoom on tablets and phones. The Location page's Swiper carousel also overflows (slides to 1416px at tablet, 705px at mobile). `kundalini-tantra-yoga` reaches 465px on mobile due to a theme fixed-row marker element.

### 2.3 Layout behaviour
- Content width: theme page width 1290px (`--theme-var-page_width`), grid gap 30px; sections commonly use 1140–1290px boxed content on desktop.
- Multi-column sections (2–4 columns) collapse to single column at ≤767px; 3-column programme cards on Home become stacked full-width cards.
- Page-title banners are ~455px tall at desktop (measured); their mobile height was not individually measured (see mobile full screenshots).
- Pages get **much longer on mobile**: Home 7.4k → 9.3k px; Osho TTC 9.1k → 13.9k; 200 hr 9.8k → 14.4k; the two longest blog posts 18k → 37k–40k px. The tablet layout is sometimes longer than mobile (About: 6,200 vs 6,539; Bali Retreat), indicating unoptimised tablet styles.
- Images: Home hero's overlapping photos re-stack; gallery masonry leaves gaps at desktop; several galleries/carousels (lazy) appeared blank in captures.
- Typography: headings scale down via Elementor responsive settings; pasted Times New Roman blocks keep fixed 20px sizes on mobile.
- Footer: centred logo / menu / socials / copyright stack; tall on mobile relative to content (logo + 6 links in a wrapped row + icons + divider + copyright).
- Fixed elements: back-to-top button (all widths); custom cursor helper (desktop).
- No mobile-specific content differences were found other than the header and the absence of the "Book Now" button on inner pages.

### 2.4 Lessons for Phase 2
1. Always include the viewport meta (Next.js does by default) and test at 360, 390, 768, 1024, 1280, 1440.
2. Guard against horizontal overflow (no `100vw` inside scrolling bodies; contain carousels).
3. One navigation system for all routes, including programme landing pages; mobile menu must show the logo and real social links only.
4. Keep long pages scannable on mobile: collapse curricula/FAQs, keep dates/fees/CTA near the top.
5. Don't hide primary text behind scroll-triggered animations — content must render visible without JS.
