'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { TextReveal } from './text-reveal'

export function Legacy() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['40%', '-30%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['60%', '-10%'])

  return (
    <section
      ref={ref}
      className="relative min-h-[130vh] overflow-hidden bg-black px-6 py-32 md:px-10"
    >
      <div className="ml-auto max-w-4xl">
        <TextReveal
          text="We integrate creative design with technical conversion engineering. Every pixel, layout, and visual path is designed to guide user behavior and drive measurable business outcomes."
          className="text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl"
        />
      </div>

      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-24 left-6 h-52 w-[42%] max-w-xl overflow-hidden rounded-xl bg-card md:left-10 md:h-72"
      >
        <img
          src="/legacy-video.png"
          alt="A video marketing platform shown on a laptop and phone"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-6 h-52 w-[42%] max-w-xl overflow-hidden rounded-xl bg-card md:right-10 md:h-72"
      >
        <img
          src="/legacy-weather.png"
          alt="A minimalist weather app across several phones"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  )
}
