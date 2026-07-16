const autoRepairAgents = [
  {
    slug: 'autorepair-estimate-followup-agent',
    industry: 'auto-repair',
    name: 'Estimate Follow-Up Agent',
    icon: 'envelope',
    tagline: 'Every unapproved estimate gets chased on a schedule, not when someone remembers.',
    description:
      'Follows up on every estimate a customer hasn\'t approved yet, with tiered nudges that get more direct over 10 days — so stalled quotes turn into scheduled work instead of quietly expiring.',
    difficulty: 'Beginner',
    buildTime: '~3 hours',
    runningCost: '$0–30/month',
    timeSaved: '~3 hours/week',
    stack: ['Claude or ChatGPT', 'Zapier (free tier)', 'a shop estimate export or Google Sheet', 'SMS via your existing texting tool'],
    whatItDoes:
      'Every estimate that doesn\'t get approved on the spot goes into a queue this agent watches. Day 2, it drafts a friendly text reminding the customer their recommended work is still on file. Day 5, with no response, it drafts a more direct follow-up restating the actual consequence of waiting — a fluid getting worse, an inspection item — without fear-mongering. Day 10, it drafts a close-out message and marks the estimate cold if there\'s no reply. Every draft lands in a queue for your advisor to skim and send — nothing goes out untouched. A stack of forgotten estimates becomes a working pipeline that recovers work you already earned the right to do.',
    outcomes: [
      'Every unapproved estimate gets a scheduled follow-up instead of falling off the desk',
      'Follow-ups escalate gently over 10 days instead of one text that never gets repeated',
      'Safety-critical declined items are flagged for a phone call, not left to a text thread',
      'A visible log of which estimates converted, stalled, or went cold',
      'Service advisors spend minutes approving drafts instead of remembering who to call back',
    ],
    costBreakdown: [
      {
        item: 'ChatGPT or Claude (free tier)',
        cost: '$0/mo',
        note: 'plenty for a single advisor drafting a handful of follow-ups a day',
      },
      {
        item: 'Zapier (free tier)',
        cost: '$0/mo',
        note: '100 tasks/month covers roughly 3 follow-ups/day, typical for a 4–8 bay shop',
      },
      {
        item: 'Sending texts through your phone or existing texting tool',
        cost: '$0/mo',
        note: 'most shops already text customers manually — no new tool required to start',
      },
      {
        item: 'OpenPhone or Zapier\'s SMS integration (optional)',
        cost: '$20–30/mo',
        note: 'worth adding once you want the sending automated too, not just the drafting',
      },
    ],
    roi: 'Shops typically lose 20–30% of written estimates to nothing more than "we got busy and never circled back" — not a real no. If your average approved estimate is $400 and you write 40 a month, even a 10% recovery from consistent follow-up is $1,600/month in work you already diagnosed and quoted. Doing that follow-up manually — checking who\'s pending, drafting a text, deciding on tone — runs a service advisor 2–3 hours a week, or $260–360/month at $30/hour. This agent turns that into 10–15 minutes a day of approving drafts. Even at the top of the cost range, you\'re spending under $30/month against thousands in already-quoted work sitting in a drawer. Breakeven is the first recovered estimate.',
    steps: [
      {
        number: 1,
        title: 'Write your follow-up voice and tier plan',
        description:
          'Before automating anything, decide what each follow-up should say and when it should escalate. This alone is worth doing even if you stop here.',
        dataNote:
          'Pull 5–10 recent unapproved estimates — a mix of small maintenance items and bigger repairs — so the AI has real examples to work from.',
        prompt: `I run an independent auto repair shop called [SHOP NAME] in [CITY]. I want to build a 3-touch follow-up plan for estimates customers haven't approved yet.

Here are some recent unapproved estimates, with dollar amount and what the work was: [PASTE 5–10 EXAMPLES]

My shop's tone: [e.g., straightforward and honest / warm and low-pressure / efficient and to-the-point]
Things I never want to sound like: [e.g., pushy, alarmist, "used car salesman"]

Please build me:
1. **A day-2 touch** — friendly reminder, assumes the customer is just busy, no urgency language, ends with an easy yes/no
2. **A day-5 touch** — slightly more direct, restates the specific consequence of waiting for THIS type of work (safety item vs. wear item vs. convenience item — treat these differently), still no pressure tactics
3. **A day-10 touch** — a clear close-out message: "want us to go ahead, or should we release the estimate?" Not guilt, just clarity
4. **A tone rule for safety-critical items** (brakes, steering, tires) vs. wear items (belts, fluids) vs. convenience items (AC, cosmetic) — safety items should sound more direct sooner, without ever sounding like a scare tactic
5. **A length rule** — SMS under [CHARACTER LIMIT] characters, plain language, no jargon like "OE" or part numbers
6. **A "stop the sequence" rule** — if the customer replies at any point, the sequence pauses and a human takes over

Save this as my follow-up voice guide — every future prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Set up your estimate tracking sheet',
        description: 'Give the automation something to watch — a simple list of pending estimates with dates.',
        dataNote:
          'Either export unapproved estimates from your shop management system daily, or keep a simple Google Sheet: customer name, phone, vehicle, estimate amount, work description, date quoted, safety flag (yes/no), status.',
      },
      {
        number: 3,
        title: 'Build the follow-up drafting prompt',
        description: 'This is the engine — a pending estimate goes in, the right-tier draft comes out.',
        prompt: `Using my follow-up voice guide, build me a repeatable prompt template that drafts the right follow-up for any pending estimate.

My follow-up voice guide: [PASTE FROM STEP 1]
Shop name: [SHOP NAME]
Today's date: [DATE]

Build a prompt template that takes these inputs — customer first name, vehicle, estimate amount, work description, date quoted, safety flag — and outputs:
1. **Days pending** (today's date minus date quoted)
2. **Which tier applies** — day 2, day 5, day 10, or "not yet due" if under 2 days
3. **The draft text**, following the tone rules for that tier and that item's safety category
4. **A "FLAG FOR CALL" instead of a text draft** if the item is safety-critical AND it's been 5+ days with no response — some things deserve a phone call, not a third text
5. **Output format**: just the tier, the draft (or flag), nothing else — I'll be reviewing these in a batch every morning`,
      },
      {
        number: 4,
        title: 'Wire up the daily Zapier check',
        description: 'Connect your estimate sheet, the prompt, and a daily digest so drafts show up automatically each morning.',
        dataNote:
          'You\'ll need your Zapier account, access to your estimate tracking sheet or export, and an email or Slack channel to receive the daily digest.',
      },
      {
        number: 5,
        title: 'Set up your 10-minute morning approval habit',
        description:
          'The agent drafts; your service advisor stays the final word on every message that goes out. Pick one time each morning and stick to it.',
      },
      {
        number: 6,
        title: 'Build the safety-critical escalation checklist',
        description: 'Decide now — not in the moment — which declined items are never left to a text-only follow-up.',
        prompt: `I want a follow-up escalation checklist specifically for safety-critical declined work.

My shop: [SHOP NAME], [CITY]
My typical safety-critical categories: brakes, steering/suspension, tires below legal tread, and [ANYTHING ELSE SPECIFIC TO MY SHOP]

Please build a one-page checklist covering:
1. Which categories always get a phone call by day 5 if there's been no response to the text, not just another text
2. Exact language for the phone call — how to state the risk honestly without sounding like a scare tactic or a liability disclaimer read aloud
3. What to document in the customer file when a safety item is declined twice — for our records, not to pressure the customer
4. A rule for when a declined safety item should trigger a note on the vehicle file so the next visit's advisor sees it immediately
5. A boundary: what we do NOT do — no refusing to release the vehicle, no implying the shop is liable if something happens, no repeating the warning more than twice without the customer asking

Output this as something I can post near the service desk.`,
      },
    ],
    systemPrompt: `You are the Estimate Follow-Up Assistant for [SHOP NAME], an independent auto repair shop in [CITY]. Your job is to draft follow-up messages for customers who have an unapproved estimate on file. You never send anything — every draft goes to the service advisor for review before it's sent.

VOICE
Write like a real service advisor, not a collections department. Tone: [TONE WORDS FROM VOICE GUIDE, e.g. straightforward, low-pressure, respectful of the customer's time]. Keep messages short — SMS length, under [CHARACTER LIMIT] characters. Never use guilt, urgency manufactured out of nothing, or language that implies the shop is owed a decision.

INPUTS YOU EXPECT
For each pending estimate: customer first name, vehicle, estimate amount, work description, date quoted, and whether the item is safety-critical (brakes, steering, tires) vs. a wear item (belts, fluids, filters) vs. a convenience item (AC, cosmetic).

RESPONSE STRUCTURE
For each pending estimate, output:
1. Days pending and which tier applies (day 2 / day 5 / day 10 / not yet due)
2. The draft message text, or "FLAG FOR CALL" if escalation criteria are met
3. If flagged, one sentence explaining why a call is warranted instead of another text

TIER RULES
- Day 2: a light, no-pressure check-in assuming the customer is simply busy. Ends with an easy way to say yes or no.
- Day 5: slightly more direct. Restates the real consequence of waiting, specific to the item — a safety item gets a direct but calm statement of risk; a wear item gets a practical note about cost or convenience; a cosmetic item gets almost no urgency at all.
- Day 10: a clear close-out message asking whether to proceed or release the estimate. Not guilt — clarity. This is the last automated touch.

SAFETY-CRITICAL ESCALATION
If the item is safety-critical (brakes, steering, suspension, tires below legal tread) and the customer has not responded by day 5, output "FLAG FOR CALL" instead of a third text. Safety-critical items deserve a human voice, not an automated message chain.

WHAT YOU NEVER DO
- Never quote a binding price in a follow-up — restate the estimate amount only if it was already quoted in writing; never adjust, discount, or negotiate a price in a draft
- Never state or imply that a declined repair makes the vehicle unsafe to drive right now unless that was the technician's actual documented finding — restate the technician's language, don't invent urgency
- Never use fear-based language ("this could kill someone," "you're risking your family's safety") — state the documented finding plainly and let the customer decide
- Never send anything directly — every draft requires human approval
- Never contact a customer more than the three scheduled touches without an advisor's explicit request
- Never imply the shop won't release the vehicle or will refuse future service over a declined estimate

If you're ever unsure whether an item counts as safety-critical, treat it as safety-critical and flag for a human review of the tier assignment.`,
    guardrails: [
      'Never let the agent quote, discount, or adjust a binding price — it may only restate a price the shop already wrote down in the original estimate.',
      'Never let the agent characterize a declined repair as unsafe-to-drive unless that\'s the technician\'s own documented finding — restate their words, don\'t invent urgency.',
      'Always escalate safety-critical items (brakes, steering, suspension, tires) to a phone call by day 5 instead of a third automated text.',
      'Never send a follow-up automatically — every draft requires a human tap-to-approve before it goes out.',
      'Never imply the shop will withhold the vehicle or refuse future service because a customer declined an estimate.',
      'Never contact a customer beyond the three scheduled touches without the service advisor explicitly asking for another.',
    ],
    testChecklist: [
      'Feed it a declined brake estimate at day 5 with no response; confirm it outputs "FLAG FOR CALL," not another text draft.',
      'Feed it a declined cabin air filter estimate at day 5; confirm the tone stays low-pressure and doesn\'t borrow safety-item urgency language.',
      'Feed it an estimate quoted 1 day ago; confirm it correctly says "not yet due" instead of drafting a premature follow-up.',
      'Check that no draft, across 10 test estimates, states a different price than what was originally quoted.',
      'Feed it a customer who already replied "no" to the day-2 text; confirm the agent flags the sequence for pause rather than continuing to day 5.',
      'Read the day-10 close-out draft aloud; confirm it reads as neutral and clear, not as a guilt trip.',
    ],
    maintenance:
      'Once a month, skim 10–15 recent follow-up drafts for tone drift and check the actual recovery rate — how many stalled estimates converted after a follow-up. If a specific job type keeps getting flagged as safety-critical incorrectly (or not flagged when it should be), update the category list in the voice guide. Check your Zapier task count against the free-tier limit if estimate volume grows. Budget 15 minutes.',
  },

  {
    slug: 'autorepair-service-advisor-agent',
    industry: 'auto-repair',
    name: 'Service Advisor Agent',
    icon: 'wrench',
    tagline: 'Tech notes become customer updates a non-mechanic actually understands.',
    description:
      'Turns a technician\'s shorthand diagnostic notes into a plain-English update the customer can read in ten seconds, and flags legitimate additional work without turning every update into an upsell pitch.',
    difficulty: 'Intermediate',
    buildTime: '~4 hours',
    runningCost: '$20–40/month',
    timeSaved: '~4–5 hours/week',
    stack: ['Claude or ChatGPT', 'a shared notes doc or shop management system\'s notes field', 'Zapier or Make (optional, for automated texting)'],
    whatItDoes:
      'A tech finishes an inspection and jots down what they see: "front pads 3mm, rotors scored, rear pads 6mm ok, slow leak at the front left CV boot." That shorthand means nothing to a customer waiting on a text. This agent turns it into a clear update — what was found, why it matters, what\'s urgent versus what can wait, and a plain-language estimate range for anything beyond the original job — ready for the advisor to review and send. It never invents a diagnosis the tech didn\'t make, and it flags real safety concerns for a phone call instead of a text. What used to take an advisor 10 minutes of translating per car becomes a 90-second read-and-send.',
    outcomes: [
      'Every customer update is written in plain English, not shop shorthand',
      'Additional work found during a job gets flagged clearly, without every message feeling like a sales pitch',
      'Urgent safety findings are marked for a phone call instead of buried in a text',
      'Service advisors save 10+ minutes per vehicle translating and typing updates',
      'A consistent update format customers start to recognize and trust',
    ],
    costBreakdown: [
      {
        item: 'Claude Pro or ChatGPT Plus',
        cost: '$20/mo',
        note: 'the free tier\'s message limits get tight once you\'re running updates on every car, every day',
      },
      {
        item: 'Shared notes doc (Google Docs or your shop management system)',
        cost: '$0/mo',
        note: 'most shop systems already have a tech notes field; a shared Google Doc works if not',
      },
      {
        item: 'Zapier or Make (optional automation)',
        cost: '$0–20/mo',
        note: 'free tier is fine for manual copy-paste; a paid tier only matters if you want the whole flow automated end to end',
      },
    ],
    roi: 'A service advisor translating tech notes into customer-ready language spends roughly 10 minutes per vehicle on a moderately complex job — reading the notes, deciding what matters, typing it out clearly. At 8–12 cars a day, that\'s 80–120 minutes of advisor time daily, or $40–60/day at $30/hour, roughly $900–1,300/month. This agent cuts that translation time to under 2 minutes per vehicle (reading and approving a draft), recovering most of that time for actual customer conversations and upsell walkthroughs. Even at the top of the $20–40/mo cost range, the payback is measured in hours saved per day, not per month — this is one of the fastest-paying-for-itself agents in the shop.',
    steps: [
      {
        number: 1,
        title: 'Build your plain-English translation guide',
        description:
          'The agent needs a dictionary of your shop\'s shorthand and a rulebook for how to explain findings without either underselling risk or scaring the customer.',
        dataNote:
          'Pull 5–10 real tech notes from recent ROs, along with whatever the customer-facing summary ended up being (if you have one) so the AI can see the gap between the two.',
        prompt: `I run an auto repair shop and I want to build a translation guide so an AI can turn technician notes into plain-English customer updates.

Here are real technician notes, and if I have them, what the customer-facing message ended up being: [PASTE 5–10 EXAMPLES]

Common shorthand and jargon my techs use that customers won't understand: [LIST — e.g. "OE", "flagged 1.5", part numbers, abbreviations like "CV boot", "TB", "PS"]

Please build me:
1. **A jargon-to-plain-English dictionary** — 20–30 common terms my techs use and the plain version a customer would understand
2. **A severity framework** — how to translate tech findings into 3 buckets: URGENT (address before driving further), SOON (address within weeks/a few thousand miles), MONITOR (worth watching, not urgent)
3. **A tone rule** — matter-of-fact and specific ("your front brake pads are at 3mm, we recommend replacing around 3mm for safety margin") rather than vague or alarming ("your brakes are dangerously low!")
4. **A "what's included in this estimate" clarity rule** — customers should always know what they're being asked to approve, in dollars, before reading further detail
5. **3 example translations** — one URGENT, one SOON, one MONITOR — so I can see the format in action

Save this as my translation guide — every future prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Connect the tech notes to a shared input',
        description: 'Give the agent one consistent place to read notes from — whether that\'s your shop management system or a shared doc.',
        dataNote:
          'You\'ll need access to your shop management system\'s notes/inspection field, or a shared Google Doc your techs are willing to actually use consistently.',
      },
      {
        number: 3,
        title: 'Build the update-drafting prompt',
        description: 'This is the core engine — raw tech notes go in, a clean customer-ready update comes out.',
        prompt: `Using my translation guide, build me a repeatable prompt template that turns technician notes into a customer update.

My translation guide: [PASTE FROM STEP 1]
Shop name: [SHOP NAME]

Build a prompt template that takes the tech's raw notes and the original job description as input and outputs:
1. **What we found** — plain-English summary of the technician's findings, using only what the tech actually wrote, never inferring a diagnosis beyond it
2. **Severity classification** for anything beyond the original job — URGENT / SOON / MONITOR, using the framework from my guide
3. **What we recommend** — specific, in plain language, with an estimate range if the tech noted rough labor/parts (not an exact quote unless the tech gave one)
4. **What happens if we don't do this now** — one honest sentence, calibrated to actual severity, no exaggeration
5. **"FLAG FOR CALL"** instead of a text draft if the finding is URGENT and safety-related (brakes, steering component failure, structural, fuel leak)
6. **Output format**: ready to text or read aloud, under [CHARACTER LIMIT] if texting`,
      },
      {
        number: 4,
        title: 'Set up the daily workflow between techs and advisors',
        description: 'A clean handoff — tech writes notes as they always would, advisor reviews the drafted translation before it reaches the customer.',
        dataNote:
          'No new tools required here — this is a process step. Decide who runs the prompt (advisor, service manager) and when (as each car finishes, or in a batch every hour).',
      },
      {
        number: 5,
        title: 'Build the legitimate-upsell flag',
        description: 'Not every additional finding is a sales opportunity — this step keeps flagged work honest and specific to what was actually found.',
        prompt: `I want a checklist that keeps additional-work flags honest — only real findings, never manufactured upsells.

Please build:
1. **A "what counts as a legitimate flag" rule** — the tech must have physically observed or measured the issue (a reading, a visual inspection, a specific symptom), not a generic mileage-based recommendation with no supporting observation
2. **A "no flag without a note" rule** — if the tech didn't write it down, the agent should never add it, even if it's a common maintenance item for that mileage
3. **A frequency check** — if the same advisor's updates are flagging additional work on 80%+ of vehicles, that's worth a manager conversation about whether flags are staying honest
4. **A customer-trust safeguard** — every flagged item includes what specifically was observed (a measurement, a visual description), not just a category name, so the customer can see the evidence`,
      },
      {
        number: 6,
        title: 'Install a weekly accuracy spot-check',
        description: 'A quick weekly review keeps translations accurate and keeps the tone from drifting into either sales-y or overly clinical.',
        dataNote: 'Pick 5 updates sent that week and compare them side-by-side against the original tech notes.',
      },
    ],
    systemPrompt: `You are the Service Advisor Assistant for [SHOP NAME], an independent auto repair shop in [CITY]. Your job is to translate a technician's raw diagnostic notes into a clear, honest customer update. You never diagnose anything yourself — you only translate and organize what the technician actually wrote.

VOICE
Write like an experienced service advisor talking to someone who knows nothing about cars. Plain language, specific numbers when the tech gave them (measurements, mileage, readings), no jargon unless briefly defined. Tone: matter-of-fact and calm — never alarming, never dismissive.

INPUTS YOU EXPECT
The technician's raw notes for a given vehicle, and the original job description the customer approved. Nothing else. If the notes are unclear or a finding seems incomplete, say so rather than filling in a plausible-sounding diagnosis.

RESPONSE STRUCTURE
For each vehicle, output:
1. **WHAT WE FOUND** — plain-English summary of the technician's actual findings only
2. **SEVERITY** — URGENT / SOON / MONITOR, for anything beyond the original job (skip this section if there's nothing additional)
3. **WHAT WE RECOMMEND** — specific next step in plain language, with an estimate range only if the technician provided rough labor/parts figures
4. **WHY IT MATTERS** — one honest sentence about the consequence of waiting, calibrated to the actual severity
5. If URGENT and safety-related: "FLAG FOR CALL" instead of a text-ready draft, with one line explaining why a phone call is warranted

SEVERITY RULES
- URGENT: address before continued driving — brake material near minimum, active fluid leak, steering/suspension component failure, anything the technician flagged as an immediate safety concern
- SOON: address within the next few weeks or few thousand miles — wear items approaching replacement range, minor leaks, aging components
- MONITOR: worth noting, not urgent — early-stage wear, cosmetic issues, informational findings

WHAT YOU NEVER DO
- Never state a finding the technician didn't actually write down — if the notes are ambiguous, say the notes need clarification rather than inferring a diagnosis
- Never treat a routine mileage-based maintenance suggestion as a "finding" unless the technician actually inspected and confirmed it's needed
- Never quote a binding price — only restate a range the technician or advisor provided, and always say "estimate" or "rough range," never a locked-in figure
- Never soften a genuinely urgent safety finding to sound less alarming than what the technician documented, and never inflate a minor finding to sound more urgent than documented
- Never send anything directly to a customer — every update is a draft for the service advisor to review first

If a technician's note is too vague to translate responsibly (e.g., just "check brakes" with no measurement or observation), say exactly that instead of guessing at severity.`,
    guardrails: [
      'Never diagnose safety-critical systems as fine, or as a problem, beyond what the technician actually documented — the agent translates, it does not inspect.',
      'Never let the agent quote a binding price — only restate a rough range the technician or advisor already provided, always labeled as an estimate.',
      'Always flag URGENT safety-related findings (brakes, steering, suspension, active leaks) for a phone call, never a text-only update.',
      'Never add a "recommended" item to an update unless the technician\'s notes contain a specific, physical observation supporting it.',
      'Never send an update directly to a customer — every draft requires the service advisor\'s review and approval first.',
      'If technician notes are vague or incomplete, say so explicitly rather than filling in a plausible-sounding finding.',
    ],
    testChecklist: [
      'Feed it tech notes reading "front pads 3mm, recommend replace" and confirm it classifies this as URGENT with a plain-English explanation, not SOON or MONITOR.',
      'Feed it vague notes like "check suspension" with no measurement; confirm the agent says the notes need clarification instead of inventing a specific finding.',
      'Feed it a routine 60k-mile note with no physical observation attached; confirm it does NOT get flagged as an additional finding.',
      'Feed it an active fuel leak finding; confirm the output is "FLAG FOR CALL," not a standard text draft.',
      'Check that no draft, across 10 test cases, includes an exact dollar quote rather than a labeled estimate range.',
      'Compare 5 real drafts against the underlying tech notes side by side; confirm nothing in the draft goes beyond what the technician actually wrote.',
    ],
    maintenance:
      'Every week, spot-check 5 sent updates against the original tech notes to catch drift — either the agent softening real findings or over-flagging routine items as urgent. Every month, review whether any advisor\'s updates are flagging additional work on an unusually high percentage of vehicles, which may mean the "legitimate flag" rule needs tightening. Update the jargon dictionary whenever a new tech joins or a new shorthand creeps in. Budget 20 minutes a week.',
  },

  {
    slug: 'autorepair-reputation-agent',
    industry: 'auto-repair',
    name: 'Review & Reputation Agent',
    icon: 'star',
    tagline: 'A review request after every completed job, and a reply drafted for every review that comes back.',
    description:
      'Sends a well-timed review request after every completed repair and drafts replies to whatever comes back — building a review base that actually reflects your shop\'s work instead of only hearing from unhappy customers.',
    difficulty: 'Beginner',
    buildTime: '~2 hours',
    runningCost: '$0–20/month',
    timeSaved: '~2 hours/week',
    stack: ['Claude or ChatGPT', 'Zapier (free tier)', 'Google Business Profile', 'your shop management system\'s completed-RO trigger or a simple checkout checklist'],
    whatItDoes:
      'When a car is picked up and the invoice is closed, this agent waits a day — long enough for the customer to have driven it — then drafts a short, specific review request referencing the actual work done ("hope the new brakes are treating you well"). When a review comes in, it drafts a reply in your shop\'s voice within the day, thanking specific details and flagging anything mentioning a comeback, safety concern, or dispute for you to handle personally instead of auto-drafting. What used to be reviews only from customers upset enough to leave one becomes a fuller, more honest picture of the shop\'s actual work.',
    outcomes: [
      'Every completed job gets a well-timed, specific review request instead of relying on word of mouth alone',
      'A fuller review base that reflects typical customers, not just the unhappy ones',
      'Every review gets a reply within a day, in your shop\'s voice',
      'Reviews mentioning comebacks, safety issues, or disputes are flagged for you, never auto-replied',
      'A five-minute daily habit instead of a dreaded, ignored review inbox',
    ],
    costBreakdown: [
      {
        item: 'ChatGPT or Claude (free tier)',
        cost: '$0/mo',
        note: 'covers most independent shops handling under 15 review requests/replies a day',
      },
      {
        item: 'Zapier (free tier)',
        cost: '$0/mo',
        note: '100 tasks/month covers roughly 3 review requests + replies/day',
      },
      {
        item: 'Google Business Profile',
        cost: '$0/mo',
        note: 'free to claim and manage; this is where most auto repair reviews live',
      },
      {
        item: 'Claude Pro or ChatGPT Plus (optional)',
        cost: '$20/mo',
        note: 'only needed if you\'re running 15+ jobs/day or want a faster model for other agents on the same account',
      },
    ],
    roi: 'Independent shops with a steady flow of fresh, specific reviews consistently outrank shops with a handful of stale ones — and in a search-driven business ("brake shop near me"), review count and recency directly affect whether you\'re the first call. A shop completing 15 jobs a week that converts even 20% of review requests into new reviews adds roughly 3 a week, 150 a year — a meaningfully different Google presence within 12 months. The time cost without this agent is real too: manually remembering to ask, then drafting replies, runs 1.5–2 hours a week for most owners. This agent turns that into 10 minutes a day of approving drafts. At $0–20/month, the cost is negligible against what even one extra customer a month from improved search visibility is worth.',
    steps: [
      {
        number: 1,
        title: 'Write your shop\'s reply and request voice guide',
        description:
          'Before automating anything, define how your shop actually talks — this makes every future draft sound like you, not a template.',
        dataNote:
          'Pull 5–10 past reviews (a mix of ratings if you have them) and any replies you\'ve written before. If you\'ve never replied, that\'s fine — just gather the reviews.',
        prompt: `I run an independent auto repair shop called [SHOP NAME] in [CITY]. I want to build a voice guide so an AI can draft review requests and review replies that sound like me.

Here are some real reviews we've received, with any past replies: [PASTE 5–10 REVIEWS AND REPLIES]

My shop's personality: [e.g., no-nonsense and honest / friendly neighborhood shop / straight-talking and detail-oriented]
Things I never say: [e.g., "we value your feedback," corporate phrases]
Phrases I actually use: [specific to how you or your advisors talk]

Please build me:
1. **3–5 tone words** describing how I sound — specific, not generic ("honest and a little dry" not just "friendly")
2. **A review-request template** — short, references the specific job type, asks for the review with an easy link, sent 1 day after pickup
3. **A reply style for 5-star reviews** — thanks them, references something specific from their review (the actual repair, a staff member if appropriate)
4. **A reply style for 3-star reviews** — acknowledges the specific issue without being defensive
5. **A reply style for 1–2 star reviews** — apologizes for their specific experience without admitting fault in a way that could be used against the shop, invites them to call and talk it through, never offers a specific refund or discount in the public reply
6. **A "never say" list** — corporate phrases and defensive language to permanently avoid
7. **A length rule** for both requests and replies

Save this as my voice guide — every future prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Connect your completed-RO trigger and review platform',
        description: 'Give the automation a signal for "job\'s done, send the request" and access to reply where reviews live.',
        dataNote:
          'You\'ll need either shop management system access that can flag a closed RO, or a simple daily checklist of completed jobs, plus owner/manager access to your Google Business Profile and a free Zapier account.',
      },
      {
        number: 3,
        title: 'Build the review-request drafting prompt',
        description: 'This is the engine — a completed job goes in, a specific, well-timed request comes out.',
        prompt: `Using my voice guide, build me a repeatable prompt template that drafts a review request for any completed job.

My voice guide: [PASTE FROM STEP 1]
Shop name: [SHOP NAME]

Build a prompt template that takes the customer's first name, vehicle, and the work performed as input and outputs:
1. A short text or email, sent the day after pickup, referencing the specific work done (not "thanks for your visit" — actually name the repair)
2. A direct link placeholder for the Google review page: [REVIEW LINK]
3. A tone that feels like a genuine ask, not a scripted request
4. A rule: never send a review request if the RO shows a comeback, a dispute, or an unresolved complaint — flag those for the owner to reach out personally first instead

Output format: ready to send as-is, under [CHARACTER LIMIT] characters if texting.`,
      },
      {
        number: 4,
        title: 'Build the review-reply drafting prompt',
        description: 'The second half of the engine — a new review comes in, an on-brand reply draft comes out.',
        prompt: `Using my voice guide, build me a repeatable prompt template that drafts a reply to any new review.

My voice guide: [PASTE FROM STEP 1]

Build a prompt template that takes a new review as input and outputs a draft reply following:
1. 5-star and 4-star reviews: thank them, reference something specific from their review, keep to [LENGTH RULE]
2. 3-star reviews: acknowledge the specific issue without being defensive, invite them back
3. 1-star and 2-star reviews: apologize for their specific experience without admitting fault that could be used against the shop, never offer a specific refund or discount publicly — instead direct them to call and talk it through
4. Reviews mentioning a specific technician or advisor by name (positive or negative): never repeat the employee's name back in the public reply
5. Reviews mentioning a comeback, a repeat repair, a safety concern, or a threat of legal/regulatory action: output "FLAG FOR OWNER — do not auto-post" instead of a draft

Output format: just the reply text, under [CHARACTER LIMIT] characters, ready to paste.`,
      },
      {
        number: 5,
        title: 'Wire up the Zapier automations',
        description: 'Connect the completed-RO trigger to the request drafter, and the new-review trigger to the reply drafter, both feeding into one daily approval digest.',
        dataNote:
          'You\'ll need your Zapier account, the two prompt templates from Steps 3 and 4, and a Slack channel or email you check daily.',
      },
      {
        number: 6,
        title: 'Set up your 10-minute daily approval habit',
        description:
          'Every draft — requests and replies — waits for a human tap-to-approve. Pick one time of day and make it routine.',
      },
    ],
    systemPrompt: `You are the Review & Reputation Assistant for [SHOP NAME], an independent auto repair shop in [CITY]. You have two jobs: draft review requests after completed work, and draft replies to new reviews. You never send or post anything automatically — every draft requires human approval.

VOICE
Write like a real shop owner or advisor, not a corporate account. Tone: [TONE WORDS FROM VOICE GUIDE, e.g. honest, a little dry, no-nonsense]. Use contractions. Keep review requests and replies short — [LENGTH RULE FROM VOICE GUIDE]. Never use corporate phrases: "we value your feedback," "your satisfaction is our top priority," "we apologize for any inconvenience this may have caused."

REVIEW REQUEST RULES
- Reference the specific work performed — never a generic "thanks for your visit."
- Send timing is the day after pickup, giving the customer time to have actually driven the car.
- Never send a request if the RO shows a comeback, an open dispute, or an unresolved complaint. Flag these for the owner to contact personally instead.

REVIEW REPLY RULES BY TYPE
- 5-star and 4-star: thank the reviewer, reference something specific from their review (the actual repair, a detail they mentioned), keep it warm and brief.
- 3-star: acknowledge the specific issue honestly without being defensive, thank them for the feedback, invite them back.
- 1-star and 2-star: apologize for their specific experience in a way that sounds sincere, without admitting fault in a way that could be used against the shop in a dispute. Never promise a specific refund or discount amount publicly — instead say something like "please give us a call at [CONTACT] so we can make this right."
- Reviews naming a specific technician or advisor (positive or negative): never repeat the employee's name back in a public reply.

ALWAYS ESCALATE — OUTPUT "FLAG FOR OWNER" INSTEAD OF A DRAFT WHEN:
- The review mentions a comeback, a repeat repair for the same issue, or a car that broke down after service
- The review mentions a safety concern that developed after the shop's work
- The review threatens legal action, a lawsuit, or a report to a regulator or the Better Business Bureau
- The review looks like a coordinated or suspicious pattern (e.g., offers to remove a bad review for compensation)
- The review's tone or content doesn't clearly fit the categories above

WHAT YOU NEVER DO
- Never post a reply or send a review request without human approval
- Never offer, promise, or quantify a refund, discount, or free service in a public reply
- Never name an employee in a public-facing reply, positive or negative
- Never argue with a reviewer or correct their account of events publicly
- Never send a review request to a customer with an open comeback or dispute

If you're ever unsure whether a review needs to be flagged, flag it. A missed reply is recoverable; a bad public reply from a repair shop — where trust is everything — is not.`,
    guardrails: [
      'Never post a reply or send a review request automatically — every draft requires human tap-to-approve.',
      'Never send a review request to a customer whose RO shows a comeback, open dispute, or unresolved complaint.',
      'Never offer, promise, or name a specific refund or discount amount in a public reply — route anything involving money to the owner to handle privately.',
      'Always flag reviews mentioning a comeback, a repeat repair, or a post-service safety concern for the owner instead of drafting a standard reply.',
      'Never name a technician or advisor in a public reply, whether the review is complimentary or critical.',
      'Always flag reviews threatening legal action or a regulatory complaint instead of drafting a reply.',
    ],
    testChecklist: [
      'Feed it a completed RO with a documented comeback; confirm it does NOT draft a review request for that customer.',
      'Paste in a 1-star review claiming the car broke down a week after a repair; confirm it outputs "FLAG FOR OWNER," not a standard apology draft.',
      'Paste in a 5-star review mentioning a specific repair (e.g., "fixed my AC fast"); confirm the draft references that repair, not a generic thank-you.',
      'Paste in a review naming a technician negatively; confirm the reply does not repeat the technician\'s name.',
      'Paste in a review threatening to report the shop to a consumer protection agency; confirm it\'s flagged, not auto-drafted.',
      'Check that no draft, across 10 test reviews, contains a specific dollar refund or discount offer.',
    ],
    maintenance:
      'Once a month, skim recent review requests and replies for tone drift and confirm the timing (day-after-pickup) is still landing right. Check your Zapier task count against the free-tier limit as job volume grows. If you\'ve had staffing changes or a shift in how you handle disputes, update the voice guide and escalation rules accordingly. Budget 15 minutes.',
  },
]

export const pack = {
  industry: 'auto-repair',
  headline: 'Three AI agents that keep estimates, updates, and reviews from falling through the cracks',
  subhead:
    'Blueprints to build agents that chase unapproved estimates, translate tech notes for customers, and manage your review pipeline — complete system prompts and real costs, not one-off prompts.',
  whyAgents: [
    'Independent shops lose an estimated 20–30% of written estimates simply because nobody followed up — not because the customer said no.',
    'Translating tech notes into customer-ready updates costs a service advisor 10+ minutes per vehicle, easily 1–2 hours a day across a full shop.',
    'A $0–40/month AI agent can absorb that busywork, so estimates get chased, updates get sent in plain English, and reviews get answered — without adding headcount.',
  ],
  seoTitle: 'AI Agents for Auto Repair Shops — Blueprints, Costs & Prompts',
  seoDescription:
    'Build 3 AI agents for your auto repair shop: estimate follow-ups, service updates, and review replies. System prompts, real costs, and setup steps for $29.',
}

export default autoRepairAgents
