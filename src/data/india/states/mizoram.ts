export interface MizoramPlace {
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

export interface MizoramStateData {
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
  famousPlaces: MizoramPlace[];
}

export const MIZORAM_DATA: MizoramStateData = {
  id: 'mizoram',
  name: 'Mizoram',
  type: 'State',
  capital: 'Aizawl',
  tagline: 'Land of the Hill People',
  heroImage: '/images/mizoram/aizawl/hero-v3.jpg',
  about: 'Mizoram, the "Land of the Hill People" in southern Northeast India, is a peaceful mountain state of rolling blue hills, bamboo forests, dramatic waterfalls like Vantawng, high-altitude lakes like Tam Dil, and the vibrant Mizo Christian cultural festival Chapchar Kut.',
  bestTime: 'October – March',
  climate: 'Subtropical climate with mild summers (18°C–29°C), cool winters (11°C–21°C), and heavy monsoons from May to September. Best visited October to March.',
  famousFood: ['Bai (bamboo shoot & vegetable stew)', 'Vawksa Rep (smoked pork)', 'Sanpiau', 'Sawhchiar (meat rice porridge)', 'Chhum Han', 'Misa Mach Poora'],
  culture: 'Rich Mizo culture characterized by high literacy, Cheraw (bamboo dance), Solakia dance, Chapchar Kut spring festival, handloom Puan weaves, and community solidarity (Tlawmngaihna).',
  famousPlaces: [
    {
      name: 'Aizawl',
      slug: 'aizawl',
      category: 'Hill Capital',
      image: '/images/mizoram/aizawl/hero-v3.jpg',
      overview: 'Perched on a steep mountain ridge at 1,132m, Aizawl is the picturesque capital of Mizoram overlooking the Tlawng river valley, famous for Solomon\'s Temple, Mizoram State Museum, Bara Bazar, and orderly traffic culture.',
      rating: 4.93,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Picturesque hill capital perched on a mountain ridge with Solomon\'s Temple and vibrant markets.',
      gallery: [
        '/images/mizoram/aizawl/gallery-1-v3.jpg',
        '/images/mizoram/aizawl/gallery-2-v3.jpg',
        '/images/mizoram/aizawl/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Solomon\'s Temple', 'KV Paradise', 'Durtlang Hills', 'Bara Bazar'],
      recommendedHotels: ['Hotel Regency Aizawl', 'The Grand Hotel Aizawl', 'Hotel Floria'],
      famousRestaurants: ['David\'s Kitchen Aizawl', 'ChopstiX Aizawl', 'Zote Bakery & Cafe']
    },
    {
      name: 'Tam Dil Lake',
      slug: 'tam-dil',
      category: 'Natural Lake',
      image: '/images/mizoram/tam-dil/hero-v3.jpg',
      overview: 'Meaning "Lake of Mustard" in Mizo, Tam Dil is a serene natural lake surrounded by evergreen tropical forests 85 km from Aizawl, offering calm boat rides, lakeside resorts, and rich aquatic flora and fauna.',
      rating: 4.90,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Serene forest lake 85 km from Aizawl offering peaceful boating amidst evergreen hills.',
      gallery: [
        '/images/mizoram/tam-dil/gallery-1-v3.jpg',
        '/images/mizoram/tam-dil/gallery-2-v3.jpg',
        '/images/mizoram/tam-dil/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Saitual Town', 'Aizawl', 'Tlawng River'],
      recommendedHotels: ['Tam Dil Tourist Resort', 'Hotel Floria Aizawl'],
      famousRestaurants: ['Tam Dil Lake Resort Restaurant', 'Saitual Dhabas']
    },
    {
      name: 'Vantawng Falls',
      slug: 'vantawng-falls',
      category: 'Highest Waterfall',
      image: '/images/mizoram/vantawng-falls/hero-v3.jpg',
      overview: 'The highest waterfall in Mizoram and 13th highest in India, Vantawng Falls plunges 229 meters (750 feet) in two tiers amidst dense bamboo forests on the Lau River near Thenzawl town.',
      rating: 4.96,
      bestTimeToVisit: 'September – January (post-monsoon peak)',
      shortDesc: 'Mizoram\'s highest 229m two-tiered waterfall set amidst dense bamboo forests near Thenzawl.',
      gallery: [
        '/images/mizoram/vantawng-falls/gallery-1-v3.jpg',
        '/images/mizoram/vantawng-falls/gallery-2-v3.jpg',
        '/images/mizoram/vantawng-falls/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Thenzawl Handloom Centre', 'Tuirihiau Falls', 'Deer Park Thenzawl'],
      recommendedHotels: ['Thenzawl Resort', 'Hotel Regency Aizawl'],
      famousRestaurants: ['Thenzawl Tourist Lodge Canteen', 'Highway Eateries']
    },
    {
      name: 'Reiek Tlang',
      slug: 'reiek',
      category: 'Heritage Peak',
      image: '/images/mizoram/reiek/hero-v3.jpg',
      overview: 'Rising to 1,548m just 29 km from Aizawl, Reiek Tlang offers breathtaking 360-degree views of surrounding valleys and features a recreated traditional Mizo model heritage village displaying ancient Mizo huts.',
      rating: 4.95,
      bestTimeToVisit: 'October – March (Anthurium Festival in September)',
      shortDesc: '1,548m peak with panoramic ridge views and a traditional Mizo model heritage village.',
      gallery: [
        '/images/mizoram/reiek/gallery-1-v3.jpg',
        '/images/mizoram/reiek/gallery-2-v3.jpg',
        '/images/mizoram/reiek/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Reiek Heritage Village', 'Aizawl', 'Ailawng Cave'],
      recommendedHotels: ['Reiek Tourist Resort', 'Hotel Floria Aizawl'],
      famousRestaurants: ['Reiek Resort Cafeteria', 'Local Mizo Tea Stalls']
    },
    {
      name: 'Phawngpui (Blue Mountain)',
      slug: 'phawngpui',
      category: 'Highest Peak',
      image: '/images/mizoram/phawngpui/hero-v3.jpg',
      overview: 'The highest mountain peak in Mizoram at 2,157m, Phawngpui (the Blue Mountain) is a sacred national park near the Myanmar border renowned for rare orchids, Blyth\'s tragopan, cliff faces (Thlazuang Kham), and cloud forests.',
      rating: 4.97,
      bestTimeToVisit: 'November – April',
      shortDesc: 'Mizoram\'s highest 2,157m Blue Mountain peak — sacred national park with rare orchids & tragopans.',
      gallery: [
        '/images/mizoram/phawngpui/gallery-1-v3.jpg',
        '/images/mizoram/phawngpui/gallery-2-v3.jpg',
        '/images/mizoram/phawngpui/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Farpak Meadow', 'Thlazuang Kham Cliff', 'Sangau Village', 'Chhimtuipui River'],
      recommendedHotels: ['Sangau Tourist Lodge', 'Lawngtlai Homestays'],
      famousRestaurants: ['Sangau Village Kitchen', 'Base Camp Stalls']
    },
    {
      name: 'Champhai',
      slug: 'champhai',
      category: 'Rice Bowl & Border',
      image: '/images/mizoram/champhai/hero-v3.jpg',
      overview: 'Known as the "Rice Bowl of Mizoram", Champhai is a commercial border town offering views of Myanmar\'s hill ranges, expansive vineyards (Grape Wine capital), Lianchhiari Tlang, and Rih Dil lake nearby.',
      rating: 4.91,
      bestTimeToVisit: 'October – March',
      shortDesc: '"Rice Bowl of Mizoram" — vineyard border town with sweeping views of Myanmar hills.',
      gallery: [
        '/images/mizoram/champhai/gallery-1-v3.jpg',
        '/images/mizoram/champhai/gallery-2-v3.jpg',
        '/images/mizoram/champhai/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Rih Dil Lake (Myanmar border)', 'Murlen National Park', 'Lianchhiari Tlang'],
      recommendedHotels: ['Champhai Tourist Lodge', 'Hotel Chhawkhlei Champhai'],
      famousRestaurants: ['Champhai Town Diner', 'Border View Cafe']
    },
    {
      name: 'Murlen National Park',
      slug: 'murlen-national-park',
      category: 'Dense Forest',
      image: '/images/mizoram/murlen-national-park/hero-v3.jpg',
      overview: 'Often compared to the Amazon rainforest because sunbeams can barely penetrate its canopy, Murlen spans 200 sq km of virgin subtropical forest housing tigers, leopards, serows, and rare hornbills near Champhai.',
      rating: 4.88,
      bestTimeToVisit: 'October – March',
      shortDesc: 'Dense Amazon-like virgin forest canopy sheltering serows, tigers and rare hornbills.',
      gallery: [
        '/images/mizoram/murlen-national-park/gallery-1-v3.jpg',
        '/images/mizoram/murlen-national-park/gallery-2-v3.jpg',
        '/images/mizoram/murlen-national-park/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Champhai', 'Lengteng Wildlife Sanctuary', 'Rih Dil Lake'],
      recommendedHotels: ['Rabung Village Homestay', 'Champhai Tourist Lodge'],
      famousRestaurants: ['Forest Canteen Rabung', 'Champhai Dhabas']
    },
    {
      name: 'Hmuifang',
      slug: 'hmuifang',
      category: 'Hill Station',
      image: '/images/mizoram/hmuifang/hero-v3.jpg',
      overview: 'Located 50 km from Aizawl at 1,619m, Hmuifang is a serene hill station of pristine grassy meadows, virgin forests, and cliffs, famous for the annual Thalfavang Kut cultural festival.',
      rating: 4.89,
      bestTimeToVisit: 'October – March (Thalfavang Kut in November)',
      shortDesc: 'Serene 1,619m grassy meadow hill station 50 km from Aizawl.',
      gallery: [
        '/images/mizoram/hmuifang/gallery-1-v3.jpg',
        '/images/mizoram/hmuifang/gallery-2-v3.jpg',
        '/images/mizoram/hmuifang/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Vantawng Falls', 'Thenzawl', 'Sumhsih Falls'],
      recommendedHotels: ['Hmuifang Tourist Resort', 'Hotel Floria Aizawl'],
      famousRestaurants: ['Hmuifang Resort Restaurant', 'Local Tea Stalls']
    }
  ]
};
