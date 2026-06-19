# Chilli Boys Manufacturing — Next.js Website

> **Domain:** chilliboys.mx  
> **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Vercel  
> **Owner:** Chilli Boys MFG. (El Pescadero, BCS, Mexico)  
> **Maintainer:** Vote4arealclown / Ridge Runner Digital Solutions

---

## Quick Start

```bash
npm install
npm run dev          # localhost:3000
npm run build        # production build
```

Deploy to Vercel:
```bash
npx vercel --prod
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Yes | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |

Set in Vercel Dashboard → Project Settings → Environment Variables.

---

## Project Structure

```
chilliboys-site/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, custom scrollbar, selection color
│   │   ├── layout.tsx           # Root layout, metadata, GA4, SchemaMarkup
│   │   ├── page.tsx             # Homepage (hero, about, catalog, lead form, testimonials, FAQ)
│   │   ├── privacy-policy/
│   │   │   └── page.tsx         # GDPR + LFPDPPP compliant privacy policy
│   │   └── terms/
│   │       └── page.tsx         # Terms of Service
│   ├── components/
│   │   ├── LanguageSwitcher.tsx # EN / ES toggle button
│   │   ├── FloatingWhatsApp.tsx # Sticky bottom-right WhatsApp bubble
│   │   ├── LeadForm.tsx         # Multi-field form → WhatsApp pre-fill
│   │   ├── FAQ.tsx              # Accordion FAQ section
│   │   ├── Testimonials.tsx     # Client testimonial cards
│   │   └── SchemaMarkup.tsx     # JSON-LD LocalBusiness, Organization, WebSite
│   └── lib/
│       └── i18n.ts              # React context for English/Spanish translations
├── public/
│   └── images/                  # Place project photos here
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Key Features

| Feature | File |
|---------|------|
| Bilingual (EN/ES) | `src/lib/i18n.ts` + `LanguageSwitcher.tsx` |
| WhatsApp Lead Funnel | `LeadForm.tsx` → pre-fills WhatsApp message |
| Floating WhatsApp CTA | `FloatingWhatsApp.tsx` |
| Catalog with Filtering | `page.tsx` (filter state + catalog data) |
| Schema.org / Local SEO | `SchemaMarkup.tsx` |
| Privacy Policy (GDPR + LFPDPPP) | `privacy-policy/page.tsx` |
| Terms of Service | `terms/page.tsx` |
| Google Analytics 4 | `layout.tsx` (reads `NEXT_PUBLIC_GA_ID`) |

---

## Critical Customizations Before Launch

1. **WhatsApp Number** — Update `WHATSAPP_NUMBER` in `src/lib/constants.ts` (used by page, FloatingWhatsApp, and LeadForm).

2. **Google Analytics ID** — Set `NEXT_PUBLIC_GA_ID` in Vercel env vars.

3. **Logo** — Replace the placeholder circle in the hero with your actual logo image.

4. **Photos** — Add real workshop/project photos to `/public/images/` and update the About section and catalog cards.

5. **Testimonials** — Replace dummy data in `Testimonials.tsx` with real reviews.

6. **Social Links** — Update Instagram/Facebook handles in `page.tsx` if different.

---

## Related Properties

- **Plan Your Cerritos:** https://plan.chilliboys.mx (trip planning resource)
- **Old Site:** https://chilliboys.mx (GoDaddy/Wix site — being replaced by this)

---

## License

Proprietary — Chilli Boys Manufacturing. All rights reserved.
