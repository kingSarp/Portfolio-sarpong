"use client"

import { motion, easeInOut } from 'framer-motion'

export default function CurvyLine() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.8, ease: easeInOut, delay: 0.5 },
    },
  }

  return (
    <svg
      viewBox="0 0 420 130"
      fill="none"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 w-105 pointer-events-none z-10"
    >
      <motion.path
        d="M 10 65 C 65 20, 110 100, 175 60 C 240 20, 275 100, 340 60 C 375 38, 408 72, 420 65"
        stroke="#2d9a6e"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M 50 92 C 105 60, 170 100, 235 75 C 300 50, 350 85, 400 70"
        stroke="#2d9a6e"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
    </svg>
  )
}
