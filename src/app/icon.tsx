import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f0f11',
          border: '1.5px solid rgba(16, 185, 129, 0.55)',
          borderRadius: 16,
          fontFamily: 'monospace',
          fontSize: 11,
          fontWeight: 700,
          color: '#10b981',
          letterSpacing: '-0.5px',
        }}
      >
        HA
      </div>
    ),
    { ...size }
  )
}
