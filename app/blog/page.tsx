'use client'

import { motion } from 'motion/react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const articles = [
  {
    title: 'The Art of Visual Storytelling in Presentations',
    desc: 'Visual storytelling, also known as visual narrative, refers to the skilful use of visual elements like images, videos, and diagrams to effectively convey a compelling story. This technique is particularly valuable in B2B pitch decks, as it has the ability to engage, inspire, and persuade the audience more effectively than text-heavy templates.',
    date: 'July 5, 2026',
    category: 'Design Guide',
    img: '/service-brand.png'
  },
  {
    title: 'Design Principles for Memorable Presentation Slides',
    desc: 'The principles of design serve as guidelines that designers must adhere to in order to craft compositions that are both visually appealing and effective. These foundational principles include Emphasis, Balance, Alignment, Contrast, Repetition, Proportion, Movement, and White Space.',
    date: 'June 28, 2026',
    category: 'Tips & Tricks',
    img: '/service-product.png'
  },
  {
    title: 'Choosing the Right Color Palette for Effective Slide Design',
    desc: 'A color palette encompasses a range of colors, shades, and tones utilized in designs, and is often regarded as a representation of a company\'s identity when used for branding. We explore how to pick colors that speak to your audience and fit your brand guidelines.',
    date: 'June 14, 2026',
    category: 'Branding',
    img: '/service-ai.png'
  },
  {
    title: 'Typography Tips for Enhancing Your Presentation Design',
    desc: 'Typography is the skill of utilizing text to ensure that content is easily comprehensible, legible, and visually captivating. Typography serves as the "body language" of your design, highlighting the significance of optimizing readability, alignment, and hierarchical positioning.',
    date: 'May 30, 2026',
    category: 'Typography',
    img: '/intro-phone.png'
  },
  {
    title: 'Using Infographics to Simplify Complex Data in Presentations',
    desc: 'Infographics are graphic representations of information intended to present complex data in a visually comprehensible format. They are utilized to convey corporate messages efficiently, simplify extensive financial data, and track variable market changes.',
    date: 'May 12, 2026',
    category: 'Data Design',
    img: '/legacy-video.png'
  }
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
          <span className="text-teal-400 font-semibold tracking-wider text-xs uppercase">Knowledge Hub</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
            Perspective, Insights &{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Design Science.
            </span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mt-4">
            Read our latest articles on presentation storyboarding, visual design guidelines, color psychology, and conversion analytics.
          </p>
        </motion.div>
      </section>

      {/* Articles List */}
      <section className="py-12 px-6 md:px-10 max-w-6xl mx-auto border-t border-white/10">
        <div className="flex flex-col gap-16">
          {articles.map((art, index) => (
            <motion.article
              key={art.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-16 border-b border-white/5 last:border-0"
            >
              <div className="md:col-span-4 aspect-[16/10] bg-card rounded-xl overflow-hidden border border-white/5 relative">
                <img
                  src={art.img}
                  alt={art.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              <div className="md:col-span-8 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-teal-400 font-semibold uppercase tracking-wider">{art.category}</span>
                  <span className="text-gray-600 font-medium">•</span>
                  <span className="text-gray-500 font-medium">{art.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white hover:text-teal-300 transition-colors">
                  <a href="#">{art.title}</a>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">{art.desc}</p>
                <a
                  href="#"
                  className="inline-flex w-fit items-center gap-1 text-teal-400 text-xs font-semibold uppercase tracking-wider mt-2 group hover:underline"
                >
                  Read Full Article
                  <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
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
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-zinc-950 py-20 px-6 md:px-10 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold">Never Miss a Strategy Guide</h2>
          <p className="text-gray-400 max-w-lg">
            Join other founders and marketing heads who read our weekly breakdowns of marketing and visual conversion optimization.
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
