export interface RajasthanPlace {
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

export interface RajasthanStateData {
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
  famousPlaces: RajasthanPlace[];
}

export const RAJASTHAN_DATA: RajasthanStateData = {
  id: 'rajasthan',
  name: 'Rajasthan',
  type: 'State',
  capital: 'Jaipur',
  tagline: 'Land of Kings',
  heroImage: '/images/rajasthan/jaipur-hawa-mahal/hero-v3.jpg',
  about: 'Rajasthan, India\'s largest state by area, is the royal realm of Rajput kings featuring golden Thar desert dunes in Jaisalmer, romantic lakes of Udaipur, blue alleyways of Jodhpur, iconic Pink City palaces of Jaipur, wild tigers of Ranthambore, and marble Jain carvings of Mount Abu.',
  bestTime: 'October – March',
  climate: 'Arid to semi-arid desert climate. Extreme summers (April–June, up to 48°C), monsoon rains (July–September), and pleasant to chilly winters (October–March, 8°C–25°C). Best visited October to March.',
  famousFood: ['Dal Baati Churma', 'Laal Maas', 'Gatte Ki Sabzi', 'Ker Sangri', 'Pyaaz Kachori', 'Ghevar', 'Mawa Kachori'],
  culture: 'Regal Rajput heritage, Ghoomar and Kalbelia folk dances, Puppet (Kathputli) shows, Manganiyar and Langa folk music, royal turbans (Safas), and vibrant Pushkar Camel Fair.',
  famousPlaces: [
    {
      name: 'Jaipur — Pink City & Hawa Mahal',
      slug: 'jaipur-hawa-mahal',
      category: 'UNESCO World Heritage City',
      image: '/images/rajasthan/jaipur-hawa-mahal/hero-v3.jpg',
      overview: 'Founded in 1727 by Maharaja Jai Singh II, Jaipur is a UNESCO World Heritage City famed for the honeycomb 953-window Hawa Mahal (Palace of Winds), Amber Fort, City Palace, and Jantar Mantar observatory.',
      rating: 4.98,
      bestTimeToVisit: 'October – March (Jaipur Literature Festival in January)',
      shortDesc: 'UNESCO Pink City featuring the 953-window Hawa Mahal, hilltop Amber Fort & City Palace.',
      gallery: [
        '/images/rajasthan/jaipur-hawa-mahal/gallery-1-v3.jpg',
        '/images/rajasthan/jaipur-hawa-mahal/gallery-2-v3.jpg',
        '/images/rajasthan/jaipur-hawa-mahal/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Amber Fort', 'City Palace Jaipur', 'Jantar Mantar', 'Nahargarh Fort'],
      recommendedHotels: ['Rambagh Palace Jaipur', 'The Leela Palace Jaipur', 'Taj Jai Mahal Palace'],
      famousRestaurants: ['LMB (Laxmi Misthan Bhandar)', '1135 AD Amber Fort', 'Chokhi Dhani']
    },
    {
      name: 'Udaipur — City of Lakes',
      slug: 'udaipur-city-palace',
      category: 'Romantic Royal Heritage',
      image: '/images/rajasthan/udaipur-city-palace/hero-v3.jpg',
      overview: 'Often hailed as the "Venice of the East", Udaipur is a romantic city built around Lake Pichola, dominated by the majestic City Palace, floating Lake Palace (Taj Lake Palace), Jagmandir island, and Saheliyon-ki-Bari gardens.',
      rating: 4.97,
      bestTimeToVisit: 'October – March',
      shortDesc: '"Venice of the East" — romantic city of Lake Pichola, floating Lake Palace and City Palace.',
      gallery: [
        '/images/rajasthan/udaipur-city-palace/gallery-1-v3.jpg',
        '/images/rajasthan/udaipur-city-palace/gallery-2-v3.jpg',
        '/images/rajasthan/udaipur-city-palace/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Lake Pichola Boat Cruise', 'Taj Lake Palace', 'Jagmandir', 'Sajjangarh Monsoon Palace'],
      recommendedHotels: ['Taj Lake Palace Udaipur', 'The Oberoi Udaivilas', 'The Leela Palace Udaipur'],
      famousRestaurants: ['Upre by 1559 AD', 'Ambrai Restaurant', 'Charcoal by Carlsson']
    },
    {
      name: 'Jaisalmer — Golden Fort & Thar Desert',
      slug: 'jaisalmer-fort',
      category: 'UNESCO Living Fort & Desert',
      image: '/images/rajasthan/jaisalmer-fort/hero-v3.jpg',
      overview: 'Rising out of the golden Thar Desert, Jaisalmer is dominated by Sonar Qila (Jaisalmer Fort) — a UNESCO World Heritage living fort where 3,000 residents dwell inside golden yellow sandstone walls, alongside Sam Sand Dunes camel safaris.',
      rating: 4.96,
      bestTimeToVisit: 'October – March (Desert Festival in Feb)',
      shortDesc: 'Golden sandstone UNESCO living fort in the Thar Desert with Sam Sand Dunes camel safaris.',
      gallery: [
        '/images/rajasthan/jaisalmer-fort/gallery-1-v3.jpg',
        '/images/rajasthan/jaisalmer-fort/gallery-2-v3.jpg',
        '/images/rajasthan/jaisalmer-fort/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Sam Sand Dunes', 'Patwon Ki Haveli', 'Gadisar Lake', 'Kuldhara Abandoned Village'],
      recommendedHotels: ['Suryagarh Jaisalmer', 'Marriott Resort Jaisalmer', 'The Serai Camp'],
      famousRestaurants: ['The Serai Dining', 'Trio Restaurant Jaisalmer', 'Saffron Rooftop']
    },
    {
      name: 'Jodhpur — Blue City & Mehrangarh Fort',
      slug: 'jodhpur-mehrangarh',
      category: 'Royal Citadel & Blue City',
      image: '/images/rajasthan/jodhpur-mehrangarh/hero-v3.jpg',
      overview: 'Guarded by the colossal Mehrangarh Fort towering 125m over a sea of indigo-blue painted houses, Jodhpur is the historic Rathore capital featuring Umaid Bhawan Palace, Jaswant Thada marble cenotaph, and spice bazaars.',
      rating: 4.95,
      bestTimeToVisit: 'October – March (RIFF Folk Festival in October)',
      shortDesc: 'Towering Mehrangarh Fort overlooking the indigo-blue painted houses of the old city.',
      gallery: [
        '/images/rajasthan/jodhpur-mehrangarh/gallery-1-v3.jpg',
        '/images/rajasthan/jodhpur-mehrangarh/gallery-2-v3.jpg',
        '/images/rajasthan/jodhpur-mehrangarh/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada', 'Clock Tower Market'],
      recommendedHotels: ['Umaid Bhawan Palace Jodhpur', 'RAAS Jodhpur', 'Taj Hari Mahal'],
      famousRestaurants: ['Indique Rooftop RAAS', 'Gypsy Thali Jodhpur', 'Janta Sweet Home']
    },
    {
      name: 'Pushkar — Holy Lake & Camel Fair',
      slug: 'pushkar',
      category: 'Sacred Lake & Fair',
      image: '/images/rajasthan/pushkar/hero-v3.jpg',
      overview: 'A sacred Hindu town built around holy Pushkar Lake with 52 ghats and the rare 14th-century Lord Brahma Temple, famous worldwide for the annual November Pushkar Camel Fair — the world\'s largest camel trading festival.',
      rating: 4.92,
      bestTimeToVisit: 'October – March (Pushkar Camel Fair in November)',
      shortDesc: 'Sacred holy lake town with 52 ghats, Lord Brahma temple, and world-famous Camel Fair.',
      gallery: [
        '/images/rajasthan/pushkar/gallery-1-v3.jpg',
        '/images/rajasthan/pushkar/gallery-2-v3.jpg',
        '/images/rajasthan/pushkar/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Brahma Temple', 'Pushkar Ghats', 'Savitri Temple Hill', 'Desert Camps'],
      recommendedHotels: ['The Westin Pushkar Resort & Spa', 'Ananta Spa & Resort Pushkar', 'Pushkar Palace'],
      famousRestaurants: ['Falafel Stalls Pushkar', 'La Pizzeria Pushkar', 'Halwai Gali Sweets']
    },
    {
      name: 'Ranthambore National Park',
      slug: 'ranthambore-national-park',
      category: 'Tiger Reserve & Fort',
      image: '/images/rajasthan/ranthambore-national-park/hero-v3.jpg',
      overview: 'One of northern India\'s premier Project Tiger reserves, Ranthambore spans 1,334 sq km of dry deciduous forest around the 10th-century UNESCO Ranthambore Fort, famous for diurnal Bengal tigers prowling ancient ruins.',
      rating: 4.96,
      bestTimeToVisit: 'October – June (Best tiger sightings Feb–May)',
      shortDesc: 'Famous tiger reserve where Bengal tigers prowl amidst ancient 10th-century UNESCO fort ruins.',
      gallery: [
        '/images/rajasthan/ranthambore-national-park/gallery-1-v3.jpg',
        '/images/rajasthan/ranthambore-national-park/gallery-2-v3.jpg',
        '/images/rajasthan/ranthambore-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Ranthambore Fort', 'Padam Talao Lake', 'Jogi Mahal', 'Trinetra Ganesha Temple'],
      recommendedHotels: ['Aman-i-Khas Ranthambore', 'The Oberoi Vanyavilas', 'SUJÁN Sher Bagh'],
      famousRestaurants: ['Vanyavilas Dining Hall', 'Oberoi Restaurant', 'Dhaba Sawai Madhopur']
    },
    {
      name: 'Bikaner — Junagarh Fort',
      slug: 'bikaner-junagarh',
      category: 'Desert Citadel',
      image: '/images/rajasthan/bikaner-junagarh/hero-v3.jpg',
      overview: 'An unvanquished desert fortress built in 1589 by Raja Rai Singh, Junagarh Fort in Bikaner features red sandstone and marble palaces (Anup Mahal, Chandra Mahal), gold leaf art, and the famous Karni Mata Rat Temple in Deshnoke nearby.',
      rating: 4.90,
      bestTimeToVisit: 'October – March (Camel Festival in January)',
      shortDesc: 'Impregnable 16th-century red sandstone desert fort with gold leaf palace interiors.',
      gallery: [
        '/images/rajasthan/bikaner-junagarh/gallery-1-v3.jpg',
        '/images/rajasthan/bikaner-junagarh/gallery-2-v3.jpg',
        '/images/rajasthan/bikaner-junagarh/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Karni Mata Rat Temple (Deshnoke)', 'Lallgarh Palace', 'National Research Centre on Camel'],
      recommendedHotels: ['Lallgarh Palace Hotel', 'Narendra Bhawan Bikaner', 'Gajner Palace'],
      famousRestaurants: ['Chhota Bikaner Sweets', 'Gallops Restaurant Junagarh']
    },
    {
      name: 'Mount Abu — Dilwara Temples',
      slug: 'mount-abu-dilwara',
      category: 'Hill Station & Jain Art',
      image: '/images/rajasthan/mount-abu-dilwara/hero-v3.jpg',
      overview: 'Rajasthan\'s only hill station at 1,220m in the Aravalli Range, Mount Abu is famous for the 11th–13th century Dilwara Jain Temples — world-renowned for breathtaking white marble ceiling carvings of incomparable delicacy.',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Rajasthan\'s only Aravalli hill station featuring world-famous intricate white marble Dilwara Jain Temples.',
      gallery: [
        '/images/rajasthan/mount-abu-dilwara/gallery-1-v3.jpg',
        '/images/rajasthan/mount-abu-dilwara/gallery-2-v3.jpg',
        '/images/rajasthan/mount-abu-dilwara/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Nakki Lake', 'Guru Shikhar Peak (1,722m)', 'Sunset Point', 'Achalgarh Fort'],
      recommendedHotels: ['Cama Rajputana Club Resort', 'WelcomHeritage Hotel Connaught House', 'Hotel Hillock'],
      famousRestaurants: ['Arbuda Restaurant', 'Mulberry Tree Restaurant Mount Abu']
    }
  ]
};
