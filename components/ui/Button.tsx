"use client"

import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'dark' | 'outline' | 'green'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  download?: boolean
}

export default function Button({
  children,
  variant = 'dark',
  size = 'md',
  href,
  onClick,
  className,
  icon,
  iconPosition = 'right',
  download,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-200 cursor-pointer select-none'

  const variants = {
    dark: 'bg-[#111] text-white hover:bg-brand-green hover:scale-[1.03]',
    outline:
      'bg-transparent text-[#111] border border-[#111] hover:bg-[#111] hover:text-white hover:scale-[1.03]',
    green: 'bg-brand-green text-white hover:bg-[#1f7a54] hover:scale-[1.03]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  const classes = clsx(base, variants[variant], sizes[size], className)

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="w-4 h-4">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="w-4 h-4">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        download={download}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={classes} whileTap={{ scale: 0.97 }}>
      {content}
    </motion.button>
  )
}
