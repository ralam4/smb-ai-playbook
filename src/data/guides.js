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
    difficulty: 'Beginner',
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
]

export default guides
