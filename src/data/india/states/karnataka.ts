export interface KarnatakaPlace {
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

export interface KarnatakaStateData {
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
  famousPlaces: KarnatakaPlace[];
}

export const KARNATAKA_DATA: KarnatakaStateData = {
  id: 'karnataka',
  name: 'Karnataka',
  type: 'State',
  capital: 'Bengaluru',
  tagline: 'One State, Many Worlds',
  heroImage: '/images/karnataka/hampi/hero-v3.jpg',
  about: 'Karnataka is a diverse southern state blending UNESCO World Heritage ruins at Hampi, the opulent Mysore Palace, misty Coorg coffee estates, India\'s second-highest waterfall at Jog Falls, pristine beaches at Gokarna, and rich Hoysala temple architecture.',
  bestTime: 'October – February',
  climate: 'Varies greatly — coastal Karnataka is tropical humid, Deccan plateau is semi-arid, and Western Ghats are cool and misty. Best weather October to February across the state.',
  famousFood: ['Bisi Bele Bath', 'Masala Dosa', 'Ragi Mudde', 'Coorg Pandi Curry', 'Mysore Pak', 'Neer Dosa', 'Akki Roti'],
  culture: 'Karnataka is home to Carnatic classical music, Yakshagana theatre, Mysore Dasara festival (10 days of royal pageantry), Kodava martial traditions, and exquisite Bidriware and Channapatna toy crafts.',
  famousPlaces: [
    {
      name: 'Hampi',
      slug: 'hampi',
      category: 'UNESCO World Heritage',
      image: '/images/karnataka/hampi/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site, Hampi is the haunting 14th-century capital of the Vijayanagara Empire scattered across 4,000+ ruins, boulder-strewn landscapes and the iconic Virupaksha Temple — one of the most extraordinary archaeological sites in all of Asia.',
      rating: 4.98,
      bestTimeToVisit: 'October – February',
      shortDesc: 'UNESCO ruins of the 14th-century Vijayanagara Empire — India\'s most stunning archaeological site.',
      gallery: [
        '/images/karnataka/hampi/gallery-1-v3.jpg',
        '/images/karnataka/hampi/gallery-2-v3.jpg',
        '/images/karnataka/hampi/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Vittala Temple & Stone Chariot', 'Tungabhadra Dam', 'Lotus Mahal', 'Elephant Stables'],
      recommendedHotels: ['Evolve Back Hampi', 'Kishkinda Heritage Resort', 'Mowgli Guesthouse Hampi'],
      famousRestaurants: ['Mango Tree Restaurant Hampi', 'Laughing Buddha Hampi', 'Ravi\'s Rose Restaurant']
    },
    {
      name: 'Mysore Palace',
      slug: 'mysore-palace',
      category: 'Royal Heritage',
      image: '/images/karnataka/mysore-palace/hero-v3.jpg',
      overview: 'One of the most visited monuments in India after the Taj Mahal, the Mysore Palace is a breathtaking Indo-Saracenic masterpiece of the Wadiyar dynasty, ablaze with 97,000 bulbs every Sunday and during the world-famous 10-day Dasara festival.',
      rating: 4.96,
      bestTimeToVisit: 'October (Dasara) & November – February',
      shortDesc: 'Indo-Saracenic royal palace lit with 97,000 bulbs — India\'s most visited monument after Taj Mahal.',
      gallery: [
        '/images/karnataka/mysore-palace/gallery-1-v3.jpg',
        '/images/karnataka/mysore-palace/gallery-2-v3.jpg',
        '/images/karnataka/mysore-palace/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Chamundeshwari Temple', 'Brindavan Gardens', 'St. Philomena\'s Church', 'Jaganmohan Palace'],
      recommendedHotels: ['Radisson Blu Plaza Hotel Mysuru', 'Royal Orchid Metropole', 'The Windflower Spa & Resort'],
      famousRestaurants: ['Hotel RRR Mysuru', 'Vinayaka Mylari', 'Lalitha Mahal Palace Restaurant']
    },
    {
      name: 'Coorg (Kodagu)',
      slug: 'coorg',
      category: 'Hill Station',
      image: '/images/karnataka/coorg/hero-v3.jpg',
      overview: 'Called the "Scotland of India", Coorg is a misty hill district in the Western Ghats blanketed with coffee and spice plantations, forested peaks, the Abbey Falls, Raja\'s Seat viewpoint, and a unique warrior Kodava culture unlike anywhere in India.',
      rating: 4.95,
      bestTimeToVisit: 'October – March (avoid July–August monsoon)',
      shortDesc: '"Scotland of India" — misty coffee estates and waterfalls in the Western Ghats.',
      gallery: [
        '/images/karnataka/coorg/gallery-1-v3.jpg',
        '/images/karnataka/coorg/gallery-2-v3.jpg',
        '/images/karnataka/coorg/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Abbey Falls', 'Namdroling Monastery (Golden Temple)', 'Dubare Elephant Camp', 'Talakaveri'],
      recommendedHotels: ['Evolve Back Coorg', 'The Tamara Coorg', 'Orange County Resort Coorg'],
      famousRestaurants: ['Coorg Cuisine Restaurant', 'Raintree Restaurant', 'Pandi Curry House Madikeri']
    },
    {
      name: 'Jog Falls',
      slug: 'jog-falls',
      category: 'Natural Wonder',
      image: '/images/karnataka/jog-falls/hero-v3.jpg',
      overview: 'India\'s second-highest plunge waterfall, Jog Falls plummets 253 meters in four distinct cascades — Raja, Rani, Rover and Rocket — on the Sharavathi River, creating a thunderous spectacle of mist and spray in the Western Ghats.',
      rating: 4.92,
      bestTimeToVisit: 'August – January (peak post-monsoon flow)',
      shortDesc: 'India\'s second-highest waterfall — four 253-metre cascades on the Sharavathi River.',
      gallery: [
        '/images/karnataka/jog-falls/gallery-1-v3.jpg',
        '/images/karnataka/jog-falls/gallery-2-v3.jpg',
        '/images/karnataka/jog-falls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Linganamakki Dam', 'Sigandur Chowdeshwari Temple', 'Tunga Anicut'],
      recommendedHotels: ['KSTDC Hotel Mayura Gerusoppa', 'Hotel Woodlands Sagara', 'Nature\'s Nest Resort'],
      famousRestaurants: ['Hotel Mayura Jog Falls Restaurant', 'Sagara Town Dhabas']
    },
    {
      name: 'Badami Cave Temples',
      slug: 'badami-caves',
      category: 'Ancient Heritage',
      image: '/images/karnataka/badami-caves/hero-v3.jpg',
      overview: 'Carved out of sandstone cliffs above a sacred lake in the 6th century CE by the Chalukya dynasty, the four Badami cave temples contain magnificent rock-cut sculptures including the 18-armed Nataraja, Vishnu in various forms, and intricate ceiling art.',
      rating: 4.91,
      bestTimeToVisit: 'October – March',
      shortDesc: '6th-century Chalukya rock-cut cave temples with magnificent sandstone sculptures.',
      gallery: [
        '/images/karnataka/badami-caves/gallery-1-v3.jpg',
        '/images/karnataka/badami-caves/gallery-2-v3.jpg',
        '/images/karnataka/badami-caves/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Pattadakal', 'Aihole', 'Banashankari Temple', 'Mahakuta Temples'],
      recommendedHotels: ['Hotel Mayura Chalukya Badami', 'Clarks Inn Badami', 'Rajsangam International'],
      famousRestaurants: ['Hotel Sanman Badami', 'Geeta Darshini', 'Karnataka Tourism Canteen']
    },
    {
      name: 'Bandipur National Park',
      slug: 'bandipur-national-park',
      category: 'National Park',
      image: '/images/karnataka/bandipur-national-park/hero-v3.jpg',
      overview: 'A premier Project Tiger reserve in southern India, Bandipur National Park spans 874 sq km of dry deciduous forest at the tri-junction of Karnataka, Tamil Nadu and Kerala, home to tigers, elephants, leopards, gaurs, dholes and 250+ bird species.',
      rating: 4.94,
      bestTimeToVisit: 'October – May (best wildlife in March–May)',
      shortDesc: 'Premier Project Tiger reserve with elephants, tigers and leopards in dry forest.',
      gallery: [
        '/images/karnataka/bandipur-national-park/gallery-1-v3.jpg',
        '/images/karnataka/bandipur-national-park/gallery-2-v3.jpg',
        '/images/karnataka/bandipur-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Nagarhole National Park', 'Mudumalai National Park', 'Ooty', 'Kabini River Lodge'],
      recommendedHotels: ['Tusker Trails Bandipur', 'Bandipur Safari Lodge', 'The Serai Kabini'],
      famousRestaurants: ['Forest Department Canteen', 'Jungle Lodges Restaurant Bandipur']
    },
    {
      name: 'Gokarna',
      slug: 'gokarna',
      category: 'Coastal Pilgrimage',
      image: '/images/karnataka/gokarna/hero-v3.jpg',
      overview: 'A sacred Hindu pilgrimage town on the Konkan coast, Gokarna blends the ancient Mahabaleshwar Shiva temple with pristine secluded beaches — Om Beach, Half Moon Beach, Paradise Beach — making it one of India\'s most unique beach-pilgrimage destinations.',
      rating: 4.90,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Sacred Shiva pilgrimage town with pristine Om Beach and Half Moon Beach.',
      gallery: [
        '/images/karnataka/gokarna/gallery-1-v3.jpg',
        '/images/karnataka/gokarna/gallery-2-v3.jpg',
        '/images/karnataka/gokarna/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Om Beach', 'Mahabaleshwar Temple', 'Murudeshwar Temple', 'Yana Caves'],
      recommendedHotels: ['SwaSwara Gokarna', 'Namaste Cafe Gokarna', 'Zostel Gokarna'],
      famousRestaurants: ['Mahalaxmi Hotel', 'Pai Hotel Gokarna', 'Om Beach Cafe']
    },
    {
      name: 'Chikmagalur',
      slug: 'chikmagalur',
      category: 'Coffee Country',
      image: '/images/karnataka/chikmagalur/hero-v3.jpg',
      overview: 'The birthplace of Indian coffee, Chikmagalur is a lush hill district in the Western Ghats famous for its fragrant coffee and spice estates, Mullayanagiri peak (Karnataka\'s highest), the sacred Baba Budan Giri hills, and misty forest trails.',
      rating: 4.89,
      bestTimeToVisit: 'September – March',
      shortDesc: 'Birthplace of Indian coffee — lush estates beneath Karnataka\'s highest peak.',
      gallery: [
        '/images/karnataka/chikmagalur/gallery-1-v3.jpg',
        '/images/karnataka/chikmagalur/gallery-2-v3.jpg',
        '/images/karnataka/chikmagalur/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Mullayanagiri Peak', 'Baba Budan Giri', 'Hebbe Falls', 'Kudremukh National Park'],
      recommendedHotels: ['Taj Madikeri Resort & Spa', 'Vanavihari Homestay', 'The Macroberry Chikmagalur'],
      famousRestaurants: ['Peacock Restaurant', 'Hotel Udupi Garden', 'Chikmagalur Coffee Estates Cafe']
    }
  ]
};
