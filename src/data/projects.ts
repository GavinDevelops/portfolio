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
    id: 'adjuster-photo-web',
    title: 'Adjuster Photo',
    description: 'Full-stack image management platform with location-based metadata, multi-device sync, and an admin dashboard.',
    longDescription:
      'Full-stack image management platform built with Go and React. Features location-based metadata, multi-device sync, JWT authentication with token refresh, and an admin dashboard. Backed by PostgreSQL with automatic schema migrations.',
    image: '/assets/adjusterPhotoWebApp.png',
    technologies: ['Go', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Traefik'],
    liveUrl: 'https://app.adjusterphoto.com/',
    featured: true,
  },
  {
    id: 'adjuster-photo-ios',
    title: 'Adjuster Photo iOS',
    description: 'Native iOS app for insurance adjusters to capture and upload property damage photos with offline-first sync.',
    longDescription:
      'A native iOS app built with Swift/SwiftUI for insurance adjusters to capture and upload property damage photos. Features offline-first architecture with automatic sync, multi-camera zoom support, and secure JWT authentication. Photos are tagged with location, damage category, and directional metadata for streamlined claims processing.',
    image: '/assets/projects/adjuster-ios.svg',
    technologies: ['Swift', 'SwiftUI', 'iOS', 'Core Data'],
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
    githubUrl: 'https://github.com/GavinDevelops/portfolio',
    featured: true,
  },
]
