"use client"


import { motion } from 'framer-motion'
import Image from 'next/image'
import RotatingRing from '@/components/ui/RotatingRing'
import CurvyLine from '@/components/ui/CurvyLine'
import CompanyCarousel from '@/components/ui/CompanyCarousel'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-28 pb-12 px-6">
      <motion.div
        className="flex flex-col items-center w-full max-w-5xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Photo Container */}
        <motion.div variants={item} className="relative" style={{ width: 360, height: 400 }}>
          {/* Rotating ring – top right */}
          <div className="absolute -top-2 -right-10 z-20">
            <RotatingRing />
          </div>

          {/* Green organic blob behind photo */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
            style={{
              width: 290,
              height: 320,
              background: 'linear-gradient(160deg, #b8d8cc 0%, #8fc4b4 100%)',
              borderRadius: '50% 50% 48% 48% / 40% 40% 60% 60%',
            }}
          />

          {/* Profile photo */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 overflow-hidden"
            style={{
              width: 275,
              height: 340,
              borderRadius: '50% 50% 48% 48% / 40% 40% 60% 60%',
            }}
          >
            <Image
              src="/images/yaw-sarpong.jpg"
              alt="Yaw Sarpong"
              fill
              className="object-cover object-top"
              priority
              sizes="275px"
            />
          </div>

          {/* Curvy SVG decorative lines */}
          <CurvyLine />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="-mt-4 text-center leading-none tracking-tight select-none font-clash"
          style={{
            fontSize: 'clamp(3.6rem, 9vw, 6rem)',
            fontWeight: 700,
            letterSpacing: '-3px',
          }}
        >
          Yaw Sarpon
          <span style={{ color: 'var(--green)' }}>g</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-3 text-xs font-semibold tracking-[4px] uppercase text-(--muted)"
        >
          Product Engineer
        </motion.p>

        {/* Company carousel */}
        <motion.div variants={item} className="w-full max-w-3xl">
          <CompanyCarousel />
        </motion.div>
      </motion.div>
    </section>
  )
}
