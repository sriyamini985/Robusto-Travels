export interface TamilNaduPlace {
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

export interface TamilNaduStateData {
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
  famousPlaces: TamilNaduPlace[];
}

export const TAMIL_NADU_DATA: TamilNaduStateData = {
  id: 'tamil-nadu',
  name: 'Tamil Nadu',
  type: 'State',
  capital: 'Chennai',
  tagline: 'Enchanting Tamil Nadu',
  heroImage: '/images/tamil-nadu/meenakshi-temple/hero-v3.jpg',
  about: 'Tamil Nadu, on India\'s southern tip, is a cradle of Dravidian civilization featuring towering gopuram temples (Madurai Meenakshi, Thanjavur Brihadisvara), UNESCO rock-cut monuments at Mahabalipuram, Nilgiri hill stations (Ooty, Kodaikanal), sacred sea pilgrimages at Rameswaram, and classical Bharatanatyam dance.',
  bestTime: 'October – March',
  climate: 'Tropical monsoonal climate. Hot summers (April–June, 28°C–40°C), northeast monsoon rains (October–December), and pleasant winters (November–February, 20°C–30°C). Best visited October to March.',
  famousFood: ['Idli & Sambar', 'Dosa (Masala, Rava)', 'Chettinad Chicken Curry', 'Filter Coffee (Degree Kapi)', 'Kothu Parotta', 'Pongal', 'Jigarthanda (Madurai)'],
  culture: 'Millennia-old Dravidian temple culture, classical Bharatanatyam dance, Carnatic music season (December in Chennai), Kanchipuram silk saris, Tanjore paintings, and Pongal harvest festival.',
  famousPlaces: [
    {
      name: 'Meenakshi Amman Temple, Madurai',
      slug: 'meenakshi-temple',
      category: 'Dravidian Temple Wonder',
      image: '/images/tamil-nadu/meenakshi-temple/hero-v3.jpg',
      overview: 'Located in the ancient city of Madurai, the 2,500-year-old Meenakshi Sundareswarar Temple is a masterpiece of Dravidian architecture featuring 14 towering gopurams decorated with thousands of brightly painted mythological stone sculptures and the Hall of 1,000 Pillars.',
      rating: 4.98,
      bestTimeToVisit: 'October – March (Chithirai Festival in April/May)',
      shortDesc: 'Ancient 2,500-year-old Dravidian masterpiece featuring 14 painted gopurams & 1,000 pillar hall.',
      gallery: [
        '/images/tamil-nadu/meenakshi-temple/gallery-1-v3.jpg',
        '/images/tamil-nadu/meenakshi-temple/gallery-2-v3.jpg',
        '/images/tamil-nadu/meenakshi-temple/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tirumalai Nayakkar Mahal', 'Koodal Azhagar Temple', 'Vandiyur Mariamman Teppakulam'],
      recommendedHotels: ['Heritage Madurai', 'The Gateway Hotel Pasumalai Madurai', 'Courtyard by Marriott Madurai'],
      famousRestaurants: ['Murugan Idli Shop Madurai', 'Famous Jigarthanda Shop', 'Modern Restaurant']
    },
    {
      name: 'Brihadisvara Temple, Thanjavur',
      slug: 'thanjavur-brihadisvara',
      category: 'UNESCO Great Living Chola Temple',
      image: '/images/tamil-nadu/thanjavur-brihadisvara/hero-v3.jpg',
      overview: 'Completed in 1010 CE by Emperor Raja Raja Chola I, the UNESCO World Heritage "Big Temple" of Thanjavur features a 216-foot vimana tower capped by an 80-ton single granite stone dome, displaying Chola bronze sculptures and fresco murals.',
      rating: 4.97,
      bestTimeToVisit: 'October – March',
      shortDesc: '1,000-year-old Chola UNESCO temple with a 216 ft granite vimana capped by an 80-ton stone dome.',
      gallery: [
        '/images/tamil-nadu/thanjavur-brihadisvara/gallery-1-v3.jpg',
        '/images/tamil-nadu/thanjavur-brihadisvara/gallery-2-v3.jpg',
        '/images/tamil-nadu/thanjavur-brihadisvara/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Thanjavur Royal Palace & Art Gallery', 'Saraswathi Mahal Library', 'Gangaikonda Cholapuram'],
      recommendedHotels: ['Svatma Thanjavur', 'Ideal River Resort Thanjavur', 'Hotel TamilNadu'],
      famousRestaurants: ['Sattvam Svatma', 'Bombay Restaurant Thanjavur', 'Hotel Vasantha Bhavan']
    },
    {
      name: 'Mahabalipuram (Mamallapuram)',
      slug: 'mahabalipuram',
      category: 'UNESCO Rock-Cut Monuments',
      image: '/images/tamil-nadu/mahabalipuram/hero-v3.jpg',
      overview: 'A UNESCO World Heritage coastal town built by the 7th-century Pallava dynasty, Mahabalipuram is world-famous for the Shore Temple on the Bay of Bengal, Pancha Rathas (monolithic stone chariots), and "Descent of the Ganges" rock relief.',
      rating: 4.96,
      bestTimeToVisit: 'October – March (Mahabalipuram Dance Festival Dec/Jan)',
      shortDesc: 'UNESCO 7th-century Pallava sea-shore temple, stone chariots, and giant open-air rock relief.',
      gallery: [
        '/images/tamil-nadu/mahabalipuram/gallery-1-v3.jpg',
        '/images/tamil-nadu/mahabalipuram/gallery-2-v3.jpg',
        '/images/tamil-nadu/mahabalipuram/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Shore Temple', 'Pancha Rathas', 'Krishna\'s Butterball', 'Arjuna\'s Penance'],
      recommendedHotels: ['InterContinental Chennai Mahabalipuram Resort', 'Radisson Blu Resort Temple Bay', 'Taj Fisherman\'s Cove Resort'],
      famousRestaurants: ['L\'attitude 49', 'Moonrakers Seafood', 'Bambu Seafood Restaurant']
    },
    {
      name: 'Ooty (Udhagamandalam)',
      slug: 'ooty',
      category: 'Nilgiri Hill Station',
      image: '/images/tamil-nadu/ooty/hero-v3.jpg',
      overview: 'Known as the "Queen of Hill Stations", Ooty sits at 2,240m in the Nilgiri Hills, famous for the UNESCO Nilgiri Mountain Railway toy train, sprawling tea estates, Ooty Lake, Government Botanical Garden, and Doddabetta Peak.',
      rating: 4.93,
      bestTimeToVisit: 'October – June (Flower show in May)',
      shortDesc: '"Queen of Hill Stations" — Nilgiri tea estates, UNESCO toy train, and Ooty Lake.',
      gallery: [
        '/images/tamil-nadu/ooty/gallery-1-v3.jpg',
        '/images/tamil-nadu/ooty/gallery-2-v3.jpg',
        '/images/tamil-nadu/ooty/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Nilgiri Mountain Railway', 'Doddabetta Peak (2,637m)', 'Ooty Botanical Garden', 'Coonoor'],
      recommendedHotels: ['Savoy - IHCL SeleQtions Ooty', 'Fernhills Royal Palace Ooty', 'Sterling Ooty Fern Hill'],
      famousRestaurants: ['Place To Bee', 'King Star Chocolates', 'Shinkows Chinese Restaurant']
    },
    {
      name: 'Rameswaram & Dhanushkodi',
      slug: 'rameswaram',
      category: 'Sacred Island Pilgrimage',
      image: '/images/tamil-nadu/rameswaram/hero-v3.jpg',
      overview: 'Located on Pamban Island connected by the iconic Pamban Sea Bridge, Rameswaram is a Char Dham holy island home to Ramanathaswamy Temple (world\'s longest temple corridor with 1,212 pillars) and ghost town Dhanushkodi at Ram Setu.',
      rating: 4.95,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Char Dham holy island featuring world\'s longest 1,212-pillar temple corridor and Pamban Sea Bridge.',
      gallery: [
        '/images/tamil-nadu/rameswaram/gallery-1-v3.jpg',
        '/images/tamil-nadu/rameswaram/gallery-2-v3.jpg',
        '/images/tamil-nadu/rameswaram/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Pamban Bridge', 'Dhanushkodi Beach & Ghost Town', 'APJ Abdul Kalam Memorial', 'Agni Theertham'],
      recommendedHotels: ['Hyatt Place Rameswaram', 'Hotel Daiwik Rameswaram', 'Hotel TamilNadu'],
      famousRestaurants: ['Ram Nivas Vegetarian', 'Gujarat Bhavan Eatery', 'Ahar Restaurant']
    },
    {
      name: 'Kanyakumari',
      slug: 'kanyakumari',
      category: 'Southernmost Tip & Oceans Confluence',
      image: '/images/tamil-nadu/kanyakumari/hero-v3.jpg',
      overview: 'The southernmost tip of mainland India, Kanyakumari is the unique confluence point of the Arabian Sea, Bay of Bengal, and Indian Ocean, famous for the offshore Vivekananda Rock Memorial, 133-ft Thiruvalluvar Statue, and sunrise/sunset views.',
      rating: 4.94,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Southernmost tip of mainland India — confluence of 3 oceans, Vivekananda Rock & 133 ft statue.',
      gallery: [
        '/images/tamil-nadu/kanyakumari/gallery-1-v3.jpg',
        '/images/tamil-nadu/kanyakumari/gallery-2-v3.jpg',
        '/images/tamil-nadu/kanyakumari/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Kanyakumari Amman Temple', 'Padmanabhapuram Palace'],
      recommendedHotels: ['Hotel Sparsa Kanyakumari', 'The Annai Resort & Spa', 'Hotel Sea View'],
      famousRestaurants: ['Saravana Bhavan Kanyakumari', 'Sea View Restaurant', 'The Curry Kanyakumari']
    },
    {
      name: 'Kodaikanal',
      slug: 'kodaikanal',
      category: 'Princess of Hill Stations',
      image: '/images/tamil-nadu/kodaikanal/hero-v3.jpg',
      overview: 'Set amidst Palani Hills at 2,133m, Kodaikanal is the "Princess of Hill Stations" built around star-shaped Kodaikanal Lake, famous for Pillar Rocks, Coaker\'s Walk, Bryant Park, mist-covered pine forests, and Kurinji flowers (blooms every 12 years).',
      rating: 4.92,
      bestTimeToVisit: 'October – June',
      shortDesc: '"Princess of Hill Stations" — star-shaped Kodaikanal Lake, Pillar Rocks and pine forests.',
      gallery: [
        '/images/tamil-nadu/kodaikanal/gallery-1-v3.jpg',
        '/images/tamil-nadu/kodaikanal/gallery-2-v3.jpg',
        '/images/tamil-nadu/kodaikanal/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kodaikanal Lake', 'Pillar Rocks', 'Coaker\'s Walk', 'Silver Cascade Falls'],
      recommendedHotels: ['The Carlton Kodaikanal', 'Tamara Kodai', 'Sterling Kodai Lake'],
      famousRestaurants: ['Ten Degrees Kodaikanal', 'Cloud Street Cafe', 'Abby\'s Cafe Kodai']
    },
    {
      name: 'Marina Beach, Chennai',
      slug: 'marina-beach-chennai',
      category: 'Urban Coastal Promenade',
      image: '/images/tamil-nadu/marina-beach-chennai/hero-v3.jpg',
      overview: 'Stretching 13 km along the Bay of Bengal in Chennai, Marina Beach is the second-longest natural urban beach in the world, featuring historic statues, lighthouse view tower, evening food stalls, and colonial heritage architecture.',
      rating: 4.88,
      bestTimeToVisit: 'October – March',
      shortDesc: 'World\'s 2nd longest natural urban beach (13 km promenade) along Chennai\'s Bay of Bengal coastline.',
      gallery: [
        '/images/tamil-nadu/marina-beach-chennai/gallery-1-v3.jpg',
        '/images/tamil-nadu/marina-beach-chennai/gallery-2-v3.jpg',
        '/images/tamil-nadu/marina-beach-chennai/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Chennai Lighthouse', 'Kapaleeshwarar Temple', 'Fort St. George', 'Santhome Cathedral'],
      recommendedHotels: ['The Leela Palace Chennai', 'Taj Coromandel', 'ITC Grand Chola Chennai'],
      famousRestaurants: ['Ratna Cafe Triplicane', 'Bhavan Marina Food Stalls', 'Murugan Idli Shop Chennai']
    }
  ]
};
