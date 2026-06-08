import { useEffect, useRef, useState } from 'react'
import scratchblocks from 'scratchblocks'

interface BlockCodeProps {
  syntax: string
  inline?: boolean
  blockId?: string
  scale?: number
}

export function BlockCode({ syntax, inline = false, blockId, scale }: BlockCodeProps) {
  const ref = useRef<HTMLElement>(null)
  const [glowing, setGlowing] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const options = {
      style: 'scratch3',
      scale: scale ?? (inline ? 0.85 : 1.5),
      inline,
      languages: ['en'] as string[],
    }

    const doc = scratchblocks.parse(syntax, options)
    const svg = scratchblocks.render(doc, options)
    scratchblocks.replace(el, svg, doc, options)
  }, [syntax, inline, scale])

  const handleClick = () => {
    setGlowing(true)
    setTimeout(() => setGlowing(false), 1000)
  }

  if (inline) {
    return (
      <code
        ref={ref as React.RefObject<HTMLElement>}
        className={`b block-inline ${glowing ? 'block-glow' : ''}`}
        onClick={handleClick}
        data-block-id={blockId}
      >
        {syntax}
      </code>
    )
  }

  return (
    <div className={`scratchblocks-wrapper ${glowing ? 'block-glow' : ''}`} onClick={handleClick}>
      <pre ref={ref as React.RefObject<HTMLPreElement>} className="blocks">
        {syntax}
      </pre>
    </div>
  )
}
