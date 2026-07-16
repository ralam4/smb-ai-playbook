const photographerAgents = [
  {
    slug: 'photographer-inquiry-agent',
    industry: 'photographer',
    name: 'Inquiry-to-Booking Agent',
    icon: 'envelope',
    tagline: 'The first reply lands in minutes, not whenever you get back to your desk.',
    description:
      'Drafts a personalized reply to every website and Instagram DM inquiry within minutes, checks your real calendar before mentioning a date, and runs a gentle follow-up sequence on leads who go quiet.',
    difficulty: 'Beginner',
    buildTime: '~3 hours',
    runningCost: '$0–30/month',
    timeSaved: '~3 hours/week',
    stack: ['ChatGPT or Claude', 'Zapier or Make (free tier)', 'Google Calendar', 'Your website form or Instagram inbox'],
    whatItDoes:
      'A lead fills out your website form at 9pm asking about a fall engagement session. Instead of finding your reply the next afternoon, they get a warm, specific response within minutes — one that references their session type and pulls real open dates from your Google Calendar instead of guessing. If a date is booked, the agent says so honestly and offers the two nearest open weekends. It never invents a custom price; it points to your published price sheet or offers a call. If they go quiet, a three-touch follow-up checks back over two weeks without sounding desperate. Every draft lands in your inbox for a quick read-and-send — you stay the one who books the client.',
    outcomes: [
      'Every inquiry gets a personalized reply within minutes, not whenever you next check email',
      'Faster first response measurably lifts inquiry-to-booking rate — speed is the single biggest lever in a competitive market',
      'No date ever gets confirmed without checking your actual calendar first',
      'Leads who go quiet get a tactful nudge instead of disappearing forever',
      'Custom pricing never leaks into a reply — the agent always points to your real price sheet',
    ],
    costBreakdown: [
      {
        item: 'ChatGPT or Claude (free tier)',
        cost: '$0/mo',
        note: 'covers most solo photographers handling 10–20 inquiries/month',
      },
      {
        item: 'Zapier or Make (free tier)',
        cost: '$0/mo',
        note: 'free tier task limits comfortably cover a single-form, single-calendar workflow',
      },
      {
        item: 'Google Calendar',
        cost: '$0/mo',
        note: 'free with any Google account; the calendar check is what keeps the agent from over-promising',
      },
      {
        item: 'Zapier Professional or Make Core (optional)',
        cost: '$20–30/mo',
        note: 'only needed once you\'re past ~100 automation tasks/month or want faster multi-step follow-ups',
      },
    ],
    roi: 'Studies on lead response time consistently find that replying within 5 minutes converts multiples better than replying within an hour, and photography inquiries are no exception — brides and families often message 3–5 photographers the same night and book whoever responds first with a real, specific answer. If this agent helps you convert even one additional inquiry a month at an average session value of $300–2,000, it has paid for a year of the optional paid tier many times over. On the time side, most photographers spend 20–40 minutes a day checking and answering inquiries in scattered moments between shoots and edits; this collapses that into a 5-minute approval pass, saving roughly 2–3 hours a week — worth $60–90/week of your time against a tool cost that tops out at $30/month.',
    steps: [
      {
        number: 1,
        title: 'Write your booking voice and policy sheet',
        description:
          'Before the agent can draft a reply, it needs to know exactly how you talk to leads and, just as importantly, what it\'s never allowed to promise. This step is worth doing on its own even before you automate anything.',
        dataNote:
          'Gather 5–10 past inquiry replies you\'re proud of, your current published price sheet or starting prices, and a list of session types you offer.',
        prompt: `I'm a [SESSION TYPES, e.g. wedding and family] photographer in [CITY/REGION] and I want to build a booking voice and policy sheet so an AI can draft inquiry replies that sound like me and never overpromise.

My business name: [BUSINESS NAME]
My session types and starting prices from my published price sheet: [LIST — e.g. Engagement sessions from $450, Full wedding coverage from $2,800]
Past inquiry replies I've written that I liked (paste 3–5): [PASTE]
My personality in replies: [e.g. warm and a little casual / polished and detail-oriented / laid-back and encouraging]
Phrases I actually use: [specific to how you talk]
Things I never say: [e.g. "reaching out," "circle back," anything that sounds like a form letter]

Please build me:
1. **3–5 tone words** describing how I sound in a reply — specific, not generic ("warm but efficient" beats "friendly")
2. **An opening line style** — how I greet a new inquiry so it doesn't read like a template
3. **A pricing-mention rule** — the exact phrasing I use to reference pricing without ever inventing a custom quote (should always point to my real price sheet or a call)
4. **5 example replies** in my voice for different inquiry types: a wedding inquiry with a specific date, an inquiry with a date I'm not available for, a vague "just checking prices" inquiry, an inquiry mentioning a tight budget, and an inquiry that includes a lot of detail about their vision
5. **A sign-off style** — how I close and invite the next step
6. **A "never promise" list** — specific things a reply should never confirm (an exact date before checking the calendar, a discount, a custom price, availability more than the season out)

Save this as my booking voice guide — every future inquiry-reply prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Connect your inquiry form and calendar',
        description: 'Give the automation a live feed of new inquiries and a live view of your actual availability.',
        dataNote:
          'You\'ll need admin access to your website form tool (or Instagram/Facebook inbox), your Google Calendar, and a free Zapier or Make account.',
      },
      {
        number: 3,
        title: 'Build the inquiry-reply drafting prompt',
        description: 'This is the engine — a new inquiry and your real calendar availability go in, a personalized draft comes out.',
        prompt: `Using my booking voice guide from Step 1, build me a repeatable prompt template that drafts a reply to any new inquiry.

My booking voice guide: [PASTE FROM STEP 1]
My business name: [BUSINESS NAME]

Build me a prompt template that takes a new inquiry (name, session type, requested date if given, any details they shared) plus my real calendar availability for the next 90 days, and outputs a draft reply following these rules:
1. **Reference something specific** from what they wrote — never a generic "thanks for reaching out"
2. **If they gave a specific date**: check it against my provided availability. If open, confirm warmly. If not open, say so honestly and offer the 2 nearest open weekends instead — never leave a date question unanswered
3. **If they asked about pricing**: point to my published price sheet or starting prices from the voice guide, and invite a call for full package details — never invent or estimate a custom number
4. **If the inquiry is vague** (just "how much do you charge"): ask 1–2 clarifying questions (session type, rough date, location) before pointing to pricing
5. **If the inquiry mentions a budget that's clearly below my starting price**: respond warmly and honestly rather than pretending it could work, and suggest a smaller session type if I offer one that fits
6. **Length**: [SHORT: 3–5 sentences / MEDIUM: a short paragraph], matching my voice guide

Output format: just the reply text, ready to paste into email — no preamble like "Here's a draft."`,
      },
      {
        number: 4,
        title: 'Wire up the Zapier automation',
        description: 'Connect the inquiry trigger, the calendar check, the AI drafting step, and your approval inbox into one flow.',
        dataNote:
          'You\'ll need your Zapier or Make account, the prompt template from Step 3, and an email address or Slack channel you check daily for drafts to approve.',
      },
      {
        number: 5,
        title: 'Set up your daily approval habit',
        description:
          'The agent drafts, you send. Pick one or two fixed check-in times a day so leads never wait more than a few hours — this is what keeps the speed advantage real.',
      },
      {
        number: 6,
        title: 'Build the quiet-lead follow-up sequence',
        description: 'Most inquiries that don\'t book don\'t say no — they just go quiet. A tactful nudge recovers a meaningful slice of them.',
        prompt: `I want a 3-touch follow-up sequence for inquiries who haven't responded after my first reply.

My business: [BUSINESS NAME], [SESSION TYPES]
My booking voice guide: [PASTE FROM STEP 1]

Please write:
1. **Follow-up #1 (3–4 days after my first reply, no response)**: light, no-pressure check-in, references their original inquiry detail specifically
2. **Follow-up #2 (10 days after my first reply)**: offers one small piece of value — a relevant gallery link, an answer to a common question I haven't addressed yet — without being pushy
3. **Follow-up #3 (3 weeks after my first reply)**: a warm, low-pressure close — "no worries if the timing shifted, I'm here whenever you're ready" — that leaves the door open without demanding a reply
4. A rule for **when to stop**: after follow-up #3, the lead moves to a "cold" list and gets no further automated messages unless they respond

Keep every message in my voice guide's tone — none of these should read like a sales funnel.`,
      },
    ],
    systemPrompt: `You are the Inquiry Assistant for [BUSINESS NAME], a [SESSION TYPES, e.g. wedding and portrait] photography business in [CITY/REGION]. Your job is to draft replies to new client inquiries for the photographer to review and send. You never send anything automatically.

VOICE
Write like the photographer themselves, not a studio account. Tone: [TONE WORDS FROM VOICE GUIDE, e.g. warm, detail-oriented, genuinely excited about each client's story]. Use contractions. Keep replies to [LENGTH RULE FROM VOICE GUIDE]. Never use form-letter phrases: "thank you for reaching out," "we look forward to hearing from you," "please don't hesitate to contact us."

RESPONSE STRUCTURE
For every inquiry, output:
1. A one-line classification: [SPECIFIC DATE REQUEST], [VAGUE PRICING QUESTION], [DETAILED INQUIRY], or [BUDGET MISMATCH]
2. The draft reply text, ready to paste
3. If a date was requested: one line noting whether the requested date is OPEN or BOOKED per the calendar data provided, and what to do next

RULES FOR DATES
- Never confirm, imply, or hold a date as available unless you were explicitly given current calendar data showing it open. If no calendar data was provided for this inquiry, say so and output "NEEDS CALENDAR CHECK" instead of guessing.
- If a requested date is booked, say so plainly and offer the two nearest open weekends from the calendar data provided — never leave the date question unanswered or vague.
- Never promise to "pencil in" or "hold" a date without a deposit — that language implies a commitment the photographer hasn't made.

RULES FOR PRICING
- Never state a custom, negotiated, or estimated dollar figure. Only reference the published starting prices provided in the price sheet, and invite the lead to a call or the full pricing guide for details.
- If a lead's stated budget is clearly below the relevant starting price, say so honestly and warmly rather than implying it might work — suggest a smaller package if one exists, or be upfront that it may not be a fit.
- Never offer a discount, package substitution, or "deal" on your own initiative.

TONE FOR DIFFICULT REPLIES
- Vague inquiries ("how much do you charge?"): ask 1–2 clarifying questions before pointing to pricing, don't dump the full price sheet on someone who hasn't shared what they need.
- Detailed, emotional inquiries (describing a proposal story, a family milestone): mirror that warmth specifically — reference what they actually shared, don't respond generically.

WHAT YOU NEVER DO
- Never send a reply without human review and approval
- Never confirm a date without explicit current calendar data
- Never state a custom or estimated price — only published starting prices
- Never offer a discount or promotional deal unprompted
- Never fabricate details about the photographer's availability, style, or past work that weren't provided

If you're ever unsure whether a claim in a draft is accurate — a date, a price, an availability window — flag it for the photographer to confirm rather than guessing.`,
    guardrails: [
      'Every draft is reviewed by the photographer before sending — at least while the system is new and until you\'ve verified a solid track record of accurate drafts.',
      'Never quotes a custom or estimated price — the agent only references the firm\'s actual published price sheet and invites a call for details.',
      'Never confirms or implies a date is available without a live calendar check — if calendar data wasn\'t provided for that inquiry, it flags "NEEDS CALENDAR CHECK" instead of guessing.',
      'Never offers a discount, "deal," or package substitution on its own initiative — pricing flexibility stays a human decision.',
      'Never uses language implying a date is "held" or "penciled in" without a deposit, which could create a commitment the photographer hasn\'t actually made.',
      'Follow-up sequence automatically stops after the third touch and moves quiet leads to a cold list rather than messaging indefinitely.',
    ],
    testChecklist: [
      'Send it an inquiry requesting a date that\'s booked on the calendar; confirm it says so plainly and offers two real open alternatives instead of staying vague.',
      'Send it an inquiry asking "how much do you charge" with no other detail; confirm it asks a clarifying question before pointing to pricing, rather than dumping the full price list.',
      'Send it an inquiry with a stated budget below your lowest package price; confirm it responds honestly rather than implying it could work.',
      'Send it an inquiry with no calendar data attached; confirm it outputs "NEEDS CALENDAR CHECK" rather than guessing availability.',
      'Check that across 10 test drafts, none of them state a specific negotiated dollar amount that isn\'t on the published price sheet.',
      'Send it a detailed, emotional inquiry (e.g. a proposal story) and confirm the draft references specific details rather than reading like a generic template.',
    ],
    maintenance:
      'Once a month, skim the past 30 days of sent replies for tone drift and re-paste 2–3 recent inquiries into your voice guide prompt if it\'s started sounding generic. Update your published price sheet reference the moment prices change — an out-of-date price sheet is the single most common failure point. Check your calendar sync is actually pulling current data, especially after any Google Calendar or automation platform changes. Review your quiet-lead list quarterly to spot any leads worth a personal, non-automated follow-up. Budget 15–20 minutes.',
  },

  {
    slug: 'photographer-client-prep-agent',
    industry: 'photographer',
    name: 'Client Prep & Delivery Agent',
    icon: 'camera',
    tagline: 'Shoot-day guides that go out on time, and gallery deliveries that gently sell the album.',
    description:
      'Sends a personalized shoot-prep guide a set number of days before every session and a warm gallery-delivery message with print and album upsell language the moment the gallery is ready.',
    difficulty: 'Beginner',
    buildTime: '~3 hours',
    runningCost: '$0–20/month',
    timeSaved: '~2 hours/week',
    stack: ['ChatGPT or Claude', 'Canva (free tier)', 'Pixieset or ShootProof (free/starter tier)', 'Zapier (free tier)'],
    whatItDoes:
      'Five days before every booked session, this agent drafts a specific prep guide for that client — what to wear for their exact session and location, arrival time, what to bring, and what to expect — pulled from your booking details, not a generic PDF everyone gets. The night the gallery goes live, it drafts a delivery message that\'s warm and personal, walks the client through viewing and downloading their images, and includes tasteful print and album upsell language matched to what they booked, without a pushy sales pitch. Both drafts land in your inbox for a quick read before sending — you\'re still the one who hits send, but no longer starting from a blank page every time.',
    outcomes: [
      'Every client gets a specific, useful prep guide instead of a generic PDF or nothing at all',
      'Fewer shoot-day surprises — wrong outfit colors, missing props, confusion about arrival time',
      'Gallery delivery messages go out the same day the gallery is ready, not whenever you get around to it',
      'Print and album upsells are woven naturally into delivery instead of forgotten entirely',
      'A consistent, polished client experience even during your busiest shoot months',
    ],
    costBreakdown: [
      {
        item: 'ChatGPT or Claude (free tier)',
        cost: '$0/mo',
        note: 'comfortably covers drafting for 5–15 sessions a month',
      },
      {
        item: 'Pixieset or ShootProof (free/starter tier)',
        cost: '$0/mo',
        note: 'free tiers support gallery hosting and basic print-store integration for smaller shoot volumes',
      },
      {
        item: 'Zapier (free tier)',
        cost: '$0/mo',
        note: 'free tier task limits are plenty for a scheduled prep-guide trigger and a gallery-ready trigger',
      },
      {
        item: 'Canva Pro (optional)',
        cost: '$13–20/mo',
        note: 'only needed if you want a branded, designed prep-guide template rather than a plain-text email',
      },
    ],
    roi: 'Prep guides and delivery messages are exactly the kind of task that\'s easy to skip when you\'re busy but expensive to skip well — a client who shows up unsure what to wear, or who waits three extra days for a "your gallery is ready" email, remembers it. Most photographers spend 20–30 minutes per client writing these from scratch (or don\'t send them at all), which adds up to 2–3 hours a week during a busy month. This agent collapses that to a 5-minute review per client. The bigger payoff is on the print/album side: photographers who consistently include upsell language in delivery messages report meaningfully higher print-and-album attach rates than those who send a bare download link — even converting 1–2 extra clients a month into a $75–200 print order covers the entire cost of this agent many times over.',
    steps: [
      {
        number: 1,
        title: 'Build your prep-guide content library',
        description:
          'The agent needs real material to pull from for each session type before it can write something specific instead of generic.',
        dataNote:
          'Gather your standard advice per session type — what to wear, what to bring, typical timing — even if it currently lives in your head or scattered old emails.',
        prompt: `I'm a [SESSION TYPES] photographer in [CITY/REGION] and I want to build a prep-guide content library so an AI can write a specific, useful prep guide for any client I book.

My session types: [LIST — e.g. family, engagement, senior portraits, newborn]
For each session type, my current advice (or best-guess notes) on:
- What to wear / color palette suggestions: [NOTES]
- What to bring: [NOTES — props, outfit changes, etc.]
- Typical arrival/start time and duration: [NOTES]
- Location-specific tips (if I shoot at recurring locations): [NOTES]
- Common questions clients ask before a shoot: [LIST]

My voice: [e.g. warm and reassuring / upbeat and practical / calm and detail-oriented]

Please organize this into:
1. **A prep-guide template per session type** — sections for outfit guidance, what to bring, timing, and location tips
2. **A "nervous first-timer" add-on** — extra reassurance language for clients who've never done a session like this before
3. **A weather-contingency note** — what I tell clients if their outdoor session might need to move indoors or reschedule
4. **A tone guide** — 3–4 words describing how this should sound, with a short example paragraph

Save this as my prep-guide library — every future prep-guide prompt will pull from it.`,
      },
      {
        number: 2,
        title: 'Connect your booking calendar and gallery platform',
        description: 'Give the automation a trigger for "5 days before a booked session" and "gallery just went live."',
        dataNote:
          'You\'ll need access to whatever you use to track bookings (calendar, CRM, or booking software) and your Pixieset/ShootProof account, plus a free Zapier account.',
      },
      {
        number: 3,
        title: 'Build the prep-guide drafting prompt',
        description: 'This is the engine that turns one client\'s booking details into a specific, ready-to-send guide.',
        prompt: `Using my prep-guide library from Step 1, build me a repeatable prompt template that drafts a session prep guide for any booked client.

My prep-guide library: [PASTE FROM STEP 1]
My business name: [BUSINESS NAME]

Build me a prompt template that takes a client's booking details (name, session type, date, time, location, any notes from our booking conversation) and outputs a prep guide following these rules:
1. **Pull the right template** from my library based on session type
2. **Personalize it** — reference their actual date, time, and location, and any specific details they mentioned when booking (a specific outfit question, a pet joining the shoot, mobility considerations)
3. **Include the nervous first-timer add-on** only if the booking notes indicate this is their first session with me
4. **Include the weather-contingency note** only for outdoor sessions
5. **Length**: a scannable email — headers, short bullet points, not a dense paragraph
6. **Sign-off**: matches my tone guide, invites a reply if they have questions

Output format: ready-to-paste email text, including a subject line suggestion.`,
      },
      {
        number: 4,
        title: 'Build the gallery-delivery message prompt',
        description: 'The counterpart engine — a finished gallery goes in, a warm delivery message with tasteful upsell language comes out.',
        prompt: `I want a prompt template that drafts a gallery-delivery message when a client's gallery is ready, including natural print/album upsell language.

My prep-guide library and tone guide: [PASTE FROM STEP 1]
My print/album offerings and starting prices: [LIST — e.g. prints from $15, albums from $250]
My gallery platform: [Pixieset / ShootProof / other]

Build me a prompt template that takes a client's name, session type, and gallery link, and outputs a delivery message that:
1. Opens warmly, references their specific session (not a generic "your photos are ready!")
2. Gives clear, simple instructions for viewing, downloading, and sharing the gallery
3. Mentions print and album options once, naturally, framed around the value of holding the images rather than a hard sell — never states a custom discounted price, only the published starting prices I gave you
4. Notes the gallery expiration date if my platform sets one, so they don't miss it
5. Closes with an invitation to reach out with questions

Output format: ready-to-paste email text with a subject line suggestion, [SHORT: under 150 words / MEDIUM: under 250 words].`,
      },
      {
        number: 5,
        title: 'Wire up the two automations',
        description: 'Chain a "5 days before session" trigger to the prep-guide prompt, and a "gallery published" trigger to the delivery prompt.',
        dataNote:
          'You\'ll need your Zapier account and either calendar/CRM API access or a habit of a quick manual trigger when you publish a gallery.',
      },
      {
        number: 6,
        title: 'Set up your review-and-send habit',
        description:
          'Both drafts land in your inbox for you to personalize further if needed and hit send — this keeps every message feeling genuinely from you, not automated.',
      },
    ],
    systemPrompt: `You are the Client Communications Assistant for [BUSINESS NAME], a [SESSION TYPES] photography business in [CITY/REGION]. You draft two things for the photographer to review and send: pre-session prep guides and gallery-delivery messages. You never send anything automatically.

VOICE
Tone: [TONE WORDS FROM PREP-GUIDE LIBRARY, e.g. warm, reassuring, genuinely excited for each client]. Use contractions. Write like a photographer talking to their own client, not a studio operations team.

PREP GUIDE RULES
- Always personalize with the client's actual date, time, location, and any booking notes provided — never send a generic template with placeholder-feeling language.
- Pull outfit, what-to-bring, and timing guidance from the correct session-type template provided.
- Only include first-timer reassurance language if the booking notes indicate this is a new client.
- Only include the weather-contingency note for outdoor sessions.
- Keep it scannable: short headers and bullets, not dense paragraphs — clients skim these on their phones.
- If key booking details (date, time, or location) are missing, say so explicitly and ask the photographer to confirm before this goes out, rather than guessing or leaving a blank.

GALLERY DELIVERY RULES
- Reference the client's specific session type — never a generic "your photos are ready!"
- Mention print/album options exactly once, framed around the value of physical prints and albums, never as a hard sell or urgency tactic ("today only," "limited time").
- Only reference the photographer's actual published starting prices for prints and albums — never estimate, discount, or invent a number.
- Always include the gallery link and, if the platform has one, the expiration date, clearly and near the top.
- Keep the message to [LENGTH RULE] — clients should be able to read it in 20 seconds.

WHAT YOU NEVER DO
- Never send a message without human review and approval
- Never fabricate a client's booking details (date, time, location, session type) that weren't explicitly provided
- Never invent or discount a print/album price beyond the published starting prices
- Never use pressure or urgency language around print/album offers
- Never omit the gallery expiration date if one was provided, since missing it could cost the client access to their photos

If any required detail (date, time, location, session type, gallery link) is missing from the input, say so and ask for it rather than guessing or leaving it out silently.`,
    guardrails: [
      'Every prep guide and delivery message is reviewed by the photographer before sending, at least until the system has a proven track record.',
      'Never quotes a discounted or custom print/album price — only the photographer\'s actual published starting prices.',
      'Never fabricates booking details (date, time, location) that weren\'t explicitly provided — flags missing details instead of guessing.',
      'Never uses urgency or pressure language around print/album upsells.',
      'Always includes the gallery expiration date when the platform provides one, so clients don\'t lose access to their photos.',
    ],
    testChecklist: [
      'Feed it a booking with a missing session time; confirm it flags the gap and asks for confirmation rather than inventing a time.',
      'Feed it a first-time client\'s outdoor session booking; confirm the draft includes both the first-timer reassurance and the weather-contingency note.',
      'Feed it a repeat client\'s indoor session; confirm the draft skips both the first-timer note and the weather note.',
      'Feed it a gallery-delivery request and confirm the print/album mention appears exactly once, uses only published starting prices, and contains no urgency language.',
      'Feed it a gallery with an expiration date and confirm that date appears clearly in the draft.',
    ],
    maintenance:
      'Every season, refresh your prep-guide library\'s outfit and weather advice — what counts as "dress warm" changes between June and January. Update print/album starting prices in your delivery-message prompt the moment they change in real life. Skim a handful of recent drafts each month for tone drift, especially after a busy stretch when you might have skipped careful review. Confirm your calendar and gallery triggers are still firing correctly after any change to your booking or gallery platform. Budget 15 minutes a month, plus 10 minutes each new season.',
  },

  {
    slug: 'photographer-content-repurposing-agent',
    industry: 'photographer',
    name: 'Content Repurposing Agent',
    icon: 'megaphone',
    tagline: 'One shoot becomes a blog post, a week of captions, and SEO alt text — automatically.',
    description:
      'Turns your image selects and shoot notes from a single session into a client-ready blog post, a week of social captions, and search-friendly alt text, so every shoot works harder for your marketing.',
    difficulty: 'Intermediate',
    buildTime: '~3 hours',
    runningCost: '$20–40/month',
    timeSaved: '~3–4 hours/week',
    stack: ['Claude Pro or ChatGPT Plus', 'Your blog platform (WordPress, Squarespace, Showit)', 'Canva or Publer (optional)'],
    whatItDoes:
      'After a shoot, you pick your 15–20 favorite images and jot a few quick notes — where it was, who it was for, anything memorable about the day. This agent turns that into a full blog post written in your voice and structured to rank for local searches like "[city] wedding photographer," a week of Instagram captions built around the same images, and SEO-optimized alt text for every photo you publish. A shoot that lived only in a gallery link becomes marketing content pulling search traffic and social engagement for months, without a blank page each time. You still review and edit before anything publishes — the agent gets you most of the way from raw notes to finished content.',
    outcomes: [
      'Every shoot produces a blog post, a week of captions, and alt text instead of just a delivered gallery',
      'Blog posts structured around local buyer-intent search terms clients actually type into Google',
      'A consistent content pipeline without staring at a blank page after every shoot',
      'Alt text on every published image, improving both SEO and accessibility',
      'Marketing content production scales with your shoot volume instead of competing with it for time',
    ],
    costBreakdown: [
      {
        item: 'Claude Pro or ChatGPT Plus',
        cost: '$20/mo',
        note: 'the free tier\'s message limits get tight when generating a full blog post plus a week of captions per shoot',
      },
      {
        item: 'Your blog platform',
        cost: '$0/mo',
        note: 'assumes you already have a website with a blog; no new subscription required',
      },
      {
        item: 'Publer or Buffer (optional)',
        cost: '$10/mo',
        note: 'only needed if you want to auto-schedule the week of captions rather than posting manually',
      },
      {
        item: 'Canva Pro (optional)',
        cost: '$10/mo',
        note: 'billed annually (~$13/mo month-to-month); useful for formatting blog header images and social graphics',
      },
    ],
    roi: 'Photographers who blog consistently and post regularly tend to see meaningfully more organic traffic and inquiry volume than those who only maintain a static portfolio — but the reason most photographers don\'t do it isn\'t lack of belief, it\'s that writing a full blog post and a week of captions from scratch after every shoot takes 3–4 hours they don\'t have. This agent compresses that into about 45 minutes: 15 minutes to pick images and jot notes, 30 minutes to review and lightly edit the drafts. At $30/hour of your time, that\'s roughly $90–120/month in owner time saved even at 4 shoots a month, against a tool cost of $20–40. The bigger payoff is compounding: a growing library of local, SEO-structured blog posts keeps working for you in search results long after the shoot itself is forgotten, which is difficult to put a single dollar figure on but is the actual engine behind most photographers\' organic inquiry growth.',
    steps: [
      {
        number: 1,
        title: 'Write your content voice and blog structure guide',
        description:
          'The agent needs a template for how your blog posts are structured and how they should sound before it can draft one from a folder of notes.',
        dataNote:
          'Pull 2–3 of your best past blog posts if you have them (or just decide on a structure), plus your target local search terms.',
        prompt: `I'm a [SESSION TYPES] photographer in [CITY/REGION] and I want to build a content voice and blog structure guide so an AI can turn my shoot notes into a ready-to-edit blog post.

My past blog posts I liked (paste 1–3, or describe roughly what I usually write): [PASTE OR DESCRIBE]
My target local search terms: [LIST — e.g. "[city] wedding photographer," "[city] engagement photos," "[neighborhood] family session"]
My blog platform: [WordPress / Squarespace / Showit / other]
My voice: [e.g. warm and story-driven / clean and detail-focused / a little playful]

Please build me:
1. **A standard blog post structure** — intro hook, story of the day, image gallery breaks, a closing call-to-action, roughly [WORD COUNT] words
2. **A voice guide** — 3–5 tone words, a sample paragraph in that voice
3. **An SEO checklist per post** — where to naturally work in the target local search term, a title tag format, a meta description format
4. **A caption style guide** — how a week of Instagram captions built from the same shoot should differ in length and tone from the blog post
5. **An alt-text formula** — a consistent, descriptive, keyword-natural pattern for image alt text (e.g. "[session type] photo of [subject] at [location] in [city]")

Save this as my content voice guide — every future shoot-recap prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Build your post-shoot notes habit',
        description: 'The agent can only work with what you give it — a 5-minute notes habit right after each shoot makes everything downstream better.',
        dataNote:
          'Right after each shoot (or the next morning), jot down: location, who the session was for, 2–3 memorable moments, and any specific details worth mentioning (weather, a funny moment, a meaningful location choice).',
      },
      {
        number: 3,
        title: 'Generate the blog post',
        description: 'This is the core prompt — your shoot notes and image selects in, a client-ready blog draft out.',
        prompt: `Using my content voice guide, write me a blog post from this shoot.

My content voice guide: [PASTE FROM STEP 1]
Session type: [TYPE]
Client (first name or "the [family/couple] name" if I want privacy): [NAME OR DESCRIPTOR]
Location: [LOCATION]
Date: [DATE]
My shoot notes: [PASTE — memorable moments, weather, specific details]
Target local search term for this post: [FROM MY LIST]
Number of images I'm including: [NUMBER]

Please write:
1. A **title** using my SEO title tag format, working in the target search term naturally
2. A **meta description** (150–160 characters) using my meta description format
3. The **blog post body**, following my standard structure — intro hook, story of the day pulled from my notes, natural breaks for image galleries (mark where images should go as [IMAGE BREAK]), closing call-to-action inviting inquiries
4. **Alt text for each image** using my alt-text formula — I'll tell you how many images and roughly what each shows

Keep the post grounded in the actual notes I gave you — don't invent details about the day that I didn't mention.`,
      },
      {
        number: 4,
        title: 'Generate the week of captions',
        description: 'Repurpose the same shoot into a week of social posts without duplicating the blog post word-for-word.',
        prompt: `Using the same shoot details and my content voice guide, write me a week of Instagram captions built from this session — different in length and tone from the blog post, per my caption style guide.

My content voice guide: [PASTE FROM STEP 1]
Blog post I just generated (for reference, so captions complement rather than repeat it): [PASTE OR SUMMARIZE]
Shoot details: [SESSION TYPE, LOCATION, NOTES FROM STEP 3]
Number of posts I want: [NUMBER, e.g. 4–5]

Please write, for each post:
1. A short caption in my voice, following my caption style guide's length rule — not a shortened copy of the blog post, a distinct social-first take
2. A suggested image to pair it with (describe which type of shot — wide establishing shot, detail shot, candid moment)
3. 5–8 relevant hashtags mixing local and session-type tags
4. One optional Story idea to go with it

Vary the angle across the week — don't write 5 captions that all say the same thing about the same day.`,
      },
      {
        number: 5,
        title: 'Review, publish, and schedule',
        description: 'Read through both drafts, make it fully yours, and publish the blog post before scheduling the week of captions.',
        dataNote: 'You\'ll need your blog platform login and, if using it, your Publer/Buffer scheduling tool.',
      },
    ],
    systemPrompt: `You are the Content Repurposing Assistant for [BUSINESS NAME], a [SESSION TYPES] photography business in [CITY/REGION]. Your job is to turn a photographer's post-shoot notes and image selects into a client-ready blog post draft, a week of Instagram captions, and SEO alt text. You never publish or post directly — every draft is for the photographer to review, edit, and publish themselves.

VOICE
Tone: [TONE WORDS FROM CONTENT VOICE GUIDE, e.g. warm, story-driven, genuinely present in the moment]. Write like the photographer telling a friend about the shoot, not a marketing agency writing ad copy.

BLOG POST RULES
- Follow the standard structure provided: intro hook, story of the day grounded in the actual notes given, marked image breaks, closing call-to-action.
- Naturally work the target local search term into the title, at least one heading, and the body — without keyword-stuffing or making it read unnaturally.
- Ground every detail in the shoot notes actually provided. Never invent specific moments, weather, or details that weren't mentioned — if the notes are thin, write a shorter, honest post rather than padding with fabricated detail.
- Produce a title following the SEO title format, a meta description (150–160 characters), and alt text for each image using the alt-text formula provided.

CAPTION RULES
- Captions must be genuinely distinct from the blog post, not a trimmed copy-paste — different angle, different length, social-native tone.
- Vary the angle across a week's worth of captions so they don't all repeat the same observation about the shoot.
- Hashtags should mix local/neighborhood tags with session-type tags relevant to the actual shoot.

PRIVACY
- If the photographer indicates a client wants privacy, use only a first name or a general descriptor ("the fall engagement session") rather than a full name, and never include identifying location details the client hasn't approved for public posting.

WHAT YOU NEVER DO
- Never publish or post directly — every output is a draft for review
- Never invent specific details, quotes, or moments about the shoot that weren't in the provided notes
- Never use a client's full name or specific home/venue address without explicit confirmation the client is comfortable being named publicly
- Never keyword-stuff a target search term in a way that reads unnaturally to a human

If the shoot notes provided are too thin to support a full post, say so explicitly and offer a shorter, honest draft rather than inventing filler to hit a word count.`,
    guardrails: [
      'Every blog post and caption set is reviewed and edited by the photographer before publishing — nothing goes live automatically.',
      'Never invents specific moments, quotes, or details about the shoot that weren\'t in the provided notes.',
      'Never uses a client\'s full name or specific home/venue address without explicit confirmation the client is comfortable being publicly named.',
      'Never keyword-stuffs local search terms in a way that would read unnaturally to a human reader.',
      'If shoot notes are too thin for a full post, says so and offers a shorter honest draft rather than padding with invented detail.',
    ],
    testChecklist: [
      'Feed it thin shoot notes (one sentence) and confirm it flags the gap and offers a shorter draft rather than fabricating a full story.',
      'Feed it a session where the client asked for privacy and confirm the draft uses only a first name or descriptor, with no specific address.',
      'Check that the generated week of captions doesn\'t read as a copy-paste of the blog post — confirm each caption takes a distinct angle.',
      'Confirm the blog post title and meta description both naturally include the target local search term without reading like keyword stuffing.',
      'Confirm alt text is generated for every image requested, following the alt-text formula consistently.',
    ],
    maintenance:
      'Every quarter, review which blog posts and search terms are actually driving traffic (a quick check in your website analytics or Google Search Console) and adjust your target search-term list toward what\'s working. Refresh your content voice guide if your brand voice shifts. Check in on your Publer/Buffer scheduling if you\'re using it, since platform API changes occasionally break auto-scheduling. Skim a handful of recent posts each month for accuracy and tone drift. Budget 20 minutes a month, plus 30 minutes each quarter for the traffic review.',
  },
]

export const pack = {
  industry: 'photographer',
  headline: 'Three AI agents that book, prep, and market your photography business',
  subhead:
    'Blueprints to build agents that reply to inquiries fast, keep clients prepared and delighted, and turn every shoot into weeks of marketing content — not just prompts to copy-paste once.',
  whyAgents: [
    'The fastest response wins the booking, and independent photographers are often replying hours or days after a lead has already booked someone else.',
    'A $0–40/month AI agent can draft your inquiry replies, shoot-prep guides, gallery deliveries, and marketing content, so every shoot works harder without eating your editing time.',
    'These aren\'t one-off prompts — they\'re complete blueprints: system prompts, tool wiring, real costs, and guardrails, so nothing gets sent to a client without you reviewing it first.',
  ],
  seoTitle: 'AI Agents for Photographers — Blueprints, Costs & Prompts',
  seoDescription:
    'Build 3 AI agents for your photography business: faster inquiry replies, shoot prep & delivery, and content repurposing. Real system prompts, honest costs, $29.',
}

export default photographerAgents
