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
      className="relative flex flex-col justify-between md:block min-h-[100vh] md:min-h-[130vh] overflow-hidden bg-black px-6 py-32 md:px-10"
    >
      <div className="ml-auto max-w-4xl">
        <TextReveal
          text="We integrate creative design with technical conversion engineering. Every pixel, layout, and visual path is designed to guide user behavior and drive measurable business outcomes."
          className="text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl"
        />
      </div>

      <div className="relative mt-16 flex flex-col gap-6 md:block md:mt-0">
        <motion.div
          style={{ y: y1 }}
          className="relative w-full h-48 md:absolute md:bottom-24 md:left-10 md:h-72 md:w-[42%] max-w-xl overflow-hidden rounded-xl bg-card"
        >
          <img
            src="/legacy-video.png"
            alt="A video marketing platform shown on a laptop and phone"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="relative w-full h-48 md:absolute md:bottom-0 md:right-10 md:h-72 md:w-[42%] max-w-xl overflow-hidden rounded-xl bg-card"
        >
          <img
            src="/legacy-weather.png"
            alt="A minimalist weather app across several phones"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
