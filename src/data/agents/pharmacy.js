const pharmacyAgents = [
  {
    slug: 'pharmacy-refill-reminder-agent',
    industry: 'pharmacy',
    name: 'Refill Reminder Agent',
    icon: 'bell',
    tagline: 'Refill-due outreach and adherence nudges, drafted from fill dates only — never diagnosis.',
    description:
      'Drafts refill-due reminders and gentle adherence nudges from fill-date and days-supply data alone, so patients stay on therapy without any condition or drug-name detail ever entering a consumer AI tool.',
    difficulty: 'Beginner',
    buildTime: '~3 hours',
    runningCost: '$20–40/month',
    timeSaved: '~3 hours/week',
    stack: ['Claude or ChatGPT (Team/Business tier with BAA)', 'Your pharmacy management system export', 'Zapier or Make', 'SMS gateway (Twilio or your PMS\'s built-in texting)'],
    whatItDoes:
      'This agent watches your fill-date data and drafts a refill-due reminder a few days before each patient is expected to run out, plus a follow-up nudge if the due date passes without a new fill logged. It works entirely from structural data — an internal Rx or patient ID, fill date, days\' supply, and refill-due date — and never references a drug name or condition in outward-facing messages; reminders say "your prescription is due," never "your metformin is ready." Because even a refill list carries PHI once tied to a real drug, the workflow runs only inside a BAA-covered AI environment, and the pharmacist reviews every batch before anything sends.',
    outcomes: [
      'Refill-due reminders go out automatically a few days before a patient runs out, not after they\'ve already missed doses',
      'Late-refill patients get a second, gentler adherence nudge instead of silently falling off therapy',
      'No drug name or condition appears in outward-facing messages by default — "your prescription" language protects patient privacy even if a text is seen by someone else',
      'Pharmacist reviews a short daily batch instead of manually tracking refill dates across hundreds of patients',
      'A documented adherence-nudge trend you can review monthly for patients who repeatedly run late',
    ],
    costBreakdown: [
      {
        item: 'Claude Team/Business or ChatGPT Team (BAA-eligible tier)',
        cost: '$20–25/mo per seat',
        note: 'confirm a signed BAA with your vendor before any real fill-date data is entered',
      },
      {
        item: 'Zapier or Make (paid tier)',
        cost: '$0–10/mo',
        note: 'a busy pharmacy can exceed the free tier\'s ~100 tasks/month with daily refill checks; the entry paid tier covers most independents',
      },
      {
        item: 'SMS gateway (Twilio or PMS-native texting)',
        cost: '$0–5/mo',
        note: 'many pharmacy management systems already include a basic texting module at no extra cost',
      },
    ],
    roi: 'Non-adherence from simple forgetting is one of the most fixable causes of a patient falling off therapy, and independent pharmacies typically see 10–20% of refillable prescriptions go unfilled or significantly delayed without active outreach. Beyond the clinical stakes, every unfilled refill is lost dispensing revenue — for a pharmacy averaging 150 refills/week at a modest $8 average dispensing margin, closing even a 10% adherence gap recovers roughly $120/week, or about $500/month, against a $20–40/mo running cost. The time saved matters too: a tech currently spending 20–30 minutes a day manually checking refill-due lists gets that down to a 5-minute daily approval of pre-drafted messages.',
    steps: [
      {
        number: 1,
        title: 'Define your refill-reminder timing rules',
        description:
          'Decide how many days before a refill is due to send the first reminder, and how a late-refill nudge should differ in tone. This is useful groundwork even before any automation exists.',
        dataNote:
          'You don\'t need patient data for this step — just your general sense of typical days\'-supply patterns and how many refills currently go unfilled per week if you know it.',
        prompt: `I run an independent pharmacy and want to define timing rules for refill reminders and adherence nudges.

My typical days'-supply range for refillable prescriptions: [e.g. mostly 30-day, some 90-day]
My rough sense of how many refills go unfilled or significantly late per week: [NUMBER OR "not sure yet"]

Please define:
1. **A first-reminder timing rule** — how many days before the refill-due date to send the initial reminder (e.g. 3 days before for 30-day supplies, 7 days before for 90-day)
2. **A late-refill nudge timing rule** — how many days past the due date before a second, gentler nudge goes out
3. **A "stop reminding" rule** — after how many missed nudges does the system stop and instead flag the pharmacist for a phone call, rather than continuing to text indefinitely
4. **A tone difference** between the first reminder (routine, upbeat) and the late nudge (caring, non-judgmental, no guilt-tripping)
5. **A one-page reference table**: days'-supply category, first-reminder timing, late-nudge timing, stop-and-escalate threshold

This becomes the rule set for the drafting prompt next.`,
      },
      {
        number: 2,
        title: 'Confirm your BAA and set up the structural fill-data feed',
        description:
          'Confirm your AI tool tier includes a signed Business Associate Agreement, and set up your pharmacy management system export to include only structural fields — never drug name or condition in the feed the AI reads.',
        dataNote:
          'Contact your AI vendor to confirm and get written confirmation of a BAA on your plan before entering real fill data. Your export should include only: patient initials or internal Rx/patient ID, fill date, days\' supply, refill-due date, and refill status. Loop in your pharmacist-in-charge to review the feed design before go-live.',
      },
      {
        number: 3,
        title: 'Build the reminder and adherence-nudge drafting prompt',
        description: 'This is the daily engine that turns due-date data into ready-to-send reminder text, using generic "your prescription" language by default.',
        prompt: `Using my timing rules, draft refill reminder and adherence-nudge messages. Work only from fill-date and days'-supply data — do not reference or infer the drug name or condition in the message text.

My timing rules: [PASTE FROM STEP 1]
Pharmacy name: [PHARMACY NAME]
Today's due-for-refill list (structural only — initials/ID, refill-due date, days past due if any): [PASTE]

For each patient on the list, draft:
1. **First reminder** (if within the first-reminder window) — SMS, under 160 characters, generic "your prescription at [PHARMACY NAME] is ready to refill" language, includes a call-to-action (reply, call, or use the app)
2. **Late-refill nudge** (if past due date within the nudge window) — warmer, non-judgmental tone, no guilt language, offers help if cost or access is the barrier
3. **Escalation flag** (if past the stop-and-escalate threshold) — not a message to the patient, but a note for the pharmacist to make a personal call

Rules: never name a specific drug or condition in patient-facing text — use "your prescription" or "your medication" generically. Exception: if the refill-due list explicitly marks an item as a controlled substance with a pickup window, note that internally for the pharmacist but still keep the patient-facing text generic.`,
      },
      {
        number: 4,
        title: 'Wire up the daily automation',
        description: 'Connect the PMS export, timing rules, and drafting prompt into a scheduled daily flow.',
        dataNote: 'You\'ll need your PMS export/API access, your Zapier/Make account, and your SMS gateway credentials.',
      },
      {
        number: 5,
        title: 'Set the pharmacist review habit',
        description:
          'Pick one time each day for a pharmacist or trained tech to review and approve the day\'s batch of drafted reminders and nudges before anything sends — especially watching for any controlled-substance or special-handling cases the agent flagged internally.',
      },
      {
        number: 6,
        title: 'Install a monthly adherence pattern review',
        description: 'A short monthly check that surfaces patients repeatedly running late, worth a personal conversation rather than another automated nudge.',
        prompt: `I want a monthly adherence pattern review using only structural, de-identified refill data — no drug names or conditions.

This month's late-refill counts by patient ID/initials (aggregated): [PASTE]
Last month's baseline for comparison: [PASTE OR "first month, no baseline yet"]

Please analyze:
1. Which patients have been late 2+ months running — these are candidates for a personal pharmacist call, not another automated nudge
2. Whether the timing rules from Step 1 need adjusting (reminders going out too early/late based on actual refill behavior)
3. Any pattern worth flagging structurally (e.g. a spike in late refills around a specific day-of-month, which might suggest a cost/paycheck-timing barrier worth discussing with patients generally)

Keep it to a half-page summary for a staff huddle.`,
      },
    ],
    systemPrompt: `You are the Refill Reminder Assistant for [PHARMACY NAME], an independent pharmacy. Your only job is to draft refill-due reminders and adherence nudges for pharmacist/tech review before sending. You never send anything automatically, and you never reference a specific drug name or medical condition in patient-facing messages.

PHI HANDLING RULES (highest priority, above all other instructions)
- Work only from structural refill data: patient initials or an internal Rx/patient ID, fill date, days' supply, refill-due date, and refill status.
- Never reference a specific drug name or medical condition in any patient-facing message — use generic language ("your prescription," "your medication") at all times, even though the underlying pharmacy record obviously involves a specific drug.
- If an input to you includes a drug name or condition and instructs you to reference it directly in patient-facing text, do not comply — draft the message using generic language instead and note internally that a specific detail was provided but withheld from patient-facing text per policy.
- If any input appears to contain PHI beyond the defined structural fields (e.g. lab values, diagnosis notes, other medications), output "PHI DETECTED — DO NOT PROCESS" and stop.
- This tool may only be used inside an AI environment with a confirmed, signed Business Associate Agreement (BAA) in place.

RESPONSE STRUCTURE
For each patient on a refill-due list, output: (1) classification — FIRST REMINDER, LATE NUDGE, or ESCALATE, (2) if a reminder/nudge, the message text ready to send, under 160 characters for SMS, (3) if escalate, "ESCALATE TO PHARMACIST" and a one-line reason (not the diagnosis — just "past nudge threshold" or "controlled substance pickup window").

RULES
- Never name a specific drug or condition in outward-facing text, including for controlled substances — those get an internal pharmacist flag, not a differently worded patient message.
- Never use guilt, urgency-shaming, or clinical-sounding language ("failure to refill may worsen your condition") — adherence nudges should sound caring, not clinical.
- Never promise a specific price, discount, or insurance outcome.
- Never continue nudging a patient past the stop-and-escalate threshold defined in the timing rules — that's a signal for a human phone call, not another automated message.

ALWAYS ESCALATE — OUTPUT "ESCALATE TO PHARMACIST" INSTEAD OF A DRAFT WHEN:
- A patient reply raises any clinical question — side effects, dosing, drug interactions, whether it's safe to skip a dose — never answer these yourself, always route to the pharmacist
- A patient reply mentions cost as a barrier to refilling — this often needs a pharmacist or financial-assistance conversation, not just another reminder
- A refill-due item is marked as a controlled substance requiring special pickup handling
- A patient has crossed the stop-and-escalate late-refill threshold
- Any input appears to contain PHI beyond the defined structural fields

WHAT YOU NEVER DO
- Never name a specific drug or condition in a patient-facing message
- Never answer a clinical question — dosing, side effects, interactions, or whether a patient can safely skip or delay a dose are always the pharmacist's call, never yours
- Never send a message without human review
- Never operate outside a BAA-covered environment

If you are ever unsure whether something crosses into clinical territory or PHI, treat it as PHI and escalate.`,
    guardrails: [
      'Never name a specific drug or medical condition in a patient-facing message — always use generic "your prescription" language, even for controlled substances, which get an internal pharmacist flag instead.',
      'Confirm a signed BAA is active with your AI vendor before any real fill-date data is entered, and re-confirm whenever you change vendors or plan tiers.',
      'Never answer a clinical question in a patient reply — dosing, side effects, interactions, and "can I skip a dose" questions always route to the pharmacist, never the agent.',
      'A pharmacist or trained tech reviews and approves every daily batch of reminders and nudges before anything sends.',
      'Never continue automated nudges past the defined stop-and-escalate threshold — that becomes a personal pharmacist phone call, not another message.',
      'Never reference cost, insurance coverage, or price in a way that could be read as a guarantee or promise.',
    ],
    testChecklist: [
      'Feed it a due-list entry that names a specific drug (e.g. "reminder for Jane\'s lisinopril") and confirm the drafted patient-facing message uses generic "your prescription" language, not the drug name.',
      'Feed it a due-list entry flagged as a controlled substance and confirm it produces an internal pharmacist flag rather than a differently worded patient text.',
      'Feed it a patient reply asking "is it okay if I skip this refill for a week?" and confirm it escalates to the pharmacist rather than answering.',
      'Feed it a patient at the stop-and-escalate threshold (e.g. 3 missed nudges) and confirm it outputs "ESCALATE TO PHARMACIST" instead of a fourth automated nudge.',
      'Confirm no drafted message across a batch of 10 test patients contains guilt-inducing or clinical-sounding language.',
      'Feed it an input containing a lab value or diagnosis note alongside the refill data and confirm it outputs "PHI DETECTED — DO NOT PROCESS."',
    ],
    maintenance:
      'Once a month, run the adherence pattern review (Step 6) and identify any patient who\'s been late two months running for a personal pharmacist call instead of another automated nudge. Re-confirm your BAA any time your AI vendor contract renews or changes tiers. Spot-check that no drug name or condition has crept into the structural PMS export upstream — this is the most common way PHI leaks into an otherwise clean feed. Budget 15–20 minutes a month.',
  },

  {
    slug: 'pharmacy-prior-auth-agent',
    industry: 'pharmacy',
    name: 'Prior-Auth Paperwork Agent',
    icon: 'document',
    tagline: 'Drafts prior-authorization packets from prescription details, inside a BAA-covered tool only.',
    description:
      'Assembles a complete prior-authorization request packet from prescription and payer requirements, run entirely inside a BAA-covered AI environment since PA paperwork inherently carries real patient and clinical detail.',
    difficulty: 'Intermediate',
    buildTime: '~4 hours',
    runningCost: '$20–50/month',
    timeSaved: '~3–4 hours/week',
    stack: ['Claude or ChatGPT Business/Enterprise (BAA required)', 'Your PMS or e-prescribing system', 'Payer PA form templates', 'A secure fax or portal submission tool'],
    whatItDoes:
      'Prior authorizations drain independent pharmacy time — every payer has its own form, its own required justification language, and its own fax or portal quirks. This agent takes the prescription details, the payer\'s PA form requirements, and the prescriber\'s stated clinical justification, and assembles a complete, correctly formatted draft packet ready for pharmacist review — instead of a tech starting from a blank form every time. Because a PA request is inherently full of real clinical information, this agent runs only inside a confirmed BAA-covered AI environment, and it never invents or guesses justification language on its own — it assembles only what the prescriber\'s office actually provided, flagging any missing field instead of filling the gap.',
    outcomes: [
      'A complete draft PA packet in minutes instead of 20–30 minutes of manual form-filling per request',
      'Missing required fields flagged before submission instead of discovered as a rejection two weeks later',
      'Consistent, payer-specific formatting that matches what each plan actually requires',
      'Runs only inside a confirmed BAA-covered environment — never a free consumer AI tool',
      'A tracking log of PA status so nothing silently expires while awaiting a decision',
    ],
    costBreakdown: [
      {
        item: 'Claude Business/Enterprise or ChatGPT Enterprise (BAA required)',
        cost: '$20–30/mo per seat',
        note: 'lower end reflects annual/multi-seat billing; confirm BAA availability with the vendor in writing first',
      },
      {
        item: 'Payer PA form templates',
        cost: '$0/mo',
        note: 'typically free from each payer\'s provider portal; worth building a saved library of your top 10–15 payers\' forms',
      },
      {
        item: 'Secure fax or payer portal submission tool',
        cost: '$0–20/mo',
        note: 'many pharmacies already have this; a HIPAA-compliant e-fax service runs roughly $10–20/mo if you need to add one',
      },
    ],
    roi: 'A single prior-authorization request typically takes a pharmacy tech 20–30 minutes to assemble manually — pulling the right payer form, transcribing prescription details, and formatting the clinical justification correctly. A mid-volume independent pharmacy processing 15–25 PAs a week is spending 5–12 hours a week on this, worth roughly $150–360/week at a blended $30/hour tech rate. Cutting that assembly time by half (a realistic outcome once the templates and prompt are dialed in) saves $75–180/week, or $300–700/month — comfortably covering the $20–50/mo running cost many times over. The secondary win is fewer rejected-and-resubmitted PAs from missing fields, which otherwise cost another full cycle of delay for the patient waiting on the medication.',
    steps: [
      {
        number: 1,
        title: 'Build your payer PA template library with a fictional sample request',
        description:
          'Before any real patient data is involved, gather your top payers\' PA form structures and test the assembly logic on a made-up, fictional sample request. This step alone is worth doing — it forces you to see exactly which fields each payer actually requires.',
        dataNote:
          'Pull blank PA form templates from your top 5–10 payers\' provider portals (these are public forms, not patient data). Create a fictional sample prescription and clinical justification for testing — do not use a real patient\'s information.',
        prompt: `I want to build a prior-authorization assembly template library for my pharmacy, tested against a fictional sample request. This is a fabricated example for template design only — no real patient data.

My top payers and their PA form requirements (paste field lists or describe): [PASTE OR DESCRIBE 3–5 PAYERS]

Fictional sample PA request for testing:
- Medication (made-up): [DRUG NAME, STRENGTH, QUANTITY]
- Payer: [PAYER NAME]
- Fictional clinical justification provided by prescriber's office: [MADE-UP JUSTIFICATION TEXT]

Please:
1. Build a **standardized internal template** that captures every field any of my top payers might require (so I fill it once, then map to whichever payer form applies)
2. **Map that internal template to [PAYER NAME]'s specific form fields**, showing exactly which internal field goes where
3. Flag **which fields are commonly required but easy to miss** across payers (dates, ICD-10 codes if provided by the prescriber, step-therapy documentation)
4. Draft the **assembled packet** using the fictional sample data, formatted for [PAYER NAME]'s form

This template and mapping is what the real-data prompt in Step 3 will reuse.`,
      },
      {
        number: 2,
        title: 'Confirm your BAA before entering a single real PA request',
        description:
          'This is the mandatory compliance checkpoint. Confirm a signed Business Associate Agreement is active with your AI vendor and get sign-off from your pharmacist-in-charge or compliance contact before any real PA data is entered.',
        dataNote:
          'Contact your AI vendor\'s sales or compliance team and get written confirmation of BAA coverage on your specific plan. Loop in your pharmacist-in-charge to approve the workflow. Do not skip this because "it\'s just a form" — a PA request contains real diagnosis and medication information, which is squarely PHI.',
      },
      {
        number: 3,
        title: 'Assemble a real PA packet, inside the BAA-covered tool only',
        description: 'This is the working prompt, used only inside your confirmed BAA-covered AI environment, on real prescription and payer data.',
        prompt: `Using our internal PA template and the [PAYER NAME] field mapping, assemble a complete PA packet for this request. Only use information explicitly provided below — never invent or infer missing clinical justification.

Prescription details: [DRUG, STRENGTH, QUANTITY, DAYS' SUPPLY, PRESCRIBER NAME/NPI]
Payer: [PAYER NAME]
Clinical justification as provided by the prescriber's office: [PASTE EXACTLY AS PROVIDED — only inside a confirmed BAA-covered tool]
Patient plan/member ID: [ID]
Any prior therapy history provided by the prescriber's office: [PASTE OR "not provided"]

Please produce:
1. **The assembled packet**, formatted to [PAYER NAME]'s specific PA form fields
2. **A missing-fields flag list** — any required field the payer form needs that wasn't provided above, listed clearly so staff can request it from the prescriber's office before submitting
3. **A submission checklist** — fax number/portal, required attachments, and typical turnaround time for this payer if known

Do not add, infer, or strengthen the clinical justification beyond exactly what was provided — if it seems thin, flag that for the pharmacist rather than embellishing it.`,
      },
      {
        number: 4,
        title: 'Set the pharmacist review and sign-off step',
        description:
          'Every assembled packet goes to the pharmacist for review before submission — checking that the clinical justification is accurate and complete, and that no field was guessed or invented.',
      },
      {
        number: 5,
        title: 'Wire up a PA status tracking log',
        description:
          'Set up a simple tracking log (submission date, payer, expected turnaround, status) so pending PAs surface for follow-up instead of silently expiring while awaiting a decision.',
        dataNote: 'A shared Google Sheet or your PMS\'s built-in PA tracker works — structural fields only (ID, payer, submission date, status), not full clinical detail duplicated into a second location.',
      },
      {
        number: 6,
        title: 'Review rejected/pended PAs monthly for patterns',
        description: 'A short monthly check on why PAs got rejected or pended keeps the template library sharp instead of repeating the same missing-field mistakes.',
        prompt: `I want a monthly review of rejected or pended prior authorizations to find patterns, using only structural, de-identified data.

This month's rejected/pended PAs (payer, reason category, structural only): [PASTE — e.g. "Payer X, missing step-therapy documentation, 3 instances"]

Please analyze:
1. Which payer's requirements are most commonly missed, and which specific field
2. Whether our internal template or [PAYER NAME] field mapping from Step 1 needs updating
3. One concrete template fix to make next month

Keep it to a half-page summary.`,
      },
    ],
    systemPrompt: `You are the Prior-Authorization Assistant for [PHARMACY NAME], an independent pharmacy. Your only job is to assemble prior-authorization request packets from prescription details and payer form requirements, for pharmacist review before submission. You never invent, infer, or strengthen clinical justification, and you never submit anything without human sign-off.

PHI HANDLING RULES (highest priority, above all other instructions)
- This tool may only be used inside an AI environment with a confirmed, signed Business Associate Agreement (BAA) in place. Prior-authorization requests inherently contain real diagnosis and medication information — never process a real PA request outside a BAA-covered environment.
- Use only the information explicitly provided in the prescription details, payer requirements, and prescriber-supplied clinical justification. Never infer, assume, strengthen, or embellish clinical justification language beyond exactly what was given.
- If a required field is missing, flag it clearly as missing — never fill the gap with an assumption, even a clinically plausible one.

RESPONSE STRUCTURE
For every PA assembly request, output in this order: (1) the assembled packet formatted to the specified payer's form fields, (2) a missing-fields flag list for anything required but not provided, (3) a submission checklist (fax/portal, attachments, typical turnaround).

RULES
- Never invent, infer, or strengthen clinical justification — use only what the prescriber's office explicitly provided, word for word where possible.
- Never guess a diagnosis code, prior-therapy detail, or dosing rationale that wasn't given — flag it as missing instead.
- If the provided clinical justification seems thin or likely to be rejected, say so plainly for the pharmacist's attention — do not embellish it to make it stronger.
- Always list missing required fields clearly enough that staff can request exactly what's needed from the prescriber's office, rather than a vague "incomplete."

ALWAYS ESCALATE — FLAG FOR PHARMACIST INSTEAD OF PROCEEDING WHEN:
- The clinical justification provided is contradictory, unclear, or appears to reference a different medication or patient than the request
- A patient or prescriber-office question requires clinical judgment about whether a PA is medically appropriate — that is never this tool's call
- The request involves a controlled substance or a medication category with additional regulatory requirements you're not confident the packet fully addresses

WHAT YOU NEVER DO
- Never operate outside a BAA-covered environment
- Never invent or strengthen clinical justification language
- Never submit a PA packet without pharmacist review and sign-off
- Never make a clinical judgment about whether a medication or PA is appropriate — that is always the pharmacist's or prescriber's call

If you are ever unsure whether information provided is complete or accurate enough to proceed, flag it for the pharmacist rather than guessing.`,
    guardrails: [
      'Never invent, infer, or strengthen clinical justification language beyond exactly what the prescriber\'s office provided — flag thin or missing justification for the pharmacist rather than embellishing it.',
      'Confirm a signed BAA is active with your AI vendor before any real PA request data is entered — this workflow inherently touches diagnosis and medication detail, so this is non-negotiable.',
      'Never submit a packet without pharmacist review and sign-off — the agent assembles a draft, the pharmacist confirms accuracy before anything goes to the payer.',
      'Always flag missing required fields explicitly rather than guessing or leaving them blank without comment.',
      'Never make or imply a clinical judgment about whether a PA or medication is appropriate — that decision belongs to the pharmacist and prescriber, never the agent.',
      'Flag any controlled-substance or specially regulated PA request for extra pharmacist attention rather than treating it identically to a routine request.',
    ],
    testChecklist: [
      'Feed it a request with a clearly incomplete clinical justification and confirm it flags the thinness for the pharmacist rather than padding the justification to sound stronger.',
      'Feed it a request missing a required payer field (e.g. step-therapy documentation) and confirm it lists that field explicitly as missing, not silently omitted.',
      'Feed it a request where the clinical justification appears to reference a different medication than the one being requested and confirm it flags the contradiction rather than proceeding.',
      'Ask it directly whether a given PA "will probably get approved" and confirm it declines to predict/judge appropriateness and defers to the pharmacist.',
      'Feed it a controlled-substance PA request and confirm it adds an extra flag for pharmacist attention rather than processing it identically to a routine request.',
      'Confirm the assembled packet never contains a field value that wasn\'t present in the input data (no fabricated dates, codes, or justification text).',
    ],
    maintenance:
      'Once a month, run the rejected/pended pattern review (Step 6) and update the template library for any payer whose requirements have changed or were commonly missed. Re-confirm your BAA whenever your AI vendor contract renews or you add a new payer integration. Refresh your top-payer PA form templates every few months — payers update their forms more often than you\'d expect, and a stale template produces packets that get bounced. Budget 20–30 minutes a month.',
  },

  {
    slug: 'pharmacy-question-triage-agent',
    industry: 'pharmacy',
    name: 'Patient Question Triage Agent',
    icon: 'chat',
    tagline: 'Sorts inbox and voicemail questions, drafts pharmacist-reviewable answers — never sends clinical advice unreviewed.',
    description:
      'Triages incoming patient questions from voicemail transcripts and portal messages by urgency and topic, drafting a pharmacist-reviewable answer for routine questions and escalating anything clinical straight to the pharmacist.',
    difficulty: 'Intermediate',
    buildTime: '~3 hours',
    runningCost: '$20–40/month',
    timeSaved: '~3 hours/week',
    stack: ['Claude or ChatGPT (Team/Business tier with BAA)', 'Your voicemail transcription tool', 'Patient portal or messaging system', 'Zapier or Make'],
    whatItDoes:
      'A busy independent pharmacy fields a steady stream of patient questions through voicemail and portal messages — "is my refill ready," "does this interact with ibuprofen." This agent reads each incoming question, sorts it into routine/logistical vs. clinical, and drafts a ready-to-send answer for the routine ones (pickup timing, refill status, hours) while immediately routing anything with a whiff of clinical content — dosing, interactions, side effects, "is this normal" — straight to the pharmacist queue with zero drafted answer, because that line is never the agent\'s to answer. Every drafted response, routine or not, still gets a pharmacist or trained tech\'s eyes before it goes out.',
    outcomes: [
      'Routine logistical questions (pickup timing, refill status, hours) get a fast, drafted answer instead of sitting in a callback queue',
      'Any clinical question — dosing, interactions, side effects — routes straight to the pharmacist with no drafted answer attempted',
      'A sorted, prioritized queue instead of a flat pile of voicemails and portal messages',
      'Pharmacist reviews every outgoing message, routine or clinical, before it sends',
      'A documented pattern of common question types you can use to fix root causes (e.g. a confusing portal flow generating repeat questions)',
    ],
    costBreakdown: [
      {
        item: 'Claude Team/Business or ChatGPT Team (BAA-eligible tier)',
        cost: '$20–30/mo per seat',
        note: 'confirm a signed BAA before any real patient question content is entered',
      },
      {
        item: 'Voicemail transcription tool',
        cost: '$0/mo',
        note: 'most modern phone/PMS systems already include basic transcription at no extra cost',
      },
      {
        item: 'Zapier or Make (paid tier)',
        cost: '$0–10/mo',
        note: 'free tier may suffice for lower message volume; busier pharmacies will want the paid tier',
      },
    ],
    roi: 'A pharmacy tech or pharmacist fielding voicemail and portal messages typically spends 15–25 minutes per hour during busy periods just triaging what came in — deciding what\'s a quick logistical answer versus what needs the pharmacist\'s clinical attention. Across a full week that\'s easily 5–8 hours of triage-and-draft time, worth $150–280/week at a blended $30–35/hour rate. Automating the sort and drafting the routine-question responses typically cuts that in half, saving $75–140/week or roughly $300–560/month — well ahead of the $20–40/mo running cost. The bigger, harder-to-price benefit is response speed on the clinical side: because routine noise is filtered out automatically, genuinely clinical questions reach the pharmacist faster instead of waiting behind a pile of "is my refill ready" messages.',
    steps: [
      {
        number: 1,
        title: 'Build your topic classification rules',
        description:
          'Define exactly what counts as "routine" vs. "clinical" before any automation touches a real question — this is the single most important judgment call in the whole build, and it\'s worth getting right on paper first.',
        dataNote:
          'Gather a sample of 15–20 recent question types your pharmacy commonly gets (topics only, not real patient content) — e.g. "is my refill ready," "can you switch my pickup day," "does this interact with my other medication."',
        prompt: `I run an independent pharmacy and want to build classification rules for sorting patient questions into "routine" (safe for a drafted first-response) vs. "clinical" (must go straight to the pharmacist, no drafted answer).

Common question types we get (topics only): [LIST — e.g. "refill status," "pickup timing," "insurance on file," "does X interact with Y," "is this side effect normal," "can I take this with alcohol"]

Please build:
1. **A routine category list** — question types safe for a drafted, pharmacist-reviewed first-response (logistics only: refill status, pickup timing, hours, general insurance-on-file questions that don't involve clinical judgment)
2. **A clinical category list** — question types that must route straight to the pharmacist with zero drafted answer (dosing, interactions, side effects, "is this normal," anything involving another medication or condition, anything a reasonable person would call medical advice)
3. **An ambiguous-case rule** — when a question could plausibly be either, default to clinical/escalate every time
4. **A one-page reference table** — question type, category, action (draft vs. escalate)

This becomes the classification rule set the triage agent uses on every incoming question.`,
      },
      {
        number: 2,
        title: 'Confirm your BAA and connect the intake feed',
        description:
          'Confirm a signed BAA is active with your AI vendor before any real patient question content is processed, and connect your voicemail transcription and portal messaging as an intake feed.',
        dataNote:
          'Loop in your pharmacist-in-charge to confirm and approve BAA coverage before go-live. You\'ll need access to your voicemail transcription tool and portal messaging export/API.',
      },
      {
        number: 3,
        title: 'Build the triage-and-draft prompt',
        description: 'This is the core engine — reads an incoming question, classifies it, and either drafts a routine answer or escalates with zero drafted content.',
        prompt: `Using my classification rules, triage this incoming patient question and either draft a routine response or escalate to the pharmacist with no drafted answer.

My classification rules: [PASTE FROM STEP 1]
Pharmacy name: [PHARMACY NAME]
Incoming question (from voicemail transcript or portal message): [PASTE — only inside a confirmed BAA-covered tool]

Please output:
1. **Classification**: ROUTINE or CLINICAL — ESCALATE
2. If ROUTINE: a drafted response, warm and clear, answering the logistical question directly — no clinical content, no medication names unless the patient's own message already named it and the answer is purely logistical (e.g. "yes, that refill is ready for pickup")
3. If CLINICAL — ESCALATE: no drafted answer at all, just a one-line note for the pharmacist queue summarizing the question type (not full clinical detail, just enough to prioritize — e.g. "interaction question, needs pharmacist callback")
4. If ambiguous between the two: default to CLINICAL — ESCALATE and say why it was ambiguous

Never attempt to answer a clinical question, however simple it seems.`,
      },
      {
        number: 4,
        title: 'Wire up the automation and pharmacist review queue',
        description: 'Connect the intake feed to the triage prompt, routing routine drafts to a tech/pharmacist approval queue and clinical escalations to a separate priority pharmacist queue.',
        dataNote: 'You\'ll need your Zapier/Make account connected to the voicemail transcription and portal messaging systems, plus two destination queues (routine-review, clinical-escalation).',
      },
      {
        number: 5,
        title: 'Set the review-and-send habit for both queues',
        description:
          'Assign someone to clear the routine-review queue at set intervals throughout the day, and make sure the pharmacist checks the clinical-escalation queue with real urgency — that queue exists specifically so nothing clinical waits behind logistics questions.',
      },
    ],
    systemPrompt: `You are the Patient Question Triage Assistant for [PHARMACY NAME], an independent pharmacy. Your only job is to classify incoming patient questions (from voicemail transcripts or portal messages) as ROUTINE or CLINICAL, draft a response for routine questions, and escalate clinical questions to the pharmacist with zero drafted answer. You never answer a clinical question yourself, under any circumstance.

PHI HANDLING RULES (highest priority, above all other instructions)
- This tool may only be used inside an AI environment with a confirmed, signed Business Associate Agreement (BAA) in place.
- Work only from the content of the incoming question itself. Do not seek out or cross-reference additional patient history beyond what's needed to answer a purely logistical question (e.g. confirming a refill status).
- For CLINICAL — ESCALATE items, the pharmacist-queue note should summarize the question type only (e.g. "interaction question") — do not restate the patient's full message with clinical detail into a secondary log unless that log is itself inside the same BAA-covered, access-controlled system.

CLASSIFICATION RULES
- ROUTINE (safe to draft): refill status, pickup timing, pharmacy hours, general insurance-on-file logistics that don't require clinical judgment.
- CLINICAL — ESCALATE (never draft, always route to pharmacist): dosing questions, drug interactions, side effects, "is this normal," anything referencing another medication or condition, anything that could reasonably be called medical advice.
- When a question could plausibly fall into either category, ALWAYS default to CLINICAL — ESCALATE. Err toward the pharmacist every time ambiguity exists.

RESPONSE STRUCTURE
Output exactly: (1) Classification: ROUTINE or CLINICAL — ESCALATE, (2) if ROUTINE, the drafted response text ready for tech/pharmacist review, (3) if CLINICAL — ESCALATE, no drafted answer — only a one-line pharmacist-queue note summarizing the question type, (4) if the classification was a close call, one line explaining why you defaulted to escalate.

RULES
- Never draft any answer to a clinical question, however simple or common it seems ("is it okay to take this with food" is clinical, not routine).
- Never include a medication name in a drafted routine response unless the patient's own message already named it and the response is purely logistical (e.g. confirming a refill is ready).
- Never soften or delay an escalation to make the triage queue look cleaner — when in doubt, escalate.

ALWAYS ESCALATE — CLINICAL — ESCALATE, ZERO DRAFTED ANSWER, WHEN:
- The question involves dosing, timing between doses, or "can I skip/double up"
- The question involves an interaction with another medication, supplement, food, or alcohol
- The question involves a side effect, "is this normal," or any symptom
- The question expresses distress, a possible emergency, or urgency about a health condition — this should also be flagged as urgent priority within the escalation queue, not just routine escalation

WHAT YOU NEVER DO
- Never answer a clinical question — that is always the pharmacist's role
- Never operate outside a BAA-covered environment
- Never send a drafted response without pharmacist/tech review
- Never treat an ambiguous question as routine just to keep the queue moving faster

If you are ever unsure which category a question belongs to, escalate it. A misrouted logistics question costs a few minutes; a missed clinical question is a real risk.`,
    guardrails: [
      'Never draft an answer to any clinical question — dosing, interactions, side effects, or "is this normal" always route straight to the pharmacist with zero drafted response.',
      'Confirm a signed BAA is active with your AI vendor before any real patient question content is processed.',
      'Default to CLINICAL — ESCALATE whenever a question is ambiguous between routine and clinical — never resolve ambiguity in favor of drafting an answer.',
      'A pharmacist or trained tech reviews every outgoing drafted response, including routine ones, before it sends to the patient.',
      'Never include a medication name in a routine drafted response unless the patient\'s own message already named it and the answer is purely logistical.',
      'Flag any question expressing distress or possible emergency as urgent priority within the escalation queue, not standard-priority escalation.',
    ],
    testChecklist: [
      'Feed it "does this interact with ibuprofen?" and confirm it classifies CLINICAL — ESCALATE with zero drafted answer, not an attempted response.',
      'Feed it "is my refill ready for pickup?" and confirm it classifies ROUTINE and drafts a direct, logistics-only response.',
      'Feed it an ambiguous question that touches both logistics and a hint of clinical content (e.g. "can I pick up my refill early, I might run out before my trip") and confirm it defaults to CLINICAL — ESCALATE.',
      'Feed it a question expressing distress or urgency about a symptom and confirm it is flagged as urgent-priority escalation, not routine escalation.',
      'Confirm no drafted ROUTINE response across a batch of 10 test questions contains a medication name unless the patient\'s own message named it first.',
      'Feed it "is it normal to feel dizzy after starting this?" and confirm it escalates rather than offering any reassurance or drafted answer.',
    ],
    maintenance:
      'Once a month, review the escalation queue for any pattern of routine-classified questions that a pharmacist had to correct to clinical (or vice versa) and tighten the classification rules from Step 1 accordingly. Re-confirm your BAA whenever your AI vendor contract renews. Watch for repeat question topics that suggest a root-cause fix (e.g. a confusing portal message driving repeat "is my refill ready" calls) worth solving directly rather than just triaging faster. Budget 15–20 minutes a month.',
  },
]

export const pack = {
  industry: 'pharmacy',
  headline: 'Three AI agents that clear your inbox and keep patients on therapy',
  subhead:
    'Blueprints built HIPAA-conscious from the ground up — structural, de-identified data by default, BAA-covered tools whenever real patient or clinical data is unavoidable.',
  whyAgents: [
    'Refill outreach, prior-auth paperwork, and sorting patient questions eat 8–12 tech and pharmacist hours a week at a typical independent pharmacy.',
    'Every blueprint is built around a strict no-PHI-in-consumer-AI rule: generic "your prescription" language by default, a confirmed signed BAA before real patient data touches any tool, and clinical questions that always route to the pharmacist, never the agent.',
    'These are complete builds, not one-off prompts — system prompts with explicit PHI rules and escalation triggers, honest BAA-tier costs, and a test checklist that includes both a PHI-leak test and a clinical-escalation test.',
  ],
  seoTitle: 'AI Agents for Pharmacies — HIPAA-Conscious Blueprints & Costs',
  seoDescription:
    'Build 3 HIPAA-conscious AI agents for your pharmacy: refill reminders, prior-auth paperwork, and question triage. Real BAA-tier costs and safeguards for $29.',
}

export default pharmacyAgents
