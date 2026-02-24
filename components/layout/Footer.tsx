import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants'
import { iconMap } from '@/lib/iconMap'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-black/8 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#111] rounded-full flex items-center justify-center text-white font-bold text-xs">
            Y
          </div>
          <span className="font-semibold text-sm">aw</span>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-(--muted) hover:text-brand-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social + copyright */}
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-(--muted) hover:text-brand-green transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            )
          })}
        </div>
      </div>

      <p className="text-center text-xs text-[#bbb] mt-8">
        © {year} Yaw Sarpong. Crafted with care in Ghana.
      </p>
    </footer>
  )
}
