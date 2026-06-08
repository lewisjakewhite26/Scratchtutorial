import type { CatalogueEntry } from '../types'

export const catalogueEntries: CatalogueEntry[] = [
  {
    slug: 'fruit-catcher',
    name: 'Fruit Catcher',
    difficulty: 1,
    estimatedTime: '1–2 hrs',
    description: 'Move a bowl to catch falling fruit. Learn movement and scoring.',
    icon: '🍎',
  },
  {
    slug: 'flappy-bird',
    name: 'Flappy Bird',
    difficulty: 1,
    estimatedTime: '2–3 hrs',
    description: 'Tap to fly through gaps. Learn gravity and collision.',
    icon: '🐦',
  },
  {
    slug: 'whack-a-mole',
    name: 'Whack-a-Mole',
    difficulty: 1,
    estimatedTime: '1–2 hrs',
    description: 'Hit moles before they disappear. Learn timers and random position.',
    icon: '🦫',
  },
  {
    slug: 'maze-navigator',
    name: 'Maze Navigator',
    difficulty: 1,
    estimatedTime: '2–3 hrs',
    description: 'Guide a ball through a maze. Learn colour detection and movement.',
    icon: '🏐',
  },
  {
    slug: 'pong',
    name: 'Pong',
    difficulty: 2,
    estimatedTime: '2–3 hrs',
    description: 'Classic two-player bat and ball. Learn bouncing and paddles.',
    icon: '🏓',
  },
  {
    slug: 'snake',
    name: 'Snake',
    difficulty: 2,
    estimatedTime: '3–4 hrs',
    description: 'Grow your snake by eating apples. Learn clones and variables.',
    icon: '🐍',
  },
  {
    slug: 'brick-breaker',
    name: 'Brick Breaker',
    difficulty: 2,
    estimatedTime: '3–4 hrs',
    description: 'Bounce a ball to smash bricks. Learn cloning and bounce logic.',
    icon: '🧱',
  },
  {
    slug: 'frogger',
    name: 'Frogger',
    difficulty: 2,
    estimatedTime: '3–4 hrs',
    description: 'Cross the road without getting hit. Learn lanes and collision.',
    icon: '🐸',
  },
  {
    slug: 'cookie-clicker',
    name: 'Cookie Clicker',
    difficulty: 3,
    estimatedTime: '4–5 hrs',
    description: 'Click to earn cookies, buy upgrades. Learn variables and idle logic.',
    icon: '🍪',
  },
  {
    slug: 'tower-defence',
    name: 'Tower Defence',
    difficulty: 3,
    estimatedTime: '5–6 hrs',
    description: 'Place turrets to stop enemies reaching the end. Learn lists and clones.',
    icon: '🏰',
  },
  {
    slug: 'geometry-dash',
    name: 'Geometry Dash',
    difficulty: 3,
    estimatedTime: '4–5 hrs',
    description: 'Jump over spikes in a scrolling world. Learn gravity and obstacles.',
    icon: '🔺',
  },
]

export function getDifficultyLabel(difficulty: 1 | 2 | 3): string {
  if (difficulty === 1) return 'Easy'
  if (difficulty === 2) return 'Medium'
  return 'Hard'
}

export function getDifficultyColour(difficulty: 1 | 2 | 3): string {
  if (difficulty === 1) return 'var(--easy)'
  if (difficulty === 2) return 'var(--medium)'
  return 'var(--hard)'
}
