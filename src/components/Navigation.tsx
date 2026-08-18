import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Menu, X, ChevronDown, Search, MapPin, Compass, ArrowRight, Settings } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { navigateTo, currentPage } = useNavigation();
  const [isScrolled, setIsScrolled]           = useState(false);
  const [isMobileOpen, setIsMobileOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown]   = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (page: any, params?: any) => {
    navigateTo(page, params);
    setIsMobileOpen(false);
    setActiveDropdown(null);
  };

  // Text color: white on dark pages when not scrolled
  const isDarkPage  = currentPage === 'landing' || currentPage === 'destinations' || currentPage === 'destination-details' || currentPage === 'trip-details';
  const textColor   = isScrolled ? '#0f172a' : isDarkPage ? '#fff' : '#0f172a';
  const logoGold    = isScrolled ? '#1d4ed8' : isDarkPage ? '#FFC107' : '#1d4ed8';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        transition: 'all 0.4s ease',
        background: isScrolled
          ? 'rgba(255,255,255,0.96)'
          : isDarkPage
            ? 'rgba(7, 15, 36, 0.4)'
            : 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(0,0,0,0.08)'
          : '1px solid rgba(255,255,255,0.15)',
        padding: isScrolled ? '10px 0' : '16px 0',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}>
        <div style={{
          maxWidth: '1400px', margin: '0 auto',
          padding: '0 32px',
          display: 'flex', alignItems: 'center', gap: '32px',
        }}>

          {/* ── Logo ── */}
          <div onClick={() => go('landing')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {/* Plane icon in circle */}
            <div style={{
              width: 38, height: 38,
              borderRadius: '50%',
              background: logoGold,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 2px 10px ${logoGold}55`,
              transition: 'background 0.4s',
            }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.06em', color: logoGold, lineHeight: 1, transition: 'color 0.4s' }}>
                ROBUSTO
              </div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: textColor, opacity: 0.8, textTransform: 'uppercase', lineHeight: 1, transition: 'color 0.4s' }}>
                TRAVELS
              </div>
            </div>
          </div>

          {/* ── Desktop Nav ── */}
          <nav style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }} className="desktop-nav-rt">
            {[
              { label: 'Home',         page: 'landing' },
              { label: 'Destinations', page: 'destinations', hasDropdown: true },
              { label: 'Packages',     page: 'destinations' },
              { label: 'Experiences',  page: 'experiences' },
              { label: 'About Us',     page: 'about' },
              { label: 'Contact',      page: 'contact' },
            ].map(item => (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span
                  onClick={() => go(item.page)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '3px',
                    padding: '8px 12px',
                    fontSize: '0.83rem',
                    fontWeight: currentPage === item.page ? 700 : 500,
                    color: currentPage === item.page ? (isScrolled || !isDarkPage ? '#1d4ed8' : '#FFC107') : textColor,
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                    whiteSpace: 'nowrap',
                    borderBottom: currentPage === item.page ? `2px solid ${isScrolled || !isDarkPage ? '#1d4ed8' : '#FFC107'}` : '2px solid transparent',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = isScrolled || !isDarkPage ? '#1d4ed8' : '#FFC107'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = currentPage === item.page ? (isScrolled || !isDarkPage ? '#1d4ed8' : '#FFC107') : textColor}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={12} />}
                </span>

                {/* Destinations dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    marginTop: '8px',
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    border: '1px solid #e2e8f0',
                    padding: '20px',
                    width: '440px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    zIndex: 200,
                    animation: 'dropIn 0.22s ease',
                  }}>
                    <div>
                      <h4 style={{ fontSize: '0.72rem', color: '#1d4ed8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Ethical Tours</h4>
                      {[
                        { label: 'Mumbai Dharavi', id: 'santorini' },
                        { label: 'Delhi Sanjay Colony', id: 'switzerland' },
                        { label: 'Rajasthan Heritage', id: 'maldives' },
                        { label: 'Kerala Backwaters', id: 'kyoto' },
                      ].map(d => (
                        <div key={d.id} onClick={() => go('destination-details', { destinationId: d.id })}
                          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 0', fontSize: '0.82rem', color: '#334155', cursor: 'pointer', borderBottom: '1px solid #f1f5f9', transition: 'color 0.2s' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1d4ed8'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#334155'}>
                          <MapPin size={12} color="#1d4ed8" /> {d.label}
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.72rem', color: '#1d4ed8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Luxury Escapes</h4>
                      {[
                        { label: 'Swiss Alpine Grandeur', id: 'switzerland-luxury' },
                        { label: 'Dubai Modern Oasis', id: 'dubai' },
                        { label: 'Kyoto & Tokyo Heritage', id: 'japan' },
                        { label: 'Bali Tropical Sanctuary', id: 'bali' },
                      ].map(d => (
                        <div key={d.id} onClick={() => go('destination-details', { destinationId: d.id })}
                          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 0', fontSize: '0.82rem', color: '#334155', cursor: 'pointer', borderBottom: '1px solid #f1f5f9', transition: 'color 0.2s' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1d4ed8'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#334155'}>
                          <Compass size={12} color="#f59e0b" /> {d.label}
                        </div>
                      ))}
                    </div>
                    <div style={{ gridColumn: '1/-1', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
                      <button onClick={() => go('destinations')} style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        color: '#1d4ed8', fontSize: '0.78rem', fontWeight: 700,
                        background: 'none', border: 'none', cursor: 'pointer',
                      }}>
                        View all destinations <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── Right actions ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, transition: 'color 0.4s', padding: '6px' }}>
              <Search size={18} />
            </button>
            <button 
              onClick={() => go('admin-image-manager')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, transition: 'color 0.4s', padding: '6px' }}
              title="Destination Image Manager"
            >
              <Settings size={18} />
            </button>
            <button
              onClick={() => go('booking')}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 20px',
                background: '#FFC107',
                color: '#0f172a',
                border: 'none',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(255,193,7,0.4)',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(255,193,7,0.55)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(255,193,7,0.4)'; }}
            >
              ✈ Book Journey
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, display: 'none' }}
              className="nav-mobile-toggle"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      {isMobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: '#fff',
          display: 'flex', flexDirection: 'column',
          padding: '80px 32px 32px',
          animation: 'slideDown 0.3s ease',
        }}>
          <button onClick={() => setIsMobileOpen(false)} style={{
            position: 'absolute', top: '20px', right: '24px',
            background: '#f1f5f9', border: 'none', borderRadius: '10px',
            width: 40, height: 40, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <X size={20} />
          </button>
          {[
            { label: 'Home',         page: 'landing' },
            { label: 'Destinations', page: 'destinations' },
            { label: 'Packages',     page: 'destinations' },
            { label: 'Experiences',  page: 'experiences' },
            { label: 'About Us',     page: 'about' },
            { label: 'Contact',      page: 'contact' },
          ].map(item => (
            <div key={item.label} onClick={() => go(item.page)} style={{
              fontSize: '1.5rem', fontWeight: 700, color: '#0f172a',
              padding: '14px 0', borderBottom: '1px solid #f1f5f9',
              cursor: 'pointer',
            }}>
              {item.label}
            </div>
          ))}
          <button onClick={() => go('booking')} style={{
            marginTop: '24px', padding: '14px', background: '#FFC107',
            border: 'none', borderRadius: '12px', fontWeight: 800,
            fontSize: '1rem', cursor: 'pointer',
          }}>
            ✈ Book Journey
          </button>
        </div>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1024px) {
          .desktop-nav-rt { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
};
