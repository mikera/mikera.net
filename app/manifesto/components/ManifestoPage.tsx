'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
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
    fetch(`/manifesto/${selectedTopic}.md`)
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
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Topics />
      <main style={{ flex: 1 }}>
        {loadError ? (
          <p>{loadError}</p>
        ) : (
          <ReactMarkdown>{content}</ReactMarkdown>
        )}
      </main>
    </div>
  )
}
