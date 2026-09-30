type SymbolKind = 'outward' | 'right' | 'up' | 'swap' | 'diamond' | 'check'

export function RamenSymbol({ kind }: { kind: SymbolKind }) {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
      {kind === 'outward' && <path d="M6 18 18 6M6 6h12v12" />}
      {kind === 'right' && <path d="M4 12h16m-6-6 6 6-6 6" />}
      {kind === 'up' && <path d="M12 20V4m-6 6 6-6 6 6" />}
      {kind === 'swap' && <path d="M4 8h16m-4-4 4 4-4 4M20 16H4m4-4-4 4 4 4" />}
      {kind === 'diamond' && <path d="m12 3 9 9-9 9-9-9 9-9Z" />}
      {kind === 'check' && <path d="m5 12 4 4L19 6" />}
    </svg>
  )
}
