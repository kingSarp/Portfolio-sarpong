"use client"


import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      className={clsx(align === 'center' && 'text-center', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[4px] uppercase text-(--green) mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className="font-clash text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-(--text)"
      >
        {parts[0]}
        {highlight && (
          <span className="text-(--green)">{highlight}</span>
        )}
        {parts[1]}
      </h2>
      {description && (
        <p className="mt-5 text-(--muted) leading-relaxed max-w-xl text-base">
          {description}
        </p>
      )}
    </motion.div>
  )
}
