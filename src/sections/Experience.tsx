import { m, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { cardVariants } from '../lib/motion'

export function Experience() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section id="experience" className="scroll-mt-20 border-b border-slate-200/80 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            A steady practice of building useful systems.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            A timeline of roles focused on scalable applications, secure services, and thoughtful collaboration.
          </p>
        </div>

        <div className="relative ml-2 border-l border-slate-300 pl-8 dark:border-slate-700 md:ml-5 md:pl-12">
          <div className="space-y-10">
            {portfolioData.experience.map((entry, index) => (
              <m.article
                key={`${entry.company}-${entry.date}`}
                variants={cardVariants(shouldReduceMotion)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                className={`relative rounded-2xl border p-6 transition-colors md:p-8 ${entry.isCurrent ? 'border-teal-300 bg-white shadow-xl shadow-teal-950/5 dark:border-teal-800 dark:bg-slate-900' : 'border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-900/40'}`}
              >
                <span
                  className={`absolute -left-[2.65rem] top-8 flex size-5 items-center justify-center rounded-full border-4 border-slate-50 md:-left-[3.15rem] dark:border-slate-950 ${entry.isCurrent ? 'bg-teal-500' : 'bg-slate-300 dark:bg-slate-600'}`}
                  aria-hidden="true"
                >
                  {entry.isCurrent && <span className="size-1.5 rounded-full bg-white" />}
                </span>
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{entry.company}</h3>
                      {entry.isCurrent && (
                        <span className="rounded-full bg-teal-100 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                          Current role
                        </span>
                      )}
                    </div>
                    <p className={`mt-2 font-medium ${entry.isCurrent ? 'text-teal-700 dark:text-teal-300' : 'text-slate-600 dark:text-slate-300'}`}>
                      {entry.title}
                    </p>
                    {entry.location && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{entry.location}</p>}
                  </div>
                  <time className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">{entry.date}</time>
                </div>
                <ul className="mt-7 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-3 dark:text-slate-400">
                  {entry.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <Check size={16} className="mt-1 shrink-0 text-teal-500" aria-hidden="true" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </m.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
