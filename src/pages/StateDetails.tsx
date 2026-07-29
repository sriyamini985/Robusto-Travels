import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { getStateData } from '../data/india';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { 
  ArrowLeft, 
  Star, 
  Calendar, 
  Search, 
  Utensils, 
  Sun,
  ArrowRight
} from 'lucide-react';

export const StateDetails: React.FC = () => {
  const { params, navigateTo } = useNavigation();
  const stateId = params.destinationId || 'andhra-pradesh';

  const stateData = getStateData(stateId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Available unique categories
  const categories = useMemo(() => {
    const set = new Set(stateData.famousPlaces.map(p => p.category));
    return ['All', ...Array.from(set)];
  }, [stateData]);

  // Filter famous places
  const filteredPlaces = useMemo(() => {
    return stateData.famousPlaces.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.overview.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [stateData, searchQuery, selectedCategory]);

  return (
    <div style={{ backgroundColor: '#050a18', color: '#fff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* 1. Hero Banner */}
      <section style={{
        position: 'relative',
        minHeight: '440px',
        background: `linear-gradient(to bottom, rgba(5, 10, 24, 0.4), rgba(5, 10, 24, 0.98)), url("${stateData.heroImage}") no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '48px',
        paddingTop: '120px'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 24px', zIndex: 2 }}>
          
          {/* Back button */}
          <button 
            onClick={() => navigateTo('landing')}
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
              fontWeight: 700
            }}
          >
            <ArrowLeft size={14} /> Back to Global Earth
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🇮🇳</span>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#ffc107', fontWeight: 800 }}>
              {stateData.type} of India • Capital: {stateData.capital}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 800, margin: 0, color: '#fff' }}>
            {stateData.name}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginTop: '8px', maxWidth: '720px' }}>
            {stateData.tagline}
          </p>
        </div>
      </section>

      {/* 2. Quick Info Bar */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '24px',
          padding: '24px'
        }}>
          <div>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>
              Best Time to Visit
            </span>
            <strong style={{ fontSize: '0.92rem', color: '#ffc107', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={14} /> {stateData.bestTime}
            </strong>
          </div>

          <div>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>
              Climate
            </span>
            <strong style={{ fontSize: '0.92rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sun size={14} /> Tropical to Temperate
            </strong>
          </div>

          <div>
            <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '4px' }}>
              Famous Local Cuisine
            </span>
            <strong style={{ fontSize: '0.92rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Utensils size={14} /> {stateData.famousFood.slice(0, 2).join(', ')}
            </strong>
          </div>
        </div>
      </section>

      {/* 3. About State Narrative */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 48px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 12px 0', color: '#fff' }}>
          Explore {stateData.name}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.02rem', lineHeight: 1.8, margin: 0 }}>
          {stateData.about}
        </p>
      </section>

      {/* 4. Famous Places Header & Filters */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#38bdf8', fontWeight: 800 }}>
              Popular Attractions ({filteredPlaces.length})
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0 0 0', color: '#fff' }}>
              Famous Places in {stateData.name}
            </h2>
          </div>

          {/* Search bar */}
          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={16} color="rgba(255,255,255,0.5)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder={`Search ${stateData.name}...`}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 40px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '20px',
                color: '#fff',
                fontSize: '0.85rem'
              }}
            />
          </div>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '24px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: selectedCategory === cat ? 800 : 500,
                background: selectedCategory === cat ? '#38bdf8' : 'rgba(255,255,255,0.04)',
                color: selectedCategory === cat ? '#0f172a' : 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredPlaces.map((place, idx) => (
            <div 
              key={idx}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                {/* Image */}
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <ImageWithFallback 
                    src={place.image} 
                    alt={place.name} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    <Star size={12} fill="#ffc107" color="#ffc107" />
                    <span>{place.rating.toFixed(2)}</span>
                  </div>
                </div>

                {/* Card Info */}
                <div style={{ padding: '20px' }}>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#38bdf8', fontWeight: 800 }}>
                    {place.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '6px 0 10px 0', color: '#fff' }}>
                    {place.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                    {place.overview}
                  </p>
                </div>
              </div>

              <div style={{ padding: '0 20px 20px 20px' }}>
                <button 
                  onClick={() => navigateTo('trip-details', { destinationId: stateData.id, locationId: place.slug })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: '14px',
                    color: '#38bdf8',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'}
                >
                  Explore Attraction <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
