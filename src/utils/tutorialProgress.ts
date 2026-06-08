import type { TutorialProgress } from '../types'

function getStorageKey(slug: string) {
  return `progress-${slug}`
}

export function loadTutorialProgress(slug: string): TutorialProgress {
  try {
    const raw = localStorage.getItem(getStorageKey(slug))
    if (raw) return JSON.parse(raw) as TutorialProgress
  } catch {
    /* ignore */
  }
  return { currentStep: 0, completedTasks: [], completedSteps: [] }
}

export function isTutorialComplete(
  slug: string,
  totalSteps: number,
  allTaskIds: string[] = [],
): boolean {
  const progress = loadTutorialProgress(slug)
  if (progress.completedSteps.length >= totalSteps) return true
  if (allTaskIds.length > 0) {
    return allTaskIds.every((id) => progress.completedTasks.includes(id))
  }
  return false
}

export function getContinueStep(slug: string): number | null {
  const progress = loadTutorialProgress(slug)
  const hasProgress =
    progress.currentStep > 0 ||
    progress.completedTasks.length > 0 ||
    progress.completedSteps.length > 0
  if (!hasProgress) return null
  return progress.currentStep + 1
}
