const pharmacyGuides = [
  {
    slug: 'pharmacy-taper-schedules',
    tier: 'pro',
    industry: 'pharmacy',
    title: 'Build Taper Schedules in Minutes, Not Manual Math',
    description:
      'A full taper-calculation system — prompt templates for benzodiazepine, opioid, SSRI, and corticosteroid tapers, patient counseling handouts, prescriber communication, and a documented workflow.',
    difficulty: 'Advanced',
    time: '~90 min to set up, 5 min per taper',
    tools: 'ChatGPT or Claude · Your clinical references · Prescriber contact list',
    stripeUrl: null,
    intro:
      'Taper calculations are high-stakes, time-consuming clinical work. Independent pharmacists spend 15–30 minutes per complex taper, often interrupted by dispensing demands, and the risk of a math error in a benzo or opioid taper is serious. This guide builds a structured taper calculation system using AI as a drafting aid — with verification protocols so clinical judgment stays in control. It covers benzodiazepines, opioids, SSRIs/SNRIs, and corticosteroids, with patient-facing counseling handouts and prescriber communication templates. ⚠️ **Critical:** AI is a drafting tool, not a clinical decision-maker. Every taper schedule must be independently verified by a licensed pharmacist against current clinical guidelines before dispensing.',
    outcomes: [
      'Prompt templates for the 4 most common taper types',
      'A verification protocol that catches AI errors before dispensing',
      'Patient counseling handouts for each taper class',
      'A prescriber communication template for taper adjustments',
      'A documented workflow so techs can gather data before you engage',
    ],
    steps: [
      {
        number: 1,
        title: 'Gather taper inputs with a structured intake',
        description: 'Before engaging AI, every taper needs the same inputs. Structure the intake so techs can gather it before the pharmacist touches it.',
        dataNote: 'Required inputs: drug name (generic + brand), current dose and frequency, duration of use, indication, patient age/weight/CrCl, prior taper attempts, symptoms of withdrawal risk, concurrent medications, pharmacy of record, prescriber contact.',
        prompt: `I want a structured intake form my techs can complete before I engage the taper calculation.

My pharmacy:
- Setting: [independent / chain / clinic-adjacent / LTC]
- Typical taper volume: [NUMBER per week]
- My tech skill level: [entry / experienced]

Please create:
1. **A one-page intake form** — fields for every piece of data I need before calculating a taper
2. **A required-field list** — what cannot proceed without
3. **A "red flag" screening list** — patient situations that bypass AI entirely and go straight to the pharmacist (elderly, concurrent CNS depressants, pregnancy, psychiatric comorbidity, prior failed tapers)
4. **A prescriber-confirmation trigger** — when to call the prescriber before proceeding
5. **A tech handoff script** — what the tech tells the patient while the calculation is done
6. **A documentation template** — what gets logged in the pharmacy management system`,
      },
      {
        number: 2,
        title: 'Build taper prompt templates for benzodiazepines',
        description: 'Benzo tapers are the highest-stakes. Use standardized prompts with diazepam-equivalency and symptom-guided adjustments.',
        prompt: `I need a benzodiazepine taper prompt template.

Reference guidelines I use: [e.g. Ashton Manual, state taper guidelines, CDC for concurrent opioid tapers]
My pharmacy's protocol preferences: [e.g. always convert to diazepam for long-half-life stabilization]

Please create:
1. **A benzodiazepine taper prompt** with fields for: current drug, dose, duration, indication, patient factors
2. **A diazepam equivalency reminder** the prompt asks AI to reference
3. **A default reduction rate** — typically 10–25% every 1–2 weeks for stable patients, slower for long-term use
4. **Symptom-guided pause triggers** — when the schedule should pause or reverse
5. **Output format** — week-by-week dose schedule, total duration, dose-by-dose breakdown including tablet strengths and quantities
6. **A "patient complexity" flag** — circumstances where the AI output must be reviewed by the pharmacist at every step (elderly, long-term use >6 months, concurrent opioid, psychiatric history)
7. **Disclaimers the output includes** — that this is a drafting aid, clinical judgment required, prescriber must approve`,
      },
      {
        number: 3,
        title: 'Build taper prompts for opioids, SSRIs/SNRIs, and corticosteroids',
        description: 'Different drug classes have different taper logic. Build class-specific templates.',
        prompt: `I need taper prompt templates for opioids, SSRIs/SNRIs, and corticosteroids.

For each class, reference the following guidelines:
- Opioids: CDC Guideline for Prescribing Opioids (2022 update), HHS tapering guide
- SSRIs/SNRIs: Horowitz hyperbolic tapering approach, discontinuation syndrome considerations
- Corticosteroids: HPA axis recovery considerations, duration-based stratification

For each class, please create:
1. **A prompt template** with class-specific inputs (e.g. opioids need MME, corticosteroids need duration >3 weeks trigger)
2. **Default reduction logic** for that class (opioids: typically 10% every 2–4 weeks; SSRIs: hyperbolic reductions to account for receptor occupancy; corticosteroids: tapered over duration of use)
3. **Class-specific symptom monitoring** that the output includes
4. **Adjunct medication considerations** (e.g. clonidine for opioid withdrawal, fluoxetine bridge for short-half-life SSRI)
5. **Output format** — same week-by-week schedule structure as benzodiazepines
6. **Class-specific safety flags** — situations requiring immediate pharmacist review`,
      },
      {
        number: 4,
        title: 'Build a verification protocol',
        description: 'Every AI-generated taper schedule must be verified by the pharmacist before dispensing. Structure that verification so it’s fast and thorough.',
        prompt: `I want a verification protocol for AI-generated taper schedules.

Based on typical AI failure modes (wrong equivalency conversions, hallucinated tablet strengths, ignored renal adjustments, outdated guideline references), please create:

1. **A 5-minute verification checklist** — specific checks to run on every AI-generated schedule
2. **A math spot-check** — pick 3 steps from the schedule and verify the dose math manually
3. **A tablet-availability check** — verify the schedule uses commercially available strengths (AI often invents split tablets or fractional doses that don't exist)
4. **A cumulative dose check** — verify the sum of daily doses matches expected total
5. **A guideline-reference sanity check** — does the taper rate match current guidelines for this drug
6. **A "sign-off" documentation** — what the pharmacist documents when they verify a schedule
7. **A red-flag rejection protocol** — when to reject the AI output entirely and build the schedule manually`,
      },
      {
        number: 5,
        title: 'Create patient counseling handouts',
        description: 'A written handout dramatically improves adherence. One per drug class, tuned to patient literacy.',
        prompt: `I want patient counseling handouts for each taper class.

My typical patient reading level: [4th-6th grade for clinical handouts]
My languages served: [English only / Spanish / other]

For each class (benzodiazepines, opioids, SSRIs/SNRIs, corticosteroids), please create:
1. **A one-page patient handout** — what the taper is, why we're doing it, what to expect
2. **A "symptoms to call us about" section** — mild (expected), moderate (call pharmacy), severe (call prescriber or go to ER)
3. **A weekly checklist** — what the patient tracks
4. **A "if you miss a dose" section** — specific guidance by class
5. **A "when you finish" section** — post-taper follow-up
6. **A plain-language note on how to take** — with food, time of day, interactions to avoid
7. **Contact info block** — pharmacist direct, after-hours guidance

Format: readable, large font, warm but clear, no medical jargon. If Spanish version requested, provide both.`,
      },
      {
        number: 6,
        title: 'Build a prescriber communication template',
        description: 'When the pharmacist sees a taper issue, clear prescriber communication protects the patient and the pharmacy.',
        prompt: `I want prescriber communication templates for taper-related outreach.

Please create:
1. **A "taper recommendation" message** — when a long-term user is on a drug that should have a documented taper plan; suggest one
2. **A "dose adjustment needed" message** — when the current taper rate is too fast/slow for what I'm seeing
3. **A "pause the taper" message** — when symptoms suggest we should pause or reverse
4. **A "post-taper follow-up" message** — coordination for the patient's post-taper period
5. **An "acute concern" script** — when something is urgent and requires same-day contact
6. **A "declining to dispense" template** — when the taper as prescribed is outside safety parameters and we need a conversation before dispensing (rare but critical)

For each: professional tone, patient-specific details the pharmacist fills in, clear ask.`,
      },
      {
        number: 7,
        title: 'Document the full taper workflow',
        description: 'The system is only sustainable if documented. One page, on the counter.',
        prompt: `I want a one-page SOP for the full taper workflow.

My team: [pharmacist + X techs]
My volume: [tapers per week]

Please create:
1. **Workflow diagram** — intake → tech gathers data → pharmacist reviews → AI drafts → pharmacist verifies → counseling → dispense → follow-up
2. **Step-by-step description** — 1 sentence per step, including who does what
3. **Time budget** — how long each step should take
4. **Escalation rules** — when the tech stops and gets the pharmacist
5. **Documentation standards** — what goes in the PMS at each step
6. **A "uncertainty protocol"** — what to do when the AI output doesn't match expectations
7. **A monthly review prompt** — periodically review recent tapers, look for patterns, update templates`,
      },
    ],
    expectations: {
      good: 'Experienced pharmacists report taper calculation time drops from 20–30 min to 5–10 min per patient, with the pharmacist spending more time on clinical verification and counseling instead of math. Clinical safety is preserved because the verification protocol is mandatory.',
      ifBad: 'If AI outputs are unreliable, it’s almost always because the intake was incomplete. Invest in Step 1 until tech data collection is airtight.',
      time: 'Initial setup: 90 min. Per-taper time: 5–10 min. Monthly template review: 30 min.',
    },
    downloadFile: null,
  },

  {
    slug: 'pharmacy-compliance-tracking',
    tier: 'pro',
    industry: 'pharmacy',
    title: 'Stay Ahead of Compliance — Regulatory Tracking with AI',
    description:
      'A compliance monitoring system — state Board of Pharmacy updates, DEA changes, payer policy monitoring, USP revisions, and a documented internal audit checklist.',
    difficulty: 'Advanced',
    time: '~3 hours to set up, 1 hour/week ongoing',
    tools: 'ChatGPT or Claude · State BOP bulletins · DEA resources · Internal policy docs',
    stripeUrl: null,
    intro:
      'Pharmacy regulation changes constantly. State Boards of Pharmacy publish updates monthly, DEA modifies scheduling, USP revisions impact compounding, and payers roll out new pre-auth rules. Missing a single change can result in fines, license issues, or patient harm. Most independent pharmacies rely on their state association newsletter and miss half the relevant updates. This guide builds a structured compliance tracking system using AI to summarize, route, and flag changes — plus a monthly internal audit checklist to verify ongoing compliance. ⚠️ **Note:** AI is a research aid, not a compliance officer. All regulatory interpretations must be verified against primary sources and legal counsel where appropriate.',
    outcomes: [
      'A monthly regulatory tracking workflow covering state BOP, DEA, USP, and payers',
      'A summary-and-route protocol that sends each update to the right team member',
      'An internal policy update template when rules change',
      'A quarterly audit checklist covering high-risk compliance areas',
      'A training log for staff education on regulatory changes',
    ],
    steps: [
      {
        number: 1,
        title: 'Inventory your compliance surface area',
        description: 'Every pharmacy has the same broad categories but state-specific rules. Map yours before building the tracking system.',
        prompt: `I want to inventory my pharmacy's compliance surface area.

My pharmacy:
- State: [STATE]
- Setting: [independent / chain / LTC / specialty / compounding / mail-order]
- Services: [retail / compounding / vaccinations / travel / specialty / clinical]
- CII–V dispensing: [yes/no + rough volume]
- State boards and agencies that regulate me: [LIST]
- Federal agencies: [DEA, FDA, HHS/OIG as applicable]

Please create:
1. **A compliance inventory** — every regulatory domain I'm subject to
2. **For each domain**: source of updates, typical update frequency, who in my pharmacy should own tracking
3. **High-risk areas** — where non-compliance has the most severe consequences
4. **State-specific vs federal** — which updates apply to all pharmacies vs. my state specifically
5. **Specialty considerations** — if I compound/vaccinate/do specialty, additional areas
6. **Baseline audit** — the questions I should answer right now to establish a compliance baseline`,
      },
      {
        number: 2,
        title: 'Build a monthly regulatory tracking workflow',
        description: 'A structured monthly review keeps you ahead instead of reactive.',
        prompt: `I want a monthly regulatory tracking workflow.

My time budget: [e.g. 1 hour/week, concentrated on one day]

Please create:
1. **Sources to check monthly** — state BOP website/bulletins, DEA news, FDA guidance, NABP, USP revisions, major payer provider bulletins
2. **A structured review template** — what to extract from each source: change summary, effective date, affected services, required action
3. **Summary prompt** — when I paste a bulletin/announcement, AI extracts the key points, affected services, and required actions in a standard format
4. **Routing rules** — based on which area is affected, who in my pharmacy needs to know and act
5. **A "nothing this month" log entry** — even when no changes, document that we checked
6. **A "quarterly deep dive"** — once a quarter, go deeper on emerging areas (PMP reporting, 340B, etc.)`,
      },
      {
        number: 3,
        title: 'Write the summary-and-route protocol',
        description: 'Every update needs a consistent format so the right person acts on it without rereading.',
        prompt: `I want a summary-and-route protocol for regulatory updates.

My team: [pharmacist-in-charge, staff pharmacists, techs, compliance-lead]

Please create:
1. **Standard summary format** — 1-sentence change, effective date, who's affected, required action, deadline
2. **Routing matrix** — which type of change goes to which role for action
3. **"Urgent" vs "routine" classification** — same-day action vs. scheduled policy update
4. **A weekly digest template** — compile all updates for weekly team review
5. **An escalation protocol** — for changes requiring legal counsel or state BOP clarification
6. **A "did we act on it" tracker** — 30 days later, verify we actually implemented`,
      },
      {
        number: 4,
        title: 'Create an internal policy update template',
        description: 'When a regulation changes, the internal SOP must change too. Have the template ready.',
        prompt: `I want an internal policy update template for when regulations change.

Please create:
1. **A one-page policy update template** — change summary, citation, effective date, updated procedure, staff training required, documentation location
2. **A version-control standard** — how we number policy versions, archive old versions
3. **Staff notification template** — email/posting when a policy changes, acknowledgment required
4. **A training verification log** — track that each staff member completed training
5. **A first-30-days compliance check** — verify the change is being followed in practice
6. **A quarterly policy review cycle** — review all active policies, retire outdated ones`,
      },
      {
        number: 5,
        title: 'Build a quarterly internal audit checklist',
        description: 'An internal audit every quarter catches drift before a state inspection does.',
        prompt: `I want a quarterly internal audit checklist covering my highest-risk compliance areas.

Please create:
1. **Controlled substance audit** — inventory reconciliation, perpetual inventory, loss/theft reporting, prescription validity checks, DEA Form 222 / CSOS records
2. **Dispensing compliance** — patient counseling documentation, ID verification for CII, partial fills, early refill flags
3. **Record retention audit** — ensuring records kept for state-required duration (typically 2–5 years depending on state)
4. **Licensing audit** — pharmacist and intern licenses current, tech registrations, pharmacy permit, DEA registration
5. **USP-compliance audit** (if compounding) — USP 795/797/800 as applicable
6. **PMP compliance** — queries run per state requirement, documentation
7. **340B audit** (if applicable) — patient eligibility, replenishment compliance
8. **HIPAA audit** — PHI handling, recent breaches or near-misses, training currency
9. **A scoring rubric** — pass/remediate/fail for each area
10. **A remediation timeline** — how long we have to fix each type of finding`,
      },
      {
        number: 6,
        title: 'Install a staff training log and refresh cycle',
        description: 'Documentation of training is often what state boards ask for first. Build the log now.',
        prompt: `I want a staff training log and refresh cycle for compliance topics.

My team: [pharmacists, techs]

Please create:
1. **A training log template** — one row per staff member, columns for each required training, completion date, refresh date, attestation
2. **Required training topics by role** — pharmacist vs tech
3. **Initial onboarding module** — what every new hire completes before dispensing
4. **Annual refresh list** — topics that require annual re-training (HIPAA, controlled substance, PMP use)
5. **"New regulation" training trigger** — when a regulatory change requires staff training, how it's delivered and documented
6. **A 5-minute weekly huddle** — brief regulatory topic of the week, logged, builds continuous awareness`,
      },
    ],
    expectations: {
      good: 'Pharmacies that implement this system typically catch all material regulatory changes within 30 days of publication, reducing inspection findings and eliminating reactive compliance scrambles.',
      ifBad: 'If you miss a change, it’s usually because the source list wasn’t comprehensive. Re-review Step 1 quarterly.',
      time: 'Initial setup: 3 hours. Weekly: 1 hour. Quarterly audit: 4 hours. Annual deep audit: 1 full day.',
    },
    downloadFile: null,
  },

  {
    slug: 'pharmacy-patient-counseling-docs',
    tier: 'pro',
    industry: 'pharmacy',
    title: 'Create Patient Counseling Documents That Actually Get Read',
    description:
      'A counseling handout library for high-risk medications — plain-language handouts, adherence aids, specialty drug counseling, and a verification protocol so nothing slips through.',
    difficulty: 'Intermediate',
    time: '~4 hours to build library, 10 min/new med',
    tools: 'ChatGPT or Claude · Current drug monographs · Patient demographics',
    stripeUrl: null,
    intro:
      'Patient counseling docs that get handed out with prescriptions are mostly ignored — too much text, too much jargon, too generic. But the counseling requirement is real and the adherence impact of good counseling documents is measurable. This guide builds a library of plain-language counseling docs for high-risk medications, adherence aids, specialty drug counseling, and a verification protocol. Plus, every counseling doc is designed for the patient population you actually serve.',
    outcomes: [
      'A counseling handout library for your top 30 high-risk medications',
      'Adherence aids (dosing schedules, missed-dose guidance, symptom logs)',
      'Specialty drug counseling docs with patient support resource linking',
      'A verification protocol to ensure every high-risk Rx gets appropriate counseling',
      'A quarterly review for library updates',
    ],
    steps: [
      {
        number: 1,
        title: 'Identify your top 30 high-risk medications for counseling',
        description: 'Not every Rx needs a custom handout. Focus on the highest-risk, highest-volume, or most-misunderstood.',
        prompt: `I want to identify my top 30 medications that should have dedicated counseling documents.

My pharmacy:
- Dispensing volume: [per week]
- Notable classes dispensed: [LIST — e.g. anticoagulants, diabetes, HIV, psych, oncology, compounded]
- Patient population: [demographics, literacy considerations]

Please help me:
1. **List 30 high-risk medications** that should have counseling docs — generally: anticoagulants, insulin, opioids, benzodiazepines, immunosuppressants, biologics, first-line HIV/hepatitis drugs, high-risk psych meds, CYP450-heavy drugs, specialty drugs
2. **Prioritize** — top 10 to build first, next 20 in a second wave
3. **Group by class** — so the handouts share templates
4. **Flag any class-specific literacy considerations** — elderly patients, low-vision, language needs
5. **Flag specialty drugs needing manufacturer resources** — where the handout should link to copay cards or patient support programs`,
      },
      {
        number: 2,
        title: 'Build the counseling handout template',
        description: 'One template, 30+ handouts. Consistency matters more than custom design per drug.',
        prompt: `I want a standard counseling handout template I can fill in for every high-risk medication.

Target reading level: [6th grade, or specify]
Language versions: [English only / + Spanish / + other]

Please create a template with these sections:
1. **Drug name** — generic and brand, clearly labeled
2. **What it's for** — in patient language, one sentence
3. **How to take** — dose, frequency, with/without food, time of day, special instructions
4. **What to expect** — typical onset, common feelings during first week
5. **Side effects** — color-coded: minor (usually fine), moderate (call pharmacy), severe (call prescriber or ER)
6. **Missed dose** — specific guidance, not generic
7. **Drug interactions** — top 5 things to avoid, with clarity on OTC/herbal/foods
8. **When to call us** — specific triggers, our phone number prominently
9. **Refill reminders** — when to request, how
10. **A tear-off pocket card** — the 3 most important things on a card the patient keeps in their wallet

Format: warm, clear, large-font, uses active voice ("take this with food" not "administration with food is recommended").`,
      },
      {
        number: 3,
        title: 'Build the first 10 counseling docs',
        description: 'Draft the top 10 using the template. These are the highest-leverage documents.',
        prompt: `Using the template from Step 2, please draft counseling handouts for my top 10 high-risk medications.

My top 10: [LIST FROM STEP 1]
My patient population context: [e.g. urban, low-income, English/Spanish bilingual]

For each drug, please draft:
1. The full one-page handout following the template
2. The tear-off pocket card
3. Any drug-specific "critical" warning that belongs on page 1 (e.g. warfarin: "green vegetables are okay but keep your amount consistent")
4. A pharmacist talking-points list — the 3–4 things the pharmacist should emphasize verbally at dispense, in addition to the handout
5. A verification question the pharmacist asks the patient to confirm understanding (teach-back)

Keep language simple, warm, action-oriented. Avoid jargon. Specific and concrete beats general and vague.`,
      },
      {
        number: 4,
        title: 'Add adherence aids',
        description: 'Counseling docs tell patients what to do. Adherence aids help them actually do it.',
        prompt: `I want to add adherence aids that complement the counseling docs.

Please create:
1. **A weekly dosing calendar template** — printable, fillable by patient or pharmacist
2. **A symptom-tracker log** — for high-risk drugs (anticoagulants, psych, chemo) so patient brings data to follow-ups
3. **A "what's your routine" conversation script** — pharmacist helps patient tie the med to existing habit (morning coffee, teeth brushing)
4. **A medication reminder app recommendation list** — curated, simple, free/low-cost
5. **A "if you miss 3+ doses" protocol** — when patient reports missed doses at refill, what the pharmacist does
6. **A caregiver handout** — for patients where a family member manages meds; parallel content, different audience
7. **A refill-sync enrollment offer** — make it easy for patients on 3+ chronic meds to sync refills`,
      },
      {
        number: 5,
        title: 'Handle specialty drug counseling',
        description: 'Specialty drugs require more — patient support programs, injection training, REMS enrollment, cold-chain guidance.',
        prompt: `I want specialty drug counseling handouts.

My specialty dispensing (if any): [LIST classes — e.g. HIV, hepatitis, oncology, autoimmune, infertility]

For each specialty class, please create:
1. **A specialty-specific handout** — includes the standard template plus: injection training resources, REMS requirements (if any), patient support program contact, typical patient journey
2. **A "first dose" protocol** — what the pharmacist reviews before first dispense (often requires extra time)
3. **A manufacturer patient-support linking script** — the pharmacist offers to help enroll the patient in copay card/patient assistance
4. **A "what to expect" timeline** — first week, first month, three-month markers for specialty therapies
5. **A clinical monitoring reminder** — lab work the patient needs before/during therapy, and who orders it
6. **Cold-chain / storage instructions** — refrigeration, handling, travel`,
      },
      {
        number: 6,
        title: 'Install a counseling verification protocol',
        description: 'The handout is useless if the patient doesn’t receive it. Verify at dispense.',
        prompt: `I want a verification protocol so every high-risk dispense receives appropriate counseling.

Please create:
1. **A "high-risk flag" list** — meds/scenarios where the pharmacist must counsel before dispense (first fill, any of my 30 handout drugs, any med combo on our interaction watchlist)
2. **A counseling documentation** — what gets logged in the PMS at the time of counsel
3. **A teach-back verification** — standard question the pharmacist asks the patient to confirm understanding
4. **A handout-tracking workflow** — the tech preps the handout with the Rx so it's physically in the bag
5. **A "refused counseling" protocol** — state-compliant documentation when patient declines
6. **A weekly audit** — spot-check 10 random high-risk dispenses, verify handout was given and counseling documented`,
      },
      {
        number: 7,
        title: 'Build a quarterly library review',
        description: 'Drug information changes. A quarterly review keeps the library current.',
        prompt: `I want a quarterly review ritual for my counseling library.

Please create:
1. **A quarterly list refresh** — re-evaluate the top 30; add/remove based on current volume and risk profile
2. **A drug-info update check** — significant label changes, new warnings, new interactions since last review
3. **A patient feedback review** — any "I didn't understand" complaints, adjust handouts
4. **A pharmacist team huddle** — 30 min quarterly, discuss counseling challenges, share tips
5. **An annual literacy review** — once a year, have a non-medical friend read 5 random handouts and mark confusing parts`,
      },
    ],
    expectations: {
      good: 'Pharmacies that implement this system report measurable improvements in adherence (especially on complex regimens), fewer "I didn\'t know" phone calls, and better patient satisfaction scores.',
      ifBad: 'If handouts are still being ignored, the problem is usually the dispense workflow — handout isn\'t physically with the Rx. Fix the workflow before blaming the content.',
      time: 'Initial library build: 4 hours. Per new drug: 10 min. Quarterly review: 1 hour.',
    },
    downloadFile: null,
  },

  {
    slug: 'pharmacy-controlled-substance-inventory',
    tier: 'pro',
    industry: 'pharmacy',
    title: 'Optimize Inventory and Controlled Substance Workflows',
    description:
      'A full inventory system — fast-mover stocking, slow-mover identification, controlled substance reconciliation, DEA-compliant documentation, and a loss prevention protocol.',
    difficulty: 'Advanced',
    time: '~4 hours to set up, 15 min/day ongoing',
    tools: 'ChatGPT or Claude · Your PMS reports · DEA guidance',
    stripeUrl: null,
    intro:
      'Inventory management in an independent pharmacy is a tension: too much capital tied up in slow-movers, too many "out of stock" moments on fast-movers, and controlled substances add an entirely separate compliance layer where mistakes become DEA issues. This guide builds a full inventory system — fast-mover stocking formula, slow-mover identification, CII–V reconciliation workflow, DEA-compliant documentation, and a loss-prevention protocol. The goal is fewer stockouts, less dead inventory, and zero controlled-substance compliance issues.',
    outcomes: [
      'A fast-mover stocking formula that reduces stockouts without over-capitalizing',
      'A slow-mover identification and remediation protocol',
      'A CII–V reconciliation workflow with documentation',
      'A loss-prevention protocol (receipt, destruction, theft/loss)',
      'A monthly inventory review and quarterly full audit',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current inventory performance',
        description: 'Know your turn rate, carry cost, and stockout rate before optimizing.',
        dataNote: 'Pull from your PMS: 90 days of inventory on-hand value, 90 days of purchases, 90 days of dispenses, stockout incidents, slow-mover report (items not dispensed in 60+ days).',
        prompt: `I want to audit my inventory performance.

My pharmacy:
- Dispensing volume: [per week]
- Current inventory on hand value: $[AMOUNT]
- Monthly purchases: $[AMOUNT]
- Stockout incidents per month: [NUMBER if tracked]
- PMS: [NAME]

From my reports:
[PASTE INVENTORY / SALES DATA]

Please analyze:
1. **Inventory turn rate** — how many times per year inventory turns; benchmark
2. **Dead stock value** — items not dispensed in 90+ days
3. **Over-stock candidates** — items with 60+ days of supply on hand
4. **Under-stock candidates** — items with frequent stockouts
5. **Category breakdown** — fast vs slow movers by therapeutic class
6. **Capital tied up** — % of inventory value that's genuinely productive vs. dead
7. **Top 3 opportunities** — fix these first to free up capital and reduce stockouts`,
      },
      {
        number: 2,
        title: 'Build a fast-mover stocking formula',
        description: 'Your top 20% of SKUs are 80% of your dispenses. Get those right.',
        prompt: `I want a stocking formula for my fast-moving items.

My typical reorder cycle: [daily / weekly / varies]
My primary wholesaler: [NAME]
My backup wholesaler: [NAME]

Please create:
1. **A fast-mover identification rule** — SKUs dispensed X+ times per week
2. **A target days-of-supply** — typically 5–10 days for fast-movers, given wholesaler delivery frequency
3. **A reorder trigger formula** — when to reorder based on on-hand + days-of-supply target
4. **A seasonal adjustment** — meds with seasonal demand patterns (antibiotics in flu season, allergy meds in spring)
5. **A substitute-readiness list** — generic alternatives ready when a brand goes OOS
6. **A stockout response protocol** — when a fast-mover stocks out, same-day response (partial fill, borrow from other pharmacy, expedited order)
7. **A weekly fast-mover review** — 15 minutes to verify top 50 are healthy`,
      },
      {
        number: 3,
        title: 'Identify and remediate slow-movers',
        description: 'Dead stock is capital that could be working. Systematic removal frees cash.',
        prompt: `I want a slow-mover identification and remediation protocol.

My slow-mover threshold (e.g. not dispensed in 60 days): [SPECIFY]

Please create:
1. **Monthly slow-mover report criteria** — what shows up
2. **Remediation options** — return to wholesaler (if eligible), transfer to sister pharmacy, sell to secondary market, donate (if permitted), destroy (controlled substances)
3. **A return-to-wholesaler protocol** — check return eligibility, wholesaler credit process
4. **A "last dispense" threshold for removal** — 180 days, 365 days; when we stop stocking
5. **A specialty/niche protection** — items we stock despite low volume (HIV meds, rare diseases, chronic regulars)
6. **A discontinuation communication** — when we stop stocking an item, notify affected patients and prescribers
7. **A quarterly slow-mover review** — clean out quarterly, not monthly, to avoid whiplash`,
      },
      {
        number: 4,
        title: 'Build a CII–V reconciliation workflow',
        description: 'Controlled substance reconciliation is DEA-mandated and audit-critical. Tight workflow = zero issues.',
        prompt: `I want a controlled substance reconciliation workflow.

My CII–V volume: [approximate per week]
My perpetual inventory system: [what I use]
My state PMP requirements: [overview]

Please create:
1. **Daily reconciliation** — CII end-of-day count vs. system, documented, discrepancies escalated immediately
2. **CII–V perpetual inventory standard** — real-time count maintenance
3. **Receipt protocol** — how CIIs are received, logged, and placed in secure storage (DEA Form 222 / CSOS)
4. **Dispense documentation** — what gets logged at every CII dispense, pharmacist sign-off
5. **Biennial inventory** — DEA-required, every 2 years, standard protocol
6. **Loss/theft reporting** — DEA Form 106 process, timeline (within 1 business day of discovery)
7. **Destruction protocol** — DEA Form 41 for expired/damaged CIIs, witness requirements, timeline
8. **Audit trail** — what documents I preserve for 2–5 years (state-dependent)
9. **Staff access controls** — who can access CII storage, how access is logged`,
      },
      {
        number: 5,
        title: 'Install a loss-prevention protocol',
        description: 'Most pharmacy losses aren’t dramatic thefts — they’re shrinkage, miscounts, and unreported errors.',
        prompt: `I want a loss prevention protocol covering shrinkage, miscounts, and errors.

Please create:
1. **Daily cash/scrip reconciliation** — same-day, discrepancies flagged
2. **Weekly high-risk inventory spot-check** — random sample of 10 high-value items, verify on-hand matches system
3. **Monthly error log review** — wrong-drug, wrong-dose, wrong-patient; root cause and pattern analysis
4. **A "near miss" log** — errors caught before dispense; tracked to spot workflow issues
5. **An anonymous reporting mechanism** — staff can report concerns without fear
6. **Staff background and reference checks** — standard hiring protocol for pharmacy staff
7. **Camera and physical security review** — annual audit
8. **A "suspicious activity" protocol** — patterns that warrant escalation (early refills, prescriber shopping, forged Rx)`,
      },
      {
        number: 6,
        title: 'Install a monthly inventory review and quarterly audit',
        description: 'A structured review cadence keeps inventory healthy and compliance tight.',
        prompt: `I want a monthly inventory review and quarterly full audit.

Please create:
1. **Monthly 1-hour review** — fast-mover health, slow-mover list, inventory turns, capital trend, any CII irregularities
2. **Monthly reorder calibration** — adjust trigger thresholds based on dispensing shifts
3. **Quarterly full audit** — physical count of high-value and all controlled substance inventory, P&L reconciliation
4. **Annual CII biennial-equivalent** — even if not DEA-required that year, run the full count
5. **A "findings register"** — every discrepancy logged, remediated, and tracked to closure
6. **A year-end inventory report** — annual performance metrics, goals for next year`,
      },
    ],
    expectations: {
      good: 'Most independent pharmacies free up 15–25% of inventory capital within 90 days without increasing stockouts. Controlled substance compliance reaches "inspection-ready at any time" status within 60 days.',
      ifBad: 'If your turns aren’t improving, the issue is usually that slow-movers aren’t being removed aggressively enough. Commit to the quarterly cleanup.',
      time: 'Initial setup: 4 hours. Daily: 15 min. Monthly: 1 hour. Quarterly audit: 4 hours.',
    },
    downloadFile: null,
  },
]

export default pharmacyGuides
