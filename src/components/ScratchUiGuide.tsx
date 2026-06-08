const GUIDES = [
  {
    id: 'sprites',
    title: 'Sprite list',
    alt: 'Placeholder: the sprite list is at the bottom left of Scratch, below the stage. Swap this image for a real screenshot.',
    caption: 'Bottom left — click a sprite to code it',
  },
  {
    id: 'blocks',
    title: 'Block palette',
    alt: 'Placeholder: coloured blocks are on the left. Drag blocks from here into the coding area. Swap this image for a real screenshot.',
    caption: 'Left side — drag blocks from here',
  },
  {
    id: 'code',
    title: 'Coding area',
    alt: 'Placeholder: snap blocks together in the large space in the middle. Swap this image for a real screenshot.',
    caption: 'Middle — snap blocks together here',
  },
  {
    id: 'flag',
    title: 'Green flag',
    alt: 'Placeholder: the green flag above the stage runs your Scratch project. Swap this image for a real screenshot.',
    caption: 'Above the stage — click to start',
  },
]

export function ScratchUiGuide() {
  return (
    <div className="scratch-ui-guide">
      <h3 className="scratch-ui-guide__title font-display">Find your way around Scratch</h3>
      <p className="scratch-ui-guide__intro">
        These labelled diagrams show where things are. Your teacher can swap in real screenshots later.
      </p>
      <div className="scratch-ui-guide__grid">
        {GUIDES.map((guide) => (
          <figure key={guide.id} className="scratch-ui-guide__item">
            <div className="scratch-ui-guide__placeholder" role="img" aria-label={guide.alt}>
              <span className="scratch-ui-guide__placeholder-label">Screenshot placeholder</span>
              <span className="scratch-ui-guide__placeholder-title">{guide.title}</span>
            </div>
            <figcaption>{guide.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
