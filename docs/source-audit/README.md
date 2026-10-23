# Source Audit — mahamuktiyogabali.com (Phase 1)

Research-only audit of https://mahamuktiyogabali.com carried out on **2026-10-23**, to brief a Phase 2 redesign/rebuild in Next.js. Nothing in the project was built, configured, pushed or deployed.

## Start here
1. [01-audit-report.md](./01-audit-report.md) — method, coverage, headline findings
2. [08-issues-gaps-questions.md](./08-issues-gaps-questions.md) — **conflicting facts and the client questions that block Phase 2 content**
3. [09-phase-2-recommendations.md](./09-phase-2-recommendations.md) — mandatory design rules (two-font rule etc.) and implementation plan

## All documents
| File | Contents |
|---|---|
| [01-audit-report.md](./01-audit-report.md) | Overview, method, coverage record, headline findings |
| [02-page-inventory.md](./02-page-inventory.md) | Navigation, all 50 route groups with status & recommendation, shared components, page-by-page sections |
| [03-content-inventory.md](./03-content-inventory.md) | Business facts, venues, programme fact sheet (dates/fees), testimonials, FAQs, policies, content priority |
| [04-assets-manifest.csv](./04-assets-manifest.csv) | 323 assets mapped to pages/sections with dimensions, size, alt text and concerns |
| [05-brand-reference.md](./05-brand-reference.md) | Logo files, theme typography & rendered fonts, verified colours, visual language |
| [06-functionality-and-dependencies.md](./06-functionality-and-dependencies.md) | Platform, forms, embeds, third parties, verification levels, what to rebuild |
| [07-responsive-observations.md](./07-responsive-observations.md) | Measurements at 1440/768/390 for every route, nav and overflow findings |
| [08-issues-gaps-questions.md](./08-issues-gaps-questions.md) | Factual conflicts, typos, technical/SEO issues, asset risks, coverage limits, client questions |
| [09-phase-2-recommendations.md](./09-phase-2-recommendations.md) | Mandatory requirements, proposed IA, implementation notes, order of work |

## Evidence folders
| Folder | Contents |
|---|---|
| [content/](./content/) | 39 Markdown files — verbatim rendered text per route, section by section, plus full WordPress source text (incl. accordions) for pages and posts |
| [screenshots/](./screenshots/) | 285 JPEGs (fold, full page, mobile menu) at 1440/768/390 px — index in [screenshots/README.md](./screenshots/README.md) (~52 MB) |
| [data/pages-summary.json](./data/pages-summary.json) | Per-route structured data: meta, headings, sections, CTAs, forms, iframes, video, third-party hosts, JS errors, fonts, colours, viewport heights/overflow |
| [data/wp-routes.json](./data/wp-routes.json) | All WordPress pages/posts/CPT items with IDs, dates, templates, SEO titles, descriptions, canonicals, OG images |
| [data/links.json](./data/links.json) | Every internal link with HTTP status/redirect target and pages it appears on; all external links |

## Status
- Phase 1 complete. **Waiting for review and explicit approval before Phase 2.**
- Fonts for the redesign are intentionally **not** chosen yet (options listed in 09).
