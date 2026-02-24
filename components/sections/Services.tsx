
import { SERVICES } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import { ArrowUpRightIcon } from '@/components/icons/SocialIcons'

// Server component by default
export default function Services() {
  return (
    <section id="services" className="relative z-10 py-28 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <SectionHeading
          eyebrow="What I Do"
          title="Services I "
          highlight="Offer"
          description="From frontend development to full-stack systems, I help teams build and maintain reliable production software."
        />
        <p className="text-sm text-(--muted) max-w-xs md:text-right">
          Available for freelance projects and full-time opportunities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <div className="group relative p-8 rounded-2xl border border-black/8 bg-white/40 hover:bg-white/70 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Number */}
      <p
        className="text-[5rem] font-bold leading-none select-none absolute -top-3 -right-2 text-black/5 group-hover:text-brand-green/10 transition-colors font-clash"
      >
        {service.id}
      </p>
      {/* Arrow icon */}
      <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300">
        <ArrowUpRightIcon className="w-3.5 h-3.5 text-(--muted) group-hover:text-white transition-colors" />
      </div>
      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-[#111] font-clash">
        {service.title}
      </h3>
      <p className="text-sm text-(--muted) leading-relaxed mb-6">{service.description}</p>
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <ServiceTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  )
}

function ServiceTag({ tag }: { tag: string }) {
  return (
    <span className="text-xs font-medium px-3 py-1 rounded-full bg-black/5 text-[#555] group-hover:bg-brand-green/10 group-hover:text-brand-green transition-colors">
      {tag}
    </span>
  )
}
