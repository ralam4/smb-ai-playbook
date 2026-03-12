export const questions = [
  {
    id: 1,
    text: "You're handed a project with no clear brief. Your first instinct is:",
    options: [
      { text: "Start scoping — break it into steps and figure out what needs to happen first", type: "architect" },
      { text: "Talk to people who've done something similar and explore the space before committing", type: "alchemist" },
      { text: "Map the stakeholders — who needs to be aligned before anything moves?", type: "conductor" },
      { text: "Start researching broadly — you need to understand the landscape before you can act", type: "oracle" },
    ],
  },
  {
    id: 2,
    text: "Your best work tends to happen when:",
    options: [
      { text: "The goal is clear and the path is yours to build", type: "architect" },
      { text: "You have space to think before you have to decide", type: "alchemist" },
      { text: "You're helping others get unstuck or aligned", type: "conductor" },
      { text: "You're synthesizing a lot of inputs into one clear direction", type: "oracle" },
    ],
  },
  {
    id: 3,
    text: "A colleague gives you feedback that contradicts your direction. You:",
    options: [
      { text: "Evaluate it quickly and decide whether to incorporate it — then move on", type: "architect" },
      { text: "Find it genuinely interesting and want to explore the tension further", type: "alchemist" },
      { text: "Use it as an opportunity to reframe how you're communicating the work", type: "conductor" },
      { text: "File it away — it might be a signal that matters later", type: "oracle" },
    ],
  },
  {
    id: 4,
    text: "The thing that frustrates you most in a work environment is:",
    options: [
      { text: "Too many meetings, not enough doing", type: "architect" },
      { text: "Decisions made before the problem is fully understood", type: "alchemist" },
      { text: "People pulling in different directions without alignment", type: "conductor" },
      { text: "Acting on incomplete information without reading the signals first", type: "oracle" },
    ],
  },
  {
    id: 5,
    text: "When you're learning something new, you:",
    options: [
      { text: "Look for the fastest path to being able to use it", type: "architect" },
      { text: "Want to understand how it works before you apply it", type: "alchemist" },
      { text: "Think about how you'd explain it to someone else", type: "conductor" },
      { text: "Look for patterns — how does this connect to things you already know?", type: "oracle" },
    ],
  },
  {
    id: 6,
    text: "On a team, you naturally end up:",
    options: [
      { text: "Taking ownership of deliverables and driving them to completion", type: "architect" },
      { text: "Generating ideas and challenging assumptions", type: "alchemist" },
      { text: "Keeping everyone informed and aligned", type: "conductor" },
      { text: "Seeing around corners and flagging things others haven't noticed yet", type: "oracle" },
    ],
  },
  {
    id: 7,
    text: "When you make decisions, you tend to:",
    options: [
      { text: "Decide with the information available and course-correct if needed", type: "architect" },
      { text: "Want more perspectives before committing", type: "alchemist" },
      { text: "Check that the decision makes sense to the people it affects", type: "conductor" },
      { text: "Trust your read of the situation — you've usually been watching it develop", type: "oracle" },
    ],
  },
  {
    id: 8,
    text: "The work you're most proud of usually involved:",
    options: [
      { text: "Executing something difficult under real constraints", type: "architect" },
      { text: "Figuring out a problem nobody had quite solved before", type: "alchemist" },
      { text: "Making something complex clear and actionable for others", type: "conductor" },
      { text: "Calling something correctly before it was obvious", type: "oracle" },
    ],
  },
  {
    id: 9,
    text: "Your relationship with process and structure is:",
    options: [
      { text: "You create it — structure is how you move fast", type: "architect" },
      { text: "You resist it — structure too early closes off options", type: "alchemist" },
      { text: "You maintain it — structure is how everyone stays aligned", type: "conductor" },
      { text: "You read it — you understand the structure well enough to know when to work around it", type: "oracle" },
    ],
  },
  {
    id: 10,
    text: "When you're stuck, you:",
    options: [
      { text: "Break the problem into smaller pieces and start working through it", type: "architect" },
      { text: "Step back and look at the problem from a completely different angle", type: "alchemist" },
      { text: "Talk it through with someone — articulating it usually unsticks you", type: "conductor" },
      { text: "Sit with it — the answer usually surfaces if you give it time and keep watching", type: "oracle" },
    ],
  },
  {
    id: 11,
    text: "You're most energized by:",
    options: [
      { text: "Shipping something real", type: "architect" },
      { text: "Having a breakthrough on a hard problem", type: "alchemist" },
      { text: "A moment where a group finally gets on the same page", type: "conductor" },
      { text: "Connecting two things nobody had connected before", type: "oracle" },
    ],
  },
  {
    id: 12,
    text: "If you had to describe how you add value in one phrase:",
    options: [
      { text: "I get things done", type: "architect" },
      { text: "I think things through", type: "alchemist" },
      { text: "I bring people together", type: "conductor" },
      { text: "I see what's coming", type: "oracle" },
    ],
  },
]

export const resultTypes = {
  architect: {
    id: 'architect',
    name: 'The Architect',
    tagline: 'You build. Others wait for permission.',
    description: 'You see a goal and you move. Where others deliberate, you scope, sequence, and ship. Your superpower is turning ambiguity into a plan and a plan into something real. AI in your hands becomes a force multiplier — compressing the distance between idea and done.',
    aiEdge: 'Output velocity',
    watchOut: 'Moving so fast you skip the thinking that would have saved you time',
    colors: { primary: '#8B6914', wash: '#F5EDD6', anchor: '#4A3508', gradient: ['#F5EDD6', '#E8C97A'] },
    linkedinCopy: "I just found my AI Archetype on the SMB AI Playbook — I'm The Architect. I build toward clear goals and AI's biggest value for me is as a force multiplier on execution. What's yours? smbaiplaybook.xyz/archetype",
    recommendedGuides: ['cash-flow-management', 'hiring-and-onboarding', 'carwash-capacity-beginner'],
  },
  alchemist: {
    id: 'alchemist',
    name: 'The Alchemist',
    tagline: 'You think deeper than the room.',
    description: "You resist the obvious answer because you know there's usually a better one underneath. You explore before you commit, connect dots others walk past, and do your best work when you have space to think. AI for you isn't a shortcut — it's a sparring partner that pushes your thinking further than you could go alone.",
    aiEdge: 'Depth of thinking',
    watchOut: 'Exploring so long that the window to act closes',
    colors: { primary: '#5C4A7A', wash: '#EDE8F5', anchor: '#2E2040', gradient: ['#EDE8F5', '#F5D6F0'] },
    linkedinCopy: "I just found my AI Archetype on the SMB AI Playbook — I'm The Alchemist. I explore before I decide and AI works best for me as a thinking partner, not just an output machine. What's yours? smbaiplaybook.xyz/archetype",
    recommendedGuides: ['competitive-differentiation', 'architecture-profitability-intermediate', 'coffee-menu-pricing'],
  },
  conductor: {
    id: 'conductor',
    name: 'The Conductor',
    tagline: 'You make complexity make sense.',
    description: "You have a rare ability: you can take a room full of noise and turn it into a direction everyone can follow. You synthesize, translate, and align. Your value isn't just what you know — it's how you make others feel oriented. AI handles the compression work so you can focus on the judgment that only you can make.",
    aiEdge: 'Clarity and alignment at scale',
    watchOut: 'Over-communicating when the moment calls for a decision',
    colors: { primary: '#2D6A4F', wash: '#E8F5EE', anchor: '#1A3D2E', gradient: ['#E8F5EE', '#F5EDE8'] },
    linkedinCopy: "I just found my AI Archetype on the SMB AI Playbook — I'm The Conductor. I synthesize complexity into clarity and AI handles the compression so I can focus on judgment. What's yours? smbaiplaybook.xyz/archetype",
    recommendedGuides: ['google-reviews', 'hiring-and-onboarding', 'doctor-referral-system'],
  },
  oracle: {
    id: 'oracle',
    name: 'The Oracle',
    tagline: 'You see it before they do.',
    description: "You've always operated a step ahead — reading signals, sensing patterns, acting on instinct that turns out to be right more often than it should. You move fast but you read wide. AI sharpens what you're already doing: feed it information, get back signal, act on it before the pattern becomes obvious to everyone else.",
    aiEdge: 'Pattern recognition at scale',
    watchOut: 'Trusting your read so much that you stop pressure-testing it',
    colors: { primary: '#1D3557', wash: '#E4EAF5', anchor: '#0D1B2E', gradient: ['#E4EAF5', '#F5E4EE'] },
    linkedinCopy: "I just found my AI Archetype on the SMB AI Playbook — I'm The Oracle. I act on instinct and AI sharpens the signal I'm already reading. What's yours? smbaiplaybook.xyz/archetype",
    recommendedGuides: ['social-media-content-calendar', 'cash-flow-management', 'realestate-market-authority-intermediate'],
  },
}

export function scoreArchetype(answers) {
  const counts = { architect: 0, alchemist: 0, conductor: 0, oracle: 0 }
  answers.forEach((type) => { counts[type]++ })
  const priority = ['architect', 'conductor', 'oracle', 'alchemist']
  return priority.reduce((best, type) =>
    counts[type] > counts[best] ? type : best
  , 'architect')
}
