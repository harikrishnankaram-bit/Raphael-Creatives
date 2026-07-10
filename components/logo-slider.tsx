'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

type Logo = {
  name: string
  icon: ReactNode
}

const logos: Logo[] = [
  {
    name: 'UNIFI CAPITAL',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    name: 'ECOSENSE ENVIRO',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  },
  {
    name: 'RIPIK.AI',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
      </svg>
    )
  },
  {
    name: 'SLYDS GROUP',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V7l7 5-7 5z" />
      </svg>
    )
  },
  {
    name: 'STATE OF THE CITY',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    )
  },
  {
    name: 'VOICE OF TENKASI',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v3M8 22h8" />
      </svg>
    )
  }
]

export function LogoSlider() {
  return (
    <section className="bg-black py-16 overflow-hidden border-b border-white/5 select-none relative z-10">
      
      {/* Small Section Header */}
      <span className="text-xs uppercase tracking-[0.25em] text-white/30 text-center block mb-10 font-bold">
        TRUSTED BY SYSTEM PARTNERS & GLOBAL ENTERPRISES
      </span>

      <div className="relative w-full flex overflow-hidden">
        {/* Soft edge blur overlays */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Infinite scrolling track container */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity
          }}
          className="flex gap-20 md:gap-28 shrink-0 items-center pr-20 md:pr-28"
        >
          {/* Render track elements twice to ensure seamless infinite looping */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white/25 hover:text-teal-400 transition-colors text-sm md:text-base font-bold tracking-[0.18em] whitespace-nowrap cursor-default group"
            >
              <span className="opacity-75 group-hover:scale-110 transition-transform text-white/30 group-hover:text-teal-400">
                {logo.icon}
              </span>
              <span>{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
