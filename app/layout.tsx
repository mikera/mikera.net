import type { Metadata } from 'next'

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
        <nav>
          <div>
            <a href="/">Mike Anderson</a>
            <div>
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 