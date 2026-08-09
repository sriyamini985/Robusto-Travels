export interface WestBengalPlace {
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

export interface WestBengalStateData {
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
  famousPlaces: WestBengalPlace[];
}

export const WEST_BENGAL_DATA: WestBengalStateData = {
  id: 'west-bengal',
  name: 'West Bengal',
  type: 'State',
  capital: 'Kolkata',
  tagline: 'Sweetest Part of India',
  heroImage: '/images/west-bengal/kolkata-victoria-memorial/hero-v3.jpg',
  about: 'West Bengal, stretching from the snowy peaks of the Himalayas to the mangrove delta of the Bay of Bengal, is India\'s cultural capital — famous for the UNESCO Darjeeling Himalayan Railway toy train, world\'s largest mangrove delta Sundarbans (home to Royal Bengal Tigers), colonial marble splendor of Victoria Memorial in Kolkata, terracotta temples of Bishnupur, and Rabindranath Tagore\'s Nobel legacy at Shantiniketan.',
  bestTime: 'October – March',
  climate: 'Tropical to humid subtropical climate. Hot summers (April–June, 28°C–38°C), monsoon season (July–September), and pleasant, cool winters (October–March, 12°C–24°C; freezing in Himalayan Darjeeling). Best visited October to March.',
  famousFood: ['Rosogolla', 'Mishti Doi', 'Kolkata Kathi Roll', 'Kosha Mangsho (Mutton)', 'Shorshe Ilish (Hilsa Mustard Curry)', 'Luchi & Alur Dom', 'Sondesh', 'Biryani (Kolkata Style with Potato)'],
  culture: 'Rich literary and artistic heritage of Rabindranath Tagore, grand Durga Puja (UNESCO Intangible Cultural Heritage), Baul folk music, classical Indian cinema, Kantha embroidery, and passion for football & sweets.',
  famousPlaces: [
    {
      name: 'Kolkata — Victoria Memorial & Howrah Bridge',
      slug: 'kolkata-victoria-memorial',
      category: 'Cultural Capital & Colonial Heritage',
      image: '/images/west-bengal/kolkata-victoria-memorial/hero-v3.jpg',
      overview: 'Known as the "City of Joy", Kolkata is India\'s cultural capital featuring the majestic white Makrana marble Victoria Memorial built in 1921, iconic 705m cantilever Howrah Bridge over the Hooghly River, Park Street, and College Street bookstores.',
      rating: 4.98,
      bestTimeToVisit: 'October – March (Durga Puja in Oct)',
      shortDesc: '"City of Joy" — white marble Victoria Memorial, iconic Howrah Bridge & Durga Puja.',
      gallery: [
        '/images/west-bengal/kolkata-victoria-memorial/gallery-1-v3.jpg',
        '/images/west-bengal/kolkata-victoria-memorial/gallery-2-v3.jpg',
        '/images/west-bengal/kolkata-victoria-memorial/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Victoria Memorial Hall', 'Howrah Bridge', 'Dakshineswar Kali Temple', 'Indian Museum'],
      recommendedHotels: ['The Oberoi Grand Kolkata', 'Taj Bengal Kolkata', 'ITC Sonar Kolkata'],
      famousRestaurants: ['Arsalan Biryani Park Circus', 'Peter Cat Park Street (Cheelo Kabab)', '6 Ballygunge Place']
    },
    {
      name: 'Darjeeling & Tiger Hill',
      slug: 'darjeeling',
      category: 'UNESCO Himalayan Tea Realm',
      image: '/images/west-bengal/darjeeling/hero-v3.jpg',
      overview: 'Perched at 2,045m in the Himalayas, Darjeeling is world-famous for champagne Darjeeling tea estates, the UNESCO World Heritage steam toy train (Darjeeling Himalayan Railway), and 4:00 AM sunrise views over Mount Kanchenjunga from Tiger Hill.',
      rating: 4.97,
      bestTimeToVisit: 'March – May & October – December',
      shortDesc: 'Queen of the Hills — UNESCO steam toy train, Darjeeling tea gardens & Kanchenjunga sunrise.',
      gallery: [
        '/images/west-bengal/darjeeling/gallery-1-v3.jpg',
        '/images/west-bengal/darjeeling/gallery-2-v3.jpg',
        '/images/west-bengal/darjeeling/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tiger Hill Sunrise Point', 'Batasia Loop', 'Happy Valley Tea Estate', 'Himalayan Mountaineering Institute'],
      recommendedHotels: ['The Elgin Darjeeling', 'Windamere Hotel Darjeeling', 'Mayfair Hill Resort Darjeeling'],
      famousRestaurants: ['Glenary\'s Bakery & Restaurant', 'Kunga Restaurant (Momos)', 'Nathmulls Tea Cosy']
    },
    {
      name: 'Sundarbans National Park',
      slug: 'sundarbans-park',
      category: 'UNESCO Mangrove & Tiger Reserve',
      image: '/images/west-bengal/sundarbans-park/hero-v3.jpg',
      overview: 'Spanning 10,000 sq km across India and Bangladesh, the UNESCO World Heritage Sundarbans is the world\'s largest mangrove forest, famous for swimming Royal Bengal Tigers, saltwater crocodiles, mudskippers, and boat safaris through tidal waterways.',
      rating: 4.96,
      bestTimeToVisit: 'October – March',
      shortDesc: 'World\'s largest UNESCO mangrove delta, home to swimming Royal Bengal Tigers.',
      gallery: [
        '/images/west-bengal/sundarbans-park/gallery-1-v3.jpg',
        '/images/west-bengal/sundarbans-park/gallery-2-v3.jpg',
        '/images/west-bengal/sundarbans-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Sajnekhali Watch Tower', 'Sudhanyakhali Watch Tower', 'Dobanki Canopy Walk', 'Netidhopani Ruins'],
      recommendedHotels: ['Sunderban Tiger Camp', 'Sundarbans Eco Resort', 'Pakhiralay Tourist Lodge'],
      famousRestaurants: ['Sunderban Camp Dining Hall', 'Boat Safari Cooked Meals']
    },
    {
      name: 'Kalimpong',
      slug: 'kalimpong',
      category: 'Himalayan Orchid & Monastic Town',
      image: '/images/west-bengal/kalimpong/hero-v3.jpg',
      overview: 'Nestled at 1,250m overlooking the Teesta River valley, Kalimpong is a serene hill station famous for exotic orchid nurseries, 17th-century Zang Dhok Palri Phodang monastery, Deolo Hill panoramic viewpoints, and colonial heritage schools.',
      rating: 4.91,
      bestTimeToVisit: 'March – May & October – December',
      shortDesc: 'Serene 1,250m hill town famous for flower nurseries, Deolo Hill views & Buddhist monasteries.',
      gallery: [
        '/images/west-bengal/kalimpong/gallery-1-v3.jpg',
        '/images/west-bengal/kalimpong/gallery-2-v3.jpg',
        '/images/west-bengal/kalimpong/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Deolo Hill', 'Durpin Monastery', 'Pine View Nursery (Cactus)', 'Morgan House'],
      recommendedHotels: ['The Elgin Silver Oaks Kalimpong', 'Mayfair Himalayan Spa Resort', 'Morgan House Tourist Lodge'],
      famousRestaurants: ['King Thai Kalimpong', 'Art Cafe Kalimpong', 'Lama Restaurant']
    },
    {
      name: 'Digha Beach',
      slug: 'digha-beach',
      category: 'Bay of Bengal Coastal Resort',
      image: '/images/west-bengal/digha-beach/hero-v3.jpg',
      overview: 'Stretching along the calm waters of the Bay of Bengal 180 km from Kolkata, Digha is West Bengal\'s most popular seaside resort town, featuring flat casuarina-lined beaches, Marine Aquarium, and fresh seafood shacks.',
      rating: 4.88,
      bestTimeToVisit: 'October – March',
      shortDesc: 'West Bengal\'s premier seaside resort on the Bay of Bengal with casuarina-lined beaches.',
      gallery: [
        '/images/west-bengal/digha-beach/gallery-1-v3.jpg',
        '/images/west-bengal/digha-beach/gallery-2-v3.jpg',
        '/images/west-bengal/digha-beach/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['New Digha Beach', 'Old Digha Promenade', 'Marine Aquarium & Regional Centre', 'Mandarmani Beach (30 km)'],
      recommendedHotels: ['Hotel Sea Hawk Digha', 'LeToscana Digha', 'Hotel Saikatabas Digha'],
      famousRestaurants: ['Digha Seafood Stalls', 'Purbasha Restaurant', 'Vankatesh Hotel Dining']
    },
    {
      name: 'Shantiniketan',
      slug: 'shantiniketan',
      category: 'UNESCO Nobel Heritage & Open-Air University',
      image: '/images/west-bengal/shantiniketan/hero-v3.jpg',
      overview: 'Founded by Maharshi Debendranath Tagore and expanded into Visva-Bharati University by Nobel laureate Rabindranath Tagore in 1901, UNESCO World Heritage Shantiniketan is an open-air cultural town famous for Poush Mela and Basanta Utsav (Holi).',
      rating: 4.95,
      bestTimeToVisit: 'October – March (Poush Mela in December & Basanta Utsav in March)',
      shortDesc: 'Rabindranath Tagore\'s UNESCO open-air university town famous for Poush Mela & arts.',
      gallery: [
        '/images/west-bengal/shantiniketan/gallery-1-v3.jpg',
        '/images/west-bengal/shantiniketan/gallery-2-v3.jpg',
        '/images/west-bengal/shantiniketan/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Uttarayan Complex (Tagore\'s Houses)', 'Rabindra Bhavana Museum', 'Kopai River', 'Kankalitala Temple'],
      recommendedHotels: ['The Camelot Resort Shantiniketan', 'Hotel Sonar Tori Shantiniketan', 'Chhutti Holiday Resort'],
      famousRestaurants: ['Ramshyam Village Resort Dining', 'Ghare Baire Shantiniketan', 'Kopai Restaurant']
    },
    {
      name: 'Bishnupur Terracotta Temples',
      slug: 'bishnupur-temples',
      category: '17th-Century Terracotta Heritage',
      image: '/images/west-bengal/bishnupur-temples/hero-v3.jpg',
      overview: 'Ruled by the Malla kings from the 17th century, Bishnupur in Bankura district is world-renowned for its unique terracotta temples (Rasmancha, Jor Bangla, Madan Mohan) built from burnt red clay carved with Ramayana bas-reliefs, and Baluchari silk saris.',
      rating: 4.93,
      bestTimeToVisit: 'October – March (Bishnupur Mela in December)',
      shortDesc: '17th-century Malla dynasty red burnt-clay terracotta temples and Baluchari silk weaving.',
      gallery: [
        '/images/west-bengal/bishnupur-temples/gallery-1-v3.jpg',
        '/images/west-bengal/bishnupur-temples/gallery-2-v3.jpg',
        '/images/west-bengal/bishnupur-temples/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Rasmancha', 'Jor Bangla Temple', 'Madan Mohan Temple', 'Dalmadal Cannon'],
      recommendedHotels: ['Bishnupur Tourist Lodge (WBTDCL)', 'Hotel Monalisa Bishnupur'],
      famousRestaurants: ['Bishnupur Lodge Dining Hall', 'Local Bengali Thali Hotels']
    },
    {
      name: 'Cooch Behar Palace',
      slug: 'cooch-behar-palace',
      category: 'Royal Renaissance Palace',
      image: '/images/west-bengal/cooch-behar-palace/hero-v3.jpg',
      overview: 'Modelled after Buckingham Palace in London, the Victor Jubilee Palace (Cooch Behar Rajbari) built in 1887 by Maharaja Nripendra Narayan is a classical European Renaissance brick palace featuring 51 rooms, domed durbar hall, and landscaped gardens.',
      rating: 4.90,
      bestTimeToVisit: 'October – March (Rash Mela in November)',
      shortDesc: '1887 European Renaissance royal palace modeled after London\'s Buckingham Palace.',
      gallery: [
        '/images/west-bengal/cooch-behar-palace/gallery-1-v3.jpg',
        '/images/west-bengal/cooch-behar-palace/gallery-2-v3.jpg',
        '/images/west-bengal/cooch-behar-palace/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Madan Mohan Temple Cooch Behar', 'Baneswar Shiva Temple', 'Rasikbil Bird Sanctuary'],
      recommendedHotels: ['Cooch Behar Tourist Lodge', 'Hotel Royal Palace Cooch Behar'],
      famousRestaurants: ['Royal Palace Dining', 'Cooch Behar Sweets']
    }
  ]
};
