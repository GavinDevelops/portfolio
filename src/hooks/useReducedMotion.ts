import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'

export function useReducedMotion() {
  return useFramerReducedMotion()
}

export function useAnimationConfig() {
  const shouldReduceMotion = useFramerReducedMotion()

  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }
}
