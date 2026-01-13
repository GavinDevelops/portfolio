export interface Skill {
  name: string
  category: 'backend' | 'frontend' | 'mobile' | 'other'
}

export const skills: Skill[] = [
  // Backend
  { name: 'Go', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },

  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },

  // Mobile
  { name: 'Swift', category: 'mobile' },

  // Other
  { name: 'Solidity', category: 'other' },
  { name: 'Git', category: 'other' },
]

export const skillCategories = [
  { id: 'backend', label: 'Backend', color: 'syntax-green' },
  { id: 'frontend', label: 'Frontend', color: 'cyan-500' },
  { id: 'mobile', label: 'Mobile', color: 'syntax-purple' },
  { id: 'other', label: 'Other', color: 'syntax-orange' },
] as const
