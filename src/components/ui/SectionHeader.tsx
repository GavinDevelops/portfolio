import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  const { ref, animate, initial, variants, transition } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      variants={variants}
      transition={transition}
      className="mb-12 md:mb-16"
    >
      <h2 className="font-serif text-3xl text-primary md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-lg text-secondary">{subtitle}</p>}
    </motion.div>
  )
}
