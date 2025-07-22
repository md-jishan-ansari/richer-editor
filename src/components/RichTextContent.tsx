"use client";
import React, { useEffect } from 'react'
import RichEditorProseWrapper from './RichEditorProseWrapper';

const RichTextContent = ({ content, textSmall = false }: { content: string, textSmall?: boolean }) => {

    return (
        <RichEditorProseWrapper textSmall>
            <div
                className="max-w-none"
                dangerouslySetInnerHTML={{ __html: content || "" }}
            />
        </RichEditorProseWrapper>
    )
}

export default RichTextContent
