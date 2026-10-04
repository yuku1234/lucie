import { motion } from 'framer-motion'

// Social icon components (inline SVG to avoid lucide version naming issues)
const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: GitHubIcon, href: '#', label: 'GitHub' },
]

export default function Footer() {
  const handleClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-indigo/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-14 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Startup & Innovation Community Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">S</div>`
                  }}
                />
              </div>
              <div>
                <div className="text-white font-semibold text-sm leading-tight">
                  Startup & Innovation
                </div>
                <div className="text-brand-lavender text-xs uppercase tracking-wider font-medium">
                  Community
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed">
              Ideas. People. Technology. Opportunities.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              A modern ecosystem where students, founders, builders and innovators come together to make things happen.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-glass-light border-glass flex items-center justify-center text-slate-500 hover:text-white hover:border-brand-electric/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Navigate</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                  className="block text-slate-500 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-4">
              <div>
                <div className="text-slate-600 text-xs uppercase tracking-wider mb-1">Email</div>
                <a
                  href="mailto:yuktirahangdale65@gmai.com"
                  className="text-slate-400 hover:text-brand-electric transition-colors duration-200 text-sm"
                >
                  yuktirahangdale65@gmai.com
                </a>
              </div>
              <div>
                <div className="text-slate-600 text-xs uppercase tracking-wider mb-2">Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-slate-400 text-sm">Actively building</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleClick('#contact') }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-royal to-brand-purple text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/30"
            >
              Join the Community →
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-xs">
            © 2026 Startup & Innovation Community. All rights reserved.
          </p>
          <p className="text-slate-800 text-xs">
            Built with purpose. Designed to inspire.
          </p>
        </div>
      </div>
    </footer>
  )
}
