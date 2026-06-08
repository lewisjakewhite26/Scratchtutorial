interface TimePillProps {
  time: string
}

export function TimePill({ time }: TimePillProps) {
  return (
    <span className="time-pill">
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {time}
    </span>
  )
}
