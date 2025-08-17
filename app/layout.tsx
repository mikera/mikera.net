import type { Metadata } from 'next'
import './globals.css'

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
        <header className="menubar">
          <nav>
            <div>
              <div>
                <a href="/">Mike Anderson</a>
              </div>
              <div>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 