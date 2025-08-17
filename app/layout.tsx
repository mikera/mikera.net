import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'Mike Anderson - mikera.net',
  description: 'Mike Anderson\'s personal homepage',
  icons: {
    icon: '/mikera.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/mikera.ico" />
      </head>
      <body>
        <header>
          <div className="mike">
            <a href="/">Mike Anderson</a>
          </div>
          <nav>
            <Navigation />
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 