import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { getCountryData } from '../data/countries';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Sun, 
  Coffee, 
  Car, 
  Compass, 
  CheckCircle2, 
  HelpCircle, 
  Star 
} from 'lucide-react';

export const TripDetails: React.FC = () => {
  const { params, navigateTo } = useNavigation();

  const destId = params.destinationId || 'switzerland';
  const placeSlug = params.locationId || 'zermatt';

  const countryData = getCountryData(destId);
  const place = countryData.famousPlaces.find((p: any) => p.slug === placeSlug) || countryData.famousPlaces[0];

  return (
    <div style={{ 
      backgroundColor: '#070f24', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: "'Plus Jakarta Sans', sans-serif" 
    }}>
      {/* 1. Cinematic Hero Banner */}
      <section style={{
        position: 'relative',
        height: '50vh',
        minHeight: '380px',
        background: `linear-gradient(to bottom, rgba(7, 15, 36, 0.3), rgba(7, 15, 36, 0.95)), url("${place.image}") no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '48px'
      }}>
        <div style={{
          maxWidth: '1100px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px',
          zIndex: 2
        }}>
          <button 
            onClick={() => navigateTo('destination-details', { destinationId: countryData.slug })}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '0.78rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: '#38bdf8', 
              marginBottom: '16px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              padding: 0
            }}
          >
            <ArrowLeft size={14} /> Back to {countryData.name} Places
          </button>
          <span style={{ 
            fontSize: '0.7rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.25em', 
            color: '#38bdf8', 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: 700
          }}>
            Famous Destination • {countryData.name}
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', 
            fontWeight: 800, 
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#fff',
            textShadow: '0 4px 15px rgba(0,0,0,0.5)'
          }}>
            {place.name}
          </h1>
        </div>
      </section>

      {/* 2. Place Details Section */}
      <section style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '50px 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1.8fr 1fr',
        gap: '48px',
        alignItems: 'flex-start'
      }}>
        
        {/* Left Column: About place & Special Highlights */}
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#38bdf8', fontWeight: 700 }}>About This Place</span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '8px 0 20px 0', color: '#fff' }}>Excursion Profile</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '40px' }}>
            {place.overview}
          </p>

          {/* Famous Things & Key Highlights */}
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 24px 0', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
            Special Things About {place.name}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px',
              padding: '24px'
            }}>
              <h4 style={{ fontWeight: 700, fontSize: '0.98rem', color: '#38bdf8', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={18} /> Signature Experience
              </h4>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                {place.shortDesc}
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px',
              padding: '24px'
            }}>
              <h4 style={{ fontWeight: 700, fontSize: '0.98rem', color: '#f59e0b', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sun size={18} /> Best Time To Visit
              </h4>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                Recommended season: <strong>{place.bestTimeToVisit}</strong> for clear views, vibrant atmosphere, and local sightseeing.
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px',
              padding: '24px'
            }}>
              <h4 style={{ fontWeight: 700, fontSize: '0.98rem', color: '#10b981', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star size={18} fill="#10b981" /> Explorer Rating
              </h4>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                Rated <strong>{place.rating.toFixed(2)}/5</strong> by global travelers for landmark scenery, heritage, and unique photo spots.
              </p>
            </div>
          </div>

          {/* Special Attractions / Features */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '24px', 
            marginBottom: '48px' 
          }}>
            <div style={{
              background: 'rgba(16, 185, 129, 0.03)',
              border: '1px solid rgba(16, 185, 129, 0.15)',
              borderRadius: '20px',
              padding: '24px'
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#10b981', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} /> Famous Features & Highlights
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                {place.included.map((inc: string, i: number) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{inc}</li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'rgba(56, 189, 248, 0.03)',
              border: '1px solid rgba(56, 189, 248, 0.15)',
              borderRadius: '20px',
              padding: '24px'
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38bdf8', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={16} /> Key Logistics & Notes
              </h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                {place.excluded.map((exc: string, i: number) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{exc}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Gallery */}
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 20px 0', color: '#fff' }}>Chronicles & Gallery</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
            {place.gallery.map((img: string, i: number) => (
              <div key={i} style={{ height: '160px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                <img src={img} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          {/* FAQs */}
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 20px 0', color: '#fff' }}>Frequently Asked Questions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
            {place.faqs.map((faq: any, i: number) => (
              <div key={i} style={{ 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '20px', 
                borderRadius: '16px' 
              }}>
                <h5 style={{ fontSize: '0.92rem', fontWeight: 700, margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8' }}>
                  <HelpCircle size={14} /> {faq.q}
                </h5>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 20px 0', color: '#fff' }}>Traveler Reviews</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {place.reviews.map((rev: any, i: number) => (
              <div key={i} style={{ 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '20px', 
                borderRadius: '16px' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{rev.author}</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} size={12} fill={sIdx < rev.rating ? '#ffc107' : 'none'} color="#ffc107" />
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
                  "{rev.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Place Info & Location Map (NO MONEY / FARE / BOOKING BUTTON) */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '100px' }}>
          
          {/* Quick Info Card */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '28px'
          }}>
            <h4 style={{ margin: '0 0 20px 0', fontSize: '0.95rem', textTransform: 'uppercase', color: '#38bdf8', letterSpacing: '0.1em', fontWeight: 700 }}>
              Destination Profile
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={16} color="#38bdf8" />
                <span style={{ fontSize: '0.88rem' }}>Typical Stay: <strong>{place.duration}</strong></span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Coffee size={16} color="#eab308" />
                <span style={{ fontSize: '0.88rem' }}>Dining Style: <strong>{place.meals}</strong></span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Car size={16} color="#10b981" />
                <span style={{ fontSize: '0.88rem' }}>Local Transit: <strong>{place.transport}</strong></span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Compass size={16} color="#a855f7" />
                <span style={{ fontSize: '0.88rem' }}>Activities: <strong>{place.activities}</strong></span>
              </div>
            </div>
          </div>

          {/* Famous Accommodations */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '24px'
          }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '0.92rem', textTransform: 'uppercase', color: '#38bdf8', letterSpacing: '0.1em' }}>
              Top Accommodations
            </h4>
            {place.hotels.map((hotel: any, idx: number) => (
              <div key={idx} style={{ 
                marginBottom: idx === place.hotels.length - 1 ? 0 : '16px',
                paddingBottom: idx === place.hotels.length - 1 ? 0 : '16px',
                borderBottom: idx === place.hotels.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{hotel.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <Star size={12} fill="#ffc107" color="#ffc107" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 700 }}>{hotel.rating}</span>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>
                  {hotel.description}
                </p>
              </div>
            ))}
          </div>

          {/* Map Location */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '20px'
          }}>
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '8px' }}>
              Geographic Location
            </span>
            <div style={{ 
              height: '160px', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              background: '#0d1e4a url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600") no-repeat center center/cover', 
              position: 'relative' 
            }}>
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
              }}>
                <MapPin size={24} style={{ color: '#ef4444', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }} />
                <span style={{ 
                  fontSize: '0.6rem', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '6px', 
                  marginTop: '4px', 
                  whiteSpace: 'nowrap',
                  background: 'rgba(7, 15, 36, 0.85)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {place.name}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};
