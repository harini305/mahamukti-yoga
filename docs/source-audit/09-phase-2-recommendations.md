# 09 — Phase 2 Recommendations & Mandatory Requirements

Phase 2 = a **substantially redesigned** frontend in **Next.js (App Router) + JavaScript + React + GSAP/ScrollTrigger**. It must preserve the business's facts, real assets, recognisable brand (logo red, near-black, warm off-white, serif + sans pairing) and required functionality — not copy the WordPress layout.

> Phase 2 must not start until the user approves this audit. Content conflicts in [08 §6](./08-issues-gaps-questions.md) need client answers; until then, build with clearly marked placeholders sourced from the content files, never invented values.

---

## 1. Mandatory design rules (record of requirements)

### Typography
- **Exactly two font families across the entire website.**
  - One for headings.
  - One for body text, navigation, buttons, forms, cards, footer and all other UI.
- Both must be readable, professional and not overly decorative.
- No third family for decorative headings, special sections, the footer, quotes or individual components (the current site's Caveat quote, Days One/Abril Fatface/Amaranth headings, League Spartan landing page and Times New Roman blocks must not be reproduced).
- Hierarchy through weight, size, line-height and letter-spacing only.
- Consistent heading/body sizes for equivalent components; one controlled, responsive type scale (e.g. `clamp()`-based tokens) applied on every route.
- **Final fonts are not selected in this audit.** Options to evaluate in Phase 2 (all Google Fonts, self-hostable via `next/font`):
  - Heading: Crimson Pro (current — maximum continuity), Source Serif 4, Lora, Cormorant Garamond (only at larger sizes).
  - Body/UI: Open Sans (current — maximum continuity), Source Sans 3, Inter, DM Sans.
  - Keeping Crimson Pro + Open Sans preserves the most recognisable link to the original.

### Visual design
- Professional, human-designed appearance; intentional alignment of images and text.
- Consistent content widths, margins, gutters and vertical spacing (define tokens once).
- No unnecessary decorative numbering, eyebrow text, random symbols, floating badges or ornaments. (The current site overuses uppercase eyebrows such as "YOGA COURSES BY MAHAMUKTI YOGA BALI" — don't carry that pattern forward by default.)
- Avoid repetitive AI-looking/template layouts (identical icon-card rows, alternating image/text blocks on every page).
- Visual effects (GSAP/ScrollTrigger) only where they serve the content; text must be visible without JS and respect `prefers-reduced-motion`.
- One CTA style system (primary + secondary), one border-radius language.

### Content
- Concise pages focused on essential information; avoid repeated paragraphs and excessive length (current pages run 9–14k px on mobile).
- Preserve meaningful facts exactly (see [03](./03-content-inventory.md) and `content/`).
- Do not invent claims, testimonials, FAQs, prices, dates or blog posts. Where data is missing/conflicting, show "Dates to be announced"-style neutral states or ask.

### Footer
- Compact and content-driven: logo, essential links, verified contact details, socials, copyright.
- Only verified information; no duplicated menus or excess columns/padding.
- The final content section must be fully visible above the footer, with a natural transition; no overlap, clipping, large blank gaps or fixed-footer interference.

### Images & performance
- Use the original assets (remote URLs in [04-assets-manifest.csv](./04-assets-manifest.csv)); no AI-generated or unrelated stock replacements; do not reuse theme demo images (flagged "THEME DEMO").
- Download only the assets actually used, resize and compress locally (WebP/AVIF where practical), avoid duplicate copies.
- Lazy-load below-the-fold images; correct `sizes`/dimensions; prioritise the LCP image.
- **Configure Next.js to avoid the Vercel Image Optimization quota:** merge `images: { unoptimized: true }` into the existing `next.config` (do not replace unrelated settings). Because optimisation is off, pre-generate appropriately sized files (e.g. 640/1024/1600w) at build-time or by script and serve them with `srcset`/`sizes` or `<picture>`.
- Self-host or embed video properly (no hot-linking); lazy-load maps and third-party widgets.

### Blog
- Lower priority. If built, a simple listing using the 9 real posts; initial listing visual presentation uses **no more than 10 images** unless the user asks otherwise. No invented posts.

---

## 2. Recommended information architecture (proposal — requires approval)

| Proposed route | Source routes | Notes |
|---|---|---|
| `/` Home | `/` | Positioning, upcoming programmes (from one data source), teacher, venue, reviews, enquiry CTA |
| `/about` | About + Teacher | Or keep `/yoga-teacher-akhilesh-bodhi/` separately for SEO; preserve old URLs via redirects |
| `/programmes` (or keep "Courses" and "Retreats") | Calendar + listings | Single source of truth for dates/prices; filters optional |
| Programme detail pages | 200 hr, Osho TTC (consolidate if client confirms), 100 hr Meditation, 100 hr Yin, Bali Retreat, Meditation & Breath, Tantra, Yog Nidra | One shared template: summary (dates, fees, venue, duration, inclusions) → curriculum → schedule → venue → teacher → FAQ → enquiry |
| `/location` | Our Location (+ venue info from Osho/Bali Retreat) | Per-venue blocks once facts are confirmed |
| `/reviews` (or section) | Student Reviews | Trustindex embed or curated static |
| `/gallery` | Photo Gallery | |
| `/faq` | FAQ + programme FAQs | De-duplicate |
| `/payments-refunds` | Payment & Refunds | Keep verbatim policy text |
| `/contact` | Contact / Register | Single enquiry form with programme + date selectors fed by programme data |
| `/blog`, `/blog/[slug]` | Blog + 9 posts | Low priority |
| `/privacy-policy` | (missing) | Needed because forms collect data — content must come from the client |
| 404 | | |

Keep existing slugs where SEO value exists, or add 301 redirects for every current URL (pages, posts, legacy `/about-us/…`, `/yoga-courses-in-bali/…`, `/yoga-retreats-in-bali/…`, `/services/…`, `/osho-bali/`) and for removed demo routes (`/yoga-retreat/`, `/yoga-membership/`, `/team/*`, `/layouts/*`).

## 3. Implementation notes

- **Data model:** a `programmes` JSON/JS module (name, slug, type, venue, sessions [{start, end}], prices [{label, amount, currency}], inclusions, exclusions, schedule, curriculum, FAQ ids, images) consumed by Home, Calendar, programme pages and the enquiry form — eliminating today's date/price drift.
- **Venues module:** name, address, map query/embed URL, description, images — one record per confirmed venue.
- **Forms:** decide backend with the user (see [06 §4](./06-functionality-and-dependencies.md)). Include consent text and a real privacy link; client-side + server-side validation; honeypot/spam protection; success and error states.
- **SEO:** per-route `metadata` (reuse current Yoast titles/descriptions from `data/wp-routes.json` where accurate; fix the "300 Hour" claim only with approval), canonical URLs, Open Graph images, `sitemap.ts`, `robots.ts`, JSON-LD (Organization, Course/Event where data is confirmed, BreadcrumbList).
- **Navigation:** one header for all routes with a working mobile menu (logo, real socials only); consider a sticky compact header with a single primary CTA.
- **Accessibility:** alt text for every image (many originals lack it — write descriptive alt text from what the photo shows, not marketing claims), focus states, colour contrast (current body grey #848484 on #FAF8F8 is low contrast — choose a darker body colour within the palette), reduced motion.
- **Animation:** GSAP + ScrollTrigger for restrained reveals/parallax only; register plugins client-side; clean up on route change; no content hidden without JS.
- **Assets:** create a local `public/images/…` set only for referenced files; record each local path back into the manifest's `local_path` column during Phase 2.
- **Do not reproduce:** demo content, AncoraThemes links, placeholder emails, broken hot-links, multiple CTA colours, Times New Roman text, the 4–5px overflow.

## 4. Suggested Phase 2 order
1. Resolve client questions (08 §6) → finalise programme/venue data.
2. Pick the two fonts and define tokens (type scale, colours, spacing, radii).
3. Build shared layout (header, mobile menu, footer) and the programme template.
4. Build routes; wire data; implement redirects and metadata.
5. Asset pipeline (download → resize → compress), `images.unoptimized: true` merged into config.
6. Forms backend per decision; test submission end-to-end.
7. Responsive QA at 360/390/768/1024/1280/1440; Lighthouse; link check.

## 5. Confirmation
- The **two-font rule** and all mandatory design, content, footer, image/performance and blog requirements above are recorded for Phase 2.
- **No redesign, implementation, configuration change, package installation in the project, GitHub push or deployment was performed in Phase 1.**
