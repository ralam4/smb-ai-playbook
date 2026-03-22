const guides = [
  {
    slug: 'barber-chair-utilization',
    tag: 'Barbershop',
    tagColor: '#2D6A4F',
    title: 'Fill Your Empty Chairs',
    description: 'Analyze your booking patterns to identify slow slots and draft targeted promos that bring clients back.',
    difficulty: 'Beginner',
    time: '~20 min',
    tools: 'ChatGPT or Claude \u00B7 Your booking data',
    intro: 'Empty chairs during slow hours are one of the biggest margin leaks in any barbershop. Most owners know which days are slow \u2014 but not exactly which slots, which barbers, or which clients are most likely to rebook. This guide walks you through using AI to analyze your booking data, identify your dead zones, and draft targeted messages to fill them.',
    outcomes: [
      'A clear breakdown of your slowest booking slots by day and time',
      'Insight into which clients haven\u2019t returned in 60+ days',
      'A ready-to-send re-engagement message you can text or post',
    ],
    steps: [
      {
        number: 1,
        title: 'Get your data out of your booking app',
        description: 'Most booking tools (Square Appointments, Booksy, Vagaro, StyleSeat) let you export appointment history as a CSV. Go to your reports section and export the last 90 days of appointments. You\u2019ll need: date, time, barber name, service type, and client name/ID.',
        dataNote: 'You don\u2019t need to clean the file. Just export it as-is and paste the relevant columns. If your tool doesn\u2019t allow export, screenshot your busiest and slowest weeks side by side \u2014 that works too.',
      },
      {
        number: 2,
        title: 'Find the slots that stay empty',
        description: 'Paste your data into ChatGPT or Claude and use the prompt below. You\u2019re looking for patterns \u2014 specific days, times, or barbers with consistently low utilization.',
        prompt: `I'm going to paste my barbershop appointment data for the last 90 days.
Please help me:
1. Identify which days of the week have the lowest booking volume
2. Identify which time slots (morning, midday, afternoon, evening) are consistently underbooked
3. Flag any barbers who have significantly more empty slots than others
4. Summarize the top 2-3 patterns I should pay attention to

Here is my data:
[PASTE YOUR CSV DATA OR MANUALLY LIST YOUR WEEKLY SCHEDULE HERE]`,
      },
      {
        number: 3,
        title: 'Build your re-engagement list',
        description: 'Now use the same data to find clients who visited once or twice but haven\u2019t returned in 60+ days. These are your warmest leads \u2014 they\u2019ve already been in the chair.',
        prompt: `Using the same appointment data, please:
1. Identify clients who visited at least once but have not had an appointment in the last 60 days
2. Group them by how recently they last visited (60-90 days ago, 90-120 days ago, 120+ days ago)
3. For each group, note how many visits they had total before going quiet

I want to prioritize who to reach out to first.`,
      },
      {
        number: 4,
        title: 'Write the message',
        description: 'Use the segment you want to target first and generate a message you can send via text, Instagram DM, or post as a story. Keep it personal, not promotional.',
        prompt: `I want to reach out to clients who haven't visited my barbershop in 60-90 days.
My shop is called [SHOP NAME] and I'm located in [CITY].
My most popular service is [SERVICE, e.g. "a fresh fade"] and I'm currently [open / running a slow week / have morning availability].

Please write:
1. A short text message (under 160 characters) I can send directly
2. A slightly longer Instagram caption version
3. A subject line if I wanted to send this as an email

Keep it warm and personal \u2014 like it's coming from the barber, not a marketing department.`,
      },
    ],
    expectations: {
      good: 'The data analysis will surface patterns you already sensed but never quantified.',
      ifBad: 'The re-engagement message will need one round of editing to match your voice \u2014 use it as a starting draft, not a final send.',
      time: 'Most shop owners who run this see a 10\u201320% response rate on direct outreach to lapsed clients.',
    },
    downloadFile: 'barber-chair-utilization.md',
    problems: ['get-customers'],
  },
  {
    slug: 'bakery-waste-reduction',
    tag: 'Bakery & Caf\u00E9',
    tagColor: '#1D3557',
    title: 'Stop Throwing Away Margin',
    description: 'Use your daily sales data to predict prep quantities, reduce end-of-day waste, and protect your margins.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude \u00B7 Your POS sales data',
    intro: 'For any bakery or caf\u00E9, waste is a silent margin killer. Over-prep means product in the trash at close. Under-prep means lost sales and frustrated customers. Most owners manage this on instinct \u2014 but your POS or sales log already has the data to do better. This guide walks you through using AI to turn your sales history into smarter daily prep targets.',
    outcomes: [
      'A daily prep quantity guide based on your actual sales patterns',
      'Identification of your highest-waste items',
      'A simple weekly planning prompt you can reuse every Sunday',
    ],
    steps: [
      {
        number: 1,
        title: 'Get your item-level sales history',
        description: 'From your POS system (Square, Toast, Clover, Lightspeed), export item-level sales for the last 60\u201390 days. You want to see: item name, quantity sold, date, and day of week. Even a rough weekly average per item works if you can\u2019t export daily data.',
        dataNote: 'If you can\u2019t export easily, spend 10 minutes writing down your rough daily averages for your top 10 items by memory. Approximate data still produces useful output.',
      },
      {
        number: 2,
        title: 'Identify what\u2019s getting thrown away',
        description: 'Paste your data and ask the AI to find the items and days where you\u2019re likely over-prepping. The goal is a short list \u2014 not a perfect analysis.',
        prompt: `I'm going to paste sales data from my bakery/caf\u00E9. Please help me:
1. Identify which items have the most day-to-day variability in sales volume
2. Flag items that sell well early in the week but drop off by Thursday/Friday (or vice versa)
3. Identify my top 5 items by volume and suggest a daily prep range (min/max) based on the data
4. Note any patterns by day of week I should be aware of

Here is my sales data:
[PASTE YOUR DATA HERE]`,
      },
      {
        number: 3,
        title: 'Turn patterns into a prep plan',
        description: 'Once you have the patterns, generate a simple weekly prep guide you can print or share with your team.',
        prompt: `Based on the sales patterns we identified, please create a simple weekly prep guide for my top 10 items.

Format it as a table with:
- Item name
- Monday prep target
- Tuesday-Thursday prep target
- Friday-Saturday prep target
- Sunday prep target (if applicable)
- Notes on variability

My shop hours are [HOURS]. We prep [once/twice] a day starting at [TIME].`,
      },
      {
        number: 4,
        title: 'Make this a repeatable habit',
        description: 'Save this prompt and run it every Sunday evening with your previous week\u2019s data. It takes about 10 minutes and keeps your prep targets calibrated.',
        prompt: `Here is my item sales data from last week [PASTE DATA].

Please:
1. Compare this week's actual sales to my standard prep targets
2. Flag any items that significantly over or under-performed
3. Suggest adjusted prep quantities for next week based on this data
4. Note anything unusual I should account for (upcoming holidays, weather patterns, local events I mentioned)

My upcoming week has the following notes: [ADD ANY CONTEXT \u2014 holiday weekend, local event, etc.]`,
      },
    ],
    expectations: {
      good: 'Your first run through this will take about 25 minutes. After that, the weekly planning prompt takes 10 minutes on Sunday.',
      ifBad: 'If the output seems too generic, add more specific data \u2014 even approximate daily counts for your top items help significantly.',
      time: 'Most operators see meaningful waste reduction within 2\u20133 weeks of following adjusted prep targets consistently.',
    },
    downloadFile: 'bakery-waste-reduction.md',
    problems: ['fix-profits'],
  },
  {
    slug: 'doctor-noshow-flow',
    tag: 'Medical Practice',
    tagColor: '#C4622D',
    title: 'Cut No-Shows and Recover Lost Appointments',
    description: 'Build a simple AI-assisted reminder and follow-up flow that reduces no-shows and fills cancelled slots.',
    difficulty: 'Intermediate',
    time: '~20 min',
    tools: 'ChatGPT or Claude \u00B7 Your scheduling data',
    intro: 'No-shows are one of the most costly and frustrating problems in small medical practices. A missed appointment isn\u2019t just lost revenue \u2014 it\u2019s a slot that could have gone to a patient who needed it. Most practices don\u2019t have the staff bandwidth to build a proper reminder and follow-up system. This guide shows you how to use AI to design that system and draft the messages, so your front desk just has to send them.',
    outcomes: [
      'A simple 3-touch reminder sequence you can implement this week',
      'Ready-to-send message templates for reminder, day-of, and follow-up',
      'A prompt for analyzing which appointment types or days have the highest no-show rates',
    ],
    steps: [
      {
        number: 1,
        title: 'Find where the problem is worst',
        description: 'Before building a reminder system, identify which appointment types, days, or patient segments have the highest no-show rates. Pull 60\u201390 days of appointment data from your scheduling system (most EHRs and scheduling tools have a basic no-show report).',
        dataNote: 'You need: appointment date, appointment type, scheduled time, and whether the patient showed, cancelled, or no-showed. Even a rough estimate by appointment type is enough to get started.',
        prompt: `I'm going to share appointment data from my medical practice.
Please help me:
1. Identify which appointment types have the highest no-show rate
2. Identify which days of the week or times of day have the most no-shows
3. Flag any patterns (e.g. Monday mornings, new patient appointments, follow-ups)
4. Suggest which appointment type or time slot I should prioritize for a reminder intervention first

Here is my data:
[PASTE YOUR APPOINTMENT DATA OR DESCRIBE YOUR PATTERNS]`,
      },
      {
        number: 2,
        title: 'Design a 3-touch reminder flow',
        description: 'A simple 3-touch sequence dramatically reduces no-shows: one message 48 hours before, one the morning of, and one follow-up if they miss. Use the prompt below to generate all three for your top appointment type.',
        prompt: `I run a small [specialty, e.g. "family medicine / dental / physical therapy"] practice.
My patients are [describe your patient base \u2014 age range, community, etc.].
My most common no-show appointment type is [appointment type].

Please write a 3-message reminder sequence:
1. A reminder message sent 48 hours before the appointment
2. A day-of reminder sent at 8am the morning of
3. A same-day follow-up sent 30 minutes after a missed appointment (to reschedule)

For each message write:
- An SMS version (under 160 characters)
- A slightly longer email version
- Keep the tone warm and professional \u2014 not automated-sounding`,
      },
      {
        number: 3,
        title: 'Fill cancelled slots fast',
        description: 'When a patient cancels, you have a short window to fill that slot. This prompt helps you draft a message to your waitlist or recent patients who might want to come in sooner.',
        prompt: `A patient just cancelled a [appointment type] appointment for [day/time].
I have a waitlist of patients waiting for this appointment type.

Please write:
1. A short text message I can send to 3-5 waitlisted patients to offer the slot
2. A voicemail script my front desk can use to call the list
3. A quick note I can post in my patient portal or waiting room app

Keep it simple and direct. The goal is to fill the slot within a few hours.`,
      },
      {
        number: 4,
        title: 'Document the flow for your front desk',
        description: 'The last step is turning this into something your team can run without you. Use this prompt to generate a simple one-page SOP.',
        prompt: `I want to create a simple one-page process document for my front desk staff
describing our new appointment reminder and no-show recovery flow.

The flow is:
- 48 hours before: send reminder via [text/email/both]
- Morning of: send day-of reminder via [text/email/both]
- 30 min after no-show: send recovery message via [text/email/both]
- When cancellation comes in: send waitlist outreach within [X hours]

Please write this as a simple step-by-step process document my staff can follow.
Include a notes section for edge cases (patients who ask to be removed from reminders,
how to handle same-day cancellations, etc.)`,
      },
    ],
    expectations: {
      good: 'Most practices see a noticeable drop in no-shows within the first 2\u20133 weeks of running a consistent reminder sequence.',
      ifBad: 'The messages will need light editing to match your practice\u2019s voice.',
      time: 'The SOP document from Step 4 is the most valuable long-term output \u2014 it means the system runs without you.',
    },
    downloadFile: 'doctor-noshow-flow.md',
    problems: ['fix-operations'],
  },
  {
    slug: 'doctor-referral-system',
    tag: 'Medical Practice',
    tagColor: '#C4622D',
    title: 'Streamline Referrals So Patients Don\u2019t Fall Through the Cracks',
    description: 'Build an organized referral directory by specialty and insurance so you can match patients to the right specialist in seconds.',
    difficulty: 'Intermediate',
    time: '~30 min',
    tools: 'ChatGPT or Claude \u00B7 Your referral contacts + insurance list',
    intro: 'When a patient needs a specialist, the referral process becomes a bottleneck that frustrates everyone. Your front desk is calling around to find a dermatologist who takes the patient\u2019s insurance, has availability this month, and is actually accepting new patients. Meanwhile the patient leaves without a clear next step and may never follow through. This guide helps you use AI to build a structured, searchable referral directory your staff can use in real time \u2014 organized by specialty, insurance, and your practice\u2019s preferences.',
    outcomes: [
      'A structured referral directory organized by specialty and insurance accepted',
      'A quick-lookup system your front desk can use during the visit',
      'A patient handoff template so referrals actually get completed',
    ],
    steps: [
      {
        number: 1,
        title: 'Map your most common referral needs',
        description: 'Start by identifying which specialties you refer to most often, and which insurance plans your patients carry. This tells you exactly what your directory needs to cover first.',
        dataNote: 'Think through your last 30\u201360 days of referrals. Which specialties came up most? What are the top 5\u201310 insurance plans your patients carry? You don\u2019t need exact numbers \u2014 your best estimate works.',
        prompt: `I run a [specialty, e.g. "family medicine / internal medicine / pediatrics"] practice in [CITY/REGION].

I want to build a referral directory so my staff can quickly find the right specialist for any patient.

Here are the details:
- Specialties I refer to most often: [LIST \u2014 e.g. dermatology, cardiology, orthopedics, ENT, gastroenterology, mental health/psychiatry]
- The top insurance plans my patients carry: [LIST \u2014 e.g. Blue Cross Blue Shield, Aetna, UnitedHealthcare, Cigna, Medicare, Medicaid]
- My practice is located in [CITY], and patients prefer specialists within [RADIUS \u2014 e.g. 15 miles]

Please help me:
1. Create a template for organizing referral contacts that includes: specialist name, practice name, specialty, phone/fax, address, insurances accepted, whether accepting new patients, average wait time, and any notes
2. Suggest which specialty + insurance combinations I should prioritize filling first based on typical primary care referral volume
3. Recommend a format (spreadsheet, document, or other) that would be easiest for front desk staff to search quickly`,
      },
      {
        number: 2,
        title: 'Build your referral directory',
        description: 'Now populate the directory with the specialists you already know and trust. Start with the ones your practice has sent patients to before \u2014 even if the info is scattered across sticky notes, EHR notes, and your own memory.',
        dataNote: 'Gather any specialist contacts you currently use \u2014 names, phone numbers, which insurances they take. Even a partial list is a great starting point. You can fill gaps in the next step.',
        prompt: `I'm building a referral directory for my medical practice. Here are the specialists I currently refer to or have worked with:

[PASTE YOUR LIST \u2014 even partial info is fine. Example:
- Dr. Smith, dermatology, takes BCBS and Aetna, (555) 123-4567
- City Orthopedics, Dr. Patel, not sure on insurance, long wait times
- Dr. Lee, psychiatry, takes Medicare, very responsive]

Please:
1. Organize these into the directory template from Step 1
2. Flag any entries where I\u2019m missing critical information (insurance, phone, accepting new patients)
3. Identify gaps \u2014 which of my top referral specialties have no contacts listed yet?
4. For each gap, suggest what to search for to find providers (e.g. "[specialty] accepting [insurance] in [city] new patients")`,
      },
      {
        number: 3,
        title: 'Create quick-lookup sheets by insurance',
        description: 'The real time-saver is being able to search by insurance first. When a patient with Aetna needs a dermatologist, your staff shouldn\u2019t have to scan the whole directory \u2014 they should go straight to "Aetna \u2192 Dermatology" and see 2\u20133 options.',
        prompt: `Using my referral directory, please create quick-lookup sheets organized by insurance plan.

My top insurance plans are: [LIST YOUR TOP 5-8 PLANS]

For each insurance plan, create a section that lists:
- Available specialists grouped by specialty
- For each specialist: name, practice, phone, and a one-line note (e.g. "fast appointments", "great with elderly patients", "long wait \u2014 book early")
- Flag any specialties where I have NO in-network option for that plan

Format this so it can be printed as a 1-2 page quick-reference sheet per insurance plan.
Also create a "cheat sheet" version \u2014 a single page with the top 3 most-referred specialties across all insurance plans, so my staff can handle 80% of referrals at a glance.`,
      },
      {
        number: 4,
        title: 'Build your patient handoff template',
        description: 'A referral isn\u2019t complete when you pick a specialist \u2014 it\u2019s complete when the patient actually books and shows up. This step creates a handoff process so patients leave with everything they need and your staff can follow up if needed.',
        prompt: `I want to create a simple referral handoff process for my practice so patients actually follow through on referrals.

Currently, the biggest problems with our referral process are:
- [DESCRIBE \u2014 e.g. "patients leave without calling the specialist", "we don't track if they followed through", "the specialist's office never gets the records in time", "patients call back confused about who to see"]

Please create:
1. A patient referral handout template my front desk can fill in and hand to the patient before they leave \u2014 including: specialist name, phone, address, what the appointment is for, what to bring, and whether pre-authorization is needed
2. A brief script my front desk can use when handing off the referral ("Here\u2019s who we\u2019re sending you to and here\u2019s what to expect...")
3. A follow-up workflow: when to check if the patient booked, what to do if they haven\u2019t, and how to close the loop with the specialist
4. A simple tracking method we can use to make sure no referral falls through the cracks (something a small practice can actually maintain)`,
      },
    ],
    expectations: {
      good: 'Building the initial directory takes about 30 minutes. Once it\u2019s built, your front desk can match a patient to a specialist in under 60 seconds instead of 10+ minutes of phone calls.',
      ifBad: 'The directory is only as good as the data in it. Block 30 minutes once a quarter to call your top specialists and confirm they\u2019re still accepting the same plans.',
      time: 'The patient handoff template from Step 4 is what turns a "we gave them a name" into a completed referral. Practices that use a structured handoff see significantly higher follow-through rates.',
    },
    downloadFile: 'doctor-referral-system.md',
    problems: ['fix-operations'],
  },
  {
    slug: 'pharmacist-taper-calculator',
    tag: 'Pharmacy',
    tagColor: '#1A7F8A',
    title: 'Build Taper Schedules in Minutes, Not Manual Math',
    description: 'Use AI to calculate step-down medication schedules, generate patient-friendly handouts, and build a reusable taper prompt template for any drug.',
    difficulty: 'Intermediate',
    time: '~25 min',
    tools: 'ChatGPT or Claude \u00B7 Current medication details (drug, dose, frequency, target)',
    intro: 'Taper calculations are time-consuming and error-prone when done by hand. Whether it\u2019s a prednisone step-down, a benzo taper, or an SSRI discontinuation, you have to factor in current dose, target dose, timeline, available tablet strengths, and splitting logistics \u2014 then explain it all clearly to the patient. One miscalculation or confusing instruction and the patient tapers too fast or skips steps. This guide walks you through using AI to generate accurate taper schedules, patient handouts, and a reusable system you can use for any medication going forward.',
    outcomes: [
      'A complete taper schedule with exact doses, dates, and step-down increments',
      'A patient-friendly counseling handout explaining what to expect at each phase',
      'A reusable prompt template you can use for any future taper request',
    ],
    steps: [
      {
        number: 1,
        title: 'Gather the taper details',
        description: 'Before prompting AI, collect the key inputs: current medication, current dose and frequency, target dose (or full discontinuation), desired timeline, and available tablet or capsule strengths. This is the data the AI needs to calculate accurately.',
        dataNote: 'You need: drug name, current dose, how often the patient takes it, the goal (reduce to X mg or stop completely), any timeline preferences from the prescriber, and what tablet strengths are available at your pharmacy.',
      },
      {
        number: 2,
        title: 'Generate the taper schedule',
        description: 'Paste the details into AI and get a structured step-down schedule. The prompt is written to be medication-agnostic \u2014 it works for prednisone, SSRIs, benzos, opioids, or anything else.',
        prompt: `I'm a pharmacist and I need to calculate a taper schedule for a patient.

Here are the details:
- Medication: [DRUG NAME]
- Current dose: [DOSE + FREQUENCY, e.g. "20mg once daily"]
- Target: [TARGET DOSE or "full discontinuation"]
- Timeline preference: [e.g. "over 4 weeks" / "as gradual as possible" / "per prescriber: 6 weeks"]
- Available tablet strengths: [e.g. "5mg, 10mg, 20mg tablets \u2014 can be split"]
- Relevant context: [e.g. "patient has been on this dose for 3 months" / "history of withdrawal symptoms" / "elderly patient"]

Please generate:
1. A step-by-step taper schedule in table format with: week/phase, daily dose, tablet instructions (which tablets to take), and duration of each step
2. Flag any steps where tablet splitting or alternating doses is needed
3. Note any steps where the reduction exceeds 25% of the previous dose (a common caution threshold)
4. Suggest monitoring checkpoints \u2014 when the pharmacist or prescriber should check in with the patient`,
      },
      {
        number: 3,
        title: 'Create the patient counseling handout',
        description: 'Now turn that clinical schedule into something the patient can actually follow. Plain language, clear formatting, and expectations for how they might feel at each step.',
        prompt: `Using the taper schedule above, create a patient-friendly handout that includes:
1. A simple version of the schedule \u2014 dates, what to take each day, in plain language (no medical jargon)
2. What the patient might experience at each step (e.g. "You may feel mild headaches in week 2 \u2014 this is normal and usually passes in a few days")
3. Clear "call your pharmacist/doctor if..." warning signs for each phase
4. A section at the top with: patient name (blank), medication name, start date, prescriber name, and pharmacy contact info

Format this so it can be printed on a single page, front and back.`,
      },
      {
        number: 4,
        title: 'Save your reusable taper prompt template',
        description: 'You\u2019ve now built one taper schedule from scratch. This step turns that work into a reusable system \u2014 a saved prompt template you can pull up for any future taper request, swap in the new drug details, and generate a schedule in under 2 minutes.',
        prompt: `Based on the taper workflow we just completed, please create:
1. A reusable prompt template with clear [BLANKS] I can fill in for any medication \u2014 I want to copy-paste this and swap in new details each time
2. A short checklist of information I need to collect before running the prompt (so I don't forget anything)
3. A "taper notes" template where I can log each taper I've generated \u2014 patient initials, drug, date, prescriber, and any special notes \u2014 so I have a record for my pharmacy`,
      },
    ],
    expectations: {
      good: 'The first taper schedule takes about 25 minutes to build. After that, using your saved template, future tapers take under 2 minutes \u2014 just fill in the blanks and generate.',
      ifBad: 'AI may suggest dose steps that don\u2019t align with available tablet strengths. Always verify the math and adjust for what you can actually dispense. You\u2019re the pharmacist \u2014 the AI does the arithmetic, you do the clinical judgment.',
      time: 'The reusable template from Step 4 is the real payoff. Instead of recalculating from scratch every time, you have a system that works for any drug, any patient.',
    },
    downloadFile: 'pharmacist-taper-calculator.md',
    problems: ['fix-operations'],
  },

  // ── NEW GUIDES ──

  {
    slug: 'photographer-pricing',
    tag: 'Photographer',
    tagColor: '#7C3AED',
    title: 'Price Your Work Without Losing Clients',
    description: 'Build a pricing strategy that reflects your value, covers your real costs, and doesn\u2019t scare away clients.',
    difficulty: 'Intermediate',
    time: '~25 min',
    tools: 'ChatGPT or Claude \u00B7 Your cost estimates',
    intro: 'Pricing is the single biggest anxiety for independent photographers. Charge too little and you\u2019re working for free after expenses. Charge too much without framing and clients ghost. The problem isn\u2019t your talent \u2014 it\u2019s that most photographers have never calculated their true cost per shoot or structured their packages to guide clients toward the right tier. This guide walks you through using AI to build a pricing strategy grounded in your actual numbers.',
    outcomes: [
      'Your true cost per shoot and effective hourly rate',
      'A 3-tier package structure you can put on your website today',
      'A price increase email you can send with confidence',
    ],
    steps: [
      {
        number: 1,
        title: 'Calculate your true cost per shoot',
        description: 'Before you can price correctly, you need to know what a shoot actually costs you \u2014 including the hours you don\u2019t bill for (editing, travel, admin). Most photographers are shocked by this number.',
        dataNote: 'Gather your monthly fixed costs (insurance, software, cloud storage, website), average hours per shoot including editing, and number of shoots per month. Rough estimates are fine.',
        prompt: `I'm a [type: wedding / portrait / commercial / event] photographer based in [CITY].
I want to understand my true cost per shoot so I can price profitably.

Here are my approximate costs:
- Monthly fixed costs (insurance, software, website, storage): $[AMOUNT]
- Average gear depreciation per month: $[AMOUNT]
- Hours I spend per shoot (including editing, travel, delivery): [HOURS]
- Number of shoots I do per month on average: [NUMBER]

Please help me:
1. Calculate my true cost per shoot (fixed + variable)
2. Determine my effective hourly rate at my current pricing
3. Suggest a minimum price floor I should never go below
4. Show me what I'd need to charge to hit $[TARGET] annual income`,
      },
      {
        number: 2,
        title: 'Research your local market positioning',
        description: 'Now that you know your costs, figure out where you sit in your local market. This prompt helps you understand the tiers and choose where to compete.',
        prompt: `I'm a [type] photographer in [CITY/REGION].
My current pricing is approximately [CURRENT PRICES \u2014 e.g. "$2,500 for wedding coverage, $300 for portrait sessions"].

Please help me:
1. Outline what photographers at 3 tiers (budget, mid-range, premium) typically charge in a market like mine
2. Identify what differentiates each tier beyond just price
3. Suggest which tier I should position in based on my experience level: [YEARS] years
4. List 3-5 value-adds I could offer to justify premium pricing without adding much cost`,
      },
      {
        number: 3,
        title: 'Build your package structure',
        description: 'A good package structure does the selling for you. The middle tier should be the one most people pick. The top tier makes the middle look reasonable. The bottom tier exists so nobody feels stuck.',
        prompt: `Based on my cost analysis and market positioning, please help me create a 3-tier package structure for my [type] photography business.

My target tier is [budget/mid-range/premium].
My most popular service is [SERVICE].
My average client books [WHAT THEY USUALLY WANT].

For each tier (Good, Better, Best), please include:
- Package name (something memorable, not just "Basic/Standard/Premium")
- What's included (hours, deliverables, extras)
- Price point
- Why a client would choose this tier

Also write a short paragraph I can use on my website explaining my pricing philosophy.`,
      },
      {
        number: 4,
        title: 'Write the price increase announcement',
        description: 'If you\u2019re raising prices (and after this guide, you probably should be), this prompt helps you communicate it confidently. Frame it as growth, not an apology.',
        prompt: `I need to raise my prices by approximately [PERCENTAGE OR AMOUNT].
My current clients know me as [DESCRIBE YOUR BRAND/STYLE].
The increase takes effect [DATE].

Please write:
1. An email to past clients announcing the new pricing (warm, grateful, not apologetic)
2. A shorter version for Instagram stories or posts
3. A FAQ section I can add to my website addressing "why did prices go up?"

Tone: confident and professional. I want to frame this as growth, not a burden.`,
      },
    ],
    expectations: {
      good: 'The cost analysis often reveals you\u2019re earning less per hour than you thought. That\u2019s the point \u2014 it makes the pricing conversation with yourself much easier.',
      ifBad: 'If the package structure feels off, add more detail about your ideal client and what they typically ask for. The AI needs context to calibrate.',
      time: 'Most photographers implement their new packages within a week and send the price increase email within two.',
    },
    downloadFile: 'photographer-pricing.md',
    problems: ['fix-profits'],
  },
  {
    slug: 'coffee-menu-pricing',
    tag: 'Coffee Shop',
    tagColor: '#92400E',
    title: 'Fix Your Menu Pricing',
    description: 'Analyze your menu margins, find hidden profit leaks, and adjust prices without alienating your regulars.',
    difficulty: 'Intermediate',
    time: '~20 min',
    tools: 'ChatGPT or Claude \u00B7 Your menu + cost data',
    intro: 'With Arabica prices up nearly 80% year-over-year and customers noticing every quarter added to a latte, menu pricing has become a high-wire act for coffee shop owners. Most shops haven\u2019t done a real margin analysis in months \u2014 they\u2019re guessing. This guide helps you use AI to audit every item on your menu, find the hidden profit leaks, and make smart adjustments your regulars won\u2019t revolt over.',
    outcomes: [
      'A full margin breakdown of every menu item',
      'Specific pricing adjustments with projected revenue impact',
      'Upsell combos that boost your average ticket naturally',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your menu margins',
        description: 'List every item on your menu with its selling price and approximate ingredient cost. Don\u2019t worry about being exact \u2014 ballpark costs are enough to surface the big problems.',
        dataNote: 'You need: each menu item name, its current selling price, and your rough ingredient cost per unit. If you\u2019re not sure on costs, estimate based on your last supply order.',
        prompt: `I run a coffee shop called [SHOP NAME] in [CITY].
I'm going to share my menu items with approximate ingredient costs and current prices.

For each item, please:
1. Calculate the food/beverage cost percentage
2. Flag any items below 65% gross margin (these are likely underpriced)
3. Flag any items above 85% gross margin (these are high-margin stars to promote)
4. Rank my menu from most to least profitable

Here are my items:
[LIST ITEMS: name, selling price, approximate ingredient cost per unit]`,
      },
      {
        number: 2,
        title: 'Find your pricing sweet spots',
        description: 'Now use the margin data to make specific, defensible pricing decisions. The goal is small, strategic adjustments \u2014 not a full menu overhaul.',
        prompt: `Based on the menu analysis, I want to optimize my pricing.

My shop serves approximately [NUMBER] customers per day.
My top 5 sellers are: [LIST THEM].
My rent is $[AMOUNT]/month and labor is approximately $[AMOUNT]/month.
Customers in my area are [price-sensitive / moderate / willing to pay premium].

Please:
1. Suggest specific price adjustments for my underperforming items (keep increases under $0.50 where possible)
2. Identify 2-3 items I should actively promote because they're high-margin
3. Suggest 1-2 items I should consider removing or reformulating
4. Calculate the monthly revenue impact if I implement your top 3 pricing suggestions`,
      },
      {
        number: 3,
        title: 'Create upsell combos',
        description: 'Combos are the easiest way to increase average ticket without raising prices. The trick is pairing a high-margin item with a popular one so the customer feels like they\u2019re getting a deal.',
        prompt: `I want to create 2-3 combo deals that feel like a good value to customers but actually improve my average ticket.

My average transaction is $[AMOUNT].
My highest-margin items are: [LIST FROM PREVIOUS ANALYSIS].
My most popular items are: [LIST].

Please design:
1. A "morning combo" (drink + food item)
2. A "grab and go" combo
3. An "upgrade" prompt script my baristas can use naturally (not pushy)

For each combo, show me the individual prices vs. combo price and my margin on each.`,
      },
      {
        number: 4,
        title: 'Communicate the changes',
        description: 'Price changes land better when you\u2019re upfront about them. This prompt helps you write honest, human messaging for your regulars.',
        prompt: `I'm adjusting prices on [NUMBER] menu items, with increases averaging $[AMOUNT].
My shop is known for [DESCRIBE YOUR VIBE \u2014 community focused, specialty coffee, cozy neighborhood spot, etc.].

Please write:
1. A small in-store sign explaining the change (3-4 sentences, warm tone)
2. A social media post that frames it positively
3. A talking point my staff can use if a regular asks about the price change

Keep it honest and human. No corporate speak.`,
      },
    ],
    expectations: {
      good: 'You\u2019ll likely find 2\u20133 items that are significantly underpriced and 1\u20132 that aren\u2019t worth keeping. That alone can shift your monthly margin.',
      ifBad: 'If the margin numbers look off, double-check your ingredient costs. Even small errors in cost-per-ounce estimates can skew the analysis.',
      time: 'Most shop owners implement price adjustments within a week. The upsell combos can go live same-day.',
    },
    downloadFile: 'coffee-menu-pricing.md',
    problems: ['fix-profits'],
  },
  {
    slug: 'designer-scope-creep',
    tag: 'Graphic Designer',
    tagColor: '#0D9488',
    title: 'Stop Scope Creep Before It Starts',
    description: 'Set clear boundaries, write better proposals, and handle revision requests professionally.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude \u00B7 Your past project notes',
    intro: 'Scope creep is the freelance designer\u2019s silent income killer. Nearly half of designers underestimate project scope, and by the time you realize you\u2019re doing twice the work for the same fee, it\u2019s too awkward to bring up. This guide helps you use AI to audit where you\u2019re bleeding time, build scope-proof proposals, and write professional responses for when clients push boundaries.',
    outcomes: [
      'A clear picture of how much scope creep is actually costing you',
      'A reusable proposal template with built-in scope protection',
      'Ready-to-send email templates for every common scope creep scenario',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your last 3 projects',
        description: 'Look back at your recent projects honestly. Where did the scope expand? What did you do for free that you should have charged for? This step turns gut feelings into numbers.',
        dataNote: 'For each of your last 3 projects, note: the client type, what you quoted, your actual hours, what was in the original scope, and what extras got added along the way.',
        prompt: `I'm a freelance graphic designer specializing in [SPECIALTIES \u2014 e.g. brand identity, web design, social media, packaging].

I want to identify where scope creep is costing me money. Here are my last 3 projects:

Project 1: [CLIENT TYPE], quoted $[AMOUNT], actual hours [HOURS], included [DELIVERABLES], extra requests: [WHAT THEY ASKED FOR BEYOND SCOPE]
Project 2: [same format]
Project 3: [same format]

Please help me:
1. Calculate my effective hourly rate on each project
2. Identify the specific moments where scope expanded
3. Find patterns in the type of extras clients request
4. Estimate how much revenue I lost to unpriced work`,
      },
      {
        number: 2,
        title: 'Build your scope-proof proposal template',
        description: 'The best time to prevent scope creep is before the project starts. This prompt creates a proposal template with clear boundaries baked in \u2014 so you never have to have an awkward conversation later.',
        prompt: `Based on the patterns we identified, please help me create a proposal template that prevents scope creep.

My typical project is [DESCRIBE \u2014 e.g. "brand identity package including logo, color palette, and business card design"].
My target price range is $[RANGE].
The most common scope creep I experience is [PATTERN FROM STEP 1].

Please create:
1. A proposal template with clearly defined deliverables, revision limits, and exclusions
2. A "What's Included / What's Not Included" section I can customize per project
3. A revision policy paragraph (suggest how many rounds to include)
4. An "Additional Work" rate card for common add-on requests

Write it in a professional but friendly tone \u2014 I want clients to feel informed, not intimidated.`,
      },
      {
        number: 3,
        title: 'Write your boundary response templates',
        description: 'When scope creep happens (and it will), you need professional responses ready to go. These templates keep the relationship warm while protecting your time.',
        prompt: `I need professional response templates for common scope creep situations.

Please write templates for:
1. Client asks for "one more small change" beyond included revisions
2. Client wants to add a new deliverable mid-project (e.g. "can you also do our social media templates?")
3. Client provides feedback that fundamentally changes the creative direction
4. Client ghosts for weeks then returns with urgent changes

For each, write:
- A short email response (warm but firm)
- The key phrase to use
- What NOT to say

Tone: collaborative, not confrontational. I want to keep the relationship while protecting my time.`,
      },
      {
        number: 4,
        title: 'Create your client onboarding doc',
        description: 'The final step is building an onboarding document that sets expectations from day one. When clients know the rules upfront, scope creep drops dramatically.',
        prompt: `I want to create a client onboarding document that sets expectations from day one and prevents most scope issues before they start.

My process usually takes [TIMELINE] from kickoff to final delivery.
I typically do [NUMBER] revision rounds.
My communication style is [casual / professional / mixed].

Please create:
1. A "Welcome to Your Project" one-pager I can send after booking
2. A creative brief questionnaire (10-12 questions) that gets me everything I need upfront
3. A simple timeline/milestone template I can customize per project
4. A "How We Work Together" section covering communication, feedback, and revisions`,
      },
    ],
    expectations: {
      good: 'The project audit in Step 1 usually reveals you\u2019re losing 20\u201340% of your effective rate to unpriced work. That clarity alone changes how you approach new projects.',
      ifBad: 'If the proposal template feels too rigid, adjust the tone. The structure matters more than the exact wording \u2014 you can soften it for your brand voice.',
      time: 'Most designers start using the new proposal template on their very next inquiry. The change order templates pay for themselves immediately.',
    },
    downloadFile: 'designer-scope-creep.md',
    problems: ['fix-operations'],
  },
  {
    slug: 'google-reviews',
    tag: 'All Businesses',
    tagColor: '#4338CA',
    title: 'Get More Google Reviews (Without Being Annoying)',
    description: 'Build a simple review generation system that runs on autopilot and brings in new customers.',
    difficulty: 'Beginner',
    time: '~20 min',
    tools: 'ChatGPT or Claude \u00B7 Your Google Business Profile',
    intro: 'Google reviews are the single most important trust signal for local businesses. Customers check them before they call, before they book, before they walk in. But most business owners either don\u2019t ask for reviews, or ask awkwardly once and give up. This guide helps you build a simple, repeatable system that generates reviews consistently \u2014 without being pushy or violating Google\u2019s policies.',
    outcomes: [
      'A clear review strategy with a realistic monthly target',
      'Ready-to-send review request messages (text, email, and in-person scripts)',
      'Professional response templates for every type of review',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current review situation',
        description: 'Before building a system, understand where you stand. How do your reviews compare to competitors? How many do you need to catch up or pull ahead?',
        dataNote: 'Check your Google Business Profile for your current review count and average rating. Search for 2\u20133 direct competitors and note their numbers too.',
        prompt: `I run a [BUSINESS TYPE] called [BUSINESS NAME] in [CITY].
I currently have [NUMBER] Google reviews with an average rating of [RATING].
My closest competitors have approximately [COMPETITOR REVIEW COUNTS].

Please help me:
1. Assess how my review count and rating compare to competitors
2. Calculate how many new reviews I'd need per month to match or overtake the top competitor within 6 months
3. Identify which types of reviews matter most for my business type
4. Suggest a realistic monthly review target based on my customer volume of approximately [NUMBER] customers per month`,
      },
      {
        number: 2,
        title: 'Build your review request system',
        description: 'The key to getting reviews is making it easy and asking at the right moment \u2014 when the customer is happiest. This prompt creates messages for every channel.',
        prompt: `I want to create a simple system for asking customers for Google reviews.

My business type: [BUSINESS TYPE]
How customers interact with me: [in-person / online / phone / mix]
My customer touchpoints are: [e.g. "after their appointment", "after delivery", "at checkout"]
My team size: [just me / small team of X]

Please create:
1. A review request message I can send via text (under 160 characters) with my Google review link placeholder
2. A slightly longer email version
3. A verbal script I (or my staff) can use in person at the right moment
4. A follow-up message for customers who didn't respond to the first ask (send 3-5 days later)

Rules: Never offer incentives for reviews (violates Google policy). Keep it genuine.`,
      },
      {
        number: 3,
        title: 'Write responses for every type of review',
        description: 'Responding to reviews matters as much as getting them. It shows potential customers you care, and it can turn a negative experience into a recovery story.',
        prompt: `I need response templates for my Google reviews.

My business name: [NAME]
My brand voice is: [warm / professional / casual / funny / etc.]

Please write response templates for:
1. A 5-star review with specific praise
2. A 5-star review that's generic ("Great place!")
3. A 4-star review with mild criticism
4. A 3-star review with constructive feedback
5. A 1-2 star review with a legitimate complaint
6. A 1-star review that seems fake or unfair

For each: keep it under 3 sentences, mention the reviewer by name placeholder, and show I'm a real person \u2014 not copy-pasting.`,
      },
      {
        number: 4,
        title: 'Set up your monthly routine',
        description: 'Reviews are a habit, not a campaign. This prompt creates a simple weekly routine so you never fall behind.',
        prompt: `I want a simple monthly routine to keep reviews coming in consistently.

My monthly customer volume: approximately [NUMBER]
My current review request method: [describe or "none"]
I have [TIME AVAILABLE] per week to spend on this.

Please create:
1. A weekly 15-minute checklist for review management
2. A monthly review report template I can fill in to track progress
3. 3 creative ideas for naturally encouraging reviews that fit my business type
4. A plan for what to do when I hit a dry spell (no new reviews in 2+ weeks)`,
      },
    ],
    expectations: {
      good: 'Most businesses see a significant uptick in reviews within the first 2 weeks of consistently asking. The response templates save hours of staring at a blank reply box.',
      ifBad: 'If customers aren\u2019t responding to review requests, try changing the timing \u2014 ask closer to the moment of delight, not hours later.',
      time: 'The weekly routine takes about 15 minutes. Most of that is responding to new reviews, which gets faster once you have templates.',
    },
    downloadFile: 'google-reviews.md',
    problems: ['get-customers'],
  },

  // ── PHASE 2: NEW VERTICALS ──

  {
    slug: 'carwash-capacity-beginner',
    tag: 'Car Wash',
    tagColor: '#B45309',
    title: 'Find Out Why Your Wash Is Half Empty',
    description: 'Diagnose capacity gaps, revenue leaks, and slow days so you can fill your empty bays.',
    difficulty: 'Beginner',
    time: '~20 min',
    tools: 'ChatGPT or Claude \u00B7 Your POS/transaction data',
    intro: 'Every car wash owner knows some days are slow \u2014 but not exactly which hours, which wash packages, or which weather patterns drive volume. Revenue leaks from unused capacity are invisible without data. This guide walks you through using AI to analyze your transaction data, find your dead zones, diagnose revenue leaks, and build targeted promotions to fill them.',
    outcomes: [
      'A clear breakdown of your slowest time slots by day and hour',
      'Revenue-per-bay analysis showing where you\u2019re leaving money on the table',
      'A ready-to-launch slow-day promotion plan with copy and messaging',
    ],
    steps: [
      {
        number: 1,
        title: 'Pull your transaction data',
        description: 'Export the last 90 days of transactions from your POS system: date, time, wash type, and revenue per ticket. If your POS doesn\u2019t export, manually count cars by hour for one week \u2014 that\u2019s enough to find your dead zones.',
        dataNote: 'You need: date, time of day, wash package selected, and ticket amount. Even a rough count of cars per hour for one week will reveal patterns.',
      },
      {
        number: 2,
        title: 'Find your dead zones',
        description: 'Paste your data into AI and identify which time slots are consistently underperforming. You\u2019re looking for specific days and hours where you\u2019re running well below peak capacity.',
        prompt: `I run a car wash in [CITY/REGION]. I'm going to share my transaction data from the last 90 days.

Please help me:
1. Break down wash volume by day of the week and by hour \u2014 show me which time slots are consistently underperforming
2. Identify which wash packages (e.g. basic, deluxe, premium) are most and least popular by time of day
3. Flag any days or time slots where I'm running below 40% of my peak capacity
4. Compare weekday vs. weekend volume and revenue patterns
5. Summarize the top 3 patterns I should act on first

Here is my data:
[PASTE YOUR POS EXPORT OR MANUAL COUNT DATA]`,
      },
      {
        number: 3,
        title: 'Diagnose revenue leaks',
        description: 'Now look at revenue efficiency \u2014 not just how many cars, but how much revenue you\u2019re generating per bay per hour, and where upselling opportunities exist.',
        prompt: `Using the same data, please help me analyze revenue efficiency:
1. Calculate my average revenue per bay per hour across different time slots
2. Identify which wash packages have the highest and lowest revenue per transaction
3. Find peak hours where I could be upselling higher-tier washes but customers are choosing basic
4. Calculate what my revenue would be if I converted just 10% of basic washes to the next tier up during peak hours
5. Flag any pricing anomalies \u2014 times where discounts or promotions might be cannibalizing full-price sales`,
      },
      {
        number: 4,
        title: 'Build a slow-day promo plan',
        description: 'Turn your dead zones into targeted promotions with specific offers, messaging, and a test plan to measure results.',
        prompt: `Based on my dead zones and revenue analysis, please create:
1. Three targeted promotions \u2014 one for each of my slowest time slots \u2014 with specific offers (e.g. "$2 off premium wash before 10am on Tuesdays")
2. A text message or SMS blast template for each promotion (under 160 characters each)
3. Signage copy I can print and display at the wash entrance to drive traffic to slow hours
4. A simple loyalty or punch-card concept that incentivizes visits during off-peak times
5. A 30-day test plan: which promo to run first, how to measure if it's working, and when to adjust`,
      },
    ],
    expectations: {
      good: 'Most car wash owners discover 2\u20133 specific time slots where simple signage or a text blast could increase volume 15\u201320%.',
      ifBad: 'If your POS doesn\u2019t export data, manually track car counts by hour for one week \u2014 that\u2019s enough to find your dead zones.',
      time: 'The promo plan from Step 4 gives you ready-to-use copy. Test one slow-day promotion this week and measure the result.',
    },
    downloadFile: 'carwash-capacity-beginner.md',
    problems: ['fix-profits', 'scale-up'],
  },
  {
    slug: 'carwash-membership-intermediate',
    tag: 'Car Wash',
    tagColor: '#B45309',
    title: 'Build a Membership Program That Prints Recurring Revenue',
    description: 'Design, price, and launch an unlimited wash membership that creates predictable monthly revenue.',
    difficulty: 'Intermediate',
    time: '~30 min',
    tools: 'ChatGPT or Claude \u00B7 Your wash volume + pricing data',
    intro: 'Single-wash revenue is unpredictable and weather-dependent. A rainy week can wipe out your numbers. An unlimited membership program creates predictable recurring revenue that shows up rain or shine \u2014 but most car wash owners don\u2019t know how to price it, structure tiers, or calculate breakeven. This guide walks you through designing, modeling, and launching a membership program using AI.',
    outcomes: [
      'A 3-tier membership structure with pricing based on your actual costs',
      'A financial model showing breakeven points and projected recurring revenue',
      'A complete launch plan with messaging, signage, and staff scripts',
    ],
    steps: [
      {
        number: 1,
        title: 'Audit your current revenue mix',
        description: 'Before designing membership tiers, understand your current economics: what customers pay, how often they come back, and what your fixed costs look like.',
        dataNote: 'Gather: average ticket price by wash type, monthly wash volume, percentage of repeat customers (if known), current pricing for each wash tier, and your monthly fixed costs (rent, utilities, labor, chemicals, equipment).',
      },
      {
        number: 2,
        title: 'Design your membership tiers',
        description: 'Use AI to create a tiered membership structure anchored to your existing wash packages, with pricing that\u2019s attractive to frequent customers but profitable for you.',
        prompt: `I run a car wash in [CITY/REGION] and I want to create an unlimited wash membership program.

Here are my current details:
- Wash packages and prices: [LIST \u2014 e.g. Basic $8, Deluxe $14, Premium $20, Ultimate $28]
- Average monthly wash volume: [NUMBER] cars
- Estimated percentage of repeat customers (weekly or biweekly): [ESTIMATE]
- Monthly fixed costs (rent, utilities, labor, chemicals): approximately $[AMOUNT]
- My biggest competitor's membership pricing (if known): [DETAILS or "not sure"]

Please help me:
1. Design a 3-tier membership structure (e.g. Basic Unlimited, Plus, Premium) \u2014 what's included in each, and recommended monthly pricing
2. For each tier, calculate the breakeven wash frequency \u2014 how many times per month would a member need to wash before I start losing money on them
3. Recommend which of my current wash packages to anchor each membership tier to
4. Suggest a sign-up incentive (first month pricing, free upgrade, etc.) that drives trial without destroying margins
5. Compare my proposed pricing to industry benchmarks for my region`,
      },
      {
        number: 3,
        title: 'Build the financial model',
        description: 'Model the economics at different adoption rates so you know exactly how many members you need to cover costs \u2014 and what happens in the worst case.',
        prompt: `Using the membership tiers we designed, help me model the financials:
1. If I convert [5% / 10% / 15% / 20%] of my current monthly customers to members, what's my projected monthly recurring revenue for each scenario?
2. Model the "heavy user" scenario \u2014 if the average member washes 8-10 times per month, am I still profitable at each tier?
3. Calculate my monthly breakeven: how many members do I need at each tier to cover my fixed costs with membership revenue alone?
4. Project Year 1 revenue assuming I add [X] new members per month with [Y]% monthly churn
5. What's the worst case \u2014 if every member washes every single day, what does that cost me? At what point does that scenario become unsustainable?`,
      },
      {
        number: 4,
        title: 'Create the launch plan',
        description: 'Build everything you need to launch: customer messaging, signage, staff scripts, and a 90-day review plan.',
        prompt: `I'm ready to launch my car wash membership program. Please create:
1. An email/text announcement to send to my existing customer list \u2014 emphasize the value proposition and include a limited-time launch offer
2. Signage copy for 3 locations: entrance sign, pay station, and exit sign \u2014 each should highlight a different benefit (savings, convenience, unlimited)
3. A staff script for upselling membership at the register \u2014 including how to handle the "let me think about it" objection
4. A social media launch sequence: 3 posts over 1 week (teaser, launch day, last-chance for launch pricing)
5. A 90-day post-launch review checklist: what metrics to track (sign-ups, churn, average washes per member, revenue per member) and how to know if adjustments are needed`,
      },
    ],
    expectations: {
      good: 'A well-priced membership program can convert 10\u201315% of regular customers within the first month, creating predictable revenue even on rainy weeks.',
      ifBad: 'Start with a simple single-tier unlimited plan if three tiers feels like too much. You can always add tiers later.',
      time: 'The financial model from Step 3 is the key decision-making tool \u2014 it tells you exactly how many members you need to cover your overhead.',
    },
    downloadFile: 'carwash-membership-intermediate.md',
    problems: ['scale-up'],
  },
  {
    slug: 'architecture-code-compliance-beginner',
    tag: 'Architecture Firm',
    tagColor: '#4A5568',
    title: 'Stop Losing Hours on Code Research and Plan Check Responses',
    description: 'Use AI to speed up code compliance research, plan check responses, and permit submittal checklists.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude \u00B7 Your project details + applicable codes',
    intro: 'Small architecture firms spend hours digging through building codes, writing plan check responses, and assembling permit submittal checklists. It\u2019s tedious, repetitive, and pulls architects away from design work. This guide shows you how to use AI to speed up code research, draft plan check responses, and build submittal checklists \u2014 so you can spend more time designing and less time on paperwork.\n\n\u26A0\uFE0F **Important:** AI is a research assistant, not a licensed professional. All code interpretations, compliance decisions, and permit submittals must be verified by a licensed architect. Use these outputs as a starting point, not a final answer.',
    outcomes: [
      'A structured code compliance checklist organized by discipline',
      'Draft plan check responses with code references you can refine and submit',
      'A permit submittal checklist tailored to your jurisdiction',
    ],
    steps: [
      {
        number: 1,
        title: 'Define your project parameters',
        description: 'Before prompting AI, gather the key project details: type, occupancy, construction type, jurisdiction, and applicable codes.',
        dataNote: 'You need: project type (e.g. mixed-use, single-family, TI), occupancy classification, construction type, building area and stories, jurisdiction, applicable codes (IBC edition, local amendments, energy code, accessibility standards).',
      },
      {
        number: 2,
        title: 'Generate a code compliance checklist',
        description: 'Use AI to create a structured checklist of applicable code sections, organized by discipline. This replaces the hours of manual code research at the start of every project.',
        prompt: `I'm an architect working on a [PROJECT TYPE] project in [CITY/JURISDICTION].

Project details:
- Occupancy classification: [e.g. B, A-2, R-2, mixed-use B/R-2]
- Construction type: [e.g. Type V-A, Type III-B]
- Building area: [SQUARE FOOTAGE]
- Number of stories: [NUMBER]
- Applicable codes: [e.g. 2021 IBC, 2022 California Building Code, IECC 2021, ADA/ANSI A117.1]
- Jurisdiction-specific requirements: [e.g. "City requires enhanced accessibility beyond ADA", "fire department has specific access road requirements"]

Please generate a code compliance checklist organized by discipline:
1. Structural/Building \u2014 allowable area, height, fire-resistance ratings, structural requirements
2. Fire and Life Safety \u2014 sprinkler requirements, egress, fire separation, occupancy separation
3. Accessibility \u2014 accessible routes, restroom requirements, parking, signage
4. Energy Code \u2014 envelope requirements, mechanical, lighting, compliance path
5. Plumbing \u2014 fixture counts based on occupancy load
6. Any jurisdiction-specific items based on the location I provided

For each item, include: the applicable code section number, the requirement summary, and a checkbox placeholder for tracking compliance.`,
      },
      {
        number: 3,
        title: 'Draft plan check responses',
        description: 'Paste your plan check comments from the jurisdiction and get point-by-point draft responses with code references.',
        prompt: `I received plan check comments from [JURISDICTION] on my [PROJECT TYPE] project. I need to draft point-by-point responses.

Here are the plan check comments:
[PASTE THE FULL LIST OF PLAN CHECK COMMENTS]

For each comment, please:
1. Draft a professional response that addresses the comment directly
2. Reference the applicable code section that supports the response
3. Indicate whether the response requires: (a) a narrative response only, (b) a drawing revision, or (c) a calculation submittal
4. Flag any comments where the jurisdiction's interpretation may differ from the code text \u2014 so I can review those carefully
5. Format as a numbered response sheet I can submit back to the plan checker`,
      },
      {
        number: 4,
        title: 'Build a permit submittal checklist',
        description: 'Generate a comprehensive, jurisdiction-specific checklist of everything needed for your permit submittal package.',
        prompt: `I'm preparing a permit submittal package for [JURISDICTION] for a [PROJECT TYPE] project.

Please create a comprehensive submittal checklist that includes:
1. Required drawing sheets (site plan, floor plans, elevations, sections, details, structural, MEP) with notes on what each sheet must show per typical jurisdiction requirements
2. Required calculations (structural, energy, Title 24, plumbing fixture count, occupant load/egress)
3. Required forms (permit application, contractor info, special inspection requirements, environmental forms if applicable)
4. Required supporting documents (soils report, survey, HOA approval, school district fees, utility will-serve letters)
5. Fees typically required at submittal
6. Any pre-submittal requirements (pre-application meeting, design review, environmental review)

Format as a printable checklist with checkboxes, organized by submission order.`,
      },
    ],
    expectations: {
      good: 'A code checklist that took 2 hours to compile manually can be drafted in 10 minutes. You\u2019ll still need to verify every item, but the starting point saves significant time.',
      ifBad: 'AI may reference outdated code editions or miss local amendments. Always verify the applicable code year and jurisdiction-specific requirements.',
      time: 'The plan check response templates from Step 3 are the biggest time-saver for most small firms \u2014 they eliminate the blank-page problem on every resubmittal.',
    },
    downloadFile: 'architecture-code-compliance-beginner.md',
    problems: ['fix-operations'],
  },
  {
    slug: 'architecture-profitability-intermediate',
    tag: 'Architecture Firm',
    tagColor: '#4A5568',
    title: 'Find Out Which Projects Are Actually Making You Money',
    description: 'Run a profit audit on your projects and build systems to prevent scope creep from eating your margins.',
    difficulty: 'Intermediate',
    time: '~30 min',
    tools: 'ChatGPT or Claude \u00B7 Your project hours + fee data',
    intro: 'Most small architecture firms don\u2019t track profitability per project. They know their overall revenue but not which project types, phases, or clients are profitable vs. money-losers. Scope creep during Construction Administration quietly erodes margins until the project that looked profitable on paper turns into a loss. This guide walks you through auditing your project profitability, building scope-proof proposals, and creating a CA management system.',
    outcomes: [
      'A profit audit showing your effective hourly rate per project and phase',
      'A scope-proof proposal template with clear boundaries and change order language',
      'A CA scope management system to prevent margin erosion during construction',
    ],
    steps: [
      {
        number: 1,
        title: 'Pull your project financials',
        description: 'Gather data for your last 5\u201310 projects so you can see which are actually profitable.',
        dataNote: 'For each project, collect: project name/type, contracted fee, hours spent by phase (SD, DD, CD, CA), hourly rate of each staff member who worked on it, any additional services billed, and any scope changes or extras that were done for free.',
      },
      {
        number: 2,
        title: 'Run a project profit audit',
        description: 'Paste your project data and let AI calculate your real profitability \u2014 by project, by phase, and by project type.',
        prompt: `I run a small architecture firm and I want to understand which projects are actually profitable.

Here is my project data:
[PASTE YOUR PROJECT DATA \u2014 for each project include: project name, type, fee, hours by phase (SD, DD, CD, CA), staff involved and their hourly rates, additional services billed if any]

Please analyze:
1. Calculate the effective hourly rate for each project (total fee \u00F7 total hours)
2. Break down profitability by phase \u2014 which phases (SD, DD, CD, CA) consistently run over budget?
3. Compare profitability across project types \u2014 are certain types (residential, commercial, TI) more profitable than others?
4. Flag any projects where CA hours alone exceeded more than 25% of the total fee
5. Calculate what my average project profit margin is, and what it would be if I eliminated the worst-performing phase overruns
6. Identify the top 2\u20133 patterns that are costing me the most money`,
      },
      {
        number: 3,
        title: 'Build scope-proof proposals',
        description: 'Create a proposal template that explicitly defines what\u2019s included and what\u2019s not, so scope creep can\u2019t happen silently.',
        prompt: `Based on my profitability analysis, help me create a proposal template that prevents scope creep.

My firm's details:
- Firm name: [NAME]
- Typical project types: [LIST]
- Standard hourly rates: [Principal: $X, Project Architect: $X, Designer: $X, Drafter: $X]
- Phases I typically include in base fee: [e.g. SD through CD, or SD through CA]

Please create:
1. A proposal template with explicit scope boundaries for each phase \u2014 exactly what's included (number of design iterations, meetings, drawing sets) and what's not
2. An "Additional Services" schedule with hourly rates and common add-on services (additional meetings, redesigns beyond X rounds, expedited schedules, owner-requested changes after DD approval)
3. Clear "Not Included" language that prevents scope assumptions \u2014 list the most common things clients assume are included but shouldn't be
4. A fee structure recommendation: should I use fixed fee, hourly with a cap, or phased billing? Based on my data, which approach protects my margins best?
5. A change order template for when scope changes occur mid-project`,
      },
      {
        number: 4,
        title: 'Create a CA scope management system',
        description: 'Construction Administration is where most firms\u2019 profitability breaks down. Build a system to track scope consumption and communicate when limits are reached.',
        prompt: `Construction Administration is where my firm's profitability usually breaks down. Help me create a system to manage CA scope.

My typical CA challenges:
- [DESCRIBE \u2014 e.g. "unlimited RFIs", "too many site visits", "submittal reviews dragging on", "contractor calls my cell directly", "owner changes during construction"]

Please create:
1. A CA scope tracker template \u2014 columns for: RFI count (vs. allowance), site visit count (vs. allowance), submittal review rounds (vs. allowance), and change order requests
2. Standard CA scope limits I should include in every contract \u2014 recommended allowances for RFIs, site visits, and submittal review rounds based on project size
3. A client email template for when CA scope is being exceeded \u2014 professional but firm, with a reference to the contract terms and a quote for additional services
4. A weekly CA status report template I can send to the owner showing scope consumption (e.g. "12 of 15 allocated RFIs used, 3 of 6 site visits completed")
5. A change order request template for additional CA services with clear justification language`,
      },
    ],
    expectations: {
      good: 'Most firms discover that 1\u20132 project types or phases are significantly less profitable than they assumed. The proposal template from Step 3 prevents this on future projects.',
      ifBad: 'If you don\u2019t track hours by phase, estimate them for your last 3 projects. Even rough numbers reveal patterns.',
      time: 'The CA scope management system from Step 4 is where most small firms lose money without realizing it. Having a tracker and a template for scope conversations changes the dynamic.',
    },
    downloadFile: 'architecture-profitability-intermediate.md',
    problems: ['fix-profits'],
  },
  {
    slug: 'autorepair-estimates-trust-beginner',
    tag: 'Auto Repair',
    tagColor: '#DC2626',
    title: 'Write Estimates Customers Actually Understand and Trust',
    description: 'Create plain-English estimates, declined repair follow-ups, and vehicle health reports that build customer trust.',
    difficulty: 'Beginner',
    time: '~20 min',
    tools: 'ChatGPT or Claude \u00B7 Your common repair types + pricing',
    intro: 'Customers distrust auto repair shops because estimates feel opaque \u2014 unfamiliar parts, unexplained labor line items, and no explanation of what\u2019s actually wrong or why it costs what it does. Declined repairs don\u2019t get followed up on, and trust \u2014 the #1 barrier to revenue \u2014 never gets built. This guide helps you use AI to rewrite your estimates in plain English, create follow-up sequences for declined repairs, and build vehicle health reports that turn one-time customers into regulars.',
    outcomes: [
      'Plain-English estimate templates for your most common repairs',
      'A 3-message follow-up sequence for declined repairs',
      'A vehicle health report template you can hand to every customer',
    ],
    steps: [
      {
        number: 1,
        title: 'List your top 10 most common repairs',
        description: 'Before prompting AI, list the repairs you do most often with your current pricing.',
        dataNote: 'Gather: repair name, typical parts cost, labor time (hours), total estimate range, and how you currently explain it to the customer. Think: oil changes, brake pads, timing belts, alternators, AC recharge, tire rotations, check engine diagnostics.',
      },
      {
        number: 2,
        title: 'Create plain-English estimate templates',
        description: 'Rewrite your most common repair estimates so customers understand what\u2019s wrong, why it matters, and exactly what they\u2019re paying for.',
        prompt: `I run an auto repair shop and I want to rewrite my most common repair estimates so customers actually understand them and trust my pricing.

Here are my top 10 most common repairs with current pricing:
[PASTE YOUR LIST \u2014 e.g.
- Brake pad replacement (front): Parts $45-80, Labor 1.5 hrs, Total $180-280
- Alternator replacement: Parts $200-350, Labor 2 hrs, Total $400-550
- AC recharge and leak check: Parts $30-60, Labor 1 hr, Total $130-200]

For each repair, please rewrite the estimate in customer-friendly language that includes:
1. What's wrong \u2014 a plain-English explanation of the problem (no jargon)
2. Why it matters \u2014 what happens if they don't fix it (safety, further damage, cost)
3. What we'll do \u2014 the actual repair described simply
4. Cost breakdown \u2014 parts, labor, and total, with a brief explanation of why each costs what it does
5. How long it takes \u2014 so they can plan their day
6. Warranty \u2014 what's covered after the repair

Format each as a template my service advisor can fill in and print or email to the customer.`,
      },
      {
        number: 3,
        title: 'Build a declined repair follow-up system',
        description: 'Create a follow-up sequence that brings back customers who declined recommended repairs \u2014 without being pushy.',
        prompt: `Many customers decline recommended repairs at my shop. I want a follow-up system that brings them back without being pushy.

My shop details:
- Shop name: [NAME]
- Most commonly declined repairs: [LIST \u2014 e.g. "brake pads when they're at 3mm", "recommended fluid flushes", "suspension components", "timing belt at mileage interval"]
- How I currently follow up: [DESCRIBE or "I don't"]

Please create:
1. A same-day follow-up message (text/email) \u2014 thank them for their visit, briefly restate what was recommended and why, no pressure
2. A 2-week follow-up \u2014 add a bit more urgency with an educational angle ("Here's what can happen if brake pads wear below 2mm...")
3. A 6-week follow-up \u2014 a friendly check-in with a soft offer ("We saved your inspection notes \u2014 come back this month and we'll waive the re-inspection fee")
4. For each message: keep it under 3 sentences for text, under 5 for email
5. A simple tracking method \u2014 how to note which customers declined what, and when each follow-up should be sent`,
      },
      {
        number: 4,
        title: 'Design a vehicle health report',
        description: 'Create a one-page report you hand to every customer after service \u2014 showing what was done, what\u2019s in good shape, and what to watch for next.',
        prompt: `I want to give every customer a simple vehicle health report after their service \u2014 something that builds trust and gives them a reason to come back.

My shop name: [NAME]
Services I typically inspect during any visit: [LIST \u2014 e.g. brakes, tires, fluids, belts, battery, lights, wipers, suspension]

Please create:
1. A one-page vehicle health report template with sections for:
   - What was done today (the service they paid for)
   - Vehicle vitals check (green/yellow/red status for each inspected system)
   - What to watch for next (upcoming maintenance based on mileage/age)
   - Recommended next visit and what it should include
2. A color-coding system: Green = good, Yellow = monitor/plan for soon, Red = needs attention now
3. A brief explanation script my tech or service advisor can use when handing it to the customer
4. Make it professional enough to build trust but simple enough that a non-car-person understands it immediately`,
      },
    ],
    expectations: {
      good: 'Shops that switch to plain-English estimates typically see declined repair rates drop. The vehicle health report becomes a trust-building tool customers actually keep.',
      ifBad: 'Have your front desk person review the AI-generated language \u2014 they know which words confuse customers most.',
      time: 'The follow-up sequence from Step 3 recovers revenue you\u2019re currently leaving on the table. Even a 10% conversion rate on declined repairs adds up fast.',
    },
    downloadFile: 'autorepair-estimates-trust-beginner.md',
    problems: ['fix-operations'],
  },
  {
    slug: 'autorepair-capacity-pricing-intermediate',
    tag: 'Auto Repair',
    tagColor: '#DC2626',
    title: 'Maximize Every Bay and Every Hour in Your Shop',
    description: 'Analyze labor efficiency, find your most profitable services, and set a shop rate that actually covers your costs.',
    difficulty: 'Intermediate',
    time: '~30 min',
    tools: 'ChatGPT or Claude \u00B7 Your shop rate, labor hours, and ticket data',
    intro: 'Most shop owners don\u2019t know their true labor efficiency rate, which services generate the most profit per bay-hour, or whether their shop rate actually covers overhead. They\u2019re busy but not necessarily profitable. This guide walks you through calculating your real efficiency, finding your most profitable services, and reviewing whether your pricing actually supports the business you want to run.',
    outcomes: [
      'Your real labor efficiency rate and effective shop rate after overhead',
      'A service mix analysis showing which repairs to promote and which to reprice',
      'A shop rate review with a pricing adjustment plan if needed',
    ],
    steps: [
      {
        number: 1,
        title: 'Gather your shop metrics',
        description: 'Collect the numbers you need to understand your shop\u2019s real economics.',
        dataNote: 'Collect: number of bays, number of techs, posted shop rate per hour, average hours billed per tech per day (flagged hours), average repair order/ticket size, monthly gross revenue, and monthly overhead (rent, utilities, insurance, supplies, equipment payments, admin staff).',
      },
      {
        number: 2,
        title: 'Calculate your real efficiency',
        description: 'Find out how efficiently your shop is converting available hours into billed revenue.',
        prompt: `I run an auto repair shop and I want to understand my real labor efficiency and profitability.

Here are my shop metrics:
- Number of bays: [NUMBER]
- Number of techs: [NUMBER]
- Shop hours: [e.g. 8am-5pm, Monday-Friday = 45 hrs/week available per tech]
- Posted shop rate: $[RATE]/hour
- Average hours billed (flagged) per tech per day: [NUMBER]
- Average repair order size: $[AMOUNT]
- Monthly gross revenue: $[AMOUNT]
- Monthly overhead: $[AMOUNT] (break down if possible: rent, utilities, insurance, supplies, equipment, admin/staff)

Please calculate:
1. My labor efficiency rate \u2014 hours billed vs. hours available (industry benchmark: 85-100%+)
2. My effective shop rate \u2014 actual revenue per billed hour after overhead
3. Revenue per bay per day \u2014 and how it compares to industry benchmarks
4. My breakeven point \u2014 how many billed hours per day do I need to cover overhead?
5. Where my biggest efficiency gaps are \u2014 is it utilization (not enough cars), productivity (slow techs), or pricing (rate too low)?
6. What a 10% improvement in my weakest metric would mean in monthly revenue`,
      },
      {
        number: 3,
        title: 'Find your most profitable services',
        description: 'Analyze which services generate the most profit per bay-hour and which ones are tying up bays for low return.',
        prompt: `Using my shop data, help me analyze which services are most and least profitable.

My service mix (estimate percentages of revenue):
[LIST \u2014 e.g.
- Oil changes / basic maintenance: 20%
- Brake work: 15%
- Engine diagnostics and repair: 25%
- AC/heating: 10%
- Tires: 10%
- Suspension/steering: 10%
- Electrical: 5%
- Other: 5%]

For each service category, please analyze:
1. Estimated profit per bay-hour \u2014 factoring in typical parts markup, labor time, and my shop rate
2. Which services generate the most profit per hour of bay time?
3. Which services tie up bays the longest for the least return?
4. What should I promote more aggressively based on profitability?
5. Are there services I should consider repricing, referring out, or repositioning?
6. Suggest a "service mix optimization" \u2014 what would my ideal revenue split look like to maximize profit?`,
      },
      {
        number: 4,
        title: 'Build a shop rate and pricing review',
        description: 'Determine if your current shop rate and service pricing are actually covering your costs and generating the profit margin you need.',
        prompt: `I need to review whether my shop rate and service pricing are actually covering my costs and generating profit.

My current details:
- Posted shop rate: $[RATE]/hour
- Target profit margin: [e.g. 20%, 25%, 30%]
- Last time I raised my rate: [DATE or "I don't remember"]
- My closest competitors' posted rates (if known): [LIST or "not sure"]
- Parts markup: [e.g. "cost + 40%", "list price", "varies"]

Please help me:
1. Calculate what my shop rate needs to be to hit my target profit margin based on my overhead and efficiency numbers
2. If I need a rate increase, create a phased plan \u2014 how much, when, and how to communicate it
3. Review my parts markup strategy \u2014 am I leaving money on the table or pricing myself out?
4. Draft a customer communication for a rate increase \u2014 brief, professional, emphasizing value and investment in quality
5. Create a quarterly pricing review checklist I can follow to make sure my rates stay aligned with my costs`,
      },
    ],
    expectations: {
      good: 'Most shops discover their effective hourly rate is significantly lower than their posted rate once overhead is factored in. The service mix analysis often reveals 2\u20133 high-value services to promote more aggressively.',
      ifBad: 'If you don\u2019t track hours billed per tech, start with one week of tracking \u2014 it reveals efficiency gaps immediately.',
      time: 'The shop rate review from Step 4 is the hardest conversation but the most important one. Most independent shops are underpriced relative to their costs.',
    },
    downloadFile: 'autorepair-capacity-pricing-intermediate.md',
    problems: ['fix-profits'],
  },
  {
    slug: 'realestate-listings-leads-beginner',
    tag: 'Real Estate Agent',
    tagColor: '#16A34A',
    title: 'Write Listings That Sell and Leads That Convert',
    description: 'Generate standout listing descriptions, build a lead nurture sequence, and create a listing presentation that wins clients.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude \u00B7 Your listing details + lead sources',
    intro: 'Most agents spend hours writing listing descriptions that sound like every other listing on the MLS. Lead follow-up is inconsistent \u2014 hot leads go cold because there\u2019s no system. Seller listing presentations are cobbled together last-minute. This guide helps you use AI to generate compelling listing copy, build automated lead nurture sequences, and create a listing presentation framework you can customize for every appointment.',
    outcomes: [
      'Standout listing descriptions in multiple formats (MLS, social, email)',
      'A 5-touch lead nurture sequence for both buyers and sellers',
      'A listing presentation outline with pricing conversation scripts',
    ],
    steps: [
      {
        number: 1,
        title: 'Gather your listing details',
        description: 'Before prompting AI, collect everything that makes this property worth buying.',
        dataNote: 'For a current or upcoming listing, collect: full property details (beds, baths, sqft, lot size, year built, upgrades), neighborhood highlights (schools, dining, commute), unique selling points, target buyer profile, and 3\u20135 comparable recent sales.',
      },
      {
        number: 2,
        title: 'Generate standout listing descriptions',
        description: 'Create compelling listing copy in multiple formats \u2014 MLS, social media, and email \u2014 that actually differentiates the property.',
        prompt: `I'm a real estate agent and I need compelling listing descriptions for a property.

Property details:
- Address: [ADDRESS or general area]
- Type: [single-family, condo, townhouse, etc.]
- Beds/Baths: [NUMBER]
- Square footage: [NUMBER]
- Lot size: [SIZE]
- Year built: [YEAR]
- Recent upgrades: [LIST \u2014 e.g. "new kitchen 2024", "updated HVAC", "fresh landscaping"]
- Unique features: [LIST \u2014 e.g. "corner lot", "mountain views", "original hardwood floors", "ADU potential"]
- Neighborhood highlights: [LIST \u2014 e.g. "walkable to downtown", "top-rated school district", "10 min to freeway"]
- Target buyer: [e.g. "young families", "remote workers wanting space", "investors"]
- List price: $[PRICE]

Please create:
1. A full MLS description (250-300 words) \u2014 compelling, specific, avoids clich\u00E9s like "charming" or "won't last long"
2. A luxury/elevated version of the same listing (if applicable)
3. Three social media captions \u2014 one for Instagram (with hashtag suggestions), one for Facebook, one for LinkedIn
4. An email announcement I can send to my database with subject line
5. A one-line "hook" I can use in ads or flyers`,
      },
      {
        number: 3,
        title: 'Build a lead nurture sequence',
        description: 'Create follow-up sequences for both buyer and seller leads so no one falls through the cracks.',
        prompt: `I want to create a follow-up sequence for new buyer and seller leads so no one falls through the cracks.

My details:
- My name: [NAME]
- My brokerage: [BROKERAGE]
- My target area: [CITY/NEIGHBORHOOD]
- Where my leads come from: [e.g. "Zillow, open houses, referrals, social media, website"]
- My typical response time currently: [e.g. "same day" or "whenever I remember"]

Please create two sequences:

BUYER LEAD SEQUENCE (5 touches):
1. Initial response (send within 5 minutes of inquiry) \u2014 acknowledge, ask one qualifying question
2. Value-add follow-up (Day 2) \u2014 share a relevant listing or market insight, no pressure
3. Market insight (Week 1) \u2014 brief market update for their target area, position yourself as the expert
4. Soft check-in (Week 3) \u2014 "still looking?" with a helpful resource attached
5. Re-engagement (Month 2) \u2014 if no response, a final friendly touchpoint with an easy reply option

SELLER LEAD SEQUENCE (5 touches):
1. Initial response \u2014 acknowledge interest, offer a free home value estimate
2. Value-add (Day 3) \u2014 share a recent comparable sale in their area with brief analysis
3. Market positioning (Week 1) \u2014 "here's what's happening in your neighborhood" with data
4. Soft ask (Week 3) \u2014 offer a no-obligation listing consultation
5. Re-engagement (Month 2) \u2014 seasonal or market-triggered check-in

For each message: provide text/SMS version (under 160 chars) and email version.`,
      },
      {
        number: 4,
        title: 'Create a seller listing presentation outline',
        description: 'Build a listing presentation framework you can customize for each seller appointment.',
        prompt: `I need a listing presentation framework I can customize for each potential seller.

My details:
- My name and brokerage: [NAME, BROKERAGE]
- My experience: [YEARS in business, transactions closed, areas of specialty]
- My marketing approach: [e.g. "professional photography, social media, open houses, broker tours, targeted digital ads"]
- What makes me different: [LIST 2-3 differentiators]

Please create:
1. A listing presentation outline (8-10 slides/sections) covering: why me, my marketing plan, pricing strategy, timeline and process, and what sellers can expect
2. A pricing conversation script \u2014 how to handle "I want to list higher than comps suggest" professionally
3. Three "closing" questions I can ask at the end of the presentation to move toward signing
4. A follow-up email template to send after the listing appointment if they didn't sign on the spot
5. A one-page "leave behind" summary I can print \u2014 highlights of my marketing plan and recent results`,
      },
    ],
    expectations: {
      good: 'Listing descriptions that took 30 minutes to write can be drafted in 2 minutes. The lead nurture sequence ensures no lead goes more than 48 hours without a touchpoint.',
      ifBad: 'AI-generated listing copy needs your local knowledge. Always add neighborhood-specific details the AI can\u2019t know.',
      time: 'The lead nurture sequence from Step 3 is the highest-ROI output \u2014 consistent follow-up is the #1 differentiator between agents who convert and those who don\u2019t.',
    },
    downloadFile: 'realestate-listings-leads-beginner.md',
    problems: ['get-customers'],
  },
  {
    slug: 'realestate-market-authority-intermediate',
    tag: 'Real Estate Agent',
    tagColor: '#16A34A',
    title: 'Become the Market Expert Everyone Calls First',
    description: 'Create market reports, build CMA presentations, and plan your business so you grow year-over-year.',
    difficulty: 'Intermediate',
    time: '~30 min',
    tools: 'ChatGPT or Claude \u00B7 Your MLS data + market stats',
    intro: 'The best agents don\u2019t just compete on relationships \u2014 they compete on knowledge. But creating market reports, building polished CMA presentations, and planning your business year takes time most agents don\u2019t have. This guide helps you use AI to turn raw MLS data into professional market reports, build a CMA template that elevates your listing presentations, and create an annual business plan that drives growth.',
    outcomes: [
      'A professional monthly market report you can email and post on social media',
      'A CMA presentation template with plain-English adjustments explanations',
      'A 12-month business plan with lead targets and a quarterly scorecard',
    ],
    steps: [
      {
        number: 1,
        title: 'Gather your market data',
        description: 'Pull the key market stats from your MLS for your target area(s).',
        dataNote: 'Pull from MLS: median sale price, average days on market, active inventory count, months of supply, price per square foot, list-to-sale price ratio, and month-over-month trends \u2014 all for your target area(s) over the last 6\u201312 months. Also note any major local developments.',
      },
      {
        number: 2,
        title: 'Create a monthly market report',
        description: 'Turn raw stats into a professional, branded market report that positions you as the local expert.',
        prompt: `I'm a real estate agent and I want to create a professional monthly market report I can email to my database and post on social media.

My market data for [MONTH, YEAR] in [CITY/NEIGHBORHOOD]:
- Median sale price: $[AMOUNT] (last month: $[AMOUNT])
- Average days on market: [NUMBER] (last month: [NUMBER])
- Active listings: [NUMBER] (last month: [NUMBER])
- Months of supply: [NUMBER]
- List-to-sale price ratio: [PERCENTAGE]
- Price per square foot: $[AMOUNT]
- Notable trends: [e.g. "inventory up 15%", "multiple offers returning", "luxury segment slowing"]

Please create:
1. A 1-page market report with: headline takeaway, 3-4 key stats with brief explanations, a "What This Means for Buyers" section, a "What This Means for Sellers" section, and a brief market outlook
2. A social media caption version (Instagram/Facebook) summarizing the report in 3-4 sentences with a call to action
3. An email version I can send to my database \u2014 brief intro, key stats, and "want to know what this means for your home? Let's talk."
4. Format the report so it looks professional when shared as an image or PDF`,
      },
      {
        number: 3,
        title: 'Build a CMA presentation template',
        description: 'Create a comparative market analysis presentation that\u2019s data-driven but seller-friendly.',
        prompt: `I need a comparative market analysis presentation template I can customize for each seller consultation.

My details:
- My target area: [CITY/NEIGHBORHOODS]
- Typical property types I work with: [e.g. single-family, condos, townhouses]
- My approach to pricing: [e.g. "data-driven, competitive pricing to maximize offers" or "strategic positioning based on condition and market timing"]

Please create a CMA presentation structure with:
1. An opening section explaining what a CMA is and why it matters (in plain language, not agent jargon)
2. A comp selection section \u2014 how I chose the comparables (proximity, recency, similarity) with placeholders for 3-5 comps showing: address, sale price, beds/baths/sqft, price per sqft, days on market, and condition notes
3. An adjustments section \u2014 explain in plain English why adjustments are made (e.g. "your home has a pool and Comp 1 doesn't, so we adjust upward") with a simple adjustment table
4. A pricing recommendation section \u2014 suggested list price with a price range and reasoning
5. A "what happens if we price too high" section showing average DOM and price reduction data for overpriced listings in my market
6. A visual summary page: recommended price, expected DOM, estimated net proceeds after commissions and typical closing costs`,
      },
      {
        number: 4,
        title: 'Draft your 12-month business plan',
        description: 'Create an annual plan with reverse-engineered goals, lead targets, and a quarterly review framework.',
        prompt: `I want to create an annual business plan for my real estate practice.

My current situation:
- Last year's transactions: [NUMBER] (volume: $[AMOUNT])
- This year's goal: [NUMBER] transactions / $[AMOUNT] volume
- Average commission: [PERCENTAGE or $AMOUNT]
- My lead sources: [LIST with approximate percentage \u2014 e.g. "Referrals 40%, Zillow 20%, Open Houses 15%, Social Media 10%, Sphere 15%"]
- My biggest challenge: [DESCRIBE \u2014 e.g. "inconsistent lead gen", "too many leads not enough conversions", "can't break into luxury", "no systems"]
- Monthly business expenses: $[AMOUNT]

Please create:
1. A reverse-engineered goal calculator \u2014 how many leads, appointments, and listings I need per month to hit my transaction goal (with conversion rate assumptions)
2. A lead generation plan by source \u2014 specific monthly targets for each lead source, with action items
3. A quarterly marketing calendar \u2014 what to focus on each quarter (spring market prep, summer listings, fall buyers, winter planning)
4. A monthly scorecard template \u2014 key metrics to track (leads, appointments, listings taken, closings, revenue) with space for actual vs. goal
5. A quarterly review framework \u2014 questions to ask myself every 90 days to course-correct`,
      },
    ],
    expectations: {
      good: 'Agents who send monthly market reports consistently become the first call when someone\u2019s thinking about buying or selling. The CMA template elevates your listing presentations above the competition.',
      ifBad: 'Market data goes stale fast. Set a calendar reminder to update your report on the 1st of each month.',
      time: 'The 12-month business plan from Step 4 is what separates agents who grow year-over-year from those who stay flat. Most agents never do this \u2014 which is your advantage.',
    },
    downloadFile: 'realestate-market-authority-intermediate.md',
    problems: ['scale-up'],
  },

  // ── PHASE 2: UNIVERSAL GUIDES ──

  {
    slug: 'social-media-content-calendar',
    tag: 'All Businesses',
    tagColor: '#4338CA',
    title: 'Build a 30-Day Content Calendar Without the Burnout',
    description: 'Create a content system with pillars, a full month of posts, and a batch production workflow so you never stare at a blank screen again.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude \u00B7 Your business details + social platforms',
    intro: 'Every small business owner knows they "should be posting" but can\u2019t stay consistent. They post in bursts, run out of ideas, and go silent for weeks. There\u2019s no system \u2014 just guilt. This guide helps you use AI to define your content pillars, generate a full month of posts with captions and visuals, and set up a batch production workflow so you can knock out all your content in one sitting.',
    outcomes: [
      'Content pillars and a weekly posting rhythm tailored to your business',
      'A complete 30-day content calendar with captions, formats, and hashtags',
      'A monthly batch production workflow so you create everything in 2\u20133 hours',
    ],
    steps: [
      {
        number: 1,
        title: 'Define your content foundations',
        description: 'Before generating content, clarify who you\u2019re talking to, where, and what you can authentically speak about.',
        dataNote: 'Identify: your business type, who your ideal customer is (age, interests, what they care about), which platforms you\u2019re active on (or want to be), how often you currently post, and 3\u20135 topics you could talk about authentically.',
      },
      {
        number: 2,
        title: 'Generate your content pillars and post types',
        description: 'Use AI to create a structured content strategy with pillars, post types, and a posting rhythm.',
        prompt: `I run a [BUSINESS TYPE] in [CITY].

My ideal customer is: [DESCRIBE \u2014 e.g. "busy parents aged 30-45 who want convenience", "homeowners looking for reliable service", "young professionals who care about quality"]

I'm active on: [PLATFORMS \u2014 e.g. Instagram, Facebook, TikTok, LinkedIn]

Topics I can speak to authentically:
- [TOPIC 1 \u2014 e.g. "behind-the-scenes of how we work"]
- [TOPIC 2 \u2014 e.g. "tips and education for customers"]
- [TOPIC 3 \u2014 e.g. "customer transformations or success stories"]
- [TOPIC 4 \u2014 e.g. "local community involvement"]
- [TOPIC 5 \u2014 e.g. "my journey as a business owner"]

Please create:
1. 4-5 content pillars for my business \u2014 each with a name, description, and why it resonates with my audience
2. For each pillar, suggest 3 specific post types (e.g. educational tip, behind-the-scenes video, customer spotlight, before/after, poll/question)
3. A recommended weekly posting rhythm \u2014 how many times per week to post on each platform, and which pillars to rotate through
4. A list of 10 "evergreen" post ideas I can recycle every few months`,
      },
      {
        number: 3,
        title: 'Build the 30-day calendar',
        description: 'Generate a full month of post ideas with draft captions, visual formats, and posting times.',
        prompt: `Using the content pillars we created, please generate a full 30-day content calendar.

For each day, include:
1. The content pillar it falls under
2. Post topic/idea (specific, not vague)
3. A draft caption (ready to edit and post)
4. Suggested visual format: photo, carousel, short video/reel, story, or text post
5. Best time to post based on general engagement data for [MY PLATFORMS]
6. Any relevant hashtags (5-10 per post, mix of broad and niche)

Organize by week (Week 1-4) and include a mix of pillars each week.
For promotional posts, keep them to no more than 20% of total content.`,
      },
      {
        number: 4,
        title: 'Create a batch production workflow',
        description: 'Set up a system to produce all your content in one 2\u20133 hour session per month instead of scrambling every day.',
        prompt: `I want to produce all my content in one 2-3 hour session per month instead of scrambling every day.

My situation:
- I [do/don't] have someone to help with content
- I'm comfortable with: [photo / video / both / neither \u2014 I need to start simple]
- Tools I currently use or am willing to try: [e.g. "Canva, my phone camera, CapCut" or "nothing yet"]

Please create:
1. A step-by-step monthly batching workflow:
   - How to plan the shoot/content gathering (30 min)
   - How to capture all photos and videos in one session (60 min)
   - How to write all captions in one sitting (45 min)
   - How to schedule everything using a free tool (30 min)
2. A shot list template I can use each month \u2014 based on my content pillars, what specific photos/videos do I need?
3. A recommended scheduling tool (free) and how to set it up
4. A monthly content batching checklist I can print and follow every month`,
      },
    ],
    expectations: {
      good: 'Having 30 days of content pre-planned eliminates the "what should I post?" paralysis. Most owners find they can batch-produce a month of content in 2\u20133 hours.',
      ifBad: 'Don\u2019t try to be on every platform. Pick 1\u20132 where your customers actually are and focus there.',
      time: 'The batch production workflow from Step 4 is what makes this sustainable. Without a system, even great content plans die after week 2.',
    },
    downloadFile: 'social-media-content-calendar.md',
    problems: ['get-customers', 'scale-up'],
  },
  {
    slug: 'cash-flow-management',
    tag: 'All Businesses',
    tagColor: '#4338CA',
    title: 'Stop Running Out of Cash Before the Month Runs Out',
    description: 'Build a cash flow forecast, plan for slow seasons, and create a monthly financial review routine.',
    difficulty: 'Intermediate',
    time: '~30 min',
    tools: 'ChatGPT or Claude \u00B7 Your revenue + expense data (last 6\u201312 months)',
    intro: 'Most small business owners manage cash flow by checking their bank balance. They don\u2019t forecast, don\u2019t plan for slow seasons, and get blindsided by tax payments, equipment repairs, or payroll gaps. Running out of cash is the #1 reason small businesses fail \u2014 and it\u2019s almost always preventable with basic forecasting. This guide walks you through building a 90-day cash flow forecast, planning for seasonal dips, and setting up a monthly financial review routine.',
    outcomes: [
      'A week-by-week 90-day cash flow forecast with danger zone alerts',
      'A slow-season survival plan with cash reserve targets and revenue-smoothing strategies',
      'A 30-minute monthly cash flow review routine',
    ],
    steps: [
      {
        number: 1,
        title: 'Gather your financial snapshot',
        description: 'Collect the financial data you need for an accurate forecast.',
        dataNote: 'Collect: monthly revenue for the last 6\u201312 months, fixed monthly expenses (rent, insurance, loans, subscriptions), variable monthly expenses (supplies, inventory, contractors), upcoming known large expenses (taxes, insurance renewals, equipment), and your current cash reserve.',
      },
      {
        number: 2,
        title: 'Build a 90-day cash flow forecast',
        description: 'Create a week-by-week projection of cash in, cash out, and your net position \u2014 so you can see problems before they hit.',
        prompt: `I run a [BUSINESS TYPE] and I need to understand my cash flow for the next 90 days.

Here is my financial data:
- Monthly revenue (last 6-12 months): [LIST BY MONTH \u2014 e.g. Jan: $18k, Feb: $15k, Mar: $22k...]
- Fixed monthly expenses: $[AMOUNT] (breakdown: rent $X, insurance $X, loan payments $X, subscriptions $X, other $X)
- Variable monthly expenses (average): $[AMOUNT] (breakdown: supplies $X, inventory $X, contractors $X, other $X)
- Upcoming known large expenses: [LIST with dates \u2014 e.g. "quarterly taxes $4,500 due April 15", "insurance renewal $2,800 due May 1", "equipment repair $1,200 estimated"]
- Current cash reserve: $[AMOUNT]
- Outstanding receivables (money owed to me): $[AMOUNT] expected by [DATES]

Please create:
1. A week-by-week cash flow projection for the next 90 days \u2014 showing expected cash in, committed cash out, and net cash position at the end of each week
2. Flag any weeks where my cash position drops below $[MINIMUM COMFORTABLE AMOUNT]
3. Identify my "danger zone" \u2014 the minimum cash I need on hand to cover 2 weeks of operations
4. Suggest 3 specific actions I can take now if any weeks look tight (delay a payment, accelerate a receivable, cut a discretionary expense)`,
      },
      {
        number: 3,
        title: 'Identify and plan for slow seasons',
        description: 'Analyze your revenue patterns for seasonality and build a plan to survive \u2014 and smooth \u2014 the dips.',
        prompt: `Using my revenue data, help me understand and prepare for my slow periods.

My monthly revenue history:
[PASTE 12+ MONTHS OF REVENUE DATA]

My business type: [TYPE]
My busiest months are typically: [LIST]
My slowest months are typically: [LIST]

Please analyze:
1. Confirm my seasonal pattern \u2014 show me the revenue curve across the year and identify my slow season precisely (which months, how much of a dip)
2. Calculate how much cash reserve I need to survive my slowest period without cutting staff or quality
3. Suggest 3-5 strategies to smooth seasonal revenue dips \u2014 specific to my business type (e.g. prepaid packages, off-season services, retainer agreements, seasonal promotions)
4. Create a "slow season prep checklist" \u2014 what to do 60, 30, and 7 days before my slow season starts
5. Calculate: if I set aside $X per month during peak season, will I have enough to cover the slow period gap?`,
      },
      {
        number: 4,
        title: 'Create a monthly cash flow review routine',
        description: 'Set up a simple 30-minute monthly check-in so you always know where your cash stands.',
        prompt: `I need a simple monthly routine to stay on top of my cash flow \u2014 something I can do in 30 minutes.

My comfort level with finances: [e.g. "I know the basics", "I have a bookkeeper", "I just look at my bank balance"]
My accounting tool: [e.g. QuickBooks, Wave, spreadsheet, nothing]

Please create:
1. A 30-minute monthly cash flow review checklist \u2014 step by step, what to look at and in what order
2. A simple template to compare actual vs. projected revenue and expenses (forecast vs. reality)
3. Three key numbers I should know at all times \u2014 and what each one tells me about the health of my business
4. Warning signs that mean I need to take action NOW (not next month)
5. A quarterly "bigger picture" review \u2014 questions to ask myself every 90 days about pricing, expenses, and growth`,
      },
    ],
    expectations: {
      good: 'Most owners are surprised by how predictable their cash flow patterns actually are once they see 6 months of data laid out. The 90-day forecast eliminates most cash surprises.',
      ifBad: 'If you don\u2019t have clean financial data, start with bank statements. Categorize deposits and withdrawals for the last 3 months \u2014 that\u2019s enough to spot patterns.',
      time: 'The monthly review routine from Step 4 takes 30 minutes and prevents the panicked "can I make payroll?" moments. It\u2019s the single most valuable habit a business owner can build.',
    },
    downloadFile: 'cash-flow-management.md',
    problems: ['fix-profits', 'scale-up'],
  },
  {
    slug: 'hiring-and-onboarding',
    tag: 'All Businesses',
    tagColor: '#4338CA',
    title: 'Hire Smarter and Get New Staff Productive in 30 Days',
    description: 'Write job posts that attract the right people, interview with a scorecard, and onboard new hires with a structured 30-day plan.',
    difficulty: 'Intermediate',
    time: '~30 min',
    tools: 'ChatGPT or Claude \u00B7 Your role requirements + current processes',
    intro: 'Small business owners write vague job posts, interview by gut feel, and onboard by throwing new hires into the deep end. The result: bad hires, slow ramp-up, and turnover that costs more than the salary itself. This guide helps you use AI to write job posts that attract the right candidates, build a structured interview scorecard, and create a 30-day onboarding plan that gets new staff productive fast.',
    outcomes: [
      'A job post that leads with what makes your workplace different',
      'A structured interview scorecard with questions mapped to must-have skills',
      'A day-by-day first week and week-by-week first month onboarding plan',
    ],
    steps: [
      {
        number: 1,
        title: 'Define the role clearly',
        description: 'Before writing a job post, get clear on what you actually need.',
        dataNote: 'Identify: job title, key responsibilities (what they\u2019ll actually do daily), must-have vs. nice-to-have skills, pay range, schedule, what success looks like at 30/60/90 days, and why someone would want to work for you specifically.',
      },
      {
        number: 2,
        title: 'Write a job post that attracts the right people',
        description: 'Create a job post that stands out from the generic "must be a team player" listings.',
        prompt: `I run a [BUSINESS TYPE] called [BUSINESS NAME] in [CITY] and I need to hire a [JOB TITLE].

Role details:
- What they'll actually do daily: [DESCRIBE in plain language \u2014 e.g. "greet customers, manage the schedule, handle phone calls, process payments, keep the front area clean"]
- Must-have skills: [LIST \u2014 e.g. "reliable, good with people, comfortable with computers, can work Saturdays"]
- Nice-to-have: [LIST \u2014 e.g. "experience in [industry]", "bilingual", "social media savvy"]
- Pay: $[RANGE] per [hour/year]
- Schedule: [DETAILS \u2014 e.g. "Tuesday-Saturday, 9am-5pm"]
- Benefits: [LIST what you offer \u2014 e.g. "flexible scheduling, employee discount, tips, PTO after 90 days"]
- What makes this a good place to work: [BE HONEST \u2014 e.g. "small team, casual environment, owner is hands-on and supportive", "room to grow"]

Please create:
1. A job post that leads with what makes working here different (not a boring requirements list)
2. Describe the actual daily work so applicants can picture themselves doing it
3. Include pay range and real schedule (transparency attracts better candidates)
4. End with 1-2 application screening questions that filter out low-effort applicants (e.g. "What's one thing you'd do to make a customer's day better?")
5. Write a version for Indeed/LinkedIn AND a shorter version for Instagram/social media`,
      },
      {
        number: 3,
        title: 'Build an interview scorecard',
        description: 'Create a structured interview with questions mapped to your must-have skills and a scoring rubric.',
        prompt: `I need a structured interview process so I stop hiring based on gut feeling.

The role: [JOB TITLE]
Must-have skills: [LIST from Step 1]
The biggest reasons past hires didn't work out: [DESCRIBE \u2014 e.g. "unreliable attendance", "poor attitude with customers", "couldn't handle multitasking", "quit after 2 weeks"]

Please create:
1. 6-8 interview questions \u2014 each mapped to a specific must-have skill or trait
2. For each question: what a great answer sounds like vs. a red flag answer
3. A scoring rubric: 1-5 scale for each question with descriptions of what each score means
4. One practical scenario or role-play question (e.g. "A customer is upset because they've been waiting 20 minutes. What do you do?")
5. A section for "gut check" notes \u2014 things to observe during the interview (body language, enthusiasm, punctuality)
6. Red flags that should be automatic disqualifiers (regardless of scores)
7. Format as a printable one-page scorecard I can use during the interview`,
      },
      {
        number: 4,
        title: 'Create a 30-day onboarding plan',
        description: 'Build a structured plan so new hires know exactly what to learn and when, instead of figuring it out on their own.',
        prompt: `I need a structured onboarding plan so new hires actually succeed instead of being thrown into the deep end.

My business: [BUSINESS TYPE]
The role: [JOB TITLE]
Who currently trains new hires: [e.g. "me (the owner)", "a senior employee", "nobody \u2014 they figure it out"]
The biggest things a new hire needs to learn: [LIST \u2014 e.g. "our POS system, how we greet customers, our booking process, where supplies are, how to close up"]

Please create:
1. A Day 1 checklist \u2014 everything that should happen on their first day (paperwork, tour, introductions, first task, lunch plan)
2. A Week 1 plan (day by day) \u2014 what they learn each day, who teaches them, what they should be able to do independently by Friday
3. Weeks 2-4 plan (week by week) \u2014 gradual increase in responsibility, with specific milestones
4. Check-in schedule \u2014 when to have a 1-on-1 conversation (Day 3, Week 1, Week 2, Week 4) with suggested questions for each
5. A "30-Day Success Checklist" \u2014 a clear list of things the new hire should be able to do independently by Day 30
6. A simple "new hire feedback form" they can fill out at Day 30 \u2014 what's going well, what's confusing, what would help them do their job better`,
      },
    ],
    expectations: {
      good: 'A structured interview process dramatically reduces bad hires. The onboarding plan ensures new staff become productive in weeks instead of months.',
      ifBad: 'If you\u2019re hiring for a role you\u2019ve never had before, describe what you\u2019re currently doing yourself that you want to hand off \u2014 that becomes the job description.',
      time: 'The 30-day onboarding plan from Step 4 is what most small businesses skip. It\u2019s the difference between a new hire who\u2019s contributing in week 3 vs. one who\u2019s still asking basic questions in month 2.',
    },
    downloadFile: 'hiring-and-onboarding.md',
    problems: ['fix-operations', 'scale-up'],
  },
  {
    slug: 'competitive-differentiation',
    tag: 'All Businesses',
    tagColor: '#4338CA',
    title: 'Figure Out What Makes You Different (and Make Sure Customers Know It)',
    description: 'Map your competition, find your real differentiators, write your positioning, and embed it across your marketing.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude \u00B7 Your business details + competitor awareness',
    intro: 'When customers compare you to competitors, they see the same services at similar prices. Without a clear differentiator, you compete on price \u2014 which is a race to the bottom. Most small business owners know they\u2019re different but can\u2019t articulate it in a way that makes customers choose them. This guide helps you use AI to analyze your competitive landscape, find your real differentiators, write a positioning statement, and embed it across your marketing.',
    outcomes: [
      'A competitive analysis showing where you stand vs. your closest competitors',
      'A positioning statement, elevator pitch, and staff talking points',
      'Rewritten marketing copy that actually communicates what makes you different',
    ],
    steps: [
      {
        number: 1,
        title: 'Map your competitive landscape',
        description: 'Before you can differentiate, understand who you\u2019re being compared to and what they\u2019re saying.',
        dataNote: 'Identify: your 3\u20135 closest competitors, what they charge, what they emphasize in their marketing, what their Google reviews say (positive and negative), and what your own customers have told you about why they chose you.',
      },
      {
        number: 2,
        title: 'Find your actual differentiators',
        description: 'Analyze your business vs. competitors across multiple dimensions to find where you truly stand out.',
        prompt: `I run a [BUSINESS TYPE] called [BUSINESS NAME] in [CITY].

Here's my competitive landscape:
- Competitor 1: [NAME] \u2014 [what they charge, what they emphasize, their review highlights/complaints]
- Competitor 2: [NAME] \u2014 [same info]
- Competitor 3: [NAME] \u2014 [same info]
(add more if relevant)

About my business:
- What I charge: [PRICING]
- What I think I do well: [LIST]
- What customers have told me they like: [LIST \u2014 from reviews, conversations, or feedback]
- What I'd like to be known for: [DESCRIBE]

Please analyze:
1. Compare me vs. each competitor across: service quality, pricing, convenience, specialization, customer experience, brand personality, and online presence
2. Identify my 2-3 strongest differentiators \u2014 things I do that competitors can't easily copy
3. Identify any "table stakes" I'm missing \u2014 things competitors offer that I don't, which might be costing me customers
4. Suggest one untapped positioning opportunity \u2014 a gap in the market none of my competitors are filling
5. Be honest: if a customer is comparing us side by side, what's the reason they'd choose me? What's the reason they'd choose someone else?`,
      },
      {
        number: 3,
        title: 'Write your positioning statement',
        description: 'Turn your differentiators into clear, memorable language you and your staff can use everywhere.',
        prompt: `Based on the competitive analysis, help me articulate what makes my business different in a way customers immediately understand.

Please create:
1. A positioning statement (1-2 sentences) \u2014 the core of what makes me different and who I'm for
2. An elevator pitch (30 seconds / 3-4 sentences) \u2014 for networking events, casual conversations, or when someone asks "what do you do?"
3. A "Why Us" section for my website (150-200 words) \u2014 compelling, specific, not generic
4. 3 talking points my staff can use when customers ask "why should I choose you?" \u2014 natural language, not salesy
5. A tagline or slogan option (5-8 words) that captures my positioning
6. A "we're NOT for everyone" statement \u2014 who is NOT my ideal customer (this actually attracts the right people)`,
      },
      {
        number: 4,
        title: 'Embed differentiation in your marketing',
        description: 'Audit your current marketing for generic language and replace it with your positioning.',
        prompt: `Now help me make sure my positioning actually shows up in my marketing \u2014 not just in my head.

My current marketing:
- Website: [URL or describe what's on it]
- Social media: [which platforms, how often I post, what I post about]
- Google Business Profile: [describe current description]
- Other marketing: [signage, flyers, email, referral program, etc.]

Please:
1. Audit my current marketing for generic language \u2014 flag any phrases that could describe ANY business in my industry (e.g. "quality service", "customer satisfaction", "years of experience")
2. Rewrite my homepage headline and description around my differentiators
3. Rewrite my Google Business Profile description (750 characters max) with positioning language
4. Create 5 social media posts that reinforce my positioning \u2014 each highlighting a different differentiator with a specific story or proof point
5. Suggest one "signature experience" or touchpoint I could add to my customer journey that reinforces what makes me different`,
      },
    ],
    expectations: {
      good: 'Most owners discover their real differentiator isn\u2019t what they expected. The positioning statement gives you \u2014 and your staff \u2014 a clear answer to "why us?" that isn\u2019t "we\u2019re the best."',
      ifBad: 'If you can\u2019t find a differentiator, that\u2019s a business strategy problem, not a marketing problem. The exercise itself reveals where you need to invest.',
      time: 'The staff talking points from Step 3 have an immediate impact. When every employee can articulate why you\u2019re different, every customer interaction reinforces your brand.',
    },
    downloadFile: 'competitive-differentiation.md',
    problems: ['get-customers'],
  },
  {
    slug: 'medical-billing-efficiency',
    tag: 'Medical Practice',
    tagColor: '#C4622D',
    title: 'Make Your Medical Billing More Efficient',
    description: 'Map your billing workflow, find where time and money leak, and build a streamlined process your team can follow.',
    difficulty: 'Beginner',
    time: '~25 min',
    tools: 'ChatGPT or Claude · Your billing process knowledge',
    intro: 'Most small practices lose money on billing not because the claims are wrong, but because the process is slow, inconsistent, and full of manual handoffs nobody has mapped out. Before you can improve billing — with AI or anything else — you need to see where the bottlenecks actually are. This guide walks you through mapping your current billing workflow, identifying the biggest time and money leaks, and building a cleaner process your front desk and billing staff can follow.',
    outcomes: [
      'A clear map of your current billing workflow from patient check-in to payment collected',
      'A ranked list of your biggest billing bottlenecks and where money is leaking',
      'A streamlined billing process checklist your team can start using this week',
    ],
    steps: [
      {
        number: 1,
        title: 'Map your current billing workflow',
        description: 'Before you can fix anything, you need to see the full picture. Most practice owners have never written down every step between "patient walks in" and "payment hits the bank account." This prompt helps you do that.',
        dataNote: 'Think through who does what at each stage: front desk, provider, billing staff, clearinghouse, payer. Even rough descriptions are useful.',
        prompt: `I run a small [SPECIALTY, e.g. "family medicine" / "orthopedics" / "dermatology"] practice with [NUMBER] providers and [NUMBER] support staff.

Here is how our billing process currently works, step by step (as best as I can describe it):

[DESCRIBE YOUR PROCESS — e.g. "Patient checks in, front desk verifies insurance manually, provider sees patient and documents in [EMR NAME], coder reviews notes next day, claims go to clearinghouse, we check for rejections weekly..."]

Please help me:
1. Organize this into a clear step-by-step workflow diagram (numbered steps, who does each step, what tool or system they use)
2. Identify any steps that seem redundant, manual, or likely to cause delays
3. Flag where handoffs between people happen — these are where things typically fall through the cracks
4. Estimate where the biggest time sinks are based on what I've described`,
      },
      {
        number: 2,
        title: 'Find your biggest billing leaks',
        description: 'Now that you can see the full workflow, this prompt helps you identify where you\'re losing the most money — whether it\'s claim denials, slow follow-up, coding errors, or patients who owe but never pay.',
        dataNote: 'If you have any of these numbers, include them: denial rate, average days to payment, percentage of claims that need rework, patient collections rate. Estimates are fine.',
        prompt: `Here is my practice's billing workflow:
[PASTE THE WORKFLOW FROM STEP 1]

Here are some numbers I have (estimates are fine):
- Our approximate claim denial rate: [X% or "I don't know"]
- Average days from service to payment: [X days or "I don't know"]
- Percentage of claims that need rework or resubmission: [X% or "I don't know"]
- What percentage of patient balances we actually collect: [X% or "I don't know"]
- Our biggest frustration with billing right now: [DESCRIBE]

Please help me:
1. Identify the top 3 places where we're most likely losing money in this workflow
2. For each one, estimate the potential impact (in time, money, or both)
3. Rank them by which would give us the biggest return if we fixed it first
4. For each leak, suggest one simple fix we could implement this week without buying new software`,
      },
      {
        number: 3,
        title: 'Build a streamlined billing checklist',
        description: 'Take the improved workflow and turn it into a daily/weekly checklist your team can actually follow. This is the most valuable output — a process that runs consistently without you having to manage every step.',
        prompt: `Based on the billing workflow and leaks we identified:

[PASTE WORKFLOW FROM STEP 1]
[PASTE TOP LEAKS FROM STEP 2]

Please create two checklists for my billing team:

1. A DAILY billing checklist — the 5-8 things that must happen every day to keep claims moving (e.g. verify insurance for tomorrow's patients, submit today's claims, check for rejections)

2. A WEEKLY billing review checklist — the things we should check once a week to catch problems early (e.g. review aging A/R, follow up on denied claims older than 7 days, check patient balance collections)

For each item, include:
- Who is responsible (front desk, biller, provider, etc.)
- When it should be done (morning, end of day, specific day of week)
- What "done" looks like (so there's no ambiguity)

Keep it to one page. If it's longer than that, my staff won't use it.`,
      },
      {
        number: 4,
        title: 'Set up your billing health baseline',
        description: 'You can\'t improve what you don\'t measure. This prompt helps you identify the 5 key numbers to track monthly so you can see whether your billing is getting better or worse over time.',
        prompt: `I run a small [SPECIALTY] practice. I want to start tracking my billing performance monthly but I don't know what to measure or where to find the data.

My EMR/practice management system is: [SYSTEM NAME, e.g. "athenahealth" / "AdvancedMD" / "DrChrono" / "I'm not sure"]

Please help me:
1. Give me the 5 most important billing KPIs I should track monthly, with a simple definition of each
2. For each KPI, tell me what "good" looks like for a small [SPECIALTY] practice
3. For each KPI, tell me where I can probably find this number in my system (or how to calculate it manually)
4. Create a simple monthly tracking template I can fill in — just a table with the KPI, this month's number, last month's number, and whether it's trending up or down

Keep it simple. I don't have a data analyst — this needs to be something I or my office manager can do in 15 minutes at the end of each month.`,
      },
    ],
    expectations: {
      good: 'The workflow map from Step 1 is often an eye-opener — most owners haven\'t seen their billing process written out end-to-end before. The daily checklist from Step 3 has the most immediate impact.',
      ifBad: 'If the output feels too generic, add more specifics about your EMR system, staff size, and the exact frustrations you deal with. The more specific your input, the more actionable the output.',
      time: 'The daily checklist can be implemented immediately. Track your baseline KPIs for 2-3 months before making big changes so you can actually measure the impact.',
    },
    downloadFile: 'medical-billing-efficiency.md',
    problems: ['fix-operations'],
  },
  {
    slug: 'medical-billing-ai-measurement',
    tag: 'Medical Practice',
    tagColor: '#C4622D',
    title: 'Track What Your AI Billing System Is Actually Doing',
    description: 'Build a monthly scorecard to measure whether the AI tools in your EMR are actually improving your billing performance.',
    difficulty: 'Intermediate',
    time: '~25 min',
    tools: 'ChatGPT or Claude · Your billing KPIs and EMR data',
    intro: 'You\'re already paying for AI features in your EMR or billing system — maybe claim scrubbing, auto-coding, denial prediction, or eligibility checks. But can you actually point to what it\'s doing for you? Most practices can\'t. They turned it on, they\'re paying the monthly cost, and they have a vague sense it\'s "probably helping." This guide helps you build a simple scorecard so you can see exactly where AI is making a difference and where it isn\'t.',
    outcomes: [
      'A clear picture of which AI features in your billing stack are active and what they claim to do',
      'A monthly scorecard comparing your AI-assisted billing performance to your pre-AI baseline',
      'A "shadow audit" template to verify whether AI is catching what it says it\'s catching',
    ],
    steps: [
      {
        number: 1,
        title: 'Inventory your AI billing features',
        description: 'Most practice owners don\'t know exactly which AI features they\'re paying for or which ones are actually turned on. This prompt helps you take stock of what\'s running in your system.',
        dataNote: 'Check your EMR or billing system\'s settings, your subscription invoice, or ask your vendor rep. Common AI features: claim scrubbing, auto-coding suggestions, eligibility verification, denial prediction, payment posting.',
        prompt: `I run a small [SPECIALTY] practice using [EMR/BILLING SYSTEM NAME] for billing.

Here is what I know about the AI or automation features in my billing system:
- Features I know are turned on: [LIST THEM, or "I'm not sure"]
- Features I think might be running: [LIST THEM]
- What I'm paying monthly for AI/automation add-ons: [$X or "it's bundled, I don't know"]
- What my vendor says these features do: [DESCRIBE or "I haven't asked"]

Please help me:
1. Organize these into a simple inventory table: feature name, what it claims to do, whether it's confirmed active, and estimated monthly cost
2. Identify any common AI billing features I might have but don't know about — suggest which ones I should check in my system settings
3. For each active feature, define one specific metric I could track to measure whether it's actually working (e.g. "if AI claim scrubbing is working, your clean claim rate should be above 95%")
4. Flag any features where I'm likely paying but not getting value — either because they overlap with something else or because I'd need to configure them properly`,
      },
      {
        number: 2,
        title: 'Build your before-and-after comparison',
        description: 'The key question is: are things actually better since you turned on AI? This prompt helps you pull the numbers that answer that question, even if you didn\'t track a formal baseline.',
        dataNote: 'Pull what you can: denial rates, days in A/R, clean claim rate, collection rate, staff hours on billing. If you don\'t have pre-AI numbers, your EMR may have historical reports, or you can estimate based on what you remember.',
        prompt: `I want to compare my billing performance before and after implementing AI features in my billing system.

My AI features were turned on approximately: [DATE or "about X months ago"]

Here are my current billing metrics (best estimates are fine):
- Clean claim rate (claims accepted on first submission): [X%]
- Denial rate: [X%]
- Average days from service to payment: [X days]
- Claim rework rate (claims that need correction and resubmission): [X%]
- Staff hours spent on billing per week: [X hours]
- Patient balance collection rate: [X%]

Here is what I remember about these numbers BEFORE the AI features:
[SHARE WHAT YOU KNOW — even "denials felt higher" or "it used to take about X days" helps]

Please help me:
1. Build a side-by-side comparison table: metric, pre-AI estimate, current number, change, and whether that change is meaningful
2. For any metrics where I don't have a pre-AI number, suggest how I might reconstruct a rough baseline (e.g. pulling old reports, asking my clearinghouse)
3. Highlight which metrics show the AI is clearly helping, which show no change, and which might actually be worse
4. Calculate a rough dollar impact where possible — e.g. "if your denial rate dropped 3%, that's approximately $X per month in recovered revenue based on your claim volume"`,
      },
      {
        number: 3,
        title: 'Run a shadow audit',
        description: 'Numbers don\'t tell the whole story. A "shadow audit" means manually checking a small sample of what the AI handled to see if it\'s actually doing what it claims. This is how you find out if the AI is genuinely helping or just creating a false sense of security.',
        prompt: `I want to run a one-week shadow audit of my AI billing features to verify they're working correctly.

My active AI features are:
[PASTE YOUR INVENTORY FROM STEP 1]

Please create a shadow audit plan for me:

1. For each AI feature, define:
   - What to sample (e.g. "pull 10 claims the AI scrubbed this week")
   - What to check manually (e.g. "were there errors the AI missed? Did it flag anything that wasn't actually wrong?")
   - How to score it (e.g. "X out of 10 claims had no issues the AI missed = X% accuracy")

2. Create a simple tracking sheet I can use for one week with columns for: date, claim/task reviewed, what the AI did, whether the AI was correct, and notes

3. Tell me what to look for that would indicate:
   - The AI is working well and worth the cost
   - The AI is partially working but needs configuration changes
   - The AI isn't doing much and I should reconsider paying for it

Keep the audit manageable — no more than 15 minutes per day for one week.`,
      },
      {
        number: 4,
        title: 'Create your monthly AI billing scorecard',
        description: 'Turn everything you\'ve learned into a simple one-page scorecard you review monthly. This is how you keep visibility on whether your AI investment is paying off over time.',
        prompt: `Based on the analysis we've done:

AI Features Inventory: [PASTE FROM STEP 1]
Before/After Comparison: [PASTE KEY FINDINGS FROM STEP 2]
Shadow Audit Results: [PASTE KEY FINDINGS FROM STEP 3]

Please create a monthly AI billing scorecard for my practice:

1. List the 5-6 most important metrics to track monthly, based on what we've found matters most for my practice
2. For each metric, include: the metric name, where to find the number, what "good" looks like, and a red/yellow/green threshold
3. Include a section for "AI feature status" — a quick check that each feature is still active and configured correctly
4. Add a "cost vs. value" line: total monthly AI cost vs. estimated monthly value delivered (based on our calculations)
5. Include a quarterly decision prompt: "Based on 3 months of data, should we keep, adjust, or cancel each AI feature?"

Format this as a clean one-page template I can print or save as a PDF. My office manager should be able to fill it in in 20 minutes.`,
      },
    ],
    expectations: {
      good: 'The inventory in Step 1 often reveals features you didn\'t know you were paying for. The shadow audit in Step 3 is where most practices have their "aha moment" — either confirming the AI works or discovering it\'s not configured properly.',
      ifBad: 'If you can\'t find your billing metrics, ask your clearinghouse or billing system vendor for a standard performance report. Most systems have this built in but practices never pull it.',
      time: 'The shadow audit takes one week. After that, the monthly scorecard takes 20 minutes. Most practices know within 2-3 months whether their AI investment is paying off.',
    },
    downloadFile: 'medical-billing-ai-measurement.md',
    problems: ['fix-profits'],
  },
  {
    slug: 'medical-billing-ai-roi',
    tag: 'Medical Practice',
    tagColor: '#C4622D',
    title: 'Calculate the True ROI of Your AI Billing Investment',
    description: 'Build a complete cost-benefit analysis to decide whether your AI billing tools are worth keeping, adjusting, or replacing.',
    difficulty: 'Advanced',
    time: '~30 min',
    tools: 'ChatGPT or Claude · Your billing costs, AI invoices, and performance data',
    intro: 'You know what you\'re paying for AI in your billing workflow. You may even be tracking some metrics. But the real question is harder: when you add up everything — the subscription cost, the staff time to manage it, the training, the errors it misses — is the AI actually saving you money compared to the alternatives? This guide helps you build a true cost-benefit analysis so you can make a clear-eyed decision about your AI billing investment.',
    outcomes: [
      'A total cost of ownership analysis for your AI billing tools — not just the subscription, but everything',
      'A side-by-side comparison of your current AI cost vs. alternatives (in-house, outsourced, hybrid)',
      'A data-backed recommendation on whether to keep, adjust, or replace your AI billing setup',
    ],
    steps: [
      {
        number: 1,
        title: 'Calculate your true AI billing cost',
        description: 'The subscription fee is just the starting point. The real cost includes staff time managing the system, training, workarounds for things the AI doesn\'t handle, and opportunity cost. This prompt helps you capture the full picture.',
        dataNote: 'Gather: your AI/EMR billing subscription invoices, staff hours spent on billing (including managing the AI), any clearinghouse fees, and costs of any manual processes that supplement the AI.',
        prompt: `I want to calculate the TRUE total cost of using AI in my billing workflow — not just the software subscription.

Here is my current setup:
- Practice size: [NUMBER] providers, [NUMBER] support/billing staff
- EMR/billing system: [SYSTEM NAME]
- Monthly AI/automation subscription cost: [$X]
- Monthly clearinghouse fees: [$X]
- Other billing-related software costs: [$X]

Staff time spent on billing-related tasks per week:
- Front desk (insurance verification, data entry): [X hours/week]
- Billing staff (claim submission, follow-up, denials): [X hours/week]
- Provider time on documentation for billing: [X hours/week]
- Office manager oversight of billing: [X hours/week]

Average hourly cost of each role (salary + benefits, roughly):
- Front desk: [$X/hr]
- Billing staff: [$X/hr]
- Provider: [$X/hr]
- Office manager: [$X/hr]

Please calculate:
1. My total monthly billing cost (software + staff time + overhead), broken into categories
2. My cost per claim processed (total monthly billing cost ÷ total monthly claims)
3. What percentage of my practice revenue goes to billing (use [MONTHLY REVENUE] as my approximate monthly revenue)
4. A breakdown showing: how much is the AI subscription specifically, vs. staff time, vs. other costs — so I can see the full picture
5. Flag any costs that seem unusually high or low for a practice my size`,
      },
      {
        number: 2,
        title: 'Compare against your alternatives',
        description: 'Now that you know your true cost, compare it to the realistic alternatives: fully outsourced billing, fully in-house with no AI, or a hybrid model. This isn\'t hypothetical — it\'s the actual decision you need to make.',
        prompt: `Here is my current total billing cost analysis:
[PASTE YOUR RESULTS FROM STEP 1]

My practice does approximately [NUMBER] claims per month.
My average claim value is approximately [$X].
My current collection rate is approximately [X%].

I want to compare my current AI-assisted billing setup against three alternatives:

Option A: Fully outsourced billing company
- Typical industry rate: 4-9% of collections (or $X per claim)
- I had a previous outsourced billing company that cost: [$X/month or X% — if applicable]

Option B: Fully in-house, no AI tools
- What it would cost to hire a dedicated biller: [$X/year or "I don't know — please estimate for my area"]
- What my billing looked like before AI: [DESCRIBE — e.g. "slower but we had fewer errors" or "we had more denials"]

Option C: Hybrid (keep some AI, outsource some, in-house some)
- Which billing tasks the AI handles well: [LIST]
- Which tasks still require heavy staff involvement: [LIST]

Please:
1. Build a side-by-side cost comparison table for all four options (current + A, B, C)
2. For each option, estimate: monthly cost, cost per claim, cost as % of revenue
3. Factor in non-cost considerations: control, speed, error rates, scalability, staff burden
4. Highlight the break-even point — at what claim volume does each option make more sense?
5. Give me your recommendation based on my numbers, with clear reasoning`,
      },
      {
        number: 3,
        title: 'Quantify the value your AI is delivering',
        description: 'Cost is only half the equation. This prompt helps you put a dollar value on what the AI is actually doing for you — claims it catches, time it saves, denials it prevents. This is the number you compare against the cost.',
        dataNote: 'If you\'ve done the Intermediate billing guide, pull your scorecard data and shadow audit results. If not, use your best estimates.',
        prompt: `I need to quantify the actual VALUE my AI billing tools deliver — not what they cost, but what they save or earn.

Here is what I know about my AI billing performance:
- Clean claim rate (with AI): [X%] — before AI it was approximately: [X%]
- Denial rate (with AI): [X%] — before AI it was approximately: [X%]
- Average days to payment (with AI): [X days] — before AI it was approximately: [X days]
- Staff hours on billing per week (with AI): [X hours] — before AI it was approximately: [X hours]
- Any other improvements I've noticed: [DESCRIBE]

My practice numbers:
- Average claims per month: [NUMBER]
- Average claim value: [$X]
- Monthly revenue: [$X]

Please calculate:
1. Revenue recovered from reduced denials: (denial rate improvement × claims per month × average claim value)
2. Cash flow improvement from faster payments: (days saved × monthly revenue ÷ 30 = working capital freed)
3. Staff time savings: (hours saved per week × hourly cost × 4.3 weeks)
4. Error reduction value: (estimated claims that would have been rejected without AI scrubbing × average rework cost per claim)
5. TOTAL MONTHLY VALUE delivered by AI

Then compare:
- Total monthly AI cost (from Step 1): $X
- Total monthly AI value: $X
- NET ROI: value minus cost
- ROI ratio: for every $1 spent on AI, you get $X back

If the ROI is negative, flag exactly where the gap is and what would need to change to make it positive.`,
      },
      {
        number: 4,
        title: 'Make your keep, adjust, or replace decision',
        description: 'Put it all together into a clear recommendation you can act on. This isn\'t about gut feeling — it\'s about the numbers telling you what to do.',
        prompt: `Here is my complete AI billing analysis:

Total Cost Analysis: [PASTE FROM STEP 1]
Alternatives Comparison: [PASTE FROM STEP 2]
Value Delivered: [PASTE FROM STEP 3]

Based on all of this, help me make a final decision:

1. Summarize my situation in 3 sentences: what I'm paying, what I'm getting, and whether it's worth it

2. Give me one of three recommendations:
   - KEEP: The AI is delivering clear ROI. Here's what to monitor to make sure it stays that way.
   - ADJUST: The AI has potential but isn't configured or used optimally. Here are the specific changes to make (and expected impact of each).
   - REPLACE: The numbers don't support the current setup. Here's the specific alternative I should switch to, with a transition plan.

3. If ADJUST: Create a 30-60-90 day optimization plan with specific actions and expected metric improvements

4. If REPLACE: Create a transition timeline — what to do first, how to avoid disruption, and what the expected savings are

5. Regardless of recommendation: give me 3 questions to ask my AI/EMR vendor at our next meeting, based on what the data shows

Be direct. I need a clear answer, not a hedge.`,
      },
    ],
    expectations: {
      good: 'The total cost analysis in Step 1 is usually surprising — most practices underestimate their true billing cost by 30-50% because they don\'t count staff time. The ROI calculation in Step 3 gives you an actual number to make decisions with.',
      ifBad: 'If you don\'t have enough data for a precise analysis, the estimates still help. A rough ROI calculation is infinitely better than "I think it\'s probably fine." Run the Intermediate guide first to build your baseline.',
      time: 'This is a one-time analysis. Once you have the framework, updating it quarterly takes 30 minutes. Most practices make their keep/adjust/replace decision within one month of running this analysis.',
    },
    downloadFile: 'medical-billing-ai-roi.md',
    problems: ['fix-profits'],
  },
]

export default guides
