'use client'

import { motion } from 'motion/react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const squad = [
  { name: 'Vincent', role: 'Presentation Specialist', desc: 'Crafting visually engaging presentation flows and structured narrative slides.' },
  { name: 'Dheena', role: 'Web Developer', desc: 'Engineering high-performance React applications and custom database integrations.' },
  { name: 'Vasanth', role: 'Video Editor', desc: 'Producing high-impact brand stories, kinetic animations, and post-production editing.' }
]

export default function Page() {
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
          <span className="text-teal-400 font-semibold tracking-wider text-xs uppercase">About Our Agency</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
            Meet the Minds Behind the{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Growth Engine.
            </span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mt-4">
            Raphael Creatives unifies visual craftsmanship, web development, and digital marketing to scale corporate brands and startup companies.
          </p>
        </motion.div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full max-w-md bg-zinc-900 rounded-2xl overflow-hidden flex items-center justify-center border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-black opacity-65" />
            <span className="text-teal-400 font-bold text-9xl">K</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="text-teal-400 font-semibold text-xs tracking-wider uppercase">Our Founder</span>
            <h2 className="text-3xl md:text-4xl font-bold">Karunya Gunavathy</h2>
            <p className="text-gray-400 leading-relaxed">
              Founder of Raphael Creatives and Chief of Staff at Voice of Tenkasi Foundation. With a strong background in graphic design and an MBA in Information Security Management, Karunya specializes in creating impactful presentations that blend aesthetic elegance with absolute functionality.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Her experience includes key creative roles at SlydS and State of the City Presentations, showcasing a versatile skill set in visual systems, presentation slides, and corporate strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Squad */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto border-t border-white/10">
        <div className="flex flex-col gap-12">
          <div className="max-w-2xl flex flex-col gap-4">
            <span className="text-teal-400 font-semibold text-xs tracking-wider uppercase">The Collective</span>
            <h2 className="text-3xl md:text-5xl font-bold">Our Creative Squad</h2>
            <p className="text-gray-400">
              A specialized team of designers, engineers, and animators working under a unified quality standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {squad.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl flex flex-col gap-4 hover:border-teal-500/20 transition-all"
              >
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">{item.name}</span>
                  <span className="text-xs text-teal-400 font-medium uppercase tracking-wider mt-1">{item.role}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-zinc-950 py-20 px-6 md:px-10 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-gray-400 max-w-lg">
            Connect directly with Karunya and the team to discuss your brand positioning and growth strategy.
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
