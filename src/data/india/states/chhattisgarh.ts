export interface ChhattisgarhPlace {
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

export interface ChhattisgarhStateData {
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
  famousPlaces: ChhattisgarhPlace[];
}

export const CHHATTISGARH_DATA: ChhattisgarhStateData = {
  id: 'chhattisgarh',
  name: 'Chhattisgarh',
  type: 'State',
  capital: 'Raipur',
  tagline: 'Heartland of Tribal Heritage & Waterfalls',
  heroImage: '/images/chhattisgarh/chitrakote-waterfalls/hero-v3.jpg',
  about: 'Chhattisgarh is a green forested state in central India, famed for its ancient temple ruins, majestic wide waterfalls, rich tribal arts like Dhokra bell-metal castings, and underground limestone caves.',
  bestTime: 'October – March',
  climate: 'Tropical wet and dry climate. Winters are pleasant and mild (12°C – 25°C), while summers are very hot (35°C – 45°C).',
  famousFood: ['Muthia (Steamed Rice Rolls)', 'Chila (Rice Batter Pancake)', 'Farra (Steamed Rice Dumplings)', 'Bara (Urad Dal Fritters)', 'Aamat (Mixed Veg Soup)'],
  culture: 'Deeply rooted tribal traditions, Bastar Dussehra festivals (lasting 75 days), Panthi and Saila folk dances, and hand-cast Dhokra metal artifacts.',
  famousPlaces: [
    {
      name: 'Chitrakote Waterfalls',
      slug: 'chitrakote-waterfalls',
      category: 'Natural Wonder',
      image: '/images/chhattisgarh/chitrakote-waterfalls/hero-v3.jpg',
      overview: 'Often called the "Niagara Falls of India", Chitrakote is the widest waterfall in the country, horse-shoe shaped, plunging 30 meters down on the Indravati River in Bastar district.',
      rating: 4.96,
      bestTimeToVisit: 'July – October (Monsoon peak width)',
      shortDesc: 'Widest horse-shoe shaped waterfall in India on the Indravati River.',
      gallery: [
        '/images/chhattisgarh/chitrakote-waterfalls/gallery-1-v3.jpg',
        '/images/chhattisgarh/chitrakote-waterfalls/gallery-2-v3.jpg',
        '/images/chhattisgarh/chitrakote-waterfalls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tirathgarh Waterfalls', 'Bastar Palace Jagdalpur', 'Danteshwari Temple Dantewada'],
      recommendedHotels: ['Dandami Luxury Resort Chitrakote', 'Hotel Rainbow Jagdalpur', 'Naman Bastar Resort'],
      famousRestaurants: ['Chitrakote Riverview Restaurant', 'Bastar Kitchen', 'Rainbow Diner']
    },
    {
      name: 'Laxman Temple, Sirpur',
      slug: 'sirpur-monuments',
      category: 'Historical Heritage',
      image: '/images/chhattisgarh/sirpur-monuments/hero-v3.jpg',
      overview: 'Dating back to the 7th century CE, this exquisitely carved red brick temple dedicated to Lord Vishnu is one of the finest surviving examples of brick temple architecture in India.',
      rating: 4.92,
      bestTimeToVisit: 'October – March',
      shortDesc: 'One of India’s finest surviving 7th-century brick Vishnu temples.',
      gallery: [
        '/images/chhattisgarh/sirpur-monuments/gallery-1-v3.jpg',
        '/images/chhattisgarh/sirpur-monuments/gallery-2-v3.jpg',
        '/images/chhattisgarh/sirpur-monuments/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Teevaradeo Buddhist Monastery', 'Gandheswar Temple', 'Sirpur Museum'],
      recommendedHotels: ['APTDC Sirpur Tourist Cottage', 'Hotel Babylon International Raipur'],
      famousRestaurants: ['Sirpur Tourist Lodge Canteen', 'Highway Dhaba']
    },
    {
      name: 'Bhoramdeo Temple Complex',
      slug: 'bhoramdeo-temple',
      category: 'Historical Heritage',
      image: '/images/chhattisgarh/bhoramdeo-temple/hero-v3.jpg',
      overview: 'Built between the 7th and 11th centuries by the Nagavanshi kings, Bhoramdeo is called the "Khajuraho of Chhattisgarh" due to its spectacular stone carvings and erotic sculptures on Maikal Hills.',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Known as the Khajuraho of Chhattisgarh, dedicated to Lord Shiva.',
      gallery: [
        '/images/chhattisgarh/bhoramdeo-temple/gallery-1-v3.jpg',
        '/images/chhattisgarh/bhoramdeo-temple/gallery-2-v3.jpg',
        '/images/chhattisgarh/bhoramdeo-temple/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Madwa Mahal', 'Cherki Mahal', 'Saroda Reservoir'],
      recommendedHotels: ['Bhoramdeo Jungle Retreat', 'Kawardha Palace Resort', 'Hotel Highway Inn'],
      famousRestaurants: ['Jungle Retreat Dining Hall', 'Kawardha Royal Kitchen']
    },
    {
      name: 'Tirathgarh Waterfalls',
      slug: 'tirathgarh-waterfalls',
      category: 'Natural Wonder',
      image: '/images/chhattisgarh/tirathgarh-waterfalls/hero-v3.jpg',
      overview: 'Located inside the Kanger Valley National Park, this block-type cascade falls down 90 meters in a series of steps on the Mugabahar River, creating a magnificent white-water spray.',
      rating: 4.94,
      bestTimeToVisit: 'October – February',
      shortDesc: 'Step-like cascade waterfall located in Kanger Valley National Park.',
      gallery: [
        '/images/chhattisgarh/tirathgarh-waterfalls/gallery-1-v3.jpg',
        '/images/chhattisgarh/tirathgarh-waterfalls/gallery-2-v3.jpg',
        '/images/chhattisgarh/tirathgarh-waterfalls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kutumsar Caves', 'Kanger Dhara Waterfalls', 'Jagdalpur Palace'],
      recommendedHotels: ['Naman Bastar Jagdalpur', 'Hotel Rainbow', 'Kanger Valley Resort'],
      famousRestaurants: ['Highway Dhaba', 'Bastar Thali Restaurant']
    },
    {
      name: 'Kotumsar Cave & Kanger Ghati',
      slug: 'kanger-valley-kutumsar',
      category: 'Natural Wonder',
      image: '/images/chhattisgarh/kanger-valley-kutumsar/hero-v3.jpg',
      overview: 'One of the world’s longest natural subterranean caves, Kotumsar Caves feature spectacular stalactite and stalagmite formations, limestone chambers, and unique blind cave-fish.',
      rating: 4.90,
      bestTimeToVisit: 'November – April (Caves closed during monsoon)',
      shortDesc: 'Subterranean limestone stalactite cave home to blind cave-fish.',
      gallery: [
        '/images/chhattisgarh/kanger-valley-kutumsar/gallery-1-v3.jpg',
        '/images/chhattisgarh/kanger-valley-kutumsar/gallery-2-v3.jpg',
        '/images/chhattisgarh/kanger-valley-kutumsar/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kanger Valley Forest Trail', 'Tirathgarh Waterfalls', 'Dandak Cave'],
      recommendedHotels: ['Kanger Valley Eco Camps', 'Naman Bastar Resort'],
      famousRestaurants: ['Forest Department Canteen', 'Jagdalpur Food Plaza']
    },
    {
      name: 'Mainpat Tibetan Settlement',
      slug: 'mainpat',
      category: 'Hill Station',
      image: '/images/chhattisgarh/mainpat/hero-v3.jpg',
      overview: 'Referred to as the "Shimla of Chhattisgarh", Mainpat is a scenic high-altitude hill plateau home to a large Tibetan refugee settlement, beautiful Buddhist monasteries, kiwifarms, and gravity-defying Ulta Pani.',
      rating: 4.88,
      bestTimeToVisit: 'October – February',
      shortDesc: 'High-altitude scenic plateau known as Shimla of Chhattisgarh.',
      gallery: [
        '/images/chhattisgarh/mainpat/gallery-1-v3.jpg',
        '/images/chhattisgarh/mainpat/gallery-2-v3.jpg',
        '/images/chhattisgarh/mainpat/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Dharpat Jalprapat', 'Tiger Point Waterfall', 'Buddhist Monastery Mainpat', 'Ulta Pani (Gravity Hill)'],
      recommendedHotels: ['Mercury Resort Mainpat', 'Mainpat Eco Hill Resort', 'Tibetan Homestays'],
      famousRestaurants: ['Tibetan Momos Cafe', 'Mainpat Hill Diner']
    },
    {
      name: 'Maa Bamleshwari Temple, Dongargarh',
      slug: 'dongargarh',
      category: 'Spiritual Shrine',
      image: '/images/chhattisgarh/dongargarh/hero-v3.jpg',
      overview: 'Situated atop a 1,600-foot hill in Dongargarh, this highly revered temple dedicated to Goddess Bamleshwari is accessible by a steep flight of 1,000 stairs or a scenic passenger ropeway.',
      rating: 4.89,
      bestTimeToVisit: 'October – March (Popular during Navratri)',
      shortDesc: 'Hilltop pilgrimage shrine reached by ropeway or 1,000 steps.',
      gallery: [
        '/images/chhattisgarh/dongargarh/gallery-1-v3.jpg',
        '/images/chhattisgarh/dongargarh/gallery-2-v3.jpg',
        '/images/chhattisgarh/dongargarh/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Pragya Giri (Buddhist Monolithic Statue)', 'Dongargarh Lake'],
      recommendedHotels: ['Dongargarh Yatri Niwas', 'Hotel Babylon Inn Raipur'],
      famousRestaurants: ['Dongargarh Prasad Canteen', 'Shiva Veg Restaurant']
    },
    {
      name: 'Barnawapara Wildlife Sanctuary',
      slug: 'barnawapara-sanctuary',
      category: 'Wildlife Sanctuary',
      image: '/images/chhattisgarh/barnawapara-sanctuary/hero-v3.jpg',
      overview: 'Named after the twin villages Bar and Nawapara, this sanctuary features flat terrain and dense mixed deciduous teak forests home to leopards, Indian bison (gaur), barking deer, and pythons.',
      rating: 4.90,
      bestTimeToVisit: 'November – April',
      shortDesc: 'Deciduous forest sanctuary home to leopards, bison, and barking deer.',
      gallery: [
        '/images/chhattisgarh/barnawapara-sanctuary/gallery-1-v3.jpg',
        '/images/chhattisgarh/barnawapara-sanctuary/gallery-2-v3.jpg',
        '/images/chhattisgarh/barnawapara-sanctuary/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Sirpur Archaeological Site', 'Turtle Sanctuary'],
      recommendedHotels: ['Barnawapara Eco Tourism Resort', 'Muba’s Jungle Resort Barnawapara'],
      famousRestaurants: ['Eco Resort Dining Hall', 'Jungle Fowl Cafe']
    }
  ]
};
