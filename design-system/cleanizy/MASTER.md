# Cleanizy - Master Design System (UI/UX Pro Max)

> **Version:** 2.0.0  
> **Style Category:** Soft UI Evolution + Clean Eco Teal  
> **Target Audience:** Particuliers & Professionnels à Marseille et Bouches-du-Rhône (13)  
> **Accessibility:** WCAG AA (Contrast ≥ 4.5:1)  
> **Motion Scale:** 4/10 (Subtle Micro-interactions, 200-300ms)  

---

## 🎨 Color Palette & Design Tokens

```css
:root {
  /* Brand Primary & Accents */
  --color-primary: #0F172A;       /* Slate Navy - Headings & High Contrast Text */
  --color-primary-teal: #0F766E;  /* Deep Clean Teal - Brand Hero & Main Buttons */
  --color-primary-hover: #0D9488; /* Hover state for primary buttons */
  --color-secondary-teal: #14B8A6;/* Vibrant Teal - Highlights & Accents */
  --color-accent-blue: #0284C7;   /* Ocean Blue CTA */
  --color-accent-light: #CCFBF1;  /* Soft Teal Mint - Badges & Tag Backgrounds */
  --color-accent-subtle: #F0FDFA; /* Very Light Mint Background for Cards/Sections */

  /* Neutral Surface & Backgrounds */
  --color-bg-body: #F8FAFC;       /* Body Background */
  --color-bg-card: #FFFFFF;       /* Card Background */
  --color-bg-nav: rgba(255, 255, 255, 0.92); /* Sticky Glass Header */

  /* Text & Typography Colors */
  --color-text-main: #0F172A;     /* Primary text color (4.5:1+ contrast) */
  --color-text-muted: #475569;    /* Secondary text color */
  --color-text-light: #64748B;    /* Muted label color */
  --color-text-inverse: #FFFFFF;  /* Text on dark background */

  /* Borders, Rings & Shadows */
  --color-border: #E2E8F0;
  --color-border-hover: #CBD5E1;
  --color-ring: #0F766E;
  --shadow-sm: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05);
  --shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.05);
  --shadow-hover: 0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06);

  /* Border Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Typography */
  --font-heading: 'Poppins', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
}
```

---

## 📐 Layout & Grid

- **Container Max Width:** `1240px`
- **Breakpoints:**
  - Mobile: `< 768px`
  - Tablet: `768px - 1023px`
  - Desktop: `1024px+`
- **Grid Layouts:**
  - Hero: Centered overlay with high-contrast text and dual CTAs (Call + Quote Modal).
  - Benefits: 3 columns (`repeat(3, 1fr)`) with hover card elevation.
  - Services: 4 columns (`repeat(4, 1fr)`) on desktop, 2 on tablet, 1 on mobile.
  - Reviews: 3 columns centered flex layout with verified customer badges.
  - FAQ: Interactive accordion with smooth CSS height transitions.

---

## ⚡ Motion & Interactions

- **Hover Duration:** `200ms cubic-bezier(0.4, 0, 0.2, 1)`
- **Scroll Reveal:** IntersectionObserver with `translateY(20px)` to `translateY(0)` fade-in.
- **Accessibility:** `@media (prefers-reduced-motion: reduce)` disables all transforms.

---

## ✅ Quality Standards

1. **No Emojis for UI icons:** SVG icons only (Heroicons / Lucide style).
2. **Touch Targets:** Minimum 44×44px for buttons, phone triggers, and mobile sticky bar.
3. **Contrast:** AAA compliance for headings (#0F172A), AA compliance for body text (#475569 on #FFFFFF).
4. **Keyboard Focus:** Visible `outline: 2px solid var(--color-primary-teal); outline-offset: 2px;` on `:focus-visible`.
