import { useMemo, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { GradientBlobs } from '../components/GradientBlobs'
import { GameCard } from '../components/GameCard'
import { games } from '../data/games'
import type { DifficultyFilter } from '../types'

const FILTERS: { value: DifficultyFilter; label: string; colour?: string }[] = [
  { value: 'all', label: 'All' },
  { value: 1, label: 'Easy', colour: 'var(--easy)' },
  { value: 2, label: 'Medium', colour: 'var(--medium)' },
  { value: 3, label: 'Hard', colour: 'var(--hard)' },
]

export function Catalogue() {
  const [filter, setFilter] = useState<DifficultyFilter>('all')

  const filteredGames = useMemo(() => {
    if (filter === 'all') return games
    return games.filter((g) => g.difficulty === filter)
  }, [filter])

  return (
    <div className="page dot-grid">
      <GradientBlobs />
      <div className="page-inner">
        <Navbar variant="solid" />

        <main className="container pt-28 pb-24">
          <header className="mb-12">
            <p className="section-label">Tutorial library</p>
            <h1 className="font-display page-title font-extrabold tracking-tight">
              Choose your <span className="highlight-pill highlight-pill--blue">game</span>
            </h1>
            <p className="max-w-xl text-lg text-secondary">
              11 tutorials from beginner to expert. Pick your challenge.
            </p>
          </header>

          <div className="filter-bar mb-12">
            {FILTERS.map((f) => {
              const isActive = filter === f.value
              const stars = f.value === 1 ? '⭐ ' : f.value === 2 ? '⭐⭐ ' : f.value === 3 ? '⭐⭐⭐ ' : ''
              return (
                <button
                  key={String(f.value)}
                  type="button"
                  onClick={() => setFilter(f.value)}
                  className={`filter-pill ${isActive ? 'filter-pill--active' : ''}`}
                  style={
                    isActive
                      ? { backgroundColor: f.colour ?? 'var(--highlight-purple)' }
                      : undefined
                  }
                >
                  {stars}{f.label}
                </button>
              )
            })}
          </div>

          <div className="catalogue-grid" key={String(filter)}>
            {filteredGames.map((game, index) => (
              <GameCard key={game.slug} game={game} index={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
