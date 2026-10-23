# 01 — Audit Report: mahamuktiyogabali.com

**Phase:** 1 (research only) · **Date:** 2026-10-23 · **Site:** https://mahamuktiyogabali.com · **Workspace:** `D:\mahamuktiyogabali37` (empty before the audit; this `docs/source-audit/` folder is the only thing created)

---

## 1. Website overview

Mahamukti Yoga Bali is the Bali arm of a founder-led yoga school (Akhilesh Bodhi; "since 2006", India-based with retreats/workshops abroad). The site sells **yoga teacher trainings** (200-hour, 100-hour Yin Yang, 100-hour Meditation, 50-hour Meditation & Breath) and **short residential retreats** (Awaken the Body, Tantra, Yog Nidra) in and near Ubud, Bali. Conversion is by **enquiry/registration forms, phone and WhatsApp**, with payment by bank transfer/PayPal (no online booking or checkout).

It runs on WordPress with the ThemeREX "Chakra" theme, Elementor/ElementsKit, Contact Form 7, Forminator, Yoast SEO, Trustindex reviews and LiteSpeed Cache on Hostinger. Much of the theme's demo content is still published.

## 2. Method

| Step | Tooling / source |
|---|---|
| Workspace check | Empty directory — no project files, assets or prior evidence |
| Route discovery | robots.txt → Yoast sitemap index (12 sitemaps) → WordPress REST API (pages, posts, media, categories, tags, users, CPTs) → links on rendered pages → HTTP probes of likely legacy paths |
| Rendering & capture | Headless Chrome 155 via `playwright-core` installed in a temporary scratch folder (not in the project). Each route at 1440/768/390 px: scroll for lazy-load, extract DOM data (headings, sections, text, CTAs, links, images, backgrounds, video, iframes, forms, scripts, third-party hosts, computed fonts/colours, fixed elements, overflow), screenshots (fold, full page, mobile menu) |
| Source text | REST `content.rendered` for all pages/posts (includes collapsed accordion text) |
| Asset mapping | Rendered `<img>`/backgrounds + raw-HTML scan of every `wp-content/uploads` reference (src, data-src, srcset, slider/gallery JSON) mapped to Elementor sections, joined with the media library (294 items) |
| Brand | Theme CSS variables from all 54 stylesheets, computed styles, logo pixel sampling |
| Links | Every internal link requested without following redirects (status recorded) |

Evidence is labelled throughout as verified, observed, estimate or unknown.

## 3. Coverage record

| Category | Routes |
|---|---|
| **Successfully inspected** (3 viewports + full text + assets) | Home; About; Teacher (Akhilesh Bodhi); Our Location; Student Reviews; Photo Gallery; Tantra Yoga Retreat; Yog Nidra Retreat; Bali Retreat; Meditation & Breath Training; 100 hr Meditation TT; 100 hr Yin Yan; 200 hr YTT; 200 hr YTT at Osho Bali; Calendar; Contact/Register; Payment & Refunds; FAQ; Blog; 9 blog posts; `/osho-bali/`; `/yoga-retreat/`; `/yoga-membership/`; `/category/yoga-pose/`; `/tag/yoga-poses/`; `/services/`; `/services/yoga-teacher-training-bali-ubud/`; `/team/jason-lee/`; `/author/mahamuktiyoga/`; `/testimonials/jennifer-lee-copy-2/` (redirects to Home); 404 page — **39 routes, 117 page-viewport captures, 285 screenshots** |
| **Partially inspected** (status/title/REST data only) | Other team members (4), other categories (3) and tags, `/services/yog-nidra-bali/` & `/services/yin-yan-yoga-bali/` (301), `/services_group/*`, `/team/`, `/team_group/*`, `/testimonials_group/clients/`, `/layouts/*` (17, sampled), `/layouts_group/slider/`, `/portfolio/`, `/feed/`, `/?s=yoga`, `/wp-login.php` |
| **Discovered but inaccessible (404)** | `/privacy-policy/`, `/about-us/`, `/contact-us/`, `/memberships-2/`, `/services/online-yoga/`, `/shop/`, `/cart/`, `/checkout/`, `/my-account/`; logo `mahamuktiyoga.com/…/mahamukti-yoga-school-logo.png` |
| **Interactive states not verified** | Form submissions/validation/emails (deliberately not submitted), dropdown hover, mobile sub-menus, accordions, lightboxes, carousel autoplay, video playback, Mailchimp popup, hover colours |
| **Technical limitations** | Headless browser only (no physical devices); entrance animations needed forcing for full-page captures; some lazy images/maps rendered blank in captures; one capture (`/yoga-retreat/` desktop) timed out once and succeeded on retry; drafts/private content not visible; no Lighthouse run |

## 4. Headline findings

1. **Facts conflict across pages** — four venue identities (Uma Dana Mandi, Uma Mandi, OSHO Bali, Sattvaa), two different 200-hour TTCs at "The Osho Bali" with different dates and currencies, three currencies (USD/IDR/EUR), contradictory nights/durations and teacher experience years. ([08 §1](./08-issues-gaps-questions.md))
2. **Stale schedule** — Tantra (2025), Yog Nidra (2024) and Meditation & Breath (May 2026) show only past dates; the Bali Retreat form offers dates that don't match the page.
3. **Theme demo content is live and indexed** — `/yoga-retreat/`, `/yoga-membership/` (Lorem ipsum, "$30 Sliver Pack"), five Lorem-ipsum team members, 17 layout posts in the sitemap, demo phone/emails and AncoraThemes social links on 37 pages.
4. **Inconsistent design system** — 18 font families render (Times New Roman on 15 pages from pasted styles); green pill buttons vs orange-red/red square buttons; three different page "systems" (theme pages, Elementor-Canvas landing pages, the hand-coded Bali Retreat page).
5. **Mobile problems** — Bali Retreat has no viewport meta (renders 980px wide); Osho TTC menu clipped with no hamburger; Meditation page has no navigation; 4–5px horizontal overflow on 14 pages.
6. **SEO/technical** — wrong canonical on Meditation page (points to Tantra), empty `<title>` on Bali Retreat, broken `/privacy-policy/` link from the consent checkbox, many 301-dependent internal links, hot-linked video/logo, JS console errors.
7. **Assets** — 323 assets mapped (231 used on pages, 92 library-only); low-res raster logo only (278×72); 17 files > 500 KB (incl. a 16 MB MP4 and ~2 MB PNG photos); 41 oversized for their display; 47 used images lack alt text.

## 5. Summary by area (details in linked files)

| Area | File |
|---|---|
| Routes, navigation, page-by-page sections | [02-page-inventory.md](./02-page-inventory.md) |
| Facts, offerings, contacts, testimonials, FAQs, content priority; verbatim text | [03-content-inventory.md](./03-content-inventory.md), [content/](./content/) |
| Asset manifest (page/section → file, dims, size, concerns) | [04-assets-manifest.csv](./04-assets-manifest.csv) |
| Fonts, colours, logo, visual language | [05-brand-reference.md](./05-brand-reference.md) |
| Forms, embeds, plugins, integrations, what to rebuild | [06-functionality-and-dependencies.md](./06-functionality-and-dependencies.md) |
| Desktop/tablet/mobile measurements | [07-responsive-observations.md](./07-responsive-observations.md) |
| Conflicts, errors, risks, client questions | [08-issues-gaps-questions.md](./08-issues-gaps-questions.md) |
| Phase 2 requirements & recommendations | [09-phase-2-recommendations.md](./09-phase-2-recommendations.md) |

## 6. Asset manifest columns (04-assets-manifest.csv)

`filename` (normalised original, size suffixes stripped) · `asset_type` (logo, favicon, photo/image, icon/illustration (svg), video, theme/plugin UI asset) · `usage_kind` (img, css-background, video, og:image, html-ref, or library-only) · `original_url` · `variant_urls_seen` · `local_path` (empty — no local copies exist) · `availability` (live site / media library / third-party host) · `pages` · `sections` (page: section heading) · `width`/`height`/`filesize_bytes`/`mime` (from the media library where known) · `alt_text` · `library_id` · `uploaded` · `concerns` (heavy, oversized, no alt text, hot-linked, photo as PNG, THEME DEMO).

No assets were downloaded into the project (only three logo files were fetched into a temporary scratch folder for colour sampling). Phase 2 should download only what it uses.
