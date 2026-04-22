const rentalCarGuides = [
  {
    slug: 'rentalcar-fleet-pricing',
    tier: 'pro',
    industry: 'rental-car',
    title: 'Optimize Fleet Pricing Based on Demand, Season, and Competition',
    description:
      'A dynamic fleet-pricing system — utilization-based price tiers, seasonal adjustments, event-based surge pricing, competitor monitoring, and a weekly pricing review that holds revenue above break-even.',
    difficulty: 'Advanced',
    time: '~4 hours to set up, 30 min/week ongoing',
    tools: 'ChatGPT or Claude · Your fleet utilization data · OTA and competitor rates',
    stripeUrl: null,
    intro:
      'Independent rental car operators compete against Hertz, Enterprise, and Avis with a tiny fraction of their pricing horsepower. The majors use sophisticated revenue management software that adjusts prices hundreds of times per day based on utilization, demand signals, events, and competitor moves. Independents are stuck with static weekend and weekday rates. This guide closes that gap — a practical dynamic pricing system you can run on spreadsheets and AI, designed to move prices based on real signals without requiring enterprise software. The goal: recover 10–20% of revenue currently left on the table while maintaining competitive booking rates.',
    outcomes: [
      'A utilization-based price-tier framework that adjusts daily',
      'A 12-month seasonal pricing plan',
      'An event-driven surge protocol for conferences, concerts, holidays',
      'A weekly competitor rate-monitoring ritual',
      'A pricing dashboard you check weekly to hold the line',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current fleet utilization and pricing',
        description: 'Before dynamic pricing, know your baseline utilization and which vehicle classes underperform.',
        dataNote: 'Pull: daily utilization by vehicle class, average daily rate (ADR) by class, booking channel mix (direct vs OTA), cancellation rates, length-of-rental distribution, repeat customer %.',
        prompt: `I want to audit my fleet utilization and current pricing.

My operation:
- Location: [CITY/REGION]
- Fleet size: [NUMBER]
- Vehicle classes and counts: [e.g. economy 10, compact 8, mid-size 6, SUV 5, premium 3]
- Primary booking channels: [direct, OTAs, corporate]
- Typical customer mix: [leisure / business / airport / in-town / insurance replacement]

My recent data:
[PASTE — utilization by class, ADR by class, weekly revenue, cancellation rate]

Please analyze:
1. **Utilization by class** — which vehicle classes are consistently over 80% (underpriced) vs. under 50% (overpriced or wrong mix)
2. **ADR by class** — compare to local benchmarks I provide
3. **Revenue per vehicle per day** — by class, for the full fleet
4. **OTA vs direct mix** — how much I\'m losing to OTA commissions
5. **Cancellation impact** — high cancellation rates suggest overcapacity or price-shopping
6. **Fleet mix gaps** — classes that stay over 90% utilized (need more) vs. under 40% (should be downsized)
7. **Top 3 pricing opportunities** — raise, lower, or reallocate`,
      },
      {
        number: 2,
        title: 'Build a utilization-based pricing tier framework',
        description: 'Prices should respond to real-time utilization. Base price + demand-based multipliers.',
        prompt: `I want a utilization-based pricing framework that adjusts daily.

My vehicle classes: [LIST]
My current rates: [LIST — daily rate by class]

Please create:
1. **Base rates** — the rate at 70% utilization (my target), by class
2. **Utilization tiers** — e.g., below 50%: -15%, 50–70%: base, 70–85%: +10%, 85–95%: +20%, above 95%: +30%
3. **Fleet-level vs. class-level** — adjust based on class-specific utilization, not overall fleet
4. **Daily adjustment trigger** — at what utilization delta do we change prices for tomorrow\'s bookings
5. **Floor and ceiling** — absolute minimum and maximum; prevents price wars and customer shock
6. **Channel-specific pricing** — direct vs. OTA pricing strategy (direct slightly cheaper to incentivize)
7. **A "stale inventory" rule** — 48 hours out with low utilization, trigger a promo
8. **A booking-lead-time pricing curve** — typically rates rise as date approaches if utilization is strong`,
      },
      {
        number: 3,
        title: 'Build a 12-month seasonal pricing plan',
        description: 'Every market has predictable seasonal demand. Plan pricing ahead of season, not during.',
        prompt: `I want a 12-month seasonal pricing plan.

My market: [describe — tourist-heavy, business-heavy, event-driven, year-round]
Typical seasonal patterns I observe:
[DESCRIBE — e.g. "summer June–August is peak", "holiday week is peak", "Jan–Feb is dead", etc.]

Please create:
1. **Monthly demand classification** — peak, shoulder, off-peak
2. **Base rate adjustment by month** — % above/below annual baseline
3. **Known event calendar integration** — holidays, major local events, conference seasons
4. **Early-bird pricing strategy** — discounts for booking 30+ days out in off-peak
5. **Last-minute strategy** — pricing approach for 7-day-out bookings
6. **Length-of-rental incentives** — weekly vs. daily breakpoints; when to offer weekly discount
7. **Corporate/repeat customer pricing** — protected rates for priority segments regardless of dynamic adjustments
8. **A quarterly refresh** — pull actual data, recalibrate next quarter\'s plan`,
      },
      {
        number: 4,
        title: 'Build an event-driven surge pricing protocol',
        description: 'Conferences, concerts, holidays drive predictable demand spikes. Price accordingly.',
        prompt: `I want an event-driven surge pricing protocol.

My market\'s major event drivers:
[LIST — local conferences, sporting events, concerts, tourist holidays, graduations, festivals]

Please create:
1. **Event inventory** — 10–15 recurring events per year that drive demand
2. **Surge trigger rules** — start pricing surge X days before event, end Y days after
3. **Surge magnitude by event type** — major conference (+40%), local concert (+15%), holiday weekend (+25%)
4. **Minimum-stay requirements** — for major events, require 2–3 day minimum
5. **Booking cutoff** — when to stop taking discounted bookings as event approaches
6. **Cancellation policy tightening** — strict cancel rules during surge events
7. **Inventory protection** — how to reserve capacity for walk-in business during events
8. **Post-event flood protection** — when the event ends, 2–3 day soft cancellation volume`,
      },
      {
        number: 5,
        title: 'Install weekly competitor rate monitoring',
        description: 'Rates move weekly. You need to know what the majors are charging so you can price strategically.',
        prompt: `I want a weekly competitor rate monitoring ritual.

My primary competitors:
[LIST — majors + nearby independents]

Please create:
1. **Rate-check sources** — Expedia, Priceline, Kayak, Google, direct sites
2. **Weekly check protocol** — same day each week, 30 min
3. **Rate comparison template** — for each class, my rate vs. each competitor, for 3 future dates (next weekend, 30 days out, 60 days out)
4. **Price-signal interpretation** — if Hertz drops rates 20%, what does it signal; do I follow
5. **Competitive response rules** — when to match, when to hold, when to undercut
6. **"Price war" avoidance** — signals that a competitor is aggressive enough to force a different strategy (service, loyalty, direct-booking incentives)
7. **A local-independent differentiation angle** — things I can offer that the majors can\'t (personal service, 24/7 phone, flexibility)`,
      },
      {
        number: 6,
        title: 'Install a weekly pricing review dashboard',
        description: 'Dynamic pricing only works if you actually check it weekly and adjust.',
        prompt: `I want a weekly 30-min pricing review ritual.

Please create:
1. **Dashboard metrics** — utilization by class this week, ADR vs. plan, bookings next 7/14/30 days, competitor snapshot
2. **4 weekly decisions** — adjust rates up/down, open/close OTA inventory, trigger promo for slow days, adjust event-week pricing
3. **Monthly recalibration** — are the utilization tiers (Step 2) still right
4. **Quarterly full review** — refresh seasonal plan and event calendar
5. **A "what went wrong" log** — any week we missed utilization target, diagnose the cause
6. **Team coordination** — if I have staff taking bookings, how they know the current rate for each class`,
      },
    ],
    expectations: {
      good: 'Operators who implement dynamic pricing typically lift revenue 10–20% without changing fleet or volume. The biggest wins come from event-driven surge and weekend/shoulder-day pricing that used to be static.',
      ifBad: 'If the system isn\'t producing lift, usually the issue is OTA rate parity rules. Work with your OTA contact to allow flexibility on direct vs. OTA rates.',
      time: 'Initial setup: 4 hours. Weekly review: 30 min. Monthly/quarterly refreshes: 1 hour each.',
    },
    downloadFile: null,
  },

  {
    slug: 'rentalcar-operations-playbook',
    tier: 'pro',
    industry: 'rental-car',
    title: 'Build an Operations Playbook — Maintenance, Turnover, and Damage Tracking',
    description:
      'A full operations system — vehicle turnover SOP, preventive maintenance calendar, damage inspection and documentation protocol, recall and service tracking, and weekly fleet health review.',
    difficulty: 'Advanced',
    time: '~6 hours to set up, 1 hour/day ongoing',
    tools: 'ChatGPT or Claude · Your fleet list · Service records',
    stripeUrl: null,
    intro:
      'The operational backbone of an independent rental car business is fleet readiness: cars that turn quickly, stay mechanically sound, and don\'t accumulate undocumented damage that kills their resale value. Most independents run these processes informally — staff know what to do, but there\'s no SOP, no documentation standard, and no systematic maintenance calendar. When a car is down for unexpected repairs, revenue disappears. This guide builds a full operations playbook: a turnover SOP that moves cars from return to ready in under 30 minutes, a preventive maintenance calendar that prevents unplanned downtime, a damage inspection and documentation protocol that holds customers accountable and protects resale value, and a weekly fleet health review.',
    outcomes: [
      'A vehicle turnover SOP targeting 30-min turnover',
      'A preventive maintenance calendar per vehicle type',
      'A damage inspection and documentation protocol with photo standards',
      'A recall and service-alert tracking system',
      'A weekly fleet health dashboard',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current operational performance',
        description: 'Know your baseline turnover time, unplanned downtime rate, and damage recovery rate.',
        dataNote: 'Track for 30 days: average turnover time per vehicle, vehicles with unplanned downtime per month (and duration), customer damage claims filed and recovered, preventive maintenance completion rate, average monthly service spend per vehicle.',
      },
      {
        number: 2,
        title: 'Write the turnover SOP',
        description: 'Every minute between return and ready is lost revenue. A standardized turnover takes the variability out.',
        prompt: `I want a turnover SOP that gets cars from return to ready in under 30 minutes.

My fleet size and types: [LIST]
My turnover staff: [NUMBER of people, typical roles]
My turnover environment: [covered service bay / outdoor / mobile]

Please create:
1. **A 30-minute turnover workflow** — minute-by-minute, from return to "ready"
2. **Step 1: Intake inspection (5 min)** — walkaround, interior, fuel level, odometer, damage check vs. prior photos
3. **Step 2: Cleaning (15 min)** — interior vacuum, window clean, exterior wash or touch-up, trash removal, sanitizing, fresh floor mats
4. **Step 3: Mechanical check (5 min)** — fluids, tire pressure, warning lights, spare tire, mirrors, adjustments reset
5. **Step 4: Ready (5 min)** — re-photo damage, update system, position for next customer
6. **Role assignments** — who does what in a 2-person crew vs. 1-person crew
7. **Quality check** — lead approval before "ready" status
8. **Daily metrics** — average turnover time, failures (cars not meeting standard)
9. **"Turnover failure" protocol** — when cars come in too dirty/damaged for 30-min turnaround, re-route to deep-clean or service`,
      },
      {
        number: 3,
        title: 'Build the preventive maintenance calendar',
        description: 'Unplanned downtime destroys margin. Plan maintenance so cars are serviced during slow periods, not pulled from duty during peak.',
        prompt: `I want a preventive maintenance calendar for my fleet.

My fleet composition: [LIST — make, model, year, mileage tier]
My typical daily mileage per vehicle: [AVERAGE]
My service providers: [in-house / outsourced / dealer]

Please create:
1. **Service interval standards** — by mileage AND time, for each vehicle class (oil, tires, brakes, coolant, transmission, major services)
2. **A fleet-level calendar** — staggered so we don\'t have multiple cars out at once
3. **"Service during slow periods"** rule — calendar aligns with expected low-utilization days/weeks
4. **A pre-peak-season fleet blitz** — before high-demand periods, full PM on 100% of fleet
5. **Service alerts** — how we know a car is approaching its service interval (telematics, manual tracking, or mileage check at turnover)
6. **Service log** — one row per service event per vehicle; running history
7. **Warranty tracking** — which services are still covered; cost protection
8. **Replacement trigger** — when maintenance costs suggest a car should be sold`,
      },
      {
        number: 4,
        title: 'Install the damage inspection and documentation protocol',
        description: 'Every dispute starts with "I didn\'t do that." Photo-first documentation closes the loop.',
        prompt: `I want a damage inspection and documentation protocol.

My current process: [describe or "informal"]
My damage claim success rate: [% if known]

Please create:
1. **Pre-rental inspection standard** — 15-point walkaround, 12+ photos (all sides, wheels, interior corners, dash odometer)
2. **Customer sign-off** — digital signature confirming damage log before handoff
3. **Post-rental inspection** — same 15 points, same 12+ photos, comparison
4. **Damage classification** — fair wear (don\'t charge), chargeable damage (mild / moderate / total loss)
5. **Photo storage** — naming convention, access, retention for 90+ days
6. **Damage claim workflow** — from discovery to customer notification to collection
7. **"Diminished value" consideration** — documented on visible damage, even when repaired
8. **Fraud detection signals** — customer pushes back on things photographed at rental, returns at odd hours, etc.
9. **A customer-friendly first-contact** — "we found this damage, here are the photos, here\'s the process" that\'s firm but not adversarial
10. **Small-claims / insurance protocol** — when to escalate beyond credit card hold`,
      },
      {
        number: 5,
        title: 'Install a recall and service-alert tracking system',
        description: 'Unreported recalls and missed service alerts create safety and liability risk.',
        prompt: `I want a recall and service-alert tracking system.

My fleet: [LIST of makes/models]

Please create:
1. **A recall tracker** — for each VIN, registration with each manufacturer\'s recall notification
2. **Quarterly recall check** — manual verification via NHTSA / manufacturer lookup
3. **Recall response protocol** — when a recall hits, immediate grounding or service priority
4. **Service alerts** — OBD / telematics-based alerts, or manual flagging during turnover
5. **"Do not rent" tags** — when a car is flagged, how we physically and systemically prevent dispatch
6. **Documentation retention** — recall and service records kept for the life of the vehicle + resale
7. **State inspection compliance** — scheduled alerts before expiration
8. **Liability protection** — what documents we keep in the glove box and in the office`,
      },
      {
        number: 6,
        title: 'Install a weekly fleet health dashboard',
        description: 'A 30-minute weekly review catches brewing issues before they become downtime.',
        prompt: `I want a weekly 30-min fleet health review.

My fleet size: [NUMBER]

Please create:
1. **Weekly dashboard** — vehicles in service, vehicles in PM, vehicles down, unplanned downtime this week, damage claims open, damage recoveries this week
2. **4 weekly decisions** — what to service next week, which cars to prioritize for return to service, which claims to escalate, any fleet gaps
3. **Monthly vehicle-level check** — per-VIN review of mileage, recent service, profitability contribution
4. **Quarterly fleet disposition review** — which vehicles to sell, which to keep, fleet mix adjustments
5. **Annual PM audit** — are we hitting service intervals, what\'s slipping
6. **A "crisis" protocol** — what to do when a car needs unexpected major repair mid-month`,
      },
    ],
    expectations: {
      good: 'Operators who implement this system typically cut turnover time 30–50% and reduce unplanned downtime by 40–60%. Damage recovery rates typically double because the documentation is now defensible.',
      ifBad: 'If damage disputes keep going the customer\'s way, the issue is photo quality or timing. Invest in better lighting and a consistent 12-photo standard.',
      time: 'Initial setup: 6 hours. Daily turnover: already in workflow, just standardized. Weekly review: 30 min.',
    },
    downloadFile: null,
  },

  {
    slug: 'rentalcar-channel-strategy',
    tier: 'pro',
    industry: 'rental-car',
    title: 'Marketing and Channel Strategy — OTAs vs Direct Bookings',
    description:
      'A channel strategy that grows direct bookings without cutting OTA volume — commission math, direct-booking incentives, loyalty hooks, local SEO, corporate contracts, and a monthly channel mix review.',
    difficulty: 'Intermediate',
    time: '~4 hours to set up, 2 hours/month ongoing',
    tools: 'ChatGPT or Claude · Your channel mix data · OTA contracts',
    stripeUrl: null,
    intro:
      'OTA commissions (Expedia, Kayak, Priceline) typically eat 15–25% of each booking. That\'s enough margin to make or break an independent\'s P&L. But OTAs also deliver customer volume you can\'t replace overnight. The right strategy is not to cut OTAs — it\'s to shift the mix slowly toward direct while keeping OTA volume as a base. This guide builds a full channel strategy: direct-booking incentives that don\'t trigger OTA rate-parity violations, a simple loyalty system that locks in repeat direct bookings, local SEO that captures buyer-intent searches, corporate account development, and a monthly channel mix review.',
    outcomes: [
      'A channel mix target and 12-month path to shift toward direct',
      'Direct-booking incentives that survive OTA rate-parity rules',
      'A simple loyalty system that rewards direct-booking repeat customers',
      'A local SEO plan to capture direct-search buyers',
      'A corporate-contract pursuit playbook',
      'A monthly channel mix review',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit current channel mix and true profitability per channel',
        description: 'Most operators don\'t know their true margin per booking by channel. The math is ugly but necessary.',
        dataNote: 'Pull 90 days: bookings by channel (direct site, walk-in, OTA — each OTA separately, corporate, insurance), revenue by channel, commission paid by channel, average rental length, cancellation rate by channel, repeat rate by channel.',
        prompt: `I want a true-margin-per-channel analysis.

My channels:
- Direct (website, phone): [% of bookings, revenue]
- Walk-in: [% of bookings, revenue]
- Expedia / Priceline / Kayak: [% each]
- Corporate contracts: [%]
- Insurance replacement: [%]
- Other: [describe]

My commission rates by channel: [LIST — e.g. Expedia 15%, Priceline 20%]
My cancellation rates by channel: [LIST if known]
My typical rental length by channel: [LIST if known]

Please analyze:
1. **Gross revenue per channel**
2. **Net revenue per channel** — after commissions
3. **Margin per booking** by channel — net revenue - variable costs (cleaning, admin, payment processing)
4. **Lifetime value** by channel — repeat rate × margin per visit
5. **True channel ranking** — not by volume, by total margin contribution
6. **The "hidden cost" channels** — channels with high cancellation or damage claims that cost more than headline commission
7. **The 12-month shift opportunity** — if I moved X% of OTA bookings to direct, net revenue impact`,
      },
      {
        number: 2,
        title: 'Build direct-booking incentives that survive rate-parity',
        description: 'OTAs prohibit lower prices on your direct site. But they can\'t prohibit value-adds.',
        prompt: `I want direct-booking incentives that don\'t violate OTA rate parity rules.

My current OTA contracts: [identify restrictions if known]

Please create:
1. **Value-add incentives (not discounts)** — free upgrade when available, late return privilege, free extra driver, prepaid fuel option, premium class upgrade on long rentals
2. **Member-only pricing tier** — if direct customers enroll in a free loyalty program, they get member rates (different from published rates; contractual with most OTAs)
3. **Direct-only perks** — higher insurance coverage included, extended damage waivers, personal concierge contact
4. **Friction-reduction vs. discount** — faster check-in, keys-ready-at-arrival, mobile app booking, skip-the-counter
5. **Bundled packages** — rental + car seat + GPS as a direct-site package
6. **"Best available rate guarantee"** — if they find cheaper, match + something extra
7. **A "never do this" list** — discount language or promotions that would trigger OTA penalty
8. **A legal review note** — confirm with OTA account rep before launching`,
      },
      {
        number: 3,
        title: 'Build a simple loyalty program',
        description: 'Complex points systems fail. A simple earn-a-free-day-after-7-rentals model works and locks in direct bookings.',
        prompt: `I want a simple loyalty program for direct-booking customers.

My typical customer mix: [leisure / business / airport / in-town / insurance]

Please design:
1. **Program structure** — "every 7th day free" OR "earn free upgrade after 5 rentals" OR simple stamp-card style
2. **Enrollment friction** — ideally zero; email + consent is enough
3. **Tracking mechanism** — how we associate bookings to a customer, across channels (email match is easiest)
4. **Reward redemption** — how they cash in
5. **Tier structure (optional)** — 3 tiers (Bronze/Silver/Gold) or just one level
6. **Communication rhythm** — enrollment confirmation, progress update after each rental, redemption prompt
7. **Exclusions** — insurance replacement bookings, corporate contracts (they have their own rates)
8. **Program launch** — how to announce to existing customer list
9. **Metrics** — enrollment rate, redemption rate, repeat rate lift, direct channel share lift`,
      },
      {
        number: 4,
        title: 'Build a local SEO plan for direct-search buyers',
        description: 'Customers who search "car rental in [city]" directly instead of on Expedia are valuable. Be findable.',
        prompt: `I want a local SEO plan.

My market: [CITY/REGION]
My current Google Business Profile status: [good / average / neglected]
My website: [platform and age]

Please create:
1. **Target keyword list** — "[city] car rental", "[airport code] car rental", "cheap car rental [city]", "one-way rental [city]", niche terms (SUV, luxury, moving)
2. **Google Business Profile optimization** — photos, posts, Q&A, reviews strategy, service list, attributes
3. **Website on-page SEO** — title tags, meta descriptions, H1s, location pages
4. **Review generation** — post-rental email requesting review, with link
5. **Content strategy** — 5–10 local landing pages ("best car rental for [use case] in [city]")
6. **Local citation audit** — Yelp, Yellow Pages, TripAdvisor, industry directories; consistency
7. **Backlink strategy** — local partnerships (hotels, event venues, tour operators, chambers)
8. **Schema markup** — LocalBusiness, AutoRental, Review schemas
9. **Mobile experience audit** — most searches are mobile; site must load fast and convert
10. **Quarterly ranking check**`,
      },
      {
        number: 5,
        title: 'Build a corporate-contract pursuit playbook',
        description: 'Corporate accounts are predictable, high-margin, low-commission. Build deliberately.',
        prompt: `I want a corporate-contract pursuit playbook.

My market: [describe corporate concentration — lots of business travelers / mostly leisure]
My typical corporate account size: [rough guess]

Please create:
1. **Target account list building** — industries that rent regularly (construction, healthcare, consulting, relocation, film production, event companies)
2. **Initial outreach template** — warm, positioned around pain points corporate travel managers care about (invoicing, approval workflows, priority availability, accident coverage)
3. **Value proposition** — what we offer vs. the majors (personal service, flexibility, local knowledge, 24/7 direct contact)
4. **Contract framework** — negotiated rate, billing terms, vehicle class flexibility, priority access, accident liability terms
5. **Onboarding process** — once signed, what we need (employee list, authorization protocol, billing contact)
6. **Account management cadence** — quarterly check-ins, usage reports, upsell opportunities
7. **Case study development** — testimonials from existing corporate accounts
8. **Trade-show and networking strategy** — where travel managers gather
9. **A "not-a-fit" filter** — corporate accounts that look big but are margin-negative (high cancellation, demanding discount pressure)`,
      },
      {
        number: 6,
        title: 'Install a monthly channel mix review',
        description: 'Channel mix drifts. A monthly ritual keeps the strategy intentional.',
        prompt: `I want a monthly 1-hour channel mix review.

Please create:
1. **Monthly dashboard** — channel mix (revenue and bookings), margin per channel, OTA commission paid, loyalty enrollment, direct-site conversion rate
2. **4 monthly decisions** — any channel to push or cut, any OTA contract to renegotiate, any direct-booking incentive to adjust, any corporate account to pursue
3. **Quarterly deep review** — true-margin-per-channel refresh, corporate pipeline status, SEO ranking check
4. **Annual OTA contract review** — renegotiate commissions, rate parity exceptions, co-op marketing funds
5. **A "walk away" OTA threshold** — if any OTA\'s effective margin drops below X, consider delisting`,
      },
    ],
    expectations: {
      good: 'Operators who execute this strategy typically shift 5–15 points of channel mix from OTA to direct over 12 months, translating to 2–5 points of net margin improvement without losing volume.',
      ifBad: 'If direct-site conversion isn\'t improving, the issue is usually the website UX (booking friction, pricing clarity) rather than channel strategy. Fix the site first.',
      time: 'Initial setup: 4 hours. Monthly review: 1 hour. Corporate pursuit: 2–4 hours/month.',
    },
    downloadFile: null,
  },

  {
    slug: 'rentalcar-loyalty-program',
    tier: 'pro',
    industry: 'rental-car',
    title: 'Design a Customer Loyalty Program That Drives Repeat Rentals',
    description:
      'A loyalty system that turns one-time renters into repeat customers — simple point structure, tiered benefits that get customers chasing the next level, automated communications, win-back for lapsed members, and quarterly optimization.',
    difficulty: 'Intermediate',
    time: '~3 hours to design, 6-week launch',
    tools: 'ChatGPT or Claude · Your customer data · Email/SMS tools',
    stripeUrl: null,
    intro:
      'Independent rental car operators have a huge untapped asset: every customer they\'ve rented to before. Without a loyalty system, those customers are one-and-done — they\'ll book wherever\'s cheapest next time. A simple loyalty program turns 30–50% of first-time customers into repeat customers within 12 months. This guide builds a complete loyalty system designed for the rental car market: tiered benefits that motivate customers to keep coming back, automated communications that feel personal, a win-back system for lapsed members, and quarterly optimization to keep it fresh.',
    outcomes: [
      'A 2–3 tier loyalty structure with meaningful level differences',
      'Automated member communications from enrollment through rewards',
      'A win-back sequence for lapsed loyalty members',
      'Launch materials — staff scripts, email campaigns, in-counter signage',
      'A quarterly review to optimize the program',
    ],
    steps: [
      {
        number: 1,
        title: 'Design the tier structure and benefits',
        description: '2–3 tiers with meaningful differences. Each tier should feel like a real upgrade.',
        prompt: `I want to design a loyalty tier structure for my rental car business.

My customer base: [leisure / business / mixed, approximate volume]
My average booking value: $[AMOUNT]
My business goals: [grow repeat customers / increase direct bookings / increase avg rental length]

Please design:
1. **Tier 1: Silver (enrollment)** — free to join; benefits: free membership, skip-counter for returns, welcome upgrade on 3rd rental, email notifications of deals
2. **Tier 2: Gold (5+ rentals/year)** — free upgrade each rental (subject to availability), priority phone line, guaranteed late return 1 hour, bonus on every rental
3. **Tier 3: Platinum (10+ rentals/year)** — guaranteed upgrade each rental, free additional driver, dedicated account rep, complimentary rental day after 10th rental
4. **Qualification logic** — rolling 12-month window vs. calendar year
5. **Tier maintenance** — grace period for downgrade (customer doesn\'t drop a tier on the first missed threshold)
6. **Business value check** — is each tier\'s benefit cost less than the margin lift from the loyalty behavior
7. **Comparison to competitor loyalty** — what do Hertz Gold/Avis Preferred offer; what can I match/exceed on personal touch`,
      },
      {
        number: 2,
        title: 'Build enrollment flow and first-90-day communication',
        description: 'Enrollment should be effortless. First 90 days establish the habit.',
        prompt: `I want an enrollment flow and first-90-day communication sequence.

My enrollment channels: [rental counter, website, email after rental]
My email/SMS capability: [what I use]

Please create:
1. **Enrollment offer** — "enroll free today, get [small welcome benefit on next rental]"
2. **Multi-channel enrollment** — at counter (staff script), on confirmation email, post-rental
3. **Welcome email** — delivered immediately, warm, reinforces the benefits earned
4. **"Your first benefit" reminder** — 7–14 days post-enrollment, remind them of what\'s waiting
5. **Behavior-building sequence** — monthly email connecting to travel plans, rental tips, local event tie-ins
6. **3-month check-in** — celebrate progress toward next tier, reinforce benefits used
7. **Birthday / anniversary touch** — personal, light
8. **Exclusive members-only rates** — highlight member pricing vs. published rates on select inventory`,
      },
      {
        number: 3,
        title: 'Build tier-climb motivation and recognition',
        description: 'Customers climb tiers when they feel progress is real and recognized.',
        prompt: `I want communications that motivate customers to climb tiers and feel recognized at each level.

My tiers: [FROM STEP 1]

Please create:
1. **Progress-to-next-tier reminders** — sent after each rental, "you\'re X rentals away from Gold"
2. **Tier-up celebration** — automated email + physical gesture (handwritten note, complimentary service on next rental)
3. **Exclusive-access moments** — tier-specific offers, first-look at new vehicles, local event invites
4. **"You unlocked" messaging** — benefits become available, moment of delight
5. **Platinum-only personal outreach** — quarterly call or video message from the owner/GM
6. **Anniversary recognition** — 1-year, 3-year, 5-year tenure acknowledgments
7. **A "no points expiring" policy** — removes the gamification pressure and feels generous
8. **Social recognition** — "member milestone" posts on social (with permission)`,
      },
      {
        number: 4,
        title: 'Build a win-back sequence for lapsed members',
        description: 'Members who haven\'t rented in 6+ months aren\'t gone — they\'re recoverable.',
        prompt: `I want a win-back sequence for lapsed loyalty members.

My lapsed definitions:
- 6–12 months since last rental: [cold]
- 12–24 months: [very cold]
- 24+ months: [likely gone]

Please create:
1. **6-month "we miss you"** — warm email, small offer (tier-level upgrade guaranteed on next rental)
2. **12-month reach** — more substantial — a percentage off next rental OR a free rental-day reward
3. **24-month final touch** — graceful, personal, no immediate ask ("here\'s what\'s new, if the timing is right")
4. **"Why they left" survey** — for lapsed members who respond, 3 questions to learn what went wrong
5. **Automated triggers** — based on time-since-last-rental, not manual outreach
6. **A "never again" list** — members who unsubscribe or explicitly say not to contact
7. **Tracking** — win-back rate per stage, best-performing offer type`,
      },
      {
        number: 5,
        title: 'Write launch materials',
        description: 'Launch is a moment. Staff, signage, and existing customer communication all matter.',
        prompt: `I want launch materials for my loyalty program.

My launch date: [DATE]
My existing customer list size: [NUMBER]
My channels: [email, website, in-counter]

Please create:
1. **Launch announcement email** — to existing customer list; warm, exciting, clear benefits
2. **Website landing page** — loyalty program page with tier comparison, signup form, FAQ
3. **In-counter signage** — table tent + counter card + poster
4. **Staff enrollment script** — 30-second pitch at checkout for every renter
5. **Staff FAQ** — top 10 questions customers will ask
6. **Social launch posts** — 3 posts over 2 weeks (launch, benefit highlight, first-member spotlight)
7. **Partner promotion** — hotels, event venues, tour operators who can promote our loyalty to their guests
8. **First-30-day metrics** — enrollment rate target, adjustments if below target`,
      },
      {
        number: 6,
        title: 'Install a quarterly optimization review',
        description: 'Loyalty programs decay without tuning. Quarterly reviews keep it working.',
        prompt: `I want a quarterly 1-hour loyalty program review.

Please create:
1. **Quarterly dashboard** — member count by tier, enrollment rate, active member rate (booked in last 6 months), repeat rate per tier, redemption rate, incremental revenue from members vs. non-members
2. **4 quarterly questions** — Is enrollment on pace? Is tier progression healthy? Are benefits being used? Is the program driving incremental behavior or rewarding what would happen anyway?
3. **Benefit adjustment triggers** — underused benefits to replace, overused benefits costing too much
4. **New benefit experiments** — seasonal perks, partner benefits, surprise rewards
5. **Annual program audit** — comprehensive review, including comparison to competitor programs
6. **Communication calendar** — 12-month view of member comms`,
      },
    ],
    expectations: {
      good: 'A well-designed program typically lifts repeat-customer rate 30–50% within 12 months and drives meaningful direct-channel growth. Platinum members alone often account for 25–40% of direct bookings despite being 5–10% of the member base.',
      ifBad: 'If enrollment is strong but activity isn\'t, the benefits aren\'t compelling. Revisit Step 1 benefits; add 1–2 things people actually care about (priority access, free upgrade, waiver waive).',
      time: 'Initial design: 3 hours. 6-week launch. Quarterly optimization: 1 hour.',
    },
    downloadFile: null,
  },
]

export default rentalCarGuides
