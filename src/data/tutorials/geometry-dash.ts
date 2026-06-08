import type { Tutorial } from '../../types'

export const geometryDash: Tutorial = {
  slug: 'geometry-dash',
  name: 'Geometry Dash',
  difficulty: 3,
  estimatedTime: '4–5 hrs',
  description: 'Jump over spikes in a scrolling world. Learn gravity and obstacles.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Create the player and ground',
      explanation:
        'Add a square player sprite and draw a ground line across the bottom. Add spike sprites along the ground. The player will run automatically.',
      blocks: [],
      tasks: [
        { id: 'gd-1', text: 'Add a square player sprite' },
        { id: 'gd-2', text: 'Draw a ground backdrop with spikes' },
      ],
    },
    {
      id: 'run',
      label: 'Run',
      title: 'Make the world scroll',
      explanation:
        'Instead of moving the player right, move all obstacle sprites left to create a scrolling effect. The player stays near the left side.',
      blocks: [
        {
          id: 'gd-scroll',
          syntax: `when green flag clicked
forever
  change x by (-5)
  if <(x position) < [-240]> then
    delete this clone
  end
end`,
        },
      ],
      tasks: [
        { id: 'gd-3', text: 'Clone spikes and add scrolling blocks' },
        { id: 'gd-4', text: 'Keep spawning new spikes from the right' },
      ],
    },
    {
      id: 'jump',
      label: 'Jump',
      title: 'Jump with gravity',
      explanation:
        'Press space to jump. The player falls with gravity and lands on the ground. Only allow jumping when touching the ground colour.',
      blocks: [
        {
          id: 'gd-jump',
          syntax: `when green flag clicked
set [velocity v] to [0]
forever
  if <key [space v] pressed?> and <touching color [#00ff00] ?> then
    set [velocity v] to [12]
  end
  change [velocity v] by (-1)
  change y by (velocity)
  if <(y position) < [-140]> then
    set y to (-140)
    set [velocity v] to [0]
  end
end`,
        },
      ],
      tasks: [
        { id: 'gd-5', text: 'Create a velocity variable' },
        { id: 'gd-6', text: 'Add jump and gravity blocks' },
        { id: 'gd-7', text: 'Practice jumping over one spike' },
      ],
    },
    {
      id: 'crash',
      label: 'Crash',
      title: 'End the round on collision',
      explanation:
        'Create a Score variable that increases over time. If the player touches a spike, stop all scripts and show the final score.',
      blocks: [
        {
          id: 'gd-crash',
          syntax: `when green flag clicked
set [Score v] to [0]
forever
  change [Score v] by (1)
  wait (0.1) secs
  if <touching [Spike v] ?> then
    say (join [Finished! Score: ] (Score)) for (2) secs
    stop [all v]
  end
end`,
        },
      ],
      tasks: [
        { id: 'gd-8', text: 'Create a Score variable' },
        { id: 'gd-9', text: 'Add crash detection' },
        { id: 'gd-10', text: 'Try to beat your highest score' },
      ],
    },
  ],
}
