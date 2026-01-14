import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

interface UseScrollRevealOptions {
  once?: boolean
  margin?: string
  amount?: number
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { once = true, margin = '-100px', amount = 0.3 } = options
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once, margin: margin as `${number}px`, amount })

  const variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }

  return {
    ref,
    isInView,
    animate: isInView ? 'visible' : 'hidden',
    initial: 'hidden',
    variants,
    transition,
  }
}
