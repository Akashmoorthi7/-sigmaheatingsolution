// src/components/Hero.tsx
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  headline: string
  subheading: string
  ctaText: string
  ctaLink: string
  videoSrc?: string
}

export default function Hero({ headline, subheading, ctaText, ctaLink, videoSrc }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
        />
      ) : (
        /* Industrial gradient fallback */
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#122849] to-[#0d2847]">
          {/* Subtle geometric pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 60px,
                  rgba(255,255,255,1) 60px,
                  rgba(255,255,255,1) 61px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 60px,
                  rgba(255,255,255,1) 60px,
                  rgba(255,255,255,1) 61px
                )
              `,
            }}
          />
          {/* Radial orange glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#F97316]/10 blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F97316]/05 blur-2xl" />
        </div>
      )}

      {/* Dark overlay for video */}
      {videoSrc && (
        <div className="absolute inset-0 bg-[#0B1F3A]/70" />
      )}

      {/* Diagonal bottom cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
          <span className="text-[#F97316] font-['DM_Sans'] text-sm font-medium tracking-wide">
            Industrial Thermal Engineering
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-['Oswald'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
        >
          {headline}
        </h1>

        {/* Subheading */}
        <p className="font-['DM_Sans'] text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed mb-10">
          {subheading}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ctaLink}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#ea6400] text-white font-['Oswald'] text-base tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_32px_rgba(249,115,22,0.55)] hover:-translate-y-0.5"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 hover:border-[#F97316] text-white hover:text-[#F97316] font-['Oswald'] text-base tracking-widest rounded transition-all duration-300"
          >
            OUR SERVICES
          </Link>
        </div>

        {/* Stats row */}
        {/* <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { val: '500+', label: 'Projects Delivered' },
            { val: '15+', label: 'Years Experience' },
            { val: '50+', label: 'Industry Partners' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-['Oswald'] text-3xl md:text-4xl font-bold text-[#F97316]">{stat.val}</div>
              <div className="font-['DM_Sans'] text-xs text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="font-['DM_Sans'] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
