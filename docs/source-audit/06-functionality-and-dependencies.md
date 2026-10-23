# 06 — Functionality & Technical Dependencies

**Verification levels:** **Observed** (seen) · **Interaction tested** (clicked/opened in headless Chrome) · **Functionality verified** (intended outcome confirmed) · **Partially verified** · **Unverified**.

> **No form was submitted.** All forms send to the business's real inbox; submitting test data would create real enquiries. Submission behaviour, email delivery, validation messages and success states are therefore **Unverified**.

---

## 1. Platform (Verified from HTML, headers, REST API)

| Layer | Detail |
|---|---|
| CMS | WordPress (REST API public at `/wp-json/`), PHP 8.1 |
| Hosting / CDN | Hostinger (`server: hcdn`, hPanel), LiteSpeed Cache (CSS/JS combined into `/wp-content/litespeed/…`, lazy-load image placeholders) |
| Theme | **Chakra** (ThemeREX / AncoraThemes) with **ThemeREX Addons** (`trx_addons`) — headers/footers built as "Layouts" CPT |
| Page builder | Elementor + **ElementsKit** (megamenu, widgets) + Elementor AI / "Elementor MCP Composer" plugin |
| Sliders | Slider Revolution (`revslider`) loaded; Swiper used by Elementor carousels |
| Forms | **Contact Form 7** (Home, Contact, Bali Retreat) and **Forminator** (Osho TTC, Meditation & Breath) |
| SEO | **Yoast SEO** (sitemaps, meta, canonical, Open Graph, JSON-LD WebSite + Organization + WebPage/Article + Breadcrumb) |
| Reviews | **Trustindex** Google reviews widget |
| Other plugins (from REST namespaces) | Kirki (theme options), WPMU DEV Hub connector, Mailchimp (ElementsKit widget; "MailChimp Popup" layout exists but was not observed), Elementor One |
| Custom template | `page-bali-retreat.php` (Bali Retreat page — hand-coded HTML/CSS/JS, no site header) |

## 2. Feature inventory

| Feature | Where | Level | Details / implementation notes |
|---|---|---|---|
| Desktop dropdown menu | All standard pages | Observed | 4 parents (About us, Yoga Retreats, Yoga Courses, More info's) link to `#`; sub-items revealed on hover. Hover state not captured. |
| Mobile menu | Standard pages (tablet + mobile) | **Interaction tested** | Hamburger opens full-screen black overlay with site title (green), tagline, menu, arrow toggles for sub-menus, social icons. Close (×) visible. Sub-menu expansion not tested. |
| Mobile menu absent | Osho TTC, Meditation & Breath, Bali Retreat | Observed | No toggle found; Osho TTC shows a clipped desktop menu on phones. |
| Book Now | Header (Home) | Observed | Link to Contact page (no booking engine). |
| Contact form (CF7) — Home | `/` | Observed | Fields: Name*, Email*, Phone*, Subject*, Message*, consent checkbox (links to 404 privacy page). Button "Get In Touch". AJAX submit via CF7 REST. Unverified. |
| Contact/Register form (CF7) | `/contact-mahamukti-yoga-bali/` | Observed | Name*, Email*, Phone*, Subject*, Course name* (free text), Course date* (date picker), Message*. Unverified. |
| Retreat enquiry form (CF7) | `/bali-retreat/` | Observed | Name*, WhatsApp*, Email*, Retreat date* (select — stale options), Message (optional), "Send Enquiry". Unverified. |
| Registration form (Forminator) | Osho TTC, Meditation & Breath | Observed | First name*, Last name*, Email*, Phone*, City*, State/Province*, Country (select), "Select Your Preference" (Single Room / Shared Room / Couple / 2 Persons), Message. AJAX. Unverified. |
| Required-field marking | All forms | Observed in markup | `aria-required`/CF7 required classes present; validation messages not seen. |
| Payment | `/payment-refunds/` | Observed | **No online payment.** Bank transfer details + "We Accept Paypal" image (no PayPal button/link). |
| Booking engine / e-commerce | — | Verified absent | No cart, checkout, account or booking system. `/shop/`, `/cart/`, `/checkout/`, `/my-account/` return 404. |
| Calendar | `/yoga-event-calendar-bali/` | Observed | Static content blocks, not a calendar plugin/feed. |
| FAQ accordions | FAQ, 200 hr, Osho TTC | Observed (content captured from source) | Elementor accordion; open/close not tested. |
| Bali Retreat accordions | `/bali-retreat/` | Observed | "More Information" and "Sample Daily Schedule" day panels (Day 1 open by default). |
| In-page anchors | Bali Retreat nav, Osho/Meditation "Register Now" (`#register`) | Observed | Smooth scroll not verified. |
| Image galleries / carousels | Course & retreat pages, Location, Gallery | Observed | Elementor image carousel (Swiper) and image gallery; lightbox not tested. Lazy-loaded — several appeared blank in captures. |
| Home video | `/` | Observed | `<video>` from `https://baliyogaretreatsubud.com/vids/yoga-retreats-bali.mp4` (different domain, not in media library). Autoplay/controls not verified. Media library has two local MP4s (16 MB 1920×1080 `video_20260126_163906.mp4`; 2.5 MB vertical WhatsApp video) not seen on pages. |
| YouTube embed | `/yoga-retreat/` (demo page) | Observed | `osCsxeCy5Q4`, autoplay. |
| Google Maps embeds | Contact (Uma Mandi Ubud), Location (OSHO Bali), Osho TTC (query "Osho, Bali"), Meditation (query "Osho Bali"), 200 hr (OSHO Bali full address; hidden), Bali Retreat (BeingSattvaa) | Observed | Iframes; Bali Retreat map rendered blank in capture. |
| Google reviews | `/yoga-student-reviews-bali/` | **Partially verified** | Trustindex widget loads (11 reviews, "Read more" toggles); data source and refresh are third-party. |
| Social links | Top bar, footer | Observed | FB, Twitter/X, YouTube, Instagram (real). Hidden theme panel also links to AncoraThemes FB/Twitter/Dribbble/Instagram (demo) — present on 37 pages. |
| Social share | Blog posts | Observed | Facebook sharer, Twitter intent, email share to placeholder `test@fwe.com`. |
| Comments | Blog posts | Observed | WordPress comment form ("Leave a comment"); Gravatar avatars. |
| Search | Blog sidebar, theme panel, `/?s=` | Observed | WordPress search returns results page (200). |
| Back-to-top | Standard pages | Observed | Fixed button. |
| Custom cursor | Standard pages | Observed | ThemeREX "mouse helper" fixed element. |
| Entrance animations | Most Elementor sections | Observed | Elements start hidden (`elementor-invisible`) and animate on scroll — in headless captures the Home hero text stayed hidden until forced. Risk: content invisible if JS fails. |
| Typed/animated word | Home mission headline | Observed | Last word ("Mindful.") animates with an underline. |
| Translation | — | Verified absent | No translation plugin or language switcher. `lang="en-US"`. |
| Analytics / tag managers | — | Not detected | No GA/GTM/Meta Pixel requests observed on crawled pages (only own domain, Google Fonts, Maps, Trustindex, Gravatar). |
| Cookie consent | — | Not detected | |
| WhatsApp | Osho TTC, Meditation & Breath | Observed | Number shown as text only; no click-to-chat link. |
| JS errors | Home and others | Observed | `TypeError: Cannot read properties of undefined (reading 'i18n')`, `TypeError: e.indexOf is not a function` in console. |

## 3. Third-party hosts contacted (Verified — network requests)

| Host | Purpose | Pages |
|---|---|---|
| fonts.googleapis.com / fonts.gstatic.com | Web fonts | All |
| baliyogaretreatsubud.com | Home video file | Home |
| mahamuktiyoga.com | Logo on Bali Retreat (404) | Bali Retreat |
| www.google.com, maps.gstatic.com, maps.googleapis.com, maps.google.com | Map embeds | Contact, Location, Osho TTC, Meditation, 200 hr, Bali Retreat |
| cdn.trustindex.io, lh3.googleusercontent.com | Reviews widget + reviewer avatars | Student Reviews |
| secure.gravatar.com | Comment/author avatars | Blog posts, author page |

## 4. What Phase 2 must retain or replace

| Need | Current | Phase 2 consideration |
|---|---|---|
| Enquiry/registration | 3 different forms (CF7 ×2 variants, Forminator) posting to WordPress | A Next.js frontend cannot post to CF7/Forminator without the WP backend. Decide: (a) keep WordPress headless and post to CF7's REST endpoint, (b) use a form service/serverless route + email provider, or (c) a `mailto:`/WhatsApp fallback. Client must confirm recipient inbox and required fields. **Do not ship a form that looks functional but isn't wired.** |
| Course/retreat data | Hard-coded in Elementor pages | Move to structured data (JSON/MDX/CMS) so dates/prices live in one place (the calendar, programme pages and form dropdowns currently disagree). |
| Reviews | Trustindex widget | Keep the widget (third-party script), or show a curated static selection with attribution and a link to Google — client to confirm. |
| Maps | Google embeds | Keep simple iframe embeds, lazy-loaded; correct venue per programme. |
| Video | Hot-linked from another domain | Self-host a compressed version or use YouTube; confirm rights and source. |
| Payment | Manual bank transfer / PayPal mention | Display info only unless the client wants online payment (out of scope unless requested). |
| SEO | Yoast meta, canonicals, JSON-LD, sitemap | Recreate metadata per route with Next.js Metadata API; generate sitemap/robots; keep 301s for legacy URLs (list in 02 and `data/links.json`). |
| Redirects | WordPress handles `/about-us/…`, `/yoga-courses-in-bali/…`, `/yoga-retreats-in-bali/…`, `/services/…`, `/bali-retreat` | Re-implement in `next.config` `redirects()`. |
| Blog | WordPress posts | Static MDX/JSON from the captured content, or headless WP fetch — low priority. |
