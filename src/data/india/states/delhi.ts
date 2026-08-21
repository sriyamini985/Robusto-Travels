export interface DelhiPlace {
  name: string;
  slug: string;
  category: string;
  image: string;
  overview: string;
  rating: number;
  bestTimeToVisit?: string;
  shortDesc?: string;
  gallery?: string[];
  nearbyAttractions?: string[];
  recommendedHotels?: string[];
  famousRestaurants?: string[];
}

export interface DelhiStateData {
  id: string;
  name: string;
  type: 'Union Territory';
  capital: string;
  tagline: string;
  heroImage: string;
  about: string;
  bestTime: string;
  climate: string;
  famousFood: string[];
  culture: string;
  famousPlaces: DelhiPlace[];
}

export const DELHI_DATA: DelhiStateData = {
  id: 'delhi',
  name: 'Delhi',
  type: 'Union Territory',
  capital: 'New Delhi',
  tagline: 'Capital of Empires & Modern Metropolis',
  heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200',
  about: 'Delhi is India\'s national capital territory, a historical metropolis where the ancient ruins of seven successive empires sit alongside tree-lined British colonial boulevards, crowded bazaar alleys of Old Delhi, and high-tech corporate office developments.',
  bestTime: 'October – March',
  climate: 'Subtropical monsoon climate with hot summers and pleasant, foggy winters where temperatures drop to 5°C.',
  famousFood: ['Chole Bhature', 'Butter Chicken', 'Paranthas of Chandni Chowk', 'Dahi Bhalla', 'Aloo Chaat'],
  culture: 'A rich cosmopolitan fusion of Punjabi, Mughal, and regional traditions, famous for the Sufi Qawwalis of Nizamuddin and colorful street bazaars.',
  famousPlaces: [
    {
      name: 'India Gate',
      slug: 'india-gate',
      category: 'National Monument',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600',
      overview: 'Designed by Sir Edwin Lutyens and completed in 1931, India Gate is a grand 42-meter high triumphal arch war memorial dedicated to the soldiers of the British Indian Army who died in the First World War. It houses the Amar Jawan Jyoti eternal flame.',
      rating: 4.95,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Iconic 42m high triumphal arch war memorial in the heart of New Delhi.',
      gallery: [
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600'
      ],
      nearbyAttractions: ['Rashtrapati Bhavan', 'National Gallery of Modern Art', 'Connaught Place'],
      recommendedHotels: ['The Taj Mahal Hotel New Delhi', 'The Imperial New Delhi', 'Shangri-La Eros'],
      famousRestaurants: ['Bukhara at ITC Maurya', 'Pandara Road Food Stalls', 'Indian Accent']
    },
    {
      name: 'Qutub Minar',
      slug: 'qutub-minar',
      category: 'UNESCO World Heritage',
      image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&q=80&w=600',
      overview: 'A 73-meter tall red sandstone five-story tower constructed in 1192 by Qutb-ud-din Aibak, Qutub Minar is the tallest brick minaret in the world, featuring delicate Quranic inscriptions and surrounded by the historical ruins of the Qutb Complex.',
      rating: 4.92,
      bestTimeToVisit: 'October – March',
      shortDesc: 'World\'s tallest 73m brick minaret and UNESCO Mughal ruins.',
      gallery: [
        'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&q=80&w=600'
      ],
      nearbyAttractions: ['Iron Pillar of Delhi', 'Mehrauli Archaeological Park', 'Garden of Five Senses'],
      recommendedHotels: ['Sheraton New Delhi Hotel', 'Hilton Garden Inn Saket'],
      famousRestaurants: ['Olive Bar & Kitchen Mehrauli', 'Dhaba Estd 1986 Saket']
    },
    {
      name: 'Red Fort',
      slug: 'red-fort',
      category: 'UNESCO World Heritage',
      image: '/images/delhi/red-fort.jpg',
      overview: 'Constructed in 1639 by Mughal Emperor Shah Jahan as the palace fort of Shahjahanabad, the Red Fort features massive red sandstone walls, octagonal layout, imperial pavilions, and is the historic symbol of national independence.',
      rating: 4.91,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Massive 17th-century Mughal red sandstone palace fortress.',
      gallery: [
        '/images/delhi/red-fort.jpg'
      ],
      nearbyAttractions: ['Jama Masjid', 'Chandni Chowk Market', 'Raj Ghat'],
      recommendedHotels: ['Welcomhotel by ITC Hotels Dwarka', 'The Oberoi New Delhi'],
      famousRestaurants: ['Karim\'s Old Delhi', 'Moti Mahal Daryaganj', 'Paranthe Wali Gali']
    },
    {
      name: 'Lotus Temple',
      slug: 'lotus-temple',
      category: 'Architectural Marvel',
      image: '/images/delhi/lotus-temple.png',
      overview: 'Completed in 1986, the Lotus Temple is a Baháʼí House of Worship famous for its flowerlike design made of 27 free-standing white marble petals. It welcomes visitors of all religions to pray and meditate in silent harmony.',
      rating: 4.89,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Flowerlike Baháʼí House of Worship with 27 white marble petals.',
      gallery: [
        '/images/delhi/lotus-temple.png'
      ],
      nearbyAttractions: ['Kalkaji Mandir', 'ISKCON Temple Delhi', 'Nehru Place Hub'],
      recommendedHotels: ['Crowne Plaza New Delhi Okhla', 'Eros Hotel Nehru Place'],
      famousRestaurants: ['The Hong Kong Club', 'Tamra Connaught Place', 'Leo\'s Artisan Pizza']
    }
  ]
};
