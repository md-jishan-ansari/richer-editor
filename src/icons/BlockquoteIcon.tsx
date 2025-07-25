// File: src/icons/BlockquoteIcon.tsx
import React from 'react';

const BlockquoteIcon = ({ size = 24, color = 'currentColor', className = '', ...props }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={size}
    height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className={className}
    {...props}><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>
);

export default BlockquoteIcon;

