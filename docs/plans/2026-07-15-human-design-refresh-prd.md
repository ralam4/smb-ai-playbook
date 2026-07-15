# PRD — Human Design Refresh ("Warm Studio" language)

**Date:** 2026-07-15
**Status:** Approved for implementation
**Owner:** Rafee (design direction), Claude (execution)

## 1. Why

The current site is polished but formulaic: every hero uses the same grain + grid-pattern + eyebrow-label recipe, every content block is the same glass card, and five different sections use identical mono "01/02/03" numbered lists. It reads as competent AI-generated design — bland numbers and words. Rafee's guidance: bring in **human design elements and color** — inspiration is the Otter (withotter.com) aesthetic: deep-ink friendly type, organic blob shapes, hand-drawn illustration accents, soft rounded cards, playful numbered badges.

We are NOT cloning Otter. We keep the Playbook's warm cream editorial soul and terracotta brand accent, and layer in organic, hand-made, colorful humanity.

## 2. Design language: "Warm Studio"

### 2.1 Palette
Keep the cream canvas; deepen the ink; add a supporting cast of warm pastels.

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#FAF6EF` | warm cream canvas (slightly sunnier than today) |
| `--color-surface` | `#FFFFFF` | cards |
| `--color-ink` | `#1E3932` | **deep pine ink** — all headlines + primary text (replaces near-black) |
| `--color-ink-soft` | `#5A6B63` | secondary text |
| `--color-accent` | `#C4622D` | terracotta — stays the brand action color (buttons, links) |
| `--color-accent-hover` | `#A8511F` | |
| `--color-peach` | `#F9C6A6` / light `#FCE8D9` | blob fills, number badges, highlights |
| `--color-mint` | `#BFE3D0` / light `#E7F4EC` | blob fills, secondary highlights |
| `--color-butter` | `#F6D98A` / light `#FBF0D2` | accents, stars, underline doodles |
| `--color-sky` | `#BFD8E8` | occasional cool relief |
| `--color-border` | `#EADFCE` | warmer borders |

Category taxonomy (Customers/Profits/Operations/Scale) keeps its 4 hues but each gets a **pastel chip treatment** (soft fill + deep-ink text) instead of today's saturated dot-and-label.

### 2.2 Typography
- **Display: `Fraunces`** (Google Fonts, use `opsz` + `SOFT`/`WONK` axes where supported) — a warm, human serif with personality; replaces DM Serif Display. Big headlines set tight, occasionally with one word in italic terracotta (keep that signature).
- **Body: `DM Sans`** — stays.
- **Mono: `IBM Plex Mono`** — stays, but ONLY inside PromptBlock/code contexts. Mono is banned as decorative label/number styling.

### 2.3 Shape & texture motifs (replaces grid-pattern + glass-everywhere)
1. **Organic blobs** — soft SVG blob shapes (peach/mint/butter at 60–100% opacity) floating behind heroes, photos, and section corners. Every page hero gets a *different* blob composition. A shared `<Blob>` component with 4–5 path variants + color + rotation props.
2. **Hand-drawn doodle accents** — a small SVG set drawn with irregular stroke (2.5–3px, `stroke-linecap="round"`, slightly wobbly paths): squiggle underline, circled-word oval, arrow with a curve, sparkle/star, asterisk, dashed loop. A shared `<Doodle>` component (`variant` prop). Used to underline the key word in headlines (instead of italic-only), point at CTAs, and dot section corners.
3. **Blob number badges** — the Otter "1/2/3" treatment: a Fraunces numeral sitting on a rotated organic blob (peach/mint/butter). Shared `<BlobBadge n={1} color="peach">`. This REPLACES every mono `01` pill on the site.
4. **Soft cards** — white `rounded-[2rem]` cards, 1px warm border, small warm shadow (`0 2px 0 rgba(30,57,50,0.06)` + hover lift). Glass (`backdrop-blur`) survives ONLY on the floating Nav pill. All other `.glass` usage migrates to soft cards.
5. **Grain stays** but only on heroes, dialed to opacity 0.2 — it's part of the warmth.
6. **Wavy section dividers** — replace the gradient hairlines with either generous whitespace or a gentle SVG wave/curve between major color-band sections. Alternate section backgrounds between cream and a slightly deeper `#F4EDE1` band for rhythm.

### 2.4 Illustration & humanity
- **Rafee's photo** (`src/assets/rafee.png`) goes on the About hero: layered on a peach blob, slight rotation (−2°), doodle sparkle + squiggle accents, caption in handwritten-feel style. Optionally reused small (rounded, ring) on the Contact page CTA ("You'll be talking to me, not a bot").
- The **4 archetype mascots** stay — they're the strongest human asset. The archetype pages lean harder into their color systems.
- Where a section currently has nothing but text (Home "how it works", About "advice gap"), add small inline doodle-style spot illustrations (hand-drawn SVG: a lightbulb, a coffee cup, a storefront awning, a wrench, a paper plane) rather than leaving pure text columns.

### 2.5 Motion
Keep the existing fadeUp/stagger + reduced-motion handling. Add: blobs get a very slow subtle float/rotate (30s+, disabled under reduced motion); doodles can draw-in via `stroke-dashoffset` on scroll reveal. Keep hover lift on cards; drop the cursor-tracking glow system (GlowCard) — it's tech-flashy, not human.

## 3. Scope of work

### Wave 1 — Foundation + flagship pages (Opus agent)
1. `src/index.css` — new tokens, Fraunces import, soft-card utilities, blob float keyframes, retire glow-card CSS (keep class stubs so nothing crashes until Wave 2 lands).
2. New shared components: `Blob.jsx`, `Doodle.jsx`, `BlobBadge.jsx`, `SectionBand.jsx` (alternating background wrapper w/ optional wave divider).
3. `Nav.jsx` — keep floating pill; warm it (ink text, terracotta CTA slightly rounder).
4. `Footer.jsx` — soft card newsletter, warmer columns.
5. `Home.jsx` — full redesign: blob hero w/ doodle-underlined key word, "How it works" as 3 soft cards with BlobBadges + spot doodles (Otter's 1-2-3 card row is the direct reference), problem preview as pastel-chip cards, archetype teaser featuring a mascot image.
6. `AboutPage.jsx` — photo-led hero (photo on blob, doodles), credentials as BlobBadge cards, advice-gap section with pull-quote treatment, CTA band.

### Wave 2 — Full site rollout (parallel Sonnet agents, after Wave 1)
- **Agent A:** `GuidesPage.jsx`, `GuideCard.jsx`, `GuideSkeleton.jsx`, `UpvoteButton.jsx`, `CategoryNav.jsx`, `ProblemSection.jsx`, `BusinessFilter.jsx` — pastel category chips, soft cards, remove GlowCard usage.
- **Agent B:** `GuidePage.jsx`, `StepCard.jsx`, `PromptBlock.jsx`, `DataNote.jsx`, `PaywallGate.jsx`, `DownloadButton.jsx`, `PdfDownloadButton.jsx`, `ProBadge.jsx` — steps get BlobBadges + hand-drawn connector, prompt block stays mono but warmer chrome, paywall becomes a friendly soft card.
- **Agent C:** `ProPage.jsx`, `ProIndustryPage.jsx`, `SuccessPage.jsx` — soft industry cards with pastel chips, success page gets a celebratory doodle burst.
- **Agent D:** `ArchetypePage.jsx` + `ArchetypeIntro/Question/Result.jsx`, `ShareCard.jsx` — quiz becomes the most playful surface; keep mascot tilt; answers as soft pill buttons; progress bar with doodle marker.
- **Agent E:** `ContactPage.jsx` (+ small Rafee photo), `PrivacyPage.jsx`, `RefundPolicyPage.jsx`, terms — humanized heroes, soft FAQ cards.

### Wave 3 — Verification
- `npm run build` clean, ESLint clean.
- Browser pass on every route (desktop + mobile width): no leftover glass/glow/grid-pattern/mono-number artifacts, blobs don't cause horizontal scroll (`overflow-hidden` on hero wrappers), contrast ≥ 4.5:1 for text (pine ink on cream passes; never body text on peach/butter fills).

## 4. Guardrails
- No functional/behavioral changes: routing, Stripe, paywall logic, upvotes, quiz logic, PDF generation all untouched.
- `GuidePDF.jsx` palette update is OPTIONAL (nice-to-have: ink + Fraunces-esque warmth) — do not break PDF rendering.
- Accessibility: keep reduced-motion handling; decorative SVGs get `aria-hidden`; photo gets a real alt.
- Performance: blobs/doodles are inline SVG (no new deps, no icon libraries); don't touch the 9.5MB mascot PNGs in this phase (noted as follow-up).
- Every page hero must be visually distinct (different blob composition/color emphasis) — the copy-paste hero recipe is the #1 thing we're killing.

## 5. Success criteria
Someone landing on the site should feel "a real person made this for real people" — color, hand-drawn warmth, and Rafee's face — while the guides themselves stay calm and readable. Zero regressions in flows: browse guides, read free guide, hit paywall, quiz end-to-end, contact links.
