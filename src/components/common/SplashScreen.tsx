import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [processedLogo, setProcessedLogo] = useState<string>('');

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

  useEffect(() => {
    // Process logo image to extract exact vector shapes transparently
    const img = new Image();
    img.src = '/images/logo.png';
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const midY = canvas.height / 2;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const idx = (y * canvas.width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          if (y < midY - 4) {
            // Top half: Paper airplane flight path (white background, black lines)
            // If it is near white, make it transparent
            if (r > 200 && g > 200 && b > 200) {
              data[idx + 3] = 0;
            } else if (r < 120 && g < 120 && b < 120) {
              // Convert black lines to pure white with nice crisp edges
              data[idx] = 255;
              data[idx + 1] = 255;
              data[idx + 2] = 255;
              data[idx + 3] = 255;
            }
          } else if (y > midY + 4) {
            // Bottom half: Brand typography (black background, white text)
            // If it is near black, make it transparent
            if (r < 65 && g < 65 && b < 65) {
              data[idx + 3] = 0;
            } else {
              // Make text pure white
              data[idx] = 255;
              data[idx + 1] = 255;
              data[idx + 2] = 255;
            }
          } else {
            // Completely delete the central horizontal dividing line
            data[idx + 3] = 0;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedLogo(canvas.toDataURL());
    };
  }, []);

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
        marginBottom: '-35px', // Pulls the logo up closer to the airplane landing spot so they belong to the same composition
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
            strokeWidth="1.6" 
            strokeDasharray="6,5" 
            mask="url(#draw-mask)"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(56, 189, 248, 0.5))'
            }}
          />
        </svg>

        {/* Paper Airplane (Clean line-art following the path vector, scaled up 1.8x) */}
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
        {/* Bottom half of logo: the retro display font name, extracted cleanly via canvas background removal */}
        <div 
          className="splash-logo-container" 
          style={{
            backgroundImage: processedLogo ? `url(${processedLogo})` : 'none',
            display: processedLogo ? 'block' : 'none'
          }} 
        />

        {/* Tagline */}
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '1.05rem', // Slightly larger and highly readable
          color: 'rgba(255, 255, 255, 0.85)', // Soft white / light gray text
          fontWeight: 500,
          letterSpacing: '0.12em',
          marginTop: '16px',
          marginBottom: 0,
          textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          textTransform: 'lowercase' // exact tagline lowercase layout
        }}>
          travel around the world without hesitation.
        </p>
      </div>

      {/* Global CSS Styles for Keyframes & Responsive Scaling */}
      <style>{`
        .splash-logo-container {
          width: 360px;
          height: 180px;
          background-size: 360px 360px;
          background-position: bottom center;
          background-repeat: no-repeat;
        }

        @media (max-width: 768px) {
          .splash-logo-container {
            width: 260px;
            height: 130px;
            background-size: 260px 260px;
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
