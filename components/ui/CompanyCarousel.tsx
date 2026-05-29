"use client"

import { useState } from 'react'
import Image from 'next/image'
import { BRANDS } from '@/lib/constants'

type Brand = (typeof BRANDS)[number]

function BrandPill({ brand }: { brand: Brand }) {
  const [imgError, setImgError] = useState(false)

  const showText = !brand.logo || imgError

  return (
    <div
      className="
        shrink-0 flex flex-col items-center justify-center gap-2
        h-22 px-6
        hover:-translate-y-1 hover:scale-[1.04]
        transition-all duration-300 cursor-default
        select-none
      "
      style={{ minWidth: brand.wide ? 160 : 100 }}
    >
      {!showText ? (
        <div
          className="relative flex items-center justify-center"
          style={{
            width: brand.wide ? 140 : 56,
            height: brand.wide ? 44 : 56,
          }}
        >
          <Image
            src={brand.logo as string}
            alt={brand.name}
            fill
            className="object-contain"
            sizes={brand.wide ? '140px' : '56px'}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <span
          className="text-sm font-bold leading-tight text-center"
          style={{ color: brand.accent }}
        >
          {brand.name}
        </span>
      )}
    </div>
  )
}

export default function CompanyCarousel() {
  // Duplicate the list for seamless infinite loop
  const doubled = [...BRANDS, ...BRANDS]

  return (
    <div className="w-full mt-14">
      {/* Eyebrow */}
      <p className="text-center text-[11px] font-semibold tracking-[3px] uppercase text-(--muted) mb-6">
        Trusted &amp; worked with
      </p>

      {/* Masked outer wrapper — group class allows CSS pause-on-hover */}
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        {/* Scrolling track */}
        <div
          className="marquee-track gap-4"
          style={{
            /* Pause animation when the outer group is hovered */
            animationPlayState: undefined,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'running')
          }
        >
          {doubled.map((brand, i) => (
            <BrandPill key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  )
}
