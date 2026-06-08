interface PrintTutorialButtonProps {
  slug: string
  variant?: 'primary' | 'ghost'
}

export function PrintTutorialButton({ slug, variant = 'ghost' }: PrintTutorialButtonProps) {
  const printUrl = `/tutorial/${slug}/print`

  const handlePrint = () => {
    window.open(printUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      className={`btn btn-sm ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
      style={{ gap: '0.4rem' }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6 14h12v8H6v-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Print / Save PDF
    </button>
  )
}
