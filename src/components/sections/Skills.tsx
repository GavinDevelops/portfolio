import { motion } from 'framer-motion'
import { SectionHeader, SkillTag } from '@/components/ui'
import { skills, skillCategories } from '@/data'

const categoryColorMap: Record<string, 'green' | 'cyan' | 'purple' | 'orange'> = {
  backend: 'green',
  frontend: 'cyan',
  database: 'purple',
  blockchain: 'orange',
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        <div className="space-y-12">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category.id)

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">
                  {category.label}
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {categorySkills.map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                      <SkillTag
                        name={skill.name}
                        color={categoryColorMap[skill.category]}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
