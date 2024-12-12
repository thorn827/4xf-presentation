import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '4XF Presentation',
  description: 'Strengthen your people. Strengthen your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black min-h-screen text-white">
        {children}
      </body>
    </html>
  )
}