import type { Tutorial } from '../../types'
import { fruitCatcher } from './fruit-catcher'
import { flappyBird } from './flappy-bird'
import { whackAMole } from './whack-a-mole'
import { mazeNavigator } from './maze-navigator'
import { pong } from './pong'
import { snake } from './snake'
import { brickBreaker } from './brick-breaker'
import { frogger } from './frogger'
import { cookieClicker } from './cookie-clicker'
import { towerDefence } from './tower-defence'
import { geometryDash } from './geometry-dash'

export const tutorials: Tutorial[] = [
  fruitCatcher,
  flappyBird,
  whackAMole,
  mazeNavigator,
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
