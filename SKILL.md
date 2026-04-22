---
name: botines-design
description: Use this skill to generate well-branded marketing assets for BOTines — a WhatsApp-based reservation platform for sports facility owners — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and a landing-page UI kit (olive + cream palette). Scope is marketing only; the product backoffice is out of scope.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key things to know about BOTines:

- **Marketing palette (olive + cream)**: olive primary `#7E8C54` on cream `#EDE8D0`. This is the palette to use for any landing-page, pitch, or outward-facing material. (The product backoffice uses a separate green palette documented in `colors_and_type.css` for reference only.)
- **Typography**: DM Sans (Google Fonts) — weights 400/500/600/700/800.
- **Iconography**: FontAwesome 6 Free (solid + regular). Never emoji.
- **Language**: Spanish (Rioplatense, informal *vos*) in product; bilingual on marketing. Sentence case everywhere. Wordmark is always **BOTines** (caps BOT + lower ines).
- **Voice**: calm, direct, practical — written for small-business owners, not developers.
- **Visual rules**: flat backgrounds (no ambient gradients), subtle shadows, 10–24 px radii, 1 px visible borders on cards, no glassmorphism, no emoji.

Start with `README.md` for full guidelines, `colors_and_type.css` for tokens, `assets/` for the logo, and `ui_kits/landing/` for component references.
