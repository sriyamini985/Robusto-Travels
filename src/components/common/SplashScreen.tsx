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
      background: 'radial-gradient(circle at 50% 50%, #050b1c 0%, #020617 100%)', // Premium dark theme background matching Robusto Verse
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isFadingOut ? 0 : 1,
      transition: 'opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      pointerEvents: isFadingOut ? 'none' : 'auto',
      overflow: 'hidden'
    }}>
      {/* Ambient background glow behind the logo */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Flight Path & Airplane Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        height: '220px',
        marginBottom: '16px',
        zIndex: 2
      }}>
        {/* Progressively drawn dashed SVG trail */}
        <svg viewBox="0 0 400 250" style={{ width: '100%', height: '100%' }}>
          <defs>
            <mask id="draw-mask">
              <path 
                d="M 50,50 C 180,80 220,200 300,160 C 350,130 360,70 300,70 C 240,70 230,150 300,200 C 340,220 300,215 300,220" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="4" 
                strokeDasharray="1000" 
                strokeDashoffset="1000"
                style={{
                  animation: 'drawPathMask 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards'
                }}
              />
            </mask>
          </defs>
          <path 
            d="M 50,50 C 180,80 220,200 300,160 C 350,130 360,70 300,70 C 240,70 230,150 300,200 C 340,220 300,215 300,220" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.45)" 
            strokeWidth="1.5" 
            strokeDasharray="6,5" 
            mask="url(#draw-mask)"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(56, 189, 248, 0.5))'
            }}
          />
        </svg>

        {/* Paper Airplane (Clean line-art following the path vector) */}
        <div className="paper-airplane" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}>
          <svg 
            viewBox="0 0 24 24" 
            width="22" 
            height="22" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.85))'
            }}
          >
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </div>
      </div>

      {/* Brand Text (Bottom half of logo containing "Robusto Travels" font) & Tagline */}
      <div style={{
        textAlign: 'center',
        zIndex: 2,
        animation: 'fadeInUpText 1.5s cubic-bezier(0.19, 1, 0.22, 1) 2.0s forwards',
        opacity: 0,
        transform: 'translateY(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Bottom half of logo: the retro display font name, extracted cleanly using blend-mode screen */}
        <div className="splash-logo-container" style={{
          filter: 'contrast(1.6) brightness(1.2) grayscale(1)',
          mixBlendMode: 'screen'
        }} />

        {/* Tagline */}
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.75)', // Soft white/gray tagline text
          fontWeight: 500,
          letterSpacing: '0.12em',
          marginTop: '16px',
          marginBottom: 0,
          textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          textTransform: 'lowercase' // matches lowercase design target
        }}>
          travel around the world without hesitation.
        </p>
      </div>

      {/* Global CSS Styles for Keyframes & Responsive Scaling */}
      <style>{`
        .splash-logo-container {
          width: 320px;
          height: 160px;
          background-image: url('/images/logo.png');
          background-size: 320px 320px;
          background-position: bottom center;
          background-repeat: no-repeat;
        }

        @media (max-width: 768px) {
          .splash-logo-container {
            width: 240px;
            height: 120px;
            background-size: 240px 240px;
          }
        }

        @keyframes drawPathMask {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .paper-airplane {
          offset-path: path('M 50,50 C 180,80 220,200 300,160 C 350,130 360,70 300,70 C 240,70 230,150 300,200 C 340,220 300,215 300,220');
          offset-rotate: auto 0deg;
          animation: followPath 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes followPath {
          0% {
            offset-distance: 0%;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            offset-distance: 100%;
            opacity: 1;
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
