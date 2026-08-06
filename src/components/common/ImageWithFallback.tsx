import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  style = {}
}) => {
  const [hasError, setHasError] = useState(!src);

  if (hasError || !src) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          minHeight: '180px',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
          border: '1px dashed rgba(56, 189, 248, 0.3)',
          borderRadius: style.borderRadius || '0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          color: 'rgba(255, 255, 255, 0.7)',
          padding: '16px',
          textAlign: 'center',
          boxSizing: 'border-box',
          ...style
        }}
      >
        <ImageOff size={24} color="#38bdf8" />
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Verified Image Coming Soon
        </span>
        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        ...style
      }}
    />
  );
};
