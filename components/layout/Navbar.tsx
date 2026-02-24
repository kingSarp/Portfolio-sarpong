"use client"


import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import { NAV_LINKS } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { DownloadIcon, MenuIcon, CloseIcon } from '@/components/icons/SocialIcons'
import { useScrollY } from '@/hooks/useScrollY'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollY = useScrollY()
  const scrolled = scrollY > 20

  // Close mobile nav on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <>
      <motion.nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-4 md:px-8 lg:px-12 transition-all duration-300',
          scrolled
            ? 'py-3 glass shadow-sm shadow-black/5'
            : 'py-5 bg-transparent',
        )}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-[#111] rounded-full flex items-center justify-center text-white font-bold text-sm tracking-tight group-hover:bg-brand-green transition-colors duration-200">
            Y
          </div>
          <span className="font-semibold text-[1.05rem] text-[#111]">aw</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="nav-link text-sm font-medium text-[#333] hover:text-brand-green transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            href="/yaw-sarpong-cv.pdf"
            variant="dark"
            size="sm"
            download
            icon={<DownloadIcon />}
          >
            Download CV
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 pt-20 glass flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  className="text-2xl font-semibold text-[#111] hover:text-brand-green transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Button href="/yaw-sarpong-cv.pdf" variant="dark" icon={<DownloadIcon />} download>
              Download CV
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
