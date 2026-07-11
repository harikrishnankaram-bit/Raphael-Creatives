'use client'

import { motion } from 'motion/react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const services = [
  { name: 'Branding and Marketing', desc: 'Define your unique position and message. We develop your brand look, profile, and plans to capture market attention and build long-term value.' },
  { name: 'Social Media Management', desc: 'Boost your digital visibility. We manage accounts, produce creative updates, and nurture community engagement on Facebook, Instagram, and LinkedIn.' },
  { name: 'Training and Support', desc: 'Equip your team with online marketing skills. We run direct coaching sessions in social channels, paid advertising setups, and customer engagement.' },
  { name: 'Visual Identity', desc: 'Craft clean business cards, logos, marketing banners, and brochures that represent your corporate identity and leave a strong visual impression.' },
  { name: 'Presentation Design', desc: 'Organize complex materials into clean, impactful slide designs. We help your message stand out in funding rounds, business pitches, and training events.' },
  { name: 'Interactive Content', desc: 'Develop engaging infographics, quizzes, and digital polls that simplify your corporate message and increase audience retention.' },
  { name: 'Storyboarding', desc: 'Plan and structure your concepts. We create clear, easy-to-follow narrative lines for brand videos, explainers, and software prototype walks.' },
  { name: 'Graphical Data Visualization', desc: 'Convert technical analytics and financial reports into simple charts and graphs, helping your team make quick, data-driven choices.' },
  { name: 'Website & App Development', desc: 'Build responsive, fast-loading Next.js websites and mobile applications optimized for Core Web Vitals, organic search traffic, and conversions.' },
  { name: 'Video Production', desc: 'Produce high-quality marketing commercials, company explainers, and brand narrative videos that communicate value and drive conversions.' }
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
          <span className="text-teal-400 font-semibold tracking-wider text-xs uppercase">Our Core Capabilities</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
            Scale Your Business With{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Integrated Creative Services.
            </span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mt-4">
            From visual branding to responsive React code and high-performance marketing funnels, we cover the full range of digital growth.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.1, duration: 0.6 }}
              className="bg-zinc-900/40 border border-white/5 p-10 rounded-2xl flex flex-col gap-4 hover:border-teal-500/20 transition-all hover:bg-zinc-900/60 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase group-hover:scale-105 transition-transform">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  {service.name}
                </h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-zinc-950 py-20 px-6 md:px-10 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold">Select the Perfect Solution</h2>
          <p className="text-gray-400 max-w-lg">
            Compare our service retainers or request a custom proposal designed for your exact marketing goals.
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
