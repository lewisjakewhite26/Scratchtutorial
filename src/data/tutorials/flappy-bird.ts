import type { Tutorial } from '../../types'

export const flappyBird: Tutorial = {
  slug: 'flappy-bird',
  name: 'Flappy Bird',
  difficulty: 1,
  estimatedTime: '2–3 hrs',
  description: 'Tap to fly through gaps. Learn gravity and collision.',
  steps: [
    {
      id: 'open-scratch',
      label: 'Open Scratch',
      title: 'Open Scratch and start a new project',
      estimatedMinutes: 8,
      explanation:
        'Go to scratch.mit.edu and click Create. You will build a flapping bird project with pipes to fly through.\n\nUse the labelled diagrams above to find the sprite list, block palette, coding area, and green flag.',
      blocks: [],
      tasks: [
        { id: 'fb-1', text: 'Open scratch.mit.edu and create a new project' },
        { id: 'fb-2', text: 'Find the sprite list, blocks, and green flag' },
      ],
      youShouldSee:
        'a blank Scratch project with the cat sprite on the stage.',
    },
    {
      id: 'sprites',
      label: 'Sprites',
      title: 'Add your bird and pipe sprites',
      estimatedMinutes: 12,
      explanation:
        'Keep the cat or replace it with a bird sprite from the library. Add two pipe sprites: one for the top pipe and one for the bottom pipe. You can draw simple green rectangles or search "pipe" in Choose a Sprite.\n\nRename them Bird, Pipe Top, and Pipe Bottom. Place the bird in the centre of the stage.',
      blocks: [],
      tasks: [
        { id: 'fb-3', text: 'Add a bird sprite' },
        { id: 'fb-4', text: 'Add top and bottom pipe sprites' },
        { id: 'fb-5', text: 'Position the bird in the centre of the stage' },
      ],
      youShouldSee:
        'a bird in the middle of the stage with pipe sprites ready to position.',
    },
    {
      id: 'velocity',
      label: 'Variable',
      title: 'Create a velocity variable',
      estimatedMinutes: 8,
      explanation:
        'The bird needs a variable to track how fast it is moving up or down. Go to Variables, click Make a Variable, and name it "velocity". Keep it for this sprite only (the bird).',
      blocks: [],
      tasks: [
        { id: 'fb-6', text: 'Click the bird sprite' },
        { id: 'fb-7', text: 'Create a variable called velocity (for this sprite only)' },
      ],
      youShouldSee:
        'a velocity variable in the Variables category for your bird sprite.',
    },
    {
      id: 'gravity',
      label: 'Gravity',
      title: 'Add gravity and flapping',
      estimatedMinutes: 15,
      explanation:
        'When you click the green flag, set velocity to 0. In a forever loop, reduce velocity by 1 each frame (gravity pulling down) and change the bird\'s y position by velocity. When you press the space bar, set velocity to 8 to flap upwards.',
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
        { id: 'fb-8', text: 'Add set velocity to 0 when green flag clicked' },
        { id: 'fb-9', text: 'Add the forever loop with gravity and flap blocks' },
        { id: 'fb-10', text: 'Press space to flap and watch the bird fall between flaps' },
      ],
      youShouldSee:
        'the bird fall slowly, then jump up when you press the space bar.',
    },
    {
      id: 'pipes-setup',
      label: 'Pipes',
      title: 'Position the pipes with a gap',
      estimatedMinutes: 12,
      explanation:
        'Drag the top pipe to the right side of the stage, high up. Drag the bottom pipe to the right side, low down. Leave a gap in the middle wide enough for the bird to fly through. Both pipes should line up vertically.',
      blocks: [],
      tasks: [
        { id: 'fb-11', text: 'Move Pipe Top to the right side, near the top' },
        { id: 'fb-12', text: 'Move Pipe Bottom to the right side, near the bottom' },
        { id: 'fb-13', text: 'Check there is a clear gap between the pipes' },
      ],
      youShouldSee:
        'two pipes on the right side of the stage with a gap the bird could fly through.',
    },
    {
      id: 'pipe-move',
      label: 'Move',
      title: 'Slide the pipes across the screen',
      estimatedMinutes: 12,
      explanation:
        'Add the same movement script to both pipe sprites. They slide left across the stage. When a pipe goes past the left edge, it jumps back to the right side so the gap keeps coming.',
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
        { id: 'fb-14', text: 'Add pipe movement to Pipe Top' },
        { id: 'fb-15', text: 'Add the same blocks to Pipe Bottom' },
        { id: 'fb-16', text: 'Click the green flag and watch the pipes slide left' },
      ],
      youShouldSee:
        'the pipes move from right to left across the stage in a steady loop.',
    },
    {
      id: 'collision',
      label: 'Crash',
      title: 'Stop the scripts when the bird hits something',
      estimatedMinutes: 12,
      explanation:
        'Add a forever loop to the bird that checks if it is touching either pipe or the edge of the stage. If it is, use "stop all" to end the round. Test by letting the bird fall into a pipe or the ground.',
      blocks: [
        {
          id: 'fb-crash',
          syntax: `when green flag clicked
forever
  if <touching [Pipe Top v] ?> or <touching [Pipe Bottom v] ?> or <touching [edge v]?> then
    stop [all v]
  end
end`,
        },
      ],
      tasks: [
        { id: 'fb-17', text: 'Add touching checks for both pipes and the edge' },
        { id: 'fb-18', text: 'Add stop all inside the if block' },
        { id: 'fb-19', text: 'Crash on purpose and check the scripts stop' },
      ],
      youShouldSee:
        'everything freeze when the bird touches a pipe or the ground.',
    },
    {
      id: 'scoring',
      label: 'Score',
      title: 'Add a score when you pass through',
      estimatedMinutes: 15,
      explanation:
        'Create a Score variable for all sprites. Each time the bird passes a pipe (when the pipe\'s x position goes below -200), add 1 to Score. You can add this check inside the pipe sprite\'s forever loop.',
      blocks: [
        {
          id: 'fb-score',
          syntax: `when green flag clicked
set [Score v] to [0]

// Inside each pipe sprite's forever loop, after change x:
if <(x position) < [-200]> then
  change [Score v] by (1)
  go to x: (240) y: (y position)
end`,
        },
      ],
      tasks: [
        { id: 'fb-20', text: 'Create a Score variable and set it to 0 at the start' },
        { id: 'fb-21', text: 'Add the score check inside the pipe loops' },
        { id: 'fb-22', text: 'Fly through 3 gaps and check your score reaches 3' },
      ],
      youShouldSee:
        'your score go up each time you flap through a gap without crashing.',
    },
  ],
}
