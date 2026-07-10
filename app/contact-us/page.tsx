'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

type Tab = 'Inquiries' | 'Find us' | 'Follow us'

export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>('Inquiries')
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', company: '', email: '', message: '', agree: false })

  const copyToClipboard = () => {
    navigator.clipboard.writeText('support@raphaelcreatives.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formState.name && formState.email && formState.agree) {
      setSubmitted(true)
    }
  }

  return (
    <main className="relative bg-black min-h-screen text-white">
      <SiteHeader />
      
      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-45">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start min-h-[70vh]">
          
          {/* Left Column: Direct Info & Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-start pt-4">
            
            {/* Left Header */}
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider block">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
                Let&apos;s start a conversation.
              </h1>
            </div>

            {/* Tabs Row */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {(['Inquiries', 'Find us', 'Follow us'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4.5 py-1.8 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border ${
                    activeTab === tab
                      ? 'bg-white text-black border-white font-bold'
                      : 'bg-zinc-950 border-white/10 text-gray-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dynamic Content Block */}
            <div className="min-h-[220px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                {activeTab === 'Inquiries' && (
                  <motion.div
                    key="inquiries"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-5"
                  >
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider block">Email Inquiry</span>
                    <div className="flex items-center gap-3">
                      <a
                        href="mailto:support@raphaelcreatives.com"
                        className="text-3xl md:text-5xl font-semibold tracking-tight text-white hover:text-teal-300 transition-colors break-all leading-none"
                      >
                        support@raphaelcreatives.com
                      </a>
                      <button
                        onClick={copyToClipboard}
                        className="p-2 bg-zinc-900 border border-white/10 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                        title="Copy to clipboard"
                      >
                        {copied ? (
                          <span className="text-teal-400 text-xs">✓</span>
                        ) : (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        )}
                      </button>
                    </div>

                    <div className="mt-4">
                      <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider block mb-1">Phone Line</span>
                      <a href="tel:+919787046331" className="text-2xl font-semibold text-gray-300 hover:text-teal-400 hover:underline transition-colors">
                        +91 97870 46331
                      </a>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'Find us' && (
                  <motion.div
                    key="findus"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-4"
                  >
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider block">Office HQ</span>
                    <p className="text-2xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                      10, main road, Perumalpatti,<br />
                      SankaranKovil Taluk, Tenkasi,<br />
                      Tamil Nadu 627753, India
                    </p>
                  </motion.div>
                )}

                {activeTab === 'Follow us' && (
                  <motion.div
                    key="followus"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-4"
                  >
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider block">Social Directories</span>
                    <div className="flex flex-col gap-3 mt-2">
                      <a href="#" className="text-2xl md:text-3xl font-semibold text-gray-300 hover:text-teal-400 transition-colors w-fit">
                        LinkedIn
                      </a>
                      <a href="#" className="text-2xl md:text-3xl font-semibold text-gray-300 hover:text-teal-400 transition-colors w-fit">
                        Instagram
                      </a>
                      <a href="#" className="text-2xl md:text-3xl font-semibold text-gray-300 hover:text-teal-400 transition-colors w-fit">
                        Facebook
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Contact Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-white text-black p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col gap-8">
              
              <div className="flex flex-col gap-1.5 border-b border-gray-100 pb-4">
                <h2 className="text-3xl font-bold tracking-tight text-black">Get in touch</h2>
                <p className="text-sm text-gray-500 font-medium">We&apos;d love to hear from you and your team</p>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex flex-col gap-1 relative">
                      <input
                        required
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your Name"
                        className="bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors w-full text-black placeholder-gray-400 font-medium"
                      />
                    </div>

                    <div className="flex flex-col gap-1 relative">
                      <input
                        type="text"
                        id="company"
                        value={formState.company}
                        onChange={e => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Company"
                        className="bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors w-full text-black placeholder-gray-400 font-medium"
                      />
                    </div>

                    <div className="flex flex-col gap-1 relative">
                      <input
                        required
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                        placeholder="Email"
                        className="bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors w-full text-black placeholder-gray-400 font-medium"
                      />
                    </div>

                    <div className="flex flex-col gap-1 relative">
                      <textarea
                        id="message"
                        rows={3}
                        value={formState.message}
                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Message"
                        className="bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors w-full text-black placeholder-gray-400 font-medium resize-none"
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-2.5 mt-2">
                      <input
                        required
                        type="checkbox"
                        id="agree"
                        checked={formState.agree}
                        onChange={e => setFormState({ ...formState, agree: e.target.checked })}
                        className="mt-1 cursor-pointer accent-teal-600"
                      />
                      <label htmlFor="agree" className="text-xs text-gray-500 select-none leading-relaxed cursor-pointer font-medium">
                        I agree to the{' '}
                        <a href="#" className="underline hover:text-black transition-colors">
                          privacy policy
                        </a>
                        .
                      </label>
                    </div>

                    {/* Submit Button aligned bottom right */}
                    <button
                      type="submit"
                      disabled={!formState.agree}
                      className="self-end bg-gray-400 text-white hover:bg-black font-semibold text-sm rounded-lg px-7 py-2.5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      Submit
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  >
                    <div className="h-16 w-16 bg-teal-500/10 border border-teal-500/25 rounded-full flex items-center justify-center text-teal-400 text-2xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-black mt-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Thank you, {formState.name}. A growth strategist will reach out to you within 4 business hours to set up your consultation.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
