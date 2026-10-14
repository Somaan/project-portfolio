# Somaan Mirza: Portfolio

Personal portfolio built with React and Vite.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run lint     # run ESLint
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Structure

- `src/App.jsx`: page layout and scroll-based nav highlighting
- `src/components/`: Navigation, Hero, Projects (grid, card, modal) and Contact sections
- `src/data/projects.js`: project content; add new projects here
- `src/utils/links.js`: CV path and external-link helper
- `public/images/`, `public/documents/`: project screenshots, CV and report PDFs

## Deployment

Deployed on Vercel from the `main` branch. This folder (`project-portfolio-main/`) is the Vercel project root.
