export interface AssamPlace {
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

export interface AssamStateData {
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
  famousPlaces: AssamPlace[];
}

export const ASSAM_DATA: AssamStateData = {
  id: 'assam',
  name: 'Assam',
  type: 'State',
  capital: 'Dispur',
  tagline: 'The Land of Red River and Blue Hills',
  heroImage: '/images/assam/kaziranga-national-park/hero.jpg',
  about: 'Assam is a majestic gateway to Northeast India, famous for its lush tea estates, the mighty Brahmaputra River, rich wildlife habitats harboring the one-horned rhinoceros, and unique Neo-Vaishnavite satra culture.',
  bestTime: 'November – April',
  climate: 'Humid subtropical climate with warm summers and mild, dry winters (10°C – 23°C).',
  famousFood: ['Khaar (Papaya Extract Dish)', 'Masor Tenga (Sour Fish Curry)', 'Duck Meat Curry with Ash Gourd', 'Pitha (Rice Cakes)', 'Assam Orthodox Tea'],
  culture: 'Rich traditions including Bihu dance festivals, handwoven Muga golden silk sarees, bell-metal crafts, and Vaishnavite Satriya dance dramas.',
  famousPlaces: [
    {
      name: 'Kaziranga National Park',
      slug: 'kaziranga-national-park',
      category: 'Wildlife Sanctuary',
      image: '/images/assam/kaziranga-national-park/hero.jpg',
      overview: 'A UNESCO World Heritage Site, Kaziranga National Park spans across Golaghat and Nagaon districts, hosting two-thirds of the world’s great Indian one-horned rhinoceros population, along with elephants, wild water buffaloes, and tigers.',
      rating: 4.97,
      bestTimeToVisit: 'November – April',
      shortDesc: 'UNESCO World Heritage Site home to the one-horned rhinoceros.',
      gallery: [
        '/images/assam/kaziranga-national-park/gallery-1.jpg',
        '/images/assam/kaziranga-national-park/gallery-2.jpg',
        '/images/assam/kaziranga-national-park/gallery-3.jpg'
      ],
      nearbyAttractions: ['Kaziranga National Orchid Park', 'Kakochang Waterfalls', 'Hathikuli Tea Estate'],
      recommendedHotels: ['The Borgos Resort Kaziranga', 'Infinity Resorts Kaziranga', 'Jungle Travel Camp'],
      famousRestaurants: ['Hornbill Restaurant Kaziranga', 'Maihang Restaurant', 'Orchid Canteen']
    },
    {
      name: 'Kamakhya Temple',
      slug: 'kamakhya-temple',
      category: 'Spiritual Shrine',
      image: '/images/assam/kamakhya-temple/hero.jpg',
      overview: 'Perched on the Nilachal Hills in Guwahati, Kamakhya Temple is one of the oldest and most revered Shakti Peethas in India, dedicated to the mother goddess Kamakhya, and host to the annual Ambubachi Mela festival.',
      rating: 4.95,
      bestTimeToVisit: 'October – April',
      shortDesc: 'Revered hilltop Shakti Peetha temple on Nilachal Hill in Guwahati.',
      gallery: [
        '/images/assam/kamakhya-temple/gallery-1.jpg',
        '/images/assam/kamakhya-temple/gallery-2.jpg',
        '/images/assam/kamakhya-temple/gallery-3.jpg'
      ],
      nearbyAttractions: ['Umananda Temple (Peacock Island)', 'Guwahati Planetarium', 'Assam State Museum'],
      recommendedHotels: ['Radisson Blu Hotel Guwahati', 'Kiranshree Grand', 'Taj Vivanta Guwahati'],
      famousRestaurants: ['Paradise Chowk Guwahati', 'Gam’s Delicacy Restaurant', 'Michinga']
    },
    {
      name: 'Majuli Island',
      slug: 'majuli-island',
      category: 'River Island',
      image: '/images/assam/majuli-island/hero.jpg',
      overview: 'Formed by the Brahmaputra River system, Majuli is the world’s largest river island and the cultural capital of Assam, famous for its Neo-Vaishnavite Satras (monasteries), traditional mask-making, and pottery.',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: 'World’s largest river island and hub of Neo-Vaishnavite culture.',
      gallery: [
        '/images/assam/majuli-island/gallery-1.jpg',
        '/images/assam/majuli-island/gallery-2.jpg',
        '/images/assam/majuli-island/gallery-3.jpg'
      ],
      nearbyAttractions: ['Kamalabari Satra', 'Auniati Satra', 'Dakhinpat Satra', 'Samaguri Satra (Mask-making)'],
      recommendedHotels: ['La Maison de Ananda Majuli', 'Dekasang Resort Majuli', 'Yggdrasill Bamboo Cottages'],
      famousRestaurants: ['Kareng Food Point', 'Utsav Restaurant Majuli', 'Satra Canteen']
    },
    {
      name: 'Manas National Park',
      slug: 'manas-national-park',
      category: 'Wildlife Sanctuary',
      image: '/images/assam/manas-national-park/hero.jpg',
      overview: 'Manas is a UNESCO World Heritage Site, Project Tiger Reserve, and biosphere reserve on the Bhutan border, known for its rare endemic species like the Pygmy Hog, Golden Langur, and Assam Roofed Turtle.',
      rating: 4.94,
      bestTimeToVisit: 'November – April',
      shortDesc: 'UNESCO World Heritage tiger reserve on the Bhutan border.',
      gallery: [
        '/images/assam/manas-national-park/gallery-1.jpg',
        '/images/assam/manas-national-park/gallery-2.jpg',
        '/images/assam/manas-national-park/gallery-3.jpg'
      ],
      nearbyAttractions: ['Manas River Rafting', 'Bansbari Range Safari', 'Mathanguri Forest Lodge'],
      recommendedHotels: ['Musa Jungle Retreat Manas', 'Sikhiri Cottage Manas', 'Florican Cottage'],
      famousRestaurants: ['Musa Restaurant', 'Bansbari Camp Canteen']
    },
    {
      name: 'Umananda Temple',
      slug: 'umananda-temple',
      category: 'Spiritual Shrine',
      image: '/images/assam/umananda-temple/hero.jpg',
      overview: 'Situated on the Peacock Island in the middle of the Brahmaputra River in Guwahati, Umananda Temple is a 17th-century Shiva temple built by Ahom King Gadadhar Singha, accessible by ferry ride.',
      rating: 4.92,
      bestTimeToVisit: 'October – April',
      shortDesc: 'Hillock temple on the world’s smallest inhabited river island.',
      gallery: [
        '/images/assam/umananda-temple/gallery-1.jpg',
        '/images/assam/umananda-temple/gallery-2.jpg',
        '/images/assam/umananda-temple/gallery-3.jpg'
      ],
      nearbyAttractions: ['Guwahati Planetarium', 'Kamakhya Temple', 'Fancy Bazar'],
      recommendedHotels: ['Taj Vivanta Guwahati', 'Novotel Guwahati'],
      famousRestaurants: ['Michinga Restaurant', 'Gam’s Delicacy']
    },
    {
      name: 'Haflong Hills',
      slug: 'haflong-hills',
      category: 'Hill Station',
      image: '/images/assam/haflong-hills/hero.jpg',
      overview: 'Assam’s only hill station, Haflong offers panoramic vistas of the Dima Hasao mountains, tea gardens, and Haflong Lake. Nearby Jatinga village is famous for the mysterious seasonal bird phenomenon.',
      rating: 4.87,
      bestTimeToVisit: 'October – February',
      shortDesc: 'Assam’s only hill station with scenic Haflong Lake and mountain vistas.',
      gallery: [
        '/images/assam/haflong-hills/gallery-1.jpg',
        '/images/assam/haflong-hills/gallery-2.jpg',
        '/images/assam/haflong-hills/gallery-3.jpg'
      ],
      nearbyAttractions: ['Haflong Lake Park', 'Jatinga Bird Observatory', 'Maibang Historical ruins'],
      recommendedHotels: ['Landmark Hotels Haflong', 'Haritha Hill Resort Haflong', 'Jatinga Tribal Homestay'],
      famousRestaurants: ['Haflong Hillside Diner', 'Dima Hasao Kitchen']
    },
    {
      name: 'Sivasagar (Rongpur)',
      slug: 'sivasagar',
      category: 'Historical Heritage',
      image: '/images/assam/sivasagar/hero.jpg',
      overview: 'The historical capital of the Ahom Kingdom (1699–1788), Sivasagar houses iconic brick monuments including the Rang Ghar (royal amphitheater), Talatal Ghar (palace fortress), and the massive Sivasagar Tank and Sivadol temple complex.',
      rating: 4.91,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Historical capital of the Ahom Kingdom with brick palaces.',
      gallery: [
        '/images/assam/sivasagar/gallery-1.jpg',
        '/images/assam/sivasagar/gallery-2.jpg',
        '/images/assam/sivasagar/gallery-3.jpg'
      ],
      nearbyAttractions: ['Rang Ghar', 'Talatal Ghar', 'Kareng Ghar', 'Sivadol Temple'],
      recommendedHotels: ['Hotel Shiva Palace Sivasagar', 'Hotel Brindavan', 'Haripriya Lodge'],
      famousRestaurants: ['Ahom Restaurant', 'Food Court Sivasagar', 'Brahmaputra Cabin']
    },
    {
      name: 'Pobitora Wildlife Sanctuary',
      slug: 'pobitora-wildlife-sanctuary',
      category: 'Wildlife Sanctuary',
      image: '/images/assam/pobitora-wildlife-sanctuary/hero.jpg',
      overview: 'Famous for having the highest density of Indian one-horned rhinoceroses in the world, Pobitora Wildlife Sanctuary features flat swamp grasslands on the floodplains of the Brahmaputra River.',
      rating: 4.90,
      bestTimeToVisit: 'November – April',
      shortDesc: 'Sanctuary holding the world’s highest density of great Indian rhinoceroses.',
      gallery: [
        '/images/assam/pobitora-wildlife-sanctuary/gallery-1.jpg',
        '/images/assam/pobitora-wildlife-sanctuary/gallery-2.jpg',
        '/images/assam/pobitora-wildlife-sanctuary/gallery-3.jpg'
      ],
      nearbyAttractions: ['Mayong (Land of Black Magic)', 'Haduk Hanging Bridge'],
      recommendedHotels: ['Pobitora Village Resort', 'Arya Eco Resort'],
      famousRestaurants: ['Rhino Cafe Pobitora', 'Mayong Dining Hall']
    }
  ]
};
