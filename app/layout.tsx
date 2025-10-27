import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'mikera.net',
  description: 'Mike Anderson\'s personal homepage',
  keywords: ['hacker', 'developer', 'open-source', 'economics', 'crypto', 'blockchain', 'data', 'AI', 'freedom'],
  authors: [{ name: 'mikera', url: 'https://mikera.net' }], 
  icons: {
    icon: '/mikera-icon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mikera',
    description: 'Economics, crypto, AI and tech insights from mikera.',
    images: ['/mike-bw.jpg'],
  },
  openGraph: {
    title: 'mikera',
    description: 'Where code meets creativity. Explore my projects and hacks.',
    url: 'https://mikera.net', 
    siteName: 'mikera.net',
    images: [
      {
        url: '/mike-bw.jpg', 
        alt: 'mikera featured image',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true, 
    follow: true
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
        <link rel="icon" href="/mikera-icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <header>
          <div>
            <h1><Link href="/">mikera</Link></h1>
          </div>
          <nav>
            <Navigation />
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <div>
          </div>
          <div>
            <p>Follow: <a href="https://x.com/mikera" target="_blank" rel="noopener noreferrer">@mikera</a></p>
            <p>GitHub: <a href="https://github.com/mikera" target="_blank" rel="noopener noreferrer">mikera</a></p>
          </div>
        </footer>
      </body>
    </html>
  )
} 