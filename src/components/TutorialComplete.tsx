import { Link } from 'react-router-dom'

interface TutorialCompleteProps {
  tutorialName: string
}

export function TutorialComplete({ tutorialName }: TutorialCompleteProps) {
  return (
    <div className="tutorial-complete glass-card" role="status" aria-live="polite">
      <p className="tutorial-complete__emoji" aria-hidden="true">
        🏆
      </p>
      <h2 className="tutorial-complete__title font-display">Congratulations!</h2>
      <p className="tutorial-complete__text">
        You have finished the <strong>{tutorialName}</strong> tutorial. Brilliant work — open Scratch and try your project!
      </p>
      <Link to="/catalogue" className="btn btn-primary">
        Back to Tutorials
      </Link>
    </div>
  )
}
