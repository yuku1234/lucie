import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    word: 'CURIOSITY',
    tagline: 'Always keep learning.',
    body: 'The best builders never stop asking why. We cultivate an environment where questions are celebrated, exploration is encouraged, and learning never ends.',
    number: '01',
  },
  {
    word: 'OWNERSHIP',
    tagline: 'Take responsibility for the idea.',
    body: 'Ideas without action are just thoughts. We believe in taking full ownership — of the vision, the execution, and the outcome. Start before you feel ready.',
    number: '02',
  },
  {
    word: 'COLLABORATION',
    tagline: 'Great things are rarely built alone.',
    body: 'The best things are built in rooms where people with different skills come together. We create those rooms — and fill them with the right people.',
    number: '03',
  },
  {
    word: 'ACTION',
    tagline: 'Progress over perfection.',
    body: 'Ship. Iterate. Learn. We believe in taking decisive steps forward, even with incomplete information. The world rewards momentum, not hesitation.',
    number: '04',
  },
]

export default function Values() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="values" ref={ref} className="py-32 lg:py-44 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header manifesto */}
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-brand-electric text-sm font-semibold uppercase tracking-widest block mb-6"
          >
            Our Values
          </motion.span>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.02]"
            >
              <span className="text-white">Build</span>
              <br />
              <span className="text-gradient">with purpose.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-slate-400 text-lg leading-relaxed flex items-end pb-2"
            >
              Four principles that guide everything we do — how we show up, how we work together, and how we grow.
            </motion.p>
          </div>
        </div>

        {/* Values grid - typography heavy */}
        <div className="grid md:grid-cols-2 gap-0">
          {values.map((v, i) => (
            <motion.div
              key={v.word}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className="group relative p-10 lg:p-14 border border-white/5 hover:border-brand-indigo/30 transition-all duration-500 hover:bg-white/[0.02]"
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                  {v.number}
                </span>
                <div className="w-8 h-8 rounded-lg bg-glass-light border-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 rounded-full bg-brand-electric" />
                </div>
              </div>

              {/* Large word */}
              <div className="mb-4">
                <h3
                  className="text-3xl lg:text-4xl font-bold tracking-tight mb-2 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {v.word}
                </h3>
                <p className="text-brand-lavender font-medium italic text-base">{v.tagline}</p>
              </div>

              <div className="w-10 h-px bg-gradient-to-r from-brand-electric to-brand-purple mb-6" />

              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
