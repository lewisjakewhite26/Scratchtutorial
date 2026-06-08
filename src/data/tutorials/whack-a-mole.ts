import type { Tutorial } from '../../types'

export const whackAMole: Tutorial = {
  slug: 'whack-a-mole',
  name: 'Whack-a-Mole',
  difficulty: 1,
  estimatedTime: '1–2 hrs',
  description: 'Hit moles before they disappear. Learn timers and random position.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Create your mole sprite',
      explanation:
        'Make a new project with a mole sprite. Draw a simple hole backdrop or use a green field. The mole should start hidden underground.',
      blocks: [],
      tasks: [
        { id: 'wm-1', text: 'Add a mole sprite' },
        { id: 'wm-2', text: 'Create or choose a backdrop' },
        { id: 'wm-3', text: 'Hide the mole at the start' },
      ],
    },
    {
      id: 'pop-up',
      label: 'Pop up',
      title: 'Make the mole appear randomly',
      explanation:
        'Use a forever loop with a wait block. Each time, pick a random position and show the mole for a short time.',
      blocks: [
        {
          id: 'wm-popup',
          syntax: `when green flag clicked
forever
  wait (pick random (1) to (3)) secs
  go to x: (pick random (-200) to (200)) y: (pick random (-100) to (100))
  show
  wait (0.8) secs
  hide
end`,
        },
      ],
      tasks: [
        { id: 'wm-4', text: 'Add the pop-up blocks to the mole' },
        { id: 'wm-5', text: 'Watch the mole appear in different places' },
      ],
    },
    {
      id: 'whack',
      label: 'Whack',
      title: 'Score when you click the mole',
      explanation:
        'Create a Score variable. When you click the mole while it is visible, add 1 to the score and hide it straight away.',
      blocks: [
        {
          id: 'wm-whack',
          syntax: `when this sprite clicked
if <not <hidden?>> then
  change [Score v] by (1)
  hide
end`,
        },
      ],
      tasks: [
        { id: 'wm-6', text: 'Create a Score variable' },
        { id: 'wm-7', text: 'Add the click blocks to the mole' },
        { id: 'wm-8', text: 'Whack 10 moles and check your score' },
      ],
    },
    {
      id: 'timer',
      label: 'Timer',
      title: 'Add a countdown timer',
      explanation:
        'Give the player 30 seconds. When the timer reaches 0, stop the game and show the final score.',
      blocks: [
        {
          id: 'wm-timer',
          syntax: `when green flag clicked
set [Time Left v] to [30]
forever
  wait (1) secs
  change [Time Left v] by (-1)
  if <(Time Left) = [0]> then
    stop [all v]
  end
end`,
        },
      ],
      tasks: [
        { id: 'wm-9', text: 'Create a Time Left variable' },
        { id: 'wm-10', text: 'Add the countdown blocks' },
        { id: 'wm-11', text: 'Play a full 30-second round' },
      ],
    },
  ],
}
