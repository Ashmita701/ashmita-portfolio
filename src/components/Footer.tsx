import { GitBranch, Mail } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export function Footer() {
  const { personal, navigation } = portfolioData
  const { email, githubUsername } = portfolioData.socialContactLinks
  const footerNavigation = navigation.filter((item) => item.label !== 'Home')

  return (
    <footer className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-slate-200 pb-10 dark:border-slate-800 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">{personal.name}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{personal.role}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-slate-600 outline-none transition-colors hover:text-teal-600 focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-slate-300 dark:hover:text-teal-400">
              <Mail size={16} aria-hidden="true" />
              {email}
            </a>
            {githubUsername && (
              <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-600 outline-none transition-colors hover:text-teal-600 focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-slate-300 dark:hover:text-teal-400">
                <GitBranch size={16} aria-hidden="true" />
                GitHub
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
            {footerNavigation.map((item) => (
              <a key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-slate-500 outline-none transition-colors hover:text-teal-600 focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-slate-400 dark:hover:text-teal-400">
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} {personal.name}</p>
        </div>
      </div>
    </footer>
  )
}
