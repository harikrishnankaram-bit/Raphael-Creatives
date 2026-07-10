'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CTA } from '@/components/cta'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Legacy } from '@/components/legacy'
import { Services } from '@/components/services'
import { ServiceCards } from '@/components/service-cards'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TechStatement } from '@/components/tech-statement'
import { FAQ } from '@/components/faq'
import { LogoSlider } from '@/components/logo-slider'
import { SlogansBanner } from '@/components/slogans-banner'

export default function Page() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Prevent scrolling during preloader overlay phase
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ''
    }, 2500)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black select-none pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-6">
              
              {/* Glowing logo image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-28 h-28"
              >
                <img
                  src="/Raphael.png"
                  alt="Raphael Creatives Logo Splash"
                  className="w-full h-full object-contain rounded-full shadow-[0_0_40px_rgba(20,184,166,0.15)]"
                />
              </motion.div>

              {/* Company Name with letter tracking expansion */}
              <motion.h1
                initial={{ opacity: 0, letterSpacing: '0.1em', y: 15 }}
                animate={{ opacity: 1, letterSpacing: '0.35em', y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-lg md:text-xl font-bold tracking-[0.35em] text-white uppercase text-center mt-2 pl-[0.35em]"
              >
                RAPHAEL CREATIVES
              </motion.h1>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative bg-black min-h-screen">
        <SiteHeader />
        <Hero />
        <LogoSlider />
        <Intro />
        <Gallery />
        <TechStatement />
        <Services />
        <ServiceCards />
        <SlogansBanner />
        <Legacy />
        <FAQ />
        <CTA />
        <SiteFooter />
      </main>
    </>
  )
}
