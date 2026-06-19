# AGENT.md — Chilli Boys Manufacturing Website

> **For AI agents and future developers.** Read this before modifying anything.

---

## 1. Project Identity

- **Business:** Chilli Boys Manufacturing (Chilli Boys MFG.)
- **Industry:** Custom engineering & fabrication — metalwork, woodwork, outdoor structures
- **Location:** KM 65 Highway 1, El Pescadero, Baja California Sur, Mexico 23300
- **Service Area:** Cerritos Beach, Todos Santos, La Paz, Los Cabos corridor
- **Office Phone:** +52 624 229 4158
- **Greg's WhatsApp:** +52 612 105 2006
- **Email:** build@chilliboys.mx
- **Hours:** Monday–Friday 08:00–15:30
- **Tagline:** "You Dream It. We Build It."
- **DWG Number:** CB-2025-001 | REV: A

---

## 2. Tech Stack & Constraints

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3.4 |
| Icons | Lucide React |
| Hosting | Vercel |
| Analytics | Google Analytics 4 (via env var) |
| i18n | Custom React Context (NOT next-i18n) |
| SEO | Manual metadata + Schema.org JSON-LD |

**Constraints:**
- No external UI libraries (no shadcn, no MUI, no Chakra).
- No backend API — static site, lead capture funnels to WhatsApp.
- No database — form data is not stored server-side.

---

## 3. Architecture Decisions

### Why Custom i18n Context?
We only need 2 languages (EN/ES) and the site is small. A full i18n library is overkill. All translations live in `src/lib/i18n.ts` as a flat dictionary. The `t()` function returns `string | string[]`.

### Why WhatsApp as Lead Capture?
The business operates primarily via WhatsApp. The lead form collects structured data then opens WhatsApp with a pre-filled message. This is intentional — no server-side storage, no email backend needed.

### Why No Photo Gallery Yet?
The client will supply real photos. Placeholders are marked with `[Insert workshop photo here]`. Do NOT ship with placeholder text visible to users.

---

## 4. File Map & Responsibilities

| File | Purpose | Modify If... |
|------|---------|--------------|
| `src/lib/i18n.ts` | Translation dictionary (EN + ES) | Adding new text, new language |
| `src/app/layout.tsx` | Root layout, metadata, GA4 script, SchemaMarkup | Changing SEO, analytics key |
| `src/app/page.tsx` | Homepage — all sections | Layout changes, new sections, content updates |
| `src/components/LanguageSwitcher.tsx` | EN/ES toggle | Changing toggle UI |
| `src/components/FloatingWhatsApp.tsx` | Sticky WhatsApp button | Changing WhatsApp number or message |
| `src/components/LeadForm.tsx` | Lead capture form → WhatsApp | Adding form fields, changing validation |
| `src/components/FAQ.tsx` | Accordion FAQ | Adding/removing questions |
| `src/components/Testimonials.tsx` | Client review cards | Adding real testimonials |
| `src/components/SchemaMarkup.tsx` | JSON-LD structured data | Changing business info, adding new schema types |
| `src/app/privacy-policy/page.tsx` | Privacy Policy | Legal updates |
| `src/app/terms/page.tsx` | Terms of Service | Legal updates |

---

## 5. Data Flow

```
User visits site
  → LanguageSwitcher sets lang context (default: EN)
  → All components read lang via useI18n()
  → User browses catalog, filters by category
  → User fills LeadForm
    → On submit: validates name + phone
    → Encodes form data into WhatsApp message
    → Opens wa.me link in new tab
    → Shows success state with "Open WhatsApp" button
  → FloatingWhatsApp always visible for quick access
```

---

## 6. Critical Hardcoded Values

These MUST be updated before production:

```
WHATSAPP_NUMBER = "526121052006"    ← Already set in src/lib/constants.ts
GA_ID = "G-DNDSGN1J3E"                ← Replace with real GA4 ID
```

Locations:
- `src/app/page.tsx` (WHATSAPP_NUMBER, social links)
- `src/components/FloatingWhatsApp.tsx` (WHATSAPP_NUMBER)
- `src/components/LeadForm.tsx` (WHATSAPP_NUMBER)
- `src/app/layout.tsx` (GA_ID)
- `src/components/SchemaMarkup.tsx` (business address, phone, geo)

---

## 7. Styling Rules

- **Primary accent:** `#b87333` (copper) — use `text-copper` or `copper-gradient` class
- **Background:** `#0a0a0a` (near-black)
- **Text:** `#f5f5f5` (off-white), `#9ca3af` (gray-400) for secondary
- **Cards:** `bg-white/[0.03]` with `border-white/10`, hover: `border-copper/50`
- **Border radius:** `rounded-2xl` for cards, `rounded-full` for buttons
- **Shadows:** Minimal. Use `shadow-xl` + `hover:shadow-copper/50` for CTAs only
- **No gradients on text** except the hero title (uses `bg-clip-text`)

---

## 8. SEO Checklist for Agents

- [ ] Meta title under 60 chars
- [ ] Meta description under 160 chars
- [ ] Open Graph tags present
- [ ] Canonical URL set
- [ ] Schema.org LocalBusiness JSON-LD with correct address, geo, hours
- [ ] robots: "index, follow" on homepage
- [ ] robots: "noindex, follow" on legal pages
- [ ] Alt text on all images (when added)
- [ ] Semantic HTML (section, nav, footer, article)

---

## 9. Common Pitfalls

1. **Do NOT use `next/image` with external domains without adding them to `next.config.js` images.domains.**
2. **Do NOT add a real backend/database.** The business model is WhatsApp-first. If you need server-side storage, discuss with the owner first.
3. **Do NOT remove the i18n context.** Every text string must go through `t()` so it works in both languages.
4. **Do NOT change the WhatsApp message without confirming with the owner.** The pre-filled message is part of their sales workflow.
5. **Do NOT forget to update SchemaMarkup.tsx** if business hours, address, or phone changes.

---

## 10. Contact for Questions

- **Owner:** Chilli Boys Manufacturing
  - Office: +52 624 229 4158
  - Greg's WhatsApp: +52 612 105 2006
- **Developer:** Ridge Runner Digital Solutions / Vote4arealclown
- **Related Project:** https://plan.chilliboys.mx
