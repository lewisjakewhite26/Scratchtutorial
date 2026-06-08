import type { Step } from '../types'

interface StepNavProps {
  steps: Step[]
  currentStep: number
  completedSteps: number[]
  onStepClick: (index: number) => void
}

export function StepNav({ steps, currentStep, completedSteps, onStepClick }: StepNavProps) {
  return (
    <nav className="step-nav" aria-label="Tutorial steps">
      <div className="step-nav__inner">
        {steps.map((step, index) => {
          const isActive = index === currentStep
          const isComplete = completedSteps.includes(index)

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onStepClick(index)}
              className={`step-pill ${isActive ? 'step-pill--active' : ''}`}
              aria-current={isActive ? 'step' : undefined}
            >
              {isComplete && !isActive && <span className="step-pill__tick">✓</span>}
              <span>
                {index + 1} · {step.label}
                {step.estimatedMinutes != null && (
                  <span className="step-pill__time">~{step.estimatedMinutes} min</span>
                )}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
