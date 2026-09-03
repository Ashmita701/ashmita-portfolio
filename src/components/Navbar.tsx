import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../data/portfolio'
import { buttonMotion, menuVariants } from '../lib/motion'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)
  const wasMenuOpenRef = useRef(false)
  const shouldReduceMotion = useReducedMotion() ?? false

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    if (isMenuOpen) {
      wasMenuOpenRef.current = true
      firstMenuLinkRef.current?.focus()
      return
    }

    if (wasMenuOpenRef.current) {
      menuButtonRef.current?.focus()
      wasMenuOpenRef.current = false
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    const sections = portfolioData.navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.25, 0.5, 0.75] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsMenuOpen(false)
  const getLinkClasses = (href: string, mobile = false) => {
    const isActive = activeSection === href.slice(1)
    return mobile
      ? `group flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium outline-none transition-all ${isActive ? 'bg-teal-50 text-teal-800 ring-1 ring-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:ring-teal-900' : 'text-slate-600 hover:bg-slate-50 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-teal-300'} focus-visible:ring-2 focus-visible:ring-teal-500`
      : `relative rounded-full px-4 py-2.5 text-[15px] font-medium outline-none transition-all ${isActive ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20 dark:bg-teal-400 dark:text-slate-950 dark:shadow-teal-400/10' : 'text-slate-600 hover:bg-slate-100/80 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-teal-300'} focus-visible:ring-2 focus-visible:ring-teal-500`
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-[0_10px_30px_rgba(2,6,23,0.22)] sm:px-5 lg:px-6" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-2.5 text-base font-bold tracking-tight text-slate-950 outline-none transition-colors hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-white dark:hover:text-teal-300 sm:text-lg">
          <span className="relative flex h-10 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm shadow-slate-900/10 transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105 dark:border-slate-700 dark:bg-slate-900" aria-hidden="true">
            <span className="absolute bottom-0 left-0 h-1 w-full bg-teal-500 dark:bg-teal-400" />
            <span className="relative z-10 -mr-1 font-serif text-lg font-bold italic text-slate-950 dark:text-white">A</span>
            <span className="relative z-0 -ml-1 font-serif text-lg font-medium text-teal-600 dark:text-teal-400">G</span>
          </span>
          <span className="hidden sm:inline">{portfolioData.personal.name}</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {portfolioData.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setActiveSection(item.href.slice(1))} className={getLinkClasses(item.href)}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <m.button {...buttonMotion(shouldReduceMotion)} type="button" onClick={() => setIsDark((dark) => !dark)} className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/80 text-slate-600 outline-none transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-teal-800 dark:hover:bg-teal-950/50 dark:hover:text-teal-300" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </m.button>
          <m.button {...buttonMotion(shouldReduceMotion)} ref={menuButtonRef} type="button" onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/80 text-slate-600 outline-none transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-teal-800 dark:hover:bg-teal-950/50 dark:hover:text-teal-300 md:hidden" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </m.button>
        </div>
      </nav>
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <m.div id="mobile-navigation" variants={shouldReduceMotion ? undefined : menuVariants} initial={shouldReduceMotion ? false : 'hidden'} animate={shouldReduceMotion ? undefined : 'visible'} exit={shouldReduceMotion ? undefined : 'exit'} className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90 dark:shadow-[0_10px_30px_rgba(2,6,23,0.22)] md:hidden">
            {portfolioData.navigation.map((item, index) => (
              <a key={item.href} ref={index === 0 ? firstMenuLinkRef : undefined} href={item.href} onClick={() => { setActiveSection(item.href.slice(1)); closeMenu() }} className={getLinkClasses(item.href, true)}>
                {item.label}
              </a>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
