export interface BiharPlace {
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

export interface BiharStateData {
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
  famousPlaces: BiharPlace[];
}

export const BIHAR_DATA: BiharStateData = {
  id: 'bihar',
  name: 'Bihar',
  type: 'State',
  capital: 'Patna',
  tagline: 'Abode of Enlightenment & Heritage',
  heroImage: '/images/bihar/mahabodhi-temple/hero-v3.jpg',
  about: 'Bihar is the cradle of ancient civilizations and religions, being the birthplace of Buddhism and Jainism. Home to Nalanda University and Bodh Gaya, it features deep historical roots along the holy Ganges River.',
  bestTime: 'October – March',
  climate: 'Humid subtropical climate with hot summers (30°C – 42°C) and pleasant, mild winters (10°C – 24°C).',
  famousFood: ['Litti Chokha (Baked Sattu Balls)', 'Thekua (Sweet Wheat Cake)', 'Sattu Paratha', 'Khaja (Layered Pastry)', 'Malpua'],
  culture: 'Ancient traditions including Madhubani hand-paintings, Chhath Puja sun-worship festivals, folk songs, and heritage crafts of Bhagalpur silk.',
  famousPlaces: [
    {
      name: 'Mahabodhi Temple Complex',
      slug: 'mahabodhi-temple',
      category: 'Spiritual Shrine',
      image: '/images/bihar/mahabodhi-temple/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site in Bodh Gaya, this ancient temple marks the location where Gautama Buddha attained enlightenment under the sacred Bodhi Tree around 500 BCE.',
      rating: 4.98,
      bestTimeToVisit: 'October – March',
      shortDesc: 'UNESCO World Heritage site where Buddha attained enlightenment.',
      gallery: [
        '/images/bihar/mahabodhi-temple/gallery-1-v3.jpg',
        '/images/bihar/mahabodhi-temple/gallery-2-v3.jpg',
        '/images/bihar/mahabodhi-temple/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Great Buddha Statue', 'Thai Monastery', 'Royal Bhutan Monastery', 'Muchalinda Lake'],
      recommendedHotels: ['The Royal Residency Bodhgaya', 'Maha Bodhi Hotel Resort', 'Hotel Buddha International'],
      famousRestaurants: ['Sujata Restaurant', 'Be Happy Cafe Bodhgaya', 'Lotus Restaurant']
    },
    {
      name: 'Ruins of Nalanda Mahavihara',
      slug: 'nalanda-ruins',
      category: 'Historical Heritage',
      image: '/images/bihar/nalanda-ruins/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site, Nalanda was a highly acclaimed Buddhist monastery and one of the oldest residential universities in the world, thriving from the 5th century CE to 1200 CE.',
      rating: 4.96,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Archaeological ruins of the world’s ancient residential university.',
      gallery: [
        '/images/bihar/nalanda-ruins/gallery-1-v3.jpg',
        '/images/bihar/nalanda-ruins/gallery-2-v3.jpg',
        '/images/bihar/nalanda-ruins/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Nalanda Archaeological Museum', 'Xuanzang Memorial Hall', 'Kundalpur Jain Temple'],
      recommendedHotels: ['Hotel Rajgir Residency', 'Indo Hokke Hotel Rajgir', 'Haritha Rest House'],
      famousRestaurants: ['Green Leaf Restaurant', 'Nalanda Cafeteria']
    },
    {
      name: 'Vishwa Shanti Stupa, Rajgir',
      slug: 'rajgir',
      category: 'Spiritual Shrine',
      image: '/images/bihar/rajgir/hero-v3.jpg',
      overview: 'Perched on the Ratnagiri Hill, the Vishwa Shanti Stupa (Peace Pagoda) is a massive white dome structure built by the Japanese Buddhist community, accessible via an iconic single-seat ropeway.',
      rating: 4.92,
      bestTimeToVisit: 'October – February',
      shortDesc: 'Hilltop Japanese Peace Pagoda reached by a scenic ropeway.',
      gallery: [
        '/images/bihar/rajgir/gallery-1-v3.jpg',
        '/images/bihar/rajgir/gallery-2-v3.jpg',
        '/images/bihar/rajgir/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Griddhakuta Hill (Vulture Peak)', 'Gora Katora Lake', 'Rajgir Hot Springs (Brahmakund)', 'Cyclopean Wall'],
      recommendedHotels: ['Indo Hokke Hotel', 'The Pandu Pokhar Eco Adventure Resort', 'Hotel Gargee Gautam Vihar'],
      famousRestaurants: ['Lotus Restaurant', 'Bhojanalaya Veg Restaurant']
    },
    {
      name: 'Ashoka Pillar, Vaishali',
      slug: 'vaishali',
      category: 'Historical Heritage',
      image: '/images/bihar/vaishali/hero-v3.jpg',
      overview: 'The birth place of Lord Mahavira and capital of the ancient Licchavi republic features a well-preserved polished sandstone Ashokan Pillar surmounted by a single lion capital overlooking a coronation tank.',
      rating: 4.88,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Ancient capital of Licchavi republic with polished Ashokan Pillar.',
      gallery: [
        '/images/bihar/vaishali/gallery-1-v3.jpg',
        '/images/bihar/vaishali/gallery-2-v3.jpg',
        '/images/bihar/vaishali/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Buddha Relic Stupa', 'Abhishek Pushkarini (Coronation Tank)', 'Kundanpur (Mahavira Birthplace)'],
      recommendedHotels: ['Hotel Vaishali Residency', 'Hotel Gargee Grand Patna'],
      famousRestaurants: ['Vaishali Heritage Restaurant', 'Village Dhaba']
    },
    {
      name: 'Tomb of Sher Shah Suri, Sasaram',
      slug: 'sher-shah-suri-tomb',
      category: 'Historical Heritage',
      image: '/images/bihar/sher-shah-suri-tomb/hero-v3.jpg',
      overview: 'An architectural masterpiece of Indo-Islamic style, this red sandstone octagonal tomb was built in 1545 in the middle of a large artificial lake, dedicated to Emperor Sher Shah Suri.',
      rating: 4.90,
      bestTimeToVisit: 'November – February',
      shortDesc: 'Magnificent Indo-Islamic octagonal tomb situated in the middle of a lake.',
      gallery: [
        '/images/bihar/sher-shah-suri-tomb/gallery-1-v3.jpg',
        '/images/bihar/sher-shah-suri-tomb/gallery-2-v3.jpg',
        '/images/bihar/sher-shah-suri-tomb/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tomb of Hasan Khan Suri', 'Rohtasgarh Fort'],
      recommendedHotels: ['Hotel Sona Sasaram', 'Maurya Royal Resort'],
      famousRestaurants: ['Sher Shah Diner', 'Sasaram Food Junction']
    },
    {
      name: 'Takht Sri Patna Sahib',
      slug: 'patna-sahib',
      category: 'Spiritual Shrine',
      image: '/images/bihar/patna-sahib/hero-v3.jpg',
      overview: 'Also known as Harmandir Sahib, this magnificent white-marble shrine in Old Patna commemorates the birthplace of Guru Gobind Singh Ji, the tenth Guru of the Sikhs, built by Maharaja Ranjit Singh.',
      rating: 4.94,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Revered Sikh Takht commemorating the birth of Guru Gobind Singh Ji.',
      gallery: [
        '/images/bihar/patna-sahib/gallery-1-v3.jpg',
        '/images/bihar/patna-sahib/gallery-2-v3.jpg',
        '/images/bihar/patna-sahib/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Gandhi Ghat Patna', 'Golghar', 'Patna Museum', 'Bihar Museum'],
      recommendedHotels: ['Hotel Maurya Patna', 'Lemon Tree Premier Patna', 'Gargee Grand Patna'],
      famousRestaurants: ['Pind Balluchi Patna', 'Bansi Vihar Veg Restaurant', 'Saffron Restaurant']
    },
    {
      name: 'Vikramashila University Ruins',
      slug: 'vikramashila',
      category: 'Historical Heritage',
      image: '/images/bihar/vikramashila/hero-v3.jpg',
      overview: 'Established by Pala King Dharmapala in the late 8th century, Vikramashila was one of the two most important centers of Buddhist learning in India along with Nalanda, featuring a massive stupa structure.',
      rating: 4.85,
      bestTimeToVisit: 'November – February',
      shortDesc: 'Ancient Pala-era Buddhist learning center ruins in Bhagalpur.',
      gallery: [
        '/images/bihar/vikramashila/gallery-1-v3.jpg',
        '/images/bihar/vikramashila/gallery-2-v3.jpg',
        '/images/bihar/vikramashila/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Vikramashila Dolphin Sanctuary (Ganges River)', 'Dolphin Observatory Tower'],
      recommendedHotels: ['Hotel Vineet Bhagalpur', 'Hotel Rajhans Bhagalpur'],
      famousRestaurants: ['Dolphin Restaurant', 'Bhagalpur Food Plaza']
    },
    {
      name: 'Valmiki National Park',
      slug: 'valmiki-national-park',
      category: 'Wildlife Sanctuary',
      image: '/images/bihar/valmiki-national-park/hero-v3.jpg',
      overview: 'Located in West Champaran district along the Gandak River on the Nepal border, Valmiki Tiger Reserve features dense sal forests, reed grasslands, and rich wildlife harboring Bengal tigers, rhinos, and hornbills.',
      rating: 4.87,
      bestTimeToVisit: 'November – April',
      shortDesc: 'Bihar’s only tiger reserve, located along the foothills of Himalayas.',
      gallery: [
        '/images/bihar/valmiki-national-park/gallery-1-v3.jpg',
        '/images/bihar/valmiki-national-park/gallery-2-v3.jpg',
        '/images/bihar/valmiki-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Gandak River Barrage', 'Valmiki Ashram', 'Jatashankar Temple'],
      recommendedHotels: ['Valmiki Tiger Reserve Eco Huts', 'Bettiah Tourist Lodge'],
      famousRestaurants: ['Eco Rest House Dining Hall', 'Jungle Cafe']
    }
  ]
};
