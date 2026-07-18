# Archetype Quiz Rebrand & Improvement Plan

**Status:** PLAN ONLY — no implementation until Rafee signs off on the open questions at the bottom.

**Goal:** Bring the `/archetype` quiz fully into the Warm Studio design language (minimal, hand-drawn, cream/terracotta/pastel), remove the otter mascot imagery entirely, and fix the UX/logic gaps found during the audit — while keeping what already works.

---

## 1. Audit findings

### What's off-brand (the case for the rebrand)

| Item | Problem |
|---|---|
| **Mascot PNGs** (`src/assets/mascots/*.png`, 4 files, ~6.9 MB total) | AI-generated 3D otter characters on baked-in share cards. Cool blue/pink glassy gradients — the exact "generic AI" language the Warm Studio refresh removed everywhere else. |
| **Stale branding baked into the images** | The share cards literally say **"AI Chemistry Quiz"** — the product has been "AI Archetype" for months. Anyone who saves/shares the image spreads outdated branding. Copy on the card is also frozen (can't be edited without regenerating images). |
| **ShareCard.jsx effects** | 3D perspective tilt on hover, cursor-following glow, iridescent sheen (`mix-blend-mode: overlay`) — glassmorphism-era motion, inconsistent with the calm soft-card language. Its `float` keyframe also ignores `prefers-reduced-motion` (site-wide rule respects it). |
| **Off-system color palette** | Archetypes use custom hexes (mustard `#8B6914`, purple `#5C4A7A`, forest `#2D6A4F`, navy `#1D3557`) with custom washes, separate from the Warm Studio tokens. The result page sets a full-bleed background from this foreign palette. A partial bridge (`BLOB_COLOR_BY_ARCHETYPE`) already maps each archetype to a site pastel — evidence the two systems are fighting. |
| **Home page teaser** | The quiz card on Home displays `architect.png` (the otter) — the last mascot appearance outside the quiz itself. |

### What works (keep it)

- The **four archetypes and their names** (Architect / Alchemist / Conductor / Oracle) — distinct, memorable, good copy (taglines, descriptions, aiEdge/watchOut are well-written and already owner-voiced).
- The **12 questions** were already rewritten for SMB owners (no corporate jargon) — content is good.
- The **intro page** is already Warm Studio (blobs, doodles, BlobBadges, soft cards) — needs almost nothing.
- The **question screen** is already Warm Studio (progress bar, soft-card options) — needs almost nothing.
- **Flow architecture** (intro → questions → result, `key={currentIndex}` reset trick) is clean.
- Recommended-guide slugs all resolve to real guides (verified against all 42 guides).

### Functional gaps found during audit

1. **Tie-break bias:** `scoreArchetype` breaks ties with a fixed priority list — Architect wins every tie, Alchemist can never win one. Users with balanced answers all get funneled to the same result.
2. **No shareable result URL:** the result lives only in component state. Refresh loses it; there's no `/archetype` link that lands on "I'm The Oracle."
3. **No result persistence:** returning visitors start from zero; the site can't say "you're an Oracle — here are your guides."
4. **No back button** during questions — a mis-tap can't be corrected without retaking all 12.
5. **No Agent Packs cross-sell** on the result page — the quiz recommends 3 guides but never mentions the $29 tier (the natural "what's next" for each archetype).
6. **"Save Image" saves the off-brand PNG** — the one asset we most want to retire is the one users are encouraged to share.

---

## 2. Design direction (the rebrand)

**Principle:** the archetype result should look like it belongs on the same site as the Agent Pack pages — soft cards, tinted blobs, hand-drawn stroke glyphs, cream canvas. Minimal, warm, no characters.

### 2.1 New archetype visual identity (replaces the otter)

Each archetype gets a **hand-drawn stroke glyph on a tinted Blob** — the exact composition already used as agent "logos" (AgentIcon on Blob), so the system stays coherent:

| Archetype | Glyph (wobbly stroke SVG, AgentIcon-style) | Pastel (existing tokens) |
|---|---|---|
| The Architect | drafting compass / angled ruler | butter |
| The Alchemist | flask with a bubble | peach |
| The Conductor | three arrows converging / baton swoosh | mint |
| The Oracle | open eye with radiating dashes | sky |

Implementation shape: extend `AgentIcon.jsx` with 4 new variants (or a small `ArchetypeGlyph` sibling using the same STROKE constants). No new design primitives.

### 2.2 Color system

- Delete the custom hex palette (`colors: { primary, wash, anchor, gradient }`) from `archetype.js`.
- Each archetype keys off its **existing site pastel** (butter/peach/mint/sky + their `-light` washes) with **ink** for text and **terracotta** for CTAs — same rules as every other page.
- Result page background: cream canvas with a pastel `SectionBand`-style wash, not a full-bleed foreign color.

### 2.3 Result page layout (rebranded)

1. **Reveal hero:** eyebrow "Your AI Archetype" with sparkle doodles (keep), archetype glyph on a large tinted Blob (new — replaces mascot), Fraunces italic name, tagline with squiggle underline.
2. **Description + "Your AI edge" / "Watch out for"** soft cards (keep structure, retint to system colors).
3. **Recommended guides** (keep, retint).
4. **NEW — "Agents for your archetype" band:** one sentence connecting the archetype to how they'd use AI agents + CTA to `/agents`. (e.g., Architect → "You'll want agents that ship work while you sleep.")
5. **Share row:** Copy LinkedIn Post (keep) + share-link button (new, see 3.2) + retake.
6. `ShareCard.jsx` is **deleted** — replaced by a static DOM "result card" with soft-card styling, no tilt/glow/sheen, honoring `prefers-reduced-motion`.

### 2.4 Share image (decision needed — see open questions)

- **Option A (recommended for v1):** drop "Save Image." Share = copy LinkedIn post + shareable URL. Zero new code, kills 6.9 MB of assets immediately.
- **Option B (v2 nice-to-have):** generate a brand-true PNG in the browser via `<canvas>` (draw blob path + glyph + Fraunces text with canvas APIs — same dependency-free technique used for the site favicon). ~a day of fiddly canvas work to get typography right.

### 2.5 Home page teaser

Replace the otter `architectImg` block with a composition of the four archetype glyphs on their pastels (2×2 mini-grid or overlapping blobs). Home loses its last 1.7 MB mascot import.

---

## 3. UX & logic improvements

### 3.1 Fix the tie-break (small, high value)
Use **question 12 as the tie-breaker** — it's the self-identity question ("In one line, what do you bring to the table?"). If two types tie on count, the one the user *chose as their identity* wins; fall back to last-answer type if still ambiguous. Removes the Architect bias with zero randomness (same answers → same result, good for retakes).

### 3.2 Shareable + persistent results
- Route: `/archetype/:result` (e.g. `/archetype/oracle`) renders the result page directly with a "Take the quiz yourself" CTA — this is what the LinkedIn copy should link to (today it links to the quiz root).
- Add the 4 result URLs to the sitemap; per-archetype `useSEO` titles ("The Oracle — AI Archetype for Small Business Owners").
- Persist last result in `localStorage` (`smbai_archetype`); intro page shows a quiet "Your last result: The Oracle →" chip for returning visitors.
- Update `linkedinCopy` in data to point at the per-archetype URL.

### 3.3 Question flow
- **Back button** (small ← above the progress bar) so a mis-tap doesn't force a full retake. Straightforward: keep `answers` array, pop on back.
- **Keep all 12 questions** (recommendation): the content is good and archetype accuracy needs signal; but see open question #2 — trimming to 9 (drop the 3 weakest) would tighten the "2-minute" claim.
- Progress bar + option cards already on-system: no changes beyond glyph accents.

### 3.4 Housekeeping
- Delete `src/assets/mascots/` (4 files, ~6.9 MB — meaningfully faster repo clones and Home page loads).
- `ArchetypeResult` full-bleed wash → standard page background.
- Confirm all animations respect `prefers-reduced-motion` (the float keyframe currently doesn't).

---

## 4. Implementation phases (once approved)

| Phase | Scope | Size |
|---|---|---|
| **1. Identity & data** | 4 archetype glyphs; strip custom colors from `archetype.js`; pastel mapping; tie-break fix; updated `linkedinCopy` URLs | S–M |
| **2. Result page rebrand** | New result layout (glyph hero, retinted cards, Agents cross-sell band, share row); delete `ShareCard.jsx` | M |
| **3. Routes & persistence** | `/archetype/:result` route + SEO + sitemap; localStorage persistence; intro "last result" chip; back button | M |
| **4. Cleanup & teasers** | Delete mascot PNGs; rebuild Home quiz teaser with glyphs; full browser verification (desktop + mobile, reduced-motion) | S |
| **5. (Optional, later)** | Canvas-rendered share image | M |

Phases 1–4 are one working session with the established subagent pipeline; each phase ends green (lint/build) and browser-verified before the next.

---

## 5. Open questions for Rafee

1. **Share image:** OK to drop "Save Image" in v1 (Option A) and rely on copy-post + shareable link? Canvas-generated branded image can come later.
2. **Question count:** keep all 12, or trim to 9 for speed? (Recommendation: keep 12 unless you've seen drop-off.)
3. **Archetype names:** keeping Architect / Alchemist / Conductor / Oracle as-is? (Recommendation: yes — the copy is strong; only the visuals are stale.)
4. **Glyph direction:** comfortable with the hand-drawn glyph-on-blob direction (matching agent logos), or do you want to see 2–3 visual alternatives mocked up first?
