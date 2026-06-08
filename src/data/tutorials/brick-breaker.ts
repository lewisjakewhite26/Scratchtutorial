import type { Tutorial } from '../../types'

export const brickBreaker: Tutorial = {
  slug: 'brick-breaker',
  name: 'Brick Breaker',
  difficulty: 2,
  estimatedTime: '3–4 hrs',
  description: 'Bounce a ball to smash bricks. Learn cloning and bounce logic.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Create paddle, ball and bricks',
      explanation:
        'Add a paddle sprite at the bottom, a ball sprite, and a brick sprite. You will clone the brick to make a row across the top of the stage.',
      blocks: [],
      tasks: [
        { id: 'bb-1', text: 'Add paddle, ball and brick sprites' },
        { id: 'bb-2', text: 'Position the paddle at the bottom' },
      ],
    },
    {
      id: 'bricks',
      label: 'Bricks',
      title: 'Clone bricks across the top',
      explanation:
        'Use nested loops to create a grid of bricks. Each clone stays in place until hit by the ball.',
      blocks: [
        {
          id: 'bb-bricks',
          syntax: `when green flag clicked
set [x v] to [-200]
repeat (8)
  set [y v] to [150]
  repeat (3)
    go to x: (x) y: (y)
    create clone of [myself v]
    change [y v] by (-25)
  end
  change [x v] by (55)
end
hide`,
        },
      ],
      tasks: [
        { id: 'bb-3', text: 'Create x and y variables for positioning' },
        { id: 'bb-4', text: 'Add the brick cloning blocks' },
        { id: 'bb-5', text: 'Check a full grid of bricks appears' },
      ],
    },
    {
      id: 'ball',
      label: 'Ball',
      title: 'Bounce the ball off everything',
      explanation:
        'The ball moves and bounces off walls, the paddle, and bricks. When it hits a brick, delete the brick clone and bounce the ball.',
      blocks: [
        {
          id: 'bb-ball',
          syntax: `when green flag clicked
point in direction (45)
forever
  move (5) steps
  if on edge, bounce
  if <touching [Paddle v] ?> then
    point in direction (180 - direction)
  end
  if <touching [Brick v] ?> then
    point in direction (180 - direction)
    delete this clone
  end
end`,
        },
      ],
      tasks: [
        { id: 'bb-6', text: 'Add ball movement and bouncing' },
        { id: 'bb-7', text: 'Make bricks disappear when hit' },
      ],
    },
    {
      id: 'lose',
      label: 'Lose',
      title: 'Lose a life when the ball falls',
      explanation:
        'Create a Lives variable starting at 3. When the ball touches the bottom edge, lose a life and reset the ball. Game over when lives reach 0.',
      blocks: [
        {
          id: 'bb-lose',
          syntax: `when green flag clicked
set [Lives v] to [3]
forever
  if <(y position) < [-180]> then
    change [Lives v] by (-1)
    go to x: (0) y: (0)
    if <(Lives) = [0]> then
      stop [all v]
    end
  end
end`,
        },
      ],
      tasks: [
        { id: 'bb-8', text: 'Create a Lives variable' },
        { id: 'bb-9', text: 'Add lose life and game over blocks' },
        { id: 'bb-10', text: 'Clear all the bricks to win' },
      ],
    },
  ],
  expertMode: {
    description:
      'Finished the basic version? Open this project in Scratch to explore a more advanced version with power-ups, multiple ball speeds and moving bricks. Can you work out how it works?',
    scratchUrl: 'https://scratch.mit.edu/projects/explore/?q=brick+breaker',
  },
}
