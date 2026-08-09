export interface OdishaPlace {
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

export interface OdishaStateData {
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
  famousPlaces: OdishaPlace[];
}

export const ODISHA_DATA: OdishaStateData = {
  id: 'odisha',
  name: 'Odisha',
  type: 'State',
  capital: 'Bhubaneswar',
  tagline: 'Soul of Incredible India',
  heroImage: '/images/odisha/konark-sun-temple/hero-v3.jpg',
  about: 'Odisha, on India\'s eastern Bay of Bengal coast, is a land of architectural wonders including the 13th-century Konark Sun Temple chariot, sacred Jagannath Temple in Puri, Asia\'s largest brackish lagoon at Chilika Lake, salt-water crocodile wilderness at Bhitarkanika, and classical Odissi dance.',
  bestTime: 'October – March',
  climate: 'Tropical climate with hot summers (March–June, up to 40°C), heavy monsoon rains (July–September), and mild winters (October–February, 12°C–28°C). Best visited October to March.',
  famousFood: ['Pakhala Bhata', 'Chhena Poda (baked cheese dessert)', 'Dalma', 'Rasagola (GI tagged)', 'Chungudi Malai Curry (prawn curry)', 'Kakara Pitha', 'Abhada (temple mahaprasad)'],
  culture: 'Home to classical Odissi dance, centuries-old Rath Yatra chariot festival in Puri, Patachitra scroll paintings, Silver Filigree (Tarakasi) art from Cuttack, and ancient Kalinga architecture.',
  famousPlaces: [
    {
      name: 'Konark Sun Temple',
      slug: 'konark-sun-temple',
      category: 'UNESCO World Heritage',
      image: '/images/odisha/konark-sun-temple/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site built in the 13th century by King Narasimhadeva I, the Black Pagoda at Konark is shaped like a colossal 24-wheeled stone chariot pulled by seven horses, decorated with world-famous stone carvings.',
      rating: 4.98,
      bestTimeToVisit: 'October – March (Konark Dance Festival in December)',
      shortDesc: '13th-century UNESCO stone chariot sun temple with 24 carved wheels pulled by 7 horses.',
      gallery: [
        '/images/odisha/konark-sun-temple/gallery-1-v3.jpg',
        '/images/odisha/konark-sun-temple/gallery-2-v3.jpg',
        '/images/odisha/konark-sun-temple/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Chandrabhaga Beach', 'Kuruma Buddhist Site', 'Puri', 'Bhubaneswar'],
      recommendedHotels: ['Lotus Eco Beach Resort Konark', 'Toshali Sands Puri', 'Mayfair Waves Puri'],
      famousRestaurants: ['MPTDC Sun Temple Restaurant', 'Chandrabhaga Beach Stalls']
    },
    {
      name: 'Jagannath Temple & Puri Beach',
      slug: 'puri-jagannath',
      category: 'Char Dham Pilgrimage',
      image: '/images/odisha/puri-jagannath/hero-v3.jpg',
      overview: 'One of the four sacred Char Dham pilgrimage sites of India, the 12th-century Jagannath Temple in Puri is world-renowned for the annual Rath Yatra (chariot festival), Mahaprasad cooked in earthen pots, and golden golden-sand Puri Beach.',
      rating: 4.97,
      bestTimeToVisit: 'October – March (Rath Yatra in June/July)',
      shortDesc: 'Sacred Char Dham shrine famous for the grand Rath Yatra chariot festival and golden beaches.',
      gallery: [
        '/images/odisha/puri-jagannath/gallery-1-v3.jpg',
        '/images/odisha/puri-jagannath/gallery-2-v3.jpg',
        '/images/odisha/puri-jagannath/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Puri Golden Beach', 'Swargadwar', 'Raghurajpur Crafts Village', 'Konark'],
      recommendedHotels: ['Mayfair Waves Puri', 'The Hans Coco Palms', 'Promenade Hotel Puri'],
      famousRestaurants: ['Ananda Bazar (Temple Mahaprasad)', 'Wild Grass Restaurant Puri', 'Chung Wah']
    },
    {
      name: 'Chilika Lake',
      slug: 'chilika-lake',
      category: 'Lagoon & Bird Sanctuary',
      image: '/images/odisha/chilika-lake/hero-v3.jpg',
      overview: 'Asia\'s largest brackish water lagoon, Chilika Lake spans over 1,100 sq km, hosting over 160 species of migratory winter birds at Nalabana Bird Sanctuary and rare Irrawaddy dolphins near Satapada.',
      rating: 4.94,
      bestTimeToVisit: 'November – February (peak migratory bird & dolphin season)',
      shortDesc: 'Asia\'s largest brackish lagoon hosting Irrawaddy dolphins and millions of winter migratory birds.',
      gallery: [
        '/images/odisha/chilika-lake/gallery-1-v3.jpg',
        '/images/odisha/chilika-lake/gallery-2-v3.jpg',
        '/images/odisha/chilika-lake/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Satapada Dolphin Point', 'Nalabana Island', 'Kalijai Temple', 'Barkul'],
      recommendedHotels: ['OTDC Panthanivas Barkul', 'OTDC Satapada', 'Mayfair Heritage Puri'],
      famousRestaurants: ['Chilika Crab & Fish Stalls Satapada', 'Panthanivas Restaurant Barkul']
    },
    {
      name: 'Bhubaneswar Temples',
      slug: 'bhubaneswar',
      category: 'Temple Capital of India',
      image: '/images/odisha/bhubaneswar/hero-v3.jpg',
      overview: 'Known as the "Temple City of India", Bhubaneswar once boasted over 7,000 temples; today, highlights include the 11th-century Lingaraj Temple (180 ft spire), Mukteshvara Temple (gem of Kalinga architecture), and Rajarani Temple.',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: '"Temple City of India" featuring the 11th-century Lingaraj and Mukteshvara Kalinga temples.',
      gallery: [
        '/images/odisha/bhubaneswar/gallery-1-v3.jpg',
        '/images/odisha/bhubaneswar/gallery-2-v3.jpg',
        '/images/odisha/bhubaneswar/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Udayagiri & Khandagiri Caves', 'Dhauli Peace Pagoda', 'Nandankanan Zoo', 'Tribal Museum'],
      recommendedHotels: ['Mayfair Lagoon Bhubaneswar', 'Trident Bhubaneswar', 'Welcomhotel Bhubaneswar'],
      famousRestaurants: ['Truptee Restaurant', 'Dalma Restaurant Bhubaneswar', 'Kazi\'s Kitchen']
    },
    {
      name: 'Simlipal National Park',
      slug: 'simlipal-national-park',
      category: 'Tiger Reserve & Waterfalls',
      image: '/images/odisha/simlipal-national-park/hero-v3.jpg',
      overview: 'Part of the UNESCO World Network of Biosphere Reserves, Simlipal is a massive 2,750 sq km tiger reserve of dense sal forests, waterfalls like Joranda and Barehipani (400m), Bengal tigers, melanistic tigers, and elephants.',
      rating: 4.92,
      bestTimeToVisit: 'November – June (closed July–October)',
      shortDesc: 'UNESCO Biosphere Reserve with Bengal tigers, melanistic tigers, and 400m Barehipani Falls.',
      gallery: [
        '/images/odisha/simlipal-national-park/gallery-1-v3.jpg',
        '/images/odisha/simlipal-national-park/gallery-2-v3.jpg',
        '/images/odisha/simlipal-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Barehipani Waterfall', 'Joranda Waterfall', 'Sitakund Waterfall', 'Baripada'],
      recommendedHotels: ['Aranya Nivas Lulung', 'Simlipal Eco Cottage Jasipur', 'OTDC Panthanivas Baripada'],
      famousRestaurants: ['Eco Cottage Dining Hall', 'Jasipur Highway Dhabas']
    },
    {
      name: 'Bhitarkanika National Park',
      slug: 'bhitarkanika-national-park',
      category: 'Mangrove & Crocodile Sanctuary',
      image: '/images/odisha/bhitarkanika-national-park/hero-v3.jpg',
      overview: 'India\'s second-largest mangrove ecosystem and a Ramsar site, Bhitarkanika is famous for massive saltwater crocodiles (including 20-ft record giants), white crocodiles, King cobras, and Gahirmatha beach — the world\'s largest nesting ground for Olive Ridley sea turtles.',
      rating: 4.95,
      bestTimeToVisit: 'October – March (Olive Ridley nesting Dec–April)',
      shortDesc: 'Ramsar mangrove wetland famous for giant saltwater crocodiles and Gahirmatha turtle nesting.',
      gallery: [
        '/images/odisha/bhitarkanika-national-park/gallery-1-v3.jpg',
        '/images/odisha/bhitarkanika-national-park/gallery-2-v3.jpg',
        '/images/odisha/bhitarkanika-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Gahirmatha Turtle Sanctuary', 'Dangmal Crocodile Center', 'Habalikhati Beach'],
      recommendedHotels: ['Estuary Village Resort Bhitarkanika', 'Bhitarkanika Eco Resort', 'Dangmal Forest Lodge'],
      famousRestaurants: ['Estuary Resort Restaurant', 'Dangmal Canteen']
    },
    {
      name: 'Gopalpur-on-Sea',
      slug: 'gopalpur-beach',
      category: 'Beach Resort',
      image: '/images/odisha/gopalpur-beach/hero-v3.jpg',
      overview: 'A historic seaport turned tranquil beach resort on the Bay of Bengal, Gopalpur features quiet coconut-fringed golden sands, an old lighthouse, ruined colonial bungalows, and fresh seafood.',
      rating: 4.88,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Tranquil colonial beach resort on the Bay of Bengal with lighthouse and golden sands.',
      gallery: [
        '/images/odisha/gopalpur-beach/gallery-1-v3.jpg',
        '/images/odisha/gopalpur-beach/gallery-2-v3.jpg',
        '/images/odisha/gopalpur-beach/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tampara Lake', 'Ganjam Beach', 'Taratarini Temple', 'Berhampur'],
      recommendedHotels: ['Mayfair Palm Beach Resort Gopalpur', 'Swosti Palm Resort Gopalpur', 'OTDC Panthanivas'],
      famousRestaurants: ['Mayfair Beach Restaurant', 'Gopalpur Seafood Stalls']
    },
    {
      name: 'Hirakud Dam',
      slug: 'hirakud-dam',
      category: 'Engineering Wonder',
      image: '/images/odisha/hirakud-dam/hero-v3.jpg',
      overview: 'Built across the Mahanadi River near Sambalpur, Hirakud Dam is one of the longest earthen dams in the world (25.8 km total length), featuring Gandhi Minar and Nehru Minar watchtowers offering panoramic reservoir views.',
      rating: 4.89,
      bestTimeToVisit: 'October – March',
      shortDesc: 'One of the world\'s longest earthen dams (25.8 km) across the Mahanadi River near Sambalpur.',
      gallery: [
        '/images/odisha/hirakud-dam/gallery-1-v3.jpg',
        '/images/odisha/hirakud-dam/gallery-2-v3.jpg',
        '/images/odisha/hirakud-dam/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Gandhi Minar Watchtower', 'Samaleswari Temple Sambalpur', 'Debrigarh Wildlife Sanctuary'],
      recommendedHotels: ['Hotel Crown Sambalpur', 'OTDC Panthanivas Sambalpur', 'The Grand Sambalpur'],
      famousRestaurants: ['Gandhi Minar Stalls', 'Sambalpur Town Dhabas']
    }
  ]
};
