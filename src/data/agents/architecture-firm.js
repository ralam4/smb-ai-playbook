const architectureFirmAgents = [
  {
    slug: 'architecture-proposal-agent',
    industry: 'architecture-firm',
    name: 'Proposal Draft Agent',
    icon: 'document',
    tagline: 'A structured first draft from a project brief and your own past proposals — never sent without a principal\'s eyes on it.',
    description:
      'Assembles a fee proposal draft — scope language, phase structure, exclusions — from a project brief and your firm\'s past proposals, using fee numbers you supply from your own historicals. Every draft goes to a principal before it reaches a client.',
    difficulty: 'Intermediate',
    buildTime: '~4 hours',
    runningCost: '$20–50/month',
    timeSaved: '~3–4 hours/proposal',
    stack: ['Claude Pro or ChatGPT Plus', 'Google Docs or Word', 'A folder of your firm\'s past proposals', 'Your fee/hours historical data'],
    whatItDoes:
      'You hand the agent a short project brief — client, project type, size, phases, and the fee figure your firm has already calculated from its own historical data — and it assembles a full first-draft proposal: a project understanding section, phase-by-phase scope language with inclusions and exclusions pulled from patterns in your past proposals, an additional-services schedule, and a payment-schedule structure. It never invents a fee number of its own; the dollar figure always comes from what you provide. The draft lands as a Google Doc for the principal to read, edit, and personalize before it ever reaches a client\'s inbox — this agent writes the scaffolding so the principal spends their limited time on judgment calls, not blank-page assembly.',
    outcomes: [
      'A full proposal draft — project understanding, scope by phase, exclusions, payment schedule — in minutes instead of hours',
      'Scope and exclusion language pulled consistently from your own past proposals, not reinvented each time',
      'Every fee figure in the draft traces back to your firm\'s own historical data, never an AI guess',
      'A principal always reviews and signs off before a proposal reaches a client',
      'A growing, reusable library of scope language for your firm\'s most common project types',
    ],
    costBreakdown: [
      {
        item: 'Claude Pro or ChatGPT Plus',
        cost: '$20/mo',
        note: 'the free tier\'s context limits get tight when referencing multiple past proposals as source material',
      },
      {
        item: 'Google Docs or Word',
        cost: '$0/mo',
        note: 'assumes your firm already has a document platform; no new subscription required',
      },
      {
        item: 'Google Drive or firm document management (optional upgrade)',
        cost: '$0–30/mo',
        note: 'only relevant if you need extra storage or a more structured proposal-library folder than your current plan supports',
      },
    ],
    roi: 'Small firms routinely report spending 4–8 hours per proposal, much of it re-writing scope language and exclusions from memory under deadline pressure — a principal at $150–250/hour effective rate turns that into $600–2,000 of billable-adjacent time per proposal that never gets invoiced to anyone. If this agent gets a principal from a blank page to a 70%-complete draft in 20–30 minutes of setup plus a focused 30–45 minute review and edit, that\'s a reduction of 3–4 hours per proposal — worth $450–1,000 of principal time at typical rates, against a tool cost of $20–50/month regardless of how many proposals go out. On a firm sending even 2–3 proposals a month, this pays for itself on the very first one and keeps paying every month after.',
    steps: [
      {
        number: 1,
        title: 'Build your scope language library',
        description:
          'The agent is only as good as the past proposals it can learn structure and language from. This library is the single highest-leverage input in the whole system.',
        dataNote:
          'Gather 5–10 of your firm\'s past proposals across your most common project types, ideally ones you consider well-written and scope-proof.',
        prompt: `I'm a [FIRM SIZE]-person architecture firm doing mostly [PROJECT TYPES, e.g. residential and small commercial TI] work in [REGION]. I want to build a scope language library from my past proposals so an AI can draft consistent, scope-proof language for future proposals.

Here are [NUMBER] of my past proposals (paste full text or the scope/exclusions sections at minimum): [PASTE]

My typical phases: [e.g. SD / DD / CD / CA, or SD through CD with CA billed hourly]

Please extract and organize:
1. **Standard per-phase scope language** — for each phase, the inclusions language I use most consistently (number of design iterations, meetings, drawing sets, site visits)
2. **Standard exclusions language** — the "not included" items I consistently list (renderings, FF&E, cost estimating, expedited review, etc.)
3. **Additional services schedule template** — the hourly rates and common add-on items I typically list
4. **My firm's voice** — 3–5 words describing the tone of my proposals (formal / warm-professional / concise) with a short example paragraph
5. **A gap list** — any project types or phases where my past proposals are thin or inconsistent, so I know where to write fresh language rather than relying on the library

Save this as my scope language library — every future proposal-drafting prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Confirm your firm\'s fee-calculation source',
        description:
          'This agent never sets a fee — it only formats one you\'ve already calculated. Before drafting anything, make sure every proposal starts from your firm\'s own historical rate data, not a guess.',
        dataNote:
          'You\'ll need your firm\'s current fee-calculation method — a spreadsheet, a per-square-foot benchmark from past projects, or whatever your principal already uses to set a number before writing a proposal.',
      },
      {
        number: 3,
        title: 'Build the proposal-drafting prompt',
        description: 'This is the engine — a project brief and a firm-calculated fee go in, a structured first-draft proposal comes out.',
        prompt: `Using my scope language library, draft a full proposal for a prospective project. The fee figure below is final and already calculated from our own firm data — use it exactly as given; do not adjust, estimate, or second-guess it.

My scope language library: [PASTE FROM STEP 1]

Project details:
- Client name: [NAME]
- Project type: [TYPE]
- Project size: [SF or units]
- Location: [CITY]
- Phases included: [LIST]
- Fee (from our own historical calculation — use exactly as given): $[AMOUNT]
- Payment schedule structure we use: [e.g. 10% retainer, then % per phase milestone]
- Special project considerations: [historic, complex site, tight schedule, etc., or "none"]

Please draft:
1. **Cover letter** — 2–3 paragraphs, in my firm's voice, referencing something specific about this project
2. **Project understanding** — 1–2 paragraphs showing we understood the brief correctly
3. **Scope of services by phase** — pulled from my scope library, adjusted only for the special considerations noted above
4. **Additional services schedule** — from my library, with our actual rates
5. **Fee and payment schedule** — using the exact fee figure I gave you, structured per our payment schedule format
6. **Assumptions and exclusions** — the standard list from my library, plus any specific to this project's considerations
7. **A "PRINCIPAL REVIEW NEEDED" flag** — call out any section where you had to make a judgment call because the brief didn't give enough detail, so the principal knows exactly where to look closest before sending

Format as a clean document draft, not final client-ready copy — this goes to the principal for review and personalization before anything is sent.`,
      },
      {
        number: 4,
        title: 'Route every draft through principal review',
        description:
          'This is the step that makes the whole system safe. No draft — regardless of how complete it looks — reaches a client without a principal reading it end to end, checking the fee, checking the scope against the actual project, and personalizing the voice.',
        dataNote:
          'Set a firm rule: proposal drafts land in a specific folder or inbox, and only the principal (or whoever has fee-setting authority) moves them from "draft" to "sent."',
      },
      {
        number: 5,
        title: 'Build a proposal review checklist for principals',
        description: 'A structured 10-minute check before sending catches the mistakes that matter most.',
        prompt: `I want a 10-minute review checklist a principal runs on every AI-drafted proposal before it's sent to a client.

My firm's common mistakes to watch for: [e.g. missing exclusions, fee not matching our actual calculation, vague CA scope]

Please create:
1. **A fee verification step** — confirm the dollar figure in the draft exactly matches our own calculation, with no AI-introduced rounding or adjustment
2. **A scope accuracy check** — confirm phase language actually matches what we intend to deliver on this specific project, not just the library default
3. **An exclusions completeness check** — the 5–8 most commonly missed exclusions for our project types
4. **A voice/personalization check** — confirm the cover letter references something genuinely specific to this client, not boilerplate
5. **A final "would I sign this" gut check** — the one question that catches everything else`,
      },
      {
        number: 6,
        title: 'Grow your scope language library over time',
        description:
          'Every new proposal is a chance to add scope language for a project type or condition you haven\'t documented yet — the library compounds in usefulness.',
        prompt: `I want to update my scope language library with learnings from a recent proposal.

My scope language library: [PASTE CURRENT VERSION]
The new proposal (final, sent version): [PASTE]
What was different or new about this one: [NOTES — a new project type, a scope clause I hadn't written before, an exclusion I added after a scope-creep experience]

Please:
1. Identify any **new scope or exclusion language** in this proposal worth adding to the library
2. Flag anything in this proposal that **contradicts** existing library language, so I can decide which version is correct going forward
3. Suggest where in the library structure this new material belongs
4. Output the **updated library** with the new material integrated`,
      },
    ],
    systemPrompt: `You are the Proposal Drafting Assistant for [FIRM NAME], a [FIRM SIZE]-person architecture firm doing primarily [PROJECT TYPES] work in [REGION]. Your job is to assemble structured first-draft fee proposals from a project brief and the firm's own scope language library. You never determine, estimate, adjust, or invent a fee — every dollar figure in a draft comes directly from the firm's own historical calculation, provided to you exactly as given.

WHAT YOU DRAFT
- Cover letter, project understanding, scope of services by phase, additional services schedule, fee and payment schedule, and assumptions/exclusions.
- Every section is a structured first draft for a principal to review, correct, and personalize — never a client-ready final document.

FEE RULE — NON-NEGOTIABLE
- You never calculate, estimate, round, adjust, or suggest a fee figure. You only insert the exact dollar amount the user provides, exactly as given, into the payment schedule structure they specify.
- If no fee figure is provided, output the proposal with a clearly marked "[FEE NOT PROVIDED — PRINCIPAL TO INSERT]" placeholder rather than guessing or estimating one, even from project size or past project comparisons.

SCOPE LANGUAGE RULE
- Draw scope and exclusions language from the firm's provided scope library, adjusted only for the specific considerations named in the brief.
- If a project has an unusual condition the library doesn't cover (a project type, phase structure, or complexity level not represented in past proposals), flag it explicitly as "PRINCIPAL REVIEW NEEDED — no library precedent" rather than inventing scope language from general knowledge of the industry.

STRUCTURE AND FLAGGING
- At the end of every draft, include a short "PRINCIPAL REVIEW NEEDED" section listing every place you had to make a judgment call due to incomplete brief information — this is what makes the review fast and targeted instead of a blind re-read of the whole document.
- Never omit the review-needed section, even if you believe the draft is complete — the principal decides that, not you.

VOICE
Match the firm's voice from the scope library: [TONE WORDS, e.g. warm-professional, concise, confident without being salesy]. The cover letter should reference something specific from the project brief — never generic language that could apply to any client.

WHAT YOU NEVER DO
- Never calculate, estimate, or adjust a fee — only insert the exact figure provided
- Never mark a draft as final or client-ready — every output is explicitly a draft for principal review
- Never invent scope, exclusion, or additional-services language for project types the scope library doesn't cover, without flagging it
- Never omit the "PRINCIPAL REVIEW NEEDED" flagging section
- Never fabricate specifics about the client, site, or project that weren't in the brief

If information needed to complete a section is missing, say so explicitly in that section rather than filling the gap with a plausible-sounding guess.`,
    guardrails: [
      'No proposal is ever sent to a client without review, edit, and sign-off from a principal — the agent produces drafts only, never client-ready final documents.',
      'The agent never calculates, estimates, or adjusts a fee figure — every dollar amount comes directly from the firm\'s own historical rate data, inserted exactly as provided.',
      'The agent drafts structure and scope/exclusion language only — it does not make business decisions about pricing, positioning, or whether to pursue the project.',
      'Every draft includes an explicit "PRINCIPAL REVIEW NEEDED" section flagging judgment calls made from incomplete brief information.',
      'Scope or exclusion language for project types not represented in the firm\'s library is flagged rather than invented from general assumptions.',
      'If a fee figure isn\'t provided, the draft shows a clear placeholder rather than an estimated number.',
    ],
    testChecklist: [
      'Run a draft without providing a fee figure; confirm it inserts a clear "[FEE NOT PROVIDED]" placeholder rather than estimating one from project size.',
      'Run a draft for a project type not represented in your scope library; confirm it flags "no library precedent" rather than inventing plausible-sounding scope language.',
      'Confirm every draft includes a "PRINCIPAL REVIEW NEEDED" section, even for a well-documented, complete brief.',
      'Provide a fee figure and confirm the exact number appears unchanged in the payment schedule — no rounding, no adjustment.',
      'Confirm the cover letter references a specific detail from the project brief rather than reading identically across two different test projects.',
      'Have a principal run the 10-minute review checklist (Step 5) on a test draft and confirm it surfaces at least one genuine judgment call worth catching.',
    ],
    maintenance:
      'After every sent proposal, spend 5 minutes running the library-growth prompt (Step 6) to fold in any new scope language or exclusions you wrote fresh — this is what keeps the library from going stale. Once a quarter, have a principal skim the library end to end for anything that no longer reflects how the firm actually structures fees or phases. Update the fee-calculation source reference immediately if your firm changes its rate structure or overhead multiplier. Budget 5 minutes per proposal plus 20 minutes a quarter.',
  },

  {
    slug: 'architecture-code-research-agent',
    industry: 'architecture-firm',
    name: 'Code & Zoning Research Agent',
    icon: 'search',
    tagline: 'A first-pass research digest with a citation for every claim — never a substitute for the licensed architect\'s own verification.',
    description:
      'Produces a first-pass building-code and zoning research digest for a project, citing the specific code section and edition behind every claim and flagging anything it isn\'t confident about — strictly a research starting point the licensed architect verifies before it touches a design.',
    difficulty: 'Intermediate',
    buildTime: '~4 hours',
    runningCost: '$20–50/month',
    timeSaved: '~2–4 hours/project',
    stack: ['Claude Pro or ChatGPT Plus', 'Your jurisdiction\'s published code/zoning portal', 'A code-section reference spreadsheet'],
    whatItDoes:
      'This agent is a research digest generator, not a code authority. Given a project\'s basic parameters — occupancy, construction type, size, jurisdiction — it produces a first-pass checklist of likely applicable requirements across structural, fire/life safety, accessibility, energy, and zoning, and for every item it cites the specific code section and edition it believes applies, plus a confidence flag when uncertain. It never states a conclusion as settled fact. That digest saves the licensed architect from starting research at zero, but every citation gets pulled up in the actual code text and confirmed before it touches the design — this agent never signs off on compliance, and local jurisdictional amendments always need a local check it cannot perform reliably.',
    outcomes: [
      'A first-pass, discipline-organized research digest in minutes instead of starting code research from a blank page',
      'A specific code section and edition cited for every claim, so verification is fast and targeted rather than a blind re-search',
      'Low-confidence items are explicitly flagged rather than stated as settled fact',
      'Research time on routine, well-precedented project types typically cut substantially, freeing licensed staff for design judgment',
      'A documented verification step built into the workflow, protecting the firm from relying on an unverified AI claim',
    ],
    costBreakdown: [
      {
        item: 'Claude Pro or ChatGPT Plus',
        cost: '$20/mo',
        note: 'needed for the longer context required to work through a full multi-discipline code checklist per project',
      },
      {
        item: 'Jurisdiction code/zoning portal access',
        cost: '$0/mo',
        note: 'most municipal and state code portals (Municode, UpCodes free tier, local planning sites) are free to access for the manual verification step',
      },
      {
        item: 'UpCodes or ICC Digital Codes subscription (optional)',
        cost: '$0–30/mo',
        note: 'a paid code-reference subscription speeds up the verification step but isn\'t required — free jurisdiction portals work, just more slowly',
      },
    ],
    roi: 'Manual code research on a typical project — pulling occupancy classification, allowable area, egress, accessibility, and energy requirements from scratch — commonly takes 2–4 hours of a licensed architect\'s time, at an effective rate of $100–200/hour. If this agent\'s first-pass digest gets a well-organized starting point with citations in front of the architect in 10–15 minutes, the architect\'s job shifts from "find the applicable sections" to "verify the cited sections and check local amendments" — typically a 45–90 minute task instead of 2–4 hours. That\'s $150–500 of licensed time saved per project at a $20–50/month tool cost, on projects where the code research is routine and well-precedented. The value only holds if the verification step is actually run every time — skipping it to save the remaining time is exactly the failure mode this agent is designed to prevent.',
    steps: [
      {
        number: 1,
        title: 'Build your project parameter sheet',
        description:
          'The digest is only as good as the parameters you feed it. Build one reusable sheet per project so nothing gets left out.',
        dataNote:
          'You need: project type, occupancy classification (including mixed-use breakdown if applicable), construction type, building area and stories, jurisdiction, applicable code editions (IBC/IRC, state amendments, IECC, ADA/ANSI A117.1), sprinkler status, and any known jurisdiction-specific overlays (historic district, coastal zone, floodplain).',
      },
      {
        number: 2,
        title: 'Generate the first-pass research digest',
        description:
          'This produces the starting checklist — organized by discipline, with a cited code section and confidence flag for every item, ready for verification.',
        prompt: `I'm a licensed architect researching code requirements for a [PROJECT TYPE] project in [CITY/JURISDICTION]. I need a first-pass research digest, not a final answer — every claim you make must be traceable to a specific code section so I can verify it myself.

Project details:
- Occupancy classification: [e.g. B, A-2, R-2, mixed-use B/R-2 with specific areas for each]
- Construction type: [e.g. Type V-A, Type III-B]
- Building area: [SF per story + total]
- Number of stories: [NUMBER + height in feet]
- Sprinklered: [Yes/No + NFPA edition if known]
- Applicable code editions: [e.g. 2021 IBC, 2022 California Building Code, IECC 2021, ADA/ANSI A117.1, local amendments if known]
- Jurisdiction overlays: [historic district / coastal zone / floodplain / none]

For every item in the digest below, cite the SPECIFIC code section number and edition you believe applies, and rate your confidence as HIGH, MEDIUM, or LOW. If you're not confident a section is current for this jurisdiction's adopted edition, say so explicitly rather than stating it as settled.

1. **Structural/Building** — allowable area, height and story limits, fire-resistance ratings, opening protectives
2. **Fire and Life Safety** — sprinkler requirements, egress (occupant load, exit count, exit width, common path, dead ends), fire separation, occupancy separation
3. **Accessibility** — accessible routes, parking, restroom fixture counts, signage
4. **Energy Code** — envelope, mechanical efficiency, lighting power density, compliance path
5. **Plumbing** — fixture counts per occupancy load
6. **Zoning** — likely applicable zoning district requirements (setbacks, height limits, FAR, parking ratios) if you have general knowledge of this jurisdiction, clearly flagged as LOW confidence since zoning is jurisdiction-specific and changes frequently

This is a research starting point only. I will verify every cited section against the actual current code text before it influences the design. Do not state any compliance conclusion as final or settled.`,
      },
      {
        number: 3,
        title: 'Run the mandatory verification pass',
        description:
          'This is the step that makes the whole system safe to use, not optional polish. Every HIGH-confidence citation and every LOW-confidence flag gets opened and checked against the actual current code text before anything moves into the design.',
        dataNote:
          'Pull up your jurisdiction\'s actual adopted code text — via a free portal like Municode or UpCodes, or your firm\'s code reference subscription — for every section the digest cited.',
      },
      {
        number: 4,
        title: 'Check for local jurisdictional amendments',
        description:
          'Model codes get locally amended constantly, and this is the area an AI is least reliable on. This step is a dedicated, separate check — never assume the digest already accounted for local amendments.',
        prompt: `I have a first-pass code research digest for a project in [JURISDICTION]. I need you to help me think through what to check specifically for local amendments — you will not have reliable knowledge of this jurisdiction's most recent local amendments, so treat this as a prompt for what to go verify locally, not an answer.

My digest's cited sections: [PASTE LIST OF CITED SECTIONS FROM STEP 2]
My jurisdiction: [CITY/COUNTY, STATE]

Please produce:
1. A list of the **specific areas most commonly locally amended** in jurisdictions like mine (e.g. fire department access, energy code compliance paths, accessibility beyond ADA minimums, historic district overlays) so I know where to focus my local verification
2. A **question list** to bring to the local building department or a local code consultant for anything you can't verify
3. An explicit statement that you cannot confirm whether any cited section has been locally amended, superseded, or is still the currently adopted edition in this specific jurisdiction`,
      },
      {
        number: 5,
        title: 'Log verification results and finalize the record',
        description:
          'Keep a simple record of what was verified, when, and by whom — this protects the firm and creates a trail if a code question comes up later in the project.',
        dataNote:
          'A simple spreadsheet works: cited section, AI confidence flag, verification status (confirmed / corrected / could not verify), verified by, date.',
      },
      {
        number: 6,
        title: 'Build a reusable digest template for your top project types',
        description: 'Most firms repeat 2–4 project types often enough that a pre-filled parameter template saves setup time on every future project.',
        prompt: `I want to build reusable first-pass digest templates for my firm's most common project types.

My top project types: [LIST — e.g. "TI, B occupancy, Type V-A, <10,000 SF, California"]

For each, please create a pre-filled parameter block I can reuse (occupancy, typical construction type, typical size range, applicable code editions I usually work with) so I only need to fill in project-specific details rather than starting the parameter sheet from scratch each time. Include a reminder note at the top of each template restating that all outputs require section-by-section verification and a local amendment check before use.`,
      },
    ],
    systemPrompt: `You are a Code and Zoning Research Assistant supporting licensed architects at [FIRM NAME]. You produce FIRST-PASS RESEARCH DIGESTS ONLY. You are not a licensed professional, you do not practice architecture, and you never issue a final compliance determination. Every output you produce is explicitly a starting point for a licensed architect's own verification, never a substitute for it.

CITATION RULE — MANDATORY FOR EVERY CLAIM
- Every requirement, threshold, or compliance statement you make must be paired with a specific code section number AND the code edition you believe it comes from (e.g. "IBC 2021, Section 1006.2.1").
- Never state a code requirement without a citation. If you cannot identify a specific section, say so explicitly rather than describing the requirement in general terms as if it were sourced.

CONFIDENCE FLAGGING — MANDATORY
- Rate every cited item as HIGH, MEDIUM, or LOW confidence.
- HIGH: well-established model code provisions unlikely to have changed recently (e.g. baseline IBC occupant load factors).
- MEDIUM: provisions that commonly vary by adopted edition or have moderate amendment frequency.
- LOW: anything jurisdiction-specific, recently updated, zoning-related, or an area you are not highly confident is current for the stated jurisdiction and edition — this includes essentially ALL zoning requirements and ALL local amendments, which should always be flagged LOW.
- Never present a LOW-confidence item with the same certainty as a HIGH-confidence one.

WHAT YOU NEVER DO
- Never state that a project "complies" or "does not comply" with code — that determination belongs solely to the licensed architect of record after their own verification.
- Never claim to have verified a code section against current, jurisdiction-adopted text — you are working from general knowledge, which may be outdated, incomplete, or non-jurisdiction-specific.
- Never omit a reminder, at the end of every digest, that all citations must be verified against the authoritative current code text by a licensed architect before they influence the design, and that local amendments must be checked separately and locally.
- Never fabricate a plausible-sounding section number when you are not confident one exists — say "I cannot confidently cite a specific section for this" instead.

STRUCTURE
Organize every digest by discipline (Structural, Fire/Life Safety, Accessibility, Energy, Plumbing, Zoning), and for each item provide: the requirement in plain language, the cited section and edition, and the confidence flag. Always close with: "This is a first-pass research digest, not a compliance determination. Every citation requires verification against the current, jurisdiction-adopted code text by a licensed architect before it influences the design. Local amendments must be checked separately with the local jurisdiction — do not assume this digest accounts for them."

Your value is speeding up where a licensed architect starts looking, not replacing their judgment or their liability. When in doubt, flag lower confidence rather than higher — an architect who double-checks an item that was actually fine loses a few minutes; an architect who trusts an unflagged wrong citation risks a failed plan check or worse.`,
    guardrails: [
      'This agent produces first-pass research digests only — it never issues, implies, or is treated as a compliance determination or sign-off. Every design decision based on its output requires a licensed architect\'s own verification against the authoritative current code text.',
      'Every citation must include a specific code section number and edition, plus a HIGH/MEDIUM/LOW confidence flag — the agent never states a requirement without both.',
      'The licensed architect verifies every code citation against the authoritative source (the jurisdiction\'s actually adopted current code text) before it is allowed to influence any aspect of the design.',
      'Jurisdictional and local amendments must always be checked locally and separately — the agent explicitly cannot be trusted to know a jurisdiction\'s current local amendments, and every digest states this.',
      'The agent never signs off on compliance, never states a project "complies" or "does not comply," and that determination remains solely with the licensed architect of record.',
      'Zoning requirements are always flagged LOW confidence by default, since zoning is jurisdiction-specific, changes frequently, and is the area most likely to be wrong.',
    ],
    testChecklist: [
      'Confirm every item in a generated digest includes both a specific code section/edition citation and a confidence flag — reject any digest with an uncited claim.',
      'Deliberately feed it a project with an outdated or superseded code edition (e.g. reference the 2015 IBC when your jurisdiction has adopted 2021) and confirm it flags the edition mismatch or the uncertainty rather than confidently applying outdated section numbers as current.',
      'Confirm the digest never states a project "complies" or "passes" — check that compliance language is absent from every output.',
      'Confirm every digest ends with the required disclaimer about verification and local amendments — reject any digest missing it.',
      'Ask it a zoning question and confirm the response is flagged LOW confidence, not presented with the same certainty as a well-established IBC provision.',
      'Run the verification pass (Step 3) on a sample digest and confirm at least one citation needed correction — if verification never finds anything, the review isn\'t being done carefully enough.',
    ],
    maintenance:
      'Every time your jurisdiction adopts a new code edition, update your project parameter sheet template immediately — a stale edition reference is the single most common source of bad first-pass citations. Once a quarter, spot-check a handful of past digests\' HIGH-confidence citations against current code text to confirm the agent\'s baseline knowledge is still holding up as codes evolve. Keep the verification log (Step 5) current so the firm has a clear record of what was checked and by whom. Budget 10 minutes per project for logging plus 30 minutes a quarter for the spot-check.',
  },

  {
    slug: 'architecture-client-update-agent',
    industry: 'architecture-firm',
    name: 'Client Update Agent',
    icon: 'arrows',
    tagline: 'A clear weekly status note from whatever notes you already scribbled in the meeting.',
    description:
      'Turns your internal project notes and meeting minutes into a clean, client-ready weekly status update — what happened, what\'s next, and anything that needs their decision — so clients stay informed without eating a project manager\'s Friday afternoon.',
    difficulty: 'Beginner',
    buildTime: '~2 hours',
    runningCost: '$20/month',
    timeSaved: '~1–2 hours/week per active project',
    stack: ['Claude Pro or ChatGPT Plus', 'Your internal meeting notes or project management tool'],
    whatItDoes:
      'Every Friday, you paste in whatever internal notes exist for a project — meeting minutes, a few bullet points on progress, an email thread excerpt — and this agent turns it into a clean, client-ready status update: what happened this week, what\'s coming next week, and a clearly separated section for anything that actually needs the client\'s decision or input. It\'s built for firms running several active projects at once, where writing a thoughtful individual update to every client every week is the first thing that gets skipped when things get busy. The draft still goes through you before it\'s sent — this agent removes the blank-page problem, not the judgment call of what a client needs to hear.',
    outcomes: [
      'Every active project gets a consistent weekly update instead of updates only when something goes wrong',
      'Clients get one clear "needs your decision" section instead of decisions buried in narrative paragraphs',
      'Project managers go from a blank page to a 5-minute review and edit per project',
      'A written weekly record of project status that\'s useful if a scope or timeline question comes up later',
      'Fewer client check-in calls interrupting design time, because the update already answered "where are we"',
    ],
    costBreakdown: [
      { item: 'Claude Pro or ChatGPT Plus', cost: '$20/mo', note: 'covers weekly updates across a typical small firm\'s full active project load' },
      { item: 'Your existing project notes/meeting minutes tool', cost: '$0/mo', note: 'works with whatever you already use — a shared doc, a PM tool, or plain email notes' },
    ],
    roi: 'A thoughtful individual client update takes most project managers 20–40 minutes to write from scratch when they\'re starting from raw meeting notes — across even 4–5 active projects, that\'s 2–3 hours a week of writing time that competes directly with billable design and coordination work. This agent cuts that to roughly 5–10 minutes of review and light editing per project, saving 1.5–2.5 hours a week for a PM at a $60–100/hour effective cost, worth $90–250/week — against a flat $20/month tool cost. The harder-to-quantify payoff is fewer surprised or anxious clients calling to ask "where are we," since a consistent weekly update answers that question before it\'s asked, which is one of the most common sources of friction on long design and construction timelines.',
    steps: [
      {
        number: 1,
        title: 'Write your update format and voice guide',
        description:
          'Decide once what a good weekly update looks like for your firm, so every project\'s update is consistent instead of reinvented each week.',
        dataNote:
          'Pull 2–3 past client updates you were proud of, or just decide on the format from scratch if you don\'t have past examples.',
        prompt: `I'm a project manager at [FIRM NAME], a [FIRM SIZE]-person architecture firm. I want to build a weekly client update format and voice guide so an AI can turn my raw meeting notes into a consistent, client-ready update.

Past updates I've written that I liked (paste 1–3, or describe the format I usually use): [PASTE OR DESCRIBE]
My firm's voice: [e.g. warm-professional, direct and concise, detail-oriented]

Please build me:
1. **A standard update structure** — sections for "this week," "coming up next week," and a clearly separated "needs your input" section
2. **A voice guide** — 3–5 tone words with a short example paragraph
3. **A "needs your input" formatting rule** — how decisions or open questions should be phrased so they're impossible for a client to skim past (e.g. bolded, numbered, with a clear ask and, if relevant, a deadline)
4. **A length rule** — how long a typical weekly update should be so it gets read, not skimmed and ignored
5. **A "quiet week" template** — for weeks where genuinely little happened, so the update doesn't feel padded or, worse, get skipped entirely

Save this as my client-update voice guide — every future weekly-update prompt will reference it.`,
      },
      {
        number: 2,
        title: 'Set up a project reference sheet per active project',
        description: 'A short standing reference per project keeps updates consistent even when different team members write the notes each week.',
        dataNote:
          'For each active project, note: client name(s) and preferred tone, current phase, overall timeline, and any standing context the agent should know (a sensitive topic, a client who prefers very short updates, a known upcoming decision point).',
      },
      {
        number: 3,
        title: 'Build the weekly-update drafting prompt',
        description: 'This is the engine — raw internal notes in, a clean client-ready draft out.',
        prompt: `Using my client-update voice guide, turn this week's internal notes into a client-ready weekly status update.

My voice guide: [PASTE FROM STEP 1]
Project reference sheet: [PASTE — client name, phase, timeline, standing context]
This week's internal notes (meeting minutes, bullet points, whatever I have): [PASTE — rough notes are fine, don't clean these up first]

Please draft:
1. **This week** — 2–4 sentences or bullets summarizing what actually happened, grounded only in the notes I gave you
2. **Coming up next week** — what's planned, based on the notes or the project's known timeline
3. **Needs your input** — a clearly separated, bolded section listing any decision, approval, or answer the client needs to provide, with a deadline if one exists. If nothing needs their input this week, say so explicitly rather than omitting the section or inventing a fake ask.
4. **Length**: follow my length rule — this should be readable in under a minute

If my notes don't give you enough to write a section confidently (e.g. no clear plan for next week), say so and ask me to fill the gap rather than inventing plausible-sounding progress or plans.`,
      },
      {
        number: 4,
        title: 'Handle quiet weeks without skipping them',
        description: 'The weeks with the least news are exactly when clients get anxious if they hear nothing — use the quiet-week template instead of skipping the update.',
        dataNote: 'No new data needed — this uses the quiet-week template built in Step 1 whenever a project genuinely had a slow week.',
      },
      {
        number: 5,
        title: 'Review and send',
        description:
          'Read every draft before it goes out — check that the "needs your input" section is accurate and that nothing in the notes was misread. This is a fast pass, not a rewrite, once the format is dialed in.',
      },
    ],
    systemPrompt: `You are the Client Update Assistant for [FIRM NAME], a [FIRM SIZE]-person architecture firm. Your job is to turn a project manager's raw internal notes into a clean, client-ready weekly status update. You never send anything directly — every draft is for the project manager to review and send themselves.

VOICE
Tone: [TONE WORDS FROM VOICE GUIDE, e.g. warm-professional, direct, detail-oriented without being dry]. Write like a project manager who respects the client's time, not a status-report generator.

STRUCTURE — ALWAYS USE THESE THREE SECTIONS
1. **This Week** — a concise summary of what actually happened, grounded strictly in the notes provided.
2. **Coming Up Next Week** — what's planned, based on the notes or known project timeline provided.
3. **Needs Your Input** — clearly separated and visually distinct (bolded or numbered) list of any decision, approval, or answer required from the client, with a deadline if one was given. If there is genuinely nothing requiring client input this week, state that explicitly rather than omitting the section or fabricating a request.

GROUNDING RULE — MANDATORY
- Only summarize what is actually in the notes provided. Never invent progress, decisions, meetings, or plans that weren't mentioned.
- If the notes don't give enough information to confidently write "Coming Up Next Week" or another section, say so explicitly and ask the project manager to fill the gap rather than writing something plausible-sounding but unconfirmed.

QUIET WEEKS
- If the notes indicate genuinely little happened, use a shorter "quiet week" version rather than padding the update with filler — an honest short update builds more trust than an artificially inflated one.

SENSITIVE TOPICS
- If the project reference sheet flags a sensitive topic (a delay, a budget issue, a disagreement), draft the relevant section carefully and factually, but flag it explicitly for extra project manager attention before sending rather than softening or omitting it on your own judgment.

WHAT YOU NEVER DO
- Never send an update directly — every draft requires project manager review
- Never invent progress, plans, or decisions that weren't in the provided notes
- Never omit or water down a genuine client decision point from the "Needs Your Input" section
- Never pad a quiet week with filler to make it look more substantial than it was
- Never guess at a deadline for a client decision that wasn't specified — state that a deadline should be confirmed instead

If the provided notes are ambiguous about whether something requires client input or is purely internal, err toward including it in "Needs Your Input" and let the project manager decide whether to keep it there — a client asked one extra question is a smaller cost than a missed decision point.`,
    guardrails: [
      'Every weekly update is reviewed by the project manager before sending — the agent drafts, it never sends directly.',
      'Grounds every section strictly in the internal notes provided — never invents progress, plans, or decisions that weren\'t mentioned.',
      'The "Needs Your Input" section is never omitted, watered down, or skipped — if there\'s genuinely nothing this week, it says so explicitly rather than dropping the section.',
      'Never fabricates a deadline for a client decision that wasn\'t specified in the notes — flags that a deadline needs confirming instead.',
      'Quiet weeks get an honest, shorter update rather than padded filler designed to look more substantial.',
      'Sensitive topics (delays, budget issues, disagreements) are flagged for extra project manager attention rather than softened or omitted on the agent\'s own judgment.',
    ],
    testChecklist: [
      'Feed it thin, vague internal notes and confirm it flags the gap and asks for clarification rather than inventing a plausible "coming up next week" section.',
      'Feed it notes with a genuine client decision buried in a paragraph and confirm it surfaces that decision clearly in "Needs Your Input" rather than leaving it embedded in narrative text.',
      'Feed it a genuinely quiet week\'s notes and confirm the draft is honestly short rather than padded to look more substantial.',
      'Feed it notes mentioning a project delay and confirm the update states it factually and flags it for extra review, rather than softening or omitting it.',
      'Feed it notes with no client decisions pending and confirm "Needs Your Input" explicitly says so rather than being omitted or containing a fabricated ask.',
    ],
    maintenance:
      'Once a month, skim a handful of sent updates across different active projects for tone consistency and to confirm the "Needs Your Input" section is reliably catching real decision points. Update each project\'s reference sheet whenever the phase, timeline, or client contact changes. If a client ever mentions they didn\'t realize something needed their input, treat that as a signal to tighten the grounding rule or reference sheet notes for that project, not just an isolated miss. Budget 15 minutes a month.',
  },
]

export const pack = {
  industry: 'architecture-firm',
  headline: 'Three AI agents that draft proposals, research code, and keep clients informed',
  subhead:
    'Blueprints to build agents that assemble fee proposals, produce a verifiable first-pass code research digest, and write weekly client updates — always reviewed by a licensed principal before anything goes out.',
  whyAgents: [
    'Proposal writing, code research, and weekly client updates routinely eat 6–10 hours a week at a small firm — hours a principal or PM could spend on design and client relationships instead.',
    'A $20–50/month AI agent can draft the first pass of each, with every fee number, code citation, and client decision still verified and approved by a human before it goes anywhere.',
    'These aren\'t one-off prompts — they\'re complete blueprints: system prompts, tool wiring, real costs, and guardrails built specifically around a licensed profession\'s liability and review requirements.',
  ],
  seoTitle: 'AI Agents for Architecture Firms — Blueprints, Costs & Prompts',
  seoDescription:
    'Build 3 AI agents for your architecture firm: proposal drafts, first-pass code research, and client updates. Real prompts, guardrails, honest costs. $29.',
}

export default architectureFirmAgents
