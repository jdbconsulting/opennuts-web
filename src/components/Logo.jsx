export function Logomark(props) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2L35.32 10.85V28.55L20 37.4L4.68 28.55V10.85L20 2ZM20 6.6L8.68 13.15V26.25L20 32.8L31.32 26.25V13.15L20 6.6ZM20 12a8 8 0 110 16 8 8 0 010-16Zm0 3a5 5 0 100 10 5 5 0 000-10Z"
      />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg viewBox="0 0 160 40" aria-hidden="true" {...props}>
      <Logomark width="40" height="40" className="fill-cyan-500" />
      <text
        x="48"
        y="27"
        className="fill-gray-900"
        style={{
          fontSize: '20px',
          fontWeight: 600,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
        }}
      >
        OpenNuts
      </text>
    </svg>
  )
}
