# CLAUDE.md - Portfolio Project Guidelines

## Project Overview
Personal portfolio website for a freelance full stack developer. Built with React, TypeScript, and Tailwind CSS. Deployed on Netlify.

## Quick Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## Tech Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)
- Netlify Forms (contact form)

## Project Structure
```
src/
├── components/
│   ├── layout/      # Header, Footer, Layout wrapper
│   ├── sections/    # Page sections (Hero, About, Skills, etc.)
│   └── ui/          # Reusable UI components
├── data/            # Static data (projects, skills, services)
├── hooks/           # Custom React hooks
├── styles/          # Global styles
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## Code Conventions

### TypeScript
- Use strict mode
- Define interfaces for all props and data structures
- Avoid `any` type - use proper typing
- Export types from component files when needed elsewhere

### React Components
- Use functional components with hooks
- Props interface named `{ComponentName}Props`
- One component per file
- Keep components focused and small

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button className={cn(baseStyles, variants[variant])} onClick={onClick}>
      {children}
    </button>
  );
}
```

### Tailwind CSS
- Use Tailwind utility classes directly
- Extract common patterns to components, not CSS
- Use `cn()` helper (clsx + tailwind-merge) for conditional classes
- Follow mobile-first responsive design

### File Naming
- Components: PascalCase (`ProjectCard.tsx`)
- Hooks: camelCase with `use` prefix (`useScrollAnimation.ts`)
- Data files: camelCase (`projects.ts`)
- Style files: kebab-case if needed

## Data Files

### Projects (`src/data/projects.ts`)
```ts
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
```

### Skills (`src/data/skills.ts`)
```ts
interface Skill {
  name: string;
  icon: string;
  category: 'backend' | 'frontend' | 'database' | 'blockchain';
  proficiency: number; // 1-5
}
```

## Styling Guidelines

### Colors (Tailwind Config)
- Primary: blue-500
- Secondary: emerald-500
- Accent: violet-500
- Use slate for grays in dark mode
- Use gray for light mode

### Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-6xl mx-auto px-4`
- Component gaps: `gap-4`, `gap-6`, or `gap-8`

### Typography
- Headings: `font-bold`
- Section titles: `text-3xl md:text-4xl`
- Body: `text-base` or `text-lg`
- Muted text: `text-gray-600 dark:text-gray-400`

## Animation Guidelines

### Performance
- Use `LazyMotion` with `domAnimation` to code-split Framer Motion
- Import only needed features to reduce bundle size

### Staggered Entrance (Hero/Lists)
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
}

<motion.div variants={container} initial="hidden" animate="show">
  <motion.h1 variants={item}>Title</motion.h1>
  <motion.p variants={item}>Content</motion.p>
</motion.div>
```

### Scroll Reveal with useInView
```tsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.3 })

<motion.section
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
/>
```

### Imperative Sequences with useAnimate
```tsx
const [scope, animate] = useAnimate()

useEffect(() => {
  const run = async () => {
    await animate(".bg", { opacity: 1 }, { duration: 0.4 })
    await animate(".text", { opacity: 1, y: 0 }, { delay: stagger(0.1) })
  }
  run()
}, [animate])
```

### Exit Animations
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    />
  )}
</AnimatePresence>
```

### Timing Guidelines
| Element | Duration | Easing |
|---------|----------|--------|
| Page load | 400-500ms | [0.25, 0.1, 0.25, 1] |
| Scroll reveal | 500-600ms | [0.25, 0.1, 0.25, 1] |
| Hover/tap | 150-200ms | ease-out |
| Exit | 150-200ms | ease-in |

### Accessibility
- Always use `useReducedMotion()` hook to respect user preferences
- Provide `duration: 0` fallback for reduced motion users

## Contact Form (Netlify Forms)
```tsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* form fields */}
</form>
```

## SEO Checklist
- [ ] Meta title and description in index.html
- [ ] Open Graph tags for social sharing
- [ ] Semantic HTML (header, main, section, footer)
- [ ] Alt text on all images
- [ ] Proper heading hierarchy (h1 -> h2 -> h3)

## Performance Checklist
- [ ] Lazy load images below the fold
- [ ] Optimize and compress images
- [ ] Code split large dependencies
- [ ] Preload critical fonts
- [ ] Minimize third-party scripts

## Deployment (Netlify)
1. Push code to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Enable form detection for contact form

## Environment Variables
None required for basic portfolio. If adding integrations:
```
VITE_ANALYTICS_ID=xxx
VITE_FORMSPREE_ID=xxx
```

## Common Tasks

### Adding a New Project
1. Add project data to `src/data/projects.ts`
2. Add project image to `public/assets/projects/`
3. Ensure image is optimized (WebP, < 200KB)

### Adding a New Skill
1. Add skill to `src/data/skills.ts`
2. Ensure icon exists in Lucide or add custom SVG

### Updating Personal Info
- Hero text: `src/components/sections/Hero.tsx`
- About content: `src/components/sections/About.tsx`
- Social links: `src/data/social.ts` or inline in components

## Testing
- Test all navigation links
- Test contact form submission
- Test dark/light mode toggle
- Test on mobile devices (iOS Safari, Android Chrome)
- Run Lighthouse audit before deploying

## Frontend
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>
