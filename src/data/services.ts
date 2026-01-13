export interface Service {
  id: string
  title: string
  description: string
  icon: 'code' | 'api' | 'mobile'
}

export const services: Service[] = [
  {
    id: 'fullstack',
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications built with React and Tailwind CSS.',
    icon: 'code',
  },
  {
    id: 'api',
    title: 'Backend & APIs',
    description:
      'Clean, well-documented REST APIs built with Go to power your applications.',
    icon: 'api',
  },
  {
    id: 'mobile',
    title: 'iOS Development',
    description:
      'Native iOS applications built with Swift for a smooth, polished user experience.',
    icon: 'mobile',
  },
]
