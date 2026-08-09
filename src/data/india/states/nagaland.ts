export interface NagalandPlace {
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

export interface NagalandStateData {
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
  famousPlaces: NagalandPlace[];
}

export const NAGALAND_DATA: NagalandStateData = {
  id: 'nagaland',
  name: 'Nagaland',
  type: 'State',
  capital: 'Kohima',
  tagline: 'Land of Festivals',
  heroImage: '/images/nagaland/kohima/hero-v3.jpg',
  about: 'Nagaland, known as the "Land of Festivals", is a mountainous state in northeastern India famed for 16 major indigenous Naga tribes, the legendary Hornbill Festival at Kisama, Asia\'s first green village at Khonoma, the headhunter lore of Longwa village, and rolling Dzukou Valley landscapes.',
  bestTime: 'October – May (Hornbill Festival in December)',
  climate: 'Subtropical highland climate. Summers (16°C–31°C) are pleasant; winters (4°C–18°C) are cold. Heavy rainfall between May and September.',
  famousFood: ['Smoked Pork with Axone (fermented soybean)', 'Zutho (rice beer)', 'Fish in Bamboo Stems', 'Raja Mircha (Ghost Pepper) chutney', 'Anishi (taro leaf patty)'],
  culture: 'Rich warrior tradition of 16 distinct Naga tribes, Hornbill Festival ("Festival of Festivals"), tribal woodcarving, log drums, colorful tribal shawls, and traditional morung community halls.',
  famousPlaces: [
    {
      name: 'Kohima',
      slug: 'kohima',
      category: 'Hill Capital',
      image: '/images/nagaland/kohima/hero-v3.jpg',
      overview: 'Perched at 1,444m, Kohima is the historic capital of Nagaland famous for the World War II Kohima War Cemetery (Battle of Kohima), Catholic Cathedral on Aradurah Hill, Naga Heritage Complex, and bustling local markets.',
      rating: 4.94,
      bestTimeToVisit: 'October – May (Hornbill Festival Dec 1–10)',
      shortDesc: 'Historic Naga hill capital famous for the WWII War Cemetery and Hornbill Festival grounds.',
      gallery: [
        '/images/nagaland/kohima/gallery-1-v3.jpg',
        '/images/nagaland/kohima/gallery-2-v3.jpg',
        '/images/nagaland/kohima/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kisama Heritage Village', 'Kohima War Cemetery', 'Japfu Peak', 'Khonoma'],
      recommendedHotels: ['Hotel Japfu Kohima', 'The Kohima Heritage Hotel', 'Naga Traditional Homestays'],
      famousRestaurants: ['Dream Cafe Kohima', 'Orami Restaurant', 'Etete Cafe Kohima']
    },
    {
      name: 'Mokokchung',
      slug: 'mokokchung',
      category: 'Ao Naga Cultural Capital',
      image: '/images/nagaland/mokokchung/hero-v3.jpg',
      overview: 'The cultural center of the Ao Naga tribe, Mokokchung sits at 1,325m offering terraced rice fields, ancient Ao villages like Ungma and Chuchuyimlang, traditional Moatsu and Tsungremong festivals, and warm tribal hospitality.',
      rating: 4.91,
      bestTimeToVisit: 'October – May (Moatsu Festival in May)',
      shortDesc: 'Cultural heartland of Ao Nagas featuring ancient villages, terraced fields and Moatsu festival.',
      gallery: [
        '/images/nagaland/mokokchung/gallery-1-v3.jpg',
        '/images/nagaland/mokokchung/gallery-2-v3.jpg',
        '/images/nagaland/mokokchung/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Ungma Village', 'Chuchuyimlang Village', 'Longkhum Village', 'Langpangkong Caves'],
      recommendedHotels: ['Circuit House Mokokchung', 'Mokokchung Tourist Lodge', 'Ao Village Homestays'],
      famousRestaurants: ['Ao Traditional Kitchen', 'Mokokchung Town Diner']
    },
    {
      name: 'Dzukou Valley (Nagaland)',
      slug: 'dzukou-valley-nagaland',
      category: 'Trekking Valley',
      image: '/images/nagaland/dzukou-valley-nagaland/hero-v3.jpg',
      overview: 'Shared between Nagaland and Manipur at 2,452m, Dzukou Valley is a paradise for trekkers featuring rolling bamboo-covered hills, freezing streams, natural caves, and rare endemic flora like the Dzukou Lily.',
      rating: 4.98,
      bestTimeToVisit: 'June – September (flowers) & October – March (clear trekking weather)',
      shortDesc: 'Breathtaking high-altitude valley famous for emerald bamboo hills and Dzukou lilies.',
      gallery: [
        '/images/nagaland/dzukou-valley-nagaland/gallery-1-v3.jpg',
        '/images/nagaland/dzukou-valley-nagaland/gallery-2-v3.jpg',
        '/images/nagaland/dzukou-valley-nagaland/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Japfu Peak (2nd highest in Nagaland)', 'Viswema Village', 'Zakhama Village'],
      recommendedHotels: ['Dzukou Trekking Rest House', 'Viswema Homestays', 'Hotel Japfu Kohima'],
      famousRestaurants: ['Trekker Base Camp Stalls', 'Kohima City Restaurants']
    },
    {
      name: 'Khonoma Green Village',
      slug: 'khonoma',
      category: 'Asia\'s First Green Village',
      image: '/images/nagaland/khonoma/hero-v3.jpg',
      overview: 'Famed as "Asia\'s First Green Village", Khonoma is a 700-year-old Angami Naga village 20 km from Kohima that banned hunting and commercial logging, creating a sanctuary for Blyth\'s tragopan amidst ancient stone forts and terraced fields.',
      rating: 4.96,
      bestTimeToVisit: 'October – May',
      shortDesc: 'Asia\'s first eco-certified green village — 700-year-old Angami settlement with stone forts.',
      gallery: [
        '/images/nagaland/khonoma/gallery-1-v3.jpg',
        '/images/nagaland/khonoma/gallery-2-v3.jpg',
        '/images/nagaland/khonoma/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Khonoma Nature Conservation Reserve', 'Semoma Fort', 'Dzukou Valley Access'],
      recommendedHotels: ['Khonoma Eco Homestays', 'Merü Homestay Khonoma', 'Hotel Japfu Kohima'],
      famousRestaurants: ['Khonoma Village Kitchen', 'Angami Local Food Stalls']
    },
    {
      name: 'Mon & Longwa Village',
      slug: 'mon-longwa',
      category: 'Konyak Naga Tribe Heritage',
      image: '/images/nagaland/mon-longwa/hero-v3.jpg',
      overview: 'Home of the Konyak Naga tribe — historically famous for facial tattoos and headhunting warriors — Mon district features Longwa village, which straddles the India-Myanmar border (the Chief\'s house sits right across the international boundary).',
      rating: 4.95,
      bestTimeToVisit: 'October – April (Aoling Festival in April)',
      shortDesc: 'Konyak Naga headhunter tribe land — Longwa village straddles the India-Myanmar border.',
      gallery: [
        '/images/nagaland/mon-longwa/gallery-1-v3.jpg',
        '/images/nagaland/mon-longwa/gallery-2-v3.jpg',
        '/images/nagaland/mon-longwa/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Longwa Chief\'s Angh House', 'Shangnyu Village', 'Veda Peak'],
      recommendedHotels: ['Mon Tourist Lodge', 'Longwa Konyak Homestays'],
      famousRestaurants: ['Konyak Village Kitchen', 'Mon Town Dhabas']
    },
    {
      name: 'Tuophema Tourist Village',
      slug: 'tuophema',
      category: 'Cultural Village Resort',
      image: '/images/nagaland/tuophema/hero-v3.jpg',
      overview: 'Built by Angami Naga villagers, Tuophema is a cultural model village 41 km from Kohima featuring traditional Naga wooden huts with modern amenities, offering authentic Naga tribal meals, folk songs, and handicraft experiences.',
      rating: 4.89,
      bestTimeToVisit: 'October – May (Sekrenyi Festival in February)',
      shortDesc: 'Angami Naga cultural village resort with traditional wooden huts and Sekrenyi festival celebrations.',
      gallery: [
        '/images/nagaland/tuophema/gallery-1-v3.jpg',
        '/images/nagaland/tuophema/gallery-2-v3.jpg',
        '/images/nagaland/tuophema/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kohima', 'Tseminyu', 'Gariphema Village'],
      recommendedHotels: ['Tuophema Tourist Village Resort', 'Hotel Japfu Kohima'],
      famousRestaurants: ['Tuophema Resort Dining Hall', 'Village Naga Kitchen']
    },
    {
      name: 'Dimapur',
      slug: 'dimapur',
      category: 'Commercial Hub & Ruins',
      image: '/images/nagaland/dimapur/hero-v3.jpg',
      overview: 'The gateway city of Nagaland and its commercial capital, Dimapur is rich in history featuring the 13th-century Kachari Ruins — ancient mushroom-shaped megalithic stone pillars carved by the Kachari kingdom.',
      rating: 4.88,
      bestTimeToVisit: 'October – April',
      shortDesc: 'Gateway city of Nagaland featuring 13th-century Kachari megalithic stone pillar ruins.',
      gallery: [
        '/images/nagaland/dimapur/gallery-1-v3.jpg',
        '/images/nagaland/dimapur/gallery-2-v3.jpg',
        '/images/nagaland/dimapur/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kachari Ruins', 'Triple Falls', 'Dimapur Ao Baptist Church', 'Nagaland Zoological Park'],
      recommendedHotels: ['Niathu Resort Dimapur', 'Hotel Lake Shilloi', 'Hotel Acacia'],
      famousRestaurants: ['Nagameez Restaurant', 'Bambu Hut Dimapur', 'The Chef\'s Kitchen']
    },
    {
      name: 'Kisama Heritage Village',
      slug: 'kisama-heritage-village',
      category: 'Hornbill Festival Ground',
      image: '/images/nagaland/kisama-heritage-village/hero-v3.jpg',
      overview: 'Located 12 km from Kohima, Kisama Heritage Village is the permanent venue for the world-famous Hornbill Festival (Dec 1–10), featuring authentic morungs (tribal dormitories) representing all 16 Naga tribes in a single amphitheater.',
      rating: 4.97,
      bestTimeToVisit: 'December 1–10 (Hornbill Festival) & October – May',
      shortDesc: 'Official venue of the Hornbill Festival featuring authentic morung dormitories of all 16 Naga tribes.',
      gallery: [
        '/images/nagaland/kisama-heritage-village/gallery-1-v3.jpg',
        '/images/nagaland/kisama-heritage-village/gallery-2-v3.jpg',
        '/images/nagaland/kisama-heritage-village/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kohima War Cemetery', 'Japfu Peak', 'Khonoma'],
      recommendedHotels: ['Hotel Japfu Kohima', 'The Kohima Heritage Hotel', 'Kisama Festival Camps'],
      famousRestaurants: ['Hornbill Food Stalls', 'Kisama Naga Food Pavilion']
    }
  ]
};
