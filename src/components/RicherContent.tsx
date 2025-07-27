import React from 'react'

type Props = {
  content: string
  className?: string
}

const RicherContent = ({ content, className = '' }: Props) => {

  return (
    <div className={className}>
      <div
        className="max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default RicherContent
