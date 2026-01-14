import { motion } from 'framer-motion'
import { SectionHeader, SkillTag } from '@/components/ui'
import { skills, skillCategories } from '@/data'

const categoryColorMap: Record<string, 'green' | 'cyan' | 'purple' | 'orange'> = {
  backend: 'green',
  frontend: 'cyan',
  mobile: 'purple',
  other: 'orange',
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

function CodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
      className="w-full max-w-md"
    >
      <div className="rounded-lg border border-raised bg-surface/80 backdrop-blur-sm">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-raised px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-xs text-muted">developer.ts</span>
        </div>
        {/* Code content */}
        <pre className="p-5 font-mono text-sm leading-relaxed">
          <code>
            <span className="text-syntax-purple">const</span>{' '}
            <span className="text-primary">developer</span>{' '}
            <span className="text-muted">=</span>{' '}
            <span className="text-muted">{'{'}</span>
            {'\n'}
            {'  '}<span className="text-red-400">name</span>
            <span className="text-muted">:</span>{' '}
            <span className="text-syntax-green">"Gavin Pase"</span>
            <span className="text-muted">,</span>
            {'\n'}
            {'  '}<span className="text-red-400">stack</span>
            <span className="text-muted">:</span>{' '}
            <span className="text-muted">[</span>
            <span className="text-syntax-green">"Go"</span>
            <span className="text-muted">,</span>{' '}
            <span className="text-syntax-green">"React"</span>
            <span className="text-muted">,</span>{' '}
            <span className="text-syntax-green">"Swift"</span>
            <span className="text-muted">],</span>
            {'\n'}
            {'  '}<span className="text-red-400">focus</span>
            <span className="text-muted">:</span>{' '}
            <span className="text-syntax-green">"Clean code"</span>
            <span className="text-muted">,</span>
            {'\n'}
            {'  '}<span className="text-red-400">available</span>
            <span className="text-muted">:</span>{' '}
            <span className="text-syntax-orange">true</span>
            {'\n'}
            <span className="text-muted">{'};'}</span>
          </code>
        </pre>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Skills list */}
          <div className="space-y-10">
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

          {/* Code block */}
          <div className="flex items-center justify-center lg:justify-end">
            <CodeBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
