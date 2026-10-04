import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const highlights = [
  { label: 'IDEAS', desc: 'Every great thing starts with a spark of curiosity.' },
  { label: 'PEOPLE', desc: 'Builders, designers, founders — the human network.' },
  { label: 'BUILDING', desc: 'Turning concepts into tangible, real products.' },
  { label: 'OPPORTUNITY', desc: 'Access to programs, mentors and ecosystems.' },
]

export default function Intro() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-32 lg:py-44 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-indigo/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left: Large editorial statement */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-electric text-sm font-semibold uppercase tracking-widest">Our Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight"
            >
              <span className="text-white">Good ideas</span>
              <br />
              <span className="text-slate-500">don&apos;t</span>
              <br />
              <span className="text-gradient">grow alone.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="w-16 h-0.5 bg-gradient-to-r from-brand-electric to-brand-purple"
            />

            {/* Floating accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-indigo/60 to-transparent" />
              <blockquote className="pl-6 text-slate-300 text-xl leading-relaxed italic font-light">
                &ldquo;Every breakthrough innovation was, at some point, just an idea in someone&apos;s head — waiting for the right people and the right moment.&rdquo;
              </blockquote>
            </motion.div>
          </div>

          {/* Right: explanation + highlights */}
          <div className="space-y-10 pt-4 lg:pt-16">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              Great ideas need people, knowledge, technology and the right opportunities around them.
              <br /><br />
              Our community brings aspiring founders, students, developers, designers, mentors and innovators together — to turn ideas into action, and action into impact.
            </motion.p>

            {/* Highlights */}
            <div className="space-y-0">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group flex items-start gap-5 py-5 border-b border-white/5 last:border-b-0 hover:border-brand-indigo/30 transition-colors duration-300 cursor-default"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-glass-light border-glass flex items-center justify-center flex-shrink-0 group-hover:bg-brand-indigo/20 transition-colors duration-300">
                    <span className="text-brand-electric text-xs font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm uppercase tracking-wider mb-1">
                      {h.label}
                    </div>
                    <div className="text-slate-500 text-sm leading-relaxed">
                      {h.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
