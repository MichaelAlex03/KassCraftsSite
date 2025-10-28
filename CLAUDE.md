# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for "Kass Crafts" - a custom paint designs and handcrafted products business. The site features a landing page with sections for About, Pricing, and Contact information, using a pink/purple/teal color palette with handwritten font styling.

## Technology Stack

- **Framework**: Next.js 16.0.0 with App Router
- **React**: Version 19.2.0
- **TypeScript**: Version 5
- **Styling**: Tailwind CSS v4 (using @tailwindcss/postcss)
- **UI Components**: lucide-react for icons
- **Fonts**: Geist Sans, Geist Mono (from Google Fonts), and Caveat (handwritten, loaded from `/public/fonts/`)

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Directory Structure

- **`app/`**: Next.js App Router structure
  - `page.tsx`: Main entry point, renders all sections (LandingPage, About, Pricing, Contact)
  - `layout.tsx`: Root layout with font configuration and metadata
  - `globals.css`: Global styles, Tailwind imports, CSS variables, and custom font definitions
  - **`components/`**: React components organized by feature
    - `LandingPage.tsx`: Hero section with banner image, CTA buttons
    - `About.tsx`: About section
    - `Pricing.tsx`: Pricing section
    - `Contact.tsx`: Contact section
    - **`about/`**: Nested about-related components
    - **`pricing/`**: Nested pricing-related components

- **`public/`**: Static assets
  - `hero-banner.png`: Main hero image
  - `fonts/Caveat-VariableFont_wght.ttf`: Handwritten font
  - SVG icons and Next.js default assets

### Component Architecture

The main page is composed of full-screen sections rendered in sequence:
1. **LandingPage**: Client component with hero image, heading, CTAs (Order Now button scrolls to contact, Instagram button opens external link)
2. **About**: Currently minimal implementation
3. **Pricing**: Pricing information
4. **Contact**: Contact form/information

### Styling Conventions

- **Color Palette**:
  - Primary pink: `#ffd6e4`
  - Purple: `#c47de8`
  - Teal/cyan: `#57dbdb`
  - Dark purple: `#382442`
  - Gradients from pink to white for backgrounds

- **Custom Font**: The `.font-handwritten` class uses "Caveat" font family for decorative text
- **Tailwind v4**: Uses the new `@theme inline` directive in globals.css
- **Design**: Gradient backgrounds with animated blur effects, rounded corners, hover scale transitions

### TypeScript Configuration

- Path alias `@/*` maps to root directory for cleaner imports (e.g., `@/public/hero-banner.png`)
- Target: ES2017
- Strict mode enabled
- JSX compiled with react-jsx

### Client Components

Components using interactivity (onClick handlers, hooks) must be marked with `'use client'` directive at the top. Example: `LandingPage.tsx`

## Key Technical Notes

- **Image Optimization**: Use Next.js `Image` component from `next/image` for all images
- **Scroll Behavior**: Smooth scrolling implemented via `scrollIntoView({ behavior: 'smooth' })` to navigate between sections
- **External Links**: Instagram link opens in new tab with security attributes (`noopener,noreferrer`)
- **ESLint Config**: Uses flat config format (eslint.config.mjs) with Next.js core-web-vitals and TypeScript presets
