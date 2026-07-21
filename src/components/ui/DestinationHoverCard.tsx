import React, { useState } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';

interface DestinationHoverCardProps {
  dest: {
    id: string;
    name: string;
    country: string;
    heroImage: string;
    description: string;
    price: number;
    duration: string;
    rating: number;
  } | null;
  onClose?: () => void;
  onExplore?: (id: string) => void;
}

const COUNTRY_FLAGS: Record<string, string> = {
  Switzerland: '🇨🇭',
  UAE:         '🇦🇪',
  Japan:       '🇯🇵',
  Indonesia:   '🇮🇩',
  Maldives:    '🇲🇻',
  Singapore:   '🇸🇬',
  Thailand:    '🇹🇭',
  Italy:       '🇮🇹',
  France:      '🇫🇷',
  Australia:   '🇦🇺',
  USA:         '🇺🇸',
  Turkey:      '🇹🇷',
  India:       '🇮🇳',
};

const COUNTRY_REGIONS: Record<string, string> = {
  Switzerland: 'Europe',
  UAE:         'Middle East',
  Japan:       'East Asia',
  Indonesia:   'Southeast Asia',
  Maldives:    'South Asia',
  Singapore:   'Southeast Asia',
  Thailand:    'Southeast Asia',
  Italy:       'Europe',
  France:      'Europe',
  Australia:   'Oceania',
  USA:         'Americas',
  Turkey:      'Europe / Asia',
  India:       'South Asia',
};

// Gold star filled SVG
const StarFilled = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const StarHalf = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77V2z"/>
    <path d="M12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2v15.77z" fill="#e2e8f0"/>
  </svg>
);
const StarEmpty = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#e2e8f0" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

function renderStars(rating: number) {
  const stars = [];
  const full  = Math.floor(rating);
  const half  = rating - full >= 0.4;
  for (let i = 0; i < 5; i++) {
    if (i < full)        stars.push(<StarFilled  key={i} />);
    else if (i === full && half) stars.push(<StarHalf key={i} />);
    else                 stars.push(<StarEmpty  key={i} />);
  }
  return stars;
}

import { formatLocalCurrency } from '../../utils/currency';

export const DestinationHoverCard: React.FC<DestinationHoverCardProps> = ({
  dest,
  onClose,
  onExplore,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!dest) return null;

  const flag   = COUNTRY_FLAGS[dest.country] ?? '🌍';
  const region = COUNTRY_REGIONS[dest.country] ?? 'Asia';
  const localPriceStr = formatLocalCurrency(dest.price, dest.country);
  const reviewCount = Math.round(dest.rating * 60);

  return (
    <div
      key={dest.id} // remounts & re-animates on dest change
      style={{
        width: '290px',
        background: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.10)',
        overflow: 'hidden',
        animation: 'cardEnter 0.38s cubic-bezier(0.34,1.56,0.64,1) both',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @keyframes cardEnter {
          from { opacity: 0; transform: translateX(24px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0)   scale(1);    }
        }
      `}</style>

      {/* ── Header: flag + name + region + close ── */}
      <div style={{
        padding: '16px 16px 0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Flag block */}
          <div style={{
            width: 38, height: 38,
            borderRadius: '10px',
            background: '#f0f4ff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '22px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            flexShrink: 0,
          }}>
            {flag}
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.02rem', color: '#0f172a', lineHeight: 1.2 }}>
              {dest.country}
            </div>
            <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, marginTop: '1px' }}>
              {region}
            </div>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            style={{
              background: '#f1f5f9', border: 'none', borderRadius: '8px',
              width: 28, height: 28, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#64748b', flexShrink: 0,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#e2e8f0')}
            onMouseLeave={e => (e.currentTarget.style.background = '#f1f5f9')}
          >
            <X size={13} />
          </button>
        )}
      </div>

      {/* ── Destination image ── */}
      <div style={{ margin: '12px 16px', borderRadius: '14px', overflow: 'hidden', height: '155px', background: '#e2e8f0' }}>
        <img
          src={dest.heroImage}
          alt={dest.country}
          onLoad={() => setImgLoaded(true)}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            opacity: imgLoaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>

      {/* ── Description ── */}
      <div style={{
        padding: '0 16px',
        fontSize: '0.76rem', color: '#475569', lineHeight: 1.6,
        marginBottom: '12px',
      }}>
        {dest.description.length > 95 ? dest.description.slice(0, 95) + '…' : dest.description}
      </div>

      {/* ── Stats rows ── */}
      <div style={{
        padding: '0 16px', marginBottom: '14px',
        display: 'flex', flexDirection: 'column', gap: '7px',
      }}>
        {/* Starting from */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.74rem', color: '#64748b', fontWeight: 500 }}>
            <span style={{ fontSize: '13px' }}>✈️</span> Starting from
          </span>
          <span style={{ fontWeight: 800, fontSize: '0.88rem', color: '#0f172a' }}>
            {localPriceStr}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#f1f5f9' }} />

        {/* Duration */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.74rem', color: '#64748b', fontWeight: 500 }}>
            <Clock size={12} /> Duration
          </span>
          <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#0f172a' }}>{dest.duration}</span>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#f1f5f9' }} />

        {/* Rating */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.74rem', color: '#64748b', fontWeight: 500 }}>
            <span style={{ fontSize: '13px' }}>⭐</span> Rating
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontWeight: 700, fontSize: '0.82rem', color: '#0f172a' }}>
            <span style={{ display: 'flex', gap: 1 }}>{renderStars(dest.rating)}</span>
            <span style={{ color: '#64748b', fontSize: '0.72rem', fontWeight: 500, marginLeft: 2 }}>
              {dest.rating.toFixed(1)} ({reviewCount})
            </span>
          </span>
        </div>
      </div>

      {/* ── Explore CTA ── */}
      <div style={{ padding: '0 16px 16px' }}>
        <button
          onClick={() => onExplore && onExplore(dest.id)}
          style={{
            width: '100%',
            padding: '13px 16px',
            background: '#1d4ed8',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '0.8rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.09em',
            transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
            boxShadow: '0 4px 14px rgba(29,78,216,0.35)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background  = '#1e40af';
            e.currentTarget.style.transform   = 'translateY(-1px)';
            e.currentTarget.style.boxShadow   = '0 8px 24px rgba(29,78,216,0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background  = '#1d4ed8';
            e.currentTarget.style.transform   = '';
            e.currentTarget.style.boxShadow   = '0 4px 14px rgba(29,78,216,0.35)';
          }}
        >
          Explore {dest.country} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
