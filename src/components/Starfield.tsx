import { useEffect, useRef } from 'react'

/**
 * Quiet, low-density canvas starfield — slow downward drift + gentle twinkle.
 * Client-only (canvas is empty during SSG prerender, animates on hydration).
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
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const init = () => {
      const n = Math.min(140, Math.floor((w * h) / 11000))
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        r: Math.random() * 1.3 + 0.2,
        p: Math.random() * Math.PI * 2,
      }))
    }

    let raf = 0
    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        if (!reduce) {
          s.y += 0.015 + s.z * 0.05
          if (s.y > h + 2) {
            s.y = -2
            s.x = Math.random() * w
          }
        }
        const tw = reduce ? 1 : 0.55 + 0.45 * Math.sin(t * 0.02 + s.p)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(198, 190, 255, ${(0.12 + s.z * 0.35) * tw})`
        ctx.fill()
      }
      t++
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    const ro = new ResizeObserver(() => {
      resize()
      init()
      if (reduce) draw()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}
