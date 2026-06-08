import type { Tutorial } from '../../types'

export const frogger: Tutorial = {
  slug: 'frogger',
  name: 'Frogger',
  difficulty: 2,
  estimatedTime: '3–4 hrs',
  description: 'Cross the road without getting hit. Learn lanes and collision.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Create the frog and road',
      explanation:
        'Add a frog sprite at the bottom of the stage. Draw a road backdrop with several lanes. You will add cars that move across each lane.',
      blocks: [],
      tasks: [
        { id: 'fr-1', text: 'Add a frog sprite' },
        { id: 'fr-2', text: 'Draw a road backdrop with lanes' },
        { id: 'fr-3', text: 'Place the frog at the starting position' },
      ],
    },
    {
      id: 'frog-move',
      label: 'Frog',
      title: 'Move the frog one step at a time',
      explanation:
        'The frog moves one grid square at a time when you press an arrow key. Use change x by and change y by with fixed amounts.',
      blocks: [
        {
          id: 'fr-move',
          syntax: `when green flag clicked
forever
  if <key [up arrow v] pressed?> then
    change y by (40)
    wait until <not <key [up arrow v] pressed?>>
  end
  if <key [down arrow v] pressed?> then
    change y by (-40)
    wait until <not <key [down arrow v] pressed?>>
  end
  if <key [left arrow v] pressed?> then
    change x by (-40)
    wait until <not <key [left arrow v] pressed?>>
  end
  if <key [right arrow v] pressed?> then
    change x by (40)
    wait until <not <key [right arrow v] pressed?>>
  end
end`,
        },
      ],
      tasks: [
        { id: 'fr-4', text: 'Add grid movement blocks to the frog' },
        { id: 'fr-5', text: 'Test moving in all four directions' },
      ],
    },
    {
      id: 'cars',
      label: 'Cars',
      title: 'Add moving cars',
      explanation:
        'Create a car sprite and clone it for each lane. Cars in odd lanes move right, cars in even lanes move left at different speeds.',
      blocks: [
        {
          id: 'fr-car',
          syntax: `when I start as a clone
forever
  change x by (speed)
  if on edge, bounce
end`,
        },
      ],
      tasks: [
        { id: 'fr-6', text: 'Create a car sprite and clone it for each lane' },
        { id: 'fr-7', text: 'Give each lane a different speed' },
        { id: 'fr-8', text: 'Watch cars move across the road' },
      ],
    },
    {
      id: 'win-lose',
      label: 'Win/Lose',
      title: 'Win by reaching the top, lose if hit',
      explanation:
        'If the frog touches a car, send it back to the start. If the frog reaches the top of the stage, show a win message.',
      blocks: [
        {
          id: 'fr-win',
          syntax: `when green flag clicked
forever
  if <touching [Car v] ?> then
    go to x: (0) y: (-160)
  end
  if <(y position) > [160]> then
    say [You made it!] for (2) secs
    stop [all v]
  end
end`,
        },
      ],
      tasks: [
        { id: 'fr-9', text: 'Add crash detection and reset' },
        { id: 'fr-10', text: 'Add win detection at the top' },
        { id: 'fr-11', text: 'Cross the road without getting hit' },
      ],
    },
  ],
}
