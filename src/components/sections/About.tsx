import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui'
import { useScrollReveal } from '@/hooks'

const focus = [
  { label: 'Web Apps', description: 'React & Tailwind' },
  { label: 'Backend', description: 'Go & APIs' },
  { label: 'Mobile', description: 'Swift' },
]

export function About() {
  const { ref, animate, initial, variants, transition } = useScrollReveal()

  return (
    <section id="about" className="section bg-base">
      <div className="container">
        <SectionHeader
          title="About Me"
          subtitle="A developer who loves building things that work."
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
              I&apos;m Gavin, a full stack developer passionate about creating clean,
              functional applications. I enjoy working across the entire stack—from
              building responsive interfaces to designing backend services.
            </p>
            <p className="text-lg text-secondary">
              My current toolkit includes Go for backend development, React and
              Tailwind for web interfaces, and Swift for mobile. I&apos;m also
              exploring blockchain development with Solidity on the side.
            </p>
            <p className="text-lg text-secondary">
              I&apos;m always learning and looking for interesting projects to work on.
              If you have an idea you&apos;d like to bring to life, I&apos;d love to hear about it.
            </p>
          </motion.div>

          {/* Photo & Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10"
          >
            {/* Profile Photo */}
            <div className="relative overflow-visible">
              <div className="h-48 w-48 overflow-hidden rounded-full border-2 border-raised bg-raised md:h-64 md:w-64 lg:h-80 lg:w-80">
                <img
                  src="/assets/profile.jpg"
                  alt="Gavin Pase"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-red-500/20" />
            </div>

            {/* Focus Areas */}
            <div className="grid w-full grid-cols-3 gap-8">
              {focus.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-mono text-lg text-amber-400 md:text-xl">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm text-muted">{item.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
