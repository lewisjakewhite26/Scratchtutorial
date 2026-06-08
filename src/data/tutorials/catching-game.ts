import type { Tutorial } from '../../types'

export const catchingGame: Tutorial = {
  slug: 'catching-game',
  name: 'Catching Game',
  difficulty: 1,
  estimatedTime: '1–2 hrs',
  description: 'Move a bowl to catch falling fruit. Learn movement and scoring.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Set up your sprites',
      explanation:
        'Open Scratch and create a new project. Delete the cat sprite and add a bowl sprite for catching, plus an apple sprite for the fruit.\n\nRename the bowl sprite to "Bowl" and the apple to "Apple". Position the bowl at the bottom of the stage.',
      blocks: [],
      tasks: [
        { id: 'cg-1', text: 'Create a new Scratch project' },
        { id: 'cg-2', text: 'Add a bowl sprite and an apple sprite' },
        { id: 'cg-3', text: 'Move the bowl to the bottom of the stage' },
      ],
    },
    {
      id: 'movement',
      label: 'Movement',
      title: 'Move the bowl with arrow keys',
      explanation:
        'Add these blocks to the Bowl sprite so you can move left and right using the arrow keys.',
      blocks: [
        {
          id: 'cg-move',
          syntax: `when green flag clicked
forever
  if <key [left arrow v] pressed?> then
    change x by (-10)
  end
  if <key [right arrow v] pressed?> then
    change x by (10)
  end
end`,
        },
      ],
      tasks: [
        { id: 'cg-4', text: 'Add the movement blocks to the Bowl sprite' },
        { id: 'cg-5', text: 'Test that the bowl moves left and right' },
      ],
    },
    {
      id: 'falling',
      label: 'Falling',
      title: 'Make the apple fall',
      explanation:
        'When the green flag is clicked, the apple should start at a random position at the top and fall down. When it reaches the bottom, it goes back to the top.',
      blocks: [
        {
          id: 'cg-fall',
          syntax: `when green flag clicked
go to x: (pick random (-200) to (200)) y: (180)
forever
  change y by (-5)
  if <touching [edge v]?> then
    go to x: (pick random (-200) to (200)) y: (180)
  end
end`,
        },
      ],
      tasks: [
        { id: 'cg-6', text: 'Add the falling blocks to the Apple sprite' },
        { id: 'cg-7', text: 'Check the apple falls and resets at the top' },
      ],
    },
    {
      id: 'scoring',
      label: 'Scoring',
      title: 'Add a score',
      explanation:
        'Create a variable called "Score". When the bowl touches the apple, add 1 to the score and move the apple back to the top.',
      blocks: [
        {
          id: 'cg-score',
          syntax: `when green flag clicked
set [Score v] to [0]

when this sprite clicked
// Add this inside the Apple sprite's forever loop:
if <touching [Bowl v]?> then
  change [Score v] by (1)
  go to x: (pick random (-200) to (200)) y: (180)
end`,
        },
      ],
      tasks: [
        { id: 'cg-8', text: 'Create a Score variable' },
        { id: 'cg-9', text: 'Add the touching check inside the Apple sprite' },
        { id: 'cg-10', text: 'Catch 5 apples and check your score goes up' },
      ],
    },
  ],
}
