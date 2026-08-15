import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beacon — Know why listeners stay',
  description: 'Podcast analytics for teams who want more than downloads.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}


