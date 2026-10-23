# 03 — Content Inventory (preservation reference)

This file is the **index and fact sheet**. The verbatim text of every route lives in [content/](./content/) — one Markdown file per route, named after the URL path (e.g. `content/200-hour-yoga-teacher-training.md`, `content/osho-bali__yoga-teacher-training-osho-bali.md`).

Each content file has two parts:
1. **Rendered text, section by section** — exactly what a desktop visitor sees, in on-page order, with each section's buttons/CTAs (label → destination), images, embeds and forms noted. Typos and inconsistencies are preserved on purpose.
2. **Appendix: full WordPress source text** (pages and posts only) — from the REST API, which includes text hidden in accordions/tabs/"Read more" (e.g. FAQ answers) and mobile-only duplicates. Use this when the rendered part looks incomplete.

> Rule for Phase 2: copy facts from these files; do not paraphrase prices, dates, names, addresses, bank details or certifications. Where facts conflict, use the question list in [08-issues-gaps-questions.md](./08-issues-gaps-questions.md) and wait for the client's answer.

---

## 1. Business identity

| Item | Value (verbatim) | Source |
|---|---|---|
| Site/brand name | Mahamukti Yoga Bali (also "Maha Mukti Yoga", "Mahamukti Yoga School", "Mahamukti Yoga Center") | `<title>`, footer, Payment page, About |
| Tagline (WP site description) | "Yoga retreats and yoga courses in Bali" | REST root, mobile menu |
| Logo wordmark | "Mahamukti / Yoga Retreats Bali" | logo PNG |
| Founder / lead teacher | Akhilesh Bodhi ("E-RYT Yoga Teacher", "Reiki master") | About, Teacher page |
| Founded | "since 2006" (About) | About |
| Stats | "1000+ happy students" · "22+ years of teaching" · "Yoga Alliance certified" | About, Teacher, some posts |
| Certification claims | "Course certified by Yoga Alliance, USA"; FAQ: "registered with Yoga Alliance USA … RYS200, RYS300 and RYS500 courses in India and abroad"; badges: Yoga Alliance, RYT 200, YACEP | Home, TTC pages, FAQ |
| Phone (site-wide) | +91 96343 75005 (`tel:919634375005` — missing "+" on most pages) | Top bar, Contact, Home |
| WhatsApp (programme landing pages) | +91 95362 00770 (plain text, not linked) | Osho TTC, Meditation & Breath |
| Email | mahamuktiyogabali@gmail.com | Contact, Home, Osho TTC, Meditation |
| Address (Home / Contact) | "Mahamukti Yoga, Ubud, Bali - Indonesia, 80571"; "Uma Dana Mandi, Ubud - Bali, Indonesia" | Home, Contact |
| Social | Facebook `facebook.com/mahamuktiyogattc/` · Twitter/X `twitter.com/mahamukti_yoga` · YouTube `youtube.com/@mahamuktiyoga673` · Instagram `instagram.com/mahamuktiyogaschool` | Top bar, footer |
| Copyright | "Mahamukti Yoga Bali © 2026. All Rights Reserved \| Developed by : HimalayanInfotech.com" | Footer |
| Payment | AXIS Bank (Rishikesh, India) bank transfer details; PayPal accepted; 200 USD non-refundable deposit; balance on arrival | Payment & Refunds |

---

## 2. Venues mentioned (conflicting — see 08)

| Venue name as written | Address/details as written | Where it appears |
|---|---|---|
| Uma Dana Mandi, Ubud | "A wondrous hideaway deep in the heart of Ubud…"; "Privately held Balinese-owned and operated hotel…" | Home, Contact, Location page |
| Uma Mandi Ubud | Google Map embed on Contact; "Location : Uma Mandi Ubud – Bali" | Contact map, Calendar (Yin, 100hr Meditation) |
| The OSHO Bali / Osho Bali | "Desa Madangan, Petak Kaja, Gianyar, South. Madangan, Near Ubud"; "G8PG+28X Ds Madangan Petak Bitra, Petak Kaja, Kec. Gianyar, Kabupaten Gianyar, Bali 80515"; pool, spa, yoga pavilion with two studios | Osho TTC, 200 hr, Meditation & Breath, Location page (address + map) |
| BeingSattvaa Retreat / Sattvaa Retreat | "Jalan Raya Kendran, Banjar Kepitu, Desa Kendran, Ubud, Bali – Indonesia, Postal Code – 80561" | Bali Retreat |

---

## 3. Offerings — fact sheet

| Programme | Route | Dates on page | Fees on page | Duration / inclusions | Venue on page |
|---|---|---|---|---|---|
| 200 Hour Yoga Teacher Training | `/200-hour-yoga-teacher-training/` | 1–20 Dec 2026; 1–20 Jan 2027; 1–20 Feb 2027; 1–20 Mar 2027 | Private/Single 2200 USD; Sharing 2 Person (same gender) 1900 USD | "24 Nights Accommodation, Daily Vegetarian Meals, Daily Tantra Yoga & Meditation Classes"; excludes airfare, personal expenses, airport transfer | @ The Osho Bali, Ubud |
| 200 Hour YTT at Osho Bali | `/osho-bali/yoga-teacher-training-osho-bali/` | 1–22 Sep, Oct, Nov, Dec 2026 (Home lists Sep–Nov only) | IDR: Private/Single 35,673,494.12; Double Sharing 27,179,264.66; Triple Sharing 22,082,068.22 | Full 200-hr programme, accommodation, daily meals, materials, certification; optional excursions/spa/airport transfer | The Osho, Bali (Madangan, Petak Kaja, Gianyar) |
| Awaken the Body – Yoga Retreat | `/bali-retreat/` | 1–5 Oct 2026; 6–10 Oct 2026; 9–13 Dec 2026; 15–19 Dec 2026 (form dropdown: 12–16 Mar, 26–31 Mar, 5–9 Apr, 14–17 Apr 2026) | Private USD 1040; Shared USD 760 / person | 4 nights; check-in after 1:00 PM, check-out 11:30 AM; Brunch + Dinner (Oct) / Breakfast + Dinner (Dec); yoga shala, mats, drinking water | Sattvaa / BeingSattvaa Retreat, Kendran, Ubud |
| 50 Hour Meditation & Breath-work Training | `/meditation-breath-training-bali/` | 1–7 May 2026 (check-in 1 May, check-out 7 May after 11.30 am; one extra complimentary night) | 13.500.856,48 IDR private; 11.820.200,00 IDR shared; 22.788.000,00 IDR couple | "Yoga Alliance certified 50 Hours" | The OSHO Bali |
| 100 Hour Meditation Teacher Training | `/100-hour-meditation-teacher-training/` | None (Calendar: "Dates to be Announced Soon") | None (Calendar: "to be announced soon") | "10-day, 100-hour residential"; 10 nights accommodation | Calendar: Uma Mandi Ubud |
| 100 Hour Yin Yan Course | `/100-hour-yin-yan-course/` | "DATES TO NE ANNOUNCED SOON" | None | 10 nights (appendix also says "9 nights accommodation") | Calendar: Uma Mandi Ubud |
| Tantra Yoga Retreat Bali | `/tantra-yoga-retreat-bali/` | 1st April – 3rd March 2025; 1st April – 3rd April 2025; 1st May - 3rd May 2025 | 700 Euro private; 600 Euro shared | 4 nights; check-in 12.15 pm, check-out 11.30 am | Not stated (resort with swimming pool) |
| Yog Nidra Retreat Bali | `/yog-nidra-retreat-bali/` | 26 - 29 October 2024 | 700 Euro private; 600 Euro shared | 4 nights; check-in 12.15 pm, check-out 11.30 am | Not stated |

Home "Yoga Courses Offfered at Bali" list (verbatim): 50 Hour Breath & meditation Retreat, The OSHO, Bali · 100 Hour Yin Yan Yoga Course · 100 Hour Meditation Teachers Course · 200 Hour Yoga Teacher Training · 200 Hour Yoga Teacher Training at The OSHO, Bali.

Daily schedules (verbatim) are in the Osho TTC, Meditation & Breath, 100-hour and Bali Retreat content files.

---

## 4. Testimonials & reviews

**Site testimonials** (Testimonials CPT; shown on Home and About — only 2 of 3 displayed):

| Name (as written) | Country | Quote (verbatim) | Shown on |
|---|---|---|---|
| Max Murkser | Australia | "Akhilesh is an outstanding teacher with a great combination of strength and humor. The sessions are always fun and demanding. The best place to learn yoga and philosophy with highly intellectual teachers and cooperative staff. Highly recommended for yoga-lovers!" | Home, About |
| John Weiermann | Vietnam | "I loved every single minute of this 200 Hour YTTC! That month was one of the most transformative, challenging and beautiful ones in my life. I consider myself lucky to have been taught by the best yoga teachers who are passionate, experienced and knowledgeable." | Home, About |
| Manuela Maranhão | South Africa | "I just finished my 200 hour yoga teacher training in Goa with Mahamukti Yoga School, and it was truly a life-changing experience. …" | Not displayed (CPT only) |

**Google reviews** via Trustindex on `/yoga-student-reviews-bali/`: "EXCELLENT · Based on 11 reviews"; reviewers include Hilke Oskam, Cordula Pfluegl, Denise E, Layla, יובל לביא, Manuela Maranhão and others (full captured text in `content/yoga-student-reviews-bali.md`). Ages are relative ("2 years ago", "6 years ago") and many describe training in Goa (India) or workshops in the Netherlands — they are about the teacher/school, not specifically Bali.

**Named students inside marketing copy** (200 hr page: "Lisa", "Sarah", "Mike") are anecdotes, not attributed testimonials; treat as unverified.

---

## 5. FAQs

| Location | Questions |
|---|---|
| `/frequently-asked-questions/` | Is your school registered with Yoga Alliance USA? (listed twice) · Which form of yoga do you teach? · I only speak English. Will this cause problem for me in classes? · Do I have to give any exams at the end of the course? · What will I get to eat during the yoga course? |
| 200 hr page and Osho TTC page (same 8) | Do I need to be highly flexible to take part in the training? · How intense is this training? · What's the food like? I'm vegetarian/vegan · I'm not sure if I want to teach yoga. Should I still do the training? · What's the accommodation like? · What level of proficiency in yoga is required for participation? · What if I struggle with the training? · What type of certification do you offer? |

Answers are verbatim in the Appendix of each content file. The FAQ page's answers mention food "three times a day" and "courses in India and abroad", which may not match Bali programmes (e.g. Bali Retreat serves brunch + dinner).

---

## 6. Policies

Payment & Refunds (verbatim in `content/payment-refunds.md`): bank transfer details (AXIS Bank), PayPal, 200 USD non-refundable deposit, balance on arrival, refund policy (advance non-refundable; cancellation by email; deposit may be moved to another scheduled course).

Missing: privacy policy (linked from the Home form consent text, returns 404), terms & conditions (referred to in the deposit note, no page), cookie notice.

---

## 7. Shared UI copy

- Header menu labels: Home · About us · Yoga Retreats · Yoga Courses · Calendar · Contact · More info's · Book Now
- Footer menu labels: Home · About us · Our Location · Yoga Teacher · Calendar · Contact / Register
- CTA labels in use (inconsistent): Book Now · OUR CALENDAR · EVENT CALENDAR · ABOUT YOGA TEACHER · MORE DETAILS / REGISTER · VIEW OUR YOGA RESORT · Get In Touch · Register Now · REGISTER NOW ! · RESERVE YOUR SPOT NOW · Inquire Now · INQUIRE · ENROLL NOW · JOIN NOW · BOOK YOUR SPOT · START YOUR TRAINING · CONTACT US · REGISTER FOR A COURSE · KNOW MORE.. · More Details · Contact us · Enquire Now · Enquire for this date · Send Enquiry
- Form consent text (Home): "I agree that my submitted data is being collected and stored." (links to missing `/privacy-policy/`)

---

## 8. Blog content

9 published posts (titles, dates, categories, word counts and featured images in [02-page-inventory.md §3.20](./02-page-inventory.md)). All ~1,400–3,400 words, authored "Akhilesh Bodhi". Full text in `content/<post-slug>.md`. Several posts reuse images whose filenames reference Goa or Switzerland. Category assignments are sparse (5 posts "Uncategorized").

---

## 9. Content priority (for the redesign)

| Priority | Content |
|---|---|
| **Essential** | Programme names, dates, fees, durations, inclusions/exclusions, venue + address + map, how to enquire/register, contact details, deposit & refund terms, teacher credentials, Yoga Alliance certification, daily schedule, curriculum outlines, testimonials/reviews |
| **Important** | School story (since 2006), why-choose points, venue descriptions and photos, FAQs, gallery, calendar overview |
| **Condense** | Long generic marketing passages on 200 hr page ("Okay, let's talk about what you're REALLY going to get…", "What Can You Do After Getting Certified?"), repeated "Why Choose" blocks (same 4 points on 200 hr and Osho TTC), repeated "Course Includes" cards, repeated Akhilesh bio (≥5 copies with different numbers), historical background essays on Tantra/Yog Nidra pages |
| **Low priority** | Blog archive pages, tag/category/author archives, share buttons, comment forms |
| **Exclude** | Theme demo content (`/yoga-retreat/`, `/yoga-membership/`, `/team/*`, demo phone/email, AncoraThemes social links), Lorem ipsum, placeholder logos |

### Duplicated content to consolidate
- Akhilesh Bodhi bio: Home, About, Teacher page, Osho TTC, Meditation & Breath (+ posts) — two different versions.
- Stats row: About, Teacher page, 3 blog posts.
- "Why Choose Mahamukti Yoga Bali" (4 points): 200 hr and Osho TTC (identical).
- FAQ (8 Qs): 200 hr and Osho TTC (identical); FAQ page has a different set.
- Daily schedule: Osho TTC and Meditation & Breath (identical — a breath-training schedule shown on the 200 hr TTC page).
- "Includes" bar: identical "Daily Tantra Yoga & Meditation Classes" wording on five programmes.
