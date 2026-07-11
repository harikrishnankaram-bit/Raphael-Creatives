'use client'

import { motion } from 'motion/react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative bg-black min-h-screen text-white">
      <SiteHeader />
      
      {/* Page Hero */}
      <section className="relative pt-40 pb-16 px-6 md:px-10 max-w-4xl mx-auto">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-black" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col gap-6"
        >
          <span className="text-teal-400 font-semibold tracking-wider text-xs uppercase">Compliance & Protection</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Privacy Policy &{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Terms of Use.
            </span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mt-2">
            Effective Date: July 9, 2026. This policy outlines how Raphael Creatives collects, uses, and protects your information across our digital marketing and brand acceleration channels.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 md:px-10 max-w-4xl mx-auto border-t border-white/10 leading-relaxed text-gray-300 space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Information Collection</h2>
          <p>
            We collect information that you voluntarily provide to us when visiting our Website, such as your name, corporate email address, company details, phone number, and marketing budgets when submitting contact forms or inquiring about our services.
          </p>
          <p>
            We also collect usage data automatically through cookies, web beacons, and similar tracker tools, including your IP address, browser metadata, operating systems, and page interaction times to help improve system speed and web layout.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. Use of Information</h2>
          <p>
            We use your personal data to respond directly to your client inquiries, deliver proposed strategy quotes, and schedule marketing consultation calls. We also send updates and promotional strategy articles in compliance with local regulations.
          </p>
          <p>
            Usage analytics help us analyze site behavior, detect and prevent fraud, optimize Core Web Vitals, and run A/B conversion rate optimization tests to improve our overall user experience.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Third-Party Services</h2>
          <p>
            We coordinate with secure, compliant third-party integrations to manage database flows and tracking. These include GA4 for behavioral analytics, MailChimp and HubSpot for automation and subscriber list handling, and secure CRM tools to manage sales pipelines. All services are obligated to protect data security.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">4. Data Protection & Security</h2>
          <p>
            We follow standard industry measures to safeguard your information against unauthorized access, loss, or disclosure. However, no data transmission method over the internet is completely secure, and we cannot guarantee absolute data protection.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">5. Governing Law & Jurisdiction</h2>
          <p>
            This Privacy Policy and all matters arising out of it shall be governed by, construed, and enforced in accordance with the laws of the State of New York, without regard to conflicts of law principles. Any legal actions shall be brought exclusively in the state or federal courts located in New York County, New York.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">6. Contact Information</h2>
          <p>
            For any queries regarding these privacy terms or to exercise your rights to review, update, or remove personal details, contact us at:{' '}
            <a href="mailto:support@raphaelcreatives.com" className="text-teal-400 hover:underline">
              support@raphaelcreatives.com
            </a>.
          </p>
        </div>

      </section>

      <SiteFooter />
    </main>
  )
}
