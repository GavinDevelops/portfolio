import { motion } from 'framer-motion'
import { SectionHeader, ProjectCard } from '@/components/ui'
import { projects } from '@/data'

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

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section bg-surface">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work and side projects."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} featured />
            </motion.div>
          ))}
        </motion.div>

        {otherProjects.length > 0 && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            {otherProjects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
