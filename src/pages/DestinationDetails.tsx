import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { getCountryData } from '../data/countries';
import { formatLocalCurrency } from '../utils/currency';
import { 
  Sun, 
  ShieldAlert, 
  Coins, 
  Languages, 
  Clock, 
  Plane, 
  Compass, 
  ArrowRight, 
  Star 
} from 'lucide-react';

export const DestinationDetails: React.FC = () => {
  const { params, navigateTo } = useNavigation();
  
  // Find destination data by slug (fall back to switzerland)
  const destId = params.destinationId || 'switzerland';
  const data = getCountryData(destId);

  return (
    <div style={{ 
      backgroundColor: '#070f24', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: "'Plus Jakarta Sans', sans-serif" 
    }}>
      {/* 1. Large Hero Banner */}
      <section style={{
        position: 'relative',
        height: '60vh',
        minHeight: '450px',
        background: `linear-gradient(to bottom, rgba(7, 15, 36, 0.2), rgba(7, 15, 36, 0.95)), url("${data.heroImage}") no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '60px'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px',
          zIndex: 2
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '2.5rem' }}>{data.flag}</span>
            <span style={{ 
              fontSize: '0.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              color: '#38bdf8', 
              fontWeight: 700 
            }}>
              Luxury Destination Portfolio
            </span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            fontWeight: 800, 
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            lineHeight: 1.1,
            color: '#fff',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            {data.name}
          </h1>
        </div>
      </section>

      {/* 2. Destination Details Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1.7fr 1fr',
        gap: '64px',
        alignItems: 'flex-start'
      }}>
        {/* Left Column: Intro & Highlights */}
        <div>
          <span style={{ 
            fontSize: '0.75rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            color: '#38bdf8', 
            fontWeight: 700,
            display: 'block',
            marginBottom: '8px'
          }}>
            Overview
          </span>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 800, 
            margin: '0 0 24px 0', 
            color: '#fff' 
          }}>
            The Essence of {data.name}
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.8)', 
            fontSize: '1.05rem', 
            lineHeight: 1.8, 
            marginBottom: '40px' 
          }}>
            {data.intro}
          </p>

          <h3 style={{ 
            fontSize: '1.4rem', 
            fontWeight: 700, 
            margin: '0 0 20px 0', 
            color: '#fff' 
          }}>
            Travel Highlights
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
            {data.highlights.map((highlight: string, idx: number) => (
              <div key={idx} style={{ 
                display: 'flex', 
                gap: '16px', 
                alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.03)',
                padding: '16px 20px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.06)'
              }}>
                <span style={{ 
                  color: '#38bdf8', 
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  lineHeight: 1
                }}>
                  0{idx + 1}
                </span>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Gallery */}
          <h3 style={{ 
            fontSize: '1.4rem', 
            fontWeight: 700, 
            margin: '0 0 20px 0', 
            color: '#fff' 
          }}>
            Visual Chronicles
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '16px' 
          }}>
            {data.gallery.map((img: string, idx: number) => (
              <div key={idx} style={{ 
                height: '180px', 
                borderRadius: '16px', 
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <img 
                  src={img} 
                  alt={`${data.name} Gallery ${idx}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Travel Logistics Cards */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '32px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ 
              fontSize: '1.15rem', 
              fontWeight: 700, 
              color: '#38bdf8', 
              margin: '0 0 24px 0',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}>
              Travel Logistics
            </h3>

            {/* Stats Items */}
            {[
              { icon: <Sun size={18} color="#f59e0b" />, title: "Best Season", desc: data.bestSeason },
              { icon: <Compass size={18} color="#38bdf8" />, title: "Weather Info", desc: data.weather },
              { icon: <Coins size={18} color="#10b981" />, title: "Currency", desc: data.currency },
              { icon: <Languages size={18} color="#a855f7" />, title: "Languages", desc: data.language },
              { icon: <Clock size={18} color="#ec4899" />, title: "Time Zone", desc: data.timeZone },
              { icon: <ShieldAlert size={18} color="#ef4444" />, title: "Visa Requirements", desc: data.visaInfo },
              { icon: <Plane size={18} color="#eab308" />, title: "Flight Duration (from India)", desc: data.flightDuration }
            ].map((item, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                gap: '16px', 
                marginBottom: idx === 6 ? 0 : '20px',
                alignItems: 'flex-start' 
              }}>
                <div style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '10px', 
                  background: 'rgba(255,255,255,0.04)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{item.title}</h4>
                  <p style={{ margin: '2px 0 0 0', fontSize: '0.88rem', color: '#fff', fontWeight: 600, lineHeight: 1.4 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* 3. Famous Places Section */}
      <section style={{ 
        background: '#040918', 
        padding: '80px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ 
            fontSize: '0.75rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em', 
            color: '#38bdf8', 
            fontWeight: 700, 
            display: 'block', 
            textAlign: 'center',
            marginBottom: '8px'
          }}>
            Explore Attractions
          </span>
          <h2 style={{ 
            fontSize: '2.2rem', 
            fontWeight: 800, 
            textAlign: 'center', 
            margin: '0 0 48px 0',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#fff'
          }}>
            Famous Places in {data.name}
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '32px' 
          }}>
            {data.famousPlaces.map((place: any) => (
              <div 
                key={place.slug}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="famous-place-card"
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Glassmorphic price tag */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(7, 15, 36, 0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 14px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', display: 'inline', marginRight: '4px' }}>Starting</span>
                    <strong style={{ color: '#ffc107', fontSize: '0.92rem' }}>
                      {formatLocalCurrency(place.packagePrice, data.name)}
                    </strong>
                  </div>
                </div>

                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h3 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: '#fff' }}>
                      {place.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={14} fill="#ffc107" color="#ffc107" />
                      <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{place.rating.toFixed(2)}</span>
                    </div>
                  </div>

                  <p style={{ 
                    fontSize: '0.88rem', 
                    color: 'rgba(255,255,255,0.7)', 
                    lineHeight: 1.6, 
                    marginBottom: '20px',
                    flex: 1 
                  }}>
                    {place.shortDesc}
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: '16px',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.5)'
                  }}>
                    <span>Best Time: <strong>{place.bestTimeToVisit}</strong></span>
                    <button 
                      onClick={() => navigateTo('trip-details', { destinationId: data.slug, locationId: place.slug })}
                      style={{
                        background: '#1d4ed8',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '8px 16px',
                        color: '#fff',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.78rem',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#1e40af'}
                      onMouseLeave={e => e.currentTarget.style.background = '#1d4ed8'}
                    >
                      Explore <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Styles for hover transition */}
      <style>{`
        .famous-place-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.4) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};
