import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Compass, Star } from 'lucide-react';

export const About: React.FC = () => {

  const team = [
    {
      name: 'Chris Way',
      role: 'Co-Founder',
      bio: 'Co-founded Reality Tours & Travel in 2006 with a vision to challenge negative stereotypes about slums and create a self-sustaining social enterprise.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Krishna Pujari',
      role: 'Co-Founder',
      bio: 'Pioneered our local community integration in Mumbai, training resident guides and ensuring local consent for every tour route.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Reality Gives',
      role: 'Sister NGO Partner',
      bio: 'Our local non-profit partner running English, computer learning, and youth sports classes inside Dharavi and Delhi Sanjay Colony.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
    }
  ];

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
      
      {/* Editorial Header */}
      <section className="about-hero" style={{
        paddingTop: '180px',
        paddingBottom: '80px',
        background: 'linear-gradient(to bottom, var(--color-midnight-blue), #142a20)',
        color: 'var(--color-ivory)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-gold)' }}>Our Ethos</span>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: 'var(--color-ivory)',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Ethical Tours & Social Enterprise
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6 }}>
            A social business dedicated to showing the industrious reality of local Indian communities while funding education.
          </p>
        </div>
      </section>

      {/* 1. Brand Story & Mission */}
      <section className="section-padding container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }}>
        <div>
          <span className="section-subtitle">Our Journey</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '24px', color: 'var(--color-forest-green)' }}>
            Real Communities Since 2006
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '20px' }}>
            Reality Tours & Travel was founded in Mumbai by Chris Way and Krishna Pujari. Inspired by ethical tours in other parts of the world, they wanted to introduce educational walking tours of Dharavi to show the positive, industrious reality of the residents and break negative media stereotypes.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '32px' }}>
            We expanded our ethical model to Delhi Sanjay Colony, Rajasthan, Kerala, and Agra. In every location, we enforce strict policies like a complete ban on photography inside slums to respect residents' privacy. Most importantly, 80% of our post-tax profits fund educational classrooms run by our sister NGO, Reality Gives.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-forest-green)', marginBottom: '8px' }}>Our Mission</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>To provide high-quality educational travel experiences that challenge stereotypes, foster local respect, and fund community classrooms.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-forest-green)', marginBottom: '8px' }}>Our Vision</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>To show that travel can be a direct mechanism for wealth distribution, raising local dignity, and enabling long-term community employment.</p>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=800" 
            alt="Local community guides and youth in India" 
            style={{ borderRadius: 'var(--radius-lg)', width: '100%', height: '480px', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }}
          />
        </div>
      </section>

      {/* 2. Core Pillars (Why Us) */}
      <section style={{ backgroundColor: 'var(--color-beige)', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container">
          <div className="section-title-container" style={{ textAlign: 'center' }}>
            <span className="section-subtitle">Responsible Tourism</span>
            <h2 className="section-title">The Ethical Difference</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '48px' }}>
            
            <div className="pillar-card glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', backgroundColor: '#fff', border: '1px solid var(--color-border)' }}>
              <div className="pillar-icon"><HeartHandshake size={20} /></div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-forest-green)', marginBottom: '12px' }}>80% Profit Donation</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>We donate 80% of our post-tax profits to Reality Gives. Your booking fees pay for local teachers, English modules, and computer labs in Dharavi and Delhi.</p>
            </div>

            <div className="pillar-card glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', backgroundColor: '#fff', border: '1px solid var(--color-border)' }}>
              <div className="pillar-icon"><ShieldCheck size={20} /></div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-forest-green)', marginBottom: '12px' }}>Dignity & "No Photography"</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>We strictly prohibit photography inside slums. Visitors explore as guests rather than spectators, encouraging genuine conversations with families.</p>
            </div>

            <div className="pillar-card glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', backgroundColor: '#fff', border: '1px solid var(--color-border)' }}>
              <div className="pillar-icon"><Compass size={20} /></div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-forest-green)', marginBottom: '12px' }}>Resident Guides</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Our local guides are trained bilingual residents. They share real stories about their neighborhoods, businesses, and lives without scripted staging.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Meet the Curators */}
      <section className="section-padding container">
        <div className="section-title-container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Our Team</span>
          <h2 className="section-title">The Founders & Partners</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '48px' }}>
          {team.map((t, idx) => (
            <div key={idx} style={{ textAlign: 'center' }} className="team-member-card">
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 24px', border: '2px solid var(--color-gold)', padding: '4px' }}>
                <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-forest-green)', marginBottom: '6px' }}>{t.name}</h4>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 600, display: 'block', marginBottom: '12px' }}>{t.role}</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: '280px', margin: '0 auto' }}>{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Credentials & Awards */}
      <section style={{ backgroundColor: 'var(--color-forest-green)', color: 'var(--color-ivory)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center', alignItems: 'center' }}>
          
          <div className="award-item">
            <Award size={36} style={{ color: 'var(--color-gold)', marginBottom: '12px' }} />
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TO DO Award Winner</h4>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Socially Responsible Tourism 2020</span>
          </div>

          <div className="award-item">
            <Star size={36} style={{ color: 'var(--color-gold)', marginBottom: '12px' }} />
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>WTM Global Award</h4>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Responsible Tourism Leader</span>
          </div>

          <div className="award-item">
            <ShieldCheck size={36} style={{ color: 'var(--color-gold)', marginBottom: '12px' }} />
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Outlook Traveller</h4>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Best Indian Social Enterprise Agency</span>
          </div>

        </div>
      </section>

      <style>{`
        .pillar-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--color-beige);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .pillar-card {
          transition: all 0.3s;
        }
        .pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(20, 42, 32, 0.15) !important;
        }

        .team-member-card {
          transition: all 0.3s;
        }
        .team-member-card:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
};
