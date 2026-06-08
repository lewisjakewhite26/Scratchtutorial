import { useCallback, useEffect, useState } from 'react'
import type { TutorialProgress } from '../types'

function getStorageKey(slug: string) {
  return `progress-${slug}`
}

function loadProgress(slug: string): TutorialProgress {
  try {
    const raw = localStorage.getItem(getStorageKey(slug))
    if (raw) return JSON.parse(raw) as TutorialProgress
  } catch {
    /* ignore */
  }
  return { currentStep: 0, completedTasks: [], completedSteps: [] }
}

function saveProgress(slug: string, progress: TutorialProgress) {
  localStorage.setItem(getStorageKey(slug), JSON.stringify(progress))
}

export function useTutorialProgress(slug: string, totalSteps: number) {
  const [progress, setProgress] = useState<TutorialProgress>(() => loadProgress(slug))

  useEffect(() => {
    setProgress(loadProgress(slug))
  }, [slug])

  const setCurrentStep = useCallback(
    (step: number) => {
      setProgress((prev) => {
        const next = { ...prev, currentStep: Math.max(0, Math.min(step, totalSteps - 1)) }
        saveProgress(slug, next)
        return next
      })
    },
    [slug, totalSteps],
  )

  const toggleTask = useCallback(
    (taskId: string) => {
      setProgress((prev) => {
        const completed = prev.completedTasks.includes(taskId)
          ? prev.completedTasks.filter((id) => id !== taskId)
          : [...prev.completedTasks, taskId]
        const next = { ...prev, completedTasks: completed }
        saveProgress(slug, next)
        return next
      })
    },
    [slug],
  )

  const markStepComplete = useCallback(
    (stepIndex: number) => {
      setProgress((prev) => {
        if (prev.completedSteps.includes(stepIndex)) return prev
        const next = {
          ...prev,
          completedSteps: [...prev.completedSteps, stepIndex],
        }
        saveProgress(slug, next)
        return next
      })
    },
    [slug],
  )

  const isTaskComplete = useCallback(
    (taskId: string) => progress.completedTasks.includes(taskId),
    [progress.completedTasks],
  )

  return {
    progress,
    setCurrentStep,
    toggleTask,
    markStepComplete,
    isTaskComplete,
  }
}
