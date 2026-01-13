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
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory and payment processing.',
    longDescription:
      'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart, Stripe integration, and an admin dashboard.',
    image: '/assets/projects/ecommerce.svg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'DeFi Dashboard',
    description: 'Web3 dashboard for tracking DeFi positions across multiple protocols.',
    longDescription:
      'Real-time portfolio tracking, yield farming analytics, and transaction history for Ethereum and EVM-compatible chains.',
    image: '/assets/projects/defi.svg',
    technologies: ['React', 'TypeScript', 'Solidity', 'ethers.js', 'The Graph'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'API Gateway Service',
    description: 'High-performance API gateway with rate limiting and caching.',
    longDescription:
      'Microservices architecture with Go-based API gateway handling authentication, rate limiting, request routing, and response caching.',
    image: '/assets/projects/api-gateway.svg',
    technologies: ['Go', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/username/project',
    featured: false,
  },
  {
    id: 'project-4',
    title: 'Real-time Analytics',
    description: 'Event-driven analytics platform processing millions of events.',
    longDescription:
      'Scalable analytics system with real-time data processing, custom dashboards, and automated alerting.',
    image: '/assets/projects/analytics.svg',
    technologies: ['Python', 'Go', 'MongoDB', 'Redis', 'Kafka'],
    featured: false,
  },
]
