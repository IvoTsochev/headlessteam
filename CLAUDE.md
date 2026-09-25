# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing/portfolio site for "Headless Team" — React 19 + TypeScript + Vite 7, styled with Tailwind CSS v4 and animated with framer-motion. Icons come from lucide-react. There is no router, backend, state library, or test setup.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then production build into `dist/`
- `npm run lint` — ESLint (flat config, `eslint.config.js`)
- `npm run preview` — serve the built `dist/`

No test runner is configured. `npm run build` is the type-check gate; the TS config is strict (`noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly`), so unused imports and non-`import type` type imports fail the build.

## Architecture

- `src/App.tsx` composes the page as one vertical scroll: `Navbar` → `sections/` (`Hero`, `Portfolio`, `About`, `Contact`) → `Footer`. Navigation is anchor-based: each section sets an `id` (`home`, `portfolio`, `about`, `contact`) that the `navLinks` arrays in `Navbar` link to via `#hash`. Adding or renaming a section means updating both.
- `src/sections/` holds page sections; `src/components/` holds page chrome (Navbar, Footer) and `FloatingChat`.
- `FloatingChat` is a UI-only chat widget (local state, no backend) and is currently disabled — it's commented out in `App.tsx`.
- Reusable content lives in `src/data/site.ts`: portfolio `projects` (images imported from `src/assets/images/projects/<project>/`), `capabilities`, contact email and social links. Other copy (hero, about text) is written directly in the section components. Project descriptions are in Bulgarian; the rest of the site is English.
- Positioning: the site presents Headless Team as a web development brand (websites, web apps, headless CMS). It no longer offers mobile app development, so keep new copy away from mobile-first messaging, even though the portfolio still includes one published mobile app.

## Styling

- Tailwind v4 is configured through the `@tailwindcss/vite` plugin. There is no `tailwind.config.js`. Theme tokens are defined in `src/index.css` under `@theme`: `background`, `surface`, `primary`, `secondary` and `accent` colors, plus the Inter font. Use them as `bg-background`, `bg-surface/50`, etc.
- The site is dark-only, using white text on `#0a0a0a` with blue→violet gradient accents.
- Sections share a consistent pattern: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` containers, and framer-motion scroll reveals (`initial={{ opacity: 0, y: 20 }}`, `whileInView`, `viewport={{ once: true }}`).

## Build/deploy notes

- `vite.config.ts` sets `base: "./"` so the built `dist/` works from any path or subdirectory. Keep asset references relative, or import them through Vite.
