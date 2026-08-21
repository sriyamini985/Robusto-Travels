import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer style={{ 
      backgroundColor: 'var(--color-midnight-blue)', 
      color: 'var(--color-ivory)', 
      paddingTop: '80px', 
      paddingBottom: '40px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      fontFamily: 'var(--font-body)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '48px', 
          marginBottom: '64px' 
        }}>
          
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#000000',
                border: '1.5px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(255, 193, 7, 0.25)',
                flexShrink: 0
              }}>
                <img 
                  src="/images/logo.png" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  alt="Robusto Travels" 
                />
              </div>
              <div>
                <span style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '1.4rem', 
                  letterSpacing: '0.2em', 
                  color: 'var(--color-gold)',
                  display: 'block',
                  marginBottom: '2px',
                  fontWeight: 800
                }}>
                  ROBUSTO VERSE
                </span>
                <span style={{ 
                  fontSize: '0.62rem', 
                  letterSpacing: '0.22em', 
                  textTransform: 'uppercase', 
                  opacity: 0.6 
                }}>
                  Discover Beyond Expectations
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.6, maxWidth: '280px' }}>
              Crafting highly bespoke, ultra-luxury travel experiences for travelers seeking raw natural beauty, absolute comfort, and rich storytelling.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
              <a href="https://www.instagram.com/robustotravels/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/Robusto-Travels-101085689066700" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/robusto-travels/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Direct Navigation */}
          <div>
            <h4 style={{ 
              color: 'var(--color-gold)', 
              textTransform: 'uppercase', 
              fontSize: '0.8rem', 
              letterSpacing: '0.2em', 
              marginBottom: '24px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600
            }}>
              Direct Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <li><span onClick={() => navigateTo('landing')} className="footer-link">Home Portal</span></li>
              <li><span onClick={() => navigateTo('destinations')} className="footer-link">Featured Destinations</span></li>
              <li><span onClick={() => navigateTo('experiences')} className="footer-link">Private Experiences</span></li>
              <li><span onClick={() => navigateTo('blog')} className="footer-link">Travel Magazine</span></li>
              <li><span onClick={() => navigateTo('about')} className="footer-link">About Our Brand</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ 
              color: 'var(--color-gold)', 
              textTransform: 'uppercase', 
              fontSize: '0.8rem', 
              letterSpacing: '0.2em', 
              marginBottom: '24px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600
            }}>
              The Concierge
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.85rem', opacity: 0.8 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} className="text-gold" />
                <span>+91 89770 22822</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} className="text-gold" />
                <span>info.robustotravels@gmail.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} className="text-gold" style={{ marginTop: '3px' }} />
                <div>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '32px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.75rem',
          opacity: 0.5
        }} className="footer-bottom">
          <p>© 2026 Robusto Verse. Crafted for Elite Nomads. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          cursor: pointer;
          opacity: 0.75;
          transition: all 0.3s;
          display: inline-block;
        }
        .footer-link:hover {
          opacity: 1;
          color: var(--color-gold);
          transform: translateX(4px);
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--color-ivory);
          transition: all 0.3s;
        }
        .social-icon:hover {
          border-color: var(--color-gold);
          color: var(--color-gold);
          transform: translateY(-2px);
        }
        .newsletter-form {
          display: flex;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 8px;
          transition: border-color 0.3s;
        }
        .newsletter-form:focus-within {
          border-color: var(--color-gold);
        }
        .newsletter-input {
          flex: 1;
          background: none;
          border: none;
          color: var(--color-ivory);
          font-size: 0.85rem;
          padding: 4px;
        }
        .newsletter-input::placeholder {
          color: rgba(255,255,255,0.4);
        }
        .newsletter-submit {
          background: none;
          border: none;
          color: var(--color-gold);
          cursor: pointer;
          padding: 4px 8px;
          transition: transform 0.3s;
        }
        .newsletter-submit:hover {
          transform: translateX(3px);
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
};
