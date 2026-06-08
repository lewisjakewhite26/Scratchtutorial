export function ScratchLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
      <path
        d="M10 15h15v12.5a3.75 3.75 0 0 1-3.75 3.75H13.75A3.75 3.75 0 0 1 10 27.5V15z"
        fill="white"
      />
      <path d="M10 15h15v2.5H10V15z" fill="#f5e6d3" />
      <path
        d="M25 17.5h3.125a3.125 3.125 0 0 1 0 6.25H25v-6.25z"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 10c0-1.875 1-3.125 1.875-3.125M17.5 8.75c0-2.5 1.25-3.75 2.25-3.75M21.25 10c0-1.875 1-3.125 1.875-3.125"
        stroke="#f5e6d3"
        strokeWidth="1.875"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#f97316" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
      </defs>
    </svg>
  )
}
