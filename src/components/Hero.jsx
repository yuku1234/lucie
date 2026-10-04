import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Animated orbital network visualization
function OrbitalVisual() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const nodes = [
      { label: 'IDEAS', angle: 0, radius: 0 },
      { label: 'BUILD', angle: 0, radius: 120 },
      { label: 'CONNECT', angle: (Math.PI * 2) / 5, radius: 120 },
      { label: 'LEARN', angle: (Math.PI * 4) / 5, radius: 120 },
      { label: 'GROW', angle: (Math.PI * 6) / 5, radius: 120 },
      { label: 'COMPETE', angle: (Math.PI * 8) / 5, radius: 120 },
      { label: 'MENTOR', angle: Math.PI / 6, radius: 200 },
      { label: 'STARTUP', angle: Math.PI / 1.5, radius: 200 },
      { label: 'INVEST', angle: Math.PI * 1.2, radius: 200 },
    ]

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const cx = w / 2
      const cy = h / 2

      ctx.clearRect(0, 0, w, h)
      t += 0.003

      // Draw orbits
      const orbitRadii = [120, 200]
      orbitRadii.forEach((r) => {
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(79,70,229,0.15)'
        ctx.lineWidth = 1
        ctx.setLineDash([4, 8])
        ctx.stroke()
        ctx.setLineDash([])
      })

      // Draw connections from center
      nodes.slice(1, 6).forEach((node) => {
        const angle = node.angle + t * 0.5
        const nx = cx + Math.cos(angle) * node.radius
        const ny = cy + Math.sin(angle) * node.radius
        const gradient = ctx.createLinearGradient(cx, cy, nx, ny)
        gradient.addColorStop(0, 'rgba(59,130,246,0.4)')
        gradient.addColorStop(1, 'rgba(139,92,246,0.1)')
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(nx, ny)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw nodes
      nodes.forEach((node, i) => {
        const angle = i === 0 ? 0 : node.angle + (node.radius === 120 ? t * 0.5 : t * 0.3)
        const nx = cx + Math.cos(angle) * node.radius
        const ny = cy + Math.sin(angle) * node.radius

        if (i === 0) {
          // Center glow
          const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50)
          grd.addColorStop(0, 'rgba(79,70,229,0.3)')
          grd.addColorStop(1, 'transparent')
          ctx.fillStyle = grd
          ctx.beginPath()
          ctx.arc(cx, cy, 50, 0, Math.PI * 2)
          ctx.fill()

          // Center node
          ctx.beginPath()
          ctx.arc(cx, cy, 18, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(79,70,229,0.9)'
          ctx.fill()
          ctx.strokeStyle = 'rgba(139,92,246,0.8)'
          ctx.lineWidth = 2
          ctx.stroke()

          ctx.fillStyle = 'white'
          ctx.font = `bold 8px "Plus Jakarta Sans", sans-serif`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(node.label, cx, cy)
        } else {
          const size = node.radius === 120 ? 28 : 22
          const glowSize = size + 12

          // Glow
          const grd = ctx.createRadialGradient(nx, ny, 0, nx, ny, glowSize)
          grd.addColorStop(0, node.radius === 120 ? 'rgba(59,130,246,0.3)' : 'rgba(139,92,246,0.2)')
          grd.addColorStop(1, 'transparent')
          ctx.fillStyle = grd
          ctx.beginPath()
          ctx.arc(nx, ny, glowSize, 0, Math.PI * 2)
          ctx.fill()

          // Node bg
          ctx.beginPath()
          ctx.arc(nx, ny, size / 2, 0, Math.PI * 2)
          ctx.fillStyle = node.radius === 120
            ? 'rgba(29,78,216,0.85)'
            : 'rgba(55,48,163,0.7)'
          ctx.fill()
          ctx.strokeStyle = node.radius === 120
            ? 'rgba(59,130,246,0.6)'
            : 'rgba(139,92,246,0.4)'
          ctx.lineWidth = 1.5
          ctx.stroke()

          // Label
          ctx.fillStyle = 'rgba(255,255,255,0.9)'
          ctx.font = `bold 6px "Plus Jakarta Sans", sans-serif`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(node.label, nx, ny)
        }
      })

      // Floating particles
      for (let p = 0; p < 20; p++) {
        const px = cx + Math.cos(t * 0.2 + p * 0.8) * (80 + p * 8)
        const py = cy + Math.sin(t * 0.15 + p * 1.1) * (60 + p * 6)
        const alpha = 0.1 + Math.sin(t + p) * 0.1
        ctx.beginPath()
        ctx.arc(px, py, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139,92,246,${alpha})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050818 0%, #0d1540 40%, #1e1065 100%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div style={{ y, opacity }} className="space-y-8">
            {/* Pill tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-glass-light border-glass rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-brand-electric animate-pulse" />
              <span className="text-brand-lavender text-sm font-medium">Building the next generation</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
              >
                <span className="text-white">Where ideas</span>
                <br />
                <span className="text-gradient">find their</span>
                <br />
                <span className="text-white">momentum.</span>
              </motion.h1>
            </div>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              A living ecosystem for students, builders, founders and innovators — to learn, collaborate, build and discover what&apos;s possible.
            </motion.p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-8 pt-2"
            >
              {[
                { value: '500+', label: 'Members' },
                { value: '40+', label: 'Events' },
                { value: '20+', label: 'Projects' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(79,70,229,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-royal via-brand-indigo to-brand-purple text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all duration-300"
              >
                Join the Community
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#about"
                onClick={(e) => { e.preventDefault(); handleScroll('#about') }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-glass-light border-glass text-white font-medium px-8 py-4 rounded-2xl text-base transition-all duration-300 hover:border-brand-electric/40"
              >
                Explore →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: orbital visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[420px] md:h-[500px] flex items-center justify-center"
          >
            {/* Glow ring behind */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-indigo/10 to-brand-purple/10 blur-2xl" />
            <OrbitalVisual />

            {/* Floating tags */}
            {[
              { text: 'Hackathons', top: '8%', left: '5%', delay: 0.5 },
              { text: 'Founders', top: '12%', right: '5%', delay: 0.7 },
              { text: 'Open Source', bottom: '18%', left: '3%', delay: 0.6 },
              { text: 'Workshops', bottom: '10%', right: '5%', delay: 0.8 },
            ].map((tag) => (
              <motion.div
                key={tag.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: tag.delay, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  top: tag.top,
                  bottom: tag.bottom,
                  left: tag.left,
                  right: tag.right,
                }}
                className="bg-glass-light border-glass rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md"
              >
                {tag.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
