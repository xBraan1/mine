import React from 'react';

interface SignatureLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export function SignatureLogo({ className = '', width = 140, height = 'auto', color = 'currentColor' }: SignatureLogoProps) {
  const numericWidth = typeof width === 'number' ? width : 140;
  const fontSize = `${numericWidth * 0.42}px`;
  
  return (
    <div 
      className={`signature-text ${className}`}
      style={{ 
        fontSize,
        color: color,
        fontFamily: "'Alex Brush', cursive",
        fontWeight: 400,
        transform: 'rotate(-3deg)',
        letterSpacing: '0.01em',
        lineHeight: 1,
      }}
      aria-label="xBraan1"
    >
      xBraan1
    </div>
  );
}
