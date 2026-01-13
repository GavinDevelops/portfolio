export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Full Stack Application',
    description: 'A cross-platform application with web and mobile clients powered by a Go backend.',
    longDescription:
      'Built a complete application featuring a Go REST API, React web frontend with Tailwind styling, and a native Swift iOS app. Includes user authentication and real-time data sync.',
    image: '/assets/projects/fullstack-app.svg',
    technologies: ['Go', 'React', 'Swift', 'Tailwind CSS'],
    // liveUrl: 'https://example.com',
    // githubUrl: 'https://github.com/gavinpase/project',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Personal Portfolio',
    description: 'This website — a modern portfolio built with React and Tailwind.',
    longDescription:
      'Designed and developed a responsive portfolio site featuring smooth animations with Framer Motion and a clean, dark aesthetic.',
    image: '/assets/projects/portfolio.svg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/gavinpase/portfolio',
    featured: true,
  },
]
