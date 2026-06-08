import { useEffect, useRef } from 'react'

export interface ParallaxIcon {
  id: string
  depth: number
  baseX: number
  baseY: number
}

export function useMouseParallax(icons: ParallaxIcon[]) {
  const containerRef = useRef<HTMLDivElement>(null)
  const iconRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      targetRef.current = {
        x: (e.clientX - cx) / rect.width,
        y: (e.clientY - cy) / rect.height,
      }
    }

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08

      icons.forEach((icon) => {
        const el = iconRefs.current.get(icon.id)
        if (!el) return
        const offsetX = currentRef.current.x * icon.depth * 40
        const offsetY = currentRef.current.y * icon.depth * 40
        const tiltX = currentRef.current.y * icon.depth * 8
        const tiltY = -currentRef.current.x * icon.depth * 8
        el.style.transform = `translate(${icon.baseX + offsetX}px, ${icon.baseY + offsetY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [icons])

  const setIconRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) iconRefs.current.set(id, el)
    else iconRefs.current.delete(id)
  }

  return { containerRef, setIconRef }
}
