import { cn } from '@/lib/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-secondary">{label}</label>
      <input
        className={cn(
          'w-full rounded-lg border border-raised bg-void px-4 py-3 text-primary placeholder:text-muted',
          'transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500',
          error && 'border-rose-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-rose-500">{error}</p>}
    </div>
  )
}

export function TextArea({ label, error, className, ...props }: TextAreaProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-secondary">{label}</label>
      <textarea
        className={cn(
          'w-full rounded-lg border border-raised bg-void px-4 py-3 text-primary placeholder:text-muted',
          'transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500',
          'min-h-[150px] resize-y',
          error && 'border-rose-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-rose-500">{error}</p>}
    </div>
  )
}
