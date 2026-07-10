'use client'

import { motion } from 'motion/react'

const slogans = [
  { text: 'attention is currency', italic: false, highlight: true },
  { text: 'stop the scroll', italic: true, highlight: false },
  { text: 'revenue > impressions', italic: false, highlight: true },
  { text: 'roi over vanity', italic: false, highlight: false },
  { text: 'conversion by design', italic: true, highlight: true },
  { text: 'engineered for digital growth', italic: false, highlight: false },
  { text: 'clicks are cheap, customers are valuable', italic: true, highlight: false }
]

export function SlogansBanner() {
  return (
    <section className="bg-zinc-950 py-12 overflow-hidden border-y border-white/5 select-none relative z-10">
      <div className="relative w-full flex overflow-hidden">
        
        {/* Soft edge blur overlays */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Infinite scrolling track */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 30,
            repeat: Infinity
          }}
          className="flex gap-16 md:gap-24 shrink-0 items-center pr-16 md:pr-24"
        >
          {/* Duplicated track list */}
          {[...slogans, ...slogans].map((slogan, index) => (
            <div
              key={index}
              className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            >
              <span
                className={`text-2xl md:text-4xl font-extrabold uppercase tracking-wider ${
                  slogan.italic ? 'font-serif italic font-normal' : 'font-sans'
                } ${
                  slogan.highlight
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400'
                    : 'text-white/20 hover:text-white/40 transition-colors'
                }`}
              >
                {slogan.text}
              </span>
              
              {/* Divider symbol */}
              <span className="text-white/10 text-xl md:text-2xl font-light">
                /
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
