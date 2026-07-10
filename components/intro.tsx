'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function Intro() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 6])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05])

  return (
    <section ref={ref} className="relative bg-black px-6 pt-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          <span className="text-foreground">We are Raphael Creatives.</span>{' '}
          <span className="text-muted-foreground">
            We bridge the gap between creative excellence and business outcomes, delivering brand equity and organic growth.
          </span>
        </h2>

        <motion.div
          style={{ y, scale }}
          className="relative mx-auto mt-16 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl bg-card"
        >
          <motion.img
            src="/intro-phone.png"
            alt="A smartphone displaying a home screen of glowing app icons"
            style={{ rotate }}
            className="h-[80%] w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
