# BOTines — Design System

A WhatsApp-based reservation platform for sports-facility owners. Customers book
football / padel / tennis courts by chatting with a WhatsApp bot; owners manage
everything (courts, schedules, prices, pending deposits, finances) from a
web-based **Backoffice**.

This repo is the **design system** used to build BOTines' marketing site. It
documents the brand's olive-on-cream visual direction, content tone, and a
full landing-page UI kit.

> Scope: **marketing only**. The product backoffice and bot UI live elsewhere
> and use a different green palette — the tokens for that palette are kept
> here for reference but no backoffice UI kit ships with this system.

---

## Sources

- **Product brand mark** — `uploads/WhatsApp Image 2026-04-19 at 22.31.07.jpeg`
  (copied to `assets/botines-logo.jpeg`). Black soccer-ball-in-speech-bubble
  with a single green leaf; wordmark "**BOT**" in deep green + "**ines**" in
  bright green.
- **Backoffice codebase** — `github.com/juanbalella20/SistemaRerservaDocs`
  (React + Vite + Tailwind). Used only as a **reference** for content tone,
  copy patterns, and the product-green tokens (not recreated in this system).
- **Marketing direction (this project)** — olive-on-cream palette
  (`#7E8C54` / `#EDE8D0`) requested by the user for the landing page.

---

## Index (manifest of this folder)

| Path | What it is |
| --- | --- |
| `README.md` | You are here. Brand context, content + visual foundations. |
| `SKILL.md` | Agent Skill descriptor — so this system can be used standalone. |
| `colors_and_type.css` | CSS variables (colors, type, spacing, radii, shadows, motion). |
| `assets/` | Logos, illustrations, any static brand images. |
| `preview/` | Small HTML cards used to populate the Design System tab. |
| `ui_kits/landing/` | Marketing landing page for BOTines (olive+cream brand). |

There are no slide templates or decks attached; slides/ is intentionally absent.

---

## CONTENT FUNDAMENTALS

### Voice & tone

**Bilingual (ES-AR / EN).** The product is Spanish-Argentine by default —
codebase is in *español rioplatense* (e.g. "confirmá", "seleccioná", "Cerrar
sesión"). Marketing copy targets small-business owners of sports facilities —
treat them as busy, practical, not technical.

- **Voice** — plain, direct, reassuring. Second-person singular, informal (*vos*
  / *you*). Never *usted*, never *we* royal. "Automatizá tus reservas",
  "Start automating your reservations."
- **Tone** — calm and confident. No exclamation chains, no hype words
  ("revolutionary", "game-changer"). Promises are concrete: "saves time",
  "reduces missed bookings", "increases revenue".
- **Casing** — **Sentence case** for UI labels, buttons, section titles.
  "Nueva reserva", "Mis canchas", "Get started" — not Title Case. Only the
  word **BOTines** has the split-case signature (see below).
- **Wordmark casing** — always **BOTines** (caps BOT + lower ines) in running
  copy and UI. The logo reinforces it by coloring the two halves.
- **Emoji** — not used in the product UI. FontAwesome glyphs do all the
  iconographic work. A single WhatsApp glyph on the contact CTA is acceptable.
  Avoid emoji in headings, body, or notifications.
- **Numbers** — Argentine locale: thousands with `.`, decimals with `,`,
  currency prefix `$ ` with a space (`$ 12.500`). Dates `dd/mm`; weekdays
  abbreviated three letters (`lun`, `mar`, `mié`…).
- **Status labels** — single words when possible: *Pendiente*, *Confirmada*,
  *Pagado*, *Cancelada*. Compound states read naturally: "Seña OK",
  "Comprobante enviado".

### Examples from the codebase

| Surface | Copy |
| --- | --- |
| Login heading | "Backoffice" · "Ingresá con tu cuenta de administrador" |
| Empty courts state | "No hay canchas cargadas" / "Hacé clic en 'Nueva cancha' para agregar la primera." |
| Empty reservations | "Sin reservas en los próximos 30 días" |
| Confirmation | "¿Estás seguro que querés eliminar esta reserva?" |
| Error | "Completá usuario y contraseña" |
| Primary CTA | "Guardar", "Crear cancha", "Ingresar", "Nueva reserva" |

### Copy rules for the landing

- Lead with the outcome, not the technology. "Reservations on autopilot" >
  "WhatsApp bot SaaS".
- One idea per section, one CTA per section.
- Every feature card: short noun title + one-sentence explainer (≤ 14 words).
- Use concrete verbs: *automate, confirm, reduce, save, increase*.
- Avoid: gradients of adjectives, stacked buzzwords, tech jargon ("API",
  "webhook", "SaaS").

---

## VISUAL FOUNDATIONS

### Colors

**Marketing palette (in use):** olive primary `#7E8C54` on cream `#EDE8D0`.
Calm, earthy, premium — olive green as accent, warm cream as canvas, near-black
ink for text, and crisp white for cards. Green is **reserved for CTAs and key
highlights only** — never for ambient decoration.

**Product palette (reference only):** the backoffice uses `#16a34a` /
`#14532d` on gray-100 — kept in tokens for cross-reference, but not exercised
in this system.

Full token list: `colors_and_type.css`.

### Typography

- **Family:** DM Sans (Google Fonts) — already in use by the backoffice.
  Weights: 400, 500, 600, 700, 800. Italic 400 available.
- **Scale:** display 72/56/44 → headings 36/28/22/18 → body 18/16/14/12.
- **Weight usage:** headings 700–800, UI labels 600, body 400, captions 500.
- **Tracking:** tight (`-0.02em`) on displays and h1/h2, wide (`+0.08em`) on
  uppercase eyebrows and table column headers.
- **Numbers:** use `tabular-nums` for prices, times, counters so columns align.
- **No alternate family.** Mono only inside inline `<code>` — system mono.

### Spacing

4 px base grid. Token list in CSS. Section rhythm on the landing is 96 px
(`--space-24`) top/bottom; card interior padding is 24–32 px
(`--space-6`/`--space-8`); compact UI (backoffice) uses 8–16 px.

### Radii

Soft, rounded, but not pill-y except where explicitly pill (badges, avatars).

- Inputs / buttons: **10 px** (`--radius-md`)
- Cards / panels: **14 – 18 px** (`--radius-lg` → `--radius-xl`)
- Modals / hero cards: **24 px** (`--radius-2xl`)
- Badges, chips, avatars, toggle tracks: **`--radius-full`**

### Shadows / elevation

Subtle, low-contrast. Never hard drop shadows. Colored shadow is reserved for
the primary CTA (`--shadow-brand`) as a gentle glow.

```
xs  → hairline lift
sm  → resting card (most cards)
md  → hovered card
lg  → dropdowns, popovers
xl  → modal panels, login card on landing
```

### Borders

1 px solid `--border-1` (gray-200) on every card, input, and row. Borders are
always visible; cards do not float on shadow alone — the border + shadow
together give the "structured" feel. Inputs focus → border flips to
`--botines` / `--brand-olive` with a 3 px soft ring.

### Backgrounds

- **Marketing page** — flat `--brand-cream` canvas with occasional
  `--brand-cream-soft` tinted bands for section alternation. **No gradients, no
  hero photography, no patterns.** White cards + olive accents.
- **Product page** — flat `--gray-100`. White cards. The Login screen is the
  single exception: a diagonal gradient in the brand green.
- **Bot / WhatsApp mock** — the classic WhatsApp chat background
  `#ECE5DD` with white + `#DCF8C6` bubbles. Never recolor the chat.

### Animation

- Default easing: `cubic-bezier(.4, 0, .2, 1)` (`--ease-out`).
- Durations 120 / 180 / 320 / 520 ms.
- Page enter: 10 px translate-up + fade, 220 ms.
- Modal enter: scale 0.97 → 1.0 + fade, 200 ms.
- Hover on buttons: color change + shadow increase only — **no vertical lift**
  on primary controls (reserved for cards/stat tiles: `translateY(-1px)`).
- Active/press: `scale(0.98)` for 120 ms.
- No bouncing, no long ease-in-out landings, no parallax.

### Hover & press states

- **Primary CTA:** hover darkens to `--brand-olive-dark` and the colored
  shadow deepens. Press → scale 0.98.
- **Secondary buttons:** hover fills gray-100 → gray-200.
- **Nav links (sidebar):** hover `rgba(255,255,255,.1)`; active state uses the
  solid brand color + shadow.
- **Cards:** hover moves `shadow-sm` → `shadow-md`; selected cards also gain
  a 2 px brand-colored border and a soft ring
  (`0 0 0 3px rgba(22,163,74,.12)`).
- **Links (in-text):** underline on hover; color stays `--brand-olive` (or
  `--botines` in-product).

### Transparency & blur

- Modal backdrop: `rgba(0, 0, 0, .4)` — never blurred (keeps it crisp).
- Sidebar mobile backdrop: `bg-black/50`.
- Hero screenshots overlay a `rgba(0, 0, 0, .65)` → `transparent` gradient
  to anchor white captions over imagery.
- Glassmorphism is **not** part of the brand. Avoid `backdrop-filter`.

### Imagery tone

The product ships with very little imagery (one court photo slot per court,
uploaded by the owner). For marketing, prefer:

- **Warm, earthy photography** (grass greens, leather balls, cream walls) —
  matches the olive+cream palette.
- **No stock-photo faces** unless real customer portraits.
- **No illustrated mascots.** Keep it grown-up.

### Layout rules

- Landing content max width `1200 px` (`--container-xl`); centered.
- Gutters: 24 px mobile, 48 px desktop.
- Sections stack vertically with 96 px breathing room.
- Sticky nav on landing (white with 1 px bottom border on scroll). Never
  translucent / blurred.
- Backoffice: fixed 256 px / 80 px collapsed left sidebar + 80 px sticky header
  + scrollable `<main>`.

### Cards — anatomy

```
┌───────────────────────────────┐
│  (optional 16:9 image         │  ← object-cover
│   with bottom gradient text)  │
├───────────────────────────────┤
│  Action row (secondary btns)  │  ← 8–12 px gap, pill backgrounds
├───────────────────────────────┤
│  Content                      │  ← 12–16 px padding
│  ────── token divider ─────   │
│  Content row                  │
└───────────────────────────────┘
  border: 1px solid gray-200
  radius: 14–18 px
  shadow: sm (hover: md)
```

### Don'ts

- No purple / indigo gradients.
- No emoji as brand decoration.
- No rounded-corner cards with only a left-border accent stripe (exception:
  `.stat-card` in the backoffice already uses this motif — keep it *only*
  there).
- No heavy custom SVG illustrations — use product screenshots + WhatsApp
  chat mockups.
- No glassmorphism, no neumorphism, no 3D / isometric imagery.

---

## ICONOGRAPHY

**Primary icon system: FontAwesome 6 (Free, solid + regular).** Already used
throughout the backoffice codebase. Load via CDN in any HTML entry point:

```html
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
```

Icons are **inline text glyphs** (`<i class="fas fa-futbol" />`), sized by
`font-size`, colored by `color`. This gives free theming via CSS variables
and perfect vertical alignment with adjacent labels.

### Glyph vocabulary (from the codebase)

| Semantic | Glyph |
| --- | --- |
| Navigation · Calendar | `far fa-calendar-alt` |
| Navigation · Courts | `fas fa-map-marked-alt` |
| Navigation · Activities | `fas fa-running` |
| Navigation · Notifications | `fas fa-bell` |
| Navigation · Clients | `fas fa-users` |
| Navigation · Reservations | `fas fa-clipboard-list` |
| Navigation · Finance | `fas fa-chart-line` |
| Navigation · Settings | `fas fa-cog` |
| Brand mark (placeholder) | `fas fa-futbol` |
| Actions · Edit | `fas fa-pencil-alt` |
| Actions · Delete | `fas fa-trash-alt` |
| Actions · Add | `fas fa-plus` |
| Actions · Close | `fas fa-times` |
| Status · Loading | `fas fa-circle-notch fa-spin` |
| Status · Success | `fas fa-check` |
| Status · Error | `fas fa-exclamation-circle` |
| Menu trigger | `fas fa-bars` |
| Logout | `fas fa-sign-out-alt` |
| Search | `fas fa-search` |
| Phone | `fas fa-phone` |
| Money | `fas fa-dollar-sign` |
| Clock | `fas fa-clock` |
| Tag | `fas fa-tag` |

### SVG assets in the repo

- `img/mdd.svg` (one file in `SistemaRerservaDocs`) — not a brand asset,
  technical diagram; not imported.
- `assets/botines-logo.jpeg` (this repo) — canonical wordmark + mark.

### For the landing page

The landing uses a **mixed system**: FontAwesome for concrete product icons
(sparing) + the canonical logo mark. The user asked for "simple icons" in the
features grid; we lean on FontAwesome so styling stays consistent with the
product.

**Emoji:** not used. **Unicode symbols:** not used as icons (arrows `→` and
check `✓` excepted, rarely, and always inline with surrounding text).

**Substitution note:** Lucide or Heroicons would render a crisper, stroke-based
alternative if the user prefers a lighter feel — flagging this as an option but
keeping FontAwesome to stay aligned with the existing backoffice.

---

## Font files

DM Sans is loaded from Google Fonts; no `.ttf`/`.woff2` binaries are included.
If you need offline assets, pull from
`https://fonts.google.com/specimen/DM+Sans` and drop into `fonts/`.

**Substitution flag:** none needed — DM Sans is the product's actual font and
is fully available on Google Fonts.
