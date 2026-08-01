export interface ArunachalPradeshPlace {
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

export interface ArunachalPradeshStateData {
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
  famousPlaces: ArunachalPradeshPlace[];
}

export const ARUNACHAL_PRADESH_DATA: ArunachalPradeshStateData = {
  id: 'arunachal-pradesh',
  name: 'Arunachal Pradesh',
  type: 'State',
  capital: 'Itanagar',
  tagline: 'Land of the Dawn-Lit Mountains',
  heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200',
  about: 'Arunachal Pradesh is India’s easternmost state, renowned for its snow-capped Eastern Himalayan peaks, ancient Buddhist monasteries, pristine glacial lakes, and vibrant indigenous tribal heritage.',
  bestTime: 'October – April',
  climate: 'Alpine to sub-tropical climate with cold winters (0°C – 15°C) and pleasant spring weather.',
  famousFood: ['Thukpa (Noodle Soup)', 'Zan (Millet Porridge)', 'Pika Pila (Bamboo Shoot Pickle)', 'Lukter (Dry Meat with Chili)', 'Marua Millet Beverage'],
  culture: 'Rich tribal heritage of 26 major tribes including Monpa, Apatani, Nyishi, and Adi, celebrated through Losar New Year festival and Ziro Music Festival.',
  famousPlaces: [
    {
      name: 'Tawang Monastery',
      slug: 'tawang-monastery',
      category: 'Buddhist Shrine',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200',
      overview: 'Perched at an elevation of 10,000ft overlooking the Tawang Chu valley, Galden Namgey Lhatse (Tawang Monastery) was founded in 1680 and is India’s largest monastery and the second largest in the world.',
      rating: 4.98,
      bestTimeToVisit: 'October – April',
      shortDesc: 'India’s largest Buddhist monastery perched atop 10,000ft in Tawang.',
      gallery: [
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200'
      ],
      nearbyAttractions: ['Tawang War Memorial', 'Giant Buddha Statue Tawang', 'Urgyelling Monastery', 'Ani Gompa'],
      recommendedHotels: ['Hotel Vajrasattva Tawang', 'Hotel Tawang Heights', 'Dondrub Homestay'],
      famousRestaurants: ['Dragon Restaurant Tawang', 'Orange Bar & Restaurant', 'Mon-Inn Cafe']
    },
    {
      name: 'Sela Pass & Sela Lake',
      slug: 'sela-pass',
      category: 'Alpine Mountain Pass',
      image: '', // Strictly empty: ImageWithFallback renders clean "Verified Image Coming Soon"
      overview: 'Situated at a breathtaking altitude of 13,700ft, Sela Pass connects Tawang to the rest of India and is home to the sacred Sela Lake, which remains partially frozen during winter months surrounded by snow peaks.',
      rating: 4.96,
      bestTimeToVisit: 'October – April',
      shortDesc: 'High-altitude mountain pass at 13,700ft with pristine alpine Sela Lake.',
      gallery: [],
      nearbyAttractions: ['Jaswant Garh War Memorial', 'Baisakhi Army Camp'],
      recommendedHotels: ['Sela Pass Army Transit Lodge', 'Dirang Boutique Cottages'],
      famousRestaurants: ['Sela Pass Army Canteen (Hot Chai & Momos)', 'Jaswant Garh Canteen']
    },
    {
      name: 'Ziro Valley',
      slug: 'ziro-valley',
      category: 'UNESCO Cultural Landscape',
      image: '', // Strictly empty: ImageWithFallback renders clean "Verified Image Coming Soon"
      overview: 'Home to the facial-tattooed Apatani tribe, Ziro Valley is an idyllic plateau surrounded by pine hills and wet rice-cum-fish cultivation fields, world-famous for hosting the outdoor Ziro Festival of Music.',
      rating: 4.94,
      bestTimeToVisit: 'September – March',
      shortDesc: 'UNESCO tentative heritage valley known for Apatani tribal culture & music festival.',
      gallery: [],
      nearbyAttractions: ['Kile Pakho Viewpoint', 'Tarin Fish Farm', 'Meghna Cave Temple', 'Talley Valley Wildlife Sanctuary'],
      recommendedHotels: ['Ziro Palace Inn', 'Siiro Resort Ziro', 'Apatani Tribal Homestays'],
      famousRestaurants: ['Apatani Kitchen Ziro', 'City Hotel Restaurant', 'Bamboo Hut Cafe']
    },
    {
      name: 'Sangetsar Lake (Madhuri Lake)',
      slug: 'sangetsar-lake',
      category: 'Glacial Lake',
      image: '', // Strictly empty: ImageWithFallback renders clean "Verified Image Coming Soon"
      overview: 'Formed by a earthquake in 1971 near the Indo-China border at 12,000ft, Sangetsar Lake features upright dead tree trunks standing out of clear glacial waters, famously nicknamed Madhuri Lake after the Bollywood movie Koyla.',
      rating: 4.93,
      bestTimeToVisit: 'October – April',
      shortDesc: 'Breathtaking high-altitude glacial lake with submerged tree trunks near Tawang.',
      gallery: [],
      nearbyAttractions: ['Bum La Pass (Indo-China Border)', 'PT Tso Lake', 'Nuranang Waterfalls (Jang Falls)'],
      recommendedHotels: ['Army Transit Camp Tawang', 'Hotel Yid-Ga-Chosin'],
      famousRestaurants: ['Sangetsar Army Canteen', 'Jang Waterfall Dhaba']
    },
    {
      name: 'Namdapha National Park',
      slug: 'namdapha-national-park',
      category: 'Biodiversity Reserve',
      image: '', // Strictly empty: ImageWithFallback renders clean "Verified Image Coming Soon"
      overview: 'Located in Changlang district near the Myanmar border, Namdapha is India’s third largest national park, harboring pristine lowland evergreen rainforests home to all four big cat species (Tiger, Leopard, Snow Leopard, Clouded Leopard).',
      rating: 4.91,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Biodiversity hotspot & tiger reserve with lowland rainforests in Changlang.',
      gallery: [],
      nearbyAttractions: ['Miao River Waterfront', 'Miao Tribal Village', 'Noa-Dehing River Rafting'],
      recommendedHotels: ['Namdapha Jungle Camp Miao', 'Forest Rest House Deban'],
      famousRestaurants: ['Miao Bamboo Restaurant', 'Deban Camp Canteen']
    },
    {
      name: 'Nuranang Waterfalls (Jang Falls)',
      slug: 'nuranang-waterfalls',
      category: 'Cascade Waterfalls',
      image: '', // Strictly empty: ImageWithFallback renders clean "Verified Image Coming Soon"
      overview: 'Plunging 100 meters down a sheer cliff near Jang town, Nuranang Falls is a spectacular roaring waterfall fed by high-altitude glacial streams, surrounded by lush rhododendron hills.',
      rating: 4.90,
      bestTimeToVisit: 'October – April',
      shortDesc: 'Majestic 100m roaring glacial waterfall near Jang town.',
      gallery: [],
      nearbyAttractions: ['Jang Hydel Power Plant', 'Tawang Chu River Confluence'],
      recommendedHotels: ['Jang Eco Resort', 'Hotel Tawang Heights'],
      famousRestaurants: ['Jang Falls Tea Stall', 'Riverside Momos Corner']
    },
    {
      name: 'Dirang Valley & Dirang Dzong',
      slug: 'dirang-valley',
      category: 'Historic Valley',
      image: '', // Strictly empty: ImageWithFallback renders clean "Verified Image Coming Soon"
      overview: 'Situated along the Kameng River between Bomdila and Tawang, Dirang Valley features natural hot water sulphur springs, apple orchards, kiwi farms, and the historic 17th-century stone fort Dirang Dzong.',
      rating: 4.88,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Picturesque valley with hot springs, apple orchards, and Dirang Dzong fort.',
      gallery: [],
      nearbyAttractions: ['Dirang Hot Water Springs', 'National Research Centre on Yak', 'Kalachakra Gompa'],
      recommendedHotels: ['Norphel Retreat Dirang', 'Hotel Pemaling Dirang'],
      famousRestaurants: ['Dirang Dzong Cafe', 'Kameng River View Dhaba']
    },
    {
      name: 'Itanagar Ita Fort & Gompa',
      slug: 'itanagar-ita-fort',
      category: 'Heritage Citadel',
      image: '', // Strictly empty: ImageWithFallback renders clean "Verified Image Coming Soon"
      overview: 'Located in the capital city of Itanagar, Ita Fort ("Fort of Bricks") is an irregularly shaped 14th-century fortress built by the Chutia dynasty, accompanied by the hilltop Theravada Buddhist Gompa consecrated by the Dalai Lama.',
      rating: 4.86,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Capital city featuring the 14th-century brick Ita Fort and Yellow Sect Gompa.',
      gallery: [],
      nearbyAttractions: ['Ganga Lake (Gyakar Sinyi)', 'Jawaharlal Nehru State Museum', 'Biological Park Itanagar'],
      recommendedHotels: ['Hotel Donyi Polo Ashok', 'Hotel Blue Pine Itanagar'],
      famousRestaurants: ['Poong Food Court', 'Polo Colony Bamboo Kitchen']
    }
  ]
};
