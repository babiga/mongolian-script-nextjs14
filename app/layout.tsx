import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mogulic Labs | Mongolian Script - Монгол бичиг',
  description: 'Mogulic Labs | Mongolian Script - Монгол бичиг',
  openGraph: {
    title: 'Mogulic Labs | Mongolian Script - Монгол бичиг',
    description: 'Mogulic Labs | Mongolian Script - Монгол бичиг'
  },

}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
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
