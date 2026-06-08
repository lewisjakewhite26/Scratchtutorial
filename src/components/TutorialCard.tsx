import { Link } from 'react-router-dom'
import type { CatalogueEntry } from '../types'
import { getDifficultyColour } from '../data/catalogue'
import { getTutorialBySlug } from '../data/tutorials'
import { getContinueStep, isTutorialComplete } from '../utils/tutorialProgress'
import { TutorialIcon } from './TutorialIcon'
import { StarRating } from './StarRating'
import { TimePill } from './TimePill'

interface TutorialCardProps {
  entry: CatalogueEntry
  index?: number
}

export function TutorialCard({ entry, index = 0 }: TutorialCardProps) {
  const colour = getDifficultyColour(entry.difficulty)
  const tutorial = getTutorialBySlug(entry.slug)
  const totalSteps = tutorial?.steps.length ?? 0
  const allTaskIds = tutorial?.steps.flatMap((s) => s.tasks.map((t) => t.id)) ?? []
  const done = isTutorialComplete(entry.slug, totalSteps, allTaskIds)
  const continueStep = getContinueStep(entry.slug)

  return (
    <article
      className="card-animate glass-card glass-card-hover tutorial-card flex flex-col p-6"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {done && <span className="card-progress-badge card-progress-badge--done">✓ Done</span>}
      {!done && continueStep != null && (
        <span className="card-progress-badge">Continue — Step {continueStep}</span>
      )}
      <TutorialIcon slug={entry.slug} size="md" />
      <h3 className="font-display mt-5 mb-2 text-xl font-bold tracking-tight">{entry.name}</h3>
      <div className="card-meta mb-4">
        <StarRating difficulty={entry.difficulty} />
        <TimePill time={entry.estimatedTime} />
      </div>
      <p className="mb-6 flex-1 leading-relaxed text-secondary line-clamp-2" style={{ fontSize: '1rem' }}>
        {entry.description}
      </p>
      <Link to={`/tutorial/${entry.slug}`} className="btn-difficulty" style={{ background: colour }}>
        {continueStep != null && !done ? 'Continue Tutorial' : 'Start Tutorial'}
      </Link>
    </article>
  )
}
