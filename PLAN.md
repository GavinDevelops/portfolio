# Portfolio Development Plan

## Overview
A distinctive portfolio website for a freelance full stack developer. The design draws inspiration from **IDE/code editor aesthetics** but executed with creative flair—not a literal terminal clone, but an elevated interpretation that feels authentic to a developer while surprising visitors.

## Creative Direction: "Midnight Workshop"

### Concept
The portfolio feels like stepping into a developer's workspace at 2 AM—focused, atmospheric, slightly mysterious. Dark theme dominates with warm amber and cool cyan accents that evoke syntax highlighting without being literal. The design rewards exploration with subtle reveals and unexpected moments.

### Aesthetic Pillars
1. **Depth over flatness** - Layered backgrounds, subtle shadows, atmospheric effects
2. **Precision meets warmth** - Technical grid systems with organic color choices
3. **Orchestrated reveals** - Single, impactful page load sequence
4. **Asymmetry with purpose** - Break the grid intentionally

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion (orchestrated, not scattered)
- **Icons**: Custom SVG set + Phosphor Icons (distinctive alternative to Lucide)
- **Hosting**: Netlify (free tier)
- **Contact Form**: Netlify Forms

## Typography

### Font Pairing
- **Display/Headings**: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) — elegant with technical sharpness, unexpected for a dev portfolio
- **Body**: [Satoshi](https://www.fontshare.com/fonts/satoshi) — geometric sans with character, free from Fontshare
- **Monospace (code/accents)**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — for technical elements, stats, skill tags

### Type Scale
```css
--text-xs: 0.75rem;      /* 12px - labels, captions */
--text-sm: 0.875rem;     /* 14px - body small */
--text-base: 1.125rem;   /* 18px - body */
--text-lg: 1.5rem;       /* 24px - lead text */
--text-xl: 2rem;         /* 32px - section headers */
--text-2xl: 3rem;        /* 48px - hero subhead */
--text-3xl: 4.5rem;      /* 72px - hero headline */
--text-4xl: 6rem;        /* 96px - dramatic moments */
```

## Color System

### Palette: "Obsidian & Ember"
Inspired by late-night coding sessions—warm amber like a desk lamp against cool, deep backgrounds.

```css
/* Background layers - creates depth */
--bg-void: #0a0a0b;        /* Deepest black */
--bg-base: #121214;        /* Primary background */
--bg-raised: #1a1a1d;      /* Cards, elevated surfaces */
--bg-hover: #242428;       /* Interactive states */

/* Foreground */
--text-primary: #f4f4f5;   /* Primary text - warm white */
--text-secondary: #a1a1aa; /* Secondary text */
--text-muted: #52525b;     /* Muted, disabled */

/* Accent - Amber (primary action) */
--amber-500: #f59e0b;
--amber-400: #fbbf24;
--amber-300: #fcd34d;

/* Accent - Cyan (links, highlights) */
--cyan-500: #06b6d4;
--cyan-400: #22d3ee;

/* Accent - Rose (special moments, errors) */
--rose-500: #f43f5e;

/* Syntax-inspired (for skill tags, code snippets) */
--syntax-green: #4ade80;
--syntax-purple: #c084fc;
--syntax-orange: #fb923c;
```

### Usage Rules
- Amber is the **dominant accent** - CTAs, active states, key highlights
- Cyan is **secondary** - links, hover effects, subtle highlights
- Never use both at full saturation together
- Gradients: subtle, low-opacity, single-hue (e.g., amber-500 at 5% to transparent)

## Background & Atmosphere

### Hero Background
- Base: `--bg-void` with subtle noise texture (CSS-only, no images)
- Layered gradient: radial amber glow (20% opacity) positioned off-center top-right
- Subtle grid pattern: 1px lines at 10% opacity, 80px spacing
- Optional: slow-moving gradient orbs using CSS animations (not too distracting)

```css
.hero-bg {
  background:
    radial-gradient(ellipse 80% 50% at 70% 20%, rgba(245, 158, 11, 0.08), transparent),
    linear-gradient(to bottom, var(--bg-void), var(--bg-base)),
    url("data:image/svg+xml,..."); /* subtle grid or noise */
}
```

### Section Transitions
- Each section has subtle gradient fade at edges
- Horizontal rule alternatives: thin amber lines, or gradient fades
- Cards have subtle inner glow on hover

## Layout System

### Breaking the Grid
- Hero: Name/title can break conventional centering—try left-aligned with dramatic negative space
- Skills: Instead of uniform grid, use masonry or overlapping cards
- Projects: Alternate layouts—one large featured, others in asymmetric grid
- About: Split layout with photo breaking the container edge

### Container Widths
```css
--container-sm: 640px;   /* Reading content */
--container-md: 768px;   /* Default sections */
--container-lg: 1024px;  /* Wide sections */
--container-xl: 1280px;  /* Full-bleed moments */
```

## Section Designs

### 1. Hero Section
**Layout**: Left-aligned, asymmetric
- Name in large Instrument Serif (--text-4xl on desktop)
- Title in Satoshi, muted color
- One-line bio in monospace, styled like a code comment: `// building the future, one commit at a time`
- Single CTA button (amber), secondary as text link
- Subtle floating elements: small code snippets or symbols that parallax on scroll

**Animation**: Orchestrated 1.2s sequence
1. Background gradient fades in (0-400ms)
2. Name slides up from below (200-600ms)
3. Title fades in (400-700ms)
4. Bio types in character by character (500-1000ms)
5. CTA fades in with subtle scale (900-1200ms)

### 2. About Section
**Layout**: Two-column, image breaking grid
- Photo/avatar with amber border accent, positioned to overlap section edge
- Text column with short paragraphs
- Stats row at bottom: `8+ years` | `50+ projects` | `12 happy clients` in monospace

### 3. Skills Section
**Layout**: Categorized with visual hierarchy
- Categories as horizontal bands
- Skills as floating tags with syntax-colored backgrounds
- Hover reveals subtle glow + tooltip with brief context
- Consider: one "featured" skill per category gets more prominence

**Categories with distinct colors**:
- Backend (Go, Node.js, Python): `--syntax-green`
- Frontend (React, TypeScript, Tailwind): `--cyan-500`
- Databases (PostgreSQL, Redis, MongoDB): `--syntax-purple`
- Blockchain (Solidity): `--syntax-orange`

### 4. Projects Section
**Layout**: Featured + grid
- One project gets hero treatment (large image, full description)
- Others in 2-column grid below
- Cards have image, title, one-line description, tech tags
- Hover: image scales slightly, amber border appears
- Click: expands inline or navigates to detail

**Project Card Design**:
- Dark card with subtle border
- Image at top with subtle vignette
- Title in Instrument Serif
- Tech tags in monospace, small, muted
- Arrow indicator for "view project"

### 5. Services Section
**Layout**: Horizontal scroll on mobile, grid on desktop
- Each service as a tall card
- Icon at top (custom, not generic)
- Service name in serif
- Brief description
- "Learn more" link

**Services to highlight**:
1. Full Stack Web Applications
2. API Architecture & Development
3. Database Design & Optimization
4. Smart Contract Development
5. Technical Consulting & Code Review

### 6. Contact Section
**Layout**: Split—form on one side, info on other
- Form with minimal fields: name, email, message
- Inputs styled dark with amber focus rings
- Submit button: amber, full-width within form
- Right side: email link, social icons, "Based in [Location], available worldwide"

### 7. Header
- Fixed, transparent initially, gains background on scroll
- Name/logo left, nav links right
- Nav links in Satoshi, small caps optional
- Mobile: slide-in drawer from right, full-height
- No dark/light toggle—commit to dark theme

### 8. Footer
- Minimal: copyright, social icons, "Built with React & coffee"
- Consider: small animated element (blinking cursor, etc.)

## Motion Design

### Philosophy
One orchestrated page load sequence, minimal scattered micro-interactions. Motion should feel intentional, not decorative.

### Performance: Use LazyMotion
Code-split Framer Motion to reduce bundle size. Only load features when needed:

```tsx
// main.tsx - Load only essential features
import { LazyMotion, domAnimation } from "framer-motion"

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      {/* App content */}
    </LazyMotion>
  )
}
```

### Page Load Sequence with Staggered Children
Orchestrate sequential animations for the hero section using variants:

```tsx
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export function Hero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item}>Your Name</motion.h1>
      <motion.p variants={item}>Full Stack Developer</motion.p>
      <motion.div variants={item}>
        <Button>View Projects</Button>
      </motion.div>
    </motion.div>
  )
}
```

### Scroll Reveal with useInView Hook
Trigger animations when elements enter viewport with precise control:

```tsx
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,        // Only animate once
    margin: "-100px",  // Trigger 100px before entering
    amount: 0.3        // 30% of element must be visible
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.section>
  )
}
```

### Imperative Animations with useAnimate
For complex sequences like the hero typing effect:

```tsx
import { useAnimate, stagger } from "framer-motion"
import { useEffect } from "react"

export function HeroSequence() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const sequence = async () => {
      // Background fades in
      await animate(".hero-bg", { opacity: 1 }, { duration: 0.4 })

      // Name slides up
      await animate(".hero-name",
        { opacity: 1, y: 0 },
        { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
      )

      // Title and bio stagger in
      await animate(".hero-text",
        { opacity: 1, y: 0 },
        { duration: 0.3, delay: stagger(0.1) }
      )

      // CTA button appears
      await animate(".hero-cta",
        { opacity: 1, scale: 1 },
        { duration: 0.3 }
      )
    }

    sequence()
  }, [animate])

  return (
    <div ref={scope}>
      <div className="hero-bg" style={{ opacity: 0 }}>
        <h1 className="hero-name" style={{ opacity: 0, y: 20 }}>Name</h1>
        <p className="hero-text" style={{ opacity: 0, y: 20 }}>Title</p>
        <p className="hero-text" style={{ opacity: 0, y: 20 }}>Bio</p>
        <button className="hero-cta" style={{ opacity: 0, scale: 0.95 }}>
          Contact
        </button>
      </div>
    </div>
  )
}
```

### Scroll-Linked Progress Indicator
Smooth progress bar using useScroll and useSpring:

```tsx
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "var(--amber-500)",
        scaleX,
        transformOrigin: "0%"
      }}
    />
  )
}
```

### Exit Animations with AnimatePresence
For modals, route transitions, or conditional content:

```tsx
import { motion, AnimatePresence } from "framer-motion"

export function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

### Respect Reduced Motion Preferences
Always check for user preferences:

```tsx
// hooks/useReducedMotion.ts
import { useReducedMotion } from "framer-motion"

export function useAnimationConfig() {
  const shouldReduceMotion = useReducedMotion()

  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
}
```

### Hover & Tap States
```tsx
<motion.button
  whileHover={{ scale: 1.02, backgroundColor: "var(--amber-400)" }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.15 }}
>
  Contact Me
</motion.button>

<motion.a
  whileHover="hover"
  initial="initial"
>
  <span>View Project</span>
  <motion.span
    variants={{
      initial: { width: 0 },
      hover: { width: "100%" }
    }}
    className="underline"
    transition={{ duration: 0.2 }}
  />
</motion.a>
```

### Animation Timing Guidelines
| Element | Duration | Easing | Delay |
|---------|----------|--------|-------|
| Page load items | 400-500ms | [0.25, 0.1, 0.25, 1] | stagger 100ms |
| Scroll reveals | 500-600ms | [0.25, 0.1, 0.25, 1] | none |
| Hover states | 150-200ms | ease-out | none |
| Modals/overlays | 200-250ms | ease-out | none |
| Exit animations | 150-200ms | ease-in | none |

### Avoid
- Parallax overuse (subtle only, if at all)
- Bouncy/elastic spring animations (use damped springs)
- Infinite loops (except very subtle ambient effects)
- Animations longer than 600ms
- Layout animations without `layoutId` (causes jank)

## Project Structure
```
portfolio/
├── public/
│   ├── fonts/              # Self-hosted Satoshi, Instrument Serif
│   └── assets/
│       ├── projects/       # Project screenshots
│       └── og-image.png    # Social share image
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── SkillTag.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── Input.tsx
│   │       └── SectionHeader.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── services.ts
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   └── useReducedMotion.ts
│   ├── lib/
│   │   └── cn.ts           # clsx + tailwind-merge utility
│   ├── styles/
│   │   ├── globals.css     # CSS variables, base styles
│   │   └── fonts.css       # @font-face declarations
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts      # Extended with custom colors, fonts
├── vite.config.ts
└── package.json
```

## Implementation Phases

### Phase 1: Foundation (Setup)
1. Initialize Vite + React + TypeScript
2. Configure Tailwind with custom theme (colors, fonts, spacing)
3. Set up font loading (self-host for performance)
4. Create CSS variables in globals.css
5. Build utility functions (cn helper)
6. Configure ESLint, Prettier

### Phase 2: Design System
1. Create base components (Button, Card, Input)
2. Build SectionHeader component with consistent styling
3. Implement Layout with Header/Footer
4. Test component variations

### Phase 3: Hero & Animation Foundation
1. Build Hero section with full animation sequence
2. Set up Framer Motion providers and variants
3. Implement scroll reveal hook
4. Test animation performance

### Phase 4: Content Sections
1. About section with stats
2. Skills section with categorized tags
3. Projects section with featured layout
4. Services section with cards
5. Contact section with form

### Phase 5: Polish & Details
1. Refine all hover states
2. Add background atmospheric effects
3. Optimize images (WebP, lazy loading)
4. Accessibility audit (focus states, ARIA)
5. Test on real devices

### Phase 6: Deploy
1. SEO meta tags and OG image
2. Performance audit (Lighthouse)
3. Deploy to Netlify
4. Test contact form
5. Custom domain (optional)

## Netlify Configuration
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Performance Targets
- Lighthouse Performance: 95+
- First Contentful Paint: < 1.2s
- Cumulative Layout Shift: < 0.1
- Bundle size: < 150KB gzipped (excluding fonts)
- Font loading: swap strategy, subset if possible

## Accessibility
- All interactive elements keyboard accessible
- Focus rings visible (amber outline)
- Reduced motion: respect `prefers-reduced-motion`
- Color contrast: WCAG AA minimum
- Semantic HTML throughout
