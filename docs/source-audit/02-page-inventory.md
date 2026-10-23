# 02 — Page & Route Inventory

Source: https://mahamuktiyogabali.com · Audited 2026-10-23 · WordPress (theme "Chakra" by ThemeREX/AncoraThemes + Elementor/ElementsKit)

Route discovery used: Yoast XML sitemaps (12 sub-sitemaps), robots.txt, the WordPress REST API (`/wp-json/wp/v2/pages|posts|media|…`), header/footer/in-content links on every rendered page, and HTTP probes of likely legacy paths.

Full verbatim text for every route is in [content/](./content/) (one Markdown file per route). Structured per-page data (sections, headings, CTAs, forms, embeds, fonts, colors, viewport heights, overflow) is in [data/pages-summary.json](./data/pages-summary.json). WordPress IDs, dates, SEO titles/descriptions and canonicals for every page/post are in [data/wp-routes.json](./data/wp-routes.json).

**Legend — Recommendation:** **Implement** = build in Phase 2 · **Consolidate** = merge into another route · **Legacy** = keep a redirect only, no page · **Review** = needs a business decision before building · **Drop** = theme/demo artefact, do not build.

---

## 1. Route summary

### 1.1 Main navigation (header menu, desktop)

| Menu label | Type | Target |
|---|---|---|
| Home | link | `/` |
| About us | dropdown parent (`#`) | About Mahamukti Yoga Bali → `/about-mahamukti-yoga-bali/` · Yoga Teacher Akhilesh Bodhi → `/yoga-teacher-akhilesh-bodhi/` · Our Location in Bali → `/our-retreat-location-bali/` · Student Reviews → `/yoga-student-reviews-bali/` · Photo Gallery → `/photo-gallery/` |
| Yoga Retreats | dropdown parent (`#`) | Tantra Yoga Retreat Bali → `/tantra-yoga-retreat-bali/` · Yog Nidra Retreat Bali → `/yog-nidra-retreat-bali/` · Bali Retreat → `/bali-retreat` (301 → `/bali-retreat/`) · 50 Hour Meditation & Breath Training – Bali → `/meditation-breath-training-bali/` |
| Yoga Courses | dropdown parent (`#`) | 100 Hour Meditation Teacher Training → `/100-hour-meditation-teacher-training/` · 100 Hour Yin Yan Course → `/100-hour-yin-yan-course/` · 200 Hour Yoga Teacher Training → `/200-hour-yoga-teacher-training/` · 200 Hour Yoga Teacher Training at Osho Bali → `/osho-bali/yoga-teacher-training-osho-bali/` |
| Calendar | link | `/yoga-event-calendar-bali/` |
| Contact | link | `/contact-mahamukti-yoga-bali/` |
| More info's | dropdown parent (`#`) | Blog → `/blog/` · Registration → `/contact-mahamukti-yoga-bali/` (duplicate of Contact) · Payment & Refunds → `/payment-refunds/` · Frequently Asked Questions → `/frequently-asked-questions/` |
| **Book Now** (button) | CTA | `/contact-mahamukti-yoga-bali/` |

Top bar (above header): phone `+91 96343 75005` (tel link), location text, Facebook / Twitter / YouTube / Instagram icons.

### 1.2 Footer menu
Home · About us · Our Location · Yoga Teacher · Calendar · Contact / Register — plus the four social icons and "Mahamukti Yoga Bali © 2026. All Rights Reserved | Developed by : HimalayanInfotech.com" (the HimalayanInfotech link actually points to the site home page).

### 1.3 All discovered routes

| # | Route | HTTP | Class | In nav? | Recommendation |
|---|---|---|---|---|---|
| 1 | `/` | 200 | Main | Yes | **Implement** |
| 2 | `/about-mahamukti-yoga-bali/` | 200 | Main (About) | About ▸ | **Implement** |
| 3 | `/yoga-teacher-akhilesh-bodhi/` | 200 | Main (About) | About ▸ | **Implement** |
| 4 | `/our-retreat-location-bali/` | 200 | Main (About) | About ▸ | **Review** — venue facts conflict (see 08) |
| 5 | `/yoga-student-reviews-bali/` | 200 | Secondary | About ▸ | **Implement** (or consolidate into About/Home) |
| 6 | `/photo-gallery/` | 200 | Secondary | About ▸ | **Implement** |
| 7 | `/tantra-yoga-retreat-bali/` | 200 | Detail (retreat) | Retreats ▸ | **Review** — all dates are in the past |
| 8 | `/yog-nidra-retreat-bali/` | 200 | Detail (retreat) | Retreats ▸ | **Review** — only date is 26–29 Oct 2024 |
| 9 | `/bali-retreat/` | 200 | Detail / landing (custom PHP template) | Retreats ▸ | **Implement** — current, priced, dated |
| 10 | `/meditation-breath-training-bali/` | 200 | Detail / landing (Elementor Canvas, own header) | Retreats ▸ | **Review** — only date is 1–7 May 2026 (past) |
| 11 | `/100-hour-meditation-teacher-training/` | 200 | Detail (course) | Courses ▸ | **Implement** (dates "to be announced") |
| 12 | `/100-hour-yin-yan-course/` | 200 | Detail (course) | Courses ▸ | **Implement** (dates "to be announced") |
| 13 | `/200-hour-yoga-teacher-training/` | 200 | Detail (course) | Courses ▸ | **Review/Consolidate** with #14 — two 200-hr programmes at the same venue with different dates & prices |
| 14 | `/osho-bali/yoga-teacher-training-osho-bali/` | 200 | Detail / landing | Courses ▸ | **Review/Consolidate** with #13 |
| 15 | `/yoga-event-calendar-bali/` | 200 | Listing (events) | Yes | **Implement** |
| 16 | `/contact-mahamukti-yoga-bali/` | 200 | Contact / enquiry | Yes (+ Book Now, + Registration) | **Implement** |
| 17 | `/payment-refunds/` | 200 | Utility / policy | More ▸ | **Implement** |
| 18 | `/frequently-asked-questions/` | 200 | Utility | More ▸ | **Implement** |
| 19 | `/blog/` | 200 | Listing (blog) | More ▸ | **Implement (low priority)** |
| 20–28 | 9 blog posts (see §3) | 200 | Editorial | via Blog | **Implement (low priority)** |
| 29 | `/osho-bali/` | 200 | Empty parent page (shows blog sidebar only) | No | **Legacy** → redirect to #14 |
| 30 | `/yoga-retreat/` | 200 | Theme demo page ("Popular Products", demo phone `+1 840 841 25 69`) | No | **Drop** (redirect to `/`) |
| 31 | `/yoga-membership/` | 200 | Theme demo page (Lorem ipsum, "$30 Sliver Pack") | No | **Drop** (redirect) |
| 32 | `/category/{guide-for-beginners, uncategorized, yoga-philosophy, yoga-pose}/` | 200 | Archive | No | **Review** (optional filter on blog) |
| 33 | `/tag/*` (9 tags in sitemap, 19 tags exist) | 200 | Archive | No | **Legacy** (no dedicated pages) |
| 34 | `/author/mahamuktiyoga/` | 200 | Archive (author: Akhilesh Bodhi) | No | **Legacy** |
| 35 | `/services/` | 200 | CPT archive "All Services" (3 cards) | No | **Legacy** |
| 36 | `/services/yoga-teacher-training-bali-ubud/` | 200 | CPT detail (near-empty) | Linked from Home cards | **Legacy** → redirect to TTC |
| 37 | `/services/yog-nidra-bali/` | 301 → #8 | CPT | Linked from Home cards | **Legacy** (keep redirect) |
| 38 | `/services/yin-yan-yoga-bali/` | 301 → #12 | CPT | Linked from Home cards | **Legacy** (keep redirect) |
| 39 | `/services_group/{care, what-we-offer}/` | 200 | CPT taxonomy | No | **Drop** |
| 40 | `/team/` + 5 members (`jason-lee`, `amy-walker`, `natali-green`, `nelly-carter`, `david-jones`) | 200 | Theme demo (Lorem ipsum bios) | No | **Drop** |
| 41 | `/team_group/{instructors, mentors}/` | 200 | Theme demo | No | **Drop** |
| 42 | `/testimonials/*` (3) | 301 → `/` | CPT | No | **Legacy** |
| 43 | `/testimonials_group/clients/` | 200 | CPT taxonomy | No | **Drop** |
| 44 | `/layouts/*` (17), `/layouts_group/slider/` | 200 | Theme layout builder internals (headers, footers, popups) exposed in sitemap | No | **Drop** (should not be indexed) |
| 45 | `/portfolio/` | 200 | Theme CPT archive | No | **Drop** |
| 46 | `/?s=…` search | 200 | Utility | Search form exists in hidden theme panel / blog sidebar | **Review** |
| 47 | `/feed/` | 200 | RSS | No | Optional |
| 48 | Legacy paths `/about-us/…`, `/yoga-courses-in-bali/…`, `/yoga-retreats-in-bali/…` | 301 → current routes | Legacy | Linked from Home/About | **Legacy** (preserve redirects) |
| 49 | Broken: `/about-us/`, `/contact-us/`, `/memberships-2/`, `/privacy-policy/`, `/services/online-yoga/`, `/shop/` | 404 | Broken links | Linked from pages (see 08) | Fix/redirect; `/privacy-policy/` needs a real page |
| 50 | Any unknown URL | 404 | Theme 404 page ("URL not found / 404 / Oops...") | — | **Implement** a 404 |

`/wp-login.php` is reachable (200) and `/wp-admin/` redirects to it — expected for WordPress; not part of the rebuild.

---

## 2. Shared components

| Component | Where | Notes |
|---|---|---|
| **Top bar** | All standard pages | Phone (tel link), location text ("Ubud, Bali - Indonesia, 80571" on Home; "Ubud - Bali, Indonesia" elsewhere), 4 social icons. A stray black bullet dot renders at far left (desktop). |
| **Main header** | All standard pages | Logo PNG (278×72) left, centred menu (Crimson Pro 18px/500), orange-red "Book Now" button (Home only – other pages have no Book Now in the captured header). Not sticky. |
| **Page title banner** | All inner pages except Home, Bali Retreat, Meditation & Breath, Osho TTC, legacy pages | ~455px tall background photo, white H1 (Crimson Pro) + breadcrumb "HOME / PAGE NAME" in small caps. |
| **"Includes / Not Including" bar** | 200 hr, 100 hr Yin, 100 hr Meditation, Tantra, Yog Nidra | Same component, often with identical text ("Daily Tantra Yoga & Meditation Classes" appears even on non-Tantra courses). |
| **"More Courses to Explore" strip** | 200 hr, 100 hr Yin, 100 hr Meditation | Cross-links. |
| **"The Course/Retreat Includes" 4-card row** | 200 hr, 100 hr pages, retreats, Meditation & Breath | Experienced Teachers · Hygenic & Local Meals · Yoga & Meditation · Affordable Courses / Beautiful Location. |
| **"A glimpse of our Retreat" gallery** | Most course/retreat pages | Image carousel/grid (lazy-loaded). |
| **"Meet the Trainer" block** | Osho TTC, Meditation & Breath, About, Home | Akhilesh Bodhi bio + CTA. Bio text and stated experience years vary (see 08). |
| **FAQ accordion** | FAQ page, 200 hr, Osho TTC | Elementor accordion. |
| **"Typical Daily Schedule"** | Osho TTC, Meditation & Breath, 100 hr pages, Bali Retreat | Timed list. |
| **CTA band** | Course/retreat pages | Headline + one button (all go to Contact). |
| **Testimonials** | Home, About | 2 quotes (Max Murkser, John Weiermann). |
| **Footer** | All standard pages | Black (#080808) band: footer logo, 6-link menu, socials, copyright row. Measured ~395px tall on Home desktop. |
| **Back-to-top button** | All standard pages | Fixed, bottom-right (theme). |
| **Mobile menu** | Standard pages ≤1024px | Hamburger → full-screen black overlay, site title text in green (not logo), tagline, menu with arrow sub-menu toggles, social icons (incl. a Dribbble icon from the theme demo). |

---

## 3. Page-by-page inventory

Viewport heights are full-page document heights measured at 1440 / 768 / 390 px. "Overflow" means `scrollWidth > viewport` (horizontal scroll). Colour/typography details per page are in `data/pages-summary.json`; site-wide brand values are in [05-brand-reference.md](./05-brand-reference.md).

### 3.1 Home — `/`
- **Purpose:** Primary landing page; positions the school (YTT + retreats in Bali), routes to calendar, courses, teacher, location and contact.
- **SEO:** Title "Yoga Teacher Training in Bali | 200 & 300 Hour TTC | Mahamukti Yoga"; meta "Join Yoga Alliance certified 200 & 300 Hour Yoga Teacher Training in Bali…" (no 300-hour course exists on the site). Canonical `/`. OG image `2026/07/yoga-teacher-training-bali-2026.webp`. Yoast JSON-LD (WebSite + Organization).
- **Sections (order):**
  1. Top bar + header (Book Now).
  2. Hero (split): eyebrow "MAHAMUKTI YOGA - BALI", **H1 "Yoga Teacher Training in Bali"**, 2 paragraphs, "OUR CALENDAR" button, phone link (points to `#`, not `tel:`). Right: two overlapping rounded photos (`yoga-teacher-bali-akhilesh-bodhi.webp`, `yoga-teacher-training-bali-2026.webp`).
  3. Ganesh motif image + large headline "Your journey to eternal world of happiness starts with us, learn to art of Living and Mindful." (last word animated/underlined) + "Mahamukti Yoga Center / Ubud – Bali".
  4. "Upcoming Yoga Retreats in Bali" (gold H2) + 3 full-bleed image cards (Services CPT): Yoga Teacher Training Bali 2026 / Yog Nidra Retreat / Yin Yoga Course.
  5. 3 icon features: Daily Yoga & Meditation · Fully Residential Program · Group & Personal Discussions.
  6. Split: photo of Akhilesh + "Yoga Courses Offfered at Bali" (typo) + list of 5 programmes + Yoga Alliance / RYT 200 badges + "EVENT CALENDAR".
  7. Full-width **video** (`baliyogaretreatsubud.com/vids/yoga-retreats-bali.mp4`, third-party domain) over a parallax background.
  8. "Meet our yoga teacehr" (typo) — Akhilesh Bodhi photo with "25 + years of Teaching & Experience" badge, bio, "ABOUT YOGA TEACHER".
  9. "UPCOMING YOGA COURSES IN BALI 2026" — 200 hour YTT, dates 1–22 Sep / Oct / Nov 2026, "MORE DETAILS / REGISTER" → Osho TTC.
  10. "OUR LOCATION IN UBUD BALI — Uma Dana Mandi, Ubud - Bali" + description + "VIEW OUR YOGA RESORT"; image area renders blank (lazy placeholder) in capture.
  11. "Testimonials / Words by our Students" — 2 quotes in bordered cards.
  12. "CONTACT US / Get in touch!" + address, phone, email + **Contact Form 7** form.
  13. Footer.
- **Interactive:** dropdown menus, video autoplay, CF7 form, back-to-top, custom mouse-follower cursor (theme "mouse helper").
- **Responsive:** 7412 / 8103 / 9335 px. No overflow. Hamburger at tablet & mobile. Hero stacks; hero text was invisible in the mobile fold capture until animations ran.
- **Retain:** H1 & intro, programme list, teacher summary, upcoming dates, location summary, testimonials, contact block.
- **Risks:** hot-linked video from another domain; 3 programme cards link to legacy `/services/…` URLs; dates conflict with other pages; "300 Hour" in SEO title.

### 3.2 About Mahamukti Yoga Bali — `/about-mahamukti-yoga-bali/`
- **Purpose:** School story, credibility, why choose, teacher intro.
- **SEO:** "About Mahamukti Yoga | Authentic & Certified Yoga School in Bali".
- **Sections:** Title banner → **H1 "Mahamukti Yoga Center - Bali"** + story ("beacon of traditional yoga training since 2006") + CONTACT US → stats row on pink (#E2CECE): 1000+ happy students · 22+ years of teaching · Yoga Alliance certified → "Why Choose Mahamukti Yoga" (3 reasons with 7 images) + REGISTER FOR A COURSE → dark (#1A1719) "MEET YOUR FACILITATOR / TRAINER — Akhilesh Bodhi" + quote "Knowledge of Yoga.. is the real knowledge of Life.." (Caveat script font) + "E-RYT Yoga Teacher" → Testimonials (2) → Footer.
- **Responsive:** 4309 / 6200 / 6539 px. Tablet overflow by 5px.
- **Retain:** founding year, stats, why-choose points, teacher block, testimonials.

### 3.3 Yoga Teacher Akhilesh Bodhi — `/yoga-teacher-akhilesh-bodhi/`
- **Purpose:** Teacher profile (founder).
- **Sections:** Title banner → H1 "Yoga teacher - Akhilesh Bodhi" (+ 3 images) with bio (Reiki master, 22+ years, Hatha/Ashtanga/Raja) → stats row (same as About) → "Teaching Philosophy" (Iyengar / Pattabhi Jois inspiration) + CONTACT US → CTA band "Begin Your Journey to Transformation Today!" + BOOK NOW → Footer.
- **Responsive:** 3844 / 3593 / 3780 px; tablet overflow 5px.

### 3.4 Our Location in Bali — `/our-retreat-location-bali/`
- **Purpose:** Accommodation/venue.
- **SEO:** "Yoga Teacher Training Accommodation in Bali | Mahamukti Yoga".
- **Sections:** Title banner → H1 "Yoga Retreat Location in Bali" — describes **Uma Dana Mandi, Ubud** but lists the address "G8PG+28X Ds Madangan Petak Bitra, Petak Kaja, Kec. Gianyar…" (the OSHO Bali area) and embeds a Google Map of **OSHO Bali** → "Accommodations" text → 2 images → "OUR RESORT / Room Includes" (Fresh & Local Delicacies · Luxury Rooms w/ AC · Inhouse Pool & Spa) on brown (#775A5A) → "Glimpse of our Resort" (Swiper carousel, 8 images) → Footer.
- **Responsive:** tablet overflow caused by the Swiper carousel (slide extends to 1416px).
- **Risk:** venue identity is contradictory — see 08.

### 3.5 Student Reviews — `/yoga-student-reviews-bali/`
- **Purpose:** Social proof.
- **Sections:** Title banner → **Trustindex Google Reviews widget** ("EXCELLENT · Based on 11 reviews", reviewer avatars from Google, "Read more" toggles) → Footer.
- **Dependency:** `cdn.trustindex.io` script + `lh3.googleusercontent.com` avatars; widget font "Trustindex Poppins".
- **Note:** reviews are real Google reviews but several describe trainings in Goa, India and the Netherlands, dated "2–7 years ago" (relative). Full captured text is in `content/yoga-student-reviews-bali.md`.

### 3.6 Photo Gallery — `/photo-gallery/`
- **Sections:** Title banner (Bali temple at sunset) → masonry grid of 14 photos (no captions; 11 images without alt) → Footer.
- **Interactive:** lightbox not verified. Layout leaves visible gaps in the masonry at desktop.

### 3.7 Tantra Yoga Retreat Bali — `/tantra-yoga-retreat-bali/`
- **Sections:** Title banner → H1 + dates "1st April – 3rd March 2025 / 1st April – 3rd April 2025 / 1st May - 3rd May 2025" + Register Now + intro + "Features of this Retreat" (6 bullets) + "Check in 12.15 pm | Check out 11.30 am" + "Fees : 700 Euro Private room | 600 Euro Shared room" + 5 images → Includes bar (4 nights) → "Tantra Yoga Retreat / Historical Background" → "The Retreat Includes" cards → "More About The Retreat" → gallery (8) → CTA "Unlock the Power Within!" JOIN NOW → Footer.
- **Risk:** all dates past; first date range impossible; EUR pricing differs from other pages (USD/IDR).

### 3.8 Yog Nidra Retreat Bali — `/yog-nidra-retreat-bali/`
- **Sections:** as Tantra; date "26 - 29 October 2024"; same EUR fees and 4-night inclusion; "What is Yoga Nidra or Psychic sleep?"; "Benefits of Yoga Nidra"; gallery (8); CTA "Take the Next Step in Your Yoga Journey!".
- **Risk:** only date is two years old; first-person "which i have masted in my 20 years" copy.

### 3.9 Bali Retreat ("Awaken the Body") — `/bali-retreat/`
- **Template:** custom PHP template `page-bali-retreat.php` — **completely separate design** (own sticky top nav with in-page anchors, League Spartan font, red pill buttons, pink/cream cards). No standard header/top bar; only a minimal footer "© 2026 Mahamukti Yoga. All rights reserved."
- **SEO:** Yoast title "Residential yoga retreats in Bali | Mahamukti Yoga" exists, but the rendered `<title>` is empty and **there is no viewport meta tag**.
- **Sections:** Nav (Home, Dates, About, Schedule, Location, Book / Enquire) → Hero: "BALI RETREAT • 2026", **H1 "Awaken the Body Yoga Retreat"**, pills (Hatha Yoga Flow, Kundalini Yoga, Breathwork, Meditation, Vedic Philosophy), buttons, facilitator note, group photo → Quick Info (Ubud, Bali · Check-in after 1:00 PM · Check-out 11:30 AM · Brunch + Dinner · Limited Spots • Small Group) → **Retreat Dates (2026)**: 1–5 Oct, 6–10 Oct, 9–13 Dec, 15–19 Dec 2026; each 4 nights at "Sattvaa Retreat, Bali", **Private USD 1040 / Shared USD 760 per person** + inclusion notes → "About 'Awaken the Body'" (2 photos + text) + Body / Breath / Mind cards → "More Information" accordions (What you can get · What's included) → "Sample Daily Schedule" (Day 1 Arrival expanded; Day 2/3/4 collapsed) → "Location & Booking": **BeingSattvaa Retreat, Jalan Raya Kendran, Banjar Kepitu, Desa Kendran, Ubud, Bali – 80561**, Google Map embed, + **CF7 enquiry form** (Name, WhatsApp, Email, Retreat date select, Message).
- **Risks:** logo hot-linked from `mahamuktiyoga.com` returns 404 (broken image shown); form date dropdown lists **12–16 Mar, 26–31 Mar, 5–9 Apr, 14–17 Apr 2026** (not the dates on the page); map embed area rendered blank in captures; mobile renders at 980px wide (scaled desktop).

### 3.10 50 Hour Meditation & Breath Training — `/meditation-breath-training-bali/`
- **Template:** Elementor Canvas (no site header/footer). Own top strip: email + "What's App +91 95362 00770" (different number from site phone).
- **SEO:** Title "Meditation & Breath Training Bali | Pranayama Mindfulness Course"; **canonical points to `/tantra-yoga-retreat-bali/`** (wrong). Not in sitemap.
- **Sections:** H1 "Yoga Alliance certified 50 Hours Meditation and Breath-work training in Bali, Indonesia" + "@ The Osho Bali - 1st May to 7th May 2026" + Register Now → "Breath Training for Beginners / Breathe Better.. Feel Better.. Live Better.." → "More about the retreat.." → "What will you Learn…" (6 modules with objectives, techniques, safety guidelines) → Meet the Trainer → "The Breath Meditation Retreat Bali" includes cards → "Reserve your Seat @ The OSHO Bali": Date 1–7 May 2026, one extra complimentary night, **Fees 13.500.856,48 IDR private / 11.820.200,00 IDR shared / 22.788.000,00 IDR couple** → gallery (8) → Daily Schedule → Register Now (**Forminator** form + Google Map "Osho Bali").
- **Fonts:** Lora, Abril Fatface, Albert Sans, Times New Roman, Crimson Pro, Open Sans on one page.
- **Mobile:** no hamburger (toggle not found).

### 3.11 100 Hour Meditation Teacher Training — `/100-hour-meditation-teacher-training/`
- **Sections:** Title banner → H1 "Meditation Teacher Training in Bali" + Inquire Now → intro + "Features of this Course" ("10-day, 100-hour residential…") + Includes (10 nights) → More Courses strip → Curriculum (on #EDEAE5) → Includes cards → More About The Course → gallery (5) → CTA "Deepen Your Practice in Just 100 Hours!" ENROLL NOW → Footer.
- **Dates/fees:** none on page; Calendar says "Dates to be Announced Soon · Location: Uma Mandi Ubud – Bali · Fees: to be announced soon".

### 3.12 100 Hour Yin Yan Course — `/100-hour-yin-yan-course/`
- **Sections:** Title banner → H1 "100 Hour Yin Yan Course in Bali" + "DATES TO NE ANNOUNCED SOON" (typo) + Inquire Now + bullets + INQUIRE → Includes (10 nights; appendix text also says "9 nights accommodation") → intro → "Yin Yan Yoga Course in Bali / Yin Yang Yoga Teacher Training" + CONTACT US → Includes cards → More About → gallery (2) → CTA "Master the Art of Balance!" → Footer.

### 3.13 200 Hour Yoga Teacher Training — `/200-hour-yoga-teacher-training/`
- **SEO:** "200 Hour Yoga Teacher Training in Bali | Yoga Alliance Certified".
- **Sections:** Title banner (H1 #1) → second **H1 "200 Hour Yoga Teacher Training in Bali"**, eyebrow "YOGA ALLIANCE CERTIFIED YOGA TEACEHRS COURSE IN BALI", dates **1–20 Dec 2026, 1–20 Jan, Feb, Mar 2027 "@ The Osho Bali, Ubud"**, **Fees (fully residential): Private 2200 USD / Sharing 2 Person (same gender) 1900 USD**, intro, "Features of this Course", RESERVE → Includes bar (**24 nights**) → More Courses → Curriculum → "The Course Includes" (eyebrow wrongly says "200 HOUR MEDITATION TEACHER TRAINING") → "Yoga Alliance Certified Yoga Courses in Bali" (benefits; mentions students "Lisa", "Sarah", "Mike") → "Different Types of Yoga You'll Learn" → gallery (7) → "What Can You Do After Getting Certified?" → "Why Choose Manamukti Yoga Bali" (typo) → FAQ accordion (8 Qs) → CTA "Transform Your Passion into a Profession!" → Footer. Also contains a hidden Google Map (OSHO Bali Petak Kaja address).
- **Fonts:** 8 families (Open Sans, Crimson Pro, Times New Roman, Days One, EB Garamond, Roboto, Amaranth, Arial).

### 3.14 200 Hour YTT at Osho Bali — `/osho-bali/yoga-teacher-training-osho-bali/`
- **SEO:** "Yoga Teacher Training in Bali | Certified Yoga Alliance Course". Child of empty `/osho-bali/`.
- **Sections:** Hero (grey gradient) H1 "Yoga Teacher Training @ Osho Bali" + REGISTER NOW ! → split: "TRANSFORM YOUR LIFE THROUGH YOGA / Yoga Teacher Training in Bali" + Yoga Alliance badges | "Schedule 2026: **1–22 Sep, Oct, Nov, Dec 2026**" + "**Accommodation & Tuition Fees (IDR)**: Private / Single 35,673,494.12 · Double Sharing 27,179,264.66 · Triple Sharing 22,082,068.22" → "Yoga Teacher Training Curriculun" (typo) → 3 dark columns: Who Is This Course For? · What Makes Our Training Unique? · Pricing & Inclusions → "What You Will Learn…" 6 icon blocks → Why Choose → "The Osho, Bali" venue description + Google Map → "A glimpse of Osho Bali Yoga Retreat Center" → Meet the Trainer → FAQ (8 Qs) → Typical Daily Schedule → **Register Now (Forminator form)** + venue address "Desa Madangan, Petak Kaja, Gianyar … Near Ubud", email, WhatsApp +91 95362 00770, "How to reach Osho Bali" → Footer.
- **Mobile:** header shows the desktop menu clipped ("Home  About us …") and **no hamburger**; very long (13,914 px).

### 3.15 Calendar — `/yoga-event-calendar-bali/`
- **Purpose:** The only consolidated schedule.
- **Entries (in order):** 200 Hour YTT (1–20 Dec 2026; 1–20 Jan/Feb/Mar 2027) → More Details · 200 Hour YTT @ The OSHO, Bali (1–22 Sep/Oct/Nov/Dec 2026) · Awaken the Body – Yoga Retreat Bali (1–5 Oct, 6–10 Oct, 9–13 Dec, 15–19 Dec 2026) · 50 Hours Meditation & Breath-work (1–7 May 2026) · Yin Yan Yoga Course (TBA; Uma Mandi Ubud) · 100 hour Meditation TT (TBA; Uma Mandi Ubud). Each entry: image + title + dates + summary + button.
- **Note:** Tantra and Yog Nidra retreats are **not** on the calendar.

### 3.16 Contact / Register — `/contact-mahamukti-yoga-bali/`
- **Sections:** Title banner → "CONTACT US / Contact us /Register" intro + "Uma Dana Mandi, Ubud - Bali, Indonesia" + phone + email + **CF7 form** (Name*, Email*, Phone*, Subject*, Course name*, Course date* (date input), Message*) → Google Map embed "**Uma Mandi Ubud**" → Footer.
- **Target of:** every "Register", "Book Now", "Reserve", "Inquire" button except Osho/Meditation/Bali Retreat which have their own forms.

### 3.17 Payment & Refunds — `/payment-refunds/`
- **Sections:** Title banner → "Registration Payments / Bank Transfers": AXIS Bank, A/C 916020028126766, Account Name "Maha Mukti Yoga", IFSC UTIB0000156, Swift AXISINBB093, "IBN Number" 9160200-281-267-66, Current Account, bank address Rishikesh, India; "We Accept Paypal" (PayPal logo GIF) → Note: non-refundable 200 USD deposit; balance due on arrival → "Refund Policy" (4 statements) → Footer.
- **Sensitive:** bank details are published publicly by the business; reproduce only if the client confirms they are current.

### 3.18 FAQ — `/frequently-asked-questions/`
- **Sections:** Title banner → H2 + accordion. Questions: Is your school registered with Yoga Alliance USA? (appears twice) · Which form of yoga do you teach? · I only speak English… · Do I have to give any exams…? · What will I get to eat…? (full answers in `content/frequently-asked-questions.md` appendix). Answers reference "courses in India and abroad", RYS200/300/500.

### 3.19 Blog — `/blog/`
- Theme blog template: list of 9 posts (H4 titles, featured image, date, category), sidebar (search, categories, recent posts, tags). 4138 / 3361 / 4610 px.

### 3.20 Blog posts (9)
All by "Akhilesh Bodhi" (author slug `mahamuktiyoga`), theme single-post layout with share links (Facebook/Twitter/email — email share uses placeholder `test@fwe.com`), post navigation, comment form, sidebar.

| Published | Title | Route | Category | Words | Featured image |
|---|---|---|---|---|---|
| 2026-03-18 | Yoga Poses for 7 Chakras | `/yoga-poses-for-7-chakras/` | Yoga Pose | 1,768 | `2026/03/Yoga_Poses_for_Seven_Chakras.webp` |
| 2026-03-18 | Yoga Poses to Correct Bad Posture | `/yoga-poses-to-correct-bad-posture/` | Yoga Pose | 1,370 | `2026/03/Yoga_Poses_to_correction_Bad_Posture.webp` |
| 2026-02-26 | Top 10 Yoga Poses & Exercises for Beginners | `/top-10-yoga-poses-exercises-for-beginners/` | Guide for Beginners, Yoga Pose | 2,297 | `2026/02/yoga_poses_for_beginners.webp` |
| 2026-02-24 | What is Kundalini Tantra Yoga? | `/kundalini-tantra-yoga/` | Yoga Philosophy | 2,005 | `2026/02/Kundalini_tantra_yoga.webp` |
| 2026-02-11 | What Is Tantra Yoga and How Does It Work? | `/what-is-tantra-yoga/` | Uncategorized | 1,672 | `2024/10/gal-2.webp` |
| 2026-02-09 | Why Choose Mahamukti Yoga Retreat in Bali | `/why-choose-mahamukti-yoga-retreats-bali/` | Uncategorized | 1,557 | `2026/02/WhatsApp-Image-2026-02-02-at-17.40.42.jpeg` |
| 2025-06-19 | Why a Yoga Retreat at Mahamukti Bali Could Be Your Most Transformative Journey Yet | `/why-a-yoga-retreat-at-mahamukti-bali-could-be-your-most-transformative-journey-yet/` | Uncategorized | 1,682 | media ID 21755 (not returned by media API) |
| 2025-04-21 | How to Choose the Best Yoga Teacher Training Program in Bali | `/how-to-choose-the-best-yoga-teacher-training-program-in-bali/` | Uncategorized | 2,749 | `2026/01/IMG_20230807_132330-scaled.jpg` |
| 2025-04-16 | Beginner's Guide to Yoga Retreats in Bali with Mahamukti | `/beginners-guide-to-yoga-retreats-in-bali-with-mahamukti/` | Uncategorized | 3,375 | `2025/01/200-Hour-Yoga-Teacher-training-In-Goa-768x418-1.webp` |

Notes: `kundalini-tantra-yoga` overflows horizontally on mobile (scrollWidth 465px — likely a table). Several posts embed the stats row and promotional blocks. 5 of 9 posts are "Uncategorized".

### 3.21 Legacy / demo routes (do not rebuild)
- `/yoga-retreat/` — theme homepage demo: "Join our classes for quality yoga practice", "Relaxing Spa Treatments", "Popular Products", "Latest Posts & Articles", counters showing "0", YouTube embed `osCsxeCy5Q4`, demo phone `+1 840 841 25 69`, links to 404 pages. Copyright-marked theme images.
- `/yoga-membership/` — theme demo: Lorem ipsum, "Sliver/Gold/Platinum Pack $30/$50/$70 per month", "Free 1-Day Pass?".
- `/team/*` — 5 demo instructors with Lorem ipsum bios, demo phone and `info@example.com`.
- `/services/*`, `/layouts/*`, `/portfolio/` — theme CPT internals.
- `/osho-bali/` — empty page displaying only the blog sidebar.

### 3.22 404 page
Theme 404: H1 "URL not found" / large "404" / "Oops..." with search. Status code correctly 404.
