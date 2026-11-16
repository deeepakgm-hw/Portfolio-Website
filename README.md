# Deepak GM — Personal Portfolio

A premium, editorial, monochrome portfolio built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run start    # serve the production build
```

## Editing your content

Everything personal lives in two files — edit these, not the components:

- **`src/data/personal.ts`** — name, title, taglines, email, website, GitHub, LinkedIn (optional), Halfwave link, location, and the portrait image path.
- **`src/data/projects.ts`** — every project card and its detail page content.
- **`src/data/content.ts`** — capabilities, tech stack, journey/achievements, Halfwave section, writing drafts, and contact copy.

### Adding your LinkedIn

`personal.linkedin` is `null` by default, so the LinkedIn link is hidden everywhere (nav, contact, footer). Set it to your profile URL and it will appear automatically:

```ts
linkedin: "https://www.linkedin.com/in/your-handle",
```

### Replacing the portrait

The hero portrait is pulled from `/public/images/deepak-portrait.jpg`. To swap it, replace that file with your new photo (same filename), or point `personal.portrait` in `src/data/personal.ts` at a new path under `/public`.

### Adding a project

Add a new object to the `projects` array in `src/data/projects.ts` with a unique `slug` — a detail page at `/projects/<slug>` is generated automatically, and it appears in the homepage grid and the sitemap.

## SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` and `robots.txt` automatically from `personal.website` and the project list.
- `src/app/opengraph-image.tsx` generates the Open Graph / Twitter preview image on the fly.
- `src/app/favicon.ico` is a generated monogram icon — replace it with your own `.ico` whenever you like.
- Canonical URL, title and meta description are set in `src/app/layout.tsx`, driven by `src/data/personal.ts`.

The domain (`deepakgm.in`) is configured in metadata but not claimed as live anywhere in the UI — point your DNS at your deployment and it's ready to go.

## Deploying

This is a standard Next.js app — deploy it to Vercel, or any platform that supports Next.js (`npm run build` + `npm run start`, or an adapter for static/edge hosting).
