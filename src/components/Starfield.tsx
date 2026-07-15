import { useEffect, useRef } from 'react'

/**
 * Quiet canvas starfield — slow downward drift + gentle twinkle.
 * Client-only (empty during SSG prerender, animates on hydration).
 * Honors prefers-reduced-motion by drawing a single static frame.
 */
export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let stars: { x: number; y: number; z: number; r: number; p: number }[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = Math.round(rect.width) || window.innerWidth
      h = Math.round(rect.height) || window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const init = () => {
      const n = Math.min(180, Math.max(60, Math.floor((w * h) / 8000)))
      stars = Array.from({ length: n }, () => {
        const z = Math.random()
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: 0.5 + z * 1.6 + Math.random() * 0.4,
          p: Math.random() * Math.PI * 2,
        }
      })
    }

    let raf = 0
    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        if (!reduce) {
          s.y += 0.03 + s.z * 0.09
          if (s.y > h + 2) {
            s.y = -2
            s.x = Math.random() * w
          }
        }
        const tw = reduce ? 1 : 0.6 + 0.4 * Math.sin(t * 0.03 + s.p)
        const a = (0.35 + s.z * 0.55) * tw
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(224, 220, 255, ${a})`
        ctx.shadowColor = 'rgba(180, 165, 255, 0.9)'
        ctx.shadowBlur = s.z > 0.85 ? 6 : 0
        ctx.fill()
      }
      ctx.shadowBlur = 0
      t++
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    const start = () => {
      resize()
      init()
      draw()
    }
    // defer one frame so layout has settled and the canvas has a real size
    const kick = requestAnimationFrame(start)

    const ro = new ResizeObserver(() => {
      resize()
      init()
      if (reduce) draw()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(kick)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  )
}
