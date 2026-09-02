import { m, useReducedMotion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { revealVariants } from '../lib/motion'

export function Education() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <m.section id="education" variants={revealVariants(shouldReduceMotion)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="scroll-mt-20 border-b border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-12">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Education</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">Academic foundation.</h2>
        </div>
        <div className="relative ml-2 border-l border-slate-300 pl-8 dark:border-slate-700 md:ml-5 md:pl-12">
          {portfolioData.education.map((entry) => (
            <article key={`${entry.degree}-${entry.institution}`} className="relative flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 md:flex-row md:items-center md:justify-between md:p-8">
              <span className="absolute -left-[2.65rem] top-8 flex size-5 items-center justify-center rounded-full border-4 border-white bg-teal-500 dark:-left-[3.15rem] dark:border-slate-950" aria-hidden="true">
                <span className="size-1.5 rounded-full bg-white" />
              </span>
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-400">
                  <GraduationCap size={21} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{entry.degree}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{entry.institution}</p>
                  {entry.affiliation && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{entry.affiliation}</p>}
                </div>
              </div>
              <time className="shrink-0 border-l border-slate-300 pl-4 font-mono text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">{entry.period}</time>
            </article>
          ))}
        </div>
      </div>
    </m.section>
  )
}
