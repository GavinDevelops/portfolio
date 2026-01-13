import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui'
import { useScrollReveal } from '@/hooks'

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '12', label: 'Happy Clients' },
]

export function About() {
  const { ref, animate, initial, variants, transition } = useScrollReveal()

  return (
    <section id="about" className="section bg-base">
      <div className="container">
        <SectionHeader
          title="About Me"
          subtitle="Passionate about building scalable applications and solving complex problems."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            variants={variants}
            transition={transition}
            className="space-y-6"
          >
            <p className="text-lg text-secondary">
              I&apos;m a full stack developer with a passion for creating elegant solutions
              to complex problems. With experience spanning backend services, frontend
              applications, and blockchain development, I bring a holistic approach to
              every project.
            </p>
            <p className="text-lg text-secondary">
              My expertise includes building high-performance APIs with Go and Node.js,
              crafting responsive user interfaces with React, and developing secure smart
              contracts on Ethereum. I believe in writing clean, maintainable code that
              scales.
            </p>
            <p className="text-lg text-secondary">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-mono text-3xl text-amber-400 md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
