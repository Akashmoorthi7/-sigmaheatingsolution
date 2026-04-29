// src/pages/About.tsx
import { useEffect, useRef } from 'react'
import { Flame, Settings, Droplets, Thermometer, Recycle, CheckCircle2 } from 'lucide-react'

const specializations = [
  { icon: Flame, label: 'Steam Boilers' },
  { icon: Thermometer, label: 'Thermic Fluid Heaters' },
  { icon: Droplets, label: 'Hot Water Systems' },
  { icon: Recycle, label: 'Waste Heat Recovery' },
]

const whyUs = [
  {
    title: 'Customized Engineering Solutions',
    desc: 'Every thermal system we build is tailored to the unique demands of your facility and process.',
  },
  {
    title: 'End-to-End Support',
    desc: 'From initial design and engineering through installation, commissioning, and ongoing maintenance — we are with you at every stage.',
  },
  {
    title: 'Reliable & Durable Systems',
    desc: 'Built to last, our systems are engineered with premium materials and precision manufacturing for minimal downtime.',
  },
  {
    title: 'Energy-Efficient Technologies',
    desc: 'We integrate the latest energy-saving technologies to reduce fuel consumption and lower operational costs.',
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

export default function About() {
  const ref = useSectionObserver()

  return (
    <div ref={ref} className="pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3560] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 80px)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-4">
            Who We Are
          </span>
          <h1 className="font-['Oswald'] text-5xl md:text-6xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-3">
                Our Story
              </span>
              <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                Sigma Heating Solution
              </h2>
              <p className="font-['DM_Sans'] text-gray-500 leading-relaxed mb-8">
               At Sigma Heating Solutions, we are your trusted partner for advanced heating, cooling, and water systems.
               With a dedicated team of skilled professionals, we specialize in delivering customized and energy efficient solutions.
               Our approach is carefully tailored to meet the diverse and demanding needs of industrial and commercial sectors, ensuring optimal performance and sustainability.

              </p>
              {/* <div className="flex flex-wrap gap-4">
                {[
                  { val: '500+', label: 'Projects' },
                  { val: '15+', label: 'Years' },
                  { val: '50+', label: 'Partners' },
                ].map((s) => (
                  <div key={s.label} className="flex-1 min-w-[100px] bg-gray-50 rounded-xl p-5 text-center">
                    <div className="font-['Oswald'] text-3xl font-bold text-[#F97316]">{s.val}</div>
                    <div className="font-['DM_Sans'] text-xs text-gray-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Visual */}
            <div className="fade-in-section delay-2">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-[#0B1F3A] to-[#1a3560] rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 p-8 w-full">
                    {specializations.map(({ icon: Icon, label }) => (
                      <div key={label} className="bg-white/10 rounded-xl p-5 flex flex-col items-center gap-3 hover:bg-[#F97316]/20 transition-colors group">
                        <Icon className="w-8 h-8 text-[#F97316]" />
                        <span className="font-['DM_Sans'] text-white/80 text-xs text-center font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 to-transparent pointer-events-none" />
                </div>
                {/* Orange badge */}
                <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-[#F97316] rounded-2xl flex flex-col items-center justify-center shadow-xl">
                  <Settings className="w-8 h-8 text-white mb-1" />
                  <span className="font-['Oswald'] text-white text-xs text-center leading-tight">ISO<br />Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Specialize In */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-section">
            <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-3">
              Expertise
            </span>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-[#0B1F3A]">
              What We Specialize In
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specializations.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`fade-in-section delay-${i + 1} group flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-16 h-16 bg-[#F97316]/10 group-hover:bg-[#F97316] rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#F97316] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-['Oswald'] text-base font-semibold text-[#0B1F3A]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-section">
            <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-3">
              Our Advantage
            </span>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-[#0B1F3A]">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className={`fade-in-section delay-${i + 1} flex gap-5 p-7 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#F97316]/30 hover:bg-[#F97316]/5 transition-all duration-300 group`}
              >
                <CheckCircle2 className="w-7 h-7 text-[#F97316] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-['Oswald'] text-xl font-semibold text-[#0B1F3A] mb-2">{item.title}</h3>
                  <p className="font-['DM_Sans'] text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
