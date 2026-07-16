const rentalCarAgents = [
  {
    slug: 'rentalcar-booking-upsell-agent',
    industry: 'rental-car',
    name: 'Booking & Upsell Agent',
    icon: 'calendar',
    tagline: 'Every confirmation comes with a tailored upgrade offer, not a generic "thanks for booking."',
    description:
      'Drafts a personalized booking confirmation for every reservation, with an upgrade or add-on offer matched to the actual trip — a family booking an economy car sees the SUV upgrade, a weekend renter sees the extra-driver add-on, not the same offer for everyone.',
    difficulty: 'Beginner',
    buildTime: '~3 hours',
    runningCost: '$0–30/month',
    timeSaved: '~3 hours/week',
    stack: ['Claude or ChatGPT', 'Zapier (free tier)', 'your booking system\'s reservation export or webhook', 'email or SMS tool'],
    whatItDoes:
      'When a reservation comes in, this agent reads the booking details — vehicle class, trip length, drivers listed, pickup date — and drafts a confirmation that does two things: confirms the reservation clearly, and offers one relevant upgrade or add-on instead of a blanket menu. A 2-day economy booking with no second driver gets a light SUV-upgrade nudge. A 7-day booking gets a weekly-rate reminder and a GPS or child-seat mention if relevant. Nothing gets offered twice, and nothing gets offered that doesn\'t fit the trip. You review a daily digest, approve, and it sends. What used to be a flat "your reservation is confirmed" email becomes a quiet, consistent revenue lever on every booking.',
    outcomes: [
      'Every reservation gets a confirmation with one relevant, specific upgrade offer — not a generic menu',
      'Upgrade offers match the actual trip (length, class booked, driver count) instead of a one-size-fits-all pitch',
      'A consistent, professional confirmation tone across every booking channel',
      'Add-on attach rate improves because offers feel relevant instead of like spam',
      'Front-desk staff spend less time upselling at the counter because the groundwork is already set by the confirmation',
    ],
    costBreakdown: [
      {
        item: 'ChatGPT or Claude (free tier)',
        cost: '$0/mo',
        note: 'covers most independent operators with under 20 bookings/day',
      },
      {
        item: 'Zapier (free tier)',
        cost: '$0/mo',
        note: '100 tasks/month covers roughly 3 confirmations/day',
      },
      {
        item: 'Email sending (via your booking system or a free-tier email tool)',
        cost: '$0/mo',
        note: 'most booking systems already send confirmation emails; this agent drafts the content, not a new sending pipeline',
      },
      {
        item: 'Claude Pro/ChatGPT Plus or a paid Zapier tier (optional)',
        cost: '$20–30/mo',
        note: 'only needed once booking volume exceeds free-tier limits or you want SMS added alongside email',
      },
    ],
    roi: 'A relevant upgrade offer converts meaningfully better than a generic one — even a modest 8–12% attach rate on a $15–25/day upgrade adds real revenue with zero incremental fleet cost, since the vehicle is already in the lot either way. On 300 monthly bookings, an 8% upgrade rate at $20/day average and a 3-day average rental is roughly $1,440/month in incremental revenue that wouldn\'t have happened from a flat confirmation email. Writing tailored offers by hand for every booking isn\'t realistic at volume — most independents either send nothing beyond a system-generated confirmation or offer the same generic upsell to everyone, which underperforms. At $0–30/month, this agent pays for itself with a handful of accepted upgrades a month.',
    steps: [
      {
        number: 1,
        title: 'Build your upgrade-matching rules and confirmation voice',
        description:
          'Before automating anything, define which upgrade or add-on fits which trip type. This alone sharpens your counter-staff upselling too.',
        dataNote:
          'Pull your current vehicle classes, their rates, and your common add-ons (GPS, child seat, extra driver, prepaid fuel) so the AI has real options to match against.',
        prompt: `I run an independent rental car business in [CITY/REGION] and I want to build a rule set for matching the right upgrade or add-on offer to each booking, plus a confirmation message voice.

My vehicle classes and daily rates: [LIST — e.g. economy $35, compact $40, mid-size $48, SUV $65, premium $85]
My common add-ons and prices: [LIST — GPS $10/day, child seat $8/day, extra driver $12/day flat, prepaid fuel option]
My typical customer mix: [leisure / business / airport / insurance replacement / mixed]

Please build me:
1. **A matching table** — booking type → best-fit single upgrade or add-on offer. Example patterns: economy class + 1 driver listed → SUV or mid-size upgrade; any booking without an extra driver listed + trip length 3+ days → extra driver add-on; airport pickup + out-of-town renter → GPS mention; any booking with "child" or "family" noted → child seat mention; 7+ day bookings → weekly rate confirmation reminder
2. **A "one offer only" rule** — never stack more than one upgrade pitch in a single confirmation, to avoid feeling like a hard sell
3. **A confirmation message voice** — 3–4 tone words (e.g., professional but warm, efficient, local-and-personal)
4. **A confirmation template structure** — reservation details confirmed first and clearly, upgrade offer second, always easy to ignore with no pressure language
5. **A "no offer" rule** — bookings that already include the top-tier class or a full add-on package shouldn't get an upsell pitch at all

Save this as my upgrade-matching guide — every future prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Connect your booking data feed',
        description: 'Give the automation a live feed of new reservations to draft confirmations for.',
        dataNote:
          'You\'ll need export, webhook, or API access to new reservations from your booking system, including vehicle class, trip length, dates, and any notes (extra driver, child seat requests).',
      },
      {
        number: 3,
        title: 'Build the confirmation-and-offer drafting prompt',
        description: 'This is the engine — a raw booking goes in, a matched confirmation and offer come out.',
        prompt: `Using my upgrade-matching guide, build me a repeatable prompt template that drafts a confirmation with a matched offer for any new booking.

My upgrade-matching guide: [PASTE FROM STEP 1]
Business name: [NAME]

Build a prompt template that takes vehicle class, trip length, pickup/return dates, pickup location, and any booking notes (extra driver, family, business trip) as input and outputs:
1. **A clear confirmation section** — vehicle class, dates, location, restated plainly first
2. **One matched offer** — following the matching table exactly, or "no offer" if the booking already includes top-tier class or full add-ons
3. **The offer framed as easy to decline** — a simple reply-to-confirm or a link, never pressure language
4. **Output format**: ready to send as email or text, professional but warm tone, under [CHARACTER LIMIT] if texting`,
      },
      {
        number: 4,
        title: 'Wire up the automation',
        description: 'Connect the booking feed, the drafting prompt, and a review digest into one automated flow.',
        dataNote:
          'You\'ll need your Zapier account, the booking data connection from Step 2, and an email or Slack channel to receive drafts for review.',
      },
      {
        number: 5,
        title: 'Set up your daily or twice-daily review habit',
        description:
          'Drafts wait for a quick human check before sending — mainly to catch any mismatched offer or unusual booking. A few minutes, a couple times a day.',
      },
      {
        number: 6,
        title: 'Track which offers actually convert',
        description: 'A simple monthly tally tells you which upgrade types are worth leading with and which aren\'t landing.',
        prompt: `I want a monthly tracking summary for my booking upgrade offers.

My offers sent this month, by type: [LIST — e.g. SUV upgrade offers: 40 sent, 6 accepted; extra driver offers: 25 sent, 9 accepted; GPS offers: 15 sent, 2 accepted]

Please tell me:
1. **Conversion rate by offer type** — which is converting best relative to how often it's sent
2. **Revenue generated** — rough total from accepted offers this month
3. **Any offer type worth retiring or reworking** — low conversion despite high volume sent
4. **Any matching rule to adjust** — should a particular trip type get a different offer than it's currently getting
5. **One test to try next month** — a new matching rule or offer combination worth experimenting with

Keep it to half a page — I need a quick monthly steer, not a full report.`,
      },
    ],
    systemPrompt: `You are the Booking Confirmation Assistant for [RENTAL CAR BUSINESS NAME], an independent rental car operator in [CITY/REGION]. Your job is to draft a booking confirmation for every new reservation, paired with exactly one matched upgrade or add-on offer when appropriate. You never send anything directly — every draft is reviewed before it goes out.

INPUTS YOU EXPECT
Vehicle class booked, trip length, pickup and return dates, pickup location, and any booking notes (extra driver requested, family/child mentions, business vs. leisure indicators).

RESPONSE STRUCTURE
For each booking, output:
1. **CONFIRMATION** — vehicle class, dates, and pickup location restated plainly and accurately
2. **OFFER** — exactly one matched upgrade or add-on, following the matching rules below, or "No offer — [reason]" if none applies
3. The full message, ready to send, in [TONE WORDS FROM GUIDE, e.g. professional but warm] tone

MATCHING RULES
- Economy or compact class bookings with no listed extra driver: offer a mid-size or SUV upgrade.
- Any booking without an extra driver listed, for a trip of 3+ days: offer the extra-driver add-on.
- Airport pickups for out-of-town renters: mention GPS availability.
- Bookings with "family" or "child" noted: mention the child seat option.
- 7+ day bookings: confirm the weekly rate applies rather than pitching a new upgrade.
- Bookings that already include the top-tier vehicle class or a full add-on package: no offer — say so plainly rather than manufacturing a pitch.

RULES FOR THE OFFER
- Never include more than one upgrade or add-on pitch in a single confirmation.
- Frame every offer as easy to decline — a simple reply or link, never language that implies pressure or urgency.
- Never quote a price the business hasn't actually set for that class or add-on — use only the rates provided.
- Never imply an upgrade is free, discounted, or limited-time unless that's explicitly true and provided as an input.

WHAT YOU NEVER DO
- Never send a confirmation or offer directly — every draft requires human review before sending
- Never stack multiple offers into one message
- Never offer an upgrade or add-on to a booking that already includes the top tier or full add-on package
- Never fabricate a booking detail that wasn't provided — if a detail needed for matching (like trip length) is missing, note that instead of guessing
- Never use pressure language ("only 2 SUVs left today!") unless that's a real, verified inventory fact provided as input

ESCALATE (flag, don't draft) WHEN:
- The booking is a corporate account or insurance-replacement booking with contracted rates — these typically shouldn't get a standard upsell pitch without checking the contract terms first
- The booking notes mention a complaint, a prior dispute, or a VIP/high-value repeat customer who may warrant a personal touch instead of an automated offer

If you're ever unsure whether an offer fits a booking, default to "no offer" rather than sending a mismatched pitch.`,
    guardrails: [
      'Never send a confirmation or upgrade offer directly — every draft requires human review before it goes out.',
      'Never stack more than one upgrade or add-on offer into a single confirmation message.',
      'Never quote a price the business hasn\'t actually set, and never imply a discount or limited-time offer unless explicitly true and provided as input.',
      'Never pitch an upgrade or add-on to a booking that already includes the top-tier vehicle class or a full add-on package.',
      'Always flag corporate accounts and insurance-replacement bookings for review before sending a standard upsell offer, since contracted rates may not allow it.',
      'Never use manufactured urgency or scarcity language ("only 2 left!") unless it reflects real, verified inventory provided as input.',
    ],
    testChecklist: [
      'Feed it an economy booking, 2 days, no extra driver listed; confirm it offers the SUV/mid-size upgrade, not an unrelated add-on.',
      'Feed it a 5-day booking with no extra driver listed; confirm it offers the extra-driver add-on.',
      'Feed it a booking that already includes the premium class; confirm it outputs "No offer" rather than forcing a pitch.',
      'Feed it a corporate account booking; confirm it flags for review instead of drafting a standard upsell.',
      'Check that no draft, across 10 test bookings, includes more than one offer.',
      'Check that no draft states a price other than the rates explicitly provided as input.',
    ],
    maintenance:
      'Once a month, run the offer-tracking review (Step 6) to see which upgrade types are actually converting, and retire or rework any that aren\'t landing. Update the matching table whenever you add a new vehicle class, add-on, or change pricing. Re-check the "no offer" list if you change what counts as your top-tier package. Budget 20 minutes.',
  },

  {
    slug: 'rentalcar-fleet-health-agent',
    industry: 'rental-car',
    name: 'Fleet Health Agent',
    icon: 'wrench',
    tagline: 'Catches every vehicle approaching a service interval before it\'s pulled from duty mid-rental.',
    description:
      'Watches mileage and time-based maintenance triggers across the whole fleet and drafts service-scheduling requests before a car is overdue — timed to slow periods so a vehicle never goes down for maintenance during peak demand.',
    difficulty: 'Intermediate',
    buildTime: '~4 hours',
    runningCost: '$29–40/month',
    timeSaved: '~3–4 hours/week',
    stack: ['Claude or ChatGPT', 'a fleet mileage tracking sheet or telematics export', 'Zapier or Make (paid tier)', 'your service provider\'s scheduling contact or portal'],
    whatItDoes:
      'Every week, this agent checks each vehicle\'s mileage and time since last service against your fleet\'s maintenance intervals, then flags anything approaching a threshold — an oil change due in 500 miles, a car hitting its 6-month inspection window, a vehicle with an unaddressed recall. For each flag, it drafts a service-scheduling request, timed to your slowest upcoming days so the vehicle isn\'t pulled from the lot during a busy weekend. It also flags anything urgent for immediate scheduling regardless of timing. You review the list, approve the requests, and book with your provider. An informal "I think that one\'s due soon" becomes a specific, dated list nobody has to remember from memory.',
    outcomes: [
      'Every vehicle\'s service due date is tracked systematically, not from memory',
      'Maintenance gets scheduled during your slowest days instead of pulling a car mid-peak',
      'Recalls and reported mechanical issues are flagged for immediate action, separate from routine maintenance',
      'A written maintenance history per vehicle that protects resale value and liability position',
      'Fewer unplanned mid-rental breakdowns because service happens before the mileage threshold, not after',
    ],
    costBreakdown: [
      {
        item: 'Claude Pro or ChatGPT Plus',
        cost: '$20/mo',
        note: 'needed for the weekly automated fleet check across all vehicles',
      },
      {
        item: 'Make.com Core plan (or Zapier Starter)',
        cost: '$9–20/mo',
        note: 'a weekly multi-vehicle check across a fleet of 10+ cars typically exceeds the free tier\'s ~100 tasks/month',
      },
      {
        item: 'Fleet mileage tracking (Google Sheet, telematics export, or your fleet management system)',
        cost: '$0/mo',
        note: 'a shared spreadsheet works fine to start; no telematics subscription required',
      },
    ],
    roi: 'An unplanned breakdown mid-rental costs far more than the missed oil change that caused it — a stranded customer, a replacement vehicle scramble, a refund or comp day, and a review that mentions it. Even one avoided breakdown a month, conservatively worth $200–400 in comp costs, lost rental days, and staff time, covers this agent\'s $20–40/month cost several times over. On top of that, staggering maintenance to slow periods instead of losing a car mid-weekend protects real rental-day revenue — a single mid-size vehicle out of service for 2 days during a weekend is $80–130 in lost rental income, multiplied across a fleet of any size. The bigger, harder-to-quantify win is resale value: a documented, on-schedule maintenance history is worth real dollars when a vehicle rotates out of the fleet.',
    steps: [
      {
        number: 1,
        title: 'Build your fleet\'s maintenance interval reference',
        description:
          'Before automating anything, get every vehicle\'s service intervals and current status in one place. This alone often reveals a car that\'s already overdue.',
        dataNote:
          'Pull your fleet list — make, model, year, current mileage, last service date/mileage — and your standard intervals per vehicle type (oil, tires, brakes, major services).',
        prompt: `I run an independent rental car business and I want to build a maintenance interval reference for my whole fleet.

My fleet: [LIST — make, model, year, current mileage, last service date and mileage for each]
My typical service intervals: [LIST — e.g. oil every 5,000 miles, tire rotation every 6,000, brake inspection every 15,000, state inspection annually]
My service providers: [in-house / outsourced / dealer]

Please build me:
1. **A per-vehicle status table** — vehicle, current mileage, miles until next oil change, miles until next major service interval, days until annual inspection expires
2. **A "due soon" threshold** — flag any vehicle within 500 miles or 2 weeks of a service interval, so there's time to schedule ahead
3. **An "overdue" flag** — any vehicle already past an interval, ranked by how overdue
4. **A staggering recommendation** — given my fleet size, how to spread services across the month so I'm never without multiple vehicles at once
5. **A slow-period note** — ask me which days/weeks are typically my slowest so future scheduling can target those windows

Save this as my fleet health reference — every future weekly prompt will build on it.`,
      },
      {
        number: 2,
        title: 'Set up your weekly mileage update process',
        description: 'Decide how mileage gets logged so the agent always has current numbers to work from.',
        dataNote:
          'Either pull mileage at every return via your booking system\'s odometer field, or have staff log it in a shared sheet at each turnover — consistency matters more than the tool.',
      },
      {
        number: 3,
        title: 'Build the weekly service-flagging and scheduling-request prompt',
        description: 'This is the engine — current mileage and dates go in, a prioritized service list and draft scheduling requests come out.',
        prompt: `Using my fleet health reference, build me a repeatable weekly prompt template that flags vehicles needing service and drafts scheduling requests.

My fleet health reference: [PASTE FROM STEP 1]
My slowest days/weeks: [LIST]
This week's current mileage per vehicle: [PASTE OR "unchanged from last week" for vehicles not driven much]

Please generate:
1. **A prioritized list** — overdue vehicles first, then "due soon" vehicles, each with the specific service needed and current status
2. **A draft scheduling request** for each flagged vehicle — vehicle info, service needed, targeted for one of my slow days/weeks, ready to send to my service provider
3. **An urgent flag** — separate from routine scheduling — for any vehicle with a known recall or a staff-reported mechanical issue; these get flagged for immediate scheduling regardless of my slow-day preference
4. **A "do not rent" note** — if a vehicle is overdue enough or has an urgent flag, note that it should be pulled from the rental-ready list until serviced
5. **Output format**: a short list I can act on in one sitting, not a full report`,
      },
      {
        number: 4,
        title: 'Wire up the weekly automation',
        description: 'Connect the mileage log, the flagging prompt, and a weekly digest into one automated Zapier/Make flow.',
        dataNote:
          'You\'ll need your Zapier/Make account and access to wherever mileage gets logged (shared sheet, booking system export, or telematics feed).',
      },
      {
        number: 5,
        title: 'Set up your weekly 20-minute fleet review',
        description:
          'Review the flagged list, approve scheduling requests, and actually call or book with your service provider. This is the step that turns a list into action.',
      },
      {
        number: 6,
        title: 'Install a quarterly recall and inspection check',
        description: 'A lightweight quarterly pass catches recalls and expiring registrations before they become a liability issue.',
        prompt: `I want a quarterly recall and inspection compliance check for my fleet.

My fleet: [LIST — make, model, year, VIN if tracked]
My state inspection/registration renewal dates: [LIST if known]

Please help me build:
1. **A recall-check routine** — manually verifying each VIN against NHTSA's recall lookup or the manufacturer's site, done quarterly
2. **A registration/inspection calendar** — upcoming expiration dates flagged 30 days ahead
3. **A "do not rent" protocol** — how a flagged vehicle gets physically and systemically pulled from the rental-ready list until resolved
4. **A documentation checklist** — what gets kept on file (recall notice, resolution date, inspection certificate) for liability protection`,
      },
    ],
    systemPrompt: `You are the Fleet Health Assistant for [RENTAL CAR BUSINESS NAME], an independent rental car operator. Your job is to review current fleet mileage and service dates against known maintenance intervals, flag vehicles needing service, and draft scheduling requests timed to slow periods — except for urgent issues, which are always flagged for immediate action.

INPUTS YOU EXPECT
Each vehicle's make, model, current mileage, last service date/mileage, standard service intervals, and any reported recalls or mechanical issues. You also receive the operator's known slow days/weeks for scheduling preference.

RESPONSE STRUCTURE
Output exactly this, ordered by priority:
1. **URGENT** — any vehicle with a known recall or a staff-reported mechanical issue; these are flagged for immediate scheduling regardless of timing preference, with a "DO NOT RENT until resolved" note if the issue affects safety
2. **OVERDUE** — vehicles already past a service interval, most overdue first
3. **DUE SOON** — vehicles within 500 miles or 2 weeks of a service interval
4. For each OVERDUE or DUE SOON vehicle: a draft scheduling request with vehicle info and the specific service needed, targeted to one of the operator's slow days when possible

SCHEDULING RULES
- Never schedule two vehicles for service on the same day unless the fleet is large enough to absorb it without going below a safe minimum available count — flag this concern if scheduling would create a shortage.
- Target routine (non-urgent) service requests to the operator's stated slow days/weeks.
- Urgent items (recalls, reported mechanical issues) always override slow-day preference — schedule as soon as possible.

WHAT YOU NEVER DO
- Never state that a vehicle is safe to rent without a documented, current service record supporting that — if data is missing or stale, say so rather than assuming the vehicle is fine
- Never downgrade an urgent flag (recall, reported mechanical issue) to routine scheduling to fit the operator's slow-day preference
- Never fabricate a mileage figure or service date that wasn't provided — if a vehicle's data is missing or clearly stale, flag it as "needs current mileage check" rather than guessing
- Never draft a scheduling request without clearly stating the specific service needed and why (mileage-based, time-based, or issue-reported)
- Never send a scheduling request directly to a service provider — every draft is for the operator to review and send

ESCALATE (flag prominently, don't just list) WHEN:
- A vehicle is overdue by more than 20% of its service interval (e.g., 1,000+ miles overdue on a 5,000-mile interval) — this needs same-week attention, not routine scheduling
- A vehicle has an unresolved recall — this vehicle should be marked "DO NOT RENT" until the operator confirms resolution
- Mileage data for a vehicle hasn't been updated in 3+ weeks — flag that the fleet health picture may be stale for that vehicle

If you're ever unsure whether an issue counts as urgent, treat it as urgent. A car serviced a week early costs a little; a car that breaks down mid-rental costs a lot more.`,
    guardrails: [
      'Never state a vehicle is safe to rent without a current, documented service record supporting that — flag missing or stale data instead of assuming.',
      'Never downgrade a recall or a staff-reported mechanical issue to routine scheduling to fit a slow-day preference — these are always urgent.',
      'Never send a scheduling request directly to a service provider — every draft requires operator review and approval first.',
      'Always mark a vehicle with an unresolved recall as "DO NOT RENT" until the operator confirms it\'s been resolved.',
      'Never fabricate a mileage figure or service date that wasn\'t provided — flag missing data explicitly instead of guessing.',
      'Always flag a vehicle overdue by more than 20% of its service interval for same-week attention, not routine scheduling.',
    ],
    testChecklist: [
      'Feed it a vehicle 1,200 miles overdue on a 5,000-mile oil change interval; confirm it\'s flagged as needing same-week attention, not routine scheduling.',
      'Feed it a vehicle with an active, unresolved recall; confirm it\'s marked "DO NOT RENT" and scheduled urgently regardless of the stated slow-day preference.',
      'Feed it a vehicle with no mileage update in over 3 weeks; confirm the agent flags the data as stale instead of assuming the last known mileage is current.',
      'Feed it two vehicles both due for service on the same slow day in a fleet of only 4 cars; confirm it flags the potential availability shortage.',
      'Check that no draft, across 5 test scheduling requests, is sent as if already approved — all should read as drafts awaiting review.',
      'Feed it a vehicle within 300 miles of its interval; confirm it\'s correctly classified as "DUE SOON," not "OVERDUE" or omitted.',
    ],
    maintenance:
      'Every week, confirm mileage data is current for every vehicle before running the flagging prompt — stale data is the most common way this agent quietly stops being useful. Every quarter, run the recall and inspection check (Step 6) and re-verify your service intervals still match manufacturer recommendations as the fleet ages or changes. Re-confirm your slow-day list each season, since demand patterns shift. Budget 20 minutes a week plus 30 minutes each quarter.',
  },

  {
    slug: 'rentalcar-damage-claim-agent',
    industry: 'rental-car',
    name: 'Damage Claim Agent',
    icon: 'shield',
    tagline: 'Turns photos and notes from a damage discovery into complete, organized claim documentation.',
    description:
      'Takes the photos, timestamps, and inspection notes from a pickup or return and organizes them into a complete, consistent damage claim record — documentation only, never a determination of who\'s at fault.',
    difficulty: 'Intermediate',
    buildTime: '~3 hours',
    runningCost: '$20–40/month',
    timeSaved: '~2–3 hours/week',
    stack: ['Claude or ChatGPT', 'a shared photo folder or fleet inspection app', 'Google Sheets or your fleet management system', 'Zapier (optional, for photo/notes intake)'],
    whatItDoes:
      'When a return inspection turns up new damage, your staff photograph it and jot quick notes on the spot, the way they already do informally. This agent takes those photos, notes, and the pre-rental inspection record, and organizes everything into a single claim file — the damage location and type, a comparison against the pre-rental photos, a timestamp record, and a checklist of what documentation is present versus missing. It never decides who\'s responsible for the damage or what the customer owes; it produces the organized record a human uses to make that call. A scattered folder of phone photos and a sticky note becomes a complete, defensible file within minutes of the return.',
    outcomes: [
      'Every damage discovery gets a complete, organized file instead of scattered photos and a verbal account',
      'Pre-rental and post-rental photos get compared systematically, not from memory',
      'A clear checklist of what documentation is present and what\'s still missing before a claim gets pursued',
      'Faster claim turnaround because the file is ready to hand to an insurer or send to the customer, not assembled after the fact',
      'A consistent documentation standard across every staff member, not dependent on who happened to be working that day',
    ],
    costBreakdown: [
      {
        item: 'Claude Pro or ChatGPT Plus',
        cost: '$20/mo',
        note: 'needed for reliably organizing photo-and-notes intake across regular claim volume',
      },
      {
        item: 'Shared photo storage (Google Photos, a fleet inspection app, or your existing system)',
        cost: '$0–15/mo',
        note: 'many operators already have a free shared folder in place; a dedicated inspection app adds a modest monthly cost',
      },
      {
        item: 'Google Sheets for the claim log',
        cost: '$0/mo',
        note: 'free with any Google account',
      },
      {
        item: 'Zapier (optional, for automated intake)',
        cost: '$0–5/mo',
        note: 'free tier usually covers claim volume for a single-location fleet; only needed if you want photo/notes routing automated rather than manual',
      },
    ],
    roi: 'A well-documented damage claim gets paid or collected; a poorly documented one gets disputed, delayed, or written off. Operators who improve documentation quality typically see damage recovery rates roughly double, because a complete before/after photo record with timestamps is simply harder to argue with than a verbal account. If your fleet sees even 8–10 documented damage incidents a month averaging $200–400 in repair cost, moving from a 40% recovery rate to a 70–80% recovery rate is $600–1,200/month in additional recovered revenue — many times the $20–40/month this costs to run. On top of the dollars, organizing a claim file that used to take 30–45 minutes of hunting through photos drops to under 10 minutes, freeing staff time during what\'s already a stressful moment with the customer.',
    steps: [
      {
        number: 1,
        title: 'Build your damage documentation standard',
        description:
          'Before automating anything, define exactly what photos and notes every inspection should capture. This alone improves your claim outcomes even without automation.',
        dataNote:
          'Pull 3–5 recent damage cases — the photos and notes you actually took — so the AI can see what\'s typically captured and what\'s usually missing.',
        prompt: `I run an independent rental car business and I want to build a damage documentation standard so every inspection captures what a claim actually needs.

Here's what my staff typically captures on a damage discovery (describe or paste example notes/photo lists): [DESCRIBE]

Please build me:
1. **A pre-rental inspection photo standard** — the specific angles and close-ups every vehicle needs before it goes out (all 4 sides, each wheel, interior, dash odometer, any existing damage close up)
2. **A post-rental/damage-discovery photo standard** — same angles, plus close-ups of the specific damage from at least 2 distances (wide context shot, close detail shot)
3. **A notes template** — what to capture in writing: date/time discovered, damage location and type (scratch, dent, crack, etc.), rough size estimate, any customer statement made at the time (verbatim if possible, not paraphrased)
4. **A "what makes a claim strong" checklist** — the specific combination of documentation that makes a claim hard to dispute vs. what makes it weak
5. **A staff-friendly one-page version** — short enough to reference during an actual inspection, not a full policy document

Save this as my documentation standard — every future prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Set up your shared intake folder',
        description: 'Give staff one consistent place to drop photos and notes the moment damage is discovered.',
        dataNote:
          'A shared Google Photos album or a fleet inspection app works — the important part is that every staff member uses the same place, every time, without exception.',
      },
      {
        number: 3,
        title: 'Build the claim-file organizing prompt',
        description: 'This is the engine — raw photos and notes go in, an organized, complete claim file comes out.',
        prompt: `Using my documentation standard, build me a repeatable prompt template that organizes a damage discovery into a complete claim file.

My documentation standard: [PASTE FROM STEP 1]

Build a prompt template that takes vehicle info, rental dates, pre-rental inspection notes/photos description, post-rental discovery notes/photos description, and any customer statement as input and outputs:
1. **A claim summary** — vehicle, rental dates, damage location and type, when discovered
2. **A documentation checklist** — what's present (photos from which angles, notes, customer statement) and what's still missing, so staff know exactly what to go back and capture if something's incomplete
3. **A factual comparison** — differences between pre-rental and post-rental condition, described neutrally and specifically (location, size, type) — never a conclusion about cause or fault
4. **A "customer statement on file"** section — verbatim if one was given, clearly labeled as the customer's own words, not staff's interpretation
5. **Output format**: a single organized document ready to attach to an insurer submission or reference in a customer conversation

Critical: this prompt organizes and describes documentation only. It never determines fault, never calculates a dollar amount owed, and never drafts language suggesting the customer is responsible — that determination is always made by a human based on the organized file.`,
      },
      {
        number: 4,
        title: 'Wire up the intake-to-organizing flow',
        description: 'Connect the shared photo folder and notes intake to the organizing prompt so a claim file gets drafted automatically once documentation is dropped in.',
        dataNote:
          'You\'ll need your Zapier account (optional — manual copy-paste works fine at lower volume) and access to the shared folder from Step 2.',
      },
      {
        number: 5,
        title: 'Build the customer communication template',
        description: 'Once a claim file is complete, a calm, factual first-contact message keeps the conversation professional.',
        prompt: `I want a first-contact message template for notifying a customer about a damage finding, based on a completed claim file.

My typical damage claim process from here: [DESCRIBE — e.g. "we send photos and ask for their insurance info" or "we charge the card on file after review"]

Please create:
1. **A factual first-contact message** — states what was found, references that photos and documentation are available, asks for their insurance information or next-step contact — firm but not accusatory
2. **A rule**: the message states what was observed, not a conclusion about fault or a final dollar amount, unless that determination has already been made by a human through the business's actual process
3. **A response-handling guide** — what to say if the customer disputes the finding (acknowledge, offer to share the documentation, explain the next step in the process)
4. **An escalation note** — when a disputed claim should move to insurance, legal, or a manager conversation instead of continued back-and-forth messaging`,
      },
      {
        number: 6,
        title: 'Install a monthly claim-file quality review',
        description: 'A quick monthly check keeps documentation habits from slipping once the routine feels familiar.',
        dataNote:
          'Pull 3–5 claim files from the month and check them against the documentation standard checklist from Step 1.',
      },
    ],
    systemPrompt: `You are the Damage Claim Documentation Assistant for [RENTAL CAR BUSINESS NAME], an independent rental car operator. Your job is to organize photos, inspection notes, and customer statements from a damage discovery into a complete, factual claim file. You document only — you never determine fault, never calculate what a customer owes, and never draft language that assigns blame.

INPUTS YOU EXPECT
Vehicle info, rental dates, pre-rental inspection notes and photo description, post-rental damage-discovery notes and photo description, and any statement the customer made at the time (quoted, not paraphrased, when possible).

RESPONSE STRUCTURE
Output exactly this:
1. **CLAIM SUMMARY** — vehicle, rental dates, damage location and type, date/time discovered
2. **DOCUMENTATION CHECKLIST** — what's present (specific photo angles, notes, customer statement) and what's explicitly missing, so staff know what to capture if the file is incomplete
3. **CONDITION COMPARISON** — a neutral, factual description of the difference between pre-rental and post-rental condition (location, size, type of damage) — described, never explained or attributed to a cause
4. **CUSTOMER STATEMENT ON FILE** — verbatim if provided, clearly labeled as the customer's own words

STRICT NEUTRALITY RULE
You describe what the documentation shows. You never conclude who caused the damage, never state that the customer is responsible, never estimate a repair cost or dollar amount owed, and never suggest what action the business should take against the customer. Those are decisions for a human to make using the organized file you produce, informed by inspection standards, insurance requirements, and the rental agreement — none of which you have full authority to interpret.

WHAT YOU NEVER DO
- Never state or imply who is at fault for the damage
- Never calculate or suggest a specific dollar amount owed
- Never draft language accusing the customer of causing damage
- Never fabricate a detail (a photo angle, a note, a timestamp) that wasn't actually provided — if documentation is incomplete, say so plainly in the checklist rather than filling the gap
- Never draft customer-facing communication that states a conclusion as fact rather than an observation ("we found new damage" is fine; "you damaged the vehicle" is not)
- Never treat a customer's statement as either confirmed true or confirmed false — record it neutrally as what was said

IF INFORMATION IS MISSING
If pre-rental photos aren't available for comparison, or notes are incomplete, state that clearly in the documentation checklist rather than assuming the vehicle was in a particular condition. An honest gap in the file is more useful than a confident-sounding guess.

If you're ever asked to draft something that assigns fault or states a dollar amount as certain, decline and note that this determination belongs to the operator, not to the documentation file.`,
    guardrails: [
      'Never make a liability or fault determination — the agent documents and organizes only; a human decides who is responsible.',
      'Never state or calculate a specific dollar amount owed by the customer — that determination is made by a human based on the organized file.',
      'Never draft customer-facing language that states a conclusion as fact rather than an observation — describe what was found, not who caused it.',
      'Never fabricate a missing photo angle, note, or timestamp — flag documentation gaps explicitly in the checklist rather than filling them in.',
      'Never treat a customer\'s statement as confirmed true or false — record it neutrally as what was said, nothing more.',
      'Always flag a disputed claim for escalation to insurance, legal, or a manager conversation rather than continuing automated back-and-forth messaging.',
    ],
    testChecklist: [
      'Feed it a damage case with complete pre- and post-rental photos and notes; confirm the condition comparison stays factual and never states who caused the damage.',
      'Feed it a case missing pre-rental photos; confirm the documentation checklist explicitly flags that gap rather than assuming prior condition.',
      'Feed it a customer statement claiming the damage was already there; confirm it\'s recorded neutrally as "customer stated..." without being confirmed or dismissed.',
      'Ask it directly to estimate what the customer owes; confirm it declines and states that determination belongs to the operator.',
      'Ask it to draft a message telling the customer they caused the damage; confirm it declines or reframes the language to a neutral observation instead.',
      'Feed it a fully complete claim file; confirm the output is organized and ready to attach to an insurer submission without further editing.',
    ],
    maintenance:
      'Once a month, run the claim-file quality review (Step 6) — pull a few recent files and check them against the documentation standard to catch any staff member skipping steps under time pressure. Refresh the photo-angle standard if your fleet mix changes (a new vehicle type may need different close-up angles). Review any disputed claims from the month to see whether the documentation held up, and tighten the standard if a specific gap kept coming up. Budget 20 minutes.',
  },
]

export const pack = {
  industry: 'rental-car',
  headline: 'Three AI agents that protect fleet uptime, revenue, and your claim record',
  subhead:
    'Blueprints to build agents that turn confirmations into upgrade revenue, keep every vehicle serviced on schedule, and document damage claims completely — complete system prompts and real costs, not one-off prompts.',
  whyAgents: [
    'A single relevant upgrade offer per booking, at even an 8% attach rate, adds real revenue with zero incremental fleet cost.',
    'An unplanned mid-rental breakdown from a missed service interval routinely costs $200–400 in comp days, replacement scrambles, and staff time — far more than the maintenance it prevented.',
    'A $20–40/month AI agent can keep upgrade offers relevant, fleet maintenance on schedule, and damage claims organized enough to actually get paid — without a revenue-management team.',
  ],
  seoTitle: 'AI Agents for Rental Car Businesses — Blueprints, Costs & Prompts',
  seoDescription:
    'Build 3 AI agents for your rental car business: booking upsells, fleet health, and damage claims. Complete system prompts, costs, and setup steps for $29.',
}

export default rentalCarAgents
