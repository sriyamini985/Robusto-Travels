export interface MeghalayaPlace {
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

export interface MeghalayaStateData {
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
  famousPlaces: MeghalayaPlace[];
}

export const MEGHALAYA_DATA: MeghalayaStateData = {
  id: 'meghalaya',
  name: 'Meghalaya',
  type: 'State',
  capital: 'Shillong',
  tagline: 'Abode of Clouds',
  heroImage: '/images/meghalaya/cherrapunji/hero-v3.jpg',
  about: 'Meghalaya, meaning "Abode of Clouds" in Sanskrit, is a spellbinding hill state of misty pine forests, crystal-clear rivers like Dawki, UNESCO bio-engineered double-decker living root bridges, ancient matrilineal Khasi and Garo cultures, and Asia\'s cleanest village, Mawlynnong.',
  bestTime: 'October – April',
  climate: 'Subtropical highland climate with monsoon heavy rains from May to September. Summers (15°C–25°C) are cool and pleasant; winters (4°C–16°C) are chilly.',
  famousFood: ['Jadoh (Khasi rice & meat dish)', 'Dohneiiong (pork with black sesame)', 'Nakham Bitchi', 'Pukhlein', 'Tungrymbai', 'Pumaloi'],
  culture: 'Unique matrilineal social system among Khasi, Jaintia, and Garo tribes where lineage and inheritance pass through women. Famous for Shad Suk Mynsiem dance and Nongkrem dance festivals.',
  famousPlaces: [
    {
      name: 'Cherrapunji (Sohra)',
      slug: 'cherrapunji',
      category: 'Wetland & Waterfalls',
      image: '/images/meghalaya/cherrapunji/hero-v3.jpg',
      overview: 'Historically famous as the wettest place on Earth, Cherrapunji (Sohra) sits on a high plateau overlooking Bangladesh plains, famous for dramatic plunging waterfalls like Seven Sisters Falls, Mawsmai Caves, and lush cloud forests.',
      rating: 4.97,
      bestTimeToVisit: 'October – April (monsoon Jul–Sep for roaring waterfalls)',
      shortDesc: 'World\'s famous rainfall plateau featuring Seven Sisters Falls and limestone Mawsmai Caves.',
      gallery: [
        '/images/meghalaya/cherrapunji/gallery-1-v3.jpg',
        '/images/meghalaya/cherrapunji/gallery-2-v3.jpg',
        '/images/meghalaya/cherrapunji/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Seven Sisters Falls', 'Mawsmai Cave', 'Eco Park', 'Dainthlen Falls'],
      recommendedHotels: ['Polo Orchid Resort Cherrapunji', 'JJS Resort', 'Sohra Plaza'],
      famousRestaurants: ['Sky Grill Polo Orchid', 'Sohra Plaza Restaurant', 'Orange Roots Vegetarian']
    },
    {
      name: 'Dawki & Umngot River',
      slug: 'dawki',
      category: 'Crystal Waters',
      image: '/images/meghalaya/dawki/hero-v3.jpg',
      overview: 'Bordering Bangladesh, Dawki is home to the Umngot River — famous worldwide for water so extraordinarily clear that boats appear to float in mid-air above the riverbed, offering surreal kayaking and boating experiences.',
      rating: 4.98,
      bestTimeToVisit: 'November – April (clearest water)',
      shortDesc: 'World-famous crystal-clear Umngot River where wooden boats appear floating in mid-air.',
      gallery: [
        '/images/meghalaya/dawki/gallery-1-v3.jpg',
        '/images/meghalaya/dawki/gallery-2-v3.jpg',
        '/images/meghalaya/dawki/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Jaflong Zero Point', 'Shnongpdeng Village', 'Mawlynnong', 'Tamabil Border'],
      recommendedHotels: ['Shnongpdeng Riverside Camps', 'Dawki Homestays', 'Polo Towers Shillong'],
      famousRestaurants: ['Dawki Riverside Eatery', 'Shnongpdeng Camp Kitchen']
    },
    {
      name: 'Mawlynnong Village',
      slug: 'mawlynnong',
      category: 'Eco Village',
      image: '/images/meghalaya/mawlynnong/hero-v3.jpg',
      overview: 'Awarded "Asia\'s Cleanest Village", Mawlynnong is a pristine Khasi eco-village where every street is lined with flower gardens, bamboo dustbins, thatched cottages, and a 85-foot bamboo Sky Walk treehouse overlooking Bangladesh.',
      rating: 4.92,
      bestTimeToVisit: 'October – April',
      shortDesc: '"Asia\'s Cleanest Village" — pristine Khasi eco-village with flower gardens and bamboo skywalks.',
      gallery: [
        '/images/meghalaya/mawlynnong/gallery-1-v3.jpg',
        '/images/meghalaya/mawlynnong/gallery-2-v3.jpg',
        '/images/meghalaya/mawlynnong/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Riwai Living Root Bridge', 'Sky Walk Treehouse', 'Balancing Rock', 'Dawki'],
      recommendedHotels: ['Mawlynnong Eco Homestays', 'Halatong Homestay', 'Polo Orchid Cherrapunji'],
      famousRestaurants: ['Mawlynnong Village Cafe', 'Khasi Local Food Stalls']
    },
    {
      name: 'Shillong — Scotland of the East',
      slug: 'shillong',
      category: 'Hill Station Capital',
      image: '/images/meghalaya/shillong/hero-v3.jpg',
      overview: 'The capital of Meghalaya, Shillong is a vibrant hill city set amidst pine-clad hills, featuring Ward\'s Lake, Shillong Peak, Don Bosco Centre for Indigenous Cultures, a thriving indie rock music scene, and bustling Police Bazar.',
      rating: 4.91,
      bestTimeToVisit: 'October – April (Cherry Blossom Festival in November)',
      shortDesc: '"Scotland of the East" — pine-forested hill capital famous for indie rock, lakes and cafes.',
      gallery: [
        '/images/meghalaya/shillong/gallery-1-v3.jpg',
        '/images/meghalaya/shillong/gallery-2-v3.jpg',
        '/images/meghalaya/shillong/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Ward\'s Lake', 'Shillong Peak', 'Police Bazar', 'Don Bosco Museum'],
      recommendedHotels: ['Hotel Polo Towers Shillong', 'Ri Kynjai Resort Umiam', 'Heritage Club Tripura Castle'],
      famousRestaurants: ['Dylan\'s Cafe', 'City Hut Family Dhaba', 'The Heritage Club Dining']
    },
    {
      name: 'Nongriat Living Root Bridges',
      slug: 'living-root-bridges',
      category: 'UNESCO Eco Architecture',
      image: '/images/meghalaya/living-root-bridges/hero-v3.jpg',
      overview: 'Hand-woven over generations by Khasi villagers using living aerial roots of rubber fig trees (Ficus elastica), the famous Umshiang Double Decker Living Root Bridge in Nongriat is a bio-engineering marvel growing stronger over centuries.',
      rating: 4.99,
      bestTimeToVisit: 'October – April',
      shortDesc: 'Century-old double-decker living root bridge bio-engineered from rubber tree roots by Khasi tribes.',
      gallery: [
        '/images/meghalaya/living-root-bridges/gallery-1-v3.jpg',
        '/images/meghalaya/living-root-bridges/gallery-2-v3.jpg',
        '/images/meghalaya/living-root-bridges/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Rainbow Falls Nongriat', 'Tyrna Village Trek', 'Sohra'],
      recommendedHotels: ['Nongriat Village Homestays', 'Serene Homestay Nongriat', 'Polo Orchid Resort'],
      famousRestaurants: ['Nongriat Local Kitchen', 'Tyrna Trekking Stalls']
    },
    {
      name: 'Nohkalikai Falls',
      slug: 'nohkalikai-falls',
      category: 'Plunge Waterfall',
      image: '/images/meghalaya/nohkalikai-falls/hero-v3.jpg',
      overview: 'Plunging 340 meters (1,115 feet) in a single sheer drop into a turquoise plunge pool, Nohkalikai Falls near Cherrapunji is India\'s highest plunge waterfall, set against dramatic cliff amphitheaters.',
      rating: 4.96,
      bestTimeToVisit: 'October – April (Monsoon Jul–Sep for massive water volume)',
      shortDesc: 'India\'s highest single plunge waterfall dropping 340m into a vibrant turquoise pool.',
      gallery: [
        '/images/meghalaya/nohkalikai-falls/gallery-1-v3.jpg',
        '/images/meghalaya/nohkalikai-falls/gallery-2-v3.jpg',
        '/images/meghalaya/nohkalikai-falls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Mawsmai Cave', 'Seven Sisters Falls', 'Dainthlen Falls'],
      recommendedHotels: ['Polo Orchid Resort Cherrapunji', 'Sohra Plaza', 'Coniferous Resort'],
      famousRestaurants: ['Nohkalikai Viewpoint Cafe', 'Sohra Local Dhabas']
    },
    {
      name: 'Elephant Falls',
      slug: 'elephant-falls',
      category: 'Cascade Waterfall',
      image: '/images/meghalaya/elephant-falls/hero-v3.jpg',
      overview: 'Located 12 km from Shillong, Elephant Falls is a picturesque three-tiered cascade surrounded by lush fern forests, named by British officers after an elephant-shaped rock near the main drop.',
      rating: 4.88,
      bestTimeToVisit: 'October – April',
      shortDesc: 'Popular three-tiered cascading waterfall surrounded by fern forests near Shillong.',
      gallery: [
        '/images/meghalaya/elephant-falls/gallery-1-v3.jpg',
        '/images/meghalaya/elephant-falls/gallery-2-v3.jpg',
        '/images/meghalaya/elephant-falls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Shillong Peak', 'Mattilang Park', 'Upper Shillong Tea Garden'],
      recommendedHotels: ['Hotel Polo Towers Shillong', 'Ri Kynjai Resort'],
      famousRestaurants: ['Elephant Falls View Stalls', 'Police Bazar Restaurants']
    },
    {
      name: 'Balpakram National Park',
      slug: 'balpakram-national-park',
      category: 'Wildlife Canyon',
      image: '/images/meghalaya/balpakram-national-park/hero-v3.jpg',
      overview: 'Often called the "Land of Perpetual Winds", Balpakram in the South Garo Hills is a sacred 3,000m canyon plateau home to rare red pandas, Asian elephants, marbled cats, pitcher plants, and deep Garo mythology.',
      rating: 4.90,
      bestTimeToVisit: 'November – March',
      shortDesc: '"Land of Perpetual Winds" — sacred Garo canyon plateau sheltering red pandas and Asian elephants.',
      gallery: [
        '/images/meghalaya/balpakram-national-park/gallery-1-v3.jpg',
        '/images/meghalaya/balpakram-national-park/gallery-2-v3.jpg',
        '/images/meghalaya/balpakram-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Boldak Matchakol', 'Chutmang Peak', 'Siju Cave (Bat Cave)'],
      recommendedHotels: ['Baghmara Forest Rest House', 'Tura Tourist Lodge'],
      famousRestaurants: ['Forest Canteen Baghmara', 'Garo Local Eateries Tura']
    }
  ]
};
