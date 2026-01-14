import { GithubLogo } from '@phosphor-icons/react'

const FiverrLogo = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h1.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.878-.476l1.449.508c-.39.81-1.239 1.327-2.327 1.327-1.6 0-2.651-1.073-2.651-2.593 0-1.52 1.05-2.593 2.593-2.593 1.474 0 2.466.992 2.466 2.505 0 .2-.03.4-.055.464zm-2.41-1.67c-.488 0-.79.263-.906.732h1.787c-.088-.469-.39-.732-.88-.732zm-4.166-1.147v4.874h-1.61v-4.874h1.61zm-2.259 0v4.874h-1.6v-.74c-.263.574-.634.74-1.162.74h-.191c-1.424 0-2.269-1.082-2.269-2.593 0-1.51.845-2.593 2.27-2.593h.19c.528 0 .899.166 1.162.74v-.428h1.6zm-3.23 2.462c0 .712.37 1.2.975 1.2.604 0 .974-.488.974-1.2s-.37-1.2-.974-1.2c-.604 0-.975.488-.975 1.2z"/>
  </svg>
)

const socialLinks = [
  { href: 'https://github.com/GavinDevelops', icon: GithubLogo, label: 'GitHub' },
  { href: 'https://fiverr.com/gavindevelops', icon: FiverrLogo, label: 'Fiverr' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-raised bg-surface py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">
          &copy; {currentYear} Gavin Pase. Built with React & coffee.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-red-500"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
