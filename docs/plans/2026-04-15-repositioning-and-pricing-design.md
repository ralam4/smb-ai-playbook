# Three-Tier Pricing + Professional Repositioning — Design

**Date:** 2026-04-15
**Status:** Phase 1 shipped (commit `bb2825a` on `feat/phase-1-repositioning`). Phase 2 pending.

## Status log

- **2026-04-15** — Design approved.
- **2026-04-15** — Phase 1 implemented in worktree `.worktrees/phase-1-repositioning` on branch `feat/phase-1-repositioning`. All new pages + nav/footer/home changes live. Polish pass applied (GridPattern heroes on every new page, bumped card typography to `text-base` body / `text-2xl` headings / `p-8 sm:p-10` density, gradient section dividers, `glass-shadow-lg` anchor panels on About credentials and Contact CTA). Committed as `bb2825a`. **Not yet pushed or PR'd** — awaiting user review.
- **Phase 2 decision (2026-04-15):** Locked in **Option B** for Pro content — existing Intermediate guides stay free. New Pro guides will be authored from scratch so the paid tier is a legitimate upgrade, not a bait-and-switch repaywall of previously-free content. `difficulty` (Beginner/Intermediate/Advanced) and `tier` (free/pro) remain independent axes.

## Scope note

This effort has two intertwined concerns:

1. **Positioning** — the site must stop reading like a personal passion project ("here's my LinkedIn") and start reading like a professional services business that happens to publish free resources. This is the foundation.
2. **Pricing plumbing** — the per-guide $5 Pro tier + Enterprise contact tier, sitting on top of the repositioned foundation.

**Sequencing: Phase 1 ships the positioning pass. Phase 2 ships the pricing plumbing.** Doing it the other way round would launch a pricing page into a site that still reads like a link-in-bio, undermining the $5 ask and the Enterprise tier entirely. Phase 1 is the prerequisite, not a nice-to-have.

Both phases are designed below. Phase 2 assumes Phase 1 has shipped.

---

# Phase 1 — Professional Repositioning

## Why

The site currently reads like a personal project with a LinkedIn link. Once we introduce paid tiers and an Enterprise consulting offer, that voice undercuts the ask. A business-minded visitor's first question is "who am I paying, and why should I trust them." If the answers aren't visible within 10 seconds of landing, they're gone. Phase 1 closes that gap without changing the visual identity or the free content.

## Guiding constraints

- **Keep the brand.** Burnt orange `#C4622D`, DM Serif Display, DM Sans, IBM Plex Mono, editorial feel. Do not swap to corporate navy. The brand equity built in the last 5 commits stays intact.
- **Absorb structure, not style.** Pull the *information architecture* of professional consulting sites (Trust & Authority / Enterprise Gateway pattern) without adopting their visual language.
- **No content lies.** If we don't have testimonials or case studies yet, we don't fake them. We leave structured room for them in the layout and ship with the sections that *are* honest today.

## Trust & authority — the UI/UX benchmark

From the Trust & Authority + Conversion pattern: *Hero (mission/credibility) → Proof (logos/certs/stats) → Solution overview → Clear CTA path → Contact.* We map that to the existing site as follows, replacing equivalent informal sections rather than adding on top.

## Changes in Phase 1

### A. New: `/contact` route — `src/pages/ContactPage.jsx`

Replaces "here's my LinkedIn" as the primary contact surface.

- **Hero:** *"Work with Rafee"*, one-line positioning: "End-to-end AI consulting for small and mid-sized businesses." DM Serif headline, burnt orange accent underline.
- **Engagement model:** three editorial cards (glass-elevated, matching existing treatment) describing how engagements work — *Scoping → Implementation → Ongoing Support*. Each card has a short paragraph, not a checkbox list.
- **Contact surface:** primary CTA is a `mailto:` button with a prefilled subject (e.g. *"Let's talk about working together"*) and a short prefilled body. Secondary CTA is "Connect on LinkedIn" — demoted from the old hero-level position but still reachable. **No Calendly in Phase 1** (none exists yet); the page is designed to stand on its own with email-first contact and can add a scheduling affordance in a follow-up.
- **Copy around the CTA sets the expectation:** one sentence like *"Email me with a bit about your business and what you're trying to solve — I'll reply within 2 business days to find a time to talk."* This replaces the scheduling affordance without making the page feel incomplete.
- **FAQ block** (3–4 items): *Who do you work with? What does an engagement cost? How long do engagements run? Do you sign NDAs?* Genuinely answerable today; leave testimonials for later.
- **No form, no form backend.** One mailto button, one LinkedIn link. That's the whole contact surface.

### B. New: `/about` route — `src/pages/AboutPage.jsx`

The credibility surface. Answers "who am I paying."

- **Hero:** headshot (if available) + short bio. Not a resume — a positioning statement: *why* Rafee does this, *who* it's for, *what* the playbook represents. Voice is confident but not braggy.
- **Credentials block:** background, relevant experience, notable work. Honest and specific. If the list is short, lean into specificity rather than padding.
- **"Why the Playbook exists":** short editorial paragraph connecting the free resource to the paid consulting — the playbook is the proof of philosophy, consulting is the delivery of that philosophy at scale.
- **Structured empty slots** for future testimonials and case studies — commented `{/* TODO: testimonials */}` blocks with the markup already in place, so Phase 1b is a content drop, not a layout pass.
- **CTA at bottom:** "Work with me" → `/contact`.

### C. Modified: `Home.jsx` — voice and structure

- **Hero copy:** tightened from personal-blog voice to clear value proposition. Keep the DM Serif treatment, update the words. Subhead mentions "free guides" *and* "end-to-end consulting" so the two tiers are visible from the first screen.
- **New below-hero section: "How this works."** Three columns (or stacked on mobile) — Free Playbook / Pro Guides / Consulting — each a single sentence + CTA. This is the information architecture shift: every visitor sees all three paths in the first scroll. It also pre-stages Phase 2 (the Pro column gets a real price later; for now it says "coming soon" or is a forward reference to `/pricing`).
- **Remove "free, never any charge" language** anywhere it appears in hero, footer, or guide pages. Replace with neutral framing: "Free beginner guides for everyone."
- **Trust strip** (optional, placeholder): thin horizontal band for "As featured in / Trusted by" with structured empty slots. Ships hidden or with a single honest item (e.g. "Built by [Rafee's current/past affiliation]") if there's something real to put there. No fake logos.

### D. Modified: `Nav.jsx`

New nav order, left to right: **Guides · Archetype · About · Contact**. Primary CTA button (burnt orange, right-aligned): **"Work with me"** → `/contact`. Current LinkedIn link in the nav (if any) is removed — it lives in the footer and on the Contact page now.

Mobile: same order, burger menu, CTA stays visible in the collapsed bar.

### E. Modified: `Footer.jsx`

Upgrade from personal-site footer to business-grade footer:

- **Column 1 — Playbook:** Guides, Archetype Quiz, (Pricing — added in Phase 2)
- **Column 2 — Company:** About, Contact, (Blog — future)
- **Column 3 — Legal:** Terms, Privacy, Refund Policy — stub pages, required the moment Phase 2 takes money. Create them now as skeletons with placeholder copy so Phase 2 doesn't block on legal.
- **Column 4 — Connect:** LinkedIn, email, newsletter signup (already exists)
- Copyright line: *"© 2026 SMB AI Playbook. All rights reserved."*

### F. New: legal stub pages

- `src/pages/TermsPage.jsx` — `/terms`
- `src/pages/PrivacyPage.jsx` — `/privacy`
- `src/pages/RefundPolicyPage.jsx` — `/refunds`

Each is a single long-form editorial page with placeholder legal copy marked `TODO: replace with lawyer-reviewed copy before enabling payments`. Matches site typography; no special treatment. These exist so Phase 2 can reference them from the Stripe checkout footer without scrambling.

### G. UX compliance pass (applies to all new and modified surfaces)

From the UI/UX skill's checklist:

- **SVG icons only** (Lucide/Heroicons) — no emojis as structural icons. Audit existing components for stragglers.
- **Hover transitions 150–300ms** with ease-out; applies to every new button, card, and link.
- **Focus rings visible** on every interactive element for keyboard nav.
- **Contrast ≥4.5:1** for all body text on cream/white backgrounds; audit the existing burnt-orange-on-cream combinations specifically — the orange is decorative, not body copy.
- **Reduced motion respected** via `prefers-reduced-motion` media query on any new animations.
- **Responsive breakpoints** verified at 375 / 768 / 1024 / 1440.
- **`cursor: pointer`** on all clickable elements.
- **One primary CTA per screen.** Every new page is audited for CTA hierarchy — secondary actions must be visually subordinate.

### H. File-by-file change list — Phase 1

**New files:**
- `src/pages/ContactPage.jsx`
- `src/pages/AboutPage.jsx`
- `src/pages/TermsPage.jsx`
- `src/pages/PrivacyPage.jsx`
- `src/pages/RefundPolicyPage.jsx`

**Modified files:**
- `src/App.jsx` — register `/contact`, `/about`, `/terms`, `/privacy`, `/refunds`
- `src/components/Nav.jsx` — new order, primary CTA button
- `src/components/Footer.jsx` — 4-column business footer with legal column
- `src/pages/Home.jsx` — hero rewrite, "How this works" section, remove "always free" language, optional trust strip

**Unchanged:** guide content, GuideCard, GuidePage, GuidesPage, filter system, Archetype Quiz, design tokens, fonts, colors.

### I. Verification — Phase 1

- Read through every new and modified page on mobile (375px) and desktop (1440px).
- Tab through each page with keyboard only — focus order sane, all interactive elements reachable.
- Run the site through a contrast checker on the burnt-orange-on-cream pairings specifically.
- Confirm `prefers-reduced-motion` disables any new animations.
- Confirm the word "free" no longer appears as an absolute promise ("always free", "never a charge") anywhere.
- Confirm a business visitor can reach a "work with me" CTA from any page in ≤1 click.

---

# Phase 2 — Pricing Plumbing

Everything below assumes Phase 1 has shipped. The pricing page now sits on top of a professional foundation: Nav has "Pricing" added between Archetype and About, Footer's Playbook column gets Pricing, `/success` inherits the new typography and layout, and the `/pricing` page is built into the business-grade shell rather than clashing with the old voice.

## Goal

Evolve the SMB AI Playbook from a fully free resource into a three-tier product:

- **Free** — existing guides, unchanged, top of funnel.
- **Pro** — per-guide paid unlock at **$5 one-time each** via Stripe Payment Links. Partial preview with a paywall for the rest.
- **Enterprise** — consulting inquiry, no self-serve. "Contact me" CTA.

No backend, no auth, no database. Client-side gating via `localStorage`. Stripe Payment Links only.

## Decisions locked in brainstorming

1. **Pricing model:** per-guide $5, one-time. No subscription, no bundle (yet).
2. **Initial Pro content:** none. Ship the plumbing only. All existing guides stay `tier: 'free'` **regardless of difficulty** — Intermediate guides remain free (Option B, decided 2026-04-15). Pro guides will be authored fresh in a follow-up so the $5 ask is backed by content people haven't already seen for free.
3. **Paywall cut point:** intro + outcomes + **first step** render fully; remaining steps are gated behind a blurred teaser and CTA. Author controls the teaser by ordering steps.
4. **Unlock flow:** one Stripe Payment Link per Pro guide, each Link's success URL configured in Stripe to `https://smbaiplaybook.xyz/success?guide=<slug>`. `/success` reads the slug and appends it to `localStorage.smbai_unlocked_guides`.
5. **Pricing page framing:** not a 3-column SaaS comparison. A "How it works" page explaining Free / Pro (per-guide $5) / Enterprise (contact).

## Data model

### guides.js schema additions

Each guide gains two optional fields:

```js
{
  // ...existing fields
  tier: 'free' | 'pro',        // default 'free'
  stripeUrl: string | null,    // Pro guides only; Payment Link URL
}
```

All current guides get `tier: 'free'`, `stripeUrl: null`. No Pro guides ship in this PR.

### localStorage contract

- Key: `smbai_unlocked_guides`
- Value: JSON-stringified array of guide slugs: `["foo", "bar"]`
- Read/write centralized in a tiny hook: `src/hooks/useProAccess.js`
  - `useProAccess()` → `{ isUnlocked(slug), unlock(slug) }`
  - Graceful fallback if localStorage is unavailable or JSON is malformed (treat as empty array).

## Components

### New: `<PaywallGate>`

`src/components/PaywallGate.jsx`

Wraps the body of a guide on `GuidePage`. Props: `guide`, `children`.

Behavior:
- If `guide.tier !== 'pro'` → render `children` as-is. No-op.
- If `guide.tier === 'pro'` and `isUnlocked(guide.slug)` → render `children` as-is.
- Otherwise → render preview mode:
  - `guide.intro`, `guide.outcomes`, and `guide.steps[0]` render normally.
  - `guide.steps[1]` (if present) renders blurred with a gradient fade.
  - Absolute-positioned overlay card with:
    - Headline: *"You're reading a Pro guide"*
    - Sub: *"Unlock the full playbook — $5, one-time."*
    - Primary CTA: button linking to `guide.stripeUrl` (new tab, `rel="noopener"`)
    - Secondary link: *"How Pro works"* → `/pricing`
  - Remaining steps and footer CTAs not rendered.

Styling: burnt orange `#C4622D` primary, DM Serif heading, DM Sans body, matches existing glass/elevation treatment from recent commits.

### New: `<ProBadge>`

`src/components/ProBadge.jsx`

Small pill badge used on `GuideCard` when `guide.tier === 'pro'`. Burnt orange background, cream text, lock icon, IBM Plex Mono label "PRO · $5".

### Modified: `GuideCard.jsx`

- If `guide.tier === 'pro'` → render `<ProBadge>` in the existing badge slot (top-right of the card) and add a subtle accent: inner ring or slightly warmer background tint. No layout changes.
- Card remains fully clickable and routes to `/guide/:slug` as today. The partial-preview experience lives on the guide page itself, not in the card.

### Modified: `GuidePage.jsx`

- Wrap the body (the `guide.steps.map(...)` block and everything after) in `<PaywallGate guide={guide}>`.
- Intro, outcomes, and tools metadata render above the gate (they're already free).

### Modified: `Nav.jsx`

- Add a `Pricing` link between existing nav items. Active-state handling mirrors current links.

### Modified: `Home.jsx`

- Remove/update any "free, never any charge" copy.
- Add a short section below the hero: *"Free guides for everyone. Pro guides for serious operators."* with a ghost button → `/pricing`. Single paragraph + CTA, no new component file — inline JSX in `Home.jsx` using existing design tokens.

## New routes

### `/pricing` — `src/pages/PricingPage.jsx`

Not a classic 3-column SaaS table. Editorial layout matching site voice:

1. **Hero:** *"How the Playbook works"*, one-line subhead.
2. **Three sections** stacked (or side-by-side on desktop), each a glass-elevated panel:
   - **Free** — "Every beginner guide. Always." Bullet list of what Free covers. CTA: "Browse free guides" → `/guides`.
   - **Pro** — "$5 per guide. One-time." Explains the per-guide model: pay once, unlock forever on this browser. Bullets: intermediate/advanced frameworks, industry-specific prompt sequences, downloadable templates. CTA: "Browse guides" → `/guides` (Pro guides will show their own unlock button in context).
   - **Enterprise** — "Let's talk." Explains the consulting engagement: scoping, implementation, ongoing support. CTA: "Contact Rafee" → `mailto:` or Calendly placeholder.
3. **FAQ** (3–4 items): *What does $5 unlock? Is it lifetime? How do I access on another device? Refunds?*

Route registered in `App.jsx`: `<Route path="/pricing" element={<PricingPage />} />`.

### `/success` — `src/pages/SuccessPage.jsx`

1. On mount: read `?guide=<slug>` from the URL. If present and valid, call `unlock(slug)` from `useProAccess`.
2. Confirmation UI: *"You're in. '<Guide title>' is now unlocked on this browser."* with a primary CTA linking directly back to `/guide/<slug>`.
3. If no slug param: generic *"Thanks — something went sideways, please email me"* fallback.
4. Small note: *"Access is tied to this browser. Email me if you need it on another device."*

Route registered in `App.jsx`: `<Route path="/success" element={<SuccessPage />} />`.

## File-by-file change list

### New files
- `src/hooks/useProAccess.js` — localStorage-backed unlock state.
- `src/components/PaywallGate.jsx` — wraps guide body, renders preview + CTA.
- `src/components/ProBadge.jsx` — "PRO · $5" badge.
- `src/pages/PricingPage.jsx` — /pricing route.
- `src/pages/SuccessPage.jsx` — /success route.

### Modified files
- `src/App.jsx` — add `/pricing` and `/success` routes.
- `src/data/guides.js` — add `tier: 'free'` and `stripeUrl: null` to every existing guide. No content change.
- `src/components/Nav.jsx` — insert "Pricing" link between Archetype and About (built on top of Phase 1's nav).
- `src/components/Footer.jsx` — add "Pricing" to the Playbook column (built on top of Phase 1's footer).
- `src/components/GuideCard.jsx` — Pro badge + tint when `tier === 'pro'`.
- `src/pages/GuidePage.jsx` — wrap step body in `<PaywallGate>`.
- `src/pages/Home.jsx` — remove "always free" language, add Pro teaser section.

### Unchanged
- Filter system, Archetype Quiz, Footer, existing guide routes, design tokens, typography.

## Edge cases and honest trade-offs

- **localStorage gating is bypassable.** A technical user can set the key in devtools. Acceptable at $5 and v1; flag for hardening when/if real auth lands.
- **Access is per-browser.** Stated plainly on `/success` and in the pricing FAQ. Email fallback for device-switch.
- **Stripe Payment Link success URL is configured in the Stripe dashboard, not our code.** Each Pro guide's Payment Link needs its success URL set to `https://smbaiplaybook.xyz/success?guide=<slug>` at creation time. Document this in a `docs/runbooks/publishing-a-pro-guide.md` in a follow-up (not this PR).
- **No Pro guides ship in this PR.** The paywall path is unreachable through normal navigation until a guide is flipped to `tier: 'pro'`. That's intentional — we'll test the mechanism by temporarily flipping one guide locally before merge.
- **SSR / hydration:** project is Vite SPA, not SSR, so reading `localStorage` on first render is safe. No hydration mismatch risk.
- **Analytics:** out of scope for this PR. Vercel Analytics is already wired; tracking unlock events can layer on later.

## Out of scope (explicitly)

- Subscriptions, bundles, coupon codes.
- Real auth, email gating, cross-device sync.
- Backend, Stripe webhooks, Checkout Sessions.
- Changes to filter system, Archetype Quiz, routing for existing guides, or visual identity.
- Authoring actual Pro guide content.

## Verification plan (before merge)

1. Typecheck + build clean.
2. Manually flip one existing guide to `tier: 'pro'` with a dummy `stripeUrl: '#'` and verify:
   - GuideCard shows badge and tint.
   - GuidePage renders intro + outcomes + step 1 fully, blurs step 2, hides the rest, shows CTA overlay.
   - Clicking the CTA opens the dummy URL.
   - Visiting `/success?guide=<slug>` unlocks it and the guide page now renders in full.
   - Clearing localStorage re-locks the guide.
3. `/pricing` renders, nav link highlights correctly, all CTAs resolve.
4. Revert the local flip before committing.
