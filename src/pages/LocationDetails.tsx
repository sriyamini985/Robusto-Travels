import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { attractions, destinations, packages } from '../data/mockData';
import { ArrowLeft, Clock, Ticket, Compass, Camera, HeartHandshake, Star, MapPin, Map, Sun, Sunset, Moon, ChevronRight } from 'lucide-react';

export const LocationDetails: React.FC = () => {
  const { params, navigateTo } = useNavigation();

  // Find attraction by id or default to Lake Geneva
  const locId = params.locationId || 'lake-geneva';
  const attraction = attractions.find(a => a.id === locId) || attractions[0];
  
  // Find associated destination country
  const dest = destinations.find(d => d.id === attraction.destinationId) || destinations[0];

  // Find associated travel package
  const pkg = packages.find(p => p.destinationId === dest.id) || packages[0];

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
      
      {/* 1. Cinematic Hero Banner */}
      <section className="location-hero" style={{
        height: '60vh',
        background: `linear-gradient(to bottom, rgba(9, 15, 29, 0.3), rgba(9, 15, 29, 0.85)), url("${attraction.gallery[0]}") no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '64px',
        color: '#fff'
      }}>
        <div className="container">
          <button 
            onClick={() => navigateTo('destination-details', { destinationId: dest.id })}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', marginBottom: '16px' }}
          >
            <ArrowLeft size={12} /> Back to {dest.name} Details
          </button>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--color-gold)', display: 'block', marginBottom: '8px' }}>
            Attraction Profile • {dest.country}
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {attraction.name}
          </h1>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="section-padding container location-grid-layout">
        
        {/* Main Details column */}
        <div>
          <span className="section-subtitle">The Backstory</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--color-forest-green)' }}>
            Description & History
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px' }}>
            {attraction.description}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '48px', borderLeft: '3px solid var(--color-gold)', paddingLeft: '24px', fontStyle: 'italic' }}>
            {attraction.history}
          </p>

          {/* Best Photography Spots (Editorial Highlight) */}
          <div className="glass-panel" style={{ padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-beige)', marginBottom: '48px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-forest-green)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Camera size={20} className="text-gold" /> Best Photography Spots
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {attraction.photographySpots.map((spot, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span className="bullet-num">{i + 1}</span>
                  <div>
                    <h5 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-forest-green)', marginBottom: '4px' }}>Composition Guideline</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{spot}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Traveler Reviews list */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '24px', color: 'var(--color-forest-green)' }}>
              Traveler Reviews
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {attraction.reviews.map((rev, idx) => (
                <div key={idx} className="review-card glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h5 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem' }}>{rev.author}</h5>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < rev.rating ? 'var(--color-gold)' : 'none'} color="var(--color-gold)" />
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>"{rev.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info panel column */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Visitor logistics card */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
            <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-forest-green)', marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
              Visitor Details
            </h3>

            <div className="visitor-stat-item">
              <Clock size={16} className="text-gold" />
              <div>
                <h5>Opening Hours</h5>
                <p>{attraction.openingHours}</p>
              </div>
            </div>

            <div className="visitor-stat-item">
              <Ticket size={16} className="text-gold" />
              <div>
                <h5>Admission Fee</h5>
                <p>{attraction.entryFee}</p>
              </div>
            </div>

            <div className="visitor-stat-item">
              <Compass size={16} className="text-gold" />
              <div>
                <h5>Recommended Duration</h5>
                <p>{attraction.recommendedDuration} ({attraction.suggestedTime})</p>
              </div>
            </div>
          </div>

          {/* Dining Nearby */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-forest-green)', marginBottom: '20px' }}>
              Fine Dining Nearby
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {attraction.restaurantsNearby.map((rest, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-gold)' }}>🍷</span> {rest}
                </li>
              ))}
            </ul>
          </div>

          {/* Custom Travel tips */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-forest-green)', color: 'var(--color-ivory)' }}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HeartHandshake size={16} /> Curator Insider Tips
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.8rem', opacity: 0.9 }}>
              {attraction.travelTips.map((tip, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span>✦</span> <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map placeholder */}
          <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'block', marginBottom: '8px' }}>Pinpoint mapping</span>
            <div style={{ height: '160px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#ebf0ed url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600") no-repeat center center/cover', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <MapPin size={24} style={{ color: '#c53030' }} />
                <span className="glass-panel-dark" style={{ fontSize: '0.6rem', color: '#fff', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', whiteSpace: 'nowrap' }}>{attraction.name}</span>
              </div>
            </div>
          </div>

        </aside>

      </section>

      {/* ─── COMPLETE TRIP PLAN (ITINERARY) ────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--color-beige)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <span className="section-subtitle">Plan of the Trip</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Complete Journey Itinerary</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '40px', maxWidth: '640px' }}>
            This famous place is visited as part of our premium curated package: <strong style={{ color: 'var(--color-forest-green)' }}>{pkg.name}</strong>. Below is the full day-by-day plan of the trip.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {pkg.itinerary.map((day) => {
              const isVisitingCurrent = day.visit.some(v => v.attractionId === attraction.id);
              return (
                <div 
                  key={day.day} 
                  style={{
                    backgroundColor: '#fff',
                    border: isVisitingCurrent ? '2px solid var(--color-gold)' : '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px',
                    position: 'relative',
                    transition: 'all 0.3s',
                    boxShadow: isVisitingCurrent ? '0 12px 30px rgba(220,160,40,0.12)' : 'none',
                  }}
                >
                  {isVisitingCurrent && (
                    <span style={{
                      position: 'absolute', top: '16px', right: '16px',
                      background: 'var(--color-gold)', color: 'var(--color-midnight-blue)',
                      fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase',
                      padding: '4px 10px', borderRadius: 'var(--radius-sm)', letterSpacing: '0.05em'
                    }}>
                      ⭐ Visiting This Attraction
                    </span>
                  )}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: 'var(--color-forest-green)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: '1.1rem'
                    }}>
                      {day.day}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--color-forest-green)', margin: 0 }}>
                        Day {day.day}: {day.title}
                      </h4>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <div>
                      <h5 style={{ fontWeight: 700, color: 'var(--color-midnight-blue)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><Sun size={14} className="text-gold" /> Morning</h5>
                      <p>{day.morning}</p>
                    </div>
                    <div>
                      <h5 style={{ fontWeight: 700, color: 'var(--color-midnight-blue)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><Sunset size={14} className="text-gold" /> Afternoon</h5>
                      <p>{day.afternoon}</p>
                    </div>
                    <div>
                      <h5 style={{ fontWeight: 700, color: 'var(--color-midnight-blue)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}><Moon size={14} className="text-gold" /> Evening</h5>
                      <p>{day.evening}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-border)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-forest-green)' }}>
                    <span>Meals: {day.meals.join(', ')}</span>
                    <span>Transit: {day.transportation}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => navigateTo('package-details', { packageId: pkg.id })}
              style={{
                padding: '16px 36px',
                background: 'var(--color-forest-green)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(20,42,32,0.22)',
                transition: 'transform 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
            >
              Book this Entire Journey (${pkg.price.toLocaleString()}) <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Nearby Attractions linked */}
      {attraction.nearbyAttractions.length > 0 && (
        <section style={{ backgroundColor: 'var(--color-beige)', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '32px' }}>Nearby Attractions to Explore</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              {attraction.nearbyAttractions.map((name, i) => (
                <div 
                  key={i} 
                  className="glass-panel" 
                  onClick={() => navigateTo('destinations')}
                  style={{
                    padding: '16px 28px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--color-forest-green)',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Map size={14} /> {name}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .visitor-stat-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding-bottom: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        .visitor-stat-item h5 {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-forest-green);
          margin-bottom: 2px;
        }
        .visitor-stat-item p {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .location-grid-layout {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        @media (max-width: 900px) {
          .location-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        .bullet-num {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: var(--color-gold);
          color: var(--color-midnight-blue);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .review-card {
          transition: all 0.3s;
        }
        .review-card:hover {
          border-color: rgba(20, 42, 32, 0.15) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </div>
  );
};
