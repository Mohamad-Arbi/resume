# Mohamed Arbi Tlili — Portfolio

Personal portfolio of **Mohamed Arbi Tlili**, Engineering Student in Software & Decision Systems. Built with Next.js 14, GSAP animations, and deployed on GitHub Pages.

**Live site:** [mohamad-arbi.github.io/resume](https://mohamad-arbi.github.io/resume/)

---

## About Me

Future software engineer passionate about building full-stack web applications with Java, SpringBoot, Angular, and modern technologies. Active, motivated, and ambitious — constantly seeking to expand my technical skills to deliver high-value projects within dynamic teams.

- **Location:** Sfax, Tunisia
- **Email:** tlilimohamedarbi@gmail.com
- **LinkedIn:** [mohamed-arbi](https://www.linkedin.com/in/mohamed-arbi)
- **GitHub:** [Mohamad-Arbi](https://github.com/Mohamad-Arbi)
- **Instagram:** [Mohamad_aarbi](https://www.instagram.com/Mohamad_aarbi)

---

## Tech Stack

**Framework & Language**
- Next.js 14 (App Router)
- React 18
- JavaScript (ES6+)
- SCSS Modules

**Animation & UX**
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- Swiper.js (photo carousel)

**Tooling**
- Node.js 20
- npm
- GitHub Actions (CI/CD)
- GitHub Pages (hosting)

---

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Cinematic scroll-triggered animations
- Custom cursor and magnet interactions
- Interactive skill grid and experience timeline
- Photo journal carousel with story-format media
- Real-time weather widget (Sfax, Tunisia)
- Downloadable PDF resume
- Static export optimized for GitHub Pages

---

## Getting Started

**Requirements:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000/resume

# Build for production (static export)
npm run build
# → outputs to ./out
```

---

## Project Structure

```
├── app/                 # Next.js App Router pages
├── components/
│   ├── Blocks/          # Page sections (Hero, About, Skills, Gallery, Resume…)
│   ├── Layout/          # Header, Footer, Navigation
│   └── UI/              # Reusable UI (Cards, Elements, Icons)
├── database/            # JSON data (skills, works, gallery, config)
├── public/              # Static assets (images, video, resume PDF)
├── assets/              # Global styles and mixins
├── utils/               # Helper functions
├── next.config.js       # Next.js config (static export + basePath)
└── imageLoader.js       # Custom image loader for GitHub Pages
```

---

## Deployment

Deployment is fully automated via **GitHub Actions**. Every push to `main` triggers a build and deploys the static site to GitHub Pages.

Workflow file: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

---

## License

Personal portfolio — all content and assets © 2026 Mohamed Arbi Tlili.
