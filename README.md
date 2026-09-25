# Prestige Projects

A two-project launch microsite with a reusable architecture for future projects.
Initial projects: **Prestige Sector 92 Gurgaon** and **Prestige Sector 109 Gurgaon**.

Stack: Next.js App Router · TypeScript · Tailwind CSS · Framer Motion

## Project structure

- `src/app` — routes (homepage, project template, legal pages, sitemap, robots)
- `src/components/home` — homepage background + animated project selector
- `src/components/project` — reusable project-page sections (hero, quick
  facts, overview, highlights, pricing, amenities, floor plans, gallery,
  location, developer, why-this-project, FAQ, final CTA)
- `src/components/layout` — header, footer, mobile sticky contact bar
- `src/components/ui` — buttons, lead-form modal, lightbox/viewer, accordion
- `src/data/projects.ts` — the typed, reusable project data model + sample data
- `src/lib/analytics.ts` — centralized `track()` event helper; wire to GA/GTM
