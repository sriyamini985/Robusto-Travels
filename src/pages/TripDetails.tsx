import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { getCountryData } from '../data/countries';
import { 
  ArrowLeft, 
  Star, 
  Compass, 
  Calendar,
  Sparkles,
  Hotel
} from 'lucide-react';

export const TripDetails: React.FC = () => {
  const { params, navigateTo } = useNavigation();

  const destId = params.destinationId || 'switzerland';
  const placeSlug = params.locationId || 'zermatt';

  const countryData = getCountryData(destId);
  const place = countryData.famousPlaces.find((p: any) => p.slug === placeSlug) || countryData.famousPlaces[0];

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
        background: `linear-gradient(to bottom, rgba(5, 10, 24, 0.2), rgba(5, 10, 24, 0.98)), url("${place.image}") no-repeat center center/cover`,
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
            onClick={() => navigateTo('destination-details', { destinationId: countryData.slug })}
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
            <ArrowLeft size={14} /> Back to {countryData.name} Places
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '1.2rem' }}>{countryData.flag}</span>
            <span style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              color: '#38bdf8', 
              fontWeight: 800
            }}>
              {countryData.name} • Iconic Landmark
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

      {/* 2. Main Content Stream (Simple, Clean & Uncluttered) */}
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
              <Calendar size={14} /> {place.bestTimeToVisit || 'April – October'}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>
              Traveler Rating
            </span>
            <strong style={{ fontSize: '0.92rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Star size={14} fill="#10b981" color="#10b981" /> {place.rating ? place.rating.toFixed(2) : '4.92'} / 5.0
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
                Unforgettable Highlights
              </h3>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {place.shortDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Visual Gallery */}
        {place.gallery && place.gallery.length > 0 && (
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
              {place.gallery.map((imgUrl: string, idx: number) => (
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
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Accommodations (If available) */}
        {place.hotels && place.hotels.length > 0 && (
          <section>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#38bdf8', fontWeight: 800, display: 'block', marginBottom: '6px' }}>
              Where To Stay
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 20px 0', color: '#fff' }}>
              Recommended Accommodations
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {place.hotels.map((hotel: any, idx: number) => (
                <div 
                  key={idx}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Hotel size={16} color="#38bdf8" /> {hotel.name}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Star size={12} fill="#ffc107" color="#ffc107" />
                        <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{hotel.rating}</span>
                      </div>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                      {hotel.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>
    </div>
  );
};
