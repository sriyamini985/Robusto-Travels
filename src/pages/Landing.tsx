import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Globe as GlobeComponent } from '../components/3d/Globe';
import { ALL_LOCATIONS, calculateDistanceKm, calculateFlightHours, getVisaRequirement, getBestTravelSeason } from '../utils/journey';
import { ALL_INDIAN_STATES } from '../data/india/statesData';
import { 
  RotateCcw, 
  Sparkles,
  Search,
  MapPin,
  Plane,
  Compass,
  Clock,
  ShieldCheck,
  ArrowRight,
  Globe,
  Hotel,
  FileText,
  Bus,
  Umbrella
} from 'lucide-react';

export const Landing: React.FC = () => {
  const { navigateTo } = useNavigation();

  // India Interactive Hub Mode
  const [isIndiaMode, setIsIndiaMode] = useState<boolean>(false);
  const [stateSearchQuery, setStateSearchQuery] = useState<string>('');

  // Selection states (Origin & Destination)
  const [originId, setOriginId]     = useState<string | null>(null);
  const [destId, setDestId]         = useState<string | null>(null);
  const [hoveredLoc, setHoveredLoc] = useState<any | null>(null);
  const [zoomTrigger, setZoomTrigger] = useState<{ type: 'in' | 'out' | 'reset'; timestamp: number } | null>(null);

  // Selected objects - resolved for both International and India modes
  const findLocationById = (id: string | null) => {
    if (!id) return null;
    return ALL_LOCATIONS.find(l => l.id === id) || ALL_INDIAN_STATES.find(s => s.id === id) || null;
  };

  const originLoc = findLocationById(originId);
  const destLoc   = findLocationById(destId);

  const filteredStates = React.useMemo(() => {
    return ALL_INDIAN_STATES.filter(s => 
      s.name.toLowerCase().includes(stateSearchQuery.toLowerCase()) || 
      s.capital.toLowerCase().includes(stateSearchQuery.toLowerCase())
    );
  }, [stateSearchQuery]);

  // Prevent browser window pinch-to-zoom on desktop trackpad pinches
  React.useEffect(() => {
    const preventPinch = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', preventPinch, { passive: false });
    return () => {
      window.removeEventListener('wheel', preventPinch);
    };
  }, []);

  // Handle globe click selection logic (Origin & Destination selection)
  const handleGlobeSelect = (loc: any) => {
    if (!loc) return;
    
    // Shortcut: Clicking India on the global globe enters India Mode instantly
    if (loc.id === 'india' && !isIndiaMode) {
      if (!originId) {
        setOriginId(null);
        setDestId(null);
      }
      setIsIndiaMode(true);
      return;
    }

    if (!originId) {
      setOriginId(loc.id);
    } else {
      if (loc.id !== originId) {
        setDestId(loc.id);
        const isState = ALL_INDIAN_STATES.some(s => s.id === loc.id);
        setTimeout(() => {
          if (isState) {
            navigateTo('state-details', { destinationId: loc.id });
          } else {
            navigateTo('destination-details', { destinationId: loc.id });
          }
        }, 1600);
      }
    }
  };

  const handleStateSelect = (stateObj: any) => {
    handleGlobeSelect(stateObj);
  };

  const handleResetSelection = () => {
    setOriginId(null);
    setDestId(null);
    setIsIndiaMode(false);
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
      width: '100%', 
      minHeight: 'calc(100vh - 80px)',
      background: 'radial-gradient(ellipse 130% 110% at 50% 10%, #11234c 0%, #0a1532 35%, #050b1c 70%, #02040b 100%)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: '#fff',
      overflow: 'visible'
    }}>

      {/* ── REALISTIC DEEP SPACE STARS & NEBULA GLOW (FIXED PARALLAX BACKGROUND) ── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
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

      {/* ── GLOBE AREA WRAPPER SECTION ── */}
      <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 80px)', overflow: 'hidden', zIndex: 5 }}>
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
            isIndiaMode={isIndiaMode}
            onSelectState={handleGlobeSelect}
            zoomTrigger={zoomTrigger}
          />
        </div>
      </div>

      {/* ── TOP MINIMAL STATUS PROMPT & INDIA STATE HUB BUTTON ── */}
      <div style={{
        position: 'absolute',
        top: '92px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        maxWidth: '90vw'
      }}>
        {isIndiaMode ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(7, 15, 36, 0.88)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            borderRadius: '30px',
            padding: '6px 20px',
            boxShadow: '0 12px 36px rgba(0,0,0,0.45)',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#e2e8f0'
          }}>
            <span style={{ fontSize: '1.1rem' }}>🇮🇳</span>
            <span>
              {!originId ? 'Step 1: Click your Origin State on 3D Earth' :
               !destId ? 'Step 2: Click your Destination State on 3D Earth' :
               `Connected: ${originLoc?.name} ✈️ ${destLoc?.name}`}
            </span>
            <button
              onClick={handleResetSelection}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '20px',
                padding: '4px 12px',
                color: '#38bdf8',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: 'pointer',
                marginLeft: '8px'
              }}
            >
              ← Back to Global Earth
            </button>
          </div>
        ) : (
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
               `3D Flight Route Connected: ${originLoc?.name} ✈️ ${destLoc?.name}`}
            </span>
          </div>
        )}

        {!isIndiaMode && (
          <button
            onClick={() => setIsIndiaMode(true)}
            style={{
              background: 'linear-gradient(135deg, rgba(255,153,51,0.2), rgba(18,136,7,0.2))',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,153,51,0.5)',
              borderRadius: '24px',
              padding: '8px 16px',
              color: '#fff',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
            }}
          >
            🇮🇳 Explore Indian States (28 Hub)
          </button>
        )}

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

      {/* ── ACTIVE FLIGHT ROUTE JOURNEY HUD PANEL ── */}
      {originLoc && destLoc && (() => {
        const distKm = calculateDistanceKm(originLoc.lat, originLoc.lng, destLoc.lat, destLoc.lng);
        const flightInfo = calculateFlightHours(distKm);
        const isDestIndianState = ALL_INDIAN_STATES.some(s => s.id === destLoc.id);
        const isDomestic = originLoc && destLoc && 
          ALL_INDIAN_STATES.some(s => s.id === originLoc.id) && 
          isDestIndianState;

        const visaStatus = isDomestic 
          ? "Domestic / No Visa Required" 
          : (isDestIndianState 
              ? "Indian Tourist e-Visa Required" 
              : getVisaRequirement(originLoc.id, destLoc.id));

        const bestSeason = isDestIndianState 
          ? ((destLoc as any).bestTime || "October to March") 
          : getBestTravelSeason(destLoc.id);

        return (
          <div style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 35,
            width: '90vw',
            maxWidth: '720px',
            background: 'rgba(7, 15, 36, 0.92)',
            backdropFilter: 'blur(24px)',
            border: '1.5px solid rgba(0, 240, 255, 0.4)',
            borderRadius: '24px',
            padding: '20px 24px',
            boxShadow: '0 25px 60px rgba(0, 240, 255, 0.25), 0 0 40px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {/* Header Flight Route Connection */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: 'rgba(0,240,255,0.15)', border: '1px solid #00f0ff', borderRadius: '12px', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{(originLoc as any).flag || '🇮🇳'}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#00f0ff' }}>ORIGIN: {originLoc.name}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffc107', fontWeight: 800 }}>
                  <Plane size={16} style={{ transform: 'rotate(90deg)' }} />
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.08em' }}>FLIGHT ARC</span>
                  <ArrowRight size={16} />
                </div>

                <div style={{ background: 'rgba(255,193,7,0.15)', border: '1px solid #ffc107', borderRadius: '12px', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{(destLoc as any).flag || '🇮🇳'}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffc107' }}>DEST: {destLoc.name}</span>
                </div>
              </div>

              <button
                onClick={handleResetSelection}
                style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <RotateCcw size={12} /> Reset Route
              </button>
            </div>

            {/* Flight Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '10px 12px' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Compass size={12} color="#00f0ff" /> Distance
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginTop: '2px', display: 'block' }}>
                  {distKm.toLocaleString()} km
                </span>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '10px 12px' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} color="#ffc107" /> Est. Flight Time
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', marginTop: '2px', display: 'block' }}>
                  {flightInfo.formatted}
                </span>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '10px 12px' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={12} color="#10b981" /> Visa Requirements
                </span>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#10b981', marginTop: '2px', display: 'block' }}>
                  {visaStatus}
                </span>
              </div>
            </div>

            {/* Travel Action Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                📅 <strong>Best Season:</strong> {bestSeason}
              </span>
            </div>
          </div>
        );
      })()}

      {/* ── INDIA HUB CLEAN STATE SELECTOR BAR (In India Mode) ── */}
      {isIndiaMode && (
        <div style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30,
          maxWidth: '92vw',
          width: '780px',
          background: 'rgba(7, 15, 36, 0.88)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '24px',
          padding: '14px 20px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Search bar */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={16} color="#38bdf8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search 28 States & 8 Union Territories in India (e.g. Goa, Kerala, Rajasthan)..."
              value={stateSearchQuery}
              onChange={e => setStateSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 42px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '16px',
                color: '#fff',
                fontSize: '0.85rem'
              }}
            />
          </div>

          {/* Quick Select State Chips */}
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '4px'
          }}>
            {filteredStates.slice(0, 12).map(stateObj => (
              <button
                key={stateObj.id}
                onClick={() => handleStateSelect(stateObj)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '16px',
                  color: '#fff',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.2)'; e.currentTarget.style.borderColor = '#38bdf8'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
              >
                <MapPin size={12} color="#38bdf8" /> {stateObj.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── HOVER PREVIEW TOOLTIP ── */}
      {hoveredLoc && !isIndiaMode && !destLoc && (
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
            onClick={() => {
              const types: ('in' | 'out' | 'reset')[] = ['in', 'out', 'reset'];
              setZoomTrigger({ type: types[i], timestamp: Date.now() });
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'}
          >
            {ctrl}
          </div>
        ))}
      </div>
      </div>

      {/* ── OUR SERVICES SECTION ── */}
      <section style={{
        position: 'relative',
        zIndex: 10,
        padding: '90px 24px',
        background: 'linear-gradient(to bottom, #050b1c 0%, #020617 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <span style={{
              color: '#f59e0b',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              display: 'block',
              marginBottom: '10px'
            }}>
              Professional Offerings
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: '#fff',
              margin: 0,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase'
            }}>
              Our Services
            </h2>
            <div style={{
              width: '60px',
              height: '3px',
              background: '#f59e0b',
              margin: '20px auto 0',
              borderRadius: '2px'
            }} />
          </div>

          {/* Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                icon: Globe,
                title: 'Tours',
                description: 'International and Domestic tours in your budget. Experience Unique Tours.'
              },
              {
                icon: Plane,
                title: 'Airline Tickets',
                description: 'Book your International and Domestic Airline Tickets.'
              },
              {
                icon: Hotel,
                title: 'Hotel Bookings',
                description: 'We offer a wide selection of hotel ranging from 5-star ones to small properties located worldwide so that you could book a hotel you like.'
              },
              {
                icon: FileText,
                title: 'Visa Services',
                description: 'Hassle free Tourist visa services all over the globe with proper documentation.'
              },
              {
                icon: Bus,
                title: 'Bus/Train/Taxi booking',
                description: 'Scheduled transport bus tickets, train tickets, tourist bus booking and tourist taxi booking.'
              },
              {
                icon: Compass,
                title: 'Holy land & pilgrimage tour',
                description: 'Discover the historic, cultural, religious & scenic sites of Jerusalem, Israel & Egypt. India is prestigious as a conspicuous spot of Hindu, Buddhist, Sikh, Christian and Muslim religion.'
              },
              {
                icon: Sparkles,
                title: 'Hajj/ Umrah Services',
                description: 'Hajj and Umrah Holy tour packages for the Indian Muslim pilgrims. Book package online at best price and get premium service.'
              },
              {
                icon: Umbrella,
                title: 'Party Tours',
                description: 'Experience the Vibe of the Place. We offer Party tours such as Boat Parties, Destination Birthday Parties, etc.'
              }
            ].map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div 
                  key={idx}
                  className="service-card-dark"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '30px 24px',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                    cursor: 'default',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  {/* Icon Container */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(245, 158, 11, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    color: '#f59e0b',
                    transition: 'transform 0.3s ease'
                  }} className="service-icon-box">
                    <IconComponent size={24} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#fff',
                    margin: '0 0 12px 0'
                  }}>
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'rgba(255, 255, 255, 0.65)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {srv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CSS for Dark Cards */}
        <style>{`
          .service-card-dark:hover {
            transform: translateY(-6px);
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(245, 158, 11, 0.4);
            box-shadow: 0 12px 30px rgba(5, 11, 28, 0.6), 0 0 15px rgba(245, 158, 11, 0.05);
          }
          .service-card-dark:hover .service-icon-box {
            transform: scale(1.1);
          }
        `}</style>
      </section>

    </div>
  );
};
