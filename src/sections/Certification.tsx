import { m, useReducedMotion } from 'framer-motion'
import { Award, BadgeCheck } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { revealVariants } from '../lib/motion'

export function Certification() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <m.section id="certification" variants={revealVariants(shouldReduceMotion)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="scroll-mt-20 border-b border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-12">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Certification</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">Credentials that support the craft.</h2>
        </div>

        <div className="max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/20 sm:p-8">
          {portfolioData.certifications.map((certification) => (
            <div key={certification.name} className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-amber-300 dark:bg-amber-400 dark:text-slate-950">
                  <Award size={23} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-teal-700 dark:text-teal-400">
                    <BadgeCheck size={15} aria-hidden="true" />
                    AWS certification
                  </div>
                  <h3 className="mt-3 max-w-xl text-xl font-semibold leading-7 text-slate-950 dark:text-white">{certification.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{certification.issuer}</p>
                </div>
              </div>
              <time className="shrink-0 border-l border-slate-300 pl-4 font-mono text-sm font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300">{certification.year}</time>
            </div>
          ))}
        </div>
      </div>
    </m.section>
  )
}
