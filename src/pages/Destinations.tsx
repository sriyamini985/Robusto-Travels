import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { destinations } from '../data/mockData';
import { Star, ArrowRight, SlidersHorizontal, Compass } from 'lucide-react';

export const Destinations: React.FC = () => {
  const { navigateTo } = useNavigation();
  
  // Filter States
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [maxBudget, setMaxBudget] = useState<number>(6000);
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');

  // Available unique fields for filtering
  const countries = useMemo(() => ['All', ...new Set(destinations.map(d => d.country))], []);
  const styles = useMemo(() => [
    'All', 
    'Adventure', 'Luxury', 'Beach', 'Wildlife', 'Mountains', 'Honeymoon', 'Family', 'Solo', 'Road Trips'
  ], []);

  // Filter Logic
  const filteredDestinations = useMemo(() => {
    return destinations.filter(d => {
      // Country Filter
      if (selectedCountry !== 'All' && d.country !== selectedCountry) return false;
      
      // Style Filter
      if (selectedStyle !== 'All' && d.category !== selectedStyle) return false;
      
      // Budget Filter
      if (d.price > maxBudget) return false;
      
      // Season Filter (simple text check in bestSeason or general matching)
      if (selectedSeason !== 'All') {
        const seasonLower = selectedSeason.toLowerCase();
        const destSeasonLower = d.bestSeason.toLowerCase();
        if (!destSeasonLower.includes(seasonLower)) return false;
      }

      // Duration Filter
      if (selectedDuration !== 'All') {
        const days = parseInt(d.duration);
        if (selectedDuration === 'short' && days >= 6) return false;
        if (selectedDuration === 'medium' && (days < 6 || days > 9)) return false;
        if (selectedDuration === 'long' && days < 10) return false;
      }

      return true;
    });
  }, [selectedCountry, selectedSeason, maxBudget, selectedStyle, selectedDuration]);

  const resetFilters = () => {
    setSelectedCountry('All');
    setSelectedSeason('All');
    setMaxBudget(6000);
    setSelectedStyle('All');
    setSelectedDuration('All');
  };

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
      
      {/* Editorial Header */}
      <section className="destinations-hero" style={{
        paddingTop: '180px',
        paddingBottom: '80px',
        background: 'linear-gradient(to bottom, var(--color-midnight-blue), #142a20)',
        color: 'var(--color-ivory)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-gold)' }}>Private Portfolios</span>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: 'var(--color-ivory)',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Explore The World
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6 }}>
            Browse our hand-selected private destinations. Each country offers a completely unique luxury narrative, from isolated alpine peaks to historical temple escapes.
          </p>
        </div>
      </section>

      {/* Filter and Content Layout */}
      <section className="container" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
        <div className="destinations-layout">
          
          {/* Sidebar Filter Panel */}
          <aside className="filter-sidebar glass-panel" style={{
            padding: '28px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)',
            height: 'fit-content',
            backgroundColor: '#fff'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
              <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                <SlidersHorizontal size={16} /> Filters
              </h3>
              <button onClick={resetFilters} style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase' }}>Reset All</button>
            </div>

            {/* Country Selector */}
            <div className="filter-section">
              <h4>Country</h4>
              <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="filter-select">
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Travel Style Selector */}
            <div className="filter-section">
              <h4>Travel Style</h4>
              <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)} className="filter-select">
                {styles.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Duration Selector */}
            <div className="filter-section">
              <h4>Duration</h4>
              <select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)} className="filter-select">
                <option value="All">All Durations</option>
                <option value="short">Short Escapes (&lt; 6 Days)</option>
                <option value="medium">Classic Journeys (6-9 Days)</option>
                <option value="long">Grand Expeditions (10+ Days)</option>
              </select>
            </div>

            {/* Season Selector */}
            <div className="filter-section">
              <h4>Season</h4>
              <select value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)} className="filter-select">
                <option value="All">All Seasons</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
            </div>

            {/* Budget Slider */}
            <div className="filter-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h4>Max Price</h4>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-forest-green)' }}>${maxBudget.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="6000" 
                step="100" 
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-forest-green)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', opacity: 0.6, marginTop: '4px' }}>
                <span>$1,000</span>
                <span>$6,000</span>
              </div>
            </div>
          </aside>

          {/* Grid of Results */}
          <main className="destinations-results">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Showing <strong>{filteredDestinations.length}</strong> luxurious portfolios
              </span>
            </div>

            {filteredDestinations.length === 0 ? (
              <div className="no-results glass-panel" style={{ padding: '64px', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
                <Compass size={48} className="text-gold" style={{ marginBottom: '16px', strokeWidth: 1 }} />
                <h3 style={{ marginBottom: '8px' }}>No matches found</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Try widening your budget filter or selecting different travel seasons.</p>
                <button onClick={resetFilters} className="btn-primary">Reset Filters</button>
              </div>
            ) : (
              <div className="destinations-grid">
                {filteredDestinations.map(d => (
                  <div key={d.id} className="luxury-dest-card" onClick={() => navigateTo('destination-details', { destinationId: d.id })}>
                    <div className="luxury-dest-img-wrap">
                      <img src={d.heroImage} alt={d.name} />
                      <div className="luxury-dest-meta">
                        <span>{d.duration}</span>
                        <span>•</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                          <Star size={10} fill="var(--color-gold)" color="var(--color-gold)" /> {d.rating}
                        </div>
                      </div>
                    </div>
                    <div className="luxury-dest-info">
                      <span className="info-country">{d.country}</span>
                      <h3 className="info-name">{d.name}</h3>
                      <p className="info-desc">{d.description}</p>
                      <div className="info-footer">
                        <div>
                          <span className="price-label">Starting Price</span>
                          <span className="price-val">${d.price.toLocaleString()}</span>
                        </div>
                        <button className="explore-btn">
                          Explore <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>

        </div>
      </section>

      <style>{`
        .destinations-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 40px;
        }
        
        .filter-section {
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--color-border);
        }
        .filter-section h4 {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-forest-green);
          margin-bottom: 12px;
        }
        .filter-select {
          width: 100%;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 10px;
          font-size: 0.85rem;
          background-color: var(--color-ivory);
          cursor: pointer;
        }

        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
        }

        /* Luxury card */
        .luxury-dest-card {
          background-color: #fff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .luxury-dest-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(20, 42, 32, 0.15);
        }
        .luxury-dest-img-wrap {
          height: 220px;
          overflow: hidden;
          position: relative;
        }
        .luxury-dest-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s;
        }
        .luxury-dest-card:hover .luxury-dest-img-wrap img {
          transform: scale(1.04);
        }
        .luxury-dest-meta {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background-color: rgba(9, 15, 29, 0.75);
          backdrop-filter: blur(8px);
          color: var(--color-ivory);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .luxury-dest-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .info-country {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-gold);
          font-weight: 600;
          margin-bottom: 6px;
        }
        .info-name {
          font-size: 1.4rem;
          margin-bottom: 10px;
        }
        .info-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
        }
        .info-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--color-border);
          padding-top: 16px;
        }
        .price-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          opacity: 0.6;
          display: block;
        }
        .price-val {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-forest-green);
        }
        .explore-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-forest-green);
          font-weight: 600;
          transition: transform 0.2s;
        }
        .luxury-dest-card:hover .explore-btn {
          color: var(--color-gold);
          transform: translateX(4px);
        }

        @media (max-width: 991px) {
          .destinations-layout {
            grid-template-columns: 1fr;
          }
          .filter-sidebar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
