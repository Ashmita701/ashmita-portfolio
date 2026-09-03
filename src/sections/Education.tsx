import { m, useReducedMotion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { cardVariants, revealVariants } from '../lib/motion'

export function Education() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <m.section id="education" variants={revealVariants(shouldReduceMotion)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="scroll-mt-20 border-b border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-3xl border-l-2 border-teal-500 pl-5 sm:pl-6">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Education</p>
                  </div>
        <div className="relative ml-2 border-l border-slate-300 pl-8 dark:border-slate-700 md:ml-5 md:pl-12">
          <div className="space-y-4">
          {portfolioData.education.map((entry, index) => (
            <m.article
              key={`${entry.degree}-${entry.institution}`}
              variants={cardVariants(shouldReduceMotion)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.06 }}
              className="group relative flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-300 hover:bg-white hover:shadow-xl hover:shadow-teal-900/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-teal-800 dark:hover:bg-slate-900 dark:hover:shadow-black/20 md:flex-row md:items-center md:justify-between md:p-8"
            >
              <span className="absolute -left-[2.65rem] top-8 flex size-5 items-center justify-center rounded-full border-4 border-white bg-teal-500 dark:-left-[3.15rem] dark:border-slate-950" aria-hidden="true">
                <span className="size-1.5 rounded-full bg-white" />
              </span>
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-teal-100 transition-colors group-hover:bg-teal-600 group-hover:text-white group-hover:ring-teal-600 dark:bg-teal-950/60 dark:text-teal-400 dark:ring-teal-900 dark:group-hover:bg-teal-500 dark:group-hover:text-slate-950 dark:group-hover:ring-teal-500">
                  <GraduationCap size={21} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 transition-colors group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">{entry.degree}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{entry.institution}</p>
                  {entry.affiliation && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{entry.affiliation}</p>}
                </div>
              </div>
              <time className="shrink-0 border-t border-slate-200 pt-4 font-mono text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-300 md:border-l md:border-t-0 md:pl-6 md:pt-0">{entry.period}</time>
            </m.article>
          ))}
          </div>
        </div>
      </div>
    </m.section>
  )
}
