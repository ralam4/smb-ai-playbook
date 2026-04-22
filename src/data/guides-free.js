const freeGuides = [
  {
    slug: 'fill-empty-slots',
    tier: 'free',
    title: 'Fill Your Empty Appointment Slots',
    description:
      'Analyze your booking data to find the slow hours, identify clients who’ve drifted away, and draft re-engagement messages that actually bring them back.',
    difficulty: 'Beginner',
    time: '~20 min',
    tools: 'ChatGPT or Claude · Your booking or appointment data',
    intro:
      'Empty appointment slots during slow hours are one of the biggest margin leaks in any appointment-based business. Most owners know which days feel slow — but not exactly which slots, which staff, or which clients are most likely to rebook. This guide walks you through using AI to analyze your booking data, identify your dead zones, and draft targeted messages to fill them. It works for barbershops, salons, spas, medical practices, dental offices, fitness studios, music teachers, tutors, photographers, and any business that runs on a calendar.',
    outcomes: [
      'A clear breakdown of your slowest booking slots by day and time',
      'A list of clients who haven’t returned in 60+ days, segmented by how recently they were active',
      'A ready-to-send re-engagement message you can text, email, or post',
    ],
    steps: [
      {
        number: 1,
        title: 'Get your data out of your booking tool',
        description:
          'Most scheduling platforms (Square Appointments, Calendly, Acuity, Booksy, Vagaro, Mindbody, Jane, SimplePractice, etc.) let you export appointment history as a CSV. Pull the last 90 days. You want: date, time, staff name (if applicable), service type, and client name or ID.',
        dataNote:
          'You don’t need to clean the file. Paste the relevant columns as-is. If your tool doesn’t allow export, screenshot your busiest and slowest weeks side by side — AI can work with that too. If you only have paper records, list a typical busy week and a typical slow week manually.',
      },
      {
        number: 2,
        title: 'Find the slots that stay empty',
        description:
          'Paste your data into ChatGPT or Claude and use the prompt below. You’re looking for patterns — specific days, times, or staff members with consistently low utilization.',
        prompt: `I want to analyze my appointment data for the last 90 days and find my slowest booking slots.

My business type: [e.g. barbershop, medical practice, yoga studio, tutoring service]
My typical operating hours: [e.g. Tue–Sat 9am–7pm]
Number of staff or providers: [NUMBER]

Here is my data:
[PASTE YOUR CSV DATA OR MANUALLY LIST YOUR WEEKLY SCHEDULE HERE]

Please help me:
1. Identify which days of the week have the lowest booking volume
2. Identify which time slots (morning, midday, afternoon, evening) are consistently underbooked
3. Flag any staff members or providers who have significantly more empty slots than others
4. Calculate my overall utilization rate (booked hours ÷ available hours) and flag the worst-performing days
5. Summarize the top 2–3 patterns I should pay attention to`,
      },
      {
        number: 3,
        title: 'Build your re-engagement list',
        description:
          'Now use the same data to find clients who visited once or twice but haven’t returned in 60+ days. These are your warmest leads — they’ve already chosen you once.',
        prompt: `Using the same appointment data, please:
1. Identify clients who visited at least once but have not had an appointment in the last 60 days
2. Group them by how recently they last visited (60–90 days ago, 90–120 days ago, 120+ days ago)
3. For each group, note how many visits they had total before going quiet
4. Flag any clients who had 3+ visits and then disappeared — these are the highest-value re-engagement targets

I want to prioritize who to reach out to first.`,
      },
      {
        number: 4,
        title: 'Write the message',
        description:
          'Pick the segment you want to target first and generate a message you can send via text, email, or DM. Keep it personal, not promotional.',
        prompt: `I want to reach out to clients who haven't visited my business in 60–90 days.

My business is called [BUSINESS NAME] and I'm located in [CITY].
My most popular service is [SERVICE — e.g. "a fresh haircut", "a 60-minute massage", "a private lesson"].
I'm currently [open / running a slow week / have morning availability / offering a small incentive].

Please write:
1. A short text message (under 160 characters) I can send directly
2. A slightly longer email or DM version (2–3 sentences)
3. A subject line if I wanted to send this as an email
4. A variation tone-matched for repeat clients vs. one-time visitors

Keep it warm and personal, not salesy. The goal is a conversation, not a pitch.`,
      },
    ],
    expectations: {
      good: 'Most businesses discover 1–2 specific time slots (e.g. "Tuesday mornings") that are dragging their overall utilization down. Even reactivating 5–10 clients from your dormant list typically covers months of whatever this analysis cost you in time.',
      ifBad:
        'If your data is spotty or you’re new, start with a single week. List every appointment you had and every slot that was empty. Even a 7-day snapshot reveals patterns.',
      time: 'The re-engagement message (Step 4) is the highest-leverage output. One text to 20 dormant clients, sent on a slow Tuesday morning, will usually outperform a month of new-client marketing.',
    },
    downloadFile: null,
    problems: ['get-customers'],
  },
]

export default freeGuides
