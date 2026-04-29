// src/pages/Industries.tsx
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {Factory, Utensils, FlaskConical, HeartPulse, Hotel, Sprout, ArrowRight } from 'lucide-react'

const industries = [
    {
  icon: Factory,
  title: 'General Manufacturing Industry',
  subtitle: 'High-Performance Heating for Industrial Production',
  description:
    'Our industrial boilers and heat pump systems support a wide range of manufacturing processes delivering consistent heat, improved efficiency, and reduced operational costs.',
  },
  {
    icon: Utensils,
    title: 'Food & Beverage',
    subtitle: 'Efficient Heating for Safe & Consistent Production',
    description: 'Ensure hygiene, temperature precision, and energy savings in every stage of food processing. Our boiler systems meet FSSAI and international food safety standards, delivering the exact steam quality needed for cooking, pasteurization, sterilization, and packaging operations.',
    color: '#F97316',
  },
  {
    icon: FlaskConical,
    title: 'Pharmaceutical',
    subtitle: 'Precision Thermal Control for Critical Applications',
    description: 'Maintain strict compliance and consistent temperature control for sensitive manufacturing. Our systems support GMP-compliant steam generation for autoclaving, clean-in-place processes, and HVAC applications in pharmaceutical plants.',
    color: '#F97316',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    subtitle: 'Reliable Heating Systems for Healthcare Facilities',
    description: 'Deliver safe and uninterrupted steam supply for sterilization and facility heating. Hospitals and clinics depend on our systems for central sterile services, laundry operations, kitchen steam, and space heating — all with zero compromise on safety.',
    color: '#F97316',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    subtitle: 'Energy-Efficient Comfort Solutions',
    description: 'Optimize heating systems and reduce operational costs for hotels and resorts. Our smart thermal controls and energy-efficient boilers help hospitality businesses slash energy bills while maintaining perfect comfort for guests year-round.',
    color: '#F97316',
  },
  {
    icon: Sprout,
    title: 'Agribusiness',
    subtitle: 'Sustainable Heating for Agricultural Operations',
    description: 'Improve productivity and efficiency with reliable thermal systems. From greenhouse heating and soil sterilization to food processing and storage, our systems support the full agricultural value chain with sustainable, cost-effective thermal energy.',
    color: '#F97316',
  },
]

function useSectionObserver() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    )
    el.querySelectorAll('.fade-in-section').forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Industries() {
  const ref = useSectionObserver()

  return (
    <div ref={ref} className="pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3560] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 80px)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-4">
            Our Reach
          </span>
          <h1 className="font-['Oswald'] text-5xl md:text-6xl font-bold text-white">
            Industries We Serve
          </h1>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-section">
            <p className="font-['DM_Sans'] text-gray-500 text-lg max-w-2xl mx-auto">
              Purpose-built thermal solutions across diverse sectors.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              const isEven = i % 2 === 0
              return (
                <div
                  key={ind.title}
                  className={`fade-in-section delay-${i + 1} group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Color block */}
                  <div className="w-full md:w-72 lg:w-80 shrink-0 bg-gradient-to-br from-[#0B1F3A] to-[#122849] flex flex-col items-center justify-center py-12 px-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#F97316]/0 group-hover:bg-[#F97316]/10 transition-colors duration-300" />
                    <div className="w-16 h-16 bg-[#F97316] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-['Oswald'] text-2xl font-bold text-white mb-2">{ind.title}</h3>
                    <span className="font-['DM_Sans'] text-[#F97316] text-xs font-semibold uppercase tracking-wider">{ind.subtitle}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <p className="font-['DM_Sans'] text-gray-500 leading-relaxed mb-6">{ind.description}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[#F97316] font-['DM_Sans'] font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
