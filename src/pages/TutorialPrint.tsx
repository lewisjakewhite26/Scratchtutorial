import { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import scratchblocks from 'scratchblocks'
import { TutorialIcon } from '../components/TutorialIcon'
import { StepPrintSection } from '../components/StepPrintSection'
import { getDifficultyLabel } from '../data/catalogue'
import { getTutorialBySlug } from '../data/tutorials'

export function TutorialPrint() {
  const { slug } = useParams<{ slug: string }>()
  const [searchParams] = useSearchParams()
  const tutorial = slug ? getTutorialBySlug(slug) : undefined
  const autoPrint = searchParams.get('auto') === '1'

  useEffect(() => {
    if (!tutorial) return

    const renderBlocks = () => {
      scratchblocks.renderMatching('pre.blocks', {
        style: 'scratch3',
        scale: 1.15,
        languages: ['en'],
      })
    }

    const timer = window.setTimeout(renderBlocks, 400)

    if (autoPrint) {
      const printTimer = window.setTimeout(() => window.print(), 900)
      return () => {
        window.clearTimeout(timer)
        window.clearTimeout(printTimer)
      }
    }

    return () => window.clearTimeout(timer)
  }, [tutorial, autoPrint])

  if (!tutorial) {
    return (
      <div className="print-page">
        <p>Tutorial not found.</p>
        <Link to="/catalogue">Back to catalogue</Link>
      </div>
    )
  }

  const difficulty = getDifficultyLabel(tutorial.difficulty)
  const stars = '⭐'.repeat(tutorial.difficulty)

  return (
    <div className="print-page">
      <main id="main-content">
      <div className="print-toolbar no-print">
        <button type="button" className="btn btn-primary btn-sm" onClick={() => window.print()}>
          Print / Save PDF
        </button>
        <Link to={`/tutorial/${tutorial.slug}`} className="btn btn-ghost btn-sm">
          Back to tutorial
        </Link>
        <p className="print-toolbar__hint">
          Choose &quot;Save as PDF&quot; in the print dialog to download a copy.
        </p>
      </div>

      <article className="print-sheet">
        <header className="print-sheet__header">
          <div className="print-sheet__brand">
            <TutorialIcon slug={tutorial.slug} size="sm" />
            <div>
              <p className="print-sheet__site">Mr White&apos;s Scratch Tutorials</p>
              <h1 className="print-sheet__title font-display">{tutorial.name}</h1>
            </div>
          </div>
          <div className="print-sheet__meta">
            <span>{stars} {difficulty}</span>
            <span>🕐 {tutorial.estimatedTime}</span>
          </div>
          <p className="print-sheet__desc">{tutorial.description}</p>
        </header>

        {tutorial.steps.map((step, index) => (
          <StepPrintSection key={step.id} step={step} stepNumber={index + 1} />
        ))}

        {tutorial.extension && (
          <section className="print-extension">
            <h2 className="font-display">{tutorial.extension.title}</h2>
            {tutorial.extension.steps.map((step, index) => (
              <StepPrintSection
                key={step.id}
                step={step}
                stepNumber={tutorial.steps.length + index + 1}
              />
            ))}
          </section>
        )}

        {tutorial.expertMode && (
          <section className="print-expert">
            <h2 className="font-display">Expert Mode</h2>
            <p>{tutorial.expertMode.description}</p>
            <p className="print-expert__url">{tutorial.expertMode.scratchUrl}</p>
          </section>
        )}

        <footer className="print-sheet__footer">
          <p>mr-whites-scratch-tutorials · Open Scratch at scratch.mit.edu</p>
        </footer>
      </article>
      </main>
    </div>
  )
}
