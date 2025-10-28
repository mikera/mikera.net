'use client'
 
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { topics } from '../topics'

export default function Topics() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const currentSlug = segments[segments.length - 1] || ''

  return (
    <aside className="manifesto-topics" style={{ minWidth: '200px' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {topics.map(topic => (
            <li key={topic.slug}>
              <Link
                href={`/manifesto/${topic.slug}`}
                className={currentSlug == topic.slug ? 'is-active' : ''}
                style={{
                  display: 'block',
                  padding: '0.2rem',
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
