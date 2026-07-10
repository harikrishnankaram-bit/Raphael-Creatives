'use client'

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
import TransitionScribble from '@/components/transition-scribble'

export default function Page() {
  return (
    <>
      <div id="content-wrapper" style={{ opacity: 0 }}>
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
      </div>
      <TransitionScribble />
    </>
  )
}
