export interface KeralaPlace {
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

export interface KeralaStateData {
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
  famousPlaces: KeralaPlace[];
}

export const KERALA_DATA: KeralaStateData = {
  id: 'kerala',
  name: 'Kerala',
  type: 'State',
  capital: 'Thiruvananthapuram',
  tagline: "God's Own Country",
  heroImage: '/images/kerala/alleppey-backwaters/hero-v3.jpg',
  about: "Kerala is a lush tropical state on India's southwestern tip, celebrated for its serene backwater houseboat cruises, misty tea-carpeted Munnar hills, elephant-rich Periyar forests, pristine cliff beaches at Varkala, and the vibrant Chinese fishing nets of Fort Kochi.",
  bestTime: 'September – March',
  climate: 'Tropical monsoon climate with two monsoon seasons (June–August SW, October–November NE). Best weather September to March with warm temperatures (22°C–32°C).',
  famousFood: ['Appam & Stew', 'Kerala Fish Curry', 'Karimeen Pollichathu', 'Puttu & Kadala Curry', 'Sadya (banana leaf feast)', 'Kerala Prawn Moilee', 'Payasam'],
  culture: 'Kerala is home to Kathakali classical dance drama, Mohiniyattam, Theyyam spirit worship rituals, the Onam harvest festival with Pookalam floral art and snake boat races, and the martial art Kalaripayattu.',
  famousPlaces: [
    {
      name: 'Alleppey Backwaters',
      slug: 'alleppey-backwaters',
      category: 'Backwater Cruise',
      image: '/images/kerala/alleppey-backwaters/hero-v3.jpg',
      overview: "Called the Venice of the East, Alappuzha (Alleppey) is the gateway to Kerala's legendary backwaters — a 900 km network of lakes, canals and lagoons best explored on a traditional kettuvallam houseboat drifting through coconut-fringed villages.",
      rating: 4.98,
      bestTimeToVisit: 'September – March (Nehru Trophy Boat Race in August)',
      shortDesc: '"Venice of the East" — houseboat cruises through 900 km of coconut-fringed backwaters.',
      gallery: [
        '/images/kerala/alleppey-backwaters/gallery-1-v3.jpg',
        '/images/kerala/alleppey-backwaters/gallery-2-v3.jpg',
        '/images/kerala/alleppey-backwaters/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kumarakom Bird Sanctuary', 'Marari Beach', 'Ambalapuzha Sree Krishna Temple'],
      recommendedHotels: ['Coconut Lagoon CGH Earth', 'Punnamada Lake Resort', 'Spice Village'],
      famousRestaurants: ['Chakara Restaurant Alleppey', 'Thaff Restaurant', 'Harbour Restaurant']
    },
    {
      name: 'Munnar Tea Hills',
      slug: 'munnar',
      category: 'Hill Station',
      image: '/images/kerala/munnar/hero-v3.jpg',
      overview: 'At 1,600 meters in the Western Ghats, Munnar is a breathtaking hill station carpeted with emerald tea plantations, cloud forests, and the rare Neelakurinji flower that blooms once every 12 years, home also to the endangered Nilgiri tahr.',
      rating: 4.95,
      bestTimeToVisit: 'September – March',
      shortDesc: 'Emerald tea-carpeted hill station at 1,600m with rare Neelakurinji blooms.',
      gallery: [
        '/images/kerala/munnar/gallery-1-v3.jpg',
        '/images/kerala/munnar/gallery-2-v3.jpg',
        '/images/kerala/munnar/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Eravikulam National Park', 'Top Station', 'Attukad Waterfalls', 'Mattupetty Dam'],
      recommendedHotels: ['Windermere Estate Munnar', 'Fragrant Nature Munnar', 'The Tall Trees Munnar'],
      famousRestaurants: ['Saravana Bhavan Munnar', 'Rapsy Restaurant', 'East End Hotel Restaurant']
    },
    {
      name: 'Periyar Wildlife Sanctuary',
      slug: 'periyar-wildlife-sanctuary',
      category: 'Wildlife Sanctuary',
      image: '/images/kerala/periyar-wildlife-sanctuary/hero-v3.jpg',
      overview: 'One of India\'s premier tiger and elephant reserves, Periyar National Park surrounds a stunning artificial lake where elephants, bison, sambar and otters come to drink — best explored by bamboo rafting or boat safari through the misty Cardamom Hills.',
      rating: 4.93,
      bestTimeToVisit: 'October – June',
      shortDesc: 'Tiger & elephant reserve with lake boat safaris in the Cardamom Hills.',
      gallery: [
        '/images/kerala/periyar-wildlife-sanctuary/gallery-1-v3.jpg',
        '/images/kerala/periyar-wildlife-sanctuary/gallery-2-v3.jpg',
        '/images/kerala/periyar-wildlife-sanctuary/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Spice Plantation Tours', 'Kumily Spice Market', 'Mangala Devi Temple'],
      recommendedHotels: ['Spice Village CGH Earth', 'Aranya Nivas KTDC', 'Elephant Court Thekkady'],
      famousRestaurants: ['Spice Village Restaurant', 'Chrissie\'s Cafe Kumily', 'Coffee Bean Thekkady']
    },
    {
      name: 'Kovalam Beach',
      slug: 'kovalam-beach',
      category: 'Beach Destination',
      image: '/images/kerala/kovalam-beach/hero-v3.jpg',
      overview: 'A crescent-shaped bay of golden sand framed by rocky headlands near Thiruvananthapuram, Kovalam is Kerala\'s most famous beach resort with three connected coves — Lighthouse Beach, Hawa Beach and Samudra Beach — and world-class Ayurvedic spas.',
      rating: 4.90,
      bestTimeToVisit: 'September – March',
      shortDesc: 'Kerala\'s most famous golden crescent beach with Ayurvedic spas and lighthouse views.',
      gallery: [
        '/images/kerala/kovalam-beach/gallery-1-v3.jpg',
        '/images/kerala/kovalam-beach/gallery-2-v3.jpg',
        '/images/kerala/kovalam-beach/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Padmanabhaswamy Temple', 'Poovar Island', 'Vizhinjam Lighthouse', 'Kanthalloor'],
      recommendedHotels: ['Leela Kovalam', 'Uday Samudra Leisure Beach Hotel', 'Vivanta Kovalam'],
      famousRestaurants: ['Fusion Restaurant Kovalam', 'Malabar Cafe', 'Sea Rock Restaurant']
    },
    {
      name: 'Wayanad',
      slug: 'wayanad',
      category: 'Forest & Heritage',
      image: '/images/kerala/wayanad/hero-v3.jpg',
      overview: 'A lush highland district bordering Karnataka and Tamil Nadu, Wayanad is a green paradise of coffee-clad hills, tribal heritage, the 5,000-year-old Edakkal Cave petroglyphs, Chembra Peak, and Banasura Sagar Dam — India\'s largest earth dam.',
      rating: 4.91,
      bestTimeToVisit: 'October – May',
      shortDesc: 'Green highland paradise with ancient cave petroglyphs and misty coffee estates.',
      gallery: [
        '/images/kerala/wayanad/gallery-1-v3.jpg',
        '/images/kerala/wayanad/gallery-2-v3.jpg',
        '/images/kerala/wayanad/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Edakkal Caves', 'Chembra Peak Trek', 'Banasura Sagar Dam', 'Soochipara Falls'],
      recommendedHotels: ['Vythiri Resort', 'Wayanad Silverwoods', 'Pepper County Wayanad'],
      famousRestaurants: ['Ambrosia Restaurant Kalpetta', 'Hotel Regency Wayanad', 'Sizzling Pot']
    },
    {
      name: 'Fort Kochi & Chinese Fishing Nets',
      slug: 'fort-kochi',
      category: 'Cultural Heritage',
      image: '/images/kerala/fort-kochi/hero-v3.jpg',
      overview: 'A charming colonial waterfront quarter blending Portuguese, Dutch, British and Keralan heritage, Fort Kochi is famous for its iconic Chinese cantilever fishing nets silhouetted at sunset, the Jewish Synagogue, spice markets, Kathakali performances and a thriving arts scene.',
      rating: 4.94,
      bestTimeToVisit: 'October – February (Kochi Biennale in Dec-Mar)',
      shortDesc: 'Colonial waterfront with iconic Chinese fishing nets, spice markets and Kochi Biennale.',
      gallery: [
        '/images/kerala/fort-kochi/gallery-1-v3.jpg',
        '/images/kerala/fort-kochi/gallery-2-v3.jpg',
        '/images/kerala/fort-kochi/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Mattancherry Palace (Dutch Palace)', 'Paradesi Synagogue', 'Cherai Beach', 'Hill Palace Museum'],
      recommendedHotels: ['Brunton Boatyard CGH Earth', 'Old Harbour Hotel Kochi', 'Taj Malabar Resort'],
      famousRestaurants: ['Oceanos Restaurant', 'Seagull Restaurant Kochi', 'Dal Roti Fort Kochi']
    },
    {
      name: 'Thrissur Pooram',
      slug: 'thrissur-pooram',
      category: 'Cultural Festival',
      image: '/images/kerala/thrissur-pooram/hero-v3.jpg',
      overview: 'Dubbed the "Mother of all Poorams", the Thrissur Pooram is Kerala\'s most spectacular temple festival — a breathtaking procession of 30+ caparisoned elephants, dazzling parasol exchanges, and thundering percussion ensembles that draw half a million visitors in a single day.',
      rating: 4.97,
      bestTimeToVisit: 'April–May (Pooram festival day)',
      shortDesc: '"Mother of all Poorams" — 30 decorated elephants and thundering percussion at Vadakkunnathan Temple.',
      gallery: [
        '/images/kerala/thrissur-pooram/gallery-1-v3.jpg',
        '/images/kerala/thrissur-pooram/gallery-2-v3.jpg',
        '/images/kerala/thrissur-pooram/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Vadakkumnathan Temple', 'Guruvayur Temple', 'Athirappilly Falls', 'Kerala Kalamandalam'],
      recommendedHotels: ['Hotel Luciya Palace Thrissur', 'Vyttila Heritage', 'The Paul Thrissur'],
      famousRestaurants: ['Pathans Restaurant Thrissur', 'Hotel Bharath Thrissur', 'Bhavna\'s Kitchen']
    },
    {
      name: 'Varkala Cliff Beach',
      slug: 'varkala-beach',
      category: 'Cliff Beach',
      image: '/images/kerala/varkala-beach/hero-v3.jpg',
      overview: 'A unique north-facing cliff beach where laterite cliffs tower 15–50 meters directly above the Arabian Sea, Varkala is both a sacred Hindu pilgrimage site (Janardhana Swamy Temple) and a bohemian beach destination with cliff-top cafes and Ayurvedic retreats.',
      rating: 4.92,
      bestTimeToVisit: 'September – March',
      shortDesc: 'Dramatic laterite cliffs above the Arabian Sea blending pilgrimage and beach bohemia.',
      gallery: [
        '/images/kerala/varkala-beach/gallery-1-v3.jpg',
        '/images/kerala/varkala-beach/gallery-2-v3.jpg',
        '/images/kerala/varkala-beach/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Janardhana Swamy Temple', 'Sivagiri Mutt', 'Anjengo Fort', 'Kappil Lake'],
      recommendedHotels: ['Hindustan Beach Retreat', 'Clafouti Beach Resort', 'Sea Pearl Chalets'],
      famousRestaurants: ['Cafe Del Mar Varkala', 'Darjeeling Cafe', 'Abba Restaurant Varkala']
    }
  ]
};
