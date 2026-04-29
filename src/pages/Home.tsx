// src/pages/Home.tsx
import { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import IndustryCard from '../components/IndustryCard'
import { Link } from 'react-router-dom'
import {Factory, Utensils, FlaskConical, HeartPulse, Hotel, Sprout, Eye, Target, Flag, Phone, Star } from 'lucide-react'

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
    title: 'Food & Beverage Industry',
    subtitle: 'Energy-Efficient Heating for Safe Food Production',
    description:
      'Our industrial heating solutions ensure hygiene, exact temperature control, and energy savings at every stage of food processing — from cooking to packaging.',
  },
  {
    icon: FlaskConical,
    title: 'Pharmaceutical Industry',
    subtitle: 'Precision Thermal Control for Critical Manufacturing',
    description:
      'Our steam boilers and heat pump systems support GMP-compliant manufacturing, maintaining strict temperature control for autoclaving, CIP processes, and clean-room HVAC.',
  },
  {
    icon: HeartPulse,
    title: 'Hospitals & Healthcare',
    subtitle: 'Reliable Steam Systems for Healthcare Facilities',
    description:
      'Hospitals across India trust our energy-efficient heating systems for uninterrupted steam supply — essential for sterilization, laundry, kitchen, and space heating.',
  },
  {
    icon: Hotel,
    title: 'Hotels & Hospitality',
    subtitle: 'Solar Hot Water & Heat Pump Systems for Hotels',
    description:
      'Cut operational costs and improve guest comfort with our solar hot water systems and heat pump technology — ideal for hotels and resorts across India.',
  },
  {
    icon: Sprout,
    title: 'Agribusiness & Agriculture',
    subtitle: 'Sustainable Industrial Heating for Agriculture',
    description:
      'Boost farm productivity with reliable thermal systems for greenhouse heating, soil sterilization, and agricultural processing — designed for efficiency and low running costs.',
  },
]

const vmg = [
  {
    icon: Eye,
    label: 'Our Vision',
    text: 'To be the most trusted provider of industrial heating solutions in India — delivering innovative, energy-efficient, and environmentally responsible systems.',
    color: 'from-[#0B1F3A] to-[#122849]',
  },
  {
    icon: Target,
    label: 'Our Mission',
    text: 'To design and supply reliable, cost-effective steam boilers, heat pump systems, and solar hot water solutions that help industries reduce energy bills and increase productivity.',
    color: 'from-[#F97316] to-[#ea6400]',
  },
  {
    icon: Flag,
    label: 'Our Goal',
    text: 'To make advanced, energy-efficient heating solutions accessible to every factory, hospital, hotel, and industry across India.',
    color: 'from-[#0B1F3A] to-[#122849]',
  },
]

const trustSignals = [
  { val: '500+', label: 'Industrial Projects Completed' },
  { val: '15+', label: 'Years Serving Tamil Nadu' },
  { val: '50+', label: 'Industry Partners Across India' },
  { val: '98%', label: 'Client Satisfaction Rate' },
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
      {/* ── H1: Hero ── */}
      <Hero
        headline="Advanced Heating & Utility Solutions for Industry"
        subheading="Efficient • Reliable • Sustainable"
        ctaText="GET A FREE QUOTE"
        ctaLink="/contact"
      />

      {/* ── Trust Bar ── */}
      {/* <section className="bg-[#0B1F3A] py-10 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustSignals.map((s) => (
              <div key={s.label}>
                <div className="font-['Oswald'] text-3xl md:text-4xl font-bold text-[#F97316]">{s.val}</div>
                <div className="font-['DM_Sans'] text-xs text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── H2: Industries We Serve ── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-section">
            <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-3">
              Industries We Serve Across India
            </span>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-4">
              Industrial Heating Solutions Built for Your Sector
            </h2>
            <p className="font-['DM_Sans'] text-gray-500 max-w-2xl mx-auto">
              We provide customized steam boilers, heat pump systems, and solar hot water solutions for factories, hospitals, hotels, agribusinesses, and more — all across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={ind.title} className={`fade-in-section delay-${i}`}>
                <IndustryCard
                  icon={ind.icon}
                  title={ind.title}
                  subtitle={ind.subtitle}
                  description={ind.description}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 fade-in-section">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-['Oswald'] text-sm tracking-widest rounded transition-all duration-300"
            >
              VIEW ALL INDUSTRIES
            </Link>
          </div>
        </div>
      </section>

      {/* ── H2: Why Choose Sigma ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-3">
                Why Industries Choose Sigma Heating Solutions
              </span>
              <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                Redefining Industrial Utility for the Modern Era
              </h2>
              <p className="font-['DM_Sans'] text-gray-500 leading-relaxed mb-6">
                While others rely on old blueprints, we build for the future. <strong>Sigma Heating Solutions</strong>  is a Bengaluru-based startup driven by a mission to bring high-tech, data-driven heating and water solutions to industrial landscape. We specialize in precision-engineered <strong>heat pumps, solar thermal systems, and smart steam boilers</strong> designed for the modern factory
              </p>
              {/* <p className="font-['DM_Sans'] text-gray-500 leading-relaxed mb-8">
                is a Bengaluru-based startup driven by a mission to bring high-tech, data-driven heating and water solutions to industrial landscape. We specialize in precision-engineered <strong>heat pumps, solar thermal systems, and smart steam boilers</strong> designed for the modern factory
              </p> */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#ea6400] text-white font-['Oswald'] text-sm tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_24px_rgba(249,115,22,0.45)]"
                >
                  GET A FREE QUOTE
                </Link>
                <a
                  href="tel:+919731092255"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-['Oswald'] text-sm tracking-widest rounded transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  CALL NOW: +91 97310 92255
                </a>
              </div>
            </div>

            {/* Feature checklist */}
            <div className="fade-in-section delay-2 grid grid-cols-1 gap-4">
              {[
                { title: 'Custom-Engineered Systems', desc: 'Every industrial heating solution is designed specifically for your facility, process, and budget.' },
                { title: 'Energy-Efficient & Cost-Saving', desc: 'Our heat pump systems and solar hot water systems cut energy bills by up to 60% compared to traditional heating.' },
                { title: 'Full Service — Design to Maintenance', desc: 'We handle everything: site survey, engineering, installation, commissioning, and long-term AMC support.' },
                { title: 'Serving All of India', desc: 'Based in Chennai, we deliver industrial heating solutions to Coimbatore, Madurai, Trichy, and across India.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#F97316]/30 transition-colors group">
                  <Star className="w-6 h-6 text-[#F97316] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-['Oswald'] text-lg font-semibold text-[#0B1F3A] mb-1">{f.title}</h3>
                    <p className="font-['DM_Sans'] text-sm text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: Vision / Mission / Goal ── */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-section">
            <span className="inline-block font-['DM_Sans'] text-xs font-bold text-[#F97316] tracking-[0.2em] uppercase mb-3">
              Our Commitment
            </span>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-[#0B1F3A]">
              Driven by a Bigger Purpose
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

      {/* ── CTA Banner with local SEO ── */}
      <section className="relative py-20 overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] to-[#122849]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white mb-4">
            Looking for Industrial Heating Solutions in India?
          </h2>
          <p className="font-['DM_Sans'] text-white/70 mb-4 text-lg">
            We supply and install steam boilers, heat pump systems, solar hot water systems, and energy-efficient heating for factories, hospitals, hotels, and industries across India.
          </p>
          <p className="font-['DM_Sans'] text-white/50 mb-8 text-sm">
            📍 Serving Tamil Nadu, Karnataka, Andhra Pradesh & all of India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#F97316] hover:bg-[#ea6400] text-white font-['Oswald'] text-base tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_32px_rgba(249,115,22,0.55)]"
            >
              GET A FREE QUOTE TODAY
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/40 hover:border-white text-white font-['Oswald'] text-base tracking-widest rounded transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              CALL NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}