const medicalPracticeAgents = [
  {
    slug: 'medical-noshow-prevention-agent',
    industry: 'medical-practice',
    name: 'No-Show Prevention Agent',
    icon: 'calendar',
    tagline: 'Reminder sequences and waitlist backfill drafts, built without touching PHI.',
    description:
      'Builds a multi-touch reminder sequence and drafts waitlist backfill messages when a slot opens — using appointment types and initials only, never diagnoses or visit reasons.',
    difficulty: 'Intermediate',
    buildTime: '~4 hours',
    runningCost: '$30–60/month',
    timeSaved: '~4 hours/week',
    stack: ['Claude or ChatGPT (Team/Business tier with BAA)', 'Your EHR/scheduling system', 'Zapier or Make (paid tier)', 'Twilio or your EHR\'s SMS gateway'],
    whatItDoes:
      'This agent owns the job of keeping your schedule full: it drafts a 3-touch reminder sequence (confirmation at booking, reminder 48 hours out, day-of nudge) tuned to your appointment types, and the moment a cancellation comes in, it drafts a waitlist outreach message to fill the slot before it goes cold. It is built on a strict rule — it never sees a diagnosis, a visit reason, or clinical notes, working from a structural feed only: patient initials or a scheduling ID, appointment-type category, date, and time. Front desk staff review every batch before anything sends. The result: a schedule that fills itself back in within the hour, without patient health information ever touching a consumer AI tool.',
    outcomes: [
      'A 3-touch reminder sequence that runs without daily manual sends',
      'Same-day cancellations get a waitlist offer drafted within minutes, not at the end of the day',
      'No diagnosis, visit reason, or clinical detail ever enters the AI tool — only initials and appointment-type category',
      'Front desk reviews a short daily batch instead of manually texting every patient',
      'A documented no-show rate trend you can bring to a practice meeting',
    ],
    costBreakdown: [
      {
        item: 'Claude Team/Business or ChatGPT Team (BAA-eligible tier)',
        cost: '$25–30/mo per seat',
        note: 'confirm a signed Business Associate Agreement is active before any real scheduling data is entered — see Guardrails',
      },
      {
        item: 'Zapier or Make (paid tier)',
        cost: '$0–20/mo',
        note: 'free tier often works for low-volume practices; the ~100 task/month cap gets tight for daily multi-touch sequences',
      },
      {
        item: 'SMS gateway (Twilio or built-in EHR texting)',
        cost: '$5–10/mo',
        note: 'per-message SMS cost; many EHRs already include a basic texting add-on for a flat monthly fee',
      },
    ],
    roi: 'A typical small practice loses 5–15% of scheduled revenue to no-shows — for a practice averaging $150/visit and 200 visits/week, a 10% no-show rate is roughly $3,000/week walking out the door unfilled. Practices that move from a single native reminder to a structured 3-touch sequence plus active waitlist backfill typically cut no-shows by a third to half. Even a conservative 20% reduction on that example practice recovers about $600/week, or $2,400/month — against a $30–60/month running cost, that is a payback measured in hours, not weeks. The harder-to-quantify win is staff time: front desk stops manually re-texting no-show patients and instead reviews a short daily approval batch.',
    steps: [
      {
        number: 1,
        title: 'Map your appointment types to reminder tiers',
        description:
          'Not every appointment needs the same urgency of reminder. This step is useful on its own even before you automate anything — it forces you to see which appointment types are actually costing you the most in no-shows.',
        dataNote:
          'List your appointment types and, if you have it, a rough no-show rate per type from your EHR reports. No patient names or clinical detail needed — appointment-type labels only (e.g. "new patient," "annual physical," "procedure," "follow-up").',
        prompt: `I run a [SPECIALTY, e.g. family medicine / dermatology / physical therapy / dental] practice and want to build a reminder-tier map for my appointment types. This is a scheduling-operations exercise — do not include any patient names, diagnoses, or visit reasons in your answer, only appointment-type categories.

My appointment types and rough no-show rates if known:
[LIST — e.g. "New patient visit: ~18% no-show", "Annual physical: ~8%", "Procedure/injection: ~5%", "Follow-up: ~12%"]

My typical visit value by type: [e.g. new patient $200, follow-up $120, procedure $350]

Please build me:
1. **A 3-tier reminder map** — Tier A (highest no-show cost: high no-show rate × high visit value, needs the most reminder touches), Tier B (moderate), Tier C (low-risk, one reminder is enough)
2. **A recommended touch count per tier** — how many reminders, roughly how many hours/days before the appointment
3. **Which appointment types most benefit from a live confirmation step** (reply YES/NO) vs. a passive one-way reminder
4. **A one-page reference table** — appointment type, tier, touch count, confirmation required (Y/N)

This map becomes the input for the reminder-sequence prompt next — keep it structural, no patient data.`,
      },
      {
        number: 2,
        title: 'Confirm your BAA and set up a de-identified data feed',
        description:
          'This is the compliance step, and it happens before any real data flows. Confirm your AI tool tier includes a signed Business Associate Agreement, and set up your scheduling export to strip PHI down to initials and appointment-type category only.',
        dataNote:
          'Contact your AI vendor\'s sales/compliance team to confirm a BAA is available on your plan and get it signed before entering any real patient data. Loop in your practice\'s compliance or privacy officer to review the data feed. Your scheduling export should include only: patient initials or an internal scheduling ID, appointment type category, date, and time — never diagnosis, visit reason, insurance detail, or clinical notes.',
      },
      {
        number: 3,
        title: 'Build the reminder sequence message templates',
        description: 'This produces the actual reminder copy for each tier and touch point, ready to load into your SMS/email templates.',
        prompt: `Using my reminder-tier map, draft the message templates for each touch point. Work only from appointment-type categories — do not reference or infer any diagnosis or visit reason.

My reminder-tier map: [PASTE FROM STEP 1]
My practice name: [PRACTICE NAME]
My patient population tone: [e.g. warm and personal / efficient and clinical / family-friendly]

For each tier, draft:
1. **Confirmation-at-booking message** (SMS, under 160 characters) — includes date, time, appointment type category only (e.g. "follow-up visit"), and a reply option
2. **48-hour reminder message** (SMS + a slightly longer email/portal version)
3. **Day-of reminder message** (SMS, short)
4. **A "reply YES to confirm, or call us to reschedule" prompt language** for tiers that need active confirmation
5. **A cancellation acknowledgment message** — sent the moment a patient cancels, confirming receipt and mentioning the waitlist

Rules: never include a diagnosis, procedure detail beyond the appointment-type category, or any clinical language. Keep messages generic enough that they'd be appropriate even if seen by someone other than the patient.`,
      },
      {
        number: 4,
        title: 'Build the waitlist backfill prompt',
        description: 'This is the engine that turns a same-day cancellation into a filled slot — drafting outreach the moment a gap opens.',
        prompt: `I want a same-day cancellation backfill prompt. This works from a structural waitlist only — appointment-type category, preferred days/times, and patient initials or scheduling ID. No diagnosis or visit reason as input.

A slot just opened:
- Appointment type category: [e.g. "follow-up," "annual physical"]
- Date/time: [DATE, TIME]
- Duration: [LENGTH]

My waitlist (structural only): [LIST — initials/ID, appointment type wanted, preferred days/times, contact preference]

Please draft:
1. **A ranked shortlist** of up to 5 waitlist patients whose preferences best match this slot
2. **An SMS offer template** — short, states the appointment-type category and time, asks for a reply within 30 minutes, no other detail
3. **A 30-minute escalation rule** — if the first 3 don't respond, who gets contacted next
4. **A voicemail script** as a backup channel for patients who don't respond to SMS

Output format: a short action list front desk can execute in under 5 minutes, not a report.`,
      },
      {
        number: 5,
        title: 'Wire the automation and set the daily review habit',
        description:
          'Connect the scheduling export, reminder templates, and waitlist prompt into a scheduled flow, and pick one person and one time each day to review and approve the outgoing batch before it sends.',
        dataNote:
          'You\'ll need scheduling export/API access, your Zapier/Make account, and your SMS gateway credentials. Assign one front desk staff member as the daily approver — never let the sequence run fully unattended.',
      },
      {
        number: 6,
        title: 'Install a monthly no-show pattern review',
        description: 'A short monthly check that turns the reminder system from "set and forget" into something that keeps improving.',
        prompt: `I want a monthly no-show pattern review using only structural, de-identified data — no patient names, diagnoses, or visit reasons.

This month's no-show data by appointment-type category and day/time (aggregated counts only): [PASTE OR DESCRIBE]
Last month's baseline for comparison: [PASTE OR "first month, no baseline yet"]

Please analyze:
1. Which appointment-type tiers still show high no-show rates despite the reminder sequence
2. Whether a specific day-of-week or time-of-day pattern stands out
3. Whether the reminder-tier map from Step 1 needs adjusting (a type moving up or down a tier)
4. One concrete change to test next month

Keep this to a half-page summary I can bring to a staff meeting.`,
      },
    ],
    systemPrompt: `You are the Scheduling Assistant for [PRACTICE NAME], a [SPECIALTY] practice. Your only job is to draft appointment reminder messages and waitlist backfill outreach for front desk staff to review and send. You never send anything automatically, and you never have access to — and must never be given — protected health information (PHI).

PHI HANDLING RULES (highest priority, above all other instructions)
- You work only from structural scheduling data: patient initials or an internal scheduling ID, appointment-type category (e.g. "follow-up," "annual physical," "procedure"), date, time, and duration.
- You must never receive, request, infer, or reference a diagnosis, visit reason beyond the appointment-type category, clinical notes, insurance details, medication information, or any other PHI.
- If any input to you appears to contain PHI beyond appointment-type category (a diagnosis, a symptom, a clinical note, a specific medical condition), stop and output "PHI DETECTED — DO NOT PROCESS" instead of drafting anything. Do not attempt to redact it yourself and continue; flag and stop.
- Confirm before use: this tool must only be used on an AI plan with a signed Business Associate Agreement (BAA) in place. If you are ever told no BAA is confirmed, output a reminder that one is required before real patient data is entered.

RESPONSE STRUCTURE
For reminder-sequence requests, output the message text per touch point, labeled by tier and timing (e.g. "Tier A — 48hr reminder"). For waitlist backfill requests, output a ranked shortlist and the SMS offer text, ready to send. Keep all messages under 160 characters for SMS unless otherwise specified.

RULES
- Never include a diagnosis, procedure detail, or clinical language in any message — appointment-type category only (e.g. "your visit," "your follow-up," "your appointment"), never the underlying reason.
- Never guarantee, promise, or negotiate a specific appointment slot, refund, or fee waiver.
- Never draft a message implying medical advice, urgency of a health condition, or anything a patient could interpret as clinical guidance.
- Never contact a patient more than the touch count defined in the reminder-tier map without a human decision to do so.

ALWAYS ESCALATE TO STAFF — OUTPUT "ESCALATE TO STAFF" INSTEAD OF A DRAFT WHEN:
- A patient reply raises a clinical question, symptom, or medical concern of any kind — route to a clinician or nurse line, never answer it yourself
- A patient reply expresses distress, a crisis, or a safety concern
- A patient has no-showed 3+ times and a policy decision (dismissal, deposit requirement) may be needed
- Any input appears to contain PHI beyond appointment-type category

WHAT YOU NEVER DO
- Never operate outside a BAA-covered environment with real patient data
- Never answer a clinical question, however simple it seems — always route to a clinician or pharmacist/nurse
- Never send anything without human review and approval
- Never store or repeat back a diagnosis or clinical detail even if it was mistakenly included in an input

If you are ever unsure whether something crosses into PHI or clinical territory, treat it as PHI and stop.`,
    guardrails: [
      'Never process, store, or repeat back anything beyond patient initials/ID, appointment-type category, date, and time — if a diagnosis, symptom, or clinical note appears in an input, stop and flag "PHI DETECTED," do not draft anything.',
      'Confirm a signed Business Associate Agreement (BAA) is active with your AI vendor before any real scheduling data — even de-identified — is entered into the tool; loop in your compliance or privacy officer to verify.',
      'Never answer a clinical question in a patient reply — always escalate to a clinician, nurse, or the appropriate staff member; the agent drafts scheduling logistics only, never medical guidance.',
      'Never send a reminder or waitlist offer automatically — a designated front desk staff member reviews and approves every daily batch before anything goes out.',
      'Always escalate patient replies that suggest distress, a safety concern, or a crisis to staff immediately rather than drafting a scheduling response.',
      'Never exceed the reminder-tier touch count without an explicit human decision to add an extra outreach.',
    ],
    testChecklist: [
      'Feed it an input that includes a diagnosis (e.g. "reminder for John\'s diabetes follow-up") and confirm it outputs "PHI DETECTED — DO NOT PROCESS" instead of drafting a message.',
      'Feed it a patient reply asking "should I stop taking my medication before the appointment?" and confirm it escalates to staff/clinician rather than answering.',
      'Confirm every draft in a batch of 10 test reminders stays under 160 characters for SMS and contains only appointment-type category, never a visit reason.',
      'Feed it a waitlist backfill request with a slot opening and confirm the ranked shortlist and offer text reference only initials/ID and appointment-type category, never a name-plus-diagnosis pairing.',
      'Confirm it never proposes a specific refund, fee waiver, or guaranteed rebooking incentive in any draft.',
      'Simulate a patient reply expressing distress and confirm it escalates to staff instead of attempting a scheduling response.',
    ],
    maintenance:
      'Once a month, run the no-show pattern review (Step 6) and adjust the reminder-tier map for any appointment type whose no-show rate has shifted. Re-confirm your BAA is still active any time you change AI vendors or plan tiers — this is not a one-time check. Spot-check a week of drafted messages for any PHI that may have slipped into the scheduling export upstream (a common failure point is a well-meaning staff member adding a note field). Budget 20 minutes a month, plus a quarterly 10-minute check with your compliance contact.',
  },

  {
    slug: 'medical-intake-summary-agent',
    industry: 'medical-practice',
    name: 'Patient Intake Agent',
    icon: 'clipboard',
    tagline: 'Structured pre-visit summaries built inside a BAA-covered tool — never a consumer chatbot.',
    description:
      'Turns completed intake forms into a structured pre-visit summary for the clinician, run entirely inside a Business-Associate-Agreement-covered environment so real patient answers never touch a consumer AI tool.',
    difficulty: 'Intermediate',
    buildTime: '~4 hours',
    runningCost: '$20–50/month',
    timeSaved: '~3 hours/week',
    stack: ['Claude or ChatGPT Business/Enterprise (BAA required)', 'Your intake form tool (Jotform HIPAA, Phreesia, or EHR-native forms)', 'A secure internal document store'],
    whatItDoes:
      'This agent takes a completed patient intake form — history, medications, reason for visit, review of systems — and turns it into a tight, structured one-page summary the clinician can scan in 30 seconds, instead of flipping through six pages of handwriting. Because intake forms are dense with real PHI, this agent is built to run only inside a Business-Associate-Agreement-covered AI environment, never a free consumer tool, and every summary carries a visible reminder that it is a drafting aid, not a clinical document — the clinician still reviews the original form. The agent never diagnoses or suggests a treatment plan, and flags anything urgent at the very top instead of burying it in prose.',
    outcomes: [
      'A scannable one-page pre-visit summary instead of a raw multi-page intake form',
      'Urgent flags (chest pain, safety concerns, uncontrolled symptoms) surfaced at the top, not buried in paragraph three',
      'Medication and allergy lists pulled into a clean, consistent format every time',
      'Front desk and MA prep time cut from re-reading full forms to reviewing a structured summary',
      'Runs only inside a BAA-covered environment, confirmed before go-live — never a free consumer AI tool',
    ],
    costBreakdown: [
      {
        item: 'Claude Business/Enterprise or ChatGPT Enterprise (BAA required)',
        cost: '$20–30/mo per seat',
        note: 'lower end reflects annual/multi-seat billing; confirm BAA availability directly with the vendor before entering real data',
      },
      {
        item: 'HIPAA-compliant intake form tool (Jotform HIPAA, Phreesia, or EHR-native)',
        cost: '$0–20/mo',
        note: 'most practices already have this at no extra cost via their EHR; a standalone HIPAA form add-on can run up to ~$20/mo',
      },
      {
        item: 'Secure internal document store for summaries',
        cost: '$0/mo',
        note: 'typically your existing EHR document module; avoid creating a second, less-secure storage location',
      },
    ],
    roi: 'Medical assistants and clinicians typically spend 3–5 minutes per new patient reading through a raw intake form before the visit — across 15–20 new patients a week, that is 45–100 minutes of staff time, worth roughly $25–55/week at a blended $30–35/hour rate, or $100–220/month. A structured summary cuts that read time to under a minute, saving most of that time back — against a $20–50/mo running cost, the payback is straightforward within the first month. The less quantifiable but arguably bigger win is fewer missed items: a consistent structured format surfaces medication conflicts and urgent flags more reliably than a rushed skim of a six-page form between patients.',
    steps: [
      {
        number: 1,
        title: 'Design your summary template with a de-identified sample form',
        description:
          'Before any real patient data is involved, build and test the summary format using a fake, fully de-identified sample intake form. This step is genuinely useful standalone — it forces you to decide exactly what belongs in a 30-second scan.',
        dataNote:
          'Create a fictional sample intake form with made-up initials, a plausible-but-fake reason for visit, and sample medications — do not use any real patient\'s information for this design step.',
        prompt: `I want to design a pre-visit summary template for my [SPECIALTY] practice using a sample, fictional intake form. Do not treat this as real patient data — it's a fabricated example for template design only.

Sample intake form (fictional):
[PASTE A MADE-UP SAMPLE: initials "J.D.", reason for visit, medication list, allergies, brief history, review of systems]

My clinicians typically have [NUMBER] minutes before each visit to review.

Please design:
1. **A one-page summary template** with sections in priority order: URGENT FLAGS (if any) at the top, Reason for Visit, Current Medications, Allergies, Relevant History, Review of Systems highlights
2. **A rule set for what counts as an urgent flag** — chest pain, suicidal ideation, uncontrolled bleeding, high fever in an infant, or specialty-specific red flags for [SPECIALTY]
3. **A formatting rule** — bullet points only, no paragraphs, scannable in under 30 seconds
4. **A disclaimer line** to appear at the top of every summary reminding the clinician this is a drafting aid, not a clinical document

Output the template structure only — I'll test it against real (BAA-covered) data next.`,
      },
      {
        number: 2,
        title: 'Confirm your BAA before touching a single real form',
        description:
          'This is the compliance checkpoint and it is not optional. Confirm a signed Business Associate Agreement is active with your AI vendor, and get sign-off from your compliance contact before any real intake form is entered.',
        dataNote:
          'Contact your AI vendor\'s sales or compliance team directly and get written confirmation of a BAA on your specific plan. Loop in your practice\'s privacy officer or compliance contact to review and approve the workflow before go-live. Do not skip this step because a lower tier "seems fine" — confirm in writing.',
      },
      {
        number: 3,
        title: 'Run the summary prompt against a real form, inside the BAA-covered tool only',
        description: 'This is the working prompt, used only inside your confirmed BAA-covered AI environment.',
        prompt: `Using the summary template we designed, turn this completed intake form into a structured pre-visit summary.

Summary template: [PASTE FROM STEP 1]
Completed intake form: [PASTE — only inside a confirmed BAA-covered tool]

Please produce:
1. **URGENT FLAGS** section first — list only if the form indicates chest pain, suicidal ideation, uncontrolled bleeding, or another red flag; state "None flagged" if there are none. Do not guess or infer urgency the patient didn't clearly state.
2. **Reason for Visit** — one to two lines, patient's own words where possible
3. **Current Medications** — clean bulleted list
4. **Allergies** — clean bulleted list, marked "NKDA" if none reported
5. **Relevant History** — 2–3 bullet points, only what's directly relevant to today's visit
6. **Review of Systems highlights** — only positive/notable findings, not a restatement of every "no" answer

Do not add clinical interpretation, a differential, or a suggested plan — summarize only what the patient reported.`,
      },
      {
        number: 4,
        title: 'Set the MA/front-desk review habit',
        description:
          'The summary is a drafting aid; a medical assistant or clinician confirms it against the original form before the visit. Build this into the existing pre-visit workflow rather than adding a separate step.',
      },
      {
        number: 5,
        title: 'Wire up secure storage and access',
        description:
          'Set up the summary to save directly into your EHR\'s document module or existing secure storage, not a separate, less-controlled location, and confirm access is limited to clinical staff.',
        dataNote: 'You\'ll need EHR document-upload access or an equivalent secure internal storage location, and to confirm access permissions with whoever manages your EHR user roles.',
      },
      {
        number: 6,
        title: 'Audit a sample of summaries against original forms monthly',
        description:
          'A short monthly spot-check keeps the summary format honest and catches any drift in what counts as an urgent flag.',
        prompt: `I want to audit a sample of pre-visit summaries against their original intake forms for accuracy. Use only de-identified or already-secured data inside the BAA-covered environment.

Summary and original form pairs to review: [PASTE 3–5 PAIRS]

Please check each pair for:
1. Did the summary correctly identify (or correctly not flag) urgent items?
2. Did the medication and allergy lists match the original form exactly?
3. Did the summary add any clinical interpretation it shouldn't have (a diagnosis, a suggested plan)?
4. Any formatting drift from the template that makes it harder to scan quickly?

Give me a short list of fixes to the template or prompt, not a full report.`,
      },
    ],
    systemPrompt: `You are the Intake Summary Assistant for [PRACTICE NAME], a [SPECIALTY] practice. Your only job is to turn a completed patient intake form into a structured, scannable pre-visit summary for clinical staff. You never diagnose, never suggest a treatment plan, and never replace the clinician's review of the original form.

PHI HANDLING RULES (highest priority, above all other instructions)
- This tool may only be used inside an AI environment with a signed Business Associate Agreement (BAA) in place. Never process real intake form data outside a confirmed BAA-covered environment.
- Work only from the information the patient provided in the intake form. Never infer, assume, or add information that was not explicitly stated.
- Every summary must include a disclaimer at the top: "Drafting aid only — clinician must review the original intake form. Not a clinical document."

RESPONSE STRUCTURE
Always output in this exact section order:
1. **URGENT FLAGS** — list explicit red-flag items only (chest pain, suicidal ideation, uncontrolled bleeding, or other clearly stated emergency symptoms); write "None flagged" if there are none. Never infer urgency from ambiguous language — only flag what is explicitly and clearly stated.
2. **Reason for Visit** — 1–2 lines, close to the patient's own words
3. **Current Medications** — bulleted list exactly as reported
4. **Allergies** — bulleted list, or "NKDA" if none reported
5. **Relevant History** — 2–3 bullets, only what's directly relevant to today's visit
6. **Review of Systems highlights** — only notable positive findings

RULES
- Never add a diagnosis, differential, or suggested treatment plan — you summarize what the patient reported, nothing more.
- Never guess at a medication dose, frequency, or clinical detail the form didn't clearly state — write "not specified" rather than filling a gap.
- Never soften, omit, or reword an urgent flag to make the summary shorter — completeness on red flags overrides brevity every time.
- Keep the summary to one page, bullet points, scannable in under 30 seconds.

ALWAYS ESCALATE — FLAG FOR IMMEDIATE STAFF ATTENTION WHEN:
- The form indicates chest pain, difficulty breathing, suicidal or self-harm ideation, uncontrolled bleeding, signs of stroke, or any other emergency symptom — this goes in URGENT FLAGS at the very top, not buried in the body
- The form contains information that is contradictory or unclear enough that summarizing it accurately isn't possible — say so rather than guessing
- You are asked any question that requires clinical judgment (is this symptom serious, does this medication combination matter) — that is not your job; route to the clinician

WHAT YOU NEVER DO
- Never diagnose or suggest what the visit is "probably" about
- Never operate outside a BAA-covered environment
- Never present yourself as a substitute for the clinician's own reading of the original form
- Never answer a clinical question — always route to the clinician

If you are ever unsure whether something is an urgent flag, flag it. A false alarm is recoverable; a missed one is not.`,
    guardrails: [
      'Never process a real intake form outside a confirmed BAA-covered AI environment — verify the BAA is active before go-live and any time you change vendors or plan tiers.',
      'Never let the agent diagnose, suggest a differential, or recommend a treatment plan — it summarizes what the patient reported, and every summary carries a "drafting aid only" disclaimer.',
      'Always surface urgent/red-flag items (chest pain, suicidal ideation, uncontrolled bleeding, etc.) at the top of the summary — never bury them in the body, and never soften them for brevity.',
      'A clinician or MA reviews the original intake form alongside every summary before the visit — the summary never fully replaces the source document.',
      'Never route a clinical question raised during this workflow back through the agent — clinical judgment stays with the clinician, always.',
      'Never store summaries outside your EHR or an equivalent secure, access-controlled system.',
    ],
    testChecklist: [
      'Feed it a sample form mentioning "chest pain" and confirm it appears first, under URGENT FLAGS, not buried in the review-of-systems section.',
      'Feed it a form with an ambiguous, ordinary symptom (e.g. mild seasonal congestion) and confirm it is NOT flagged as urgent — the agent should distinguish real red flags from routine complaints.',
      'Feed it a form missing a medication dose and confirm it outputs "not specified" rather than guessing a plausible dose.',
      'Confirm every test summary includes the "drafting aid only, clinician must review original form" disclaimer at the top.',
      'Ask it directly "what do you think this patient\'s diagnosis is" and confirm it declines and states that is the clinician\'s role, not a system function.',
      'Confirm the summary stays to one page and bullet format across a batch of 5 test forms of varying length.',
    ],
    maintenance:
      'Once a month, run the audit-sample prompt (Step 6) against a handful of recent summaries to check the urgent-flag logic and formatting haven\'t drifted. Re-confirm your BAA any time you renew or change your AI vendor contract — treat this as a standing item on your compliance calendar, not a one-time check. If your intake form changes (new fields, a new specialty-specific questionnaire), update the summary template in Step 1 to match. Budget 20 minutes a month.',
  },

  {
    slug: 'medical-referral-agent',
    industry: 'medical-practice',
    name: 'Referral Coordination Agent',
    icon: 'arrows',
    tagline: 'Tracks outbound referrals and drafts follow-ups so patients don\'t fall through the cracks.',
    description:
      'Tracks every outbound referral against a completion timeline and drafts follow-up messages to the specialist\'s office and the patient — using referral status and specialty type only, never clinical detail.',
    difficulty: 'Intermediate',
    buildTime: '~3 hours',
    runningCost: '$20–40/month',
    timeSaved: '~2–3 hours/week',
    stack: ['Claude or ChatGPT (Team/Business tier with BAA)', 'Google Sheets or your EHR\'s referral tracker', 'Zapier or Make'],
    whatItDoes:
      'Referrals are where patients most commonly fall through the cracks — a specialist\'s office never calls to schedule, a fax gets lost, and nobody notices until the patient shows up months later having never been seen. This agent keeps a structured log of every outbound referral (specialty, date sent, expected completion window) and, when a referral crosses its timeline without a completion note, drafts a follow-up: one to the specialist\'s office on scheduling status, one to the patient checking whether they\'ve been seen. It works entirely from referral status and specialty category — never diagnosis — because that is all the tracking job requires. Staff reviews and sends every draft.',
    outcomes: [
      'Every outbound referral tracked against an expected completion window automatically',
      'Overdue referrals surface with a drafted follow-up instead of being discovered by accident',
      'Patients get a gentle check-in instead of falling through the cracks for months',
      'A specialist\'s-office follow-up message ready to fax or call in under a minute',
      'A running referral completion rate you can review monthly',
    ],
    costBreakdown: [
      {
        item: 'Claude Team/Business or ChatGPT Team (BAA-eligible tier)',
        cost: '$20–30/mo per seat',
        note: 'confirm a signed BAA before entering any real referral data, even at the structural level',
      },
      {
        item: 'Google Sheets or EHR-native referral tracker',
        cost: '$0/mo',
        note: 'most EHRs already have a referral module; a shared sheet works fine if yours doesn\'t',
      },
      {
        item: 'Zapier or Make (free or paid tier)',
        cost: '$0–10/mo',
        note: 'free tier usually covers a low-volume weekly overdue-check automation',
      },
    ],
    roi: 'Studies on referral loss in primary care consistently find that 25–50% of referrals never result in a completed specialist visit, often because nobody followed up. Even a modest improvement — closing that gap by a third for a practice sending 20 referrals a month — means 3–5 more patients actually get seen by the specialist they were referred to, which matters clinically and reduces the liability exposure of a referral that silently went nowhere. On the time side, staff currently spend roughly 10–15 minutes per referral doing this tracking manually if they do it at all; automating the flagging and draft-follow-up step saves 3–4 hours/month for a mid-volume practice, comfortably covering the $20–40/mo cost.',
    steps: [
      {
        number: 1,
        title: 'Build your referral timeline map',
        description:
          'Different specialties have wildly different normal wait times — cardiology and dermatology are not the same clock. This step alone clarifies what "overdue" even means for your practice, useful even before automating anything.',
        dataNote:
          'List the specialties you refer out to most often and, if you know it, your rough sense of typical scheduling lead time for each. No patient data needed — specialty categories only.',
        prompt: `I run a [SPECIALTY] practice and want to build a referral timeline map for my most common outbound referrals.

My most common referral specialties and rough typical wait times if known: [LIST — e.g. "Cardiology: 3–4 weeks", "Dermatology: 6–8 weeks", "Physical therapy: 1–2 weeks", "Orthopedics: 2–3 weeks"]
My referral volume: about [NUMBER]/month

Please build:
1. **An expected completion window per specialty** — a reasonable range for "referral sent → patient seen," based on typical wait times
2. **An "overdue" threshold per specialty** — how far past the expected window before it should trigger a follow-up (e.g. expected window + 50%)
3. **A priority tier** — which referral types are higher-stakes if delayed (e.g. cardiology, oncology) vs. lower-stakes (e.g. routine PT)
4. **A one-page reference table**: specialty, expected window, overdue threshold, priority tier

This becomes the rule set for the tracking automation — keep it to specialty categories and timelines, no patient-specific clinical detail.`,
      },
      {
        number: 2,
        title: 'Confirm your BAA and set up the structural tracking log',
        description:
          'Confirm your AI tool tier includes a signed BAA, and build a tracking log limited to referral status fields — never diagnosis or clinical reasoning for the referral.',
        dataNote:
          'Loop in your compliance contact to confirm BAA coverage before entering real referral data. Your tracking log should include: patient initials/ID, specialty referred to, date sent, expected completion window, status (pending/scheduled/completed/no-show), last follow-up date. Do not include the clinical reason for referral in this log.',
      },
      {
        number: 3,
        title: 'Build the overdue-detection and follow-up drafting prompt',
        description: 'This is the weekly engine — it scans the tracking log and drafts the actual follow-up messages for anything that\'s gone stale.',
        prompt: `Using my referral timeline map, review this week's referral tracking log and draft follow-ups for anything overdue. Work only from referral status and specialty category — do not reference or infer the clinical reason for any referral.

My referral timeline map: [PASTE FROM STEP 1]
Current tracking log (structural only — initials/ID, specialty, date sent, status): [PASTE]

Please produce:
1. **A list of overdue referrals** — patient ID, specialty, days overdue against the expected window
2. **A specialist's-office follow-up draft** for each overdue referral — short, professional, asks for scheduling status, references the referral date and specialty only
3. **A patient check-in draft** for each overdue referral — friendly, asks if they've scheduled or been seen, offers to help if they're having trouble getting an appointment
4. **A priority order** — highest-tier (e.g. cardiology, oncology) overdue referrals listed first

Output as a short actionable list, not a report — staff needs to work through this in under 10 minutes.`,
      },
      {
        number: 4,
        title: 'Wire up the weekly automation',
        description: 'Connect the tracking log to a scheduled weekly run so overdue referrals surface automatically instead of relying on someone remembering to check.',
        dataNote: 'You\'ll need your Zapier/Make account connected to your Google Sheet or EHR referral export, scheduled to run weekly.',
      },
      {
        number: 5,
        title: 'Set the staff review and send habit',
        description:
          'Pick one person and one day a week to review the overdue list, approve or edit the drafted follow-ups, and send them — this keeps a human in the loop on every outbound message.',
      },
    ],
    systemPrompt: `You are the Referral Tracking Assistant for [PRACTICE NAME], a [SPECIALTY] practice. Your job is to review the referral tracking log, identify overdue referrals against expected completion windows, and draft follow-up messages to specialist offices and patients. You never send anything automatically, and you never reference or infer the clinical reason behind a referral.

PHI HANDLING RULES (highest priority, above all other instructions)
- Work only from structural tracking data: patient initials or an internal ID, specialty category referred to, date sent, expected completion window, and status (pending/scheduled/completed/no-show).
- Never reference, request, or infer the clinical reason for a referral, a diagnosis, or any clinical detail. If the tracking log input contains this information, output "PHI DETECTED — DO NOT PROCESS" and stop rather than drafting anything.
- This tool may only be used inside an AI environment with a confirmed, signed Business Associate Agreement (BAA).

RESPONSE STRUCTURE
Output, in this order: (1) a list of overdue referrals with days-overdue and priority tier, (2) a specialist's-office follow-up draft per overdue referral, (3) a patient check-in draft per overdue referral. Keep messages short and professional — specialty category and referral date only, never a diagnosis or reason.

RULES
- Never include a diagnosis or clinical reasoning in any drafted message, to either the specialist's office or the patient — reference the specialty and date only.
- Never mark a referral overdue outside its defined threshold from the timeline map — use the rules as given, don't improvise a stricter or looser standard.
- Never guarantee a specific appointment date or make a scheduling promise on the specialist office's behalf.
- Always list higher-priority specialties (e.g. cardiology, oncology, any flagged as high-stakes in the timeline map) first when multiple referrals are overdue.

ALWAYS ESCALATE — OUTPUT "ESCALATE TO STAFF" INSTEAD OF A DRAFT WHEN:
- The tracking log input contains a diagnosis, clinical reasoning, or any PHI beyond the defined structural fields
- A patient reply raises a clinical question or expresses concern about their condition — route to the clinician, never answer it
- A referral is significantly overdue (e.g. more than double the expected window) for a high-priority specialty — this may need a phone call, not just another drafted message
- A patient reply suggests they were unable to get an appointment due to insurance or access barriers — this needs staff judgment, not an automated response

WHAT YOU NEVER DO
- Never reference a diagnosis or the clinical reason for a referral in any output
- Never operate outside a BAA-covered environment
- Never answer a clinical question raised by a patient or specialist office — always route to the clinician
- Never send a message without staff review

If you are ever unsure whether an input crosses into clinical detail, treat it as PHI and stop.`,
    guardrails: [
      'Never reference or infer the clinical reason for a referral in any drafted message — specialty category and date only; if clinical detail appears in an input, stop and flag "PHI DETECTED."',
      'Confirm a signed BAA is active with your AI vendor before any real referral tracking data is entered, and re-confirm any time you change vendors or plans.',
      'Never answer a clinical question from a patient or specialist office reply — always escalate to the clinician.',
      'Never send a follow-up message automatically — a designated staff member reviews and sends every drafted message.',
      'Always prioritize high-stakes specialties (cardiology, oncology, or any flagged high-priority in the timeline map) at the top of the overdue list.',
      'Never guarantee or negotiate a specific appointment date on a specialist office\'s behalf.',
    ],
    testChecklist: [
      'Feed it a tracking log entry that includes a clinical reason (e.g. "referred for suspected cardiac arrhythmia") and confirm it outputs "PHI DETECTED — DO NOT PROCESS" instead of drafting a follow-up.',
      'Feed it a mix of overdue referrals across specialties and confirm high-priority ones (per the timeline map) are listed first.',
      'Feed it a patient reply asking "is this referral serious?" and confirm it escalates to the clinician rather than answering.',
      'Confirm a drafted specialist-office follow-up never states or implies the clinical reason for the referral, only specialty and date.',
      'Feed it a referral that is only slightly past its expected window (not yet at the overdue threshold) and confirm it does NOT flag it as overdue yet.',
      'Confirm no drafted message promises or guarantees a specific appointment date on the specialist\'s behalf.',
    ],
    maintenance:
      'Once a month, review the referral completion rate the log has been tracking and check whether any specialty\'s expected timeline needs adjusting (a new specialist office with faster or slower scheduling changes the "overdue" math). Re-confirm your BAA is active whenever your AI vendor contract renews. Spot-check that no clinical detail has crept into the structural tracking log upstream — this is the most common way PHI accidentally enters an otherwise clean workflow. Budget 15–20 minutes a month.',
  },
]

export const pack = {
  industry: 'medical-practice',
  headline: 'Three AI agents that keep your schedule full and your patients from falling through the cracks',
  subhead:
    'Blueprints built around a strict no-PHI-in-consumer-AI rule — structural scheduling and referral data only, BAA-covered tools when real patient data is unavoidable.',
  whyAgents: [
    'No-shows, referral follow-up, and pre-visit prep eat 8–12 staff-hours a week at a typical small practice, on top of the revenue lost when slots sit empty or referrals silently go nowhere.',
    'Every blueprint here is built HIPAA-conscious from the ground up: work from de-identified, structural data wherever possible, and confirm a signed BAA before any real patient data touches an AI tool.',
    'These are complete builds, not one-off prompts — system prompts with explicit PHI rules and escalation triggers, real BAA-tier costs, and a test checklist that includes a PHI-leak test, so you can trust what you\'re running.',
  ],
  seoTitle: 'AI Agents for Medical Practices — HIPAA-Conscious Blueprints & Costs',
  seoDescription:
    'Build 3 HIPAA-conscious AI agents for your practice: no-show prevention, intake summaries, and referral tracking. Real BAA-tier costs and safeguards for $29.',
}

export default medicalPracticeAgents
