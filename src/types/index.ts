export interface Task {
  id: string
  text: string
}

export interface Block {
  id: string
  syntax: string
}

export interface Step {
  id: string
  label: string
  title: string
  explanation: string
  blocks: Block[]
  tasks: Task[]
  estimatedMinutes?: number
  youShouldSee?: string
}

export interface Tutorial {
  slug: string
  name: string
  difficulty: 1 | 2 | 3
  estimatedTime: string
  description: string
  steps: Step[]
  expertMode?: {
    description: string
    scratchUrl: string
  }
  extension?: {
    title: string
    steps: Step[]
  }
}

export interface CatalogueEntry {
  slug: string
  name: string
  difficulty: 1 | 2 | 3
  estimatedTime: string
  description: string
  icon: string
}

export interface TutorialProgress {
  currentStep: number
  completedTasks: string[]
  completedSteps: number[]
}

export type DifficultyFilter = 'all' | 1 | 2 | 3
