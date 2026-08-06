export interface GujaratPlace {
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

export interface GujaratStateData {
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
  famousPlaces: GujaratPlace[];
}

export const GUJARAT_DATA: GujaratStateData = {
  id: 'gujarat',
  name: 'Gujarat',
  type: 'State',
  capital: 'Gandhinagar',
  tagline: 'Land of Legends & The White Rann',
  heroImage: '/images/gujarat/rann-of-kutch/hero-v3.jpg',
  about: 'Gujarat is a historic state in western India, home to the world’s tallest statue, the sole wild habitat of Asiatic lions, pristine white salt deserts, and centuries-old stepwells and temples.',
  bestTime: 'November – February',
  climate: 'Arid to semi-arid climate. Summers are extremely hot (35°C – 45°C) and winters are dry and pleasant (12°C – 28°C).',
  famousFood: ['Dhokla (Steamed Gram Flour Cake)', 'Khandvi', 'Thepla (Spiced Flatbread)', 'Undhiyu (Mixed Winter Veg)', 'Gujarati Kadhi'],
  culture: 'Rich traditions including Garba dance during Navratri, colorful kite-flying festivals (Uttarayan), Patola silk weavers, and mirror-work embroidery.',
  famousPlaces: [
    {
      name: 'Statue of Unity',
      slug: 'statue-of-unity',
      category: 'Engineering Wonder',
      image: '/images/gujarat/statue-of-unity/hero-v3.jpg',
      overview: 'Standing at 182 meters (597 feet) on the Narmada River facing the Sardar Sarovar Dam, this is the world’s tallest statue, built as a tribute to Sardar Vallabhbhai Patel.',
      rating: 4.98,
      bestTimeToVisit: 'October – March',
      shortDesc: 'The world’s tallest statue, standing at 182 meters on Narmada River.',
      gallery: [
        '/images/gujarat/statue-of-unity/gallery-1-v3.jpg',
        '/images/gujarat/statue-of-unity/gallery-2-v3.jpg',
        '/images/gujarat/statue-of-unity/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Valley of Flowers', 'Vishwa Van', 'Sardar Sarovar Dam Viewpoint', 'Cactus Garden'],
      recommendedHotels: ['Tent City Narmada', 'Ramada Encore by Wyndham SoU', 'Fern Sardar Sarovar Resort'],
      famousRestaurants: ['Sankalp Restaurant', 'SoU Food Court', 'Narmada Riverview Dhaba']
    },
    {
      name: 'Somnath Temple',
      slug: 'somnath-temple',
      category: 'Spiritual Shrine',
      image: '/images/gujarat/somnath-temple/hero-v3.jpg',
      overview: 'Located on the Prabhas Patan coast, this magnificent Chalukya-style temple dedicated to Lord Shiva is the first of the twelve sacred Jyotirlinga shrines in India, rebuilt several times throughout history.',
      rating: 4.96,
      bestTimeToVisit: 'September – March',
      shortDesc: 'Sacred coastal Shiva temple, the first of twelve Jyotirlingas.',
      gallery: [
        '/images/gujarat/somnath-temple/gallery-1-v3.jpg',
        '/images/gujarat/somnath-temple/gallery-2-v3.jpg',
        '/images/gujarat/somnath-temple/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Triveni Sangam', 'Bhalka Tirth', 'Gita Mandir'],
      recommendedHotels: ['The Lords Inn Somnath', 'Hotel Somnath Sagar', 'Fern Residency Somnath'],
      famousRestaurants: ['Somnath Canteen', 'Shree Balaji Restaurant', 'Prabhas Dining Hall']
    },
    {
      name: 'Gir National Park',
      slug: 'gir-national-park',
      category: 'Wildlife Sanctuary',
      image: '/images/gujarat/gir-national-park/hero-v3.jpg',
      overview: 'Established in 1965, Gir is the sole forest reserve in the world harboring the majestic wild Asiatic Lion, featuring dry deciduous teak forests and rich biodiversity.',
      rating: 4.94,
      bestTimeToVisit: 'December – March (Closed mid-June to mid-October)',
      shortDesc: 'The exclusive wildlife sanctuary habitat of wild Asiatic Lions.',
      gallery: [
        '/images/gujarat/gir-national-park/gallery-1-v3.jpg',
        '/images/gujarat/gir-national-park/gallery-2-v3.jpg',
        '/images/gujarat/gir-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kamleshwar Dam', 'Devalia Safari Park', 'Girnar Hills Junagadh'],
      recommendedHotels: ['The Fern Gir Forest Resort', 'Woods at Sasan', 'Club Mahindra Gir'],
      famousRestaurants: ['Sasan Gir Canteen', 'Village Dhaba Sasan', 'Forest View Diner']
    },
    {
      name: 'Sun Temple, Modhera',
      slug: 'sun-temple-modhera',
      category: 'Historical Heritage',
      image: '/images/gujarat/sun-temple-modhera/hero-v3.jpg',
      overview: 'Built in 1026 CE by King Bhima I of the Solanki dynasty, this architectural marvel dedicated to the Sun God Surya features a magnificent assembly hall and a grand stepped tank (Ramakund).',
      rating: 4.93,
      bestTimeToVisit: 'October – March (Modhera Dance Festival in January)',
      shortDesc: '11th-century architectural marvel dedicated to the solar deity Surya.',
      gallery: [
        '/images/gujarat/sun-temple-modhera/gallery-1-v3.jpg',
        '/images/gujarat/sun-temple-modhera/gallery-2-v3.jpg',
        '/images/gujarat/sun-temple-modhera/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Patan Patola Heritage Museum', 'Rani ki Vav Patan', 'Mehsana Water Park'],
      recommendedHotels: ['Hotel Toran Modhera', 'The Grand Raveta Patan'],
      famousRestaurants: ['Modhera Heritage Restaurant', 'Patan Thal Dining']
    },
    {
      name: 'Rann of Kutch (White Desert)',
      slug: 'rann-of-kutch',
      category: 'Natural Wonder',
      image: '/images/gujarat/rann-of-kutch/hero-v3.jpg',
      overview: 'One of the largest salt deserts in the world, the Great Rann of Kutch is a vast salt marsh that glows under the full moon night, hosting the annual three-month Rann Utsav festival.',
      rating: 4.97,
      bestTimeToVisit: 'November – February',
      shortDesc: 'One of the world’s largest white salt deserts, hosting Rann Utsav.',
      gallery: [
        '/images/gujarat/rann-of-kutch/gallery-1-v3.jpg',
        '/images/gujarat/rann-of-kutch/gallery-2-v3.jpg',
        '/images/gujarat/rann-of-kutch/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kalo Dungar (Black Hill)', 'Bhuj Aina Mahal', 'Mandvi Beach'],
      recommendedHotels: ['Rann Resort Dhordo', 'Gateway to Rann Resort', 'Tent City Dhordo'],
      famousRestaurants: ['Dhordo local village thali', 'Kutchi Rasoi']
    },
    {
      name: 'Laxmi Vilas Palace',
      slug: 'laxmi-vilas-palace',
      category: 'Historical Heritage',
      image: '/images/gujarat/laxmi-vilas-palace/hero-v3.jpg',
      overview: 'Four times the size of Buckingham Palace, this majestic Indo-Saracenic royal residence was built by Maharaja Sayajirao Gaekwad III in 1890, boasting exquisite glass windows and marble carvings.',
      rating: 4.92,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Grand royal palace residence four times the size of Buckingham Palace.',
      gallery: [
        '/images/gujarat/laxmi-vilas-palace/gallery-1-v3.jpg',
        '/images/gujarat/laxmi-vilas-palace/gallery-2-v3.jpg',
        '/images/gujarat/laxmi-vilas-palace/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Baroda Museum & Picture Gallery', 'Sayaji Baug', 'EME Temple'],
      recommendedHotels: ['Welcomhotel by ITC Hotels Vadodara', 'Sayaji Hotel Vadodara', 'Grand Mercure Vadodara Surya Palace'],
      famousRestaurants: ['Mandap Gujarati Thali', 'Peshawri Vadodara', 'The Saffron Club']
    },
    {
      name: 'Rani ki Vav, Patan',
      slug: 'rani-ki-vav',
      category: 'Historical Heritage',
      image: '/images/gujarat/rani-ki-vav/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site, this subterranean stepwell built in the 11th century by Queen Udayamati is styled as an inverted temple, displaying over 500 main sculptures of Lord Vishnu.',
      rating: 4.95,
      bestTimeToVisit: 'October – March',
      shortDesc: 'UNESCO subterranean stepwell designed as an inverted temple.',
      gallery: [
        '/images/gujarat/rani-ki-vav/gallery-1-v3.jpg',
        '/images/gujarat/rani-ki-vav/gallery-2-v3.jpg',
        '/images/gujarat/rani-ki-vav/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Patan Patola Weaving Center', 'Sahasralinga Talav', 'Sun Temple Modhera'],
      recommendedHotels: ['The Grand Raveta', 'Hotel Apple Patan'],
      famousRestaurants: ['Rani ki Vav Cafeteria', 'Patan Local Gujarati Thali']
    },
    {
      name: 'Dwarkadhish Temple',
      slug: 'dwarkadhish-temple',
      category: 'Spiritual Shrine',
      image: '/images/gujarat/dwarkadhish-temple/hero-v3.jpg',
      overview: 'Also known as Jagat Mandir, this 5-story limestone and sand temple dedicated to Lord Krishna stands on the banks of Gomti River, tracing back over 2,200 years of history.',
      rating: 4.95,
      bestTimeToVisit: 'October – March (Famous during Janmashtami)',
      shortDesc: 'Ancient 5-story Jagat Mandir shrine dedicated to Lord Krishna.',
      gallery: [
        '/images/gujarat/dwarkadhish-temple/gallery-1-v3.jpg',
        '/images/gujarat/dwarkadhish-temple/gallery-2-v3.jpg',
        '/images/gujarat/dwarkadhish-temple/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Gomti Ghat', 'Rukmini Devi Temple', 'Bet Dwarka Island', 'Nageshwar Jyotirlinga'],
      recommendedHotels: ['The Fern Residency Dwarka', 'Mercure Dwarka', 'Hawthorn Suites by Wyndham Dwarka'],
      famousRestaurants: ['Chappan Bhog Dwarka', 'Shrinathji Dining Hall', 'Dwarka Food Court']
    }
  ]
};
