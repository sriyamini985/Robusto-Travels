import React, { useState } from 'react';
import { Mail, Phone, Send, MessageCircle, ShieldCheck } from 'lucide-react';
import { WEB3FORMS_CONFIG } from '../config/web3forms';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Web3Forms Integration
    if (WEB3FORMS_CONFIG.accessKey && WEB3FORMS_CONFIG.accessKey !== 'YOUR_ACCESS_KEY_HERE') {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_CONFIG.accessKey,
            subject: `New Contact Inquiry from ${formData.name}`,
            from_name: "Robusto Travels Portal",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            destination: formData.destination,
            message: formData.message
          })
        });
      } catch (err) {
        console.error('Failed to submit form to Web3Forms:', err);
      }
    } else {
      console.log('Web3Forms accessKey not configured. Simulating submission.');
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
      
      {/* Editorial Header */}
      <section className="contact-hero" style={{
        paddingTop: '180px',
        paddingBottom: '80px',
        background: 'linear-gradient(to bottom, var(--color-midnight-blue), #0b1532)',
        color: 'var(--color-ivory)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-gold)' }}>Contact Desk</span>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: 'var(--color-ivory)',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em'
          }}>
            Initiate Conversation
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6 }}>
            Connect with our travel curation team to coordinate your custom itineraries, bookings, and dream getaways.
          </p>
        </div>
      </section>

      {/* Contact Grid layout */}
      <section className="container section-padding contact-grid-layout">
        
        {/* Office Details Column */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div className="glass-panel" style={{ padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
            <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-forest-green)', marginBottom: '24px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
              Direct Access
            </h3>

            <div className="contact-info-item">
              <Mail className="text-gold" size={18} />
              <div>
                <h5>General Inquiries</h5>
                <p>info.robustotravels@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <Phone className="text-gold" size={18} />
              <div>
                <h5>Robusto Travels Desk</h5>
                <p>+91 89770 22822</p>
                <p style={{ fontSize: '0.7rem', opacity: 0.6 }}>Monday - Sunday (9:00 AM - 6:00 PM IST)</p>
              </div>
            </div>

            <div className="contact-info-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <MessageCircle className="text-gold" size={18} />
              <div>
                <h5>WhatsApp Coordinator</h5>
                <a href="https://wa.me/918977022822" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                  Click to chat direct
                </a>
              </div>
            </div>
          </div>

        </aside>

        {/* Contact Form Column */}
        <main className="glass-panel" style={{
          padding: '48px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          backgroundColor: '#fff',
          boxShadow: 'var(--shadow-md)'
        }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '16px', color: 'var(--color-forest-green)' }}>
            Tell Us About Your Journey
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.6 }}>
            Our travel curation team responds within two hours to assist with flight and hotel bookings, custom packages, and private group tours.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Marie Lacroix" 
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="e.g. marie@lacroix.com" 
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-group">
                <label>Phone / WhatsApp Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="e.g. +33 6 1234 5678" 
                />
              </div>
              <div className="form-group">
                <label>Preferred Destination</label>
                <input 
                  type="text" 
                  value={formData.destination}
                  onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                  placeholder="e.g. Kyoto, Japan or Bali, Indonesia" 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Special Requests & Coordinator Notes</label>
              <textarea 
                rows={5} 
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Let us know your travel dates, group size, preferred activities, or special assistance requests..."
              />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', border: '1px solid var(--color-forest-green)', backgroundColor: 'var(--color-forest-green)', color: '#fff' }}>
              Send Inquiry <Send size={12} />
            </button>
          </form>

          {submitted && (
            <div className="success-banner animate-fade-in" style={{
              marginTop: '24px',
              padding: '16px 20px',
              backgroundColor: 'var(--color-beige)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: 'var(--color-forest-green)'
            }}>
              <ShieldCheck size={20} className="text-gold" />
              <div>
                <h5 style={{ fontWeight: 600, fontSize: '0.85rem' }}>Inquiry Received Successfully</h5>
                <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>A travel curator will contact you shortly to finalize your booking details and customize your journey.</p>
              </div>
            </div>
          )}
        </main>

      </section>

      <style>{`
        .contact-info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding-bottom: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        .contact-info-item h5 {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-forest-green);
          margin-bottom: 2px;
        }
        .contact-info-item p {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .contact-grid-layout {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          gap: 64px;
          align-items: flex-start;
        }
        @media (max-width: 900px) {
          .contact-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-group label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          opacity: 0.85;
          color: var(--color-forest-green);
        }
        .form-group input, .form-group textarea {
          width: 100%;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          font-size: 0.85rem;
          font-family: var(--font-body);
          background-color: var(--color-ivory);
          transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--color-gold);
        }
      `}</style>
    </div>
  );
};
