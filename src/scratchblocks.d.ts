declare module 'scratchblocks' {
  interface ScratchblocksOptions {
    style?: string
    scale?: number
    inline?: boolean
    languages?: string[]
  }

  interface ScratchblocksDoc {
    scripts: unknown[]
  }

  interface ScratchblocksAPI {
    parse: (code: string, options?: ScratchblocksOptions) => ScratchblocksDoc
    render: (doc: ScratchblocksDoc, options?: ScratchblocksOptions) => SVGElement
    replace: (
      el: HTMLElement,
      svg: SVGElement,
      doc: ScratchblocksDoc,
      options?: ScratchblocksOptions,
    ) => void
    renderMatching: (selector: string, options?: ScratchblocksOptions) => void
    appendStyles: () => void
  }

  const scratchblocks: ScratchblocksAPI
  export default scratchblocks
}
