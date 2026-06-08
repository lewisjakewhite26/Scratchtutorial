import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { GradientBlobs } from '../components/GradientBlobs'
import { GameIcon } from '../components/GameIcon'
import { StarRating } from '../components/StarRating'
import { TimePill } from '../components/TimePill'
import { StepNav } from '../components/StepNav'
import { StepContent } from '../components/StepContent'
import { ExpertMode } from '../components/ExpertMode'
import { getTutorialBySlug } from '../data/tutorials'
import { useTutorialProgress } from '../hooks/useTutorialProgress'

export function Tutorial() {
  const { slug } = useParams<{ slug: string }>()
  const tutorial = slug ? getTutorialBySlug(slug) : undefined
  const stepContentRef = useRef<HTMLDivElement>(null)
  const shouldScrollToStep = useRef(false)

  const { progress, setCurrentStep, toggleTask, markStepComplete, isTaskComplete } =
    useTutorialProgress(slug ?? '', tutorial?.steps.length ?? 0)

  useEffect(() => {
    if (!shouldScrollToStep.current) return
    shouldScrollToStep.current = false
    stepContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [progress.currentStep])

  const goToStep = (index: number) => {
    shouldScrollToStep.current = true
    setCurrentStep(index)
  }

  const handleStepClick = (index: number) => {
    goToStep(index)
  }

  const handleNext = () => {
    if (!tutorial) return
    markStepComplete(progress.currentStep)
    if (progress.currentStep < tutorial.steps.length - 1) {
      goToStep(progress.currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (progress.currentStep > 0) {
      goToStep(progress.currentStep - 1)
    }
  }

  if (!tutorial) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="glass-card p-10 text-center">
          <h1 className="font-display mb-4 text-2xl font-bold">Tutorial not found</h1>
          <Link to="/catalogue" className="btn btn-primary btn-sm">
            Back to catalogue
          </Link>
        </div>
      </div>
    )
  }

  const currentStep = tutorial.steps[progress.currentStep]
  const progressPercent = ((progress.currentStep + 1) / tutorial.steps.length) * 100
  const isLastStep = progress.currentStep === tutorial.steps.length - 1

  return (
    <div className="page dot-grid">
      <GradientBlobs />
      <div className="page-inner">
        <Navbar variant="solid" />

        <main className="container container--narrow pt-28 pb-24">
          <nav className="breadcrumb">
            <Link to="/catalogue">Tutorials</Link>
            <span>›</span>
            <span className="text-primary font-medium">{tutorial.name}</span>
          </nav>

          <header className="tutorial-header">
            <GameIcon slug={tutorial.slug} size="lg" />
            <div className="flex-1">
              <h1 className="font-display mb-3 text-3xl font-extrabold tracking-tight">
                {tutorial.name}
              </h1>
              <div className="tutorial-header__meta">
                <StarRating difficulty={tutorial.difficulty} />
                <TimePill time={tutorial.estimatedTime} />
              </div>
              <p className="text-secondary">{tutorial.description}</p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs font-semibold uppercase text-muted" style={{ letterSpacing: '0.05em' }}>
                  <span>Step {progress.currentStep + 1} of {tutorial.steps.length}</span>
                  <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>
            </div>
          </header>

          <StepNav
            steps={tutorial.steps}
            currentStep={progress.currentStep}
            completedSteps={progress.completedSteps}
            onStepClick={handleStepClick}
          />

          <div ref={stepContentRef} className="tutorial-step-content mt-8">
            <StepContent
              step={currentStep}
              isTaskComplete={isTaskComplete}
              onToggleTask={toggleTask}
            />
          </div>

          <div className="mt-8 flex justify-between gap-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={progress.currentStep === 0}
              className="btn btn-ghost btn-sm"
              style={{ opacity: progress.currentStep === 0 ? 0.4 : 1 }}
            >
              ← Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={isLastStep}
              className="btn btn-primary btn-sm"
              style={{ opacity: isLastStep ? 0.4 : 1 }}
            >
              {isLastStep ? 'Finished!' : 'Next step →'}
            </button>
          </div>

          {isLastStep && tutorial.expertMode && (
            <ExpertMode
              description={tutorial.expertMode.description}
              scratchUrl={tutorial.expertMode.scratchUrl}
            />
          )}

          {isLastStep && tutorial.extension && (
            <div className="mt-10">
              <h2 className="font-display mb-6 text-2xl font-bold">{tutorial.extension.title}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {tutorial.extension.steps.map((step) => (
                  <StepContent
                    key={step.id}
                    step={step}
                    isTaskComplete={isTaskComplete}
                    onToggleTask={toggleTask}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
