import type { Tutorial } from '../../types'

export const cookieClicker: Tutorial = {
  slug: 'cookie-clicker',
  name: 'Cookie Clicker',
  difficulty: 3,
  estimatedTime: '4–5 hrs',
  description: 'Click to earn cookies, buy upgrades. Learn variables and idle logic.',
  steps: [
    {
      id: 'setup',
      label: 'Setup',
      title: 'Create your cookie',
      explanation:
        'Add a large cookie sprite in the centre of the stage. Create a variable called Cookies starting at 0. This tracks how many cookies you have earned.',
      blocks: [],
      tasks: [
        { id: 'cc-1', text: 'Add a cookie sprite' },
        { id: 'cc-2', text: 'Create a Cookies variable' },
      ],
    },
    {
      id: 'clicking',
      label: 'Clicking',
      title: 'Earn cookies by clicking',
      explanation:
        'Each time you click the cookie, add 1 to your Cookies variable. Show the total on the stage.',
      blocks: [
        {
          id: 'cc-click',
          syntax: `when this sprite clicked
change [Cookies v] by (1)`,
        },
      ],
      tasks: [
        { id: 'cc-3', text: 'Add click blocks to the cookie' },
        { id: 'cc-4', text: 'Click 10 times and check the counter' },
      ],
    },
    {
      id: 'upgrades',
      label: 'Upgrades',
      title: 'Buy a cursor upgrade',
      explanation:
        'Create a button sprite labelled "Buy Cursor (15 cookies)". When clicked, if you have enough cookies, subtract 15 and increase your cookies per click.',
      blocks: [
        {
          id: 'cc-upgrade',
          syntax: `when this sprite clicked
if <(Cookies) > [14]> then
  change [Cookies v] by (-15)
  change [Cookies Per Click v] by (1)
end`,
        },
      ],
      tasks: [
        { id: 'cc-5', text: 'Create a Cookies Per Click variable' },
        { id: 'cc-6', text: 'Add a buy button sprite' },
        { id: 'cc-7', text: 'Update clicking to use Cookies Per Click' },
      ],
    },
    {
      id: 'idle',
      label: 'Idle',
      title: 'Earn cookies automatically',
      explanation:
        'Create a Grandma upgrade that earns cookies every second even without clicking. Use a forever loop with a wait block.',
      blocks: [
        {
          id: 'cc-idle',
          syntax: `when green flag clicked
forever
  wait (1) secs
  change [Cookies v] by (Cookies Per Second)
end`,
        },
      ],
      tasks: [
        { id: 'cc-8', text: 'Create a Cookies Per Second variable' },
        { id: 'cc-9', text: 'Add a Grandma upgrade button' },
        { id: 'cc-10', text: 'Buy upgrades and watch cookies grow on their own' },
      ],
    },
  ],
}
