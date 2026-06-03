# Contributing to Brainly AI

## Branch Strategy

| Branch                               | Purpose                                      |
| ------------------------------------ | --------------------------------------------- |
| `main`                               | Production-ready code                         |
| `feature/auth-clerk-drizzle-db`      | Clerk auth + Drizzle DB integration           |
| `feature/chrome-extension-sidepanel` | Chrome Extension side panel + API save route  |

Always create a new branch for features:

```bash
git checkout -b feature/your-feature-name
```

## Code Conventions

### File Organization

- **Server Actions** go in `app/actions.ts` — all database mutations happen here
- **API Routes** go in `app/api/<name>/route.ts` — used for external integrations (Chrome Extension)
- **Landing page sections** live in `components/sections/` — one file per section
- **Shared constants** live in `lib/constants.ts` — brand name, nav links, hero card data
- **Type definitions** live in `types/index.ts`

### Styling

- Tailwind v4 with theme tokens defined in `app/globals.css`
- Custom CSS animations (float, cursor blink) also in `globals.css`
- Dark mode CSS vars exist in `globals.css` but are **disabled** — the app enforces light mode
- Use the design token CSS variables (e.g., `var(--color-accent)`) for consistency

### Component Patterns

- All client components must have `"use client"` at the top
- Use `motion` from Framer Motion for animations
- Icons: prefer Lucide React; for platform-specific icons, use custom SVGs in `lib/social-icons.tsx`

### Server Actions

Functions exported from `app/actions.ts` must be `async` (Next.js requirement for Server Actions in `"use server"` files). Even pure utility functions like `parseUrlDetails` must be async if exported.

## Running Tests

Currently there is no automated test suite. To verify:

1. Run `bun run build` to check for TypeScript and compilation errors
2. Manually test the landing page, dashboard, and Chrome Extension

## Common Tasks

### Add a new landing page section

1. Create `components/sections/my-section.tsx`
2. Import and add it to `app/page.tsx`
3. Add any data constants to `lib/constants.ts`

### Add a new dashboard page

1. Create `app/dashboard/my-page/page.tsx`
2. Add a sidebar link in `app/dashboard/layout.tsx` (the `SIDEBAR_LINKS` array)

### Add a new platform icon

1. Add the platform detection case in `parseUrlDetails()` inside `app/actions.ts`
2. Add the SVG icon in `lib/social-icons.tsx`
3. If needed for the hero section, add it to `getRealIcon()` in `components/sections/hero.tsx`
