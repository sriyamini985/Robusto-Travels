export interface SikkimPlace {
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

export interface SikkimStateData {
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
  famousPlaces: SikkimPlace[];
}

export const SIKKIM_DATA: SikkimStateData = {
  id: 'sikkim',
  name: 'Sikkim',
  type: 'State',
  capital: 'Gangtok',
  tagline: 'Small with Big Heart',
  heroImage: '/images/sikkim/gangtok/hero-v3.jpg',
  about: 'Sikkim, nestled in the Eastern Himalayas beneath Mount Kanchenjunga (world\'s 3rd highest peak at 8,586m), is India\'s first 100% organic state — renowned for sacred high-altitude lakes like Gurudongmar, rhododendron-filled Yumthang Valley, historic Silk Route at Nathula Pass, and peaceful Buddhist monasteries.',
  bestTime: 'March – May & October – December',
  climate: 'Subtropical to alpine climate. Pleasant summers (10°C–20°C), freezing winters (-5°C–10°C with snowfall at high altitudes), and heavy monsoons from June to September. Best visited March–May and Oct–Dec.',
  famousFood: ['Momo (dumplings)', 'Thukpa (noodle soup)', 'Phagshapa (pork fat & radish dish)', 'Sha Phaley', 'Gundruk soup', 'Chhurpi (yak cheese)', 'Tongba (millet beer)'],
  culture: 'Rich fusion of Bhutia, Lepcha, and Nepalese traditions, colorful Cham mask dances, Losar (Tibetan New Year), Saga Dawa festival, prayer wheels, and intricate Thangka scroll paintings.',
  famousPlaces: [
    {
      name: 'Gangtok & Rumtek Monastery',
      slug: 'gangtok',
      category: 'Himalayan Capital',
      image: '/images/sikkim/gangtok/hero-v3.jpg',
      overview: 'Perched on a cloud-draped mountain ridge at 1,650m, Gangtok is the clean, organic capital of Sikkim, offering stunning views of Mount Kanchenjunga, vibrant MG Marg pedestrian promenade, and the grand 16th-century Rumtek Monastery.',
      rating: 4.96,
      bestTimeToVisit: 'March – May & October – December',
      shortDesc: 'Organic Himalayan capital featuring MG Marg promenade, Rumtek Monastery and Kanchenjunga views.',
      gallery: [
        '/images/sikkim/gangtok/gallery-1-v3.jpg',
        '/images/sikkim/gangtok/gallery-2-v3.jpg',
        '/images/sikkim/gangtok/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['MG Marg', 'Rumtek Monastery', 'Tashi Viewpoint', 'Ganesh Tok'],
      recommendedHotels: ['Mayfair Spa Resort & Casino Gangtok', 'The Elgin Nor-Khill', 'Ramada by Wyndham Gangtok'],
      famousRestaurants: ['Taste of Tibet MG Marg', 'The Square Gangtok', 'Nimtho Organic Restaurant']
    },
    {
      name: 'Tsomgo Lake & Nathula Pass',
      slug: 'tsomgo-nathula',
      category: 'Glacial Lake & Indo-China Border',
      image: '/images/sikkim/tsomgo-nathula/hero-v3.jpg',
      overview: 'Located at 3,753m just 40 km from Gangtok, sacred Tsomgo (Changu) Lake is a breathtaking glacial lake that freezes solid in winter, leading up to Nathula Pass (4,310m) on the ancient Silk Route border with China.',
      rating: 4.98,
      bestTimeToVisit: 'March – May & October – December',
      shortDesc: 'Sacred 3,753m glacial lake and high-altitude Nathula Pass on the historic Silk Route.',
      gallery: [
        '/images/sikkim/tsomgo-nathula/gallery-1-v3.jpg',
        '/images/sikkim/tsomgo-nathula/gallery-2-v3.jpg',
        '/images/sikkim/tsomgo-nathula/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Baba Harbhajan Singh Mandir', 'Kyongnosla Alpine Sanctuary', 'Gangtok'],
      recommendedHotels: ['Mayfair Spa Resort Gangtok', 'The Elgin Nor-Khill'],
      famousRestaurants: ['Tsomgo Lake Yak Ride Stalls', 'Nathula Canteen']
    },
    {
      name: 'Pelling & Pemayangtse Monastery',
      slug: 'pelling',
      category: 'Panoramic Peak Views',
      image: '/images/sikkim/pelling/hero-v3.jpg',
      overview: 'Nestled at 2,150m in West Sikkim, Pelling offers the closest unobstructed views of Mount Kanchenjunga, featuring the 300-year-old Pemayangtse Monastery, Skywalk glass bridge, Rabdentse Palace ruins, and Khecheopalri sacred lake.',
      rating: 4.95,
      bestTimeToVisit: 'March – May & October – December',
      shortDesc: 'West Sikkim hill town offering closest views of Kanchenjunga and Pemayangtse Monastery.',
      gallery: [
        '/images/sikkim/pelling/gallery-1-v3.jpg',
        '/images/sikkim/pelling/gallery-2-v3.jpg',
        '/images/sikkim/pelling/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Pelling Skywalk', 'Pemayangtse Monastery', 'Rabdentse Ruins', 'Khecheopalri Lake'],
      recommendedHotels: ['The Elgin Mount Pandim Pelling', 'Chalet Pelling', 'Sikkim Tourist Lodge'],
      famousRestaurants: ['Melting Point Pelling', 'Sikkimese Traditional Kitchen']
    },
    {
      name: 'Yumthang Valley of Flowers',
      slug: 'yumthang-valley',
      category: 'Rhododendron Sanctuary',
      image: '/images/sikkim/yumthang-valley/hero-v3.jpg',
      overview: 'Situated at 3,564m in North Sikkim, Yumthang is the "Valley of Flowers" — a sanctuary of 24 species of wild rhododendrons, snow-capped alpine peaks, thermal hot springs, grazing yaks, and Zero Point (15,300 ft).',
      rating: 4.97,
      bestTimeToVisit: 'April – June (for blooming rhododendrons) & October – December',
      shortDesc: 'High-altitude 3,564m "Valley of Flowers" blooming with 24 wild rhododendron species.',
      gallery: [
        '/images/sikkim/yumthang-valley/gallery-1-v3.jpg',
        '/images/sikkim/yumthang-valley/gallery-2-v3.jpg',
        '/images/sikkim/yumthang-valley/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Zero Point (Yumesamdong)', 'Yumthang Hot Springs', 'Shingba Rhododendron Sanctuary', 'Lachung'],
      recommendedHotels: ['Apple Valley Inn Lachung', 'Yumthang Resort', 'Lachung Heritage Lodge'],
      famousRestaurants: ['Lachung Local Homestay Dining', 'Zero Point Maggi Stalls']
    },
    {
      name: 'Gurudongmar Lake',
      slug: 'gurudongmar-lake',
      category: 'Sacred High-Altitude Lake',
      image: '/images/sikkim/gurudongmar-lake/hero-v3.jpg',
      overview: 'Perched at a dizzying 5,430 meters (17,800 feet) in North Sikkim near the Tibetan border, Gurudongmar is one of the highest lakes in the world, sacred to Buddhists, Sikhs, and Hindus, remaining partially unfrozen even in sub-zero winters.',
      rating: 4.99,
      bestTimeToVisit: 'October – November & April – May',
      shortDesc: 'One of the world\'s highest sacred lakes at 17,800 ft (5,430m) near the Tibetan plateau.',
      gallery: [
        '/images/sikkim/gurudongmar-lake/gallery-1-v3.jpg',
        '/images/sikkim/gurudongmar-lake/gallery-2-v3.jpg',
        '/images/sikkim/gurudongmar-lake/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Lachen', 'Chopta Valley', 'Thangu Valley'],
      recommendedHotels: ['Lachen Heritage Homestay', 'Hotel Apple Orchard Lachen'],
      famousRestaurants: ['Lachen Homestay Kitchen', 'Thangu Army Canteen']
    },
    {
      name: 'Ravangla & Buddha Park',
      slug: 'ravangla',
      category: 'Monastic & Spiritual Park',
      image: '/images/sikkim/ravangla/hero-v3.jpg',
      overview: 'Located at 2,130m in South Sikkim, Ravangla is famous for the Tathagata Tsal (Buddha Park) featuring a magnificent 130-foot golden statue of Lord Buddha set against panoramic Kanchenjunga mountain backdrops.',
      rating: 4.92,
      bestTimeToVisit: 'March – May & October – December',
      shortDesc: 'Scenic South Sikkim town featuring the 130-foot golden Buddha statue at Tathagata Tsal.',
      gallery: [
        '/images/sikkim/ravangla/gallery-1-v3.jpg',
        '/images/sikkim/ravangla/gallery-2-v3.jpg',
        '/images/sikkim/ravangla/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Buddha Park', 'Ralang Monastery', 'Maenam Wildlife Sanctuary', 'Temi Tea Garden'],
      recommendedHotels: ['Mt. Narsing Village Resort', 'Wild Flower Retreat Ravangla'],
      famousRestaurants: ['Buddha Park Cafe', 'Ravangla Local Eateries']
    },
    {
      name: 'Lachung',
      slug: 'lachung',
      category: 'Alpine Village',
      image: '/images/sikkim/lachung/hero-v3.jpg',
      overview: 'A picturesque mountain village at 2,700m in North Sikkim on the banks of the Lachung River, serving as the gateway to Yumthang Valley, featuring traditional Bhutia wooden houses, apple orchards, and 19th-century Lachung Monastery.',
      rating: 4.91,
      bestTimeToVisit: 'October – May',
      shortDesc: 'Picturesque 2,700m North Sikkim mountain village, gateway to Yumthang Valley.',
      gallery: [
        '/images/sikkim/lachung/gallery-1-v3.jpg',
        '/images/sikkim/lachung/gallery-2-v3.jpg',
        '/images/sikkim/lachung/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Yumthang Valley', 'Lachung Monastery', 'Catao Snow Point'],
      recommendedHotels: ['Apple Valley Inn Lachung', 'Magpie Resort Lachung'],
      famousRestaurants: ['Lachung Village Homestay Dining']
    },
    {
      name: 'Yuksom',
      slug: 'yuksom',
      category: 'First Capital & Trek Base',
      image: '/images/sikkim/yuksom/hero-v3.jpg',
      overview: 'The first capital of Sikkim established in 1642 where the first Chogyal monarch was crowned, Yuksom is the sacred base camp for the legendary Goechala Trek towards Kanchenjunga, home to Norbugang Coronation Throne and Dubdi Monastery.',
      rating: 4.90,
      bestTimeToVisit: 'March – May & October – November',
      shortDesc: 'First capital of Sikkim (1642) and base camp for the famous Goechala Kanchenjunga trek.',
      gallery: [
        '/images/sikkim/yuksom/gallery-1-v3.jpg',
        '/images/sikkim/yuksom/gallery-2-v3.jpg',
        '/images/sikkim/yuksom/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Norbugang Coronation Throne', 'Dubdi Monastery', 'Kathok Lake', 'Goechala Trek Trail'],
      recommendedHotels: ['Hotel Red Palace Yuksom', 'Yuksom Trekker Homestays'],
      famousRestaurants: ['Gupta Restaurant Yuksom', 'Trekker Base Cafe']
    }
  ]
};
