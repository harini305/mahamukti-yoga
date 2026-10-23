# Mahamukti Yoga Bali — frontend redesign (demo)

A frontend-only redesign of mahamuktiyogabali.com built with Next.js (App Router, JavaScript), React, GSAP and ScrollTrigger, and plain CSS / CSS Modules.

Pages: Home, 200 Hour Yoga Teacher Training, Bali Retreat ("Awaken the Body") and About.

This is a design demo: the enquiry form previews locally and sends nothing, and prices, dates and venue names are intentionally omitted until confirmed by the client (see `docs/source-audit/08-issues-gaps-questions.md`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Images

`public/images` holds pre-sized WebP derivatives of the original photos (Next.js image optimisation is disabled in `next.config.mjs`).
To regenerate them, download the originals listed in `docs/source-audit/04-assets-manifest.csv` into `assets-source/originals/` (not committed) and run `npm run images` (Python + Pillow).

## Docs

`docs/source-audit/` contains the Phase 1 audit of the original site (screenshots are kept locally and not committed).
