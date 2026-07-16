# Agent Packs — Premium AI Agent Blueprints — PRD + Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task with subagents.

**Goal:** Ship a premium tier ("Agent Packs") that sells per-industry bundles of AI agent blueprints for $29 one-time, integrated into the existing site, marketable enough to rank when small-business owners search "AI agent for [my industry]".

**Architecture:** New `/agents` section mirroring the proven Pro pattern — data files in `src/data/agents/`, per-industry pack pages, per-agent blueprint pages gated by a paywall component, single Stripe Payment Link, localStorage unlock per pack. Adds site-wide per-route SEO (title/meta) and a build-time sitemap since discoverability is a product goal.

**Tech Stack:** Vite + React 19 SPA, react-router-dom 7, Tailwind 4 (via `@theme` tokens in `src/index.css`), `@react-pdf/renderer`, Stripe Payment Links (no backend), Vercel.

---

## 1. Product spec

### 1.1 Positioning & value ladder

| Tier | Price | What | Route |
|---|---|---|---|
| Free guides | $0 | Problem-first AI guides | `/guides` |
| Pro guides | $5/guide | Industry playbooks (prompts + steps) | `/pro` |
| **Agent Packs (NEW)** | **$29/pack** | Blueprints to *build working AI agents* — system prompts, tool wiring, costs, guardrails | `/agents` |
| Enterprise | contact | Consulting | `/contact` |

Framing: Pro guides teach you to *use* AI. Agent Packs teach you to *build an employee out of AI* — an agent that runs a specific job in the business every day. Each pack = 3 agent blueprints for one industry. One-time $29, unlocks the whole pack on this browser (same trust model as Pro; explicitly acceptable per 2026-04-15 design doc).

### 1.2 What a blueprint contains (the "worth it" bar)

Every agent blueprint must include ALL of:
1. **What it does + where it fits** — plain-English job description of the agent.
2. **Real costing** — itemized monthly running cost table (tool subscriptions, API usage) + build time + time saved + ROI math in dollars/hours.
3. **Tool stack options** — a no-code path (ChatGPT/Claude + Zapier/Make) and a budget path; name real tools.
4. **Build steps** — numbered steps with copy-paste prompts (reuses `StepCard`/`PromptBlock`).
5. **The system prompt** — a complete, copy-paste agent system prompt (the crown jewel).
6. **Guardrails** — what the agent must never do, human-review points, industry cautions (HIPAA for medical/pharmacy, liability for architecture code research).
7. **Test checklist** — how to know it works before trusting it.
8. **Maintenance** — the 15-min/month care routine.

### 1.3 Paywall cut (mirrors Pro decision: teaser sells the depth)

Visible free: hero, what-it-does, outcomes, stack, **full cost/ROI breakdown** (this is the hook — nobody else publishes honest agent costs), and build step 1. Gated: steps 2+, system prompt, guardrails, test checklist, maintenance, PDF download.

### 1.4 Pricing/Stripe

- New config `src/config/agents.js`: `AGENTS_STRIPE_URL` (starts `null` → paywall renders existing "coming soon" state), `AGENTS_PRICE_DISPLAY = '$29'`, subline `'one-time, unlocks all 3 blueprints in this pack on this browser'`.
- Rafee action item (cannot be done by code): create a $29 Payment Link in the Stripe dashboard, success URL `https://smbaiplaybook.xyz/success`, paste into config.
- Unlock granularity: **per pack** (industry slug), not per agent. localStorage keys: `smbai_unlocked_packs` (JSON array of industry slugs), `smbai_pending_pack` (string).
- `SuccessPage` handles both flows: consume pending pack first; else fall back to existing pending guide flow.

### 1.5 Marketability / SEO (why this pops up in research)

- Landing copy targets queries: "AI agent for small business", "build an AI agent for my {coffee shop|auto repair shop|...}", "AI agent cost for small business".
- Per-route `document.title` + meta description via a tiny `useSEO` hook (SPA-compatible; Google renders JS). Applied to ALL routes, not just agents.
- `public/robots.txt` + build-time `scripts/generate-sitemap.mjs` → `public/sitemap.xml` covering every static route, guide, pack, and agent URL (prebuild step in `package.json`).
- Each pack page carries an SEO-rich "Why {industry} owners are building agents" section with concrete numbers (honest, no fabricated testimonials — per existing no-content-lies rule).

### 1.6 Visual identity ("logos")

Warm Studio rules apply (Blob/Doodle/BlobBadge, Fraunces/DM Sans/IBM Plex Mono, terracotta accent, NO glass/grid/mono-pills). Each agent gets a hand-drawn-style stroke SVG icon via a new `AgentIcon` component (doodle aesthetic: wobbly 2px strokes, `currentColor`, rounded caps), variants: `chat, megaphone, clipboard, envelope, wrench, star, calendar, arrows, bell, document, heart, sun, camera, search, shield`. Icon sits on a small tinted `Blob` — that composition is the agent's "logo" on cards, pages, and the PDF cover eyebrow.

---

## 2. The agent catalog (24 blueprints)

Icons/difficulty/costs are authoritative; content agents flesh out the rest. Running costs must be honest and itemized (e.g., Zapier free tier limits, Claude Pro $20/mo, per-message API pennies).

### coffee-shop (#B45309)
1. `coffeeshop-review-reply-agent` — **Review Reply Agent** — icon `chat`, Beginner, build ~2h, run $0–20/mo — drafts on-brand replies to every Google/Yelp review; owner approves in 5 min/day.
2. `coffeeshop-social-content-agent` — **Social Content Agent** — icon `megaphone`, Beginner, ~3h, $0–30/mo — turns weekly specials + photos into a week of Instagram/Facebook posts and captions.
3. `coffeeshop-morning-prep-agent` — **Morning Prep & Inventory Agent** — icon `clipboard`, Intermediate, ~4h, $29–40/mo — daily prep list + reorder alerts from sales patterns and weather.

### auto-repair (#DC2626)
1. `autorepair-estimate-followup-agent` — **Estimate Follow-Up Agent** — icon `envelope`, Beginner, ~3h, $0–30/mo — chases unapproved estimates with tiered, non-pushy follow-ups; recovers stalled quotes.
2. `autorepair-service-advisor-agent` — **Service Advisor Agent** — icon `wrench`, Intermediate, ~4h, $20–40/mo — translates tech notes into plain-English customer updates and flags legit upsells.
3. `autorepair-reputation-agent` — **Review & Reputation Agent** — icon `star`, Beginner, ~2h, $0–20/mo — post-service review requests + reply drafts.

### medical-practice (#1D4ED8) — every blueprint carries explicit HIPAA guardrails (no PHI into consumer AI tools; use de-identified data or BAA-covered tools)
1. `medical-noshow-prevention-agent` — **No-Show Prevention Agent** — icon `calendar`, Intermediate, ~4h, $30–60/mo — reminder sequences + waitlist backfill drafts.
2. `medical-intake-summary-agent` — **Patient Intake Agent** — icon `clipboard`, Intermediate, ~4h, $20–50/mo — turns intake forms into structured pre-visit summaries.
3. `medical-referral-agent` — **Referral Coordination Agent** — icon `arrows`, Intermediate, ~3h, $20–40/mo — tracks outbound referrals, drafts follow-ups so patients don't fall through cracks.

### pharmacy (#16A34A) — same HIPAA posture as medical
1. `pharmacy-refill-reminder-agent` — **Refill Reminder Agent** — icon `bell`, Beginner, ~3h, $20–40/mo — refill-due outreach drafts + adherence nudges.
2. `pharmacy-prior-auth-agent` — **Prior-Auth Paperwork Agent** — icon `document`, Intermediate, ~4h, $20–50/mo — drafts prior-authorization packets from prescription details.
3. `pharmacy-question-triage-agent` — **Patient Question Triage Agent** — icon `chat`, Intermediate, ~3h, $20–40/mo — sorts inbox/voicemail questions, drafts pharmacist-reviewable answers.

### car-wash (#0EA5E9)
1. `carwash-membership-save-agent` — **Membership Save Agent** — icon `heart`, Intermediate, ~3h, $20–40/mo — detects lapsing members, drafts win-back offers.
2. `carwash-weather-promo-agent` — **Weather Promo Agent** — icon `sun`, Beginner, ~2h, $0–20/mo — turns the 7-day forecast into same-week promos.
3. `carwash-review-reply-agent` — **Review Reply Agent** — icon `star`, Beginner, ~2h, $0–20/mo — reply drafts for every review.

### photographer (#7C3AED)
1. `photographer-inquiry-agent` — **Inquiry-to-Booking Agent** — icon `envelope`, Beginner, ~3h, $0–30/mo — instant personalized replies to leads + follow-up sequence (speed-to-lead wins bookings).
2. `photographer-client-prep-agent` — **Client Prep & Delivery Agent** — icon `camera`, Beginner, ~3h, $0–20/mo — automated shoot-prep guides + gallery-delivery messages with print/album upsells.
3. `photographer-content-repurposing-agent` — **Content Repurposing Agent** — icon `megaphone`, Intermediate, ~3h, $20–40/mo — turns each shoot into blog post, captions, and SEO alt text.

### architecture-firm (#4A5568)
1. `architecture-proposal-agent` — **Proposal Draft Agent** — icon `document`, Intermediate, ~4h, $20–50/mo — assembles fee proposals from a project brief + past proposals.
2. `architecture-code-research-agent` — **Code & Zoning Research Agent** — icon `search`, Intermediate, ~4h, $20–50/mo — first-pass building-code/zoning digests; guardrails mandate licensed-professional verification.
3. `architecture-client-update-agent` — **Client Update Agent** — icon `arrows`, Beginner, ~2h, $20/mo — weekly project status notes from internal notes/meeting minutes.

### rental-car (#EA580C)
1. `rentalcar-booking-upsell-agent` — **Booking & Upsell Agent** — icon `calendar`, Beginner, ~3h, $0–30/mo — confirmations + tailored upgrade/add-on offers.
2. `rentalcar-fleet-health-agent` — **Fleet Health Agent** — icon `wrench`, Intermediate, ~4h, $20–40/mo — mileage/maintenance triggers → service scheduling drafts.
3. `rentalcar-damage-claim-agent` — **Damage Claim Agent** — icon `shield`, Intermediate, ~3h, $20–40/mo — structures incident photos/notes into complete claim documentation.

---

## 3. Data schema (authoritative — all content files MUST match exactly)

Each `src/data/agents/<industry>.js` exports a default array of 3 agent objects:

```js
const coffeeShopAgents = [
  {
    slug: 'coffeeshop-review-reply-agent',
    industry: 'coffee-shop',        // must match industries.js slug
    name: 'Review Reply Agent',
    icon: 'chat',                   // AgentIcon variant
    tagline: 'Every review answered within a day, in your voice.',
    description: '1–2 sentence card description.',
    difficulty: 'Beginner',         // 'Beginner' | 'Intermediate'
    buildTime: '~2 hours',
    runningCost: '$0–20/month',     // headline figure, matches costBreakdown total
    timeSaved: '~3 hours/week',
    stack: ['Claude or ChatGPT', 'Zapier (free tier)', 'Google Business Profile'],
    whatItDoes: 'Long intro paragraph: the job this agent owns, a day-in-the-life.',
    outcomes: ['bullet', 'bullet', 'bullet', 'bullet'],   // 4-5 concrete outcomes
    costBreakdown: [
      { item: 'Claude Pro subscription', cost: '$20/mo', note: 'or free ChatGPT tier to start' },
      { item: 'Zapier', cost: '$0', note: 'free tier covers ~5 reviews/day' },
    ],
    roi: 'Paragraph of honest ROI math: hours saved × owner hourly value vs monthly cost.',
    steps: [
      { number: 1, title: '...', description: '...', dataNote: '...', prompt: '...' },
      // 4–6 steps; dataNote and prompt optional per step; step 1 is the free teaser
    ],
    systemPrompt: 'COMPLETE copy-paste system prompt, 300-600 words, with [PLACEHOLDER] tokens.',
    guardrails: ['Never …', 'Always route X to a human', 'Industry caution …'],  // 4-6 items
    testChecklist: ['Feed it a 1-star review and confirm …', ...],               // 4-6 items
    maintenance: 'Paragraph: the 15-min monthly care routine.',
  },
  // ×3
]
export default coffeeShopAgents
```

Aggregator `src/data/agents/index.js`:

```js
import coffeeShopAgents from './coffee-shop.js'
// ... all 8
export const agents = [/* spread all 8 arrays */]
export function agentsForIndustry(slug) { return agents.filter(a => a.industry === slug) }
```

Pack copy: each industry file ALSO exports a named `pack` object (SEO-rich landing copy). Keeping pack copy inside the industry file makes content tasks parallel-safe (no shared-file edits). `src/data/agents/index.js` aggregates both: `export const packs = [coffeeShopPack, ...]` alongside `agents`.

```js
export const pack = {
  industry: 'coffee-shop',            // join key to industries.js (name/color come from there)
  headline: 'Three AI agents that run your coffee shop’s busywork',
  subhead: '1-2 sentence pack pitch.',
  whyAgents: [                        // 3 bullets: honest, numeric where possible
    'Answering reviews, posting to social, and planning prep eats 6–10 owner-hours a week.',
  ],
  seoTitle: 'AI Agents for Coffee Shops — Blueprints, Costs & Prompts',
  seoDescription: '150-160 char meta description targeting "AI agent for coffee shop".',
}
```

Content tasks (3a/3b/3c) create ONLY their own industry files (agents array default export + named `pack` export). The main session wires the new imports into `src/data/agents/index.js` after all three complete — content agents must NOT touch `index.js`.

**Copy tone rules (from existing design docs, binding):** specific over padded; no fake testimonials/urgency; honest costs including the "if it doesn't work" angle; write for a busy owner, not a developer; prompts use `[SQUARE_BRACKET]` placeholders; medical/pharmacy content must never instruct putting PHI into consumer AI tools.

---

## 4. Routes & pages

| Route | Page | Purpose |
|---|---|---|
| `/agents` | `src/pages/AgentsPage.jsx` | Landing: what agents are, value pitch, 8 pack cards, how-it-works band, FAQ band (SEO) |
| `/agents/:industry` | `src/pages/AgentPackPage.jsx` | Pack page: hero (industry color wash), whyAgents, 3 agent cards, price CTA |
| `/agents/:industry/:slug` | `src/pages/AgentPage.jsx` | Blueprint page with `AgentPaywallGate` |

Page composition reuses: `SectionBand`, `Blob`, `Doodle`, `BlobBadge`, `StepCard`, `PromptBlock`, `DataNote`, `.soft-card`, grain hero, `animate-fade-up`. AgentPage layout order: breadcrumb → header (AgentIcon logo, name, tagline, meta chips: difficulty/buildTime/runningCost/timeSaved) → whatItDoes → outcomes card → stack chips → **cost & ROI card (free)** → steps in `AgentPaywallGate` → gated: systemPrompt (PromptBlock), guardrails, testChecklist, maintenance, AgentPdfDownloadButton → related agents in pack.

Nav: add "Agents" link (with a small "new" `BlobBadge`-style accent) between Pro and Archetype. Footer sitemap column + Home page gets an Agents promo `SectionBand`. ProPage gets a cross-sell band ("Ready to go beyond prompts?").

---

## 5. Tasks (subagent-driven; each ends with `npm run build && npm run lint` green + commit)

### Task 1 — Foundation: config, hook, icons, exemplar data (Sonnet)
Create: `src/config/agents.js`, `src/hooks/useAgentAccess.js` (mirror `useProAccess.js` with pack keys), `src/components/AgentIcon.jsx` (15 doodle variants), `src/data/agents/coffee-shop.js` (3 COMPLETE exemplar blueprints per §2/§3), `src/data/agents/index.js` (only coffee-shop wired; others commented TODO), `src/data/agents/packs.js` (coffee-shop entry only).
Verify: build + lint. Commit `feat(agents): foundation — config, access hook, icons, coffee-shop exemplar`.

### Task 2 — Pages & integration (Sonnet, after Task 1)
Create: `AgentsPage.jsx`, `AgentPackPage.jsx`, `AgentPage.jsx`, `src/components/AgentPaywallGate.jsx` (pattern of `PaywallGate.jsx` but pack-level: `setPendingPack(industry)` → `AGENTS_STRIPE_URL`; coming-soon state while URL null), `src/components/AgentCard.jsx`.
Modify: `src/App.jsx` (3 routes), `src/components/Nav.jsx`, `src/components/Footer.jsx`, `src/pages/Home.jsx` (promo band), `src/pages/ProPage.jsx` (cross-sell band), `src/pages/SuccessPage.jsx` (handle pending pack before pending guide).
Verify: build + lint + dev-server walkthrough of /agents → pack → blueprint → paywall coming-soon. Commit.

### Task 3 — Content: remaining 7 industries (3 parallel Sonnet agents)
- 3a: `auto-repair.js`, `car-wash.js`, `rental-car.js` (+ packs.js entries)
- 3b: `medical-practice.js`, `pharmacy.js` (+ packs entries; HIPAA guardrails mandatory)
- 3c: `photographer.js`, `architecture-firm.js` (+ packs entries; architecture research-verification guardrails)
Each: match exemplar schema exactly, wire into `index.js`. Verify build + lint. One commit per agent.

### Task 4 — PDF perk (Sonnet)
Create `src/components/AgentPDF.jsx` (pattern of `GuidePDF.jsx`: cover + body incl. cost table, system prompt in Courier, guardrails, checklist) and `src/components/AgentPdfDownloadButton.jsx` (lazy-load pattern of `PdfDownloadButton.jsx`). Render post-unlock on AgentPage. Verify + commit.

### Task 5 — SEO & discoverability (Sonnet)
Create `src/hooks/useSEO.js` (sets `document.title` + description/canonical/og metas), apply to ALL pages (agents + existing routes with sensible titles). Create `public/robots.txt`, `scripts/generate-sitemap.mjs` (imports data files, writes `public/sitemap.xml` with all routes; wire as `prebuild` script). Add FAQ copy block on AgentsPage answering "What is an AI agent?", "What does an AI agent cost?", "Do I need to code?". Verify + commit.

### Task 6 — Verification & polish (main session)
Full build + lint, browser walkthrough (desktop + mobile viewport), unlock-flow simulation via localStorage, design-consistency pass against Warm Studio memory, fix findings, final commit.

**Launch checklist for Rafee (post-merge):** create $29 Stripe Payment Link → paste into `src/config/agents.js` → set success URL to `/success` → submit sitemap in Google Search Console.
