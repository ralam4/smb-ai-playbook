const architectureFirmGuides = [
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
