import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ScratchLogo } from './ScratchLogo'

interface NavbarProps {
  variant?: 'transparent' | 'solid'
}

export function Navbar({ variant = 'solid' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (variant !== 'transparent') return
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [variant])

  const isSolid = variant === 'solid' || scrolled

  return (
    <nav className={`navbar ${isSolid ? 'navbar--solid' : 'navbar--transparent'}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <ScratchLogo size={36} />
          <span className="show-sm">Mr White&apos;s Scratch Tutorials</span>
          <span className="hide-sm">Scratch Tutorials</span>
        </Link>
        <div className="navbar__links">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/catalogue" className="btn btn-primary btn-sm no-underline">
            Browse Tutorials
          </Link>
        </div>
      </div>
    </nav>
  )
}
