import { motion } from 'framer-motion'
import {
  Code,
  PlugsConnected,
  Database,
  CurrencyEth,
  Lightbulb,
} from '@phosphor-icons/react'
import { SectionHeader, Card } from '@/components/ui'
import { services } from '@/data'

const iconMap = {
  code: Code,
  api: PlugsConnected,
  database: Database,
  blockchain: CurrencyEth,
  consulting: Lightbulb,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          title="Services"
          subtitle="How I can help bring your ideas to life."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon]

            return (
              <motion.div key={service.id} variants={item}>
                <Card className="h-full">
                  <div className="mb-4 inline-flex rounded-lg bg-amber-500/10 p-3 text-amber-400">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <h3 className="font-serif text-xl text-primary">{service.title}</h3>
                  <p className="mt-2 text-secondary">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
