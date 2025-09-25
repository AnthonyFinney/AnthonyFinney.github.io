# Soshie Finney - Portfolio

A cinematic single-page developer portfolio built with modern React 19, TypeScript, Tailwind CSS v4, and Vite. It combines motion design, 3D visuals, and composable UI primitives to showcase projects, skills, and contact details in a polished experience.

## Overview
- Full-screen hero with multilingual typewriter loop, social links, and profile imagery.
- Animated Beams background powered by `@react-three/fiber` and custom Three.js shaders.
- Projects carousel with modal deep-dives, live/code links, and tech stack badges.
- Responsive skill grid and marquee logo loop for technology highlights.
- EmailJS-backed contact card and form with validation, status messaging, and reusable UI components from shadcn/ui.
- Accessible navigation with mobile-first menu, anchored sections, and consistent dark UI.

## Tech Stack
- React 19 + TypeScript, bundled with Vite 6.
- Tailwind CSS v4 (via `@tailwindcss/vite`) with custom fonts and utility-first styling.
- shadcn/ui primitives enhanced with Lucide icons, Embla carousel, and react-icons.
- Motion: GSAP (typewriter effect), `@react-three/fiber`/Three.js (background beams).
- EmailJS for serverless form delivery.

## Getting Started
### Prerequisites
- Node.js 18+ (or the current LTS) and npm 9+.
- An EmailJS account if you plan to use the contact form in production.

### Installation
```bash
git clone https://github.com/<your-username>/portfolio.git
cd portfolio
npm install
```

### Run Locally
```bash
npm run dev
```
The dev server runs on the port printed in the console (Vite defaults to http://localhost:5173).

## Available Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot module reloading. |
| `npm run build` | Type-check and build the production bundle into `dist/`. |
| `npm run preview` | Serve the production build locally for smoke testing. |
| `npm run lint` | Run ESLint with the TypeScript-aware config. |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages (`gh-pages`). |

> `npm run deploy` automatically runs `npm run build` via the `predeploy` script. If you are deploying to a sub-path (e.g., GitHub Pages), remember to update `vite.config.ts` -> `base` accordingly.

## Environment Variables (EmailJS)
Create a `.env.local` file in the project root before running the contact form in production:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```
These map directly to the values used in `src/components/contact.tsx`. Vite automatically exposes `VITE_*` variables at build time.

## Project Structure
```text
portfolio/
  public/
    assets/                # Hero portrait, project screenshots, resume PDF, etc.
  src/
    App.tsx                # Composition of all main sections
    main.tsx               # Vite entry point
    index.css              # Tailwind layer configuration + globals
    components/
      hero.tsx             # Typewriter hero with profile image
      skills.tsx           # Tech stack grid + logo marquee (LogoLoop)
      projects.tsx         # Embla carousel + modal dialog per project
      contact.tsx          # Contact cards + EmailJS form logic
      blocks/Backgrounds/Beams/Beams.tsx  # Three.js animated beam background
      LiquidEther.tsx      # Optional fluid background effect implementation
      ui/*                 # shadcn/ui component wrappers (card, button, etc.)
    lib/                   # Helper utilities (if any are added)
  package.json
  tsconfig*.json
  vite.config.ts           # React plugin, Tailwind integration, path aliases
```

## Customisation Tips
- **Hero content**: Update the name list and social links in `src/components/hero.tsx`.
- **Resume download**: Replace `public/assets/Soshie_Finney_Full_Stack_Developer_CV.pdf` and adjust the href in `aboutMe.tsx`.
- **Projects**: Edit the `projects` array in `src/components/projects.tsx` to add screenshots, features, and links.
- **Branding**: Replace assets in `public/assets/` and tweak colors/fonts via Tailwind utilities in `index.css`.
- **Backgrounds**: `Beams` supports props (width, speed, color) passed from `App.tsx`; experiment with the values for different moods.

## Deployment
1. Set the required EmailJS environment variables in your hosting provider (Vercel, Netlify, etc.).
2. `npm run build` to create an optimized production bundle in `dist/`.
3. Use `npm run preview` for a final check.
4. Deploy the `dist/` directory. For GitHub Pages, run `npm run deploy` and ensure your repository settings serve from the `gh-pages` branch.

## Accessibility & Performance Notes
- Navigation uses semantic links and reduced DOM nesting for clarity; verify anchor text when updating copy.
- The animated background is GPU-intensive; consider gating `Beams` behind a reduced-motion preference if targeting lower-powered devices.
- Image assets are served from `public/assets/`; keep file sizes optimized and update `alt` text when replacing visuals.

## License
No license is defined yet. Add one if you intend to open-source or distribute this project.

## Connect
Questions or ideas? Reach out via the contact form (EmailJS) or connect on [LinkedIn](https://www.linkedin.com/in/soshie-finney-557361233/) and [GitHub](https://github.com/AnthonyFinney).
