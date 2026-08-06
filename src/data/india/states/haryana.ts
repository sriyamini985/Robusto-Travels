export interface HaryanaPlace {
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

export interface HaryanaStateData {
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
  famousPlaces: HaryanaPlace[];
}

export const HARYANA_DATA: HaryanaStateData = {
  id: 'haryana',
  name: 'Haryana',
  type: 'State',
  capital: 'Chandigarh',
  tagline: 'Land of Bhagavad Gita & Green Fields',
  heroImage: '/images/haryana/brahma-sarovar/hero-v3.jpg',
  about: 'Haryana is a landlocked state in northern India, birthplace of the Bhagavad Gita at Kurukshetra, home to lush Aravalli hills, Mughal-era gardens, migratory bird sanctuaries, and historic battle sites.',
  bestTime: 'October – March',
  climate: 'Semi-arid continental climate; hot summers (40°C+) and cool winters (4°C – 20°C). Best weather from October to February.',
  famousFood: ['Bajra Khichdi', 'Hara Dhania Cholia', 'Singri ki Sabzi', 'Methi Gajar', 'Kadhi Pakora', 'Lassi'],
  culture: 'Rich folk tradition featuring Ragini and Saang theatre, Phag (Holi) songs, Teej festival dances, and handloom weaving of durries and pottery.',
  famousPlaces: [
    {
      name: 'Brahma Sarovar, Kurukshetra',
      slug: 'brahma-sarovar',
      category: 'Spiritual Shrine',
      image: '/images/haryana/brahma-sarovar/hero-v3.jpg',
      overview: 'One of the holiest sacred tanks in Hinduism, Brahma Sarovar in Kurukshetra is said to have been created by Lord Brahma himself. Spanning over 3 km², it is especially revered during solar eclipses when millions of pilgrims gather for a holy dip.',
      rating: 4.96,
      bestTimeToVisit: 'October – March (Solar Eclipse draws millions)',
      shortDesc: 'Sacred tank created by Lord Brahma, holiest site in Kurukshetra.',
      gallery: [
        '/images/haryana/brahma-sarovar/gallery-1-v3.jpg',
        '/images/haryana/brahma-sarovar/gallery-2-v3.jpg',
        '/images/haryana/brahma-sarovar/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Jyotisar Sacred Tank', 'Kurukshetra Panorama Museum', 'Sheikh Chehli Tomb'],
      recommendedHotels: ['Hotel Kalpana Palace Kurukshetra', 'Hotel Neelkanth Kurukshetra'],
      famousRestaurants: ['Brahma Sarovar Canteen', 'Haveli Restaurant Kurukshetra']
    },
    {
      name: 'Kurukshetra Panorama & Science Museum',
      slug: 'kurukshetra-panorama',
      category: 'Historical Heritage',
      image: '/images/haryana/kurukshetra-panorama/hero-v3.jpg',
      overview: 'A remarkable 360-degree panoramic painting depicting the Mahabharata war at Kurukshetra, housed in a cylindrical gallery. The museum also contains science exhibits and multimedia presentations of the epic battle.',
      rating: 4.90,
      bestTimeToVisit: 'October – March',
      shortDesc: '360-degree panoramic Mahabharata war painting in a cylindrical museum.',
      gallery: [
        '/images/haryana/kurukshetra-panorama/gallery-1-v3.jpg',
        '/images/haryana/kurukshetra-panorama/gallery-2-v3.jpg',
        '/images/haryana/kurukshetra-panorama/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Brahma Sarovar', 'Jyotisar', 'Bhadrakali Temple'],
      recommendedHotels: ['Hotel Kalpana Palace', 'HSVP Tourist Complex Kurukshetra'],
      famousRestaurants: ['Museum Cafeteria', 'Punjabi Dhaba Kurukshetra']
    },
    {
      name: 'Pinjore Gardens (Yadavindra Gardens)',
      slug: 'pinjore-gardens',
      category: 'Garden Heritage',
      image: '/images/haryana/pinjore-gardens/hero-v3.jpg',
      overview: 'Built in the 17th century by Nawab Fidai Khan of the Mughal court, these terraced Mughal-style gardens near Chandigarh feature fountains, flower beds, pavilions, and a mini zoo across seven tiered platforms.',
      rating: 4.88,
      bestTimeToVisit: 'February – April (Mango & Rose season)',
      shortDesc: '17th-century Mughal terraced gardens with fountains and pavilions.',
      gallery: [
        '/images/haryana/pinjore-gardens/gallery-1-v3.jpg',
        '/images/haryana/pinjore-gardens/gallery-2-v3.jpg',
        '/images/haryana/pinjore-gardens/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Bhima Devi Temple Museum', 'Chhatbir Zoo', 'Morni Hills'],
      recommendedHotels: ['Pinjore Heritage Resort', 'Hotel Mountview Chandigarh'],
      famousRestaurants: ['Garden View Restaurant Pinjore', 'Highway Haveli']
    },
    {
      name: 'Sultanpur Bird Sanctuary',
      slug: 'sultan-pur-bird-sanctuary',
      category: 'Wildlife Sanctuary',
      image: '/images/haryana/sultan-pur-bird-sanctuary/hero-v3.jpg',
      overview: 'A premier wetland national park near Gurugram, Sultanpur hosts over 250 species of migratory and resident birds including flamingos, Siberian cranes, pelicans and painted storks, best viewed during winter.',
      rating: 4.92,
      bestTimeToVisit: 'October – March (Peak migratory season)',
      shortDesc: 'Wetland national park with 250+ migratory and resident bird species.',
      gallery: [
        '/images/haryana/sultan-pur-bird-sanctuary/gallery-1-v3.jpg',
        '/images/haryana/sultan-pur-bird-sanctuary/gallery-2-v3.jpg',
        '/images/haryana/sultan-pur-bird-sanctuary/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Heritage Transport Museum', 'Damdama Lake', 'Kingdom of Dreams Gurugram'],
      recommendedHotels: ['ITC Grand Bharat', 'Trident Gurugram', 'The Westin Gurugram'],
      famousRestaurants: ['Sultanpur Dhaba', 'Punjabi by Nature Gurugram']
    },
    {
      name: 'Morni Hills',
      slug: 'morni-hills',
      category: 'Natural Wonder',
      image: '/images/haryana/morni-hills/hero-v3.jpg',
      overview: 'The only hill station in Haryana, Morni Hills rises to 1,220 meters in the Shivalik range, offering dense forest trails, twin lakes (Tikkar Taal), wildlife, and a historic fort commanding panoramic valley views.',
      rating: 4.89,
      bestTimeToVisit: 'October – June (avoid heavy monsoon in July-August)',
      shortDesc: "Haryana's only hill station with twin lakes and forested Shivalik ridges.",
      gallery: [
        '/images/haryana/morni-hills/gallery-1-v3.jpg',
        '/images/haryana/morni-hills/gallery-2-v3.jpg',
        '/images/haryana/morni-hills/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tikkar Taal Lakes', 'Morni Fort', 'Thapli Village'],
      recommendedHotels: ['Morni Hills Resort', 'Haryana Tourism Morni Hills'],
      famousRestaurants: ['Tikkar Taal Lake Restaurant', 'Forest View Dhaba Morni']
    },
    {
      name: 'Surajkund Heritage Tank, Faridabad',
      slug: 'surajkund',
      category: 'Historical Heritage',
      image: '/images/haryana/surajkund/hero-v3.jpg',
      overview: "A 10th-century sun-shaped reservoir built by Surajpal Tomar of the Tomar dynasty, Surajkund is famous for hosting the international Surajkund Crafts Mela — one of the world's largest handicraft fairs held every February.",
      rating: 4.91,
      bestTimeToVisit: 'February (Surajkund Mela) and October – March',
      shortDesc: '10th-century sun-shaped tank and site of international crafts fair.',
      gallery: [
        '/images/haryana/surajkund/gallery-1-v3.jpg',
        '/images/haryana/surajkund/gallery-2-v3.jpg',
        '/images/haryana/surajkund/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Anangpur Dam', 'Badkhal Lake', 'Tughlaqabad Fort Delhi'],
      recommendedHotels: ['The Lalit Faridabad', 'Heritage Village Resort Manesar'],
      famousRestaurants: ['Mela Ground Food Courts', 'Classic Dhaba Surajkund']
    },
    {
      name: 'Damdama Lake, Gurugram',
      slug: 'damdama-lake',
      category: 'Nature & Recreation',
      image: '/images/haryana/damdama-lake/hero-v3.jpg',
      overview: 'Gurugram\'s largest natural lake spread over 3,000 acres in the Aravalli foothills, Damdama offers boating, rock climbing, camping, bird watching, and hot air balloon rides against a scenic backdrop.',
      rating: 4.87,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Gurugram\'s largest lake offering boating, camping and hot air ballooning.',
      gallery: [
        '/images/haryana/damdama-lake/gallery-1-v3.jpg',
        '/images/haryana/damdama-lake/gallery-2-v3.jpg',
        '/images/haryana/damdama-lake/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Sohna Sulphur Springs', 'Sultanpur Bird Sanctuary', 'Kingdom of Dreams'],
      recommendedHotels: ['Golden Tulip Damdama Lake Resort', 'ITC Grand Bharat'],
      famousRestaurants: ['Haryana Tourism Lakeside Restaurant', 'Aravalli Dhaba']
    },
    {
      name: 'Kala Amb Memorial, Panipat',
      slug: 'panipat-kala-amb',
      category: 'Historical Heritage',
      image: '/images/haryana/panipat-kala-amb/hero-v3.jpg',
      overview: 'Kala Amb (Black Mango Tree) marks the site where Viswasrao, the son of the Peshwa, fell in the Third Battle of Panipat (1761). A memorial obelisk stands here surrounded by a park commemorating one of India\'s most decisive battles.',
      rating: 4.85,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Memorial obelisk at the decisive Third Battle of Panipat site (1761).',
      gallery: [
        '/images/haryana/panipat-kala-amb/gallery-1-v3.jpg',
        '/images/haryana/panipat-kala-amb/gallery-2-v3.jpg',
        '/images/haryana/panipat-kala-amb/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Ibrahim Lodi Tomb', 'Panipat Museum', 'Devi Temple Panipat'],
      recommendedHotels: ['Hotel Skylark Panipat', 'Hotel President Panipat'],
      famousRestaurants: ['Panipat Dhaba', 'Highway King Restaurant']
    }
  ]
};
