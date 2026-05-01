// src/pages/Contact.tsx
import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

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

export default function Contact() {
  const ref = useSectionObserver()
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

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
            Reach Us
          </span>
          <h1 className="font-['Oswald'] text-5xl md:text-6xl font-bold text-white">
            Get In Touch
          </h1>
        </div>
      </div>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-section">
            <p className="font-['DM_Sans'] text-gray-500 text-lg max-w-2xl mx-auto">
              Have a project in mind? Our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="fade-in-section">
              <h2 className="font-['Oswald'] text-3xl font-bold text-[#0B1F3A] mb-8">Contact Information</h2>

              <div className="flex flex-col gap-6 mb-10">
                {[
                  {
                    icon: MapPin,
                    label: 'Our Address',
                    value: '25(5), 13-4th Street, Surandai,Tamil Nadu – 627859',
                    href: undefined,
                  },
                  {
                    icon: Phone,
                    label: 'Phone Number',
                    value: '+91 97310 92255',
                    href: 'tel:+919731092255',
                  },
                  {
                    icon: Mail,
                    label: 'Email Address',
                    value: 'sigmaheatingsolution@gmail.com',
                    href: 'mailto:sigmaheatingsolution@gmail.com',
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-5 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#F97316]/30 transition-colors group">
                      <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-['DM_Sans'] text-xs text-gray-400 mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-['DM_Sans'] text-[#0B1F3A] font-medium hover:text-[#F97316] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-['DM_Sans'] text-[#0B1F3A] font-medium">{item.value}</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64">
                <iframe
                  title="SigmaHeating Bengaluru Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.65009650835!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f7d3a3c9%3A0x7f8c8b8e1f7f2d3!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div className="fade-in-section delay-2">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-['Oswald'] text-2xl font-bold text-[#0B1F3A] mb-3">Message Sent!</h3>
                    <p className="font-['DM_Sans'] text-gray-500">
                      Thank you! We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                      className="mt-8 px-6 py-3 border border-[#F97316] text-[#F97316] font-['DM_Sans'] font-medium rounded-lg hover:bg-[#F97316] hover:text-white transition-all"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-['Oswald'] text-3xl font-bold text-[#0B1F3A] mb-8">Send Us a Message</h2>

                    <div className="flex flex-col gap-5">
                      {/* Name */}
                      <div>
                        <label className="block font-['DM_Sans'] text-sm font-medium text-gray-600 mb-1.5">
                          Full Name <span className="text-[#F97316]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg font-['DM_Sans'] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all"
                        />
                      </div>

                      {/* Email + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-['DM_Sans'] text-sm font-medium text-gray-600 mb-1.5">
                            Email <span className="text-[#F97316]">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg font-['DM_Sans'] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block font-['DM_Sans'] text-sm font-medium text-gray-600 mb-1.5">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg font-['DM_Sans'] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block font-['DM_Sans'] text-sm font-medium text-gray-600 mb-1.5">
                          Message <span className="text-[#F97316]">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Describe your project or inquiry..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg font-['DM_Sans'] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full py-4 bg-[#F97316] hover:bg-[#ea6400] disabled:bg-orange-300 text-white font-['Oswald'] text-base tracking-widest rounded-lg transition-all duration-300 hover:shadow-[0_0_24px_rgba(249,115,22,0.45)] flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            SEND MESSAGE
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
