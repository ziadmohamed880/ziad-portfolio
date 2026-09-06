# ziad-portfolio

Personal portfolio for Ziad Mohamed Shawky — data scientist / ML engineer.
One page, fully static, animated.

**Live:** https://ziad-portfolio-blond.vercel.app

## Stack

Next.js 15 (App Router) · TypeScript strict · Tailwind CSS v4 · motion v11 · Lenis · lucide-react. Deployed on Vercel.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Structure

```
app/          layout · page · globals.css · sitemap · OG image · 404
components/
  layout/     Nav · Section · Footer
  sections/   Hero · Projects · Experience · Skills · Contact
  ui/         ProjectCard · MetricBar · Reveal · TechTag · icons
data/         projects · experience · skills · site
lib/          motion · utils · site-url
types/        index
```

Content lives in `data/`, design tokens in `app/globals.css`, and every animation
variant in `lib/motion.ts`. Components hold no copy, colours, or durations of their
own — see [CLAUDE.md](CLAUDE.md) for the full design system and conventions.

## Deploying

Pushes to `main` deploy to production automatically via the Vercel GitHub
integration.
