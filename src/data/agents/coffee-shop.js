const coffeeShopAgents = [
  {
    slug: 'coffeeshop-review-reply-agent',
    industry: 'coffee-shop',
    name: 'Review Reply Agent',
    icon: 'chat',
    tagline: 'Every review answered within a day, in your voice.',
    description:
      'Drafts warm, on-brand replies to every new Google and Yelp review so nothing sits unanswered — you just skim and hit send.',
    difficulty: 'Beginner',
    buildTime: '~2 hours',
    runningCost: '$0–20/month',
    timeSaved: '~3 hours/week',
    stack: ['Claude or ChatGPT', 'Zapier (free tier)', 'Google Business Profile'],
    whatItDoes:
      'Every morning before you unlock the front door, this agent has already read every new Google and Yelp review your shop received in the last 24 hours and drafted a reply for each one — thanking the five-star visits by name, apologizing for the slow Tuesday rush without admitting fault, and flagging the one review that mentions a health complaint for you to handle personally. The drafts land in a Slack channel or email digest, written in your shop\'s actual voice because you fed it real examples up front. You read each draft in about fifteen seconds, tap approve or edit, and it posts. What used to be a guilty pile of unanswered reviews becomes a five-minute morning habit.',
    outcomes: [
      'Every review gets a reply within 24 hours, not whenever you remember',
      'Replies sound like you, not like a corporate template',
      'Sensitive reviews (health, safety, legal) are flagged and never auto-posted',
      'Five minutes of daily approval instead of an hour of dreaded review-reading',
      'A searchable log of every review and reply for pattern-spotting later',
    ],
    costBreakdown: [
      {
        item: 'Claude.ai or ChatGPT (free tier)',
        cost: '$0/mo',
        note: 'covers most independent cafes; upgrade only if you outgrow the daily limit',
      },
      {
        item: 'Claude Pro or ChatGPT Plus (optional)',
        cost: '$20/mo',
        note: 'only needed if you handle 10+ reviews/day or want a faster model',
      },
      {
        item: 'Zapier (free tier)',
        cost: '$0/mo',
        note: '100 tasks/month covers roughly 3 reviews/day, plenty for most single-location shops',
      },
      {
        item: 'Google Business Profile + Yelp for Business',
        cost: '$0/mo',
        note: 'both platforms are free to claim and manage',
      },
    ],
    roi: 'Owners typically spend 45–60 minutes a week hunting down and answering reviews, and most weeks a few just don\'t get answered at all. At $30/hour of your time, that\'s $22–30/week, or roughly $100–130/month. This agent turns that into five minutes a day of approving drafts — about 35 minutes/week, or $17.50 of your time. Even at the $20/mo paid tier, you\'re saving $80–110/month in owner time, and — the part that doesn\'t show up in a spreadsheet — you stop losing customers who searched your shop, saw three unanswered 2-star reviews, and picked the cafe down the block instead. Break-even is immediate: the first consistent week pays for a year of the paid tier.',
    steps: [
      {
        number: 1,
        title: 'Write your voice guide',
        description:
          'Before the agent can sound like you, you need to teach it what "you" sounds like. This step alone is worth doing even if you never automate anything else.',
        dataNote:
          'Pull 5–10 of your past Google/Yelp reviews (a mix of positive, neutral, and negative) and, if you\'ve replied before, your past replies too. If you haven\'t replied before, that\'s fine — just gather the reviews.',
        prompt: `I run a [NEIGHBORHOOD/CITY] coffee shop called [SHOP NAME] and I want to build a voice guide so an AI can draft review replies that sound like me, not like a corporate template.

Here are [NUMBER] real reviews we've received, with any replies I've written in the past:
[PASTE REVIEWS AND ANY PAST REPLIES]

My shop's personality: [e.g., warm and a little goofy / no-nonsense and efficient / cozy neighborhood spot]
Things I never say: [e.g., "we value your feedback," "we apologize for any inconvenience"]
Phrases I actually use: [specific to how you talk]

Please build me a voice guide with:
1. **3–5 tone words** that describe how I sound (not generic ones like "friendly" — specific, like "warm but brief" or "proud of the coffee, humble about mistakes")
2. **A greeting style** — how I open a reply to a 5-star vs. a 1-star review
3. **A sign-off style** — how I close, and whether I sign with my name or the shop's name
4. **5 example replies** written in my voice for different review types: a glowing 5-star, a lukewarm 3-star about slow service, a 1-star about a rude interaction, a 1-star about a wrong order, and a review that mentions a specific staff member by name
5. **A "never say" list** — corporate phrases to permanently ban from my replies
6. **A length rule** — my replies should be [SHORT: 2–3 sentences / MEDIUM: 4–6 sentences]

Save this as a reference doc — every future prompt will point back to it.`,
      },
      {
        number: 2,
        title: 'Connect your review platforms',
        description: 'Give the automation a live feed of new reviews to react to.',
        dataNote:
          'You\'ll need owner/manager access to your Google Business Profile and your Yelp for Business account, plus a free Zapier account.',
      },
      {
        number: 3,
        title: 'Build the reply-drafting prompt',
        description: 'This is the engine — the prompt that turns a raw review into an on-brand draft every time.',
        prompt: `Using the voice guide from Step 1, I want a repeatable prompt template that drafts a reply to any new review.

My voice guide: [PASTE VOICE GUIDE FROM STEP 1]
My shop name: [SHOP NAME]

Build me a prompt template that takes a new review as input and outputs a draft reply following these rules:
1. **5-star reviews**: thank them by name if given, mention something specific from their review (not generic), keep it to [LENGTH RULE FROM VOICE GUIDE]
2. **4-star reviews**: thank them, briefly and warmly acknowledge whatever wasn't perfect without being defensive
3. **3-star and below reviews**: apologize for the specific experience without admitting legal fault or blaming a named employee, invite them back or offer to make it right in person — never offer a specific discount or refund amount in the reply itself
4. **Reviews mentioning a staff member by name** (positive or negative): never name the employee back in the public reply
5. **Reviews mentioning health, safety, illness, or a legal threat**: output "FLAG FOR OWNER — do not auto-post" instead of a draft
6. **Non-English reviews**: reply in the same language if you're confident, otherwise flag for owner review

Output format: just the reply text, under [CHARACTER LIMIT] characters, no preamble like "Here's a reply:" — I'll be pasting this directly.`,
      },
      {
        number: 4,
        title: 'Wire up the Zapier automation',
        description: 'Connect the trigger, the AI step, and the approval inbox into one automated flow.',
        dataNote:
          'You\'ll need your Zapier account, the prompt template from Step 3, and either a Slack workspace or an email address you check daily for the approval digest.',
      },
      {
        number: 5,
        title: 'Set up your 5-minute daily approval habit',
        description:
          'The agent drafts; you stay the final word. This is the step that keeps it safe and keeps replies sounding human — pick one time of day, every day, and stick to it.',
      },
      {
        number: 6,
        title: 'Handle edge cases before they happen',
        description: 'Decide now — not in the moment — what the agent should never do on its own.',
        prompt: `I want a review-escalation checklist for cases the AI should never auto-draft.

My shop: [SHOP NAME], [CITY]
My review volume: about [NUMBER] reviews/month

Please build a checklist covering:
1. Reviews mentioning illness, allergic reaction, or foreign objects in food/drink — escalate immediately, no draft
2. Reviews threatening legal action, lawsuits, or health department reports — escalate immediately, no draft
3. Reviews naming a specific employee in a negative or accusatory way — a draft is fine but must never name the employee back, and I should be alerted separately to address it internally
4. Reviews offering to remove a bad review in exchange for something (compensation, free items) — flag as possible review manipulation, don't engage in the reply
5. Reviews in a language the AI isn't confident translating accurately — flag for a native speaker
6. A monthly pattern check: if 3+ reviews in a month mention the same specific complaint (wait time, a menu item, a policy), flag it as an operational issue, not just a reply-drafting issue

Output this as a one-page reference I can pin near the register.`,
      },
    ],
    systemPrompt: `You are the Review Reply Assistant for [SHOP NAME], an independent coffee shop in [CITY/NEIGHBORHOOD]. Your only job is to draft replies to customer reviews on Google and Yelp for the owner to approve before anything is posted. You never post automatically.

VOICE
Write like a real person who owns this shop, not a brand account. Tone: [TONE WORDS FROM VOICE GUIDE, e.g. warm, a little playful, proud of the coffee]. Use contractions. Keep replies to [2–4 sentences] unless the review is long and detailed, in which case you may go slightly longer to address specific points. Never use corporate phrases: "we value your feedback," "we apologize for any inconvenience this may have caused," "your satisfaction is our top priority," or anything that sounds like it came from a call center script.

RESPONSE STRUCTURE
For every review, output in this format:
1. A one-line classification: [5-STAR/POSITIVE], [MIXED], [NEGATIVE], or [FLAG]
2. If not flagged: the draft reply text only, ready to paste, under 600 characters
3. If flagged: "FLAG FOR OWNER" and one sentence explaining why

RULES BY REVIEW TYPE
- 5-star and 4-star reviews: thank the reviewer, reference something specific they mentioned (a drink, a staff interaction, the atmosphere) rather than a generic thank-you. If they named a staff member positively, you may reference "the team" but do not repeat the employee's name back in a public reply.
- 3-star reviews: acknowledge the specific issue without being defensive, thank them for the honest feedback, invite them back. Do not over-apologize.
- 1-star and 2-star reviews: apologize for their specific experience in a way that sounds sincere, never admit fault in a way that could be used against the business (say "that's not the experience we want for anyone" rather than "you're right, we were slow"), never promise a specific refund, discount, or free item amount in the public reply — instead say something like "please reach out to us directly at [CONTACT] so we can make this right."
- Reviews naming a specific employee negatively: never repeat the employee's name in the reply.

ALWAYS ESCALATE — OUTPUT "FLAG FOR OWNER" INSTEAD OF A DRAFT WHEN:
- The review mentions illness, an allergic reaction, a foreign object in food or drink, or any health/safety concern
- The review threatens legal action, a lawsuit, or reporting to a health department or regulator
- The review looks like a coordinated or suspicious pattern (e.g., offers to remove a bad review for compensation)
- The review is in a language you are not highly confident translating accurately
- The review's tone or content doesn't clearly fit the categories above

WHAT YOU NEVER DO
- Never post a reply without human approval
- Never offer, promise, or quantify refunds, discounts, or free items
- Never name an employee in a public-facing reply, positive or negative
- Never argue with a reviewer, correct their account of events publicly, or sound defensive
- Never invent details about what happened — if the review doesn't say, don't guess

If you are ever unsure whether a review needs to be flagged, flag it. A missed reply is recoverable; a bad public reply is not.`,
    guardrails: [
      'Never post a reply automatically — every draft requires a human tap-to-approve before it goes live.',
      'Never offer, promise, or name a specific refund, discount, or free-item amount in a public reply — route any complaint mentioning money or compensation to the owner to handle privately.',
      'Never name an employee in a public reply, whether the review is complimentary or critical.',
      'Always flag reviews mentioning illness, allergic reactions, foreign objects, or safety concerns for the owner instead of drafting a reply.',
      'Always flag reviews that threaten legal action or a regulatory complaint (health department, etc.) instead of drafting a reply.',
      'Never argue with or attempt to correct a reviewer\'s account of events in a public reply.',
    ],
    testChecklist: [
      'Paste in a 1-star review mentioning a rude barista by name; the draft must apologize without admitting fault and must not name the employee.',
      'Paste in a review mentioning a customer got sick after drinking a latte; the agent must output "FLAG FOR OWNER," not a draft reply.',
      'Paste in a glowing 5-star review that mentions a specific drink; the draft should reference that drink by name, not a generic "thanks for the kind words."',
      'Paste in a review offering to delete a bad review if you comp their next order; the agent must flag it as possible manipulation, not draft a normal reply.',
      'Paste in a review written in a language other than English; confirm the agent either replies correctly in that language or flags it for a native speaker.',
      'Check that no draft, across 10 test reviews, ever contains a specific dollar amount, discount percentage, or free-item offer.',
    ],
    maintenance:
      'Once a month, skim the past 30 days of approved replies for tone drift — is it still sounding like you, or has it started leaning generic? Re-paste 2–3 recent reviews into your voice-guide prompt if it needs a refresh. Check your Zapier task count against the free-tier limit (100/month) so you\'re not silently capped during a busy month. If you\'ve hired new staff or changed your refund/comp policy, update the system prompt\'s contact info and any policy-specific language. Budget 15 minutes.',
  },

  {
    slug: 'coffeeshop-social-content-agent',
    industry: 'coffee-shop',
    name: 'Social Content Agent',
    icon: 'megaphone',
    tagline: 'A week of Instagram and Facebook posts from your specials board and phone photos.',
    description:
      'Turns your weekly specials and a folder of phone photos into seven days of on-brand captions and post ideas, ready to schedule in one sitting.',
    difficulty: 'Beginner',
    buildTime: '~3 hours',
    runningCost: '$0–30/month',
    timeSaved: '~4 hours/week',
    stack: ['ChatGPT or Claude', 'Canva (free tier)', 'Buffer or Later (free tier)'],
    whatItDoes:
      'Sunday night, you dump this week\'s specials, any new menu items, and whatever photos you snapped on your phone during the week into one prompt. Fifteen minutes later you have seven days of captions written in your shop\'s voice — a Monday motivation post, a Wednesday "behind the counter" story, a Friday specials callout, a weekend community shoutout — each one paired with a suggested photo from your folder and 10–15 relevant local hashtags. You drop the captions and photos into Canva for quick formatting, then schedule the whole week in Buffer in one sitting. No more staring at a blank caption box at 11pm trying to think of something to post.',
    outcomes: [
      'A full week of captions and post ideas from one 30-minute Sunday session',
      'Consistent posting (3–5x/week) without daily scrambling for content ideas',
      'Captions written in your shop\'s actual voice, not generic coffee-shop clichés',
      'A rotating content mix — specials, behind-the-scenes, community, drinks — instead of just "here\'s our latte"',
      'Local hashtags and posting rhythm tuned to your actual neighborhood, not generic advice',
    ],
    costBreakdown: [
      {
        item: 'ChatGPT or Claude (free tier)',
        cost: '$0/mo',
        note: 'plenty for one weekly batch session; most cafes never need more',
      },
      {
        item: 'ChatGPT Plus or Claude Pro (optional)',
        cost: '$20/mo',
        note: 'only worth it if you\'re also using it daily for other tasks, like the Review Reply Agent',
      },
      {
        item: 'Canva (free tier)',
        cost: '$0/mo',
        note: 'free templates and photo editing cover formatting captions onto photos',
      },
      {
        item: 'Canva Pro (optional)',
        cost: '$10/mo',
        note: 'billed annually (~$13/mo month-to-month); adds premium templates and a saved brand kit',
      },
      {
        item: 'Buffer or Later (free tier)',
        cost: '$0/mo',
        note: 'free plan covers up to 3 channels, enough for Instagram + Facebook',
      },
    ],
    roi: 'Owners typically burn 3–5 hours a week on social media — not posting itself, but the mental tax of staring at a blank caption box trying to think of something to say. At $30/hour, that\'s $90–150/month of owner time. This agent compresses that into one 30–45 minute Sunday batch session (about $15–22 of your time) plus 15–20 minutes/week of scheduling. Even at the $30/mo paid-tools ceiling, you\'re saving $50–100/month in owner time — and the bigger payoff is consistency: cafes that post 3+ times a week instead of sporadically tend to see more foot traffic from social, though that part is harder to put a clean dollar figure on. Break-even is the first week.',
    steps: [
      {
        number: 1,
        title: 'Write your content voice and pillars',
        description:
          'The agent needs a rulebook for what to post about and how it should sound before it can fill a week of captions on its own.',
        dataNote:
          'Gather 5–10 of your best-performing past posts (or just a rough list of what you usually post about) and a list of your regular specials or seasonal rotation.',
        prompt: `I run a coffee shop called [SHOP NAME] in [CITY/NEIGHBORHOOD] and I want to define a content voice and a set of content pillars so an AI can write a week of social captions that actually sound like us.

My shop's personality: [e.g., cozy and a little nerdy about coffee / fast and efficient / artsy neighborhood hangout]
My audience: [mostly regulars / mix of regulars and tourists / students / remote workers]
Past posts that did well (paste 3–5, with rough engagement if you know it): [PASTE]
Specials/seasonal rotation: [LIST — weekly specials, seasonal drinks, new menu tests]

Please build me:
1. **3–4 content pillars** — recurring themes to rotate through (e.g., "drink spotlight," "behind the counter," "community/regulars," "specials of the week") with a one-line description of each
2. **A voice guide** — 3–5 tone words, a sample caption in that voice for each pillar, and a "never post" list (things that feel off-brand, like overly polished stock-photo language or aggressive sales pushes)
3. **A weekly rhythm** — which pillar to post on which day, balancing selling (specials) with connecting (community/behind-the-scenes) so it's not all ads
4. **A hashtag starter set** — 15–20 hashtags split into neighborhood-specific, coffee-industry, and broader local ones
5. **A caption length and emoji rule** — how long, how many emoji, how many hashtags per post feels right for us

Save this as my content voice guide — every weekly batch prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Set up your Sunday photo folder',
        description:
          'The agent can only work with what you give it — build the habit of a quick photo dump before the week starts.',
        dataNote:
          'Create one phone folder or shared album where you drop 5–10 photos from the week — new drinks, the team, the shop, customers who\'ve said yes to being tagged.',
      },
      {
        number: 3,
        title: 'Generate your weekly batch',
        description: 'This is the core weekly prompt — specials plus photos in, seven days of captions out.',
        prompt: `Using my content voice guide, write me a week of social captions.

My content voice guide: [PASTE FROM STEP 1]
This week's specials/new items: [LIST]
Anything notable this week (weather, local event, staff news I can share): [NOTES]
Photos I have available (describe each briefly):
1. [DESCRIPTION]
2. [DESCRIPTION]
3. [DESCRIPTION]
[ADD MORE AS NEEDED]

Please write [NUMBER, e.g. 5] posts for this week, one per posting day, following my weekly rhythm from the voice guide. For each post give me:
1. **Day and pillar** (e.g., "Monday — Drink Spotlight")
2. **Which photo to pair it with** (by number from my list above)
3. **The caption**, in my voice, following my length/emoji rules
4. **3–5 hashtags** pulled from my starter set, rotated so I'm not using the exact same set every post
5. **A one-line Story idea** to go with it (optional add-on, doesn't need to be a full caption)

Keep captions specific to this week — reference the actual specials and photos I gave you, not generic coffee-shop content. If I gave you fewer than [NUMBER] usable photos, tell me which days need a photo and suggest what to shoot instead of forcing a caption to a photo that doesn't fit.`,
      },
      {
        number: 4,
        title: 'Format and schedule in one sitting',
        description: 'Batch the formatting and scheduling right after you generate captions so the whole week is done in one session.',
        dataNote: 'You\'ll need your Canva and Buffer/Later logins handy, plus the photos from Step 2.',
      },
      {
        number: 5,
        title: 'Track what actually performs',
        description: 'A light monthly glance at what resonated keeps the content pillars honest instead of guessed.',
        prompt: `I want a monthly review of my social content so I can tune what I post next month instead of guessing.

My posts from the past month, with whatever engagement data I have (likes, comments, saves, or just my own gut sense of which ones clearly did better):
[PASTE A LIST — post topic/pillar, brief description, and engagement if you have it]

My content pillars: [PASTE FROM VOICE GUIDE, e.g. drink spotlight, behind-the-scenes, community, specials]

Please tell me:
1. **Which pillar performed best** this month, and your best guess why (specific photo style, caption tone, time of day posted)
2. **Which pillar performed weakest** — is it worth keeping at a lower frequency, reworking, or dropping for a month
3. **Any pattern in timing** — did weekday posts or weekend posts do better, morning or evening
4. **One caption style worth repeating** — pull the actual phrasing that seemed to land
5. **One new idea to test** next month based on what's working, described specifically enough that I could hand it straight to next Sunday's batch prompt

Keep the whole thing to about half a page — I need a quick steer for next month, not a full marketing report.`,
      },
    ],
    systemPrompt: `You are the Social Content Assistant for [SHOP NAME], an independent coffee shop in [CITY/NEIGHBORHOOD]. Your job is to turn a weekly batch of specials, notes, and available photos into a week of ready-to-schedule Instagram and Facebook captions. You never post directly — every caption is drafted for the owner to review, format in Canva, and schedule.

VOICE
Tone: [TONE WORDS FROM CONTENT VOICE GUIDE, e.g. warm, a little playful, proud of the coffee without being precious about it]. Write like a person who works the counter, not a marketing agency. Use contractions. Follow the caption length and emoji rules from the voice guide exactly — don't default to generic social-media-manager style (excessive emoji, "swipe to see more!", hashtag walls).

CONTENT PILLARS
Rotate through these pillars across the week, matching the rhythm in the voice guide: [PILLAR 1, e.g. Drink Spotlight], [PILLAR 2, e.g. Behind the Counter], [PILLAR 3, e.g. Community/Regulars], [PILLAR 4, e.g. Specials of the Week]. Don't post two of the same pillar back to back unless the owner specifically asks. At least one post per week should not be selling anything — pure connection/community content.

RESPONSE STRUCTURE
For each week's batch, output one entry per posting day in this format:
1. Day and pillar
2. Which photo from the owner's list to pair it with (by number)
3. The caption text, ready to paste
4. 3–5 hashtags, rotated from the hashtag starter set — never the identical set twice in a row
5. One optional one-line Story idea

RULES
- Always reference this week's actual specials, notes, and photos — never fall back to generic coffee-shop content ("nothing like a warm cup on a cold day") when specific material was provided.
- If fewer usable photos were provided than posting days, say so explicitly and suggest what to shoot instead, rather than forcing a mismatched pairing.
- Never fabricate details about the shop, staff, or specials that weren't provided — if you don't have enough information for a pillar this week, say so and suggest skipping it rather than inventing filler.
- Never write a caption that implies a health claim (e.g., "cures your Monday" is fine; "boosts your immune system" is not) or makes a promise the shop can't keep (giveaways, contests) unless the owner explicitly asked for that.
- Keep hashtags relevant and local — no generic engagement-bait tags unrelated to coffee or the neighborhood.

ESCALATE TO THE OWNER (don't draft, just flag) WHEN:
- The notes mention a sensitive topic (a staff departure, a negative incident, a competitor) that shouldn't go on social without the owner's explicit framing
- You're asked to write about a giveaway, contest, or promotion involving money or prizes — these need legal/platform-rule review the AI can't do
- A photo description suggests it might include a recognizable customer who may not have consented to being posted

If you're ever unsure whether something is appropriate to post publicly, flag it instead of guessing.`,
    guardrails: [
      'Never post directly to Instagram/Facebook — every caption is a draft for the owner to review and schedule manually.',
      'Never fabricate details about specials, staff, or the shop that weren\'t provided in the weekly batch — flag missing information instead of inventing filler.',
      'Never write captions implying health claims or unearned promises (giveaways, contests) without the owner explicitly requesting that content.',
      'Never post a photo that appears to include a recognizable customer without confirming the owner has consent.',
      'Flag sensitive topics (staff departures, negative incidents, competitor mentions) for the owner\'s explicit framing rather than drafting them automatically.',
    ],
    testChecklist: [
      'Feed it a week with only 3 usable photos for 5 posting days; it should flag the gap and suggest what to shoot, not force mismatched pairings.',
      'Feed it a note about a "surprise giveaway this weekend"; it should flag for owner review rather than drafting a giveaway post outright.',
      'Check that hashtags rotate across the week\'s 5 posts rather than repeating the identical set every time.',
      'Confirm captions reference this week\'s actual specials by name, not generic coffee-shop language, when specials are provided.',
      'Paste a photo description that includes an unfamiliar customer\'s close-up face; confirm it flags for consent rather than assigning it to a post automatically.',
    ],
    maintenance:
      'Once a month, run the performance-review prompt (Step 5) to see which content pillar is actually landing, and feed that back into your voice guide. Refresh your hashtag starter set every few months — local hashtags shift, and stale ones stop reaching anyone. If you add a new recurring special or seasonal rotation, update the voice guide so the agent knows to reference it. Budget 20 minutes a month, mostly during your monthly numbers review.',
  },

  {
    slug: 'coffeeshop-morning-prep-agent',
    industry: 'coffee-shop',
    name: 'Morning Prep & Inventory Agent',
    icon: 'clipboard',
    tagline: 'A daily prep list built from your actual sales patterns and tomorrow\'s weather.',
    description:
      'Turns your POS sales history and the next day\'s forecast into a specific prep list and reorder alert every evening, so opening never starts with a guess.',
    difficulty: 'Intermediate',
    buildTime: '~4 hours',
    runningCost: '$20–40/month',
    timeSaved: '~3–4 hours/week',
    stack: ['Claude or ChatGPT', 'Google Sheets', 'Zapier or Make (paid tier)', 'a free weather API or forecast site'],
    whatItDoes:
      'Every evening after close, this agent pulls the day\'s sales data and the next day\'s weather forecast, compares it against the last several weeks of the same weekday, and produces a specific prep list for tomorrow morning — how many pastries to thaw, how much milk to pull, whether to bump cold brew production for a 78-degree Thursday. It also watches your rough inventory counts and flags anything trending toward a stockout before it becomes a 7am scramble. Instead of your opener eyeballing yesterday\'s numbers and guessing, they walk in to a printed or texted list with actual numbers behind it — built from your shop\'s real patterns, not generic advice.',
    outcomes: [
      'A specific tomorrow-morning prep list instead of an opener\'s best guess',
      'Prep quantities that adjust automatically for weather and day-of-week patterns',
      'Early warning on ingredients trending toward a stockout, days before it\'s a crisis',
      'Less over-prep waste from "just make extra to be safe" habits',
      'A written record of prep decisions you can review and adjust monthly',
    ],
    costBreakdown: [
      {
        item: 'Claude Pro or ChatGPT Plus',
        cost: '$20/mo',
        note: 'needed for the daily automated run — the free tier\'s message limits get tight with a nightly job plus normal use',
      },
      {
        item: 'Make.com Core plan (or Zapier Starter)',
        cost: '$9–20/mo',
        note: 'the free tier\'s ~100 tasks/month isn\'t enough for a daily multi-step automation; Make\'s Core plan starts around $9/mo',
      },
      {
        item: 'Google Sheets',
        cost: '$0/mo',
        note: 'free with any Google account; stores your sales history and prep log',
      },
      {
        item: 'Weather forecast',
        cost: '$0/mo',
        note: 'free tier of a weather API (e.g. Open-Meteo) or even manually checking a forecast site',
      },
    ],
    roi: 'Opening prep guesswork costs money two ways: over-prep that gets thrown out at close, and under-prep that means a 9am sellout and a customer who doesn\'t come back. Even a modest reduction in waste plus a couple of avoided sellouts a month is worth $150–300/month for a typical single-location shop — often more than the $20–40/mo this costs to run. On top of the dollars, your opener gets a specific list instead of pattern-matching from memory, which saves 20–30 minutes of morning decision-making, worth another $10–15/day in labor efficiency. This is the one agent in the pack where the tool cost is real, but the payback shows up directly in reduced waste, not just saved time.',
    steps: [
      {
        number: 1,
        title: 'Build your day-of-week sales baseline',
        description:
          'The agent needs to know what "normal" looks like for each weekday before it can tell you how tomorrow should be different.',
        dataNote:
          'Export 60–90 days of hourly/daily sales by item from your POS if it supports it — otherwise even a rough manual log of "how many of X did we sell" for a few weeks of each weekday works.',
        prompt: `I want to build a day-of-week sales baseline for prep planning.

My cafe: [CITY, format — full cafe/grab-and-go/hybrid]
My pastry/food items: [LIST]
My sales data for the last 60–90 days (paste export or describe pattern by weekday): [PASTE OR DESCRIBE]

Please analyze:
1. **Average units sold per item, broken out by day of week** (Monday sells differently than Saturday — I want both)
2. **A "safe range" per item per day** — a low estimate (light day) and high estimate (busy day), not just an average
3. **Which items are most weather-sensitive** (cold brew on hot days, hot drinks on cold days) vs. which are stable regardless of weather
4. **Which items have the tightest sell-through** (sell out fast, worth slightly over-prepping) vs. **which trend toward leftover** (worth slightly under-prepping)
5. **A starting prep-quantity table** by item and day of week that I can hand to whoever's setting the automation up next

Keep the output as a table I can drop into a spreadsheet — item, Monday through Sunday baseline quantities.`,
      },
      {
        number: 2,
        title: 'Set up your daily data feed',
        description: 'Connect the automation to real sales numbers and a weather forecast so it has fresh inputs every evening.',
        dataNote:
          'You\'ll need POS export/API access (or a habit of a 2-minute manual entry into Google Sheets each close), plus a free weather API key or forecast source for your zip code.',
      },
      {
        number: 3,
        title: 'Build the prep-list generation prompt',
        description: 'This is the nightly engine — sales history plus tomorrow\'s forecast in, a specific prep list out.',
        prompt: `Using my sales baseline from Step 1, build me a nightly prep-list prompt.

My baseline table: [PASTE FROM STEP 1]
Tomorrow's forecast: [TEMP, CONDITIONS — e.g. 78°F and sunny, or 45°F and rainy]
Tomorrow's day of week: [DAY]
Anything unusual about tomorrow (local event, holiday, school schedule, known short-staffing): [NOTES]
Today's actual sales by item (so I can compare to baseline): [PASTE OR "same as usual"]

Please generate:
1. **A specific prep list for tomorrow** — exact quantities per item, adjusted from the baseline for weather and any notes I gave you
2. **A brief reason for any adjustment** — e.g., "cold brew +20% — forecast is 15 degrees warmer than baseline Thursday"
3. **A milk pull recommendation** — how many gallons of each type to pull for opening
4. **One risk flag** if today's actual sales were meaningfully different from baseline (could signal a trend worth watching, not just a one-off)
5. **Format**: a short list I can text to my opener or print, not a report — they need to read this in 20 seconds at 6am`,
      },
      {
        number: 4,
        title: 'Wire the automation to run nightly',
        description: 'Chain the sales pull, weather check, and prompt into one scheduled Zapier/Make flow.',
        dataNote:
          'You\'ll need your Zapier/Make account, API or export access to your POS, and the weather API key from Step 2.',
      },
      {
        number: 5,
        title: 'Add a stockout early-warning check',
        description: 'A lightweight weekly pass that catches ingredient shortages before they\'re urgent.',
        prompt: `I want a weekly stockout early-warning check for my core ingredients.

My core ingredients and rough current stock levels: [LIST — e.g. oat milk, whole milk, espresso beans, cups, specific syrups]
My typical weekly usage per ingredient: [LIST OR ESTIMATE]
My supplier lead times: [e.g. milk delivery 2x/week, coffee beans 5-day lead time]

Please analyze:
1. **Days of stock remaining** per ingredient at current usage rate
2. **Which ingredients are trending toward a stockout before the next scheduled delivery**
3. **A recommended reorder date** per at-risk ingredient, working backward from the supplier's lead time
4. **A "this week only" flag** for anything caused by a one-off spike (an event, a viral post) vs. a real trend
5. **Output format**: a short weekly list, ingredient and action needed, nothing I need to scroll through`,
      },
      {
        number: 6,
        title: 'Install a weekly waste-vs-prep review',
        description:
          'Once a week, compare what you actually threw away or sold out of against what the agent predicted, and feed corrections back into your baseline. This is what keeps the prep list accurate instead of stale after month two.',
        dataNote:
          'Keep a simple daily note of what got thrown out at close (or what sold out early) — even a one-line note in the same Google Sheet works.',
      },
    ],
    systemPrompt: `You are the Morning Prep Assistant for [SHOP NAME], an independent coffee shop in [CITY]. Your job is to turn the previous day's sales, a day-of-week baseline, and tomorrow's weather forecast into a specific, ready-to-use prep list for the opening crew — nothing vague, nothing generic.

INPUTS YOU EXPECT EACH NIGHT
- The sales baseline table (average and range per item, by day of week)
- Today's actual sales by item
- Tomorrow's day of week and weather forecast
- Any notes about tomorrow (events, holidays, known staffing changes)

RESPONSE STRUCTURE
Output exactly this, in this order, formatted for a phone screen or a printed half-page — no long paragraphs:
1. **PREP LIST** — item and exact quantity, one line each
2. **MILK PULL** — gallons per type
3. **ADJUSTMENTS** — one short line per item where you deviated from the flat baseline, with the reason (weather, event, trend)
4. **WATCH** — one line only if today's actuals were meaningfully off from baseline in a way worth flagging; omit this section entirely if nothing stands out

RULES FOR ADJUSTING QUANTITIES
- Weather-sensitive items (cold brew, iced drinks, hot food) adjust based on the forecast temperature delta from a typical day for that weekday and season.
- Never adjust more than one baseline range up or down in a single day unless the forecast or notes clearly justify it — small, defensible adjustments build trust; wild swings erode it.
- If today's actuals were more than 25% off the baseline for an item, mention it in WATCH but don't overcorrect tomorrow's number off a single data point — note it as "worth tracking," not "confirmed trend," unless it's happened 3+ days running.
- If you don't have a weather forecast or today's sales data, say so explicitly and fall back to the flat baseline rather than guessing.

TONE
Write for someone reading this at 6am before their first coffee. Short lines. No fluff, no "Good morning! Here's your prep list!" preamble — just the list.

ESCALATE TO THE OWNER (add a note, don't just silently adjust) WHEN:
- An ingredient is trending toward a stockout before the next scheduled delivery — this needs a reorder decision, not just a prep adjustment
- Sales for an item have been significantly off-baseline for 3+ consecutive days — this might mean the baseline itself needs updating, not just tomorrow's number
- The forecast includes severe weather (storm warnings, extreme heat/cold) that could affect staffing or foot traffic beyond normal weather-sensitivity adjustments

WHAT YOU NEVER DO
- Never recommend prep quantities as if they're certain — these are estimates, and the opener should feel free to use judgment on the ground
- Never silently change the underlying baseline table — adjustments are per-day, not permanent, until the owner reviews and updates the baseline in the weekly review
- Never guess at inventory counts you weren't given — ask for them or flag that stock data is missing rather than assuming`,
    guardrails: [
      'Never treat a single off-baseline day as a confirmed trend — only flag a pattern after 3+ consecutive days, to avoid overcorrecting prep off one noisy day.',
      'Never silently update the permanent sales baseline — daily adjustments are temporary; only the weekly review updates the baseline itself.',
      'Never guess at inventory counts that weren\'t provided — flag missing stock data instead of assuming levels.',
      'Always flag ingredients trending toward a stockout before the next scheduled delivery, factoring in real supplier lead times, so reordering happens before it\'s urgent.',
      'Always fall back to the flat day-of-week baseline (and say so) if weather or sales data is missing, rather than fabricating an adjustment.',
    ],
    testChecklist: [
      'Feed it a 78°F forecast on a normally 60°F Thursday and confirm cold brew/iced drink quantities adjust up with a stated reason.',
      'Feed it three consecutive days of pastry sales 30% under baseline and confirm it flags a possible trend in WATCH, but only after the third day, not the first.',
      'Feed it a single one-off low-sales day and confirm it does NOT overcorrect tomorrow\'s prep number off that alone.',
      'Omit today\'s sales data entirely and confirm it says so explicitly and falls back to the baseline instead of guessing.',
      'Feed it an ingredient at 2 days of stock remaining with a 5-day supplier lead time and confirm it\'s flagged as urgent, not lumped in with routine adjustments.',
    ],
    maintenance:
      'Every week, run the waste-vs-prep review (Step 6) and correct the baseline table for any item that\'s been consistently off — this is what keeps the prep list accurate instead of drifting stale after the first month. Every season, revisit weather-sensitivity rules (what counts as "hot" changes between July and January). Check your Make/Zapier task usage against your plan\'s limit if sales volume grows. Budget 20 minutes a week plus 10 minutes each new season.',
  },
]

export const pack = {
  industry: 'coffee-shop',
  headline: 'Three AI agents that run your coffee shop\'s busywork',
  subhead:
    'Blueprints to build agents that reply to reviews, plan your social content, and prep tomorrow\'s list — not just prompts to copy-paste once.',
  whyAgents: [
    'Answering reviews, posting to social, and planning next-day prep eats 6–10 owner-hours a week at a typical independent cafe.',
    'A $0–40/month AI agent can absorb most of that busywork, freeing you to focus on the counter, the roast, and the regulars.',
    'These aren\'t one-off prompts — they\'re complete blueprints: system prompts, tool wiring, real costs, and guardrails, so you can build something that actually runs daily.',
  ],
  seoTitle: 'AI Agents for Coffee Shops — Blueprints, Costs & Prompts',
  seoDescription:
    'Build 3 AI agents for your coffee shop: review replies, social content, and morning prep. Complete system prompts, real costs, and setup steps — $29.',
}

export default coffeeShopAgents
