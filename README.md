# ByteSpace — Online Learning & Skill Courses Platform

A production-grade web application built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**, reproducing Figma design specifications with 1:1 visual fidelity at desktop (`1440px`), tablet (`1024px`, `768px`), and mobile (`390px`) viewports.

---

## Quick Start

### 1. Prerequisites
- Node.js 18.18+ or 20+
- npm 9+

### 2. Installation & Running Locally

```bash
# Navigate to the project directory
cd bytespace

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Quality Gates & Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the local development server at `localhost:3000` |
| `npm run lint` | Runs ESLint — ensures 0 errors and 0 warnings |
| `npx tsc --noEmit` | Validates TypeScript types across the codebase |
| `npm run build` | Builds the production Next.js application bundle |
| `npm test` | Runs the full Playwright automated test suite (45 tests) |
| `npx playwright test tests/functionality.spec.ts` | Runs the 9 functional acceptance tests |
| `npx playwright test tests/responsive.spec.ts` | Runs the 27 responsive layout tests (1024, 768, 390px) |
| `npx playwright test tests/visual-regression.spec.ts` | Runs the 9 desktop 1440px visual baseline captures |

---

## Route Overview

- `/` — **Home Page** (Hero with search pill & 3D shapes, Partners, Category discovery, Learning paths, Growth stats, Creator CTA, Testimonials, Footer)
- `/search` — **Search & Catalog** (Search hero, level dropdown, sort dropdown, 9 category pills, course grid, pagination)
- `/creators/[slug]` — **Creator Profile** (`/creators/sarah-jenkins`, Follow toggle with persistence, metrics, creator courses)
- `/courses/[slug]` — **Course Details (About)** (`/courses/build-digital-asset-comprehensive-guide`, Overview, sneak peek images, key points checklist, enrollment action)
- `/courses/[slug]/lessons` — **Course Lessons** (Module explorer, video lesson icons, 55% progress tracker)
- `/courses/[slug]/reviews` — **Course Reviews** (Rating box, 5-star distribution bars, interactive star filter, verified student reviews)
- `/login` — **Sign In** (Visual showcase, email/password validation, demo status feedback, social auth buttons)
- `/register` — **Sign Up** (Visual showcase, name/email/password validation, terms consent)
- `404` — **Not Found** (Custom 404 gradient hero, guidance copy, home navigation CTA)

---

## Architecture & Code Standards

- **App Router**: Uses Next.js App Router route groups `(public)` and `(auth)`.
- **CSS Architecture**: Tailwind v4 with all custom resets layered in `@layer base` to ensure predictable cascade precedence.
- **State Management**: Concurrent-safe `useSyncExternalStore` for `localStorage` persistence (Follow state, Course enrollment, Newsletter).
- **Accessibility**: Semantic HTML5 landmark structure, keyboard-accessible dialogs, focus management on Escape, and ARIA labels.

---

## Documentation & Handoff

For the complete project QA report, visual comparison notes, and future roadmap, refer to [HANDOFF.md](file:///g:/New%20Projects/Job%20Assignment%20Project/HANDOFF.md).
