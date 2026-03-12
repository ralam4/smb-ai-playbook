# AI Archetype Quiz — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an interactive AI Archetype personality quiz that helps SMB owners discover how their work style maps to AI fluency, with shareable result cards.

**Architecture:** New `/archetype` route with self-contained page component managing three phases (intro → question → result). Quiz data in dedicated data file. Pre-made PNG cards displayed with CSS float/shine effects. LinkedIn share copies pre-written caption to clipboard.

**Tech Stack:** React, Tailwind CSS, existing design system (DM Serif Display, DM Sans, burnt orange accent)

---

### Task 1: Copy mascot card PNGs into project

**Files:**
- Create: `src/assets/mascots/architect.png`
- Create: `src/assets/mascots/alchemist.png`
- Create: `src/assets/mascots/conductor.png`
- Create: `src/assets/mascots/oracle.png`

Copy from `~/Documents/SMB AI Playbook/Quiz result cards/`:
```bash
mkdir -p src/assets/mascots
cp ~/Documents/SMB\ AI\ Playbook/Quiz\ result\ cards/SMB\ AI\ Quiz_Architect.png src/assets/mascots/architect.png
cp ~/Documents/SMB\ AI\ Playbook/Quiz\ result\ cards/SMB\ AI\ Quiz_Alchemist.png src/assets/mascots/alchemist.png
cp ~/Documents/SMB\ AI\ Playbook/Quiz\ result\ cards/SMB\ AI\ Quiz_Conductor.png src/assets/mascots/conductor.png
cp ~/Documents/SMB\ AI\ Playbook/Quiz\ result\ cards/SMB\ AI\ Quiz_Oracle.png src/assets/mascots/oracle.png
```

---

### Task 2: Create archetype data file

**Files:**
- Create: `src/data/archetype.js`

Export three things:

1. `questions` — array of 12 objects:
```js
{ id: 1, text: "...", options: [{ text: "...", type: "architect" }, { text: "...", type: "alchemist" }, { text: "...", type: "conductor" }, { text: "...", type: "oracle" }] }
```

2. `resultTypes` — object keyed by type id:
```js
{
  architect: {
    id: 'architect',
    name: 'The Architect',
    tagline: 'You build. Others wait for permission.',
    description: '...',
    aiEdge: 'Output velocity',
    watchOut: 'Moving so fast you skip the thinking that would have saved you time',
    colors: { primary: '#8B6914', wash: '#F5EDD6', anchor: '#4A3508', gradient: ['#F5EDD6', '#E8C97A'] },
    mascotImage: '/src/assets/mascots/architect.png',
    linkedinCopy: 'I just found my AI Archetype on the SMB AI Playbook — I\'m The Architect. I build toward clear goals and AI\'s biggest value for me is as a force multiplier on execution. What\'s yours? smbaiplaybook.xyz/archetype',
    recommendedGuides: ['cash-flow-management', 'hiring-and-onboarding', 'carwash-capacity-beginner']
  },
  // ... alchemist, conductor, oracle
}
```

Alchemist colors: `{ primary: '#5C4A7A', wash: '#EDE8F5', anchor: '#2E2040', gradient: ['#EDE8F5', '#F5D6F0'] }`
Conductor colors: `{ primary: '#2D6A4F', wash: '#E8F5EE', anchor: '#1A3D2E', gradient: ['#E8F5EE', '#F5EDE8'] }`
Oracle colors: `{ primary: '#1D3557', wash: '#E4EAF5', anchor: '#0D1B2E', gradient: ['#E4EAF5', '#F5E4EE'] }`

Alchemist guides: `['competitive-differentiation', 'architecture-profitability-intermediate', 'coffee-menu-pricing']`
Conductor guides: `['google-reviews', 'hiring-and-onboarding', 'doctor-referral-system']`
Oracle guides: `['social-media-content-calendar', 'cash-flow-management', 'realestate-market-authority-intermediate']`

3. `scoreArchetype(answers)` — tallies type strings, returns winning type id. Ties favor convergent: architect > conductor > oracle > alchemist.

All 12 questions and their options are in the user's spec (copy exactly).

---

### Task 3: Create ArchetypeIntro component

**Files:**
- Create: `src/components/ArchetypeIntro.jsx`

Props: `{ onStart }`

Clean centered layout:
- Small label: "AI Archetype" in uppercase tracking, burnt orange
- Headline: "Discover Your AI Archetype" in DM Serif Display, large
- Subtext: ~2 sentences about professional identity (NOT AI-forward). Example: "Answer 12 questions about how you naturally work and think. Discover how your instincts map to AI fluency."
- CTA button: "Find Your Archetype →" in burnt orange, same style as homepage CTA
- Warm neutral background (`#FAF7F2`)

---

### Task 4: Create ArchetypeQuestion component

**Files:**
- Create: `src/components/ArchetypeQuestion.jsx`

Props: `{ question, currentIndex, totalQuestions, onAnswer }`

Layout:
- Thin progress bar at top: `(currentIndex + 1) / totalQuestions` fill width, burnt orange color, animated width transition
- "Question X of 12" label in IBM Plex Mono, small, muted
- Question text in DM Serif Display, large, centered or left-aligned
- Four answer options as full-width stacked cards:
  - White background, `#E8E2D9` border
  - On hover: `#C4622D` left border accent, slight shadow lift
  - On click: brief 300ms highlight pulse, then call `onAnswer(option.type)` after delay to auto-advance

No back button. Forward only.

---

### Task 5: Create ShareCard component

**Files:**
- Create: `src/components/ShareCard.jsx`

Props: `{ resultType }`

Displays the pre-made PNG card image with CSS effects:
- Container with 20px border radius, overflow hidden
- Image fills container, displayed at landscape proportion
- **Float animation:** `@keyframes float { 0%, 100% { translateY(0) } 50% { translateY(-8px) } }` — 3.5s ease-in-out infinite
- **Hover:** scale(1.02), deeper box-shadow, transition 0.3s ease
- **Shine sweep on hover:** `::after` pseudo-element — diagonal white gradient, animates left-to-right on hover, parent has overflow hidden

Import mascot images:
```js
import architectImg from '../assets/mascots/architect.png'
import alchemistImg from '../assets/mascots/alchemist.png'
import conductorImg from '../assets/mascots/conductor.png'
import oracleImg from '../assets/mascots/oracle.png'
```

Map type id to image.

---

### Task 6: Create ArchetypeResult component

**Files:**
- Create: `src/components/ArchetypeResult.jsx`

Props: `{ resultType, onRetake }`

Layout:
- Page section with type's wash color as background
- Animated entrance: fade-in 600ms, opacity 0→1, slight upward drift (translate-y)
- ShareCard component centered and prominent
- Below card: "Your AI Edge" and "Watch out for" as two columns/pills
- "Recommended Guides" section: 3 links to specific guide pages (use `resultType.recommendedGuides` slugs, look up titles from guides.js)
- "Copy to share on LinkedIn" button: burnt orange, copies `resultType.linkedinCopy` to clipboard via `navigator.clipboard.writeText()`, changes to "Copied ✓" for 2 seconds
- "Retake Quiz" link/button below, calls `onRetake`

---

### Task 7: Create ArchetypePage

**Files:**
- Create: `src/pages/ArchetypePage.jsx`

Imports: questions, resultTypes, scoreArchetype from archetype.js, plus all sub-components.

State:
- `phase`: 'intro' | 'question' | 'result'
- `currentIndex`: 0-11
- `answers`: [] accumulates type strings
- `result`: null or resultType object

Flow:
- Intro phase → render ArchetypeIntro, onStart sets phase to 'question'
- Question phase → render ArchetypeQuestion with `questions[currentIndex]`
  - onAnswer: push type to answers, if currentIndex < 11 increment, else scoreArchetype(answers) → set result → set phase to 'result'
- Result phase → render ArchetypeResult with result type
  - onRetake: reset all state to initial

---

### Task 8: Add route and nav integration

**Files:**
- Modify: `src/App.jsx` — add Route for `/archetype`
- Modify: `src/components/Nav.jsx` — add "Find Your Archetype" link
- Modify: `src/pages/Home.jsx` — add archetype CTA section

**App.jsx:**
```jsx
import ArchetypePage from './pages/ArchetypePage'
// In Routes:
<Route path="/archetype" element={<ArchetypePage />} />
```

**Nav.jsx:**
Add a Link between the logo and the LinkedIn credit:
```jsx
<Link to="/archetype" className="...subtle pill or text link in burnt orange...">
  Find Your Archetype
</Link>
```

**Home.jsx:**
New section between hero and Problem Library:
- Small "Featured" or "New" label
- Headline: "What's your AI Archetype?"
- One-liner subtext about discovering your work style × AI fluency
- CTA: "Find Your Archetype →" linking to `/archetype`
- Styled in existing design system, warm neutral, no per-type colors

---

### Task 9: Build and verify

- Run dev server, test full quiz flow
- Verify all 4 result types display correctly
- Verify share card PNGs load and CSS effects work (float, hover shine)
- Verify LinkedIn copy-to-clipboard works
- Verify recommended guide links navigate correctly
- Verify nav link and homepage CTA both route to `/archetype`
- Verify responsive behavior on mobile
