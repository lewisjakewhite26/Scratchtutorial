import type { Tutorial } from '../../types'

export const mazeNavigator: Tutorial = {
  slug: 'maze-navigator',
  name: 'Maze Navigator',
  difficulty: 1,
  estimatedTime: '2–3 hrs',
  description: 'Guide a ball through a maze. Learn colour detection and movement.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Draw your maze',
      explanation:
        'Create a backdrop with black walls and white paths. Add a ball sprite. The ball should only move along the white paths, not through the walls.',
      blocks: [],
      tasks: [
        { id: 'mg-1', text: 'Draw a maze backdrop with black walls' },
        { id: 'mg-2', text: 'Add a ball sprite at the start position' },
      ],
    },
    {
      id: 'movement',
      label: 'Movement',
      title: 'Move the ball with arrow keys',
      explanation:
        'Use arrow keys to move the ball. Before moving, check the colour in front of the ball. If it is black (the wall), do not move.',
      blocks: [
        {
          id: 'mg-move',
          syntax: `when green flag clicked
forever
  if <key [up arrow v] pressed?> then
    if <not <touching color [#000000] ?>> then
      change y by (4)
    end
  end
  if <key [down arrow v] pressed?> then
    if <not <touching color [#000000] ?>> then
      change y by (-4)
    end
  end
  if <key [left arrow v] pressed?> then
    if <not <touching color [#000000] ?>> then
      change x by (-4)
    end
  end
  if <key [right arrow v] pressed?> then
    if <not <touching color [#000000] ?>> then
      change x by (4)
    end
  end
end`,
        },
      ],
      tasks: [
        { id: 'mg-3', text: 'Add movement blocks with colour checks' },
        { id: 'mg-4', text: 'Test that the ball cannot pass through walls' },
      ],
    },
    {
      id: 'goal',
      label: 'Goal',
      title: 'Reach the finish',
      explanation:
        'Add a green finish area at the end of the maze. When the ball touches green, you win. Show a message and stop all scripts.',
      blocks: [
        {
          id: 'mg-goal',
          syntax: `when green flag clicked
forever
  if <touching color [#00ff00] ?> then
    say [You win!] for (2) secs
    stop [all v]
  end
end`,
        },
      ],
      tasks: [
        { id: 'mg-5', text: 'Paint a green finish area on your maze' },
        { id: 'mg-6', text: 'Add the win detection blocks' },
        { id: 'mg-7', text: 'Complete the maze from start to finish' },
      ],
    },
  ],
  extension: {
    title: 'Extension: Add More Levels',
    steps: [
      {
        id: 'ext-backdrop',
        label: 'Backdrop',
        title: 'Add a second maze backdrop',
        explanation:
          'Paint a second backdrop with a harder maze. Name it "Maze 2". You can switch between levels when the player wins.',
        blocks: [],
        tasks: [
          { id: 'mg-ext-1', text: 'Create a second maze backdrop' },
          { id: 'mg-ext-2', text: 'Name both backdrops clearly' },
        ],
      },
      {
        id: 'ext-switch',
        label: 'Switch',
        title: 'Switch to the next level',
        explanation:
          'When the player wins level 1, switch to backdrop "Maze 2" and move the ball back to the start.',
        blocks: [
          {
            id: 'mg-ext-switch',
            syntax: `if <touching color [#00ff00] ?> then
  if <(backdrop name) = [Maze 1]> then
    switch backdrop to [Maze 2 v]
    go to x: (-180) y: (140)
  else
    say [You beat both mazes!] for (2) secs
    stop [all v]
  end
end`,
          },
        ],
        tasks: [
          { id: 'mg-ext-3', text: 'Update the win blocks to switch backdrop' },
          { id: 'mg-ext-4', text: 'Reset the ball position on each new level' },
          { id: 'mg-ext-5', text: 'Play through both mazes' },
        ],
      },
    ],
  },
}
