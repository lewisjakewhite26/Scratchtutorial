import { Link } from 'react-router-dom'
import type { Game } from '../types'
import { getDifficultyColour } from '../data/games'
import { GameIcon } from './GameIcon'
import { StarRating } from './StarRating'
import { TimePill } from './TimePill'

interface GameCardProps {
  game: Game
  index?: number
}

export function GameCard({ game, index = 0 }: GameCardProps) {
  const colour = getDifficultyColour(game.difficulty)

  return (
    <article
      className="card-animate glass-card glass-card-hover flex flex-col p-6"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <GameIcon slug={game.slug} size="md" />
      <h3 className="font-display mt-5 mb-2 text-xl font-bold tracking-tight">{game.name}</h3>
      <div className="card-meta mb-4">
        <StarRating difficulty={game.difficulty} />
        <TimePill time={game.estimatedTime} />
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-secondary line-clamp-2">
        {game.description}
      </p>
      <Link to={`/tutorial/${game.slug}`} className="btn-difficulty" style={{ background: colour }}>
        Start Tutorial
      </Link>
    </article>
  )
}
