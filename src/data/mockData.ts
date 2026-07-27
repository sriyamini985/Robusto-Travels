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
    id: "switzerland",
    name: "Switzerland",
    country: "Switzerland",
    duration: "5–8 Days",
    price: 2450,
    rating: 4.96,
    description: "Majestic snow peaks, pristine alpine lakes, and world-class luxury resorts.",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=1200",
    category: "Mountains" as any,
    about: "Majestic snow peaks, pristine alpine lakes, and world-class luxury resorts.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Dec to Apr & Jul to Sep",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Switzerland?", answer: "Dec to Apr & Jul to Sep" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "japan",
    name: "Japan",
    country: "Japan",
    duration: "7–10 Days",
    price: 2100,
    rating: 4.95,
    description: "Futuristic skylines, ancient shrines, cherry blossoms, and Michelin dining.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury" as any,
    about: "Futuristic skylines, ancient shrines, cherry blossoms, and Michelin dining.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Mar to May & Oct to Nov",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Japan?", answer: "Mar to May & Oct to Nov" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "italy",
    name: "Italy",
    country: "Italy",
    duration: "6–9 Days",
    price: 1950,
    rating: 4.94,
    description: "Ancient Roman ruins, Venetian gondolas, Renaissance art, and coastal Positano.",
    heroImage: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury" as any,
    about: "Ancient Roman ruins, Venetian gondolas, Renaissance art, and coastal Positano.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Apr to Jun & Sep to Oct",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Italy?", answer: "Apr to Jun & Sep to Oct" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "dubai",
    name: "Dubai (UAE)",
    country: "UAE",
    duration: "4–6 Days",
    price: 1650,
    rating: 4.93,
    description: "Burj Khalifa, luxury palm islands, desert dune safaris, and high-end shopping.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury" as any,
    about: "Burj Khalifa, luxury palm islands, desert dune safaris, and high-end shopping.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Oct to Apr",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Dubai (UAE)?", answer: "Oct to Apr" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    duration: "5–8 Days",
    price: 1350,
    rating: 4.92,
    description: "Sacred sea temples, emerald rice terraces, volcanic sunsets, and beach clubs.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200",
    category: "Beach" as any,
    about: "Sacred sea temples, emerald rice terraces, volcanic sunsets, and beach clubs.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "May to Sep",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Bali?", answer: "May to Sep" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    duration: "4–7 Days",
    price: 2800,
    rating: 4.98,
    description: "Overwater lagoon villas, whale shark sanctuaries, and crystal turquoise waters.",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200",
    category: "Beach" as any,
    about: "Overwater lagoon villas, whale shark sanctuaries, and crystal turquoise waters.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Nov to Apr",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Maldives?", answer: "Nov to Apr" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    duration: "3–5 Days",
    price: 1750,
    rating: 4.91,
    description: "Marina Bay Sands rooftop pool, Supertree Grove, and multicultural street hawkers.",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury" as any,
    about: "Marina Bay Sands rooftop pool, Supertree Grove, and multicultural street hawkers.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Year-round",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Singapore?", answer: "Year-round" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "thailand",
    name: "Thailand",
    country: "Thailand",
    duration: "6–9 Days",
    price: 1250,
    rating: 4.9,
    description: "Bangkok golden temples, Phi Phi limestone karsts, and northern elephant sanctuaries.",
    heroImage: "https://images.unsplash.com/photo-1506665531195-3566fe294710?auto=format&fit=crop&q=80&w=1200",
    category: "Beach" as any,
    about: "Bangkok golden temples, Phi Phi limestone karsts, and northern elephant sanctuaries.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Nov to Apr",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1506665531195-3566fe294710?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Thailand?", answer: "Nov to Apr" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "france",
    name: "France",
    country: "France",
    duration: "6–9 Days",
    price: 2150,
    rating: 4.95,
    description: "Eiffel Tower lights, French Riviera coast, Mont Saint-Michel, and fine wines.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury" as any,
    about: "Eiffel Tower lights, French Riviera coast, Mont Saint-Michel, and fine wines.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "May to Oct",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit France?", answer: "May to Oct" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "australia",
    name: "Australia",
    country: "Australia",
    duration: "8–12 Days",
    price: 2600,
    rating: 4.96,
    description: "Sydney Opera House, Great Barrier Reef diving, Uluru red outback, and wildlife.",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200",
    category: "Adventure" as any,
    about: "Sydney Opera House, Great Barrier Reef diving, Uluru red outback, and wildlife.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Sep to Nov & Mar to May",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Australia?", answer: "Sep to Nov & Mar to May" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "usa",
    name: "United States",
    country: "USA",
    duration: "7–12 Days",
    price: 2400,
    rating: 4.93,
    description: "New York Manhattan skyline, Grand Canyon, Las Vegas strip, and Hawaiian coast.",
    heroImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=1200",
    category: "Adventure" as any,
    about: "New York Manhattan skyline, Grand Canyon, Las Vegas strip, and Hawaiian coast.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Apr to Jun & Sep to Nov",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit United States?", answer: "Apr to Jun & Sep to Nov" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "turkey",
    name: "Turkey",
    country: "Turkey",
    duration: "6–9 Days",
    price: 1600,
    rating: 4.94,
    description: "Istanbul Hagia Sophia, Cappadocia hot air balloons, and Pamukkale thermal pools.",
    heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury" as any,
    about: "Istanbul Hagia Sophia, Cappadocia hot air balloons, and Pamukkale thermal pools.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Apr to Jun & Sep to Oct",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Turkey?", answer: "Apr to Jun & Sep to Oct" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "india",
    name: "India",
    country: "India",
    duration: "6–10 Days",
    price: 1200,
    rating: 4.95,
    description: "Taj Mahal, Jaipur royal palaces, Kerala backwaters, and spiritual Varanasi ghats.",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200",
    category: "Solo" as any,
    about: "Taj Mahal, Jaipur royal palaces, Kerala backwaters, and spiritual Varanasi ghats.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Oct to Mar",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit India?", answer: "Oct to Mar" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "egypt",
    name: "Egypt",
    country: "Egypt",
    duration: "6–9 Days",
    price: 1550,
    rating: 4.96,
    description: "Great Pyramids of Giza, Sphinx, Nile felucca cruises, and Pharaonic temples.",
    heroImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1200",
    category: "Adventure" as any,
    about: "Great Pyramids of Giza, Sphinx, Nile felucca cruises, and Pharaonic temples.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Oct to Apr",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Egypt?", answer: "Oct to Apr" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "greece",
    name: "Greece",
    country: "Greece",
    duration: "6–9 Days",
    price: 1950,
    rating: 4.97,
    description: "Santorini blue dome calderas, Athens Parthenon, and Mykonos white windmills.",
    heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1200",
    category: "Honeymoon" as any,
    about: "Santorini blue dome calderas, Athens Parthenon, and Mykonos white windmills.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "May to Oct",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Greece?", answer: "May to Oct" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "brazil",
    name: "Brazil",
    country: "Brazil",
    duration: "7–10 Days",
    price: 1850,
    rating: 4.95,
    description: "Christ the Redeemer, Sugarloaf mountain, Iguazu Falls, and Amazon rainforest.",
    heroImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=1200",
    category: "Adventure" as any,
    about: "Christ the Redeemer, Sugarloaf mountain, Iguazu Falls, and Amazon rainforest.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Dec to Mar",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Brazil?", answer: "Dec to Mar" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "uk",
    name: "United Kingdom",
    country: "UK",
    duration: "6–9 Days",
    price: 2100,
    rating: 4.94,
    description: "Big Ben, Buckingham Palace, Edinburgh Castle, and Cotswold stone villages.",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200",
    category: "Family" as any,
    about: "Big Ben, Buckingham Palace, Edinburgh Castle, and Cotswold stone villages.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "May to Sep",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit United Kingdom?", answer: "May to Sep" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "south-africa",
    name: "South Africa",
    country: "South Africa",
    duration: "7–10 Days",
    price: 2200,
    rating: 4.97,
    description: "Table Mountain Cape Town, Kruger Big 5 game safaris, and Stellenbosch winelands.",
    heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200",
    category: "Wildlife" as any,
    about: "Table Mountain Cape Town, Kruger Big 5 game safaris, and Stellenbosch winelands.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "May to Sep",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit South Africa?", answer: "May to Sep" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "spain",
    name: "Spain",
    country: "Spain",
    duration: "6–9 Days",
    price: 1850,
    rating: 4.96,
    description: "Sagrada Família, Granada Alhambra, Seville Flamenco, and Mediterranean tapas.",
    heroImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=1200",
    category: "Luxury" as any,
    about: "Sagrada Família, Granada Alhambra, Seville Flamenco, and Mediterranean tapas.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Apr to Jun & Sep to Nov",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Spain?", answer: "Apr to Jun & Sep to Nov" }],
    coordinates: { lat: 0, lng: 0 }
  },
  {
    id: "canada",
    name: "Canada",
    country: "Canada",
    duration: "7–11 Days",
    price: 2350,
    rating: 4.98,
    description: "Banff turquoise glacial lakes, Niagara Falls, and Rocky Mountain wilderness.",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1200",
    category: "Mountains" as any,
    about: "Banff turquoise glacial lakes, Niagara Falls, and Rocky Mountain wilderness.",
    weather: "Temperate and pleasant during peak travel season.",
    bestSeason: "Jun to Sep",
    visaInfo: "Tourist Visa / E-Visa available.",
    currency: "Local Currency",
    languages: ["English", "Local"],
    culture: "Vibrant local traditions, cuisine, and heritage.",
    gallery: ["https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1200"],
    faq: [{ question: "What is the best season to visit Canada?", answer: "Jun to Sep" }],
    coordinates: { lat: 0, lng: 0 }
  },
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
