import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { packages, destinations } from '../data/mockData';
import { Calendar, Users, CheckCircle, XCircle, Luggage, CloudSun, ChevronRight } from 'lucide-react';

export const PackageDetails: React.FC = () => {
  const { params, navigateTo, updateBooking } = useNavigation();

  // Find package by id or fallback to Mumbai Local Package
  const pkgId = params.packageId || 'mumbai-local-package';
  const pkg = packages.find(p => p.id === pkgId) || packages[0];
  
  // Find associated destination
  const dest = destinations.find(d => d.id === pkg.destinationId) || destinations[0];

  const handleBookNow = () => {
    updateBooking({
      packageId: pkg.id,
      packageName: pkg.name,
      pricePerGuest: pkg.price
    });
    navigateTo('booking');
  };

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)' }}>
      {/* 1. Immersive Hero Banner */}
      <section className="pkg-details-hero" style={{
        height: '60vh',
        background: `linear-gradient(to bottom, rgba(9, 15, 29, 0.25), rgba(9, 15, 29, 0.85)), url("${pkg.heroImage}") no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '64px',
        color: '#fff'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', fontWeight: 600 }}>
              <span>{pkg.duration}</span>
              <span>•</span>
              <span>{dest.name} Signature Package</span>
            </div>
            <h1 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              color: 'var(--color-ivory)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginTop: '8px',
              lineHeight: 1.2
            }}>
              {pkg.name}
            </h1>
          </div>
          <div>
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, display: 'block', textAlign: 'right' }}>All-Inclusive Fare</span>
            <span style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-gold)' }}>${pkg.price.toLocaleString()}</span>
            <span style={{ fontSize: '0.75rem', opacity: 0.8, display: 'block', textAlign: 'right' }}>/ guest</span>
          </div>
        </div>
      </section>

      {/* 2. Package Overview & Booking CTA Widget */}
      <section className="section-padding container" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '64px', alignItems: 'flex-start' }}>
        
        {/* Left main content column */}
        <div>
          <span className="section-subtitle">The Journey</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--color-forest-green)' }}>
            Expedition Overview
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '48px' }}>
            {pkg.overview}
          </p>

          {/* Complete Itinerary Timeline Component */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem' }}>Day-wise Itinerary</h3>
              <button 
                onClick={() => navigateTo('itinerary', { packageId: pkg.id })} 
                className="btn-text" 
                style={{ fontSize: '0.75rem' }}
              >
                Expand Detailed Day View <ChevronRight size={14} />
              </button>
            </div>

            <div className="itinerary-timeline">
              {pkg.itinerary.map((day) => (
                <div key={day.day} className="timeline-day-item">
                  <div className="timeline-marker">
                    <span>{day.day}</span>
                  </div>
                  <div className="timeline-content-card glass-panel" onClick={() => navigateTo('itinerary', { packageId: pkg.id })}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-forest-green)' }}>
                        {day.title}
                      </h4>
                      <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', backgroundColor: 'var(--color-beige)', padding: '4px 10px', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
                        {day.transportation}
                      </span>
                    </div>
                    
                    {/* Visits links */}
                    {day.visit.length > 0 && (
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                        {day.visit.map(v => (
                          <span 
                            key={v.attractionId}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateTo('location-details', { locationId: v.attractionId });
                            }}
                            className="visit-tag"
                          >
                            Visit: {v.name}
                          </span>
                        ))}
                      </div>
                    )}

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {day.morning.slice(0, 120)}...
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', fontSize: '0.75rem', opacity: 0.8 }}>
                      <span>Meals: {day.meals.join(', ')}</span>
                      <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>View Day Breakdown →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusions & Inclusions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '56px' }}>
            <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-forest-green)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} className="text-gold" /> Costs Included
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {pkg.includes.map((inc, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-gold)' }}>✔</span> {inc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-forest-green)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <XCircle size={18} style={{ color: '#c53030' }} /> Costs Excluded
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {pkg.excludes.map((exc, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#c53030' }}>✘</span> {exc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar (Booking Inquiry CTA Box) */}
        <aside style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Reservation Card */}
          <div className="glass-panel" style={{
            padding: '36px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            backgroundColor: '#fff',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-forest-green)', marginBottom: '16px' }}>Reserve Journey</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
              Lock in your luxury accommodations and private guides. Instantly syncs with our billing & flight desks.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div className="reserve-option">
                <Users size={16} />
                <div>
                  <span style={{ fontSize: '0.65rem', opacity: 0.6, display: 'block' }}>Travelers</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>2 Guests (Standard double)</span>
                </div>
              </div>
              <div className="reserve-option">
                <Calendar size={16} />
                <div>
                  <span style={{ fontSize: '0.65rem', opacity: 0.6, display: 'block' }}>Departure Date</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Custom Date Selector in booking</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleBookNow}
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', backgroundColor: 'var(--color-forest-green)', color: '#fff' }}
            >
              Book This Package
            </button>
            <span style={{ display: 'block', textAlign: 'center', fontSize: '0.65rem', opacity: 0.6, marginTop: '12px' }}>
              No immediate charges. Fully cancelable 30 days prior.
            </span>
          </div>

          {/* Packing Guide & Weather Panel */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-forest-green)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Luggage size={16} className="text-gold" /> Packing Blueprint
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {pkg.packingGuide.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--color-gold)' }}>•</span> {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-border)', alignItems: 'center' }}>
              <CloudSun size={28} className="text-gold" />
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, display: 'block', color: 'var(--color-forest-green)' }}>Destination Weather</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{dest.weather.slice(0, 70)}...</span>
              </div>
            </div>
          </div>

        </aside>

      </section>

      <style>{`
        .itinerary-timeline {
          position: relative;
          padding-left: 32px;
        }
        .itinerary-timeline::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 11px;
          bottom: 12px;
          width: 2px;
          background-color: var(--color-border);
        }
        .timeline-day-item {
          position: relative;
          margin-bottom: 24px;
        }
        .timeline-marker {
          position: absolute;
          left: -32px;
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--color-forest-green);
          color: var(--color-ivory);
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--color-ivory);
          z-index: 2;
        }
        .timeline-content-card {
          background-color: #fff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .timeline-content-card:hover {
          transform: translateX(4px);
          border-color: rgba(20, 42, 32, 0.15);
          box-shadow: var(--shadow-sm);
        }
        
        .visit-tag {
          font-size: 0.65rem;
          background-color: var(--color-beige);
          color: var(--color-forest-green);
          padding: 3px 8px;
          border-radius: var(--radius-full);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .visit-tag:hover {
          background-color: var(--color-gold);
          color: var(--color-midnight-blue);
        }

        .reserve-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background-color: var(--color-beige);
          border-radius: var(--radius-md);
          color: var(--color-forest-green);
        }
      `}</style>
    </div>
  );
};
