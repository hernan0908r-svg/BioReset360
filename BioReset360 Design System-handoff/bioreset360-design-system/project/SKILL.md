---
name: bioreset360-design
description: Use this skill to generate well-branded interfaces and assets for BioReset360, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

**Brand:** BioReset360 — health optimization platform. Editorial, evidence-based, zero emoji, no gradients.

**Primary CTA:** `#181d26` background, white text, `border-radius: 12px`, 16px/500. One per viewport.
**Secondary CTA:** white background, `#181d26` text, `border-radius: 12px`, 1px `#dddddd` border.

**Key colors:**
- Ink/Primary: `#181d26`
- Canvas: `#ffffff`
- Coral signature: `#aa2d00`
- Forest signature: `#0a2e0e`
- Cream callout: `#f5e9d4`
- Body text: `#333840`
- Muted: `#41454d`
- Link (NOT primary button): `#1b61c9`

**Font:** Inter (Google Fonts) — substitute for Haas Grotesk
- Display: 40–52px / weight 400 (never bold for display)
- Sub-titles/buttons: weight 500
- Body: 14px / 400
- Legal only: weight 600

**Section padding:** 96px top + bottom (universal)
**Card radii:** 12px (signature/primary), 10px (content), 6px (inputs), 2px (legal)

**Do NOT:**
- Use `#1b61c9` (link blue) as primary button color
- Add gradients to hero
- Bold display type (>500 weight)
- Use pill radius outside pricing sub-system
- Put two non-white surface bands back to back
- Use emoji

**Key files:**
- `colors_and_type.css` — all CSS custom properties
- `ui_kits/marketing/index.html` — full marketing site prototype
- `assets/wordmark.svg` — BioReset360 wordmark
- `preview/` — design system cards
