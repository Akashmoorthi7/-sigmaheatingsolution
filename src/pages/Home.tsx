// src/pages/Home.tsx
import { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import IndustryCard from '../components/IndustryCard'
import { Utensils, FlaskConical, HeartPulse, Hotel, Sprout, Eye, Target, Flag } from 'lucide-react'

const industries = [
  {
    icon: Utensils,
    title: 'Food & Beverage',
    subtitle: 'Efficient Heating for Safe & Consistent Production',
    description: 'Ensure hygiene, temperature precision, and energy savings in every stage of food processing.',
  },
  {
    icon: FlaskConical,
    title: 'Pharmaceutical',
    subtitle: 'Precision Thermal Control for Critical Applications',
    description: 'Maintain strict compliance and consistent temperature control for sensitive manufacturing.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    subtitle: 'Reliable Heating Systems for Healthcare Facilities',
    description: 'Deliver safe and uninterrupted steam supply for sterilization and facility heating.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    subtitle: 'Energy-Efficient Comfort Solutions',
    description: 'Optimize heating systems and reduce operational costs for hotels and resorts.',
  },
  {
    icon: Sprout,
    title: 'Agribusiness',
    subtitle: 'Sustainable Heating for Agricultural Operations',
    description: 'Improve productivity and efficiency with reliable thermal systems.',
  },
]

const vmg = [
  {
    icon: Eye,
    label: 'Our Vision',
    text: 'To become a trusted leader in industrial thermal solutions by delivering innovative, energy-efficient, and environmentally responsible technologies.',
    color: 'from-[#0B1F3A] to-[#122849]',
  },
  {
    icon: Target,
    label: 'Our Mission',
    text: 'To design and deliver reliable, cost-effective, and high-performance thermal systems that improve productivity and reduce energy consumption.',
    color: 'from-[#F97316] to-[#ea6400]',
  },
  {
    icon: Flag,
    label: 'Our Goal',
    text: 'To make advanced thermal solutions accessible to every industry while supporting a sustainable energy transition.',
    color: 'from-[#0B1F3A] to-[#122849]',
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

export default function Home() {
  const ref = useSectionObserver()

  return (
    <div ref={ref}>
      {/* Hero */}
      <Hero
        headline="Industrial Steam Boiler Manufacturers You Can Trust"
        subheading="High-performance, energy-efficient boiler systems engineered for reliability, safety, and long-term savings across industries."
        ctaText="GET A QUOTE"
        ctaLink="/contact"
      />

      {/* Industries Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 fade-in-section">
            <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-3">
              Industries We Serve
            </span>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-4">
              Smart Thermal Solutions Built for Your Industry
            </h2>
            <p className="font-['DM_Sans'] text-gray-500 max-w-2xl mx-auto">
              We serve diverse sectors with customized thermal engineering.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={ind.title}
                className={`fade-in-section delay-${i + 1}`}
              >
                <IndustryCard
                  icon={ind.icon}
                  title={ind.title}
                  subtitle={ind.subtitle}
                  description={ind.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission / Goal */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-section">
            <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-3">
              Who We Are
            </span>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-[#0B1F3A]">
              Driven by Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vmg.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className={`fade-in-section delay-${i + 1} group relative rounded-2xl bg-gradient-to-br ${item.color} p-8 text-white overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-white/5" />
                  <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-['Oswald'] text-2xl font-bold mb-4">{item.label}</h3>
                  <p className="font-['DM_Sans'] text-white/80 leading-relaxed text-sm">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] to-[#122849]" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Optimize Your Industrial Heating?
          </h2>
          <p className="font-['DM_Sans'] text-white/70 mb-8 text-lg">
            Let our engineers design a custom thermal solution for your facility.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#F97316] hover:bg-[#ea6400] text-white font-['Oswald'] text-base tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_32px_rgba(249,115,22,0.55)]"
          >
            START YOUR PROJECT
          </a>
        </div>
      </section>
    </div>
  )
}
