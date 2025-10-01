# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Azri Mahanif (Data Engineer) built with Vite, React, TypeScript, and shadcn-ui components. The site showcases experience, skills, projects, blog posts from Medium, and contact information.

## Available Commands

### Development
- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally

### Quality Assurance
- `npm run lint` - Run ESLint to check code quality

### Deployment
- `npm run deploy` - Build and deploy to GitHub Pages

## Architecture & Structure

### Key Technologies
- **Vite** - Build tool and development server
- **React 18** - UI framework with TypeScript
- **shadcn/ui** - Component library built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling with Zod validation

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components (40+ components)
│   ├── Navigation.tsx  # Main navigation with scrollspy
│   ├── Hero.tsx        # Landing section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Project portfolio
│   ├── Blog.tsx        # Medium blog integration
│   └── Contact.tsx     # Contact form/section
├── pages/
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/
│   ├── use-mobile.tsx  # Mobile detection hook
│   └── use-toast.ts    # Toast notification hook
├── lib/
│   └── utils.ts        # Utility functions (cn, etc.)
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── index.css           # Global styles
```

### Key Features
- **Smooth scrolling navigation** with active section highlighting
- **Medium blog integration** with fallback mechanisms for CORS handling
- **Responsive design** with mobile-first approach
- **Dark mode support** via shadcn/ui theme system
- **Proxy configuration** for external API calls (Medium, RSS2JSON, AllOrigins)
- **Animated components** with Tailwind CSS keyframes

### External Dependencies & APIs
- **Medium RSS Feed** - Fetches blog posts via multiple proxy approaches
- **RSS2JSON API** - RSS to JSON conversion service
- **AllOrigins** - CORS proxy service
- **GitHub Pages** - Deployment platform

### Development Notes
- Uses path aliases (`@/*`) mapped to `src/*`
- Development server runs on port 8080 with proxy endpoints:
  - `/api/medium` → Medium.com
  - `/api/rss2json` → RSS2JSON.com
  - `/api/allorigins` → AllOrigins.win
- TypeScript configured with relaxed rules for easier development
- ESLint configured with React-specific rules and unused vars disabled

### Component Architecture
- **Page components** in `src/pages/` handle routing
- **Section components** in `src/components/` represent portfolio sections
- **UI components** in `src/components/ui/` provide reusable design system
- **Custom hooks** provide reusable logic for mobile detection and toasts

### Deployment Configuration
- Base path set to `/` for GitHub Pages deployment
- Build output goes to `dist/` directory
- Deploy script automatically pushes to `gh-pages` branch