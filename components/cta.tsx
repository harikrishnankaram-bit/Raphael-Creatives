'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function CTA() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1])

  return (
    <section id="contact" ref={ref} className="relative bg-black">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          style={{ scale }}
          src="/cta-car.png"
          alt="A sleek electric concept car rendered in dramatic light"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="bg-secondary px-6 py-20 text-secondary-foreground md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              <span>Let&apos;s build your brand.</span>{' '}
              <span className="text-muted-foreground block mt-2 text-2xl md:text-3xl">
                Ready to scale your digital presence?
              </span>
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-8 text-sm">
              <div>
                <span className="block font-semibold text-foreground mb-1">Email Us</span>
                <a href="mailto:support@raphaelcreatives.com" className="text-muted-foreground hover:text-foreground hover:underline">support@raphaelcreatives.com</a>
              </div>
              <div>
                <span className="block font-semibold text-foreground mb-1">Call Us</span>
                <a href="tel:+919787046331" className="text-muted-foreground hover:text-foreground hover:underline">+91 97870 46331</a>
              </div>
              <div>
                <span className="block font-semibold text-foreground mb-1">Headquarters</span>
                <span className="text-muted-foreground">Tenkasi, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
          <a
            href="mailto:support@raphaelcreatives.com"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-transform hover:scale-105"
          >
            Book a Strategy Call
            <svg width="16" height="16" viewBox="0 0 14 14" aria-hidden="true">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
