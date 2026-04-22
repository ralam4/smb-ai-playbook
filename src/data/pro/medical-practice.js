const medicalPracticeGuides = [
  {
    slug: 'medical-noshow-system',
    tier: 'pro',
    industry: 'medical-practice',
    title: 'Cut No-Shows by 50%+ with a Full Reminder, Confirmation, and Recovery System',
    description:
      'A complete no-show reduction system for small practices — data analysis to find where the problem is worst, a multi-channel reminder and confirmation flow, a same-day recovery workflow to fill cancelled slots, and a front desk SOP.',
    difficulty: 'Intermediate',
    time: '~90 min to set up, 10 min/day to run',
    tools: 'ChatGPT or Claude · Your scheduling data · Your EHR or practice management system',
    stripeUrl: null,
    intro:
      'A typical small medical practice loses 5–15% of revenue to no-shows. That’s thousands of dollars every month — and the slots could have gone to patients who needed them. Most practices rely on a single automated reminder from their EHR and accept whatever no-show rate comes with it. This guide builds a full system: data analysis to find where no-shows are worst, a 3-touch multi-channel reminder flow designed for your patient population, a same-day recovery workflow to fill cancelled slots within an hour, and a simple front desk SOP that lets the system run without your constant supervision. Works for primary care, specialty practices, dental, physical therapy, mental health, and dermatology.',
    outcomes: [
      'A no-show pattern analysis showing exactly where you’re losing appointments',
      'A 3-touch reminder sequence tuned to your patient population',
      'A same-day cancellation recovery workflow that fills open slots within an hour',
      'A repeat-offender protocol that protects your schedule without damaging relationships',
      'A one-page front desk SOP covering the full flow',
    ],
    steps: [
      {
        number: 1,
        title: 'Pull and analyze 90 days of appointment data',
        description:
          'Most practices don’t know their real no-show rate by appointment type, day of week, or patient segment. The first move is to find the actual pattern.',
        dataNote:
          'Export from your EHR or scheduling tool (Athena, Epic, Dentrix, Jane, SimplePractice, Kareo): date, time, appointment type, provider, patient type (new vs. established), insurance type, and outcome (kept/rescheduled/cancelled with notice/no-show). Pull 90 days.',
        prompt: `I want to analyze my practice's no-show patterns in depth.

My practice:
- Specialty: [e.g. family medicine, orthodontics, physical therapy, psychiatry]
- Typical weekly visit volume: [NUMBER]
- Providers: [NUMBER]
- Patient population: [describe — age range, urban/suburban/rural, Medicaid-heavy, commercial insurance, cash-pay, etc.]

Here is my 90-day appointment data:
[PASTE EXPORT OR SUMMARIZE BY CATEGORY]

Please analyze:
1. My overall no-show rate — and benchmark it against typical rates for my specialty
2. No-show rate by appointment type (new patient, follow-up, procedure, lab, etc.)
3. No-show rate by day of week and time of day
4. No-show rate by provider — if wide variance, flag potential scheduling or patient-mix differences
5. No-show rate by patient segment (new vs. established, insurance type if available)
6. Repeat offenders — patients who've no-showed 2+ times in the window
7. The top 3 pattern findings I should act on first
8. Estimated annual revenue lost to no-shows based on my typical visit value of $[AMOUNT]`,
      },
      {
        number: 2,
        title: 'Design a 3-touch multi-channel reminder flow',
        description:
          'Single reminders are weak. A 3-touch flow across two channels (SMS + email or SMS + voice) cuts no-shows roughly in half.',
        prompt: `Based on my patient population, help me design a 3-touch reminder flow.

My patient population: [FROM STEP 1]
My available reminder channels: [text, email, automated voice, patient portal]
My EHR's native reminder capabilities: [what my system does natively — most send one automated reminder]
My average appointment lead time: [typical days between booking and appointment]

Please create:
1. A **3-touch timing plan** with specific delivery times for each touch (e.g. "confirmation at booking, reminder 48h before, day-of at 7am")
2. **Message copy for each touch** — SMS (under 160 chars) AND email/voice version
3. **A confirmation mechanism** — specific language that prompts a reply (YES to confirm, NO to cancel, or a link to reschedule)
4. **Tone variations** — one version for established warm patients, one for new patients who haven't been in yet
5. **Special messaging for high-risk appointment types** — procedures, new patient visits, referrals where no-show costs more (slot + prep + staff time)
6. **A reminder opt-out protocol** — compliance-safe language for patients who don't want SMS reminders`,
      },
      {
        number: 3,
        title: 'Build a same-day cancellation recovery workflow',
        description:
          'When a patient cancels, you have ~60 minutes to fill the slot before it’s gone. A waitlist-driven recovery flow typically fills 40–60% of same-day cancellations.',
        prompt: `I want to build a cancellation recovery workflow to fill same-day cancelled slots.

My typical same-day cancellation pattern: [e.g. "2–4 per week, usually with 2–6 hours notice"]
My waitlist status: [we have a waitlist / we don't / unstructured]

Please create:
1. **A structured waitlist template** — patients who want an earlier slot, with: patient ID, preferred appointment type, preferred days/times, how far in advance they're willing to come in, contact preference
2. **A cancellation-came-in SMS template** — short, offers the slot, asks for YES/NO reply within 30 min
3. **A voicemail script** for when SMS doesn't reach them fast enough
4. **A rotation protocol** so the same waitlist patients don't always get first call
5. **A "30-minute escalation" rule** — if first 3 patients don't respond in 30 min, who gets contacted next (recent no-shows trying to get back in good standing? Drop-ins?)
6. **A conversion tracking log** — so we know what % of cancellations we're actually recovering`,
      },
      {
        number: 4,
        title: 'Install a repeat-offender protocol',
        description:
          'Repeat no-showers are a small minority of patients causing the majority of the problem. A compliance-aware protocol protects your schedule without damaging relationships or violating patient care obligations.',
        prompt: `I want a protocol for handling patients who repeatedly no-show.

My specialty: [TYPE]
My insurance mix: [Medicare / Medicaid / commercial / cash — Medicaid patients often have different compliance considerations]
My current policy: [describe or "none"]

Please create:
1. **A tiered response** — what happens after 1 no-show, 2 no-shows, 3 no-shows? Each should escalate without being punitive
2. **A "let's talk about this" conversation script** — for when a patient has hit their 2nd no-show, a warm but clear conversation about what's getting in the way
3. **A documented no-show policy** patients sign at intake — transparent about fees (if any), what happens with repeat no-shows, and how to cancel without penalty
4. **Compliance considerations** — what I should know about patient abandonment rules, Medicaid patient considerations, and due-process requirements before dismissing a patient for no-shows
5. **A written dismissal letter template** — for the rare case where we need to terminate the relationship, meeting standard of care obligations (30-day emergency coverage, transfer of records)
6. **A "second chance" protocol** — if a dismissed patient wants to return after a year, what's the process`,
      },
      {
        number: 5,
        title: 'Write the front desk SOP',
        description:
          'The system is only as good as the daily execution. Build a one-page SOP your team can follow.',
        prompt: `I want a front desk SOP for the no-show system that any staff member can execute.

My front desk team size: [NUMBER]
My EHR: [NAME]
My daily appointment volume: [NUMBER]

Please create a one-page SOP covering:
1. **Morning checklist** — review yesterday's no-shows, flag repeat offenders, run morning reminders
2. **Appointment booking protocol** — collect phone/email, offer reminder preferences, confirm policy
3. **Check-in protocol** — flag any patient with 2+ prior no-shows for a brief conversation
4. **Cancellation-in protocol** — when a cancellation comes in, the 30-minute clock starts; who does what
5. **End-of-day closeout** — same-day no-shows logged, reminders queued for tomorrow, waitlist status updated
6. **Edge cases** — how to handle: patient asks to remove reminders, patient disputes a no-show, patient calls while on another call, multi-appointment no-show, family-member missed appointment
7. **Escalation triggers** — when to bring something to the practice manager or provider`,
      },
      {
        number: 6,
        title: 'Build a weekly review ritual',
        description:
          'The system drifts without review. A 15-minute weekly ritual keeps it sharp.',
        prompt: `I want a weekly 15-minute ritual to review the no-show system and keep it working.

Please create:
1. **A weekly dashboard** — no-show rate this week vs. last week, recovery rate on cancellations, top 3 no-show reasons captured
2. **A 5-question weekly review** — What's improving? What's slipping? Which patient segment is most concerning? What friction is the front desk hitting? What do we adjust?
3. **A monthly provider-level report** — provider-specific no-show rates, so we can have coaching conversations where needed
4. **A trigger for re-running the Step 1 analysis** — when do we re-analyze the full 90 days to recalibrate?
5. **A "what the data doesn't tell us" log** — patient feedback on why they didn't show, captured in a simple list we review monthly`,
      },
      {
        number: 7,
        title: 'Patient-facing communication: getting buy-in for the new system',
        description:
          'The best system fails if patients feel spammed. A one-time communication that frames the system as a service, not surveillance, gets buy-in.',
        prompt: `I want to communicate the new reminder and confirmation system to my existing patient panel in a way that gets buy-in.

My patient population: [describe]
My communication channels: [email, portal, in-office signage]

Please create:
1. **A patient email/newsletter announcement** — frames the new system as a benefit (easier rescheduling, better access), not as a policy change
2. **An in-office sign or postcard** — a short, warm message explaining the new confirmation system
3. **A front desk talking-points card** — how to explain the system to patients who ask at check-in
4. **An FAQ for the practice website or portal** — 5–7 questions patients commonly ask (can I opt out? what if I don't have a cell phone? is there a fee?)
5. **A "frequent patient" thank-you note** — a gentle appreciation for patients with perfect attendance, which reinforces the behavior`,
      },
    ],
    expectations: {
      good: 'Most practices see no-show rates drop 30–50% within 60 days of implementing the 3-touch flow + same-day recovery. The revenue impact is usually substantial — enough to cover the staff time of running the system several times over.',
      ifBad:
        'If the reminder flow isn’t moving the needle, the problem is often the confirmation mechanism (too low-friction or too high-friction). Adjust timing and specificity before giving up.',
      time: 'Initial setup: 90 min of yours + 2–3 hours of front desk setup. Daily run-time: 10 min on the front desk. Full impact visible at 60 days.',
    },
    downloadFile: null,
  },

  {
    slug: 'medical-referral-system',
    tier: 'pro',
    industry: 'medical-practice',
    title: 'Build a Referral System That Stops Patients Falling Through the Cracks',
    description:
      'A full referral management system — a structured specialist directory organized by specialty and insurance, quick-lookup sheets by payer, patient handoff templates, and a closed-loop follow-up process.',
    difficulty: 'Intermediate',
    time: '~2 hours to set up, 10 min/day to run',
    tools: 'ChatGPT or Claude · Your referral contacts · Insurance panels',
    stripeUrl: null,
    intro:
      'When a patient needs a specialist, the referral process becomes a bottleneck that frustrates everyone. The front desk calls around to find a dermatologist who takes the patient’s insurance, has availability this month, and is actually accepting new patients. Meanwhile the patient leaves without a clear next step and may never follow through. This guide builds a full referral system: a structured, searchable specialist directory, quick-lookup sheets by payer, patient handoff templates that warm-transfer instead of drop-off, and a closed-loop follow-up process that catches referrals that went nowhere.',
    outcomes: [
      'A structured referral directory organized by specialty, insurance, and your practice’s preferences',
      'Quick-lookup sheets per major insurance panel — one glance, right specialist',
      'A patient handoff template that warm-transfers instead of drops off',
      'A closed-loop follow-up process that tracks whether the referral actually happened',
      'A monthly directory maintenance habit so contacts stay current',
    ],
    steps: [
      {
        number: 1,
        title: 'Map your common referral needs',
        description:
          'Before building the directory, identify your top 10 referral reasons. Most practices refer 80% of cases to the same 10–15 specialists. Know yours.',
        prompt: `I want to identify my practice's most common referral needs so I can build a directory that actually matches reality.

My practice:
- Specialty: [TYPE]
- Typical weekly visit volume: [NUMBER]
- Roughly how many referrals I make per week: [NUMBER if known]

My best guesses at common referral reasons:
[LIST — e.g. "dermatology for skin check", "cardiology for consults", "PT for musculoskeletal", "GI for screening", "mental health", "endocrinology for diabetes", etc.]

Please help me:
1. Organize these referral reasons into specialties I'll need in my directory
2. For each specialty, suggest the 2–3 sub-specialties I should have covered (e.g. general cardiology vs. electrophysiology)
3. Flag any specialty where I should have 3+ backup options due to access bottlenecks (mental health is the classic example)
4. Suggest 2–3 referral reasons I probably have but didn't list (based on my specialty)
5. Estimate how many unique specialist contacts I realistically need in the full directory (a rough number)`,
      },
      {
        number: 2,
        title: 'Build the structured referral directory',
        description:
          'Turn your referral contacts into a searchable, filterable directory. The structure matters more than the content at first.',
        prompt: `I want to build a structured referral directory I can search by specialty and insurance.

My current referral contacts:
[PASTE OR LIST — for each contact: specialist name, practice name, specialty, sub-specialty, phone, fax, email, address, accepted insurances, typical availability (fast/moderate/slow), notes like "good with Medicaid", "Spanish-speaking", "won't see patients under 18"]

Please create:
1. A **structured directory format** — a table or list structure with consistent fields: specialist name, practice, specialty, sub-specialty, phone, fax, email/portal, insurances accepted, typical wait time, languages spoken, patient age restrictions, my preference notes
2. A **sorting key** — primary sort by specialty, secondary sort by insurance, tertiary by my preference rating
3. **Gap flags** — specialties where I have only one option or no option; suggest what to do (request recommendations from colleagues, check my state medical society, use insurance directory as a starting point)
4. **Quality tags** — suggested tags I can apply as I learn more (e.g. "responsive", "thorough reports", "slow to return reports", "good bedside manner")
5. **A "deprecated" list** — contacts I should remove (retired, closed, consistently unresponsive)`,
      },
      {
        number: 3,
        title: 'Create quick-lookup sheets by insurance',
        description:
          'The front desk doesn’t have time to scroll through a full directory. Quick-lookup sheets organized by the top 5 insurance panels give instant answers.',
        prompt: `I want quick-lookup sheets organized by my top 5 insurance panels.

My top 5 insurance panels:
[LIST — e.g. "Blue Cross PPO", "Aetna", "Medicaid (state)", "Medicare", "Kaiser"]

From my directory:
[REFERENCE THE DIRECTORY FROM STEP 2]

Please create:
1. **One quick-lookup sheet per major insurance** — for each, a simple table showing my preferred specialists by specialty (cardiology / derm / GI / etc.)
2. **A "call first" column** — which specialists require a phone call to verify they're still accepting before we send the referral
3. **A "won't accept" callout** — specialties where none of my contacts take this insurance (so the front desk immediately knows to escalate or get a different plan)
4. **A printable format** — one page per insurance, laminated at the front desk
5. **An "update monthly" flag** — which entries are most likely to change (new patient acceptance flips on/off frequently)`,
      },
      {
        number: 4,
        title: 'Write patient handoff templates',
        description:
          'The biggest drop-off is between the referral being made and the patient actually calling. A warm handoff — not a "here’s a phone number" — dramatically improves follow-through.',
        prompt: `I want templates for warm-handing-off patients to specialists so they actually follow through.

My typical patient population: [describe]
Most common referral reasons: [FROM STEP 1]

Please create:
1. **A "here's your referral" patient-facing one-pager** — includes: specialist name/practice, phone/address, what the visit is for in plain language, what to bring (insurance card, records, medication list), typical wait time, what happens if the first specialist isn't a good fit
2. **A front-desk script** for the handoff conversation — short, warm, sets expectations
3. **A "we'll help you call" option** — a template script for when the patient wants the front desk to make the appointment with them right there
4. **A "here's the alternative" escalation** — when the preferred specialist isn't available, how to present the backup without losing confidence
5. **A patient portal message template** — for sending referral info through the portal as a follow-up so they have it in writing
6. **A pre-referral conversation** — for conditions where the patient might not want to go (mental health, GI, etc.); how to frame the referral as a partnership, not a rejection`,
      },
      {
        number: 5,
        title: 'Build a closed-loop follow-up system',
        description:
          'Most practices don’t know whether a referral actually happened. A simple closed-loop system catches patients who drifted before it becomes a clinical problem.',
        prompt: `I want a closed-loop referral follow-up system that tells me whether patients are actually completing their referrals.

My typical monthly referral volume: [NUMBER]

Please create:
1. **A referral tracking log** — one row per referral, with columns: patient ID, referral date, specialty, specialist name, insurance, expected completion window, actual completion date, notes
2. **A 14-day patient follow-up** — short message asking if they were able to schedule; branches into "yes/scheduled", "yes/seen", "no/need help", "no longer needed"
3. **A 30-day follow-up** — for patients who hadn't scheduled by day 14; warmer, with an option to re-refer to a different specialist or re-evaluate in the primary practice
4. **A "never scheduled" protocol** — what happens if at 60 days the patient hasn't gone, especially for clinically important referrals
5. **A monthly referral report** — so I can see completion rates by specialty, identify specialists with low completion (may be access or patient-experience issues), and identify referral reasons with poor follow-through`,
      },
      {
        number: 6,
        title: 'Install a monthly directory maintenance habit',
        description:
          'Referral directories go stale fast. Insurance panels change, providers retire, practices move. A 30-minute monthly ritual keeps the directory trustworthy.',
        prompt: `I want a monthly maintenance routine to keep my referral directory current.

My directory size: approximately [NUMBER] contacts

Please create:
1. **A monthly 30-minute checklist** — verify top 10 most-referenced contacts, spot-check 5 random contacts, update any insurance/acceptance changes, remove deprecated contacts
2. **A quarterly "full refresh" protocol** — deeper verification once every 90 days, reaching out directly to contacts we haven't used recently
3. **A "new contact intake" template** — whenever we add a new specialist, what info we capture before adding them to the directory
4. **A "complaint protocol" — if a patient reports a bad experience with a referral, how we log it and whether it triggers removal
5. **An annual directory audit** — once a year, a deeper review: are we referring to the right specialists, are there specialties we should add, are there network gaps we need to close`,
      },
    ],
    expectations: {
      good: 'Most practices reduce referral-related front desk time by 40–60% once the directory and quick-lookup sheets are built. Referral completion rates typically improve 15–30% with the warm handoff and closed-loop follow-up.',
      ifBad:
        'If completion rates don’t improve, the problem is usually on the specialist side — access (waits too long) or experience (poor handoff from specialist staff). Use the tracking log to identify which specialists to replace.',
      time: 'Initial setup: 2 hours for directory + quick-lookup sheets. Monthly maintenance: 30 min. Daily use: 1–2 min per referral, down from 10–15 min.',
    },
    downloadFile: null,
  },

  {
    slug: 'medical-patient-communication',
    tier: 'pro',
    industry: 'medical-practice',
    title: 'Build a Patient Communication System That Runs Itself',
    description:
      'Replace the daily flood of patient messages with a structured communication system — triage rules, template library, portal message workflows, and clinical escalation protocols.',
    difficulty: 'Intermediate',
    time: '~3 hours to set up, saves 5–10 hours/week',
    tools: 'ChatGPT or Claude · Your patient portal · Your EHR',
    stripeUrl: null,
    intro:
      'Patient communication is eating your staff’s day. Portal messages, phone calls, voicemails, forms — each one requires a different response, and the same questions keep coming in. The result is that staff is constantly triaging, providers are responding to messages at 9pm, and patients still feel like they’re not getting answered fast enough. This guide builds a structured communication system: triage rules that route messages to the right person, a template library for the 20 most common questions, portal message workflows that batch and prioritize work, and clinical escalation protocols that catch the messages that actually need a provider. The outcome is a practice that responds faster with less provider time burned.',
    outcomes: [
      'A triage framework that routes every message to the right person in seconds',
      'A template library covering 20+ of your most common patient questions',
      'A portal message workflow that batches and prioritizes work',
      'A clinical escalation protocol that catches urgent messages',
      'A weekly review that catches drift and improves templates over time',
    ],
    steps: [
      {
        number: 1,
        title: 'Inventory your current patient communication volume',
        description:
          'Before building a system, understand what you’re dealing with. Log one week of communication to see the real pattern.',
        dataNote:
          'For one week: track every inbound patient communication (portal message, phone call, voicemail, email). Note: channel, topic, who handled it, time spent, and outcome. Rough bucket categories are fine.',
        prompt: `I want to analyze my practice's patient communication volume to find where the system is breaking down.

My practice:
- Specialty: [TYPE]
- Typical patient panel size: [NUMBER]
- Communication channels: [list — portal, phone, email, voicemail, fax]
- Current staff handling messages: [roles]

Here is one week of communication data:
[PASTE OR LIST WITH CATEGORIES]

Please analyze:
1. Total volume by channel and topic
2. Top 10 most common message topics — what % of total volume do the top 10 represent?
3. Which topics consume disproportionate time relative to frequency (e.g. "Rx refill" is 20% of volume but only 5% of time)
4. Which topics require a provider vs. which could be handled by MA or front desk
5. Which topics are good candidates for self-service via FAQs or auto-responders
6. Estimated weekly hours currently spent on communication across the team`,
      },
      {
        number: 2,
        title: 'Build a triage framework',
        description:
          'Every message needs to go to the right person, fast. A triage framework takes the guesswork out.',
        prompt: `I want a triage framework so every inbound patient message routes to the right person on first read.

My team structure: [providers, MAs, front desk, nurses — who handles what]
My current triage method: [describe or "none"]

Please create:
1. **A triage decision tree** — inbound message → which role handles it, based on: topic, urgency indicators, patient history, complexity
2. **Urgency classification rules** — what words/phrases in a message indicate urgent (same-day), standard (24h), routine (3–5 business days)
3. **A "route to provider" criteria list** — specific message types that always need provider input
4. **A "route to MA/nurse" criteria list** — message types the MA/nurse can handle independently
5. **A "front desk handles" criteria list** — scheduling, billing, portal tech support
6. **A "self-service" suggestion list** — message types that should trigger a link to a resource instead of a reply
7. **A daily triage check-in** — 15-minute morning huddle to review any complex messages from overnight`,
      },
      {
        number: 3,
        title: 'Build the template library',
        description:
          'The same 20 questions come in every week. Answer each one with a high-quality template and save hours of writing.',
        prompt: `I want a template library covering my top 20 most common patient communication topics.

My top 20 topics (from Step 1 analysis):
[PASTE LIST]

My brand voice: [warm / clinical / direct / etc.]

For each topic, please create:
1. **A portal message template** (full-length, warm, clear)
2. **An SMS version** (short, action-oriented)
3. **A voicemail script** (for when we need to call back)
4. **A "personalize this" section** — fields to customize per patient
5. **A "when to escalate" note** — when this template ISN'T appropriate and the message needs provider review

Topics typically in the top 20 for a primary care practice (adjust for my specialty):
- Rx refill request
- New symptom, no appointment yet
- Lab results
- Appointment reschedule
- Referral status
- Insurance/billing question
- FMLA or work note request
- Post-visit follow-up question
- Records request
- Pharmacy callback confirmation
- After-hours question
- Complaint or concern
- Medication side effect
- New patient registration question
- Portal technical issue
- Vaccination question
- Screening recommendation question
- Insurance change notification
- Specialist report question
- General wellness question`,
      },
      {
        number: 4,
        title: 'Build a clinical escalation protocol',
        description:
          'The highest-risk failure is a message that contains a clinical red flag getting treated as routine. Build a protocol to catch those.',
        prompt: `I need a clinical escalation protocol to catch messages that look routine but contain clinical red flags.

My specialty: [TYPE]

Please create:
1. **A red-flag keyword list** — words/phrases that should trigger immediate provider review regardless of apparent routine nature (chest pain, suicidal ideation, shortness of breath, pregnancy bleeding, stroke symptoms, severe allergic reaction — and specialty-specific ones for my practice)
2. **A scanning protocol** — who scans incoming messages for these keywords, and how fast
3. **A same-day escalation flow** — when a red-flag message is identified, what happens (page provider, escalate to ER if unreachable, document in chart, warm handoff)
4. **A "send to ER now" message template** — warm but clear, for patients who need to go immediately
5. **A same-day callback protocol** — for patients who messaged a concerning symptom but didn't indicate emergency; our commitment to reach them the same day
6. **A documentation requirement** — what goes into the chart every time an escalation happens, for both clinical continuity and liability protection`,
      },
      {
        number: 5,
        title: 'Install batched portal message workflows',
        description:
          'Real-time responses burn provider time. Batched workflows (2–3 times per day) respond faster in aggregate because they’re more focused.',
        prompt: `I want to move from real-time message handling to batched workflows that respond faster in aggregate.

My provider panel size: [NUMBER]
My message volume per day: [NUMBER]

Please create:
1. **A batched workflow schedule** — 2–3 dedicated message-handling windows per day (e.g. 10am, 2pm, 4pm), with expected response time commitments
2. **Pre-batch triage expectations** — what the MA/nurse does before each batch so the provider opens clean work
3. **A batch completion target** — average seconds per message, with a "this is taking too long" trigger
4. **Provider-facing message template picker** — a quick way to apply a template in under 15 seconds
5. **A "send later" rule** — messages sent after 5pm are not acknowledged until 10am next business day (unless red-flagged in Step 4)
6. **A patient-facing expectation setter** — portal auto-response when they send a message, telling them our response window and what to do if it's urgent`,
      },
      {
        number: 6,
        title: 'Build a weekly review and improvement cycle',
        description:
          'The system drifts. A weekly 20-minute ritual keeps it sharp.',
        prompt: `I want a weekly review to keep the patient communication system improving over time.

Please create:
1. **A weekly 20-minute review** — message volume this week, average response time by role, flagged messages, near-misses on clinical escalation
2. **A monthly template audit** — which templates are most-used, which are never used (delete), which need updates
3. **A quarterly patient satisfaction pulse** — 3-question survey on communication experience (response time, clarity, feeling heard)
4. **A "new topic" tracking log** — topics that didn't exist 6 months ago and are now becoming common (candidates for new templates)
5. **A provider burnout signal** — if any provider's after-hours message load is creeping up, trigger a workflow review`,
      },
    ],
    expectations: {
      good: 'Most practices recover 5–10 hours/week of provider and staff time within the first 60 days. Patient satisfaction typically goes up — faster response times and more complete answers because templates are deliberate, not typed-on-the-fly.',
      ifBad:
        'If providers are still opening every message, the triage step is the bottleneck. Make sure MA/front desk triage is actually happening before messages land in the provider queue.',
      time: 'Initial setup: 3 hours. Templates: 2 hours. Ongoing maintenance: 20 min/week. Time savings visible at 30 days.',
    },
    downloadFile: null,
  },

  {
    slug: 'medical-insurance-preauth',
    tier: 'pro',
    industry: 'medical-practice',
    title: 'Speed Up Insurance Pre-Auth and Reduce Billing Denials',
    description:
      'Build systems that cut pre-auth turnaround time, reduce denials, and recover more denied claims — templates, workflow automation guidance, and a payer-specific playbook.',
    difficulty: 'Advanced',
    time: '~4 hours to set up, 30 min/week ongoing',
    tools: 'ChatGPT or Claude · Your payer list · Recent denial data · EHR',
    stripeUrl: null,
    intro:
      'Pre-authorization and billing denials are the single largest controllable revenue leak in most small practices. Delayed approvals delay care, denied claims go unappealed, and staff burns hours on paperwork that could be systematized. This guide builds a full pre-auth and denial management system: payer-specific playbooks for your top 5 insurance plans, pre-auth request templates that reduce back-and-forth, a structured denial review process, and appeal letter templates that actually recover revenue. The payer landscape changes fast, so the guide also installs a monthly update ritual so the system stays current.',
    outcomes: [
      'A payer-specific playbook for your top 5 insurance plans',
      'Pre-auth request templates tuned to common procedures and denial reasons',
      'A denial categorization and triage protocol',
      'An appeal letter library with templates for the 10 most common denial reasons',
      'A monthly update ritual that keeps the system current as payer rules change',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your denial and pre-auth data',
        description:
          'The first move is knowing where the problem is worst. Most practices don’t know their denial rate by payer or their pre-auth turnaround time by procedure.',
        dataNote:
          'Pull 90 days of pre-auth requests and denials. For each: procedure/service, payer, patient, date of request, date of decision, denial reason (if denied), resolution (appealed, accepted, write-off), dollar amount.',
        prompt: `I want to audit my practice's pre-auth and denial patterns.

My specialty: [TYPE]
My top 5 payers by volume: [LIST]
My typical monthly pre-auth volume: [NUMBER]
My typical monthly denial volume: [NUMBER + dollar amount if known]

Here is my 90-day data:
[PASTE OR SUMMARIZE]

Please analyze:
1. Denial rate overall and by payer (flag any payer with >5% denial rate)
2. Top 5 denial reasons by volume and by dollar amount
3. Average pre-auth turnaround time by payer (flag payers above 5 business days)
4. Pre-auth denial rate by procedure type
5. Appeal success rate overall and by denial reason
6. Estimated revenue recoverable if we reduced denial rate to X% and appealed more denials
7. Top 3 opportunities to target first`,
      },
      {
        number: 2,
        title: 'Build a payer-specific playbook for your top 5 plans',
        description:
          'Each payer has different rules, forms, and quirks. A playbook per plan removes the "how does this payer handle X" guesswork.',
        prompt: `I want a playbook for each of my top 5 insurance plans.

My top 5 plans:
1. [e.g. "Blue Cross Blue Shield PPO"]
2. [PLAN 2]
3. [PLAN 3]
4. [PLAN 4]
5. [PLAN 5]

For each plan, please create:
1. **Pre-auth portal or submission method** — where to submit, typical fields required
2. **Documentation requirements** — what's always needed (H&P, labs, imaging, prior conservative treatment, etc.)
3. **Typical turnaround time** — both stated and real-world
4. **Common denial reasons for this payer** — what they're picky about
5. **Appeal process** — how long we have, what format, where to submit
6. **Contact tree** — who to call for: expedited review, peer-to-peer, appeal status, credentialing
7. **Known quirks** — things this payer does differently that have bitten us before
8. **Pre-auth requirement list** — what procedures always require pre-auth for this plan (specialty-specific)

Format as a one-page reference per plan that my billing team can reference instantly.`,
      },
      {
        number: 3,
        title: 'Create pre-auth request templates',
        description:
          'A well-written pre-auth request reduces back-and-forth by 40–60%. Build templates tuned to your common procedures and common denial reasons.',
        prompt: `I want templates for pre-auth requests that minimize back-and-forth with payers.

My most common procedures requiring pre-auth:
[LIST — e.g. "MRI", "CT scan", "sleep study", "PT course", "specific medications", specialty-specific procedures]

For each procedure, please create:
1. **A pre-auth request template** — structure: clinical indication, diagnosis codes, documentation of prior conservative treatment (if applicable), expected outcome, clinical necessity rationale
2. **The specific clinical justification language** that payers commonly accept (vs. language they reject)
3. **A "must include" documentation checklist** — what evidence to attach
4. **A "red flag" avoidance note** — language that commonly triggers denials (e.g. convenience vs. medical necessity framing)
5. **A peer-to-peer prep template** — if this pre-auth gets denied, the talking points for the peer-to-peer conversation
6. **An "if denied" next-step playbook** — what we do within 24 hours of a denial for this procedure`,
      },
      {
        number: 4,
        title: 'Build a denial triage and categorization protocol',
        description:
          'Not all denials are worth appealing. A triage protocol separates the recoverable from the write-off and routes each to the right workflow.',
        prompt: `I want a denial triage protocol to quickly categorize every denial and route it to the right workflow.

My denial categories (likely):
- Medical necessity
- Lack of prior authorization
- Bundling / coding
- Non-covered service
- Timely filing
- Eligibility / coverage
- Duplicate
- Other

Please create:
1. **A triage decision tree** — denial comes in → category → workflow (appeal, rebill, correct and resubmit, write-off)
2. **A "worth appealing" scoring rubric** — dollar amount threshold, win probability estimate, staff time required
3. **A "rebill vs. appeal" flowchart** — some denials are cheaper to rebill correctly than to appeal
4. **A "corrected claim" protocol** — when a coding or eligibility error caused the denial, how we correct and resubmit
5. **A "write-off authority" matrix** — who can approve a write-off at what dollar threshold
6. **A timely filing protection rule** — how we ensure we never lose a denial to filing deadline expiration`,
      },
      {
        number: 5,
        title: 'Build an appeal letter library',
        description:
          'The top 10 denial reasons cover 80% of denials. Build a template for each so appeals go out same-day, not three weeks later.',
        prompt: `I want an appeal letter library for my top 10 denial reasons.

My top 10 denial reasons (from Step 1 analysis):
[LIST]

For each, please create:
1. **A first-level appeal letter template** — formal, cites policy language when applicable, includes the clinical rationale
2. **A second-level appeal template** (if first is denied) — escalated, may request peer-to-peer
3. **A "required evidence" checklist** — what documentation must accompany each appeal type
4. **A "response deadline" reminder** — how long we have to file, how long the payer has to respond, what we do if they're late
5. **A "win probability" note** — based on industry data, what's the typical appeal success rate for this denial reason
6. **A "when to escalate externally" trigger** — when to engage state insurance department, contract administrator, or patient advocacy

Write the letters in professional medical-legal tone, specific enough to be useful but generic enough that I can customize per patient.`,
      },
      {
        number: 6,
        title: 'Create a monthly payer update ritual',
        description:
          'Payers change policies constantly. A monthly ritual keeps the system from going stale.',
        prompt: `I want a monthly update ritual to keep my pre-auth and denial systems current as payers change policies.

My top 5 payers: [FROM STEP 2]

Please create:
1. **A monthly 45-minute check-in** — review each top payer's recent policy updates, flag new pre-auth requirements, update playbooks
2. **Sources to check each month** — payer provider bulletins, policy update emails, provider portal announcements
3. **A "new denial trend" tracker** — if we see a new denial reason appear 3+ times in a month, it goes on the watch list
4. **A "contract renewal" trigger** — when a payer contract is up for renewal, what we review about that payer's performance
5. **A quarterly team huddle** — billing team reviews the quarter's denial data, identifies the top 2–3 opportunities for the next quarter
6. **A "payer relationship" log** — for each payer, notes on what's working, what's not, which contacts are responsive, which to escalate to`,
      },
      {
        number: 7,
        title: 'Recover aged denials',
        description:
          'Most practices have a pile of old denials that were never appealed. Before they hit timely-filing expiration, run a recovery pass.',
        prompt: `I want a structured approach to recovering denials that were never appealed.

My estimated aged denial pile: $[AMOUNT] or [NUMBER of claims] unappealed
Age of oldest denials: [MONTHS]

Please create:
1. **A prioritization rubric** — sort aged denials by: dollar amount, age (timely filing risk), win probability
2. **A batch appeal workflow** — grouping denials by reason and payer so we can use one template across many claims
3. **A "write-off with intent" protocol** — for denials not worth pursuing, formal write-off with cause documented for billing analytics
4. **A weekly recovery target** — how many aged denials we chase per week, without neglecting current work
5. **A 90-day recovery plan** — realistic target for how much aged denial revenue we can recover, timeline, and staffing plan`,
      },
    ],
    expectations: {
      good: 'Most practices reduce denial rates 25–40% within 90 days and recover 40–60% of aged denial value. The total revenue impact is typically multiples of the staff time invested.',
      ifBad:
        'If denial rates aren’t dropping, look at the root cause — often it’s coding or documentation at the front end, not the pre-auth/appeal process. The system catches what’s fixable in billing; the prevention is upstream in clinical documentation.',
      time: 'Initial setup: 4 hours. Ongoing: 30 min/week + the monthly payer update ritual (45 min). ROI typically visible at 60 days.',
    },
    downloadFile: null,
  },
]

export default medicalPracticeGuides
