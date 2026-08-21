import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out after 4.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 4500);

    // Call onComplete after 5.0 seconds to unmount
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

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
      background: 'radial-gradient(circle at 50% 50%, #050b1c 0%, #020617 100%)', // Premium dark theme matching website
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
        top: '48%',
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
        height: '240px',
        marginBottom: '-35px',
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
                  animation: 'drawPathMask 2.8s cubic-bezier(0.42, 0, 0.58, 1) forwards'
                }}
              />
            </mask>
          </defs>
          <path 
            d="M 50,50 C 180,80 220,200 300,160 C 350,130 360,70 300,70 C 240,70 230,150 300,200 C 340,220 300,215 300,220" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.45)" 
            strokeWidth="1.6" 
            strokeDasharray="6,5" 
            mask="url(#draw-mask)"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(56, 189, 248, 0.5))'
            }}
          />
        </svg>

        {/* Paper Airplane */}
        <div className="paper-airplane" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '38px',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}>
          <svg 
            viewBox="0 0 24 24" 
            width="34" 
            height="34" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))'
            }}
          >
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </div>
      </div>

      {/* Brand Text (Single line Robusto Travels logo) */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        zIndex: 2,
        animation: 'fadeInUpText 1.5s cubic-bezier(0.19, 1, 0.22, 1) 2.0s forwards',
        opacity: 0,
        transform: 'translateY(20px)',
      }}>
        {/* Left word: Robusto */}
        <div 
          className="logo-word-robusto" 
        />
        {/* Right word: Travels */}
        <div 
          className="logo-word-travels" 
        />
      </div>

      {/* Tagline */}
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '1.05rem',
        color: 'rgba(255, 255, 255, 0.85)',
        fontWeight: 500,
        letterSpacing: '0.12em',
        marginTop: '20px',
        marginBottom: 0,
        zIndex: 2,
        animation: 'fadeInUpText 1.5s cubic-bezier(0.19, 1, 0.22, 1) 2.3s forwards',
        opacity: 0,
        transform: 'translateY(15px)',
        textShadow: '0 2px 8px rgba(0,0,0,0.5)',
        textTransform: 'lowercase'
      }}>
        travel around the world without hesitation.
      </p>

      {/* Global CSS Styles for Keyframes & Responsive Scaling */}
      <style>{`
        .logo-word-robusto {
          width: 180px;
          height: 45px;
          background-image: url('/images/logo-transparent.png');
          background-size: 180px 180px;
          background-position: center -90px;
          background-repeat: no-repeat;
        }

        .logo-word-travels {
          width: 180px;
          height: 45px;
          background-image: url('/images/logo-transparent.png');
          background-size: 180px 180px;
          background-position: center -135px;
          background-repeat: no-repeat;
        }

        @media (max-width: 768px) {
          .logo-word-robusto {
            width: 120px;
            height: 30px;
            background-size: 120px 120px;
            background-position: center -60px;
          }
          .logo-word-travels {
            width: 120px;
            height: 30px;
            background-size: 120px 120px;
            background-position: center -90px;
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
          offset-rotate: auto -45deg;
          animation: followPath 2.8s cubic-bezier(0.42, 0, 0.58, 1) forwards;
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
