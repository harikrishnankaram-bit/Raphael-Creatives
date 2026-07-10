'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

type Service = {
  index: string
  title: [string, string]
  description: string
  image: string
  alt: string
  wash: string
}

const services: Service[] = [
  {
    index: '01',
    title: ['Brand Strategy', ' & Identity'],
    description: 'Establish a distinctive market position and build long-term brand equity with strategic corporate branding.',
    image: '/service-brand.png',
    alt: 'Premium visual brand identity system by Raphael Creatives',
    wash: 'from-teal-500/60 via-teal-950/20 to-black',
  },
  {
    index: '02',
    title: ['Web Systems', ' & UI UX Design'],
    description: 'Stunning, custom UI layouts built specifically to guide visitors down your sales funnel and load instantly.',
    image: '/service-product.png',
    alt: 'High performance React development and UX interfaces',
    wash: 'from-emerald-500/60 via-emerald-950/20 to-black',
  },
  {
    index: '03',
    title: ['Digital Growth', ' & Funnels'],
    description: 'Direct-response marketing across search and social channels focused on positive ROI (ROAS).',
    image: '/service-ai.png',
    alt: 'Analytics tracking showing marketing performance and conversion rate optimization',
    wash: 'from-cyan-500/60 via-cyan-950/20 to-black',
  },
]

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Slide 1 stays fixed but scales down and dims as Slide 2 overlays
  const slide1Scale = useTransform(scrollYProgress, [0.25, 0.45], [1, 0.92])
  const slide1Dim = useTransform(scrollYProgress, [0.25, 0.45], [0, 0.6])

  // Slide 2 slides up from 100vh to 0vh, then scales down and dims as Slide 3 overlays
  const slide2Y = useTransform(scrollYProgress, [0.0, 0.25, 0.45, 1.0], ['100vh', '100vh', '0vh', '0vh'])
  const slide2Scale = useTransform(scrollYProgress, [0.55, 0.75], [1, 0.92])
  const slide2Dim = useTransform(scrollYProgress, [0.55, 0.75], [0, 0.6])

  // Slide 3 slides up from 100vh to 0vh
  const slide3Y = useTransform(scrollYProgress, [0.0, 0.55, 0.75, 1.0], ['100vh', '100vh', '0vh', '0vh'])

  const transforms = [
    { y: '0vh', scale: slide1Scale, dim: slide1Dim, zIndex: 10 },
    { y: slide2Y, scale: slide2Scale, dim: slide2Dim, zIndex: 20 },
    { y: slide3Y, scale: 1.0, dim: null, zIndex: 30 }
  ]

  return (
    <div id="services" ref={containerRef} className="relative h-[350vh] bg-black">
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {services.map((service, idx) => {
          const trans = transforms[idx]
          
          return (
            <motion.div
              key={service.index}
              style={{
                y: trans.y,
                scale: trans.scale,
                zIndex: trans.zIndex
              }}
              className="absolute inset-0 h-screen w-full flex items-end overflow-hidden bg-black origin-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image || '/placeholder.svg'}
                  alt={service.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t ${service.wash}`} />

              {/* Parallax dimming overlay to fade covered cards */}
              {trans.dim && (
                <motion.div
                  style={{ opacity: trans.dim }}
                  className="pointer-events-none absolute inset-0 bg-black z-0"
                />
              )}

              {/* Giant blurred background ghost title */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[22vw] font-semibold leading-none tracking-tight text-foreground/10 blur-sm select-none"
              >
                {service.title[0]}
              </span>

              {/* Foreground content card */}
              <div className="relative z-10 w-full px-6 pb-16 md:px-10">
                <span className="mb-4 block text-sm font-medium tracking-widest text-foreground/70">
                  {service.index}
                </span>
                <h3 className="text-4xl sm:text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight text-foreground">
                  {service.title[0]}
                  <br />
                  {service.title[1]}
                </h3>
                <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-md text-lg text-foreground/80">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary/70 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-secondary"
                  >
                    Explore
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                      <path
                        d="M3 7h8M7 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
