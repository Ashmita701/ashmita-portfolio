import { m, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Braces, Database, Server } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { buttonMotion, revealVariants } from '../lib/motion'

export function Hero() {
  return <HeroContent />
}

function HeroContent() {
  const shouldReduceMotion = useReducedMotion() ?? false
  const { personal, professionalSummary, highlightedTechnologies } = portfolioData
  const reveal = revealVariants(shouldReduceMotion)

  return (
    <section id="home" className="relative isolate overflow-hidden scroll-mt-20 border-b border-slate-200/80 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(20,184,166,0.13),transparent_28%),radial-gradient(circle_at_10%_85%,rgba(14,165,233,0.08),transparent_25%)] dark:bg-[radial-gradient(circle_at_85%_20%,rgba(45,212,191,0.12),transparent_28%),radial-gradient(circle_at_10%_85%,rgba(14,165,233,0.08),transparent_25%)]" />
      <div className="mx-auto grid min-w-0 min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(440px,1.1fr)] lg:px-8 lg:py-24">
        <div className="max-w-2xl min-w-0">
          <m.p variants={reveal} initial="hidden" animate="visible" className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            <span className="h-px w-8 bg-teal-500" aria-hidden="true" />
            {personal.role}
          </m.p>
          <m.h1 variants={reveal} initial="hidden" animate="visible" transition={{ delay: shouldReduceMotion ? 0 : 0.08 }} className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
            {personal.name}
          </m.h1>
          <m.p variants={reveal} initial="hidden" animate="visible" transition={{ delay: shouldReduceMotion ? 0 : 0.16 }} className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {professionalSummary}
          </m.p>
          <m.div variants={reveal} initial="hidden" animate="visible" transition={{ delay: shouldReduceMotion ? 0 : 0.24 }} className="mt-9 flex flex-wrap gap-4">
            <m.a {...buttonMotion(shouldReduceMotion)} href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 outline-none transition hover:bg-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400 dark:focus-visible:ring-offset-slate-950">
              View My Work
              <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </m.a>
            <m.a {...buttonMotion(shouldReduceMotion)} href="#contact" className="inline-flex items-center rounded-full border border-slate-300 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-700 outline-none transition hover:border-teal-500 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300 dark:focus-visible:ring-offset-slate-950">
              Contact Me
            </m.a>
          </m.div>
          <m.div variants={reveal} initial="hidden" animate="visible" transition={{ delay: shouldReduceMotion ? 0 : 0.32 }} className="mt-10 flex flex-wrap gap-2" aria-label="Highlighted technologies">
            {highlightedTechnologies.map((technology) => <span key={technology} className="rounded-md border border-slate-200 bg-white/70 px-3 py-1.5 font-mono text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">{technology}</span>)}
          </m.div>
        </div>
        <m.div variants={reveal} initial="hidden" animate="visible" transition={{ delay: shouldReduceMotion ? 0 : 0.18 }} className="relative mx-auto min-w-0 w-full max-w-xl" aria-label="Illustration of a full stack application workflow" role="img">
          <div className="relative h-[280px] aspect-auto overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-2xl shadow-slate-300/30 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/30 sm:h-auto sm:aspect-[5/4] sm:min-h-[360px] sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)]" />
            <div className="relative flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
              <span className="size-2 rounded-full bg-rose-400" /><span className="size-2 rounded-full bg-amber-400" /><span className="size-2 rounded-full bg-emerald-400" />
              <span className="ml-3 truncate font-mono text-[11px] text-slate-400">ashmita.dev / architecture</span>
            </div>
            <div className="relative mt-5 rounded-xl border border-slate-200 bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-300 shadow-xl dark:border-slate-700">
              <p><span className="text-fuchsia-400">const</span> <span className="text-sky-300">build</span> = <span className="text-amber-300">()</span> <span className="text-fuchsia-400">=&gt;</span> {'{'}</p>
              <p className="pl-4"><span className="text-fuchsia-400">return</span> <span className="text-teal-300">&lt;ReliableSystems</span></p>
              <p className="pl-8 text-slate-400">frontend=<span className="text-amber-300">"React + Next.js"</span></p>
              <p className="pl-8 text-slate-400">backend=<span className="text-amber-300">"NestJS + Node.js"</span></p>
              <p className="pl-4"><span className="text-teal-300">/&gt;</span></p><p>{'}'}</p>
              <span className="absolute bottom-4 right-4 h-4 w-px animate-pulse bg-teal-400" aria-hidden="true" />
            </div>
            <div className="relative mt-6 grid grid-cols-3 items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center gap-2 rounded-xl border border-teal-200 bg-teal-50/90 p-3 text-center dark:border-teal-900 dark:bg-teal-950/60"><Braces size={19} className="text-teal-600 dark:text-teal-400" aria-hidden="true" /><span className="font-mono text-[10px] text-slate-600 dark:text-slate-300">CLIENT</span></div>
              <div className="relative h-px bg-teal-300 dark:bg-teal-800" aria-hidden="true"><span className="absolute -right-1 -top-1 size-2 rounded-full bg-teal-500" /></div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-sky-200 bg-sky-50/90 p-3 text-center dark:border-sky-900 dark:bg-sky-950/60"><Server size={19} className="text-sky-600 dark:text-sky-400" aria-hidden="true" /><span className="font-mono text-[10px] text-slate-600 dark:text-slate-300">API</span></div>
              <div className="absolute left-[16.5%] top-1/2 h-12 w-px bg-slate-300 dark:bg-slate-700" aria-hidden="true" /><div className="absolute right-[16.5%] top-1/2 h-12 w-px bg-slate-300 dark:bg-slate-700" aria-hidden="true" /><div className="col-start-2 h-px bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
              <div className="flex flex-col items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/90 p-3 text-center dark:border-amber-900 dark:bg-amber-950/60"><Database size={19} className="text-amber-600 dark:text-amber-400" aria-hidden="true" /><span className="font-mono text-[10px] text-slate-600 dark:text-slate-300">DATA</span></div>
            </div>
            <div className="absolute bottom-4 left-5 flex items-center gap-2 font-mono text-[10px] text-slate-400 sm:left-7"><span className="size-1.5 rounded-full bg-emerald-400" /> system.ready</div>
            <span className="absolute bottom-5 right-5 font-mono text-[10px] text-slate-400 sm:right-7">REST / CLOUD</span>
          </div>
        </m.div>
      </div>
    </section>
  )
}
