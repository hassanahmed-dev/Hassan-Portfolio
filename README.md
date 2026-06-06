# Portfolio — Animated Dark Theme

A stunning, high-end animated portfolio website built with Next.js 15, TypeScript, Tailwind CSS 4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + react-intersection-observer
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=your@email.com
```

Get your Resend API key at [resend.com](https://resend.com).

## Customization

All content is centralized in `lib/data/`:

- `skills.ts` — Your technical skills and proficiency levels
- `projects.ts` — Portfolio projects
- `services.ts` — Services you offer
- `testimonials.ts` — Client testimonials

Update these files with your personal information. Search for `TODO:` comments in the codebase for other placeholders (name, links, etc.).

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/portfolio)

Or manually:

```bash
npm run build
npm run start
```

## Features

- Page loading animation
- Scroll progress indicator
- Smooth scroll-triggered animations
- Interactive skill bars with category filters
- Filterable project gallery with hover effects
- Auto-scrolling testimonials marquee
- Fully validated contact form with email delivery
- Responsive design (mobile, tablet, desktop)
- Respects `prefers-reduced-motion`
- Dark theme with glassmorphism UI
