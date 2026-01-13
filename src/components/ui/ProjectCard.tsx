import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { cn } from '@/lib/cn'
import { SkillTag } from './SkillTag'
import type { Project } from '@/data'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      className={cn(
        'group relative overflow-hidden rounded-xl border border-raised bg-raised/50',
        featured ? 'md:col-span-2' : ''
      )}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image */}
      <div
        className={cn(
          'relative overflow-hidden bg-void',
          featured ? 'aspect-[2/1]' : 'aspect-video'
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-raised to-transparent" />
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-primary md:text-2xl">{project.title}</h3>
        <p className="mt-2 text-secondary">{project.description}</p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <SkillTag key={tech} name={tech} size="sm" />
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-amber-400 transition-colors hover:text-amber-300"
            >
              View Live
              <ArrowUpRight size={16} weight="bold" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-secondary transition-colors hover:text-primary"
            >
              Source Code
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
