# BioReset360 Design System

## Company Overview

**BioReset360** is a health optimization platform that combines biomarker testing, science-backed protocols, and expert coaching to help individuals systematically restore and elevate their biological performance. The name distills the brand philosophy: *Bio* (living systems), *Reset* (restore to optimal function), *360* (comprehensive, all-system view).

### Products & Surfaces
- **Marketing Website** — editorial-style marketing surface; primary design system consumer. See `ui_kits/marketing/`.
- **Health Dashboard** — user-facing app for tracking biomarkers, protocols, and progress (planned; not yet in this kit).

### Source Materials
This design system was bootstrapped from a comprehensive design specification document. No external Figma link or production codebase was provided at time of creation. If access becomes available, attach via Import and this system should be updated with real screenshots and component implementations.

---

## Content Fundamentals

### Voice & Tone
BioReset360 writes like a confident, research-backed expert — not a wellness influencer. The copy is **specific, not aspirational**. It names mechanisms, references clinical contexts, and earns trust through precision rather than enthusiasm.

- **First person vs. second person:** Always "you" — the product serves you. "Your biomarkers," "your protocol," "your baseline." Never "we help people" — always "we help you."
- **Casing:** Sentence case throughout (not Title Case for every heading). Reserve title case for proper product names and navigation labels.
- **Numbers:** Use numerals always, even for single digits ("3 protocols," not "three protocols"). Numbers signal clinical precision.
- **No emoji.** Zero. The brand reads as evidence-based; emoji undermines that register.
- **Phrasing examples:**
  - ✅ "Clinical-grade biomarker panels. Shipped to your door."
  - ✅ "Reset your biology. Reclaim your potential."
  - ✅ "Protocols built from peer-reviewed research, personalized to your labs."
  - ❌ "Supercharge your wellness journey! 🚀"
  - ❌ "Unlock your best self with our amazing platform"

### Copywriting Patterns
- **Hero headlines:** Two punchy sentences. First delivers the core claim; second grounds it in mechanism or specificity. Max 10 words each.
- **Sub-heads:** One sentence. Factual. Usually names the delivery method or the category of outcome.
- **Body copy:** 14px / 400. Dense but airy through spacing. Never bullet-heavy — prose preferred for brand copy; bullets OK for feature lists.
- **CTA labels:** Verb-first, specific. "Get started for free" (not "Learn more"). "Book a demo" (not "Contact us").
- **Section intros:** Two lines max. The section carries its own weight through layout.

---

## Visual Foundations

### Color Philosophy
The palette is editorial-black and white canvas as the permanent atmosphere, punctuated by **signature color surfaces** that carry brand voltage. There is no atmospheric gradient, no aurora, no colorful hero background. The brand's energy comes from restraint — white space is the dominant atmosphere, and color appears only when a section needs voltage.

Signature surfaces in use: **coral** (#aa2d00, oxide-red), **forest** (#0a2e0e, deep green), and **dark navy** (#181d26, same as primary ink). Supporting warmth from cream (#f5e9d4) and the demo-grid pastels (peach, mint, yellow, mustard).

### Typography
System font is **Inter** (variable, Google Fonts) as an open-source substitute for the specified Haas Grotesk. *Flag for brand team: if Haas Grotesk licenses are procured, substitute by swapping the `--font-display` and `--font-body` variables in `colors_and_type.css`. Line-height will need ~5% upward adjustment as Inter has a slightly lower cap-height than Haas.*

- Display type runs at weight 400–500. Never bold (700). Size carries emphasis.
- Body runs at 14px / 400 universally.
- Buttons and labels at 500.
- The only 600-weight use is legal/cookie CTAs — reserved for system-required surfaces.

### Backgrounds & Surfaces
- **Default:** white canvas (#ffffff), always. No texture, no tint.
- **Soft:** #f8fafc for tabbed feature cards and featured pricing tiers.
- **Signature cards:** full-bleed, fully saturated color blocks (coral, forest, dark, cream). Not accent borders or tinted panels — always full-surface color.
- Never two non-white surfaces back to back. Rhythm: canvas → signature → canvas → cream → dark → canvas.

### Spacing & Layout
4px base unit. Section bands: 96px top + bottom internal padding. Card internals: 48px (signature), 32px (feature), 24px (content), 16px (demo grid). Max content width ~1280px.

### Animation & Motion
Not documented in source spec — no animations are defined. Transitions are implied minimal (no bounces, no spring physics, no choreographed sequences). Treat as: instant state changes only.

### Hover States
**Not documented per system policy.** Only Default and Active/Pressed states exist. Do not invent hover states.

### Shadows & Elevation
Color-contrast-first elevation. Shadows are minimal — only on primary button rest state (faint drop + blue-tinted glow at low alpha). No card shadows; card depth comes from background-color contrast against the canvas.

### Borders
1px hairline (#dddddd) for inputs, secondary buttons, table dividers. No decorative borders on cards — surface color does the work.

### Corner Radii
Hierarchical: 12px (primary CTAs, signature cards), 10px (content cards), 6px (inputs), 2px (legal/cookie), 9999px (pricing pills, icon circles).

### Imagery
- Product UI screenshots inside demo-grid cards: 4:3 or 16:10, `border-radius: 10px`
- Article thumbnails: 16:9, `border-radius: 10px`
- Avatars/testimonials: perfect circles
- Hero: no imagery — type and space only

---

## Iconography

No custom icon font or SVG icon library was provided in the source spec. The system does not rely on iconographic language in its primary CTA layer — buttons are text-only.

Where icons appear (navigation, feature checklists, pricing comparison rows), they are **simple stroke-based marks** at low visual weight, consistent with Inter's humanist geometry. Suggested CDN substitute: **Lucide Icons** (`https://unpkg.com/lucide@latest`), 1.5px stroke weight, matching the body text's light register.

Checkmarks in pricing rows: use `✓` or a simple SVG stroke check, not emoji, not filled icons.

**No emoji are used anywhere in the system.**

---

## File Index

```
README.md                        ← this file
SKILL.md                         ← agent skill definition
colors_and_type.css              ← all CSS custom properties (tokens)
assets/                          ← logos, wordmarks (see below)
  wordmark.svg                   ← BioReset360 text wordmark
fonts/                           ← (empty; using Google Fonts CDN)
preview/                         ← design system cards for the DS tab
  colors-primary.html
  colors-signature.html
  colors-text.html
  colors-semantic.html
  type-display.html
  type-body.html
  spacing.html
  radius.html
  elevation.html
  buttons.html
  cards-signature.html
  cards-content.html
  inputs.html
  logo.html
ui_kits/
  marketing/
    README.md
    index.html                   ← interactive marketing website prototype
    Nav.jsx
    Hero.jsx
    SignatureCards.jsx
    DemoGrid.jsx
    FeatureCard.jsx
    Footer.jsx
```

---

## Known Gaps & Caveats

- **No Figma access** was provided. UI kit is built from the spec description, not from inspected design files.
- **No production codebase** was provided. Components are clean cosmetic recreations, not lifted from source.
- **Font substitution:** Inter replaces Haas Grotesk. Flag for brand team.
- **Demo-grid pastel hex values** (#fcab79, #a8d8c4, #f4d35e, #d9a441) are from the spec but noted as "inferred from pixel sampling" — verify against production.
- **No real product screenshots** were available; demo-grid cards use abstract placeholder shapes.
- Hover states are intentionally omitted per system policy.
- Animation timings not defined.
