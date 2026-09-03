import { m, useReducedMotion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { revealVariants } from "../lib/motion";

export function Certification() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <m.section
      id="certification"
      variants={revealVariants(shouldReduceMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="scroll-mt-20 border-b border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-3xl border-l-2 border-teal-500 pl-5 sm:pl-6">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            Certification
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Practical cloud expertise.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            A verified AWS credential that complements hands-on experience building and deploying dependable applications.
          </p>
        </div>

        <div className="max-w-4xl">
          {portfolioData.certifications.map((certification) => (
            <a
              key={certification.name}
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:bg-white hover:shadow-2xl hover:shadow-teal-900/10 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-teal-700 dark:hover:bg-slate-900 dark:hover:shadow-black/30"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-teal-100/70 transition-transform duration-500 group-hover:scale-150 dark:bg-teal-950/50" aria-hidden="true" />
              <div className="relative flex flex-col gap-7 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 shadow-lg shadow-slate-950/10 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 dark:bg-amber-400 dark:text-slate-950">
                    <Award size={26} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">
                      <BadgeCheck size={15} aria-hidden="true" />
                      AWS certification
                    </div>

                    <h3 className="mt-3 max-w-xl text-xl font-semibold leading-7 text-slate-950 dark:text-white sm:text-2xl">
                      {certification.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      {certification.issuer}
                    </p>

                  </div>
                </div>

                <div className="flex shrink-0 flex-row items-center justify-between gap-5 border-t border-slate-200 pt-5 sm:flex-col sm:items-end sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 dark:border-slate-700">
                  <time className="font-mono text-2xl font-semibold text-slate-950 dark:text-white">{certification.year}</time>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-800 dark:text-teal-400 dark:group-hover:text-teal-300">
                    Verify credential
                    <ExternalLink size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </m.section>
  );
}
