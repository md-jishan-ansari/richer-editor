'use client'

import React from 'react'

type Props = {
  content: string
  className?: string
}

const RicherContent = ({ content, className = '' }: Props) => {
  const [highlightedContent, setHighlightedContent] = React.useState<string>('')

  React.useEffect(() => {
    let isMounted = true

    const fetchHighlighted = async () => {
      try {
        const res = await fetch('/api/code-highlighter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content }),
        })

        const data = await res.json()
        if (isMounted) {
          setHighlightedContent(data.highlitdcontent)
        }
      } catch (error) {
        console.error('Highlighting failed:', error)
        if (isMounted) {
          setHighlightedContent(content) // fallback
        }
      }
    }

    fetchHighlighted()

    return () => {
      isMounted = false
    }
  }, [content])

  if (!highlightedContent) return <div>Loading...</div>

  return (
    <div className={className}>
      <div
        className="max-w-none"
        dangerouslySetInnerHTML={{ __html: highlightedContent }}
      />
    </div>
  )
}

export default RicherContent
