# CLAUDE.md

Personal portfolio for Ziad Mohamed Shawky — data scientist / ML engineer.
One page, fully static, animated. Built for recruiters who give it 40 seconds,
half of them on a phone on 4G.

**Stack:** Next.js 15 App Router · TypeScript strict · Tailwind CSS v4 ·
motion v11 (import from `motion/react`, not `framer-motion`) · Lenis · lucide-react ·
deployed on Vercel.

If you're unsure about an API in these versions, check the docs instead of guessing.
Tailwind v4 and the motion rename are recent — that's where mistakes happen.

---

## How we work

- One phase per session. Sketch the plan first — files you'll touch, one line each —
  then wait for my go. After that, build the phase without stopping at every file.
- Don't touch files from earlier phases unless I ask.
- Ask before adding a dependency.
- Every user-visible string comes from `data/`. Don't write copy yourself.
- If something in this file is wrong, say so before building, not after.

---

## Design: blueprint

Technical drawing aesthetic. Deep cyan-navy, hairline rules, one hot accent used
sparingly. The subject is measurement — precision, recall, accuracy deltas — so the
page should read like an instrument, not a creative agency template.

### Colors

```css
@theme {
  --color-ground: #0f2a3d; /* page background */
  --color-surface: #16384f; /* cards */
  --color-chalk: #e8f1f5; /* primary text */
  --color-muted: #7fa6bc; /* secondary text */
  --color-rule: #2e6f8e; /* hairlines, borders */
  --color-signal: #ff7a45; /* accent */
}
```

Six values, no others. The orange is the discipline point: it appears on live-demo
buttons, active nav state, and the metric bars. Nowhere else. If it spreads, the whole
thing turns into a gaming site.

Hairlines use `rule` at 40–60% opacity. No shadows, no gradients, no glow.
Border radius 2px max.

### Type

- **Archivo** — headlines only, weight 600
- **IBM Plex Sans** — prose, 400/500
- **IBM Plex Mono** — metrics, tech tags, dates, section eyebrows

The rule: if it's a measurement or a label it's mono, if it's a sentence it isn't.
That distinction is the visual system.

Scale (rem): 0.75 / 0.875 / 1 / 1.25 / 1.75 / 2.5 / 4. Nothing between.
Spacing: 4 8 12 16 24 32 48 64 96 128. Nothing between.
Section padding: 96 mobile, 128 desktop — set once in `Section.tsx`, never per-section.

### Signature element

`MetricBar` — hairline track, orange bar drawing from the old value to the new one as
it scrolls into view, mono numeral counting up beside it. Used on the HireLens card
only, for precision 0.71 → 0.89 and F1 0.73 → 0.86. Repeating it elsewhere kills it.

---

## Architecture

```
data/*.ts        content only, edited weekly
lib/motion.ts    all variants, easings, durations
globals.css      all tokens
components/*     pure presentation
```

Imports flow one way. No component defines its own color, duration, or content.

```
app/          layout.tsx · page.tsx · globals.css
components/
  layout/     Nav · Section · Footer
  sections/   Hero · Projects · Experience · Skills · Contact
  ui/         ProjectCard · MetricBar · Reveal · TechTag
data/         projects.ts · experience.ts · skills.ts · site.ts
lib/          motion.ts · utils.ts
types/        index.ts
```

```ts
export interface Metric {
  label: string;
  from: number;
  to: number;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string; // one line, under 90 chars
  description: string; // 2-3 sentences
  role?: string; // "NLP engineer, 5-person team"
  metrics?: Metric[];
  tech: string[];
  image: string;
  links: { demo?: string; code?: string };
  year: string;
  featured: boolean; // exactly one
}
```

Array order is display order. HireLens first.

---

## Motion

`lib/motion.ts` holds one easing curve `[0.22, 1, 0.36, 1]`, three durations
(0.2 / 0.35 / 0.5), and shared `fadeUp` / `stagger` variants. Everything imports from
there — that's what makes an animated site feel designed instead of assembled.

- transform and opacity only, never width/height/top/left
- scroll reveals: `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- `LazyMotion` + `domAnimation`, use `m.div` not `motion.div`
- `useReducedMotion()` disables all of it, Lenis included
- nothing runs longer than 500ms

Where it goes: hero stagger on load, sections reveal on scroll, card hover lift,
nav shrinks and blurs past the hero.

---

## Performance

Lighthouse mobile ≥ 95 · LCP < 2.0s · CLS < 0.05 · first-load JS < 150KB gzipped ·
no image over 200KB.

Server Components by default. `"use client"` on the smallest leaf that needs it —
`Reveal`, `Nav`, `MetricBar` — never a whole section. `next/image` with explicit
width and height everywhere. `next/font`, swap, latin subset, preload Archivo only.
Named icon imports only.

---

## Code

No hex, px, or duration literals in components — tokens only. No `any`. Props typed
with an `interface`. Named exports, one component per file. Split anything over ~120
lines. `cn()` from `lib/utils.ts` for conditional classes. Absolute imports via `@/`.
Run `npm run lint && npx tsc --noEmit` before committing.

Accessibility floor: semantic landmarks, one `h1`, visible focus rings, alt text on
every image, contrast ≥ 4.5:1, reduced motion respected. On this palette, check
`muted` on `ground` — it's the pair most likely to fail contrast.

Copy voice: plain and specific, sentence case, no filler, no "passionate about".
Numbers over adjectives.

---

## Phases

Say "phase N" and build that one.

1. **Foundation** — scaffold, tokens, fonts, lint/prettier, `cn()`, `Section.tsx`.
   Done when one Section renders with correct fonts and rhythm.
2. **Content** — types, then all four data files with real content I provide.
   Done when nothing is a placeholder.
3. **Layout** — every section and `ProjectCard`, desktop only, zero animation.
   Done when the page reads top to bottom.
4. **Responsive** — 375px up, nav collapses, grid goes single column.
   Done when there's no overflow at 375px and tap targets are 44px+.
5. **Motion** — `lib/motion.ts`, then `Reveal`, then apply everywhere.
   Done when nothing replays on re-scroll and it holds 60fps throttled 4x.
6. **MetricBar** — the signature element on the HireLens card.
   Done when it fires once and reads clearly.
7. **Ship** — Lenis, metadata, OG image, sitemap, 404, CV download, Lighthouse pass,
   deploy, attach domain.

Phases 3 and 4 are the real work. Phase 5 is the fun one.
Commit at the end of each phase.
