import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out after 3.0 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3000);

    // Call onComplete after 3.5 seconds to unmount
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 999999,
      background: '#070f24',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isFadingOut ? 0 : 1,
      transition: 'opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      pointerEvents: isFadingOut ? 'none' : 'auto',
      overflow: 'hidden'
    }}>
      {/* Decorative ambient background glows */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(29, 78, 216, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }} />

      {/* Animating Flight Element */}
      <div style={{
        animation: 'flyInCenter 2.2s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '32px',
        zIndex: 2
      }}>
        <svg 
          viewBox="0 0 24 24" 
          width="90" 
          height="90" 
          fill="none" 
          stroke="#FFC107" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 16px rgba(255, 193, 7, 0.45))'
          }}
        >
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </div>

      {/* Brand Text & Tagline */}
      <div style={{
        textAlign: 'center',
        zIndex: 2,
        animation: 'fadeInUpText 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1.2s forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}>
        <h1 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#ffffff',
          letterSpacing: '0.22em',
          margin: '0 0 12px 0',
          textTransform: 'uppercase',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          ROBUSTO TRAVELS
        </h1>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.95rem',
          color: '#ffc107',
          fontWeight: 600,
          letterSpacing: '0.08em',
          margin: 0,
          opacity: 0.9,
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          Travel around the world without hesitation
        </p>
      </div>

      {/* Global CSS Styles for Keyframes */}
      <style>{`
        @keyframes flyInCenter {
          0% {
            transform: translate(-100vw, -100vh) scale(0.5) rotate(45deg);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translate(20px, 20px) scale(1.05) rotate(5deg);
          }
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
        }
        @keyframes fadeInUpText {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
