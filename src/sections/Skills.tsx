import { m, useReducedMotion } from 'framer-motion'
import { Braces, Cloud, Database, Palette, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { cardVariants } from '../lib/motion'

const skillGroupIcons: Record<string, LucideIcon> = {
  'Languages and Frameworks': Braces,
  Database,
  'UI Libraries': Palette,
  'DevOps & Tools': Wrench,
  Cloud,
}

export function Skills() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section id="skills" className="scroll-mt-20 border-b border-slate-200/80 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-3xl border-l-2 border-teal-500 pl-5 sm:pl-6">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Skills</p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">Technology with purpose, from screen to system.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">The languages, frameworks, and tools I bring together to shape useful interfaces, dependable services, and maintainable products.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.technicalSkills.map((group, index) => {
            const GroupIcon = skillGroupIcons[group.category]

            return (
              <m.article
                key={group.category}
                variants={cardVariants(shouldReduceMotion)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-teal-800 dark:hover:shadow-black/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-950/60 dark:text-teal-400 dark:group-hover:bg-teal-500 dark:group-hover:text-slate-950">
                    <GroupIcon size={19} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-950 dark:text-white">{group.category}</h3>
                  </div>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-xs text-slate-600 transition-colors group-hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:group-hover:border-slate-600">
                      {portfolioData.skillIconUrls[skill] && <img src={portfolioData.skillIconUrls[skill]} alt="" loading="lazy" className="mr-1.5 inline-block size-4 rounded-sm bg-white p-0.5 object-contain align-middle dark:bg-slate-100" />}
                      {skill}
                    </li>
                  ))}
                </ul>
              </m.article>
            )
          })}
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-400">
              <Wrench size={19} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">Soft Skills</h3>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Soft skills">
            {portfolioData.softSkills.map((skill) => (
              <li key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
