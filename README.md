# Portfolio V3 — Rakshith Kumar K.N

A cinematic, dark-themed portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**. Features a full-screen video hero with Three.js bokeh particles, GSAP staggered text animations, and a complete OpenAI-compatible AI chat widget powered by [FreeLLMAPI](https://github.com/rakshit176/freellmapi-vercel).

---

## Features

- **Cinematic Video Hero** — Full-viewport autoplay video with dual-layer (foreground + blurred background) playback, custom mute/play controls, and auto-scroll on completion
- **Three.js Bokeh Particles** — GPU-instanced floating particle system with depth-of-field blur, rendered via `CinematicLayer`
- **GSAP Staggered Reveal** — Name, tagline, and subtitle animate in with `power3.out` easing and overlapping timelines
- **Inter 800 Typography** — Hero name rendered in Inter ExtraBold with tight letter-spacing (`-0.03em` / `-0.02em`) and amber text-shadow glow
- **Dark Amber/Cyan Theme** — Deep black (`#0A0603`) background with warm amber (`#F5A832`) and cool cyan (`#00C8DC`) accent gradients
- **Full Portfolio Sections** — Hero, Ticker, About, Experience, Skills, Projects, AI Chat, Contact, and Footer
- **AI Chat Widget** — Built-in chat interface that connects to FreeLLMAPI for real-time streaming conversations
- **Particle Background** — Ambient floating particles behind all content sections
- **Responsive Design** — Fluid typography with `clamp()`, mobile-optimized navigation, and adaptive layouts
- **Vercel-Ready** — Zero-config deployment to Vercel with automatic serverless optimization

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 16 (App Router), React 19, TypeScript 5 |
| Styling | Tailwind CSS 4, CSS Modules, shadcn/ui |
| Animation | GSAP 3.15, Framer Motion 12 |
| 3D / Visual | Three.js 0.184 (instanced bokeh particles) |
| AI Chat | Custom widget → FreeLLMAPI (OpenAI-compatible) |
| Database | Prisma ORM (optional — graceful fallback without `DATABASE_URL`) |
| Deployment | Vercel (serverless) |
| Fonts | Inter, Cormorant Garamond, DM Sans, Geist, Geist Mono |

---

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts     # AI chat proxy endpoint
│   ├── layout.tsx             # Root layout with fonts & metadata
│   ├── page.tsx               # Main page composing all sections
│   └── globals.css            # Global styles & Tailwind directives
├── components/
│   ├── VideoIntro/
│   │   ├── VideoIntro.tsx     # Cinematic video hero section
│   │   ├── CinematicLayer.tsx # Three.js bokeh particle renderer
│   │   └── VideoIntro.module.css
│   ├── portfolio/
│   │   ├── Navigation.tsx     # Sticky glassmorphism nav
│   │   ├── Hero.tsx           # Main hero with CTA buttons
│   │   ├── Ticker.tsx         # Scrolling tech marquee
│   │   ├── About.tsx          # About section
│   │   ├── Experience.tsx     # Work experience timeline
│   │   ├── Skills.tsx         # FAANG-signal skill badges
│   │   ├── Projects.tsx       # Project showcase cards
│   │   ├── AIChat.tsx         # AI chat widget
│   │   ├── Contact.tsx        # Contact form
│   │   ├── Footer.tsx         # Footer
│   │   └── ParticleBackground.tsx  # Ambient particles
│   └── ui/                    # shadcn/ui component library
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
└── lib/
    ├── db.ts                  # Prisma client (optional)
    └── utils.ts               # Utility functions
```

---

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Vercel account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/rakshit176/portfolio_v3.git
cd portfolio_v3

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | No | Prisma SQLite connection string. If omitted, the app runs without database features |
| `FREE_LLMAPI_KEY` | No | API key for the AI chat widget (points to your FreeLLMAPI deployment) |
| `FREE_LLMAPI_URL` | No | Base URL of your FreeLLMAPI instance (default: auto-detected) |

---

## Deployment on Vercel

This project is optimized for Vercel deployment with zero configuration:

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Add environment variables in the Vercel dashboard
5. Deploy

Vercel automatically handles:
- Next.js build optimization
- Serverless function generation for API routes
- Edge caching for static assets
- Image optimization via `next/image`

---

## Customization

### Hero Video

Replace `/public/hero-video.mp4` with your own video. For best results:
- Resolution: 1920x1080 or higher
- Duration: 8-15 seconds
- Format: MP4 (H.264)
- Keep file size under 10MB for fast loading

### Fonts

Fonts are loaded via `next/font/google` in `src/app/layout.tsx`. The hero name uses **Inter 800** with custom letter-spacing defined in `VideoIntro.module.css`.

### Color Theme

The dark amber/cyan palette is defined through:
- Tailwind config: `bg-[#0A0603]`, `text-[#FFF3E2]`
- CSS custom properties in `globals.css`
- Inline gradient overlays in `page.tsx`

---

## License

MIT

---

Built by [Rakshith Kumar K.N](https://github.com/rakshit176)
