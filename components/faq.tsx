'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'how long does it take to see results?',
    answer: 'Standard SEO and organic positioning take 90–120 days to mature, whereas direct-response search ads and landing page funnels show active conversion metrics within 14 days of launch.'
  },
  {
    question: 'do we own the design assets and ad accounts?',
    answer: 'Yes, 100%. All visual assets, Figma canvases, React components, and advertising accounts built or managed by us remain your absolute property. We provide full admin access and transfer all source materials.'
  },
  {
    question: 'how do you measure the success of our campaigns?',
    answer: 'We define success based on business-level growth: Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), lead conversion rates, and organic traffic growth. We avoid vanity metrics in favor of revenue outcomes.'
  },
  {
    question: 'what channels do you specialize in?',
    answer: 'We focus heavily on Google Search Ads (SEM) to capture high-intent buyers, Meta and LinkedIn Ads for brand equity and B2B pipeline, and custom search optimization (SEO) to build long-term organic authority.'
  },
  {
    question: 'is there a minimum contract commitment?',
    answer: 'We provide flexible monthly rolling retainers for design and growth operations, as well as 3-to-6 month commitments for scaling complex multi-channel paid acquisition funnels.'
  },
  {
    question: 'how does the onboarding process look?',
    answer: 'We begin with a deep-dive brand audit and technical SEO scrub. Within the first 7 days, we establish shared communication channels, verify tracking pixels, and deploy initial ad variations or design wireframes.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative bg-black py-32 px-6 md:px-10 overflow-hidden border-t border-white/5">
      
      {/* Ambient gradient washes */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-teal-500/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/10 to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Title */}
          <div className="lg:col-span-5 flex flex-col gap-2 sticky lg:top-32">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[0.9] select-none">
              got <span className="font-serif italic font-normal text-teal-400">questions</span>?
              <br />
              we have
              <br />
              answers.
            </h2>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div key={index} className="border-b border-white/10 py-6 md:py-8">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 text-left group cursor-pointer"
                  >
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white group-hover:text-teal-300 transition-colors">
                      {faq.question}
                    </h3>
                    
                    {/* Rotating Plus Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm group-hover:border-white/40 transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Expandable Answer Wrapper */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
