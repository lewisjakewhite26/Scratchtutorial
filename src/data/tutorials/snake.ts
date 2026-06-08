import type { Tutorial } from '../../types'

export const snake: Tutorial = {
  slug: 'snake',
  name: 'Snake',
  difficulty: 2,
  estimatedTime: '3–4 hrs',
  description: 'Grow your snake by eating apples. Learn clones and variables.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Create the snake head and apple',
      explanation:
        'Start with a snake head sprite (a small square works well) and an apple sprite. The snake will grow by creating clones of body segments.',
      blocks: [],
      tasks: [
        { id: 'sn-1', text: 'Create a snake head sprite' },
        { id: 'sn-2', text: 'Add an apple sprite' },
        { id: 'sn-3', text: 'Choose a simple backdrop' },
      ],
    },
    {
      id: 'movement',
      label: 'Movement',
      title: 'Move the snake in four directions',
      explanation:
        'Use arrow keys to change direction. The snake should move continuously in a forever loop. Store the direction in a variable.',
      blocks: [
        {
          id: 'sn-move',
          syntax: `when green flag clicked
set [direction v] to [90]
forever
  if <key [up arrow v] pressed?> then
    set [direction v] to [0]
  end
  if <key [down arrow v] pressed?> then
    set [direction v] to [180]
  end
  if <key [left arrow v] pressed?> then
    set [direction v] to [-90]
  end
  if <key [right arrow v] pressed?> then
    set [direction v] to [90]
  end
  point in direction (direction)
  move (4) steps
  wait (0.1) secs
end`,
        },
      ],
      tasks: [
        { id: 'sn-4', text: 'Create a direction variable' },
        { id: 'sn-5', text: 'Add the movement blocks' },
        { id: 'sn-6', text: 'Test all four directions' },
      ],
    },
    {
      id: 'apples',
      label: 'Apples',
      title: 'Eat apples to grow',
      explanation:
        'When the snake touches the apple, move the apple to a new random position, increase the score, and create a clone for a new body segment.',
      blocks: [
        {
          id: 'sn-apple',
          syntax: `when green flag clicked
forever
  if <touching [Apple v] ?> then
    change [Score v] by (1)
    go to x: (pick random (-220) to (220)) y: (pick random (-160) to (160))
    create clone of [myself v]
  end
end`,
        },
      ],
      tasks: [
        { id: 'sn-7', text: 'Create a Score variable' },
        { id: 'sn-8', text: 'Add apple eating and clone creation' },
        { id: 'sn-9', text: 'Eat 3 apples and watch the snake grow' },
      ],
    },
    {
      id: 'clones',
      label: 'Clones',
      title: 'Make the body segments follow',
      explanation:
        'Each clone should follow the segment in front of it. Use a list to store past positions, or make each clone wait and move to where the head was.',
      blocks: [
        {
          id: 'sn-clone',
          syntax: `when I start as a clone
forever
  go to [SnakeHead v]
  wait (0.15) secs
end`,
        },
      ],
      tasks: [
        { id: 'sn-10', text: 'Add clone behaviour blocks' },
        { id: 'sn-11', text: 'Add end-round logic when touching edge or itself' },
        { id: 'sn-12', text: 'Play until you reach a score of 10' },
      ],
    },
  ],
}
