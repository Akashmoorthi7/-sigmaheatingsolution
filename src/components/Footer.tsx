// src/components/Footer.tsx
import { Link } from 'react-router-dom'
import { Flame, MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Top orange accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#F97316] via-orange-400 to-[#F97316]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#F97316] rounded flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="font-['Oswald'] text-xl">
                <span className="text-[#F97316]">SIGMA</span>
                <span className="text-white">HEATING</span>
              </span>
            </div>
            <p className="text-white/60 text-sm font-['DM_Sans'] leading-relaxed mb-6">
              Engineering precision. Delivering reliability. Building a sustainable thermal future for industries across India.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Oswald'] text-lg tracking-wider mb-5 text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-[#F97316] text-sm font-['DM_Sans'] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Oswald'] text-lg tracking-wider mb-5 text-white">
              CONTACT US
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-['DM_Sans'] text-white/60">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span>123 Industrial Zone, Chennai,<br />Tamil Nadu – 600001</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-['DM_Sans'] text-white/60">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#F97316] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-['DM_Sans'] text-white/60">
                <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                <a href="mailto:info@sigmaheating.com" className="hover:text-[#F97316] transition-colors">
                  info@sigmaheating.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/40 font-['DM_Sans']">
          <span>© 2025 SigmaHeating Solution. All rights reserved.</span>
          <span>Engineered for Excellence</span>
        </div>
      </div>
    </footer>
  )
}
