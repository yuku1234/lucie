import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discover',
    sub: 'Find a problem worth solving.',
    description:
      'Every journey starts with observation. We help you develop the curiosity to notice problems, question assumptions, and identify gaps that are genuinely worth solving.',
  },
  {
    number: '02',
    title: 'Connect',
    sub: 'Meet people who can help.',
    description:
      'No great thing is built alone. Our community connects you with builders, mentors, designers and thinkers who complement your skills and expand your perspective.',
  },
  {
    number: '03',
    title: 'Build',
    sub: 'Turn the idea into something real.',
    description:
      'Move from idea to prototype. Through workshops, sprints and collaborative sessions, we create the environment where things actually get made — not just discussed.',
  },
  {
    number: '04',
    title: 'Grow',
    sub: 'Find opportunities to take it further.',
    description:
      'Whether it\'s an incubator, a competition, a grant or a community — we help you discover the next step. Growth is a journey, not a destination.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" ref={ref} className="py-32 lg:py-44 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-electric/30 to-transparent" />

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-48 bottom-48 w-px bg-gradient-to-b from-transparent via-brand-indigo/20 to-transparent hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-brand-electric text-sm font-semibold uppercase tracking-widest block"
          >
            The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight"
          >
            <span className="text-white">Your journey,</span>
            <br />
            <span className="text-gradient">step by step.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center py-16 border-b border-white/5 last:border-b-0 ${
                  isEven ? '' : ''
                }`}
              >
                {/* Number block */}
                <div className={`space-y-5 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <span className="text-[7rem] lg:text-[9rem] font-bold leading-none select-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(139,92,246,0.08) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content block */}
                <div className={`space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-brand-lavender text-lg font-medium italic">{step.sub}</p>
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-brand-electric to-brand-purple" />
                  <p className="text-slate-400 text-base leading-relaxed">{step.description}</p>

                  {/* Connecting line to next step */}
                  {i < steps.length - 1 && (
                    <div className="pt-4">
                      <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <div className="w-6 h-px bg-brand-indigo/40" />
                        <span>Then</span>
                        <div className="w-6 h-px bg-brand-indigo/40" />
                        <span className="text-brand-lavender font-medium">{steps[i + 1].title} →</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
