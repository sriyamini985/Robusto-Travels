export interface JharkhandPlace {
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

export interface JharkhandStateData {
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
  famousPlaces: JharkhandPlace[];
}

export const JHARKHAND_DATA: JharkhandStateData = {
  id: 'jharkhand',
  name: 'Jharkhand',
  type: 'State',
  capital: 'Ranchi',
  tagline: 'Land of Forests, Falls & Tribal Heritage',
  heroImage: '/images/jharkhand/hundru-falls/hero-v3.jpg',
  about: 'Jharkhand is a mineral-rich state in eastern India carved from Bihar in 2000, celebrated for its thundering waterfalls, dense sal forests, ancient Jain pilgrimage peaks, sacred Shiva shrines, and vibrant Adivasi tribal cultures.',
  bestTime: 'October – March',
  climate: 'Humid subtropical climate. Summers hot (35°C–40°C), winters mild (5°C–20°C), heavy monsoon July–September which makes waterfalls spectacular.',
  famousFood: ['Dhuska (rice-lentil fritters)', 'Litti Chokha', 'Rugra (mushroom curry)', 'Malpua', 'Handia (rice beer)', 'Pittha'],
  culture: 'Rich Adivasi heritage of Santali, Mundari and Ho peoples with vibrant Sohrai and Khovar wall art, Chhau masked dance, Karma festival and colourful tribal fairs.',
  famousPlaces: [
    {
      name: 'Hundru Falls',
      slug: 'hundru-falls',
      category: 'Waterfall',
      image: '/images/jharkhand/hundru-falls/hero-v3.jpg',
      overview: 'One of the most spectacular waterfalls in Jharkhand, Hundru Falls drops 98 meters over a rocky cliff on the Subarnarekha River, creating a mist-shrouded natural pool ideal for swimming surrounded by dense forest.',
      rating: 4.93,
      bestTimeToVisit: 'July – October (peak monsoon flow)',
      shortDesc: '98-metre waterfall on Subarnarekha River — the crown jewel of Jharkhand.',
      gallery: [
        '/images/jharkhand/hundru-falls/gallery-1-v3.jpg',
        '/images/jharkhand/hundru-falls/gallery-2-v3.jpg',
        '/images/jharkhand/hundru-falls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Jonha Falls', 'Dassam Falls', 'Rock Garden Ranchi'],
      recommendedHotels: ['Hotel BNR Chanakya Ranchi', 'The Capitol Hill Ranchi', 'Hotel Yuvraj Palace'],
      famousRestaurants: ['Kaveri Restaurant Ranchi', 'Saffron Restaurant', 'Hotel Ashok Dhaba']
    },
    {
      name: 'Betla National Park',
      slug: 'betla-national-park',
      category: 'National Park',
      image: '/images/jharkhand/betla-national-park/hero-v3.jpg',
      overview: 'One of the first national parks in India to have Project Tiger, Betla spans 1,135 sq km of sal forest in the Palamau district, sheltering tigers, elephants, leopards, gaurs and over 174 bird species in pristine wilderness.',
      rating: 4.91,
      bestTimeToVisit: 'November – June (best wildlife sightings)',
      shortDesc: 'Project Tiger reserve sheltering tigers, elephants and 174 bird species.',
      gallery: [
        '/images/jharkhand/betla-national-park/gallery-1-v3.jpg',
        '/images/jharkhand/betla-national-park/gallery-2-v3.jpg',
        '/images/jharkhand/betla-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Palamau Fort', 'Netarhat', 'Lodh Falls'],
      recommendedHotels: ['Van Vihar Tourist Complex Betla', 'JHDO Forest Rest House', 'Hotel Palamau'],
      famousRestaurants: ['Forest Department Canteen Betla', 'Daltonganj Dhaba']
    },
    {
      name: 'Baidyanath Temple, Deoghar',
      slug: 'deoghar-baidyanath',
      category: 'Spiritual Shrine',
      image: '/images/jharkhand/deoghar-baidyanath/hero-v3.jpg',
      overview: 'One of the twelve sacred Jyotirlingas of Lord Shiva, the Baidyanath Temple complex in Deoghar draws millions of pilgrims year-round, especially during Shravan month when devotees carry holy Ganga water on foot from Sultanganj.',
      rating: 4.97,
      bestTimeToVisit: 'July – August (Shravan Mela) & October – March',
      shortDesc: 'One of the 12 sacred Jyotirlingas — millions of Shiva pilgrims each year.',
      gallery: [
        '/images/jharkhand/deoghar-baidyanath/gallery-1-v3.jpg',
        '/images/jharkhand/deoghar-baidyanath/gallery-2-v3.jpg',
        '/images/jharkhand/deoghar-baidyanath/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Nandan Pahar', 'Trikuta Hills', 'Satsang Ashram Deoghar'],
      recommendedHotels: ['Hotel Amrapali Deoghar', 'Hotel Chandralok', 'JHDO Tourist Lodge Deoghar'],
      famousRestaurants: ['Halwai Street Deoghar', 'Punjabi Dhaba Deoghar', 'Temple Prasad Stalls']
    },
    {
      name: 'Jagannath Temple, Ranchi',
      slug: 'jagannath-temple-ranchi',
      category: 'Temple Heritage',
      image: '/images/jharkhand/jagannath-temple-ranchi/hero-v3.jpg',
      overview: 'Built in the 17th century by Raja Ani Nath Shahdeo, this magnificent temple atop Ranchi Hill is modelled on the famous Puri Jagannath temple and hosts a grand Rath Yatra chariot festival that rivals Puri in local fervour.',
      rating: 4.89,
      bestTimeToVisit: 'October – March (Rath Yatra in July)',
      shortDesc: '17th-century hilltop temple modelled on Puri, with a grand Rath Yatra.',
      gallery: [
        '/images/jharkhand/jagannath-temple-ranchi/gallery-1-v3.jpg',
        '/images/jharkhand/jagannath-temple-ranchi/gallery-2-v3.jpg',
        '/images/jharkhand/jagannath-temple-ranchi/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Ranchi Lake', 'Rock Garden', 'Pahari Mandir'],
      recommendedHotels: ['Hotel BNR Chanakya', 'Radisson Blu Ranchi', 'Lemon Tree Premier Ranchi'],
      famousRestaurants: ['Saffron Ranchi', 'The Yellow Chilli Ranchi', 'Kaveri Restaurant']
    },
    {
      name: 'Panchghagh Falls',
      slug: 'panchghagh-falls',
      category: 'Waterfall',
      image: '/images/jharkhand/panchghagh-falls/hero-v3.jpg',
      overview: 'Five streams of water cascade simultaneously over a rocky ledge at Panchghagh Falls near Khunti, creating a unique five-fingered waterfall formation that is especially dramatic during the monsoon season.',
      rating: 4.87,
      bestTimeToVisit: 'July – October (monsoon season)',
      shortDesc: 'Five simultaneous waterfalls cascading from one rocky ledge.',
      gallery: [
        '/images/jharkhand/panchghagh-falls/gallery-1-v3.jpg',
        '/images/jharkhand/panchghagh-falls/gallery-2-v3.jpg',
        '/images/jharkhand/panchghagh-falls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Hundru Falls', 'Ranchi', 'Ulihatu (Birsa Munda birthplace)'],
      recommendedHotels: ['Hotel BNR Chanakya Ranchi', 'Hotel Yuvraj Palace Ranchi'],
      famousRestaurants: ['Local tribal food stalls', 'Khunti Dhaba']
    },
    {
      name: 'Dassam Falls',
      slug: 'dassam-falls',
      category: 'Waterfall',
      image: '/images/jharkhand/dassam-falls/hero-v3.jpg',
      overview: 'The Kanchi River plunges 44 meters in a wide curtain over black granite at Dassam Falls near Taimara village, surrounded by picnic-friendly meadows and forested gorges about 40 km from Ranchi.',
      rating: 4.90,
      bestTimeToVisit: 'August – November (post-monsoon peak)',
      shortDesc: '44-metre curtain waterfall on the Kanchi River, 40 km from Ranchi.',
      gallery: [
        '/images/jharkhand/dassam-falls/gallery-1-v3.jpg',
        '/images/jharkhand/dassam-falls/gallery-2-v3.jpg',
        '/images/jharkhand/dassam-falls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Hundru Falls', 'Jonha Falls', 'Taimara Village'],
      recommendedHotels: ['Hotel Capitol Hill Ranchi', 'Hotel BNR Chanakya Ranchi'],
      famousRestaurants: ['Jharkhand Tourism Canteen Ranchi', 'Saffron Restaurant Ranchi']
    },
    {
      name: 'Parasnath Hill (Shikharji)',
      slug: 'parasnath-hill',
      category: 'Jain Pilgrimage',
      image: '/images/jharkhand/parasnath-hill/hero-v3.jpg',
      overview: 'The highest peak in Jharkhand at 1,365 meters, Parasnath Hill (Shikharji) is the holiest Jain pilgrimage site where 20 of the 24 Tirthankaras are believed to have attained moksha, adorned with 24 white marble Tirthankar temples.',
      rating: 4.95,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Jharkhand\'s highest peak and holiest Jain pilgrimage — 24 marble temples.',
      gallery: [
        '/images/jharkhand/parasnath-hill/gallery-1-v3.jpg',
        '/images/jharkhand/parasnath-hill/gallery-2-v3.jpg',
        '/images/jharkhand/parasnath-hill/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Madhuban (base village)', 'Giridih', 'Usri Falls'],
      recommendedHotels: ['Jain Dharamshala Madhuban', 'Hotel Shikhar Giridih', 'Tourist Lodge Giridih'],
      famousRestaurants: ['Jain Bhojanshala Madhuban', 'Vegetarian Ashram Dining']
    },
    {
      name: 'Netarhat Hill Station',
      slug: 'netarhat',
      category: 'Hill Station',
      image: '/images/jharkhand/netarhat/hero-v3.jpg',
      overview: 'Called the "Queen of Chhota Nagpur", Netarhat at 1,128 meters is a serene hill station famous for breathtaking sunrise and sunset views over pine-forested valleys, the Magnolia Point viewpoint, and the prestigious Netarhat Residential School.',
      rating: 4.88,
      bestTimeToVisit: 'October – February',
      shortDesc: '"Queen of Chhota Nagpur" — pine forest hill station with stunning sunsets.',
      gallery: [
        '/images/jharkhand/netarhat/gallery-1-v3.jpg',
        '/images/jharkhand/netarhat/gallery-2-v3.jpg',
        '/images/jharkhand/netarhat/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Magnolia Point', 'Lodh Falls', 'Betla National Park'],
      recommendedHotels: ['JHDO Tourist Bungalow Netarhat', 'Netarhat Resort', 'Hotel Palamau'],
      famousRestaurants: ['Tourist Bungalow Restaurant', 'Local Adivasi Dhaba Netarhat']
    }
  ]
};
