import type { Tutorial } from '../../types'
import { catchingGame } from './catching-game'
import { flappyBird } from './flappy-bird'
import { whackAMole } from './whack-a-mole'
import { mazeGame } from './maze-game'
import { pong } from './pong'
import { snake } from './snake'
import { brickBreaker } from './brick-breaker'
import { frogger } from './frogger'
import { cookieClicker } from './cookie-clicker'
import { towerDefence } from './tower-defence'
import { geometryDash } from './geometry-dash'

export const tutorials: Tutorial[] = [
  catchingGame,
  flappyBird,
  whackAMole,
  mazeGame,
  pong,
  snake,
  brickBreaker,
  frogger,
  cookieClicker,
  towerDefence,
  geometryDash,
]

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug)
}
