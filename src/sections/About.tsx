import { m, useReducedMotion } from 'framer-motion'
import { Cloud, Code2, Database, Download, Gauge, GitBranch, Layers3, Server, Users } from 'lucide-react'
import cvFile from '../assets/Ashmita_Gorkhali_CV.pdf'
import { portfolioData } from '../data/portfolio'
import { buttonMotion, revealVariants } from '../lib/motion'

const highlightIcons = [Code2, Server, Database, Cloud, Gauge, Layers3, Users, GitBranch]

export function About() {
  const shouldReduceMotion = useReducedMotion() ?? false
  const { aboutHighlights } = portfolioData

  return (
    <m.section id="about" variants={revealVariants(shouldReduceMotion)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="scroll-mt-20 border-b border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <div className="relative lg:pr-4">
            <span className="absolute -left-6 top-1 hidden h-24 w-1 rounded-full bg-teal-500 lg:block" aria-hidden="true" />
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
              About me
            </p>
            <h2 className="max-w-sm text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Building with clarity from interface to infrastructure.
            </h2>
            <div className="mt-6 max-w-md space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              <p>
                I believe great products are shaped by thoughtful collaboration. I bring a clear, dependable approach to teamwork, helping ideas move from conversation to meaningful results.
              </p>
              <p>
                I keep learning through hands-on work, mentoring, and sharing what I discover. My goal is to use technology with purpose: solving real problems and making everyday experiences better.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-teal-500" />Collaborative</span>
              <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-teal-500" />Always learning</span>
              <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-teal-500" />Purposeful work</span>
            </div>
            <m.a {...buttonMotion(shouldReduceMotion)} href={cvFile} download="Ashmita_Gorkhali_CV.pdf" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 outline-none transition hover:bg-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400 dark:focus-visible:ring-offset-slate-950">
              Download CV
              <Download size={16} aria-hidden="true" />
            </m.a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((highlight, index) => {
              const HighlightIcon = highlightIcons[index]

              return (
                <article
                  key={highlight.title}
                  className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-50/50 hover:shadow-lg hover:shadow-teal-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-teal-800 dark:hover:bg-teal-950/30"
                >
                  <div className="mb-6 flex size-10 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm ring-1 ring-slate-200 transition-colors group-hover:bg-teal-600 group-hover:text-white group-hover:ring-teal-600 dark:bg-slate-950 dark:text-teal-400 dark:ring-slate-700 dark:group-hover:bg-teal-500 dark:group-hover:text-slate-950 dark:group-hover:ring-teal-500">
                    <HighlightIcon size={19} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-950 dark:text-white">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{highlight.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </m.section>
  )
}
