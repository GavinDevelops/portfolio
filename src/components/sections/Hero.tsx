import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'
import { Button } from '@/components/ui'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.h1
            variants={item}
            className="font-serif text-4xl text-primary md:text-6xl lg:text-7xl"
          >
            Gavin Pase
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl text-secondary md:text-2xl"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-sm text-muted md:text-base"
          >
            // turning ideas into reality with clean code
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
