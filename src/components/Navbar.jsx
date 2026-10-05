import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-glass border-b border-glass py-3'
            : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden bg-white ring-1 ring-white/10">
              <img
                src="/logo.png"
                alt="Startup & Innovation Community Logo"
                className="w-full h-full object-contain p-0.5"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">S</div>`
                }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-sm leading-tight block">
                Startup & Innovation
              </span>
              <span className="text-brand-lavender text-xs font-medium tracking-wider uppercase">
                Community
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-electric group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-1.5 bg-gradient-to-r from-brand-royal to-brand-purple text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300"
            >
              Join Us
              <ArrowUpRight size={15} />
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 rounded-lg bg-glass-light border-glass"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-navy-950/95 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu content */}
            <div className="relative z-10 flex flex-col h-full px-6 pt-24 pb-12">
              {/* Logo in menu */}
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden bg-white ring-1 ring-white/10">
                  <img
                    src="/logo.png"
                    alt="Startup & Innovation Community Logo"
                    className="w-full h-full object-contain p-0.5"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">S</div>`
                    }}
                  />
                </div>
                <div>
                  <span className="text-white font-semibold block">Startup & Innovation</span>
                  <span className="text-brand-lavender text-sm uppercase tracking-wider">Community</span>
                </div>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="text-2xl font-semibold text-slate-300 hover:text-white py-3 border-b border-white/5 transition-colors duration-200 flex items-center justify-between group"
                  >
                    {link.label}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-electric" />
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-royal to-brand-purple text-white font-semibold py-4 rounded-2xl text-lg"
              >
                Join Us
                <ArrowUpRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
