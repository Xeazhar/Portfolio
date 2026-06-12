# Jazper Bustria — Portfolio

Personal portfolio built with Next.js, featuring a glassmorphic dashboard layout, animated text effects, a live terminal, and theme switching.

## Features

- **Three-column layout** — Tech stack, profile & content, links & terminal
- **Theme switcher** — Blue, red, and cyan accent themes with matching background tint, profile image, and UI colors
- **Animated name** — Canvas text effect on the hero heading
- **Morphing tagline** — Liquid text rotation for role descriptions
- **Interactive terminal** — Auto-typing bash-style demo with rotating scenes
- **Content tabs** — Projects, Experience, and Education
- **Faulty terminal background** — WebGL shader background that reacts to the mouse
- **Custom cursor** — Replaces the native cursor site-wide
- **Responsive** — Mobile-first ordering (profile first, then projects, links, tech stack)

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui |
| Animation | GSAP, Motion, canvas-text, liquid-text |
| 3D / FX | Three.js, OGL, FaultyTerminal shader |
| Icons | Lucide, Tabler, React Icons |

## Getting Started

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run production server
npm run lint    # eslint
```

## Editing Content

All portfolio content lives in `data/` — edit these files to update the site without touching components.

| File | What it controls |
|------|------------------|
| `data/projects.js` | Project cards (title, description, tech, link) |
| `data/Experiences.js` | Work experience (title, bullet descriptions, tech, dates) |
| `data/Education.js` | Education entries (school, degree, location, highlights) |
| `data/techStack.js` | Tech stack categories and tags |
| `data/Links.js` | Social link icons and URLs |

> Projects without a link (or with `link: "#"`) hide the "View Project" button automatically.

## Themes

Theme config is in `context/ThemeContext.tsx`. Each theme sets:

- Accent color and RGB values
- Background shader tint (`bgTint`)
- Profile image (`/Profile.jpg`, `/Profile_red.jpg`, `/Profile_green.jpg`)

Place profile images in `public/`.

## Project Structure

```
Portfolio/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout, fonts, custom cursor
│   └── globals.css       # Tailwind + CSS variables
├── components/
│   ├── Hero.tsx          # Main layout
│   ├── ProjectCard.tsx
│   ├── ExperienceCard.tsx
│   ├── EducationCard.tsx
│   └── ui/               # Reusable UI (terminal, canvas-text, etc.)
├── context/
│   └── ThemeContext.tsx  # Theme provider + color tokens
├── data/                 # Editable content (see above)
├── ui_block/             # Composed blocks (terminal demo, text effects, background)
└── public/               # Static assets (images, resume PDF)
```

## Resume

Resume PDF: `public/Jazper Bustria - Resume.pdf`

## Author

**Jazper Bustria** — [@xeazhar](https://github.com/Xeazhar) · [LinkedIn](https://www.linkedin.com/in/jazper-bustria/)
