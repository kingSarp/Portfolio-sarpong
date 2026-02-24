"use client"


import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '@/lib/constants'
import { iconMap } from '@/lib/iconMap'

export default function SocialSidebar() {
  return (
    <motion.div
      className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      {/* Vertical line top */}
      <div className="w-px h-12 bg-black/15" />

      {SOCIAL_LINKS.map((link, i) => {
        const Icon = iconMap[link.icon]
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-(--muted) hover:text-brand-green transition-colors duration-200"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.1 }}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        )
      })}

      {/* Vertical line bottom */}
      <div className="w-px h-12 bg-black/15" />
    </motion.div>
  )
}
