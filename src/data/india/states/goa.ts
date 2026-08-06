export interface GoaPlace {
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

export interface GoaStateData {
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
  famousPlaces: GoaPlace[];
}

export const GOA_DATA: GoaStateData = {
  id: 'goa',
  name: 'Goa',
  type: 'State',
  capital: 'Panaji',
  tagline: 'The Sunshine State of India',
  heroImage: '/images/goa/palolem-beach/hero-v3.jpg',
  about: 'Goa is India’s smallest state by area, famous for its golden beaches, Portuguese-colonial history, UNESCO World Heritage churches, active night markets, and rich coastal seafood cuisine.',
  bestTime: 'November – February',
  climate: 'Tropical monsoon climate with hot, humid summers and mild winters (20°C – 32°C). Heavy rains during monsoon (June – September).',
  famousFood: ['Goan Fish Curry', 'Pork Vindaloo', 'Chicken Xacuti', 'Bebinca (Layered Goan Dessert)', 'Feni (Cashew/Coconut Drink)'],
  culture: 'A unique blend of Indian and Portuguese cultures, famous for Shigmo spring festivals, Goan carnival, live music, and hand-painted blue Azulejos tiles.',
  famousPlaces: [
    {
      name: 'Basilica of Bom Jesus',
      slug: 'basilica-bom-jesus',
      category: 'Historical Heritage',
      image: '/images/goa/basilica-bom-jesus/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site in Old Goa, this 1605 baroque church houses the sacred, silver casket containing the mortal remains of St. Francis Xavier, attracting pilgrims worldwide.',
      rating: 4.97,
      bestTimeToVisit: 'October – March',
      shortDesc: 'UNESCO World Heritage church holding remains of St. Francis Xavier.',
      gallery: [
        '/images/goa/basilica-bom-jesus/gallery-1-v3.jpg',
        '/images/goa/basilica-bom-jesus/gallery-2-v3.jpg',
        '/images/goa/basilica-bom-jesus/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Se Cathedral', 'Church of St. Cajetan', 'Archaeological Museum Old Goa'],
      recommendedHotels: ['DoubleTree by Hilton Panaji', 'Taj Cidade de Goa Heritage', 'The Fern Kadamba'],
      famousRestaurants: ['Viva Panjim', 'The Black Sheep Bistro', 'The Verandah']
    },
    {
      name: 'Dudhsagar Waterfalls',
      slug: 'dudhsagar-falls',
      category: 'Natural Wonder',
      image: '/images/goa/dudhsagar-falls/hero-v3.jpg',
      overview: 'Dudhsagar (literally "Sea of Milk") is a spectacular four-tiered waterfall on the Mandovi River, plunging 310 meters down rocky steps in Bhagwan Mahavir Wildlife Sanctuary.',
      rating: 4.95,
      bestTimeToVisit: 'October – February (Post-monsoon flows)',
      shortDesc: 'Spectacular four-tiered waterfall inside Bhagwan Mahavir Sanctuary.',
      gallery: [
        '/images/goa/dudhsagar-falls/gallery-1-v3.jpg',
        '/images/goa/dudhsagar-falls/gallery-2-v3.jpg',
        '/images/goa/dudhsagar-falls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tambdi Surla Mahadev Temple', 'Devils Canyon', 'Colem Railway Station'],
      recommendedHotels: ['Dudhsagar Spa Resort', 'Jungle Book Resort', 'Wildernest Nature Resort'],
      famousRestaurants: ['Dudhsagar Spice Plantation Restaurant', 'Colem Local Eateries']
    },
    {
      name: 'Fort Aguada',
      slug: 'fort-aguada',
      category: 'Historical Heritage',
      image: '/images/goa/fort-aguada/hero-v3.jpg',
      overview: 'Built in 1612 by the Portuguese to guard against Dutch attacks, this hilltop brick fort features a well-preserved lighthouse, stone bastions, and panoramic views of Sinquerim Beach.',
      rating: 4.90,
      bestTimeToVisit: 'October – March',
      shortDesc: '17th-century Portuguese coastal fort and historic lighthouse.',
      gallery: [
        '/images/goa/fort-aguada/gallery-1-v3.jpg',
        '/images/goa/fort-aguada/gallery-2-v3.jpg',
        '/images/goa/fort-aguada/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Sinquerim Beach', 'Candolim Beach', 'Aguada Jail Museum'],
      recommendedHotels: ['Taj Fort Aguada Resort & Spa', 'Taj Holiday Village Resort', 'Marriotts Aloft Candolim'],
      famousRestaurants: ['Fishermans Wharf', 'Calamari Bathe & Binge', 'The Stone House']
    },
    {
      name: 'Calangute Beach',
      slug: 'calangute-beach',
      category: 'Beach Destination',
      image: '/images/goa/calangute-beach/hero-v3.jpg',
      overview: 'Known as the "Queen of Beaches" in Goa, Calangute is the largest and busiest beach in North Goa, offering thrill sports, beach shacks, and a vibrant nightlife.',
      rating: 4.88,
      bestTimeToVisit: 'November – February',
      shortDesc: 'North Goa’s busiest and largest beach with active watersports.',
      gallery: [
        '/images/goa/calangute-beach/gallery-1-v3.jpg',
        '/images/goa/calangute-beach/gallery-2-v3.jpg',
        '/images/goa/calangute-beach/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Baga Beach', 'Candolim Beach', 'Calangute Market'],
      recommendedHotels: ['Hard Rock Hotel Goa', 'The O Hotel Candolim', 'Le Meridien Goa Calangute'],
      famousRestaurants: ['Souza Lobo', 'Britto’s Beach Shack', 'Tio Tilly’s']
    },
    {
      name: 'Palolem Beach',
      slug: 'palolem-beach',
      category: 'Beach Destination',
      image: '/images/goa/palolem-beach/hero-v3.jpg',
      overview: 'A scenic crescent-shaped beach in South Goa, Palolem is famous for its calm waters, coconut palm fringe, beach shacks, silent noise disco parties, and dolphin spotting boat trips.',
      rating: 4.96,
      bestTimeToVisit: 'November – February',
      shortDesc: 'Scenic crescent-shaped beach with calm waters and palm fringes.',
      gallery: [
        '/images/goa/palolem-beach/gallery-1-v3.jpg',
        '/images/goa/palolem-beach/gallery-2-v3.jpg',
        '/images/goa/palolem-beach/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Patnem Beach', 'Butterfly Beach', 'Cotigao Wildlife Sanctuary'],
      recommendedHotels: ['The Lalit Golf & Spa Resort', 'Sobit Sarovar Portico Goan', 'Palolem Beach Resort'],
      famousRestaurants: ['Dropadi Restaurant', 'Magic Italy', 'Ourem 88']
    },
    {
      name: 'Mangueshi Temple',
      slug: 'mangeshi-temple',
      category: 'Spiritual Shrine',
      image: '/images/goa/mangeshi-temple/hero-v3.jpg',
      overview: 'A 450-year-old temple dedicated to Lord Manguesh (Shiva) in Priol, featuring beautiful Goan-Hindu architecture with a spectacular 7-story octagonal Deepastambha (lamp tower).',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Revered temple dedicated to Lord Shiva with an iconic Deepastambha.',
      gallery: [
        '/images/goa/mangeshi-temple/gallery-1-v3.jpg',
        '/images/goa/mangeshi-temple/gallery-2-v3.jpg',
        '/images/goa/mangeshi-temple/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Shanta Durga Temple', 'Sahakari Spice Farm', 'Tropical Spice Plantation'],
      recommendedHotels: ['Farmagudi Hill Retreat', 'Taj Cidade de Goa'],
      famousRestaurants: ['Sahakari Buffet Canteen', 'Spice Farm Restaurant']
    },
    {
      name: 'Anjuna Beach',
      slug: 'anjuna-beach',
      category: 'Beach Destination',
      image: '/images/goa/anjuna-beach/hero-v3.jpg',
      overview: 'Famous for its black volcanic rock formations, bohemian hippy culture, and the Wednesday flea market, Anjuna remains a favorite beach destination for backpackers.',
      rating: 4.89,
      bestTimeToVisit: 'November – February',
      shortDesc: 'Volcanic rock beach famous for bohemian hippy flea markets.',
      gallery: [
        '/images/goa/anjuna-beach/gallery-1-v3.jpg',
        '/images/goa/anjuna-beach/gallery-2-v3.jpg',
        '/images/goa/anjuna-beach/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Anjuna Flea Market', 'Chapora Fort', 'Ozran Beach'],
      recommendedHotels: ['W Goa Vagator', 'The Westin Goa Anjuna', 'DoubleTree by Hilton Arpora'],
      famousRestaurants: ['Curlies Beach Shack', 'Lilliput Cafe', 'Artjuna Garden Cafe']
    },
    {
      name: 'Fontainhas (Latin Quarter)',
      slug: 'fontainhas',
      category: 'Historical Heritage',
      image: '/images/goa/fontainhas/hero-v3.jpg',
      overview: 'Goa’s old Latin Quarter in Panaji features beautifully restored Portuguese houses painted in bright yellows, blues, and reds, complete with tile roofs and wrought-iron balconies.',
      rating: 4.94,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Colorful old Portuguese quarter with narrow cobblestone streets.',
      gallery: [
        '/images/goa/fontainhas/gallery-1-v3.jpg',
        '/images/goa/fontainhas/gallery-2-v3.jpg',
        '/images/goa/fontainhas/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Our Lady of the Immaculate Conception Church', 'Mandovi River Cruise', 'Panaji Market'],
      recommendedHotels: ['Welcomheritage Panjim Inn', 'Taj Vivanta Panaji', 'The Crown Goa'],
      famousRestaurants: ['Confeitaria 31 De Janeiro', 'Viva Panjim Restaurant', 'Horseshoe Bar']
    }
  ]
};
