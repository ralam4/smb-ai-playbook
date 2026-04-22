const architectureFirmGuides = [
  {
    slug: 'architecture-code-compliance',
    tier: 'pro',
    industry: 'architecture-firm',
    title: 'Accelerate Code Research, Plan Check Responses, and Permit Submittals',
    description:
      'A full code compliance system for small firms — code checklists, plan check response drafting, jurisdiction-specific submittal packages, and a reusable prompt library for IBC, state amendments, and accessibility standards.',
    difficulty: 'Intermediate',
    time: '~60 min per project',
    tools: 'ChatGPT or Claude · Your applicable codes · Plan check comments',
    stripeUrl: null,
    intro:
      'Small architecture firms spend hours digging through building codes, writing plan check responses, and assembling permit submittal packages. It’s tedious, repetitive, and pulls licensed architects away from design work. This guide is a full compliance system: code research checklists by discipline, plan check response drafting with code citations, jurisdiction-specific submittal packages, and a reusable prompt library you can reuse on every project. It covers IBC (2021 and prior editions), major state amendments (California Title 24, Florida, Texas), and ADA/ANSI A117.1 accessibility. ⚠️ **Important:** AI is a research assistant, not a licensed professional. Every code interpretation and compliance decision must be verified by a licensed architect. These outputs are starting points that cut research time by 60–80%, not final answers.',
    outcomes: [
      'A discipline-organized code compliance checklist tailored to your specific project',
      'Draft plan check responses with code citations and revision guidance',
      'A jurisdiction-specific permit submittal package checklist',
      'A reusable prompt library covering your 3 most common project types',
      'A "verification protocol" to catch AI mistakes before they reach plan check',
    ],
    steps: [
      {
        number: 1,
        title: 'Build your project parameter sheet',
        description:
          'The quality of AI-assisted code research depends entirely on the project parameters you provide. Build a single sheet you reuse every project.',
        dataNote:
          'You need: project type, occupancy classification (including mixed-use breakdown), construction type, building area and stories, jurisdiction, applicable code editions (IBC, local amendments, IECC, ADA/ANSI), fire sprinkler status, any jurisdiction-specific requirements (enhanced accessibility, specific fire access, historic district rules, coastal zone, etc.).',
      },
      {
        number: 2,
        title: 'Generate a discipline-organized code checklist',
        description:
          'Replace 2–4 hours of manual code research with a 10-minute AI-assisted pass, then verify. The key is asking for code sections, not just requirements — so verification is fast.',
        prompt: `I'm an architect working on a [PROJECT TYPE] project in [CITY/JURISDICTION].

Project details:
- Occupancy classification: [e.g. B, A-2, R-2, mixed-use B/R-2 with specific areas for each]
- Construction type: [e.g. Type V-A, Type III-B]
- Building area: [SF per story + total]
- Number of stories: [NUMBER + height in feet]
- Sprinklered: [Yes/No + NFPA edition]
- Applicable codes: [e.g. 2021 IBC, 2022 California Building Code, IECC 2021, ADA/ANSI A117.1, local amendments]
- Jurisdiction-specific requirements: [LIST]

Please generate a code compliance checklist organized by discipline, with code section numbers for every item:

1. **Structural/Building** — allowable area calculations (with Table 506.2 reference), height and story limits, fire-resistance ratings for structural elements, opening protectives
2. **Fire and Life Safety** — sprinkler requirements (IBC 903), egress (IBC Ch. 10 — occupant load, number of exits, exit width, common path, dead ends), fire separation (IBC 707, 708, 711), occupancy separation (IBC 508), fire department access
3. **Accessibility** — accessible routes, parking count and type, restroom fixture counts, accessible route dimensions, signage
4. **Energy Code** — envelope requirements, mechanical efficiency, lighting power density, compliance path (prescriptive vs performance)
5. **Plumbing** — fixture counts per occupancy load (IBC Table 2902.1 or local equivalent)
6. **Jurisdiction-specific items** — any items from the local requirements I listed

For each item:
- Code section number
- Requirement summary (plain language)
- What to verify in drawings
- A checkbox placeholder

Flag any item where the code has been updated between editions — I need to know whether the referenced section is current.`,
      },
      {
        number: 3,
        title: 'Build a verification protocol',
        description:
          'AI hallucinates code sections. The cost of submitting a plan check response citing a wrong code section is reputation damage. Build a 5-minute verification protocol you run before every submittal.',
        prompt: `I want a verification protocol I can run on every AI-generated code response before submittal.

Based on typical AI failure modes for code research (outdated editions, misremembered section numbers, conflating IBC with local amendments, missing exceptions), please create:

1. A **pre-submittal verification checklist** — 8–12 specific checks I run on every AI-generated response
2. A **code section spot-check protocol** — which sections to actually open and verify vs. which are safe to trust
3. A **red-flag prompt** I can paste to a second AI session asking "what could be wrong with this response" as a second-opinion pass
4. A **client disclaimer** I can include in my deliverables when AI was used as a research aid (protects me professionally)
5. A list of **code areas where AI is most reliable** (structural calcs, accessibility dimensions) vs. **areas where it's least reliable** (jurisdiction-specific amendments, recent code updates, interpretation questions)`,
      },
      {
        number: 4,
        title: 'Draft plan check responses with code citations',
        description:
          'Plan check responses are where most time gets lost. Paste the comments, get draft responses with code citations, verify, submit.',
        prompt: `I received plan check comments from [JURISDICTION] on my [PROJECT TYPE] project. I need point-by-point draft responses.

Project context (from my parameter sheet):
[PASTE PROJECT PARAMETERS]

Plan check comments:
[PASTE THE FULL LIST OF COMMENTS — number them if they aren't already]

For each comment, please:
1. Draft a professional response that addresses the comment directly (3–5 sentences)
2. Cite the specific code section that supports the response (section number + edition)
3. Indicate response type: (a) narrative only, (b) drawing revision required, (c) calculation submittal, (d) request for clarification from plan checker
4. Flag any comments where the jurisdiction's interpretation appears to differ from the code text — those need the principal's review before submittal
5. Identify any comments that are actually duplicates or contradictions of each other
6. Suggest a response priority (easy wins first, complex/coordination items last)

Format as a numbered response sheet matching the plan checker's comment numbering. Use the jurisdiction's typical phrasing style if I specify one, otherwise use neutral professional language.`,
      },
      {
        number: 5,
        title: 'Assemble a jurisdiction-specific submittal package',
        description:
          'Every jurisdiction has slightly different submittal requirements. Build a reusable package template per jurisdiction you work in regularly.',
        prompt: `I'm preparing a permit submittal package for [JURISDICTION] for a [PROJECT TYPE] project.

Please create a comprehensive submittal checklist:

1. **Required drawing sheets** — with notes on what each must show per this jurisdiction's typical requirements
   - Site plan (with specific setbacks, coverage calcs, access, fire lanes)
   - Floor plans (with occupancy classifications, egress, fire separation lines)
   - Elevations (with height calcs, glazing calcs for energy)
   - Sections
   - Details (door/window schedules, wall/floor assemblies with ratings)
   - Structural plans and calcs
   - MEP plans

2. **Required calculations**
   - Structural calcs
   - Energy calcs (Title 24 / COMcheck / REScheck as applicable)
   - Plumbing fixture count
   - Occupant load and egress

3. **Required forms** — permit application, contractor info if known, special inspection requirements, environmental forms

4. **Required supporting documents** — soils report, survey, HOA approval, school district fees, utility will-serve letters, historic review if applicable

5. **Fees typically required at submittal** — plan check, permit, environmental, impact

6. **Pre-submittal requirements** — pre-application meeting, design review, environmental review, historic review

7. **Jurisdiction-specific quirks** — things this jurisdiction is known to be picky about

Format as a printable checklist with checkboxes, organized by submission order. Include a "common rejection reasons" section based on what this jurisdiction typically flags.`,
      },
      {
        number: 6,
        title: 'Build a reusable prompt library for your top 3 project types',
        description:
          'Most small firms have 2–4 project types they do 80% of. Build a prompt library so the code research prompt for a small TI, a custom residence, or a multifamily is a single paste.',
        prompt: `I want to build a reusable prompt library for my firm's 3 most common project types. For each project type I'll list below, create a pre-filled prompt template I can reuse by just swapping in project specifics.

My 3 most common project types:
1. [e.g. "Tenant improvement, B occupancy, Type V-A, <10,000 SF, California"]
2. [e.g. "Custom single-family residence, R-3, Type V-B, 2500–5000 SF, California"]
3. [e.g. "Multifamily residential, R-2, Type V-A, 10–30 units, California"]

For each type, please create:
1. A **pre-filled code research prompt** with my typical parameters baked in — I only have to swap in project-specific details
2. A **standard checklist structure** showing the disciplines and typical section areas that always apply
3. A **"always verify" list** of 5–8 items that frequently change between projects of this type (setbacks, occupant load, specific fire separation)
4. A **project kickoff email** to the client summarizing the code strategy for a project of this type

Format the output so I can save each as a template file and load it at project kickoff.`,
      },
      {
        number: 7,
        title: 'Create a plan check escalation protocol',
        description:
          'Some plan check comments are wrong. The cost of accepting a wrong comment is carrying a non-compliant condition forward. Build a protocol for when to push back.',
        prompt: `Some plan check comments are technically incorrect or exceed the code's actual requirement. I need a protocol for when to push back professionally.

Please create:
1. **A "push back vs. comply" decision framework** — when it's worth challenging, when it's faster to just comply even if the plan checker is wrong
2. **An escalation email template** — professional, cites specific code language, requests reconsideration, offers to meet
3. **A "request for clarification" template** — for comments where the plan checker's intent is unclear, before assuming
4. **A protocol for when the plan checker and the code disagree** — how to document the disagreement, when to request a supervisor review, how to protect the firm if we comply under protest
5. **A tracking template** — for each project, log which comments pushed back successfully and which required compliance, so we learn each jurisdiction's patterns over time`,
      },
    ],
    expectations: {
      good: 'The code checklist (Step 2) typically saves 3–5 hours per project. The plan check response drafts (Step 4) cut resubmittal time roughly in half. The reusable prompt library (Step 6) is the compounding win — every project of the same type gets faster.',
      ifBad:
        'If AI outputs are unreliable for your specific jurisdiction, invest Step 6 in a detailed "my jurisdiction" context block. The more context you front-load, the more accurate the outputs.',
      time: 'First project with the full system: ~3 hours to set up. Subsequent projects: ~45 min for full code research and submittal package prep.',
    },
    downloadFile: null,
  },

  {
    slug: 'architecture-profitability',
    tier: 'pro',
    industry: 'architecture-firm',
    title: 'Run a Full Project Profit Audit and Protect CA Margins',
    description:
      'Audit your projects to find the real effective hourly rate per phase, build scope-proof proposals with phase-specific language, and install a CA scope management system that stops margin erosion during construction.',
    difficulty: 'Advanced',
    time: '~2 hours for initial audit, 15 min/week ongoing',
    tools: 'ChatGPT or Claude · Project hours data · Fee proposals',
    stripeUrl: null,
    intro:
      'Most small architecture firms don’t track profitability per project, per phase, or per client type. They know their overall revenue but not which project types run profitable through CD and then bleed out during CA. Scope creep during Construction Administration quietly erodes margins until the project that looked profitable on paper turns into a loss. This guide walks you through a full profit audit across at least 10 projects, a scope-proof proposal template with phase-specific language, a CA scope tracker, and a weekly margin-protection habit. Works for residential, commercial, and institutional firms of 2–50 people.',
    outcomes: [
      'An effective hourly rate calculated per project, per phase (SD/DD/CD/CA), and per project type',
      'A ranked list of project types, clients, and phases where you’re actually losing money',
      'A scope-proof proposal template with explicit inclusions, exclusions, and change order language',
      'A CA scope tracker with standard allowances for RFIs, site visits, and submittal rounds',
      'A weekly 15-minute margin review habit that catches erosion early',
    ],
    steps: [
      {
        number: 1,
        title: 'Pull project financials for 10+ completed projects',
        description:
          'The audit is only as good as the data. Gather 10–15 recent projects with enough detail to separate phase performance.',
        dataNote:
          'For each project: name, type (residential/commercial/TI/institutional), client type (developer/owner-occupier/nonprofit), contracted fee, additional services billed, hours by phase (SD/DD/CD/CA) and by staff role (principal/PA/designer/drafter), hourly billing rates, project duration, and a qualitative note on scope creep events.',
      },
      {
        number: 2,
        title: 'Run a multi-dimensional profit audit',
        description:
          'AI can rip through the numbers and surface patterns that would take a weekend to spot manually.',
        prompt: `I want a full profit audit across my last 10–15 projects. I need to see profitability by project, by phase, by project type, and by client type.

Here is my project data:
[PASTE DATA — for each project: name, type, client type, contracted fee, additional services billed, hours by phase and role, billing rates, duration, scope creep notes]

Please analyze:
1. **Effective hourly rate per project** — total fee (including additional services) ÷ total hours
2. **Phase-level profitability** — for each phase (SD/DD/CD/CA), what percentage of the total fee did each phase actually consume in hours × rates? Flag any phase that consistently runs over budget.
3. **Project type profitability** — rank my project types by average effective hourly rate. Which types are most/least profitable?
4. **Client type patterns** — are certain client types (developers, owner-occupiers, nonprofits) systematically more or less profitable?
5. **CA erosion flag** — any project where CA hours exceeded 25% of the contracted fee
6. **Staff mix issues** — projects where principal/senior hours ran higher than typical (too much senior time on CDs suggests a PA capacity problem)
7. **Scope creep correlation** — cross-reference the scope creep notes with actual hour overruns
8. **Top 3 findings** — plain language, what are the patterns I need to act on first

Finally, calculate what my firm-wide profit margin would be if I:
(a) Fixed the worst-performing project type
(b) Contained CA to budget on every project
(c) Improved my staff mix on my most frequent project type`,
      },
      {
        number: 3,
        title: 'Build scope-proof proposals with phase-specific language',
        description:
          'Generic proposals are where scope creep begins. Build per-phase language that makes "what’s included" unambiguous.',
        prompt: `Based on my audit findings, help me build a scope-proof proposal template with phase-specific language.

My firm:
- Firm name: [NAME]
- Typical project types: [LIST from top 3]
- Standard rates: [Principal $X, Project Architect $X, Designer $X, Drafter $X]
- Phases I typically include in base fee: [e.g. SD through CA, or SD through CD with CA hourly]

Please create:
1. **Per-phase scope language** — for each of SD, DD, CD, and CA, explicit inclusions (number of design iterations, meetings, drawing sets, site visits, RFI reviews, submittal reviews) and exclusions
2. **An "Additional Services" schedule** with hourly rates and common add-ons: additional meetings, redesigns beyond N rounds, expedited schedules, owner-requested changes after DD approval, CA beyond allowance, existing conditions survey, code analysis beyond baseline, consultant coordination beyond baseline
3. **"Not Included" language** — the most common things clients assume are included but shouldn't be (renderings, BIM for coordination, interior design, FF&E selection, cost estimating, bidding support beyond baseline)
4. **Fee structure recommendation** — based on my data, should I use fixed fee, fixed fee with hourly CA, or percentage of construction cost? Which best protects my margins?
5. **A change order template** — short, professional, with clear dollar amount and revised schedule impact
6. **A contract amendment clause** — standard language for when scope is added formally`,
      },
      {
        number: 4,
        title: 'Install a CA scope management system',
        description:
          'CA is where profitability breaks down. Put a tracker in place and enforce scope conversations before limits are exceeded, not after.',
        prompt: `CA is consistently my margin killer. Help me build a CA scope management system.

My typical CA challenges:
- [DESCRIBE — unlimited RFIs, too many site visits, submittal review rounds, contractor calling my cell, owner changes during construction, etc.]
- My typical project size (construction cost): [RANGE]
- My typical contracted CA duration: [MONTHS]

Please create:
1. **A CA scope tracker template** — columns for: RFI count (vs. contract allowance), site visit count (vs. allowance), submittal review rounds (vs. allowance), change order requests, owner-initiated changes
2. **Standard CA scope allowances** by project size — recommended RFI, site visit, and submittal review allowances for small/medium/large projects based on industry norms
3. **A "scope approaching limit" email template** — notify client when we're at 75% of allowance, before we're over
4. **A "scope exceeded" email template** — professional, references contract, quotes additional services, requires client approval before we continue
5. **A weekly CA status report template** — to send to owner showing scope consumption (e.g. "12 of 15 allocated RFIs used, 3 of 6 site visits completed")
6. **A contractor communication protocol** — how to establish that RFIs must be formal and routed through the project manager, not phone calls to whoever answers
7. **A change order log** — tracks every owner change during CA with time impact, cost impact, and client signature`,
      },
      {
        number: 5,
        title: 'Diagnose staff mix and delegation issues',
        description:
          'If principals are doing PA-level work, the project can’t be profitable no matter how well you negotiate the fee. Diagnose where delegation is breaking down.',
        prompt: `I want to diagnose whether my staff mix is working on my most common project types.

For my top project type: [TYPE]
Typical fee: $[AMOUNT]
Typical hours breakdown I'm seeing:
- Principal: [HOURS]
- Project architect: [HOURS]
- Designer: [HOURS]
- Drafter: [HOURS]

Benchmarks I'd expect for a healthy firm doing this project type (please research and cite sources if possible, otherwise use your best estimate):
[leave blank or cite AIA benchmarks if I have them]

Please analyze:
1. Is my principal doing too much of the work? What's the optimal principal percentage for this project type?
2. Is my PA carrying enough of the project, or am I under-delegating?
3. Is my junior staff being utilized efficiently?
4. If my principal hours are too high, what are the most common reasons (QA/QC, client management, decision bottleneck, design ownership)?
5. What's the financial impact of rebalancing to a healthier staff mix?
6. Suggest 3 specific delegation changes I could make on my next project of this type`,
      },
      {
        number: 6,
        title: 'Build a weekly margin protection habit',
        description:
          'A quarterly audit catches problems late. A weekly 15-minute review catches them early.',
        prompt: `I want a simple weekly 15-minute review that catches margin erosion on active projects before it becomes severe.

My active project count: [NUMBER]
My team size: [NUMBER]
My project management tool: [NAME or "spreadsheets"]

Please create:
1. **A weekly review dashboard** — for each active project: phase, % fee consumed, % scope complete, RFI/site visit/submittal consumption, red/yellow/green status
2. **Trigger rules** — when a project turns yellow or red, what's the specific action I take
3. **A 3-question weekly project check-in** — to ask each project manager: Are we on track? What's changed? Do we need a scope conversation with the client?
4. **A monthly firm-level roll-up** — what I review with my principal team to spot systemic patterns
5. **A "client conversation" protocol** — how to bring up scope with a client without damaging the relationship — language, timing, and framing`,
      },
      {
        number: 7,
        title: 'Post-project close-out learnings',
        description:
          'Every project has lessons. Most firms never capture them systematically. Build a 30-minute close-out habit.',
        prompt: `I want a post-project close-out template that captures lessons learned and feeds back into my estimating and proposal process.

Please create:
1. **A 30-minute project close-out template** — financial summary, scope summary, what went well, what went wrong, what I'd do differently
2. **A client feedback request email** — professional, short, asks 4–5 specific questions about working with us
3. **A proposal learnings log** — a running document that tracks adjustments to my proposal template based on what I keep running into
4. **A fee benchmarking table** — updates after every project, so I know my real firm-level data on fee per SF, hours per phase, duration per project type
5. **A red-flag client list** — internal only, tracks clients who behave in ways that erode margin (payment delays, excessive changes, scope bullying) so I price them accordingly next time`,
      },
    ],
    expectations: {
      good: 'Most firms discover 1–2 project types that are 20–40% less profitable than assumed. Fixing CA scope alone typically recovers 3–6% of annual revenue. The weekly habit (Step 6) is where durable margin protection lives.',
      ifBad:
        'If your hour tracking is spotty, do the audit on your 3–5 best-documented projects instead of trying to go 15 deep. The patterns surface either way.',
      time: 'Initial audit: 2 hours. Proposal template rebuild: 3–4 hours. CA system setup: 2 hours. Weekly habit: 15 min/week. ROI shows up within 60–90 days on the next full project cycle.',
    },
    downloadFile: null,
  },

  {
    slug: 'architecture-client-proposals',
    tier: 'pro',
    industry: 'architecture-firm',
    title: 'Generate Client Proposals That Protect Your Scope and Close Faster',
    description:
      'A proposal system for small firms — a qualifying intake form, a fee calculator that matches your firm’s actual rates and hours, a proposal generator with scope-proof language, and follow-up templates that close deals faster.',
    difficulty: 'Intermediate',
    time: '~30 min per proposal, 3 hours one-time setup',
    tools: 'ChatGPT or Claude · Your fee data · Past proposals',
    stripeUrl: null,
    intro:
      'Writing proposals is where small firms lose the most untracked time. A principal spends 4–8 hours on a proposal for a project that may or may not close, the scope is often written from memory under time pressure, and the fee is guessed based on "what feels right." The result: proposals that take too long, quote too low, and leave holes that turn into scope creep later. This guide builds a full proposal system — a qualifying intake form that filters out bad fits early, a fee calculator that uses your actual firm data, a scope-proof proposal generator, and a follow-up sequence that actually closes deals. This pays back the $5 on your very next proposal.',
    outcomes: [
      'A client qualifying intake form that filters out bad-fit projects in under 10 minutes',
      'A fee calculator template matched to your firm’s real rates and typical hours',
      'A scope-proof proposal generator that outputs a client-ready draft in 30 minutes',
      'A follow-up email sequence that closes proposals faster',
      'A "good proposal vs. pass" decision framework',
    ],
    steps: [
      {
        number: 1,
        title: 'Build a client qualifying intake form',
        description:
          'Most firms say yes to every inquiry. The highest-leverage change is saying no earlier to projects that won’t close or won’t be profitable.',
        prompt: `I want to build a client intake form that surfaces whether a prospective project is worth pursuing before I spend hours on a proposal.

My firm:
- Firm size: [NUMBER]
- Project types I want to pursue: [LIST]
- Project types I want to avoid: [LIST]
- Minimum fee threshold (below which the project isn't worth pursuing): $[AMOUNT]
- Typical client profile I work well with: [DESCRIBE]
- Client red flags I've learned to spot: [LIST]

Please create:
1. **A 12–15 question intake form** that covers: project type, budget (construction budget AND design fee expectations), site/property status, permitting status, expected timeline, prior architect relationship (why they left), decision-maker identification, financing, and key success criteria
2. **A scoring rubric** that flags the intake as: strong fit / worth a meeting / polite pass
3. **A polite decline template** for inquiries that don't pass scoring — preserves the relationship for future referral
4. **A "request for more info" template** for intakes that are incomplete
5. **A red-flag detection list** — specific answers that should trigger a caution flag (unrealistic budget, rushed timeline, 3rd architect on the project, unclear decision-maker)`,
      },
      {
        number: 2,
        title: 'Build a fee calculator that uses your actual data',
        description:
          'Most proposals quote fees from memory. Build a calculator grounded in your real firm data so you stop undercharging.',
        prompt: `I want to build a fee calculator for my firm that uses my actual data, not industry averages.

My firm's historical data:
- Average hours per phase for my most common project type: [SD hours / DD hours / CD hours / CA hours]
- Average hours by role for that type: [principal hours / PA hours / designer hours / drafter hours]
- My standard billing rates: [Principal $X, PA $X, Designer $X, Drafter $X]
- My target profit margin: [%]
- My overhead multiplier (if known): [MULTIPLIER]

Please create:
1. **A fee calculation worksheet** — inputs: project type, size (SF), complexity (simple/medium/complex), phases included; outputs: estimated hours by phase and role, total hours, base fee, fee with target margin, fee as % of construction cost for benchmarking
2. **A complexity multiplier** — how I should scale hours for a "complex" version of my typical project (historic, complex site, demanding client, tight schedule)
3. **A minimum fee floor** — the smallest total fee below which the project isn't worth my time regardless of "hours math"
4. **A "walk away" fee** — the fee I would quote if I didn't actually want the project but didn't want to say no outright
5. **Three pricing scenarios** — for a typical project of my common type: conservative (pad hours 20%), standard, aggressive (minimum margin). When to use each.`,
      },
      {
        number: 3,
        title: 'Generate a scope-proof proposal',
        description:
          'Output a client-ready proposal draft in 30 minutes with scope language that prevents creep.',
        prompt: `I need to draft a proposal for a prospective client. Use my fee calculator output and generate a full proposal.

Project details (from intake):
- Client name: [NAME]
- Project type: [TYPE]
- Project size: [SF or units]
- Project location: [CITY]
- Expected timeline: [DURATION]
- Phases included: [SD/DD/CD/CA]
- Construction budget: $[AMOUNT]
- Special considerations: [ANY NOTABLE — historic, complex site, unusual program]

Fee calculation output:
[PASTE FROM STEP 2]

Please generate a full proposal with these sections:
1. **Cover letter** — 3 paragraphs, warm but professional, references something specific from our intake conversation
2. **Project understanding** — 2 paragraphs showing we heard them correctly
3. **Scope of services** — per phase, explicit inclusions (meetings, iterations, deliverables) and exclusions
4. **Additional services schedule** — hourly rates and common add-ons
5. **Fee and payment schedule** — amount, phased billing, milestones
6. **Schedule** — overall timeline with milestones
7. **Team** — short bios or roles (I can fill in names)
8. **Assumptions and exclusions** — the 8–12 most common "we assumed this but you meant that" items for projects of this type
9. **Contract terms summary** — 5–6 key contract terms (payment terms, termination, revision rights, insurance, liability cap)

Format as a clean, professional document. Use editorial language, not legal-speak, except in the contract terms section. Avoid corporate consulting jargon.`,
      },
      {
        number: 4,
        title: 'Write the follow-up sequence',
        description:
          'Most proposals die in silence. A well-timed follow-up sequence doubles close rates.',
        prompt: `I want a follow-up email sequence for proposals that haven't received a response.

My typical decision timeline: clients usually respond within [DAYS] or never
My typical close rate: [% if known]

Please write:
1. **Follow-up #1 (3–5 days after sending)** — friendly check-in, offers to answer questions
2. **Follow-up #2 (10 days after sending)** — references something specific from the proposal, small value-add (a relevant article, a case study link)
3. **Follow-up #3 (3 weeks after sending)** — "it sounds like the timing may have shifted, happy to reconnect when you're ready" (graceful exit)
4. **Follow-up #4 (90 days later)** — reopens the conversation after time has passed; reference industry changes or new work
5. **A "fee objection" response** — when the client comes back and says the fee is too high
6. **A "competing proposal" response** — when the client says they're comparing with other firms (what to say, what NOT to say)
7. **A "they went with someone else" response** — graceful, preserves the relationship for future referral`,
      },
      {
        number: 5,
        title: 'Install a proposal review protocol',
        description:
          'Before every proposal goes out, run a 10-minute review protocol. Catches the 3 mistakes that eat margin.',
        prompt: `I want a 10-minute review protocol I run on every proposal before sending, to catch the mistakes that eat margin.

Based on common proposal mistakes (under-quoting, missing exclusions, vague scope, unclear schedule, no change order language), please create:

1. **A 10-minute review checklist** — 15–20 items to verify before sending
2. **A "2nd pair of eyes" review protocol** — when to have someone else review before sending
3. **A "red flags to address before sending" list** — 5–7 things that would delay sending and force a conversation with the client first
4. **A fee sanity check** — 3 quick calculations to verify the fee is actually profitable
5. **A post-send tracking entry** — what to log so I can analyze my proposal performance over time (close rate by type, average fee vs. actual, common objections)`,
      },
      {
        number: 6,
        title: 'Build a proposal performance tracker',
        description:
          'If you don’t track proposal performance, you can’t improve it. Simple spreadsheet-friendly format.',
        prompt: `Help me build a proposal tracker so I can measure my performance over time.

My average proposals per month: [NUMBER]
My typical project types: [LIST]

Please create:
1. **A proposal log spreadsheet structure** — columns for: date sent, client name, project type, fee quoted, outcome (won/lost/ghosted), days to decision, objections raised, actual project margin if won
2. **A monthly review template** — to analyze: close rate, average fee, types of projects winning vs. losing, most common objections
3. **A quarterly benchmarking template** — proposal performance quarter over quarter
4. **An "improvement areas" identifier** — based on patterns, what to adjust in my proposal template or process
5. **A "clients we shouldn't pursue" list** — client types or project types where my close rate is low or margin is poor`,
      },
    ],
    expectations: {
      good: 'Most firms reduce proposal time from 6–8 hours to 1–2 hours after the system is built. Close rates typically improve 15–25% because the proposals are better structured and the follow-up is consistent. The qualifying intake (Step 1) is often the highest-impact change — it prevents the biggest time sink.',
      ifBad:
        'If your close rate is low, the problem is usually upstream of the proposal (wrong-fit clients, bad intake). Don’t optimize the proposal template if the pipeline is broken.',
      time: 'One-time setup: 3–4 hours. Per-proposal time: 30 min (down from 6–8). Full system pays back on the very next closed deal.',
    },
    downloadFile: null,
  },

  {
    slug: 'architecture-government-contracts',
    tier: 'pro',
    industry: 'architecture-firm',
    title: 'Win Government Contracts — RFP, RFI, and Bid Strategy with AI',
    description:
      'Land federal, state, and municipal work by using AI to decode solicitations, tailor your SF 330 or state qualifications package, and draft bid narratives that score.',
    difficulty: 'Advanced',
    time: '~45 min per solicitation',
    tools: 'ChatGPT or Claude · Past project data · A real solicitation PDF',
    stripeUrl: null,
    intro:
      'Federal and state architecture contracts are worth the effort — they’re multi-year, they pay on time, and one good GSA IDIQ or state master service agreement can stabilize your firm’s revenue for years. But the bidding process is a specialized skill. Solicitations run 80+ pages, scoring criteria are opaque, and "responsive" proposals are often the ones that don’t win — the winners know which sections matter, how to mirror the agency’s language, and how to tell a story about their team that maps directly to the evaluation rubric. This guide walks you through using AI to decode any RFP, extract the real scoring drivers, and draft bid responses that score. It works for federal (SF 330, GSA, USACE), state (DOT, university systems), and municipal (city/county) solicitations.',
    outcomes: [
      'A full "solicitation decode" that extracts the evaluation rubric, mandatory requirements, and hidden disqualifiers from any RFP',
      'A tailored project narrative and team bio that mirrors the agency’s stated priorities',
      'A past-performance matrix showing how your firm’s experience maps to each selection criterion',
      'A "go/no-go" scoring framework to stop chasing solicitations you can’t win',
    ],
    steps: [
      {
        number: 1,
        title: 'Gather what you’ll need for the bid',
        description:
          'Before using AI, pull together the raw materials. The quality of the inputs determines the quality of the output.',
        dataNote:
          'You need: (1) The full solicitation PDF (RFP, RFQ, or SOQ). (2) Your firm’s past 5–10 projects with fee, duration, client, scope, and outcomes. (3) Your team’s resumes, licensure, and certifications (including any MBE/WBE/SDVOSB status). (4) Any past SF 330s or state qualifications packages you’ve submitted. You can paste text, summarize, or attach PDFs depending on the tool.',
      },
      {
        number: 2,
        title: 'Decode the solicitation',
        description:
          'Most firms read the RFP once and start writing. Winners run a structured decode first — extracting the scoring rubric, the must-haves, and the language cues the agency is signaling for.',
        prompt: `I'm responding to an architecture solicitation and I need to decode it before I write anything.

Here is the full solicitation text or attached PDF:
[PASTE SOLICITATION TEXT OR ATTACH THE PDF]

Agency type: [Federal / State / Municipal / University system]
Agency name: [AGENCY NAME, e.g. USACE, Caltrans, City of Austin]
Contract type: [IDIQ / Single-award / Master Services Agreement / Design-Build]

Please produce:
1. **Evaluation rubric** — list every scored factor with its weight (if stated). If weights aren't stated, infer relative importance from how much space the solicitation devotes to each.
2. **Mandatory requirements** — every "shall", "must", and "required" statement, grouped by: firm qualifications, team qualifications, past performance, technical approach, administrative compliance.
3. **Hidden disqualifiers** — any requirement that looks buried but would disqualify a non-compliant proposal (e.g. specific certifications, set-aside language, page limits, font size, submission format).
4. **Language cues** — terms the agency uses repeatedly that signal their priorities (e.g. "sustainability", "schedule certainty", "community engagement", "resilient design"). Flag anything I should mirror in my response.
5. **Past performance requirements** — minimum number of similar projects, dollar thresholds, recency requirements, and whether references must be federal/state/local clients.
6. **Key dates** — pre-proposal conference, questions deadline, submission deadline.
7. **One paragraph summary** — in plain English, what is this agency actually trying to buy and who are they looking for?`,
      },
      {
        number: 3,
        title: 'Run a go/no-go analysis',
        description:
          'Don’t write a proposal you can’t win. Use the decoded rubric to honestly score your firm before spending 40 hours on a response.',
        prompt: `Based on the solicitation decode you just produced, I want to run an honest go/no-go analysis before I commit to writing this proposal.

Here is my firm's profile:
- Firm size: [# of licensed architects, total staff]
- Office locations: [CITY, STATE]
- Years in business: [YEARS]
- Certifications/set-aside status: [MBE / WBE / SDVOSB / HUBZone / 8(a) / none]
- Past government work: [LIST — federal agency experience, state DOT, university, municipal. Include project name, client, fee, completion year, and whether you were prime or sub]
- Relevant private sector experience: [LIST any private projects that map to the RFP scope — same building type, same size range]
- Team capacity: [How many hours/week can we realistically dedicate over the next 8 weeks without damaging current work?]

Please evaluate:
1. **Eligibility** — do I meet every mandatory requirement? Flag any that are borderline or require a partner.
2. **Scoring projection** — for each weighted factor in the rubric, rate my competitive position (Strong / Competitive / Weak / Not Qualified) with a one-sentence justification.
3. **Past performance gap** — where is my past performance thin, and could a teaming arrangement fix it?
4. **Estimated win probability** — a rough percentage, with the 2–3 factors that would need to swing for me to actually win.
5. **Go/no-go recommendation** — pursue as prime, pursue as sub to a larger firm, team with a specific type of partner, or pass. If pursue, what's the one thing I need to do differently from my usual proposal approach to be competitive?`,
      },
      {
        number: 4,
        title: 'Build a past performance matrix',
        description:
          'Evaluators don’t read past project descriptions — they scan them for matches. Build a matrix that makes the match obvious.',
        prompt: `I need to build a past performance matrix that shows this agency exactly how my firm's experience maps to their selection criteria.

Here are the selection criteria from the decoded rubric:
[PASTE THE EVALUATION RUBRIC FROM STEP 2]

Here is my firm's past project data:
[PASTE PROJECT LIST — for each: name, client, building type, size (SF or $), fee, completion year, role (prime/sub), and a 2-sentence scope summary]

Please produce:
1. A **relevance-ranked project list** — the 5–7 projects that best demonstrate fit for THIS solicitation, ranked by relevance. Justify each ranking in one sentence.
2. A **mapping matrix** — a table with rows = selection criteria and columns = my top 5 projects, with a brief note in each cell showing how that project demonstrates that criterion. Leave cells blank where there's no match.
3. **Gap flags** — selection criteria where none of my projects demonstrate the required experience. For each gap, suggest: (a) a weaker project that could be reframed, or (b) the type of teaming partner I'd need to fill the gap.
4. **Narrative hooks** — for each top project, give me one sentence that frames it in the agency's language (using the "language cues" from the solicitation decode).`,
      },
      {
        number: 5,
        title: 'Draft the technical approach section',
        description:
          'This is where most firms lose points. They describe their generic methodology instead of responding to the specific project. AI lets you draft a genuinely tailored response fast.',
        prompt: `I need to draft the Technical Approach section of my proposal. This is typically the highest-weighted scoring section.

Context:
- Solicitation summary: [PASTE THE ONE-PARAGRAPH SUMMARY FROM STEP 2]
- Agency language cues to mirror: [LIST FROM STEP 2]
- Page/word limit for this section: [LIMIT]
- Scoring weight: [% IF KNOWN]

My firm's actual approach:
- How we typically structure projects of this type: [DESCRIBE your phasing, team structure, QA/QC process, client communication rhythm]
- Any specific methodologies, software, or tools we use that are relevant: [LIST — BIM, specific energy modeling, DOT-specific software, etc.]
- Our typical timeline for a project of this scope: [ROUGH DURATION]

Please draft:
1. A **Technical Approach** section that:
   - Leads with the agency's priority (not with our firm's capabilities)
   - Uses the agency's language cues, not generic consulting-speak
   - Structures the response to map to the scoring rubric
   - Includes a visual concept I should create (e.g. a project phasing diagram, org chart, or schedule Gantt)
   - Stays within the stated page/word limit
2. **Three alternative opening sentences** — one emphasizing technical rigor, one emphasizing collaboration/community, one emphasizing schedule/budget certainty. Tell me which to use based on the agency's priorities.
3. **Risk statements to address proactively** — the 2–3 risks this agency likely cares about for this project type, and how to address each in 2–3 sentences.`,
      },
      {
        number: 6,
        title: 'Generate your questions for the pre-proposal conference',
        description:
          'Good questions both clarify ambiguity and signal to the agency that you understand their project. Bad questions signal you didn’t read the solicitation. AI helps you ask the right ones.',
        prompt: `The pre-proposal conference or questions deadline is coming up. I want to submit questions that (a) clarify real ambiguities and (b) subtly demonstrate my firm's seriousness.

Here is the solicitation:
[PASTE OR REFERENCE SOLICITATION]

Here are the decoded mandatory requirements, scoring rubric, and language cues:
[PASTE FROM STEP 2]

Please produce:
1. **5–8 substantive questions** that surface real ambiguities in the scope, schedule, or evaluation criteria. Phrase each as a professional would — not "what do you mean by X" but "can the agency clarify whether X includes Y, given the context of Z."
2. **2–3 questions that demonstrate sophistication** — questions only a firm that truly understands the project type would ask (e.g. about specific code versions, DOT standards, sustainability frameworks, or historical preservation review processes).
3. **Flag any questions I should NOT ask** — questions that would signal I haven't read the solicitation carefully, or that would waste my "credibility budget" with the agency.`,
      },
      {
        number: 7,
        title: 'Build a reusable post-submission debrief template',
        description:
          'Win or lose, every agency will tell you why — if you ask the right way. Build a debrief habit and your next proposal will be sharper.',
        prompt: `Regardless of whether I win or lose, I want to request a debrief and capture what I learn for my next proposal.

Please produce:
1. A **debrief request email template** — professional, brief, requesting a 30-minute conversation about the evaluation. Different versions for: won, lost, and shortlisted-but-not-selected.
2. A **debrief question list** — the questions I should ask during the call to get useful signal (scoring breakdown, how we compared to the winner, which sections were strongest/weakest, what would have made the difference).
3. A **post-bid learnings template** — a one-page internal doc structure for capturing: what the evaluators said, what I learned about this agency, what I'd do differently next time, and what goes into my firm's "government bid playbook" for future pursuits.`,
      },
    ],
    expectations: {
      good: 'The solicitation decode alone (Step 2) saves most firms 4–6 hours of reading and re-reading. The go/no-go from Step 3 is the single highest-value exercise — most small firms chase too many bids and win none because they can’t dedicate serious time to any one response.',
      ifBad:
        'If you don’t have 5+ relevant past projects, you’re probably not ready to prime a government contract. The right move is to team with a larger firm as a sub for 2–3 projects first, then pursue prime work. Use the decode and past performance matrix to find firms whose past performance complements yours.',
      time: 'Plan for 40–60 hours of total firm time on a serious federal proposal, spread across 4–6 weeks. AI cuts this roughly in half on the analysis and drafting side, but the final review, visual production, and partner coordination are still human work.',
    },
    downloadFile: null,
  },
]

export default architectureFirmGuides
