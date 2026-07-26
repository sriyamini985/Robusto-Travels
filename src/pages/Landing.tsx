import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigation } from '../context/NavigationContext';
import type { PageType, RouteParams } from '../context/NavigationContext';
import { Globe2, MapPin, Play, Calendar } from 'lucide-react';
import { Globe as GlobeComponent } from '../components/3d/Globe';



// ─── Scroll Cards data ────────────────────────────────────────────────────────
const SCROLL_CARDS = [
  { id: 's1', name: 'Dharavi Slum Walk',     country: 'Mumbai, India',    tag: 'Ethical Slum Walk',        duration: '2.5 Hours', price: 18,  rating: 4.92, image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=85&w=700' },
  { id: 's2', name: 'Sanjay Colony Walk',    country: 'Delhi, India',     tag: 'Community Insight',        duration: '2.5 Hours', price: 15,  rating: 4.88, image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=85&w=700' },
  { id: 's3', name: 'Old Delhi Street Food', country: 'Delhi, India',     tag: 'Safe Culinary Walk',       duration: '3 Hours',   price: 32,  rating: 4.97, image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=85&w=700' },
  { id: 's4', name: 'Kerala Backwaters',     country: 'Kerala, India',    tag: 'Eco-Houseboat Cruise',     duration: '6 Days',    price: 280, rating: 4.89, image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=85&w=700' },
  { id: 's5', name: 'Rajasthan Heritage',    country: 'Rajasthan, India', tag: 'Rural Village Tour',       duration: '5 Days',    price: 320, rating: 4.95, image: 'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&q=85&w=700' },
  { id: 's6', name: 'Taj Mahal Sunrise',     country: 'Agra, India',      tag: 'Mughal History',           duration: '1.5 Days',  price: 65,  rating: 4.93, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=85&w=700' },
  { id: 's7', name: 'Swiss Alps',            country: 'Switzerland',      tag: 'Luxury Alpine Experience', duration: '7 Days',    price: 1450,rating: 4.98, image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=85&w=700' },
  { id: 's8', name: 'Bali Sanctuary',        country: 'Indonesia',        tag: 'Tropical Retreat',         duration: '5 Days',    price: 680, rating: 4.94, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=85&w=700' },
];

/* ═══════════════════════════════════════════════════════════════════
   HORIZONTAL SCROLL SECTION
═══════════════════════════════════════════════════════════════════ */
const HorizontalScrollSection: React.FC<{ navigateTo: (page: PageType, params?: RouteParams) => void }> = ({ navigateTo }) => {
  const trackRef  = useRef<HTMLDivElement>(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [hovered, setHovered]     = useState<string | null>(null);
  const isDrag    = useRef(false);
  const dragStart = useRef({ x: 0, sl: 0 });

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollPct(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const onMD = (e: React.MouseEvent) => {
    const el = trackRef.current; if (!el) return;
    isDrag.current = true;
    dragStart.current = { x: e.clientX, sl: el.scrollLeft };
    el.style.cursor = 'grabbing';
  };
  const onMM = useCallback((e: MouseEvent) => {
    if (!isDrag.current || !trackRef.current) return;
    trackRef.current.scrollLeft = dragStart.current.sl - (e.clientX - dragStart.current.x);
  }, []);
  const onMU = useCallback(() => {
    if (!trackRef.current) return;
    isDrag.current = false;
    trackRef.current.style.cursor = 'grab';
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMM);
    window.addEventListener('mouseup', onMU);
    return () => { window.removeEventListener('mousemove', onMM); window.removeEventListener('mouseup', onMU); };
  }, [onMM, onMU]);

  return (
    <section style={{ background: '#f8fafc', padding: '80px 0 60px' }}>
      <div className="container">
        <div style={{ marginBottom: '36px' }}>
          <span style={{ color: '#1d4ed8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em' }}>
            Featured Experiences
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#0f172a', marginTop: '8px', fontWeight: 500 }}>
            Curated <span style={{ color: '#1d4ed8' }}>Journeys</span> for Every Traveller
          </h2>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          onMouseDown={onMD}
          style={{
            display: 'flex', gap: '20px', overflowX: 'auto', cursor: 'grab',
            paddingBottom: '20px', scrollbarWidth: 'none', userSelect: 'none',
          }}
        >
          {SCROLL_CARDS.map(card => (
            <div
              key={card.id}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigateTo('destinations')}
              style={{
                minWidth: '260px', borderRadius: '20px', overflow: 'hidden',
                background: '#fff', boxShadow: hovered === card.id ? '0 16px 48px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.07)',
                transform: hovered === card.id ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s', cursor: 'pointer', flexShrink: 0,
              }}
            >
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered === card.id ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.5s' }} />
                <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#1d4ed8', color: '#fff', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '3px 10px', borderRadius: '20px' }}>{card.tag}</div>
              </div>
              <div style={{ padding: '16px' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <MapPin size={11} /> {card.country}
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{card.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: '#1d4ed8', fontWeight: 700 }}>from ${card.price}</span>
                  <span style={{ fontSize: '0.72rem', color: '#f59e0b', fontWeight: 600 }}>★ {card.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrollbar */}
        <div style={{ height: '3px', background: '#e2e8f0', borderRadius: '2px', marginTop: '4px' }}>
          <div style={{ height: '100%', width: '30%', background: '#1d4ed8', borderRadius: '2px', transform: `translateX(${scrollPct * 233}%)`, transition: 'transform 0.1s' }} />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   WHY CHOOSE US SECTION
═══════════════════════════════════════════════════════════════════ */
const WhyChooseUs: React.FC = () => {
  const features = [
    { icon: '🏆', title: 'Award-Winning Tours', desc: 'Recognized globally for premium, responsible travel experiences.' },
    { icon: '🌍', title: 'Ethical Tourism', desc: '80% of profits from social tours donated directly to local NGOs.' },
    { icon: '🛡️', title: '100% Safe Travel', desc: 'Fully vetted guides, verified accommodations, and 24/7 support.' },
    { icon: '✈️', title: 'End-to-End Planning', desc: 'Visa, flights, hotels, experiences — all arranged by our concierge.' },
  ];

  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#1d4ed8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em' }}>
            Why Robusto Travels
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#0f172a', marginTop: '8px', fontWeight: 500 }}>
            Travel That <span style={{ color: '#1d4ed8' }}>Matters</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '28px' }}>
          {features.map((f, i) => (
            <div key={i} style={{ padding: '28px', borderRadius: '20px', border: '1px solid #e2e8f0', background: '#fafbff', textAlign: 'center', transition: 'box-shadow 0.3s, transform 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(29,78,216,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   TESTIMONIALS SECTION
═══════════════════════════════════════════════════════════════════ */
const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Priya Sharma', country: 'India', text: 'The Dharavi tour changed my perspective completely. The guides were phenomenal and the cause is so meaningful.', rating: 5, avatar: 'https://i.pravatar.cc/80?img=47' },
    { name: 'Marco Ricci', country: 'Italy', text: 'Swiss Alps package exceeded every expectation. The attention to detail and personalized service was extraordinary.', rating: 5, avatar: 'https://i.pravatar.cc/80?img=12' },
    { name: 'Aiko Tanaka', country: 'Japan', text: 'Bali trip was absolutely magical. The private villa and the cultural experiences were worth every penny.', rating: 5, avatar: 'https://i.pravatar.cc/80?img=53' },
  ];

  return (
    <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '80px 0', color: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em' }}>
            Traveller Stories
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#fff', marginTop: '8px', fontWeight: 500 }}>
            What Our <span style={{ color: '#f59e0b' }}>Explorers</span> Say
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '28px' }}>
              <div style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '14px' }}>{'★'.repeat(r.rating)}</div>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontSize: '0.88rem', marginBottom: '20px' }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={r.avatar} alt={r.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid #f59e0b' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{r.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem' }}>{r.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   STATS BAR
═══════════════════════════════════════════════════════════════════ */
// Deterministic star positions (never change on re-render)
const STARS = Array.from({ length: 90 }, (_, i) => ({
  left:     ((i * 37 + 11)  % 100),
  top:      ((i * 23 + 7)   % 82),
  size:     1 + (i % 3) * 0.4,
  opacity:  0.3 + (i % 5) * 0.1,
  duration: 2 + (i % 4),
  delay:    (i % 6) * 0.4,
}));

const STATS = [
  { icon: '📍', value: '120+',  label: 'Destinations' },
  { icon: '🧳', value: '5000+', label: 'Happy Travelers' },
  { icon: '🌍', value: '50+',   label: 'Countries' },
  { icon: '🏅', value: '20+',   label: 'Years Experience' },
  { icon: '🎧', value: '24/7',  label: 'Travel Support' },
];

/* ═══════════════════════════════════════════════════════════════════
   MAIN LANDING PAGE
═══════════════════════════════════════════════════════════════════ */
export const Landing: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [hoveredDest, setHoveredDest] = useState<any | null>(null);
  const [mounted, setMounted]         = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStatsVisible(true);
    }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Hover state
  const handleHoverDest = (dest: any | null) => {
    setHoveredDest(dest);
  };

  // Click → smooth rotation animation, then navigate directly to destination details
  const handleClickDest = (dest: any) => {
    setTimeout(() => {
      navigateTo('destination-details', { destinationId: dest.id });
    }, 1500);
  };

  return (
    <div style={{ background: '#0a1228' }}>

      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        // Dark navy matching the reference image exactly
        background: 'radial-gradient(ellipse 120% 100% at 50% 0%, #1a3a7a 0%, #0d1e4a 35%, #080f28 70%, #030818 100%)',
      }}>

        {/* ── Background layers: stars + glow ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>

          {/* Star field */}
          {STARS.map((s, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${s.left}%`,
              top:  `${s.top}%`,
              width:  `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: '50%',
              background: '#fff',
              opacity: s.opacity,
              animation: `starTwinkle ${s.duration}s ease-in-out ${s.delay}s infinite alternate`,
            }} />
          ))}

          {/* Globe ambient glow */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '55%',
            transform: 'translate(-50%, -50%)',
            width: '70vw', height: '70vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,90,220,0.25) 0%, rgba(15,50,160,0.12) 45%, transparent 72%)',
          }} />

          {/* Sun ray from upper-right (matches reference globe lighting) */}
          <div style={{
            position: 'absolute', top: '-120px', right: '15%',
            width: '600px', height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,200,80,0.14) 0%, rgba(255,170,40,0.06) 40%, transparent 70%)',
          }} />

          {/* Soft cloud-like blur at very bottom (depth effect) */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px',
            background: 'linear-gradient(to top, rgba(5,15,45,0.7) 0%, transparent 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-10%',
            width: '60%', height: '200px', borderRadius: '50%',
            background: 'rgba(15,40,100,0.35)', filter: 'blur(50px)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', right: '-10%',
            width: '55%', height: '200px', borderRadius: '50%',
            background: 'rgba(15,40,100,0.30)', filter: 'blur(50px)',
          }} />
        </div>

        {/* ── Interaction hints ── */}
        <div style={{
          position: 'absolute', bottom: '88px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '16px', zIndex: 10, pointerEvents: 'none',
        }}>
          {[
            { icon: '↻', text: 'Drag to rotate' },
            { icon: '⊕', text: 'Scroll to zoom' },
          ].map((h, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(12px)',
              borderRadius: '30px', padding: '7px 16px',
              color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.18)',
            }}>
              <span style={{ fontSize: '1rem' }}>{h.icon}</span> {h.text}
            </div>
          ))}
        </div>

        {/* ── Main layout grid (Left Content + Enlarged 3D Earth Globe) ── */}
        <div style={{
          position: 'relative', zIndex: 5,
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          height: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '88px 32px 80px',
          alignItems: 'center',
          gap: '24px',
        }}>

          {/* ── LEFT PANEL: Headline + CTAs (UNCHANGED) ── */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.2s',
          }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              color: '#fff',
              marginBottom: '20px',
              textShadow: '0 2px 20px rgba(0,0,0,0.2)',
            }}>
              Explore<br />
              the <span style={{ color: '#FFC107' }}>World</span><br />
              like never<br />
              before
            </h1>

            <p style={{
              fontSize: '0.92rem', color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.65, marginBottom: '32px', maxWidth: '280px',
              textShadow: '0 1px 6px rgba(0,0,0,0.15)',
            }}>
              Discover amazing places, unforgettable experiences and best travel packages around the globe.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => navigateTo('destinations')}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 20px',
                  background: '#FFC107',
                  color: '#0f172a',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '0.82rem', fontWeight: 800,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(255,193,7,0.45)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(255,193,7,0.55)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(255,193,7,0.45)'; }}
              >
                Explore Destinations <Globe2 size={16} />
              </button>

              <button
                onClick={() => navigateTo('booking')}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 20px',
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  border: '2px solid rgba(255,255,255,0.55)',
                  borderRadius: '12px',
                  fontSize: '0.82rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'; }}
              >
                Plan My Trip <Calendar size={16} />
              </button>

              <button
                onClick={() => {}}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 4px',
                  background: 'transparent',
                  color: '#fff',
                  border: 'none',
                  fontSize: '0.78rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.12em',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
              >
                <span style={{
                  width: 36, height: 36,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  border: '2px solid rgba(255,255,255,0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Play size={12} fill="white" />
                </span>
                <div>
                  <div>Watch Journey</div>
                  <div style={{ fontWeight: 400, opacity: 0.7, textTransform: 'none', letterSpacing: 0, fontSize: '0.72rem' }}>See how it works</div>
                </div>
              </button>
            </div>
          </div>

          {/* ── CENTER & RIGHT: Enlarged 3D Earth Globe ── */}
          <div style={{
            position: 'relative',
            height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: '100%', height: '100%', maxHeight: '720px' }}>
              <GlobeComponent
                onHoverDest={handleHoverDest}
                hoveredDest={hoveredDest}
                onClickDest={handleClickDest}
              />
            </div>

            {/* Floating Zoom / view controls */}
            <div style={{
              position: 'absolute', bottom: '20px', right: '10px',
              display: 'flex', flexDirection: 'column', gap: '6px',
              zIndex: 10,
            }}>
              {['+', '−', '⊙'].map((ctrl, i) => (
                <div key={i} style={{
                  width: 36, height: 36,
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '1.1rem', fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'}
                >
                  {ctrl}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div
          ref={statsRef}
          style={{
            position: 'absolute', bottom: '0', left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 120px)', maxWidth: '860px',
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(24px)',
            borderRadius: '18px 18px 0 0',
            padding: '18px 36px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            zIndex: 10,
            boxShadow: '0 -8px 40px rgba(0,20,80,0.25)',
          }}
        >
          {STATS.map((s, i) => (
            <React.Fragment key={i}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '11px',
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: `all 0.5s ease ${i * 0.09}s`,
              }}>
                <span style={{ fontSize: '1.45rem', lineHeight: 1 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 500, marginTop: '3px' }}>{s.label}</div>
                </div>
              </div>
              {i < STATS.length - 1 && (
                <div style={{ width: '1px', height: '32px', background: '#e2e8f0', flexShrink: 0 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ── OTHER SECTIONS ────────────────────────────────────────────── */}
      <HorizontalScrollSection navigateTo={navigateTo} />
      <WhyChooseUs />
      <Testimonials />

      {/* ── FOOTER CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1d4ed8 0%, #1565c0 100%)',
        padding: '80px 0', textAlign: 'center', color: '#fff',
      }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 500, marginBottom: '16px' }}>
            Ready to Start Your <span style={{ color: '#FFC107' }}>Journey?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', marginBottom: '32px', lineHeight: 1.65 }}>
            Let our travel experts craft the perfect itinerary for your dream adventure.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigateTo('destinations')}
              style={{
                padding: '14px 32px', background: '#FFC107', color: '#0f172a',
                border: 'none', borderRadius: '12px', fontWeight: 800,
                fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.1em',
                cursor: 'pointer', boxShadow: '0 4px 20px rgba(255,193,7,0.4)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = ''}
            >
              Explore Now
            </button>
            <button
              onClick={() => navigateTo('booking')}
              style={{
                padding: '14px 32px', background: 'rgba(255,255,255,0.15)',
                color: '#fff', border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: '12px', fontWeight: 700,
                fontSize: '0.88rem', cursor: 'pointer',
                backdropFilter: 'blur(8px)', transition: 'background 0.2s',
              }}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style>{`
        @keyframes starTwinkle {
          from { opacity: 0.2; transform: scale(0.8); }
          to   { opacity: 0.9; transform: scale(1.3); }
        }
        @keyframes floatParticle {
          from { transform: translateY(0) scale(1); opacity: 0.4; }
          to   { transform: translateY(-14px) scale(1.3); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
};
