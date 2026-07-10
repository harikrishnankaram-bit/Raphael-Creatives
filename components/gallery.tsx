'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

type GalleryImage = {
  src: string
  tag?: {
    text: string
    colorClass: string
    rotate: string
  }
}

const colA: GalleryImage[] = [
  { src: '/grid-watch.png' },
  { 
    src: '/grid-sports.png',
    tag: { text: 'ATTENTION IS CURRENCY', colorClass: 'bg-pink-400 text-black', rotate: 'rotate-[-3deg]' }
  },
  { src: '/grid-phone2.png' },
  { src: '/grid-headset.png' }
]

const colB: GalleryImage[] = [
  { src: '/grid-speaker.png' },
  { src: '/grid-headset.png' },
  { 
    src: '/hero-device.png',
    tag: { text: 'STOP THE SCROLL', colorClass: 'bg-orange-400 text-black', rotate: 'rotate-[3deg]' }
  },
  { src: '/grid-logistics.png' }
]

const colC: GalleryImage[] = [
  { 
    src: '/grid-logistics.png',
    tag: { text: 'REVENUE > IMPRESSIONS', colorClass: 'bg-teal-400 text-black', rotate: 'rotate-[-2deg]' }
  },
  { src: '/grid-speaker.png' },
  { src: '/grid-watch.png' },
  { src: '/grid-sports.png' }
]

function Column({
  images,
  y,
}: {
  images: GalleryImage[]
  y: ReturnType<typeof useTransform<number, string>>
}) {
  return (
    <motion.div style={{ y }} className="flex flex-col gap-5">
      {images.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-card group"
        >
          {/* Overlay Image */}
          <img
            src={img.src || '/placeholder.svg'}
            alt="A digital marketing workspace showing conversion and brand systems"
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Interactive Badge/Sticker Tag */}
          {img.tag && (
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/10">
              <motion.div
                whileHover={{ scale: 1.08, rotate: img.tag.rotate === 'rotate-[-3deg]' ? '-5deg' : '5deg' }}
                className={`px-4 py-2 text-xs md:text-sm font-extrabold uppercase tracking-wider rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-10 whitespace-nowrap cursor-default ${img.tag.colorClass} ${img.tag.rotate} transition-shadow`}
              >
                {img.tag.text}
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  )
}

export function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const yA = useTransform(scrollYProgress, [0, 1], ['2%', '-14%'])
  const yB = useTransform(scrollYProgress, [0, 1], ['0%', '-24%'])
  const yC = useTransform(scrollYProgress, [0, 1], ['4%', '-10%'])
  const textOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.45, 0.6, 0.78],
    [0, 1, 1, 0],
  )
  const textScale = useTransform(scrollYProgress, [0.25, 0.5], [0.92, 1])

  return (
    <section ref={ref} className="relative bg-black py-24 z-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-start gap-5 overflow-hidden px-6 md:grid-cols-3 md:px-10">
        <Column images={colA} y={yA} />
        <div className="-mt-16">
          <Column images={colB} y={yB} />
        </div>
        <div className="hidden md:block">
          <Column images={colC} y={yC} />
        </div>
      </div>

      <div className="pointer-events-none sticky bottom-0 top-0 z-10 -mt-[70vh] flex h-[60vh] items-center justify-center">
        <motion.h2
          style={{ opacity: textOpacity, scale: textScale }}
          className="max-w-2xl text-balance text-center text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Launching brand strategies that secure market dominance.
        </motion.h2>
      </div>
    </section>
  )
}
