import type { Tutorial } from '../../types'

export const pong: Tutorial = {
  slug: 'pong',
  name: 'Pong',
  difficulty: 2,
  estimatedTime: '2–3 hrs',
  description: 'Classic two-player bat and ball. Learn bouncing and paddles.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Create paddles and a ball',
      explanation:
        'Add two paddle sprites (left and right) and a ball sprite. Position the paddles at each side of the stage and the ball in the centre.',
      blocks: [],
      tasks: [
        { id: 'po-1', text: 'Add two paddle sprites and a ball' },
        { id: 'po-2', text: 'Position everything on the stage' },
      ],
    },
    {
      id: 'paddles',
      label: 'Paddles',
      title: 'Control the paddles',
      explanation:
        'Player 1 uses W and S keys. Player 2 uses the up and down arrow keys. Each paddle moves up and down only.',
      blocks: [
        {
          id: 'po-paddle1',
          syntax: `// Left paddle
when green flag clicked
forever
  if <key [w v] pressed?> then
    change y by (8)
  end
  if <key [s v] pressed?> then
    change y by (-8)
  end
end`,
        },
        {
          id: 'po-paddle2',
          syntax: `// Right paddle
when green flag clicked
forever
  if <key [up arrow v] pressed?> then
    change y by (8)
  end
  if <key [down arrow v] pressed?> then
    change y by (-8)
  end
end`,
        },
      ],
      tasks: [
        { id: 'po-3', text: 'Add W/S controls to the left paddle' },
        { id: 'po-4', text: 'Add arrow key controls to the right paddle' },
      ],
    },
    {
      id: 'ball',
      label: 'Ball',
      title: 'Make the ball bounce',
      explanation:
        'The ball moves constantly and bounces off the top, bottom, and paddles. Use the "if on edge, bounce" block and paddle touching checks.',
      blocks: [
        {
          id: 'po-ball',
          syntax: `when green flag clicked
point in direction (pick random (135) to (225))
forever
  move (6) steps
  if on edge, bounce
  if <touching [Paddle1 v] ?> or <touching [Paddle2 v] ?> then
    point in direction (180 - direction)
  end
end`,
        },
      ],
      tasks: [
        { id: 'po-5', text: 'Add ball movement and bouncing' },
        { id: 'po-6', text: 'Test bouncing off paddles' },
      ],
    },
    {
      id: 'scoring',
      label: 'Scoring',
      title: 'Keep score',
      explanation:
        'Create variables for Player 1 Score and Player 2 Score. When the ball touches the left edge, Player 2 scores. When it touches the right edge, Player 1 scores. Reset the ball to the centre after each point.',
      blocks: [
        {
          id: 'po-score',
          syntax: `when green flag clicked
forever
  if <touching [edge v]?> then
    if <(x position) < [0]> then
      change [Player 2 Score v] by (1)
    else
      change [Player 1 Score v] by (1)
    end
    go to x: (0) y: (0)
    wait (1) secs
  end
end`,
        },
      ],
      tasks: [
        { id: 'po-7', text: 'Create score variables for both players' },
        { id: 'po-8', text: 'Add scoring and ball reset blocks' },
        { id: 'po-9', text: 'Run a practice round to 5 points' },
      ],
    },
  ],
}
