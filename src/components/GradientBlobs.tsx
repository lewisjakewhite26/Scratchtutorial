export function GradientBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="blob blob-1 blob--tl" style={{ background: 'var(--blob-1)' }} />
      <div className="blob blob-2 blob--tr" style={{ background: 'var(--blob-2)' }} />
      <div className="blob blob-3 blob--bc" style={{ background: 'var(--blob-3)' }} />
    </div>
  )
}
