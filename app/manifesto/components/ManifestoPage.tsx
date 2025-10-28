'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { topics } from '../topics'
import Topics from './Topics'

export default function ManifestoPage({ initialSlug }: { initialSlug: string }) {
  const router = useRouter()
  const isValid = topics.some(t => t.slug === initialSlug)
  const selectedTopic = isValid ? initialSlug : 'index'

  const [content, setContent] = useState('')
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    if (!isValid && initialSlug !== 'index') {
      router.replace('/manifesto')
    }
  }, [isValid, initialSlug, router])

  useEffect(() => {
    let cancelled = false
    setLoadError(null)
    const ts = process.env.NODE_ENV === 'development' ? `?ts=${Date.now()}` : ''
    const url = `/manifesto/${selectedTopic}.md${ts}`
    fetch(url, { cache: 'no-store' })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load: ${res.status}`)
        }
        return res.text()
      })
      .then(text => {
        if (!cancelled) setContent(text)
      })
      .catch(() => {
        if (!cancelled) {
          setLoadError('Content unavailable.')
          setContent('')
        }
      })
    return () => { cancelled = true }
  }, [selectedTopic])

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Topics />
      <div style={{ flex: 1 }}>
        {loadError ? (
          <p>{loadError}</p>
        ) : (
          <div className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}
