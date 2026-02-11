# Careers Content Guide

This folder defines contributor-friendly careers content, similar to `content/npcs/countries.ts` and event content.

## Purpose

Keep jobs easy to add via pull requests while supporting richer systems later (business ownership, acting, creator economy, and more).

## Structure

- `types.ts`: shared career config schema and grouping metadata
- `actions.ts`: shared and role-specific job actions
- `part-time.ts`: part-time career definitions
- `full-time.ts`: full-time career definitions
- `soon.ts`: future-track placeholders
- `jobs.ts`: composed export for all careers
- `index.ts`: exports

## Tracks

- `partTime`: lower-entry roles with flexible starts
- `fullTime`: career-path roles with stronger pay and requirements
- `soon`: placeholders for deep systems not fully implemented yet

## Authoring rules

1. Keep `id` stable and unique.
2. Use `minAge` to gate realistic entry.
3. Keep `summary` concise and player-facing.
4. Define `jobActions` for playable tracks (`partTime`, `fullTime`).
5. Use `comingSoonNote` only for `soon` track entries.
6. Use valid `category` values from `features/careers/types.ts`.
7. Set realistic `salary`, `stress`, and `prestige` for playable jobs.
8. Keep action IDs unique per career and keep `successChance` between `0` and `1`.
9. If an action enqueues event IDs, ensure those events exist in `content/events`.
10. Use `progression.nextJobIds` to define clear ladder steps.
11. Use `compensation` for bonus/tips/overtime tuning.
12. Use `coworkerRoles` to improve generated team flavor.

## Career progression and pacing

- `progression.minYearsInRole`: minimum years before promotion checks
- `progression.minPerformance`: required performance threshold (0-100)
- `progression.nextJobIds`: next role options (must exist in `jobs.ts`)

## Compensation model

- `salary`: base salary anchor
- `compensation.bonusRate`: annual bonus rate (0-1)
- `compensation.tipsPerYear`: annual tip estimate
- `compensation.overtimeHours`: yearly overtime hours
- `compensation.overtimeMultiplier`: overtime pay multiplier (>=1)

## Validation

Run contributor validation before opening a PR:

```bash
npm run validate-content
```

Career validation checks include duplicate IDs, invalid categories, invalid ages, bad progression links, and malformed compensation fields.

## Example

```ts
{
  id: 'full_time_data_analyst',
  title: 'Data Analyst',
  company: 'Summit Insights',
  category: 'tech',
  track: 'fullTime',
  path: 'standard',
  minAge: 20,
  salary: 68000,
  requiredExperience: 1,
  stress: 40,
  prestige: 55,
  summary: 'Interpret trends and support business decisions.',
}
```

## Job action example

```ts
{
  id: 'ask_raise',
  label: 'Ask For Raise',
  description: 'Make your case for better pay.',
  cooldownYears: 0.25,
  requirements: { minYearsInRole: 1, minPerformance: 60 },
  successChance: 0.5,
  success: {
    text: 'Leadership approved your compensation increase.',
    effects: { salaryMultiplier: 1.1, performanceDelta: 2 },
  },
  failure: {
    text: 'Your request was declined for now.',
    effects: { performanceDelta: -1 },
  },
}
```
