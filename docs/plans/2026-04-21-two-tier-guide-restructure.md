# Two-Tier Guide Restructure — Design

**Date:** 2026-04-21
**Status:** Design approved, ready for implementation
**Depends on:** Phase 1 repositioning (shipped), Phase 2 pricing plumbing (in progress)

---

## Overview

Restructure the entire guide library from industry-specific guides on a single page into a two-tier system:

- **Free Tier** — 10 problem-first, industry-agnostic guides at `/guides`. Any business owner can use them.
- **Pro Tier** — 32 industry-specific deep guides across 8 industries at `/pro`. $5 per guide, one-time unlock via Stripe Payment Links.

This replaces the current single-page library where all guides are industry-tagged and free.

## Guiding principles

1. **Free guides sell the philosophy.** They prove the Playbook works. Generic enough for anyone, specific enough to be useful.
2. **Pro guides sell the depth.** A business owner browsing `/pro/architecture-firm` should think "this was built for me." Industry-specific language, tools, metrics, and workflows.
3. **No bait-and-switch.** Existing guides that become Pro are upgraded/expanded, not just paywalled. Free generic versions are adapted rewrites, not the same file with placeholders swapped in.
4. **Separation is clear.** Free and Pro live on different pages with different browsing models (problem-first vs industry-first). Cross-links connect them.

---

## Free Tier — Problem-First Library (`/guides`)

### Catalog (10 guides)

Organized under existing problem categories. Adapted from strongest existing beginner guides with industry context stripped.

#### Get Customers (3 guides)

1. **"Fill Your Empty Appointment Slots"**
   - Source: Barbershop — Fill Empty Chairs
   - Analyze booking data, find dead zones, draft re-engagement messages

2. **"Get More Google Reviews Without Being Annoying"**
   - Source: existing (already generic, stays as-is)
   - Audit, request system, response templates, monthly routine

3. **"Write Quotes Customers Actually Understand"**
   - Source: Auto Repair — Write Estimates Customers Trust
   - Plain-English estimate templates, follow-up system, trust-building

#### Fix Profits (3 guides)

4. **"Stop Throwing Away Inventory and Margin"**
   - Source: Bakery — Stop Throwing Away Margin
   - Sales data analysis, waste identification, prep planning

5. **"Find Your Dead Zones and Revenue Leaks"**
   - Source: Car Wash — Find Out Why You're Half Empty
   - Transaction data audit, peak/off-peak analysis, promo planning

6. **"Fix Your Pricing Without Losing Customers"**
   - Source: Coffee Shop Menu Pricing + Photographer Pricing (blended)
   - Cost analysis, margin audit, price change communication

#### Fix Operations (2 guides)

7. **"Stop Scope Creep Before It Starts"**
   - Source: Graphic Designer — Stop Scope Creep
   - Project audit, proposal templates, boundary responses, onboarding docs

8. **"Cut No-Shows and Fill Cancelled Slots"**
   - Source: Doctor — No-Show Flow (generalized)
   - Pattern analysis, reminder flow design, cancellation recovery

#### Scale Up (2 guides)

9. **"Build a Membership or Recurring Revenue Program"**
   - Source: Car Wash — Membership Program (generalized)
   - Revenue audit, tier design, financial modeling, launch plan

10. **"Figure Out Which Projects Are Actually Making You Money"**
    - Source: Architecture — Project Profitability (generalized)
    - Project profitability audit, scope-proof proposals

---

## Pro Tier — Industry Libraries (`/pro`)

### Structure

- `/pro` — Landing page showing all 8 industry cards
- `/pro/:industry-slug` — Industry library page with hero, "who this is for" description, and guide cards
- `/guide/:slug` — Individual guide page (Pro guides get PaywallGate after intro + outcomes + step 1)

### Industry Catalog (32 guides across 8 industries)

#### 1. Architecture Firm (`/pro/architecture-firm`) — 4 guides

| Guide | Source |
|---|---|
| Stop Losing Hours on Code Research and Plan Check Responses | Upgrade existing |
| Find Out Which Projects Are Actually Making You Money | Upgrade existing |
| Win Government Contracts — RFP, RFI, and Bid Strategy with AI | New |
| Generate Client Proposals That Protect Your Scope and Close Faster | New |

#### 2. Medical Practice (`/pro/medical-practice`) — 4 guides

| Guide | Source |
|---|---|
| Cut No-Shows and Recover Lost Appointments | Upgrade existing |
| Streamline Referrals So Patients Don't Fall Through the Cracks | Upgrade existing |
| Build a Patient Communication System That Runs Itself | New |
| Speed Up Insurance Pre-Auth and Reduce Billing Denials | New |

#### 3. Auto Repair Shop (`/pro/auto-repair`) — 4 guides

| Guide | Source |
|---|---|
| Maximize Every Bay and Every Hour in Your Shop | Upgrade existing |
| Write Estimates Customers Actually Understand and Trust | Upgrade existing |
| Build a Repeat Customer System That Fills Your Schedule | New |
| Streamline Parts Ordering and Inventory Tracking | New |

#### 4. Car Wash (`/pro/car-wash`) — 4 guides

| Guide | Source |
|---|---|
| Build a Membership Program That Prints Recurring Revenue | Upgrade existing |
| Find Out Why Your Wash Is Half Empty | Upgrade existing |
| Build a Weather-Smart Demand and Staffing Plan | New |
| Design an Upsell System That Increases Average Ticket | New |

#### 5. Pharmacy (`/pro/pharmacy`) — 4 guides

| Guide | Source |
|---|---|
| Build Taper Schedules in Minutes, Not Manual Math | Upgrade existing |
| Stay Ahead of Compliance — Regulatory Tracking with AI | New |
| Create Patient Counseling Docs That Actually Get Read | New |
| Optimize Inventory and Controlled Substance Workflows | New |

#### 6. Photographer (`/pro/photographer`) — 4 guides

| Guide | Source |
|---|---|
| Price Your Work Without Losing Clients | Upgrade existing |
| Build a Portfolio Site and Online Presence That Books Clients | New |
| Create a Marketing System That Fills Your Calendar Seasonally | New |
| Write a Business Plan That Actually Helps You Make Decisions | New |

#### 7. Rental Car Business (`/pro/rental-car`) — 4 guides (all new)

| Guide | Source |
|---|---|
| Optimize Fleet Pricing Based on Demand, Season, and Competition | New |
| Build an Operations Playbook — Maintenance, Turnover, and Damage Tracking | New |
| Marketing and Channel Strategy — OTAs vs Direct Bookings | New |
| Design a Customer Loyalty Program That Drives Repeat Rentals | New |

#### 8. Coffee Shop (`/pro/coffee-shop`) — 4 guides

| Guide | Source |
|---|---|
| Fix Your Menu Pricing | Upgrade existing |
| Cut Waste and Nail Your Daily Prep with AI | New |
| Local Marketing — Drive Foot Traffic Without a Big Budget | New |
| Build a Staff Schedule That Matches Your Busy Hours | New |

---

## Data Migration

### What happens to existing guides

| Current Guide | Free Tier Action | Pro Tier Action |
|---|---|---|
| Barber — Fill Empty Chairs | → "Fill Your Empty Appointment Slots" | Removed |
| Bakery — Stop Throwing Away Margin | → "Stop Throwing Away Inventory" | Removed |
| Google Reviews | Stays as-is (already generic) | — |
| Designer — Scope Creep | → "Stop Scope Creep Before It Starts" | Removed |
| Car Wash — Half Empty | → "Find Your Dead Zones" | ✅ Upgraded to Pro |
| Car Wash — Membership | → "Build a Recurring Revenue Program" | ✅ Upgraded to Pro |
| Auto Repair — Estimates | → "Write Quotes Customers Understand" | ✅ Upgraded to Pro |
| Auto Repair — Capacity | — | ✅ Upgraded to Pro |
| Coffee Shop — Menu Pricing | → "Fix Your Pricing Without Losing Customers" | ✅ Upgraded to Pro |
| Doctor — No-Shows | → "Cut No-Shows and Fill Cancelled Slots" | ✅ Upgraded to Pro |
| Doctor — Referrals | — | ✅ Upgraded to Pro |
| Pharmacist — Taper | — | ✅ Upgraded to Pro |
| Photographer — Pricing | — | ✅ Upgraded to Pro |
| Architecture — Compliance | — | ✅ Upgraded to Pro |
| Architecture — Profitability | → "Figure Out Which Projects Make Money" | ✅ Upgraded to Pro |

### Key rules

- Where a guide gets both a free generic version AND a Pro upgrade, they are **different artifacts** with different content. The free version is simplified and industry-agnostic. The Pro version is deeper with industry-specific prompts, tools, and workflows.
- Free guides get new slugs (e.g., `fill-empty-slots`). Pro guides keep existing slugs to preserve bookmarks.
- New Pro guides get new slugs.

---

## Data Model

### guides.js restructure

Split into two arrays or separate files:

```js
// Free guides
{
  slug: 'fill-empty-slots',
  problem: 'get-customers',       // replaces tag
  title: 'Fill Your Empty Appointment Slots',
  tier: 'free',
  difficulty: 'Beginner',
  // ...existing fields (intro, outcomes, steps, etc.)
}

// Pro guides
{
  slug: 'doctor-noshow-flow',
  industry: 'medical-practice',   // links to industries.js
  title: 'Cut No-Shows and Recover Lost Appointments',
  tier: 'pro',
  difficulty: 'Intermediate',
  stripeUrl: null,                 // populated when Payment Link created
  // ...existing fields
}
```

### New: industries.js

```js
const industries = [
  {
    slug: 'architecture-firm',
    name: 'Architecture Firm',
    color: '#4F6D7A',
    description: 'AI guides built for architecture firms — from code compliance to government bids to project profitability.',
    whoFor: 'Principals, project managers, and studio owners running firms of 5-50 people.',
  },
  // ...7 more industries
]
```

---

## Site Structure

### Routes

- `/guides` — Free problem-first library (10 guides, organized by problem category tabs)
- `/pro` — Pro landing page showing all 8 industry cards
- `/pro/:industry-slug` — Industry library page (hero + description + guide cards)
- `/guide/:slug` — Individual guide page (Pro guides get PaywallGate)

### Navigation

- Nav order: Guides · Pro · Quiz · About · Contact + "Work with me" CTA
- `/guides` gets a cross-link banner: "Looking for guides built for your specific industry?" → `/pro`
- `/pro` gets a cross-link: "New to AI? Start with our free guides" → `/guides`
- Each industry page has breadcrumb back to `/pro`

### Guide cards

- **Free cards:** problem category color dot, same as current design
- **Pro cards:** Pro badge, industry tag, $5 price indicator, accent border or warmer tint

### Paywall behavior (unchanged from Phase 2 design)

- Pro guide page shows intro + outcomes + step 1 fully
- Step 2 renders blurred with gradient fade
- Overlay CTA: "Unlock the full playbook — $5, one-time"
- Button links to guide's Stripe Payment Link
- After purchase, redirect to `/success?guide=<slug>`, localStorage unlock

---

## Implementation Sequence

### Phase 2A — Content (write first, ship later)

1. Write/adapt the 10 free generic guides
2. Write/upgrade all 32 Pro guides (Claude Code drafts, Rafee reviews)
3. Create `industries.js` data file with all 8 industries

### Phase 2B — UI + Plumbing (ships as one PR)

1. Restructure `guides.js` — split free/pro, add `tier`, `industry`, `stripeUrl`
2. Build `/pro` landing page (8 industry cards)
3. Build `/pro/:industry-slug` template page
4. Build `PaywallGate` component
5. Build `ProBadge` component
6. Build `useProAccess` hook (localStorage)
7. Build `/success` route
8. Update `/guides` page — free-only content, new problem-first organization, cross-link to Pro
9. Update Nav — add "Pro" link
10. Set up Stripe Payment Links (one per Pro guide)
11. Wire `stripeUrl` into guide data

### Phase 2C — Launch

1. Final review of all content
2. Push to production
3. Newsletter announcement

---

## Decisions log

- **2026-04-21:** Free guides are problem-first, industry-agnostic. Pro guides are industry-specific libraries.
- **2026-04-21:** Existing Intermediate guides stay free in generic form. Pro versions are upgraded/expanded, not just paywalled (Option B from earlier decision).
- **2026-04-21:** Pro guides browsed by industry on separate `/pro` page, not mixed into `/guides` (Option C).
- **2026-04-21:** Each industry gets its own landing page at `/pro/:slug` (Option B).
- **2026-04-21:** Paywall lives on the guide page, not the industry page (Option A — partial content preview).
- **2026-04-21:** Launch with all 8 industries (32 Pro guides) at once. Content drafted by Claude Code, reviewed by Rafee.
- **2026-04-21:** 10 free guides adapted from existing content. 32 Pro guides (8 upgraded, 24 new).

## Out of scope

- Subscriptions, bundles, coupon codes
- Real auth, email gating, cross-device sync
- Backend, Stripe webhooks, Checkout Sessions
- Changes to Archetype Quiz
- Authoring actual guide content (covered in Phase 2A as a separate effort)
