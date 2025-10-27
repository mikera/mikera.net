'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { topics } from '../topics'

export default function Topics() {
  const pathname = usePathname()
  const currentSlug = pathname.split('/').pop() || ''

  return (
    <aside style={{ minWidth: '200px' }}>
      <h2><Link href="/manifesto">Manifesto</Link></h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {topics.map(topic => (
            <li key={topic.slug}>
              <Link 
                href={`/manifesto/${topic.slug}`}
                style={{
                  display: 'block',
                  padding: '0.2rem',
                  color: currentSlug === topic.slug ? 'var(--color-primary)' : 'var(--color-text)',
                  textDecoration: 'none'
                }}
              >
                {topic.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
