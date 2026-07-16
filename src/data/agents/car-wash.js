const carWashAgents = [
  {
    slug: 'carwash-membership-save-agent',
    industry: 'car-wash',
    name: 'Membership Save Agent',
    icon: 'heart',
    tagline: 'Catches members drifting toward cancellation before they actually cancel.',
    description:
      'Watches for members whose visit frequency is dropping or whose card just failed, and drafts a personal, non-desperate win-back message before they lapse — instead of finding out only after the cancellation email.',
    difficulty: 'Intermediate',
    buildTime: '~3 hours',
    runningCost: '$20–40/month',
    timeSaved: '~3 hours/week',
    stack: ['Claude or ChatGPT', 'your membership/POS system\'s usage export', 'Zapier or Make (paid tier)', 'email or SMS tool'],
    whatItDoes:
      'Every week, this agent pulls your membership visit data and flags two kinds of risk: members whose visit frequency has quietly dropped off (a weekly washer who hasn\'t been in for three weeks) and members whose payment just failed. For usage-drop members, it drafts a warm, specific check-in — not a discount blast, a genuine "haven\'t seen your car in a while, everything okay?" For failed payments, it drafts a friendly card-update reminder before the account auto-suspends. Both go to you or your manager to review and send. What used to be "we noticed our member count dropped again" becomes a weekly list of specific people to reach while there\'s still time to keep them.',
    outcomes: [
      'Usage-drop members get a personal check-in before they quietly cancel, not after',
      'Failed-payment members get a friendly reminder before auto-suspension, recovering revenue that would otherwise just vanish',
      'A weekly, specific list of at-risk members instead of a monthly surprise in the churn report',
      'Win-back messages that read as genuine care, not a discount-code blast',
      'A running log of save attempts and outcomes so you know what\'s actually working',
    ],
    costBreakdown: [
      {
        item: 'Claude Pro or ChatGPT Plus',
        cost: '$20/mo',
        note: 'needed for the weekly automated run plus normal day-to-day use',
      },
      {
        item: 'Make.com Core plan (or Zapier Starter)',
        cost: '$9/mo',
        note: 'the free tier\'s ~100 tasks/month is tight for a weekly multi-step flow across a few hundred members; Make\'s Core plan starts around $9/mo',
      },
      {
        item: 'Email or SMS sending (OpenPhone, Mailchimp free tier, or your POS system\'s built-in messaging)',
        cost: '$0–10/mo',
        note: 'many membership/POS platforms already include messaging at no extra cost',
      },
    ],
    roi: 'Losing a member costs more than it looks like on paper — a $25/month member who cancels is $300/year gone, and replacing them costs real marketing spend to acquire a new one. Most sites lose 5–8% of members monthly to a mix of real disinterest and simple payment failures that nobody caught in time. If a 500-member site is losing even 15 members a month to failed payments alone (a common, fixable leak), that\'s $375/month in revenue disappearing for a reason that has nothing to do with whether the member wanted to stay. Catching even half of those failed payments before auto-suspension recovers $180+/month — more than covers the $20–40/mo cost of running this agent, before counting any usage-drop saves on top.',
    steps: [
      {
        number: 1,
        title: 'Define what "at risk" actually looks like for your site',
        description:
          'Before automating anything, decide what counts as a usage drop worth flagging. This alone clarifies who you should be worried about today.',
        dataNote:
          'Pull your last 90 days of member visit data if your POS/RFID system tracks it — member name, tier, typical visit frequency, and visits in the last 30 days.',
        prompt: `I run a car wash with an unlimited membership program and I want to define what "at risk of cancelling" actually looks like using my real data.

My membership tiers and typical visit patterns: [DESCRIBE — e.g. "Basic members average 2 washes/month, Plus members average 4, Premium members average 6"]

Here's a sample of recent member visit data: [PASTE OR DESCRIBE — member, tier, visits in last 30/60/90 days]

Please help me define:
1. **A usage-drop threshold per tier** — e.g., a Plus member (usually 4x/month) who drops to 0–1 visits in 30 days is at-risk; a Basic member (usually 2x/month) has a different threshold
2. **A "new member grace period"** — members in their first 30 days shouldn't be flagged the same way; they're still forming the habit
3. **A seasonal adjustment note** — winter/rain-heavy months naturally reduce visits; the threshold should account for expected seasonal dips, not just raw numbers
4. **A payment-failure risk category** — separate from usage drop entirely; this is about a failed charge, not disengagement
5. **A weekly risk list format** — member name, tier, risk type (usage drop / payment failure), days since last visit or payment attempt

Save this as my risk-definition reference — every future prompt will use these thresholds.`,
      },
      {
        number: 2,
        title: 'Connect your membership data feed',
        description: 'Give the automation a weekly pull of visit and payment status data to work from.',
        dataNote:
          'You\'ll need export or API access to your membership/POS system\'s visit history and payment status, plus a free or paid Zapier/Make account.',
      },
      {
        number: 3,
        title: 'Build the save-message drafting prompt',
        description: 'This is the engine — a flagged member goes in, the right message comes out.',
        prompt: `Using my risk definitions, build me a repeatable prompt template that drafts a save message for any at-risk member.

My risk definitions: [PASTE FROM STEP 1]
My car wash name: [NAME]
My tone: [e.g., warm neighborhood business / casual and friendly / straightforward]

Build a prompt template that takes a member's name, tier, risk type, and relevant detail (days since last visit, or payment failure date) as input and outputs:
1. **For usage-drop members**: a warm, specific check-in — references their normal pattern honestly ("we usually see your car every week or so") without sounding like surveillance, asks if everything's okay, and mentions one thing they might not know is included in their tier (a benefit they may be underusing) rather than leading with a discount
2. **For payment-failure members**: a friendly, low-stress reminder that their card needs updating, with a clear link, framed as "before your membership pauses" rather than "you're about to lose access" — no shame, no urgency manufactured beyond what's real
3. **A rule**: never open with a discount or a guilt-based line ("we miss you!" repeated weekly feels hollow) — lead with genuine care or a practical nudge
4. **Output format**: ready to send via text or email, under [CHARACTER LIMIT] if texting`,
      },
      {
        number: 4,
        title: 'Wire up the weekly automation',
        description: 'Chain the data pull, the risk flagging, and the draft generation into one weekly Zapier/Make run.',
        dataNote:
          'You\'ll need your Zapier/Make account, access to your membership system\'s export or API, and a channel (email or Slack) to receive the weekly digest.',
      },
      {
        number: 5,
        title: 'Set up your weekly 15-minute save review',
        description:
          'The agent flags and drafts; you or your manager decide what actually gets sent. Pick one time each week and treat it like a priority, not an afterthought.',
      },
      {
        number: 6,
        title: 'Track what actually saves a member',
        description: 'Not every save attempt works. A simple log tells you which messages and offers are worth repeating.',
        prompt: `I want a simple tracking system to see which save attempts actually work.

My save attempts so far this month: [LIST — member, risk type, message sent, outcome if known: renewed visit, updated card, cancelled anyway, no response]

Please help me build:
1. **A tracking template** — columns for member, risk type, date flagged, message sent, outcome, days to resolve
2. **A monthly save-rate calculation** — what % of flagged usage-drop members resumed normal visits within 30 days; what % of payment-failure members updated their card
3. **A pattern check** — is one risk type (usage drop vs. payment failure) saving at a meaningfully different rate, and what does that suggest about where to focus effort
4. **A "not worth chasing" signal** — if a member has been flagged 3+ times and never responds, should they stay on the active save list or move to a lower-effort quarterly check-in`,
      },
    ],
    systemPrompt: `You are the Membership Save Assistant for [CAR WASH NAME], an independent car wash with an unlimited membership program. Your job is to draft save messages for members showing usage-drop or payment-failure risk signals, based on weekly data pulled from the membership system. You never contact a member directly — every draft goes to the owner or manager for review before sending.

VOICE
Write like a real person who runs this car wash, not a retention-marketing bot. Tone: [TONE WORDS, e.g. warm, genuine, practical]. Keep messages short. Never open with a discount code or a generic "we miss you!" line — lead with something specific and true about the member's actual pattern or account status.

INPUTS YOU EXPECT
Member name, tier, risk type (usage drop or payment failure), and the relevant detail — days since last visit for usage drop, or payment failure date for billing issues.

RESPONSE STRUCTURE
For each flagged member, output:
1. Risk type classification
2. The draft message, tailored to that risk type
3. One line noting anything relevant for the manager to know before sending (e.g., "this is their 3rd flag this quarter" if applicable)

USAGE-DROP MESSAGE RULES
- Reference their normal visit pattern honestly and specifically, without sounding like surveillance ("we usually see your car every week or so — hope everything's okay").
- Mention one underused benefit of their tier rather than leading with a discount.
- Ask a genuine, low-pressure question rather than delivering a sales pitch.
- Never guilt-trip. Never repeat "we miss you" language across multiple touches to the same member.

PAYMENT-FAILURE MESSAGE RULES
- Frame the message around what's practically true: their card needs updating before the membership pauses.
- No shame, no manufactured urgency beyond the real timeline (when the account will actually suspend).
- Include a clear, simple next step (update card link or a way to call in).

WHAT YOU NEVER DO
- Never send a message directly to a member — every draft requires manager or owner approval
- Never offer a discount, free month, or refund without the owner's explicit instruction to do so for that specific member
- Never fabricate a member's visit history or payment status — only use the data provided
- Never send the same "usage drop" message style to the same member more than twice in a row — if a member has been flagged repeatedly with no response, note that explicitly rather than repeating the same tone
- Never use language that implies the membership is being taken away as a punishment — frame everything around the member's choice and convenience

ESCALATE TO THE OWNER (flag, don't draft) WHEN:
- A member has been flagged 3+ times in a quarter with no response — this is a "let it go or make one final personal outreach" decision, not another automated draft
- A payment failure is tied to a member who has also had a prior billing dispute — this needs a human conversation, not an automated reminder

If you're ever unsure whether a member's situation needs a human touch instead of a draft, flag it instead of guessing.`,
    guardrails: [
      'Never send a save message directly to a member — every draft requires manager or owner approval first.',
      'Never promise a refund, free month, or specific discount without the owner explicitly authorizing it for that member.',
      'Never fabricate or guess at a member\'s visit history or payment status — use only the data actually provided.',
      'Never repeat the same "we miss you" style message to the same member more than twice — flag repeat non-responders for a human decision instead.',
      'Never imply a membership is being cancelled as a punishment — frame all messaging around convenience and the member\'s own choice.',
      'Always flag members with a prior billing dispute for a human conversation rather than an automated payment reminder.',
    ],
    testChecklist: [
      'Feed it a Plus-tier member (normally 4 visits/month) who dropped to 0 visits in 30 days; confirm the draft references their actual pattern specifically, not a generic "we miss you."',
      'Feed it a payment-failure case; confirm the draft frames it around updating the card before suspension, without shame language.',
      'Feed it a member flagged for the 3rd time this quarter with no response; confirm it flags for a human decision instead of drafting another identical message.',
      'Feed it a new member in their first 2 weeks with low visits; confirm it does NOT flag them — they should be in the grace period.',
      'Check that no draft, across 10 test cases, offers a specific discount or refund amount.',
      'Feed it a member with a documented prior billing dispute; confirm it flags for a human conversation rather than an automated reminder.',
    ],
    maintenance:
      'Once a month, check your actual save rate — what percentage of flagged members resumed normal visits or updated a failed card within 30 days. If usage-drop thresholds are flagging too many or too few members, adjust the per-tier numbers from Step 1. Re-check the grace period and seasonal adjustment each season, since normal visit patterns shift with weather. Budget 20 minutes.',
  },

  {
    slug: 'carwash-weather-promo-agent',
    industry: 'car-wash',
    name: 'Weather Promo Agent',
    icon: 'sun',
    tagline: 'Turns next week\'s forecast into this week\'s promo, automatically drafted.',
    description:
      'Reads the 7-day forecast every Monday and drafts the right promo for the week — a rain-hangover push after wet days, a pollen or dust special after a windy stretch, nothing when the forecast doesn\'t call for anything.',
    difficulty: 'Beginner',
    buildTime: '~2 hours',
    runningCost: '$0–20/month',
    timeSaved: '~2 hours/week',
    stack: ['Claude or ChatGPT', 'a free weather API or forecast site', 'Zapier (free tier)', 'email or SMS/social scheduling tool'],
    whatItDoes:
      'Every Monday morning, this agent checks the 7-day forecast for your zip code and matches it against a playbook you built once: two rainy days followed by clearing skies means a "hangover wash" push Wednesday through Friday; a stretch of high wind or pollen means a dust-and-pollen special; a stable week means no promo at all rather than a forced one. It drafts the specific copy — a text to members, a social post, an in-lane sign line — timed to when the weather actually creates demand. You review the draft in five minutes Monday morning and approve it, tweak it, or skip the week entirely. No more scrambling to write a rain-day post after the rain\'s already over.',
    outcomes: [
      'A weather-matched promo drafted automatically every Monday, timed to when demand will actually spike',
      'No promo forced during unremarkable weeks — the agent knows when to say nothing',
      'Consistent messaging across text, social, and in-lane signage from one weekly source',
      'Five minutes of review instead of scrambling to write copy after a rain event has already passed',
      'A log of which weather-triggered promos actually moved volume, so the playbook gets sharper each season',
    ],
    costBreakdown: [
      {
        item: 'ChatGPT or Claude (free tier)',
        cost: '$0/mo',
        note: 'one weekly drafting session is well within free-tier limits',
      },
      {
        item: 'Free weather API (e.g. Open-Meteo) or a forecast website',
        cost: '$0/mo',
        note: 'no paid weather service needed for a 7-day residential forecast',
      },
      {
        item: 'Zapier (free tier)',
        cost: '$0/mo',
        note: 'covers a single weekly automated check and draft'
      },
      {
        item: 'Social scheduling tool or SMS sending (optional)',
        cost: '$0–20/mo',
        note: 'a free Buffer/Later tier handles posting; SMS through your POS system or a tool like OpenPhone may add a small monthly cost',
      },
    ],
    roi: 'Rain-hangover traffic is one of the most reliable, under-captured demand spikes in the car wash business — cars get dirty fast in the days right after rain, and the operators who message that window capture volume the ones who don\'t simply miss. A single well-timed promo reaching even 500 members or list subscribers, converting 3–5% into an extra visit, is 15–25 incremental washes at $10–20 each — $150–500 from one week\'s message. This agent costs $0–20/month to run and takes 5 minutes of review a week, meaning even one successful promo a month covers the cost many times over. The bigger value is consistency: nobody has to remember to check the forecast and scramble to write copy — it\'s just there every Monday.',
    steps: [
      {
        number: 1,
        title: 'Build your weather-to-promo playbook',
        description:
          'Before automating anything, define which weather patterns actually drive your traffic and what to say for each. This is worth doing even standalone.',
        dataNote:
          'If you have historical volume data alongside weather (even a rough memory of "we\'re always slammed the day after it rains"), that\'s useful — otherwise general seasonal knowledge of your market is fine to start.',
        prompt: `I run a car wash and I want to build a weather-to-promo playbook so I know exactly what to message for different forecast patterns.

My location: [CITY/REGION]
My format: [express / flex-serve / full-service]
What I've noticed about weather and traffic: [DESCRIBE — e.g. "we're always busy 1-2 days after rain clears", "windy days after a dry spell bring in dusty cars", "nobody washes during an active storm"]

Please build me:
1. **A "rain hangover" trigger and message** — 1+ rainy days followed by clearing skies; timing (usually 1–3 days after last rain); a promo angle (member push, "clean start" messaging, or simple reminder — no discount required if demand is already organic)
2. **A "dust/pollen" trigger and message** — extended dry, windy, or high-pollen stretch; timing; a promo angle specific to visible grime, not generic
3. **A "pre-storm" trigger and message** (optional, if relevant to my market) — a day before a significant storm, a "wash before it hits" nudge
4. **A "nothing to say" rule** — what forecast patterns should result in NO promo that week, so I'm not manufacturing urgency out of nothing
5. **A tone guide** — 3–4 words for how these should sound (e.g., "upbeat, not pushy" or "practical, weather-aware")
6. **A channel plan** — which promos go to members via text, which go to social, which get an in-lane sign

Save this as my weather playbook — every future weekly prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Set up your weekly forecast pull',
        description: 'Connect a free weather source for your zip code so the agent has fresh data every Monday.',
        dataNote:
          'A free weather API (Open-Meteo, or a forecast site\'s data) covering 7-day temperature, precipitation, and wind for your zip code is enough — no paid weather service needed.',
      },
      {
        number: 3,
        title: 'Build the weekly promo-drafting prompt',
        description: 'This is the core engine — this week\'s forecast goes in, the matched promo (or "skip this week") comes out.',
        prompt: `Using my weather playbook, build me a repeatable weekly prompt template that matches this week's forecast to a promo.

My weather playbook: [PASTE FROM STEP 1]
Car wash name: [NAME]

Build a prompt template that takes this week's 7-day forecast (day-by-day precipitation, temperature, wind) as input and outputs:
1. **Which trigger, if any, applies this week** — rain hangover, dust/pollen, pre-storm, or none
2. **If a trigger applies**: the specific promo copy for each channel — a text to members, a social caption, and an in-lane sign line, all matching the tone guide
3. **Suggested timing** — which specific day(s) this week to send/post, based on the trigger's usual lag
4. **If no trigger applies**: say so plainly — "no weather-driven promo this week" — rather than forcing a generic message
5. **Output format**: organized by channel, ready to copy-paste, each piece under a reasonable length for its platform`,
      },
      {
        number: 4,
        title: 'Wire up the Monday automation',
        description: 'Connect the weather pull and the drafting prompt into one Zapier flow that runs every Monday morning.',
        dataNote:
          'You\'ll need your Zapier account and the weather API key or forecast source from Step 2.',
      },
      {
        number: 5,
        title: 'Set up your 5-minute Monday review',
        description:
          'Read the week\'s draft (or "no promo this week" note), approve or tweak it, and schedule it across your channels. A quick, consistent Monday habit.',
      },
    ],
    systemPrompt: `You are the Weather Promo Assistant for [CAR WASH NAME], an independent car wash in [CITY]. Your job is to read the 7-day forecast each Monday and draft a promo matched to any weather-driven demand pattern — or say plainly that no promo is warranted this week. You never post or send anything directly.

INPUTS YOU EXPECT
The 7-day forecast for the coming week (daily precipitation, temperature, wind) and the weather playbook defining which patterns trigger which promos.

RESPONSE STRUCTURE
Output exactly this:
1. **TRIGGER** — which playbook trigger applies this week (rain hangover / dust-pollen / pre-storm / none)
2. **TIMING** — which specific day(s) this week the promo should go out, if a trigger applies
3. **COPY BY CHANNEL** — member text, social caption, in-lane sign line, each written for that channel's format and length
4. If no trigger applies: state "No weather-driven promo this week" and stop there — do not force a generic message just to have something to send

TONE
[TONE WORDS FROM PLAYBOOK, e.g. upbeat but not pushy, practical and weather-aware]. Reference the actual weather specifically ("after this week's rain" not "great weather for a wash!" generic filler). Never manufacture urgency a forecast doesn't support.

TRIGGER RULES
- Rain hangover: 1+ rainy days followed by clearing skies. Time the promo to the lag defined in the playbook (usually 1–3 days after the last rain), when cars are visibly dirty and customers are naturally motivated.
- Dust/pollen: an extended dry, windy, or high-pollen stretch. Message specific to visible grime, not a generic wash reminder.
- Pre-storm (if defined in the playbook): the day before a significant storm, a practical "wash before it hits" nudge.
- None: a stable or unremarkable forecast. Do not invent a promo — say so and stop.

WHAT YOU NEVER DO
- Never post or send anything directly — every draft is for the owner or manager to review and schedule
- Never force a promo when the forecast doesn't match a defined trigger — an empty week is a valid, expected output
- Never use discount language unless the playbook specifically calls for one — most weather-driven demand doesn't need a discount to convert, just good timing
- Never exaggerate or misstate the actual forecast to justify a promo (e.g., calling a light drizzle "a major storm" for dramatic copy)
- Never send the same promo copy two weeks running if the trigger repeats — vary the specific language even when the underlying trigger is the same

If the forecast data is incomplete or unavailable for the week, say so explicitly rather than guessing at conditions.`,
    guardrails: [
      'Never post or send a promo directly — every weekly draft requires owner or manager review before it goes out.',
      'Never force a promo during a week with no matching weather trigger — "no promo this week" is a valid and expected output.',
      'Never misstate or exaggerate the actual forecast to manufacture urgency for a promo.',
      'Never promise or imply a refund, damage compensation, or guarantee in promo copy.',
      'Never repeat identical promo copy across back-to-back weeks even when the same trigger repeats — vary the specific wording.',
    ],
    testChecklist: [
      'Feed it a forecast with 2 rainy days followed by 3 clear days; confirm it correctly identifies the rain-hangover trigger and times the promo to land during the clear stretch.',
      'Feed it a stable, unremarkable 7-day forecast; confirm it outputs "no weather-driven promo this week" instead of forcing generic copy.',
      'Feed it a windy, dry week; confirm the dust/pollen copy references visible grime specifically, not a generic wash reminder.',
      'Feed it two consecutive weeks with the same rain-hangover trigger; confirm the copy isn\'t word-for-word identical both weeks.',
      'Check that no draft, across several weeks of test forecasts, promises a specific discount unless the playbook explicitly calls for one.',
    ],
    maintenance:
      'Each season, revisit the weather playbook — what counts as a "dry stretch" or "significant storm" shifts between summer and winter. After 2–3 months of running, check whether the promo timing (the lag after rain, for example) actually matches when your traffic spikes, and adjust if it doesn\'t. Confirm the weather API or forecast source is still returning accurate data for your zip code. Budget 15 minutes a month, plus 10 minutes each new season.',
  },

  {
    slug: 'carwash-review-reply-agent',
    industry: 'car-wash',
    name: 'Review Reply Agent',
    icon: 'star',
    tagline: 'Every review answered within a day, in your voice, without promising anything you can\'t back up.',
    description:
      'Drafts replies to every new Google and Yelp review for your car wash, thanking specific details in positive reviews and handling complaints carefully — never promising refunds or damage compensation in a public reply.',
    difficulty: 'Beginner',
    buildTime: '~2 hours',
    runningCost: '$0–20/month',
    timeSaved: '~2–3 hours/week',
    stack: ['Claude or ChatGPT', 'Zapier (free tier)', 'Google Business Profile', 'Yelp for Business'],
    whatItDoes:
      'Every morning, this agent reads new Google or Yelp reviews from the last 24 hours and drafts a reply for each — thanking regulars who mention a specific tier or attendant, and carefully handling anything mentioning a scratch, a missed spot, or a membership complaint. Damage complaints never get a public promise of compensation; instead the draft directs the customer to contact the manager, and the review is flagged for you to follow up personally. Drafts land in a daily digest, you skim and approve in under five minutes, and they post. What used to be unanswered reviews — or a defensive reply written in frustration — becomes a steady, careful daily habit.',
    outcomes: [
      'Every review gets a reply within 24 hours, in your actual voice',
      'Damage and complaint reviews are handled carefully — acknowledged publicly, resolved privately',
      'No public reply ever promises a refund or damage payout that could be used against you later',
      'Five minutes of daily approval instead of a dreaded, ignored review inbox',
      'A searchable log of every review and reply, useful for spotting recurring complaints (a specific tunnel issue, a recurring wait-time gripe)',
    ],
    costBreakdown: [
      {
        item: 'Claude.ai or ChatGPT (free tier)',
        cost: '$0/mo',
        note: 'covers most single-site car washes handling under 10 reviews/day',
      },
      {
        item: 'Claude Pro or ChatGPT Plus (optional)',
        cost: '$20/mo',
        note: 'only needed for high review volume or if sharing the account with other agents',
      },
      {
        item: 'Zapier (free tier)',
        cost: '$0/mo',
        note: '100 tasks/month covers roughly 3 reviews/day',
      },
      {
        item: 'Google Business Profile + Yelp for Business',
        cost: '$0/mo',
        note: 'both free to claim and manage',
      },
    ],
    roi: 'Car wash reviews carry outsized weight because the decision to try a new wash is almost entirely reputation-driven — there\'s no menu to browse, just "is this place any good." A steady flow of thoughtful replies signals an attentive operator, and a damage complaint handled carefully in public (acknowledged, moved to a private channel) protects you far more than either silence or a defensive reply written in the heat of the moment. Owners typically spend 30–45 minutes a week hunting down and answering reviews, and complaint reviews often sit unanswered the longest because they\'re the most stressful to respond to. At $30/hour, that\'s $60–90/month of avoided or delayed owner time. This agent turns that into five minutes a day — about $12–15/month of owner time — while keeping every complaint reply legally careful. At $0–20/month, it pays for itself in the first week just on time saved, before counting the reputational value of never letting a damage complaint sit unanswered for a week.',
    steps: [
      {
        number: 1,
        title: 'Write your voice and complaint-handling guide',
        description:
          'The agent needs to sound like you and know exactly how to handle damage complaints before it drafts a single reply. Worth doing on its own.',
        dataNote:
          'Pull 5–10 past reviews, including at least one or two complaints if you\'ve had them (damage, wait time, membership billing), and any replies you\'ve written before.',
        prompt: `I run a car wash called [CAR WASH NAME] in [CITY/REGION] and I want to build a voice guide so an AI can draft review replies that sound like me and handle complaints carefully.

Here are real reviews we've received, with any past replies: [PASTE 5–10 REVIEWS AND REPLIES]

My car wash's personality: [e.g., friendly and efficient / no-nonsense / community-focused]
Things I never say: [e.g., corporate phrases like "we value your feedback"]

Please build me:
1. **3–5 tone words** describing how I sound
2. **A reply style for 5-star and 4-star reviews** — thanks them, references something specific (a tier they bought, a fast lane, a friendly attendant if mentioned — without naming staff back)
3. **A reply style for 3-star reviews** — acknowledges the specific gripe (usually wait time or a missed spot) without being defensive
4. **A reply style for damage complaints (1–2 stars mentioning a scratch, a broken mirror, antenna damage, etc.)** — acknowledges the concern seriously and specifically, states clearly that these things get investigated individually, directs them to contact the manager directly by [PHONE/EMAIL] — and explicitly does NOT promise any repair, refund, or compensation amount in the public reply
5. **A reply style for membership/billing complaints** — acknowledges specifically, directs to a private channel for account-specific resolution
6. **A "never say" list** — including any specific promise of compensation, admission of fault for damage, or corporate phrases
7. **A length rule**

Save this as my voice and complaint guide — every future prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Connect your review platforms',
        description: 'Give the automation a live feed of new reviews to react to.',
        dataNote:
          'You\'ll need owner/manager access to your Google Business Profile and Yelp for Business account, plus a free Zapier account.',
      },
      {
        number: 3,
        title: 'Build the reply-drafting prompt',
        description: 'This is the engine — a raw review goes in, an on-brand, carefully-worded draft comes out.',
        prompt: `Using my voice and complaint guide, build me a repeatable prompt template that drafts a reply to any new review.

My voice and complaint guide: [PASTE FROM STEP 1]
Car wash name: [NAME]

Build a prompt template that takes a new review as input and outputs a draft reply following these rules:
1. 5-star and 4-star reviews: thank them, reference something specific, keep to [LENGTH RULE]
2. 3-star reviews mentioning a general gripe (wait time, a missed spot): acknowledge specifically without being defensive
3. Reviews mentioning possible vehicle damage (scratches, mirror, antenna, undercarriage): acknowledge seriously, state that damage claims are investigated individually, direct to contact the manager directly at [CONTACT] — and never promise repair, refund, or a specific compensation amount in the public reply
4. Reviews mentioning membership/billing issues: acknowledge, direct to a private channel, never discuss specific account/billing details publicly
5. Reviews mentioning a specific attendant by name (positive or negative): never repeat the employee's name back in the public reply
6. Reviews threatening legal action or a BBB complaint: output "FLAG FOR OWNER — do not auto-post" instead of a draft

Output format: just the reply text, under [CHARACTER LIMIT] characters, ready to paste.`,
      },
      {
        number: 4,
        title: 'Wire up the Zapier automation',
        description: 'Connect the trigger, the AI step, and the approval inbox into one automated daily flow.',
        dataNote:
          'You\'ll need your Zapier account, the prompt template from Step 3, and either a Slack workspace or an email you check daily.',
      },
      {
        number: 5,
        title: 'Set up your 5-minute daily approval habit',
        description:
          'The agent drafts; you stay the final word, especially on anything touching damage or billing. Pick one time of day and stick to it.',
      },
      {
        number: 6,
        title: 'Handle edge cases before they happen',
        description: 'Decide now — not in the moment — what the agent should never do on its own.',
        prompt: `I want a review-escalation checklist for my car wash covering cases the AI should never auto-draft.

My car wash: [NAME], [CITY]
My review volume: about [NUMBER] reviews/month

Please build a checklist covering:
1. Any review mentioning vehicle damage over a certain visible severity (broken glass, dented panel, etc.) — escalate to a phone call from the manager within 24 hours, not just a reply
2. Reviews threatening legal action, small claims, or a report to a regulator — escalate immediately, no draft
3. Reviews naming a specific attendant negatively — a draft is fine but must never name the employee back, and the manager should be alerted separately to address it internally
4. Reviews offering to remove a bad review in exchange for a free wash or refund — flag as possible manipulation, don't engage in the reply
5. A monthly pattern check: if 3+ reviews in a month mention the same specific issue (a tunnel brush, a wait time at a specific hour), flag it as an operational issue worth investigating, not just a reply-drafting issue

Output this as a one-page reference I can keep near the register or office.`,
      },
    ],
    systemPrompt: `You are the Review Reply Assistant for [CAR WASH NAME], an independent car wash in [CITY/REGION]. Your only job is to draft replies to reviews on Google and Yelp for the owner or manager to approve before anything is posted. You never post automatically.

VOICE
Write like a real person who runs this car wash, not a brand account. Tone: [TONE WORDS FROM VOICE GUIDE, e.g. friendly, efficient, straightforward]. Use contractions. Keep replies to [2–4 sentences] unless the review is long and detailed. Never use corporate phrases: "we value your feedback," "we apologize for any inconvenience this may have caused," "your satisfaction is our top priority."

RESPONSE STRUCTURE
For every review, output:
1. A one-line classification: [POSITIVE], [GENERAL COMPLAINT], [DAMAGE COMPLAINT], [BILLING COMPLAINT], or [FLAG]
2. If not flagged: the draft reply text only, ready to paste, under 600 characters
3. If flagged: "FLAG FOR OWNER" and one sentence explaining why

RULES BY REVIEW TYPE
- 5-star and 4-star: thank the reviewer, reference something specific (a tier purchased, a fast lane, a friendly attendant mentioned — without repeating a staff name back).
- General complaints (wait time, a missed spot, tunnel issue): acknowledge specifically without being defensive, thank them for the feedback.
- Damage complaints (scratches, broken mirror, antenna, undercarriage, or any claim of vehicle damage from the wash): acknowledge the concern seriously and specifically. State that damage claims are investigated individually. Direct the customer to contact the manager directly at [CONTACT]. NEVER promise a repair, refund, or any specific compensation amount in a public reply — this must always move to a private channel.
- Billing/membership complaints: acknowledge, direct to a private channel for account-specific resolution. Never discuss specific account or billing details in a public reply.
- Reviews naming a specific attendant negatively: never repeat the employee's name back in the reply.

ALWAYS ESCALATE — OUTPUT "FLAG FOR OWNER" INSTEAD OF A DRAFT WHEN:
- The review describes damage severe enough to suggest a real claim (broken glass, a dented panel, a damaged bumper) — this needs a same-day phone call from the owner or manager, not just a review reply
- The review threatens legal action, small claims court, or a report to a regulator or the BBB
- The review looks like a coordinated attempt to extract a refund or free service in exchange for removing the review
- The review's tone or content doesn't clearly fit the categories above

WHAT YOU NEVER DO
- Never post a reply without human approval
- Never promise, quantify, or imply any refund, repair cost, or damage compensation in a public reply — always redirect to a private conversation
- Never admit fault for vehicle damage in a public reply — acknowledge the customer's experience without confirming the wash caused the damage
- Never name an employee in a public-facing reply, positive or negative
- Never argue with a reviewer or correct their account of events publicly

If you are ever unsure whether a review needs to be flagged, flag it. A missed reply is recoverable; a public promise of compensation you can't verify is not.`,
    guardrails: [
      'Never promise refunds or damage compensation in a public reply — every damage-related complaint gets redirected to a private conversation with the manager, no exceptions.',
      'Never admit fault for vehicle damage in a public reply — acknowledge the customer\'s experience without confirming the wash caused the damage.',
      'Never post a reply automatically — every draft requires a human tap-to-approve before it goes live.',
      'Always escalate reviews describing significant damage (broken glass, dented panels) to a same-day phone call from a human, not just a review reply.',
      'Never name an attendant in a public reply, whether the review is complimentary or critical.',
      'Always flag reviews threatening legal action or a regulatory complaint instead of drafting a reply.',
    ],
    testChecklist: [
      'Paste in a review claiming the wash scratched a bumper; confirm the draft acknowledges the concern without admitting fault, and never states a repair or refund amount.',
      'Paste in a review mentioning a broken side mirror; confirm the agent outputs "FLAG FOR OWNER" for same-day follow-up rather than a standard reply.',
      'Paste in a 5-star review mentioning a specific tier by name; confirm the draft references that tier, not a generic thank-you.',
      'Paste in a review offering to remove a bad review in exchange for a free wash; confirm it\'s flagged as possible manipulation, not drafted normally.',
      'Paste in a billing complaint about a duplicate charge; confirm the draft redirects to a private channel and doesn\'t discuss account specifics publicly.',
      'Check that no draft, across 10 test reviews, contains a dollar amount, refund promise, or admission that the wash caused damage.',
    ],
    maintenance:
      'Once a month, skim the past 30 days of approved replies for tone drift and confirm damage-complaint replies are still consistently avoiding compensation promises. Check your Zapier task count against the free-tier limit. If a recurring complaint theme shows up 3+ times in a month (a specific tunnel issue, a wait-time pattern), treat it as an operational flag, not just a reply-drafting task. Budget 15 minutes.',
  },
]

export const pack = {
  industry: 'car-wash',
  headline: 'Three AI agents that protect membership revenue and your reputation',
  subhead:
    'Blueprints to build agents that catch lapsing members before they cancel, turn the forecast into timely promos, and keep every review answered carefully — complete system prompts and real costs, not one-off prompts.',
  whyAgents: [
    'Sites losing even 5–8% of members a month to unnoticed payment failures and quiet disengagement are leaving hundreds of dollars a month on the table.',
    'Weather-driven demand spikes are predictable but easy to miss without a system watching the forecast every week.',
    'A $0–40/month AI agent can absorb the member-saving, promo-drafting, and review-answering busywork — while keeping every damage complaint reply careful enough to protect the business.',
  ],
  seoTitle: 'AI Agents for Car Washes — Blueprints, Costs & Prompts',
  seoDescription:
    'Build 3 AI agents for your car wash: membership saves, weather-driven promos, and review replies. Complete system prompts, real costs, and setup steps for $29.',
}

export default carWashAgents
