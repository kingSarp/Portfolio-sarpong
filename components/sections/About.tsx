"use client"


import { motion } from 'framer-motion'
import Image from 'next/image'
import { STATS, SKILLS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { DownloadIcon } from '@/components/icons/SocialIcons'

export default function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left – image + stats */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Photo frame */}
          <div className="relative w-full rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
            <Image
              src="/images/yaw-sarpong.jpg"
              alt="Yaw Sarpong"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
              <p className="text-xs font-semibold text-[#555] uppercase tracking-wider mb-1">
                Currently available for
              </p>
              <p className="text-sm font-bold text-[#111]">
                Freelance & Full-Time Roles
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="text-xs text-brand-green font-semibold">Open to work</span>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl p-5"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <p
                  className="text-3xl font-bold text-[#111] leading-none mb-1 font-clash"
                >
                  {stat.value}
                </p>
                <p className="text-xs text-(--muted) font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right – text + skills */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeading
            eyebrow="About Me"
            title="Engineering "
            highlight="Solutions"
            description="I'm Yaw Sarpong, a software engineer based in Ghana. I have experience supporting mission-critical systems across banking, ports, fintech, NGOs, and e-commerce environments."
            className="mb-8"
          />

          <p className="text-sm text-(--muted) leading-relaxed mb-10">
            My strength lies in building and supporting production systems — from frontend
            applications with Angular and React to full-stack solutions with Node.js and REST APIs.
            I&apos;ve worked with teams at Stanbic Bank, Meridian Port Services, and fintech startups
            to ship reliable software used in real-world operations.
          </p>

          {/* Skills */}
          <div className="space-y-5 mb-10">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <SkillRow key={category} category={category} skills={skills as readonly string[]} />
            ))}
          </div>

          <Button
            href="/yaw-sarpong-cv.pdf"
            variant="dark"
            size="lg"
            download
            icon={<DownloadIcon />}
          >
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function SkillRow({
  category,
  skills,
}: {
  category: string
  skills: readonly string[]
}) {
  const labels: Record<string, string> = {
    languages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
  }
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[3px] text-(--muted) mb-2">
        {labels[category] ?? category}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/60 border border-black/8 text-[#444] hover:bg-brand-green hover:text-white hover:border-transparent transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
