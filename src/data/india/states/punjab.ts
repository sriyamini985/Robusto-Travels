export interface PunjabPlace {
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

export interface PunjabStateData {
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
  famousPlaces: PunjabPlace[];
}

export const PUNJAB_DATA: PunjabStateData = {
  id: 'punjab',
  name: 'Punjab',
  type: 'State',
  capital: 'Chandigarh',
  tagline: 'Land of Five Rivers',
  heroImage: '/images/punjab/golden-temple/hero-v3.jpg',
  about: 'Punjab, the "Land of Five Rivers", is an agricultural and spiritual heartland in northwestern India celebrated for the Golden Temple in Amritsar, beating retreat ceremony at Wagah Border, birthplace of Khalsa at Anandpur Sahib, rich royal heritage in Patiala, and legendary hospitality.',
  bestTime: 'October – March',
  climate: 'Semi-arid to subtropical. Hot summers (April–June, up to 45°C), monsoon rains (July–September), and cold winters (October–February, 4°C–20°C). Best visited October to March.',
  famousFood: ['Makki di Roti & Sarson da Saag', 'Butter Chicken', 'Amritsari Kulcha', 'Lassi', 'Chole Bhature', 'Dal Makhani', 'Pinni'],
  culture: 'Famed for Bhangra and Giddha folk dances, Baisakhi harvest festival, Hola Mohalla martial festival, Phulkari embroidery, traditional Dhol drumming, and community Langar traditions.',
  famousPlaces: [
    {
      name: 'Golden Temple (Harmandir Sahib)',
      slug: 'golden-temple',
      category: 'Sacred Sikh Shrine',
      image: '/images/punjab/golden-temple/hero-v3.jpg',
      overview: 'The holiest gurdwara of Sikhism, Harmandir Sahib (Golden Temple) in Amritsar is an architectural marvel coated in 750 kg of pure gold leaf, surrounded by the sacred Amrit Sarovar lake, serving free meals (Langar) to 100,000+ visitors daily.',
      rating: 4.99,
      bestTimeToVisit: 'October – March (Gurpurab & Baisakhi)',
      shortDesc: 'Holiest Sikh shrine coated in 750 kg of gold leaf, serving 100,000+ free meals daily.',
      gallery: [
        '/images/punjab/golden-temple/gallery-1-v3.jpg',
        '/images/punjab/golden-temple/gallery-2-v3.jpg',
        '/images/punjab/golden-temple/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Jallianwala Bagh', 'Akal Takht', 'Partition Museum', 'Wagah Border'],
      recommendedHotels: ['Taj Swarna Amritsar', 'Hyatt Regency Amritsar', 'Radisson Blu Amritsar'],
      famousRestaurants: ['Kesar Da Dhaba', 'Bhai Kulwant Singh Kulchan Wale', 'Bharawan Da Dhaba']
    },
    {
      name: 'Wagah Border Ceremony',
      slug: 'wagah-border',
      category: 'Patriotic Ceremony',
      image: '/images/punjab/wagah-border/hero-v3.jpg',
      overview: 'Located 28 km from Amritsar at the India-Pakistan border, the daily Beating Retreat ceremony features high-kicking, synchronized military drills by India\'s BSF and Pakistan Rangers amidst roaring patriotic crowds.',
      rating: 4.95,
      bestTimeToVisit: 'October – March (Ceremony daily before sunset)',
      shortDesc: 'Electrifying daily India-Pakistan military Beating Retreat border ceremony near Amritsar.',
      gallery: [
        '/images/punjab/wagah-border/gallery-1-v3.jpg',
        '/images/punjab/wagah-border/gallery-2-v3.jpg',
        '/images/punjab/wagah-border/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Golden Temple', 'Pul Kanjri', 'Attari Railway Station'],
      recommendedHotels: ['Taj Swarna Amritsar', 'Radisson Blu Amritsar'],
      famousRestaurants: ['Border Highway Dhabas', 'Amritsar City Eateries']
    },
    {
      name: 'Jallianwala Bagh',
      slug: 'jallianwala-bagh',
      category: 'National Memorial',
      image: '/images/punjab/jallianwala-bagh/hero-v3.jpg',
      overview: 'A poignant national memorial site in Amritsar where British troops under General Dyer opened fire on thousands of unarmed Indian peaceful gatherers on April 13, 1919, preserving the historic Martyrs\' Well and bullet-marked walls.',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Historic 1919 freedom struggle national memorial with preserved bullet walls and Martyrs\' Well.',
      gallery: [
        '/images/punjab/jallianwala-bagh/gallery-1-v3.jpg',
        '/images/punjab/jallianwala-bagh/gallery-2-v3.jpg',
        '/images/punjab/jallianwala-bagh/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Golden Temple', 'Partition Museum', 'Heritage Street Amritsar'],
      recommendedHotels: ['Hotel City Park Amritsar', 'Ramada Amritsar'],
      famousRestaurants: ['Giani Tea Stall', 'Ahuja Milk Bhandar', 'Kanha Sweets']
    },
    {
      name: 'Anandpur Sahib',
      slug: 'anandpur-sahib',
      category: 'Sikh Heritage & Fortress',
      image: '/images/punjab/anandpur-sahib/hero-v3.jpg',
      overview: 'Known as the "Holy City of Bliss", Anandpur Sahib is where Guru Gobind Singh Ji founded the Khalsa order in 1699, famous for Takht Sri Keshgarh Sahib, Virasat-e-Khalsa museum, and the grand Hola Mohalla martial festival.',
      rating: 4.96,
      bestTimeToVisit: 'October – March (Hola Mohalla in March)',
      shortDesc: 'Birthplace of Khalsa order in 1699 — home to Takht Sri Keshgarh Sahib and Hola Mohalla festival.',
      gallery: [
        '/images/punjab/anandpur-sahib/gallery-1-v3.jpg',
        '/images/punjab/anandpur-sahib/gallery-2-v3.jpg',
        '/images/punjab/anandpur-sahib/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Virasat-e-Khalsa Museum', 'Bhakra Dam', 'Naina Devi Temple'],
      recommendedHotels: ['Hotel Anandpur Sahib', 'White City Resort', 'Taj Chandigarh'],
      famousRestaurants: ['Anandpur Sahib Langar Hall', 'Highway Dhabas Ropar']
    },
    {
      name: 'Qila Mubarak & Patiala Fort',
      slug: 'qila-mubarak-patiala',
      category: 'Royal Sikh Architecture',
      image: '/images/punjab/qila-mubarak-patiala/hero-v3.jpg',
      overview: 'A magnificent 10-acre fort complex in the heart of Patiala built in 1763 by Baba Ala Singh, Qila Mubarak features the Qila Androon palace with exquisite mirror work (Ran Baas), weapons gallery, and royal chandelier collections.',
      rating: 4.90,
      bestTimeToVisit: 'October – March',
      shortDesc: '18th-century Patiala royal fort complex featuring mirror palace, armor museum and royal heritage.',
      gallery: [
        '/images/punjab/qila-mubarak-patiala/gallery-1-v3.jpg',
        '/images/punjab/qila-mubarak-patiala/gallery-2-v3.jpg',
        '/images/punjab/qila-mubarak-patiala/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Sheesh Mahal Patiala', 'Baradari Gardens', 'Gurdwara Dukh Nivaran Sahib'],
      recommendedHotels: ['The Baradari Palace Patiala', 'Mohan Continental', 'Hotel Eqbal Inn'],
      famousRestaurants: ['Nagpal Restaurant Patiala', 'Gopal Sweets Patiala']
    },
    {
      name: 'Kapurthala Jagatjit Palace',
      slug: 'kapurthala-palace',
      category: 'French Renaissance Palace',
      image: '/images/punjab/kapurthala-palace/hero-v3.jpg',
      overview: 'Modeled after the Palace of Versailles and Fontainebleau, the Jagatjit Palace in Kapurthala was built in 1908 by Maharaja Jagatjit Singh, showcasing extraordinary French Renaissance architecture, grand ballrooms and manicured gardens.',
      rating: 4.91,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Royal palace built in 1908 modeled after Versailles showcasing French Renaissance style.',
      gallery: [
        '/images/punjab/kapurthala-palace/gallery-1-v3.jpg',
        '/images/punjab/kapurthala-palace/gallery-2-v3.jpg',
        '/images/punjab/kapurthala-palace/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Elysée Palace Kapurthala', 'Moorish Mosque', 'Kanjli Wetland'],
      recommendedHotels: ['The Cabbana Resort & Spa Phagwara', 'Hotel Maya Jalandhar'],
      famousRestaurants: ['Kapurthala Town Restaurants', 'Jalandhar Highway Dhabas']
    },
    {
      name: 'Harike Wetland & Bird Sanctuary',
      slug: 'harike-wetland',
      category: 'Ramsar Wetland',
      image: '/images/punjab/harike-wetland/hero-v3.jpg',
      overview: 'The largest wetland in northern India created at the confluence of the Beas and Sutlej rivers, Harike is a Ramsar site supporting over 200,000 migratory winter waterbirds from Siberia and Central Asia alongside rare Indus river dolphins.',
      rating: 4.89,
      bestTimeToVisit: 'November – February (migratory bird season)',
      shortDesc: 'Northern India\'s largest Ramsar wetland at Beas-Sutlej confluence with 200,000+ migratory birds.',
      gallery: [
        '/images/punjab/harike-wetland/gallery-1-v3.jpg',
        '/images/punjab/harike-wetland/gallery-2-v3.jpg',
        '/images/punjab/harike-wetland/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Harike Barrage', 'Tarn Taran Sahib', 'Firozpur'],
      recommendedHotels: ['Harike Forest Rest House', 'Taj Swarna Amritsar'],
      famousRestaurants: ['Harike Barrage Dhabas', 'Highway Tea Stalls']
    },
    {
      name: 'Sheesh Mahal, Patiala',
      slug: 'sheesh-mahal-patiala',
      category: 'Mirror Palace & Art',
      image: '/images/punjab/sheesh-mahal-patiala/hero-v3.jpg',
      overview: 'Built in the 19th century by Maharaja Narinder Singh, the Palace of Mirrors in Patiala features walls covered in intricate mirror glass work, Kangra and Rajasthani miniature paintings, suspension bridge (Banasar Ghar), and medal museum.',
      rating: 4.90,
      bestTimeToVisit: 'October – March',
      shortDesc: '19th-century royal mirror palace featuring miniature art galleries and suspension bridge.',
      gallery: [
        '/images/punjab/sheesh-mahal-patiala/gallery-1-v3.jpg',
        '/images/punjab/sheesh-mahal-patiala/gallery-2-v3.jpg',
        '/images/punjab/sheesh-mahal-patiala/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Qila Mubarak Patiala', 'Baradari Gardens', 'Moti Bagh Palace'],
      recommendedHotels: ['The Baradari Palace Patiala', 'Hotel Eqbal Inn'],
      famousRestaurants: ['Patiala Shahi Dhaba', 'Gopal Sweets']
    }
  ]
};
