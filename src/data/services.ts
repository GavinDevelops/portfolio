export interface Service {
  id: string
  title: string
  description: string
  icon: 'code' | 'api' | 'database' | 'blockchain' | 'consulting'
}

export const services: Service[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description:
      'End-to-end web applications with modern frameworks, responsive design, and scalable architecture.',
    icon: 'code',
  },
  {
    id: 'api',
    title: 'API Architecture',
    description:
      'RESTful and GraphQL APIs designed for performance, security, and seamless integration.',
    icon: 'api',
  },
  {
    id: 'database',
    title: 'Database Design',
    description:
      'Optimized database schemas, query performance tuning, and data migration strategies.',
    icon: 'database',
  },
  {
    id: 'blockchain',
    title: 'Smart Contracts',
    description:
      'Secure Solidity smart contracts, DeFi protocols, and Web3 integrations.',
    icon: 'blockchain',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description:
      'Architecture reviews, code audits, and strategic technical guidance for your projects.',
    icon: 'consulting',
  },
]
