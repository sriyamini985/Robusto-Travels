import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { experiences } from '../data/mockData';
import { Compass, Clock, CheckCircle } from 'lucide-react';

export const Experiences: React.FC = () => {
  const { params, navigateTo } = useNavigation();

  // Find active experience based on params or default to dharavi slum walk
  const activeExpId = params.experienceId || 'dharavi-slum-walk';
  const [activeTab, setActiveTab] = useState<string>(activeExpId);

  const selectedExp = experiences.find(e => e.id === activeTab) || experiences[0];

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
      
      {/* Editorial Header */}
      <section className="experiences-hero" style={{
        paddingTop: '160px',
        paddingBottom: '80px',
        background: 'linear-gradient(to bottom, var(--color-midnight-blue), #142a20)',
        color: 'var(--color-ivory)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-gold)' }}>Signature Escapes</span>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            color: 'var(--color-ivory)',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Bespoke Portfolios
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6 }}>
            Step outside standard tour itineraries. Our private signature portfolios represent the pinnacle of curated luxury expeditions.
          </p>
        </div>
      </section>

      {/* Main Tabbed Grid */}
      <section className="container" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
        
        {/* Experience tabs selector */}
        <div className="experience-tabs">
          {experiences.map(exp => (
            <button 
              key={exp.id} 
              onClick={() => setActiveTab(exp.id)}
              className={`exp-tab-btn ${activeTab === exp.id ? 'active' : ''}`}
            >
              {exp.name}
            </button>
          ))}
        </div>

        {/* Selected Experience Detail Grid */}
        <div className="experience-showcase-grid">
          
          {/* Main Showcase Panel */}
          <div>
            <div style={{ height: '420px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '32px', boxShadow: 'var(--shadow-md)' }}>
              <img src={selectedExp.heroImage} alt={selectedExp.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <span className="section-subtitle">The Experience</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '24px', color: 'var(--color-forest-green)' }}>
              {selectedExp.name}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
              {selectedExp.details}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-forest-green)', marginBottom: '20px' }}>
                Expedition Highlights
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {selectedExp.highlights.map((hl, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span className="bullet-hl"><Compass size={14} /></span>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{hl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Booking & Inclusions */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Quick Pricing & Duration Box */}
            <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, display: 'block' }}>Average Duration</span>
              <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--color-forest-green)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={18} className="text-gold" /> {selectedExp.duration}
              </h4>
              
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.6, display: 'block' }}>Pricing Starts From</span>
              <h4 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '28px' }}>
                ${selectedExp.price.toLocaleString()} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ guest</span>
              </h4>

              <button 
                onClick={() => navigateTo('booking')} 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Inquire Journey
              </button>
            </div>

            {/* Inclusions */}
            <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-forest-green)', marginBottom: '20px' }}>
                What Is Included
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {selectedExp.included.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle size={14} className="text-gold" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concierge quote */}
            <div className="glass-panel" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-forest-green)', color: 'var(--color-ivory)', textAlign: 'center' }}>
              <p style={{ fontStyle: 'italic', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.5 }}>
                "We design small-group walks and food crawls focusing on local interaction, absolute safety, and direct community donations."
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase' }}>Krishna Pujari • Co-Founder</span>
            </div>

          </aside>

        </div>
      </section>

      <style>{`
        .experience-tabs {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 56px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 20px;
        }
        .exp-tab-btn {
          padding: 12px 28px;
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          border: 1px solid var(--color-border);
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .exp-tab-btn:hover {
          color: var(--color-gold);
          border-color: var(--color-gold);
        }
        .exp-tab-btn.active {
          background-color: var(--color-forest-green);
          color: var(--color-ivory);
          border-color: var(--color-forest-green);
        }

        .experience-showcase-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 60px;
        }

        .bullet-hl {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: var(--color-beige);
          color: var(--color-gold);
        }

        @media (max-width: 991px) {
          .experience-showcase-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
