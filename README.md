# Indiabulls Projects Gurgaon

A two-project launch microsite with a reusable architecture for future projects.
Initial projects: **Indiabulls Estate & Club** and **Indiabulls Heights**.

Stack: Next.js App Router · TypeScript · Tailwind CSS · Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## ⚠️ Before launch

All project facts, RERA numbers, sizes, unit counts, developer profile text and
imagery in `src/data/projects.ts` are **sample placeholders** used to exercise
every component. Replace them with approved, verified content — see the
Pre-Launch Content Checklist in the original product spec. Placeholder photos
are served from picsum.photos; swap `heroImage`, `cardImage`, highlight,
amenity, configuration, floor plan, master plan and gallery images for
approved project photography before launch (see `next.config.ts` to update
allowed image domains once you point at real asset URLs).

## Adding a future project

1. Add a new `Project` record to `src/data/projects.ts`.
2. Add its assets (or point at your CDN/image host, updating
   `images.remotePatterns` in `next.config.ts` if needed).
3. It's automatically routed at `/projects/<slug>` and appears on the
   homepage selector — no new page code required.

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

## Notes

- Floor plans, master plan and gallery images open in a lightbox viewer with
  no download affordance, per spec.
- The lead form (Name + Phone required, Email optional) auto-captures the
  triggering CTA, project, page URL and timestamp; lead delivery is isolated
  in `LeadFormProvider`'s `handleSubmit` so a CRM/email/DB integration can be
  added without touching the form UI.
- Legal pages (`/privacy`, `/terms`, `/disclaimer`) are placeholders and need
  legal review before publication.
