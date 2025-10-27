'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { topics } from '../topics'
import Topics from '../components/Topics'

export default function Manifesto() {
  const params = useParams()
  const slug = (params?.slug as string) || 'principles'
  const selectedTopic = topics.find(t => t.slug === slug) ? slug : 'principles'
  
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(`/manifesto/${selectedTopic}.md`)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => console.error('Failed to load content:', err))
  }, [selectedTopic])

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Topics />
      <main style={{ flex: 1 }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </div>
  )
}
