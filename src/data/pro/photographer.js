const photographerGuides = [
  {
    slug: 'photographer-pricing',
    tier: 'pro',
    industry: 'photographer',
    title: 'Price Your Work Without Losing Clients',
    description:
      'A full pricing system — true cost analysis, local market positioning, 3-tier package structure, price increase communication, and a quarterly pricing review that keeps you profitable as costs shift.',
    difficulty: 'Advanced',
    time: '~3 hours to set up, 30 min/quarter ongoing',
    tools: 'ChatGPT or Claude · Your cost and booking data',
    stripeUrl: null,
    intro:
      'Pricing is the single biggest anxiety for independent photographers. Charge too little and you’re working for free after expenses. Charge too much without framing and clients ghost. The problem isn’t your talent — it’s that most photographers haven’t calculated their true cost per shoot or structured packages to guide clients toward the right tier. This guide builds a complete pricing system: a true-cost calculator that captures all the hidden expenses, local market positioning research, a 3-tier package structure engineered to guide clients to the right choice, a price increase script that preserves relationships, and a quarterly review that keeps your pricing aligned with reality.',
    outcomes: [
      'A true cost-per-shoot calculation including all hidden expenses',
      'A local market positioning report to benchmark against competitors',
      'A 3-tier package structure with the middle tier as the sweet spot',
      'A complete price increase announcement with client communication',
      'A quarterly pricing review that keeps rates current',
    ],
    steps: [
      {
        number: 1,
        title: 'Calculate your true cost per shoot',
        description: 'Most photographers dramatically underestimate their real costs. Capture every input before pricing anything.',
        dataNote: 'Gather: annual business expenses (gear depreciation, software subscriptions, insurance, taxes, education), typical hours per shoot type (shoot time + editing time + prep + travel + admin), non-billable hours (marketing, client comms, accounting).',
        prompt: `I want to calculate my true cost per shoot.

My business:
- Primary shoot types: [LIST — e.g. weddings, family portraits, headshots, brand, newborn]
- Annual shoots by type: [NUMBERS]
- Years in business: [YEARS]

My annual costs:
- Gear (depreciation over 3–5 years): $[AMOUNT]
- Software (Lightroom, Photoshop, cloud storage, website, CRM): $[AMOUNT]
- Insurance (business liability, gear, health): $[AMOUNT]
- Taxes (estimated self-employment): [% of revenue]
- Education and conferences: $[AMOUNT]
- Marketing (ads, website, print): $[AMOUNT]
- Studio/space (if applicable): $[AMOUNT]
- Retirement contributions: $[AMOUNT]

My time per shoot type:
[FOR EACH SHOOT TYPE: shoot hours, editing hours, prep hours, travel hours, admin hours]

Please calculate:
1. **True hourly cost** — all annual costs ÷ total billable hours across all shoots
2. **Minimum viable hourly rate** — true hourly cost + target profit margin (e.g. 30%)
3. **Cost per shoot type** — all-in cost for a typical shoot of each type
4. **Minimum viable price per shoot type** — including profit
5. **Non-billable time tax** — hours spent on marketing/admin per year, translated into an hourly "overhead" uplift
6. **Retirement/healthcare uplift** — most photographers forget these; add 20–30% to account for self-employment benefits
7. **My real profit margin at current pricing** — plug in current package prices, show the truth`,
      },
      {
        number: 2,
        title: 'Research your local market positioning',
        description: 'Pricing in isolation is guessing. Benchmark against your local competitors.',
        prompt: `I want to research my local market positioning.

My business:
- Market: [CITY/REGION]
- My positioning: [budget / mid-market / premium / luxury]
- My years of experience: [YEARS]
- My portfolio strengths: [DESCRIBE]
- My awards / press / recognition: [LIST]

My competitive landscape:
- 3–5 photographers in my market with their public pricing or package info if I have it: [LIST]
- My perceived competitors' experience level: [assessment]

Please help me:
1. **Market tier map** — typical price ranges for each positioning tier in my market for each of my shoot types
2. **My actual positioning** — based on my experience, portfolio, and pricing, where do I really sit
3. **Positioning gap** — if there's a mismatch between where I am and where I think I am
4. **Market gaps** — underserved segments, price points no one is occupying
5. **Recommended positioning** — stay where I am, move up, move down; with 3 reasons
6. **Minimum rates for my market** — below what price am I devaluing the work`,
      },
      {
        number: 3,
        title: 'Build a 3-tier package structure',
        description: 'A well-designed 3-tier structure makes the middle tier the obvious pick and normalizes the top tier as a real option.',
        prompt: `I want to design a 3-tier package structure for my most common shoot types.

My cost analysis: [FROM STEP 1]
My market positioning: [FROM STEP 2]
My most common shoot types: [LIST]

For each shoot type, please design:
1. **3 tiers** — Good, Better, Best
2. **Middle tier as default** — engineered to be the obvious value pick
3. **Top tier as aspirational** — 40–60% more than middle, with clear extra value (more images, more time, album, prints, second shooter)
4. **Bottom tier as floor** — slightly stripped down, priced to be a real option but clearly less
5. **Price anchoring** — specific price points using psychological pricing
6. **Feature differentiation** — each tier's included services in a way that makes skipping middle feel like missing out
7. **Add-on menu** — a la carte items (extra hour, album upgrade, second location, rush delivery) that make the top tier easier to justify
8. **Package presentation** — how to display these on website/proposal so the middle tier is visually and psychologically central`,
      },
      {
        number: 4,
        title: 'Write the price increase announcement',
        description: 'How you announce a price increase matters more than the increase itself. Preserve trust with existing clients.',
        prompt: `I'm raising prices. I want to communicate the change to existing clients in a way that preserves trust.

My increase: [% or $ amount]
Effective date: [DATE]
My client base: [mostly one-time / repeat / referral-heavy]
My brand voice: [warm / professional / artistic]

Please write:
1. **An email announcement** to past clients — warm, transparent, explains the why (investment in craft, rising costs, reinvestment in clients), no over-apologizing
2. **A "grandfather" offer** — for clients with deposits or inquiries at old pricing; honor their quote for 60 days
3. **An updated website pricing display** — how to phrase the new pricing without calling attention to the change
4. **A social media version** — short, positive, brand-consistent
5. **Personal outreach to top-repeat clients** — high-touch note acknowledging their loyalty
6. **Objection response** — for the client who pushes back ("your old price was X"), warm but firm
7. **Decline script** — for the client who can't make the new pricing work; graceful recommendation to another photographer`,
      },
      {
        number: 5,
        title: 'Build a package presentation that sells the middle tier',
        description: 'The package document itself does most of the selling. Design it to guide without pressure.',
        prompt: `I want a package presentation PDF or web page that guides clients to the middle tier.

My package structure: [FROM STEP 3]

Please design:
1. **A visual hierarchy** — 3 tiers side-by-side, middle tier visually emphasized (badge, slight lift, color)
2. **Tier names** — evocative, not generic ("The Essentials / The Collection / The Signature" beats "Bronze / Silver / Gold")
3. **Opening paragraph** — story-driven, not list-driven; frame the decision emotionally
4. **Feature table** — checkmark grid that makes the middle tier look full and the bottom tier look light
5. **Most Popular badge** — on the middle tier
6. **Add-on section** — after the tiers, to normalize upgrades
7. **Testimonials or portfolio** — interspersed between tiers
8. **FAQ section** — pre-empts common objections
9. **Booking CTA** — clear, single primary action
10. **A plain-text version** — for email and quick reference`,
      },
      {
        number: 6,
        title: 'Install a quarterly pricing review',
        description: 'Your costs change. Your market changes. A quarterly review keeps pricing aligned.',
        prompt: `I want a quarterly pricing review ritual.

Please create:
1. **Quarterly 30-min ritual** — review Step 1 cost inputs (any big changes?), review Step 2 market (new competitors, price shifts), review Step 3 package performance (which tier is clients picking most?)
2. **Tier mix analysis** — if 80% of clients pick the bottom tier, middle is probably overpriced. If 80% pick top, raise all tiers.
3. **Margin check** — what's my actual realized margin this quarter
4. **Booking conversion check** — inquiry-to-booking rate; if dropping, price may be off
5. **Inflation adjustment** — annually, raise prices by at least inflation + 3%
6. **Major review trigger** — every 2–3 years, rebuild from Step 1 rather than tweak`,
      },
    ],
    expectations: {
      good: 'Most photographers discover they were 20–40% underpriced when they do the true-cost calculation. Structured packages with a clear middle tier typically shift 60–80% of bookings to the middle tier (vs. mostly-bottom-tier under flat menus).',
      ifBad: 'If inquiries drop sharply after a price increase, the issue is usually the communication (not the price). Revisit the announcement approach.',
      time: 'Initial build: 3 hours. Quarterly review: 30 min. Annual deep review: 2 hours.',
    },
    downloadFile: null,
  },

  {
    slug: 'photographer-portfolio-site',
    tier: 'pro',
    industry: 'photographer',
    title: 'Build a Portfolio Site and Online Presence That Actually Books Clients',
    description:
      'A complete online presence system — portfolio curation for conversion, SEO for local searches, inquiry flow that converts, social strategy that feeds the website, and a quarterly review.',
    difficulty: 'Intermediate',
    time: '~6 hours to set up, 2 hours/month ongoing',
    tools: 'ChatGPT or Claude · Your portfolio · Your website platform',
    stripeUrl: null,
    intro:
      'Most photographers have a portfolio site that looks good to other photographers but doesn’t convert potential clients. The gallery-first layout, the lack of clear pricing signals, and the missing inquiry friction all work against the business. This guide builds a portfolio site and online presence engineered for booking: curation that speaks to clients not peers, SEO that ranks for the searches clients actually run, an inquiry flow that converts browsers to deposits, and a social strategy that feeds the website rather than competing with it.',
    outcomes: [
      'A portfolio curated for client decisions, not peer approval',
      'SEO optimized for local, buyer-intent searches',
      'An inquiry flow that converts interested visitors',
      'A social strategy that feeds the website instead of existing in isolation',
      'A quarterly portfolio and site performance review',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current site through a client’s eyes',
        description: 'Photographers build sites for other photographers. Clients think differently.',
        prompt: `I want to audit my portfolio site through a client's eyes, not a photographer's.

My site URL: [URL]
My primary shoot types: [LIST]
My target client: [describe — budget range, life stage, aesthetic preferences]

Please evaluate:
1. **First impression** — within 3 seconds of landing, does the client know what I shoot, who I serve, and how to engage?
2. **Portfolio curation** — is my top work visible immediately, or buried under filler
3. **Client-focused vs. peer-focused copy** — do I talk about my process (peers care) or their outcome (clients care)
4. **Pricing signal** — does the client have any idea if I'm in their budget before inquiring
5. **Trust signals** — reviews, credentials, press, recognizable brands
6. **Call to action** — one primary CTA per page or several competing ones
7. **Mobile experience** — how does it feel on a phone
8. **Load time** — fast or laggy
9. **Inquiry friction** — how many clicks/fields between interest and first contact
10. **Top 3 things to fix first** — ranked by impact on conversion`,
      },
      {
        number: 2,
        title: 'Curate your portfolio for conversion',
        description: 'Fewer, better images that speak to the client\'s decision. Remove anything that distracts.',
        prompt: `I want to re-curate my portfolio for conversion.

My shoot types and roughly how many images I have per type: [LIST]
My target client's aesthetic: [modern / classic / editorial / documentary / etc.]
My weakest shoot type that I want to stop attracting: [if any]

Please advise:
1. **Target image count per gallery** — typically 20–40, not 100
2. **Opening image criteria** — the first image in each gallery should tell the whole story
3. **Culling rules** — what to cut (redundant shots, weaker compositions, out-of-style work)
4. **"Don't show" categories** — shoot types you no longer want to book
5. **Variety requirements** — diverse skin tones, body types, family compositions, settings
6. **Image flow** — sequencing logic (emotional arc, aesthetic progression)
7. **Gallery navigation** — intuitive vs. confusing
8. **A "before you launch" checklist** — client-representative proxy review before going live`,
      },
      {
        number: 3,
        title: 'Optimize for local buyer-intent SEO',
        description: 'Clients search "[city] wedding photographer" not "photojournalistic capture." Rank for what they type.',
        prompt: `I want to optimize my site for local buyer-intent search.

My market: [CITY/REGION]
My shoot types I want to rank for: [LIST]
My competition: [estimate — saturated / moderate / thin]
My site platform: [Squarespace / Showit / WordPress / custom]

Please create:
1. **Target keyword list** — 10–15 phrases real clients search (e.g. "[city] wedding photographer", "[city] family photos", "[neighborhood] engagement session")
2. **Page-level SEO strategy** — one landing page per shoot-type + city combination
3. **Title tag and meta description templates** — keyword-rich, click-worthy
4. **Image alt text standard** — descriptive, naturally keyword-inclusive
5. **Location pages** — sub-pages for neighborhoods/venues I work frequently
6. **Blog strategy** — which 3–5 blog topics to write first that rank for client searches
7. **Google Business Profile** — optimize the hell out of it (photos, posts, reviews, categories)
8. **Local schema markup** — what to add to each page
9. **Review strategy** — how to get Google reviews from past clients
10. **Quarterly SEO review** — what to check, adjust`,
      },
      {
        number: 4,
        title: 'Build an inquiry flow that converts',
        description: 'Inquiry friction kills bookings. Design the flow for momentum.',
        prompt: `I want to redesign my inquiry flow for conversion.

My current flow: [describe — what happens from "Contact" button to first email]
My average inquiry-to-booking rate: [% if known]
My typical inquiry response time: [HOURS]

Please create:
1. **Ideal inquiry form** — fields to collect (name, email, date, type of shoot, location, budget range if I dare, how they found me)
2. **Budget range field** — how to present (radio buttons, ranges, or omit)
3. **Auto-responder** — immediate email confirming receipt, setting expectations for response time
4. **24-hour response commitment** — process to ensure I hit it
5. **First-response email template** — warm, brand-consistent, single CTA (e.g. "let's jump on a quick call / here's my pricing guide")
6. **Pricing guide PDF** — send automatically with first response, tiered (Step 3 from pricing guide)
7. **Discovery call script** — 15–20 min, structured so it converts
8. **Booking-ready email** — proposal or contract delivery
9. **Follow-up sequence** — for inquiries that went quiet (48h, 1 week, 2 weeks)
10. **"Not a fit" template** — graceful decline when the inquiry is off-brand`,
      },
      {
        number: 5,
        title: 'Build a social strategy that feeds the website',
        description: 'Social is top-of-funnel. The goal is to route attention to the site where clients actually book.',
        prompt: `I want a social strategy that feeds my website.

My primary platform: [Instagram / TikTok / Pinterest / multi-platform]
My current following: [NUMBER]
My posting cadence: [describe]

Please create:
1. **Content framework** — 3 post types: portfolio showcases, behind-the-scenes, educational/tips (30/30/30)
2. **Posting cadence** — sustainable for a busy shooter
3. **Link-in-bio strategy** — not a link tree; curated, rotating, drives to booking pages
4. **Story/Reel strategy** — what converts vs. what's entertainment
5. **Bio optimization** — what the first-time visitor learns in 2 seconds
6. **Call-to-action pattern** — each post ends with a CTA (sometimes soft, sometimes direct)
7. **Hashtag strategy** — local and niche, 15–25 per post, rotated
8. **Engagement window** — reply to comments within X, DM protocol
9. **"Feature-worthy" content** — what gets photographers featured by venues, planners, brands (reciprocal relationships)
10. **A "never post" list** — content that hurts booking (behind-the-scenes chaos, over-sharing struggles, pricing complaints)`,
      },
      {
        number: 6,
        title: 'Install a quarterly portfolio and site review',
        description: 'A site that\'s 18 months old is probably overdue for a refresh.',
        prompt: `I want a quarterly 90-min review ritual for my site and portfolio.

Please create:
1. **Portfolio rotation** — pull 3 weakest images, add 3 newest strong images, per gallery
2. **SEO check** — rank tracking for target keywords, adjust if slipping
3. **Inquiry funnel audit** — conversion rate at each step, identify leaks
4. **Analytics review** — top-performing pages, bounce rates, time on site
5. **Testimonial refresh** — add newest 2–3, retire oldest 2–3
6. **Google Business update** — fresh photos, new posts, reply to recent reviews
7. **Competitor check** — quick look at 3–5 peers; what's changed, what to learn
8. **Annual deep refresh** — once a year, the full rebuild consideration`,
      },
    ],
    expectations: {
      good: 'Most photographers see 20–40% improvement in inquiry-to-booking conversion after implementing the curation and inquiry flow. Local SEO gains typically appear at 3–6 months.',
      ifBad: 'If inquiries are plenty but bookings aren\'t, the issue is the inquiry flow or pricing, not the site. Don\'t keep tweaking the portfolio.',
      time: 'Initial rebuild: 6 hours. Monthly: 2 hours. Quarterly review: 90 min.',
    },
    downloadFile: null,
  },

  {
    slug: 'photographer-marketing-system',
    tier: 'pro',
    industry: 'photographer',
    title: 'Create a Marketing System That Fills Your Calendar Seasonally',
    description:
      'A year-round marketing system — seasonal campaigns, referral engine, past-client reactivation, strategic partnerships, and a monthly marketing ritual that keeps bookings flowing.',
    difficulty: 'Intermediate',
    time: '~4 hours to set up, 3 hours/month ongoing',
    tools: 'ChatGPT or Claude · Your past client list · Your social accounts',
    stripeUrl: null,
    intro:
      'Slow seasons kill cash flow. Most photographers rely on word-of-mouth and hope for the best in the off-season. A structured marketing system fills the calendar deliberately: seasonal campaigns timed to when clients book, a referral engine that turns one booking into three, past-client reactivation for anniversaries and family milestones, strategic partnerships with wedding planners, venues, and makeup artists, and a repeatable monthly ritual so marketing stops being an afterthought.',
    outcomes: [
      'A full-year seasonal campaign calendar',
      'A referral engine that reliably generates referral bookings',
      'A past-client reactivation sequence for anniversaries and family milestones',
      'A strategic partner list with a mutual-referral protocol',
      'A monthly 3-hour marketing ritual you can sustain',
    ],
    steps: [
      {
        number: 1,
        title: 'Map your booking cycle and identify the gaps',
        description: 'Before building campaigns, understand when clients are actually booking vs. when they\'re shooting.',
        prompt: `I want to map my booking cycle and find the slow gaps.

My primary shoot types and the typical booking lead time:
- [SHOOT TYPE 1]: clients book [WEEKS/MONTHS] ahead
- [SHOOT TYPE 2]: clients book [WEEKS/MONTHS] ahead
- [etc.]

My typical monthly revenue by month (rough):
[LIST — Jan through Dec]

My ideal monthly revenue target: $[AMOUNT]

Please analyze:
1. **Booking cycle** — for each shoot type, when do clients actually research/book
2. **Slow months** — where my revenue is below target
3. **The "book now" months** — when I should be marketing hardest for my slow months
4. **Seasonal opportunity** — shoot types that fit my slow months (e.g. holiday mini-sessions, spring engagements)
5. **A 12-month marketing calendar outline** — what to market in which month, to hit bookings in the right season`,
      },
      {
        number: 2,
        title: 'Design seasonal campaigns',
        description: 'Generic "book now" doesn\'t work. Specific campaigns tied to seasons do.',
        prompt: `I want to design seasonal campaigns that fill my slow months.

My slow months and shoot types from Step 1: [PASTE]
My brand voice: [warm / artistic / professional]
My target clients: [describe]

Please design:
1. **4 seasonal campaigns** — one per quarter, tied to specific seasons/events
2. **For each campaign**: concept, launch date, duration, channel mix, offer (if any), target booking count
3. **Mini-session campaigns** — shorter, lower-commitment bookings for filling slow weeks (e.g. fall family minis, spring mommy-and-me, holiday headshots)
4. **Launch email** per campaign — for past clients and email list
5. **Social content arc** per campaign — 3–5 posts over 2–3 weeks
6. **Partner outreach** per campaign — planners/venues/etc. to cross-promote
7. **A "push" email in the final days** — urgency without desperation
8. **Post-campaign retrospective** — what worked, what didn't`,
      },
      {
        number: 3,
        title: 'Build a referral engine',
        description: 'Referrals from past clients are the highest-converting and lowest-cost bookings. Most photographers leave them to chance.',
        prompt: `I want a referral engine that reliably generates bookings.

My past-client list size: [NUMBER]
My current referral system: [describe or "none"]

Please create:
1. **A post-delivery referral ask** — 2 weeks after gallery delivery, specific ask + what\'s in it for them (they get something specific, not a vague thanks)
2. **A "introduce me to" script** — specific ask (e.g. "if you know anyone getting married this fall, I\'d love an intro") rather than generic ("tell your friends")
3. **A referral reward** — something generous (free headshot refresh, mini-session, print credit)
4. **A referral tracking system** — how we know who referred whom
5. **An "anniversary reach-out"** — 6 and 12 months post-shoot, warm check-in + referral ask
6. **A top-referrer recognition** — handwritten thank you, small gift, annual roundup
7. **A "too-direct" avoidance list** — things that make referral asks feel transactional and hurt the relationship`,
      },
      {
        number: 4,
        title: 'Build a past-client reactivation sequence',
        description: 'Past clients are 3–5x more likely to book again than cold leads. Most photographers never reach back out.',
        prompt: `I want a past-client reactivation sequence for anniversaries and family milestones.

My shoot types that lend themselves to reactivation:
- Weddings → 1-year anniversary shoots, first-child announcement, family growth
- Family → annual refresh, "the kids are big now" update
- Headshots → annual refresh for LinkedIn/career changes
- Newborn → 6-month, first birthday, family portraits
- [ADD YOUR TYPES]

Please create:
1. **1-year anniversary email** — warm, references their shoot, gentle offer
2. **Milestone reach-outs** — specific to each shoot type
3. **"Refresh" campaign** — aimed at clients with a 2-year-old session
4. **"Life update" prompt** — "what\'s new?" style email that opens the door without a direct pitch
5. **Annual seasonal check-in** — 1–2 touches per year per client
6. **A "too soon / too late" threshold** — so I\'m not reaching out at awkward intervals
7. **A tracking system** — last contact date, last shoot date, likely-next-shoot window`,
      },
      {
        number: 5,
        title: 'Build a strategic partner network',
        description: 'Wedding planners, venues, makeup artists, and stylists refer clients every week. Be the photographer they call.',
        prompt: `I want to build a strategic partner network that sends me consistent referrals.

My primary shoot type(s): [LIST]
My market: [CITY/REGION]

Please create:
1. **A target partner list** — by role (planners, venues, florists, makeup artists, stylists, boutiques), with ideal partner profile
2. **An initial outreach template** — warm, specific, not a cold pitch
3. **A first-meeting framework** — coffee/studio tour, what to discuss
4. **A mutual-referral protocol** — how I refer them, how they refer me, expectations
5. **A "content collaboration" offer** — styled shoot or feature that gives both of us portfolio and cross-promotion
6. **A quarterly partner check-in** — brief email/coffee to stay top of mind
7. **A partner scorecard** — track referrals received/sent, identify top partners to invest in
8. **A venue gift protocol** — small, thoughtful, not transactional`,
      },
      {
        number: 6,
        title: 'Install a monthly marketing ritual',
        description: '3 hours a month, protected on the calendar. Without the ritual, marketing gets skipped when you\'re busy shooting.',
        prompt: `I want a monthly 3-hour marketing ritual.

Please create:
1. **Monthly schedule** — same day each month, calendar-protected (e.g. "first Tuesday, 9–12")
2. **Hour 1** — past-client touches (anniversary emails, milestone reach-outs, referral thank-yous)
3. **Hour 2** — seasonal campaign prep (content, email drafts, partner outreach for upcoming campaign)
4. **Hour 3** — social content batching (4 posts prepped, 8 Stories queued, Reels concept for the month)
5. **Weekly 30-min touch** — respond to inquiries, post/engage, keep relationships warm
6. **Quarterly deep planning** — 2 hours at quarter end to review and plan next quarter
7. **Annual marketing retrospective** — full day; what worked, what didn\'t, next year\'s calendar`,
      },
    ],
    expectations: {
      good: 'Photographers who implement this system report fewer "surprise slow months" and a measurable shift from reactive to scheduled bookings. The referral engine alone typically generates 2–4x more referral bookings within 6 months.',
      ifBad: 'If the marketing ritual keeps getting skipped, it\'s a calendar problem — block it as non-negotiable, same as a shoot. Or hire a VA for 3 hours a month to prep the content.',
      time: 'Initial setup: 4 hours. Monthly: 3 hours. Annual review: 1 day.',
    },
    downloadFile: null,
  },

  {
    slug: 'photographer-business-plan',
    tier: 'pro',
    industry: 'photographer',
    title: 'Write a Business Plan That Actually Helps You Make Decisions',
    description:
      'A real business plan for working photographers — revenue targets, shoot-volume math, expense budget, pricing-to-income translation, and a 12-month decision framework.',
    difficulty: 'Advanced',
    time: '~4 hours to build, 30 min/quarter to review',
    tools: 'ChatGPT or Claude · Your past 12–24 months of numbers',
    stripeUrl: null,
    intro:
      'Most photographers either have no business plan or have one that sits in a drawer. This guide builds a lean, working business plan tuned for independent photographers: a revenue target tied to your personal income needs, shoot-volume math that tells you how many bookings you need at what price, an honest expense budget, and a 12-month decision framework that flags when to change direction. This isn\'t a business plan to show a banker — it\'s a document you actually use every quarter to make decisions.',
    outcomes: [
      'A personal-income-backed revenue target',
      'Shoot-volume math connecting revenue goal to bookings needed',
      'An honest expense budget including often-forgotten costs',
      'A pricing-to-income translation showing what your current rates will actually pay you',
      'A 12-month decision framework with quarterly checkpoints',
    ],
    steps: [
      {
        number: 1,
        title: 'Set a personal-income-backed revenue target',
        description: 'Revenue targets detached from personal income are meaningless. Start with what you actually need to live.',
        prompt: `I want to set a revenue target based on what I actually need to live.

My personal expenses:
- Monthly rent/mortgage: $[AMOUNT]
- Monthly food/household: $[AMOUNT]
- Monthly transportation: $[AMOUNT]
- Monthly healthcare (including self-employed): $[AMOUNT]
- Monthly retirement contributions: $[AMOUNT]
- Annual taxes: $[AMOUNT or "don\'t know"]
- Other recurring: $[AMOUNT]

My desired annual lifestyle additions (vacation, fun, gear upgrades, savings goal): $[AMOUNT]

Please calculate:
1. **My minimum viable annual take-home** — covers baseline living
2. **My "thriving" annual take-home** — lifestyle goals included
3. **Gross revenue required** — factoring in self-employment taxes (~25–30%) and business expenses (Step 2)
4. **Quarterly revenue target** — gross revenue ÷ 4, with seasonal adjustment
5. **The gap** — how much more revenue I need vs. where I am
6. **A "minimum floor"** — the number below which I should seriously consider a side income`,
      },
      {
        number: 2,
        title: 'Build an honest expense budget',
        description: 'Most photographers underestimate expenses by 30–50%. Capture everything.',
        prompt: `I want an honest expense budget for my photography business.

My known expenses:
[LIST what I know — software, gear, insurance, marketing, studio, education]

Please create:
1. **A comprehensive expense list** — include things most photographers forget: gear depreciation, continued education, industry memberships, tax prep, retirement contributions, health insurance uplift from W-2 job levels, emergency gear replacement fund
2. **Monthly vs. annual** — expenses budgeted at the right cadence
3. **Essential vs. growth** — which I can cut if revenue slows
4. **"Don\'t forget" list** — recurring items that commonly surprise photographers
5. **A 10% contingency** — budget for the unexpected
6. **Year-over-year trend** — what to compare against`,
      },
      {
        number: 3,
        title: 'Do the shoot-volume math',
        description: 'Revenue targets translate to specific bookings. Know the math so you can plan marketing.',
        prompt: `I want to translate my revenue target into shoot volume math.

My revenue target (from Step 1): $[AMOUNT]
My shoot types and average prices: [LIST]
My realistic capacity: hours per week available for shooting + editing + admin

Please calculate:
1. **Bookings needed per shoot type** — scenarios: all one type, mixed, ideal mix
2. **Hours required per month** — total hours (shoot + edit + prep + admin) to hit revenue target
3. **Capacity check** — can I physically do this volume given my available hours
4. **Ideal mix** — if I weighted toward higher-margin shoot types, how the math shifts
5. **Slow-month coverage** — which types to push in off-season to smooth revenue
6. **Team consideration** — at what revenue level does hiring a 2nd shooter, editor, or VA make sense
7. **A "pricing vs volume" tradeoff** — fewer higher-priced shoots vs. more lower-priced; which gets me to target with less burnout`,
      },
      {
        number: 4,
        title: 'Translate current pricing into actual income',
        description: 'Honest test: does your current pricing actually pay you your target income?',
        prompt: `I want to test whether my current pricing will actually produce my target income.

My current package pricing: [LIST by shoot type and tier]
My current booking volume by type: [LIST — past 12 months or realistic forecast]
My expense budget: [FROM STEP 2]

Please calculate:
1. **Projected gross revenue** — current pricing × expected volume
2. **Projected expenses** — Step 2 total
3. **Projected taxable income** — revenue - expenses
4. **Projected take-home** — after self-employment tax
5. **Gap vs. my target** — from Step 1
6. **What would close the gap**: raise prices X%, book Y more shoots/year, cut Z in expenses
7. **Most realistic lever** — for my market, experience, capacity
8. **Multi-scenario projections** — conservative / realistic / optimistic — so I\'m not betting everything on the best case`,
      },
      {
        number: 5,
        title: 'Build a 12-month decision framework',
        description: 'A plan is useless without triggers. Define what would make you pivot.',
        prompt: `I want a 12-month decision framework with quarterly checkpoints.

Please create:
1. **Quarterly targets** — revenue, bookings, expenses, savings
2. **Quarterly check-in questions** — Am I on pace? What\'s working? What\'s slipping? What do I adjust?
3. **Go-faster triggers** — signals I should invest more (marketing, gear, team)
4. **Slow-down triggers** — signals I should cut expenses or pivot
5. **Burnout signals** — how to recognize when volume is hurting quality or me personally
6. **Pivot considerations** — shoot-type additions or subtractions, market repositioning, service mix
7. **A "call it" threshold** — revenue/profit level at which I seriously consider a different path
8. **An annual retrospective** — how to do a real year-end review and reset`,
      },
      {
        number: 6,
        title: 'Install a quarterly business plan review',
        description: '30 minutes every quarter. Keep the plan alive.',
        prompt: `I want a quarterly 30-min business plan review ritual.

Please create:
1. **Quarterly review questions** — Am I on track to my annual target? Any expense surprises? Any booking pattern surprises?
2. **What to update each quarter** — pricing if indicated, marketing focus for next quarter, expense adjustments
3. **Annual rebuild trigger** — once a year, the full 4-hour rebuild of the plan
4. **A "version history"** — keep prior versions so I see my trajectory
5. **An accountability partner option** — review the plan with a peer photographer or coach for external perspective`,
      },
    ],
    expectations: {
      good: 'Photographers who build and use this plan report clearer pricing decisions, less year-end surprise, and more deliberate growth. The biggest shift is usually recognizing that current pricing doesn\'t produce the income they assumed.',
      ifBad: 'If the math shows current pricing can\'t pay you your target, the answer is almost always higher prices before higher volume. Volume without margin is a trap.',
      time: 'Initial plan: 4 hours. Quarterly review: 30 min. Annual rebuild: 4 hours.',
    },
    downloadFile: null,
  },
]

export default photographerGuides
