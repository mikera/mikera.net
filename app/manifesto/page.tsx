'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import Topics from './components/Topics'

export default function ManifestoPage() {
  const [introContent, setIntroContent] = useState('')

  useEffect(() => {
    fetch('/manifesto/index.md')
      .then(res => res.text())
      .then(text => setIntroContent(text))
      .catch(() => setIntroContent('## My Manifesto\n\nExplore the topics below to learn more about my principles and values.'))
  }, [])

  return (
    <div style={{ display: 'flex' }}>
      <Topics />
      <main style={{ flex: 1 }}>
        {introContent ? (
          <ReactMarkdown>{introContent}</ReactMarkdown>
        ) : (
          <div>
            <p>This is where I articulate my fundamental beliefs and principles about technology, ethics, and the craft of programming.</p>
            <p>Select a topic from the sidebar to explore specific aspects of my manifesto.</p>
          </div>
        )}
      </main>
    </div>
  )
}
