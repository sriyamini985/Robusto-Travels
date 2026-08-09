export interface UttarakhandPlace {
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

export interface UttarakhandStateData {
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
  famousPlaces: UttarakhandPlace[];
}

export const UTTARAKHAND_DATA: UttarakhandStateData = {
  id: 'uttarakhand',
  name: 'Uttarakhand',
  type: 'State',
  capital: 'Dehradun (Winter) / Gairsain (Summer)',
  tagline: 'Land of Gods (Devbhoomi)',
  heroImage: '/images/uttarakhand/kedarnath/hero-v3.jpg',
  about: 'Uttarakhand, nestled in the Garhwal and Kumaon ranges of the High Himalayas, is Devbhoomi ("Land of Gods") — home to the sacred Char Dham shrines (Kedarnath, Badrinath, Gangotri, Yamunotri), yoga capital Rishikesh along the holy Ganges, premier ski resort Auli, UNESCO World Heritage Valley of Flowers, and India\'s oldest national park Jim Corbett.',
  bestTime: 'March – June & September – November',
  climate: 'Sub-tropical to alpine Himalayan climate. Pleasant summers (15°C–30°C), heavy monsoons (July–August, landslides prone), and freezing winters with heavy snowfall at high altitudes (-5°C–15°C). Best visited March–June and Sept–Nov.',
  famousFood: ['Aloo Ke Gutke', 'Kafuli (spinach curry)', 'Phaanu', 'Bhang Ki Chutney', 'Chainsoo', 'Kumaoni Raita', 'Singori & Bal Mithai (Almora)'],
  culture: 'Rich Garhwali and Kumaoni heritage, Chholiya sword folk dance, Jhora and Langvir dance, Nanda Devi Raj Jat Yatra, sacred Ganga Aarti at Haridwar & Rishikesh, and Himalayan woodcarving.',
  famousPlaces: [
    {
      name: 'Kedarnath Temple',
      slug: 'kedarnath',
      category: 'Sacred High-Altitude Jyotirlinga',
      image: '/images/uttarakhand/kedarnath/hero-v3.jpg',
      overview: 'Perched at an altitude of 3,583m (11,755 ft) amidst snow-capped Himalayan peaks near the Mandakini River, 8th-century Kedarnath Temple built by Adi Shankaracharya is one of the 12 sacred Jyotirlingas and the highest of the Panch Kedar shrines.',
      rating: 4.99,
      bestTimeToVisit: 'May – June & September – October (Closed in winter)',
      shortDesc: 'Sacred 3,583m 8th-century Jyotirlinga shrine set against dramatic snowcapped peaks.',
      gallery: [
        '/images/uttarakhand/kedarnath/gallery-1-v3.jpg',
        '/images/uttarakhand/kedarnath/gallery-2-v3.jpg',
        '/images/uttarakhand/kedarnath/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Bhairavnath Temple', 'Gaurikund (Trek Base)', 'Vasuki Tal Lake', 'Chorabari Lake'],
      recommendedHotels: ['GMVN Kedarnath Cottages', 'Kedarnath Trekker Camps', 'Hotel Char Dham Gaurikund'],
      famousRestaurants: ['GMVN Dining Hall Kedarnath', 'Gaurikund Food Stalls']
    },
    {
      name: 'Badrinath Temple',
      slug: 'badrinath',
      category: 'Char Dham Vishnu Shrine',
      image: '/images/uttarakhand/badrinath/hero-v3.jpg',
      overview: 'Situated at 3,300m in the Chamoli district between the Nar and Narayana mountain ranges along the Alaknanda River, Badrinath is a 1,000-year-old brightly painted shrine dedicated to Lord Vishnu, one of the four all-India Char Dham pilgrimage sites.',
      rating: 4.98,
      bestTimeToVisit: 'May – June & September – October (Closed in winter)',
      shortDesc: '1,000-year-old bright-hued Char Dham Vishnu shrine on the Alaknanda River at 3,300m.',
      gallery: [
        '/images/uttarakhand/badrinath/gallery-1-v3.jpg',
        '/images/uttarakhand/badrinath/gallery-2-v3.jpg',
        '/images/uttarakhand/badrinath/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Tapt Kund Hot Spring', 'Mana Village (Last Indian Village)', 'Vasudhara Falls', 'Vyas Gufa'],
      recommendedHotels: ['Sarovar Portico Badrinath', 'Hotel Snow Crest Badrinath', 'GMVN Badrinath'],
      famousRestaurants: ['Saket Restaurant Badrinath', 'Mana Village Tea Shop']
    },
    {
      name: 'Rishikesh & Haridwar',
      slug: 'rishikesh-haridwar',
      category: 'Yoga Capital & Sacred Ganges Ghats',
      image: '/images/uttarakhand/rishikesh-haridwar/hero-v3.jpg',
      overview: 'Known as the "Yoga Capital of the World", Rishikesh sits where the holy Ganges emerges from the Himalayas, famous for Laxman Jhula, Beatles Ashram, white-water river rafting, and evening Ganga Aarti at Har Ki Pauri ghat in nearby Haridwar.',
      rating: 4.97,
      bestTimeToVisit: 'October – March (International Yoga Festival in March)',
      shortDesc: '"Yoga Capital of the World" — Ganges rafting, Laxman Jhula & Har Ki Pauri Ganga Aarti.',
      gallery: [
        '/images/uttarakhand/rishikesh-haridwar/gallery-1-v3.jpg',
        '/images/uttarakhand/rishikesh-haridwar/gallery-2-v3.jpg',
        '/images/uttarakhand/rishikesh-haridwar/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Laxman Jhula & Ram Jhula', 'Beatles Ashram', 'Triveni Ghat Rishikesh', 'Har Ki Pauri Haridwar'],
      recommendedHotels: ['Ananda in the Himalayas', 'The Roseate Ganges Rishikesh', 'Aloha On The Ganges'],
      famousRestaurants: ['Chotiwala Restaurant Rishikesh', 'Little Buddha Cafe', 'Mathura Wala Haridwar']
    },
    {
      name: 'Nainital',
      slug: 'nainital',
      category: 'Kumaon Lake District',
      image: '/images/uttarakhand/nainital/hero-v3.jpg',
      overview: 'Set in a eye-shaped valley around emerald Naini Lake at 2,000m, Nainital is Kumaon\'s famous lake hill station, featuring Mall Road promenades, Naina Devi Shakti Peeth temple, aerial cable car to Snow View Point, and Tiffin Top.',
      rating: 4.94,
      bestTimeToVisit: 'March – June & October – December',
      shortDesc: 'Emerald Naini Lake hill station featuring Mall Road, cable car and Naina Devi Temple.',
      gallery: [
        '/images/uttarakhand/nainital/gallery-1-v3.jpg',
        '/images/uttarakhand/nainital/gallery-2-v3.jpg',
        '/images/uttarakhand/nainital/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Naini Lake Boating', 'Naina Devi Temple', 'Snow View Point Cable Car', 'Bhimtal & Sattal'],
      recommendedHotels: ['The Naini Retreat', 'The Manu Maharani Nainital', 'WelcomHeritage Ashram'],
      famousRestaurants: ['Machan Restaurant Mall Road', 'Embassy Restaurant Nainital', 'Sonam Fast Food (Momos)']
    },
    {
      name: 'Mussoorie',
      slug: 'mussoorie',
      category: 'Queen of the Hills',
      image: '/images/uttarakhand/mussoorie/hero-v3.jpg',
      overview: 'Perched at 2,000m overlooking the Doon Valley and Himalayan peaks, Mussoorie is the colonial "Queen of Hills", featuring the lively Mall Road, 40-ft Kempty Falls, Gun Hill cable car, Cloud\'s End, and author Ruskin Bond\'s hometown Landour.',
      rating: 4.93,
      bestTimeToVisit: 'March – June & October – December',
      shortDesc: 'Colonial "Queen of Hills" featuring Mall Road, Kempty Falls, Gun Hill cable car & Landour.',
      gallery: [
        '/images/uttarakhand/mussoorie/gallery-1-v3.jpg',
        '/images/uttarakhand/mussoorie/gallery-2-v3.jpg',
        '/images/uttarakhand/mussoorie/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kempty Falls', 'Gun Hill', 'Landour Bakehouse', 'Company Garden'],
      recommendedHotels: ['JW Marriott Mussoorie Walnut Grove Resort', 'Welcomhotel The Savoy Mussoorie', 'Rokeby Manor Landour'],
      famousRestaurants: ['Char Dukan Landour', 'Kalsang Friends Cafe', 'Lovely Omelette Centre Mall Road']
    },
    {
      name: 'Jim Corbett National Park',
      slug: 'jim-corbett-park',
      category: 'India\'s First National Park',
      image: '/images/uttarakhand/jim-corbett-park/hero-v3.jpg',
      overview: 'Established in 1936 as Hailey National Park, Jim Corbett in the Himalayan foothills is India\'s oldest national park and cradle of Project Tiger, spanning 520 sq km of dense sal forests along the Ramganga River, famous for Bengal tigers and wild elephant herds.',
      rating: 4.96,
      bestTimeToVisit: 'November – June (Dhikala Zone opens Nov 15)',
      shortDesc: 'India\'s oldest national park (1936) famous for Bengal tiger safaris along Ramganga River.',
      gallery: [
        '/images/uttarakhand/jim-corbett-park/gallery-1-v3.jpg',
        '/images/uttarakhand/jim-corbett-park/gallery-2-v3.jpg',
        '/images/uttarakhand/jim-corbett-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Dhikala Safari Zone', 'Corbett Waterfall', 'Garjiya Devi Temple', 'Corbett Museum Kaladhungi'],
      recommendedHotels: ['Taj Corbett Resort & Spa', 'The Riverwing Corbett', 'Jim\'s Jungle Retreat'],
      famousRestaurants: ['Dhikala Forest Lodge Canteen', 'Le Roi Resort Restaurant', 'Highway Dhabas']
    },
    {
      name: 'Auli Ski Resort',
      slug: 'auli-ski-resort',
      category: 'Premier Himalayan Skiing',
      image: '/images/uttarakhand/auli-ski-resort/hero-v3.jpg',
      overview: 'Situated at 2,800m to 3,050m in Chamoli district, Auli is India\'s premier winter ski destination offering 360-degree panoramic views of Nanda Devi peak (7,816m), artificial snow slopes, and Asia\'s second-longest 4 km cable car from Joshimath.',
      rating: 4.97,
      bestTimeToVisit: 'December – March (for skiing & snow slopes)',
      shortDesc: 'India\'s premier 3,000m ski resort featuring Nanda Devi views and 4 km cable car ride.',
      gallery: [
        '/images/uttarakhand/auli-ski-resort/gallery-1-v3.jpg',
        '/images/uttarakhand/auli-ski-resort/gallery-2-v3.jpg',
        '/images/uttarakhand/auli-ski-resort/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Joshimath Cable Car', 'Auli Artificial Lake', 'Gorson Bugyal Meadow', 'Kuari Pass Trek'],
      recommendedHotels: ['The Clifftop Club Auli', 'GMVN Ski Resort Auli', 'Royal Village Auli'],
      famousRestaurants: ['Clifftop Club Restaurant', 'GMVN Dining Hall', 'Joshimath Local Dhaba']
    },
    {
      name: 'Valley of Flowers National Park',
      slug: 'valley-of-flowers-uk',
      category: 'UNESCO Alpine Meadow',
      image: '/images/uttarakhand/valley-of-flowers-uk/hero-v3.jpg',
      overview: 'A UNESCO World Heritage Site located at 3,600m in the West Himalayas, the Valley of Flowers is a fairytale alpine meadow blanketed in over 500 species of endemic alpine flowers (Brahmakamal, blue poppy), framed by snow peaks and waterfalls.',
      rating: 4.99,
      bestTimeToVisit: 'July – September (Peak blooming season)',
      shortDesc: 'UNESCO World Heritage 3,600m alpine meadow blooming with 500+ species of wild flowers.',
      gallery: [
        '/images/uttarakhand/valley-of-flowers-uk/gallery-1-v3.jpg',
        '/images/uttarakhand/valley-of-flowers-uk/gallery-2-v3.jpg',
        '/images/uttarakhand/valley-of-flowers-uk/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Hemkund Sahib (4,329m Sikh Shrine)', 'Ghangaria Trek Base', 'Pushpawati River'],
      recommendedHotels: ['GMVN Ghangaria', 'Ghangaria Trekker Lodges', 'Joshimath Hotels'],
      famousRestaurants: ['Ghangaria Local Homestay Dining', 'Hemkund Sahib Langar']
    }
  ]
};
