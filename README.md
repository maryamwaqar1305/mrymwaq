# Maryam Waqar — Portfolio

A personal portfolio website built to showcase my work as a **developer and designer**. It blends frontend engineering with graphic design, wrapped in an editorial aesthetic and a few playful, interactive touches — a pixel-reveal hero, a cursor-driven image trail, a working Spotify "last played" widget, and full case studies for every project.

**Live Site:** [mrymwaq.in]()

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Projects Featured](#projects-featured)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Contact](#contact)

---

## About

I'm **Maryam Waqar**, a developer and designer who enjoys building things people actually like using. Some days that means designing a brand, other days it's building a website, and a lot of days it's spending way too long making sure some tiny detail feels exactly right.

This portfolio brings my frontend development and graphic-design work together in one place — from full-stack applications to social-media design — and is itself hand-built to reflect how I like to work: clean, considered, and a little bit fun.

---

## Features

**Home**
- **Pixel-reveal hero** — a grid of tiles covering a portrait that dissolve tile-by-tile as the cursor moves across, revealing the photo underneath with a smooth, slow transition.
- **Custom square cursor** that resizes to a single pixel-tile when hovering the hero.
- **One-time intro loader** ("there you go :3") shown only on first visit per session — never again on internal navigation.

**Work**
- Alternating project cards (image left / right) with minimal titles and descriptions.
- Dedicated **case-study page** for each project, structured as: *The Challenge → The Approach → Featured Highlights → The Outcome → What I Learned*, plus quick metrics and Live Demo / GitHub links.

**Design Gallery**
- Featured designs on the home page and a full **/gallery** page.
- Full-colour graphic-design work displayed at original aspect ratios.
- Click any piece to open it in a **fullscreen lightbox** with keyboard navigation and a minimise button.

**About**
- Experience timeline with detailed, bulleted role descriptions.
- A personal "A little about me" write-up.
- A **cursor image-trail** (desktop only) — photos pop in following the cursor across the header, then fade out.
- A **Spotify "last played" widget** with a functional audio player, album art, and a green progress bar that appears while playing.

**Global**
- Fully **responsive** across desktop, tablet, and mobile.
- Smooth scrolling, subtle motion, and reduced-motion support for accessibility.
- Resume button in the navbar, and a slide-down mobile menu.

---

## Tech Stack

| Category        | Tools                                              |
| --------------- | -------------------------------------------------- |
| Framework       | React 18                                           |
| Build Tool      | Vite                                               |
| Routing         | React Router                                       |
| Animation       | GSAP, Lenis (smooth scroll), CSS transitions       |
| Styling         | Plain CSS with design tokens (no CSS framework)    |
| Typography      | Instrument Serif (display), system sans (body), Caveat (accents) |
| Language        | JavaScript (JSX)                                   |

No heavy UI libraries — the interface is hand-built for full control over the design.

---

## Projects Featured

| Project | Description | Stack |
| ------- | ----------- | ----- |
| **Graphic Designer Portfolio** | A hand-coded, editorial-style portfolio built from scratch to showcase design work. | HTML, CSS, JavaScript |
| **FinanceHub** | An intelligent personal-finance dashboard with AI-powered insights, live charts, CSV import, and PDF export. | React, Chart.js, MongoDB, Node, Express |
| **Atmos** | A clean, real-time weather app with hourly/5-day forecasts and AI activity suggestions. | JavaScript, Weather API, CSS |
| **Lumière** | A full-stack luxury skincare e-commerce store with auth, cart, wishlist, and checkout. | React, Next.js, Framer Motion, Supabase |

Each project has a full case study on the site with the problem, approach, highlights, outcome, and reflections.

---

## Getting Started

### Prerequisites
- **Node.js** (v18 or newer recommended)
- **npm** (comes with Node)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/maryamwaqar1305/mrymwaq.git

# 2. Move into the project folder
cd mrymwaq

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The site will be available at **http://localhost:5173**.

### Available Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Starts the local development server       |
| `npm run build`   | Builds the production bundle into `/dist` |
| `npm run preview` | Serves the production build locally       |

---

## Project Structure

```
portfolio/
├── public/                  # static files served as-is
│   ├── resume.pdf           # downloadable resume
│   ├── missu.mp3            # audio for the Spotify widget
│   └── favicon.svg          # "M." favicon
│
├── src/
│   ├── assets/
│   │   ├── fonts/           # font files
│   │   ├── gallery/         # design gallery images
│   │   ├── projects/        # project cover images
│   │   ├── trail/           # cursor image-trail photos (t1–t30)
│   │   ├── portrait.jpg     # hero portrait
│   │   └── album.jpg        # Spotify widget album art
│   │
│   ├── components/          # Hero, Nav, Projects, Gallery, Footer,
│   │                        # Cursor, Loader, ImageTrail, SpotifyCard, etc.
│   ├── pages/               # Home, About, CaseStudy, GalleryPage
│   ├── data/                # content.js, gallery.js, spotify.js
│   ├── hooks/               # custom hooks (e.g. scroll reveal)
│   ├── App.jsx              # routes
│   ├── main.jsx             # entry point
│   └── index.css            # global styles + design tokens
│
├── index.html
├── package.json
└── vite.config.js
```

---

## Customization Guide

Most content lives in **`src/data/`**, so you can update the site without touching component code:

- **`content.js`** — profile info, contact links, all four projects (with full case studies), experience, skills, and the About page text.
- **`gallery.js`** — the design gallery images and which three are featured on the home page.
- **`spotify.js`** — the "last played" song title, artist, and audio file.

**Swapping assets:**
- Hero photo → replace `src/assets/portrait.jpg`
- Project covers → `src/assets/projects/`
- Gallery images → `src/assets/gallery/`
- Trail photos → `src/assets/trail/` (named `t1.jpg`–`t30.jpg`)
- Resume → replace `public/resume.pdf`
- Song → replace `public/missu.mp3`

---

## Deployment

The site is a static Vite build and can be deployed to any static host (Netlify, Vercel, GitHub Pages).

For **SPA routing** to work (so `/about`, `/work/...`, `/gallery` don't 404 on refresh), add a redirect rule:

- **Netlify:** create a `public/_redirects` file with:
  ```
  /*  /index.html  200
  ```
- **Vercel:** works out of the box.

Then run `npm run build` and deploy the `/dist` folder.

---

## Contact

I'm always open to opportunities and conversations about design, frontend, or just good coffee.

- **Email:** [maryam.waqar198@gmail.com](mailto:maryam.waqar198@gmail.com)
- **LinkedIn:** [maryam-waqar](https://www.linkedin.com/in/maryam-waqar-508a6024a/)
- **GitHub:** [@maryamwaqar1305](https://github.com/maryamwaqar1305)
- **X:** [@maryamdevs](https://x.com/maryamdevs)

---

<p align="center">Designed & built by Maryam Waqar · © 2026</p>
