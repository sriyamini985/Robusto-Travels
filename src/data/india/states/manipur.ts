export interface ManipurPlace {
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

export interface ManipurStateData {
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
  famousPlaces: ManipurPlace[];
}

export const MANIPUR_DATA: ManipurStateData = {
  id: 'manipur',
  name: 'Manipur',
  type: 'State',
  capital: 'Imphal',
  tagline: 'Jewel of India',
  heroImage: '/images/manipur/loktak-lake/hero-v3.jpg',
  about: 'Manipur, dubbed the "Jewel of India" by Jawaharlal Nehru, is a serene northeastern state renowned for Loktak Lake — South Asia\'s largest freshwater lake with floating phumdis — Keibul Lamjao, the world\'s only floating national park, classical Manipuri Raas Leela dance, and rich martial traditions.',
  bestTime: 'October – April',
  climate: 'Subtropical highland climate. Pleasant summers (15°C–28°C), cool winters (4°C–18°C), and heavy monsoon rains from May to September. Best visited October to April.',
  famousFood: ['Eromba', 'Singju', 'Kangshoi', 'Chak-Hao Kheer (black rice pudding)', 'Nga-Thongba (fish curry)', 'Chamthong', 'Morok Metpa'],
  culture: 'Famed for classical Manipuri Jagoi dance, Sagol Kangjei (ancient form of polo born in Manipur), Lai Haraoba festival, Yaoshang (Manipuri Holi), and exquisite handloom weaving of Inaaphi shawls.',
  famousPlaces: [
    {
      name: 'Loktak Lake & Keibul Lamjao',
      slug: 'loktak-lake',
      category: 'Natural Wonder',
      image: '/images/manipur/loktak-lake/hero-v3.jpg',
      overview: 'The largest freshwater lake in Northeast India, Loktak is world-famous for its phumdis — floating heterogeneous masses of vegetation, soil and organic matter — and Keibul Lamjao National Park, the world\'s only floating national park and last sanctuary of the endangered Sangai brow-antlered deer.',
      rating: 4.97,
      bestTimeToVisit: 'October – April',
      shortDesc: 'Largest freshwater lake in NE India featuring floating phumdis and the world\'s only floating national park.',
      gallery: [
        '/images/manipur/loktak-lake/gallery-1-v3.jpg',
        '/images/manipur/loktak-lake/gallery-2-v3.jpg',
        '/images/manipur/loktak-lake/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Sendra Island', 'INRA Museum Moirang', 'Keibul Lamjao Sanctuary', 'Karang Island'],
      recommendedHotels: ['Sendra Cottages Classic', 'Classic Grande Imphal', 'Hotel Imphal'],
      famousRestaurants: ['Sendra Resort Restaurant', 'Luxmi Kitchen Imphal', 'Chak-Hao Cafe']
    },
    {
      name: 'Kangla Fort',
      slug: 'kangla-fort',
      category: 'Historical Citadel',
      image: '/images/manipur/kangla-fort/hero-v3.jpg',
      overview: 'The ancient seat of Meitei rulers on the banks of the Imphal River, Kangla Fort is the historical and spiritual heart of Manipur featuring ancient royal palaces, temples of Lord Pakhangba, coronation halls and sacred moats.',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Ancient royal seat of Meitei kings with Pakhangba temple and sacred coronation halls.',
      gallery: [
        '/images/manipur/kangla-fort/gallery-1-v3.jpg',
        '/images/manipur/kangla-fort/gallery-2-v3.jpg',
        '/images/manipur/kangla-fort/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Ima Keithel Market', 'Imphal War Cemetery', 'Manipur State Museum'],
      recommendedHotels: ['Classic Grande Imphal', 'Hotel Yaiphaba', 'The Classic Hotel Imphal'],
      famousRestaurants: ['Chanakya Restaurant Imphal', 'Khabeisana Restaurant', 'Nungshiba Cafe']
    },
    {
      name: 'Imphal & Ima Keithel',
      slug: 'imphal',
      category: 'Cultural Capital',
      image: '/images/manipur/imphal/hero-v3.jpg',
      overview: 'Imphal, the capital of Manipur, is home to Ima Keithel (Mother\'s Market) — a 500-year-old market run entirely by over 5,000 women traders, making it the largest all-women market in Asia alongside World War II war cemeteries.',
      rating: 4.91,
      bestTimeToVisit: 'October – April',
      shortDesc: 'State capital featuring Asia\'s largest 500-year-old all-women market (Ima Keithel).',
      gallery: [
        '/images/manipur/imphal/gallery-1-v3.jpg',
        '/images/manipur/imphal/gallery-2-v3.jpg',
        '/images/manipur/imphal/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Ima Keithel Market', 'Imphal War Cemetery', 'Kangla Fort', 'Mapal Kangjeibung Polo Ground'],
      recommendedHotels: ['Classic Grande', 'Hotel Yaiphaba', 'Hotel Bheigo'],
      famousRestaurants: ['Luxmi Kitchen', 'Rainbow Restaurant', 'Preet Hotel Restaurant']
    },
    {
      name: 'Dzukou Valley',
      slug: 'dzukou-valley',
      category: 'Trekking & Valley',
      image: '/images/manipur/dzukou-valley/hero-v3.jpg',
      overview: 'Straddling the Manipur-Nagaland border at 2,452m, Dzukou Valley is dubbed the "Valley of Flowers of the North East", famous for rolling emerald hills, meandering streams, and the endemic seasonal Dzukou lily.',
      rating: 4.96,
      bestTimeToVisit: 'June – September (for flowers) & October – March (clear skies)',
      shortDesc: 'High-altitude emerald valley on the border famous for rare Dzukou lilies and trekking.',
      gallery: [
        '/images/manipur/dzukou-valley/gallery-1-v3.jpg',
        '/images/manipur/dzukou-valley/gallery-2-v3.jpg',
        '/images/manipur/dzukou-valley/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Mao Gate', 'Senapati Hill Station', 'Kohima'],
      recommendedHotels: ['Trekkers Rest House Dzukou', 'Classic Grande Imphal', 'Mao Tourist Lodge'],
      famousRestaurants: ['Mao Highway Dhabas', 'Base Camp Kitchen']
    },
    {
      name: 'Kakching Garden',
      slug: 'kakching',
      category: 'Garden & Viewpoint',
      image: '/images/manipur/kakching/hero-v3.jpg',
      overview: 'Situated atop Uyok Hill, Kakching Garden is a beautifully landscaped hilltop park featuring statutes of traditional Manipuri dance forms, Mahadev temple, rose gardens, and sweeping vistas over Kakching town.',
      rating: 4.88,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Scenic hilltop park on Uyok Hill featuring cultural statues and panoramic town views.',
      gallery: [
        '/images/manipur/kakching/gallery-1-v3.jpg',
        '/images/manipur/kakching/gallery-2-v3.jpg',
        '/images/manipur/kakching/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kakching Town', 'Thoubal River', 'Thoubal Market'],
      recommendedHotels: ['Hotel Yaiphaba Imphal', 'Classic Grande Imphal'],
      famousRestaurants: ['Kakching Hilltop Cafe', 'Local Manipuri Eateries']
    },
    {
      name: 'Singda Dam',
      slug: 'singda-dam',
      category: 'Scenic Lake',
      image: '/images/manipur/singda-dam/hero-v3.jpg',
      overview: 'Located 16 km from Imphal at an altitude of 921m, Singda is the world\'s highest mud dam, nestled amidst pine forests and green hills, offering a serene lake reservoir for picnics and peaceful retreats.',
      rating: 4.87,
      bestTimeToVisit: 'October – April',
      shortDesc: 'World\'s highest mud dam set amidst serene pine hills and lake reservoir 16 km from Imphal.',
      gallery: [
        '/images/manipur/singda-dam/gallery-1-v3.jpg',
        '/images/manipur/singda-dam/gallery-2-v3.jpg',
        '/images/manipur/singda-dam/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kangchup Hills', 'Imphal', 'Leimakhong'],
      recommendedHotels: ['Classic Grande Imphal', 'Hotel Yaiphaba Imphal'],
      famousRestaurants: ['Singda Lake View Stalls', 'Imphal City Restaurants']
    },
    {
      name: 'Ukhrul Hills',
      slug: 'ukhrul',
      category: 'Hill Station',
      image: '/images/manipur/ukhrul/hero-v3.jpg',
      overview: 'Home to the Tangkhul Naga tribe, Ukhrul is a picturesque hill station famous for the Shirui Lily (Shirui Kashung peak) — the state flower found nowhere else in the world — Khangkhui limestone caves and rich tribal heritage.',
      rating: 4.92,
      bestTimeToVisit: 'May – June (Shirui Lily season) & October – March',
      shortDesc: 'Picturesque Tangkhul Naga hill station home to the world\'s unique endemic Shirui Lily.',
      gallery: [
        '/images/manipur/ukhrul/gallery-1-v3.jpg',
        '/images/manipur/ukhrul/gallery-2-v3.jpg',
        '/images/manipur/ukhrul/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Shirui Kashung Peak', 'Khangkhui Mangsor Cave', 'Nillai Tea Estate'],
      recommendedHotels: ['Ukhrul Homestays', 'Tangkhul Heritage Lodge', 'Classic Grande Imphal'],
      famousRestaurants: ['Shirui Village Eatery', 'Ukhrul Town Dhabas']
    },
    {
      name: 'Senapati',
      slug: 'senapati',
      category: 'Nature & Rivers',
      image: '/images/manipur/senapati/hero-v3.jpg',
      overview: 'A scenic district endowed with emerald hills, cascading waterfalls, and terraced rice fields, Senapati is a haven for offbeat travelers featuring Purul village, Mao hill town, and Dzüko valley access points.',
      rating: 4.89,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Scenic northern district of terraced rice fields, Mao hill town and cascading waterfalls.',
      gallery: [
        '/images/manipur/senapati/gallery-1-v3.jpg',
        '/images/manipur/senapati/gallery-2-v3.jpg',
        '/images/manipur/senapati/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Mao Market', 'Purul Village', 'Yangkhullen Stone Village'],
      recommendedHotels: ['Senapati Tourist Lodge', 'Mao Homestays'],
      famousRestaurants: ['Highway Stalls Senapati', 'Purul Village Kitchen']
    }
  ]
};
