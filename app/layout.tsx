import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Avrae — Private Access',
  description: 'Private Access. Infinite Power.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
