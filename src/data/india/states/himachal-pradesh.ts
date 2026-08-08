export interface HimachalPlace {
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

export interface HimachalStateData {
  id: string;
  name: string;
  type: 'State';
  capital: string;
  tagline: string;
  heroImage: string;
  about: string;
  bestTime: string;
  climate: string;
  famousFood: string[];
  culture: string;
  famousPlaces: HimachalPlace[];
}

export const HIMACHAL_DATA: HimachalStateData = {
  id: 'himachal-pradesh',
  name: 'Himachal Pradesh',
  type: 'State',
  capital: 'Shimla',
  tagline: 'Land of Gods & Snow-Capped Peaks',
  heroImage: '/images/himachal-pradesh/spiti-valley/hero-v3.jpg',
  about: 'Himachal Pradesh is a Himalayan state in northern India renowned for its dramatic mountain landscapes, ancient Buddhist monasteries, apple orchards, adventure sports, and charming colonial hill stations.',
  bestTime: 'March – June & September – November',
  climate: 'Alpine and sub-alpine climate. Summers are cool (10°C – 25°C), winters are freezing (-10°C to 10°C) with heavy snowfall in higher elevations.',
  famousFood: ['Dham (ceremonial feast)', 'Siddu (stuffed bread)', 'Chha Gosht', 'Madra (chickpea curry)', 'Kullu Trout', 'Aktori (buckwheat pancake)'],
  culture: 'Rich traditions of Pahari music, Nati dance (world record holder), colourful Kullu Dussehra festival, Buddhist Losar celebrations, and hand-woven Kullu shawls.',
  famousPlaces: [
    {
      name: 'Shimla',
      slug: 'shimla',
      category: 'Hill Station',
      image: '/images/himachal-pradesh/shimla/hero-v3.jpg',
      overview: 'The former summer capital of British India, Shimla sits at 2,200 meters and is famous for its colonial architecture, the iconic Mall Road, Christ Church, Jakhu Temple, and breathtaking Himalayan panoramas.',
      rating: 4.94,
      bestTimeToVisit: 'March – June & December – January (snow)',
      shortDesc: 'Former British summer capital with colonial charm and Himalayan views.',
      gallery: [
        '/images/himachal-pradesh/shimla/gallery-1-v3.jpg',
        '/images/himachal-pradesh/shimla/gallery-2-v3.jpg',
        '/images/himachal-pradesh/shimla/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Jakhu Temple', 'Kufri', 'Chail Wildlife Sanctuary', 'Naldehra Golf Course'],
      recommendedHotels: ['Wildflower Hall Oberoi', 'Radisson Hotel Shimla', 'The Cecil Shimla'],
      famousRestaurants: ['Indian Coffee House Mall Road', 'Cafe Sol Shimla', 'Himachali Rasoi']
    },
    {
      name: 'Manali',
      slug: 'manali',
      category: 'Mountain Resort',
      image: '/images/himachal-pradesh/manali/hero-v3.jpg',
      overview: 'Nestled in the Kullu Valley at 2,050 meters, Manali is the gateway to Ladakh and Spiti, famous for Solang Valley ski slopes, Rohtang Pass, Hadimba Devi Temple, and adventure sports year-round.',
      rating: 4.97,
      bestTimeToVisit: 'October – June (avoid July–August monsoon)',
      shortDesc: 'Mountain resort and adventure hub gateway to Rohtang and Ladakh.',
      gallery: [
        '/images/himachal-pradesh/manali/gallery-1-v3.jpg',
        '/images/himachal-pradesh/manali/gallery-2-v3.jpg',
        '/images/himachal-pradesh/manali/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Solang Valley', 'Hadimba Temple', 'Vashisht Hot Springs', 'Old Manali'],
      recommendedHotels: ['Span Resort & Spa Manali', 'The Himalayan Hotel', 'Johnson Lodge'],
      famousRestaurants: ['Cafe 1947', 'Drifters Inn', 'La Plage Manali']
    },
    {
      name: 'Dharamshala & McLeod Ganj',
      slug: 'dharamshala',
      category: 'Spiritual Retreat',
      image: '/images/himachal-pradesh/dharamshala/hero-v3.jpg',
      overview: 'Home to the Dalai Lama and Tibetan Government in Exile, Dharamshala and its upper town McLeod Ganj offer Tibetan Buddhist culture, the Namgyal Monastery, Bhagsu Nag waterfall, and stunning Dhauladhar range views.',
      rating: 4.95,
      bestTimeToVisit: 'March – June & September – November',
      shortDesc: 'Dalai Lama residence and centre of Tibetan Buddhist culture in exile.',
      gallery: [
        '/images/himachal-pradesh/dharamshala/gallery-1-v3.jpg',
        '/images/himachal-pradesh/dharamshala/gallery-2-v3.jpg',
        '/images/himachal-pradesh/dharamshala/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Namgyal Monastery', 'Bhagsu Nag Waterfall', 'Dal Lake Dharamshala', 'Triund Trek'],
      recommendedHotels: ['Hyatt Regency Dharamshala', 'The Chapslee', 'Zostel McLeod Ganj'],
      famousRestaurants: ['Nick\'s Italian Kitchen', 'Jimmy\'s Italian Kitchen', 'Lung Ta Japanese']
    },
    {
      name: 'Spiti Valley',
      slug: 'spiti-valley',
      category: 'Cold Desert',
      image: '/images/himachal-pradesh/spiti-valley/hero-v3.jpg',
      overview: 'A high-altitude cold desert at 3,800+ meters, Spiti is one of the most remote valleys in the world, home to Key Monastery, fossil-rich landscapes, stunning river gorges, and the ancient villages of Kibber and Langza.',
      rating: 4.98,
      bestTimeToVisit: 'June – September (road accessible)',
      shortDesc: 'Remote high-altitude cold desert with ancient monasteries and fossils.',
      gallery: [
        '/images/himachal-pradesh/spiti-valley/gallery-1-v3.jpg',
        '/images/himachal-pradesh/spiti-valley/gallery-2-v3.jpg',
        '/images/himachal-pradesh/spiti-valley/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Key Monastery', 'Chandratal Lake', 'Kibber Village', 'Langza Buddha Statue'],
      recommendedHotels: ['Spiti Ecosphere', 'Sakya Abode Kaza', 'Zostel Kaza'],
      famousRestaurants: ['Sol Cafe Kaza', 'Himalayan Cafe Kaza', 'Sichuan Restaurant Kaza']
    },
    {
      name: 'Kullu Valley',
      slug: 'kullu-valley',
      category: 'Scenic Valley',
      image: '/images/himachal-pradesh/kullu-valley/hero-v3.jpg',
      overview: 'Known as the Valley of Gods, the Kullu Valley along the Beas River is celebrated for apple orchards, dense deodar forests, river rafting, the Bijli Mahadev Temple, and the world-famous Kullu Dussehra festival.',
      rating: 4.90,
      bestTimeToVisit: 'October (Dussehra) & March – June',
      shortDesc: '"Valley of Gods" famous for Kullu Dussehra and apple orchards.',
      gallery: [
        '/images/himachal-pradesh/kullu-valley/gallery-1-v3.jpg',
        '/images/himachal-pradesh/kullu-valley/gallery-2-v3.jpg',
        '/images/himachal-pradesh/kullu-valley/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Bijli Mahadev Temple', 'Great Himalayan National Park', 'Kasol', 'Parvati Valley'],
      recommendedHotels: ['Kullu Valley Resort', 'Apple Country Resorts', 'Hotel Silverine'],
      famousRestaurants: ['Shiva Cafe Kullu', 'Vaishnodevi Dhaba', 'The Orchard Green']
    },
    {
      name: 'Khajjiar (Mini Switzerland)',
      slug: 'khajjiar',
      category: 'Natural Wonder',
      image: '/images/himachal-pradesh/khajjiar/hero-v3.jpg',
      overview: 'Called the "Mini Switzerland of India", Khajjiar is a scenic saucer-shaped meadow at 2,000 meters near Dalhousie, with a central lake, lush green forests, and a 12th-century Khajji Nag temple in the middle.',
      rating: 4.91,
      bestTimeToVisit: 'April – June & October – November',
      shortDesc: '"Mini Switzerland of India" — a saucer-shaped meadow with a lake.',
      gallery: [
        '/images/himachal-pradesh/khajjiar/gallery-1-v3.jpg',
        '/images/himachal-pradesh/khajjiar/gallery-2-v3.jpg',
        '/images/himachal-pradesh/khajjiar/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Dalhousie', 'Chamera Lake', 'Kalatop Wildlife Sanctuary'],
      recommendedHotels: ['Hotel Dalhousie Grande', 'Monal Resort Khajjiar', 'HPTDC Deodar Resort'],
      famousRestaurants: ['Sher-e-Punjab Dalhousie', 'Kwality Restaurant', 'Himachali Dhaba Khajjiar']
    },
    {
      name: 'Rohtang Pass',
      slug: 'rohtang-pass',
      category: 'High Altitude Pass',
      image: '/images/himachal-pradesh/rohtang-pass/hero-v3.jpg',
      overview: 'At 3,978 meters on the Kullu-Lahaul divide, Rohtang Pass is a dramatic high mountain gateway offering year-round snow activities, panoramic glacier views, and access to the Lahaul and Spiti valleys.',
      rating: 4.93,
      bestTimeToVisit: 'May – October (closed in winter)',
      shortDesc: 'Dramatic 3,978m snow-covered pass on the Kullu-Lahaul divide.',
      gallery: [
        '/images/himachal-pradesh/rohtang-pass/gallery-1-v3.jpg',
        '/images/himachal-pradesh/rohtang-pass/gallery-2-v3.jpg',
        '/images/himachal-pradesh/rohtang-pass/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Solang Valley', 'Beas Kund', 'Atal Tunnel', 'Sissu Waterfall'],
      recommendedHotels: ['Span Resort Manali', 'Snowflake Cottages', 'Banjara Camps Manali'],
      famousRestaurants: ['Rohtang Dhaba', 'Manu Allaya Hotel Restaurant']
    },
    {
      name: 'Kasol, Parvati Valley',
      slug: 'kasol',
      category: 'Backpacker Haven',
      image: '/images/himachal-pradesh/kasol/hero-v3.jpg',
      overview: 'A small hamlet on the Parvati River, Kasol is a popular backpacker village known as the "Amsterdam of India", serving as the trailhead for Kheerganga, Tosh, and Pin Parvati treks through dense pine forests.',
      rating: 4.88,
      bestTimeToVisit: 'October – June',
      shortDesc: 'Himalayan backpacker haven and trailhead for Parvati Valley treks.',
      gallery: [
        '/images/himachal-pradesh/kasol/gallery-1-v3.jpg',
        '/images/himachal-pradesh/kasol/gallery-2-v3.jpg',
        '/images/himachal-pradesh/kasol/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kheerganga Trek', 'Manikaran Gurudwara', 'Tosh Village', 'Chalal Trek'],
      recommendedHotels: ['Snow Valley Resorts Kasol', 'Zostel Kasol', 'The Pinewood Hotel'],
      famousRestaurants: ['Moon Dance Cafe', 'Jim Morrison Cafe', 'Evergreen Cafe Kasol']
    }
  ]
};
