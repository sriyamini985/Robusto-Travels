import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Globe as GlobeComponent } from '../components/3d/Globe';
import { ALL_LOCATIONS } from '../utils/journey';
import { 
  RotateCcw, 
  Sparkles 
} from 'lucide-react';

export const Landing: React.FC = () => {
  const { navigateTo } = useNavigation();

  // Selection states (Origin & Destination)
  const [originId, setOriginId]     = useState<string | null>(null);
  const [destId, setDestId]         = useState<string | null>(null);
  const [hoveredLoc, setHoveredLoc] = useState<any | null>(null);

  // Selected objects
  const destLoc   = ALL_LOCATIONS.find(l => l.id === destId) || null;

  // Handle globe click selection logic (NO POPUP MODAL)
  const handleGlobeSelect = (loc: any) => {
    if (!originId) {
      setOriginId(loc.id);
    } else if (originId && !destId) {
      if (loc.id !== originId) {
        setDestId(loc.id);
        // Smooth rotation animation, then direct navigation to famous places
        setTimeout(() => {
          navigateTo('destination-details', { destinationId: loc.id });
        }, 1500);
      }
    } else {
      // Direct navigation if destination is clicked again
      if (loc.id !== originId) {
        setDestId(loc.id);
        setTimeout(() => {
          navigateTo('destination-details', { destinationId: loc.id });
        }, 1500);
      }
    }
  };

  const handleResetSelection = () => {
    setOriginId(null);
    setDestId(null);
  };

  // Realistic Twinkling Star Field
  const stars = React.useMemo(() => {
    return Array.from({ length: 95 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 2.2,
      opacity: 0.2 + Math.random() * 0.75,
      duration: 2.5 + Math.random() * 3.5,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 130% 110% at 50% 10%, #11234c 0%, #0a1532 35%, #050b1c 70%, #02040b 100%)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: '#fff'
    }}>

      {/* ── REALISTIC DEEP SPACE STARS & NEBULA GLOW ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
        {/* Twinkling Star Field */}
        {stars.map(s => (
          <div key={s.id} style={{
            position: 'absolute',
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: '50%',
            background: '#ffffff',
            opacity: s.opacity,
            boxShadow: s.size > 2 ? '0 0 6px rgba(255,255,255,0.8)' : 'none',
            animation: `starTwinkle ${s.duration}s ease-in-out ${s.delay}s infinite alternate`
          }} />
        ))}

        {/* Deep Cosmic Nebula Ambient Glow */}
        <div style={{
          position: 'absolute', top: '45%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90vw', height: '90vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30,90,220,0.16) 0%, rgba(15,50,160,0.06) 45%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: '20%', left: '75%',
          width: '450px', height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
        }} />
      </div>

      <style>{`
        @keyframes starTwinkle {
          0% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 0.95; transform: scale(1.25); }
          100% { opacity: 0.15; transform: scale(0.8); }
        }
      `}</style>

      {/* ── CENTER HERO: 100% CLEAN FULL-SCREEN 3D EARTH GLOBE (NO POPUPS) ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ width: '100%', height: '100%', maxWidth: '1600px', maxHeight: '1000px' }}>
          <GlobeComponent
            onHoverDest={(loc) => setHoveredLoc(loc)}
            hoveredDest={hoveredLoc}
            onSelectLocation={handleGlobeSelect}
            originId={originId}
            destinationId={destId}
          />
        </div>
      </div>

      {/* ── TOP MINIMAL STATUS PROMPT ── */}
      <div style={{
        position: 'absolute',
        top: '92px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(7, 15, 36, 0.80)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          borderRadius: '30px',
          padding: '8px 24px',
          boxShadow: '0 12px 36px rgba(0,0,0,0.45)',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#e2e8f0'
        }}>
          <Sparkles size={16} color="#38bdf8" />
          <span>
            {!originId ? 'Step 1: Click your Origin location on 3D Earth' :
             !destId ? 'Step 2: Click your Destination location on 3D Earth' :
             `Opening Famous Places in ${destLoc?.name}...`}
          </span>
        </div>

        {(originId || destId) && (
          <button
            onClick={handleResetSelection}
            title="Reset selection"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '24px',
              padding: '8px 14px',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <RotateCcw size={12} /> Reset
          </button>
        )}
      </div>

      {/* ── HOVER PREVIEW TOOLTIP ── */}
      {hoveredLoc && (
        <div style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 25,
          background: 'rgba(7, 15, 36, 0.88)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '16px',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
          pointerEvents: 'none'
        }}>
          <img 
            src={hoveredLoc.image} 
            alt={hoveredLoc.name} 
            style={{ width: '44px', height: '44px', borderRadius: '10px', objectFit: 'cover' }} 
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.1rem' }}>{hoveredLoc.flag}</span>
              <strong style={{ fontSize: '0.95rem', color: '#fff' }}>{hoveredLoc.name}</strong>
            </div>
            <span style={{ fontSize: '0.72rem', color: '#38bdf8', display: 'block', marginTop: '2px' }}>
              {!originId ? 'Click to set as Origin Location' : 'Click to set as Destination Location'}
            </span>
          </div>
        </div>
      )}

      {/* ── FLOATING ZOOM CONTROLS ── */}
      <div style={{
        position: 'absolute', bottom: '36px', right: '32px',
        display: 'flex', flexDirection: 'column', gap: '6px',
        zIndex: 20,
      }}>
        {['+', '−', '⊙'].map((ctrl, i) => (
          <div key={i} style={{
            width: 38, height: 38,
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.22)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: '1.15rem', fontWeight: 700,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'}
          >
            {ctrl}
          </div>
        ))}
      </div>

    </div>
  );
};
