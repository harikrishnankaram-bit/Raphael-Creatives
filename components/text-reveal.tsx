'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'

function Word({
  children,
  range,
  progress,
}: {
  children: string
  range: [number, number]
  progress: MotionValue<number>
}) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return (
    <span className="relative mr-[0.25em] inline-block">
      <span className="absolute left-0 top-0 select-none opacity-15" aria-hidden="true">
        {children}
      </span>
      <motion.span style={{ opacity }} className="relative z-10">{children}</motion.span>
    </span>
  )
}

/**
 * Reveals a block of copy word-by-word as it scrolls through the viewport,
 * matching the "gray to white" wipe used across the original site.
 */
export function TextReveal({
  text,
  className,
  align = 'left',
}: {
  text: string
  className?: string
  align?: 'left' | 'right'
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35'],
  })

  const words = text.split(' ')

  return (
    <p
      ref={ref}
      className={`flex flex-wrap ${align === 'right' ? 'justify-start' : ''} ${className ?? ''}`}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}
