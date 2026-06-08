import type { Tutorial } from '../../types'

export const towerDefence: Tutorial = {
  slug: 'tower-defence',
  name: 'Tower Defence',
  difficulty: 3,
  estimatedTime: '5–6 hrs',
  description: 'Place turrets to stop enemies reaching the end. Learn lists and clones.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Draw the path and base',
      explanation:
        'Create a backdrop with a winding path from left to right. Mark the start (where enemies spawn) and the base (where you lose if enemies arrive).',
      blocks: [],
      tasks: [
        { id: 'td-1', text: 'Draw a path on your backdrop' },
        { id: 'td-2', text: 'Mark the enemy spawn point and your base' },
      ],
    },
    {
      id: 'enemies',
      label: 'Enemies',
      title: 'Spawn enemy clones',
      explanation:
        'Create an enemy sprite. Use a list called Waypoints to store x and y positions along the path. Clones follow each waypoint in order.',
      blocks: [
        {
          id: 'td-enemy',
          syntax: `when green flag clicked
delete all of [Waypoints v]
add [-200] to [Waypoints v]
add [0] to [Waypoints v]
add [-100] to [Waypoints v]
add [50] to [Waypoints v]
// Add more waypoints for your path
forever
  wait (2) secs
  create clone of [myself v]
end`,
        },
      ],
      tasks: [
        { id: 'td-3', text: 'Create a Waypoints list' },
        { id: 'td-4', text: 'Add waypoints for your path' },
        { id: 'td-5', text: 'Make enemies spawn every 2 seconds' },
      ],
    },
    {
      id: 'movement',
      label: 'Movement',
      title: 'Move enemies along the path',
      explanation:
        'Each clone moves toward the next waypoint in the list. When it reaches one, move to the next. At the end, reduce your lives.',
      blocks: [
        {
          id: 'td-move',
          syntax: `when I start as a clone
set [step v] to [1]
forever
  go to x: (item (step) of [Waypoints v]) y: (item ((step) + (1)) of [Waypoints v])
  change [step v] by (2)
  if <(step) > (length of [Waypoints v])> then
    change [Lives v] by (-1)
    delete this clone
  end
  wait (0.5) secs
end`,
        },
      ],
      tasks: [
        { id: 'td-6', text: 'Add clone movement along waypoints' },
        { id: 'td-7', text: 'Create a Lives variable starting at 10' },
      ],
    },
    {
      id: 'turrets',
      label: 'Turrets',
      title: 'Place turrets to shoot enemies',
      explanation:
        'Click to place a turret sprite. Each turret checks for nearby enemies and shoots. When an enemy is hit enough times, delete the clone.',
      blocks: [
        {
          id: 'td-turret',
          syntax: `when this sprite clicked
go to [mouse pointer v]

when green flag clicked
forever
  if <(distance to [Enemy v]) < [80]> then
    point towards [Enemy v]
    create clone of [Bullet v]
  end
  wait (0.3) secs
end`,
        },
      ],
      tasks: [
        { id: 'td-8', text: 'Add a turret sprite you can click to place' },
        { id: 'td-9', text: 'Add shooting logic when enemies are nearby' },
        { id: 'td-10', text: 'Survive 3 waves of enemies' },
      ],
    },
  ],
  expertMode: {
    description:
      'Finished the basic version? Open this project in Scratch to explore a more advanced version with different tower types, upgrade paths and multiple enemy waves. Can you work out how it works?',
    scratchUrl: 'https://scratch.mit.edu/projects/explore/?q=tower+defence',
  },
}
