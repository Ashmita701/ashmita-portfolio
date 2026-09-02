import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Code2, HeartPulse, MessageCircle, ShoppingCart, Smartphone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { ProjectEntry, ProjectVisual } from '../data/portfolio'
import { portfolioData } from '../data/portfolio'
import { buttonMotion, cardVariants, modalBackdropVariants, modalContentVariants } from '../lib/motion'

const visualIcons: Record<ProjectVisual, typeof Code2> = {
  lms: Code2,
  health: HeartPulse,
  marketplace: ShoppingCart,
  social: MessageCircle,
  mobile: Smartphone,
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null)
  const shouldReduceMotion = useReducedMotion() ?? false
  const openerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null)

      if (event.key === 'Tab') {
        const dialog = document.querySelector<HTMLElement>('[role="dialog"]')
        if (!dialog) return
        const focusable = dialog.querySelectorAll<HTMLElement>('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    const focusTimer = window.setTimeout(() => document.querySelector<HTMLButtonElement>('[aria-label="Close project details"]')?.focus(), 0)
    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      openerRef.current?.focus()
    }
  }, [selectedProject])

  return (
    <section id="projects" className="scroll-mt-20 border-b border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Selected work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">Systems made to be explored.</h2>
          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">A selection of application projects spanning web, backend, data, and mobile development.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => {
            const ProjectIcon = visualIcons[project.visual]

            return (
              <m.article
                key={project.name}
                variants={cardVariants(shouldReduceMotion)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.06 }}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-teal-800 dark:hover:shadow-black/20 ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <ProjectVisualPanel project={project} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">{project.visual}</p>
                      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{project.name}</h3>
                    </div>
                    <ProjectIcon size={20} className="shrink-0 text-slate-300 transition-colors group-hover:text-teal-500 dark:text-slate-700" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => <span key={technology} className="rounded-md bg-white px-2 py-1 font-mono text-[10px] text-slate-500 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-400 dark:ring-slate-800">{technology}</span>)}
                  </div>
                  <m.button type="button" {...buttonMotion(shouldReduceMotion)} onClick={(event) => { openerRef.current = event.currentTarget; setSelectedProject(project) }} aria-label={`View details for ${project.name}`} className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-teal-700 outline-none transition-colors hover:text-teal-500 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 dark:text-teal-400 dark:focus-visible:ring-offset-slate-900">
                    View Details
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </m.button>
                </div>
              </m.article>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectDetailsModal project={selectedProject} shouldReduceMotion={shouldReduceMotion} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectVisualPanel({ project }: { project: ProjectEntry }) {
  return (
    <div className="relative h-48 overflow-hidden border-b border-slate-200 bg-slate-100 p-5 dark:border-slate-800 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:22px_22px] dark:bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)]" />
      {project.visual === 'lms' && <LmsVisual />}
      {project.visual === 'health' && <HealthVisual />}
      {project.visual === 'marketplace' && <MarketplaceVisual />}
      {project.visual === 'social' && <SocialVisual />}
      {project.visual === 'mobile' && <MobileVisual />}
    </div>
  )
}

function LmsVisual() {
  return <div className="relative grid h-full grid-cols-[42px_1fr] gap-3 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900/90"><div className="space-y-2 rounded-lg bg-slate-900 p-2"><span className="block h-2 w-full rounded bg-teal-400" /><span className="block h-1.5 w-4/5 rounded bg-slate-600" /><span className="block h-1.5 w-full rounded bg-slate-600" /><span className="block h-1.5 w-3/5 rounded bg-slate-600" /></div><div className="space-y-3"><div className="h-5 w-2/3 rounded bg-slate-200 dark:bg-slate-700" /><div className="grid grid-cols-3 gap-2"><span className="h-12 rounded-lg bg-teal-100 dark:bg-teal-950" /><span className="h-12 rounded-lg bg-sky-100 dark:bg-sky-950" /><span className="h-12 rounded-lg bg-amber-100 dark:bg-amber-950" /></div><span className="block h-2 w-full rounded bg-slate-200 dark:bg-slate-700" /><span className="block h-2 w-4/5 rounded bg-slate-200 dark:bg-slate-700" /></div></div>
}

function HealthVisual() {
  return <div className="relative flex h-full items-center gap-3 rounded-xl border border-teal-200 bg-white/90 p-3 shadow-lg dark:border-teal-900 dark:bg-slate-900/90"><div className="flex size-20 items-center justify-center rounded-full border-[10px] border-teal-200 border-r-teal-500 dark:border-teal-950 dark:border-r-teal-400"><span className="font-mono text-xs font-semibold text-teal-700 dark:text-teal-300">care</span></div><div className="flex-1 space-y-3"><div className="flex items-center gap-2"><span className="size-7 rounded-full bg-sky-200 dark:bg-sky-900" /><span className="h-2 w-2/3 rounded bg-slate-200 dark:bg-slate-700" /></div><div className="rounded-lg bg-teal-50 p-2 dark:bg-teal-950/60"><span className="block h-2 w-1/2 rounded bg-teal-300 dark:bg-teal-700" /><span className="mt-2 block h-2 w-4/5 rounded bg-teal-100 dark:bg-teal-900" /></div></div></div>
}

function MarketplaceVisual() {
  return <div className="relative grid h-full grid-cols-2 gap-3 rounded-xl border border-slate-200 bg-white/90 p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900/90"><div className="col-span-2 flex items-center justify-between"><span className="h-4 w-1/3 rounded bg-slate-200 dark:bg-slate-700" /><span className="size-6 rounded-full bg-amber-200 dark:bg-amber-900" /></div><div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800"><span className="block h-12 rounded bg-sky-100 dark:bg-sky-950" /><span className="mt-2 block h-2 w-4/5 rounded bg-slate-300 dark:bg-slate-600" /></div><div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800"><span className="block h-12 rounded bg-amber-100 dark:bg-amber-950" /><span className="mt-2 block h-2 w-3/5 rounded bg-slate-300 dark:bg-slate-600" /></div></div>
}

function SocialVisual() {
  return <div className="relative h-full rounded-xl border border-slate-200 bg-white/90 p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900/90"><div className="flex gap-2 border-b border-slate-200 pb-2 dark:border-slate-800"><span className="size-6 rounded-full bg-fuchsia-200 dark:bg-fuchsia-900" /><span className="h-2 w-1/3 self-center rounded bg-slate-200 dark:bg-slate-700" /></div><div className="mt-3 flex gap-3"><div className="h-16 w-1/2 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/50" /><div className="flex-1 space-y-2"><span className="block h-2 w-full rounded bg-slate-200 dark:bg-slate-700" /><span className="block h-2 w-4/5 rounded bg-slate-200 dark:bg-slate-700" /><span className="block h-2 w-1/2 rounded bg-fuchsia-200 dark:bg-fuchsia-800" /></div></div><div className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-teal-500 text-white"><MessageCircle size={15} aria-hidden="true" /></div></div>
}

function MobileVisual() {
  return <div className="relative flex h-full items-center justify-center"><div className="h-36 w-20 rounded-[14px] border-4 border-slate-700 bg-slate-900 p-2 shadow-xl dark:border-slate-500"><div className="mb-3 h-1 w-6 rounded-full bg-slate-600" /><div className="space-y-2"><span className="block h-10 rounded-lg bg-teal-900" /><span className="block h-2 w-4/5 rounded bg-slate-700" /><span className="block h-2 w-full rounded bg-slate-700" /><span className="block h-8 rounded-lg bg-sky-900" /></div></div><span className="absolute right-1/4 top-8 size-3 rounded-full bg-teal-400 blur-[1px]" /></div>
}

function ProjectDetailsModal({ project, shouldReduceMotion, onClose }: { project: ProjectEntry; shouldReduceMotion: boolean; onClose: () => void }) {
  return (
    <m.div variants={modalBackdropVariants(shouldReduceMotion)} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/60 p-4 backdrop-blur-sm sm:items-center" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <m.div variants={modalContentVariants(shouldReduceMotion)} initial="hidden" animate="visible" exit="exit" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description" className="relative max-h-[90svh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 sm:p-8">
        <button type="button" onClick={onClose} aria-label="Close project details" className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full text-slate-500 outline-none hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-teal-500 dark:hover:bg-slate-800 dark:hover:text-white"><X size={18} aria-hidden="true" /></button>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Project details</p>
        <h3 id="project-dialog-title" className="mt-3 pr-10 text-2xl font-semibold text-slate-950 dark:text-white">{project.name}</h3>
        <p id="project-dialog-description" className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="mt-8 grid gap-7 sm:grid-cols-2">
          <div><h4 className="text-sm font-semibold text-slate-950 dark:text-white">Contributions</h4><ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.contributions.map((contribution) => <li key={contribution} className="flex gap-2"><Check size={16} className="mt-1 shrink-0 text-teal-500" aria-hidden="true" />{contribution}</li>)}</ul></div>
          <div><h4 className="text-sm font-semibold text-slate-950 dark:text-white">Technologies</h4><div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-md bg-slate-100 px-2.5 py-1.5 font-mono text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">{technology}</span>)}</div></div>
        </div>
      </m.div>
    </m.div>
  )
}
