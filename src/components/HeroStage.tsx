import { useCallback, useEffect, useRef, useState } from 'react'

interface Apple {
  x: number
  y: number
  speed: number
  spin: number
  rotation: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  colour: string
}

const STAGE_W = 400
const STAGE_H = 300
const BOWL_W = 72
const BOWL_H = 28

export function HeroStage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const pointerX = useRef(STAGE_W / 2)
  const bowlX = useRef(STAGE_W / 2)
  const scoreRef = useRef(0)
  const applesRef = useRef<Apple[]>([])
  const particlesRef = useRef<Particle[]>([])
  const spawnTimer = useRef(0)
  const lastTime = useRef(0)
  const popScale = useRef(1)
  const [score, setScore] = useState(0)
  const [hint, setHint] = useState('Move your mouse to catch the apples')

  const spawnApple = useCallback(() => {
    applesRef.current.push({
      x: 40 + Math.random() * (STAGE_W - 80),
      y: -20,
      speed: 90 + Math.random() * 60,
      spin: (Math.random() - 0.5) * 4,
      rotation: Math.random() * Math.PI * 2,
    })
  }, [])

  const resetDemo = useCallback(() => {
    applesRef.current = []
    particlesRef.current = []
    scoreRef.current = 0
    setScore(0)
    spawnTimer.current = 0
    popScale.current = 1.2
    setHint('Go! Catch as many as you can')
    for (let i = 0; i < 3; i++) spawnApple()
  }, [spawnApple])

  const burst = useCallback((x: number, y: number) => {
    const colours = ['#ef4444', '#f97316', '#22c55e', '#fbbf24']
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12
      const speed = 80 + Math.random() * 80
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0.6 + Math.random() * 0.3,
        colour: colours[i % colours.length],
      })
    }
    popScale.current = 1.35
  }, [])

  const drawApple = (ctx: CanvasRenderingContext2D, apple: Apple) => {
    ctx.save()
    ctx.translate(apple.x, apple.y)
    ctx.rotate(apple.rotation)
    ctx.fillStyle = '#ef4444'
    ctx.beginPath()
    ctx.arc(0, 0, 14, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#22c55e'
    ctx.beginPath()
    ctx.ellipse(4, -12, 5, 3, 0.5, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  const drawBowl = (ctx: CanvasRenderingContext2D, x: number) => {
    const y = STAGE_H - 36
    ctx.save()
    ctx.translate(x, y)
    const grad = ctx.createLinearGradient(-BOWL_W / 2, 0, BOWL_W / 2, 0)
    grad.addColorStop(0, '#a78bfa')
    grad.addColorStop(1, '#7c3aed')
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.moveTo(-BOWL_W / 2, 0)
    ctx.quadraticCurveTo(-BOWL_W / 2, BOWL_H, 0, BOWL_H + 4)
    ctx.quadraticCurveTo(BOWL_W / 2, BOWL_H, BOWL_W / 2, 0)
    ctx.closePath()
    ctx.fill()
    ctx.strokeStyle = '#5b21b6'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.restore()
  }

  const drawFlag = (ctx: CanvasRenderingContext2D, pulse: number) => {
    const s = 1 + Math.sin(pulse) * 0.06
    ctx.save()
    ctx.translate(28, 28)
    ctx.scale(s, s)
    ctx.fillStyle = '#22c55e'
    ctx.beginPath()
    ctx.arc(0, 0, 14, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#fff'
    ctx.beginPath()
    ctx.moveTo(-5, -7)
    ctx.lineTo(7, 0)
    ctx.lineTo(-5, 7)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }

  useEffect(() => {
    resetDemo()

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = STAGE_W * dpr
    canvas.height = STAGE_H * dpr
    canvas.style.width = `${STAGE_W}px`
    canvas.style.height = `${STAGE_H}px`
    ctx.scale(dpr, dpr)

    const setPointer = (clientX: number) => {
      const rect = canvas.getBoundingClientRect()
      const scaleX = STAGE_W / rect.width
      pointerX.current = (clientX - rect.left) * scaleX
    }

    const onMouseMove = (e: MouseEvent) => setPointer(e.clientX)
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) setPointer(e.touches[0].clientX)
    }
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const scaleX = STAGE_W / rect.width
      const scaleY = STAGE_H / rect.height
      const x = (e.clientX - rect.left) * scaleX
      const y = (e.clientY - rect.top) * scaleY
      if (x < 56 && y < 56) resetDemo()
    }

    window.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('touchstart', onTouch, { passive: true })
    canvas.addEventListener('touchmove', onTouch, { passive: true })
    canvas.addEventListener('click', onClick)

    const tick = (time: number) => {
      const dt = Math.min((time - lastTime.current) / 1000, 0.05)
      lastTime.current = time

      bowlX.current += (pointerX.current - bowlX.current) * 0.12
      bowlX.current = Math.max(BOWL_W / 2 + 8, Math.min(STAGE_W - BOWL_W / 2 - 8, bowlX.current))

      spawnTimer.current += dt
      if (spawnTimer.current > 0.85) {
        spawnTimer.current = 0
        spawnApple()
      }

      const bowlY = STAGE_H - 36
      applesRef.current = applesRef.current.filter((apple) => {
        apple.y += apple.speed * dt
        apple.rotation += apple.spin * dt
        const caught =
          apple.y > bowlY - 8 &&
          apple.y < bowlY + BOWL_H &&
          Math.abs(apple.x - bowlX.current) < BOWL_W / 2 + 6
        if (caught) {
          scoreRef.current += 1
          setScore(scoreRef.current)
          burst(apple.x, apple.y)
          return false
        }
        return apple.y < STAGE_H + 30
      })

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx * dt
        p.y += p.vy * dt
        p.vy += 200 * dt
        p.life -= dt
        return p.life > 0
      })

      popScale.current += (1 - popScale.current) * 0.1

      ctx.clearRect(0, 0, STAGE_W, STAGE_H)

      ctx.fillStyle = '#f8fafc'
      ctx.fillRect(0, 0, STAGE_W, STAGE_H)
      ctx.fillStyle = 'rgba(15, 23, 42, 0.04)'
      for (let gx = 0; gx < STAGE_W; gx += 20) {
        for (let gy = 0; gy < STAGE_H; gy += 20) {
          ctx.beginPath()
          ctx.arc(gx, gy, 1, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      applesRef.current.forEach((a) => drawApple(ctx, a))
      drawBowl(ctx, bowlX.current)
      particlesRef.current.forEach((p) => {
        ctx.globalAlpha = p.life
        ctx.fillStyle = p.colour
        ctx.beginPath()
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1

      drawFlag(ctx, time / 400)

      ctx.fillStyle = 'rgba(255,255,255,0.92)'
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.25)'
      ctx.lineWidth = 2
      const sw = 72
      const sh = 32
      const sx = STAGE_W - sw - 14
      const sy = 14
      ctx.beginPath()
      ctx.roundRect(sx, sy, sw, sh, 10)
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = '#7c3aed'
      ctx.font = 'bold 11px Inter, sans-serif'
      ctx.fillText('SCORE', sx + 10, sy + 13)
      ctx.font = `bold ${16 * popScale.current}px "Bricolage Grotesque", sans-serif`
      ctx.fillText(String(scoreRef.current), sx + 10, sy + 28)

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('touchstart', onTouch)
      canvas.removeEventListener('touchmove', onTouch)
      canvas.removeEventListener('click', onClick)
    }
  }, [burst, resetDemo, spawnApple])

  return (
    <div ref={containerRef} className="hero-stage">
      <div className="hero-stage__frame glass-card">
        <div className="hero-stage__chrome">
          <span className="hero-stage__dot hero-stage__dot--red" />
          <span className="hero-stage__dot hero-stage__dot--amber" />
          <span className="hero-stage__dot hero-stage__dot--green" />
          <span className="hero-stage__title">Fruit Catcher — live preview</span>
        </div>
        <canvas ref={canvasRef} className="hero-stage__canvas" aria-label="Interactive Fruit Catcher demo. Move your mouse to catch falling apples." />
        <p className="hero-stage__hint">{hint}</p>
      </div>
      <div className="hero-stage__score-pill">
        <span className="hero-stage__score-label">Your score</span>
        <span className="hero-stage__score-value font-display">{score}</span>
      </div>
      <p className="hero-stage__flag-hint">Click the green flag to restart</p>
    </div>
  )
}
