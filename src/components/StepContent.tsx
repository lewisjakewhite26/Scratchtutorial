import type { Step } from '../types'
import { BlockCode } from './BlockCode'
import { TaskItem } from './TaskItem'

interface StepContentProps {
  step: Step
  isTaskComplete: (id: string) => boolean
  onToggleTask: (id: string) => void
}

export function StepContent({ step, isTaskComplete, onToggleTask }: StepContentProps) {
  return (
    <article className="glass-card p-8 p-10-md">
      <h2 className="font-display mb-5 text-2xl font-bold tracking-tight text-3xl-md">{step.title}</h2>

      <div className="mb-8 leading-relaxed">
        {step.explanation.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-secondary" style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
            {paragraph}
          </p>
        ))}
      </div>

      {step.blocks.map((block) => (
        <BlockCode key={block.id} syntax={block.syntax} blockId={block.id} />
      ))}

      {step.tasks.length > 0 && (
        <div className="mt-10">
          <h3 className="font-display mb-4 text-lg font-bold">Your tasks</h3>
          <div className="task-list">
            {step.tasks.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                text={task.text}
                completed={isTaskComplete(task.id)}
                onToggle={onToggleTask}
              />
            ))}
          </div>
        </div>
      )}

      <div className="save-point">
        <span style={{ fontSize: '1.125rem' }} aria-hidden="true">💾</span>
        <div>
          <strong className="font-semibold">Save point</strong>
          <p className="m-0" style={{ marginTop: '0.125rem', opacity: 0.85 }}>
            Click the green flag to test. Make sure everything works before moving on.
          </p>
        </div>
      </div>
    </article>
  )
}
