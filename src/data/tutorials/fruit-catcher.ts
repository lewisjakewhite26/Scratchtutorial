import type { Tutorial } from '../../types'

export const fruitCatcher: Tutorial = {
  slug: 'fruit-catcher',
  name: 'Fruit Catcher',
  difficulty: 1,
  estimatedTime: '1–2 hrs',
  description: 'Move a bowl to catch falling fruit. Learn movement and scoring.',
  steps: [
    {
      id: 'open-scratch',
      label: 'Open Scratch',
      title: 'Open Scratch and start a new project',
      estimatedMinutes: 8,
      explanation:
        'Go to scratch.mit.edu and sign in if you have an account. Click Create to start a blank project.\n\nYou will see the stage in the middle, blocks on the left, and the sprite list at the bottom left. Keep Scratch open in one tab and this tutorial in another.',
      blocks: [],
      tasks: [
        { id: 'cg-1', text: 'Open scratch.mit.edu in a new tab' },
        { id: 'cg-2', text: 'Click Create to start a new project' },
        { id: 'cg-3', text: 'Find the stage, block palette, and sprite list' },
      ],
      youShouldSee:
        'a blank Scratch project with the cat sprite on the stage and coloured blocks on the left.',
    },
    {
      id: 'sprites',
      label: 'Sprites',
      title: 'Add your bowl and apple sprites',
      estimatedMinutes: 10,
      explanation:
        'Delete the cat sprite (right-click it in the sprite list and choose delete). Click Choose a Sprite and pick a bowl, or draw a simple bowl shape.\n\nAdd a second sprite for the apple. Rename the bowl sprite to "Bowl" and the apple to "Apple". Click the Bowl sprite and drag it to the bottom of the stage.',
      blocks: [],
      tasks: [
        { id: 'cg-4', text: 'Delete the cat sprite' },
        { id: 'cg-5', text: 'Add a bowl sprite and an apple sprite' },
        { id: 'cg-6', text: 'Rename them Bowl and Apple' },
        { id: 'cg-7', text: 'Move the bowl to the bottom of the stage' },
      ],
      youShouldSee:
        'your bowl sitting at the bottom of the stage and your apple somewhere above it.',
    },
    {
      id: 'movement',
      label: 'Movement',
      title: 'Move the bowl with the arrow keys',
      estimatedMinutes: 12,
      explanation:
        'Click the Bowl sprite so you are coding the right one. Drag these blocks from the block palette and snap them together. The bowl should move left when you press the left arrow key and right when you press the right arrow key.',
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
        { id: 'cg-8', text: 'Click the Bowl sprite in the sprite list' },
        { id: 'cg-9', text: 'Add the movement blocks to the Bowl sprite' },
        { id: 'cg-10', text: 'Click the green flag and test the arrow keys' },
      ],
      youShouldSee:
        'your bowl move left and right when you press the arrow keys.',
    },
    {
      id: 'fall-start',
      label: 'Fall',
      title: 'Make the apple start at the top',
      estimatedMinutes: 10,
      explanation:
        'Click the Apple sprite. When you click the green flag, the apple needs to appear at a random spot along the top of the stage. Use a "go to" block with a random x value and y set to 180.',
      blocks: [
        {
          id: 'cg-fall-start',
          syntax: `when green flag clicked
go to x: (pick random (-200) to (200)) y: (180)`,
        },
      ],
      tasks: [
        { id: 'cg-11', text: 'Click the Apple sprite' },
        { id: 'cg-12', text: 'Add the go to block with a random x position' },
        { id: 'cg-13', text: 'Click the green flag and check the apple appears at the top' },
      ],
      youShouldSee:
        'the apple jump to a random position at the top of the stage when you click the green flag.',
    },
    {
      id: 'falling',
      label: 'Drop',
      title: 'Make the apple fall down',
      estimatedMinutes: 12,
      explanation:
        'Add a forever loop to the Apple sprite. Inside the loop, use "change y by" to move the apple downwards. When it touches the bottom edge, send it back to the top at a new random x position.',
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
        { id: 'cg-14', text: 'Add the forever loop with change y by (-5)' },
        { id: 'cg-15', text: 'Add the edge check to reset the apple at the top' },
        { id: 'cg-16', text: 'Watch the apple fall and reappear at the top' },
      ],
      youShouldSee:
        'the apple fall down the screen and pop back to the top when it reaches the bottom.',
    },
    {
      id: 'score-var',
      label: 'Score',
      title: 'Create a score variable',
      estimatedMinutes: 8,
      explanation:
        'Go to the Variables category and click Make a Variable. Name it "Score" and tick "For all sprites". Add a block to set Score to 0 when the green flag is clicked, so each run starts from zero.',
      blocks: [
        {
          id: 'cg-score-init',
          syntax: `when green flag clicked
set [Score v] to [0]`,
        },
      ],
      tasks: [
        { id: 'cg-17', text: 'Create a variable called Score (for all sprites)' },
        { id: 'cg-18', text: 'Add set Score to 0 when green flag clicked' },
        { id: 'cg-19', text: 'Check the score display shows 0 at the start' },
      ],
      youShouldSee:
        'a Score box on the stage showing 0 when you click the green flag.',
    },
    {
      id: 'scoring',
      label: 'Catch',
      title: 'Score when the bowl catches the apple',
      estimatedMinutes: 15,
      explanation:
        'Inside the Apple sprite\'s forever loop, add an if block: when the apple is touching the Bowl, add 1 to Score and move the apple back to the top. Move the bowl under a falling apple to catch it.',
      blocks: [
        {
          id: 'cg-score',
          syntax: `// Inside the Apple sprite's forever loop:
if <touching [Bowl v]?> then
  change [Score v] by (1)
  go to x: (pick random (-200) to (200)) y: (180)
end`,
        },
      ],
      tasks: [
        { id: 'cg-20', text: 'Add the touching Bowl check inside the Apple loop' },
        { id: 'cg-21', text: 'Add change Score by 1 when caught' },
        { id: 'cg-22', text: 'Catch 5 apples and check your score goes up' },
      ],
      youShouldSee:
        'the score go up by 1 each time your bowl catches an apple, and the apple reappear at the top.',
    },
  ],
}
