import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { X, Send, CheckCircle, MapPin, User, Phone, Mail, Sparkles } from 'lucide-react';

export const QuoteModal: React.FC = () => {
  const { quoteModal, closeQuoteModal, navigateTo } = useNavigation();
  
  const [departure, setDeparture] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Reset state when modal opens/closes
  useEffect(() => {
    if (quoteModal.isOpen) {
      setDeparture('');
      setName('');
      setPhone('');
      setEmail('');
      setIsSubmitted(false);
      setErrors({});
    }
  }, [quoteModal.isOpen]);

  if (!quoteModal.isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!departure.trim()) newErrors.departure = 'Departure city is required';
    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[0-9\s\-]{8,15}$/.test(phone.trim())) newErrors.phone = 'Invalid phone number';
    if (!email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) newErrors.email = 'Invalid email address';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger submission success state
    setIsSubmitted(true);

    // Redirect to the destination details page after a beautiful transition
    setTimeout(() => {
      closeQuoteModal();
      navigateTo(quoteModal.isState ? 'state-details' : 'destination-details', { 
        destinationId: quoteModal.destinationId 
      });
    }, 2200);
  };

  const handleSkip = () => {
    closeQuoteModal();
    navigateTo(quoteModal.isState ? 'state-details' : 'destination-details', { 
      destinationId: quoteModal.destinationId 
    });
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'rgba(3, 7, 18, 0.85)',
      backdropFilter: 'blur(16px)',
      animation: 'modalFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      {/* Modal Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        background: 'linear-gradient(135deg, #0b1532 0%, #070f24 100%)',
        border: '1.5px solid rgba(56, 189, 248, 0.25)',
        borderRadius: '30px',
        boxShadow: '0 25px 80px rgba(0, 240, 255, 0.15), 0 0 50px rgba(0,0,0,0.9)',
        overflow: 'hidden',
        animation: 'modalScaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}>
        
        {/* Decorative Top Glow Bar */}
        <div style={{
          height: '4px',
          background: 'linear-gradient(90deg, #38bdf8, #ffc107, #38bdf8)',
          width: '100%'
        }} />

        {/* Close Button */}
        <button 
          onClick={handleSkip}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer',
            transition: 'all 0.25s',
            zIndex: 10
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
            e.currentTarget.style.color = '#ef4444';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
          }}
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} style={{ padding: '36px 40px' }}>
            
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #1d4ed8 100%)',
                borderRadius: '12px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(56, 189, 248, 0.3)'
              }}>
                <Sparkles size={20} color="#fff" />
              </div>
              <div>
                <h3 style={{
                  margin: 0,
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  Get a Bespoke Quote
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#ffc107', fontWeight: 700, letterSpacing: '0.03em' }}>
                  Tailored Curated Proposal
                </span>
              </div>
            </div>

            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.5,
              margin: '0 0 28px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              paddingBottom: '16px'
            }}>
              Share your details below and our custom travel designer will reach out with a personalized, high-end travel blueprint.
            </p>

            {/* Form Fields Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Destination & Departure Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 800, color: 'rgba(255,255,255,0.5)', marginBottom: '6px', letterSpacing: '0.05em' }}>
                    Destination
                  </label>
                  <div style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '12px',
                    color: '#ffc107',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <MapPin size={14} color="#ffc107" />
                    <span>{quoteModal.destinationName}</span>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 800, color: 'rgba(255,255,255,0.5)', marginBottom: '6px', letterSpacing: '0.05em' }}>
                    Departure City <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad"
                    value={departure}
                    onChange={e => setDeparture(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid ${errors.departure ? '#ef4444' : 'rgba(255,255,255,0.12)'}`,
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.88rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'all 0.25s'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#38bdf8'}
                    onBlur={e => e.currentTarget.style.borderColor = errors.departure ? '#ef4444' : 'rgba(255,255,255,0.12)'}
                  />
                  {errors.departure && <span style={{ display: 'block', color: '#ef4444', fontSize: '0.68rem', marginTop: '4px' }}>{errors.departure}</span>}
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 800, color: 'rgba(255,255,255,0.5)', marginBottom: '6px', letterSpacing: '0.05em' }}>
                  Full Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={14} color="rgba(255,255,255,0.4)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 38px',
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid ${errors.name ? '#ef4444' : 'rgba(255,255,255,0.12)'}`,
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.88rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'all 0.25s'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#38bdf8'}
                    onBlur={e => e.currentTarget.style.borderColor = errors.name ? '#ef4444' : 'rgba(255,255,255,0.12)'}
                  />
                </div>
                {errors.name && <span style={{ display: 'block', color: '#ef4444', fontSize: '0.68rem', marginTop: '4px' }}>{errors.name}</span>}
              </div>

              {/* Phone & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 800, color: 'rgba(255,255,255,0.5)', marginBottom: '6px', letterSpacing: '0.05em' }}>
                    Phone Number <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={14} color="rgba(255,255,255,0.4)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        background: 'rgba(255,255,255,0.05)',
                        border: `1px solid ${errors.phone ? '#ef4444' : 'rgba(255,255,255,0.12)'}`,
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '0.88rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'all 0.25s'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = '#38bdf8'}
                      onBlur={e => e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                  {errors.phone && <span style={{ display: 'block', color: '#ef4444', fontSize: '0.68rem', marginTop: '4px' }}>{errors.phone}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 800, color: 'rgba(255,255,255,0.5)', marginBottom: '6px', letterSpacing: '0.05em' }}>
                    Email Address <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={14} color="rgba(255,255,255,0.4)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        background: 'rgba(255,255,255,0.05)',
                        border: `1px solid ${errors.email ? '#ef4444' : 'rgba(255,255,255,0.12)'}`,
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '0.88rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'all 0.25s'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = '#38bdf8'}
                      onBlur={e => e.currentTarget.style.borderColor = errors.email ? '#ef4444' : 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                  {errors.email && <span style={{ display: 'block', color: '#ef4444', fontSize: '0.68rem', marginTop: '4px' }}>{errors.email}</span>}
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '36px' }}>
              <button 
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'linear-gradient(90deg, #1d4ed8 0%, #38bdf8 100%)',
                  border: 'none',
                  borderRadius: '14px',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(56, 189, 248, 0.35)',
                  transition: 'all 0.25s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(56, 189, 248, 0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(56, 189, 248, 0.35)';
                }}
              >
                Submit Request <Send size={14} />
              </button>

              <button 
                type="button"
                onClick={handleSkip}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  textDecoration: 'underline'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                Skip & View Destinations details
              </button>
            </div>

            {/* Bottom Trust badge banner */}
            <div style={{
              textAlign: 'center',
              fontSize: '0.68rem',
              color: 'rgba(255,255,255,0.3)',
              marginTop: '32px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: '16px',
              letterSpacing: '0.02em'
            }}>
              1200+ Travel Experts &nbsp;|&nbsp; 40 Lac+ Travellers &nbsp;|&nbsp; 65+ Destinations
            </div>

          </form>
        ) : (
          /* Submission Success State Page */
          <div style={{
            padding: '60px 40px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.5s ease'
          }}>
            <div style={{
              width: '72px',
              height: '72px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981',
              marginBottom: '24px',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
              animation: 'checkmarkPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
              <CheckCircle size={40} />
            </div>

            <h3 style={{
              margin: '0 0 10px 0',
              fontSize: '1.45rem',
              fontWeight: 900,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Quote Request Received!
            </h3>
            
            <p style={{
              margin: '0 0 24px 0',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              maxWidth: '380px'
            }}>
              Your custom proposal is being compiled. Redirecting you to look at the spectacular local highlights of <strong>{quoteModal.destinationName}</strong> now...
            </p>

            {/* Glowing Spinner */}
            <div style={{
              width: '28px',
              height: '28px',
              border: '3px solid rgba(56, 189, 248, 0.2)',
              borderTopColor: '#38bdf8',
              borderRadius: '50%',
              animation: 'spinnerSpin 0.8s linear infinite'
            }} />

          </div>
        )}

      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScaleIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes checkmarkPop {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes spinnerSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
