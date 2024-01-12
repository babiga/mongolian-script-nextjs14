import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mogulic Labs | Mongolian Script - Монгол бичиг',
  description: 'Mogulic Labs | Mongolian Script - Монгол бичиг',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  )
}
