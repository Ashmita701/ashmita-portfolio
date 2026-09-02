import { m, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Atom, Braces, Cloud, Container, Database, GitBranch, Layers3, Network, Server, Smartphone } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { buttonMotion } from '../lib/motion'

const technologyIcons: Record<string, LucideIcon> = {
  React: Atom,
  TypeScript: Braces,
  'Next.js': Layers3,
  'Node.js': Server,
  NestJS: Network,
  PostgreSQL: Database,
  AWS: Cloud,
  Docker: Container,
  Git: GitBranch,
  'React Native': Smartphone,
}

export function TechnologyShowcase() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section aria-label="Technology showcase" className="border-b border-slate-200/80 bg-white/70 dark:border-slate-800/80 dark:bg-slate-900/40">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-5 lg:px-8">
        <p className="hidden shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:block">Built with</p>
        <div className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex min-w-max items-center gap-2 sm:gap-3">
            {portfolioData.technologyShowcase.map((technology) => {
              const TechnologyIcon = technologyIcons[technology]
              return (
                <li key={technology}>
                  <m.span {...buttonMotion(shouldReduceMotion)} className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-700 dark:hover:bg-teal-950/50 dark:hover:text-teal-300">
                    <TechnologyIcon size={16} strokeWidth={1.8} className="text-slate-400 transition-colors group-hover:text-teal-500 dark:text-slate-500 dark:group-hover:text-teal-400" aria-hidden="true" />
                    {technology}
                  </m.span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
