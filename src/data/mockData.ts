export interface Destination {
  id: string;
  name: string;
  country: string;
  duration: string;
  price: number;
  rating: number;
  description: string;
  heroImage: string;
  category: 'Adventure' | 'Luxury' | 'Beach' | 'Wildlife' | 'Mountains' | 'Honeymoon' | 'Family' | 'Solo' | 'Road Trips';
  about: string;
  weather: string;
  bestSeason: string;
  visaInfo: string;
  currency: string;
  languages: string[];
  culture: string;
  gallery: string[];
  faq: { question: string; answer: string }[];
  coordinates: { lat: number; lng: number };
}

export interface Attraction {
  id: string;
  name: string;
  destinationId: string;
  description: string;
  history: string;
  gallery: string[];
  nearbyAttractions: string[];
  openingHours: string;
  entryFee: string;
  restaurantsNearby: string[];
  photographySpots: string[];
  travelTips: string[];
  reviews: { author: string; rating: number; text: string }[];
  suggestedTime: string;
  recommendedDuration: string;
}

export interface Hotel {
  id: string;
  name: string;
  destinationId: string;
  rating: number;
  description: string;
  gallery: string[];
  amenities: string[];
  rooms: { name: string; price: number; maxGuests: number; size: string; description: string; image: string }[];
  locationDetails: string;
  nearbyAttractions: string[];
  reviews: { author: string; rating: number; text: string }[];
}

export interface TravelPackage {
  id: string;
  name: string;
  destinationId: string;
  duration: string;
  price: number;
  rating: number;
  heroImage: string;
  overview: string;
  includes: string[];
  excludes: string[];
  packingGuide: string[];
  itinerary: {
    day: number;
    title: string;
    visit: { attractionId: string; name: string }[];
    morning: string;
    afternoon: string;
    evening: string;
    hotelId: string;
    meals: string[];
    transportation: string;
    activities: string[];
  }[];
}

export interface Experience {
  id: string;
  name: string;
  heroImage: string;
  description: string;
  highlights: string[];
  gallery: string[];
  duration: string;
  price: number;
  included: string[];
  details: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  authorImage: string;
}

// Curated India ethical tour data mapping to original IDs
export const destinations: Destination[] = [
  {
    id: "santorini",
    name: "Mumbai Dharavi & Local Communities",
    country: "India",
    duration: "1–2 Days",
    price: 45,
    rating: 4.92,
    description: "Witness the industrial drive and vibrant spirit of Dharavi. Discover recycling systems, leather workshops, and pottery lanes.",
    heroImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=1200",
    category: "Solo",
    about: "Mumbai, the financial capital of India, is home to the world’s most active community-run light industries. Our guided walking tours take you through Dharavi’s diverse commercial centers. Meet pottery artists at Kumbharwada, see how local plastics and metals are sorted for recycling, and talk with small business owners. To respect the privacy and dignity of local residents, we enforce a strict NO PHOTOGRAPHY policy inside the community area. 80% of our post-tax profits fund education programs through Reality Gives.",
    weather: "Warm and tropical. Temperatures stay between 26°C and 34°C. Monsoons arrive in June and clear by late September.",
    bestSeason: "October to March when the climate is cool, dry, and pleasant.",
    visaInfo: "All foreign travelers require a valid passport and an Indian tourist e-Visa obtained before arrival.",
    currency: "Indian Rupee (INR)",
    languages: [
      "Hindi",
      "Marathi",
      "English"
    ],
    culture: "An extraordinary community characterized by cooperative light industry, multi-faith shrines, shared workspaces, and mutual community welfare.",
    gallery: [
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Is photography allowed inside Dharavi?",
        answer: "No. We enforce a strict No Photography policy on all slum walks to respect the residents' privacy and dignity."
      },
      {
        question: "How does this tour support the local community?",
        answer: "80% of our post-tax profits are donated directly to our sister NGO, Reality Gives, which runs English language, computer literacy, and youth empowerment programs inside Dharavi."
      }
    ],
    coordinates: {
      lat: 19.076,
      lng: 72.8777
    }
  },
  {
    id: "switzerland",
    name: "Delhi Sanjay Colony Community Walk",
    country: "India",
    duration: "1–2 Days",
    price: 40,
    rating: 4.88,
    description: "Explore the textile sorting and recycling workshops of Sanjay Colony in South Delhi, discovering daily neighborhood routines.",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200",
    category: "Family",
    about: "Sanjay Colony is an industrious enclave in South Delhi. This walking tour guides you through its manufacturing workshops, showing how garments are collected, shredded, and recycled into industrial materials. Walk past local schools, temples, and residential houses, learning about the community’s social fabric. A strict No Photography rule is enforced in residential parts. Profits directly support Reality Gives classrooms located inside Sanjay Colony.",
    weather: "Subtropical climate. Very warm summers (up to 42°C) and cool, misty winters (as low as 6°C).",
    bestSeason: "October to April when the Delhi breeze is fresh and pleasant.",
    visaInfo: "Valid passport and Indian tourist e-Visa required prior to departure.",
    currency: "Indian Rupee (INR)",
    languages: [
      "Hindi",
      "English",
      "Punjabi"
    ],
    culture: "A mixture of regional cultures from all over Northern India, reflecting in local foods, temple festivals, and shared commercial works.",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "What businesses operate in Sanjay Colony?",
        answer: "It is a major center for fabric recycling, garment sewing, small scale metal casting, and food distribution."
      },
      {
        question: "Do guides speak English?",
        answer: "Yes, all guides are bilingual local residents trained to explain the community history in English and Hindi."
      }
    ],
    coordinates: {
      lat: 28.5355,
      lng: 77.2737
    }
  },
  {
    id: "maldives",
    name: "Rajasthan Heritage & Rural Villages",
    country: "India",
    duration: "4–6 Days",
    price: 320,
    rating: 4.95,
    description: "Journey through Jaipur's historic pink alleys, rural village cooperatives, and the desert communities of Rajasthan.",
    heroImage: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&q=80&w=1200",
    category: "Road Trips",
    about: "Rajasthan is a land of architectural marvels and deep heritage. Our multi-day itinerary takes you beyond the grand forts of Jaipur and Udaipur to interact directly with rural craft cooperatives. Stay in community-run lodges, see traditional block-printing masters at work, and support conservation initiatives that preserve local groundwater reserves. A portion of every trip fee is shared with regional village craft guilds.",
    weather: "Dry, arid climate. Hot summer months and cool, comfortable winter nights.",
    bestSeason: "November to March for comfortable walking and sightseeing temperatures.",
    visaInfo: "Valid passport and Indian tourist e-Visa required.",
    currency: "Indian Rupee (INR)",
    languages: [
      "Hindi",
      "Rajasthani",
      "English"
    ],
    culture: "Folk music, hand-woven block-printed textiles, historic desert fortifications, and shared communal dining tables.",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Are village tours private?",
        answer: "We run small, intimate groups of under 8 people to reduce impact and support direct conversations with local craftspeople."
      }
    ],
    coordinates: {
      lat: 26.9124,
      lng: 75.7873
    }
  },
  {
    id: "kyoto",
    name: "Kerala Village Life & Backwaters",
    country: "India",
    duration: "5–8 Days",
    price: 280,
    rating: 4.89,
    description: "Cruise Kerala’s backwaters on a traditional eco-houseboat, and support organic spice farmers in cooperative programs.",
    heroImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1200",
    category: "Honeymoon",
    about: "Explore Kerala, South India’s lush coastal state. Relax on a traditional thatched-roof houseboat powered by solar energy, dine with local farming families, and stroll through organic spice hills. We work with local village councils (Panchayats) to ensure tourism benefits are shared equally among local boatmen, fishers, and organic cultivators.",
    weather: "Humid and tropical. Cool coastal breezes with heavy rains during June–August monsoons.",
    bestSeason: "October to February when the backwaters are calm and nights are breezy.",
    visaInfo: "Valid passport and Indian tourist e-Visa required.",
    currency: "Indian Rupee (INR)",
    languages: [
      "Malayalam",
      "English"
    ],
    culture: "Kathakali classical dance, organic coconut agriculture, Ayurvedic wellness heritages, and riverside villages.",
    gallery: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "How is the houseboat sustainable?",
        answer: "We use solar panels for lighting and electricity, implement waste-filtration units, and employ local oarsmen."
      }
    ],
    coordinates: {
      lat: 10.8505,
      lng: 76.2711
    }
  },
  {
    id: "serengeti",
    name: "Old Delhi Heritage & Street Food Crawl",
    country: "India",
    duration: "1 Day",
    price: 35,
    rating: 4.97,
    description: "Navigate the historic alleys of Chandni Chowk, sampling authentic street foods from sanitarily vetted local vendors.",
    heroImage: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=1200",
    category: "Adventure",
    about: "Old Delhi (Shahjahanabad) is a sensory explosion. Ride a cycle rickshaw through the historic spice markets of Khari Baoli, visit ancient multi-faith temples, and sample delicious local street food. All food stalls are carefully selected and sanitarily vetted by our guides to ensure a safe, tasty culinary journey. 80% of our profits support Delhi community schooling.",
    weather: "Subtropical. Sunny and hot in summer; cool and misty in winter months.",
    bestSeason: "October to March for comfortable outdoor walking conditions.",
    visaInfo: "Valid passport and Indian tourist e-Visa required.",
    currency: "Indian Rupee (INR)",
    languages: [
      "Hindi",
      "Urdu",
      "English"
    ],
    culture: "Mughal-era architectures, busy street markets, historic Sufi music shrines, and centuries-old culinary lineages.",
    gallery: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Is the street food safe to eat?",
        answer: "Yes! We only visit vendors who use clean, filtered water, fresh ingredients, and have been vetted for hygiene by our culinary guides."
      }
    ],
    coordinates: {
      lat: 28.6562,
      lng: 77.2307
    }
  },
  {
    id: "amalfi",
    name: "Agra Heritage & Taj Mahal Sunrise",
    country: "India",
    duration: "1–2 Days",
    price: 65,
    rating: 4.93,
    description: "Experience the Taj Mahal at sunrise. Support local marble artisans and explore the red walls of Agra Fort.",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury",
    about: "Witness the Taj Mahal, the world’s monument to love, in the soft morning light. Our Agra tour takes you beyond the white marble dome to meet local marble inlay craftsmen and stone sculptors, keeping ancient artisan traditions alive. All guides are certified community historians who share the local narratives of the Yamuna River.",
    weather: "Warm summers and cool, foggy winter mornings.",
    bestSeason: "October to March when skies are clear for sunrise views.",
    visaInfo: "Valid passport and Indian tourist e-Visa required.",
    currency: "Indian Rupee (INR)",
    languages: [
      "Hindi",
      "English"
    ],
    culture: "Mughal historic arts, Pietra Dura marble inlay carvings, and traditional sweet making (Petha).",
    gallery: [
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "What is the entry policy for the Taj Mahal?",
        answer: "Standard security is tight; large bags, chargers, and tripods are not permitted inside the monument grounds."
      }
    ],
    coordinates: {
      lat: 27.1751,
      lng: 78.0421
    }
  },
  {
    id: "switzerland-luxury",
    name: "Swiss Alpine Grandeur",
    country: "Switzerland",
    duration: "6–8 Days",
    price: 1450,
    rating: 4.98,
    description: "Experience majestic snow-covered peaks, alpine lakes, and premium luxury retreats in the heart of Zermatt and St. Moritz.",
    heroImage: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury",
    about: "Switzerland stands as the pinnacle of European refinement. Travel on the Glacier Express, stay in grand wood-panelled chalets with private thermal spas, and explore the soaring Matterhorn. Our private alpine loops combine scenic helicopter transfers with custom ski and hiking guides.",
    weather: "Cool and crisp. Highs of 22°C in summer, drops below freezing with heavy snow in winter months.",
    bestSeason: "June to September for hiking, December to March for world-class winter sports.",
    visaInfo: "Schengen Area visa rules apply. Valid passport required.",
    currency: "Swiss Franc (CHF)",
    languages: [
      "German",
      "French",
      "Italian",
      "English"
    ],
    culture: "Watchmaking heritage, chocolate craftsmanship, mountaineering legends, and clean sustainability.",
    gallery: [
      "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Is the Swiss Travel Pass included?",
        answer: "Yes, all our Swiss itineraries include first-class passes for national rail networks and mountain cableways."
      }
    ],
    coordinates: {
      lat: 46.8011,
      lng: 8.2275
    }
  },
  {
    id: "dubai",
    name: "Dubai Modern Oasis",
    country: "UAE",
    duration: "4–6 Days",
    price: 980,
    rating: 4.92,
    description: "Marvel at futuristic skylines, luxury desert safaris, and high-fashion shopping in the world’s most glamorous metropolis.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury",
    about: "Dubai represents a futuristic oasis where heritage meets architectural marvels. Stay at the iconic Burj Al Arab, cruise on a private yacht, and fly over the Palm Jumeirah. Your trip includes a private vintage Land Rover safari through the Dubai Desert Conservation Reserve, ending with a starlit banquet.",
    weather: "Hot and sunny year-round. Temperatures range from 20°C in winter to 43°C in summer.",
    bestSeason: "November to March when the desert breeze is cool and outdoor events are active.",
    visaInfo: "Visa-on-arrival is available for travelers from over 70 countries.",
    currency: "UAE Dirham (AED)",
    languages: [
      "Arabic",
      "English"
    ],
    culture: "Traditional Bedouin heritage, high-luxury shopping festivals, modern architectures, and multi-cultural dining.",
    gallery: [
      "https://images.unsplash.com/photo-1526495124232-a04e18491f5a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "What is the dress code?",
        answer: "Modest wear is appreciated in public areas, while luxury resorts and dining venues welcome elegant resort wear."
      }
    ],
    coordinates: {
      lat: 25.2048,
      lng: 55.2708
    }
  },
  {
    id: "japan",
    name: "Kyoto & Tokyo Heritage",
    country: "Japan",
    duration: "7–10 Days",
    price: 1350,
    rating: 4.99,
    description: "Immerse in the neon-lit streets of Tokyo, ancient wooden temples of Kyoto, and custom tea ceremonies.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury",
    about: "Japan is a land where ancient traditions blend seamlessly with futuristic innovation. Stay in a luxury ryokan with natural hot springs (onsen), savor Michelin-starred Kaiseki dining, and enjoy private guides through Kyoto’s hidden shrines. Travel in bullet train green cars throughout your tour.",
    weather: "Four distinct seasons. Moderate spring (15°C) and autumn (18°C), hot humid summers, and snowy winters in the north.",
    bestSeason: "April for cherry blossoms, and November for fiery autumn maple leaves.",
    visaInfo: "Visa-free entry for up to 90 days for most tourist passports.",
    currency: "Japanese Yen (JPY)",
    languages: [
      "Japanese",
      "English"
    ],
    culture: "Zen philosophy, tea ceremony arts, culinary mastery, shinto shrines, and meticulous hospitality (Omotenashi).",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c6d?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Do you arrange private tea ceremonies?",
        answer: "Yes, we arrange private tea sessions hosted by tea masters in private Kyoto gardens closed to the public."
      }
    ],
    coordinates: {
      lat: 35.6762,
      lng: 139.6503
    }
  },
  {
    id: "bali",
    name: "Bali Tropical Sanctuary",
    country: "Indonesia",
    duration: "5–8 Days",
    price: 680,
    rating: 4.94,
    description: "Unwind in cliffside ocean-view villas, terraced rice fields of Ubud, and sacred water purification ceremonies.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200",
    category: "Beach",
    about: "Bali, the Island of the Gods, is a haven of spirituality, surf, and sanctuary. Relax in Ubud’s jungle resorts and Uluwatu’s clifftops. Your tour includes a custom blessing ritual at Tirta Empul, private yacht cruises to Nusa Penida, and organic volcanic coffee plantation workshops.",
    weather: "Tropical climate. Average temperature stays around 28°C. Rainy monsoon is October–March; dry season is April–September.",
    bestSeason: "May to September for clear skies, low humidity, and pleasant sea breezes.",
    visaInfo: "30-day Visa-on-arrival is available for travelers from over 85 countries.",
    currency: "Indonesian Rupiah (IDR)",
    languages: [
      "Indonesian",
      "Balinese",
      "English"
    ],
    culture: "Hindu temple festivals, traditional Gamelan music, wood carving, and seaside sunset offerings.",
    gallery: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1552678440-b9604618e7e1?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Is a private driver included?",
        answer: "Yes, a private air-conditioned SUV with an experienced English-speaking driver is provided throughout your stay."
      }
    ],
    coordinates: {
      lat: -8.4095,
      lng: 115.1889
    }
  },
  {
    id: "maldives-luxury",
    name: "Maldives Private Lagoons",
    country: "Maldives",
    duration: "5–7 Days",
    price: 1580,
    rating: 4.97,
    description: "Escape to private overwater villas, turquoise lagoons, and glowing bioluminescent beaches in the Indian Ocean.",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200",
    category: "Beach",
    about: "The Maldives represents the ultimate off-grid luxury. Fly on a seaplane to your private island resort, dine in underwater glass restaurants, and swim with manta rays. Each villa features a private infinity pool and direct lagoon slides.",
    weather: "Warm and tropical. Average daytime temperature is 30°C. Brief monsoon rains occur from May to October.",
    bestSeason: "December to April for sunny blue skies and calm, transparent waters.",
    visaInfo: "Free 30-day visa on arrival issued to all nationalities with return ticket.",
    currency: "Maldivian Rufiyaa (MVR) / USD widely accepted",
    languages: [
      "Dhivehi",
      "English"
    ],
    culture: "Island fishing heritage, wooden dhoni boat building, and local coconut gastronomy.",
    gallery: [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "How do we reach the resort?",
        answer: "All packages include roundtrip luxury speedboat or private seaplane transfers from Malé Airport."
      }
    ],
    coordinates: {
      lat: 3.2028,
      lng: 73.2207
    }
  },
  {
    id: "singapore",
    name: "Singapore Gardens & Marina",
    country: "Singapore",
    duration: "3–5 Days",
    price: 850,
    rating: 4.91,
    description: "Explore the futuristic Gardens by the Bay, luxury Marina Bay sands suites, and Michelin street-food stalls.",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury",
    about: "Singapore is a green, clean metropolis at the crossroads of Asia. Walk through the avatar-like Supertree Grove, shop at Orchard Road, and enjoy private cocktail tasting at the historic Raffles Hotel. Discover the local Peranakan heritage and diverse culinary neighborhoods.",
    weather: "Hot and humid tropical climate. Constant 31°C year-round with occasional short rainfall.",
    bestSeason: "February to April when rainfall is lowest, or September during the Night Formula 1 Grand Prix.",
    visaInfo: "Visa-free entry for up to 90 days for most nationalities. SG Arrival Card required.",
    currency: "Singapore Dollar (SGD)",
    languages: [
      "English",
      "Mandarin",
      "Malay",
      "Tamil"
    ],
    culture: "Hawker culinary heritage, Peranakan historic architectures, and modern green urbanism.",
    gallery: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506505776263-d13b724e155e?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Is the Sands pool accessible?",
        answer: "Yes, our Singapore suites include exclusive access to the world-famous Sands SkyPark Infinity Pool."
      }
    ],
    coordinates: {
      lat: 1.3521,
      lng: 103.8198
    }
  },
  {
    id: "thailand",
    name: "Thailand Temples & Islands",
    country: "Thailand",
    duration: "6–8 Days",
    price: 580,
    rating: 4.88,
    description: "Discover ornate golden temples in Bangkok, ethical elephant sanctuaries in Chiang Mai, and white beaches of Phuket.",
    heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=1200",
    category: "Adventure",
    about: "Thailand, the Land of Smiles, offers a rich tapestry of history, street food, and tropical beauty. Stay in boutique eco-lodges, visit ancient ruins of Ayutthaya, and cruise by private long-tail boat through Phang Nga Bay’s limestone peaks.",
    weather: "Warm and tropical. Hot season (March–May), monsoon season (June–October), and cool dry season (November–February).",
    bestSeason: "November to February when weather is dry and temperatures are comfortable (26°C).",
    visaInfo: "Visa exemption available for tourist stays up to 30 or 60 days for many countries.",
    currency: "Thai Baht (THB)",
    languages: [
      "Thai",
      "English"
    ],
    culture: "Buddhist temple codes, traditional Muay Thai boxing, street food gastronomy, and organic farming.",
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1528181304800-2f1908c3951f?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Are elephant rides included?",
        answer: "No. We strictly support elephant conservation and only visit ethical sanctuaries where riding is banned."
      }
    ],
    coordinates: {
      lat: 13.7563,
      lng: 100.5018
    }
  },
  {
    id: "italy",
    name: "Rome & Amalfi Coast Heritage",
    country: "Italy",
    duration: "6–9 Days",
    price: 1250,
    rating: 4.96,
    description: "Stroll through Rome’s historic ruins, explore cliffside villas of Positano, and enjoy private winery tours in Tuscany.",
    heroImage: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury",
    about: "Italy is a sensory masterpiece. Tour the Colosseum privately at night, cruise the Amalfi Coast on a vintage Riva boat, and sample white truffles at family estates. Stay in converted Renaissance palaces and luxury clifftop suites.",
    weather: "Mediterranean climate. Hot summers (30°C) and cool, mild winters (10°C) with regular rainfall.",
    bestSeason: "May to June, and September to October for warm sun without summer crowds.",
    visaInfo: "Schengen Area passport rules apply.",
    currency: "Euro (EUR)",
    languages: [
      "Italian",
      "English"
    ],
    culture: "Renaissance art history, vintage automotive heritage, slow food culinary culture, and high-fashion tailoring.",
    gallery: [
      "https://images.unsplash.com/photo-1531572753322-ad063caff12e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Do you arrange cooking classes?",
        answer: "Yes, all itineraries include a private pasta-making session with local chefs in historical Roman villas."
      }
    ],
    coordinates: {
      lat: 41.9028,
      lng: 12.4964
    }
  },
  {
    id: "france",
    name: "Parisian Art & Provence Chateaux",
    country: "France",
    duration: "5–8 Days",
    price: 1380,
    rating: 4.95,
    description: "Sip champagne in private Reims cellars, cruise the Seine, and stay in converted 17th-century Loire Valley chateaux.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury",
    about: "France is the birthplace of haute couture and fine dining. Enjoy exclusive, after-hours access to the Louvre, private wine tastings in Bordeaux, and perfume-making masterclasses in Grasse. Sleep under gilded ceilings in grand boutique hotels.",
    weather: "Temperate climate. Pleasant warm summers (25°C) and cool winters (5°C).",
    bestSeason: "April to June, and September to November for cultural events and mild weather.",
    visaInfo: "Schengen Area passport rules apply.",
    currency: "Euro (EUR)",
    languages: [
      "French",
      "English"
    ],
    culture: "Impressionist art, classic gastronomy, perfume crafting, champagne cellars, and historic chateaux.",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9647a6409a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Are Eiffel Tower fast-pass tickets included?",
        answer: "Yes, we secure skip-the-line reservations to the private summit platform for all our guests."
      }
    ],
    coordinates: {
      lat: 48.8566,
      lng: 2.3522
    }
  },
  {
    id: "australia",
    name: "Sydney Harbour & Great Barrier Reef",
    country: "Australia",
    duration: "8–12 Days",
    price: 1680,
    rating: 4.94,
    description: "Fly over the Great Barrier Reef, watch sunset at Uluru, and sail on a private catamaran under Sydney Harbour Bridge.",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1200",
    category: "Adventure",
    about: "Australia is a land of massive geological wonders and modern coastal lifestyle. Swim with sea turtles in Queensland, explore ancient rainforests, and dine at Sydney’s Opera House. Your itinerary features luxury eco-lodges situated directly inside national reserves.",
    weather: "Varies by region. Tropical warm climate in the north, temperate seasons in the south. Summer is December–February.",
    bestSeason: "September to November, and March to May for comfortable national touring.",
    visaInfo: "Electronic Travel Authority (ETA) visa required for most international visitors.",
    currency: "Australian Dollar (AUD)",
    languages: [
      "English"
    ],
    culture: "Indigenous Aboriginal heritage, beach lifestyle, organic wines, and wildlife conservation.",
    gallery: [
      "https://images.unsplash.com/photo-1524820197278-540916411e20?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Is scuba gear provided for the Reef?",
        answer: "Yes, all gear and professional PADI instructors are included on our private catamaran dive charters."
      }
    ],
    coordinates: {
      lat: -33.8688,
      lng: 151.2093
    }
  },
  {
    id: "usa",
    name: "New York Skyline & Canyons",
    country: "USA",
    duration: "7–10 Days",
    price: 1420,
    rating: 4.93,
    description: "Take a private helicopter tour over Manhattan, hike the Grand Canyon, and stay in luxury desert retreats in Utah.",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200",
    category: "Road Trips",
    about: "Explore the vast landscapes and cities of the United States. Wake up in a skyscraper overlooking Central Park, fly in a private charter to the Grand Canyon rim, and dine on gourmet Southwestern cuisine at Amangiri desert resort.",
    weather: "Diverse climate. Highs of 35°C in Southwestern deserts, snow in northern states in winter.",
    bestSeason: "September to November (Autumn) for comfortable road trips and foliage views.",
    visaInfo: "Electronic System for Travel Authorization (ESTA) or US tourist visa required.",
    currency: "US Dollar (USD)",
    languages: [
      "English",
      "Spanish"
    ],
    culture: "Broadway theatre, Native American art history, jazz music, and modern culinary gastronomy.",
    gallery: [
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "Are Broadway tickets guaranteed?",
        answer: "Yes, we secure premium front-mezzanine seats for all major Broadway shows in advance."
      }
    ],
    coordinates: {
      lat: 40.7128,
      lng: -74.006
    }
  },
  {
    id: "turkey",
    name: "Bosphorus Cruise & Cappadocia Caves",
    country: "Turkey",
    duration: "5–8 Days",
    price: 880,
    rating: 4.96,
    description: "Fly in hot air balloons over Cappadocia’s fairy chimneys, cruise the Bosphorus, and tour the historic Hagia Sophia.",
    heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1200",
    category: "Adventure",
    about: "Turkey is a historic bridge between Europe and Asia. Explore Ottoman palaces with expert historians, sleep in luxury cave suites in Cappadocia, and soak in ancient thermal hammams. Feast on generational Mezze tables.",
    weather: "Mediterranean climate. Hot dry summers (32°C) and cool wet winters (8°C). Snow is common in Cappadocia.",
    bestSeason: "April to May, and September to October for comfortable sightseeing and active balloon flights.",
    visaInfo: "E-Visa required for many nationalities, obtainable online in minutes.",
    currency: "Turkish Lira (TRY)",
    languages: [
      "Turkish",
      "English"
    ],
    culture: "Ottoman mosaic art, whirling dervish ceremonies, spice bazaar trade, and historic Roman ruins.",
    gallery: [
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504382262782-5b4cf10d7d1f?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [
      {
        question: "What happens if balloons are canceled?",
        answer: "We schedule a 3-night stay in Cappadocia to maximize flight chances; if canceled due to wind, we offer full refunds for that segment."
      }
    ],
    coordinates: {
      lat: 41.0082,
      lng: 28.9784
    }
  },
  {
    id: "india",
    name: "Spiritual & Industrial Heritage",
    country: "India",
    duration: "1–8 Days",
    price: 35,
    rating: 4.92,
    description: "Witness the industrial drive of Mumbai Dharavi, local Delhi communities, the pink forts of Jaipur, and Taj Mahal at sunrise.",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200",
    category: "Solo",
    about: "India represents an extraordinary tapestry of history, community enterprise, and architectural marvels. From Mumbai's active community-run recycling industries to the historic palaces of Rajasthan and the tranquil backwaters of Kerala, this journey covers the diverse cultural landscapes of the subcontinent.",
    weather: "Varies by region. Tropical warm in the south, seasonal in the north.",
    bestSeason: "October to March when the climate is cool, dry, and pleasant across most regions.",
    visaInfo: "All foreign travelers require a valid passport and an Indian tourist e-Visa.",
    currency: "Indian Rupee (INR)",
    languages: ["Hindi", "English", "Marathi", "Malayalam"],
    culture: "Generational crafts, busy historic street bazaars, spiritual river offerings, and sustainable village cooperatives.",
    gallery: [
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800"
    ],
    faq: [],
    coordinates: { lat: 20.5937, lng: 78.9629 }
  }
];

export const attractions: Attraction[] = [
  {
    id: 'dharavi-recycling',
    name: 'Dharavi Recycling & Potter’s Colony',
    destinationId: 'santorini',
    description: 'The industrial heart of Dharavi where plastic, leather, and pottery are processed by local family workshops.',
    history: 'Founded in the late 19th century, Dharavi has grown into a bustling center of light manufacturing. Its community businesses generate over $1 billion USD in annual turnover, providing jobs for hundreds of thousands of residents.',
    gallery: [
      'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800'
    ],
    nearbyAttractions: ['Dhobi Ghat Laundry', 'Gateway of India', 'Sion Fort'],
    openingHours: 'Tours start daily at 9:00 AM, 11:30 AM, and 2:30 PM.',
    entryFee: 'Included in Dharavi walking ticket ($18–$45)',
    restaurantsNearby: ['National Restaurant', 'Delhi Darbar Colaba', 'Local Tea Stalls'],
    photographySpots: [
      'Photography is strictly prohibited inside the community areas to protect resident privacy.'
    ],
    travelTips: [
      'Closed-toe walking shoes are absolutely required for industrial pathways.',
      'Dress modestly: please cover your shoulders and knees.',
      'Ask your resident guide questions about community recycling economics.'
    ],
    reviews: [
      { author: 'Marie L.', rating: 5, text: 'An absolute eye-opening walk. The sheer resourcefulness and industry of the Dharavi recycling workshops are inspiring.' },
      { author: 'Thomas K.', rating: 5, text: 'Our guide was a Dharavi local and explained the social systems brilliantly. Zero photography is a great rule to respect privacy.' }
    ],
    suggestedTime: 'Morning (when recycling machinery is fully active)',
    recommendedDuration: '2.5 Hours'
  },
  {
    id: 'sanjay-colony-recycling',
    name: 'Sanjay Colony Garment Workshops',
    destinationId: 'switzerland',
    description: 'Light textile processing and sorting units where garments from across Delhi are recycled.',
    history: 'Established in the late 1970s, Sanjay Colony has developed into a major light textile collection point, supporting migrant families through cooperative sorting centers.',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800'
    ],
    nearbyAttractions: ['Lotus Temple', 'Okhla Bird Sanctuary', 'Kalkaji Mandir'],
    openingHours: 'Walks depart daily at 9:30 AM and 2:00 PM.',
    entryFee: 'Included in Sanjay Colony ticket ($15–$40)',
    restaurantsNearby: ['Haldiram Okhla', 'Local Samosa Stalls'],
    photographySpots: [
      'Photography is banned inside residential alleys to respect local families.'
    ],
    travelTips: [
      'Wear light cotton clothes and comfortable walking shoes.',
      'Be prepared to remove your shoes at local temples.',
      'Your ticket directly funds English and computer classes in the local school.'
    ],
    reviews: [
      { author: 'James P.', rating: 5, text: 'Insightful look into community life in South Delhi. Learning how textile scraps are spun back into raw wool was fascinating.' }
    ],
    suggestedTime: 'Morning (before mid-day heat)',
    recommendedDuration: '2.5 Hours'
  }
];

export const hotels: Hotel[] = [
  {
    id: 'colaba-heritage-inn',
    name: 'Colaba Heritage Boutique Inn',
    destinationId: 'santorini',
    rating: 4.85,
    description: 'A community-conscious boutique inn in South Mumbai, supporting local staff and operating fully plastic-free.',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800'
    ],
    amenities: [
      'Eco-friendly plastic-free rooms',
      'Complimentary filtered water stations',
      'Locally sourced organic breakfast kitchen',
      'Ethical guide desk & community maps',
      'Fair-wage local employment initiatives'
    ],
    rooms: [
      {
        name: 'Standard Heritage Queen',
        price: 90,
        maxGuests: 2,
        size: '28 m²',
        description: 'Clean, high-ceiling room featuring hand-woven linens, reclaimed wood tables, and local artwork.',
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800'
      }
    ],
    locationDetails: 'A quiet side street in Colaba, a 5-minute walk from the historic Gateway of India.',
    nearbyAttractions: ['Gateway of India', 'Colaba Causeway Bazaar', 'Chhatrapati Shivaji Maharaj Museum'],
    reviews: [
      { author: 'Alice R.', rating: 5, text: 'Lovely boutique base. The staff were wonderful and coordinated our Dharavi walk perfectly.' }
    ]
  },
  {
    id: 'haveli-dharampura',
    name: 'Haveli Dharampura Old Delhi',
    destinationId: 'switzerland',
    rating: 4.9,
    description: 'An award-winning restored 19th-century Mughal heritage haveli, supporting local preservation and classical musicians.',
    gallery: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800'
    ],
    amenities: [
      'UNESCO Heritage Award restoration',
      'Rooftop views of Jama Masjid mosque',
      'Kathak traditional classical dance shows',
      'Mughal courtyard dining room',
      'Heritage walking guides'
    ],
    rooms: [
      {
        name: 'Shah Jahan Heritage Room',
        price: 180,
        maxGuests: 2,
        size: '35 m²',
        description: 'Elegant boutique room with arched niches, hand-carved shutters, and block-printed silks.',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800'
      }
    ],
    locationDetails: 'Tucked inside the narrow heritage lanes of Chandni Chowk in Old Delhi.',
    nearbyAttractions: ['Jama Masjid', 'Red Fort', 'Chandni Chowk Spice Bazaar'],
    reviews: [
      { author: 'Marcus H.', rating: 5, text: 'Stunning haveli preservation. Sunset tea on the rooftop overlooking Old Delhi is magical.' }
    ]
  }
];

export const packages: TravelPackage[] = [
  {
    id: 'mumbai-local-package',
    name: 'Mumbai Local Communities Experience',
    destinationId: 'santorini',
    duration: '2 Days • 1 Night',
    price: 110,
    rating: 4.96,
    heroImage: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=1200',
    overview: 'Dive deep into Mumbai’s local spirit. Enjoy our signature Dharavi Slum Walk, ride local trains, visit Dhobi Ghat laundry yard, and share a dinner with a local potter\'s family.',
    includes: [
      '1 Night stay at Colaba Heritage Boutique Inn',
      'Ethical walking tour of Dharavi Slum & Potter\'s Colony',
      'Mumbai Public Transit passes (local train & taxi)',
      'Traditional home-cooked dinner with a family in Kumbharwada',
      'All tour fees fund educational classrooms via Reality Gives'
    ],
    excludes: [
      'Personal beverages',
      'Airport taxi fares',
      'Personal guide tips'
    ],
    packingGuide: [
      'Comfortable cotton clothing covering shoulders and knees.',
      'Closed-toe walking shoes (required for recycling workshop walks).',
      'Refillable water flask.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dhobi Ghat Laundry Yard & Dharavi Walk',
        visit: [{ attractionId: 'dharavi-recycling', name: 'Dharavi' }],
        morning: 'Meet your guide in Colaba. Travel by local train to Mahalaxmi to see the scale of Dhobi Ghat open-air laundry.',
        afternoon: 'Enter Dharavi for our ethical, no-photography walking tour of the plastic sorting and pottery workshops.',
        evening: 'Sit down for an authentic home-cooked vegetarian dinner with a family in the potter\'s community.',
        hotelId: 'colaba-heritage-inn',
        meals: ['Lunch', 'Dinner'],
        transportation: 'Local Train & Taxi',
        activities: ['Local Train Transit', 'Ethical Slum Walk', 'Potter\'s Family Dinner']
      },
      {
        day: 2,
        title: 'Dadar Flower Market & Reality Gives Classroom',
        visit: [],
        morning: 'Visit the bustling morning flower market at Dadar, exploring mounds of marigolds and jasmine.',
        afternoon: 'Visit a local school program managed by Reality Gives, seeing the English and IT labs funded by your booking.',
        evening: 'Check out of your room and transfer to the airport or train station for departure.',
        hotelId: 'colaba-heritage-inn',
        meals: ['Breakfast', 'Lunch'],
        transportation: 'Taxi',
        activities: ['Dadar Flower Market', 'Reality Gives School Session']
      }
    ]
  },
  {
    id: 'delhi-heritage-package',
    name: 'Delhi Sanjay Colony Community Experience',
    destinationId: 'switzerland',
    duration: '2 Days • 1 Night',
    price: 100,
    rating: 4.88,
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200',
    overview: 'Explore the industrious side of South Delhi. Visit fabric recycling workshops, walk past local community schools, and share lunch with a local family.',
    includes: [
      '1 Night stay at Haveli Dharampura Old Delhi',
      'Ethical walking tour of Sanjay Colony fabric recycling workshops',
      'Clean drinking water and local transit support',
      'All tour fees directly fund Reality Gives classrooms'
    ],
    excludes: [
      'Personal souvenirs',
      'Airport drop-off',
      'Personal tips for drivers'
    ],
    packingGuide: [
      'Comfortable walking shoes.',
      'Conservative dress covering shoulders and knees.',
      'Refillable water flask.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Sanjay Colony Walk & Recycling Workshops',
        visit: [{ attractionId: 'sanjay-colony-recycling', name: 'Sanjay Colony' }],
        morning: 'Meet your guide at Harkesh Nagar Okhla metro station. Walk into Sanjay Colony to see textile sorting.',
        afternoon: 'Walk past the temples and residential houses to learn about the community’s social fabric.',
        evening: 'Traditional tea and discussions with local community leaders.',
        hotelId: 'haveli-dharampura',
        meals: ['Lunch', 'Dinner'],
        transportation: 'Metro & Rickshaw',
        activities: ['Community Walk', 'Textile Workshop Tour']
      },
      {
        day: 2,
        title: 'Reality Gives Classroom Visit & Farewell',
        visit: [],
        morning: 'Visit the local training center run by Reality Gives to see English and computer classes in action.',
        afternoon: 'Enjoy a traditional North Indian home-cooked meal with a host family.',
        evening: 'Check out and transfer to your next destination.',
        hotelId: 'haveli-dharampura',
        meals: ['Breakfast', 'Lunch'],
        transportation: 'Taxi',
        activities: ['Classroom Visit', 'Family Lunch']
      }
    ]
  },
  {
    id: 'rajasthan-heritage-package',
    name: 'Rajasthan Desert & Rural Heritage Tour',
    destinationId: 'maldives',
    duration: '5 Days • 4 Nights',
    price: 320,
    rating: 4.95,
    heroImage: 'https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&q=80&w=1200',
    overview: 'Journey through the historic sites of Rajasthan. Explore the grand fortresses of Jaipur, visit rural textile cooperatives, and spend a night in a community-run desert village homestay.',
    includes: [
      '2 Nights at Jaipur boutique heritage hotel',
      '2 Nights in rural village community homestays',
      'Private clean transport with local driver',
      'All local guide fees supporting regional artisan guilds',
      'Traditional village dinners'
    ],
    excludes: [
      'Airport flights',
      'Personal crafts purchases'
    ],
    packingGuide: [
      'Loose cotton shirts and trousers.',
      'Socks for temple flooring walks.',
      'Sun hat and sunscreen lotion.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jaipur Forts & Artisans',
        visit: [],
        morning: 'Arrive in Jaipur. Visit the majestic Amber Fort with our local community guide.',
        afternoon: 'Tour a local block-printing and pottery workshop, meeting the artisans directly.',
        evening: 'Dine at a heritage restaurant supporting local folk musicians.',
        hotelId: 'colaba-heritage-inn',
        meals: ['Lunch', 'Dinner'],
        transportation: 'Clean Car',
        activities: ['Amber Fort History Walk', 'Block Printing Workshop']
      },
      {
        day: 2,
        title: 'Travel to Desert Villages',
        visit: [],
        morning: 'Drive towards the rural desert villages near Jodhpur.',
        afternoon: 'Arrive at the community village and check into your homestay run by local host families.',
        evening: 'Participate in cooking a traditional Rajasthani dinner over clay stoves.',
        hotelId: 'colaba-heritage-inn',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        transportation: 'Clean Car',
        activities: ['Scenic Road Trip', 'Homestay Check-in', 'Community Cooking Class']
      }
    ]
  },
  {
    id: 'kerala-backwaters-package',
    name: 'Kerala Backwaters Eco-Houseboat Journey',
    destinationId: 'kyoto',
    duration: '6 Days • 5 Nights',
    price: 280,
    rating: 4.89,
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1200',
    overview: 'Cruising the peaceful, palm-fringed backwaters of Kerala on an eco-friendly solar houseboat. Stroll through organic spice plantations and dine with riverside village fishers.',
    includes: [
      '3 Nights in cooperative eco-cottages',
      '2 Nights on a solar-powered traditional houseboat',
      'All meals cooked from fresh, locally sourced organic produce',
      'Guided canoe tours in shallow backwater canals',
      '80% of net profits fund local community clinics'
    ],
    excludes: [
      'Personal Ayurvedic massages',
      'Alcoholic beverages'
    ],
    packingGuide: [
      'Light summer garments.',
      'Insect repellent (essential for backwaters).',
      'Sandals or flip-flops.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Cochin Heritage & Eco-Cottages',
        visit: [],
        morning: 'Arrive in Cochin. Guided walk through Fort Kochi seeing the historic Chinese fishing nets.',
        afternoon: 'Drive to the organic eco-cottages overlooking the Vembanad Lake.',
        evening: 'Watch a traditional Kathakali classical dance performance at the local village school.',
        hotelId: 'colaba-heritage-inn',
        meals: ['Lunch', 'Dinner'],
        transportation: 'Eco Sedan',
        activities: ['Fort Kochi Walk', 'Kathakali Dance Show']
      },
      {
        day: 2,
        title: 'Boarding the Solar Houseboat',
        visit: [],
        morning: 'Board your private solar-powered eco-houseboat at the Alleppey jetty.',
        afternoon: 'Slow cruise through calm canals, watching rural riverside village life.',
        evening: 'Dine on fresh canal fish and local red rice prepared by your onboard private chef.',
        hotelId: 'colaba-heritage-inn',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        transportation: 'Solar Houseboat',
        activities: ['Backwaters Cruising', 'Private Chef Dinner']
      }
    ]
  },
  {
    id: 'old-delhi-food-package',
    name: 'Old Delhi Heritage & Street Food Crawl',
    destinationId: 'serengeti',
    duration: '1 Day',
    price: 35,
    rating: 4.97,
    heroImage: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=1200',
    overview: 'A full-day culinary and architectural journey through Old Delhi. Ride cycle rickshaws through narrow spice lanes and try clean, safe, and generational street recipes.',
    includes: [
      'Full-day guided walking and cycle rickshaw crawl',
      'Vetted, hygienic food samples at 8 generational street stalls',
      'Bilingual food curator explaining local history and recipes',
      'All municipal taxes and donation to Delhi school program'
    ],
    excludes: [
      'Hotel pick-up and drop-off transport',
      'Alcoholic drinks'
    ],
    packingGuide: [
      'Comfortable walking sneakers.',
      'Sanitizer gel (provided by guide, but good to have).',
      'Camera (permitted on street segments, not inside temples).'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chandni Chowk Spice Alleys & Sweet Shops',
        visit: [],
        morning: 'Rickshaw ride into Khari Baoli, Asia\'s largest wholesale spice market.',
        afternoon: 'Walk through narrow alleys tasting safe, vetted street foods like Samosas, Jalebi, and Lassi.',
        evening: 'Visit the historic Jama Masjid mosque at sunset, ending with a hot cup of spiced chai.',
        hotelId: 'haveli-dharampura',
        meals: ['Lunch', 'Dinner'],
        transportation: 'Rickshaw & Walking',
        activities: ['Spice Market Exploration', 'Hygienic Street Food Tasting', 'Mosque Sunset View']
      }
    ]
  },
  {
    id: 'agra-taj-mahal-package',
    name: 'Agra Heritage & Taj Mahal Sunrise Package',
    destinationId: 'amalfi',
    duration: '2 Days • 1 Night',
    price: 65,
    rating: 4.93,
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200',
    overview: 'Experience the Taj Mahal at sunrise. Visit the sandstone palaces of Agra Fort and support local marble inlay artisans in their community workshops.',
    includes: [
      '1 Night stay at Agra boutique heritage hotel',
      'Sunrise entry tickets to the Taj Mahal monument grounds',
      'Agra Fort historical tour with certified community guide',
      'Visits to traditional stone and marble inlay guilds',
      'Contribution to Reality Gives youth programs'
    ],
    excludes: [
      'Personal guide tips',
      'Camera fees at historical monuments'
    ],
    packingGuide: [
      'Conservative clothing (knees and shoulders covered).',
      'Comfortable footwear easy to slip off for temples.',
      'Valid identity card or passport.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Agra Fort & Marble Artisan Workshops',
        visit: [],
        morning: 'Drive from Delhi to Agra. Check into boutique hotel.',
        afternoon: 'Explore the grand red sandstone walls and palaces of the Agra Fort.',
        evening: 'Visit local marble carvers to see the centuries-old Pietra Dura stone inlay process.',
        hotelId: 'haveli-dharampura',
        meals: ['Lunch', 'Dinner'],
        transportation: 'Sedan',
        activities: ['Agra Fort Walk', 'Marble Inlay Workshop Visit']
      },
      {
        day: 2,
        title: 'Taj Mahal Sunrise & Return',
        visit: [],
        morning: 'Early morning sunrise entry to the Taj Mahal, seeing the marble domes reflect the dawn lights.',
        afternoon: 'Traditional breakfast at hotel. Return drive to Delhi.',
        evening: 'Arrive in Delhi and check out.',
        hotelId: 'haveli-dharampura',
        meals: ['Breakfast', 'Lunch'],
        transportation: 'Sedan',
        activities: ['Taj Mahal Sunrise Sightseeing', 'Scenic Drive']
      }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 'dharavi-slum-walk',
    name: 'Dharavi Slum Walking Tour',
    heroImage: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=1200',
    description: 'An educational walking tour of Dharavi’s residential and recycling districts. Learn how residents recycle plastic, shape pottery, and support community enterprise.',
    highlights: [
      'Guided by trained local residents who live in or near Dharavi',
      'Enforces a strict NO PHOTOGRAPHY policy to respect resident dignity',
      '80% of post-tax profits fund community classes and computer labs'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800'
    ],
    duration: '2.5 Hours walk',
    price: 18,
    included: [
      'Trained bilingual community guide',
      'Free filtered water station refills',
      'Voluntary donation to Reality Gives school fund'
    ],
    details: 'Step into Dharavi, Mumbai’s thriving city-within-a-city. Unlike commercialized tours, our walk is strictly educational, showcasing recycling systems, leather workshops, and Kumbharwada pottery. We challenge stereotypes by showing the community’s incredible drive and resilience.'
  },
  {
    id: 'delhi-sanjay-walk',
    name: 'Sanjay Colony Settlement Walk',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200',
    description: 'Explore Sanjay Colony in Delhi with a local guide. Learn about Okhla’s textile manufacturing and see how 80% of ticket sales fund schooling.',
    highlights: [
      'Led by Sanjay Colony residents sharing personal stories of community life',
      'Visit local recycling units where textile scraps are shredded and spun',
      'Tour local temples and community education centers'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800'
    ],
    duration: '2.5 Hours walk',
    price: 15,
    included: [
      'Resident-curated guide service',
      'Shoe-covering slippers for temples',
      'Contribution to Okhla children learning classes'
    ],
    details: 'Understand the daily reality, challenges, and aspirations of families in Sanjay Colony. This walk is designed to highlight Delhi’s local industriousness, visiting sewing rooms, recycling centers, and local schools.'
  },
  {
    id: 'mumbai-food-crawl',
    name: 'Indian Street Food Crawl',
    heroImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200',
    description: 'Taste safe, authentic, and delicious street food in Old Delhi or Mumbai with local food safety curators.',
    highlights: [
      'Eat at hand-selected, sanitarily vetted vendors with decades of history',
      'Try regional specialties like Vada Pav, Pav Bhaji, Bhel Puri, or Delhi’s Jalebis',
      'Learn the spice blends and history of Indian street gastronomy'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800'
    ],
    duration: '3 Hours crawl',
    price: 32,
    included: [
      'All street food samples and sweet tastings',
      'Safe bottled drinking water',
      'Hand sanitizer and wipes provided by guide'
    ],
    details: 'Unlock the flavors of India without worry. Our guides take you to local spots where vendors have served high-quality, fresh food for generations, explaining the spices and regional histories behind every dish.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'dignity-no-photos-slum-tours',
    title: 'Dignity First: Why We Say "No Photography" on Our Slum Tours',
    excerpt: 'Exploring the ethics of slum tourism and why protecting resident privacy is our primary, non-negotiable rule.',
    content: 'When we founded our ethical walks in 2006, our goal was to challenge stereotypes while treating residents with absolute dignity. Slum tourism is controversial, and for good reason: taking photos of people living in under-resourced areas turns their lives into a commercial spectacle. That is why we enforce a strict NO PHOTOGRAPHY policy on our community walks in Dharavi and Sanjay Colony. By leaving cameras behind, our visitors interact as guests, fostering genuine learning, conversation, and mutual respect.',
    category: 'Ethics',
    author: 'Krishna Pujari',
    date: 'June 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=800',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 'funding-local-education-reality-gives',
    title: 'Transforming Lives: How 80% of Your Booking Supports Local Classes',
    excerpt: 'Tracing the direct impact of your ticket purchase on educational programs in Sanjay Colony and Dharavi.',
    content: 'Every tour booked with us is a vote for social change. We operate on a unique 80% profit-sharing model. All post-tax profits fund our sister NGO, Reality Gives. Over the past two decades, these funds have built computer learning labs, funded community English training courses, and supported youth sports programs. By choosing ethical travel, you are helping local youths build critical vocational skills and access secure, long-term employment.',
    category: 'Impact',
    author: 'Chris Way',
    date: 'May 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800',
    authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'
  }
];
