import type { Variants } from 'framer-motion'

export const revealVariants = (shouldReduceMotion = false): Variants => ({
  hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.55,
      ease: 'easeOut',
    },
  },
})

export const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

export const cardVariants = (shouldReduceMotion = false): Variants => ({
  hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.45,
      ease: 'easeOut',
    },
  },
})

export const menuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.22, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.18, ease: 'easeIn' },
  },
}

export const modalBackdropVariants = (shouldReduceMotion = false): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: shouldReduceMotion ? 0 : 0.2 } },
  exit: { opacity: 0, transition: { duration: shouldReduceMotion ? 0 : 0.16 } },
})

export const modalContentVariants = (shouldReduceMotion = false): Variants => ({
  hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: shouldReduceMotion ? 0 : 0.24, ease: 'easeOut' } },
  exit: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.16, ease: 'easeIn' } },
})

export const buttonMotion = (shouldReduceMotion = false) =>
  shouldReduceMotion ? {} : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } }
