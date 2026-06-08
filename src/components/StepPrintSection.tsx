import type { Step } from '../types'
import { BlockCode } from './BlockCode'

interface StepPrintSectionProps {
  step: Step
  stepNumber: number
}

export function StepPrintSection({ step, stepNumber }: StepPrintSectionProps) {
  return (
    <section className="print-step">
      <div className="print-step__header">
        <span className="print-step__number">Step {stepNumber}</span>
        <span className="print-step__label">{step.label}</span>
      </div>
      <h2 className="print-step__title font-display">{step.title}</h2>

      <div className="print-step__explanation">
        {step.explanation.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {step.blocks.map((block) => (
        <BlockCode key={block.id} syntax={block.syntax} blockId={block.id} scale={1.15} />
      ))}

      {step.tasks.length > 0 && (
        <div className="print-step__tasks">
          <h3>Tasks — tick each one when done</h3>
          <ul>
            {step.tasks.map((task) => (
              <li key={task.id}>
                <span className="print-step__checkbox" aria-hidden="true" />
                <span>{task.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="print-step__save">
        <strong>Save point:</strong> Click the green flag in Scratch to test before moving on.
      </p>
    </section>
  )
}
