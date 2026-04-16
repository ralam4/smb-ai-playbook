# Liquid Glass Design Elevation — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Elevate the SMB AI Playbook with a liquid glass / frosted glass aesthetic, add `prefers-reduced-motion` support, upgrade the nav to floating style, improve the archetype quiz CTA on the homepage, elevate the newsletter section, and add loading/skeleton states.

**Architecture:** We're evolving the existing warm terracotta + beige design system — not replacing it. The liquid glass treatment adds frosted `backdrop-blur` panels, translucent layering, and subtle depth to cards, nav, and key sections. The warm palette stays; glass effects layer on top of it. All changes are CSS/Tailwind-level with minimal structural changes to JSX.

**Tech Stack:** React 19 + Vite 7 + Tailwind CSS 4 (using `@theme` variables in `index.css`)

---

## Task 1: Add `prefers-reduced-motion` Support

**Files:**
- Modify: `src/index.css`

**Why:** Currently all animations play regardless of user preference. This is an accessibility requirement (WCAG 2.1 Level AA).

**Step 1: Add reduced-motion media query to `index.css`**

At the bottom of the animations section (after `.delay-7`), add:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-fade-up,
  .animate-fade-in {
    animation: none;
    opacity: 1;
  }

  .delay-1, .delay-2, .delay-3, .delay-4,
  .delay-5, .delay-6, .delay-7 {
    animation-delay: 0s;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Step 2: Verify**

Run: `npm run dev` — toggle "Reduce motion" in macOS Accessibility settings (or Chrome DevTools > Rendering > Emulate prefers-reduced-motion: reduce). Confirm: no entrance animations, no scroll smoothing, transitions are instant.

**Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add prefers-reduced-motion support for accessibility"
```

---

## Task 2: Liquid Glass Design System — CSS Foundation

**Files:**
- Modify: `src/index.css`

**Why:** Establish shared glass utility classes and theme variables before applying them to components.

**Step 1: Add glass theme variables to the `@theme` block in `index.css`**

Add these new variables inside the existing `@theme { }` block, after `--color-tag-orange`:

```css
  --color-glass: rgba(255, 255, 255, 0.45);
  --color-glass-strong: rgba(255, 255, 255, 0.65);
  --color-glass-border: rgba(255, 255, 255, 0.35);
  --color-glass-border-strong: rgba(232, 226, 217, 0.5);
  --color-glass-shadow: rgba(0, 0, 0, 0.04);
  --color-glass-shadow-lg: rgba(0, 0, 0, 0.08);
```

**Step 2: Add glass utility classes after the `.prompt-block` section at the end of `index.css`**

```css
/* ── Liquid Glass utilities ── */
.glass {
  background: var(--color-glass);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid var(--color-glass-border);
}

.glass-strong {
  background: var(--color-glass-strong);
  backdrop-filter: blur(20px) saturate(200%);
  -webkit-backdrop-filter: blur(20px) saturate(200%);
  border: 1px solid var(--color-glass-border-strong);
}

.glass-shadow {
  box-shadow:
    0 4px 24px var(--color-glass-shadow),
    0 1px 3px var(--color-glass-shadow),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.glass-shadow-lg {
  box-shadow:
    0 8px 40px var(--color-glass-shadow-lg),
    0 2px 6px var(--color-glass-shadow),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
```

**Step 3: Verify**

Run: `npm run dev` — no visual changes yet (classes aren't applied). Confirm the dev server builds without errors.

**Step 4: Commit**

```bash
git add src/index.css
git commit -m "feat: add liquid glass CSS foundation — theme vars and utility classes"
```

---

## Task 3: Floating Glass Nav

**Files:**
- Modify: `src/components/Nav.jsx`
- Modify: `src/index.css` (only if needed for padding adjustment)

**Why:** Upgrade the edge-to-edge sticky nav to a floating frosted glass bar. This is the highest-visibility glass treatment.

**Step 1: Update Nav.jsx**

Replace the entire `<nav>` element with:

```jsx
<nav className="fixed top-4 left-4 right-4 z-50 glass glass-shadow rounded-2xl">
  <div className="max-w-5xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
    <Link to="/" className="flex items-baseline gap-1.5 no-underline group">
      <span className="font-[--font-display] text-lg text-text-primary tracking-tight group-hover:text-accent transition-colors">
        AI Playbook
      </span>
      <span className="hidden sm:inline text-[11px] text-text-secondary font-medium tracking-wide uppercase">
        for Small Business
      </span>
    </Link>
    <a
      href="https://www.linkedin.com/in/rafeeulalam"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm group"
    >
      <span className="hidden sm:inline">by</span>
      <span className="font-medium">Rafee Alam</span>
      <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    </a>
  </div>
</nav>
```

**Step 2: Adjust content padding for floating nav**

The old `sticky` nav was in document flow. The new `fixed` nav is not, so content will tuck behind it. In the hero section of `src/pages/Home.jsx`, change `pt-16 sm:pt-24` to `pt-24 sm:pt-32` to account for the floating nav height + spacing.

Similarly in `src/pages/GuidePage.jsx`, change `py-8 sm:py-12` to `pt-24 sm:pt-28 pb-8 sm:pb-12`.

Similarly in `src/components/ArchetypeIntro.jsx`, change `pt-20 sm:pt-28` to `pt-28 sm:pt-36`.

**Step 3: Verify**

Run: `npm run dev`. Check:
- Nav floats with rounded corners and frosted blur
- Content does NOT hide behind the nav on all 3 pages (Home, Guide, Archetype)
- Nav blur is visible when scrolling over content
- Responsive: nav is usable at 375px width

**Step 4: Commit**

```bash
git add src/components/Nav.jsx src/pages/Home.jsx src/pages/GuidePage.jsx src/components/ArchetypeIntro.jsx
git commit -m "feat: floating frosted glass nav with proper content offsets"
```

---

## Task 4: Glass Treatment for Guide Cards

**Files:**
- Modify: `src/components/GuideCard.jsx`

**Why:** The guide cards are the core browsing experience. Applying glass makes them feel premium while keeping readability.

**Step 1: Update the `<Link>` className in GuideCard.jsx**

Replace line 27's className:
```
"group block bg-surface rounded-2xl border border-border/80 p-6 sm:p-7 no-underline transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1.5 relative overflow-hidden h-full"
```

With:
```
"group block glass glass-shadow rounded-2xl p-6 sm:p-7 no-underline transition-all duration-300 hover:glass-shadow-lg hover:-translate-y-1.5 relative overflow-hidden h-full"
```

Note: We're replacing `bg-surface` and `border border-border/80` with the `glass` and `glass-shadow` utility classes. The `hover:shadow-xl hover:shadow-black/[0.06]` becomes `hover:glass-shadow-lg`. Since `hover:glass-shadow-lg` is a custom class (not a Tailwind utility), we need a different approach — use a hover group:

Actually, since Tailwind can't use `hover:` with custom classes, instead do this:

Replace the className with:
```
"group block rounded-2xl p-6 sm:p-7 no-underline transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden h-full glass glass-shadow"
```

And add a hover effect in `index.css`:
```css
.glass-card-hover:hover {
  box-shadow:
    0 8px 40px var(--color-glass-shadow-lg),
    0 2px 6px var(--color-glass-shadow),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  background: var(--color-glass-strong);
}
```

Then the full className becomes:
```
"group block rounded-2xl p-6 sm:p-7 no-underline transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden h-full glass glass-shadow glass-card-hover"
```

**Step 2: Verify**

Run: `npm run dev`. Check:
- Cards show frosted glass background against the beige page
- Card text remains readable (4.5:1 contrast minimum)
- Hover lifts card and deepens the glass shadow
- Glow card border effect still works on top of the glass

**Step 3: Commit**

```bash
git add src/components/GuideCard.jsx src/index.css
git commit -m "feat: liquid glass treatment for guide cards"
```

---

## Task 5: Glass Treatment for Key Sections

**Files:**
- Modify: `src/components/BusinessFilter.jsx` — mode toggle and filter pills
- Modify: `src/components/PromptBlock.jsx` — prompt blocks
- Modify: `src/components/ArchetypeIntro.jsx` — info cards
- Modify: `src/pages/GuidePage.jsx` — "What You'll Get" and "What to Expect" panels

**Step 1: BusinessFilter — Glass mode toggle**

In `BusinessFilter.jsx`, replace the mode toggle container's className (line 31):
```
"inline-flex items-center rounded-lg bg-surface border border-border p-0.5"
```
With:
```
"inline-flex items-center rounded-xl glass glass-shadow p-0.5"
```

**Step 2: BusinessFilter — Glass filter pills (inactive state)**

In the inactive pill className (line 72), replace:
```
'bg-surface text-text-secondary border-border hover:border-border-strong hover:text-text-primary hover:shadow-sm'
```
With:
```
'glass text-text-secondary hover:glass-strong hover:text-text-primary hover:shadow-sm'
```

Note: `hover:glass-strong` won't work as a Tailwind variant for custom classes. Instead, simplify — replace the inactive pill class entirely:
```
'bg-white/40 backdrop-blur-sm border-white/30 text-text-secondary hover:bg-white/60 hover:text-text-primary hover:shadow-sm'
```

**Step 3: PromptBlock — Frosted header bar**

In `PromptBlock.jsx`, replace the header div's `bg-[#F0EDE8]` (line 14) with glass:
```
"flex items-center justify-between px-4 py-2.5 glass-strong border-b border-glass-border-strong"
```

And replace the `<pre>` background `bg-[#F8F6F3]` with:
```
"font-[--font-mono] text-[13px] leading-relaxed p-4 sm:p-5 whitespace-pre-wrap select-text text-text-primary/85 bg-white/30 backdrop-blur-sm overflow-x-auto"
```

**Step 4: ArchetypeIntro — Glass info cards**

In `ArchetypeIntro.jsx`, the three "Why it matters" cards (line 65) already have `bg-surface/80 backdrop-blur-sm`. Upgrade to:
```
"rounded-2xl glass glass-shadow p-6 sm:p-7"
```

And the "What you'll discover" card (line 83):
```
"rounded-2xl glass glass-shadow-lg p-8 sm:p-10"
```

**Step 5: GuidePage — Glass panels**

In `GuidePage.jsx`, the "What to Expect" panel (line 121) — replace:
```
"rounded-2xl bg-surface border border-border p-6 sm:p-8"
```
With:
```
"rounded-2xl glass glass-shadow p-6 sm:p-8"
```

The "What You'll Get" section (lines 78-98): keep the accent-colored header as-is (brand color), but change the body panel background from `bg-accent-light/40` to:
```
"bg-white/30 backdrop-blur-sm px-6 py-5"
```

**Step 6: Verify**

Run: `npm run dev`. Check all modified components across 3 routes:
- `/` — filter toggle and pills have glass look, guide cards confirmed from Task 4
- `/guide/:slug` — "What You'll Get" body and "What to Expect" panel have glass
- `/archetype` — intro cards and discovery panel have glass
- Text contrast remains readable everywhere
- Mobile (375px): glass effects look clean, no overflow

**Step 7: Commit**

```bash
git add src/components/BusinessFilter.jsx src/components/PromptBlock.jsx src/components/ArchetypeIntro.jsx src/pages/GuidePage.jsx
git commit -m "feat: apply liquid glass to filters, prompts, archetype cards, and guide panels"
```

---

## Task 6: Archetype Quiz Teaser on Homepage

**Files:**
- Modify: `src/pages/Home.jsx`

**Why:** The archetype quiz CTA exists in the hero ("Discover Your AI Archetype") but doesn't explain WHY a business owner should take it. We'll add a glass teaser section between the hero and problem library that makes the value proposition clear.

**Step 1: Add the teaser section**

In `Home.jsx`, after the hero's closing `</section>` (around line 125) and before the Problem Library `<section>`, add:

```jsx
{/* Archetype Quiz Teaser */}
<section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
  <div className="glass glass-shadow-lg rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px w-6 bg-accent" />
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
          2-Minute Assessment
        </p>
      </div>
      <h2 className="font-[--font-display] text-2xl sm:text-3xl text-text-primary mb-3 leading-snug">
        Not sure where to start?
      </h2>
      <p className="text-text-secondary leading-relaxed text-[15px] mb-6 max-w-lg">
        Every business owner uses AI differently. Some are natural strategists. Others are creative improvisers. Find your AI archetype and get guides matched to how you already think and work.
      </p>
      <Link
        to="/archetype"
        className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
      >
        Take the Quiz
        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
    <div className="flex flex-wrap justify-center gap-2.5 md:max-w-[220px]">
      {[
        { name: 'Architect', color: '#8B6914', bg: '#F5EDD6' },
        { name: 'Alchemist', color: '#5C4A7A', bg: '#EDE8F5' },
        { name: 'Conductor', color: '#2D6A4F', bg: '#E8F5EE' },
        { name: 'Oracle', color: '#1D3557', bg: '#E4EAF5' },
      ].map((type) => (
        <span
          key={type.name}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border backdrop-blur-sm"
          style={{
            borderColor: type.color + '30',
            backgroundColor: type.bg + 'cc',
            color: type.color,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: type.color }} />
          {type.name}
        </span>
      ))}
    </div>
  </div>
</section>
```

**Step 2: Verify**

Run: `npm run dev`. Check:
- Teaser appears between hero and Problem Library
- Glass panel is visible against the beige background
- CTA button works and navigates to `/archetype`
- Archetype pills show with correct colors
- Responsive: stacks vertically on mobile, side-by-side on desktop

**Step 3: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "feat: add archetype quiz teaser with glass panel on homepage"
```

---

## Task 7: Elevated Newsletter Section

**Files:**
- Modify: `src/components/Footer.jsx`

**Why:** The newsletter signup currently looks like part of the footer. Elevating it with a glass card treatment makes it feel like a standalone value-add.

**Step 1: Update the newsletter section in Footer.jsx**

Replace the newsletter `<div>` (lines 54-106) with:

```jsx
{/* Newsletter signup — elevated glass card */}
<div className="glass glass-shadow-lg rounded-2xl p-8 sm:p-10 text-center mb-8">
  <h3 className="font-[--font-display] text-xl sm:text-2xl text-text-primary mb-2">
    Stay in the loop
  </h3>
  <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
    New guides, templates & AI tips for small business — straight to your inbox. No spam, unsubscribe anytime.
  </p>

  {showForm ? (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto"
      noValidate
    >
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        type="email"
        required
        maxLength={254}
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (status === 'error' || status === 'duplicate') setStatus('idle')
        }}
        disabled={status === 'loading'}
        className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Joining...' : 'Join'}
      </button>
    </form>
  ) : (
    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-tag-green font-medium">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      {message}
    </div>
  )}

  {(status === 'error' || status === 'duplicate') && (
    <p className={`mt-2 text-xs ${status === 'error' ? 'text-red-600' : 'text-text-secondary'}`}>
      {message}
    </p>
  )}
</div>
```

**Step 2: Verify**

Run: `npm run dev`. Check:
- Newsletter section has glass card with rounded corners and shadow
- Input field has glass-style background
- Form still submits correctly
- Success/error states still display
- Responsive at 375px

**Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: elevated glass newsletter section in footer"
```

---

## Task 8: Skeleton Loading States

**Files:**
- Create: `src/components/GuideSkeleton.jsx`
- Modify: `src/pages/Home.jsx`
- Modify: `src/index.css`

**Why:** When the page loads or filters change, there's no visual feedback. Skeleton screens provide immediate UI structure.

**Step 1: Add skeleton pulse class to `index.css`**

After the liquid glass utilities section, add:

```css
/* ── Skeleton loading ── */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-border) 25%,
    var(--color-surface) 50%,
    var(--color-border) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes skeleton-pulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Step 2: Create `src/components/GuideSkeleton.jsx`**

```jsx
export default function GuideSkeleton() {
  return (
    <div className="glass rounded-2xl p-6 sm:p-7 h-full">
      <div className="skeleton h-6 w-24 mb-5 rounded-full" />
      <div className="skeleton h-7 w-full mb-2" />
      <div className="skeleton h-7 w-3/4 mb-4" />
      <div className="skeleton h-4 w-full mb-2" />
      <div className="skeleton h-4 w-5/6 mb-5" />
      <div className="flex gap-2 mb-5">
        <div className="skeleton h-6 w-20 rounded-full" />
        <div className="skeleton h-6 w-16 rounded-full" />
      </div>
      <div className="skeleton h-5 w-28" />
    </div>
  )
}
```

**Step 3: Use skeleton in Home.jsx for initial render illusion**

Import at top of `Home.jsx`:
```jsx
import GuideSkeleton from '../components/GuideSkeleton'
```

This is primarily useful if guides are ever fetched async. For now, add a comment showing where it would slot in. But since guides are currently static imports, the skeleton is most useful as a component ready for future use. We'll use it as an empty-state enhancement — replace the "No guides for this category yet" empty state (line 160-163) with:

```jsx
{filteredGuides.length === 0 && (
  <div className="text-center py-16">
    <p className="text-text-secondary">No guides for this category yet. More coming soon.</p>
  </div>
)}
```

Keep this as-is since it's not a loading state. The skeleton component is prepared for when guides become async.

**Step 4: Verify**

Run: `npm run dev`. Confirm skeleton animation renders if you temporarily drop `<GuideSkeleton />` into the grid.

**Step 5: Commit**

```bash
git add src/index.css src/components/GuideSkeleton.jsx src/pages/Home.jsx
git commit -m "feat: add skeleton loading component and pulse animation"
```

---

## Summary of All Changes

| Task | What | Files |
|------|------|-------|
| 1 | `prefers-reduced-motion` | `index.css` |
| 2 | Glass CSS foundation | `index.css` |
| 3 | Floating glass nav | `Nav.jsx`, `Home.jsx`, `GuidePage.jsx`, `ArchetypeIntro.jsx` |
| 4 | Glass guide cards | `GuideCard.jsx`, `index.css` |
| 5 | Glass sections (filters, prompts, panels) | `BusinessFilter.jsx`, `PromptBlock.jsx`, `ArchetypeIntro.jsx`, `GuidePage.jsx` |
| 6 | Archetype quiz teaser | `Home.jsx` |
| 7 | Glass newsletter section | `Footer.jsx` |
| 8 | Skeleton loading states | `index.css`, `GuideSkeleton.jsx`, `Home.jsx` |

**User input needed for Tasks 3 and 5:** Review the glass intensity and confirm the warm palette + glass combination looks right before we proceed too far. Recommend doing Tasks 1-3 first, visual review, then Tasks 4-8.
