import type { ReactNode } from 'react'

interface TutorialIconProps {
  slug: string
  size?: 'sm' | 'md' | 'lg'
}

const GRADIENTS: Record<string, string> = {
  'fruit-catcher': 'linear-gradient(135deg, #f97316, #fb7185)',
  'flappy-bird': 'linear-gradient(135deg, #38bdf8, #818cf8)',
  'whack-a-mole': 'linear-gradient(135deg, #fbbf24, #d97706)',
  'maze-navigator': 'linear-gradient(135deg, #8b5cf6, #6366f1)',
  pong: 'linear-gradient(135deg, #34d399, #14b8a6)',
  snake: 'linear-gradient(135deg, #22c55e, #84cc16)',
  'brick-breaker': 'linear-gradient(135deg, #f87171, #fb923c)',
  frogger: 'linear-gradient(135deg, #4ade80, #22d3ee)',
  'cookie-clicker': 'linear-gradient(135deg, #fcd34d, #f59e0b)',
  'tower-defence': 'linear-gradient(135deg, #64748b, #8b5cf6)',
  'geometry-dash': 'linear-gradient(135deg, #f472b6, #c084fc)',
}

const ICONS: Record<string, ReactNode> = {
  'fruit-catcher': (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <ellipse cx="24" cy="36" rx="14" ry="5" fill="white" fillOpacity="0.9" />
      <circle cx="24" cy="18" r="10" fill="white" fillOpacity="0.95" />
      <path d="M18 14c2-4 10-4 12 0" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  'flappy-bird': (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <circle cx="22" cy="24" r="11" fill="white" fillOpacity="0.95" />
      <circle cx="26" cy="22" r="2.5" fill="currentColor" className="text-slate-800" />
      <path d="M30 20l8-4-6 8" fill="white" fillOpacity="0.9" />
      <path d="M14 28c4 3 10 3 14 0" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  'whack-a-mole': (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <ellipse cx="24" cy="38" rx="16" ry="6" fill="rgba(0,0,0,0.15)" />
      <circle cx="24" cy="22" r="10" fill="white" fillOpacity="0.95" />
      <circle cx="20" cy="20" r="2" fill="currentColor" className="text-slate-700" />
      <circle cx="28" cy="20" r="2" fill="currentColor" className="text-slate-700" />
      <ellipse cx="24" cy="26" rx="4" ry="2.5" fill="currentColor" className="text-slate-600" />
    </svg>
  ),
  'maze-navigator': (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="white" strokeWidth="2.5" fill="none" strokeOpacity="0.6" />
      <path d="M16 8v12h8M24 20v8h8M16 28h8v12" stroke="white" strokeWidth="2.5" strokeOpacity="0.8" />
      <circle cx="34" cy="34" r="5" fill="white" fillOpacity="0.95" />
    </svg>
  ),
  pong: (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <rect x="6" y="14" width="4" height="20" rx="2" fill="white" fillOpacity="0.9" />
      <rect x="38" y="14" width="4" height="20" rx="2" fill="white" fillOpacity="0.9" />
      <circle cx="24" cy="24" r="6" fill="white" fillOpacity="0.95" />
    </svg>
  ),
  snake: (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <rect x="10" y="22" width="8" height="8" rx="2" fill="white" fillOpacity="0.85" />
      <rect x="18" y="22" width="8" height="8" rx="2" fill="white" fillOpacity="0.9" />
      <rect x="26" y="18" width="8" height="8" rx="2" fill="white" fillOpacity="0.95" />
      <circle cx="32" cy="16" r="2" fill="currentColor" className="text-slate-800" />
      <circle cx="14" cy="34" r="4" fill="#ef4444" fillOpacity="0.9" />
    </svg>
  ),
  'brick-breaker': (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <rect x="8" y="10" width="10" height="6" rx="1" fill="white" fillOpacity="0.85" />
      <rect x="20" y="10" width="10" height="6" rx="1" fill="white" fillOpacity="0.9" />
      <rect x="32" y="10" width="8" height="6" rx="1" fill="white" fillOpacity="0.8" />
      <rect x="14" y="18" width="10" height="6" rx="1" fill="white" fillOpacity="0.75" />
      <rect x="26" y="18" width="10" height="6" rx="1" fill="white" fillOpacity="0.8" />
      <circle cx="24" cy="36" r="5" fill="white" fillOpacity="0.95" />
    </svg>
  ),
  frogger: (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <rect x="4" y="20" width="40" height="6" rx="2" fill="rgba(0,0,0,0.12)" />
      <rect x="4" y="30" width="40" height="6" rx="2" fill="rgba(0,0,0,0.08)" />
      <ellipse cx="24" cy="16" rx="9" ry="8" fill="white" fillOpacity="0.95" />
      <circle cx="20" cy="14" r="2.5" fill="currentColor" className="text-slate-800" />
      <circle cx="28" cy="14" r="2.5" fill="currentColor" className="text-slate-800" />
    </svg>
  ),
  'cookie-clicker': (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <circle cx="24" cy="24" r="14" fill="white" fillOpacity="0.95" />
      <circle cx="18" cy="20" r="2.5" fill="#92400e" />
      <circle cx="28" cy="18" r="2" fill="#92400e" />
      <circle cx="26" cy="28" r="2.5" fill="#92400e" />
      <circle cx="17" cy="30" r="2" fill="#92400e" />
      <circle cx="30" cy="24" r="1.5" fill="#92400e" />
    </svg>
  ),
  'tower-defence': (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <rect x="18" y="20" width="12" height="18" rx="2" fill="white" fillOpacity="0.9" />
      <path d="M14 20h20l-4-8H18l-4 8z" fill="white" fillOpacity="0.85" />
      <circle cx="24" cy="28" r="3" fill="currentColor" className="text-slate-600" />
      <circle cx="36" cy="34" r="4" fill="#ef4444" fillOpacity="0.8" />
    </svg>
  ),
  'geometry-dash': (
    <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
      <rect x="12" y="12" width="16" height="16" rx="3" fill="white" fillOpacity="0.95" transform="rotate(15 20 20)" />
      <path d="M8 36l6-12 6 12 6-18 6 12 4-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.7" />
    </svg>
  ),
}

const SIZES = { sm: 48, md: 64, lg: 80 }

export function TutorialIcon({ slug, size = 'md' }: TutorialIconProps) {
  const px = SIZES[size]
  const gradient = GRADIENTS[slug] ?? GRADIENTS['maze-navigator']

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-2xl shadow-lg"
      style={{
        width: px,
        height: px,
        background: gradient,
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      }}
    >
      <div style={{ width: px * 0.55, height: px * 0.55 }}>
        {ICONS[slug]}
      </div>
    </div>
  )
}

export function getTutorialIconGradient(slug: string): string {
  return GRADIENTS[slug] ?? GRADIENTS['maze-navigator']
}
