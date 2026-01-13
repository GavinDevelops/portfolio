import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-xl border border-raised bg-raised/50 p-6',
        hover && 'transition-colors hover:border-muted hover:bg-raised',
        className
      )}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
