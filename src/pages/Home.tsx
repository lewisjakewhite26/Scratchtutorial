import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { GradientBlobs } from '../components/GradientBlobs'
import { HeroIcons } from '../components/HeroIcons'

const STEPS = [
  {
    number: '01',
    title: 'Pick a game',
    description: 'Choose from 11 tutorials, from easy catchers to expert tower defence.',
    colour: 'var(--highlight-purple)',
  },
  {
    number: '02',
    title: 'Follow the steps',
    description: 'Every stage shows the exact Scratch blocks to add, with tasks to tick off.',
    colour: 'var(--highlight-blue)',
  },
  {
    number: '03',
    title: 'Build and play',
    description: 'Finish your game, test it with the green flag, and share it with friends.',
    colour: 'var(--highlight-pink)',
  },
]

export function Home() {
  return (
    <div className="page dot-grid">
      <GradientBlobs />
      <div className="page-inner">
        <Navbar variant="transparent" />

        <section className="hero-section">
          <div className="hero-grid">
            <div>
              <p className="section-label">Scratch tutorials for Y3–Y6</p>
              <h1 className="font-display hero-title font-extrabold tracking-tight">
                Learn to build
                <br />
                real games in{' '}
                <span className="highlight-pill highlight-pill--purple">Scratch</span>
              </h1>
              <p className="hero-subtitle">
                Step-by-step tutorials for Y3–Y6. Pick a game, follow the steps, build something brilliant.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/catalogue" className="btn btn-primary">
                  Browse Tutorials
                </Link>
                <a
                  href="https://scratch.mit.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  What is Scratch?
                </a>
              </div>
            </div>
            <HeroIcons />
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="container">
            <p className="section-label text-center">How it works</p>
            <h2 className="font-display mb-14 text-center text-3xl font-bold">
              Three steps to your first game
            </h2>
            <div className="steps-grid">
              {STEPS.map((step) => (
                <div key={step.title} className="glass-card glass-card-hover p-8">
                  <div
                    className="font-display mb-5 text-4xl font-extrabold"
                    style={{ color: step.colour, opacity: 0.35 }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-display mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-28">
          <div className="cta-band container--cta mx-auto px-6 py-14 text-center">
            <h2 className="font-display mb-3 text-3xl font-bold">Ready to start?</h2>
            <p className="mb-8 text-secondary">
              Pick a tutorial and build your first game today.
            </p>
            <Link to="/catalogue" className="btn btn-primary">
              Browse Tutorials
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
