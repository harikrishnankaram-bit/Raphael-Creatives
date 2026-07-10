'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FantasyLogo } from './fantasy-logo'

const primaryNav = [
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/main-services' },
  { name: 'Portfolio', path: '/portfolio2' },
  { name: 'Blog', path: '/blog' }
]

const secondaryNav = [
  { name: 'Contact Us', path: '/contact-us', highlight: true },
  { name: 'FAQ', path: '/#faq', highlight: false }
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className={`flex items-center gap-3 logo-fantasy ${open ? 'text-white' : 'text-black'}`}>
          <FantasyLogo className="h-8 w-8" />
          <AnimatePresence>
            {!open && (
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                className="text-sm font-semibold tracking-[0.25em] text-black"
              >
                RAPHAEL
              </motion.span>
            )}
          </AnimatePresence>
          {open && (
            <span className="text-sm font-semibold tracking-[0.25em] text-white">
              RAPHAEL
            </span>
          )}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 items-center justify-center rounded-xl bg-secondary/70 px-4 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-secondary cursor-pointer z-50"
        >
          {open ? (
            <CloseIcon />
          ) : (
            <span className="hidden md:inline">Menu</span>
          )}
          {!open && <MenuIcon className="md:hidden" />}
        </button>
      </header>

      <AnimatePresence>
        {open && <MenuOverlay onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

function MenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-40 bg-background"
    >
      <div className="flex h-full flex-col justify-center px-6 md:px-10">
        <nav className="flex flex-col items-center gap-2">
          {primaryNav.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={item.path}
                onClick={onClose}
                className="text-5xl font-bold leading-[1.1] text-foreground transition-opacity hover:opacity-60 md:text-8xl block py-1"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-8 text-muted-foreground"
        >
          {secondaryNav.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={onClose}
              className={`text-base transition-colors hover:text-foreground ${
                item.highlight ? 'text-white border-b-2 border-teal-400 pb-1 font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-8 px-6 pb-8 md:flex-row md:items-end md:justify-between md:px-10"
      >
        <p className="pointer-events-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
          Ready to scale your digital growth?{' '}
          <Link href="/contact-us" onClick={onClose} className="font-medium text-foreground underline underline-offset-4">
            Let&apos;s talk
          </Link>
        </p>

        <Link
          href="/main-services"
          onClick={onClose}
          className="pointer-events-auto flex w-full items-center justify-between gap-6 rounded-xl border border-border bg-secondary/40 p-4 backdrop-blur-md transition-colors hover:bg-secondary/70 md:w-96"
        >
          <span className="text-xs font-semibold uppercase leading-snug tracking-wide text-muted-foreground">
            The path to brand
            <br />
            market leadership
          </span>
          <span className="h-14 w-20 shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-fantasy-blue/50 to-fantasy-navy">
            <span className="flex h-full w-full items-center justify-center">
              <FantasyLogo className="h-6 w-6 text-foreground/70" />
            </span>
          </span>
        </Link>
      </motion.div>
    </motion.div>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path d="M3 6h14M3 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
