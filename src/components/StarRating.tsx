interface StarRatingProps {
  difficulty: 1 | 2 | 3
  showBadge?: boolean
}

function Star() {
  return (
    <svg className="star-icon" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
    </svg>
  )
}

export function StarRating({ difficulty, showBadge = true }: StarRatingProps) {
  const labels = { 1: 'Easy', 2: 'Medium', 3: 'Hard' } as const
  const badgeClass = { 1: 'badge--easy', 2: 'badge--medium', 3: 'badge--hard' } as const

  return (
    <div className="flex items-center gap-2">
      <span className="stars" aria-label={`${labels[difficulty]} difficulty`}>
        {Array.from({ length: difficulty }, (_, i) => (
          <Star key={i} />
        ))}
      </span>
      {showBadge && <span className={`badge ${badgeClass[difficulty]}`}>{labels[difficulty]}</span>}
    </div>
  )
}
