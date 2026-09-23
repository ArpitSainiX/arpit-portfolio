# Arpit Saini — Portfolio

Personal portfolio for Arpit Saini (Frontend Developer / AI Model Response
Evaluator). Built with Next.js 16, TypeScript, Tailwind CSS v4, Framer
Motion and React Three Fiber.

## Stack

- **Next.js 16** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, micro-interactions
- **React Three Fiber + drei** — the distorted blob behind the hero portrait
- **react-hook-form + zod** — contact form validation
- **Resend** — contact form email delivery
- **next-themes** — dark/light toggle

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All personal content (name, projects, skills, experience, socials) lives in
one file: `src/lib/data.ts`. Edit that file to update anything on the site —
no need to touch components.

- Portrait image: `public/images/arpit.png`
- Resume PDF: `public/Arpit-Saini-Resume.pdf`

## Contact form

The form posts to `src/app/api/contact/route.ts`, which sends mail via
[Resend](https://resend.com). To enable it:

1. Create a free Resend account (no domain verification needed to send to
   your own inbox).
2. Copy `.env.example` to `.env.local` and paste your API key:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   ```
3. Restart the dev server.

Without a key, the form fails gracefully and points visitors to the direct
`mailto:` link instead — the site is fully functional either way.

## Build & deploy

```bash
npm run build
npm start
```

Deploys cleanly to Vercel (recommended — zero config) or any Node host.
Remember to set `RESEND_API_KEY` in the hosting provider's environment
variables.

## Scripts

| Command         | Purpose                       |
| ---------------- | ------------------------------ |
| `npm run dev`    | Start dev server (Turbopack)   |
| `npm run build`  | Production build               |
| `npm run start`  | Run the production build       |
| `npm run lint`   | ESLint                         |
