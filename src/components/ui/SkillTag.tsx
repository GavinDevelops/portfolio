import { cn } from '@/lib/cn'

interface SkillTagProps {
  name: string
  color?: 'green' | 'cyan' | 'purple' | 'orange'
  size?: 'sm' | 'md'
}

const colorMap = {
  green: 'bg-syntax-green/10 text-syntax-green border-syntax-green/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  purple: 'bg-syntax-purple/10 text-syntax-purple border-syntax-purple/20',
  orange: 'bg-syntax-orange/10 text-syntax-orange border-syntax-orange/20',
}

export function SkillTag({ name, color = 'cyan', size = 'md' }: SkillTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border font-mono',
        colorMap[color],
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      )}
    >
      {name}
    </span>
  )
}
