export interface TripuraPlace {
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

export interface TripuraStateData {
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
  famousPlaces: TripuraPlace[];
}

export const TRIPURA_DATA: TripuraStateData = {
  id: 'tripura',
  name: 'Tripura',
  type: 'State',
  capital: 'Agartala',
  tagline: 'Land of Eighteen Kings',
  heroImage: '/images/tripura/ujjayanta-palace/hero-v3.jpg',
  about: 'Tripura, a landlocked northeastern state bordered on three sides by Bangladesh, is rich in royal Manikya dynasty heritage — featuring the grand white marble Ujjayanta Palace, Neermahal water palace on Rudrasagar Lake, mysterious 7th-century rock-cut Shaivite bas-reliefs at Unakoti, and sacred Shakti Peeth temple of Tripura Sundari.',
  bestTime: 'October – March',
  climate: 'Tropical monsoon climate. Hot, humid summers (April–June, 24°C–36°C), heavy monsoon rains (July–September), and mild, pleasant winters (October–March, 10°C–24°C). Best visited October to March.',
  famousFood: ['Mui Borok (traditional fish stew)', 'Chakhwi', 'Gudok', 'Mosdeng Serma (spicy chutney)', 'Panch Phoron Tarkari', 'Bhangui (sticky rice cake)', 'Kasser Payesh'],
  culture: 'Rich Manikya royal history, Tripuri indigenous dance forms (Hojagiri dance of Reang tribe, Garia dance), Kharchi Puja festival honoring 14 deities, bamboo and cane handicrafts, and Bengali cultural influence.',
  famousPlaces: [
    {
      name: 'Ujjayanta Palace, Agartala',
      slug: 'ujjayanta-palace',
      category: 'Royal Palace Museum',
      image: '/images/tripura/ujjayanta-palace/hero-v3.jpg',
      overview: 'Built in 1901 by Maharaja Radha Kishore Manikya, Ujjayanta Palace in Agartala is a striking neoclassic white marble royal palace set amidst Mughal-style gardens and fountains, now serving as the state museum of Northeast history and tribal culture.',
      rating: 4.96,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Stunning 1901 neoclassic white marble royal palace with Mughal gardens, now state museum.',
      gallery: [
        '/images/tripura/ujjayanta-palace/gallery-1-v3.jpg',
        '/images/tripura/ujjayanta-palace/gallery-2-v3.jpg',
        '/images/tripura/ujjayanta-palace/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Heritage Park Agartala', 'Jagannath Temple Agartala', 'Venuvan Vihar', 'Purbasha Handicrafts'],
      recommendedHotels: ['Polo Towers Agartala', 'Ginger Hotel Agartala', 'Hotel Sonar Tori'],
      famousRestaurants: ['Khunti Korai Agartala', 'Polo Lakefront Dining', 'Royal Veg Restaurant']
    },
    {
      name: 'Neermahal Water Palace',
      slug: 'neermahal',
      category: 'Lake Palace Wonder',
      image: '/images/tripura/neermahal/hero-v3.jpg',
      overview: 'Rising out of the center of Rudrasagar Lake 53 km from Agartala, Neermahal ("Water Palace") is Eastern India\'s only lake palace, built in 1930 by Maharaja Bir Bikram Kishore Manikya combining Hindu and Islamic architectural styles.',
      rating: 4.97,
      bestTimeToVisit: 'October – March (Neermahal Water Festival in August/Dec)',
      shortDesc: 'Eastern India\'s only floating water palace rising out of Rudrasagar Lake near Melaghar.',
      gallery: [
        '/images/tripura/neermahal/gallery-1-v3.jpg',
        '/images/tripura/neermahal/gallery-2-v3.jpg',
        '/images/tripura/neermahal/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Rudrasagar Lake', 'Melaghar Town', 'Sepahijala Sanctuary'],
      recommendedHotels: ['Neermahal Tourist Lodge', 'Polo Towers Agartala'],
      famousRestaurants: ['Neermahal Lakefront Restaurant', 'Melaghar Local Eateries']
    },
    {
      name: 'Unakoti Rock Carvings',
      slug: 'unakoti',
      category: 'Archaeological Rock Art',
      image: '/images/tripura/unakoti/hero-v3.jpg',
      overview: 'Dating from the 7th–9th centuries, Unakoti (meaning "one less than a crore") is an extraordinary open-air Shaivite pilgrimage site featuring giant rock-cut carvings of Lord Shiva (30-ft Unakotiswara Kal Bhairava head) carved into lush jungle cliffside walls.',
      rating: 4.98,
      bestTimeToVisit: 'October – March (Ashokastami Mela in April)',
      shortDesc: 'Ancient 7th-century open-air jungle cliffside rock carvings of Lord Shiva at Kailashahar.',
      gallery: [
        '/images/tripura/unakoti/gallery-1-v3.jpg',
        '/images/tripura/unakoti/gallery-2-v3.jpg',
        '/images/tripura/unakoti/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kailashahar Town', 'Dharmanagar', 'Jampui Hills'],
      recommendedHotels: ['Unakoti Tourist Lodge Kailashahar', 'Jampui Hills Lodge', 'Polo Towers Agartala'],
      famousRestaurants: ['Unakoti Lodge Canteen', 'Kailashahar Dhabas']
    },
    {
      name: 'Sepahijala Wildlife Sanctuary',
      slug: 'sepahijala-sanctuary',
      category: 'Wildlife Sanctuary & Zoo',
      image: '/images/tripura/sepahijala-sanctuary/hero-v3.jpg',
      overview: 'Spanning 18.5 sq km just 25 km from Agartala, Sepahijala is a lush bio-complex housing the rare Phayre\'s spectacled langur (state animal of Tripura), Clouded Leopard National Park, rubber and coffee plantations, and a serene lake.',
      rating: 4.90,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Bio-complex sanctuary home to Phayre\'s spectacled langurs and Clouded Leopard park.',
      gallery: [
        '/images/tripura/sepahijala-sanctuary/gallery-1-v3.jpg',
        '/images/tripura/sepahijala-sanctuary/gallery-2-v3.jpg',
        '/images/tripura/sepahijala-sanctuary/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Abcharana Lake', 'Botanical Garden', 'Neermahal'],
      recommendedHotels: ['Sepahijala Forest Rest House', 'Polo Towers Agartala'],
      famousRestaurants: ['Sepahijala Park Canteen', 'Highway Dhabas']
    },
    {
      name: 'Jampui Hills',
      slug: 'jampui-hills',
      category: 'Orange Capital Hill Station',
      image: '/images/tripura/jampui-hills/hero-v3.jpg',
      overview: 'Perched at 1,000m on the Mizoram border, Jampui Hills is Tripura\'s premier hill station known as the "Land of Eternal Spring", famous for sprawling orange orchards, Betlingchhip peak (highest in Tripura at 930m), and panoramic sunrise views.',
      rating: 4.92,
      bestTimeToVisit: 'October – March (Orange Tourism Festival in November)',
      shortDesc: 'Tripura\'s premier 1,000m hill station famous for orange orchards and Betlingchhip peak.',
      gallery: [
        '/images/tripura/jampui-hills/gallery-1-v3.jpg',
        '/images/tripura/jampui-hills/gallery-2-v3.jpg',
        '/images/tripura/jampui-hills/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Betlingchhip Peak', 'Vanghmun Village', 'Kanchanpur'],
      recommendedHotels: ['Eden Tourist Lodge Jampui', 'Vanghmun Homestays'],
      famousRestaurants: ['Eden Lodge Canteen', 'Village Tea Stalls']
    },
    {
      name: 'Pilak Buddhist Archaeological Site',
      slug: 'pilak',
      category: 'Buddhist & Hindu Ruins',
      image: '/images/tripura/pilak/hero-v3.jpg',
      overview: 'Dating from the 8th–12th centuries, Pilak in South Tripura is a tranquil archaeological valley containing brick stupas, terracotta plaques, and stone sculptures reflecting a harmonious blend of Hindu and Buddhist cultures.',
      rating: 4.88,
      bestTimeToVisit: 'October – March',
      shortDesc: '8th-century archaeological valley containing Buddhist stupas, terracotta plaques & sculptures.',
      gallery: [
        '/images/tripura/pilak/gallery-1-v3.jpg',
        '/images/tripura/pilak/gallery-2-v3.jpg',
        '/images/tripura/pilak/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Shyam Sunder Tilla', 'Jolaibari', 'Belonia'],
      recommendedHotels: ['Pilak Tourist Lodge Jolaibari', 'Polo Towers Agartala'],
      famousRestaurants: ['Jolaibari Eateries', 'Highway Stalls']
    },
    {
      name: 'Chabimura Rock Carvings',
      slug: 'chabimura',
      category: 'Riverine Rock Carvings',
      image: '/images/tripura/chabimura/hero-v3.jpg',
      overview: 'Located on the steep rocky banks of the Gomati River near Amarpur, Chabimura (Devtamura) is famous for colossal 15th-century rock-cut relief carvings of Hindu deities Mahishasuramardini, Shiva, Vishnu, and Kartikeya carved into river cliffs.',
      rating: 4.94,
      bestTimeToVisit: 'October – March',
      shortDesc: '15th-century riverine cliff carvings of Hindu deities along the forested Gomati River.',
      gallery: [
        '/images/tripura/chabimura/gallery-1-v3.jpg',
        '/images/tripura/chabimura/gallery-2-v3.jpg',
        '/images/tripura/chabimura/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Gomati River Boat Safari', 'Amarpur Lake', 'Dumboor Lake'],
      recommendedHotels: ['Amarpur Tourist Lodge', 'Polo Towers Agartala'],
      famousRestaurants: ['Amarpur Town Restaurants', 'River Safari Tea Stalls']
    },
    {
      name: 'Tripura Sundari Temple, Udaipur',
      slug: 'tripura-sundari-temple',
      category: 'Shakti Peeth Shrine',
      image: '/images/tripura/tripura-sundari-temple/hero-v3.jpg',
      overview: 'Built in 1501 CE by Maharaja Dhanya Manikya in ancient Udaipur (Matabari), Tripura Sundari is one of the 51 sacred Shakti Peethas of India, designed in traditional Bengali hut-style (Kurma pitha) beside Kalyan Sagar lake.',
      rating: 4.95,
      bestTimeToVisit: 'October – March (Diwali Mela in October/November)',
      shortDesc: 'One of the 51 sacred Shakti Peethas of India built in 1501 in traditional Bengali hut style.',
      gallery: [
        '/images/tripura/tripura-sundari-temple/gallery-1-v3.jpg',
        '/images/tripura/tripura-sundari-temple/gallery-2-v3.jpg',
        '/images/tripura/tripura-sundari-temple/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kalyan Sagar Lake', 'Bhuvaneshwari Temple', 'Tepania Eco Park'],
      recommendedHotels: ['Gunabati Tourist Lodge Udaipur', 'Polo Towers Agartala'],
      famousRestaurants: ['Matabari Temple Peda Stalls', 'Udaipur Town Eateries']
    }
  ]
};
