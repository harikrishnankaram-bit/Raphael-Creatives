'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { TextReveal } from './text-reveal'

export function TechStatement() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['30%', '-30%'])

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-between md:block min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-black px-6 py-32 md:px-10"
    >
      <div className="w-full">
        <TextReveal
          text="We bridge the gap between creative excellence and business outcomes, delivering measurable growth and brand equity for high-growth enterprises."
          className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl"
        />
      </div>

      <motion.div
        style={{ y }}
        className="relative mt-12 md:absolute md:bottom-10 md:right-10 h-56 w-44 md:h-72 md:w-56 overflow-hidden rounded-xl bg-card self-start md:self-auto shrink-0"
      >
        <img
          src="/grid-speaker.png"
          alt="A smart home speaker glowing softly"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  )
}
