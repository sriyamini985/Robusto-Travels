import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { packages } from '../data/mockData';
import { Calendar, CreditCard, User, CheckCircle2, AlertCircle } from 'lucide-react';

export const Booking: React.FC = () => {
  const { booking, updateBooking, resetBooking, navigateTo } = useNavigation();

  // Step state: 1: Traveler, 2: Customs, 3: Payment, 4: Confirmation
  const [step, setStep] = useState<number>(1);
  const [errors, setErrors] = useState<string>('');

  // Local form captures
  const [name, setName] = useState(booking.name || '');
  const [email, setEmail] = useState(booking.email || '');
  const [phone, setPhone] = useState(booking.phone || '');
  const [selectedPkgId, setSelectedPkgId] = useState(booking.packageId || 'mumbai-local-package');
  const [startDate, setStartDate] = useState(booking.startDate || '');
  const [guestsCount, setGuestsCount] = useState(booking.guests || 2);
  const [specialReq, setSpecialReq] = useState(booking.specialRequests || '');
  const [agreedToPolicies, setAgreedToPolicies] = useState(false);
  
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Find active package pricing
  const activePkg = packages.find(p => p.id === selectedPkgId) || packages[0];
  const totalPrice = activePkg.price * guestsCount;

  const handleNextStep = () => {
    if (step === 1) {
      if (!name || !email) {
        setErrors('Name and Email are required.');
        return;
      }
      setErrors('');
      updateBooking({ name, email, phone });
      setStep(2);
    } else if (step === 2) {
      if (!startDate) {
        setErrors('Please select a departure date.');
        return;
      }
      if (!agreedToPolicies) {
        setErrors('You must agree to the No Photography policy to continue.');
        return;
      }
      setErrors('');
      updateBooking({ 
        packageId: activePkg.id, 
        packageName: activePkg.name, 
        pricePerGuest: activePkg.price, 
        startDate, 
        guests: guestsCount, 
        specialRequests: specialReq 
      });
      setStep(3);
    } else if (step === 3) {
      if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
        setErrors('Please fill in all payment details.');
        return;
      }
      setErrors('');
      setStep(4);
    }
  };

  const handlePrevStep = () => {
    setErrors('');
    if (step > 1) setStep(step - 1);
  };

  const handleComplete = () => {
    resetBooking();
    navigateTo('landing');
  };

  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh', paddingTop: '160px', paddingBottom: '96px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Step Indicator */}
        {step < 4 && (
          <div className="booking-progress-bar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px', position: 'relative' }}>
            <div className={`progress-step-item ${step >= 1 ? 'active' : ''}`}>
              <span>1</span> <p>Traveler Details</p>
            </div>
            <div className={`progress-step-item ${step >= 2 ? 'active' : ''}`}>
              <span>2</span> <p>Customize Trip</p>
            </div>
            <div className={`progress-step-item ${step >= 3 ? 'active' : ''}`}>
              <span>3</span> <p>Secure Payment</p>
            </div>
            <div className="progress-line" style={{ width: `${(step - 1) * 50}%` }} />
          </div>
        )}

        {/* Error notification banner */}
        {errors && (
          <div className="booking-error-banner animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', backgroundColor: '#fff5f5', border: '1px solid #feb2b2', borderRadius: 'var(--radius-sm)', color: '#c53030', marginBottom: '24px', fontSize: '0.8rem' }}>
            <AlertCircle size={16} /> <span>{errors}</span>
          </div>
        )}

        {/* Step 1: Traveler Details */}
        {step === 1 && (
          <div className="glass-panel booking-wizard-card animate-fade-up">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '12px' }}><User size={20} className="text-gold" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Traveler Information</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>Please complete your primary contact profile. Initial confirmations will register under this name.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. Richard Parker" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="e.g. richard@parker.com" />
              </div>
              <div className="form-group">
                <label>Phone support</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +91 98208 22253" />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '36px' }}>
              <button onClick={handleNextStep} className="btn-primary">Next: Customize Journey</button>
            </div>
          </div>
        )}

        {/* Step 2: Trip Customization */}
        {step === 2 && (
          <div className="glass-panel booking-wizard-card animate-fade-up">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '12px' }}><Calendar size={20} className="text-gold" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Journey Customizations</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>Select package, verify departure date, and share guest details.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label>Selected Portfolio Package</label>
                <select value={selectedPkgId} onChange={(e) => setSelectedPkgId(e.target.value)} style={{ border: '1px solid var(--color-border)', padding: '10px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  {packages.map(p => (
                    <option key={p.id} value={p.id}>{p.name} (${p.price.toLocaleString()} / guest)</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label>Departure Date</label>
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Guests</label>
                  <input type="number" min="1" max="15" value={guestsCount} onChange={(e) => setGuestsCount(Number(e.target.value))} />
                </div>
              </div>

              <div className="form-group">
                <label>Special Requests or Coordinator Notes</label>
                <textarea rows={4} value={specialReq} onChange={(e) => setSpecialReq(e.target.value)} placeholder="e.g. Vegetarian meals only, language specifications, or coordinates to visit a community classroom..." />
              </div>

              {/* No Photography Slum Walk Agreement Checkbox */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginTop: '10px', padding: '12px', backgroundColor: 'var(--color-beige)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <input 
                  type="checkbox" 
                  id="noPhotoAgreement" 
                  required 
                  checked={agreedToPolicies}
                  onChange={(e) => setAgreedToPolicies(e.target.checked)}
                  style={{ width: 'auto', marginTop: '3px' }} 
                />
                <label htmlFor="noPhotoAgreement" style={{ fontSize: '0.75rem', textTransform: 'none', letterSpacing: 'normal', color: 'var(--text-secondary)', cursor: 'pointer', lineHeight: 1.4 }}>
                  <strong>Strict No Photography Policy:</strong> I agree that photography is strictly prohibited inside the community slum segments to respect the privacy, dignity, and safety of local residents.
                </label>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px' }}>
              <button onClick={handlePrevStep} className="btn-secondary">Back</button>
              <button onClick={handleNextStep} className="btn-primary">Next: Secure Payment</button>
            </div>
          </div>
        )}

        {/* Step 3: Secured Payment */}
        {step === 3 && (
          <div className="glass-panel booking-wizard-card animate-fade-up">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '12px' }}><CreditCard size={20} className="text-gold" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Secured Payment</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>Your connection is encrypted. Standard cancellation rates apply.</p>
            
            {/* Price invoice summary */}
            <div style={{ padding: '20px', backgroundColor: 'var(--color-beige)', borderRadius: 'var(--radius-md)', marginBottom: '28px', border: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-forest-green)', marginBottom: '12px' }}>Trip Contribution Summary</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px' }}>
                <span>{activePkg.name} ({guestsCount} Guests)</span>
                <span>${activePkg.price.toLocaleString()} × {guestsCount}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-forest-green)', fontStyle: 'italic', marginBottom: '12px' }}>
                <span>Social enterprise impact allocation (80% of net profits)</span>
                <span>Direct to Reality Gives</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: 700, borderTop: '1px solid var(--color-border)', paddingTop: '12px', marginTop: '8px', color: 'var(--color-forest-green)' }}>
                <span>Total Contribution</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Payment Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label>Cardholder Name</label>
                <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} required placeholder="e.g. Richard Parker" />
              </div>
              <div className="form-group">
                <label>Credit Card Number</label>
                <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required placeholder="4111 2222 3333 4444" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label>Expiration Date</label>
                  <input type="text" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} required placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label>CVV Security Code</label>
                  <input type="password" value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} required placeholder="***" />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px' }}>
              <button onClick={handlePrevStep} className="btn-secondary">Back</button>
              <button onClick={handleNextStep} className="btn-primary" style={{ backgroundColor: 'var(--color-forest-green)', color: '#fff' }}>Secure Transaction</button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation screen */}
        {step === 4 && (
          <div className="glass-panel booking-wizard-card animate-fade-up" style={{ textAlign: 'center', padding: '64px 48px' }}>
            <CheckCircle2 size={56} style={{ color: '#2f855a', margin: '0 auto 24px', strokeWidth: 1.5 }} />
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--color-forest-green)', marginBottom: '16px' }}>
              Booking Confirmed
            </h1>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', display: 'block', marginBottom: '24px', fontWeight: 600 }}>
              Booking Reference: #RT-2026-9874
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto 36px' }}>
              Thank you for choosing **Reality Tours & Travel**. A local coordinator from our office has been assigned to your booking. Your receipt, code of conduct guidelines, and information on how your booking funds classrooms have been sent to your email.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button onClick={handleComplete} className="btn-primary">Return Home</button>
              <button onClick={() => navigateTo('contact')} className="btn-secondary">Contact Coordination Desk</button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .booking-progress-bar {
          position: relative;
          z-index: 1;
        }
        .progress-line {
          position: absolute;
          top: 18px;
          left: 10%;
          height: 2px;
          background-color: var(--color-gold);
          z-index: -1;
          transition: width 0.4s ease;
        }
        .booking-progress-bar::before {
          content: '';
          position: absolute;
          top: 18px;
          left: 10%;
          right: 10%;
          height: 2px;
          background-color: var(--color-border);
          z-index: -2;
        }
        
        .progress-step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 1;
          text-align: center;
        }
        .progress-step-item span {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #fff;
          color: var(--text-secondary);
          border: 2px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          transition: all 0.3s;
        }
        .progress-step-item p {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        .progress-step-item.active span {
          background-color: var(--color-gold);
          border-color: var(--color-gold);
          color: var(--color-midnight-blue);
          box-shadow: 0 0 10px rgba(197, 168, 128, 0.4);
        }
        .progress-step-item.active p {
          color: var(--color-forest-green);
        }

        .booking-wizard-card {
          background-color: #fff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 40px;
          box-shadow: var(--shadow-lg);
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
        .form-group input, .form-group textarea, .form-group select {
          width: 100%;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          font-size: 0.85rem;
          font-family: var(--font-body);
          background-color: var(--color-ivory);
          transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
          border-color: var(--color-gold);
        }
      `}</style>
    </div>
  );
};
