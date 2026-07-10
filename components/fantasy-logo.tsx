'use client'

import { motion } from 'motion/react'

/**
 * The Fantasy mark: a concave "four-point" squircle that gently morphs
 * between a rounded-star and a rounded-square, echoing the animated logo
 * on the original site.
 */
export function FantasyLogo({ className }: { className?: string }) {
  return (
    <img
      src="/Raphael.png"
      alt="Raphael Creatives Logo"
      className={`${className} object-contain rounded-full`}
    />
  )
}

