"use client"


import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import { ArrowUpRightIcon } from '@/components/icons/SocialIcons'

const FILTERS = ['All', 'Full-Stack Dev', 'Frontend Dev', 'Mobile Dev']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = PROJECTS.filter(
    (p) => active === 'All' || p.category === active,
  )

  return (
    <section id="portfolio" className="relative z-10 py-28 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="My "
          highlight="Portfolio"
          description="A curated selection of projects I've designed and built across different industries."
        />
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              active === f
                ? 'bg-[#111] text-white'
                : 'bg-black/5 text-[#555] hover:bg-black/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number]
  index: number
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-2xl overflow-hidden border border-black/8 bg-white/50 hover:shadow-xl transition-all duration-400 cursor-pointer"
      whileHover={{ y: -6 }}
    >
      {/* Color bar at top */}
      <div
        className="h-2 w-full transition-all duration-300 group-hover:h-3"
        style={{ background: project.color }}
      />

      {/* Placeholder visual area */}
      <div
        className="h-48 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}08 100%)`,
        }}
      >
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${project.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke={project.color} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
        </svg>

        {/* Project number watermark */}
        <p
          className="absolute bottom-2 right-4 text-[6rem] font-bold leading-none select-none opacity-10 font-clash"
          style={{ color: project.color }}
        >
          {project.id.toString().padStart(2, '0')}
        </p>

        {/* Arrow */}
        <div
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
          style={{ background: project.color }}
        >
          <ArrowUpRightIcon className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="text-lg font-bold text-[#111] leading-tight font-clash"
          >
            {project.title}
          </h3>
          <span className="text-xs text-(--muted) font-medium shrink-0 mt-0.5">{project.year}</span>
        </div>

        <p className="text-xs font-semibold text-(--muted) uppercase tracking-widest mb-3">
          {project.category}
        </p>
        <p className="text-sm text-(--muted) leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: `${project.color}18`, color: project.color }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
