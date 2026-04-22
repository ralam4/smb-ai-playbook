const carWashGuides = [
  {
    slug: 'carwash-membership-program',
    tier: 'pro',
    industry: 'car-wash',
    title: 'Build an Unlimited Wash Membership That Prints Recurring Revenue',
    description:
      'A complete membership program — pricing and tier design, financial modeling across adoption scenarios, full launch plan with staff scripts and signage, 90-day optimization cycle, and a retention system.',
    difficulty: 'Advanced',
    time: '~4 hours to design, 8-week launch',
    tools: 'ChatGPT or Claude · Your wash volume, pricing, and cost data',
    stripeUrl: null,
    intro:
      'Single-wash revenue is unpredictable and weather-dependent. A rainy week wipes out your month. An unlimited membership program creates predictable recurring revenue that shows up rain or shine — and the best-performing car washes now derive 60–80% of their revenue from memberships. But most programs are designed with guesswork: prices set by gut, tiers that don’t make sense, launches that fizzle. This guide builds a full membership program using your actual numbers: tier design anchored to your existing washes, financial modeling across best/base/worst scenarios, a full 8-week launch plan, a retention system that keeps churn below 5% monthly, and a quarterly optimization cycle.',
    outcomes: [
      'A 3-tier membership structure priced from your real cost data',
      'A financial model showing breakeven, heavy-user risk, and Year 1 revenue projection',
      'An 8-week launch plan with staff scripts, signage, email campaigns, and social',
      'A retention system targeting <5% monthly churn',
      'A quarterly optimization cycle to adjust pricing, tiers, and offers',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current revenue, volume, and costs',
        description: 'Membership pricing must be grounded in your actual unit economics — not industry averages.',
        dataNote: 'Collect: wash packages with prices, monthly wash volume by package, repeat customer patterns (if tracked via RFID/license-plate reader/loyalty), monthly fixed costs (rent, utilities, labor, chemicals, equipment payments), variable cost per wash (chemicals, water, equipment wear, labor if flex-serve or full-serve).',
        prompt: `I want to audit my car wash's current economics before designing a membership.

My location and format:
- Region: [CITY/REGION]
- Format: [express / flex-serve / full-service]
- Site count: [NUMBER]
- Bays or tunnels: [NUMBER]

My numbers:
- Wash packages and prices: [LIST — Basic $X, Deluxe $X, Premium $X, Ultimate $X]
- Monthly wash volume by package: [LIST]
- Estimated % of visits from repeat customers (weekly or biweekly): [ESTIMATE]
- Monthly fixed costs: $[AMOUNT] (rent $, utilities $, labor $, chemicals $, equipment $)
- Variable cost per wash: $[AMOUNT] (chemicals, water, equipment wear, direct labor)
- Current membership program status: [none / have one but want to redesign / competitor has one]

Please analyze:
1. **Current average revenue per wash** across all packages
2. **Current contribution margin per wash** (price - variable cost)
3. **Monthly contribution margin** total (and what % of fixed costs it covers)
4. **Wash-volume-to-breakeven** — how many washes/day we need to cover fixed costs
5. **Capacity headroom** — how many more washes we could physically run at peak
6. **Customer concentration** — rough % of volume coming from the top 20% of customers
7. **Membership opportunity** — given our margins, what membership tier prices would work
8. **Risk flags** — margins too thin to support membership, capacity constraints, or customer demographics that suggest low willingness to pay monthly`,
      },
      {
        number: 2,
        title: 'Design tiers grounded in your wash menu',
        description: 'The sweet spot is 2–3 tiers. Each should anchor to a real wash package so customers understand what they’re getting.',
        prompt: `I want to design membership tiers grounded in my existing wash menu.

My wash menu and prices: [PASTE FROM STEP 1]
My goal: [maximize total monthly recurring revenue / maximize profit / grow volume and fill capacity]
My capacity status: [excess capacity most of the time / tight on capacity / only tight on weekends]

Please design:
1. **3 tiers** — Basic Unlimited, Plus Unlimited, Premium Unlimited (or similar)
2. **For each tier**:
   - Anchor wash package
   - Monthly price
   - What's included (wash type, add-ons, benefits)
   - What's excluded
   - Target customer profile (light user vs. heavy user)
3. **Breakeven wash frequency** per tier — at what frequency am I losing money
4. **Recommended sign-up incentive** — first month free, or 50% off first month, or waived enrollment fee
5. **An anti-abuse provision** — language that prevents someone from gaming the system (e.g., washing 3x daily to wear equipment)
6. **Upgrade path** — how a Basic member naturally upgrades to Plus over time
7. **Comparison table** — side-by-side of the 3 tiers for the pay station or website`,
      },
      {
        number: 3,
        title: 'Build the financial model',
        description: 'Model the best, base, and worst cases. If you can’t survive the worst case, redesign.',
        prompt: `I need a financial model showing my membership program under different scenarios.

My tiers and pricing: [FROM STEP 2]
My variable cost per wash: $[AMOUNT]
My capacity ceiling: [NUMBER] washes per day

Please model:
1. **Base case** — assume 10% of current monthly customers convert, 60% choose middle tier, average usage is 4 washes/month
2. **Best case** — 20% convert, 70% middle or top tier, average usage 5 washes/month
3. **Worst case** — 10% convert but average usage is 12 washes/month (heavy users), lots of chemical/water cost
4. **Heavy-user simulation** — if even 10% of members wash daily (30+ visits/month), what's my profit margin on them
5. **Year 1 projection** — 12-month MRR curve assuming X new members/month and Y% monthly churn
6. **Breakeven for the program** — how many members do I need to make it worth doing
7. **When pricing needs to change** — triggers that would force a tier redesign (churn above %, heavy-user % above %, margin below %)
8. **Risk mitigations** — tier design changes, anti-abuse provisions, pricing adjustments to protect against each failure mode`,
      },
      {
        number: 4,
        title: 'Write the 8-week launch plan',
        description: 'Soft launch, official launch, press week, post-launch — a phased rollout gets more signups than a big-bang launch.',
        prompt: `I want an 8-week launch plan for my membership program.

My location type: [single-site / multi-site]
My audience channels: [existing customer list, social media, signage, local advertising, radio]
My launch goal: [X members signed up by week 8]

Please create:
1. **Week -2 to -1 (prep)** — install RFID/license-plate reader if needed, train staff, test software, prepare materials
2. **Week 1 (soft launch)** — friends & family, early adopters, collect feedback and iterate
3. **Week 2 (staff launch)** — full training, dry runs, objection handling practice
4. **Week 3–4 (official launch)** — signage, website update, email to existing list, press release
5. **Week 5–6 (peak promotion)** — social campaign, local advertising, radio if budget allows
6. **Week 7–8 (push to goal)** — urgency messaging around launch pricing ending, last-chance offers

For each phase, include:
- Specific deliverables (copy, signage, scripts)
- Staff actions
- Success metrics

Also deliver:
1. **Customer announcement email** to existing list — value-first, not discount-first
2. **Entrance signage copy** — 3 sign versions emphasizing savings, convenience, unlimited
3. **Staff script for upsell at pay station** — including "let me think about it" and "it costs more than I wash" objections
4. **3-post social media sequence** — teaser, launch, last-chance
5. **90-day review checklist** — sign-ups, tier mix, churn rate, average washes per member, revenue per member`,
      },
      {
        number: 5,
        title: 'Build the retention system',
        description: 'Acquiring members is half the battle. Keeping them below 5% monthly churn is the other half.',
        prompt: `I want a retention system to keep monthly churn below 5%.

My tier mix: [FROM STEP 2]
My payment processor: [NAME]
My software: [NAME]

Please create:
1. **Declined card recovery** — sequence: retry, email, SMS, phone, offer to update card (most "churn" is actually payment failure)
2. **Payment failure automation** — grace period, communication, tiered re-attempts, final suspension
3. **Cancellation flow** — when a member tries to cancel, offer pause/downgrade/retention-offer before processing
4. **Re-activation sequence** — cancelled members get a 30/60/90-day recovery email
5. **Usage-drop alert** — if a weekly member hasn't visited in 21 days, outreach (often signals pre-cancellation)
6. **Anniversary message** — 12-month members get recognition (not discount, just acknowledgment)
7. **Tier-down save** — when a member wants to cancel, offer a tier-down instead
8. **Tracking dashboard** — weekly churn, payment-failure recovery rate, cancellation reason categorization`,
      },
      {
        number: 6,
        title: 'Install a quarterly optimization cycle',
        description: 'Membership programs decay without tuning. A quarterly cycle keeps performance improving.',
        prompt: `I want a quarterly optimization ritual for my membership program.

Please create:
1. **A quarterly review dashboard** — MRR, member count, tier mix, churn rate, average washes per member, contribution margin per member, heavy-user %
2. **4 quarterly questions** — Is pricing still right? Are tiers still aligned with customer behavior? Is churn trending up/down? Is capacity constraining growth?
3. **Pricing review triggers** — when to consider a price change (inflation, capacity, competitor move, margin drift)
4. **Tier adjustment triggers** — when a tier underperforms (low conversion, high churn, wrong mix)
5. **Competitive monitoring** — quarterly check on competitor pricing and program design
6. **Year-1 retrospective** — after 12 months, the big questions to answer before year 2`,
      },
    ],
    expectations: {
      good: 'A well-designed program typically converts 8–15% of regular customers in the first 90 days and reaches 25–40% conversion within 12 months. Weather-related revenue swings drop dramatically as membership share of revenue grows.',
      ifBad: 'If signups are slow in the first 30 days, the issue is usually the staff pitch or the sign-up incentive, not the tier design. Run the launch plan tight; don’t lower prices in month 1.',
      time: 'Design: 4 hours. Launch: 8 weeks of calendar time, ~10 hours of your time per week during peak. Payback: most programs hit MRR breakeven by month 4–6.',
    },
    downloadFile: null,
  },

  {
    slug: 'carwash-capacity-leaks',
    tier: 'pro',
    industry: 'car-wash',
    title: 'Find Why Your Wash Is Half Empty and Fix It',
    description:
      'Transaction-data analysis to find dead zones, diagnose the root cause (awareness, pricing, staffing, or mix), and build targeted interventions — plus a 30-day test plan for the biggest opportunity.',
    difficulty: 'Intermediate',
    time: '~2 hours for audit, 4-week test plan',
    tools: 'ChatGPT or Claude · Your POS/transaction data',
    stripeUrl: null,
    intro:
      'Every car wash has dead zones. Tuesday mornings, Thursday afternoons, between rain events. The operator feels them but can’t act on them because "Tuesday is slow" isn’t specific enough to fix. This guide turns gut feelings into a precise map of where revenue is leaking, diagnoses each leak (is it awareness, pricing, staffing, or mix?), and builds a 30-day targeted test plan for your biggest opportunity. The compounding improvement of filling even 20% of your dead zones typically drives 5–10% annual revenue growth.',
    outcomes: [
      'A ranked list of your slowest hours, days, and customer segments',
      'A diagnostic separating fixable leaks from structural ones',
      'A 30-day targeted test for your single biggest opportunity',
      'A repeatable monthly dead-zone review',
    ],
    steps: [
      {
        number: 1,
        title: 'Pull and prepare 90 days of transaction data',
        description: 'Export transaction-level data from your POS. You want: date, time, wash package, transaction amount, membership-or-retail, weather if trackable.',
        dataNote: 'If you have a membership program, separate member traffic from retail traffic — they behave very differently. If you don’t have weather data, note big rain events from memory.',
      },
      {
        number: 2,
        title: 'Find the dead zones',
        description: 'Let AI slice the data every way it can. The patterns are usually specific enough to act on.',
        prompt: `I want to find the dead zones in my car wash.

My site:
- Format: [express / flex / full-serve]
- Hours: [e.g. 7am–9pm, 7 days]
- Site capacity (washes/hour): [NUMBER]
- Weekly volume this period: [NUMBER]

Here is my 90-day transaction data:
[PASTE OR SUMMARIZE]

Please analyze:
1. **Washes per hour** by day of week — heatmap equivalent, flag the bottom 20%
2. **Revenue per hour** by day of week — same cut
3. **Package mix** by time — are we selling only basic washes during slow hours?
4. **Member vs retail split** by time — who actually comes in during slow times?
5. **Weather correlation** — how much of the slowness is weather-driven (actionable) vs. habitual (structural)
6. **Competitor spillover signals** — peak hours when we're full (customers going elsewhere)
7. **Top 3 dead zones** ranked by revenue opportunity (not just slowness — a 40% slow Tuesday morning with no volume matters less than a 15% slow Thursday afternoon at scale)
8. **A "below breakeven" flag** — hours where revenue is below staff cost`,
      },
      {
        number: 3,
        title: 'Diagnose each leak',
        description: 'Not all dead zones are fixable. Some are structural. The diagnostic separates them.',
        prompt: `For each of my top 3 dead zones, help me diagnose whether it's fixable and if so, why.

My dead zones:
[PASTE FROM STEP 2]

For each, please:
1. **Classify** — structural (market behavior, can't change) vs. fixable (marketing, operations, pricing, mix, awareness)
2. **If fixable, root cause** — awareness (people don't know we're open/available), pricing (not enough value at this hour), staffing (wait times scaring customers off), mix (customers prefer higher-tier washes and we don't promote them), positioning (seen as a weekend-only service)
3. **Test ideas** — 2–3 specific interventions to try, ranked by ease
4. **Revenue opportunity** — rough dollar range if the intervention works
5. **Effort required** — time, money, signage, staff training
6. **Risk** — any downside (cannibalizing full-price hours, for example)
7. **Ranking** — which to attack first based on ROI and ease`,
      },
      {
        number: 4,
        title: 'Build a 30-day test plan for your #1 opportunity',
        description: 'Don’t try to fix everything at once. Run one focused test, learn, then move.',
        prompt: `I want a 30-day test plan for my #1 dead zone.

My #1 dead zone: [PASTE]
Root cause (from Step 3): [PASTE]
Test idea I want to try: [DESCRIBE]
My promotional budget: [AMOUNT or "no paid spend, just organic"]
My metrics access: [POS reporting capability]

Please create:
1. **Weekly milestones** — what we do, what we measure each week
2. **Specific marketing/signage/promo** — exact copy for signs, social, in-lane displays, or email
3. **Staff briefing** — what they need to know and say
4. **Daily metric** — one number that tells us if it's working
5. **Decision rules** — after week 2, what data would make me double down, tweak, or kill
6. **Post-test capture** — what to document so we learn from this test whether it worked or not`,
      },
      {
        number: 5,
        title: 'Install a monthly dead-zone review',
        description: 'Dead zones shift. A monthly review catches new ones before they calcify.',
        prompt: `I want a monthly 45-minute dead-zone review.

Please create:
1. **Monthly data pull** — which cuts to refresh (by day, hour, package, member vs retail)
2. **5-minute scan** — quick flags of changes vs. last month
3. **10-minute diagnostic** — pick 1 new dead zone or worsening one
4. **20-minute plan** — next test or intervention to try
5. **10-minute follow-up** — on last month's test; what worked, what didn't
6. **Running list** — log of interventions tried, result, whether we kept or killed them`,
      },
    ],
    expectations: {
      good: 'Most sites find 1–2 genuinely fixable dead zones. Filling 20–40% of the dead-zone gap typically delivers 3–8% annual revenue lift without adding equipment.',
      ifBad: 'If every dead zone looks structural, the move is "what else could we sell during these hours" rather than "how do we get more people here."',
      time: 'Initial audit: 2 hours. Test plan: 30 days. Monthly review: 45 min.',
    },
    downloadFile: null,
  },

  {
    slug: 'carwash-weather-staffing',
    tier: 'pro',
    industry: 'car-wash',
    title: 'Build a Weather-Smart Demand and Staffing Plan',
    description:
      'Turn weather from an unpredictable disruptor into a planned variable — demand forecasting, staffing schedules that match actual volume, dynamic chemical and labor cost control, and a rain-week revenue protection playbook.',
    difficulty: 'Advanced',
    time: '~3 hours to set up, 20 min/week ongoing',
    tools: 'ChatGPT or Claude · Your volume data · 7-day forecast source',
    stripeUrl: null,
    intro:
      'Weather is the single largest uncontrollable variable in a car wash business. A rainy week can cost 20–40% of monthly revenue, and over-staffing in the rain compounds the pain. Most operators staff for an average week and absorb the volatility. The operators who plan for weather systematically — forecasting demand, adjusting staff schedules, controlling chemical costs on slow days, and protecting revenue with targeted campaigns — extract measurable margin improvement. This guide builds that system: volume-to-weather correlation, staffing rules that adjust with the forecast, chemical and water-usage control, and a rain-week revenue protection playbook.',
    outcomes: [
      'A weather-volume correlation model for your specific site',
      'A staffing schedule that flexes with the 7-day forecast',
      'Chemical, water, and supply usage guidelines that match actual volume',
      'A rain-week revenue protection campaign ready to deploy',
      'A weekly weather-planning ritual',
    ],
    steps: [
      {
        number: 1,
        title: 'Build a weather-volume correlation',
        description: 'Quantify what different weather patterns actually do to your volume so you can plan.',
        dataNote: 'Pull 6–12 months of daily volume. Note for each day: precipitation, high temperature, wind, humidity, and any notable weather event (snow, heat wave, hurricane). Use a free weather history source (e.g., Weather Underground historical data for your zip code).',
        prompt: `I want to build a weather-volume model for my car wash.

My site: [location, format, capacity]
Typical daily volume: [AVERAGE NUMBER, range LOW–HIGH]

Here is 6–12 months of daily volume and weather data:
[PASTE OR SUMMARIZE]

Please analyze:
1. **Rain-day impact** — average % volume drop on a rain day, with a light/moderate/heavy breakdown
2. **Rain-hangover effect** — 1–3 days AFTER a rain event, volume usually spikes; quantify
3. **Temperature correlation** — optimal range, cold-weather drop-off, heat-wave impact
4. **Wind/dust effect** — in dusty regions, strong wind post-rain drives spikes
5. **Snow impact** (if applicable) — immediate drop, but recovery tends to be strong
6. **Seasonality overlay** — how seasons interact with weather patterns
7. **Predictive model** — a simple rule-of-thumb for translating tomorrow's forecast into expected volume`,
      },
      {
        number: 2,
        title: 'Build a 7-day rolling staffing plan',
        description: 'Your schedule should respond to the forecast, not reflect last month’s averages.',
        prompt: `I want a staffing plan that flexes with the 7-day weather forecast.

My format: [express / flex / full-serve]
Typical staffing: [NUMBER by role — attendants, cashiers, detailers]
Typical daily volume: [AVERAGE]
Staffing flex capability: [how much can I flex — call-off, call-in, split shifts?]

Please create:
1. **A daily staffing calculator** — inputs: forecast volume, day of week, expected weather; outputs: staffing by role
2. **Four staffing tiers** — Lean (rainy/slow), Standard, Busy, Peak (hangover/peak season)
3. **A scheduling rhythm** — post the initial weekly schedule on day -7 based on forecast, update on day -3, final adjustments day-of by 7am
4. **Call-off/call-in protocols** — fair rotation, fairness to staff, compliance with labor law
5. **A "storm week" plan** — 3+ consecutive rainy days; how to maintain morale and avoid heavy overtime in the hangover
6. **Cross-training requirements** — which roles need to flex (detailer helps load on busy days, attendant helps detail on slow days)
7. **Budget guardrails** — weekly labor-cost target as % of revenue`,
      },
      {
        number: 3,
        title: 'Install chemical and supply usage guidelines',
        description: 'Chemical and water usage is proportional to volume. Over-prep on slow days is pure waste.',
        prompt: `I want a chemical and supply usage guideline tied to forecast volume.

My typical chemical/supply costs: $[AMOUNT]/month
My chemical prep/mixing workflow: [describe]
My water cost: [if metered, approximate]

Please create:
1. **Daily pre-open prep** tied to forecast — how much chemical to mix, batch size, when to pause mixing until volume confirms
2. **Dilution settings** — any equipment tuning that can flex with volume
3. **Rain-day protocols** — scale back prep, save perishable chemicals
4. **Heavy-day surge protocol** — when and how to ramp up prep
5. **End-of-day reconciliation** — unused chemical disposition, overmix avoidance
6. **Monthly usage benchmark** — target chemical-cost-per-wash; flag weeks that exceed it
7. **A supplier communication plan** — so slower weeks don't lead to over-delivery`,
      },
      {
        number: 4,
        title: 'Build a rain-week revenue protection playbook',
        description: 'You can’t make it stop raining. But you can protect 30–50% of the lost revenue with a targeted campaign.',
        prompt: `I want a rain-week revenue protection playbook.

My member count (if any): [NUMBER]
My email/SMS marketing capability: [what tool, approximate list size]
My typical rain-week revenue impact: [%]

Please create:
1. **"Clear skies next week"** campaign — triggered when the 7-day forecast clears after 2+ rain days; member prompt to come in for hangover wash
2. **"Rain-proof wash" membership push** — soft sell on membership during rainy week (when a single-wash customer is most irritated by weather)
3. **"Pre-storm special"** — day-before-storm campaign encouraging customers to wash before rain (some stores convert this to volume, others can't)
4. **SMS/email copy** for each scenario, rain-aware and respectful (don't patronize)
5. **Staff scripts** — what attendants say during rainy week to customers who do come in
6. **Social content** — 2–3 posts that are rain-aware but keep the business top of mind
7. **A "don't do this" list** — discount messaging that cheapens the brand, overly aggressive promos, anything that trains customers to wait for rain week`,
      },
      {
        number: 5,
        title: 'Install a weekly weather-planning ritual',
        description: 'Every Friday, look at next week’s forecast and make 20 minutes of adjustments.',
        prompt: `I want a weekly 20-minute weather-planning ritual.

Please create:
1. **Every Friday** — pull 7-day forecast, compare to staffing, adjust schedule, pre-stage chemical order, queue any needed email/SMS
2. **Every Monday** — review last week's weather vs. forecast vs. actual volume; log lessons
3. **Monthly** — re-check the weather-volume correlation from Step 1 (models drift)
4. **Seasonal** — quarterly review of seasonality patterns, adjust staffing baseline
5. **A weekly dashboard** — forecast accuracy, staffing efficiency (labor % of revenue), chemical cost per wash
6. **An escalation trigger** — when we hit 3+ consecutive forecast misses, re-run the weather model`,
      },
    ],
    expectations: {
      good: 'Operators who implement the staffing flex see 8–15% labor cost reduction in rainy weeks without hurting customer experience. Chemical waste typically drops 10–20%. The rain-protection campaigns recover 20–40% of rain-day lost revenue.',
      ifBad: 'If staff pushback on schedule volatility becomes severe, consider guaranteed-hour minimums combined with peak-day bonuses — protects staff while preserving flex.',
      time: 'Initial setup: 3 hours. Weekly ritual: 20 min. Payback visible within 30–60 days.',
    },
    downloadFile: null,
  },

  {
    slug: 'carwash-upsell-ticket',
    tier: 'pro',
    industry: 'car-wash',
    title: 'Design an Upsell System That Increases Average Ticket',
    description:
      'Move customers up the menu from base wash to premium — menu engineering, pay-station UX, staff upsell scripts, and targeted promos for light-wash buyers. Typically adds $1–$3 to average ticket.',
    difficulty: 'Intermediate',
    time: '~2 hours to design, 30-day rollout',
    tools: 'ChatGPT or Claude · Your wash menu and mix data',
    stripeUrl: null,
    intro:
      'Most car wash customers default to the cheapest wash that gets the job done. Moving even 20% of your Basic customers to Deluxe adds $1–$3 to average ticket — and when you do a thousand washes a week, that’s $50K–$150K in annual revenue with zero added cost. The math works because you’re already running the tunnel; the upsell is incremental margin. This guide builds a complete upsell system: menu engineering that makes the "right" wash the obvious choice, pay-station UX changes, staff scripts that increase attach rate, and targeted promotions for specific customer segments.',
    outcomes: [
      'A re-engineered menu that makes the Deluxe/Premium wash the default pick',
      'Pay-station copy and imagery that drives upgrade',
      'Staff upsell scripts proven to increase attach rate',
      'A targeted campaign for Basic-only customers to try a premium wash',
      'A monthly menu performance review',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current menu mix and margin',
        description: 'Before redesigning the menu, understand which tier actually produces the most contribution margin.',
        dataNote: 'For each wash package: price, variable cost, monthly volume, and % of total volume.',
        prompt: `I want to audit my wash menu and find upsell opportunities.

My wash packages: [LIST — name, price, variable cost, monthly volume, %]
My monthly wash volume: [TOTAL]
My average ticket: $[AMOUNT]

Please analyze:
1. **Contribution margin per wash** by package
2. **Monthly contribution dollars** by package (margin × volume)
3. **Current menu mix** vs. ideal — where would I want mix to be
4. **Upsell opportunity** — if 20% of Basic customers moved to Deluxe, what's the revenue impact
5. **Price gaps** — are any jumps between tiers too big (discouraging upsell) or too small (no differentiation)
6. **The "obvious middle"** — which tier should be the default choice if menu is engineered well
7. **Weak package flag** — any tier that has low volume and low margin; candidate for discontinuation or redesign`,
      },
      {
        number: 2,
        title: 'Re-engineer the menu',
        description: 'Menu engineering makes one tier the obvious pick. Everything else supports that choice.',
        prompt: `I want to re-engineer my menu to make the middle tier the obvious default choice.

My current tiers: [FROM STEP 1]
My desired "default" tier (usually Deluxe or Premium): [TIER]

Please design:
1. **New 4-tier menu** — Basic, Deluxe (default), Premium, Ultimate. Price spread should nudge customers toward Deluxe
2. **Price architecture** — specific price points using psychological pricing (e.g. $10/$16/$22/$28 vs $10/$14/$22/$28 — the second has a bigger gap to Deluxe)
3. **Feature differentiation** — each tier's included services listed in a way that makes skipping Deluxe feel like missing out
4. **A "value flag"** — e.g., "Most Popular" on Deluxe
5. **Simplification targets** — cutting any underperforming tiers or services
6. **Menu layout recommendations** — horizontal vs. vertical, order (highest on left or right), color/visual hierarchy`,
      },
      {
        number: 3,
        title: 'Redesign pay-station UX',
        description: 'The pay station is where the upsell actually happens. Small copy and layout changes have outsized impact.',
        prompt: `I want to redesign my pay-station UX to drive upsell.

My pay-station format: [touchscreen kiosk / membership-first reader / attended]
My current default: [describe what appears first]

Please design:
1. **Opening screen** — membership prompt first (if applicable), then package selection
2. **Package screen layout** — order of tiers, visual hierarchy, "Most Popular" callout
3. **Upsell nudges** — smart prompts ("add tire shine for $2?", "upgrade for $3?")
4. **Price presentation** — show full price, emphasize savings on bundles
5. **Confirmation screen** — allow last-second upgrade ("add premium wax for $3?")
6. **A/B test ideas** — specific changes to try first, measurable outcomes
7. **Copy library** — 10 one-liners for different screens, tuned to upsell without feeling pushy`,
      },
      {
        number: 4,
        title: 'Write staff upsell scripts',
        description: 'Attended pay stations and greeter/stacker positions are the highest-leverage upsell moments.',
        prompt: `I want scripts for staff to drive upsell at the pay station and in-lane.

My format: [express / flex / full-serve]
My staff roles that touch the upsell: [cashier / attendant / detailer]

Please create:
1. **Cashier/attendant script** — 10-second opening: greeting, recommend middle tier, overcome "just the basic" objection
2. **"Today only" angle** — leverage upgrade for something fresh (ceramic today, rain protectant, etc.)
3. **Membership pivot** — if customer upgrades to Premium once, the pitch for membership
4. **Handling "no"** — graceful recovery that doesn't damage the relationship
5. **Post-sale reinforcement** — as the customer enters the tunnel, language that makes them feel good about the upgrade
6. **Staff incentive tie-in** — how to reward upsell success without creating pressure tactics`,
      },
      {
        number: 5,
        title: 'Launch a targeted campaign for Basic-only customers',
        description: 'Customers who always buy Basic are a specific segment. Give them a reason to try Premium.',
        prompt: `I want a campaign targeting customers who only buy Basic wash.

My customer identification: [RFID / license plate / loyalty card / none]
My basic-only customer count: [NUMBER if known]

Please design:
1. **Segmentation criteria** — how to identify "Basic only" customers
2. **Trial offer** — one-time Deluxe upgrade at Basic price ("see the difference")
3. **Communication** — SMS/email copy; short, specific, single CTA
4. **Attribution** — how we track who came in from this campaign
5. **Follow-up** — post-visit message confirming the upgrade and encouraging another
6. **Conversion goal** — % of targeted customers we expect to upgrade permanently
7. **A "why Deluxe" in-lane signage** — 2–3 sign copy options to reinforce the upgrade during the wash`,
      },
      {
        number: 6,
        title: 'Install a monthly menu performance review',
        description: 'Menu performance drifts. A monthly review keeps the mix moving the right way.',
        prompt: `I want a monthly 30-minute menu performance review.

Please create:
1. **Monthly dashboard** — mix by tier, average ticket, contribution margin trend, upgrade rate, upsell attach rate
2. **Trigger rules** — when to adjust prices, tier features, or staff incentives
3. **Staff coaching** — who needs a conversation based on their upsell numbers
4. **Quarterly deep dive** — is the menu structure still right; should tiers be added/removed/renamed
5. **Seasonal refresh** — add-ons that rotate seasonally (rain repellent in summer, salt neutralizer in winter)`,
      },
    ],
    expectations: {
      good: 'Most sites see $1–$3 average ticket increase within 60 days of implementing the full system. That typically represents 5–15% revenue lift at zero added unit cost.',
      ifBad: 'If staff upsell attach rate isn’t moving, the problem is almost always training + practice, not the script. Weekly 10-min practice sessions until the script becomes natural.',
      time: 'Design: 2 hours. Rollout: 30 days. Monthly review: 30 min. Payback in first month.',
    },
    downloadFile: null,
  },
]

export default carWashGuides
