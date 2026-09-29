# ByteSpace

> **Get Access to Hundreds of Courses Available.**  
> An online learning platform where curious minds discover skills, follow expert creators, and track their growth — all in one place.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-bytespace--weld.vercel.app-blue?style=flat-square&logo=vercel)](https://bytespace-weld.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Playwright](https://img.shields.io/badge/Tested%20with-Playwright-45ba4b?style=flat-square&logo=playwright)](https://playwright.dev/)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Screenshots / Demo](#screenshots--demo)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Author / Contact](#author--contact)
- [Acknowledgements](#acknowledgements)

---

## 📖 About the Project

**ByteSpace** is a production-grade online learning and skill courses platform built with **Next.js 16 App Router**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

It was designed to match a Figma specification with pixel-perfect visual fidelity across four viewport widths — desktop (`1440px`), tablet (`1024px`, `768px`), and mobile (`390px`) — and ships with a full Playwright automated test suite covering functionality, responsive layout, and visual regression.

The platform allows students to browse and enroll in courses, track lesson progress, read and filter reviews, and follow their favourite creators — all with state persisted to `localStorage` so it survives page refreshes without a backend.

---

## ✨ Key Features

- 🔍 **Course Discovery & Search** — Search bar with real-time filtering by 9 category pills, difficulty level dropdown, and sort order. Empty-state handling included.
- 📚 **Course Detail Pages** — Each course has three sub-pages: an overview with sneak-peek media and a key-points checklist, a module/lesson explorer with a progress tracker, and a reviews section with interactive star filter.
- 👤 **Creator Profiles** — Dedicated profile pages per creator showing bio, metrics, and course listings. Follow/unfollow toggle with `localStorage` persistence across sessions.
- 🔐 **Authentication Pages** — Sign In and Sign Up flows with client-side email/password validation, demo status feedback, and social auth buttons.
- 📱 **Fully Responsive** — Adapts seamlessly from `390px` mobile to `1440px` desktop with a slide-in mobile navigation menu.
- ♿ **Accessible** — Semantic HTML5 landmarks, keyboard-accessible modals with focus management and Escape key handling, and descriptive ARIA labels throughout.
- 💾 **Persistent State** — Enrollment, follow state, and newsletter subscription use concurrent-safe `useSyncExternalStore` with `localStorage`.
- 🧪 **Automated Tests** — 45 Playwright tests across three suites: 9 functional acceptance tests, 27 responsive layout tests, and 9 visual baseline captures.

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) | 16.x |
| UI Library | [React](https://react.dev/) | 19.x |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | v4 |
| Language | [TypeScript](https://www.typescriptlang.org/) | 5.x |
| Class Utilities | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest |
| Testing | [Playwright](https://playwright.dev/) | 1.63+ |
| Deployment | [Vercel](https://vercel.com/) | — |

---

## 📸 Screenshots / Demo

**🌐 Live:** [https://bytespace-weld.vercel.app/](https://bytespace-weld.vercel.app/)

| Page | Screenshot |
|---|---|
| Home — Hero | ![Home Hero](./screenshots/home.png) |
| Search & Catalog | ![Search Page](./screenshots/search.png) |
| Course Detail | ![Course Detail](./screenshots/course-detail.png) |
| Course Lessons | ![Lessons](./screenshots/lessons.png) |
| Course Reviews | ![Reviews](./screenshots/reviews.png) |
| Creator Profile | ![Creator](./screenshots/creator.png) |
| Sign In | ![Login](./screenshots/login.png) |
| Sign Up | ![Register](./screenshots/register.png) |

> **Note:** Add screenshots to a `./screenshots/` folder at the root of the repo to populate the table above.

---

## 📁 Project Structure

```
bytespace/
├── public/
│   ├── fonts/                  # Self-hosted fonts (ClashDisplay, Satoshi)
│   └── images/                 # Static images and SVGs
│
├── src/
│   ├── app/
│   │   ├── (auth)/             # Auth route group (no public nav)
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (public)/           # Public route group (with header/footer)
│   │   │   ├── page.tsx        # → / (Home)
│   │   │   ├── search/         # → /search
│   │   │   ├── courses/
│   │   │   │   └── [slug]/     # → /courses/:slug
│   │   │   │       ├── page.tsx          # Course overview
│   │   │   │       ├── lessons/page.tsx  # Course lessons
│   │   │   │       └── reviews/page.tsx  # Course reviews
│   │   │   └── creators/
│   │   │       └── [slug]/     # → /creators/:slug
│   │   ├── globals.css         # Global styles + Tailwind v4 layers
│   │   ├── layout.tsx          # Root layout
│   │   ├── not-found.tsx       # Custom 404
│   │   ├── error.tsx           # Error boundary
│   │   └── loading.tsx         # Global loading UI
│   │
│   ├── components/
│   │   ├── auth/               # LoginForm, RegisterForm, AuthPanel, AuthVisual
│   │   ├── course/             # CourseCard, CourseGrid, CourseHero, CourseTabs,
│   │   │                       # CourseSidebar, EnrollmentAction, EnrollmentModal,
│   │   │                       # MediaPreview, ReviewListSection, ShareCourseButton
│   │   ├── creator/            # CreatorHero
│   │   ├── filters/            # CategoryChips, FilterToolbar, Pagination,
│   │   │                       # SearchHero, EmptySearchState
│   │   ├── home/               # HomeHero, HomePartners, HomeDiscovery, HomePaths,
│   │   │                       # HomeGrowthFeature, HomeManageFeature,
│   │   │                       # HomeCreatorCTA, HomeTestimonials
│   │   ├── layout/             # SiteHeader, SiteFooter, MobileNav,
│   │   │                       # Container, BlueGrid, NewsletterForm
│   │   └── ui/                 # Avatar, AvatarStack, Logo
│   │
│   ├── data/                   # Static seed data (courses, creators, categories,
│   │                           # lessons, reviews)
│   ├── lib/                    # cn() utility, constants, format helpers
│   └── types/                  # Shared TypeScript interfaces (Course, Creator)
│
├── tests/
│   ├── functionality.spec.ts   # 9 functional acceptance tests
│   ├── responsive.spec.ts      # 27 responsive layout tests
│   └── visual-regression.spec.ts # 9 visual baseline captures
│
├── .env.example                # Environment variable template
├── next.config.ts
├── tsconfig.json
├── playwright.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

| Tool | Minimum Version |
|---|---|
| [Node.js](https://nodejs.org/) | 18.18+ or 20+ |
| npm | 9+ |
| Git | any recent version |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/JoyTarafder/ByteSpace.git

# 2. Move into the project directory
cd ByteSpace

# 3. Install dependencies
npm install

# 4. Copy the environment variables template
cp .env.example .env.local
```

> Open `.env.local` and fill in any required values (see `.env.example` for descriptions).

### Running the Project

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads on file changes.

```bash
# Build for production
npm run build

# Start the production server locally
npm start
```

---

## 📘 Usage

Once the dev server is running, explore these routes:

| URL | Page |
|---|---|
| `http://localhost:3000/` | Home — hero search, course categories, learning paths |
| `http://localhost:3000/search` | Catalog — filter by category, level, and sort order |
| `http://localhost:3000/courses/build-digital-asset-comprehensive-guide` | Course detail example |
| `http://localhost:3000/courses/build-digital-asset-comprehensive-guide/lessons` | Lesson explorer with progress |
| `http://localhost:3000/courses/build-digital-asset-comprehensive-guide/reviews` | Star-filtered reviews |
| `http://localhost:3000/creators/sarah-jenkins` | Creator profile — follow/unfollow |
| `http://localhost:3000/login` | Sign In form |
| `http://localhost:3000/register` | Sign Up form |

**Trying the enrollment flow:**
1. Go to any course page (`/courses/[slug]`)
2. Click **"Enroll Now"** to open the enrollment modal
3. Confirm enrollment — the state is saved to `localStorage` and persists on refresh

**Following a creator:**
1. Go to `/creators/sarah-jenkins`
2. Click **"Follow"** — the button toggles and the state persists across page navigations

---

## 🧪 Testing

ByteSpace ships with a 45-test Playwright suite. Make sure the dev server is running before executing tests.

```bash
# Run the full test suite
npm test

# Run only functional acceptance tests (9 tests)
npx playwright test tests/functionality.spec.ts

# Run responsive layout tests at 1024px, 768px, and 390px (27 tests)
npx playwright test tests/responsive.spec.ts

# Capture visual baselines at 1440px desktop (9 tests)
npx playwright test tests/visual-regression.spec.ts
```

**Code quality checks:**

```bash
# Run ESLint — must report 0 errors, 0 warnings
npm run lint

# Type-check the entire codebase — must report 0 errors
npx tsc --noEmit
```

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!

### Branching Strategy

```
main                        ← production-ready, protected
└── feature/<feature-name>  ← all new work goes here
└── fix/<bug-name>          ← bug fixes
└── chore/<task-name>       ← maintenance / config changes
```

### Steps to Contribute

1. **Fork** the repository and clone your fork:
   ```bash
   git clone https://github.com/<your-username>/ByteSpace.git
   cd ByteSpace
   ```

2. **Create a feature branch** off `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** with small, meaningful commits:
   ```bash
   git add .
   git commit -m "feat: describe what you added"
   ```
   > Follow [Conventional Commits](https://www.conventionalcommits.org/) — use `feat:`, `fix:`, `chore:`, `docs:`, `test:`.

4. **Run quality checks** before pushing:
   ```bash
   npm run lint
   npx tsc --noEmit
   npm test
   ```

5. **Push your branch** and open a Pull Request into `main`:
   ```bash
   git push origin feature/your-feature-name
   ```

6. In your PR description, explain **what** changed and **why**. Link any related issues.

> All PRs must pass lint and type-checks before being merged.

---

## 👤 Author / Contact

**Joy Tarafder**

- GitHub: [@JoyTarafder](https://github.com/JoyTarafder)
- Project Repo: [github.com/JoyTarafder/ByteSpace](https://github.com/JoyTarafder/ByteSpace)
- Live Demo: [bytespace-weld.vercel.app](https://bytespace-weld.vercel.app/)

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — for the App Router, file-based routing, and server components
- [Tailwind CSS](https://tailwindcss.com/) — for the utility-first styling system
- [Playwright](https://playwright.dev/) — for the powerful end-to-end testing framework
- [Vercel](https://vercel.com/) — for seamless deployment and hosting
- [Clash Display & Satoshi](https://www.fontshare.com/) — typefaces from Fontshare used in the design

---

<p align="center">Made with ❤️ by <a href="https://github.com/JoyTarafder">Joy Tarafder</a></p>

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
