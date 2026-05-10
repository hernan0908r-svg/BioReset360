# BioReset360 — Marketing UI Kit

An interactive, click-through prototype of the BioReset360 marketing website. Built from the design system spec; no production codebase or Figma file was available at creation time.

## Pages / Sections (scroll order)
1. **Hero** — white canvas, h1, sub-head, primary + secondary CTA, social proof strip
2. **Logo Strip** — partner/integration logos in muted ink
3. **Feature Tabbed Card** — 4-tab feature exploration (surface-soft background)
4. **Signature Coral Card** — full-bleed coral (#aa2d00) brand voltage section
5. **Demo Grid** — 6-card pastel grid with abstract protocol UI fragments
6. **Signature Forest Card** — full-bleed forest (#0a2e0e) brand voltage section
7. **Cream Callout** — soft beige stat band (#f5e9d4)
8. **Dark Navy CTA Card** — full-bleed dark (#181d26) mid-page CTA
9. **Light Gray CTA Band** — surface-strong (#e0e2e6) footer CTA
10. **Footer** — 5-column link grid + legal row

## Components
| File | Exports |
|---|---|
| `Nav.jsx` | `Nav` |
| `Hero.jsx` | `Hero`, `LogoStrip` |
| `SignatureCards.jsx` | `SignatureCoralCard`, `SignatureForestCard`, `DarkCtaCard`, `CreamCallout`, `CtaBandLight` |
| `DemoGrid.jsx` | `DemoGrid` |
| `FeatureCard.jsx` | `FeatureCard` |
| `Footer.jsx` | `Footer` |

## Design decisions
- Font: Inter (Google Fonts) — substitute for Haas Grotesk per spec
- No gradient, no aurora, no hero imagery — intentional per brand rules
- Section rhythm follows spec: canvas → coral → canvas → forest → cream → dark → light-gray → footer
- Demo grid heights are deliberately uneven (alternating 180px / 150px) per spec
- Zero emoji used

## To extend
- Swap `Nav.jsx` logo text for an SVG wordmark from `assets/wordmark.svg`
- Add real product UI screenshots into demo-grid cards (replace abstract bar charts)
- Wire up a Pricing page using the pricing sub-system (Inter Display, pill buttons, --rounded-pill)
