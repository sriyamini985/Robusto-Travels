import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Compass, Star, Globe, Plane, Hotel, FileText, Bus, Sparkles, Umbrella } from 'lucide-react';

export const About: React.FC = () => {

  const team = [
    {
      name: 'Aditya Vardhan',
      role: 'Co-Founder & Travel Curator',
      bio: 'Co-founded Robusto Travels with a passion for designing the perfect blend of adventure and relaxation for global travelers.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Sarah Lin',
      role: 'Destination Specialist',
      bio: 'Personally visits each destination, from the beaches of Bali to the peaks of the Swiss Alps, to verify local activities.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
    },
    {
      name: 'Nikhil Kumar',
      role: 'Guest Experience Coordinator',
      bio: 'Manages flights, hotel bookings, transfers, and wellness bookings to ensure your journey is smooth and stress-free.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
    }
  ];

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
      
      {/* Editorial Header */}
      <section className="about-hero" style={{
        paddingTop: '180px',
        paddingBottom: '80px',
        background: 'linear-gradient(to bottom, var(--color-midnight-blue), #0b1532)',
        color: 'var(--color-ivory)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-gold)' }}>Part of RobustoVerse</span>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: 'var(--color-ivory)',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em'
          }}>
            Robusto Travels
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', opacity: 0.9, lineHeight: 1.7, fontWeight: 500 }}>
            Welcome to Robusto Travels, where we believe that the only thing better than traveling the world is traveling to the moon! Okay, maybe we're not quite there yet, but we're working on it.
          </p>
        </div>
      </section>

      {/* 1. Brand Story & Mission */}
      <section className="section-padding container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }}>
        <div>
          <span className="section-subtitle">Our Passion</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '24px', color: 'var(--color-forest-green)' }}>
            Exploring Without Hesitation
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '20px' }}>
            Our team of travel enthusiasts is passionate about discovering new places and having fun along the way. We believe that travel is not just about seeing new sights, but also about trying new foods, meeting new people, and having unforgettable experiences. That's why we've handpicked the best destinations around the world that offer a perfect blend of adventure and relaxation.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '32px' }}>
            From the sunny beaches of Bali to the snowy peaks of the Swiss Alps, from the bustling streets of Tokyo to the historic landmarks of Rome, we've got you covered. We've personally visited each destination to ensure that we can provide you with the most accurate and up-to-date information. And who knows? Maybe one day we'll even offer moon tours!
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-forest-green)', marginBottom: '8px' }}>Our Mission</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>To connect you with Earth's most breathtaking places, handling all details so you can focus purely on the joy of discovery.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-forest-green)', marginBottom: '8px' }}>Our Vision</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>To become your lifetime travel curator, ensuring every trip makes you laugh, feel relaxed, and reach for the stars.</p>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" 
            alt="Traveler standing on a mountain peak looking at scenery" 
            style={{ borderRadius: 'var(--radius-lg)', width: '100%', height: '480px', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }}
          />
        </div>
      </section>

      {/* 2. Core Pillars (Why Us) */}
      <section style={{ backgroundColor: 'var(--color-beige)', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container">
          <div className="section-title-container" style={{ textAlign: 'center' }}>
            <span className="section-subtitle">Robusto Core Values</span>
            <h2 className="section-title">The Robusto Standard</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '48px' }}>
            
            <div className="pillar-card glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', backgroundColor: '#fff', border: '1px solid var(--color-border)' }}>
              <div className="pillar-icon"><Compass size={20} /></div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-forest-green)', marginBottom: '12px' }}>Handpicked & Vetted</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>We have personally visited every destination on our platform. From Bali to the Swiss Alps, we guarantee that you get accurate, up-to-date recommendations.</p>
            </div>

            <div className="pillar-card glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', backgroundColor: '#fff', border: '1px solid var(--color-border)' }}>
              <div className="pillar-icon"><ShieldCheck size={20} /></div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-forest-green)', marginBottom: '12px' }}>Stress-Free Guarantee</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>We manage your flights, hotel stays, airport pickups, local guidance, and even schedule massage/yoga sessions so that you can relax completely.</p>
            </div>

            <div className="pillar-card glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', backgroundColor: '#fff', border: '1px solid var(--color-border)' }}>
              <div className="pillar-icon"><HeartHandshake size={20} /></div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-forest-green)', marginBottom: '12px' }}>Joy & Laughter</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>We promise to make you laugh, guide you to the finest spots, and make your dreams come true. One day, we might even take you to the moon!</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── OUR SERVICES SECTION (LIGHT THEME) ── */}
      <section style={{
        backgroundColor: 'var(--color-ivory)',
        paddingTop: '96px',
        paddingBottom: '96px',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          {/* Header */}
          <div className="section-title-container" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
          </div>

          {/* Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(265px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                icon: Globe,
                title: 'Tours',
                description: 'International and Domestic tours in your budget. Experience Unique Tours.'
              },
              {
                icon: Plane,
                title: 'Airline Tickets',
                description: 'Book your International and Domestic Airline Tickets.'
              },
              {
                icon: Hotel,
                title: 'Hotel Bookings',
                description: 'We offer a wide selection of hotel ranging from 5-star ones to small properties located worldwide so that you could book a hotel you like.'
              },
              {
                icon: FileText,
                title: 'Visa Services',
                description: 'Hassle free Tourist visa services all over the globe with proper documentation.'
              },
              {
                icon: Bus,
                title: 'Bus/Train/Taxi booking',
                description: 'Scheduled transport bus tickets, train tickets, tourist bus booking and tourist taxi booking.'
              },
              {
                icon: Compass,
                title: 'Holy land & pilgrimage tour',
                description: 'Discover the historic, cultural, religious & scenic sites of Jerusalem, Israel & Egypt. India is prestigious as a conspicuous spot of Hindu, Buddhist, Sikh, Christian and Muslim religion.'
              },
              {
                icon: Sparkles,
                title: 'Hajj/ Umrah Services',
                description: 'Hajj and Umrah Holy tour packages for the Indian Muslim pilgrims. Book package online at best price and get premium service.'
              },
              {
                icon: Umbrella,
                title: 'Party Tours',
                description: 'Experience the Vibe of the Place. We offer Party tours such as Boat Parties, Destination Birthday Parties, etc.'
              }
            ].map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div 
                  key={idx}
                  className="service-card-light"
                  style={{
                    background: '#fff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '32px 24px',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                    cursor: 'default',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                  }}
                >
                  {/* Icon Container */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(217, 119, 6, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    color: 'var(--color-gold)',
                    transition: 'transform 0.3s ease'
                  }} className="service-icon-box">
                    <IconComponent size={24} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--color-forest-green)',
                    margin: '0 0 12px 0',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {srv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CSS for Light Cards */}
        <style>{`
          .service-card-light:hover {
            transform: translateY(-6px);
            border-color: var(--color-gold);
            box-shadow: 0 12px 24px rgba(0,0,0,0.06);
          }
          .service-card-light:hover .service-icon-box {
            transform: scale(1.1);
          }
        `}</style>
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
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Adventure Choice Award</h4>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Best Destination Curator 2025</span>
          </div>

          <div className="award-item">
            <Star size={36} style={{ color: 'var(--color-gold)', marginBottom: '12px' }} />
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>WTM Premium Award</h4>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Outstanding Travel Experience Leader</span>
          </div>

          <div className="award-item">
            <ShieldCheck size={36} style={{ color: 'var(--color-gold)', marginBottom: '12px' }} />
            <h4 style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Outlook Traveller</h4>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Best Premium Leisure Agency</span>
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
