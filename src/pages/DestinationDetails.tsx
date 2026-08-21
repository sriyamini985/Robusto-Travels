import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { getCountryData } from '../data/countries';
import { 
  ArrowRight, 
  Star, 
  Compass, 
  Calendar,
  Sparkles,
  Search
} from 'lucide-react';

export const DestinationDetails: React.FC = () => {
  const { params, navigateTo } = useNavigation();
  
  // Find destination data by slug (fall back to switzerland)
  const destId = params.destinationId || 'switzerland';
  const data = getCountryData(destId);

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery]           = useState<string>('');

  // Extract unique categories for filter pills
  const categories = ['All', ...Array.from(new Set(data.famousPlaces.map((p: any) => p.category || 'Iconic Landmark')))];

  // Filter famous places
  const filteredPlaces = data.famousPlaces.filter((p: any) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch   = (p.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (p.shortDesc || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        height: '46vh',
        minHeight: '380px',
        background: `linear-gradient(to bottom, rgba(7, 15, 36, 0.3), rgba(7, 15, 36, 0.98)), url("${data.heroImage}") no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '48px'
      }}>
        <div style={{
          maxWidth: '1240px',
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
              letterSpacing: '0.22em', 
              color: '#38bdf8', 
              fontWeight: 800 
            }}>
              Curated Destination Portfolio
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
          <p style={{ margin: '8px 0 0 0', fontSize: '1.02rem', color: 'rgba(255,255,255,0.85)', maxWidth: '650px', lineHeight: 1.6 }}>
            {data.intro}
          </p>
        </div>
      </section>

      {/* 2. Famous Places Section */}
      <section style={{ 
        background: '#040918', 
        padding: '60px 24px 100px',
        minHeight: '60vh'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', textAlign: 'center' }}>
            <span style={{ 
              fontSize: '0.78rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.22em', 
              color: '#38bdf8', 
              fontWeight: 800, 
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '8px'
            }}>
              <Sparkles size={16} /> Iconic Attractions & Destinations
            </span>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
              fontWeight: 800, 
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#fff'
            }}>
              Famous Places in {data.name} ({data.famousPlaces.length})
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.92rem', marginTop: '6px', maxWidth: '540px' }}>
              Explore the most celebrated landmarks, natural wonders, and cultural highlights belonging to {data.name}.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '44px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: '16px 24px',
            borderRadius: '20px'
          }}>
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat: any) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: selectedCategory === cat ? '#38bdf8' : 'rgba(255,255,255,0.05)',
                    color: selectedCategory === cat ? '#070f24' : 'rgba(255,255,255,0.8)',
                    border: selectedCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '8px 16px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.12)', 
              borderRadius: '12px', 
              padding: '8px 14px',
              minWidth: '240px' 
            }}>
              <Search size={14} color="rgba(255,255,255,0.5)" />
              <input 
                type="text"
                placeholder={`Search places in ${data.name}...`}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: '0.82rem', outline: 'none', width: '100%' }}
              />
            </div>
          </div>

          {/* Grid of Famous Places Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px' 
          }}>
            {filteredPlaces.map((place: any) => (
              <div 
                key={place.slug}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="famous-place-card"
              >
                {/* Image Container with Badges */}
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800';
                    }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="place-card-img"
                  />

                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7, 15, 36, 0.85) 0%, transparent 60%)'
                  }} />

                  {/* Category Pill Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(7, 15, 36, 0.8)',
                    backdropFilter: 'blur(10px)',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#38bdf8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Compass size={12} /> {place.category || 'Iconic Landmark'}
                  </div>

                  {/* Star Rating Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(7, 15, 36, 0.8)',
                    backdropFilter: 'blur(10px)',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 193, 7, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#ffc107'
                  }}>
                    <Star size={13} fill="#ffc107" color="#ffc107" />
                    <span>{place.rating ? place.rating.toFixed(2) : '4.90'}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.35rem', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
                    {place.name}
                  </h3>

                  <p style={{ 
                    fontSize: '0.88rem', 
                    color: 'rgba(255,255,255,0.72)', 
                    lineHeight: 1.65, 
                    marginBottom: '20px',
                    flex: 1 
                  }}>
                    {place.shortDesc}
                  </p>

                  {/* Footer Meta & Action Button */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: '16px',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.6)'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Calendar size={13} color="#38bdf8" /> Best Season: <strong style={{ color: '#fff' }}>{place.bestTimeToVisit || 'Apr – Oct'}</strong>
                    </span>

                    <button 
                      onClick={() => navigateTo('trip-details', { destinationId: data.slug, locationId: place.slug })}
                      style={{
                        background: '#1d4ed8',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '10px 18px',
                        color: '#fff',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.8rem',
                        transition: 'all 0.2s',
                        boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#2563eb';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#1d4ed8';
                        e.currentTarget.style.transform = '';
                      }}
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
              No attractions match your search query or category filter. Try selecting "All".
            </div>
          )}

        </div>
      </section>
      
      {/* CSS Hover Transitions */}
      <style>{`
        .famous-place-card:hover {
          transform: translateY(-8px);
          border-color: rgba(56, 189, 248, 0.4) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }
        .famous-place-card:hover .place-card-img {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
};
