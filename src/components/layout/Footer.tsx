import { GithubLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'

const socialLinks = [
  { href: 'https://github.com', icon: GithubLogo, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: LinkedinLogo, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: TwitterLogo, label: 'Twitter' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-raised bg-base py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">
          &copy; {currentYear} Your Name. Built with React & coffee.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-primary"
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
