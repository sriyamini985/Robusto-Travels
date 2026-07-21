import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { packages, hotels } from '../data/mockData';
import { MapPin, ArrowLeft, Sun, Sunset, Moon, Utensils, Car, Compass } from 'lucide-react';

export const Itinerary: React.FC = () => {
  const { params, navigateTo } = useNavigation();

  // Find package or fallback
  const pkgId = params.packageId || 'mumbai-local-package';
  const pkg = packages.find(p => p.id === pkgId) || packages[0];

  // Active day filter for tabbed reading
  const [activeDay, setActiveDay] = useState<number>(1);
  const currentDayData = pkg.itinerary.find(i => i.day === activeDay) || pkg.itinerary[0];

  // Associated hotel data
  const currentHotel = hotels.find(h => h.id === currentDayData.hotelId);

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
      
      {/* Header bar */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '48px',
        background: 'linear-gradient(to bottom, var(--color-midnight-blue), var(--color-forest-green))',
        color: 'var(--color-ivory)',
        textAlign: 'center'
      }}>
        <div className="container">
          <button 
            onClick={() => navigateTo('package-details', { packageId: pkg.id })}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', marginBottom: '16px' }}
          >
            <ArrowLeft size={12} /> Back to Package Details
          </button>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.6, display: 'block', marginBottom: '8px' }}>
            Day-Wise Log • {pkg.duration}
          </span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {pkg.name} Itinerary
          </h1>
        </div>
      </section>

      {/* Main Body Grid */}
      <section className="container" style={{ paddingTop: '48px', paddingBottom: '96px' }}>
        
        {/* Day selection tabs */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px', 
          marginBottom: '48px',
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '16px'
        }}>
          {pkg.itinerary.map(item => (
            <button 
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`day-tab-btn ${activeDay === item.day ? 'active' : ''}`}
            >
              Day {item.day}
            </button>
          ))}
        </div>

        {/* Detailed Day Layout */}
        <div className="itinerary-detail-layout">
          
          {/* Timeline Schedule */}
          <div>
            <span className="section-subtitle">Chronology</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '32px', color: 'var(--color-forest-green)' }}>
              Day {currentDayData.day}: {currentDayData.title}
            </h2>

            {/* Visit highlights */}
            {currentDayData.visit.length > 0 && (
              <div className="itinerary-visits-box">
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-forest-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Key Locations:
                </span>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
                  {currentDayData.visit.map(v => (
                    <button 
                      key={v.attractionId} 
                      onClick={() => navigateTo('location-details', { locationId: v.attractionId })}
                      className="visit-link-btn"
                    >
                      <MapPin size={12} className="text-gold" /> {v.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Morning, Afternoon, Evening details */}
            <div className="day-schedule-periods">
              
              <div className="period-block">
                <div className="period-header">
                  <Sun size={18} className="text-gold" />
                  <h4>Morning Schedule</h4>
                </div>
                <p>{currentDayData.morning}</p>
              </div>

              <div className="period-block">
                <div className="period-header">
                  <Sunset size={18} className="text-gold" />
                  <h4>Afternoon Schedule</h4>
                </div>
                <p>{currentDayData.afternoon}</p>
              </div>

              <div className="period-block" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <div className="period-header">
                  <Moon size={18} className="text-gold" />
                  <h4>Evening Schedule</h4>
                </div>
                <p>{currentDayData.evening}</p>
              </div>

            </div>
          </div>

          {/* Logistics & Accommodation column */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Daily stats panel */}
            <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1rem', color: 'var(--color-forest-green)', marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
                Day {currentDayData.day} Logistics
              </h3>

              <div className="logistics-item">
                <Utensils size={16} className="text-gold" />
                <div>
                  <h5>Meals Provided</h5>
                  <p>{currentDayData.meals.join(', ')}</p>
                </div>
              </div>

              <div className="logistics-item">
                <Car size={16} className="text-gold" />
                <div>
                  <h5>Transportation</h5>
                  <p>{currentDayData.transportation}</p>
                </div>
              </div>

              <div className="logistics-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <Compass size={16} className="text-gold" />
                <div>
                  <h5>Included Activities</h5>
                  <p>{currentDayData.activities.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Hotel lodging highlight */}
            {currentHotel && (
              <div 
                className="glass-panel hotel-highlight-card" 
                onClick={() => navigateTo('hotel-details', { hotelId: currentHotel.id })}
                style={{
                  padding: '32px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-gold)', letterSpacing: '0.1em', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  Overnight Accommodation
                </span>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{currentHotel.name}</h4>
                <div style={{ height: '140px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '16px' }}>
                  <img src={currentHotel.gallery[0]} alt={currentHotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
                  {currentHotel.description.slice(0, 100)}...
                </p>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-forest-green)', fontWeight: 600 }}>View Hotel Suites →</span>
              </div>
            )}

            {/* Custom Google Map placeholder */}
            <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, display: 'block', marginBottom: '8px' }}>Daily route tracking</span>
              <div style={{ height: '160px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#ebf0ed url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600") no-repeat center center/cover' }} />
            </div>

          </aside>

        </div>
      </section>

      <style>{`
        .day-tab-btn {
          padding: 10px 24px;
          border-radius: var(--radius-full);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          border: 1px solid var(--color-border);
          transition: all 0.3s;
        }
        .day-tab-btn:hover {
          color: var(--color-gold);
          border-color: var(--color-gold);
        }
        .day-tab-btn.active {
          background-color: var(--color-forest-green);
          color: var(--color-ivory);
          border-color: var(--color-forest-green);
        }

        .itinerary-detail-layout {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 60px;
        }

        .itinerary-visits-box {
          background-color: var(--color-beige);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 32px;
        }
        .visit-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background-color: #fff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-forest-green);
          transition: all 0.2s;
        }
        .visit-link-btn:hover {
          background-color: var(--color-gold);
          color: var(--color-midnight-blue);
          border-color: var(--color-gold);
          transform: translateY(-2px);
        }

        .day-schedule-periods {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .period-block {
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 24px;
        }
        .period-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .period-header h4 {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--color-forest-green);
        }
        .period-block p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .logistics-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding-bottom: 12px;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--color-border);
        }
        .logistics-item h5 {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-forest-green);
          margin-bottom: 2px;
        }
        .logistics-item p {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .hotel-highlight-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(20, 42, 32, 0.15) !important;
        }

        @media (max-width: 991px) {
          .itinerary-detail-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
