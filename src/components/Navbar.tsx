// src/components/Navbar.tsx
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Flame } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1F3A] shadow-[0_4px_24px_rgba(0,0,0,0.35)]'
          : 'bg-[#0B1F3A]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            {/* <div className="w-9 h-9 bg-[#F97316] rounded flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Flame className="w-5 h-5 text-white" />
            </div> */}
              <img
                src="/logo.png"
                alt="Sigma Heating Solutions"
                 className="w-9 h-9 object-contain shrink-0 group-hover:scale-110 transition-transform"
              />
            <span className="font-['Oswald'] text-2xl md:text-3xl tracking-wide">
              <span className="text-[#F97316]">SIGMA</span>
              <span className="text-white"> HEATING SOLUTIONS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded font-['DM_Sans'] font-medium text-sm tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-[#F97316]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-[#F97316] hover:bg-[#ea6400] text-white font-['Oswald'] text-sm tracking-wider rounded transition-all duration-200 hover:shadow-[0_0_16px_rgba(249,115,22,0.5)]"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#0B1F3A] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded font-['DM_Sans'] font-medium text-sm transition-all ${
                  isActive
                    ? 'text-[#F97316] bg-[#F97316]/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 bg-[#F97316] text-white font-['Oswald'] text-sm tracking-wider rounded text-center"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </nav>
  )
}