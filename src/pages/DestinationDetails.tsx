import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { getCountryData } from '../data/countries';
import { 
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
      {/* 1. Hero Banner */}
      <section style={{
        position: 'relative',
        height: '45vh',
        minHeight: '360px',
        background: `linear-gradient(to bottom, rgba(7, 15, 36, 0.2), rgba(7, 15, 36, 0.95)), url("${data.heroImage}") no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '48px'
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
              Famous Places Portfolio
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

      {/* 2. Famous Places Section (Only Famous Places - No Extra Content or Money Tags) */}
      <section style={{ 
        background: '#040918', 
        padding: '60px 24px 80px',
        minHeight: '50vh'
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
            Iconic Landmarks & Destinations
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
                        padding: '10px 20px',
                        color: '#fff',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#1e40af'}
                      onMouseLeave={e => e.currentTarget.style.background = '#1d4ed8'}
                    >
                      Explore Place <ArrowRight size={14} />
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
