"use client"

import { motion } from 'framer-motion'

interface RotatingRingProps {
  text?: string
  size?: number
}

export default function RotatingRing({
  text = "COME ON LET'S TALK · ",
  size = 110,
}: RotatingRingProps) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Spinning text ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 110 110" width={size} height={size}>
          <defs>
            <path
              id="textCircle"
              d="M 55,55 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text
            fontSize="10"
            fontFamily="var(--font-instrument), sans-serif"
            fontWeight="600"
            fill="#111"
            letterSpacing="3"
          >
            <textPath href="#textCircle">{text}</textPath>
          </text>
        </svg>
      </motion.div>

      {/* Static center dot */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/20"
        style={{ width: 22, height: 22, background: 'var(--bg)' }}
      />
    </div>
  )
}
