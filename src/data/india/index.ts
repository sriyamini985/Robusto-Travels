import { ALL_INDIAN_STATES } from './statesData';

export interface StateFullData {
  id: string;
  name: string;
  type: 'State' | 'Union Territory';
  capital: string;
  tagline: string;
  heroImage: string;
  about: string;
  bestTime: string;
  climate: string;
  famousFood: string[];
  culture: string;
  famousPlaces: {
    name: string;
    slug: string;
    category: string;
    image: string;
    overview: string;
    rating: number;
  }[];
}

const FAMOUS_PLACES_MAP: Record<string, { name: string; category: string; image: string; shortDesc: string; rating: number }[]> = {
  'telangana': [
    { name: 'Charminar', category: 'Heritage Monument', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7', shortDesc: '16th-century iconic Qutb Shahi monument with 4 minarets in Hyderabad.', rating: 4.96 },
    { name: 'Golconda Fort', category: 'Medieval Fortress', image: 'https://images.unsplash.com/photo-1627894016766-b9a38f325b84', shortDesc: 'Imposing citadel known for acoustic marvels and Koh-i-Noor diamond vaults.', rating: 4.93 },
    { name: 'Ramoji Film City', category: 'Entertainment Hub', image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0', shortDesc: 'World’s largest integrated film studio complex with film sets and theme parks.', rating: 4.91 },
    { name: 'Yadadri Temple', category: 'Spiritual Shrine', image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a', shortDesc: 'Magnificent mega-carved black granite temple dedicated to Lord Narasimha.', rating: 4.94 },
    { name: 'Warangal Fort & Thousand Pillar Temple', category: 'Kakatiya Heritage', image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971', shortDesc: '12th-century Kakatiya stone gateways and star-shaped carved monoliths.', rating: 4.90 },
    { name: 'Ramappa Temple (UNESCO World Heritage)', category: 'UNESCO Shrine', image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971', shortDesc: '13th-century floating-brick temple masterpiece near Palampet.', rating: 4.97 },
    { name: 'Hussain Sagar & Buddha Statue', category: 'Urban Waterfront', image: 'https://images.unsplash.com/photo-1616190419596-e2839e7380d7', shortDesc: 'Heart-shaped lake featuring the world’s tallest monolithic Buddha.', rating: 4.88 },
    { name: 'Nagarjuna Sagar Dam', category: 'Engineering Wonder', image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3', shortDesc: 'World’s tallest masonry dam spanning the Krishna River.', rating: 4.86 },
    { name: 'Medak Cathedral Church', category: 'Gothic Architecture', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad', shortDesc: 'Single largest bishopric cathedral in Asia with stained glass windows.', rating: 4.87 },
    { name: 'Bhongir Fort', category: 'Monolithic Citadel', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2', shortDesc: 'Unique 500ft high monolithic egg-shaped rock fort.', rating: 4.85 }
  ],
  'andhra-pradesh': [
    { name: 'Tirupati Venkateswara Temple', category: 'Spiritual Shrine', image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a', shortDesc: 'World famous hilltop temple of Lord Venkateswara at Tirumala.', rating: 4.98 },
    { name: 'Araku Valley', category: 'Hill Station', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa', shortDesc: 'Lush Eastern Ghats hill valley known for organic coffee plantations.', rating: 4.92 },
    { name: 'Borra Caves', category: 'Natural Wonder', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23', shortDesc: 'Million-year-old limestone stalactite & stalagmite caves in Ananthagiri.', rating: 4.88 },
    { name: 'Gandikota (Grand Canyon of India)', category: 'Gorge & Fort', image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3', shortDesc: 'Breathtaking Penna river gorge enclosed by medieval red stone fort.', rating: 4.95 },
    { name: 'Belum Caves', category: 'Subterranean Wonder', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23', shortDesc: 'Second longest cave system in the Indian subcontinent.', rating: 4.86 },
    { name: 'Horsley Hills', category: 'Scenic Hill Escarpment', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa', shortDesc: 'Serene hill resort surrounded by eucalyptus and teak forests.', rating: 4.84 },
    { name: 'Srisailam Temple & Tiger Reserve', category: 'Pilgrimage & Wildlife', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7', shortDesc: 'Sacred Mallikarjuna Jyotirlinga nestled inside Nallamala forests.', rating: 4.94 },
    { name: 'Visakhapatnam Beaches & Submarine', category: 'Coastal City', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', shortDesc: 'Rishikonda beach and INS Kursura Submarine Museum on RK Beach.', rating: 4.90 },
    { name: 'Vijayawada Kanaka Durga Temple', category: 'Heritage City', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7', shortDesc: 'Revered shrine perched atop Indrakeeladri hill along Krishna River.', rating: 4.89 },
    { name: 'Amaravati Stupa & Heritage', category: 'Buddhist Shrine', image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971', shortDesc: 'Ancient Satavahana Buddhist heritage site with carved marble reliefs.', rating: 4.87 }
  ],
  'kerala': [
    { name: 'Munnar Tea Gardens', category: 'Alpine Hill Station', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2', shortDesc: 'Rolling emerald tea hills, misty valleys, and Anamudi peak.', rating: 4.98 },
    { name: 'Alleppey Backwaters & Houseboats', category: 'Lagoon Paradise', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944', shortDesc: 'Glide through palm-fringed canals on traditional luxury Kettuvallams.', rating: 4.99 },
    { name: 'Wayanad Rainforest & Caves', category: 'Eco Wilderness', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa', shortDesc: 'Edakkal prehistoric cave petroglyphs and Banasura Sagar dam.', rating: 4.93 },
    { name: 'Thekkady Periyar Wildlife Sanctuary', category: 'Tiger Sanctuary', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5', shortDesc: 'Boat safaris across Lake Periyar to spot wild elephants and tigers.', rating: 4.91 },
    { name: 'Kochi Fort & Chinese Fishing Nets', category: 'Heritage Port', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1', shortDesc: 'Colonial Portuguese, Dutch, and Jewish heritage town.', rating: 4.92 },
    { name: 'Kovalam Beach Crescent', category: 'Beach Resort', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', shortDesc: 'Lighthouse Beach, Hawah Beach, and Ayurvedic cliff wellness.', rating: 4.90 },
    { name: 'Varkala Cliff Beach', category: 'Cliffside Ocean', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', shortDesc: 'Red laterite cliffs overlooking Arabian Sea sunset waters.', rating: 4.94 },
    { name: 'Kumarakom Bird Sanctuary', category: 'Wetland Lagoon', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944', shortDesc: 'Vembanad lake ecosystem hosting migratory Siberian storks.', rating: 4.88 },
    { name: 'Athirappilly Waterfalls', category: 'Cascade Waterfalls', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9', shortDesc: 'Majestic 80ft wide roaring rainforest waterfall in Thrissur.', rating: 4.96 },
    { name: 'Bekal Fort', category: 'Historic Fort', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2', shortDesc: 'Largest keyhole-shaped seaside fort in Kasaragod.', rating: 4.89 }
  ],
  'rajasthan': [
    { name: 'Jaipur Hawa Mahal & Amber Fort', category: 'Pink City Heritage', image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a', shortDesc: 'Honeycombed palace of winds and elephant rides up Amber Citadel.', rating: 4.99 },
    { name: 'Udaipur City Palace & Lake Pichola', category: 'City of Lakes', image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10', shortDesc: 'Marble royal palaces floating on tranquil lake waters.', rating: 4.98 },
    { name: 'Jaisalmer Golden Fort & Thar Dunes', category: 'Desert Citadel', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9', shortDesc: 'World’s only living yellow sandstone fort and luxury desert camping.', rating: 4.97 },
    { name: 'Mount Abu & Dilwara Temples', category: 'Hill Resort', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa', shortDesc: 'Intricately carved 11th-century white marble Jain sanctuaries.', rating: 4.92 },
    { name: 'Pushkar Holy Lake & Brahma Shrine', category: 'Sacred Oasis', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f', shortDesc: 'Ancient holy lake encircled by 52 bathing ghats and camel fair.', rating: 4.90 },
    { name: 'Chittorgarh Fort', category: 'Fortress Marvel', image: 'https://images.unsplash.com/photo-1588096344356-9a28e5113d0c', shortDesc: 'Largest fort complex in India symbolizing Rajput bravery.', rating: 4.95 },
    { name: 'Ranthambore National Park', category: 'Tiger Safari', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5', shortDesc: 'Royal Bengal tigers roaming amongst ancient fortress ruins.', rating: 4.96 },
    { name: 'Jodhpur Mehrangarh Fort', category: 'Blue City Citadel', image: 'https://images.unsplash.com/photo-1588096344356-9a28e5113d0c', shortDesc: 'Colossal 400ft high cliffside fort overlooking blue rooftops.', rating: 4.97 },
    { name: 'Bikaner Junagarh Fort', category: 'Desert Palace', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245', shortDesc: 'Unconquered red sandstone palace museum and camel breeding center.', rating: 4.88 },
    { name: 'Ranakpur Jain Temple', category: 'Marble Masterpiece', image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971', shortDesc: '1,444 uniquely carved marble pillars support this forest sanctuary.', rating: 4.94 }
  ],
  'goa': [
    { name: 'Baga Beach & Nightlife', category: 'Party Coast', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2', shortDesc: 'Vibrant golden sand beach lined with beach shacks and watersports.', rating: 4.92 },
    { name: 'Calangute Beach', category: 'Queen of Beaches', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2', shortDesc: 'Largest and most popular beach stretch in North Goa.', rating: 4.89 },
    { name: 'Dudhsagar Waterfalls', category: 'Four-Tiered Falls', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9', shortDesc: 'Spectacular 310m high sea-of-milk waterfall inside Bhagwan Mahavir Park.', rating: 4.97 },
    { name: 'Fort Aguada & Lighthouse', category: 'Portuguese Citadel', image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745', shortDesc: '17th-century Portuguese fortress overlooking Sinquerim beach.', rating: 4.91 },
    { name: 'Basilica of Bom Jesus', category: 'UNESCO Shrine', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2', shortDesc: 'Baroque church holding the mortal remains of St. Francis Xavier.', rating: 4.95 },
    { name: 'Palolem Beach Crescent', category: 'South Goa Cove', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', shortDesc: 'Tranquil palm-fringed bay with colorful beach huts.', rating: 4.96 },
    { name: 'Anjuna Beach & Flea Market', category: 'Bohemian Coast', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2', shortDesc: 'Red rocky coastline famous for Wednesday flea markets.', rating: 4.88 },
    { name: 'Chapora Fort', category: 'Sunset Escarpment', image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745', shortDesc: 'Panoramic red stone ruins above Vagator river mouth.', rating: 4.90 },
    { name: 'Vagator Beach & Ozran Cliffs', category: 'Cliffside Cove', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2', shortDesc: 'Dramatic cliff coves featuring the carved Shiva rock face.', rating: 4.91 },
    { name: 'Fontainhas Latin Quarter', category: 'Heritage Neighborhood', image: 'https://images.unsplash.com/photo-1568084680786-a84f91d4b511', shortDesc: 'Panaji’s vibrant Portuguese colony with pastel yellow and blue villas.', rating: 4.93 }
  ]
};

export const getStateData = (stateId: string): StateFullData => {
  const cleanId = stateId.toLowerCase().replace(/[^a-z0-9-]/g, '');
  const stateInfo = ALL_INDIAN_STATES.find(s => s.id === cleanId) || ALL_INDIAN_STATES[0];

  const customPlaces = FAMOUS_PLACES_MAP[cleanId];

  const places = customPlaces ? customPlaces.map(p => ({
    name: p.name,
    slug: p.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    category: p.category,
    image: p.image + '?auto=format&fit=crop&q=80&w=1200',
    overview: p.shortDesc + ' A landmark attraction reflecting the rich culture, history, and natural grandeur of ' + stateInfo.name + '.',
    rating: p.rating
  })) : [
    { name: stateInfo.capital + ' Heritage Center', slug: 'capital-heritage', category: 'City Landmark', image: stateInfo.heroImage, overview: 'Explore the iconic heritage, government monuments, and vibrant local bazaars of ' + stateInfo.capital + '.', rating: 4.92 },
    { name: stateInfo.name + ' Royal Palace & Fort', slug: 'royal-palace', category: 'Historic Shrine', image: 'https://images.unsplash.com/photo-1588096344356-9a28e5113d0c?auto=format&fit=crop&q=80&w=1200', overview: 'Step into centuries of regal architecture, weapons museums, and royal gardens.', rating: 4.95 },
    { name: stateInfo.name + ' Sanctuary & Lake', slug: 'sanctuary-lake', category: 'Nature & Wildlife', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200', overview: 'Pristine wilderness sanctuary surrounded by natural lakes and wildlife.', rating: 4.88 },
    { name: stateInfo.name + ' Hill Station Escape', slug: 'hill-station', category: 'Mountain Resort', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200', overview: 'Mist-covered valleys, pine forests, and serene panoramic viewpoints.', rating: 4.91 },
    { name: stateInfo.name + ' Sacred Temple', slug: 'sacred-temple', category: 'Spiritual Shrine', image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=1200', overview: 'Ancient carved stone temple with centuries of spiritual traditions.', rating: 4.94 },
    { name: stateInfo.name + ' Waterfall & Gorge', slug: 'waterfall-gorge', category: 'Natural Wonder', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=1200', overview: 'Cascading river waterfall surrounded by granite cliffs and dense foliage.', rating: 4.89 },
    { name: stateInfo.name + ' Cultural Bazaar', slug: 'cultural-bazaar', category: 'Heritage Market', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200', overview: 'Vibrant local handicraft market featuring regional textiles, brassware, and street food.', rating: 4.87 },
    { name: stateInfo.name + ' Eco Park & Gardens', slug: 'eco-park', category: 'Gardens & Parks', image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1200', overview: 'Expansive botanical gardens showcasing native flora, lakes, and walking trails.', rating: 4.85 },
    { name: stateInfo.name + ' Craft Village', slug: 'craft-village', category: 'Artisan Hub', image: 'https://images.unsplash.com/photo-1568084680786-a84f91d4b511?auto=format&fit=crop&q=80&w=1200', overview: 'Authentic artisan village showcasing traditional weaving, pottery, and folk art.', rating: 4.90 },
    { name: stateInfo.name + ' Sunset Viewpoint', slug: 'sunset-viewpoint', category: 'Scenic Escarpment', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200', overview: 'High cliff escarpment overlooking valleys and rivers during golden sunset hours.', rating: 4.93 }
  ];

  return {
    id: stateInfo.id,
    name: stateInfo.name,
    type: stateInfo.type,
    capital: stateInfo.capital,
    tagline: stateInfo.tagline,
    heroImage: stateInfo.heroImage,
    about: stateInfo.name + ' is a major ' + stateInfo.type.toLowerCase() + ' in India, world-renowned for its ' + stateInfo.tagline.toLowerCase() + '. It offers a rich tapestry of historic monuments, sacred temples, pristine nature, and warm hospitality.',
    bestTime: stateInfo.bestTime,
    climate: 'Tropical to temperate with pleasant winter months between October and March.',
    famousFood: stateInfo.famousFood,
    culture: 'Rich traditional heritage marked by regional festivals, classical performing arts, handloom weaving, and authentic culinary delicacies.',
    famousPlaces: places
  };
};
