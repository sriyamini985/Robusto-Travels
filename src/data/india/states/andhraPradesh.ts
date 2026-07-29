export interface AndhraPradeshPlace {
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

export interface AndhraPradeshStateData {
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
  famousPlaces: AndhraPradeshPlace[];
}

export const ANDHRA_PRADESH_DATA: AndhraPradeshStateData = {
  id: 'andhra-pradesh',
  name: 'Andhra Pradesh',
  type: 'State',
  capital: 'Amaravati',
  tagline: 'The Sunrise State & Land of Sacred Temples',
  heroImage: '/images/andhra-pradesh/tirupati.png',
  about: 'Andhra Pradesh is a premier South Indian coastal state known for its rich spiritual heritage, dramatic Eastern Ghats hill valleys, ancient limestone caves, and legendary spicy coastal cuisine.',
  bestTime: 'October – March',
  climate: 'Tropical climate with pleasant winter temperatures ranging between 18°C and 28°C.',
  famousFood: ['Potharekulu (Paper Sweet)', 'Gongura Pachadi', 'Royyala Veepudu (Prawn Fry)', 'Ulavacharu', 'Kakinada Kaja'],
  culture: 'Celebrated for Kuchipudi classical dance traditions, Kalamkari textile handlooms, Kondapalli wooden toys, and grand temple festivals.',
  famousPlaces: [
    {
      name: 'Tirumala Venkateswara Temple (Tirupati)',
      slug: 'tirupati-venkateswara-temple',
      category: 'Spiritual Shrine',
      image: '/images/andhra-pradesh/tirupati.png',
      overview: 'Perched atop the sacred Seshachalam Hills in Tirupati, Sri Venkateswara Swamy Temple is one of the world’s most revered pilgrimage shrines, famous for its Dravidian gold-plated dome (Ananda Nilayam) and Tirupati Laddu Prasadam.',
      rating: 4.98,
      bestTimeToVisit: 'September – February',
      shortDesc: 'World-renowned hilltop temple of Lord Venkateswara at Tirumala.',
      gallery: [
        '/images/andhra-pradesh/tirupati.png'
      ],
      nearbyAttractions: ['Kapila Theertham Waterfalls', 'Sri Kalahasteeswara Temple', 'Silathoranam Natural Arch', 'Chandragiri Fort'],
      recommendedHotels: ['Fortune Select Grand Ridge Tirupati', 'Taj Tirupati', 'Marasa Sarovar Premiere'],
      famousRestaurants: ['Bhimas Deluxe Restaurant', 'Hotel Mayura Pure Veg', 'Minerva Grand Tirupati']
    },
    {
      name: 'Araku Valley',
      slug: 'araku-valley',
      category: 'Hill Station',
      image: '/images/andhra-pradesh/araku.png',
      overview: 'Nestled in the lush Eastern Ghats near Visakhapatnam, Araku Valley is an enchanting hill resort surrounded by misty green peaks, organic coffee plantations, terraced agricultural fields, and rich tribal heritage museum.',
      rating: 4.92,
      bestTimeToVisit: 'September – March',
      shortDesc: 'Lush Eastern Ghats hill valley famous for organic coffee and terraced green fields.',
      gallery: [
        '/images/andhra-pradesh/araku.png'
      ],
      nearbyAttractions: ['Katiki Waterfalls', 'Chaparai Water Cascade', 'Tribal Museum Araku', 'Padmapuram Gardens'],
      recommendedHotels: ['Haritha Hill Resort Araku', 'La Serene Resort Araku', 'Vistadome Rail Suite'],
      famousRestaurants: ['Vasundhara Coffee House', 'Bamboo Chicken Araku Hub', 'Haritha Restaurant']
    },
    {
      name: 'Borra Caves',
      slug: 'borra-caves',
      category: 'Natural Wonder',
      image: '/images/andhra-pradesh/borra-caves.png',
      overview: 'Discovered in 1807 in the Ananthagiri Hills of Visakhapatnam, Borra Caves are million-year-old natural limestone caves formed by the Gosthani River, featuring spectacular stalactite and stalagmite rock formations illuminated with natural sunlight and ambient lights.',
      rating: 4.89,
      bestTimeToVisit: 'November – February',
      shortDesc: 'Million-year-old limestone stalactite & stalagmite caves in Ananthagiri.',
      gallery: [
        '/images/andhra-pradesh/borra-caves.png'
      ],
      nearbyAttractions: ['Ananthagiri Coffee Plantations', 'Gosthani River Viewpoint', 'Katiki Falls Trek'],
      recommendedHotels: ['APTDC Punnamia Borra Resort', 'Tyda Jungle Bells Eco Resort'],
      famousRestaurants: ['Ananthagiri Bamboo Bites', 'Borra Cave Canteen']
    },
    {
      name: 'Gandikota (Grand Canyon of India)',
      slug: 'gandikota',
      category: 'Gorge & Fort',
      image: '/images/andhra-pradesh/gandikota.jpg',
      overview: 'Known as the Grand Canyon of India, Gandikota is a breathtaking gorge formed by the Penna River cutting through the Erramala hills in Kadapa district, enclosed by a medieval 13th-century red sandstone fortress.',
      rating: 4.95,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Breathtaking Penna river gorge enclosed by medieval red stone fort.',
      gallery: [
        '/images/andhra-pradesh/gandikota.jpg'
      ],
      nearbyAttractions: ['Gandikota Fort Granary', 'Madhavaraya Temple', 'Raghunathaswamy Temple', 'Mylavaram Dam'],
      recommendedHotels: ['Haritha Resort Gandikota', 'Freakouts Adventure Camp Gandikota'],
      famousRestaurants: ['Gandikota Cliffside Cafe', 'Haritha Restaurant Kadapa']
    },
    {
      name: 'Belum Caves',
      slug: 'belum-caves',
      category: 'Subterranean Wonder',
      image: '/images/andhra-pradesh/belum-caves.png',
      overview: 'Belum Caves in Kurnool district are the second longest cave system in the Indian subcontinent (3.5 km long). Famous for black limestone passages, subterranean stone sinkholes, freshwater siphons, and ancient Buddhist monk relics.',
      rating: 4.86,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Second longest subterranean cave system in the Indian subcontinent.',
      gallery: [
        '/images/andhra-pradesh/belum-caves.png'
      ],
      nearbyAttractions: ['Giant Dhyana Buddha Statue Belum', 'Yaganti Temple', 'Rollapadu Wildlife Sanctuary'],
      recommendedHotels: ['Haritha Belum Caves Resort', 'Hotel Mourya Inn Kurnool'],
      famousRestaurants: ['Belum Cave Restaurant', 'Kurnool Rayalaseema Ruchulu']
    },
    {
      name: 'Srisailam Temple & Tiger Reserve',
      slug: 'srisailam',
      category: 'Pilgrimage & Wildlife',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200',
      overview: 'Located on the banks of Krishna River in the Nallamala Hills, Srisailam houses Sri Mallikarjuna Swamy Temple (one of the 12 sacred Jyotirlingas and 18 Shakti Peethas) set within India’s largest tiger reserve forest.',
      rating: 4.94,
      bestTimeToVisit: 'September – March',
      shortDesc: 'Sacred Mallikarjuna Jyotirlinga shrine inside Nallamala forest reserve.',
      gallery: [
        'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Srisailam Dam Ropeway', 'Pathala Ganga', 'Akka Mahadevi Caves', 'Sakshi Ganapati Temple'],
      recommendedHotels: ['Haritha Srisailam', 'Grand Kousthubha Srisailam'],
      famousRestaurants: ['Srisailam Devasthanam Annaprasadam', 'Annapurna Mess']
    },
    {
      name: 'Visakhapatnam Beaches & Submarine',
      slug: 'visakhapatnam-beaches',
      category: 'Coastal City',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
      overview: 'Visakhapatnam (Vizag) is a vibrant coastal port city featuring golden sands at Rishikonda Beach, the historic INS Kursura Submarine Museum on RK Beach, Dolphin’s Nose headland, and Kailasagiri hilltop park.',
      rating: 4.90,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Rishikonda beach and INS Kursura Submarine Museum on RK Beach.',
      gallery: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['INS Kursura Submarine Museum', 'Kailasagiri Ropeway', 'Simhachalam Temple', 'Dolphin’s Nose Lighthouse'],
      recommendedHotels: ['The Gateway Hotel Beach Road Vizag', 'Novotel Visakhapatnam Varun Beach', 'Radisson Blu Resort Vizag'],
      famousRestaurants: ['Sea Inn (Raju Gaari Thali)', 'Dharani Restaurant', 'Kamat Restaurant Vizag']
    },
    {
      name: 'Lambasingi',
      slug: 'lambasingi',
      category: 'Alpine Village',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200',
      overview: 'Referred to as the "Kashmir of Andhra Pradesh", Lambasingi is a serene high-altitude village in Alluri Sitharama Raju district known for sub-zero winter temperatures, apple orchards, cloud beds, and strawberry farms.',
      rating: 4.88,
      bestTimeToVisit: 'November – January',
      shortDesc: 'Misty high-altitude hill village known as the Kashmir of Andhra Pradesh.',
      gallery: [
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Kothapalli Waterfalls', 'Lambasingi Strawberry Farms', 'Susan Garden Viewpoint'],
      recommendedHotels: ['Haritha Lambasingi Eco Resort', 'Lambasingi Tent Stays'],
      famousRestaurants: ['Lambasingi Hillside Food Court', 'Chintapalli Dhaba']
    }
  ]
};
