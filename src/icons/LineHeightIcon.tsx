// File: src/icons/AlignCenter.tsx
import React from 'react';

const LineHeightIcon = ({ size = 24, color = 'currentColor', className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 8V2"/>
    <path d="M4 12H2"/>
    <path d="M10 12H8"/>
    <path d="M16 12h-2"/>
    <path d="M22 12h-2"/>
    <path d="m15 19-3 3-3-3"/>
    <path d="m15 5-3-3-3 3"/>
  </svg>
);

export default LineHeightIcon;
