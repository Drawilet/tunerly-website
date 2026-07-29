# Tunerly Landing Page

A beautiful, high-fidelity, distraction-free landing page for Tunerly—the sub-cent accurate, subscription-free, and offline-first instrument tuner. Designed for stage and studio, optimized for OLED displays, and built using premium web patterns.

---

## Tech Stack & Architecture

- **Framework**: [Astro](https://astro.build) (for static rendering and head/SEO management)
- **UI Components**: [React](https://react.dev) (for interactive tuner simulation)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Audio Synthesis**: Web Audio API (for reference pitch output)

---

## Directory Structure

```text
tunerly-website/
├── src/
│   ├── components/            # Modular React components
│   │   ├── Header.tsx         # Site navigation & Brand logo
│   │   ├── Hero.tsx           # Intro headers and call-to-actions
│   │   ├── TunerDemo.tsx      # Interactive simulated pitch tuner & tone generator
│   │   ├── Philosophy.tsx     # Value pillars and comparison cards
│   │   ├── Features.tsx       # Core feature grids
│   │   ├── Performance.tsx    # Audio engine visualizer & FFT simulation
│   │   ├── Comparison.tsx     # Comparison checklist table
│   │   ├── FAQ.tsx            # Frequently Asked Questions Accordion
│   │   └── Download.tsx       # Download CTA section
│   │   └── Footer.tsx         # Legal footer & copyright links
│   ├── data/
│   │   └── tunerlyData.ts     # Configuration presets, FAQs, and JSON-LD schema
│   ├── pages/
│   │   └── index.astro        # Base entrypoint with SEO metadata & scripts
│   └── styles/
│       └── global.css         # Tailwind base styling setup
├── package.json
└── astro.config.mjs
```

---

## SEO & Schema Implementation

All SEO settings are located statically in the `<head>` of [index.astro](src/pages/index.astro) to ensure fast indexing:
- **Title and Meta tags**: Statically injected for maximum crawl efficiency.
- **OpenGraph & Twitter Cards**: Formatted for preview sharing.
- **JSON-LD Schema**: Implements `SoftwareApplication` and `FAQPage` graphs dynamically loaded for search engines.
- **App Icons & Manifests**: Pre-configured with Apple touch icons, Android launcher properties, and standard favicons.

---

## Development

To install dependencies and start the dev server locally:

```bash
# Install dependencies
npm install

# Start the dev server in the background
astro dev --background

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

### Background Server Management
- View status: `astro dev status`
- View console logs: `astro dev logs`
- Stop the server: `astro dev stop`
