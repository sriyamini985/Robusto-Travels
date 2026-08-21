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
      background: '#000000', // Solid black background to blend perfectly with the logo's black sections
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
        background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }} />

      {/* Animating Flight Element (Top half of logo containing the paper airplane arrow) */}
      <div style={{
        animation: 'flyInCenter 2.2s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        zIndex: 2
      }}>
        <div style={{
          width: '280px',
          height: '140px',
          backgroundImage: "url('/images/logo.png')",
          backgroundSize: '280px 280px',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) brightness(1.25)', // Inverts the white background of the image to black, and the black drawing to white
          boxShadow: '0 0 30px rgba(255, 255, 255, 0.03)'
        }} />
      </div>

      {/* Brand Text (Bottom half of logo containing "Robusto Travels" font) & Tagline */}
      <div style={{
        textAlign: 'center',
        zIndex: 2,
        animation: 'fadeInUpText 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1.2s forwards',
        opacity: 0,
        transform: 'translateY(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Bottom half of logo: the retro display font name */}
        <div style={{
          width: '280px',
          height: '140px',
          backgroundImage: "url('/images/logo.png')",
          backgroundSize: '280px 280px',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          marginBottom: '16px'
        }} />

        {/* Tagline */}
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.9rem',
          color: '#ffc107',
          fontWeight: 600,
          letterSpacing: '0.08em',
          margin: 0,
          opacity: 0.9,
          textShadow: '0 2px 10px rgba(0,0,0,0.5)'
        }}>
          travel around the world without hesitation.
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
            transform: translate(20px, 20px) scale(1.03) rotate(5deg);
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
