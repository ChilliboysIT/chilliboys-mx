# LAYOUT.md — Chilli Boys Manufacturing Website

> **Site structure, section map, and navigation guide.**

---

## Sitemap

```
/
├── /privacy-policy
├── /terms
└── (external) https://plan.chilliboys.mx
```

**No other routes.** The site is a single-page marketing site with two legal sub-pages.

---

## Homepage Section Order

| # | Section | ID | Purpose | Key Component |
|---|---------|----|---------|---------------|
| 1 | **Hero** | — | Brand intro, primary CTA, social links, language toggle | `page.tsx` |
| 2 | **Business Info Bar** | — | Address, hours, phone, specialty, service area | `page.tsx` |
| 3 | **About Us** | `#about` | Company story, workshop photo, craftsmanship pitch | `page.tsx` |
| 4 | **Project Catalog** | `#catalog` | Filterable catalog: textures, concepts, past work | `page.tsx` |
| 5 | **Lead Form CTA** | `#contact` | Multi-step form → WhatsApp funnel | `LeadForm.tsx` |
| 6 | **Testimonials** | `#testimonials` | Social proof cards | `Testimonials.tsx` |
| 7 | **FAQ** | `#faq` | Accordion questions | `FAQ.tsx` |
| 8 | **Footer** | — | Copyright, social links, legal links, plan.chilliboys.mx link | `page.tsx` |
| 9 | **Floating WhatsApp** | — | Persistent bottom-right chat button | `FloatingWhatsApp.tsx` |

---

## Navigation

There is **no top navigation bar.** The site is designed as a scroll-driven single page.

**Internal links:**
- Hero "Browse Our Catalog" → `#catalog`
- Footer "Privacy Policy" → `/privacy-policy`
- Footer "Terms of Service" → `/terms`
- Footer "Plan Your Cerritos →" → `https://plan.chilliboys.mx`

**External links (all open in new tab):**
- Instagram: `https://instagram.com/chilliboys.mx`
- Facebook: `https://facebook.com/chilliboys.mx`
- WhatsApp: `https://wa.me/5216242294158`
- Plan Your Cerritos: `https://plan.chilliboys.mx`

---

## Catalog Filter System

**Filter categories (buttons):**
- All
- Textures & Finishes
- Design Concepts
- Past Work & Capabilities
- Handrails
- Pergolas
- Gates & Doors
- Solar
- CNC Woodwork
- Custom Steel
- Furniture

**How filtering works:**
Each catalog item has a `filter` key. When a filter button is clicked, items are shown if:
1. Filter is "All" → show everything
2. Filter matches the item's `filter` key
3. Filter matches the section's `category` key

**Data structure:**
```ts
catalog = [
  {
    category: "catalog.filter.textures",  // section header
    items: [
      {
        name: "Hammered Copper",
        desc: "...",
        tag: "#copper #handmade",
        filter: "catalog.filter.textures"  // used for filtering
      }
    ]
  }
]
```

---

## Lead Form Flow

```
User sees "Ready to Design Your Project?" section
  → Fills: Name*, Email, Phone*, Project Type, Budget, Timeline, Message
  → Clicks "Send & Open WhatsApp"
  → Form validates (name + phone required)
  → Shows success screen with green checkmark
  → After 800ms, opens WhatsApp with pre-filled message
  → User can also manually click "Open WhatsApp" button on success screen
```

**Pre-filled WhatsApp message format:**
```
Hi Chilli Boys!

Name: [name]
Email: [email]
Phone: [phone]
Project: [project type]
Budget: [budget range]
Timeline: [timeline]

Details: [message]
```

---

## Responsive Breakpoints

| Breakpoint | Tailwind Prefix | Layout Changes |
|------------|-----------------|----------------|
| < 640px | (default) | Single column, stacked sections, smaller text |
| 640px+ | `sm:` | 2-column grids for form, info bar |
| 768px+ | `md:` | 2-column About, 3-column testimonials, side-by-side CTAs |
| 1024px+ | `lg:` | 3-column catalog grid, 5-column info bar |
| 1280px+ | `xl:` | Max-width containers center content |

---

## Z-Index Hierarchy

| Layer | Z-Index | Element |
|-------|---------|---------|
| Background blur | -10 | Decorative gradient blobs |
| Content | 10 | Main page content |
| Floating WhatsApp | 50 | Sticky chat button |
| Modals/overlays | 100 | (reserved for future use) |

---

## Asset Placement Guide

| Asset Type | Directory | Naming Convention |
|------------|-----------|---------------------|
| Project photos | `/public/images/` | `project-[name]-[number].jpg` |
| Logo | `/public/images/` | `logo.png` or `logo.svg` |
| Team/workshop photos | `/public/images/` | `team-[description].jpg` |
| Favicon | `/public/` | `favicon.ico` |

**When adding photos:**
1. Drop files into `/public/images/`
2. Reference in components: `<img src="/images/project-pergola-1.jpg" />`
3. Add alt text for accessibility
4. Optimize to < 200KB each (use TinyPNG or Squoosh)
