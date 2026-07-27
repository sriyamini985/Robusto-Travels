/**
 * journey.ts — Geospatial distance, flight duration, timezone, visa & budget utilities
 */

export interface LocationItem {
  id: string;
  name: string;
  country: string;
  flag: string;
  lat: number;
  lng: number;
  image: string;
}

export const ALL_LOCATIONS: LocationItem[] = [
  { id: 'india',     name: 'India',       country: 'India',       flag: '🇮🇳', lat: 20.5937,  lng: 78.9629,  image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600' },
  { id: 'switzerland', name: 'Switzerland', country: 'Switzerland', flag: '🇨🇭', lat: 46.8182,  lng: 8.2275,   image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=600' },
  { id: 'japan',     name: 'Japan',       country: 'Japan',       flag: '🇯🇵', lat: 36.2048,  lng: 138.2529, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600' },
  { id: 'dubai',     name: 'Dubai (UAE)', country: 'UAE',         flag: '🇦🇪', lat: 25.2048,  lng: 55.2708,  image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600' },
  { id: 'italy',     name: 'Italy',       country: 'Italy',       flag: '🇮🇹', lat: 41.8719,  lng: 12.5674,  image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=600' },
  { id: 'bali',      name: 'Bali',        country: 'Indonesia',   flag: '🇮🇩', lat: -8.3405,  lng: 115.0920, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600' },
  { id: 'maldives',  name: 'Maldives',    country: 'Maldives',    flag: '🇲🇻', lat: 3.2028,   lng: 73.2207,  image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=600' },
  { id: 'singapore', name: 'Singapore',   country: 'Singapore',   flag: '🇸🇬', lat: 1.3521,   lng: 103.8198, image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=600' },
  { id: 'thailand',  name: 'Thailand',    country: 'Thailand',    flag: '🇹🇭', lat: 15.8700,  lng: 100.9925, image: 'https://images.unsplash.com/photo-1506665531195-3566fe294710?auto=format&fit=crop&q=80&w=600' },
  { id: 'france',    name: 'France',      country: 'France',      flag: '🇫🇷', lat: 46.2276,  lng: 2.2137,   image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600' },
  { id: 'australia', name: 'Australia',   country: 'Australia',   flag: '🇦🇺', lat: -25.2744, lng: 133.7751, image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600' },
  { id: 'usa',       name: 'United States', country: 'USA',       flag: '🇺🇸', lat: 39.8283,  lng: -98.5795, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=600' },
  { id: 'turkey',    name: 'Turkey',      country: 'Turkey',      flag: '🇹🇷', lat: 38.9637,  lng: 35.2433,  image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=600' },
  { id: 'egypt',     name: 'Egypt',       country: 'Egypt',       flag: '🇪🇬', lat: 26.8206,  lng: 30.8025,  image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=600' },
  { id: 'greece',    name: 'Greece',      country: 'Greece',      flag: '🇬🇷', lat: 39.0742,  lng: 21.8243,  image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=600' },
  { id: 'brazil',    name: 'Brazil',      country: 'Brazil',      flag: '🇧🇷', lat: -14.2350, lng: -51.9253, image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=600' },
  { id: 'uk',        name: 'United Kingdom', country: 'UK',       flag: '🇬🇧', lat: 55.3781,  lng: -3.4360,  image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600' },
  { id: 'south-africa', name: 'South Africa', country: 'South Africa', flag: '🇿🇦', lat: -30.5595, lng: 22.9375, image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=600' },
  { id: 'spain',     name: 'Spain',       country: 'Spain',       flag: '🇪🇸', lat: 40.4637,  lng: -3.7492,  image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=600' },
  { id: 'canada',    name: 'Canada',      country: 'Canada',      flag: '🇨🇦', lat: 56.1304,  lng: -106.3468, image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=600' },
];

/**
 * Haversine Great Circle Distance formula (in Kilometers)
 */
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * Estimate Flight Duration based on 820 km/h cruising speed + 45min taxi/takeoff
 */
export function calculateFlightHours(distanceKm: number): { hours: number; minutes: number; formatted: string } {
  const totalHours = distanceKm / 820 + 0.75;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  return {
    hours,
    minutes,
    formatted: `${hours}h ${minutes}m`
  };
}

/**
 * Estimate Time Zone Difference
 */
export function calculateTimeDiffHours(lng1: number, lng2: number): string {
  const diffHours = Math.round((lng2 - lng1) / 15);
  if (diffHours === 0) return 'Same Time Zone';
  const sign = diffHours > 0 ? '+' : '';
  return `${sign}${diffHours} hrs vs Origin`;
}

/**
 * Visa Requirement Matrix
 */
export function getVisaRequirement(originId: string, destId: string): string {
  if (originId === destId) return 'Domestic Travel (No Visa)';
  
  // Specific luxury rules
  if (destId === 'maldives' || destId === 'thailand' || destId === 'bali') {
    return 'Visa on Arrival / E-Visa Available';
  }
  if (destId === 'dubai' || destId === 'singapore') {
    return 'Express 48-Hour E-Visa';
  }
  if (destId === 'switzerland' || destId === 'italy' || destId === 'france') {
    return 'Schengen Visa Required';
  }
  if (destId === 'usa' || destId === 'australia') {
    return 'ETA / Tourist Visa Required';
  }
  return 'E-Visa / Entry Permit Required';
}

/**
 * Estimated Trip Budget Range
 */
export function getEstimatedBudget(destId: string): { amount: number; formatted: string } {
  const BASE_PRICES: Record<string, number> = {
    'switzerland': 2450,
    'japan':       2100,
    'italy':       1950,
    'france':      2150,
    'dubai':       1650,
    'maldives':    2800,
    'bali':        1400,
    'singapore':   1550,
    'thailand':    1200,
    'australia':   2600,
    'usa':         2900,
    'turkey':      1600,
    'india':       950,
  };
  const amount = BASE_PRICES[destId] || 1850;
  return {
    amount,
    formatted: `$${amount.toLocaleString()} / guest`
  };
}

/**
 * Best Season Lookup
 */
export function getBestTravelSeason(destId: string): string {
  const SEASONS: Record<string, string> = {
    'switzerland': 'Dec – Apr (Alpine Snow) | Jun – Sep (Lakes)',
    'japan':       'Mar – May (Cherry Blossom) | Oct – Nov (Autumn)',
    'italy':       'May – Sep (Mediterranean Summer)',
    'france':      'May – Oct (Riviera & Paris Spring)',
    'dubai':       'Nov – Apr (Cool Desert Season)',
    'maldives':    'Nov – Apr (Sunny Atoll Weather)',
    'bali':        'May – Sep (Tropical Dry Season)',
    'singapore':   'Year-round (Best Nov – Aug)',
    'thailand':    'Nov – Apr (Pleasant Cool Season)',
    'australia':   'Sep – Nov & Mar – May (Gold Coast)',
    'usa':         'May – Oct (National Parks & Cities)',
    'turkey':      'Apr – May & Sep – Nov (Cappadocia)',
    'india':       'Oct – Mar (Heritage & Cool Season)',
  };
  return SEASONS[destId] || 'October – April';
}
