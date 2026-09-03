import { m, useReducedMotion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { portfolioData } from '../data/portfolio'
import { revealVariants } from '../lib/motion'

export function Contact() {
  const { personal, socialContactLinks } = portfolioData
  const shouldReduceMotion = useReducedMotion() ?? false

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  useEffect(() => {
    emailjs.init({
      publicKey: "z9xlaNoMqh12eTrG8",
      limitRate: { id: "app", throttle: 300 },
    });
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      return
    }

    setIsLoading(true)
    setStatus(null)

    try {
      await emailjs.send("service_m4rtowv", "template_kxgysy2", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: socialContactLinks.email,
      });

      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <m.section id="contact" variants={revealVariants(shouldReduceMotion)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="scroll-mt-20 border-b border-slate-200/80 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-3xl border-l-2 border-teal-500 pl-5 sm:pl-6">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Contact</p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">Let’s build something useful.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-8">
              <div className="absolute -right-10 -top-10 size-28 rounded-full bg-teal-100/70 dark:bg-teal-950/50" aria-hidden="true" />
              <div className="relative">
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
                <a href={socialContactLinks.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition hover:border-teal-300 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-800 dark:text-slate-200 dark:hover:border-teal-800 dark:hover:text-teal-300">
                  <svg viewBox="0 0 24 24" className="size-[18px] shrink-0 text-teal-600 dark:text-teal-400" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
                  </svg>
                  <span className="break-all">ashmita-gorkhali</span>
                </a>
                
              </div>
              <div className="mt-8 flex items-start gap-3 border-t border-slate-200 pt-6 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
                <MapPin size={18} className="mt-0.5 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <span>{personal.location}</span>
              </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
                <input name="name" type="text" autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
                <input name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
              <textarea name="message" rows={6} value={formData.message} onChange={handleChange} placeholder="Your message here..." className="resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
            </label>
            
            {status && (
              <div className={`mt-4 flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${status.type === 'success' ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-300' : 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300'}`}>
                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span>{status.message}</span>
              </div>
            )}

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" disabled={isLoading} className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white outline-none transition hover:bg-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400 dark:focus-visible:ring-offset-slate-900">
                {isLoading ? 'Sending...' : 'Submit'}
                <Send size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </m.section>
  )
}
