export interface Skill {
  name: string
  category: 'backend' | 'frontend' | 'database' | 'blockchain'
}

export const skills: Skill[] = [
  // Backend
  { name: 'Go', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },

  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },

  // Databases
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'MongoDB', category: 'database' },

  // Blockchain
  { name: 'Solidity', category: 'blockchain' },
]

export const skillCategories = [
  { id: 'backend', label: 'Backend', color: 'syntax-green' },
  { id: 'frontend', label: 'Frontend', color: 'cyan-500' },
  { id: 'database', label: 'Databases', color: 'syntax-purple' },
  { id: 'blockchain', label: 'Blockchain', color: 'syntax-orange' },
] as const
