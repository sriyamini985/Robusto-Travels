export interface MadhyaPradeshPlace {
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

export interface MadhyaPradeshStateData {
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
  famousPlaces: MadhyaPradeshPlace[];
}

export const MADHYA_PRADESH_DATA: MadhyaPradeshStateData = {
  id: 'madhya-pradesh',
  name: 'Madhya Pradesh',
  type: 'State',
  capital: 'Bhopal',
  tagline: 'The Heart of Incredible India',
  heroImage: '/images/madhya-pradesh/khajuraho/hero-v3.jpg',
  about: 'Madhya Pradesh, the geographical heart of India, is a treasure trove of UNESCO World Heritage Sites, dense tiger reserves, ancient Buddhist stupas, medieval forts and the sacred Mahakaleshwar Jyotirlinga — offering an unmatched tapestry of nature, history and spirituality.',
  bestTime: 'October – March',
  climate: 'Subtropical climate. Hot summers (April–June, up to 45°C), pleasant winters (October–February, 10°C–25°C), and moderate monsoon (July–September). Best visited October to March.',
  famousFood: ['Bhutte Ka Kees', 'Poha Jalebi', 'Dal Bafla', 'Chakki Ki Shaak', 'Sabudana Khichdi', 'Mawa Bati', 'Korma'],
  culture: 'MP is rich in tribal Gond and Baiga art (Gond paintings), classical Dhrupad music of Gwalior, Tansen Music Festival, spectacular Khajuraho Dance Festival, and the sacred Simhastha Kumbh Mela at Ujjain.',
  famousPlaces: [
    {
      name: 'Khajuraho Temples',
      slug: 'khajuraho',
      category: 'UNESCO World Heritage',
      image: '/images/madhya-pradesh/khajuraho/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site, Khajuraho\'s 85 medieval Hindu and Jain temples (circa 950–1050 CE) built by the Chandela dynasty are celebrated worldwide for their exquisitely detailed erotic sculptures representing the Kama Sutra, alongside divine and celestial figures of extraordinary artistry.',
      rating: 4.97,
      bestTimeToVisit: 'October – March (Dance Festival in February)',
      shortDesc: 'UNESCO medieval temples with extraordinary erotic Chandela sculptures — 10th–11th century masterpieces.',
      gallery: [
        '/images/madhya-pradesh/khajuraho/gallery-1-v3.jpg',
        '/images/madhya-pradesh/khajuraho/gallery-2-v3.jpg',
        '/images/madhya-pradesh/khajuraho/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Panna National Park', 'Raneh Falls', 'Ajaigarh Fort', 'Ken River'],
      recommendedHotels: ['Lalit Temple View Khajuraho', 'Radisson Jass Hotel Khajuraho', 'Hotel Payal'],
      famousRestaurants: ['Raja Cafe Khajuraho', 'Mediterranean Restaurant', 'Safari Restaurant']
    },
    {
      name: 'Kanha National Park',
      slug: 'kanha-national-park',
      category: 'National Park',
      image: '/images/madhya-pradesh/kanha-national-park/hero-v3.jpg',
      overview: 'The inspiration for Rudyard Kipling\'s "The Jungle Book", Kanha is one of India\'s finest tiger reserves spanning 940 sq km of sal and bamboo forests, meadows and ravines, home to Bengal tigers, barasingha (hard-ground swamp deer), leopards, wild dogs and over 300 bird species.',
      rating: 4.96,
      bestTimeToVisit: 'November – June (closed July–October)',
      shortDesc: 'Kipling\'s "Jungle Book" inspiration — finest tiger reserve with barasingha and meadow landscapes.',
      gallery: [
        '/images/madhya-pradesh/kanha-national-park/gallery-1-v3.jpg',
        '/images/madhya-pradesh/kanha-national-park/gallery-2-v3.jpg',
        '/images/madhya-pradesh/kanha-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Pench National Park', 'Mandla Fort', 'Narmada River Ghats'],
      recommendedHotels: ['Taj Banjaar Tola Kanha', 'Singinawa Jungle Lodge', 'Kanha Earth Lodge'],
      famousRestaurants: ['Jungle Lodge Restaurant', 'Baghira Log Huts Canteen', 'Village Dhaba Mukki']
    },
    {
      name: 'Sanchi Stupa',
      slug: 'sanchi-stupa',
      category: 'UNESCO Buddhist Heritage',
      image: '/images/madhya-pradesh/sanchi-stupa/hero-v3.jpg',
      overview: 'The oldest stone structure in India and a UNESCO World Heritage Site, the Great Stupa at Sanchi was commissioned by Emperor Ashoka in the 3rd century BCE to enshrine relics of the Buddha, surrounded by four intricately carved gateways depicting Jataka tales in stunning detail.',
      rating: 4.94,
      bestTimeToVisit: 'November – March',
      shortDesc: 'India\'s oldest stone structure — Emperor Ashoka\'s 3rd-century BCE Buddhist stupa with carved gateways.',
      gallery: [
        '/images/madhya-pradesh/sanchi-stupa/gallery-1-v3.jpg',
        '/images/madhya-pradesh/sanchi-stupa/gallery-2-v3.jpg',
        '/images/madhya-pradesh/sanchi-stupa/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Vidisha', 'Udayagiri Caves', 'Raisen Fort', 'Bhimbetka Rock Shelters'],
      recommendedHotels: ['Gateway Retreat Sanchi', 'New Arun Hotel Sanchi', 'MPTDC Travellers Lodge'],
      famousRestaurants: ['MPTDC Restaurant Sanchi', 'Suruchi Restaurant Vidisha']
    },
    {
      name: 'Orchha Fort & Temples',
      slug: 'orchha',
      category: 'Medieval Heritage',
      image: '/images/madhya-pradesh/orchha/hero-v3.jpg',
      overview: 'A remarkably preserved 16th-century Bundela capital on the Betwa River, Orchha\'s time-frozen landscape of palaces, cenotaphs and temples — including the Ram Raja Temple where Lord Ram is worshipped as a king — creates an atmosphere of medieval grandeur unlike anywhere else in India.',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Perfectly preserved 16th-century Bundela capital where Ram is worshipped as a king on the Betwa River.',
      gallery: [
        '/images/madhya-pradesh/orchha/gallery-1-v3.jpg',
        '/images/madhya-pradesh/orchha/gallery-2-v3.jpg',
        '/images/madhya-pradesh/orchha/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Jahangir Mahal', 'Chaturbhuj Temple', 'Betwa River Rafting', 'Jhansi (30 km)'],
      recommendedHotels: ['Amar Mahal Orchha', 'The Orchha Resort', 'MPTDC Sheesh Mahal Hotel'],
      famousRestaurants: ['Sheesh Mahal Restaurant', 'Betwa Tarang Restaurant', 'Orchha Resort Dining']
    },
    {
      name: 'Bandhavgarh National Park',
      slug: 'bandhavgarh-national-park',
      category: 'National Park',
      image: '/images/madhya-pradesh/bandhavgarh-national-park/hero-v3.jpg',
      overview: 'Boasting the highest density of Bengal tigers in India, Bandhavgarh National Park spans 1,536 sq km of vindhyan hills and sal forests, also featuring the ancient Bandhavgarh Fort, cave paintings and a remarkable concentration of white tigers historically.',
      rating: 4.95,
      bestTimeToVisit: 'October – June (peak Feb–May for tigers)',
      shortDesc: 'India\'s highest tiger density reserve + ancient Bandhavgarh Fort in Vindhya hills.',
      gallery: [
        '/images/madhya-pradesh/bandhavgarh-national-park/gallery-1-v3.jpg',
        '/images/madhya-pradesh/bandhavgarh-national-park/gallery-2-v3.jpg',
        '/images/madhya-pradesh/bandhavgarh-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Bandhavgarh Fort', 'Sita Mandap', 'Shesh Shaiya (reclining Vishnu)'],
      recommendedHotels: ['Taj Mahua Kothi Bandhavgarh', 'Treehouse Hideaway', 'Kings Lodge Bandhavgarh'],
      famousRestaurants: ['Mahua Kothi Restaurant', 'Jungle Camp Canteen', 'Tala Village Dhaba']
    },
    {
      name: 'Mandu — City of Joy',
      slug: 'mandu',
      category: 'Medieval Ruins',
      image: '/images/madhya-pradesh/mandu/hero-v3.jpg',
      overview: 'Perched on a 633m Vindhya plateau, Mandu (Mandavgarh) is a romantic ghost city of Afghani-Mughal architecture immortalised by the love story of Sultan Baz Bahadur and poetess Rani Roopmati, featuring the Jahaz Mahal ship-palace, Hindola Mahal and monsoon-drenched ravines.',
      rating: 4.89,
      bestTimeToVisit: 'July – March (stunning during monsoon)',
      shortDesc: 'Romantic plateau city of Afghani-Mughal ruins and the legendary love story of Baz Bahadur and Roopmati.',
      gallery: [
        '/images/madhya-pradesh/mandu/gallery-1-v3.jpg',
        '/images/madhya-pradesh/mandu/gallery-2-v3.jpg',
        '/images/madhya-pradesh/mandu/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Jahaz Mahal', 'Hindola Mahal', 'Roopmati Pavilion', 'Indore (100 km)'],
      recommendedHotels: ['MPTDC Malwa Resort Mandu', 'Malwa Retreat Mandu', 'Hotel Rupmati'],
      famousRestaurants: ['Malwa Resort Restaurant', 'Shivani Restaurant Mandu', 'Rooftop Cafe Mandu']
    },
    {
      name: 'Pachmarhi Hill Station',
      slug: 'pachmarhi',
      category: 'Hill Station',
      image: '/images/madhya-pradesh/pachmarhi/hero-v3.jpg',
      overview: 'The only hill station in Madhya Pradesh, Pachmarhi sits at 1,067m in the Satpura Range and is a UNESCO Biosphere Reserve offering waterfalls (Bee Falls, Duchess Falls), ancient Pandava Caves, Chauragarh Shiva temple, and lush forest valleys ideal for trekking.',
      rating: 4.88,
      bestTimeToVisit: 'October – June',
      shortDesc: 'MP\'s only hill station in the Satpura Range — UNESCO Biosphere with waterfalls and ancient caves.',
      gallery: [
        '/images/madhya-pradesh/pachmarhi/gallery-1-v3.jpg',
        '/images/madhya-pradesh/pachmarhi/gallery-2-v3.jpg',
        '/images/madhya-pradesh/pachmarhi/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Bee Falls', 'Pandava Caves', 'Chauragarh Temple Trek', 'Satpura National Park'],
      recommendedHotels: ['Satpura Retreat MPTDC', 'Hotel Amaltas Pachmarhi', 'Highlands Resort'],
      famousRestaurants: ['Glen View Restaurant', 'Hotel Neelamber Pachmarhi', 'MPTDC Satpura Retreat Dining']
    },
    {
      name: 'Ujjain — Mahakaleshwar',
      slug: 'ujjain-mahakaleshwar',
      category: 'Sacred City',
      image: '/images/madhya-pradesh/ujjain-mahakaleshwar/hero-v3.jpg',
      overview: 'One of the seven sacred cities of Hinduism (Sapta Puri), Ujjain on the Shipra River hosts the Mahakaleshwar Jyotirlinga — one of 12 Jyotirlingas — and the world\'s largest human gathering, the Simhastha Kumbh Mela, held every 12 years drawing 75 million pilgrims.',
      rating: 4.96,
      bestTimeToVisit: 'October – March (Kumbh Mela every 12 years)',
      shortDesc: 'Sacred city of Mahakaleshwar Jyotirlinga and the Simhastha Kumbh Mela on the Shipra River.',
      gallery: [
        '/images/madhya-pradesh/ujjain-mahakaleshwar/gallery-1-v3.jpg',
        '/images/madhya-pradesh/ujjain-mahakaleshwar/gallery-2-v3.jpg',
        '/images/madhya-pradesh/ujjain-mahakaleshwar/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Ram Ghat', 'Kal Bhairav Temple', 'Jantar Mantar Ujjain', 'Vedh Shala Observatory'],
      recommendedHotels: ['Hotel Shipra Residency', 'Grand Tower Ujjain', 'Hotel Anjushree'],
      famousRestaurants: ['Agrawal Restaurant Ujjain', 'Sudama Bhojnalaya', 'Madhuri Restaurant']
    }
  ]
};
