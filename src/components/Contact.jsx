import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, MapPin } from 'lucide-react'

const interests = [
  'Joining as a member',
  'Collaborating on a project',
  'Mentoring the community',
  'Organizing an event',
  'Partnership opportunities',
  'Just exploring',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  })

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[SIC] ${form.interest || 'General Inquiry'} — from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:yuktirahangdale65@gmai.com?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-electric/50 focus:bg-white/[0.06] transition-all duration-200'

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-44 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-electric/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Copy */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="text-brand-electric text-sm font-semibold uppercase tracking-widest block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-white">Let&apos;s build</span>
                <br />
                <span className="text-gradient">something meaningful.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you have an idea, want to collaborate, or just want to learn more about what we&apos;re building — reach out. We reply to every message.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <a
                href="mailto:yuktirahangdale65@gmai.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-glass-light border-glass flex items-center justify-center group-hover:border-brand-electric/40 transition-colors duration-300">
                  <Mail size={18} className="text-brand-electric" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-white font-medium group-hover:text-brand-electric transition-colors duration-200">
                    yuktirahangdale65@gmai.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-glass-light border-glass flex items-center justify-center">
                  <MapPin size={18} className="text-brand-purple" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Based</div>
                  <div className="text-white font-medium">India — Open Globally</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-4 border-t border-white/5"
            >
              <p className="text-slate-600 text-sm">
                Average response time: <span className="text-slate-400 font-medium">Within 48 hours</span>
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-glass-light border-glass rounded-3xl p-8 lg:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  What are you interested in?
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={(e) => handleChange('interest', e.target.value)}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled style={{ background: '#080d2a' }}>
                    Select an option
                  </option>
                  {interests.map((opt) => (
                    <option key={opt} value={opt} style={{ background: '#080d2a' }}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your idea, what you want to build, or just say hello..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(79,70,229,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-royal to-brand-purple text-white font-semibold py-4 rounded-xl text-base transition-all duration-300 mt-2"
              >
                Let&apos;s Talk
                <ArrowRight size={18} />
              </motion.button>

              <p className="text-center text-slate-700 text-xs pt-1">
                Submits via your default mail client. No data is stored by this form.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
