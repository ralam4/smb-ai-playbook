# Phase 2 Guides Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 12 new guides (8 vertical-specific + 4 universal) and update site filters/components to support 4 new business types.

**Architecture:** Each guide requires an entry in `src/data/guides.js` and a matching `.md` download file in `public/downloads/`. New business types need filter buttons in `BusinessFilter.jsx` and hue entries in `GuideCard.jsx`.

**Tech Stack:** Vite + React, plain JS data files, Markdown download files

---

### Task 1: Add new business type filters and hue mappings

**Files:**
- Modify: `src/components/BusinessFilter.jsx`
- Modify: `src/components/GuideCard.jsx`

**Step 1: Add 4 new filter buttons to BusinessFilter.jsx**

Add these entries to the `businesses` array, before the `All Businesses` entry:

```js
{ id: 'Car Wash', label: 'Car Wash', icon: '🚗' },
{ id: 'Architecture Firm', label: 'Architecture', icon: '📐' },
{ id: 'Auto Repair', label: 'Auto Repair', icon: '🔧' },
{ id: 'Real Estate Agent', label: 'Real Estate', icon: '🏠' },
```

**Step 2: Add hue mappings to GuideCard.jsx**

New tag colors and their hues to add to `hueMap`:

```js
'#1A7F8A': 185,  // Pharmacy (already in guides.js, needs hue)
'#B45309': 35,   // Car Wash (amber)
'#4A5568': 210,  // Architecture Firm (slate blue)
'#DC2626': 0,    // Auto Repair (red)
'#16A34A': 140,  // Real Estate Agent (green)
```

**Step 3: Build and verify**

Run: `npx vite build`
Expected: Build succeeds with no errors

**Step 4: Commit**

```bash
git add src/components/BusinessFilter.jsx src/components/GuideCard.jsx
git commit -m "Add filter buttons and hue mappings for Phase 2 verticals"
```

---

### Task 2: Car Wash — Capacity Guide (Beginner)

**Files:**
- Modify: `src/data/guides.js` (add guide entry)
- Create: `public/downloads/carwash-capacity-beginner.md`

**Guide spec:**
- slug: `carwash-capacity-beginner`
- tag: `Car Wash`
- tagColor: `#B45309`
- title: "Find Out Why Your Wash Is Half Empty"
- difficulty: Beginner
- time: ~20 min
- tools: ChatGPT or Claude · Your POS/transaction data

**Problem:** Car wash owners know some days are slow but don't know exactly which hours, which wash packages, or which weather patterns drive volume. Revenue leaks from unused capacity are invisible without data.

**4 Steps:**
1. **Pull your transaction data** (data-gathering, no prompt) — Export last 90 days from POS: date, time, wash type, revenue per ticket
2. **Find your dead zones** — Prompt AI to analyze volume by day/hour, identify slowest slots, flag wash types with declining volume, compare weekday vs weekend patterns
3. **Diagnose revenue leaks** — Prompt AI to calculate revenue per bay-hour, identify which wash packages have lowest margins, find peak hours where you're leaving money on the table by not upselling
4. **Build a slow-day promo plan** — Prompt AI to create targeted promotions for the 3 slowest time slots, draft social media posts and signage copy, suggest a loyalty punch-card or text-club strategy

**Expectations:**
- good: "Most car wash owners discover 2-3 specific time slots where simple signage or a text blast could increase volume 15-20%."
- ifBad: "If your POS doesn't export data, manually track car counts by hour for one week — that's enough to find your dead zones."
- time: "The promo plan from Step 4 gives you ready-to-use copy. Test one slow-day promotion this week and measure the result."

**Commit after completing guide entry + download file.**

---

### Task 3: Car Wash — Membership Guide (Intermediate)

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/carwash-membership-intermediate.md`

**Guide spec:**
- slug: `carwash-membership-intermediate`
- tag: `Car Wash`
- tagColor: `#B45309`
- title: "Build a Membership Program That Prints Recurring Revenue"
- difficulty: Intermediate
- time: ~30 min
- tools: ChatGPT or Claude · Your wash volume + pricing data

**Problem:** Single-wash revenue is unpredictable and weather-dependent. A membership/unlimited program creates predictable recurring revenue, but most car wash owners don't know how to price it, structure tiers, or calculate breakeven.

**4 Steps:**
1. **Audit your current revenue mix** (data note) — Gather: average ticket price, monthly wash volume, percentage of repeat customers, current pricing tiers
2. **Design your membership tiers** — Prompt AI to create 3-tier membership structure (basic/premium/unlimited) based on your wash packages, calculate breakeven wash frequency per tier, recommend pricing that's attractive to 2x/month customers but profitable for you
3. **Build the financial model** — Prompt AI to project monthly recurring revenue at different adoption rates (5%, 10%, 20% of current customers), calculate when membership revenue covers fixed costs, model the "what if they wash every day" worst case
4. **Create the launch plan** — Prompt AI to write a launch email/text to existing customers, create signage copy for each tier, write staff scripts for upselling membership at the register, design a first-month promotion

**Expectations:**
- good: "A well-priced membership program can convert 10-15% of regular customers within the first month, creating predictable revenue even on rainy weeks."
- ifBad: "Start with a simple single-tier unlimited plan if three tiers feels like too much. You can always add tiers later."
- time: "The financial model from Step 3 is the key decision-making tool — it tells you exactly how many members you need to cover your overhead."

---

### Task 4: Architecture Firm — Code Compliance Guide (Beginner)

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/architecture-code-compliance-beginner.md`

**Guide spec:**
- slug: `architecture-code-compliance-beginner`
- tag: `Architecture Firm`
- tagColor: `#4A5568`
- title: "Stop Losing Hours on Code Research and Plan Check Responses"
- difficulty: Beginner
- time: ~25 min
- tools: ChatGPT or Claude · Your project details + applicable codes

**Warning block (add to intro):** "Important: AI is a research assistant, not a licensed professional. All code interpretations, compliance decisions, and permit submittals must be verified by a licensed architect. Use these outputs as a starting point, not a final answer."

**Problem:** Small architecture firms spend hours digging through building codes, writing plan check responses, and assembling permit submittal checklists. It's tedious, repetitive, and pulls architects away from design work.

**4 Steps:**
1. **Define your project parameters** (data note) — Gather: project type, occupancy classification, construction type, jurisdiction, applicable codes (IBC, local amendments, energy code, accessibility)
2. **Generate a code compliance checklist** — Prompt AI with project parameters to create a structured checklist of applicable code sections, organized by discipline (structural, fire/life safety, accessibility, energy, plumbing)
3. **Draft plan check responses** — Paste plan check comments from the jurisdiction and prompt AI to draft point-by-point responses with code references, flag items that need drawing revisions vs. narrative responses
4. **Build a permit submittal checklist** — Prompt AI to generate a jurisdiction-specific submittal checklist: required drawings, calculations, forms, fees, and supporting documents

**Expectations:**
- good: "A code checklist that took 2 hours to compile manually can be drafted in 10 minutes. You'll still need to verify every item, but the starting point saves significant time."
- ifBad: "AI may reference outdated code editions or miss local amendments. Always verify the applicable code year and jurisdiction-specific requirements."
- time: "The plan check response templates from Step 3 are the biggest time-saver for most small firms — they eliminate the blank-page problem on every resubmittal."

---

### Task 5: Architecture Firm — Profitability Guide (Intermediate)

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/architecture-profitability-intermediate.md`

**Guide spec:**
- slug: `architecture-profitability-intermediate`
- tag: `Architecture Firm`
- tagColor: `#4A5568`
- title: "Find Out Which Projects Are Actually Making You Money"
- difficulty: Intermediate
- time: ~30 min
- tools: ChatGPT or Claude · Your project hours + fee data

**Problem:** Most small firms don't track profitability per project. They know their overall revenue but not which project types, phases, or clients are profitable vs. money-losers. Scope creep during CA (Construction Administration) quietly erodes margins.

**4 Steps:**
1. **Pull your project financials** (data note) — Gather for last 5-10 projects: project name, fee, hours spent by phase (SD, DD, CD, CA), hourly rate of staff involved, any additional services billed
2. **Run a profit audit** — Prompt AI to calculate effective hourly rate per project, compare fee vs. actual hours, identify which project types and phases are most/least profitable, flag projects where CA hours exceeded the fee allocation
3. **Build scope-proof proposals** — Prompt AI to create a proposal template with explicit scope boundaries per phase, a clear additional services schedule with hourly rates, and "not included" language that prevents scope assumptions
4. **Create a CA scope management system** — Prompt AI to draft a CA scope tracker (RFI limits, site visit caps, submittal review rounds), write a client communication template for when CA scope is being exceeded, create a change order request for additional CA services

**Expectations:**
- good: "Most firms discover that 1-2 project types or phases are significantly less profitable than they assumed. The proposal template from Step 3 prevents this on future projects."
- ifBad: "If you don't track hours by phase, estimate them for your last 3 projects. Even rough numbers reveal patterns."
- time: "The CA scope management system from Step 4 is where most small firms lose money without realizing it. Having a tracker and a template for scope conversations changes the dynamic."

---

### Task 6: Auto Repair — Estimates & Trust Guide (Beginner)

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/autorepair-estimates-trust-beginner.md`

**Guide spec:**
- slug: `autorepair-estimates-trust-beginner`
- tag: `Auto Repair`
- tagColor: `#DC2626`
- title: "Write Estimates Customers Actually Understand and Trust"
- difficulty: Beginner
- time: ~20 min
- tools: ChatGPT or Claude · Your common repair types + pricing

**Problem:** Customers distrust auto repair shops because estimates feel opaque — unfamiliar parts, labor line items, and no explanation of what's actually wrong. Declined repairs don't get followed up on. Trust is the #1 barrier to revenue.

**4 Steps:**
1. **List your top 10 most common repairs** (data note) — Gather: repair name, typical parts cost, labor time, total estimate range, and how you currently explain it to the customer
2. **Create plain-English estimate templates** — Prompt AI to rewrite your top 10 repair estimates in customer-friendly language: what's wrong, why it matters, what happens if they wait, and a clear cost breakdown with no jargon
3. **Build a declined repair follow-up system** — Prompt AI to create a 3-message follow-up sequence (same day, 2 weeks, 6 weeks) for customers who declined a recommended repair, with each message adding urgency/education without being pushy
4. **Design a vehicle health report** — Prompt AI to create a simple one-page vehicle health report template you can hand to every customer after service: what was done, what's in good shape, what to watch for next, and when to come back

**Expectations:**
- good: "Shops that switch to plain-English estimates typically see declined repair rates drop. The vehicle health report becomes a trust-building tool customers actually keep."
- ifBad: "Have your front desk person review the AI-generated language — they know which words confuse customers most."
- time: "The follow-up sequence from Step 3 recovers revenue you're currently leaving on the table. Even a 10% conversion rate on declined repairs adds up fast."

---

### Task 7: Auto Repair — Capacity & Pricing Guide (Intermediate)

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/autorepair-capacity-pricing-intermediate.md`

**Guide spec:**
- slug: `autorepair-capacity-pricing-intermediate`
- tag: `Auto Repair`
- tagColor: `#DC2626`
- title: "Maximize Every Bay and Every Hour in Your Shop"
- difficulty: Intermediate
- time: ~30 min
- tools: ChatGPT or Claude · Your shop rate, labor hours, and ticket data

**Problem:** Most shop owners don't know their true labor efficiency rate, which services generate the most profit per bay-hour, or whether their shop rate actually covers overhead. They're busy but not necessarily profitable.

**4 Steps:**
1. **Gather your shop metrics** (data note) — Collect: number of bays, number of techs, shop rate per hour, average hours billed per tech per day, average ticket size, monthly revenue, monthly overhead
2. **Calculate your real efficiency** — Prompt AI to compute labor efficiency rate (hours billed vs. hours available), effective shop rate after overhead, revenue per bay per day, and compare against industry benchmarks
3. **Find your most profitable services** — Prompt AI to analyze your service mix: which repairs/services generate the highest profit per bay-hour, which ones tie up bays the longest for the least revenue, recommend which services to promote and which to reprice
4. **Build a shop rate and pricing review** — Prompt AI to calculate what your shop rate needs to be to hit a target profit margin, create a pricing adjustment plan for underpriced services, draft a customer communication for any rate changes

**Expectations:**
- good: "Most shops discover their effective hourly rate is significantly lower than their posted rate once overhead is factored in. The service mix analysis from Step 3 often reveals 2-3 high-value services to promote more aggressively."
- ifBad: "If you don't track hours billed per tech, start with one week of tracking — it reveals efficiency gaps immediately."
- time: "The shop rate review from Step 4 is the hardest conversation but the most important one. Most independent shops are underpriced relative to their costs."

---

### Task 8: Real Estate Agent — Listings & Leads Guide (Beginner)

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/realestate-listings-leads-beginner.md`

**Guide spec:**
- slug: `realestate-listings-leads-beginner`
- tag: `Real Estate Agent`
- tagColor: `#16A34A`
- title: "Write Listings That Sell and Leads That Convert"
- difficulty: Beginner
- time: ~25 min
- tools: ChatGPT or Claude · Your listing details + lead sources

**Problem:** Agents spend hours writing listing descriptions that sound like every other listing. Lead follow-up is inconsistent — hot leads go cold because there's no system. Seller listing presentations are cobbled together last-minute.

**4 Steps:**
1. **Gather your listing details** (data note) — For a current or upcoming listing: property details, neighborhood highlights, unique selling points, target buyer profile, comparable sales
2. **Generate standout listing descriptions** — Prompt AI to write MLS descriptions in multiple tones (luxury, family-friendly, investor), create social media captions for each listing, write an email announcement for your database
3. **Build a lead nurture sequence** — Prompt AI to create a 5-touch drip sequence for new leads: initial response (under 5 minutes), value-add follow-up (day 2), market insight (week 1), soft check-in (week 3), re-engagement (month 2)
4. **Create a seller listing presentation outline** — Prompt AI to build a listing presentation structure: your marketing plan, pricing strategy framework, timeline expectations, and a script for the pricing conversation when sellers want to list too high

**Expectations:**
- good: "Listing descriptions that took 30 minutes to write can be drafted in 2 minutes. The lead nurture sequence ensures no lead goes more than 48 hours without a touchpoint."
- ifBad: "AI-generated listing copy needs your local knowledge. Always add neighborhood-specific details the AI can't know."
- time: "The lead nurture sequence from Step 3 is the highest-ROI output — consistent follow-up is the #1 differentiator between agents who convert and those who don't."

---

### Task 9: Real Estate Agent — Market Authority Guide (Intermediate)

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/realestate-market-authority-intermediate.md`

**Guide spec:**
- slug: `realestate-market-authority-intermediate`
- tag: `Real Estate Agent`
- tagColor: `#16A34A`
- title: "Become the Market Expert Everyone Calls First"
- difficulty: Intermediate
- time: ~30 min
- tools: ChatGPT or Claude · Your MLS data + market stats

**Problem:** Agents compete on relationships, but the best agents also compete on knowledge. Most don't create market reports, CMA presentations are basic, and annual business planning is nonexistent. Being the "market expert" requires content most agents don't have time to create.

**4 Steps:**
1. **Gather your market data** (data note) — Pull from MLS: median price, days on market, inventory levels, price per square foot, month-over-month trends for your target area(s) over the last 6-12 months
2. **Create a monthly market report** — Prompt AI to turn raw stats into a branded 1-page market report: key trends in plain English, what it means for buyers vs. sellers, a "market outlook" section, formatted for email or social media sharing
3. **Build a CMA presentation template** — Prompt AI to create a comparative market analysis presentation structure: comp selection methodology, adjustments explanation in plain language, pricing recommendation with supporting data, and a visual summary sellers can understand
4. **Draft your 12-month business plan** — Prompt AI to build an annual plan: transaction goals, lead generation targets by source, marketing calendar, listing inventory targets by quarter, and a monthly check-in scorecard

**Expectations:**
- good: "Agents who send monthly market reports consistently become the first call when someone's thinking about buying or selling. The CMA template elevates your listing presentations above the competition."
- ifBad: "Market data goes stale fast. Set a calendar reminder to update your report on the 1st of each month."
- time: "The 12-month business plan from Step 4 is what separates agents who grow year-over-year from those who stay flat. Most agents never do this — which is your advantage."

---

### Task 10: Universal — Social Media Content Calendar

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/social-media-content-calendar.md`

**Guide spec:**
- slug: `social-media-content-calendar`
- tag: `All Businesses`
- tagColor: `#4338CA`
- title: "Build a 30-Day Content Calendar Without the Burnout"
- difficulty: Beginner
- time: ~25 min
- tools: ChatGPT or Claude · Your business details + social platforms

**Problem:** Every small business owner knows they "should be posting" but can't stay consistent. They post in bursts, run out of ideas, and go silent for weeks. There's no system — just guilt.

**4 Steps:**
1. **Define your content pillars** (data note) — Identify: your business type, who your ideal customer is, which platforms you use, what topics you can speak to authentically
2. **Generate your content pillars and post types** — Prompt AI to create 4-5 content pillars for your business, define 3 post types per pillar (educational, behind-the-scenes, promotional), and create a weekly posting rhythm
3. **Build the 30-day calendar** — Prompt AI to generate a full month of post ideas organized by week, each with: topic, caption draft, suggested visual/format (photo, carousel, video, story), and best time to post
4. **Create a batch production workflow** — Prompt AI to design a 2-hour monthly content batching session: how to shoot/gather all visuals at once, how to write all captions in one sitting, which scheduling tool to use, and a checklist to follow each month

**Expectations:**
- good: "Having 30 days of content pre-planned eliminates the 'what should I post?' paralysis. Most owners find they can batch-produce a month of content in 2-3 hours."
- ifBad: "Don't try to be on every platform. Pick 1-2 where your customers actually are and focus there."
- time: "The batch production workflow from Step 4 is what makes this sustainable. Without a system, even great content plans die after week 2."

---

### Task 11: Universal — Cash Flow Management

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/cash-flow-management.md`

**Guide spec:**
- slug: `cash-flow-management`
- tag: `All Businesses`
- tagColor: `#4338CA`
- title: "Stop Running Out of Cash Before the Month Runs Out"
- difficulty: Intermediate
- time: ~30 min
- tools: ChatGPT or Claude · Your revenue + expense data (last 6-12 months)

**Problem:** Most small business owners manage cash flow by checking their bank balance. They don't forecast, don't plan for slow seasons, and get blindsided by tax payments, equipment repairs, or payroll gaps. Running out of cash is the #1 reason small businesses fail.

**4 Steps:**
1. **Gather your financial snapshot** (data note) — Collect: monthly revenue for last 6-12 months, fixed monthly expenses, variable expenses, upcoming known expenses (taxes, insurance, equipment), and your current cash reserve
2. **Build a 90-day cash flow forecast** — Prompt AI to create a week-by-week cash flow projection: expected inflows, committed outflows, net cash position, and flag any weeks where cash drops below a danger threshold
3. **Identify and plan for slow seasons** — Prompt AI to analyze your revenue patterns for seasonality, calculate how much cash reserve you need to survive your slowest period, and suggest strategies (prepaid packages, off-season services, expense reduction) to smooth the dips
4. **Create a monthly cash flow review routine** — Prompt AI to build a 30-minute monthly financial check-in template: update actuals vs. forecast, adjust projections, review upcoming large expenses, and set a cash target for next month

**Expectations:**
- good: "Most owners are surprised by how predictable their cash flow patterns actually are once they see 6 months of data laid out. The 90-day forecast eliminates most cash surprises."
- ifBad: "If you don't have clean financial data, start with bank statements. Categorize deposits and withdrawals for the last 3 months — that's enough to spot patterns."
- time: "The monthly review routine from Step 4 takes 30 minutes and prevents the panicked 'can I make payroll?' moments. It's the single most valuable habit a business owner can build."

---

### Task 12: Universal — Hiring and Onboarding

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/hiring-and-onboarding.md`

**Guide spec:**
- slug: `hiring-and-onboarding`
- tag: `All Businesses`
- tagColor: `#4338CA`
- title: "Hire Smarter and Get New Staff Productive in 30 Days"
- difficulty: Intermediate
- time: ~30 min
- tools: ChatGPT or Claude · Your role requirements + current processes

**Problem:** Small business owners write vague job posts, interview by gut feel, and onboard by throwing new hires into the deep end. Result: bad hires, slow ramp-up, and turnover that costs more than the salary itself.

**4 Steps:**
1. **Define the role clearly** (data note) — Identify: job title, key responsibilities (what they'll actually do daily), must-have vs. nice-to-have skills, pay range, schedule, and what success looks like at 30/60/90 days
2. **Write a job post that attracts the right people** — Prompt AI to write a job post that leads with what makes your workplace different, clearly describes daily work (not corporate jargon), includes pay range and real schedule, and filters out bad fits with an application question
3. **Build an interview scorecard** — Prompt AI to create a structured interview with 6-8 questions mapped to your must-have skills, a simple scoring rubric (1-5 per question), a practical skills assessment or scenario question, and red flags to watch for
4. **Create a 30-day onboarding plan** — Prompt AI to build a day-by-day first-week plan and week-by-week first-month plan: who trains them on what, when they should be independent on each task, check-in schedule, and a "first 30 days success checklist"

**Expectations:**
- good: "A structured interview process dramatically reduces bad hires. The onboarding plan ensures new staff become productive in weeks instead of months."
- ifBad: "If you're hiring for a role you've never had before, describe what you're currently doing yourself that you want to hand off — that becomes the job description."
- time: "The 30-day onboarding plan from Step 4 is what most small businesses skip. It's the difference between a new hire who's contributing in week 3 vs. one who's still asking basic questions in month 2."

---

### Task 13: Universal — Competitive Differentiation

**Files:**
- Modify: `src/data/guides.js`
- Create: `public/downloads/competitive-differentiation.md`

**Guide spec:**
- slug: `competitive-differentiation`
- tag: `All Businesses`
- tagColor: `#4338CA`
- title: "Figure Out What Makes You Different (and Make Sure Customers Know It)"
- difficulty: Beginner
- time: ~25 min
- tools: ChatGPT or Claude · Your business details + competitor awareness

**Problem:** When customers compare you to competitors, they see the same services at similar prices. Without a clear differentiator, you compete on price — which is a race to the bottom. Most small business owners know they're different but can't articulate it.

**4 Steps:**
1. **Map your competitive landscape** (data note) — Identify: your 3-5 closest competitors, what they charge, what they emphasize in their marketing, and what customers say about them (Google reviews, social media)
2. **Find your actual differentiators** — Prompt AI to analyze your business vs. competitors across: service quality, speed, specialization, customer experience, pricing model, convenience, and personality/brand, then identify your 2-3 strongest differentiators
3. **Write your positioning statement** — Prompt AI to create a clear positioning statement (1-2 sentences), an elevator pitch (30 seconds), a "why us" section for your website, and 3 talking points your staff can use when customers ask "why should I choose you?"
4. **Embed differentiation in your marketing** — Prompt AI to audit your current website/social media copy for generic language, rewrite your homepage headline and about section around your differentiators, and create 5 social media posts that reinforce your positioning

**Expectations:**
- good: "Most owners discover their real differentiator isn't what they expected. The positioning statement gives you — and your staff — a clear answer to 'why us?' that isn't 'we're the best.'"
- ifBad: "If you can't find a differentiator, that's a business strategy problem, not a marketing problem. The exercise itself reveals where you need to invest."
- time: "The staff talking points from Step 3 have an immediate impact. When every employee can articulate why you're different, every customer interaction reinforces your brand."

---

### Task 14: Build and deploy verification

**Step 1:** Run `npx vite build` and verify 0 errors
**Step 2:** Verify all 12 new download files exist in `public/downloads/`
**Step 3:** Commit all changes and push

```bash
git add src/data/guides.js src/components/BusinessFilter.jsx src/components/GuideCard.jsx public/downloads/
git commit -m "Phase 2: Add 12 new guides across 4 verticals + 4 universal topics"
git push
```
