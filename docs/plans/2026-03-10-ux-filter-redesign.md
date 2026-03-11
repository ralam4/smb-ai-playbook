# UX Filter Redesign — Dual Browse Modes

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add "Browse by Problem" as a second way to find guides, alongside the existing "Browse by Business" filter.

**Architecture:** Two-mode filter toggle above existing pill buttons. Problem mode shows 4 categories. Hero gets two CTA buttons that scroll to grid and pre-set filter mode.

**Tech Stack:** React, Tailwind CSS, existing component patterns

---

### Task 1: Add `problems` array to all guides in guides.js

Add a `problems` field to every guide entry.

Problem categories:
- `get-customers` — "Get Customers"
- `fix-profits` — "Fix Profits"
- `fix-operations` — "Fix Operations"
- `scale-up` — "Scale Up"

Mapping:
- barber-chair-utilization: ['get-customers']
- bakery-waste-reduction: ['fix-profits']
- doctor-noshow-flow: ['fix-operations']
- doctor-referral-system: ['fix-operations']
- pharmacist-taper-calculator: ['fix-operations']
- carwash-capacity-beginner: ['fix-profits', 'scale-up']
- carwash-membership-intermediate: ['scale-up']
- architecture-code-compliance-beginner: ['fix-operations']
- architecture-profitability-intermediate: ['fix-profits']
- autorepair-estimates-trust-beginner: ['fix-operations']
- autorepair-capacity-pricing-intermediate: ['fix-profits']
- realestate-listings-leads-beginner: ['get-customers']
- realestate-market-authority-intermediate: ['scale-up']
- photographer-pricing: ['fix-profits']
- coffee-menu-pricing: ['fix-profits']
- designer-scope-creep: ['fix-operations']
- google-reviews: ['get-customers']
- social-media-content-calendar: ['get-customers', 'scale-up']
- cash-flow-management: ['fix-profits', 'scale-up']
- hiring-and-onboarding: ['fix-operations', 'scale-up']
- competitive-differentiation: ['get-customers']

### Task 2: Upgrade BusinessFilter to support two modes

- Add a "Browse by:" toggle above the pill row: "Business" | "Problem"
- In Business mode: show existing business-type pills (unchanged)
- In Problem mode: show 4 problem pills + "All Guides"
- Switching modes resets filter to "all"
- Toggle style: subtle text links with underline indicator

### Task 3: Update Home.jsx filter logic

- Track `filterMode` state: 'business' | 'problem'
- In business mode: filter by `g.tag === filter` (existing)
- In problem mode: filter by `g.problems.includes(filter)`
- Pass `filterMode` and `onModeChange` to BusinessFilter

### Task 4: Add hero CTA buttons

- Two buttons after "How it works" strip
- "Browse by Business" (filled/primary) and "Browse by Problem" (outline/secondary)
- Both scroll to guide grid section
- "Browse by Problem" also switches filter mode to problem
- Add `id="guides"` to the Problem Library section for scroll target

### Task 5: Build and verify
