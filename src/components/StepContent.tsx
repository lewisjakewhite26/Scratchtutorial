import type { Step } from '../types'
import { BlockCode } from './BlockCode'
import { OpenScratchButton } from './OpenScratchButton'
import { ScratchUiGuide } from './ScratchUiGuide'
import { TaskItem } from './TaskItem'

interface StepContentProps {
  step: Step
  isTaskComplete: (id: string) => boolean
  onToggleTask: (id: string) => void
  isFirstStep?: boolean
}

export function StepContent({ step, isTaskComplete, onToggleTask, isFirstStep = false }: StepContentProps) {
  return (
    <article className="glass-card p-8 p-10-md">
      <div className="step-content__header">
        <h2 className="font-display text-2xl font-bold tracking-tight text-3xl-md">{step.title}</h2>
        <OpenScratchButton />
      </div>

      {isFirstStep && <ScratchUiGuide />}

      <div className="tutorial-body mb-8">
        {step.explanation.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-secondary">
            {paragraph}
          </p>
        ))}
      </div>

      {step.blocks.map((block) => (
        <BlockCode key={block.id} syntax={block.syntax} blockId={block.id} />
      ))}

      {step.tasks.length > 0 && (
        <div className="mt-10">
          <h3 className="font-display mb-4 text-lg font-bold" style={{ fontSize: '1.25rem' }}>
            Your tasks
          </h3>
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

      {step.youShouldSee && (
        <p className="tutorial-you-should-see">
          <strong>You should see…</strong> {step.youShouldSee}
        </p>
      )}

      <div className="save-point">
        <span style={{ fontSize: '1.25rem' }} aria-hidden="true">
          💾
        </span>
        <div>
          <strong className="font-semibold">Save point</strong>
          <p className="m-0" style={{ marginTop: '0.125rem' }}>
            Click the green flag to test. Make sure everything works before moving on.
          </p>
        </div>
      </div>
    </article>
  )
}
