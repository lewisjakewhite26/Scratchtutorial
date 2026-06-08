interface StepCompleteToastProps {
  visible: boolean
}

export function StepCompleteToast({ visible }: StepCompleteToastProps) {
  return (
    <div className={`step-toast ${visible ? 'step-toast--visible' : ''}`} role="status" aria-live="polite">
      Step complete! 🎉
    </div>
  )
}
