import React from 'react';

const RicherContent = ({ content, className = '' }: { content: string, className?: string }) => {

    return (
        <div className={className}>
            <div
                className="max-w-none"
                dangerouslySetInnerHTML={{ __html: content || "" }}
            />
        </div>
    )
}

export default RicherContent
