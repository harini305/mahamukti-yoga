# 08 — Issues, Gaps, Risks & Open Questions

Everything here is documented, **not corrected**. Phase 2 must not resolve factual conflicts by guessing — the client should answer the questions in §6 first.

---

## 1. Factual conflicts (business decisions needed)

| # | Conflict | Evidence |
|---|---|---|
| F1 | **Which venue?** Four venue identities: "Uma Dana Mandi, Ubud" (Home, Contact, Location text), "Uma Mandi Ubud" (Contact map, Calendar), "The OSHO Bali, Madangan / Petak Kaja, Gianyar" (TTC pages, Meditation, Location page address + map), "(Being)Sattvaa Retreat, Kendran, Ubud" (Bali Retreat). The Location page describes Uma Dana Mandi but gives the OSHO Bali address and map. | content/our-retreat-location-bali.md, content/home.md, content/bali-retreat.md |
| F2 | **Two 200-hour TTCs "@ The Osho Bali"** with different dates and prices: `/200-hour-yoga-teacher-training/` = 1–20 Dec 2026 → Mar 2027, USD 2200 / 1900; `/osho-bali/yoga-teacher-training-osho-bali/` = 1–22 Sep → Dec 2026, IDR 35.67M / 27.18M / 22.08M. Home lists Sep–Nov only. | 02 §3.13–3.14, Calendar |
| F3 | **Duration vs nights:** 200 hr says "24 Nights Accommodation" for 1st–20th date ranges (19 nights); Yin page says both "10 Nights" and "9 nights"; Yog Nidra 26–29 Oct = 3 nights vs "4 Nights"; 100 hr Meditation "10-day" with "10 Nights". | content files |
| F4 | **Currencies:** USD (200 hr, Bali Retreat, deposit), IDR (Osho TTC, Meditation), EUR (Tantra, Yog Nidra). | 03 §3 |
| F5 | **Stale dates (as of 2026-10-23):** Tantra (Mar–May 2025), Yog Nidra (Oct 2024), Meditation & Breath (May 2026), Bali Retreat Oct dates (1–10 Oct 2026, already past), Osho TTC Sep/Oct 2026 sessions, Home "UPCOMING" list (Sep/Oct). Tantra date "1st April – 3rd March 2025" is impossible. | content files |
| F6 | **Bali Retreat form dropdown** offers 12–16 Mar, 26–31 Mar, 5–9 Apr, 14–17 Apr 2026 — none match the dates on the page. | data/pages-summary.json (bali-retreat forms) |
| F7 | **Bali Retreat meals:** Oct sessions "Brunch + Dinner"; Dec sessions "Breakfast + Dinner"; FAQ page says food "three times a day". | content/bali-retreat.md, FAQ |
| F8 | **Teacher experience:** "25 + years" (Home), "22+ years of teaching" (About/Teacher/stats), "over 22 years", "last 20 years" (Meditation), "my 20 years" (Yog Nidra), "more than 25 years" (Includes cards), founded "since 2006" (= 20 years). | content files |
| F9 | **Reach claim:** "traveled worldwide to teach Yoga classes to **millions** of students" vs "1000+ happy students". | Home, About |
| F10 | **Phone numbers:** +91 96343 75005 (site) vs WhatsApp +91 95362 00770 (Osho/Meditation). Which should be primary? Is either a WhatsApp line? | |
| F11 | **Location text:** "Ubud, Bali - Indonesia, 80571" (Home) vs Bali Retreat postcode 80561 vs OSHO Bali 80515. | |
| F12 | **SEO claims:** Home title/description mention "200 & 300 Hour TTC" and "experienced Indian teachers"; no 300-hour course is offered on the site. FAQ mentions RYS200/300/500 "in India and abroad". | |
| F13 | **Certification for 50-hour course:** H1 says "Yoga Alliance certified 50 Hours" — confirm (50-hour programmes are normally YACEP continuing education, not a teacher certification). | |
| F14 | **Reviews & testimonials refer to Goa/India/Netherlands** (e.g. Manuela Maranhão "200 hour … in Goa"; Denise E "200hrs … in Goa, India"; reviewer mentions lake/beach location). Fine as teacher reputation, but should not be presented as Bali-specific. | |
| F15 | **Marketing anecdotes** naming students "Lisa", "Sarah", "Mike" (200 hr page) — unverified; treat as non-testimonial copy or remove. | |
| F16 | **Payment:** Bank in Rishikesh, India; "IBN Number" (should IBAN be stated? Indian accounts don't have IBANs); PayPal mentioned with no link/address. Confirm details are current before republishing. | content/payment-refunds.md |
| F17 | **Images with other locations in filenames** (Goa, Switzerland, "300-Hour-…-In-Goa") are used on Bali pages and as a blog featured image. Confirm they depict Bali or swap. | 04-assets-manifest.csv |

## 2. Content quality issues (preserve meaning, fix in Phase 2 only with approval)

Typos/grammar observed (verbatim): "Offfered", "TEACEHR", "TEACEHRS", "Curriculun", "Manamukti", "NE ANNOUNCED", "Hygenic", "Sliver Pack" (demo page), "We'll be leased to hear from you", "learn to art of Living", "leaning Yoga Training", "Understating root causes", "masted", "Pschic", "Guideing", "Vijan Bhairav" vs "Vijayan Bhairav", "Yog Nidra" vs "Yoga Nidra", "Yin Yan" vs "Yin Yang", "More info's", "Which ever in case of peace allows…" (refund policy, unclear), "The fees applied when someone also signup other wise fee would be the same of private room" (Bali Retreat), "{USA}allowing", eyebrow "200 HOUR MEDITATION TEACHER TRAINING" on the 200 hr YTT page, duplicate FAQ question on FAQ page, "Daily Tantra Yoga & Meditation Classes" in every programme's inclusions.

Mixed brand naming: Mahamukti Yoga / Maha Mukti Yoga / Mahamukti Yoga School / Mahamukti Yoga Center / Mahamukti Yoga Bali.

## 3. Technical & SEO issues

| # | Issue | Impact |
|---|---|---|
| T1 | `/meditation-breath-training-bali/` canonical points to `/tantra-yoga-retreat-bali/` and the page is missing from the sitemap | Page not indexable as itself |
| T2 | `/bali-retreat/` has an empty `<title>`, no viewport meta, no JSON-LD, broken logo | SEO + mobile UX |
| T3 | Broken internal links (404): `/privacy-policy/` (Home form consent, 4 blog posts), `/about-us/`, `/contact-us/`, `/memberships-2/`, `/services/online-yoga/`, `/shop/` | See `data/links.json` |
| T4 | Many internal links rely on 301s (`/about-us/…`, `/yoga-courses-in-bali/…`, `/yoga-retreats-in-bali/…`, `/services/…`, `/bali-retreat`) | Preserve as redirects |
| T5 | Theme demo pages are live and indexable: `/yoga-retreat/`, `/yoga-membership/`, `/team/*`, `/layouts/*` (17 layout posts in the sitemap), `/services_group/*`, `/team_group/*`, `/testimonials_group/*`, `/portfolio/` | Thin/demo content indexed |
| T6 | Demo contact data in markup: `info@email.com` mailto (Home and others, hidden), `test@fwe.com` (blog email share), `+1 840 841 25 69` and `info@example.com` (demo pages), AncoraThemes social links on 37 pages | Trust/SEO |
| T7 | Body text set in Times New Roman by pasted inline styles on 15 pages; up to 8 font families on one page | Brand/performance |
| T8 | Hero text hidden until JS entrance animations run | Risk of invisible content (LCP/accessibility) |
| T9 | Hot-linked assets: Home video from `baliyogaretreatsubud.com`; logo from `mahamuktiyoga.com` (404) | Fragile, uncontrolled |
| T10 | 4–5px horizontal overflow on 14 pages; Osho TTC mobile menu clipped; no mobile nav on 3 landing pages | Mobile UX |
| T11 | Console JS errors (`reading 'i18n'`, `e.indexOf is not a function`) | Possible broken widgets |
| T12 | `tel:` links missing the leading `+` on most pages; Home hero phone link points to `#` | Click-to-call reliability |
| T13 | Two H1s on most inner pages (title banner + content H1); the demo page `/yoga-retreat/` has 7 H1s | SEO structure |
| T14 | 176 of 294 media-library items have no alt text; 47 used assets flagged "no alt text" | Accessibility |
| T15 | Footer credit "HimalayanInfotech.com" links to the site's own home page | Minor |
| T16 | Featured image of one post (media ID 21755) not returned by the media API | Missing asset |

## 4. Asset / performance risks
- 17 used/library images > 500 KB (largest: 16 MB MP4 video, 2.3 MB `beautiful-shot-old-buddha-statue-1.jpg` 2388×2388, ~2 MB PNG photos `pic-3.png`…`pic-7.png`). Photos stored as PNG.
- 41 images served much larger than rendered (natural > 2.5× rendered width).
- Logo is only 278×72 px raster; no SVG.
- Many duplicate uploads (e.g. `akhi7.jpg` / `akhi7-1.jpg`, `IMG_20230807_103233.jpg` / `-1.jpg`) and Elementor-generated crops.
- 21 theme demo images ("…-copyright…", `dummy.png`) on demo pages — must not be reused (licensing).
- ~4.4 MB of combined CSS across 54 stylesheets on Home.

## 5. Coverage limits of this audit
- **Inspected fully** (rendered at 3 widths + source text): 23 WordPress pages, 9 posts, blog, 1 category, 1 tag, author, services archive + 1 service, 1 team member, 1 testimonial (redirect), 404 — 39 routes, 117 captures.
- **Inspected partially** (HTTP status + title only): `/layouts/*` sample, `/services_group/*`, `/team_group/*`, `/testimonials_group/*`, other tags/categories, `/portfolio/`, `/feed/`, `/?s=`.
- **Discovered but inaccessible/broken:** `/privacy-policy/`, `/about-us/`, `/contact-us/`, `/memberships-2/`, `/services/online-yoga/`, `/shop/`, `/cart/`, `/checkout/`, `/my-account/` (404).
- **Not verified:** form submission/validation/emails; hover states; dropdown and accordion animations; gallery lightboxes; carousel autoplay; video playback; Mailchimp popup; real-device rendering; Lighthouse/Core Web Vitals (not run).
- **No local project files existed** — the workspace was empty, so no local assets are available; every asset is remote (see 04).
- Draft/private WordPress content is not visible through the public API and was not assessed.

## 6. Questions for the client (blocking for Phase 2 content)

1. Which venue(s) are current, and which programme runs where? Should the Location page describe Uma Dana Mandi, OSHO Bali, Sattvaa, or several?
2. Is there one 200-hour TTC or two? Which dates and which price/currency are correct?
3. Which programmes are currently offered (Tantra and Yog Nidra show only past dates; Meditation & Breath was May 2026)? Should past programmes be hidden, shown as "dates TBA", or removed?
4. Preferred display currency (USD / EUR / IDR)? Should prices be shown at all?
5. Correct years of experience and founding year; student count.
6. Primary phone and WhatsApp number; should WhatsApp click-to-chat be offered?
7. Where should enquiries go (email address), and which fields are mandatory? One form or per-programme forms?
8. Are the bank details and PayPal still valid? Should PayPal have a link? Is a privacy policy / terms page available (currently missing)?
9. Can you provide an SVG or high-resolution logo? Is the Bali Retreat page's red/pink visual style the desired new direction, or should the site follow the main logo/brand?
10. Is the Home video's source (`baliyogaretreatsubud.com`) yours, and can we self-host or use YouTube instead? Are the local MP4s in the media library intended for the site?
11. Do the Goa/Switzerland-named images depict Bali? Any newer Bali photography available?
12. Keep the Trustindex Google reviews widget, or show selected reviews statically?
13. Is the blog required at launch? (9 posts exist.)
14. Is "Yoga Alliance certified 50 Hours" accurate for the Meditation & Breath course? Is a 300-hour course offered (mentioned in SEO title)?
15. Confirm demo pages (`/yoga-retreat/`, `/yoga-membership/`, `/team/*`) can be removed and redirected.
