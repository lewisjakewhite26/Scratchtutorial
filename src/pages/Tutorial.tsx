import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { GradientBlobs } from '../components/GradientBlobs'
import { TutorialIcon } from '../components/TutorialIcon'
import { StarRating } from '../components/StarRating'
import { TimePill } from '../components/TimePill'
import { StepNav } from '../components/StepNav'
import { StepContent } from '../components/StepContent'
import { ExpertMode } from '../components/ExpertMode'
import { PrintTutorialButton } from '../components/PrintTutorialButton'
import { StepCompleteToast } from '../components/StepCompleteToast'
import { TutorialComplete } from '../components/TutorialComplete'
import { getTutorialBySlug } from '../data/tutorials'
import { useTutorialProgress } from '../hooks/useTutorialProgress'

export function Tutorial() {
  const { slug } = useParams<{ slug: string }>()
  const tutorial = slug ? getTutorialBySlug(slug) : undefined
  const stepContentRef = useRef<HTMLDivElement>(null)
  const shouldScrollToStep = useRef(false)
  const wasStepCompleteRef = useRef(false)
  const [showToast, setShowToast] = useState(false)

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

  const currentStep = tutorial?.steps[progress.currentStep]
  const totalSteps = tutorial?.steps.length ?? 0
  const progressPercent = totalSteps > 0 ? ((progress.currentStep + 1) / totalSteps) * 100 : 0
  const isLastStep = totalSteps > 0 && progress.currentStep === totalSteps - 1

  const allTasksInStepComplete =
    !currentStep ||
    currentStep.tasks.length === 0 ||
    currentStep.tasks.every((task) => isTaskComplete(task.id))

  const allTutorialTasksComplete =
    tutorial?.steps.every(
      (step) => step.tasks.length === 0 || step.tasks.every((task) => isTaskComplete(task.id)),
    ) ?? false

  useEffect(() => {
    wasStepCompleteRef.current = false
  }, [progress.currentStep])

  useEffect(() => {
    if (!tutorial || !allTasksInStepComplete) {
      wasStepCompleteRef.current = false
      return
    }

    if (wasStepCompleteRef.current) return
    wasStepCompleteRef.current = true

    markStepComplete(progress.currentStep)

    if (isLastStep) return

    setShowToast(true)
    const timer = window.setTimeout(() => setShowToast(false), 2000)
    return () => window.clearTimeout(timer)
  }, [tutorial, allTasksInStepComplete, progress.currentStep, isLastStep, markStepComplete])

  if (!tutorial || !currentStep) {
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

  const showCongratulations = isLastStep && allTasksInStepComplete

  return (
    <div className="page dot-grid">
      <GradientBlobs />
      <div className="page-inner">
        <Navbar variant="solid" />

        <main id="main-content" className="container container--narrow pt-28 pb-24">
          <nav className="breadcrumb">
            <Link to="/catalogue">Tutorials</Link>
            <span>›</span>
            <span className="text-primary font-medium">{tutorial.name}</span>
          </nav>

          <header className="tutorial-header">
            <TutorialIcon slug={tutorial.slug} size="lg" />
            <div className="flex-1">
              <h1 className="font-display mb-3 text-3xl font-extrabold tracking-tight">
                {tutorial.name}
              </h1>
              <div className="tutorial-header__meta">
                <StarRating difficulty={tutorial.difficulty} />
                <TimePill time={tutorial.estimatedTime} />
              </div>
              <p className="text-secondary" style={{ fontSize: '1.125rem' }}>
                {tutorial.description}
              </p>

              <div className="mt-4">
                <PrintTutorialButton slug={tutorial.slug} />
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between tutorial-meta-label">
                  <span>Step {progress.currentStep + 1} of {tutorial.steps.length}</span>
                  <span>{Math.round(progressPercent)}%</span>
                </div>
                <div
                  className="progress-track"
                  role="progressbar"
                  aria-valuenow={Math.round(progressPercent)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Tutorial progress: step ${progress.currentStep + 1} of ${tutorial.steps.length}, ${Math.round(progressPercent)} percent`}
                >
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
              isFirstStep={progress.currentStep === 0}
            />
          </div>

          {showCongratulations ? (
            <TutorialComplete tutorialName={tutorial.name} />
          ) : (
            <div className="tutorial-nav-buttons mt-8 flex justify-between gap-4">
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
          )}

          {isLastStep && tutorial.expertMode && (
            <ExpertMode
              description={tutorial.expertMode.description}
              scratchUrl={tutorial.expertMode.scratchUrl}
            />
          )}

          {isLastStep && tutorial.extension && allTutorialTasksComplete && (
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

      <StepCompleteToast visible={showToast} />
    </div>
  )
}
