import { useMouseParallax } from '../hooks/useMouseParallax'
import { GameIcon } from './GameIcon'

const FLOATING = [
  { id: 'flappy', slug: 'flappy-bird', depth: 0.7, baseX: 100, baseY: -50, size: 'sm' as const },
  { id: 'cookie', slug: 'cookie-clicker', depth: 0.9, baseX: -90, baseY: 60, size: 'sm' as const },
  { id: 'pong', slug: 'pong', depth: 1.1, baseX: 130, baseY: 70, size: 'sm' as const },
  { id: 'frog', slug: 'frogger', depth: 0.8, baseX: -120, baseY: -40, size: 'sm' as const },
  { id: 'brick', slug: 'brick-breaker', depth: 1.0, baseX: 50, baseY: 110, size: 'sm' as const },
]

export function HeroIcons() {
  const { containerRef, setIconRef } = useMouseParallax(FLOATING)

  return (
    <div ref={containerRef} className="hero-visual" style={{ perspective: '1000px' }} aria-hidden="true">
      <div className="hero-visual__center">
        <div className="glass-card hero-visual__card float-slow">
          <GameIcon slug="snake" size="md" />
          <span className="font-display text-sm font-bold">11 games to build</span>
          <span className="text-xs text-secondary">Pick one and start coding</span>
        </div>
      </div>

      {FLOATING.map((item) => (
        <div
          key={item.id}
          ref={setIconRef(item.id)}
          className="hero-visual__orbit will-change-transform"
          style={{ transform: `translate(${item.baseX}px, ${item.baseY}px)` }}
        >
          <GameIcon slug={item.slug} size={item.size} />
        </div>
      ))}
    </div>
  )
}
