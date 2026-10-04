import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const members = [
  { label: 'Students', color: '#3b82f6', angle: 0, r: 0 },
  { label: 'Founders', color: '#8b5cf6', angle: 0, r: 160 },
  { label: 'Developers', color: '#06b6d4', angle: (Math.PI * 2) / 6, r: 160 },
  { label: 'Designers', color: '#f59e0b', angle: (Math.PI * 4) / 6, r: 160 },
  { label: 'Mentors', color: '#10b981', angle: (Math.PI * 6) / 6, r: 160 },
  { label: 'Startups', color: '#ef4444', angle: (Math.PI * 8) / 6, r: 160 },
  { label: 'Communities', color: '#ec4899', angle: (Math.PI * 10) / 6, r: 160 },
  { label: 'Incubators', color: '#a78bfa', angle: Math.PI / 9, r: 260 },
  { label: 'Investors', color: '#34d399', angle: Math.PI / 2, r: 260 },
  { label: 'Industry', color: '#fb923c', angle: Math.PI * 0.9, r: 260 },
]

function NetworkCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let t = 0
    let hoveredIdx = -1

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }
    setSize()
    window.addEventListener('resize', setSize)

    const getPos = (node, time) => {
      if (node.r === 0) return { x: canvas.offsetWidth / 2, y: canvas.offsetHeight / 2 }
      const speed = node.r === 160 ? 0.25 : 0.15
      const angle = node.angle + time * speed
      return {
        x: canvas.offsetWidth / 2 + Math.cos(angle) * node.r,
        y: canvas.offsetHeight / 2 + Math.sin(angle) * node.r,
      }
    }

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      hoveredIdx = -1
      members.forEach((node, i) => {
        const pos = getPos(node, t)
        const dist = Math.sqrt((mx - pos.x) ** 2 + (my - pos.y) ** 2)
        if (dist < 24) hoveredIdx = i
      })
    })

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      t += 0.004

      const positions = members.map((n) => getPos(n, t))

      // Orbit circles
      ;[160, 260].forEach((r) => {
        ctx.beginPath()
        ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(79,70,229,0.1)'
        ctx.lineWidth = 1
        ctx.setLineDash([3, 9])
        ctx.stroke()
        ctx.setLineDash([])
      })

      // Connections from center to inner ring
      positions.slice(1, 7).forEach((pos, i) => {
        const color = members[i + 1].color
        const grd = ctx.createLinearGradient(positions[0].x, positions[0].y, pos.x, pos.y)
        grd.addColorStop(0, color + '60')
        grd.addColorStop(1, color + '10')
        ctx.beginPath()
        ctx.moveTo(positions[0].x, positions[0].y)
        ctx.lineTo(pos.x, pos.y)
        ctx.strokeStyle = grd
        ctx.lineWidth = hoveredIdx === i + 1 ? 2 : 1
        ctx.stroke()
      })

      // Connections from outer ring to nearest inner
      positions.slice(7).forEach((outerPos, oi) => {
        const nearestInner = positions.slice(1, 7).reduce((best, ip, ii) => {
          const d = Math.sqrt((outerPos.x - ip.x) ** 2 + (outerPos.y - ip.y) ** 2)
          return d < best.d ? { d, i: ii + 1 } : best
        }, { d: Infinity, i: 0 })

        const innerPos = positions[nearestInner.i]
        ctx.beginPath()
        ctx.moveTo(outerPos.x, outerPos.y)
        ctx.lineTo(innerPos.x, innerPos.y)
        ctx.strokeStyle = 'rgba(139,92,246,0.15)'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Nodes
      positions.forEach((pos, i) => {
        const node = members[i]
        const isHovered = hoveredIdx === i
        const isCenter = i === 0
        const size = isCenter ? 26 : isHovered ? 22 : node.r === 160 ? 18 : 14

        // Glow
        if (isHovered || isCenter) {
          const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, size * 2.5)
          grd.addColorStop(0, node.color + '50')
          grd.addColorStop(1, 'transparent')
          ctx.fillStyle = grd
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, size * 2.5, 0, Math.PI * 2)
          ctx.fill()
        }

        // Node circle
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2)
        ctx.fillStyle = node.color + (isHovered ? 'ee' : isCenter ? 'dd' : '99')
        ctx.fill()

        // Ring
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2)
        ctx.strokeStyle = node.color
        ctx.lineWidth = isHovered ? 2.5 : 1.5
        ctx.stroke()

        // Label
        ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(255,255,255,0.85)'
        ctx.font = `${isCenter ? 'bold 9px' : isHovered ? 'bold 8px' : '7px'} "Plus Jakarta Sans", sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.label, pos.x, pos.y)
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />
}

export default function Ecosystem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="community" ref={ref} className="py-32 lg:py-44 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-brand-electric text-sm font-semibold uppercase tracking-widest block"
          >
            The Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight"
          >
            <span className="text-white">One community.</span>
            <br />
            <span className="text-gradient">Many possibilities.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Hover over the nodes to explore the network. Every connection is a door to something new.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative h-[500px] md:h-[600px] rounded-3xl border-glass bg-glass-light overflow-hidden"
        >
          <NetworkCanvas />
        </motion.div>

        {/* Member type legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {members.slice(1).map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-2 bg-glass-light border-glass rounded-full px-4 py-2"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
              <span className="text-slate-400 text-xs font-medium">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
