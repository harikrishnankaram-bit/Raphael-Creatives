'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const categories = ['All', 'Logos', 'Business Cards', 'Website Design & Development', 'Social Media Management', 'Presentation & Content', 'Brochures & Flyers']

const projects = [
  { name: 'Corporate Brand Suite', category: 'Logos', desc: 'Custom visual vector identity and corporate logo mark.', img: '/service-brand.png' },
  { name: 'Unifi Capital Investor Deck', category: 'Presentation & Content', desc: 'Simplifying data and visual charts for high-net-worth pitching.', img: '/service-ai.png' },
  { name: 'SaaS Platform Interface', category: 'Website Design & Development', desc: 'Conversion-optimized React app wireframing and frontend.', img: '/service-product.png' },
  { name: 'Premium Marketing Brochure', category: 'Brochures & Flyers', desc: 'Clean print collateral detailing industrial capabilities.', img: '/legacy-video.png' },
  { name: 'Ecosense Brand Graphics', category: 'Social Media Management', desc: 'Custom social designs to optimize brand positioning.', img: '/intro-phone.png' },
  { name: 'Digital Asset Business Cards', category: 'Business Cards', desc: 'High-contrast typography card layouts for networking.', img: '/grid-watch.png' },
  { name: 'Logistics Web Portal', category: 'Website Design & Development', desc: 'Secure B2B service portal matching brand integrity.', img: '/grid-logistics.png' },
  { name: 'Creative Video Showcase', category: 'Presentation & Content', desc: 'Interactive visual infographic slides for education.', img: '/legacy-weather.png' }
]

export default function Page() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab || (activeTab === 'Brochures & Flyers' && p.category === 'Brochures & Flyers'))

  return (
    <main className="relative bg-black min-h-screen text-white">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-black" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col gap-6"
        >
          <span className="text-teal-400 font-semibold tracking-wider text-xs uppercase">Our Case Files</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
            Stunning Design Meets{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Frictionless Function.
            </span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mt-4">
            Browse our featured work across brand identity systems, corporate presentation slides, custom web codes, and print assets.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6 md:px-10 max-w-6xl mx-auto border-t border-white/10">
        <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap pb-2.5 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer inline-block shrink-0 ${
                activeTab === cat
                  ? 'bg-teal-400 text-black font-bold'
                  : 'bg-zinc-900 border border-white/5 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 md:px-10 max-w-6xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, idx) => (
              <motion.div
                layout
                key={proj.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-teal-500/20 transition-all hover:bg-zinc-900/50 group flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <img
                    src={proj.img}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{proj.category}</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-teal-300 transition-colors">{proj.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA section */}
      <section className="bg-zinc-950 py-20 px-6 md:px-10 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Launch Your Experience?</h2>
          <p className="text-gray-400 max-w-lg">
            Let&apos;s build a digital presence that engages your market audience and drives conversions.
          </p>
          <a
            href="mailto:support@raphaelcreatives.com"
            className="inline-flex items-center justify-center rounded-full bg-teal-400 px-8 py-3.5 text-sm font-semibold text-black hover:scale-105 transition-transform mt-4"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
