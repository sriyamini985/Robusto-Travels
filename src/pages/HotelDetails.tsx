import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { hotels, destinations } from '../data/mockData';
import { ArrowLeft, Star, Bed, Users, ShieldCheck } from 'lucide-react';

export const HotelDetails: React.FC = () => {
  const { params, navigateTo } = useNavigation();

  // Find hotel or default
  const hotId = params.hotelId || 'alpine-retreat';
  const hotel = hotels.find(h => h.id === hotId) || hotels[0];
  const dest = destinations.find(d => d.id === hotel.destinationId) || destinations[0];

  // Selected suite for quick enquiry
  const [selectedSuite, setSelectedSuite] = useState(hotel.rooms[0]?.name || 'Standard suite');
  const [submitted, setSubmitted] = useState(false);
  const [guestCount, setGuestCount] = useState(2);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      // Take directly to booking or contact
      navigateTo('booking');
    }, 2000);
  };

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
      
      {/* 1. Large Luxury Gallery Hero */}
      <section className="hotel-gallery-hero" style={{
        height: '65vh',
        background: `linear-gradient(to bottom, rgba(9, 15, 29, 0.2), rgba(9, 15, 29, 0.85)), url("${hotel.gallery[0]}") no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '64px',
        color: '#fff'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <button 
              onClick={() => navigateTo('destination-details', { destinationId: dest.id })}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', marginBottom: '16px' }}
            >
              <ArrowLeft size={12} /> Back to {dest.name} Details
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="var(--color-gold)" color="var(--color-gold)" />
                ))}
              </div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>5-Star Sanctuary</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {hotel.name}
            </h1>
          </div>
          <div className="glass-panel" style={{ padding: '12px 24px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, display: 'block' }}>Rates From</span>
            <span style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--color-gold)' }}>${hotel.rooms[0]?.price.toLocaleString()}</span>
            <span style={{ fontSize: '0.75rem', opacity: 0.8 }}> / night</span>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Inquiry Panel */}
      <section className="section-padding container hotel-grid-layout">
        
        {/* Main Details column */}
        <div>
          <span className="section-subtitle">Sanctuary Details</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--color-forest-green)' }}>
            Bespoke Comfort & Serenity
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
            {hotel.description}
          </p>

          {/* Amenities Grid */}
          <div style={{ marginBottom: '48px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '24px', color: 'var(--color-forest-green)', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
              Exclusive Amenities
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
              {hotel.amenities.map((amen, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-beige)',
                    color: 'var(--color-gold)',
                    fontSize: '0.7rem'
                  }}>✔</span>
                  <span>{amen}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suites Room Grid */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '24px', color: 'var(--color-forest-green)', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
              Luxury Suites & Villas
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {hotel.rooms.map((room, idx) => (
                <div 
                  key={idx} 
                  className="suite-room-card glass-panel"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.5fr',
                    gap: '24px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--color-border)',
                    backgroundColor: '#fff',
                    padding: '16px'
                  }}
                >
                  <div style={{ height: '220px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <img src={room.image} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '12px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-forest-green)' }}>{room.name}</h4>
                        <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-forest-green)' }}>${room.price.toLocaleString()}</span>
                      </div>
                      
                      {/* Room specs */}
                      <div style={{ display: 'flex', gap: '16px', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Bed size={12} /> {room.size}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={12} /> Max {room.maxGuests} guests</span>
                      </div>
                      
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {room.description}
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                      <button 
                        onClick={() => {
                          setSelectedSuite(room.name);
                          const el = document.getElementById('inquiry-form-card');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-secondary"
                        style={{ padding: '8px 20px', fontSize: '0.65rem' }}
                      >
                        Enquire This Suite
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Booking Inquiry column */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'sticky', top: '100px' }}>
          
          {/* Form Inquiry */}
          <div id="inquiry-form-card" className="glass-panel" style={{
            padding: '36px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            backgroundColor: '#fff',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-forest-green)', marginBottom: '12px' }}>Suite Enquiry</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
              Submit a direct concierge request for lodgings at <strong>{hotel.name}</strong>.
            </p>

            <form onSubmit={handleInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 600, opacity: 0.8 }}>Selected Suite</label>
                <select 
                  value={selectedSuite} 
                  onChange={(e) => setSelectedSuite(e.target.value)} 
                  style={{ width: '100%', border: '1px solid var(--color-border)', padding: '10px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}
                >
                  {hotel.rooms.map((room, i) => (
                    <option key={i} value={room.name}>{room.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 600, opacity: 0.8 }}>Guests</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="4" 
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    style={{ width: '100%', border: '1px solid var(--color-border)', padding: '10px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }} 
                  />
                </div>
                <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 600, opacity: 0.8 }}>Check In</label>
                  <input 
                    type="date" 
                    required
                    style={{ width: '100%', border: '1px solid var(--color-border)', padding: '8px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }} 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', backgroundColor: 'var(--color-forest-green)', color: '#fff', marginTop: '8px' }}
                disabled={submitted}
              >
                {submitted ? 'Inquiry Sent ✓' : 'Submit Inquiry'}
              </button>
            </form>

            {submitted && (
              <div style={{ marginTop: '16px', display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--color-gold)', fontSize: '0.75rem' }}>
                <ShieldCheck size={16} /> <span>Connecting with Elena (Head of Concierge)...</span>
              </div>
            )}
          </div>

          {/* Location details summary */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-forest-green)', marginBottom: '12px' }}>
              Sanctuary Location
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
              {hotel.locationDetails}
            </p>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-forest-green)' }}>Nearby: {hotel.nearbyAttractions.join(' • ')}</span>
          </div>

        </aside>
      </section>

      <style>{`
        .hotel-grid-layout {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        @media (max-width: 900px) {
          .hotel-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        .suite-room-card {
          transition: all 0.3s;
        }
        .suite-room-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(20, 42, 32, 0.15) !important;
        }
        @media (max-width: 768px) {
          .suite-room-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
