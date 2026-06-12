<script>
  let { size = 42, title = "The Web Guy logo", idPrefix = "web-guy-logo", animated = false } = $props();
</script>

<svg
  class="logo-mark"
  class:animated
  width={size}
  height={size}
  viewBox="0 0 48 48"
  role="img"
  aria-label={title}
  focusable="false"
>
  <title>{title}</title>
  <defs>
    <linearGradient id={`${idPrefix}-bg`} x1="8" y1="6" x2="42" y2="44" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0b111a" />
      <stop offset="0.52" stop-color="#101722" />
      <stop offset="1" stop-color="#12332a" />
    </linearGradient>
    <linearGradient id={`${idPrefix}-accent`} x1="10" y1="36" x2="40" y2="13" gradientUnits="userSpaceOnUse">
      <stop stop-color="#30c795" />
      <stop offset="1" stop-color="#4f7cff" />
    </linearGradient>
    <linearGradient id={`${idPrefix}-screen`} x1="22" y1="14" x2="40" y2="29" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff" stop-opacity="0.10" />
      <stop offset="1" stop-color="#30c795" stop-opacity="0.08" />
    </linearGradient>
    <filter id={`${idPrefix}-glow`} x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1.4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="48" height="48" rx="10" fill={`url(#${idPrefix}-bg)`} />

  <rect
    x="20.8"
    y="12.6"
    width="20.2"
    height="16.4"
    rx="3.2"
    fill={`url(#${idPrefix}-screen)`}
    stroke="rgba(48,199,149,0.42)"
    stroke-width="1.35"
  />
  <path d="M28.4 29.4v3.1M25.2 33.1h11.2" stroke="rgba(255,255,255,0.34)" stroke-width="1.55" stroke-linecap="round" />
  <path d="M24.1 16.2h13.6" stroke="rgba(255,255,255,0.16)" stroke-width="1.2" stroke-linecap="round" />

  <g class="logo-gear" filter={`url(#${idPrefix}-glow)`}>
    <circle cx="31" cy="21.1" r="4.05" fill="rgba(48,199,149,0.14)" stroke="url(#${idPrefix}-accent)" stroke-width="1.45" />
    <path
      d="M31 15.4v1.8M31 25v1.8M25.3 21.1h1.8M34.9 21.1h1.8M26.9 17l1.25 1.25M33.85 23.95l1.25 1.25M35.1 17l-1.25 1.25M28.15 23.95 26.9 25.2"
      stroke="#30c795"
      stroke-width="1.35"
      stroke-linecap="round"
    />
    <circle cx="31" cy="21.1" r="1.35" fill="#fffdfa" />
  </g>

  <path
    class="logo-person-body"
    d="M7.8 36.8c0.65-3.75 2.05-6.55 4.15-8.28 1.35-1.12 2.98-1.68 4.83-1.68 3.55 0 6.15 1.82 7.82 5.38l-3.32 2.22c-1.08-2.2-2.58-3.28-4.52-3.28-2.55 0-4.3 1.92-5.02 5.64H7.8Z"
    fill="rgba(48,199,149,0.38)"
  />
  <g class="logo-person-head">
    <path d="M15.45 15.2c2.9 0 5.18 2.28 5.18 5.22 0 2.92-2.28 5.22-5.18 5.22-2.92 0-5.2-2.3-5.2-5.22 0-2.94 2.28-5.22 5.2-5.22Z" fill="#30c795" />
    <path
      d="M11.15 19.1c0.44-2.18 2.16-3.72 4.34-3.72 1.86 0 3.34 0.98 4.12 2.36-1.36-0.36-2.48-0.26-3.42 0.22-0.92 0.46-1.56 1.16-1.9 2.08-0.78-0.42-1.8-0.74-3.14-0.94Z"
      fill="#0b111a"
      opacity="0.28"
    />
    <path d="M15.72 25.25v2.4" stroke="#30c795" stroke-width="2.15" stroke-linecap="round" />
    <circle cx="17.45" cy="20.75" r="0.68" fill="#0b111a" opacity="0.64" />
  </g>
</svg>
