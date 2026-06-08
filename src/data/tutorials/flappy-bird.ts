import type { Tutorial } from '../../types'

export const flappyBird: Tutorial = {
  slug: 'flappy-bird',
  name: 'Flappy Bird',
  difficulty: 1,
  estimatedTime: '2–3 hrs',
  description: 'Tap to fly through gaps. Learn gravity and collision.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Create your bird and pipes',
      explanation:
        'Start a new project with a bird sprite. Draw two pipe sprites (top and bottom) or use the pipe images from the sprite library.\n\nMake sure the bird starts in the middle of the stage.',
      blocks: [],
      tasks: [
        { id: 'fb-1', text: 'Add a bird sprite' },
        { id: 'fb-2', text: 'Add pipe sprites for the top and bottom' },
        { id: 'fb-3', text: 'Position the bird in the centre of the stage' },
      ],
    },
    {
      id: 'gravity',
      label: 'Gravity',
      title: 'Add gravity and flapping',
      explanation:
        'The bird should fall constantly. Press the space bar to flap upwards. Add these blocks to the bird sprite.',
      blocks: [
        {
          id: 'fb-gravity',
          syntax: `when green flag clicked
set [velocity v] to [0]
forever
  change [velocity v] by (-1)
  change y by (velocity)
  if <key [space v] pressed?> then
    set [velocity v] to [8]
  end
end`,
        },
      ],
      tasks: [
        { id: 'fb-4', text: 'Create a variable called velocity' },
        { id: 'fb-5', text: 'Add the gravity and flap blocks' },
        { id: 'fb-6', text: 'Test flapping with the space bar' },
      ],
    },
    {
      id: 'pipes',
      label: 'Pipes',
      title: 'Move the pipes across the screen',
      explanation:
        'The pipes should slide from right to left. When they go off the left edge, they reset to the right with a new gap position.',
      blocks: [
        {
          id: 'fb-pipes',
          syntax: `when green flag clicked
forever
  change x by (-4)
  if <(x position) < [-240]> then
    go to x: (240) y: (y position)
  end
end`,
        },
      ],
      tasks: [
        { id: 'fb-7', text: 'Add pipe movement to both pipe sprites' },
        { id: 'fb-8', text: 'Set different y positions to create a gap' },
      ],
    },
    {
      id: 'collision',
      label: 'Collision',
      title: 'Detect crashes and score points',
      explanation:
        'If the bird touches a pipe or the ground, stop the game. Add 1 to the score each time the bird passes through a gap.',
      blocks: [
        {
          id: 'fb-crash',
          syntax: `when green flag clicked
forever
  if <touching [Pipe v] ?> or <touching [edge v]?> then
    stop [all v]
  end
end`,
        },
      ],
      tasks: [
        { id: 'fb-9', text: 'Add the crash detection blocks' },
        { id: 'fb-10', text: 'Create a Score variable and add 1 when passing pipes' },
        { id: 'fb-11', text: 'Play a full round and test crashing' },
      ],
    },
  ],
}
