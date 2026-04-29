// src/pages/Services.tsx
import { useEffect, useRef } from 'react'
import ServiceCard from '../components/ServiceCard'
import { Sun, Flame, Thermometer, Zap, Droplets, Recycle } from 'lucide-react'

const services = [
  {
  icon: Sun,
  title: 'Heat Pump Systems',
  description: 'Advanced energy-efficient heat pump solutions for hot water and process heating, reducing electricity consumption.',
},
  {
    icon: Flame,
    title: 'Steam Boilers',
    description: 'High-efficiency packaged and shell-type boilers designed for consistent steam output with minimal fuel consumption.',
  },
  {
    icon: Thermometer,
    title: 'Thermic Fluid Heaters',
    description: 'High-temperature precision heating systems for process industries requiring indirect heat transfer.',
  },
  {
    icon: Zap,
    title: 'Steam Generators',
    description: 'Compact, fast-response steam production units ideal for industrial environments.',
  },
  {
    icon: Droplets,
    title: 'Hot Water Boilers',
    description: 'Energy-saving coil-type systems for process and utility hot water requirements.',
  },
  {
    icon: Recycle,
    title: 'Waste Heat Recovery Systems',
    description: 'Convert untapped exhaust heat into usable energy, cutting costs and carbon footprint.',
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

export default function Services() {
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
            What We Offer
          </span>
          <h1 className="font-['Oswald'] text-5xl md:text-6xl font-bold text-white">
            Our Services & Products
          </h1>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-section">
            <p className="font-['DM_Sans'] text-gray-500 text-lg max-w-2xl mx-auto">
              High-performance thermal systems engineered for every industrial need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={service.title} className={`fade-in-section delay-${i}`}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>

          {/* Process timeline */}
          <div className="mt-24 fade-in-section">
            <div className="text-center mb-12">
              <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-3">
                How We Work
              </span>
              <h2 className="font-['Oswald'] text-4xl font-bold text-[#0B1F3A]">Our Process</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              {/* Connector line */}
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 hidden md:block" />

              {[
                { num: '01', label: 'Consultation', desc: 'We understand your requirements and site conditions.' },
                { num: '02', label: 'Engineering', desc: 'Our team designs a custom thermal solution.' },
                { num: '03', label: 'Installation', desc: 'Precision installation and system commissioning.' },
                { num: '04', label: 'Support', desc: 'Ongoing maintenance and performance monitoring.' },
              ].map((step, i) => (
                <div key={step.num} className={`flex flex-col items-center text-center px-4 fade-in-section delay-${i + 1}`}>
                  <div className="w-16 h-16 rounded-full bg-[#0B1F3A] border-4 border-white shadow-lg flex items-center justify-center mb-4 z-10 relative">
                    <span className="font-['Oswald'] text-[#F97316] text-xl font-bold">{step.num}</span>
                  </div>
                  <h3 className="font-['Oswald'] text-lg font-semibold text-[#0B1F3A] mb-2">{step.label}</h3>
                  <p className="font-['DM_Sans'] text-sm text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
