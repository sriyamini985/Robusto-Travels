import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, Send } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const FloatingCTA: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'agent'; text: string }[]>([
    { sender: 'agent', text: 'Welcome to Robusto Verse. I am Elena, your dedicated Travel Concierge. How may I curate your journey today?' }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');

    // Simulate concierge response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          sender: 'agent', 
          text: 'Thank you for your request. To finalize custom itineraries or check private charters, we will connect you to our encrypted WhatsApp line (+1-800-ROBUSTO) or forward this to booking.' 
        }
      ]);
    }, 1500);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window-panel glass-panel-dark animate-fade-up">
          <div className="chat-window-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
                  alt="Elena Concierge" 
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <span className="online-indicator" />
              </div>
              <div>
                <h5 style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                  Elena Sterling
                </h5>
                <p style={{ fontSize: '0.65rem', color: '#fff', opacity: 0.6 }}>Head of Bespoke Journeys</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ color: 'var(--color-ivory)', fontSize: '1.2rem', opacity: 0.8 }}>×</button>
          </div>

          <div className="chat-window-body">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-bubble-container ${m.sender}`}>
                <div className={`chat-bubble ${m.sender}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="chat-window-footer">
            <input 
              type="text" 
              placeholder="Ask anything..." 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="chat-input"
            />
            <button type="submit" className="chat-send-btn">
              <Send size={14} />
            </button>
          </form>
          
          <div style={{ padding: '0 16px 12px', display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => {
                navigateTo('booking');
                setIsOpen(false);
              }}
              style={{
                flex: 1,
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '8px',
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-midnight-blue)',
                fontWeight: 600,
                textAlign: 'center'
              }}
            >
              Inquire Booking
            </button>
            <a 
              href="https://wa.me/18007628786" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                flex: 1,
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'var(--color-ivory)',
                fontWeight: 600,
                textAlign: 'center',
                backgroundColor: 'rgba(37, 211, 102, 0.2)'
              }}
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div style={{ display: 'flex', gap: '12px' }}>
        {showScrollTop && (
          <button 
            onClick={handleScrollTop}
            className="floating-btn scroll-top-btn"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        )}

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="floating-btn whatsapp-btn"
          aria-label="Contact Concierge"
        >
          <MessageSquare size={20} />
          <span className="notification-dot" />
        </button>
      </div>

      <style>{`
        .floating-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          color: var(--color-ivory);
          cursor: pointer;
          position: relative;
        }
        .whatsapp-btn {
          background-color: var(--color-forest-green);
          border: 1px solid var(--color-gold);
        }
        .whatsapp-btn:hover {
          transform: translateY(-4px) scale(1.05);
          background-color: var(--color-gold);
          color: var(--color-midnight-blue);
        }
        .scroll-top-btn {
          background-color: var(--color-midnight-blue);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .scroll-top-btn:hover {
          transform: translateY(-4px);
          background-color: var(--color-forest-green);
        }
        .notification-dot {
          position: absolute;
          top: 0;
          right: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--color-gold);
          border: 2px solid var(--color-forest-green);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.8; }
        }
        
        /* Chat Panel Styles */
        .chat-window-panel {
          width: 320px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-glass);
          display: flex;
          flex-direction: column;
          font-family: var(--font-body);
        }
        .chat-window-header {
          padding: 16px;
          background-color: var(--color-forest-green);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .online-indicator {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          background-color: #25d366;
          border: 2px solid var(--color-forest-green);
          border-radius: 50%;
        }
        .chat-window-body {
          height: 240px;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: rgba(9, 15, 29, 0.95);
        }
        .chat-bubble-container {
          display: flex;
          width: 100%;
        }
        .chat-bubble-container.user {
          justify-content: flex-end;
        }
        .chat-bubble {
          max-width: 80%;
          padding: 10px 14px;
          font-size: 0.75rem;
          border-radius: 12px;
          line-height: 1.4;
        }
        .chat-bubble.agent {
          background-color: rgba(255, 255, 255, 0.06);
          color: var(--color-ivory);
          border-bottom-left-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .chat-bubble.user {
          background-color: var(--color-gold);
          color: var(--color-midnight-blue);
          border-bottom-right-radius: 2px;
        }
        .chat-window-footer {
          padding: 12px 16px;
          display: flex;
          gap: 8px;
          background-color: rgba(9, 15, 29, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .chat-input {
          flex: 1;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 8px 14px;
          font-size: 0.75rem;
          color: var(--color-ivory);
        }
        .chat-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        .chat-send-btn {
          width: 32px;
          height: 32px;
          background-color: var(--color-gold);
          color: var(--color-midnight-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .chat-send-btn:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};
