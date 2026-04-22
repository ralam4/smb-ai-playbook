export const questions = [
  {
    id: 1,
    text: "A new opportunity lands in your lap, but there's no playbook for it. What do you do first?",
    options: [
      { text: "Start making a plan — figure out the steps and get moving", type: "architect" },
      { text: "Talk to other owners who've tried something similar before jumping in", type: "alchemist" },
      { text: "Figure out who else needs to be on board before anything happens", type: "conductor" },
      { text: "Do your homework — you need to understand the full picture before you commit", type: "oracle" },
    ],
  },
  {
    id: 2,
    text: "You do your best work when:",
    options: [
      { text: "You know exactly what needs to get done and can just go do it", type: "architect" },
      { text: "You have time to sit with it before making a call", type: "alchemist" },
      { text: "You're helping your team or partners figure things out together", type: "conductor" },
      { text: "You're pulling together a bunch of different info into one clear plan", type: "oracle" },
    ],
  },
  {
    id: 3,
    text: "Someone you trust pushes back on a decision you've made. You:",
    options: [
      { text: "Hear them out, decide if it changes anything, and keep moving", type: "architect" },
      { text: "Actually appreciate it — it makes you think about it differently", type: "alchemist" },
      { text: "Use it as a chance to explain your thinking better", type: "conductor" },
      { text: "File it away — they might be seeing something you'll need later", type: "oracle" },
    ],
  },
  {
    id: 4,
    text: "What drives you crazy about running a business?",
    options: [
      { text: "Too much talking, not enough doing", type: "architect" },
      { text: "Rushing into solutions before really understanding the problem", type: "alchemist" },
      { text: "When everyone's going in different directions and nobody's on the same page", type: "conductor" },
      { text: "Making big calls without enough information to feel confident", type: "oracle" },
    ],
  },
  {
    id: 5,
    text: "When you're trying to learn a new tool or skill, you:",
    options: [
      { text: "Jump in and start using it — you'll figure it out as you go", type: "architect" },
      { text: "Want to understand why it works, not just how", type: "alchemist" },
      { text: "Think about how you'd teach it to your team", type: "conductor" },
      { text: "Look for how it connects to things you already do", type: "oracle" },
    ],
  },
  {
    id: 6,
    text: "In your business (or any group), you naturally end up being the person who:",
    options: [
      { text: "Takes charge and makes sure things actually get done", type: "architect" },
      { text: "Comes up with ideas and questions what everyone else takes for granted", type: "alchemist" },
      { text: "Keeps everyone in the loop and on the same page", type: "conductor" },
      { text: "Spots problems or opportunities before anyone else does", type: "oracle" },
    ],
  },
  {
    id: 7,
    text: "When you have to make a tough call, you usually:",
    options: [
      { text: "Go with what you know now and adjust later if needed", type: "architect" },
      { text: "Want to hear a few more opinions before you lock it in", type: "alchemist" },
      { text: "Make sure the people affected understand and are good with it", type: "conductor" },
      { text: "Trust your gut — you've usually been paying attention longer than anyone realizes", type: "oracle" },
    ],
  },
  {
    id: 8,
    text: "The wins you're most proud of usually came from:",
    options: [
      { text: "Pulling off something hard when time or money was tight", type: "architect" },
      { text: "Solving a problem that had everyone else stumped", type: "alchemist" },
      { text: "Taking something confusing and making it simple for everyone", type: "conductor" },
      { text: "Seeing something coming that nobody else saw", type: "oracle" },
    ],
  },
  {
    id: 9,
    text: "How do you feel about systems and routines?",
    options: [
      { text: "Love them — they're how I get more done in less time", type: "architect" },
      { text: "Not a fan — too much structure too early boxes you in", type: "alchemist" },
      { text: "They're essential — it's how my team stays organized", type: "conductor" },
      { text: "I know when to follow them and when to work around them", type: "oracle" },
    ],
  },
  {
    id: 10,
    text: "When you hit a wall, you:",
    options: [
      { text: "Break it into smaller pieces and start chipping away", type: "architect" },
      { text: "Step back and look at it from a totally different angle", type: "alchemist" },
      { text: "Talk it out with someone — saying it out loud usually helps", type: "conductor" },
      { text: "Give it time — the answer usually comes to you if you stop forcing it", type: "oracle" },
    ],
  },
  {
    id: 11,
    text: "What gets you fired up?",
    options: [
      { text: "Getting something done and out the door", type: "architect" },
      { text: "That moment when a tough problem finally clicks", type: "alchemist" },
      { text: "When your team finally clicks and everyone's rowing together", type: "conductor" },
      { text: "Connecting dots that nobody else saw", type: "oracle" },
    ],
  },
  {
    id: 12,
    text: "In one line, what do you bring to the table?",
    options: [
      { text: "I make things happen", type: "architect" },
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
    recommendedGuides: ['project-profitability', 'build-recurring-revenue', 'autorepair-bay-efficiency'],
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
    recommendedGuides: ['fix-your-pricing', 'photographer-pricing', 'architecture-client-proposals'],
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
    recommendedGuides: ['google-reviews', 'write-clear-quotes', 'medical-patient-communication'],
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
    recommendedGuides: ['find-dead-zones', 'cut-no-shows', 'carwash-capacity-leaks'],
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
