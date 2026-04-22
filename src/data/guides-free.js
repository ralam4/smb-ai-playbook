const freeGuides = [
  {
    slug: 'fill-empty-slots',
    tier: 'free',
    title: 'Fill Your Empty Appointment Slots',
    description:
      'Analyze your booking data to find the slow hours, identify clients who’ve drifted away, and draft re-engagement messages that actually bring them back.',
    difficulty: 'Beginner',
    time: '~20 min',
    tools: 'ChatGPT or Claude · Your booking or appointment data',
    intro:
      'Empty appointment slots during slow hours are one of the biggest margin leaks in any appointment-based business. Most owners know which days feel slow — but not exactly which slots, which staff, or which clients are most likely to rebook. This guide walks you through using AI to analyze your booking data, identify your dead zones, and draft targeted messages to fill them. It works for barbershops, salons, spas, medical practices, dental offices, fitness studios, music teachers, tutors, photographers, and any business that runs on a calendar.',
    outcomes: [
      'A clear breakdown of your slowest booking slots by day and time',
      'A list of clients who haven’t returned in 60+ days, segmented by how recently they were active',
      'A ready-to-send re-engagement message you can text, email, or post',
    ],
    steps: [
      {
        number: 1,
        title: 'Get your data out of your booking tool',
        description:
          'Most scheduling platforms (Square Appointments, Calendly, Acuity, Booksy, Vagaro, Mindbody, Jane, SimplePractice, etc.) let you export appointment history as a CSV. Pull the last 90 days. You want: date, time, staff name (if applicable), service type, and client name or ID.',
        dataNote:
          'You don’t need to clean the file. Paste the relevant columns as-is. If your tool doesn’t allow export, screenshot your busiest and slowest weeks side by side — AI can work with that too. If you only have paper records, list a typical busy week and a typical slow week manually.',
      },
      {
        number: 2,
        title: 'Find the slots that stay empty',
        description:
          'Paste your data into ChatGPT or Claude and use the prompt below. You’re looking for patterns — specific days, times, or staff members with consistently low utilization.',
        prompt: `I want to analyze my appointment data for the last 90 days and find my slowest booking slots.

My business type: [e.g. barbershop, medical practice, yoga studio, tutoring service]
My typical operating hours: [e.g. Tue–Sat 9am–7pm]
Number of staff or providers: [NUMBER]

Here is my data:
[PASTE YOUR CSV DATA OR MANUALLY LIST YOUR WEEKLY SCHEDULE HERE]

Please help me:
1. Identify which days of the week have the lowest booking volume
2. Identify which time slots (morning, midday, afternoon, evening) are consistently underbooked
3. Flag any staff members or providers who have significantly more empty slots than others
4. Calculate my overall utilization rate (booked hours ÷ available hours) and flag the worst-performing days
5. Summarize the top 2–3 patterns I should pay attention to`,
      },
      {
        number: 3,
        title: 'Build your re-engagement list',
        description:
          'Now use the same data to find clients who visited once or twice but haven’t returned in 60+ days. These are your warmest leads — they’ve already chosen you once.',
        prompt: `Using the same appointment data, please:
1. Identify clients who visited at least once but have not had an appointment in the last 60 days
2. Group them by how recently they last visited (60–90 days ago, 90–120 days ago, 120+ days ago)
3. For each group, note how many visits they had total before going quiet
4. Flag any clients who had 3+ visits and then disappeared — these are the highest-value re-engagement targets

I want to prioritize who to reach out to first.`,
      },
      {
        number: 4,
        title: 'Write the message',
        description:
          'Pick the segment you want to target first and generate a message you can send via text, email, or DM. Keep it personal, not promotional.',
        prompt: `I want to reach out to clients who haven't visited my business in 60–90 days.

My business is called [BUSINESS NAME] and I'm located in [CITY].
My most popular service is [SERVICE — e.g. "a fresh haircut", "a 60-minute massage", "a private lesson"].
I'm currently [open / running a slow week / have morning availability / offering a small incentive].

Please write:
1. A short text message (under 160 characters) I can send directly
2. A slightly longer email or DM version (2–3 sentences)
3. A subject line if I wanted to send this as an email
4. A variation tone-matched for repeat clients vs. one-time visitors

Keep it warm and personal, not salesy. The goal is a conversation, not a pitch.`,
      },
    ],
    expectations: {
      good: 'Most businesses discover 1–2 specific time slots (e.g. "Tuesday mornings") that are dragging their overall utilization down. Even reactivating 5–10 clients from your dormant list typically covers months of whatever this analysis cost you in time.',
      ifBad:
        'If your data is spotty or you’re new, start with a single week. List every appointment you had and every slot that was empty. Even a 7-day snapshot reveals patterns.',
      time: 'The re-engagement message (Step 4) is the highest-leverage output. One text to 20 dormant clients, sent on a slow Tuesday morning, will usually outperform a month of new-client marketing.',
    },
    downloadFile: null,
    problems: ['get-customers'],
  },

  {
    slug: 'google-reviews',
    tier: 'free',
    title: 'Get More Google Reviews Without Being Annoying',
    description:
      'Build a simple review generation system that runs on autopilot and brings in new customers — without violating Google’s policies.',
    difficulty: 'Beginner',
    time: '~20 min',
    tools: 'ChatGPT or Claude · Your Google Business Profile',
    intro:
      'Google reviews are the single most important trust signal for local businesses. Customers check them before they call, before they book, before they walk in. But most business owners either don’t ask for reviews, or ask awkwardly once and give up. This guide helps you build a simple, repeatable system that generates reviews consistently — without being pushy or violating Google’s policies.',
    outcomes: [
      'A clear review strategy with a realistic monthly target',
      'Ready-to-send review request messages (text, email, and in-person scripts)',
      'Professional response templates for every type of review',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current review situation',
        description:
          'Before building a system, understand where you stand. How do your reviews compare to competitors? How many do you need to catch up or pull ahead?',
        dataNote:
          'Check your Google Business Profile for your current review count and average rating. Search for 2–3 direct competitors and note their numbers too.',
        prompt: `I run a [BUSINESS TYPE] called [BUSINESS NAME] in [CITY].
I currently have [NUMBER] Google reviews with an average rating of [RATING].
My closest competitors have approximately [COMPETITOR REVIEW COUNTS].

Please help me:
1. Assess how my review count and rating compare to competitors
2. Calculate how many new reviews I'd need per month to match or overtake the top competitor within 6 months
3. Identify which types of reviews matter most for my business type
4. Suggest a realistic monthly review target based on my customer volume of approximately [NUMBER] customers per month`,
      },
      {
        number: 2,
        title: 'Build your review request system',
        description:
          'The key to getting reviews is making it easy and asking at the right moment — when the customer is happiest. This prompt creates messages for every channel.',
        prompt: `I want to create a simple system for asking customers for Google reviews.

My business type: [BUSINESS TYPE]
How customers interact with me: [in-person / online / phone / mix]
My customer touchpoints are: [e.g. "after their appointment", "after delivery", "at checkout"]
My team size: [just me / small team of X]

Please create:
1. A review request message I can send via text (under 160 characters) with my Google review link placeholder
2. A slightly longer email version
3. A verbal script I (or my staff) can use in person at the right moment
4. A follow-up message for customers who didn't respond to the first ask (send 3–5 days later)

Rules: Never offer incentives for reviews (violates Google policy). Keep it genuine.`,
      },
      {
        number: 3,
        title: 'Write responses for every type of review',
        description:
          'Responding to reviews matters as much as getting them. It shows potential customers you care, and it can turn a negative experience into a recovery story.',
        prompt: `I need response templates for my Google reviews.

My business name: [NAME]
My brand voice is: [warm / professional / casual / funny / etc.]

Please write response templates for:
1. A 5-star review with specific praise
2. A 5-star review that's generic ("Great place!")
3. A 4-star review with mild criticism
4. A 3-star review with constructive feedback
5. A 1–2 star review with a legitimate complaint
6. A 1-star review that seems fake or unfair

For each: keep it under 3 sentences, mention the reviewer by name placeholder, and show I'm a real person — not copy-pasting.`,
      },
      {
        number: 4,
        title: 'Set up your monthly routine',
        description:
          'Reviews are a habit, not a campaign. This prompt creates a simple weekly routine so you never fall behind.',
        prompt: `I want a simple monthly routine to keep reviews coming in consistently.

My monthly customer volume: approximately [NUMBER]
My current review request method: [describe or "none"]
I have [TIME AVAILABLE] per week to spend on this.

Please create:
1. A weekly 15-minute checklist for review management
2. A monthly review report template I can fill in to track progress
3. 3 creative ideas for naturally encouraging reviews that fit my business type
4. A plan for what to do when I hit a dry spell (no new reviews in 2+ weeks)`,
      },
    ],
    expectations: {
      good: 'Most businesses see a significant uptick in reviews within the first 2 weeks of consistently asking. The response templates save hours of staring at a blank reply box.',
      ifBad: 'If customers aren’t responding to review requests, try changing the timing — ask closer to the moment of delight, not hours later.',
      time: 'The weekly routine takes about 15 minutes. Most of that is responding to new reviews, which gets faster once you have templates.',
    },
    downloadFile: null,
    problems: ['get-customers'],
  },

  {
    slug: 'write-clear-quotes',
    tier: 'free',
    title: 'Write Quotes Customers Actually Understand',
    description:
      'Turn confusing estimates into plain-English quotes that build trust, reduce declined jobs, and make customers feel informed instead of pitched.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude · Your last 10 customer quotes',
    intro:
      'Customers decline work they don’t understand. When a quote reads like an industry document — parts codes, acronyms, jargon — the customer defaults to "no" because saying yes feels risky. Plain-English quotes that explain what, why, and what happens if it’s not done convert dramatically better. This guide walks you through building quote templates for your most common jobs and a follow-up system for work that gets declined. Works for auto repair, HVAC, plumbing, electrical, landscaping, roofing, IT services, and any business that sends written estimates.',
    outcomes: [
      'A short library of plain-English quote templates for your most common jobs',
      'A follow-up system for declined work that doesn’t feel pushy',
      'A simple explanation script you or your team can use when walking customers through quotes',
    ],
    steps: [
      {
        number: 1,
        title: 'List your 10 most common jobs',
        description:
          'Before drafting templates, identify the work you quote most often. The goal is to have a clear, pre-written explanation ready for each one.',
        dataNote:
          'For each job, note: the work being done, why it matters, what happens if it’s not done, typical parts/materials, and a price range. If you don’t have this documented, pull your last 10–15 quotes or invoices and list them.',
      },
      {
        number: 2,
        title: 'Create plain-English quote templates',
        description:
          'Use the prompt below to convert your technical descriptions into customer-friendly templates that build trust.',
        prompt: `I want to convert my technical job descriptions into plain-English quote templates that customers actually understand and trust.

My business type: [TYPE — e.g. auto repair, HVAC, plumbing, electrical, IT services]
My customer base: [mostly residential / commercial / mixed / specific niche]
My brand voice: [professional / friendly / straightforward]

Here are my 10 most common jobs:
[LIST EACH with: job name, what it involves, why it matters, what happens if not done, parts/materials needed, typical price range]

Please create for each job:
1. A plain-English customer-facing description (what the work is, in terms a non-expert understands)
2. A "why this matters" paragraph (the consequence of not doing it, framed as safety/cost/comfort — not fear-based)
3. A "what's included" bullet list (labor, parts, warranty, cleanup, etc.)
4. A confidence-building detail (e.g. "we use OEM parts", "all work guaranteed for X", "licensed and insured")

Keep each template under 150 words. Avoid jargon unless I tell you to keep a specific technical term for trust purposes.`,
      },
      {
        number: 3,
        title: 'Build a declined-work follow-up system',
        description:
          'Jobs that get declined aren’t lost forever — most customers are comparing prices or waiting for cash flow. A thoughtful follow-up turns 10–20% of declines into booked jobs.',
        prompt: `When a customer declines a quote, I want to follow up in a way that feels helpful, not pushy.

My typical job price range: $[LOW] to $[HIGH]
My customer base: [residential / commercial / mixed]

Please create:
1. A 7-day follow-up email (friendly check-in, no pressure)
2. A 30-day follow-up (assume the issue still exists — reference the original problem)
3. A 90-day follow-up (assume significant time has passed — offer a fresh look)
4. A "priority work" email for declined work that has a real safety or damage risk (how to communicate urgency without sounding like a scare tactic)
5. A response template for when a customer replies "I got a cheaper quote elsewhere" — how to address this professionally without trashing competitors`,
      },
      {
        number: 4,
        title: 'Write your in-person explanation script',
        description:
          'When you or your team hand a quote to a customer in person, a 60-second verbal walkthrough doubles acceptance rates.',
        prompt: `I want a simple in-person script for walking customers through their quote.

My team size: [just me / small team of X]
My typical customer: [walk-in / scheduled / referral]
My quote is usually delivered: [in-person at the shop / at the customer's home or business / via email then phone]

Please write:
1. A 60-second verbal walkthrough script — what to say as I point to each line item
2. 3 common customer questions and how to answer them confidently (not defensively)
3. A 2-sentence "what we recommend" statement I can use at the end to guide them toward a decision
4. A "buying time" response for customers who say "let me think about it" (not pushy — just keeps the door open)`,
      },
    ],
    expectations: {
      good: 'Businesses that adopt plain-English quote templates typically see quote-to-booking conversion improve by 10–25% in the first month. The in-person walkthrough (Step 4) is often the single highest-impact change.',
      ifBad:
        'If your templates still feel stiff, read them out loud. If you wouldn’t say it that way to a neighbor, rewrite it. The goal is "informed friend", not "official document".',
      time: 'Creating the initial templates takes 2–3 hours. After that, each new quote takes 2–5 minutes to customize instead of writing from scratch.',
    },
    downloadFile: null,
    problems: ['get-customers'],
  },

  {
    slug: 'stop-throwing-away-margin',
    tier: 'free',
    title: 'Stop Throwing Away Inventory and Margin',
    description:
      'Use your sales data to figure out what’s actually selling, what’s getting thrown out, and how to build a prep plan that matches reality — not habit.',
    difficulty: 'Beginner',
    time: '~30 min',
    tools: 'ChatGPT or Claude · Your POS sales history',
    intro:
      'Every business that sells perishable or time-limited inventory — food, flowers, printed materials, seasonal items — throws away margin every single day. Most owners know roughly which items move and which don’t, but the waste adds up invisibly. This guide walks you through using your POS or sales data to surface the patterns, build a prep plan that matches real demand, and turn "we always run out of X" or "we always throw out Y" into decisions backed by numbers. Works for bakeries, cafes, restaurants, florists, meal prep, printers, and any business that stocks or produces ahead of demand.',
    outcomes: [
      'A clear ranking of your top and bottom sellers by margin and velocity',
      'A daily or weekly prep plan matched to actual demand patterns',
      'A simple tracking habit to keep waste visible and shrinking',
    ],
    steps: [
      {
        number: 1,
        title: 'Get your item-level sales history',
        description:
          'Most POS systems (Square, Toast, Clover, Lightspeed, Shopify) let you export item-level sales for the last 60–90 days. You want: item name, quantity sold, date, day of week. Even a rough weekly average per item works if you can’t export daily data.',
        dataNote:
          'If you bake or produce, also note your typical daily prep quantities and what you usually throw out at the end of the day. Rough numbers are fine — you’re looking for patterns, not exactness.',
      },
      {
        number: 2,
        title: 'Identify what’s getting thrown away',
        description:
          'Paste your data and let AI find the items where your prep consistently exceeds demand.',
        prompt: `I run a [BUSINESS TYPE — e.g. bakery, cafe, florist, meal prep] and I want to figure out where I'm throwing away margin.

Here is my sales data:
[PASTE POS EXPORT OR MANUALLY LIST ITEMS WITH: item name, quantity sold per day or week, and typical prep quantity if different]

My typical daily operating pattern:
- Open days per week: [NUMBER]
- Busiest days: [LIST]
- Slowest days: [LIST]
- Typical end-of-day waste or markdowns: [DESCRIBE]

Please help me:
1. Rank items by daily sales velocity (sellers vs. slow movers)
2. Flag items where prep/stock consistently exceeds demand
3. Identify day-of-week patterns (e.g. "item X sells on weekends but not weekdays")
4. Calculate the rough weekly cost of items that typically go unsold
5. Highlight the top 3 items to adjust first`,
      },
      {
        number: 3,
        title: 'Turn patterns into a prep or stocking plan',
        description:
          'Use the insights to build a day-by-day prep or stocking plan that matches real demand instead of habit.',
        prompt: `Based on the patterns we identified, please help me build a smarter prep/stocking plan.

My most common day-of-week patterns: [PASTE FROM STEP 2]
My slowest-moving items: [LIST]
My bestsellers that sometimes sell out: [LIST]

Please create:
1. A day-by-day prep or stocking recommendation for my top 10 items
2. A "bestseller protection" plan — how much extra buffer to carry on items that frequently sell out
3. A "slow mover" plan — reduced prep, seasonal discontinuation, or reformulation ideas
4. A simple weekly review checklist I can use every Sunday to adjust next week’s plan based on what actually happened`,
      },
      {
        number: 4,
        title: 'Make this a repeatable habit',
        description:
          'The biggest waste gain comes from reviewing weekly, not once. Build a simple 10-minute routine.',
        prompt: `I want a simple weekly routine to keep waste visible and shrinking.

My team size: [just me / small team of X]
My POS system: [NAME]
My time available for this: [e.g. 15 minutes every Sunday night]

Please create:
1. A weekly waste tracker template (items, quantity wasted, approximate cost)
2. A 3-question weekly review: What sold out? What got thrown out? What did I adjust?
3. A monthly summary format I can review to spot longer-term trends
4. A simple rule of thumb for when to discontinue a slow-moving item entirely`,
      },
    ],
    expectations: {
      good: 'Most businesses discover 2–4 items that are quietly costing them hundreds per month in waste. The weekly habit (Step 4) is where sustained margin improvement comes from — the first pass is just the starting point.',
      ifBad:
        'If your POS data is thin, start with a manual count for one week. Write down what you prepped, what you sold, and what you threw away. Even one week reveals patterns you can act on immediately.',
      time: 'The initial analysis takes 30 minutes. The weekly habit is 10–15 minutes. Most owners recover the time cost within the first month of reduced waste.',
    },
    downloadFile: null,
    problems: ['fix-profits'],
  },

  {
    slug: 'find-dead-zones',
    tier: 'free',
    title: 'Find Your Dead Zones and Revenue Leaks',
    description:
      'Use your transaction data to find the hours, days, and product mix where you’re leaving money on the table — then build targeted fixes for each.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude · Your POS or transaction data',
    intro:
      'Every business has dead zones — specific hours, days, or product categories where you’re operating but barely earning. Most owners feel these zones but can’t name them precisely. This guide walks you through using your transaction data to find exactly where your revenue is leaking, then designing specific fixes. Works for retail, car washes, restaurants, gyms, salons, and any business with a point-of-sale system.',
    outcomes: [
      'A ranked list of your slowest hours, days, and product categories',
      'A diagnostic of which revenue leaks are fixable vs. structural',
      'A targeted promo or operational plan for your top 2 dead zones',
    ],
    steps: [
      {
        number: 1,
        title: 'Pull your transaction data',
        description:
          'Export 60–90 days of transaction data from your POS. You want: date, time, transaction amount, item categories, and staff (if applicable).',
        dataNote:
          'Also note your typical hours of operation, staff costs per hour, and any fixed costs (rent, utilities) so you can identify zones where you’re operating below break-even.',
      },
      {
        number: 2,
        title: 'Find your dead zones',
        description:
          'Paste the data and let AI surface the specific hours, days, and product categories that underperform.',
        prompt: `I want to find the dead zones in my business — the specific hours, days, or product mix where I'm earning the least.

My business type: [TYPE — e.g. retail store, car wash, cafe, gym]
My hours of operation: [e.g. M–F 7am–9pm, Sat–Sun 8am–6pm]
My typical staff cost per operating hour: $[AMOUNT] (rough estimate is fine)

Here is my transaction data:
[PASTE POS EXPORT OR SUMMARY — include: date, time, transaction amount, categories if possible]

Please help me:
1. Rank my hours by revenue per hour (flag the bottom 20%)
2. Rank my days of the week by total revenue and average transaction size
3. Identify hours where revenue is below my staff cost (I'm losing money being open)
4. Flag any product categories or services that consistently have low velocity
5. Summarize my top 3 dead zones in plain language`,
      },
      {
        number: 3,
        title: 'Diagnose what’s fixable',
        description:
          'Not every dead zone should be fixed. Some are structural (nobody shops at 6am). Some are fixable (wrong promo, wrong staffing, wrong product mix). This prompt separates them.',
        prompt: `Based on the dead zones we identified, please help me diagnose which are fixable and which are structural.

My top 3 dead zones: [PASTE FROM STEP 2]

For each dead zone, please:
1. Classify it as structural (market behavior, can't change) or fixable (marketing, operations, or mix issue)
2. If fixable, identify the likely root cause (awareness, pricing, staffing, product mix)
3. Suggest 2–3 specific interventions to test
4. Estimate how much revenue I could recover if the intervention works (rough range)
5. Rank the fixable zones by ROI potential (which to attack first)`,
      },
      {
        number: 4,
        title: 'Build a slow-day promo plan',
        description:
          'Use the diagnostic to build a specific, trackable promo or operational change for your #1 dead zone.',
        prompt: `I want to build a specific plan to fix my top dead zone.

My #1 fixable dead zone: [PASTE]
Root cause: [FROM STEP 3]
Current revenue during this zone: approximately $[AMOUNT] per week
My promotional budget for this experiment: $[AMOUNT or "no paid spend, just organic"]

Please create:
1. A 4-week test plan with weekly milestones
2. A specific promo or operational change to try (with exact messaging if it's a promo)
3. The metric I should track daily to know if it's working
4. A decision rule — when to double down, when to tweak, when to kill it
5. A communication plan (how to tell customers or staff about the change)`,
      },
    ],
    expectations: {
      good: 'Most businesses find 1–2 dead zones that are genuinely fixable and 1–2 that are structural. Focusing on the fixable ones typically recovers 3–8% of weekly revenue within 60 days.',
      ifBad:
        'If all your dead zones look structural, zoom in on product mix instead of time of day. The question becomes "what else could I sell during these hours?" rather than "how do I get more customers?"',
      time: 'Initial analysis is 30 minutes. The 4-week test plan (Step 4) is where the real work lives — daily tracking, weekly review, monthly decision on what to keep.',
    },
    downloadFile: null,
    problems: ['fix-profits'],
  },

  {
    slug: 'fix-your-pricing',
    tier: 'free',
    title: 'Fix Your Pricing Without Losing Customers',
    description:
      'Audit your margins, find where your prices have drifted out of sync with costs, and communicate changes in a way that keeps customers.',
    difficulty: 'Intermediate',
    time: '~40 min',
    tools: 'ChatGPT or Claude · Your cost and pricing data',
    intro:
      'Most small business owners haven’t done a proper price review in 2+ years. Meanwhile, every input cost has gone up. The gap between your old prices and your real costs is where your margin is bleeding — silently, every single sale. This guide walks you through a full pricing audit, finds where your prices are actually hurting you (and where you have room to raise them), and gives you a script for announcing changes without losing customers. Works for service businesses, retail, food, creative services, and any business where prices can drift.',
    outcomes: [
      'A true margin-per-item or margin-per-service breakdown',
      'A ranked list of where your prices are most out of sync with costs',
      'A customer-facing price change announcement that preserves trust',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your real margins',
        description:
          'Pull your cost data and pricing together. For each product or service, note: current price, cost of goods or labor, and time required (if service).',
        dataNote:
          'Don’t try to be perfect. Rough cost estimates work. If you’ve never tracked COGS, pull your last 3 months of supplier invoices and divide by units sold. For services, estimate hours per job honestly, including all the "hidden" time (prep, cleanup, admin).',
      },
      {
        number: 2,
        title: 'Find where your pricing is off',
        description:
          'Paste your data and let AI identify which items are underpriced, overpriced, or acceptable.',
        prompt: `I want to audit my pricing to find where I'm undercharging or overcharging.

My business type: [TYPE]
My target profit margin: [% IF YOU HAVE ONE, or "I want a recommendation"]
My positioning: [low-cost / mid-market / premium / niche]

Here is my pricing and cost data:
[PASTE LIST — for each item or service: name, current price, cost per unit (materials/ingredients), and labor time in minutes if applicable]

Please help me:
1. Calculate the true margin on each item (price - cost - estimated labor cost)
2. Rank items by margin percentage and by margin dollars
3. Flag items where my margin is below 20% (likely undercharging)
4. Flag items where margin is above 60% (often okay, but verify against market)
5. Identify the 3 items that, if adjusted, would most improve my overall profitability
6. For those 3 items, suggest a specific price adjustment`,
      },
      {
        number: 3,
        title: 'Research your local market positioning',
        description:
          'Pricing in isolation is guessing. Use AI to help you think through where you sit vs. the competition.',
        prompt: `I want to understand how my prices compare to my local market before I make changes.

My business type: [TYPE]
My location: [CITY, or urban/suburban/rural]
My competitors I'm aware of: [LIST 3–5 by type, not name — e.g. "two independent coffee shops, one Starbucks"]
My items I'm considering adjusting: [FROM STEP 2]

Please help me:
1. Describe typical market ranges for my item types in markets like mine
2. Identify what I should investigate about my competitors (price, quality, positioning)
3. Tell me where I likely sit in the market (bottom / middle / top) based on what I've shared
4. Suggest how much room I likely have for a price increase without losing significant volume
5. Flag any items where I should NOT raise prices (might be price-sensitive loss leaders)`,
      },
      {
        number: 4,
        title: 'Write the price change announcement',
        description:
          'How you announce a price increase matters more than the increase itself. The right framing keeps customers; the wrong framing creates backlash.',
        prompt: `I'm raising prices on [NUMBER] items. I want to communicate the change to customers in a way that preserves trust.

Items being changed: [LIST with old price → new price]
Typical price increase: [% or $ amount, e.g. "5–10%"]
Effective date: [DATE]
My customer base: [LOYAL REGULARS / MIX / MOSTLY WALK-IN]
My brand voice: [warm / professional / straightforward]

Please write:
1. An email/newsletter announcement (warm, transparent, acknowledges the change without over-apologizing)
2. A short in-store or on-site sign version (2–3 sentences)
3. A social media post version
4. A one-line verbal script for when customers ask "did your prices go up?"
5. A response template for the customer who complains — warm, firm, not defensive

Key principles: Be honest about why (costs, quality, sustainability). Don't over-explain. Don't bury the change. Don't offer excessive discounts that undercut the new price.`,
      },
    ],
    expectations: {
      good: 'Most businesses find 3–5 items that are meaningfully underpriced. A modest adjustment (5–10%) on just those items typically recovers 4–8% of overall margin without measurable customer loss.',
      ifBad:
        'If your cost data is messy, do a "napkin math" version for your top 10 items instead of your full catalog. You learn more from deep analysis of your best sellers than shallow analysis of everything.',
      time: 'The audit takes 1–2 hours for a typical small business. Writing the announcement is 15 minutes once you have the analysis. The real work is the one-week window after the change — responding to customer questions calmly and consistently.',
    },
    downloadFile: null,
    problems: ['fix-profits'],
  },

  {
    slug: 'stop-scope-creep',
    tier: 'free',
    title: 'Stop Scope Creep Before It Starts',
    description:
      'Audit where scope creep is silently eating your margin, build proposal templates that prevent it, and write responses for when clients push boundaries.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude · Your past project notes',
    intro:
      'Scope creep is the silent income killer for service providers. You quote a project, the client keeps asking for "one more small thing," and by the time you realize you’re doing twice the work for the same fee, it’s too awkward to bring up. This guide helps you audit where you’re bleeding time, build scope-proof proposals, and write professional responses for when clients push boundaries. Works for designers, consultants, coaches, developers, marketers, lawyers, photographers, and any service professional who quotes projects.',
    outcomes: [
      'A clear picture of how much scope creep is actually costing you',
      'A reusable proposal template with built-in scope protection',
      'Email templates for every common scope creep scenario',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your last 3 projects',
        description:
          'Look back at your recent projects honestly. Where did the scope expand? What did you do for free that you should have charged for?',
        dataNote:
          'For each of your last 3 projects, note: the client type, what you quoted, your actual hours, what was in the original scope, and what extras got added along the way.',
        prompt: `I'm a service provider in [INDUSTRY — e.g. graphic design, consulting, development, photography].

I want to identify where scope creep is costing me money. Here are my last 3 projects:

Project 1: [CLIENT TYPE], quoted $[AMOUNT], actual hours [HOURS], included [DELIVERABLES], extra requests: [WHAT THEY ASKED FOR BEYOND SCOPE]
Project 2: [same format]
Project 3: [same format]

Please help me:
1. Calculate my effective hourly rate on each project
2. Identify the specific moments where scope expanded
3. Find patterns in the type of extras clients request
4. Estimate how much revenue I lost to unpriced work`,
      },
      {
        number: 2,
        title: 'Build your scope-proof proposal template',
        description:
          'The best time to prevent scope creep is before the project starts. This prompt creates a proposal template with clear boundaries baked in.',
        prompt: `Based on the patterns we identified, please help me create a proposal template that prevents scope creep.

My typical project is [DESCRIBE — e.g. "brand identity package", "6-week consulting engagement", "website build"].
My target price range is $[RANGE].
The most common scope creep I experience is [PATTERN FROM STEP 1].

Please create:
1. A proposal template with clearly defined deliverables, revision limits, and exclusions
2. A "What's Included / What's Not Included" section I can customize per project
3. A revision policy paragraph (suggest how many rounds to include)
4. An "Additional Work" rate card for common add-on requests

Write it in a professional but friendly tone — I want clients to feel informed, not intimidated.`,
      },
      {
        number: 3,
        title: 'Write your boundary response templates',
        description:
          'When scope creep happens (and it will), you need professional responses ready to go.',
        prompt: `I need professional response templates for common scope creep situations.

Please write templates for:
1. Client asks for "one more small change" beyond included revisions
2. Client wants to add a new deliverable mid-project
3. Client provides feedback that fundamentally changes the direction
4. Client ghosts for weeks then returns with urgent changes

For each, write:
- A short email response (warm but firm)
- The key phrase to use
- What NOT to say

Tone: collaborative, not confrontational. I want to keep the relationship while protecting my time.`,
      },
      {
        number: 4,
        title: 'Create your client onboarding doc',
        description:
          'The final step is building an onboarding document that sets expectations from day one. When clients know the rules upfront, scope creep drops dramatically.',
        prompt: `I want to create a client onboarding document that sets expectations from day one and prevents most scope issues before they start.

My process usually takes [TIMELINE] from kickoff to final delivery.
I typically do [NUMBER] revision rounds.
My communication style is [casual / professional / mixed].

Please create:
1. A "Welcome to Your Project" one-pager I can send after booking
2. A project brief questionnaire (10–12 questions) that gets me everything I need upfront
3. A simple timeline/milestone template I can customize per project
4. A "How We Work Together" section covering communication, feedback, and revisions`,
      },
    ],
    expectations: {
      good: 'The project audit in Step 1 usually reveals you’re losing 20–40% of your effective rate to unpriced work. That clarity alone changes how you approach new projects.',
      ifBad:
        'If you don’t have detailed records, estimate. Ballpark numbers reveal patterns just as well as precise ones, and the conversation with AI surfaces blind spots regardless.',
      time: 'The proposal template is a one-time investment — 30 minutes now saves dozens of hours over the next year. The email templates are even higher leverage.',
    },
    downloadFile: null,
    problems: ['fix-operations'],
  },

  {
    slug: 'cut-no-shows',
    tier: 'free',
    title: 'Cut No-Shows and Fill Cancelled Slots',
    description:
      'Find the patterns behind no-shows, design a reminder flow that actually reduces them, and build a system to fill cancelled slots fast.',
    difficulty: 'Intermediate',
    time: '~30 min',
    tools: 'ChatGPT or Claude · Your appointment history',
    intro:
      'No-shows and last-minute cancellations are pure lost revenue — the slot is gone, the staff is paid, the customer didn’t show. Most businesses accept a 10–20% no-show rate as "the cost of doing business," but the right system can cut that in half. This guide walks you through finding the patterns (which clients, which days, which slot types), designing a multi-touch reminder flow that actually works, and building a simple system to fill cancelled slots before they go empty. Works for medical practices, salons, trainers, tutors, service businesses, and any business that runs on scheduled appointments.',
    outcomes: [
      'A clear picture of where no-shows are worst — by client type, time slot, or appointment type',
      'A 3-touch reminder flow designed to cut your no-show rate',
      'A waitlist or fast-fill system for last-minute cancellations',
    ],
    steps: [
      {
        number: 1,
        title: 'Find where the problem is worst',
        description:
          'Not all no-shows are equal. Pattern-match your appointment history to see if certain clients, days, or slot types are the real culprits.',
        dataNote:
          'Pull 90 days of appointment history. For each appointment, note: date, time, appointment type, client (new vs. returning), and outcome (kept, rescheduled, cancelled with notice, no-show).',
        prompt: `I want to analyze my no-show patterns to find where the problem is worst.

My business type: [TYPE]
My typical weekly appointment volume: [NUMBER]
My current estimated no-show rate: [% IF KNOWN, or "I don't know"]

Here is my appointment data for the last 90 days:
[PASTE OR SUMMARIZE — include: date, time, appointment type, client new/returning, outcome]

Please help me:
1. Calculate my actual no-show rate (overall, by day of week, by time of day)
2. Identify whether new clients or returning clients no-show more
3. Flag any appointment types that have higher no-show rates
4. Identify repeat offenders (clients who've no-showed more than once)
5. Summarize the top 2–3 patterns I should address first`,
      },
      {
        number: 2,
        title: 'Design a 3-touch reminder flow',
        description:
          'Reminders work when they’re well-timed and easy to respond to. Build a flow that uses 3 touches — at the right moments.',
        prompt: `Based on the patterns, help me design a reminder flow that cuts my no-show rate.

My current reminder setup: [DESCRIBE — email only, text only, none, etc.]
My communication channels available: [text, email, phone, app notifications]
My booking window is typically: [e.g. same day, 1 week out, 1 month out]

Please create:
1. A 3-touch reminder sequence with specific timing (e.g. "48 hours before, 24 hours before, morning of")
2. The exact message for each touch — conversational, not corporate
3. A confirmation request mechanism (reply YES or use a link) that I can track
4. A different version of the sequence for new clients vs. repeat clients
5. A policy for how to handle clients who no-show twice — not punitive, but protective of my schedule`,
      },
      {
        number: 3,
        title: 'Build a waitlist or fast-fill system',
        description:
          'When a slot opens at the last minute, you have 30 minutes to fill it. A standing waitlist turns lost slots into fast-fills.',
        prompt: `I want to build a simple waitlist system to fill last-minute cancellations.

My team size: [just me / small team of X]
My communication channels: [text / email / app / social]
My typical cancellation notice: [how much warning do you usually get?]

Please create:
1. A waitlist signup message I can send to interested clients ("I'll text you if a slot opens")
2. A fast-fill text template for when a slot opens (short, urgent, easy to respond to)
3. A rotation system so the same clients aren't always contacted first
4. A tracking method so I can measure how many slots I fill this way`,
      },
      {
        number: 4,
        title: 'Document the flow for your front desk',
        description:
          'If you have staff, the system is only as good as how well they execute it. Document the flow.',
        prompt: `I want a simple operations document for my front desk or admin staff covering the no-show and cancellation flow.

My team: [NUMBER of people, their roles]
My tools: [what software they use day-to-day]

Please create:
1. A one-page quick reference card covering: reminder schedule, confirmation tracking, waitlist process, same-day cancellation flow
2. A script for the phone call when a client cancels last-minute (warm, not guilt-trippy, sets expectations for future)
3. A weekly review checklist my team can run (5 minutes) to catch patterns early
4. An escalation rule for repeat no-show offenders`,
      },
    ],
    expectations: {
      good: 'A well-designed 3-touch reminder flow typically cuts no-show rates by 40–60%. Most businesses see measurable improvement within 2 weeks of implementing it.',
      ifBad:
        'If your data is thin, start by manually tagging every no-show for 30 days. You’ll spot the pattern faster than trying to analyze months of messy historical data.',
      time: 'The reminder flow is set-and-forget once you build it. The waitlist system (Step 3) is the highest-leverage part — most businesses capture 5–10% of revenue they were previously losing.',
    },
    downloadFile: null,
    problems: ['fix-operations'],
  },

  {
    slug: 'build-recurring-revenue',
    tier: 'free',
    title: 'Build a Membership or Recurring Revenue Program',
    description:
      'Design a membership or subscription program for your business that creates predictable monthly revenue — with pricing, tiers, and a launch plan.',
    difficulty: 'Intermediate',
    time: '~40 min',
    tools: 'ChatGPT or Claude · Your sales and customer data',
    intro:
      'Single-transaction revenue is unpredictable. A slow week, a bad season, a weather event — and your month is wrecked. A well-designed membership or subscription program creates predictable recurring revenue that shows up every month regardless. But most small businesses design these programs wrong: prices set by gut, tiers that don’t make sense, no clear pitch for why customers should join. This guide walks you through designing a program that actually works — modeled with real numbers, priced for breakeven, and launched to your existing customers first. Works for gyms, car washes, salons, cafes, retail, service businesses, and any business with repeat customers.',
    outcomes: [
      'A membership or subscription structure that makes sense for your business model',
      'Pricing and tiers backed by breakeven math, not guesses',
      'A concrete 4-week launch plan targeted at your existing customer base',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current revenue mix',
        description:
          'Before designing a program, understand how your current customers spend. What’s the average monthly spend of a typical regular? What do your highest-value customers buy?',
        dataNote:
          'Pull 3–6 months of transaction data. For each customer (or anonymous group), note: transaction frequency, average transaction amount, typical items purchased. Focus especially on repeat customers.',
        prompt: `I want to design a membership or recurring revenue program for my business. First, I need to understand my existing customer behavior.

My business type: [TYPE]
My average transaction size: $[AMOUNT]
My typical repeat customer visit frequency: [e.g. "twice a month", "weekly", "every 6 weeks"]

Here is my customer data:
[PASTE OR SUMMARIZE — include transaction frequency, average spend, typical purchases]

Please help me:
1. Identify my average monthly spend per regular customer
2. Segment customers by frequency (high / medium / low)
3. Calculate the monthly spend of a "typical" repeat customer
4. Flag the products or services that create regular visits
5. Suggest which customer segment is most likely to convert to a membership`,
      },
      {
        number: 2,
        title: 'Design your membership tiers',
        description:
          'Most programs fail because they have one tier or five tiers. The sweet spot is 2–3 tiers with clear, meaningful differences.',
        prompt: `Help me design membership tiers that make sense for my business.

My customer segments: [FROM STEP 1]
My highest-frequency customer spends approximately: $[AMOUNT]/month
My goal: [e.g. 20% of regulars convert within 12 months]

Please create:
1. A 2-tier OR 3-tier structure (you decide which is better for my business)
2. For each tier: a clear value proposition, what's included, pricing, and the target customer
3. A "why join" narrative for each tier (the emotional and practical reasons)
4. A "do not include" list — things that should stay on the transactional menu even for members
5. A comparison table showing tier differences at a glance`,
      },
      {
        number: 3,
        title: 'Build the financial model',
        description:
          'Don’t guess on pricing. Model the program so you know your breakeven, your best case, and your risk.',
        prompt: `I want to financially model my membership program before launching.

My tiers: [FROM STEP 2 — with prices]
My variable cost per customer visit: $[AMOUNT] (rough estimate fine)
My typical member will use the benefits: [your estimate of visits/uses per month]
My current overhead: [monthly — rough number fine]

Please help me:
1. Calculate breakeven member count for each tier
2. Model best case (heavy usage) vs. worst case (low usage) profitability
3. Identify the tier pricing that balances value to customer with protection of my margin
4. Flag any tier that looks financially risky (too generous or too tight)
5. Recommend a member cap or rollout phasing if needed`,
      },
      {
        number: 4,
        title: 'Create the launch plan',
        description:
          'Launch to your existing customers first. They already know you and are the most likely to convert.',
        prompt: `I want to create a 4-week launch plan for my membership program.

My tiers and pricing: [FROM STEP 3]
My existing regular customer list size: approximately [NUMBER]
My communication channels: [email, text, in-person, social]

Please create:
1. A week-by-week launch plan (week 1: soft launch to regulars, week 2: full announcement, etc.)
2. A founding member email/text announcement with a reason to join NOW (not a discount — a benefit)
3. An in-person / point-of-sale script for staff to pitch the program
4. A follow-up sequence for customers who don't sign up in week 1
5. A weekly tracking template showing sign-ups, revenue, and conversion rate`,
      },
    ],
    expectations: {
      good: 'A well-designed program typically converts 10–20% of regulars within 90 days. The financial model (Step 3) is where most programs go right or wrong — skipping this step is the #1 reason memberships lose money.',
      ifBad:
        'If signups are slow in week 1, don’t cut prices. Instead, add a founding-member bonus (something you can sustain) and revise the pitch based on objections you’re hearing in person.',
      time: 'Design work takes 2–4 hours. Launch is 4 weeks. Real signal on whether the program works comes at 90 days — that’s when you can see renewals and true lifetime value.',
    },
    downloadFile: null,
    problems: ['scale-up'],
  },

  {
    slug: 'project-profitability',
    tier: 'free',
    title: 'Figure Out Which Projects Are Actually Making You Money',
    description:
      'Audit your recent projects to find which ones are genuinely profitable, which are secretly losing money, and how to protect your margins going forward.',
    difficulty: 'Intermediate',
    time: '~35 min',
    tools: 'ChatGPT or Claude · Your project time and fee data',
    intro:
      'Most service businesses track revenue, not profitability per project. You know your top line — but not which project types, clients, or phases are actually profitable. The project that looked great on paper? It might have lost money once scope creep hit. This guide walks you through auditing your recent projects to find your real effective hourly rate, flag the ones that are silently underperforming, and build systems to protect your margins. Works for architecture firms, design agencies, consultants, law firms, construction, accounting, and any project-based service business.',
    outcomes: [
      'A profit audit showing your effective hourly rate per project and type',
      'A clear view of which project types or clients are quietly unprofitable',
      'A scope-management system to prevent margin erosion mid-project',
    ],
    steps: [
      {
        number: 1,
        title: 'Pull your project financials',
        description:
          'Gather data for your last 5–10 projects so you can see which are actually profitable.',
        dataNote:
          'For each project, collect: project name/type, contracted fee, hours spent (total and by phase if trackable), hourly rate of each person who worked on it, any additional services billed, and any scope changes or extras done for free.',
      },
      {
        number: 2,
        title: 'Run a project profit audit',
        description:
          'Paste your project data and let AI calculate your real profitability — by project, by phase, and by project type.',
        prompt: `I run a [BUSINESS TYPE — e.g. design agency, consulting firm, construction company] and I want to understand which projects are actually profitable.

Here is my project data:
[PASTE YOUR PROJECT DATA — for each project include: project name, type, fee, hours by phase if applicable, staff involved and their hourly rates, additional services billed]

Please analyze:
1. Calculate the effective hourly rate for each project (total fee ÷ total hours)
2. Compare profitability across project types — which types are most/least profitable?
3. Flag any projects where my effective hourly rate fell below my target rate
4. Identify patterns — are projects from certain clients, sizes, or scopes consistently underperforming?
5. Calculate what my average project profit margin is
6. Identify the top 2–3 patterns costing me the most money`,
      },
      {
        number: 3,
        title: 'Build scope-proof proposals',
        description:
          'Create a proposal template that explicitly defines what’s included and what’s not, so scope creep can’t happen silently.',
        prompt: `Based on my profitability analysis, help me create a proposal template that prevents scope creep.

My business type: [TYPE]
My typical project size: [RANGE]
My standard hourly rates: [PRINCIPAL/SENIOR/JUNIOR rates if applicable]
My typical project phases: [LIST — e.g. discovery, design, build, QA; or SD/DD/CD]

Please create:
1. A proposal template with explicit scope boundaries for each phase — exactly what’s included and what’s not
2. An "Additional Services" schedule with hourly rates and common add-on services
3. Clear "Not Included" language that prevents scope assumptions — the things clients often assume are included but shouldn’t be
4. A fee structure recommendation: fixed fee, hourly with cap, or phased billing? Based on my data, which protects margins best?
5. A change order template for when scope changes occur mid-project`,
      },
      {
        number: 4,
        title: 'Create a scope management habit',
        description:
          'Mid-project is where most margin erosion happens. Build a weekly review habit to catch it early.',
        prompt: `I want to build a simple weekly scope management habit so I catch margin erosion before it becomes severe.

My typical project duration: [WEEKS / MONTHS]
My team size: [NUMBER]

Please create:
1. A weekly 15-minute project review checklist (scope consumption, hours vs. budget, client behavior signals)
2. An early-warning trigger list — when I should have a scope conversation with a client
3. A client email template for when scope is being exceeded (professional, references the contract, quotes additional services)
4. A project post-mortem template for when a project wraps — to capture lessons for future estimating`,
      },
    ],
    expectations: {
      good: 'Most businesses discover that 1–2 project types or client types are significantly less profitable than assumed. The proposal template (Step 3) prevents the same pattern on future work. The weekly habit (Step 4) is where sustained margin protection comes from.',
      ifBad:
        'If you don’t track hours per project, estimate them for your last 3–5 projects. Even rough numbers reveal patterns. This is the first time through — precision comes later.',
      time: 'The audit itself takes 30–60 minutes. The proposal template is a one-time build. The weekly habit is 15 minutes. The ROI is measured in the projects you NO LONGER lose money on.',
    },
    downloadFile: null,
    problems: ['scale-up'],
  },
]

export default freeGuides
