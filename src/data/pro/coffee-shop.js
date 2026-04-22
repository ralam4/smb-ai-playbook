const coffeeShopGuides = [
  {
    slug: 'coffeeshop-menu-pricing',
    tier: 'pro',
    industry: 'coffee-shop',
    title: 'Fix Your Menu Pricing and Protect Your Margin',
    description:
      'A full menu pricing system — per-item cost audit, margin analysis, upsell combo engineering, price-change communication, and a quarterly menu review ritual.',
    difficulty: 'Advanced',
    time: '~4 hours to set up, 30 min/quarter',
    tools: 'ChatGPT or Claude · Your menu, costs, and POS data',
    stripeUrl: null,
    intro:
      'Independent cafes typically haven\'t done a proper menu pricing review in 2+ years. Meanwhile, green coffee costs have spiked, milk has risen 30%+, labor has gone up, and cup prices have climbed. The gap between old menu prices and real costs is where margin bleeds silently. This guide builds a complete pricing system: true cost-per-item analysis, margin ranking, an upsell combo strategy that lifts ticket size, a price-change script that preserves loyal customers, and a quarterly review habit. The goal is 5–15% margin improvement without losing meaningful volume.',
    outcomes: [
      'True cost and margin per item across your entire menu',
      'A ranked list of where margin is most out of alignment',
      'An upsell combo structure that raises average ticket',
      'A communication plan for price changes that preserves regulars',
      'A quarterly review that keeps pricing current',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit true cost per drink and food item',
        description: 'Most cafe owners know their coffee bean cost but not their all-in cost per drink including milk, syrup, cup, lid, sleeve, and labor.',
        dataNote: 'Gather: green coffee cost per pound, roasted/wholesale bean cost, milk and alt-milk costs per gallon, syrup costs per bottle, cup/lid/sleeve/stirrer costs, labor cost per hour, food item COGS.',
        prompt: `I want to calculate true cost per menu item.

My cafe:
- Location: [CITY, urban/suburban/neighborhood]
- Seating: [café / grab-and-go / drive-thru / mixed]
- Typical ticket size: $[AMOUNT]
- Current labor cost: $[per hour average]

Per-item inputs:
- Green coffee: $[per lb]
- Roasted coffee: $[per lb] (wholesale I buy OR green + roasting cost)
- Whole milk: $[per gal]
- Oat/almond/soy milk: $[per gal each]
- Standard syrup: $[per bottle, and yield per bottle]
- 12oz cup/lid: $[COMBINED]
- 16oz cup/lid: $[COMBINED]
- Sleeve: $[each]

Please calculate true cost for:
1. **12oz drip coffee** (beans, cup, lid, sleeve, labor ~30sec)
2. **12oz latte** (beans, milk, cup, lid, sleeve, labor ~90sec)
3. **16oz latte** (same with more milk and bigger cup)
4. **16oz oat latte** (oat milk upcharge)
5. **12oz iced latte** (cup, lid, no sleeve, ice)
6. **Cold brew** (different yield from green bean)
7. **Matcha latte** (matcha cost)
8. **Hot tea** (low cost benchmark)
9. **Pastry** (COGS per item)
10. **Sandwich** (COGS per item)

Then:
1. **Margin percentage** at current menu prices for each item
2. **Flag items below 60% margin** (likely underpriced)
3. **Flag items above 80% margin** (may have pricing room)
4. **Milk-price sensitivity** — what happens to margin if milk price rises 15%`,
      },
      {
        number: 2,
        title: 'Rank menu items by margin and volume',
        description: 'Profit is margin × volume. Rank items by margin dollars, not margin percentage.',
        prompt: `I want to rank my menu items by total margin contribution.

My menu and current prices: [LIST with prices]
My monthly volume by item (rough): [LIST]

Using the costs from Step 1, please:
1. **Calculate margin dollars per item** (price - cost)
2. **Multiply by monthly volume** — monthly margin contribution per item
3. **Rank items by margin dollars** — top to bottom
4. **Rank items by volume** — separate ranking
5. **Flag "stars"** — high volume + high margin (protect and promote)
6. **Flag "plow horses"** — high volume + low margin (adjust pricing or recipe)
7. **Flag "puzzles"** — high margin + low volume (promote, feature, reposition)
8. **Flag "dogs"** — low margin + low volume (consider removing)
9. **A suggested menu reorganization** — stars at the top and center, puzzles featured, dogs quietly retired`,
      },
      {
        number: 3,
        title: 'Design an upsell combo structure',
        description: 'Combo pricing lifts average ticket and improves margin simultaneously. Done right.',
        prompt: `I want to design combo offerings that lift average ticket.

My current average ticket: $[AMOUNT]
My typical morning rush ticket: [$AMOUNT — usually coffee-only]
My pastry attach rate: [% — typically 30–50%]

Please design:
1. **Breakfast combo** — coffee + pastry at a small discount vs. a la carte; easy win for attach rate
2. **Afternoon combo** — afternoon drink + pastry or small food; targets second-visit customer
3. **Size upgrade pricing** — 16oz should cost much less than 2x a 12oz, nudging customers up
4. **Milk upgrade pricing** — alt-milk upcharge should reflect cost but not feel punishing
5. **Add-on menu** — extra shot, extra syrup, whip; priced for margin protection
6. **Loyalty punch-card tie-in** — 10th drink free is simple and works; factor into pricing
7. **Member-only pricing** — for regulars who enroll in email (low-friction loyalty)
8. **Combo presentation** — menu board real estate; "pair your drink with..." prompts
9. **Staff upsell script** — what the barista says to prompt the pastry add-on`,
      },
      {
        number: 4,
        title: 'Write the price-change communication',
        description: 'How you announce price changes matters more than the change itself. Keep the regulars.',
        prompt: `I\'m adjusting prices on [NUMBER] items.

My changes:
[LIST — old price → new price per item, and approximate % change]
Effective date: [DATE]
My customer base: [loyal regulars / mixed / mostly grab-and-go]
My brand voice: [warm / professional / casual / quirky]

Please write:
1. **In-shop signage** — small sign at register, 2–3 sentences, warm and honest
2. **Social media post** — transparent, emphasizes reinvestment in quality
3. **Email to regulars/loyalty list** — more personal, thanks them, explains the why
4. **Barista script** — what to say when a regular asks "did prices go up?"
5. **"I can\'t afford this anymore" response** — warm, firm, recommends the approach that fits their budget (smaller size, drip vs specialty)
6. **Avoid these mistakes** — apologizing excessively, blaming suppliers exclusively, offering heavy discounts that contradict the new pricing
7. **First-week barista huddle** — daily 2-min huddle to share how conversations are going, troubleshoot pushback`,
      },
      {
        number: 5,
        title: 'Build a menu-design pass',
        description: 'Pricing power comes partly from how the menu is presented. Optimize the board.',
        prompt: `I want a menu-design pass to support the new pricing.

My menu board format: [digital / chalk / printed]
My menu size: [NUMBER of items]

Please advise:
1. **Item hierarchy** — stars at top, add-ons visible, dogs removed
2. **Price formatting** — no dollar signs, rounded where possible (psychological pricing)
3. **"Featured" items** — how to highlight puzzles (high margin, low awareness)
4. **Combo callouts** — visually distinct from a la carte
5. **Modifier presentation** — milk options, syrups, extras; how to present without overwhelming
6. **Seasonal rotation** — 1–2 seasonal specials that anchor attention
7. **"Our favorite" signal** — social proof on select items
8. **Allergen and dietary signals** — vegan/GF clearly marked without cluttering
9. **A simpler menu win** — cutting items is almost always the right call; most cafes have too many
10. **Board readability** — for the drive-thru or quick-glance customer`,
      },
      {
        number: 6,
        title: 'Install a quarterly menu review',
        description: 'Menus drift. Commodity prices move. A quarterly review keeps pricing honest.',
        prompt: `I want a quarterly 30-min menu review.

Please create:
1. **Quarterly ritual** — re-run Step 1 cost inputs (have commodity prices moved?), Step 2 ranking refresh
2. **Seasonal adjustments** — hot drinks in winter, iced/cold brew in summer; menu weighting
3. **Attach-rate trending** — is combo rate climbing or slipping
4. **Item-level performance** — any dogs that should go, any underperforming new items
5. **Staff sell-through** — which items are staff pushing well vs. not
6. **A big annual review** — once a year, consider a full menu rebuild
7. **Raw ingredient contract review** — annual negotiation with milk, coffee, pastry suppliers`,
      },
    ],
    expectations: {
      good: 'Most cafes recover 5–15% of margin within 90 days of running the full pricing system. Combo design and upsell lifts average ticket 10–25% on the morning rush.',
      ifBad: 'If volume drops meaningfully after a price increase, the issue is almost always the communication, not the price. Revisit Step 4 framing.',
      time: 'Initial audit: 4 hours. Quarterly review: 30 min. Annual full rebuild: 1 day.',
    },
    downloadFile: null,
  },

  {
    slug: 'coffeeshop-waste-prep',
    tier: 'pro',
    industry: 'coffee-shop',
    title: 'Cut Waste and Nail Your Daily Prep with AI',
    description:
      'A waste-reduction system — pastry and milk prep forecasting, daily usage tracking, weekly adjustment cycle, supplier contract review, and a staff-led weekly habit that turns waste into a KPI.',
    difficulty: 'Intermediate',
    time: '~3 hours to set up, 15 min/day ongoing',
    tools: 'ChatGPT or Claude · Your POS data · Prep quantities · Waste logs',
    stripeUrl: null,
    intro:
      'Waste is where margin quietly disappears in a cafe. Over-prepped pastries at end of day, milk dumped at close, produce past its prime, espresso ground too early — every one of these is pure cost without offsetting revenue. Most cafes accept a level of waste as "the cost of fresh" without measuring it. This guide builds a structured waste-reduction system: forecasting-based prep quantities, daily usage tracking, a weekly adjustment cycle, supplier contract renegotiation, and a staff-led waste habit. The typical recovery is 3–8% of food cost — real money at cafe volumes.',
    outcomes: [
      'Forecasted prep quantities for pastries, sandwiches, and milk',
      'A daily waste log that takes 60 seconds',
      'A weekly adjustment cycle that continuously tunes prep',
      'A supplier contract review to eliminate hidden waste drivers',
      'A staff-led daily waste habit that makes waste everyone\'s concern',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit current waste baseline',
        description: 'You can\'t fix what you don\'t measure. Track one week of waste honestly.',
        dataNote: 'For 7 days, log: pastries thrown/discounted at close, sandwiches thrown, milk dumped at close, ground coffee dumped, prepped items that didn\'t sell.',
        prompt: `I want a one-week waste baseline.

My cafe:
- Format: [full cafe / grab-and-go / hybrid]
- Daily volume: [avg transactions]
- Pastry program: [in-house baked / delivered daily / delivered 2–3x week]
- Sandwich program: [yes/no]

Here is my 7-day waste log:
[PASTE — item, quantity wasted, estimated cost]

Please analyze:
1. **Weekly waste cost total** and annualized
2. **Worst categories** — pastries, milk, coffee, food, other
3. **Day-of-week patterns** — which days have highest waste
4. **Time-of-day patterns** — late-afternoon over-prep, end-of-day
5. **% of total COGS going to waste** — benchmark against cafe norms (healthy is 3–5%)
6. **Top 3 waste reduction opportunities**
7. **Estimated annual savings** from cutting waste by 30%, 50%, 70%`,
      },
      {
        number: 2,
        title: 'Build a pastry and food forecasting model',
        description: 'Day-of-week patterns are strong. Use them.',
        prompt: `I want a pastry and food forecasting model tied to day of week.

My pastry items and typical daily sales volume by day:
[LIST — item, Mon/Tue/Wed/Thu/Fri/Sat/Sun sales]

Please create:
1. **Recommended daily prep quantities** for each item by day of week
2. **Weather/season adjustment rules** — rainy days, hot days, holidays
3. **"Safety buffer"** — an honest sellout tolerance vs. a waste tolerance (slight oversell in morning reassures customers; slight undersell at close minimizes waste)
4. **Rolling 4-week adjustment** — weekly, compare actual to forecast, adjust next week
5. **New item introduction protocol** — how to forecast when we have no history
6. **Discontinuation trigger** — item consistently wastes; retire vs. reformulate`,
      },
      {
        number: 3,
        title: 'Build milk and coffee prep guidelines',
        description: 'Milk and coffee waste are the two biggest and most avoidable.',
        prompt: `I want milk and coffee prep guidelines.

My milk usage: [daily gallons whole / oat / almond / soy]
My coffee usage: [lbs per day drip / espresso]
My day-part patterns: [morning rush / afternoon lull / evening pickup]

Please create:
1. **Milk opening protocol** — how much to pull from the cooler first thing
2. **Milk mid-day replenishment** — when to pull additional vs. waiting
3. **End-of-day milk usage rule** — cutoff time for opening a new gallon
4. **Coffee grinding frequency** — batch size, timing; coffee ground >30 min is stale
5. **Drip-coffee brewing cadence** — how often we brew new batches, how we time around rush
6. **Espresso prep** — pre-ground vs. on-demand
7. **End-of-day waste protocol** — coffee, steamed milk, prepped syrups; what\'s okay to use tomorrow vs. dump
8. **Opening checklist** — prep order of operations first 30 min`,
      },
      {
        number: 4,
        title: 'Build a daily 60-second waste log',
        description: 'The log has to be fast or staff won\'t do it.',
        prompt: `I want a daily 60-second waste log.

My POS: [NAME]
My staff tech comfort: [describe]

Please create:
1. **A simple end-of-day waste form** — one row per item, quantity, dollar estimate
2. **A paper vs. digital decision** — whichever is fastest for my team
3. **Staff-ownership protocol** — rotating closer responsible for logging
4. **A weekly aggregation** — manager reviews 7 days of logs, spots patterns
5. **"I don\'t want to log" friction** — what to do when logging gets skipped
6. **A visual cue** — whiteboard or chalkboard showing waste dollar running total for the week`,
      },
      {
        number: 5,
        title: 'Install a weekly waste review',
        description: 'A 30-min Monday review drives adjustment before problems calcify.',
        prompt: `I want a weekly 30-min waste review on Mondays.

Please create:
1. **Weekly dashboard** — total waste $, by category, trend vs. last 3 weeks, worst day
2. **Three questions** — What surprised us? What\'s improving? What do we adjust this week?
3. **Prep quantity adjustments** — update Step 2 forecast based on prior week
4. **Supplier order adjustment** — reduce next order by known waste items
5. **Staff huddle agenda** — 5-min Tuesday huddle sharing waste findings with whole team
6. **Monthly trend review** — month-over-month improvements, celebrate wins
7. **Annual supplier renegotiation** — back to suppliers with waste data, negotiate smaller cases, flex delivery`,
      },
      {
        number: 6,
        title: 'Make waste a staff-led habit',
        description: 'Top-down waste programs fail. Staff-led ones stick.',
        prompt: `I want to make waste reduction a staff-led habit.

My team size: [NUMBER]

Please create:
1. **Monthly staff waste target** — reasonable, visible, team-owned
2. **"Waste reducer of the month"** — recognition for staff member who spots and fixes a pattern
3. **Monthly team huddle** — 15 min, review month, brainstorm 1 improvement to try
4. **"Second life" creativity** — day-old pastries as afternoon discount, extra cold brew becomes iced coffee concentrate, end-of-day bread becomes croutons
5. **"Don\'t make this a morale killer"** — framing waste as the team\'s savings, not blame
6. **Training** — new-hire orientation includes waste habits, not just drink recipes
7. **Ownership signal** — post weekly totals, show the trend, celebrate improvement`,
      },
    ],
    expectations: {
      good: 'Most cafes cut waste 30–50% within 60 days of implementing the full system. For a typical cafe that\'s $500–$1500/month in recovered margin.',
      ifBad: 'If waste isn\'t dropping, the issue is usually prep quantities haven\'t been adjusted. Commit to the weekly review — it\'s where real improvement happens.',
      time: 'Initial setup: 3 hours. Daily log: 60 sec. Weekly review: 30 min. Payback visible within 30 days.',
    },
    downloadFile: null,
  },

  {
    slug: 'coffeeshop-local-marketing',
    tier: 'pro',
    industry: 'coffee-shop',
    title: 'Local Marketing — Drive Foot Traffic Without a Big Budget',
    description:
      'A local marketing system — neighborhood partnerships, Google Business Profile mastery, community events, Instagram that actually works, and a weekly marketing rhythm a busy operator can sustain.',
    difficulty: 'Intermediate',
    time: '~4 hours to set up, 2 hours/week ongoing',
    tools: 'ChatGPT or Claude · Your neighborhood knowledge · Social accounts',
    stripeUrl: null,
    intro:
      'The majors buy their traffic. Independent cafes earn it through relationships and reputation in a specific neighborhood. But most cafes either do no marketing ("coffee sells itself") or do too much ("we need a TikTok strategy"). The sweet spot is a disciplined local marketing system: 3–5 neighborhood partnerships, a Google Business Profile that dominates local search, a few thoughtful community moments per year, and an Instagram strategy that respects the time a busy operator actually has. This guide builds that system.',
    outcomes: [
      'A map of 10+ local partnership opportunities',
      'A Google Business Profile that ranks for local coffee searches',
      'A community event calendar that builds reputation',
      'A sustainable social strategy that doesn\'t eat your day',
      'A weekly 2-hour marketing ritual',
    ],
    steps: [
      {
        number: 1,
        title: 'Map your neighborhood partnership opportunities',
        description: 'The best marketing for a cafe is other businesses sending customers your way.',
        prompt: `I want to map my neighborhood partnership opportunities.

My cafe:
- Location: [neighborhood, city]
- Walk-in radius: [blocks/minutes]
- Closest commercial density: [describe]

Please identify:
1. **Complementary businesses** — bookstore, yoga studio, salon, coworking, office buildings, schools
2. **For each**: typical partnership type (cross-promo, space-for-coffee-trade, host-their-event, joint promotion)
3. **"Best first partners"** — 3 ideal first partnerships based on compatibility
4. **Initial outreach template** — warm, specific, low-ask
5. **Partnership scaffolding** — what the first 3 months of partnership looks like
6. **Mutual-benefit framing** — how the partner benefits, not just me
7. **Avoid list** — partnerships that sound good but drain time (one-off sponsorships, major corporate ones)
8. **Quarterly partner review** — who\'s sending traffic, who isn\'t, adjust`,
      },
      {
        number: 2,
        title: 'Master your Google Business Profile',
        description: 'GBP is the single highest-leverage marketing asset for a local cafe.',
        prompt: `I want to master my Google Business Profile.

My current GBP status: [neglected / average / active]

Please advise on:
1. **Profile completeness** — photos (interior, exterior, team, menu, drinks, events), business description, categories, services, attributes
2. **Photo strategy** — 40+ photos, refreshed monthly, high quality (phone photos are fine if they\'re thoughtful)
3. **Posts strategy** — 1–2 posts per week: new items, events, seasonal, community moments
4. **Q&A section** — populate with the 10 questions customers actually ask
5. **Review generation** — post-purchase ask, link on receipt, table tent
6. **Review responses** — template for 5-star, template for critical, template for fake; all personal-sounding
7. **Attributes that drive bookings** — WiFi, outdoor seating, accessible, vegan options, dog-friendly
8. **Monthly audit** — 30 min, check for opportunities, new photos, fresh posts`,
      },
      {
        number: 3,
        title: 'Build a community event calendar',
        description: 'Small, thoughtful events build reputation. Large splashy events mostly don\'t.',
        prompt: `I want a community event calendar that builds reputation without draining operations.

My cafe: [size, capacity, flexibility]
My team: [can I spare staff for events or is it owner-led]

Please design:
1. **4–6 events per year** — not more. Quality over quantity.
2. **Event ideas**:
   - Local artist gallery night (quarterly)
   - Author reading or book launch (rarely; special)
   - Morning run club host (weekly or monthly, low-effort)
   - Neighborhood coffee tasting (quarterly)
   - Kids\' Saturday morning activity (monthly, recurring)
   - Charity or cause moment (1–2/year)
3. **Staffing and cost** — realistic effort estimate per event
4. **Promotion** — Instagram, local Facebook groups, partner cross-promotion
5. **Revenue vs. reputation framing** — some events break even on revenue but pay off in word-of-mouth
6. **Recurring vs. one-off** — recurring builds habit; one-offs build buzz
7. **Metrics** — attendance, new-customer ratio, social reach, follow-on visits
8. **A "do not do this" list** — events that look good but drain time (huge festivals, big sponsorships)`,
      },
      {
        number: 4,
        title: 'Build a sustainable Instagram strategy',
        description: 'Instagram matters for cafes but most operators burn out trying to post daily. 3 posts a week is enough if they\'re right.',
        prompt: `I want an Instagram strategy a busy owner can sustain.

My current following: [NUMBER]
My posting cadence: [describe]
My time budget: [weekly]

Please design:
1. **3 posts per week** — max sustainable cadence
2. **Content buckets** — menu/drinks (40%), team/behind-the-scenes (30%), community/customers (30%)
3. **Story strategy** — daily Stories are doable; 2–3 Stories per day building a rhythm
4. **Reels** — 1 per week at most, not daily
5. **Batching plan** — shoot content 1x/week for 1 hour, schedule via Later/Metricool
6. **Local hashtags** — 10–15 rotating; neighborhood-specific, not generic
7. **Engagement discipline** — reply to every comment, DM within 24h; stop scrolling
8. **What NOT to post** — aesthetic perfection (exhausting), endless latte art (boring), sales promos (cheapens brand)
9. **Monthly review** — 20 min, what worked, what didn\'t, adjust ratios`,
      },
      {
        number: 5,
        title: 'Install a weekly 2-hour marketing ritual',
        description: 'Protected time or nothing happens.',
        prompt: `I want a weekly 2-hour marketing ritual.

My ideal day/time: [specify]

Please design:
1. **Fixed slot** — same time each week (e.g. Monday 9–11am)
2. **Hour 1** — content creation: 3 IG posts, 1 GBP post, 2–3 Stories queued
3. **Hour 2** — relationships: reply to all DMs/comments, partner check-in, respond to reviews, send thank-you to top customer of the week
4. **Quarterly 2-hour deep planning** — review metrics, plan next quarter\'s events, refresh partner list
5. **Daily 15-min window** — just for Stories and replies
6. **A "delegated task" list** — what a VA could do if I can afford one
7. **An "if I miss a week" plan** — skip gracefully; marketing shouldn\'t stress out the operator`,
      },
      {
        number: 6,
        title: 'Install a monthly marketing performance review',
        description: 'Know what\'s working so you can double down.',
        prompt: `I want a monthly marketing review.

Please create:
1. **Monthly dashboard** — foot traffic trend (if trackable), GBP views, IG follower growth, event attendance, partner referral volume
2. **3 monthly questions** — What drove the most new customers? What took time but didn\'t move needle? What to do more/less of next month?
3. **Quarterly partner review** — refresh the partnership list
4. **Annual strategy review** — bigger questions once a year
5. **A "this isn\'t working" kill rule** — permission to stop a tactic that hasn\'t delivered in 6 months`,
      },
    ],
    expectations: {
      good: 'Cafes that implement this system typically see 10–25% lift in new-customer traffic within 6 months, driven mostly by GBP optimization and neighborhood partnerships. The social strategy keeps existing customers engaged.',
      ifBad: 'If the 2-hour ritual keeps getting skipped, the problem is the calendar. Block it as sacred — same as a vendor delivery you can\'t miss.',
      time: 'Initial setup: 4 hours. Weekly: 2 hours. Monthly: 30 min review. Quarterly: 2 hours deep planning.',
    },
    downloadFile: null,
  },

  {
    slug: 'coffeeshop-staff-scheduling',
    tier: 'pro',
    industry: 'coffee-shop',
    title: 'Build a Staff Schedule That Matches Your Busy Hours',
    description:
      'A demand-matched scheduling system — hourly sales analysis, labor-to-sales target, position-specific scheduling, weather/event overlay, and a weekly scheduling rhythm that controls labor cost without burning out staff.',
    difficulty: 'Intermediate',
    time: '~3 hours to set up, 1 hour/week ongoing',
    tools: 'ChatGPT or Claude · Hourly POS data · Labor data',
    stripeUrl: null,
    intro:
      'Labor is typically 30–40% of a cafe\'s costs. Over-staffing on slow hours and under-staffing during rush both hurt — over-staffing eats margin, under-staffing drives customers away. Most cafes schedule from habit, not data. This guide builds a demand-matched scheduling system: hourly sales analysis, a labor-to-sales target, position-specific scheduling (barista, cashier, food prep), weather and event overlays, and a weekly scheduling rhythm that controls labor cost without creating staff resentment. Typical impact: 2–5 percentage points of labor cost recovered.',
    outcomes: [
      'An hourly sales heatmap showing your real demand pattern',
      'A labor-to-sales target and break-even labor hours calculation',
      'Position-specific schedule templates by day and part of day',
      'A weather/event overlay that flexes staffing proactively',
      'A weekly scheduling ritual that takes 1 hour',
    ],
    steps: [
      {
        number: 1,
        title: 'Build an hourly sales heatmap',
        description: 'Staffing decisions should come from data. Know your real peak and trough hours.',
        dataNote: 'Export hourly sales data for 60–90 days. For each hour: transaction count, revenue, average ticket.',
        prompt: `I want an hourly sales heatmap.

My cafe:
- Hours of operation: [e.g. 6am–7pm, 7 days]
- Format: [full service / counter only / drive-thru]
- Typical weekly revenue: $[AMOUNT]

Here is my hourly sales data for 60–90 days:
[PASTE EXPORT OR DESCRIBE PATTERN]

Please analyze:
1. **Hourly heatmap** — transactions and revenue by hour × day of week
2. **Peak hours** — rush windows (usually 7–9am, sometimes 12–1pm, sometimes 3–5pm)
3. **Trough hours** — consistent slow periods
4. **Day-of-week variation** — weekdays vs. weekends
5. **Hour-to-hour transitions** — how fast rush ramps and fades (affects shift structure)
6. **"Below break-even" hours** — hours where revenue doesn\'t cover standard staff cost
7. **Weather-correlation** (if trackable) — rainy days vs. nice days
8. **Quarterly trend** — is volume shifting within the day (e.g. mornings softening, afternoons growing)`,
      },
      {
        number: 2,
        title: 'Set a labor-to-sales target',
        description: 'Labor cost as a % of sales is the cleanest target. 25–32% is healthy for most cafes.',
        prompt: `I want a labor-to-sales target.

My current labor cost: [approximate weekly $ or % of sales]
My wages paid (minimum range to top range): $[LOW–HIGH per hour]
My service model: [counter / full-service / drive-thru]

Please calculate:
1. **Current labor % of sales** and benchmark
2. **Target labor %** — 25–28% for counter, 28–32% for full service, 22–28% for drive-thru
3. **Weekly labor budget** at current sales — dollar target
4. **Hour budget per day** — max labor hours to hit target
5. **Day-level allocation** — how many hours per day, weighted to peak demand
6. **Position allocation** — split between barista, cashier, food prep, floor
7. **"Crossing the line" alert** — if weekly revenue comes in light, we\'re over budget; mid-week adjustment protocol
8. **Training/onboarding exception** — how to budget for new-hire labor that\'s non-productive initially`,
      },
      {
        number: 3,
        title: 'Build position-specific schedule templates',
        description: 'Not every shift needs the same positions. Schedule by demand and function.',
        prompt: `I want schedule templates by position and day-part.

My positions: [barista, cashier, food prep, floor, manager]
My day-parts: [early morning 6–8, morning rush 8–10, mid-morning 10–11, lunch 11–1, afternoon 1–4, late afternoon 4–6, close 6–7]

Please create:
1. **Peak-hour staffing template** — roles and counts during rush
2. **Mid-day staffing template** — transitioning to lower volume
3. **Slow-hour staffing template** — minimum staff for safety and service
4. **Opening crew template** — prep, setup, first customers
5. **Closing crew template** — deep clean, inventory, prep for tomorrow
6. **Weekend variation** — Saturday vs. Sunday rhythm
7. **Cross-training plan** — which positions each staff member can flex to
8. **"One-person alone" rule** — never; always minimum 2 for safety`,
      },
      {
        number: 4,
        title: 'Build a weather and event overlay',
        description: 'Your schedule should respond to known demand drivers.',
        prompt: `I want a weather and event overlay for my scheduling.

My weather sensitivity: [how much does weather impact my sales]
My known demand drivers:
[LIST — neighborhood events, nearby school dismissal, office foot traffic, weekend farmers market, etc.]

Please create:
1. **Weather-based staffing flex** — sunny days +1 staff outdoor, rainy days -1 mid-day
2. **Event-based staffing** — school dismissal, nearby events, farmers market driving volume
3. **7-day forecast check** — every Thursday, pull forecast and adjust next week\'s schedule
4. **Event calendar** — recurring events built into the base schedule
5. **"Storm day" contingency** — severe weather policy, staff safety, customer communication
6. **Holiday scheduling** — plan 2–4 weeks out, including staff holiday requests
7. **Seasonal adjustment** — summer patio adds staffing, winter reduces`,
      },
      {
        number: 5,
        title: 'Install a weekly scheduling ritual',
        description: '1 hour every Thursday, schedule posted Friday morning.',
        prompt: `I want a weekly 1-hour scheduling ritual.

My team size: [NUMBER]
My scheduling tool: [NAME or "spreadsheet"]

Please create:
1. **Weekly rhythm** — Thursday morning draft, Friday morning post, schedule starts Monday
2. **Inputs needed** — weather forecast, event calendar, staff availability, prior week\'s labor-% performance
3. **Template process** — start with position templates from Step 3, adjust for the week\'s demand drivers
4. **Staff fairness checks** — equitable distribution of peak hours, weekends, premium shifts
5. **Staff availability tracker** — how we collect time-off requests, swaps, availability changes
6. **Post-schedule communication** — post in shared channel, confirm everyone sees it, final swap deadline
7. **In-week adjustment protocol** — same-day call-outs, weather surprises`,
      },
      {
        number: 6,
        title: 'Install a weekly labor performance review',
        description: 'Monday morning, review last week\'s labor-to-sales. Adjust immediately.',
        prompt: `I want a weekly labor performance review.

Please create:
1. **Monday morning 15-min review** — last week\'s labor %, compared to target
2. **Day-level breakdown** — which days exceeded target and why
3. **Position-level review** — any role over/under-staffed consistently
4. **Mid-week flex protocol** — if Tuesday labor is over, Wednesday staffing gets trimmed
5. **Staff performance signals** — productivity during shifts, not just hours
6. **Monthly deep review** — labor trends, staff turnover, training pipeline
7. **Annual wage review** — rate adjustments, retention signals`,
      },
    ],
    expectations: {
      good: 'Cafes that implement this typically cut labor as % of sales by 2–5 percentage points within 60 days. Staff satisfaction often goes up because schedules feel less arbitrary.',
      ifBad: 'If labor cost isn\'t dropping, the issue is usually the peak-hour staffing is still reactive. Commit to the position-template discipline.',
      time: 'Initial setup: 3 hours. Weekly: 1 hour scheduling + 15 min review. Monthly review: 30 min.',
    },
    downloadFile: null,
  },
]

export default coffeeShopGuides
