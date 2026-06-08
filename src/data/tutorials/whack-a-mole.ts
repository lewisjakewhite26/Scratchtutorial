import type { Tutorial } from '../../types'

export const whackAMole: Tutorial = {
  slug: 'whack-a-mole',
  name: 'Whack-a-Mole',
  difficulty: 1,
  estimatedTime: '1–2 hrs',
  description: 'Hit moles before they disappear. Learn timers and random position.',
  steps: [
    {
      id: 'open-scratch',
      label: 'Open Scratch',
      title: 'Open Scratch and start a new project',
      estimatedMinutes: 8,
      explanation:
        'Go to scratch.mit.edu and click Create. You will build a project where moles pop up and you click them to score points.\n\nKeep Scratch open alongside this tutorial. Use the diagrams above to find the sprite list, blocks, and green flag.',
      blocks: [],
      tasks: [
        { id: 'wm-1', text: 'Open scratch.mit.edu and create a new project' },
        { id: 'wm-2', text: 'Find the sprite list, block palette, and green flag' },
      ],
      youShouldSee:
        'a blank Scratch project ready for your mole activity.',
    },
    {
      id: 'setup',
      label: 'Sprites',
      title: 'Create your mole and backdrop',
      estimatedMinutes: 12,
      explanation:
        'Delete the cat sprite. Add a mole sprite from the library, or draw a simple brown circle with eyes. Choose a green field backdrop or draw a brown circle as a hole.\n\nRename the mole sprite to "Mole". Position it in the middle of the stage for now.',
      blocks: [],
      tasks: [
        { id: 'wm-3', text: 'Delete the cat and add a mole sprite' },
        { id: 'wm-4', text: 'Choose or draw a backdrop' },
        { id: 'wm-5', text: 'Rename the sprite to Mole' },
      ],
      youShouldSee:
        'your mole sprite on the stage with a backdrop behind it.',
    },
    {
      id: 'hide',
      label: 'Hide',
      title: 'Hide the mole at the start',
      estimatedMinutes: 8,
      explanation:
        'The mole should stay hidden until it pops up. Add a "hide" block that runs when the green flag is clicked. This way the mole is underground when the project begins.',
      blocks: [
        {
          id: 'wm-hide',
          syntax: `when green flag clicked
hide`,
        },
      ],
      tasks: [
        { id: 'wm-6', text: 'Add hide when green flag clicked' },
        { id: 'wm-7', text: 'Click the green flag and check the mole disappears' },
      ],
      youShouldSee:
        'the mole vanish from the stage when you click the green flag.',
    },
    {
      id: 'pop-up',
      label: 'Pop up',
      title: 'Make the mole appear in random places',
      estimatedMinutes: 15,
      explanation:
        'Add a forever loop. Each time, wait a random number of seconds, jump to a random position on the stage, show the mole for a short time, then hide it again. This creates the pop-up effect.',
      blocks: [
        {
          id: 'wm-popup',
          syntax: `when green flag clicked
hide
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
        { id: 'wm-8', text: 'Add the forever loop with wait blocks' },
        { id: 'wm-9', text: 'Add go to with random x and y positions' },
        { id: 'wm-10', text: 'Watch the mole pop up in different places' },
      ],
      youShouldSee:
        'the mole appear briefly in different spots around the stage, then hide again.',
    },
    {
      id: 'score-var',
      label: 'Score',
      title: 'Create a score variable',
      estimatedMinutes: 8,
      explanation:
        'Go to Variables and click Make a Variable. Name it "Score" and tick "For all sprites". Set Score to 0 when the green flag is clicked so every run starts fresh.',
      blocks: [
        {
          id: 'wm-score-init',
          syntax: `when green flag clicked
set [Score v] to [0]`,
        },
      ],
      tasks: [
        { id: 'wm-11', text: 'Create a Score variable (for all sprites)' },
        { id: 'wm-12', text: 'Set Score to 0 when the green flag is clicked' },
      ],
      youShouldSee:
        'a Score display on the stage showing 0 at the start of each run.',
    },
    {
      id: 'whack',
      label: 'Whack',
      title: 'Score when you click the mole',
      estimatedMinutes: 12,
      explanation:
        'Add a "when this sprite clicked" block to the Mole sprite. Inside, check that the mole is not hidden. If it is visible, add 1 to Score and hide the mole straight away so you cannot click it twice.',
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
        { id: 'wm-13', text: 'Add when this sprite clicked to the Mole' },
        { id: 'wm-14', text: 'Add the hidden check and change Score by 1' },
        { id: 'wm-15', text: 'Whack 5 moles and check your score goes up' },
      ],
      youShouldSee:
        'the score increase by 1 each time you click a visible mole before it hides.',
    },
    {
      id: 'timer',
      label: 'Timer',
      title: 'Add a 30-second countdown',
      estimatedMinutes: 15,
      explanation:
        'Create a second variable called "Time Left". When you click the green flag, set it to 30. Use a forever loop to wait 1 second, then take 1 away from Time Left. When Time Left reaches 0, stop all scripts to end the round.',
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
        { id: 'wm-16', text: 'Create a Time Left variable' },
        { id: 'wm-17', text: 'Add the countdown blocks' },
        { id: 'wm-18', text: 'Run a full 30-second round and check the scripts stop' },
      ],
      youShouldSee:
        'Time Left count down from 30 to 0, then the scripts stop and show your final score.',
    },
  ],
}
