# DESIGN.md — Chilli Boys Manufacturing Website

> **Design system, color palette, typography, and component specifications.**

---

## Brand Identity

- **Name:** Chilli Boys Manufacturing / Chilli Boys MFG.
- **Mood:** Industrial, coastal, artisan, Baja desert meets ocean
- **Tone:** Confident, skilled, approachable, no-nonsense
- **Inspiration:** Engineering blueprints, rusted metal, desert sunsets, ocean waves

---

## Color Palette

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| **Copper** | `#b87333` | `text-copper` / `bg-copper` | Primary accent, CTAs, highlights, stars |
| **Rust** | `#8b4513` | — | Gradient end, hover states |
| **Steel** | `#2c2c2c` | — | Dark card backgrounds |
| **Sand** | `#f5f5dc` | — | (reserved for light mode, not currently used) |
| **Ocean** | `#006994` | — | (reserved for secondary accent, not currently used) |
| **Background** | `#0a0a0a` | `bg-[#0a0a0a]` | Page background |
| **Surface** | `rgba(255,255,255,0.03)` | `bg-white/[0.03]` | Card backgrounds |
| **Border** | `rgba(255,255,255,0.10)` | `border-white/10` | Card borders, dividers |
| **Text Primary** | `#f5f5f5` | `text-gray-100` | Headings, body text |
| **Text Secondary** | `#9ca3af` | `text-gray-400` | Descriptions, labels |
| **Text Muted** | `#6b7280` | `text-gray-500` | Footer, captions |
| **Success** | `#16a34a` | `text-green-600` | WhatsApp buttons, confirmations |

### Gradients

**Copper Gradient (primary CTA):**
```css
background: linear-gradient(135deg, #b87333 0%, #8b4513 100%);
```
Used on: main CTA buttons, accent bars, decorative shapes.

**Hero Background Blur:**
```css
/* Two overlapping blurred circles */
background: #b87333; /* top-left */
background: #8b4513; /* bottom-right */
filter: blur(120px);
opacity: 0.2;
```

---

## Typography

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 (Hero) | 48px / 72px (md) | 900 (black) | 1.1 | -0.02em |
| H2 (Section) | 36px / 48px (md) | 900 | 1.2 | -0.01em |
| H3 (Subsection) | 24px | 700 | 1.3 | 0 |
| H4 (Card Title) | 20px | 700 | 1.4 | 0 |
| Body | 16px / 18px (md) | 400 | 1.6 | 0 |
| Label | 12px | 500 | 1.5 | 0.05em (uppercase) |
| Tag | 12px | 400 | 1.5 | 0 |
| Button | 16px / 18px | 700 | 1 | 0 |

**Font Family:** `Inter`, system-ui, -apple-system, sans-serif  
**Monospace (tags):** `font-mono` (Tailwind default)

---

## Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| Section Padding (Y) | 96px (py-24) | Between major sections |
| Section Padding (X) | 16px (px-4) | Mobile horizontal padding |
| Card Padding | 24px (p-6) | Inside catalog cards |
| Card Gap | 24px (gap-6) | Between grid cards |
| Max Width | 1280px (max-w-7xl) | Content container |
| Border Radius (Cards) | 16px (rounded-2xl) | Catalog cards, form inputs |
| Border Radius (Buttons) | 9999px (rounded-full) | All CTA buttons |
| Border Radius (Small) | 8px (rounded-lg) | Social icons, footer links |

---

## Component Specifications

### Primary CTA Button
```
Background: copper-gradient
Text: white, bold, 18px
Padding: 16px 32px (px-8 py-4)
Border-radius: full
Shadow: shadow-2xl, hover: shadow-copper/50
Hover: scale-105
Icon: MessageCircle (left of text)
```

### Secondary Button
```
Background: transparent
Border: 1px solid rgba(255,255,255,0.2)
Text: white, medium weight
Padding: 16px 32px
Border-radius: full
Hover: bg-white/5
```

### Catalog Card
```
Background: rgba(255,255,255,0.03)
Border: 1px solid rgba(255,255,255,0.10)
Border-radius: 16px
Padding: 24px
Hover: border-copper/50, bg-white/[0.06], translateY(-8px)
Accent bar: copper-gradient, 48px wide, 8px tall, rounded-full
Hover accent bar: expands to 80px wide
```

### Form Input
```
Background: rgba(255,255,255,0.05)
Border: 1px solid rgba(255,255,255,0.10)
Border-radius: 12px (rounded-xl)
Padding: 12px 16px (px-4 py-3)
Focus: border-copper, ring-1 ring-copper
Text: white
Placeholder: gray-500
```

### Floating WhatsApp Button
```
Background: #16a34a (green-600)
Text: white
Padding: 12px 16px (px-4 py-3)
Border-radius: full
Position: fixed, bottom-6, right-6
Z-index: 50
Shadow: shadow-2xl, hover: shadow-green-500/40
Hover: scale-105
Tooltip: expands on hover, "Chat with us" / "Chatea con nosotros"
```

### Filter Pill
```
Active: copper-gradient, white text, no border
Inactive: bg-white/5, border-white/10, text-gray-400
Border-radius: full
Padding: 8px 16px (px-4 py-2)
Font: 14px medium
Hover (inactive): bg-white/10, text-white
```

---

## Animation & Motion

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| Card hover lift | 400ms | cubic-bezier(0.4, 0, 0.2, 1) | mouseenter |
| Accent bar expand | 400ms | ease-out | mouseenter |
| Button scale | 150ms | ease-out | mouseenter |
| WhatsApp tooltip expand | 300ms | ease-out | mouseenter |
| FAQ accordion | 200ms | ease-in-out | click |
| Smooth scroll | native | — | anchor link click |

**No page transitions.** This is a static marketing site.

---

## Dark Mode

The site is **dark-mode only.** There is no light mode toggle.

Background: `#0a0a0a`  
Text: `#f5f5f5` (primary), `#9ca3af` (secondary)

---

## Accessibility

- **Color contrast:** Copper (#b87333) on #0a0a0a = 4.8:1 (AA compliant for large text)
- **Focus states:** All interactive elements have visible focus rings (copper color)
- **Alt text:** All images MUST have alt text when added
- **Semantic HTML:** Proper use of section, article, nav, footer, h1-h6 hierarchy
- **ARIA labels:** Social icons and WhatsApp button have aria-label
- **Language:** HTML lang attribute switches with i18n context (en / es)

---

## Image Treatment

When real photos are added:
- **Aspect ratios:** 4:3 for workshop photos, 16:9 for hero background, 1:1 for thumbnails
- **Overlay:** Dark gradient overlay (rgba(0,0,0,0.4)) on hero images for text readability
- **Border radius:** 16px (rounded-2xl) for all photos
- **Object fit:** cover
- **Lazy loading:** Use Next.js Image component with priority for hero, lazy for rest

---

## Iconography

All icons from **Lucide React**. Consistent 24px (w-6 h-6) for UI, 20px (w-5 h-5) for inline.

| Icon | Usage |
|------|-------|
| `MessageCircle` | WhatsApp buttons, floating CTA |
| `Factory` | Hero tagline, engineering badge |
| `Hammer` | Catalog section headers |
| `MapPin` | Location info bar |
| `Ruler` | Specialty info bar |
| `Waves` | Service area info bar |
| `Clock` | Hours info bar |
| `Phone` | Phone info bar |
| `ArrowRight` | Secondary CTA |
| `Mountain` | Lead form section icon |
| `Star` | Testimonial ratings |
| `Quote` | Testimonials section header |
| `HelpCircle` | FAQ section header |
| `ChevronDown` | FAQ accordion toggle |
| `Send` | Lead form submit |
| `CheckCircle` | Form success state |
| `Check` | Active filter indicator |
| `Globe` | Language switcher |
| `Instagram` | Social link |
| `Facebook` | Social link |
| `Mail` | (reserved for contact) |
