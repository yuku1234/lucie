import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta" ref={ref} className="py-32 lg:py-44 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-indigo/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative rounded-[2rem] overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #4f46e5 40%, #7c3aed 100%)',
          }}
        >
          {/* Internal glow */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px]" />
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 px-10 lg:px-20 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Left copy */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm font-medium mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Open to everyone
                  </span>
                  <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                    Have an idea
                    <br />
                    worth exploring?
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="space-y-2 text-white/70 text-lg leading-relaxed"
                >
                  <p>You don&apos;t need everything figured out before you start.</p>
                  <div className="space-y-1 pt-2">
                    {['Bring the idea.', 'Find the people.', 'Take the next step.'].map((line) => (
                      <div key={line} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-white/50" />
                        <p className="text-white/80 font-medium">{line}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right actions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 50px rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-between w-full bg-white text-navy-900 font-bold px-8 py-5 rounded-2xl text-lg group/btn transition-all duration-300"
                  style={{ color: '#0d1540' }}
                >
                  Join the Community
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.a>

                <motion.a
                  href="mailto:yuktirahangdale65@gmai.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-between w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-5 rounded-2xl text-lg hover:bg-white/15 transition-all duration-300 group/btn"
                >
                  Start a Conversation
                  <MessageCircle size={20} className="group-hover/btn:scale-110 transition-transform duration-200" />
                </motion.a>

                <p className="text-center text-white/40 text-sm pt-2">
                  No application required. No prerequisites. Just show up.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
