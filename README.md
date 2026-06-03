# Brainly AI — Your Second Brain for Everything You Save Online

Brainly AI automatically synthesizes your saved links, tweets, YouTube videos, and bookmarks, letting you recall anything instantly using conversational natural language.

## Tech Stack

| Layer            | Technology                                                      |
| ---------------- | --------------------------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org/) (App Router, Turbopack)       |
| Runtime          | [Bun](https://bun.sh/)                                         |
| Language         | TypeScript                                                      |
| Auth             | [Clerk](https://clerk.com/) (OAuth, session cookies)            |
| Database         | PostgreSQL via [Drizzle ORM](https://orm.drizzle.team/)         |
| Styling          | Tailwind CSS v4 + vanilla CSS (`globals.css`)                   |
| Animations       | [Framer Motion](https://www.framer.com/motion/)                 |
| Icons            | [Lucide React](https://lucide.dev/) + custom platform SVGs      |
| Browser Extension| Chrome Extension (Manifest V3 Side Panel)                       |

## Project Structure

```
brainery-ai/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Clerk provider, fonts, theme)
│   ├── page.tsx                  # Landing page (public marketing site)
│   ├── globals.css               # Tailwind v4 theme tokens + custom animations
│   ├── actions.ts                # Server Actions (save link, fetch items, delete)
│   ├── api/
│   │   └── save/route.ts         # POST endpoint for Chrome Extension saves
│   ├── dashboard/
│   │   ├── layout.tsx            # Dashboard shell (sidebar, topbar)
│   │   ├── page.tsx              # Overview page (save form + recent cards)
│   │   ├── saved/page.tsx        # Saved items list with detail panel
│   │   └── settings/page.tsx     # Settings page (Sync Key for extension)
│   ├── sign-in/[[...sign-in]]/   # Clerk sign-in catch-all route
│   └── sign-up/[[...sign-up]]/   # Clerk sign-up catch-all route
│
├── components/
│   ├── auth/
│   │   └── auth-modal.tsx        # Modal overlay for Clerk sign-in/sign-up
│   ├── sections/                 # Landing page section components
│   │   ├── navbar.tsx            # Floating glass navbar
│   │   ├── hero.tsx              # Hero with floating platform cards
│   │   ├── friction.tsx          # Problem statement section
│   │   ├── architecture.tsx      # Architecture diagram section
│   │   ├── workflow.tsx          # How-it-works steps
│   │   ├── interactive-demo.tsx  # Live AI demo mockup
│   │   ├── features.tsx          # Feature grid
│   │   ├── comparison.tsx        # Brainly vs. bookmarks table
│   │   ├── faq.tsx               # Accordion FAQ
│   │   ├── cta.tsx               # Call-to-action banner
│   │   └── footer.tsx            # Site footer
│   └── ui/                       # Shared UI primitives
│
├── lib/
│   ├── constants.ts              # Brand name, nav links, hero cards, section data
│   ├── colors.ts                 # Platform color mappings
│   ├── social-icons.tsx          # Platform icon SVG components
│   ├── mock-data.tsx             # Legacy mock data (being phased out)
│   └── db/
│       ├── index.ts              # Drizzle client + table re-exports
│       └── schema.ts             # Database tables (saved_items, tags, saved_item_tags)
│
├── types/
│   └── index.ts                  # Shared TypeScript interfaces
│
├── chrome-extension/             # Manifest V3 Chrome Extension
│   ├── manifest.json             # Extension configuration
│   ├── background.js             # Service worker (side panel trigger)
│   ├── sidepanel.html            # Side panel UI
│   ├── sidepanel.css             # Side panel styles
│   └── sidepanel.js              # Side panel logic (save, tags, settings)
│
├── middleware.ts                  # Clerk auth middleware (route protection)
├── drizzle.config.ts              # Drizzle Kit migration config
├── docker-compose.yml             # Local PostgreSQL container
├── .env.example                   # Environment variable template
└── package.json
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.1+)
- [Docker](https://www.docker.com/) (for local PostgreSQL)
- A [Clerk](https://clerk.com/) account (free tier works)

### 1. Clone & Install

```bash
git clone <repo-url>
cd brainery-ai
bun install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Fill in your Clerk keys and database URL in `.env`.

### 3. Start PostgreSQL

```bash
docker compose up -d
```

### 4. Push Database Schema

```bash
bun x drizzle-kit push
```

### 5. Run Development Server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

All design tokens are defined in `app/globals.css` under the `@theme inline` block:

| Token                | Value       | Usage                            |
| -------------------- | ----------- | -------------------------------- |
| `--color-cream`      | `#FAF9F7`   | Page background                  |
| `--color-foreground` | `#1A1A1A`   | Primary text                     |
| `--color-muted`      | `#6B7280`   | Secondary/dimmed text            |
| `--color-accent`     | `#7C6AE8`   | Brand purple (buttons, links)    |
| `--color-card`       | `#FFFFFF`   | Card backgrounds                 |
| `--color-border`     | `#E5E7EB`   | Default borders                  |

> **Dark mode is disabled.** The app enforces light mode via `layout.tsx` and `dashboard/layout.tsx`.

## Database Schema

Three tables managed by Drizzle ORM:

- **`saved_items`** — Each user's saved links with platform metadata
- **`tags`** — Unique tag names
- **`saved_item_tags`** — Many-to-many join between items and tags

See full schema: [`lib/db/schema.ts`](lib/db/schema.ts)

## API Routes

### `POST /api/save`

Saves a link to the vault. Supports two auth methods:

1. **Clerk session cookies** (web app)
2. **`Authorization: Bearer <sync-key>`** header (Chrome Extension)

**Request body:**
```json
{
  "url": "https://youtube.com/watch?v=...",
  "title": "Video Title",
  "tags": ["productivity", "ai"]
}
```

## Authentication

- Powered by **Clerk** with OAuth providers
- Landing page sign-in/sign-up uses a modal overlay (`?auth=login` / `?auth=signup` query params)
- Dashboard routes are protected by `middleware.ts`
- Signed-in users see "Dashboard" button instead of "Login" on the navbar

## Deployment

```bash
bun run build    # Production build
bun start        # Start production server
```

For Vercel deployment, connect the repository and set the environment variables in the Vercel dashboard.
