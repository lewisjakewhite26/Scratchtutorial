export function ScratchLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
      <path
        d="M12 28c0-8 4-14 8-14s8 6 8 14"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="16" cy="18" r="2" fill="white" />
      <circle cx="24" cy="18" r="2" fill="white" />
      <path d="M17 23c2 2 4 2 6 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#f97316" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
      </defs>
    </svg>
  )
}
