export interface TelanganaPlace {
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

export interface TelanganaStateData {
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
  famousPlaces: TelanganaPlace[];
}

export const TELANGANA_DATA: TelanganaStateData = {
  id: 'telangana',
  name: 'Telangana',
  type: 'State',
  capital: 'Hyderabad',
  tagline: 'The Cyber Pearl & Historic Nizami Kingdom',
  heroImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200',
  about: 'Telangana is a dynamic South-Central Indian state known for its rich Qutb Shahi & Nizami royal architecture, Kakatiya UNESCO monuments, world-famous Hyderabadi Dum Biryani, and thriving HITEC City tech hub.',
  bestTime: 'October – March',
  climate: 'Semi-arid tropical climate with pleasant winter temperatures ranging between 16°C and 28°C.',
  famousFood: ['Hyderabadi Dum Biryani', 'Hyderabadi Haleem', 'Double Ka Meetha', 'Sarva Pindi', 'Sakinalu'],
  culture: 'Famous for Bathukamma floral festival, Bonalu processions, Bidriware metal craft, Pochampally Ikat sarees, and Deccani music.',
  famousPlaces: [
    {
      name: 'Charminar',
      slug: 'charminar',
      category: 'Heritage Monument',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200',
      overview: 'Built in 1591 by Sultan Muhammad Quli Qutb Shah, Charminar is the iconic 16th-century square monument featuring four 48.7m high grand minarets, grand arches, and a mosque overlooking Laad Bazaar in Old Hyderabad.',
      rating: 4.96,
      bestTimeToVisit: 'October – March',
      shortDesc: '16th-century iconic Qutb Shahi monument with 4 minarets in Old Hyderabad.',
      gallery: [
        'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Mecca Masjid', 'Laad Bazaar (Bangle Market)', 'Chowmahalla Palace', 'Salhar Jung Museum'],
      recommendedHotels: ['Taj Falaknuma Palace', 'Park Hyatt Hyderabad', 'ITC Kakatiya'],
      famousRestaurants: ['Hotel Shadab', 'Bawarchi Biryani', 'Paradise Biryani Secunderabad', 'Nimrah Cafe & Bakery']
    },
    {
      name: 'Golconda Fort',
      slug: 'golconda-fort',
      category: 'Medieval Fortress',
      image: 'https://images.unsplash.com/photo-1627894016766-b9a38f325b84?auto=format&fit=crop&q=80&w=1200',
      overview: 'Situated on a 120m high granite hill west of Hyderabad, Golconda Fort is a monumental medieval citadel famous for its acoustic engineering (a clap at the entrance gate can be heard at the hilltop pavilion), 87 bastions, and royal diamond vaults.',
      rating: 4.94,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Imposing hill citadel renowned for acoustic engineering and diamond vaults.',
      gallery: [
        'https://images.unsplash.com/photo-1627894016766-b9a38f325b84?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Qutb Shahi Tombs', 'Taramati Baradari', 'Naya Qila (African Baobab Tree)'],
      recommendedHotels: ['Radisson Blu Plaza Banjara Hills', 'The Park Hyderabad'],
      famousRestaurants: ['Chutneys Banjara Hills', 'Rayalaseema Ruchulu', 'Jewel of Nizam']
    },
    {
      name: 'Ramoji Film City',
      slug: 'ramoji-film-city',
      category: 'Entertainment Hub',
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=1200',
      overview: 'Certified by the Guinness World Records as the world’s largest integrated film studio complex (spanning 2,000 acres), Ramoji Film City offers live film shooting sets, stunt shows, Japanese gardens, and theme park rides.',
      rating: 4.91,
      bestTimeToVisit: 'October – February',
      shortDesc: 'World’s largest integrated film studio complex and theme park.',
      gallery: [
        'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Sanghi Temple', 'Mount Opera Water Park'],
      recommendedHotels: ['Hotel Sitara Ramoji Film City', 'Hotel Tara Ramoji'],
      famousRestaurants: ['Dil Se Restaurant', 'Jimmy’s Drive-In']
    },
    {
      name: 'Yadadri Sri Lakshmi Narasimha Temple',
      slug: 'yadadri-temple',
      category: 'Spiritual Shrine',
      image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&q=80&w=1200',
      overview: 'Perched on a scenic hillock in Yadadri Bhuvanagiri district, Yadadri Temple is a magnificent mega-carved black granite temple complex built according to ancient Pancharatra Agamas, dedicated to Lord Lakshmi Narasimha.',
      rating: 4.95,
      bestTimeToVisit: 'September – March',
      shortDesc: 'Magnificent mega-carved granite hill temple dedicated to Lord Narasimha.',
      gallery: [
        'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Bhongir Fort', 'Surendrapuri Mythological Theme Park'],
      recommendedHotels: ['Yadadri Devasthanam Cottages', 'Haritha Resort Yadadri'],
      famousRestaurants: ['Yadadri Annaprasadam Hall', 'Sri Narsimha Bhojanalaya']
    },
    {
      name: 'Warangal Fort & Thousand Pillar Temple',
      slug: 'warangal-fort',
      category: 'Kakatiya Heritage',
      image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=1200',
      overview: 'Located in Warangal, the 12th-century capital of the Kakatiya Dynasty features imposing stone gateways (Kakatiya Kala Thoranam), fortress ruins, and the famous Thousand Pillar Temple (Rudreshwara Swamy) with star-shaped carved monolithic pillars.',
      rating: 4.92,
      bestTimeToVisit: 'October – March',
      shortDesc: '12th-century Kakatiya stone gateways and star-shaped carved monoliths.',
      gallery: [
        'https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Bhadrakali Temple Lake', 'Kakatiya Musical Garden', 'Pakhal Lake'],
      recommendedHotels: ['Haritha Kakatiya Hotel Warangal', 'Hotel Grand Gayathri'],
      famousRestaurants: ['Subhani Hotel Warangal', 'Potlam Biryani Warangal']
    },
    {
      name: 'Ramappa Temple (UNESCO World Heritage)',
      slug: 'ramappa-temple',
      category: 'UNESCO Shrine',
      image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=1200',
      overview: 'Inscribed as a UNESCO World Heritage Site in 2021, Ramappa Temple (1213 AD) in Palampet is a structural masterpiece built using lightweight floating bricks, intricate granite carvings, and a sandbox foundation engineered by chief architect Ramappa.',
      rating: 4.97,
      bestTimeToVisit: 'October – March',
      shortDesc: '13th-century floating-brick temple masterpiece near Palampet.',
      gallery: [
        'https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Ramappa Lake', 'Laknavaram Lake Hanging Bridge'],
      recommendedHotels: ['Haritha Lake Resort Laknavaram', 'Haritha Ramappa Cottages'],
      famousRestaurants: ['Laknavaram Island Restaurant', 'Palampet Dhaba']
    },
    {
      name: 'Hussain Sagar & Buddha Statue',
      slug: 'hussain-sagar-buddha',
      category: 'Urban Waterfront',
      image: 'https://images.unsplash.com/photo-1616190419596-e2839e7380d7?auto=format&fit=crop&q=80&w=1200',
      overview: 'Constructed in 1563 by Ibrahim Quli Qutb Shah, Hussain Sagar is a heart-shaped lake connecting Hyderabad and Secunderabad, featuring the world’s tallest monolithic statue of Gautama Buddha (18m high) standing on Gibraltar Rock.',
      rating: 4.89,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Heart-shaped lake featuring the world’s tallest monolithic Buddha.',
      gallery: [
        'https://images.unsplash.com/photo-1616190419596-e2839e7380d7?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['NTR Gardens', 'Lumbini Park Laser Show', 'Sanjeevaiah Park', 'Telangana Martyrs Memorial'],
      recommendedHotels: ['Marriott Hotel & Convention Centre', 'Taj Krishna Hyderabad'],
      famousRestaurants: ['Water Front Restaurant', 'Eat Street Hussain Sagar', 'Ohri’s 70mm']
    },
    {
      name: 'Bhongir Fort',
      slug: 'bhongir-fort',
      category: 'Monolithic Citadel',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=1200',
      overview: 'Built in the 10th century by Chalukya ruler Tribhuvanamalla Vikramaditya VI, Bhongir Fort sits atop an isolated 500ft high monolithic egg-shaped rock hill in Bhuvanagiri, offering popular rock climbing and trekking routes.',
      rating: 4.87,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Unique 500ft high monolithic egg-shaped rock fort.',
      gallery: [
        'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Yadadri Temple', 'Kulpakji Jain Temple'],
      recommendedHotels: ['Haritha Bhongir Eco Resort', 'Hotel Highway Grand'],
      famousRestaurants: ['Bhuvanagiri Dhaba', 'Highway Food Court']
    }
  ]
};
