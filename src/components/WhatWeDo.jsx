import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Code2, BookOpen, Users, Trophy, TrendingUp } from 'lucide-react'

const areas = [
  {
    id: 'build',
    number: '01',
    icon: Code2,
    category: 'CREATION',
    title: 'Build',
    tagline: 'From concept to creation.',
    description:
      'Turn your concepts into real products — websites, applications, prototypes and full technology solutions. Collaborate with developers, designers and product thinkers to ship things that matter.',
    color: 'from-blue-600/20 to-indigo-600/10',
    accent: '#3b82f6',
  },
  {
    id: 'learn',
    number: '02',
    icon: BookOpen,
    category: 'KNOWLEDGE',
    title: 'Learn',
    tagline: 'Practical, not theoretical.',
    description:
      'Workshops, hands-on sessions and expert-led guidance that goes beyond the classroom. Learn from founders, developers and industry professionals with real-world experience.',
    color: 'from-violet-600/20 to-purple-600/10',
    accent: '#8b5cf6',
  },
  {
    id: 'connect',
    number: '03',
    icon: Users,
    category: 'NETWORK',
    title: 'Connect',
    tagline: 'The right people change everything.',
    description:
      'Meet founders, developers, designers, mentors and other curious builders. Build relationships that last beyond any single event — because the network you build now shapes your future.',
    color: 'from-indigo-600/20 to-blue-600/10',
    accent: '#6366f1',
  },
  {
    id: 'compete',
    number: '04',
    icon: Trophy,
    category: 'CHALLENGE',
    title: 'Compete',
    tagline: 'Pressure creates diamonds.',
    description:
      'Hackathons, innovation challenges and competitions that push your thinking. Show what you can build in 24 hours. Discover what you&apos;re actually capable of when the stakes are real.',
    color: 'from-yellow-600/10 to-orange-600/10',
    accent: '#f59e0b',
  },
  {
    id: 'grow',
    number: '05',
    icon: TrendingUp,
    category: 'OPPORTUNITY',
    title: 'Grow',
    tagline: 'Bigger than just your campus.',
    description:
      'Discover startup programs, incubators, funding opportunities and innovation communities beyond your institution. We help you find the doors — and open them.',
    color: 'from-emerald-600/10 to-teal-600/10',
    accent: '#10b981',
  },
]

export default function WhatWeDo() {
  const [hovered, setHovered] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="what-we-do" ref={ref} className="py-32 lg:py-44 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-indigo/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-electric text-sm font-semibold uppercase tracking-widest block mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-white">From curiosity</span>
              <br />
              <span className="text-gradient">to creation.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              Five core pathways that define how our community operates — each one designed to move you from where you are to where you want to be.
            </p>
          </motion.div>
        </div>

        {/* Expanding panels */}
        <div className="space-y-0 border border-white/5 rounded-3xl overflow-hidden">
          {areas.map((area, i) => {
            const Icon = area.icon
            const isHovered = hovered === area.id
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(area.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative border-b border-white/5 last:border-b-0 cursor-pointer transition-all duration-500 ${
                  isHovered ? `bg-gradient-to-r ${area.color}` : 'bg-transparent hover:bg-white/[0.02]'
                }`}
              >
                <div className={`px-8 lg:px-12 transition-all duration-500 ${isHovered ? 'py-10' : 'py-7'}`}>
                  <div className="flex items-start gap-6 lg:gap-10">
                    {/* Number */}
                    <div className="flex-shrink-0 w-12">
                      <span
                        className="text-3xl font-bold transition-colors duration-300"
                        style={{ color: isHovered ? area.accent : 'rgba(255,255,255,0.15)' }}
                      >
                        {area.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="flex-shrink-0 mt-1 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isHovered ? `${area.accent}20` : 'rgba(255,255,255,0.05)',
                        borderColor: isHovered ? `${area.accent}40` : 'rgba(255,255,255,0.08)',
                        border: '1px solid',
                      }}
                    >
                      <Icon size={18} style={{ color: isHovered ? area.accent : '#64748b' }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-widest text-slate-600 block mb-1">
                            {area.category}
                          </span>
                          <h3
                            className="text-2xl md:text-3xl font-bold transition-colors duration-300"
                            style={{ color: isHovered ? 'white' : 'rgba(255,255,255,0.7)' }}
                          >
                            {area.title}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ x: isHovered ? 0 : -4, opacity: isHovered ? 1 : 0.3 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ArrowRight
                            size={24}
                            style={{ color: isHovered ? area.accent : '#475569' }}
                          />
                        </motion.div>
                      </div>

                      {/* Expandable content */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 space-y-3">
                              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                                {area.description}
                              </p>
                              <p
                                className="text-sm font-semibold italic"
                                style={{ color: area.accent }}
                              >
                                {area.tagline}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
