# Build Taper Schedules in Minutes, Not Manual Math
### AI Playbook for Small Business — Pharmacy Guide

Use AI to calculate step-down medication schedules, generate patient-friendly handouts, and build a reusable taper prompt template for any drug.

---

**Instructions:** Open ChatGPT or Claude. Copy and paste each prompt in order. Fill in the bracketed sections with your own information.

---

## Step 1: Gather the Taper Details

Before prompting AI, collect the key inputs:

- **Drug name** — the medication being tapered
- **Current dose and frequency** — e.g. 20mg once daily
- **Target** — reduce to X mg, or full discontinuation
- **Timeline preference** — from the prescriber or clinical judgment
- **Available tablet/capsule strengths** — what you can actually dispense
- **Patient context** — duration on current dose, history of withdrawal, age, etc.

---

## Prompt 1: Generate the Taper Schedule

```
I'm a pharmacist and I need to calculate a taper schedule for a patient.

Here are the details:
- Medication: [DRUG NAME]
- Current dose: [DOSE + FREQUENCY, e.g. "20mg once daily"]
- Target: [TARGET DOSE or "full discontinuation"]
- Timeline preference: [e.g. "over 4 weeks" / "as gradual as possible" / "per prescriber: 6 weeks"]
- Available tablet strengths: [e.g. "5mg, 10mg, 20mg tablets — can be split"]
- Relevant context: [e.g. "patient has been on this dose for 3 months" / "history of withdrawal symptoms" / "elderly patient"]

Please generate:
1. A step-by-step taper schedule in table format with: week/phase, daily dose, tablet instructions (which tablets to take), and duration of each step
2. Flag any steps where tablet splitting or alternating doses is needed
3. Note any steps where the reduction exceeds 25% of the previous dose (a common caution threshold)
4. Suggest monitoring checkpoints — when the pharmacist or prescriber should check in with the patient
```

---

## Prompt 2: Create the Patient Counseling Handout

```
Using the taper schedule above, create a patient-friendly handout that includes:
1. A simple version of the schedule — dates, what to take each day, in plain language (no medical jargon)
2. What the patient might experience at each step (e.g. "You may feel mild headaches in week 2 — this is normal and usually passes in a few days")
3. Clear "call your pharmacist/doctor if..." warning signs for each phase
4. A section at the top with: patient name (blank), medication name, start date, prescriber name, and pharmacy contact info

Format this so it can be printed on a single page, front and back.
```

---

## Prompt 3: Save Your Reusable Taper Prompt Template

```
Based on the taper workflow we just completed, please create:
1. A reusable prompt template with clear [BLANKS] I can fill in for any medication — I want to copy-paste this and swap in new details each time
2. A short checklist of information I need to collect before running the prompt (so I don't forget anything)
3. A "taper notes" template where I can log each taper I've generated — patient initials, drug, date, prescriber, and any special notes — so I have a record for my pharmacy
```

---

## What to Expect

**If it works well:** The first taper schedule takes about 25 minutes to build. After that, using your saved template, future tapers take under 2 minutes — just fill in the blanks and generate.

**If it needs tweaking:** AI may suggest dose steps that don't align with available tablet strengths. Always verify the math and adjust for what you can actually dispense. You're the pharmacist — the AI does the arithmetic, you do the clinical judgment.

**Long-term value:** The reusable template from Step 4 is the real payoff. Instead of recalculating from scratch every time, you have a system that works for any drug, any patient.
