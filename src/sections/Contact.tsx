import { m, useReducedMotion } from 'framer-motion'
import { GitBranch, Mail, MapPin, Phone, Send } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { revealVariants } from '../lib/motion'

export function Contact() {
  const { personal, socialContactLinks } = portfolioData
  const githubUrl = `https://github.com/${socialContactLinks.githubUsername}`
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <m.section id="contact" variants={revealVariants(shouldReduceMotion)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="scroll-mt-20 border-b border-slate-200/80 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">Let’s build something useful.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60 sm:p-8">
              <p className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{personal.name}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{personal.role}</p>
              <div className="mt-8 space-y-3">
                <a href={`mailto:${socialContactLinks.email}`} className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition hover:border-teal-300 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-800 dark:text-slate-200 dark:hover:border-teal-800 dark:hover:text-teal-300">
                  <Mail size={18} className="text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <span className="break-all">{socialContactLinks.email}</span>
                </a>
                <a href={`tel:${socialContactLinks.phone}`} className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition hover:border-teal-300 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-800 dark:text-slate-200 dark:hover:border-teal-800 dark:hover:text-teal-300">
                  <Phone size={18} className="text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <span>{socialContactLinks.phone}</span>
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition hover:border-teal-300 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-800 dark:text-slate-200 dark:hover:border-teal-800 dark:hover:text-teal-300">
                  <GitBranch size={18} className="text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  <span>{socialContactLinks.githubUsername}</span>
                </a>
              </div>
              <div className="mt-8 flex items-start gap-3 border-t border-slate-200 pt-6 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
                <MapPin size={18} className="mt-0.5 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>
          <form onSubmit={(event) => event.preventDefault()} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
                <input name="name" type="text" autoComplete="name" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
                <input name="email" type="email" autoComplete="email" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
              <textarea name="message" rows={6} className="resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </label>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">This frontend-only form does not send or store messages yet.</p>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white outline-none transition hover:bg-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400 dark:focus-visible:ring-offset-slate-900">
                Submit
                <Send size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </m.section>
  )
}
