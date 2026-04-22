const autoRepairGuides = [
  {
    slug: 'autorepair-bay-efficiency',
    tier: 'pro',
    industry: 'auto-repair',
    title: 'Maximize Every Bay and Every Hour in Your Shop',
    description:
      'A full shop efficiency system — calculate real effective labor rate, find your highest-profit service mix, diagnose where time is leaking, rebalance your shop rate, and install a weekly efficiency review.',
    difficulty: 'Advanced',
    time: '~3 hours for initial audit, 20 min/week ongoing',
    tools: 'ChatGPT or Claude · Your shop rate, labor hours, RO data, P&L',
    stripeUrl: null,
    intro:
      'Most shop owners know they’re busy but not whether they’re actually profitable. They don’t know their true effective labor rate after overhead, don’t know which services produce the most profit per bay-hour, and haven’t meaningfully reviewed their shop rate in years. The gap between "posted rate" and "actual revenue per bay-hour" is where 10–30% of profit disappears. This guide builds a full efficiency system: a real economics audit, a service-mix profitability analysis, a shop rate review with phased implementation, a time-leak diagnostic, and a weekly review habit to keep it sharp.',
    outcomes: [
      'Your real effective labor rate after overhead — not your posted rate',
      'A profit-per-bay-hour ranking across every service category',
      'A phased shop rate adjustment plan with customer communication templates',
      'A time-leak diagnostic showing where hours disappear (diagnostic, waiting on parts, comebacks)',
      'A weekly 20-minute efficiency review that catches drift',
    ],
    steps: [
      {
        number: 1,
        title: 'Gather shop metrics and build a baseline',
        description: 'Pull the numbers that describe your shop’s real economics. Rough is fine — patterns matter more than precision.',
        dataNote: 'Collect: bay count, tech count, posted shop rate, average flagged hours per tech per day, average RO size, monthly gross revenue, monthly overhead (rent, utilities, insurance, supplies, equipment payments, admin), average parts markup, monthly parts revenue, monthly labor revenue.',
      },
      {
        number: 2,
        title: 'Calculate real efficiency and effective labor rate',
        description: 'Your posted rate and your effective rate are different numbers. Most shops discover the gap is significant.',
        prompt: `I want to understand my shop's real labor efficiency and effective rate after overhead.

My shop:
- Bays: [NUMBER]
- Techs: [NUMBER, including apprentices]
- Hours open per week: [NUMBER]
- Posted shop rate: $[RATE]
- Average flagged hours per tech per day: [NUMBER]
- Average RO size: $[AMOUNT]
- Monthly gross revenue: $[AMOUNT]
- Monthly parts revenue: $[AMOUNT]
- Monthly labor revenue: $[AMOUNT]
- Monthly overhead: $[AMOUNT] (break down: rent $X, utilities $X, insurance $X, supplies $X, equipment $X, admin $X)
- Parts markup: [e.g. "cost + 40%", "list", "varies"]

Please calculate:
1. **Labor efficiency rate** — billed hours ÷ available hours, benchmarked against industry (85–100%+ is healthy)
2. **Effective shop rate** — total labor revenue ÷ billed hours, adjusted for overhead per hour
3. **Revenue per bay per day** — benchmarked against independent shop norms
4. **Breakeven flagged hours per day** — what we need to hit to cover overhead
5. **Gross profit per bay per day** — labor + parts gross profit
6. **Where the biggest gap is** — utilization (not enough cars), productivity (slow techs), pricing (rate too low), or mix (wrong services)
7. **Impact of 10% improvement** in each lever — which one moves the needle most
8. **A "worried about" list** — any metric that's significantly off industry norms`,
      },
      {
        number: 3,
        title: 'Find your most profitable service mix',
        description: 'Not all services are equal. Bay-hour profit varies widely across oil changes, diagnostics, brakes, AC, and major repairs.',
        prompt: `I want to analyze which services generate the most profit per bay-hour so I know what to promote.

My current service mix (estimate percentages of revenue):
[LIST — e.g. oil changes 15%, brakes 20%, engine diagnostics/repair 25%, AC 10%, tires 10%, suspension 10%, electrical 5%, other 5%]

My shop rate: $[RATE]
My typical parts markup: [%]

For each service category, please estimate:
1. **Typical labor hours per job** — and therefore bay-hours consumed
2. **Typical parts revenue per job** — and parts gross profit
3. **Profit per bay-hour** — labor GP + parts GP ÷ bay-hours
4. **Ranked profitability** — from most to least profitable per bay-hour
5. **Services tying up bays for low return** — long wait, low GP
6. **Services I should promote more aggressively** — high GP per bay-hour, likely under-marketed
7. **Services to consider repricing, referring out, or declining** — loss leaders that aren't worth it
8. **An ideal service mix** — what would my revenue split look like to maximize profit given my bay count and tech skill levels`,
      },
      {
        number: 4,
        title: 'Diagnose where time leaks',
        description: 'Low flagged hours aren’t always slow techs. Often it’s waiting on parts, waiting on diagnostic approval, or comebacks eating billable time.',
        prompt: `I want to diagnose where my labor hours are leaking — we're not at 100% flagged hours and I want to know why.

My current flagged hours per tech per day: [NUMBER]
My target: [NUMBER, e.g. 7–8]

Common time leaks in my shop (check all that apply):
- Techs waiting on parts delivery
- Techs waiting on service advisor to sell the job
- Diagnostic time we can't fully bill for
- Comebacks (rework we don't bill)
- Warranty work
- Internal jobs (our own vehicles, family discounts)
- Cleanup, housekeeping
- Training
- No-shows / cancelled appointments
- Write-ups, documentation
- Other: [DESCRIBE]

Please analyze:
1. **The likely top 3 leaks in my shop** given what I've checked
2. **For each leak, estimate the weekly hours lost** if my numbers are typical
3. **Specific fixes for each leak** — e.g. parts staging, diagnostic pricing policy, comeback root-cause analysis
4. **A 4-week intervention plan** — attack the #1 leak first, measure, then move to #2
5. **A tracking template** — daily leak log the service manager fills in`,
      },
      {
        number: 5,
        title: 'Rebalance the shop rate with a phased plan',
        description: 'Most independent shops are 10–20% underpriced relative to their real costs. The phased implementation is what makes the increase survive customer reaction.',
        prompt: `I need to review my shop rate and build a phased adjustment plan.

My current rate: $[RATE]
My target profit margin: [%, e.g. 20%]
Last raise: [DATE or "a long time ago"]
My main competitors' rates (if known): [LIST]
My customer base: [mostly regulars / mix / mostly one-time]
My area's market: [rural / suburban / urban / specific region]

Please create:
1. **Target shop rate calculation** — what rate covers my overhead at my target margin given my efficiency numbers
2. **Phased adjustment plan** — if the jump is big, how to phase it (e.g. $X now, $Y in 6 months) without shocking customers
3. **Parts markup review** — is my current markup in a healthy range vs. industry
4. **"Menu service" pricing adjustment** — oil changes and basic maintenance often lag; what should they cost
5. **Customer communication** — a brief, warm, professional announcement of the rate change (email/mail/in-shop sign versions)
6. **Objection handling scripts** — what to say when a regular customer pushes back on the new rate
7. **Diagnostic fee policy** — if we don't already have one, how to introduce a diagnostic fee that gets waived on approved work
8. **Quarterly pricing review checklist** — so rates don't drift out of date again`,
      },
      {
        number: 6,
        title: 'Install a weekly efficiency review',
        description: 'A monthly P&L comes too late to correct in-month. A weekly 20-minute review keeps the system accountable.',
        prompt: `I want a weekly 20-minute review ritual to catch efficiency drift early.

Please create:
1. **A weekly dashboard** — flagged hours per tech this week vs. last week, average RO size trend, service mix this week, comeback rate, parts markup realization
2. **A 5-question check-in** — What's improving? What's slipping? Which tech needs coaching? Which service category is out of whack? What's one thing to adjust this coming week?
3. **A red-flag list** — specific metrics that should trigger immediate action (flagged hours drop 15% week over week, comeback rate above 3%, etc.)
4. **A monthly P&L reconciliation** — tie the weekly numbers back to the books so we know the dashboard is honest
5. **A quarterly full reset** — re-run Step 2 and Step 3 to see if my effective rate and service mix have drifted`,
      },
      {
        number: 7,
        title: 'Coach techs using data, not vibes',
        description: 'If you need to have performance conversations, data-backed coaching is more effective and less contentious.',
        prompt: `I need to have performance conversations with techs whose numbers are lagging. I want to do this with data, not vibes.

Please create:
1. **A per-tech monthly scorecard** — flagged hours, comeback rate, average labor hours per ticket type, customer CSI if tracked
2. **A coaching conversation template** — opens with data, asks tech for their view, identifies root cause, agrees on one specific change to focus on
3. **A "top tech / slow tech" gap analysis** — what's different about my top tech's numbers; can that pattern be taught
4. **A 30-day coaching cycle** — weekly check-ins focused on the one agreed-upon change
5. **A "when to let a tech go" framework** — uncomfortable but necessary; what pattern of numbers + coaching response signals the relationship isn't working`,
      },
    ],
    expectations: {
      good: 'Most shops discover their effective rate is $15–25 less than posted. The service mix analysis (Step 3) and time-leak diagnostic (Step 4) typically recover 3–6 hours/tech/week in flagged time within 60 days.',
      ifBad: 'If your data is thin, track one week manually before running the audit. You’ll be amazed what one week of detailed logging reveals.',
      time: 'Initial audit: 3 hours. Shop rate rollout: 2 weeks. Weekly habit: 20 min. First visible P&L impact: 60–90 days.',
    },
    downloadFile: null,
  },

  {
    slug: 'autorepair-estimates-trust',
    tier: 'pro',
    industry: 'auto-repair',
    title: 'Write Estimates Customers Actually Understand and Trust',
    description:
      'Turn confusing estimates into plain-English quotes that close — template library for your 20 most common jobs, vehicle health reports, declined-work follow-up, and a service advisor walkthrough script.',
    difficulty: 'Intermediate',
    time: '~3 hours one-time setup, 5 min/estimate ongoing',
    tools: 'ChatGPT or Claude · Your recent RO data',
    stripeUrl: null,
    intro:
      'Customers decline work they don’t understand. When an estimate reads like an industry document — OE part codes, acronyms, labor codes — the customer defaults to "no" because saying yes feels risky. Plain-English estimates that explain what, why, and what happens if it’s not done convert dramatically better. This guide builds a full trust system: plain-English templates for your 20 most common jobs, vehicle health reports that frame recommendations as investments in the car, declined-work follow-up that doesn’t feel pushy, and a service advisor walkthrough script that doubles acceptance.',
    outcomes: [
      'A plain-English template library for your 20 most common jobs',
      'A vehicle health report format that frames recommendations as long-term care, not upsells',
      'A 4-touch declined-work follow-up sequence',
      'A 60-second service advisor walkthrough script proven to boost acceptance',
      'A monthly review to catch pricing drift and template improvement opportunities',
    ],
    steps: [
      {
        number: 1,
        title: 'List your 20 most common jobs and pull recent ROs',
        description: 'Before building templates, identify the work you quote most. 20 templates cover 80%+ of shops’ estimate volume.',
        dataNote: 'Pull 30 ROs across: oil services, brakes, battery, alternator/starter, AC, fluid flushes, belts/hoses, suspension, alignment, tires, cooling system, diagnostics, timing belt/chain, major engine repair, transmission service, electrical, exhaust, check engine light, 30k/60k/90k services, state inspection items.',
      },
      {
        number: 2,
        title: 'Build plain-English templates for each job',
        description: 'Each job gets a 4-part template: what it is, why it matters, what happens if skipped, and what’s included.',
        prompt: `I want to build plain-English templates for my 20 most common jobs.

My shop:
- Shop name: [NAME]
- Brand voice: [professional / friendly / straightforward / mix]
- Typical customer: [mostly owners / fleet / mixed / specific car brands]
- Warranty policy: [LIST — e.g. "2 years / 24k miles on all repairs"]

My 20 most common jobs (list each with: job name, typical price range, labor time, parts included):
[PASTE LIST]

For each job, please create:
1. **Plain-English description** — what the work is in terms a non-mechanic understands (2–3 sentences)
2. **Why it matters** — the consequence of not doing it, framed as safety/cost/comfort (not fear-based)
3. **What's included** — bullets: labor, parts, warranty, cleanup, post-inspection
4. **Confidence builder** — "we use OEM parts", "all work warrantied for X", "ASE certified techs", etc.
5. **Common customer question** — the #1 question customers ask on this job and the answer
6. **A "why this price" line** — brief, honest explanation of what goes into the cost

Keep each template under 150 words. Avoid jargon unless it's a term customers actually know (e.g. "brake pad" yes, "MAP sensor" no unless essential).`,
      },
      {
        number: 3,
        title: 'Design a vehicle health report format',
        description: 'Individual estimates feel transactional. A vehicle health report frames the shop as a partner in the car’s long-term health.',
        prompt: `I want a vehicle health report format that frames recommendations as long-term care, not a list of upsells.

My typical inspection covers: [LIST — e.g. tires, brakes, fluids, belts/hoses, suspension, battery, lights, filters, exhaust]

Please create:
1. **A report template** — sections for: today's work, safety items (address now), wear items (plan ahead), good-to-go (peace of mind)
2. **Color-coding system** — red/yellow/green with clear criteria for each
3. **A "safe to drive" statement** — clear language for what's safe vs. unsafe
4. **A "prioritized plan" section** — if the customer can't do everything today, which items rank in what order and why
5. **A photo standard** — which items should have photos (safety items, customer-facing damage, wear items)
6. **A "parked for 30 days" example report** — so I can show customers what a good report looks like
7. **A digital delivery format** — if I send reports electronically, what the message wrapper looks like`,
      },
      {
        number: 4,
        title: 'Build the 4-touch declined-work follow-up',
        description: 'Declined work isn’t lost — most customers are comparing prices or waiting for payday. Thoughtful follow-up recovers 10–20% of declines.',
        prompt: `I want a follow-up sequence for customers who declined recommended work.

My typical price range for declined work: $[LOW]–$[HIGH]
My customer base: [mostly residential / fleet / mixed]
My communication preference: [text / email / call]

Please create:
1. **7-day follow-up** — friendly check-in, no pressure, "did you have questions we can answer?"
2. **30-day follow-up** — assume the item hasn't been done, remind of the recommendation with safety or cost framing
3. **90-day follow-up** — offer a free re-inspection on the declined item
4. **"Priority work" email** — for declined items that are safety-critical; how to communicate urgency without scare tactics
5. **"Cheaper quote elsewhere" response** — customer replies they got a cheaper estimate; how to address without trashing competitors
6. **"Wasn't explained well" recovery** — for customers who say they didn't understand what was being recommended`,
      },
      {
        number: 5,
        title: 'Write the service advisor walkthrough script',
        description: 'A 60-second verbal walkthrough doubles acceptance on complex jobs. Script it so every advisor does it the same way.',
        prompt: `I want a 60-second verbal walkthrough script my service advisors use for every estimate delivery.

My typical estimate delivery: [in-person / by phone / by text / by email]
My advisor count: [NUMBER]
My common customer objections: [LIST — e.g. "too expensive", "I'll do it later", "let me think", "I know a guy"]

Please create:
1. **A 60-second verbal walkthrough** — what to say as I point through each line item, in order
2. **Opening line** — frames the conversation as care, not sales
3. **Transition phrases** — between items, keeping momentum without pressure
4. **Closing ask** — specific language that gets a decision without pressure
5. **Common objection responses** — for each of my listed objections, a calm, respectful response that keeps the door open
6. **"Think about it" recovery** — when the customer stalls, how to leave graciously with a specific follow-up commitment
7. **Handoff-to-tech script** — if the customer has a deeper question, how to bring the tech into the conversation cleanly`,
      },
      {
        number: 6,
        title: 'Install a monthly template and pricing review',
        description: 'Parts prices and labor times drift. A monthly review keeps templates honest.',
        prompt: `I want a monthly ritual to keep my estimate templates and pricing honest.

Please create:
1. **A monthly 45-minute review** — spot-check 10 recent estimates against templates, verify parts pricing hasn't drifted, note any new common jobs not yet templated
2. **A "new template needed" trigger** — when a job we quoted 5+ times in a month isn't templated, it gets added
3. **A declined-work root-cause analysis** — top 3 declined jobs this month, diagnose why (price, communication, customer situation)
4. **A "template performance" check** — are templated jobs accepting at higher rates than non-templated? If yes, double down. If no, something's off.
5. **A quarterly pricing audit** — re-run parts pricing for top 20 jobs against current supplier prices; adjust`,
      },
    ],
    expectations: {
      good: 'Most shops see acceptance rates improve 10–25% within 60 days of adopting the templates + walkthrough. The vehicle health report reframes the shop from "fix what\'s broken" to "keep this car healthy" — which increases long-term customer value.',
      ifBad: 'If templates still feel stiff, read them out loud to a non-car person. If they wouldn’t say it that way to a friend, rewrite.',
      time: 'Initial template build: 3 hours (invest once, use forever). Per-estimate time: 5 min (down from 15–20 from scratch). Acceptance impact: measurable at 30 days.',
    },
    downloadFile: null,
  },

  {
    slug: 'autorepair-repeat-customer-system',
    tier: 'pro',
    industry: 'auto-repair',
    title: 'Build a Repeat Customer System That Fills Your Schedule',
    description:
      'Stop competing with the dealership — turn every customer into a repeat customer with a full retention system: service reminders, maintenance scheduling, a loyalty offer, and lapsed-customer recovery.',
    difficulty: 'Intermediate',
    time: '~4 hours to set up, 1 hour/week to run',
    tools: 'ChatGPT or Claude · Your customer database · Your shop management system',
    stripeUrl: null,
    intro:
      'Independent shops lose repeat customers to dealerships for two reasons: dealerships send reminders and have a system. You already do better work at a fairer price. You just need the system. This guide builds a full repeat-customer machine: a service reminder flow timed to each customer’s vehicle, a birthday/anniversary/seasonal touchpoint plan, a lapsed-customer win-back sequence, and a simple loyalty offer that makes the choice to return automatic. The compounding effect is what matters — a 10% retention improvement typically drives 15–25% more revenue because repeat customers have larger ROs and refer more people.',
    outcomes: [
      'A service reminder flow that notifies each customer when their next service is actually due',
      'A full annual touchpoint plan (4–6 touches/year per customer) that isn’t spammy',
      'A lapsed-customer win-back sequence with measurable recovery rates',
      'A simple loyalty offer that rewards the behavior you want (regular maintenance)',
      'A weekly retention dashboard',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current retention and segment your customer base',
        description: 'Most shops don’t know their retention rate. The starting point is naming the number.',
        dataNote: 'Pull 2 years of customer data. For each customer: first visit date, last visit date, visit count, total spend, average RO, vehicle info. Also note any currently scheduled future appointments.',
        prompt: `I want to audit my retention and segment my customer base.

My shop:
- Typical customer visit frequency for a healthy customer: [e.g. 2x/year for maintenance, 3–4x for heavier drivers]
- Total customers in database: [NUMBER]
- Typical RO size: $[AMOUNT]

Here is my customer data:
[PASTE SUMMARY OR SAMPLE]

Please analyze:
1. **Retention rate** — what % of customers returned within 12 months of first visit
2. **Segment the base**: Very Loyal (3+ visits in 12 months), Loyal (2 visits/12 mo), At Risk (1 visit/12 mo and due for next service), Lapsed (last visit 12–24 months ago), Gone (no visit in 24+ months)
3. **Lifetime value by segment** — average total spend by segment
4. **Revenue concentration** — what % of revenue comes from what % of customers (usually a heavy power law)
5. **Top 20% customers** — who are they, what do they have in common
6. **"At risk" customer list** — the ones due or past due for service
7. **Recovery opportunity** — how much revenue could be recovered if lapsed customers returned at normal rates`,
      },
      {
        number: 2,
        title: 'Build the service reminder flow',
        description: 'Generic "get your car serviced" reminders get ignored. Vehicle-specific, mileage-accurate reminders get action.',
        prompt: `I want a service reminder flow that's specific to each customer's vehicle and their actual mileage.

My shop management system: [NAME]
My typical services with intervals:
[LIST — e.g. oil change every 5k–7.5k miles, brake inspection every 10k, major service every 30k/60k/90k]

Please create:
1. **A reminder cadence** — when to send reminders for each service type (e.g. "30 days before estimated next oil change")
2. **A mileage-estimation method** — customer's prior interval + days since last visit + typical daily driving
3. **SMS reminder templates** — short, specific (not "time for service"), vehicle-specific
4. **Email reminder templates** — slightly longer, with a clear CTA and optional reschedule link
5. **A "haven't responded" follow-up** — 14 days later, different tone
6. **A "one-click reschedule"** — specific language that reduces friction to booking
7. **Opt-out compliance** — how to handle opt-outs cleanly for SMS compliance`,
      },
      {
        number: 3,
        title: 'Build a year-round touchpoint plan',
        description: '6 well-timed touches a year keep you top-of-mind without feeling spammy.',
        prompt: `I want a year-round customer touchpoint plan that keeps my shop top-of-mind without feeling spammy.

Please create:
1. **Spring touch (pre-summer)** — focus on AC check, tire condition, road trip prep
2. **Summer touch** — focus on cooling system, battery heat-stress
3. **Fall touch (pre-winter)** — focus on battery, tires, wiper blades, fluid check
4. **Winter touch** — focus on cold-weather concerns, salt/corrosion, tire pressure
5. **Birthday/anniversary touch** — personal, no sales pitch
6. **Customer-specific service touches** — tied to their vehicle's mileage/time intervals (from Step 2)

For each seasonal touch:
- SMS version
- Email version
- A brief explanation of why NOW (not generic)
- A specific CTA (not "call us" — "book your 10-minute cooling system check")

Avoid: birthday discount coupons (make the relationship transactional), generic "thinking of you" emails (feel insincere), stacking multiple promotions at once.`,
      },
      {
        number: 4,
        title: 'Launch a simple loyalty offer',
        description: 'Complex punch cards don’t work. A simple, durable offer that rewards the behavior you want (regular maintenance) is enough.',
        prompt: `I want a simple loyalty offer that rewards regular maintenance.

My goal: [e.g. reduce churn from customers going to dealerships for maintenance]
My margin tolerance: [e.g. "happy to give up 5–10% on oil changes if it keeps the customer"]

Please propose:
1. **3 loyalty program options** — ranked by simplicity:
   (a) "Keep it on file" — 10% off for customers who keep a credit card on file for scheduled maintenance
   (b) "Service club" — flat annual fee for unlimited oil changes + multi-point inspections (creates recurring revenue and keeps the car coming in)
   (c) "Every fifth free" — simple punch card on oil changes
2. **Financial model** for each option — breakeven analysis, risk profile, simplicity score
3. **The one I'd recommend for a shop of my size** — and why
4. **Launch announcement** — email/mail/in-shop
5. **Front desk pitch script** — how the advisor introduces the program at the moment of a completed service
6. **Tracking method** — so we know whether it's actually driving retention`,
      },
      {
        number: 5,
        title: 'Build the lapsed-customer win-back sequence',
        description: 'Customers who haven’t been in for 12–18 months are recoverable. 24+ months is harder. The win-back sequence attacks both.',
        prompt: `I want a lapsed-customer win-back sequence.

My lapsed-customer counts (from Step 1):
- 12–18 months since last visit: [NUMBER]
- 18–24 months: [NUMBER]
- 24+ months: [NUMBER]

Please create:
1. **"We miss you" email (for 12–18 month lapsed)** — warm, personal, referencing their vehicle specifically if possible, offering a complimentary multi-point inspection
2. **"It's been a while" email (18–24 months)** — acknowledges the gap, offers something of real value (free inspection + honest feedback on what the car needs)
3. **"Checking in" postcard (24+ months)** — tangible, unexpected, softer ask
4. **A phone script** — for customers who were previously high-value and haven't been in; a warm "we're thinking of you, anything we can help with" call
5. **A "why they left" survey** — for customers who finally respond, 3 questions max, to learn what went wrong
6. **Tracking** — so we know which segments recover and which don't, and we stop wasting touches on truly-gone customers`,
      },
      {
        number: 6,
        title: 'Install a weekly retention dashboard',
        description: 'Retention is a leading indicator of next quarter’s revenue. A weekly 15-minute review catches drift.',
        prompt: `I want a weekly retention dashboard.

Please create:
1. **A weekly 15-minute review** — this week's reminders sent, response rate, new customers, at-risk customers due this week, lapsed-customer touches sent
2. **A monthly retention report** — retention rate trend, lapsed-customer recovery count, loyalty program enrollment, referral count (if tracked)
3. **A quarterly deep dive** — re-segment the base, identify churning segments, adjust touch plan
4. **Early warning signals** — if a Very Loyal customer misses their expected next visit by 30 days, they go on a personal call list for the manager
5. **A quarterly CSI-like survey** — 4 questions to top customers, to catch dissatisfaction before it becomes churn`,
      },
    ],
    expectations: {
      good: 'Most shops see a 10–20% retention improvement within 6 months of implementing the reminder flow + win-back sequence. That typically drives 15–25% more revenue because repeat customers have higher RO value and generate referrals.',
      ifBad: 'If retention isn\'t moving, the issue is often that customers don\'t remember your shop name. The seasonal touches exist specifically to solve recognition — don\'t skip them.',
      time: 'Initial setup: 4 hours. Weekly: 1 hour to run. Monthly: 2 hours to analyze. ROI visible at 90 days.',
    },
    downloadFile: null,
  },

  {
    slug: 'autorepair-parts-inventory',
    tier: 'pro',
    industry: 'auto-repair',
    title: 'Streamline Parts Ordering and Inventory Tracking',
    description:
      'Stop losing hours and margin to parts workflow chaos — supplier comparison, ordering automation, inventory tracking, and a shop-floor parts protocol.',
    difficulty: 'Intermediate',
    time: '~3 hours to set up, saves 5+ hours/week',
    tools: 'ChatGPT or Claude · Your supplier list · Recent parts invoices',
    stripeUrl: null,
    intro:
      'Parts ordering is a silent drain on most independent shops. Service advisors spend 30+ minutes per complex job searching for parts, comparing prices, waiting for callbacks, and chasing delivery ETAs. When a part arrives wrong or late, the bay is idle, the customer is frustrated, and the day is blown. This guide builds a disciplined parts system: supplier comparison and ranking, a standard ordering workflow, inventory tracking for fast-movers, and a shop-floor parts protocol that gets parts to the tech efficiently. The time savings compound — 5+ hours per week returned across the shop.',
    outcomes: [
      'A ranked supplier list with delivery time, price, quality, and return policy data',
      'A standardized parts ordering workflow that takes minutes, not 30+ minutes',
      'An inventory tracking system for fast-moving parts that eliminates "don’t have it, can’t do it"',
      'A shop-floor parts protocol so techs stop leaving bays to hunt parts',
      'A monthly supplier performance review',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current parts costs and supplier mix',
        description: 'Before optimizing, know where parts money and time goes.',
        dataNote: 'Pull 30 days of parts invoices across all suppliers. For each: supplier, part category, cost, order-to-arrival time, return policy, typical quality issues. Also log ~1 week of time spent per service advisor on parts tasks.',
        prompt: `I want to audit my parts costs, suppliers, and time spent.

My shop:
- Supplier mix: [LIST — e.g. NAPA, Worldpac, dealer, Amazon, Rock Auto, local independent]
- Monthly parts spend: $[AMOUNT]
- Typical markup: [%]
- Service advisor parts time per week: [ESTIMATE]

Here is my recent parts data:
[PASTE INVOICES SUMMARY — supplier, part type, cost, delivery time, quality notes]

Please analyze:
1. **Supplier share** — % of spend by supplier
2. **Cost comparison** — on parts we buy from multiple suppliers, who's cheapest
3. **Delivery time comparison** — who's fastest
4. **Quality flag** — any supplier with repeated quality issues
5. **Return policy comparison** — who makes returns easy, who makes it painful
6. **"Best use case" per supplier** — when to use each
7. **Consolidation opportunity** — could we cut our supplier count and improve terms
8. **The time drain** — where are the 30+ min jobs and what's eating the time`,
      },
      {
        number: 2,
        title: 'Rank suppliers and build a "which supplier for which job" matrix',
        description: 'Not every job needs the cheapest part. Build a matrix that gets the right part at the right cost and right speed.',
        prompt: `I want a supplier ranking and "which supplier when" matrix.

From my audit:
[PASTE SUMMARY FROM STEP 1]

Please create:
1. **Ranked supplier list** — overall ranking by value (balance of price, speed, quality, service)
2. **"Which supplier for which job"** matrix:
   - Fast-moving wear items (oil, filters, brake pads)
   - Common repair parts (calipers, alternators, starters, water pumps)
   - Specialty/diagnostic parts
   - Rare parts
   - Warranty work parts
   - Customer-supplied parts (do we allow, under what conditions)
3. **Go-to supplier by situation** — customer waiting / scheduled for tomorrow / out 3+ days / emergency breakdown
4. **Relationships to invest in** — which suppliers deserve the "one call and it shows up" relationship vs. which are commodity
5. **Consolidation opportunity** — can we reduce supplier count and get better pricing/priority`,
      },
      {
        number: 3,
        title: 'Build a standardized parts ordering workflow',
        description: 'Most 30-minute parts tasks are 30 minutes because there’s no standard. A workflow takes it to 5 minutes.',
        prompt: `I want a standardized parts ordering workflow for my service advisors.

My current workflow: [describe or "ad hoc"]
My shop management system: [NAME]

Please create:
1. **A 5-step ordering workflow** — from "tech says we need X" to "part is on the way"
2. **Information we capture every time** — part number, description, quantity, price, delivery commitment, supplier order number
3. **A time budget** — simple orders: under 5 min. Complex orders: 10–15 min max.
4. **An escalation rule** — if we can't find/price a part in 15 min, it goes to the manager
5. **A "verify before ordering" checklist** — VIN confirmed, customer approved, bay availability confirmed
6. **Delivery commitment documentation** — we capture the commitment in writing so we have recourse if the supplier fails
7. **A parts-ordering template** — standard fields, ready to paste into supplier portal or email`,
      },
      {
        number: 4,
        title: 'Install inventory tracking for fast-movers',
        description: 'Stocking the right 50–100 items eliminates most "don’t have it" frustration. Track the right metrics or you’ll over-stock or under-stock.',
        prompt: `I want an inventory tracking system for my fast-moving parts.

My shop handles approximately [NUMBER] jobs per week.
My current stocking approach: [describe — formal / informal / just oil and filters]

Please create:
1. **A recommended stocking list** — 30–50 common items every shop should stock based on typical volume (oil filters by brand popularity, air filters, cabin filters, wiper blades, common brake pads, common fluids, common bulbs, etc.)
2. **Target stocking quantities** — based on my weekly volume
3. **A reorder trigger rule** — when to reorder (e.g. "at 2 days' supply")
4. **A monthly inventory count protocol** — what we count, how often
5. **A "slow mover" removal rule** — if a stocked item hasn't moved in 90 days, consider discontinuing the stock
6. **Shrinkage tracking** — stocked items that disappeared without a sale; investigate
7. **An end-of-quarter review** — rebalance stock based on actual usage`,
      },
      {
        number: 5,
        title: 'Write the shop-floor parts protocol',
        description: 'Techs leaving bays to hunt parts is a productivity killer. A clear protocol keeps techs in bays and parts moving cleanly.',
        prompt: `I want a shop-floor parts protocol so techs stay in bays and parts flow efficiently.

My shop layout: [describe — dedicated parts area? Centralized delivery? Tech-direct delivery?]
My typical tech count: [NUMBER]

Please create:
1. **A "parts received" protocol** — who receives, where parts go, how they get to the right tech
2. **A "parts needed urgently" protocol** — tech flags it, service advisor drops everything
3. **A "wrong part arrived" protocol** — documentation, return, reorder, notify customer if delay
4. **A "customer waiting" prioritization** — parts for customers-in-shop jump the queue
5. **End-of-day parts reconciliation** — what got ordered, what arrived, what's expected tomorrow
6. **Parts room organization standard** — labeled, bin-sorted, clean, so techs find parts in seconds
7. **A core return process** — cores don't pile up; they go back daily`,
      },
      {
        number: 6,
        title: 'Install a monthly supplier performance review',
        description: 'Supplier performance drifts. A monthly review keeps them accountable.',
        prompt: `I want a monthly supplier performance review.

My top 5 suppliers: [LIST]

Please create:
1. **A supplier scorecard** — 5 metrics scored 1–5: on-time delivery, order accuracy, pricing competitiveness, quality, return policy responsiveness
2. **A monthly review meeting** — 30 min with office manager, review scorecards, note deteriorating suppliers
3. **A "trigger conversation" threshold** — when a supplier drops below X score, we have a supplier-rep conversation
4. **A quarterly supplier business review** — 1-hour meeting with top 2 suppliers' reps to negotiate pricing, commit volume, resolve recurring issues
5. **A "replacement" protocol** — when to replace a supplier, and who gets the replacement audition`,
      },
    ],
    expectations: {
      good: 'Most shops recover 5–10 hours/week of service advisor time within 30 days of implementing the workflow. Parts margin typically improves 2–5% from better supplier selection. Bay idle time from parts delays drops significantly.',
      ifBad: 'If the workflow isn’t sticking, the issue is usually that one advisor keeps their old habits. Pair-training and measurement for 30 days break the habit.',
      time: 'Initial setup: 3 hours. Weekly maintenance: 1 hour. Monthly reviews: 30 min. Time recovered per week: 5+ hours per advisor.',
    },
    downloadFile: null,
  },
]

export default autoRepairGuides
