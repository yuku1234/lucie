import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

const events = [
  {
    id: 1,
    featured: true,
    category: 'Hackathon',
    date: 'Upcoming · 2026',
    title: '48-Hour Innovation Sprint',
    description:
      'Two days. One challenge. Infinite possibilities. Teams of 2–5 come together to build prototypes that solve real problems. From idea to demo — all in 48 hours.',
    tags: ['Teams of 2–5', 'Prizes', 'Mentors', 'Open to All'],
    accent: '#3b82f6',
  },
  {
    id: 2,
    featured: false,
    category: 'Workshop',
    date: 'Recurring · Monthly',
    title: 'Founder Fundamentals',
    description: 'A monthly deep-dive into startup fundamentals with experienced founders.',
    accent: '#8b5cf6',
  },
  {
    id: 3,
    featured: false,
    category: 'Networking',
    date: 'Recurring · Bi-weekly',
    title: 'Builder Meetups',
    description: 'Informal sessions for builders to share work, get feedback and connect.',
    accent: '#06b6d4',
  },
  {
    id: 4,
    featured: false,
    category: 'Session',
    date: 'Upcoming · 2026',
    title: 'Startup Pitch Night',
    description: 'Present your idea to a room of peers, mentors and industry guests.',
    accent: '#10b981',
  },
  {
    id: 5,
    featured: false,
    category: 'Challenge',
    date: 'Upcoming · 2026',
    title: 'Innovation Challenge',
    description: 'A structured challenge tackling a defined problem space over 4 weeks.',
    accent: '#f59e0b',
  },
]

export default function Programs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const featured = events.find((e) => e.featured)
  const rest = events.filter((e) => !e.featured)

  return (
    <section id="programs" ref={ref} className="py-32 lg:py-44 relative">
      <div id="events" className="absolute top-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-electric text-sm font-semibold uppercase tracking-widest block mb-4">
              Programs & Events
            </span>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-white">Something is always</span>
              <br />
              <span className="text-gradient">being built.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed flex items-end"
          >
            From focused workshops to full-scale hackathons — there&apos;s always a reason to show up, participate and make something.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured event */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3 group relative rounded-3xl overflow-hidden border-glass bg-glass-light hover:border-brand-electric/30 transition-all duration-500"
              style={{ background: `linear-gradient(135deg, ${featured.accent}10 0%, rgba(8,13,42,0.95) 60%)` }}
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-80"
                style={{ background: `linear-gradient(90deg, ${featured.accent}, transparent)` }}
              />

              <div className="p-8 lg:p-10 h-full flex flex-col justify-between min-h-[380px]">
                <div className="space-y-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ background: `${featured.accent}20`, color: featured.accent }}
                    >
                      ✦ Featured — {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                      <Calendar size={13} />
                      {featured.date}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {featured.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base">{featured.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {featured.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-400"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="mt-6 inline-flex items-center gap-2 text-white font-semibold group/link"
                >
                  <span
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                    style={{ background: featured.accent, boxShadow: `0 0 30px ${featured.accent}40` }}
                  >
                    View Event
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </motion.div>
          )}

          {/* Smaller events */}
          <div className="lg:col-span-2 space-y-4">
            {rest.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="group rounded-2xl border-glass bg-glass-light p-6 hover:border-brand-indigo/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: event.accent }} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {event.category}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-base group-hover:text-brand-electric transition-colors duration-300">
                      {event.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                      <Calendar size={11} />
                      {event.date}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-slate-600 flex-shrink-0 mt-1 group-hover:text-brand-electric group-hover:translate-x-0.5 transition-all duration-200"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
