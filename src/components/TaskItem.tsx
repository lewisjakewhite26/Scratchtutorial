interface TaskItemProps {
  id: string
  text: string
  completed: boolean
  onToggle: (id: string) => void
}

export function TaskItem({ id, text, completed, onToggle }: TaskItemProps) {
  return (
    <button
      type="button"
      onClick={() => onToggle(id)}
      className="task-item"
      style={{ opacity: completed ? 0.55 : 1 }}
    >
      <span
        className="shrink-0"
        style={{
          marginTop: '0.125rem',
          display: 'flex',
          width: '1.25rem',
          height: '1.25rem',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.375rem',
          border: completed ? '2px solid #10b981' : '2px solid #e2e8f0',
          background: completed ? '#10b981' : 'white',
          color: 'white',
          transition: 'all 0.2s',
        }}
      >
        {completed && <span className="tick-bounce text-xs font-bold">✓</span>}
      </span>
      <span
        className={`task-item__text ${completed ? 'line-through' : 'text-primary'}`}
        style={completed ? { textDecorationColor: '#94a3b8' } : undefined}
      >
        {text}
      </span>
    </button>
  )
}
