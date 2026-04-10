# Problem-First Library Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restructure the homepage guide library from a flat card grid into 4 problem-category sections with visual hierarchy, a quick-nav anchor bar, and an anonymous upvote system with popularity sorting.

**Architecture:** Replace the single `BusinessFilter` + flat grid with 4 `ProblemSection` components, each with its own color identity, emotional headline, and cards sorted by upvote count. Add a sticky `CategoryNav` for quick jumping between sections. Upvotes use `localStorage` for vote tracking and a lightweight JSON store for counts.

**Tech Stack:** React 19 + Vite 7 + Tailwind CSS 4 + existing glass design system

---

## Task 1: Add Section Color Theme Variables

**Files:**
- Modify: `src/index.css`

Add CSS custom properties for the 4 problem section colors to the `@theme` block.

---

## Task 2: Create Upvote Hook and Storage

**Files:**
- Create: `src/hooks/useUpvotes.js`

A custom React hook managing upvote state with localStorage for user votes and a local JSON-backed count store. Provides `votes` object, `hasVoted(slug)`, `toggleVote(slug)`, and sorts guides by count descending.

---

## Task 3: Create UpvoteButton Component

**Files:**
- Create: `src/components/UpvoteButton.jsx`

Renders the upvote arrow + count. Handles click, animation, and accent color theming per section.

---

## Task 4: Update GuideCard with Upvote Integration

**Files:**
- Modify: `src/components/GuideCard.jsx`

Add `UpvoteButton` to the card layout. Accept `votes`, `hasVoted`, `onToggleVote`, and `accentColor` props.

---

## Task 5: Create CategoryNav Component

**Files:**
- Create: `src/components/CategoryNav.jsx`

Sticky glass-morphism anchor bar with 4 color-coded pills. Scrolls to sections. Highlights active section based on scroll position via IntersectionObserver.

---

## Task 6: Create ProblemSection Component

**Files:**
- Create: `src/components/ProblemSection.jsx`

Renders a full problem section: accent bar, label, emotional headline, subhead, and a grid of GuideCards sorted by upvote count.

---

## Task 7: Restructure Home.jsx

**Files:**
- Modify: `src/pages/Home.jsx`

Replace `BusinessFilter` + flat grid with `CategoryNav` + 4 `ProblemSection` components. Wire up upvote hook. Remove `BusinessFilter` import.

---
