import Link from 'next/link'
import { FantasyLogo } from './fantasy-logo'

export function SiteFooter() {
  return (
    <footer className="bg-black px-6 pb-10 pt-24 md:px-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          The creative partner chosen by market leaders to build brand systems — and scale digital growth.
        </h2>

        <div className="mt-20 flex flex-col gap-10 border-t border-border pt-10 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <FantasyLogo className="h-7 w-7 text-foreground" />
            <span className="text-sm font-semibold tracking-[0.25em] text-foreground">
              RAPHAEL
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <Link href="/about-us" className="transition-colors hover:text-foreground">
              About Us
            </Link>
            <Link href="/main-services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/portfolio2" className="transition-colors hover:text-foreground">
              Portfolio
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground">
              Blog
            </Link>
            <Link href="/contact-us" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Raphael Creatives &middot;{' '}
            <Link href="/policy" className="transition-colors hover:text-foreground">
              Privacy &amp; Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
