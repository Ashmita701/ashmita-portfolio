import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../data/portfolio'
import { buttonMotion, menuVariants } from '../lib/motion'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="text-base font-semibold tracking-tight text-slate-950 outline-none transition-colors hover:text-teal-600 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 dark:text-white dark:hover:text-teal-400 dark:focus-visible:ring-offset-slate-950">
          {portfolioData.personal.name}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {portfolioData.navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 outline-none transition-colors hover:text-teal-600 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 dark:text-slate-300 dark:hover:text-teal-400 dark:focus-visible:ring-offset-slate-950">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <m.button {...buttonMotion(shouldReduceMotion)} type="button" onClick={() => setIsDark((dark) => !dark)} className="inline-flex size-11 items-center justify-center rounded-full text-slate-600 outline-none transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </m.button>
          <m.button {...buttonMotion(shouldReduceMotion)} ref={menuButtonRef} type="button" onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex size-11 items-center justify-center rounded-full text-slate-600 outline-none transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white md:hidden" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </m.button>
        </div>
      </nav>
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <m.div id="mobile-navigation" variants={shouldReduceMotion ? undefined : menuVariants} initial={shouldReduceMotion ? false : 'hidden'} animate={shouldReduceMotion ? undefined : 'visible'} exit={shouldReduceMotion ? undefined : 'exit'} className="overflow-hidden border-t border-slate-200/80 px-6 pb-4 pt-2 dark:border-slate-800/80 md:hidden">
            {portfolioData.navigation.map((item, index) => (
              <a key={item.href} ref={index === 0 ? firstMenuLinkRef : undefined} href={item.href} onClick={closeMenu} className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 outline-none transition-colors hover:bg-slate-100 hover:text-teal-600 focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-400">
                {item.label}
              </a>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
