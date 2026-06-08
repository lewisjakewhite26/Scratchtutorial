interface ExpertModeProps {
  description: string
  scratchUrl: string
}

export function ExpertMode({ description, scratchUrl }: ExpertModeProps) {
  return (
    <div
      className="glass-card mt-10 p-8 p-10-md overflow-hidden"
      style={{ border: '2px solid rgba(239, 68, 68, 0.2)' }}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="stars">
          {Array.from({ length: 3 }, (_, i) => (
            <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
            </svg>
          ))}
        </span>
        <span className="badge badge--hard">Expert Mode</span>
      </div>
      <h3 className="font-display mb-3 text-xl font-bold">Finished the basic version?</h3>
      <p className="mb-6 leading-relaxed text-secondary">{description}</p>
      <a
        href={scratchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm"
        style={{
          background: 'var(--hard)',
          color: 'white',
          boxShadow: '0 4px 16px rgba(239,68,68,0.3)',
          textDecoration: 'none',
        }}
      >
        Open Expert Project →
      </a>
    </div>
  )
}
