import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { getCountryData } from '../data/countries';
import { getStateData } from '../data/india';
import { ALL_INDIAN_STATES } from '../data/india/statesData';
import { 
  ArrowLeft, 
  Star, 
  Compass, 
  Calendar,
  Sparkles
} from 'lucide-react';

export const TripDetails: React.FC = () => {
  const { params, navigateTo } = useNavigation();

  const rawDestId = params.destinationId || 'switzerland';
  const rawPlaceSlug = params.locationId || 'zermatt';

  const cleanDestId = rawDestId.toLowerCase().replace(/[^a-z0-9-]/g, '');
  const cleanPlaceSlug = rawPlaceSlug.toLowerCase().replace(/[^a-z0-9-]/g, '');

  const isIndianState = ALL_INDIAN_STATES.some(s => s.id === cleanDestId);

  // Retrieve container (Indian state or global country)
  const containerData = isIndianState ? getStateData(cleanDestId) : getCountryData(cleanDestId);

  // Retrieve famous place
  const place = containerData.famousPlaces.find((p: any) => 
    p.slug === cleanPlaceSlug || 
    p.slug.includes(cleanPlaceSlug) || 
    cleanPlaceSlug.includes(p.slug) ||
    p.name.toLowerCase().replace(/[^a-z0-9-]/g, '').includes(cleanPlaceSlug)
  ) || containerData.famousPlaces[0];

  const handleBack = () => {
    if (isIndianState) {
      navigateTo('state-details', { destinationId: containerData.id });
    } else {
      navigateTo('destination-details', { destinationId: (containerData as any).slug || containerData.id });
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#050a18', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: "'Plus Jakarta Sans', sans-serif" 
    }}>
      {/* 1. Ultra-Clean Hero Banner */}
      <section style={{
        position: 'relative',
        height: '48vh',
        minHeight: '360px',
        background: `linear-gradient(to bottom, rgba(5, 10, 24, 0.2), rgba(5, 10, 24, 0.98)), url("${place.image || containerData.heroImage || '/images/placeholder.jpg'}") no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '40px'
      }}>
        <div style={{
          maxWidth: '960px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px',
          zIndex: 2
        }}>
          {/* Back button */}
          <button 
            onClick={handleBack}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '0.8rem', 
              color: '#38bdf8', 
              marginBottom: '16px',
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '20px',
              padding: '6px 16px',
              cursor: 'pointer',
              fontWeight: 700,
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          >
            <ArrowLeft size={14} /> Back to {containerData.name} Places
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '1.2rem' }}>{isIndianState ? '🇮🇳' : (containerData as any).flag || '🌍'}</span>
            <span style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              color: '#38bdf8', 
              fontWeight: 800
            }}>
              {containerData.name} • Iconic Landmark
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', 
            fontWeight: 800, 
            margin: 0,
            color: '#fff',
            textShadow: '0 4px 20px rgba(0,0,0,0.6)'
          }}>
            {place.name}
          </h1>
        </div>
      </section>

      {/* 2. Main Content Stream */}
      <main style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '36px 24px 80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        
        {/* Quick Highlights Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          padding: '20px'
        }}>
          <div>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>
              Category
            </span>
            <strong style={{ fontSize: '0.92rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Compass size={14} /> {place.category || 'Iconic Landmark'}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>
              Best Season
            </span>
            <strong style={{ fontSize: '0.92rem', color: '#ffc107', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={14} /> {(place as any).bestTimeToVisit || containerData.bestTime || 'October – March'}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>
              Traveler Rating
            </span>
            <strong style={{ fontSize: '0.92rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Star size={14} fill="#10b981" color="#10b981" /> {place.rating ? place.rating.toFixed(2) : '4.95'} / 5.0
            </strong>
          </div>
        </div>

        {/* Story & Overview */}
        <section>
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#38bdf8', fontWeight: 800, display: 'block', marginBottom: '6px' }}>
            Attraction Overview
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 16px 0', color: '#fff' }}>
            About {place.name}
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.85)', 
            fontSize: '1.05rem', 
            lineHeight: 1.8, 
            margin: 0 
          }}>
            {place.overview}
          </p>
        </section>

        {/* Key Features & Signature Highlights */}
        <section>
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#38bdf8', fontWeight: 800, display: 'block', marginBottom: '6px' }}>
            What Makes It Special
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 20px 0', color: '#fff' }}>
            Signature Experience
          </h2>
          
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '28px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px'
          }}>
            <Sparkles size={24} color="#ffc107" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
                Unforgettable Highlights of {place.name}
              </h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {(place as any).shortDesc || place.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Visual Gallery */}
        {((place as any).gallery || [place.image]).length > 0 && (
          <section>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#38bdf8', fontWeight: 800, display: 'block', marginBottom: '6px' }}>
              Visual Preview
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 20px 0', color: '#fff' }}>
              Attraction Gallery
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}>
              {((place as any).gallery || [place.image, containerData.heroImage]).map((imgUrl: string, idx: number) => (
                <div 
                  key={idx} 
                  style={{ 
                    height: '200px', 
                    borderRadius: '20px', 
                    overflow: 'hidden', 
                    border: '1px solid rgba(255,255,255,0.1)' 
                  }}
                >
                  <img 
                    src={imgUrl} 
                    alt={`${place.name} preview ${idx+1}`} 
                    onError={e => e.currentTarget.src = place.image}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              ))}
            </div>
          </section>
        )}

      </main>
    </div>
  );
};
