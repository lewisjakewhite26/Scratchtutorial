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
      role="checkbox"
      aria-checked={completed}
      aria-label={text}
      onClick={() => onToggle(id)}
      className="task-item"
      style={{ opacity: completed ? 0.55 : 1 }}
    >
      <span
        className={`task-item__checkbox ${completed ? 'task-item__checkbox--done' : ''}`}
        aria-hidden="true"
      >
        {completed && <span className="tick-bounce font-bold">✓</span>}
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
