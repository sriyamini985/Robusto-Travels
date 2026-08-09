export interface MaharashtraPlace {
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

export interface MaharashtraStateData {
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
  famousPlaces: MaharashtraPlace[];
}

export const MAHARASHTRA_DATA: MaharashtraStateData = {
  id: 'maharashtra',
  name: 'Maharashtra',
  type: 'State',
  capital: 'Mumbai',
  tagline: 'Unlimited Maharashtra',
  heroImage: '/images/maharashtra/gateway-of-india/hero-v3.jpg',
  about: 'Maharashtra is India\'s economic powerhouse and cultural giant, stretching from the bustling metropolis of Mumbai to the ancient rock-cut cave wonders of Ajanta and Ellora, hill stations of Mahabaleshwar and Lonavala, tiger reserves of Tadoba, and sacred pilgrimage towns like Shirdi.',
  bestTime: 'October – March',
  climate: 'Tropical monsoon climate. Coastal Konkan region is humid (25°C–35°C), while inland Deccan plateau experiences hot summers (up to 42°C) and pleasant winters (12°C–28°C). Heavy monsoon from June to September.',
  famousFood: ['Vada Pav', 'Pav Bhaji', 'Misal Pav', 'Puran Poli', 'Kanda Poha', 'Puran Poli', 'Bombil Fry', 'Modak'],
  culture: 'Rich Maratha heritage of Chhatrapati Shivaji Maharaj, Ganesh Chaturthi grand festival, Lavani folk dance, Powada ballads, Warli tribal art, and Bollywood cinema culture.',
  famousPlaces: [
    {
      name: 'Gateway of India, Mumbai',
      slug: 'gateway-of-india',
      category: 'Iconic Monument',
      image: '/images/maharashtra/gateway-of-india/hero-v3.jpg',
      overview: 'Erected in 1924 to commemorate the visit of King George V, the Gateway of India is Mumbai\'s most famous landmark overlooking the Arabian Sea, standing opposite the legendary Taj Mahal Palace Hotel.',
      rating: 4.96,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Mumbai\'s premier waterfront arch erected in 1924 overlooking the Arabian Sea.',
      gallery: [
        '/images/maharashtra/gateway-of-india/gallery-1-v3.jpg',
        '/images/maharashtra/gateway-of-india/gallery-2-v3.jpg',
        '/images/maharashtra/gateway-of-india/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Taj Mahal Palace Hotel', 'Marine Drive', 'Elephanta Caves', 'Colaba Causeway'],
      recommendedHotels: ['The Taj Mahal Palace Mumbai', 'The Oberoi Mumbai', 'Trident Nariman Point'],
      famousRestaurants: ['Leopold Cafe', 'Cafe Mondegar', 'Bademiya Colaba']
    },
    {
      name: 'Ajanta Caves',
      slug: 'ajanta-caves',
      category: 'UNESCO World Heritage',
      image: '/images/maharashtra/ajanta-caves/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site comprising 30 rock-cut Buddhist cave monuments dating from 2nd century BCE to 480 CE, famous worldwide for masterly mural frescoes depicting Jataka tales and exquisite Buddha sculptures.',
      rating: 4.97,
      bestTimeToVisit: 'October – March',
      shortDesc: 'UNESCO 30 rock-cut Buddhist caves with world-famous ancient fresco mural paintings.',
      gallery: [
        '/images/maharashtra/ajanta-caves/gallery-1-v3.jpg',
        '/images/maharashtra/ajanta-caves/gallery-2-v3.jpg',
        '/images/maharashtra/ajanta-caves/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Ellora Caves', 'Bibi Ka Maqbara', 'Daulatabad Fort', 'Aurangabad Caves'],
      recommendedHotels: ['Taj Hotel & Convention Centre Chhatrapati Sambhajinagar', 'Vivanta Chhatrapati Sambhajinagar', 'Ambassador Ajanta'],
      famousRestaurants: ['Bhoj Restaurant', 'Green Leaf Vegetarian', 'Tandoor Restaurant']
    },
    {
      name: 'Ellora Caves (Kailasa Temple)',
      slug: 'ellora-caves',
      category: 'UNESCO Rock-Cut Wonder',
      image: '/images/maharashtra/ellora-caves/hero-v3.jpg',
      overview: 'Home to the colossal Kailasa Temple (Cave 16) — the largest single monolithic rock excavation in the world carved top-down from a cliff face — Ellora features 34 Hindu, Buddhist and Jain caves built between 6th–10th century CE.',
      rating: 4.98,
      bestTimeToVisit: 'October – March',
      shortDesc: 'World\'s largest monolithic rock excavation (Kailasa Temple) carved top-down from cliff rock.',
      gallery: [
        '/images/maharashtra/ellora-caves/gallery-1-v3.jpg',
        '/images/maharashtra/ellora-caves/gallery-2-v3.jpg',
        '/images/maharashtra/ellora-caves/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Daulatabad Fort', 'Grishneshwar Jyotirlinga', 'Bibi Ka Maqbara', 'Ajanta Caves'],
      recommendedHotels: ['Hotel Kailas Ellora', 'Taj Chhatrapati Sambhajinagar', 'Meadows Resort'],
      famousRestaurants: ['Hotel Kailas Restaurant', 'Kailash Dhaba', 'Suruchi Thali']
    },
    {
      name: 'Shirdi Sai Baba Temple',
      slug: 'shirdi-sai-baba',
      category: 'Sacred Pilgrimage',
      image: '/images/maharashtra/shirdi-sai-baba/hero-v3.jpg',
      overview: 'One of the most visited pilgrimage sites in India, Shirdi is the abode of the 19th-century saint Sai Baba, attracting over 25,000 devotees daily to the Samadhi Mandir, Dwarkamai mosque, and Chavadi.',
      rating: 4.95,
      bestTimeToVisit: 'Year-round (October – March is pleasant)',
      shortDesc: 'Sacred abode of 19th-century saint Sai Baba drawing millions of devotees from around the world.',
      gallery: [
        '/images/maharashtra/shirdi-sai-baba/gallery-1-v3.jpg',
        '/images/maharashtra/shirdi-sai-baba/gallery-2-v3.jpg',
        '/images/maharashtra/shirdi-sai-baba/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Dwarkamai', 'Chavadi', 'Lendi Baug', 'Shani Shingnapur'],
      recommendedHotels: ['Sun-n-Sand Shirdi', 'St Laurn Sanctuary Resort', 'Hotel Sai Jevanjee'],
      famousRestaurants: ['Ahimsa Vegan Restaurant', 'Mukta Food Court', 'Sai Prasadalaya']
    },
    {
      name: 'Mahabaleshwar',
      slug: 'mahabaleshwar',
      category: 'Hill Station',
      image: '/images/maharashtra/mahabaleshwar/hero-v3.jpg',
      overview: 'Nestled in the Western Ghats at 1,353m, Mahabaleshwar is Maharashtra\'s premier hill station famous for strawberry farms, panoramic viewpoints (Arthur\'s Seat, Wilson Point), Venna Lake, and ancient Mahabaleshwar Temple.',
      rating: 4.91,
      bestTimeToVisit: 'October – June (Strawberry season Dec–April)',
      shortDesc: 'Western Ghats hill station famous for strawberry farms, Venna Lake and Arthur\'s Seat.',
      gallery: [
        '/images/maharashtra/mahabaleshwar/gallery-1-v3.jpg',
        '/images/maharashtra/mahabaleshwar/gallery-2-v3.jpg',
        '/images/maharashtra/mahabaleshwar/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Panchgani', 'Pratapgad Fort', 'Venna Lake', 'Mapro Garden'],
      recommendedHotels: ['Le Meridien Mahabaleshwar Resort & Spa', 'Brightland Resort & Spa', 'Evershine Resort'],
      famousRestaurants: ['Mapro Garden Cafe', 'Bagicha Corner', 'Grapevine Restaurant']
    },
    {
      name: 'Tadoba Andhari Tiger Reserve',
      slug: 'tadoba-tiger-reserve',
      category: 'National Park',
      image: '/images/maharashtra/tadoba-tiger-reserve/hero-v3.jpg',
      overview: 'Maharashtra\'s oldest and largest national park, Tadoba spans 625 sq km of dry deciduous teak forest and lakes, renowned for frequent tiger sightings, leopards, sloth bears, wild dogs and gaur.',
      rating: 4.94,
      bestTimeToVisit: 'October – June (Best tiger sightings Feb–May)',
      shortDesc: 'Maharashtra\'s premier tiger reserve known for extraordinary Bengal tiger safari sightings.',
      gallery: [
        '/images/maharashtra/tadoba-tiger-reserve/gallery-1-v3.jpg',
        '/images/maharashtra/tadoba-tiger-reserve/gallery-2-v3.jpg',
        '/images/maharashtra/tadoba-tiger-reserve/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tadoba Lake', 'Erai Dam', 'Moharli Gate', 'Nagzira Wildlife Sanctuary'],
      recommendedHotels: ['Svasara Jungle Lodge', 'Tadoba Tiger King Resort', 'Bamboo Forest Safari Lodge'],
      famousRestaurants: ['Svasara Dining Hall', 'Moharli Gate Dhabas', 'Jungle Lodge Restaurant']
    },
    {
      name: 'Lonavala & Khandala',
      slug: 'lonavala',
      category: 'Hill Station',
      image: '/images/maharashtra/lonavala/hero-v3.jpg',
      overview: 'Twin hill stations in the Sahyadri ranges just 80 km from Mumbai, Lonavala and Khandala are popular getaway spots famous for monsoon waterfalls, Tiger\'s Leap viewpoint, Karla and Bhaja Caves, and sweet chikki.',
      rating: 4.89,
      bestTimeToVisit: 'July – March (Monsoon Jul–Sep is magical)',
      shortDesc: 'Twin Sahyadri hill stations famous for monsoon waterfalls, chikki and Tiger\'s Leap.',
      gallery: [
        '/images/maharashtra/lonavala/gallery-1-v3.jpg',
        '/images/maharashtra/lonavala/gallery-2-v3.jpg',
        '/images/maharashtra/lonavala/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tiger\'s Leap', 'Bhushi Dam', 'Karla Caves', 'Lohagad Fort'],
      recommendedHotels: ['Della Resorts Lonavala', 'Fariyas Resort Lonavala', 'The Machan'],
      famousRestaurants: ['Maganlal Chikki Store', 'Rama Krishna Vegetarian', 'The Kinara Village Dhaba']
    },
    {
      name: 'Chhatrapati Shivaji Maharaj Terminus',
      slug: 'csmt-mumbai',
      category: 'UNESCO Heritage Architecture',
      image: '/images/maharashtra/csmt-mumbai/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site, CSMT (formerly Victoria Terminus) is an architectural masterpiece of Victorian Gothic Revival blended with traditional Indian palace architecture, serving as Mumbai\'s historic railway headquarters.',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: 'UNESCO World Heritage railway terminus combining Victorian Gothic and Indian palace styles.',
      gallery: [
        '/images/maharashtra/csmt-mumbai/gallery-1-v3.jpg',
        '/images/maharashtra/csmt-mumbai/gallery-2-v3.jpg',
        '/images/maharashtra/csmt-mumbai/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Brihanmumbai Municipal Corporation', 'Crawford Market', 'Flora Fountain', 'Fort Heritage District'],
      recommendedHotels: ['The West End Hotel', 'Hotel Residency Fort', 'InterContinental Marine Drive'],
      famousRestaurants: ['Cannon Pav Bhaji CSMT', 'Pancham Puriwala', 'Britannia & Co. Cafe']
    }
  ]
};
