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
  },
]

export default guides
