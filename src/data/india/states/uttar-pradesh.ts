export interface UttarPradeshPlace {
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

export interface UttarPradeshStateData {
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
  famousPlaces: UttarPradeshPlace[];
}

export const UTTAR_PRADESH_DATA: UttarPradeshStateData = {
  id: 'uttar-pradesh',
  name: 'Uttar Pradesh',
  type: 'State',
  capital: 'Lucknow',
  tagline: 'Heartland of India',
  heroImage: '/images/uttar-pradesh/agra-taj-mahal/hero-v3.jpg',
  about: 'Uttar Pradesh, India\'s most populous state, is the spiritual and cultural heartland of India — home to the white marble UNESCO World Wonder Taj Mahal in Agra, the world\'s oldest continuously inhabited spiritual city Varanasi along the Ganges, Lord Ram\'s birthland Ayodhya, Lord Krishna\'s Vrindavan-Mathura, Lord Buddha\'s first sermon site Sarnath, and Nawabi culinary capital Lucknow.',
  bestTime: 'October – March',
  climate: 'Humid subtropical climate. Scorching summers (April–June, 32°C–45°C), monsoon rains (July–September), and cold, foggy winters (October–March, 4°C–22°C). Best visited October to March.',
  famousFood: ['Lucknawi Tunday Kababi & Biryani', 'Agra Petha', 'Mathura Peda', 'Banarasi Paan', 'Bedmi Poori & Aloo', 'Malaiyyo (Varanasi winter sweet)', 'Chowk Chaat'],
  culture: 'Millennia-old Vedic and Islamic cultural confluence, classical Kathak dance, Hindustani classical music (Banaras Gharana), Chikankari embroidery of Lucknow, Banarasi silk weaving, and grand festivals (Kumbh Mela, Dev Deepawali, Lathmar Holi).',
  famousPlaces: [
    {
      name: 'Taj Mahal & Agra Fort, Agra',
      slug: 'agra-taj-mahal',
      category: 'UNESCO World Wonder',
      image: '/images/uttar-pradesh/agra-taj-mahal/hero-v3.jpg',
      overview: 'Built between 1631 and 1648 by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal is a white marble UNESCO World Wonder standing on the banks of the Yamuna River alongside the massive red sandstone Agra Fort.',
      rating: 4.99,
      bestTimeToVisit: 'October – March (Taj Mahotsav in February)',
      shortDesc: 'Iconic white marble UNESCO World Wonder of eternal love & 16th-century red sandstone Agra Fort.',
      gallery: [
        '/images/uttar-pradesh/agra-taj-mahal/gallery-1-v3.jpg',
        '/images/uttar-pradesh/agra-taj-mahal/gallery-2-v3.jpg',
        '/images/uttar-pradesh/agra-taj-mahal/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Agra Fort', 'Mehtab Bagh', 'Fatehpur Sikri', 'Itmad-ud-Daulah (Baby Taj)'],
      recommendedHotels: ['The Oberoi Amarvilas Agra', 'ITC Mughal Agra', 'Taj Hotel & Convention Centre Agra'],
      famousRestaurants: ['Pinch of Spice Agra', 'Petha Shops at Sadar Bazaar', 'Dasaprakash Agra']
    },
    {
      name: 'Varanasi Ghats & Kashi Vishwanath',
      slug: 'varanasi-ghats',
      category: 'World\'s Oldest Living City',
      image: '/images/uttar-pradesh/varanasi-ghats/hero-v3.jpg',
      overview: 'Continuous for over 3,000 years, Varanasi (Kashi/Benares) along the sacred Ganges River is the spiritual capital of India, famous for 84 stone ghats (Dashashwamedh, Manikarnika), hypnotic evening Ganga Aarti, and gold-plated Kashi Vishwanath Temple.',
      rating: 4.98,
      bestTimeToVisit: 'October – March (Dev Deepawali in Nov)',
      shortDesc: '3,000-year-old spiritual capital on the sacred Ganges featuring 84 ghats & Ganga Aarti.',
      gallery: [
        '/images/uttar-pradesh/varanasi-ghats/gallery-1-v3.jpg',
        '/images/uttar-pradesh/varanasi-ghats/gallery-2-v3.jpg',
        '/images/uttar-pradesh/varanasi-ghats/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Kashi Vishwanath Temple', 'Dashashwamedh Ghat', 'Manikarnika Ghat', 'Sarnath (10 km)'],
      recommendedHotels: ['Taj Nadesar Palace Varanasi', 'BrijRama Palace Varanasi', 'Radisson Hotel Varanasi'],
      famousRestaurants: ['Kashi Chat Bhandar', 'Blue Lassi Shop', 'Dada Organic Cafe']
    },
    {
      name: 'Ayodhya — Ram Mandir & Saryu River',
      slug: 'ayodhya-ram-mandir',
      category: 'Sacred Ram Janmabhoomi',
      image: '/images/uttar-pradesh/ayodhya-ram-mandir/hero-v3.jpg',
      overview: 'The revered birthplace of Lord Ram on the banks of the holy Saryu River, Ayodhya is home to the magnificent newly consecrated grand Shri Ram Janmabhoomi Mandir, Hanuman Garhi temple, Kanak Bhawan, and tranquil Ram Ki Paidi ghats.',
      rating: 4.97,
      bestTimeToVisit: 'October – March (Ram Navami & Deepotsav in Nov)',
      shortDesc: 'Revered birthplace of Lord Ram featuring the grand Shri Ram Janmabhoomi Mandir & Saryu ghats.',
      gallery: [
        '/images/uttar-pradesh/ayodhya-ram-mandir/gallery-1-v3.jpg',
        '/images/uttar-pradesh/ayodhya-ram-mandir/gallery-2-v3.jpg',
        '/images/uttar-pradesh/ayodhya-ram-mandir/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Hanuman Garhi', 'Kanak Bhawan', 'Ram Ki Paidi Saryu Ghats', 'Surya Stambh'],
      recommendedHotels: ['The Park Inn by Radisson Ayodhya', 'Cygnett Collection Ayodhya', 'Hotel Ramayana'],
      famousRestaurants: ['Shri Ram Rasoi', 'Makhan-Malai Shops', 'Ayodhya Vegetarian Thali']
    },
    {
      name: 'Vrindavan & Mathura',
      slug: 'vrindavan-mathura',
      category: 'Sacred Krishna Land',
      image: '/images/uttar-pradesh/vrindavan-mathura/hero-v3.jpg',
      overview: 'The twin holy towns associated with Lord Krishna\'s birth and childhood along the Yamuna River — Mathura features Shri Krishna Janmabhoomi, while Vrindavan features 5,500 temples including Bankey Bihari, Prem Mandir, and ISKCON Vrindavan.',
      rating: 4.96,
      bestTimeToVisit: 'October – March (Janmashtami & Lathmar Holi)',
      shortDesc: 'Lord Krishna\'s childhood land featuring 5,500 temples including Prem Mandir & Bankey Bihari.',
      gallery: [
        '/images/uttar-pradesh/vrindavan-mathura/gallery-1-v3.jpg',
        '/images/uttar-pradesh/vrindavan-mathura/gallery-2-v3.jpg',
        '/images/uttar-pradesh/vrindavan-mathura/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Prem Mandir Vrindavan', 'Bankey Bihari Temple', 'Shri Krishna Janmabhoomi Mathura', 'Govardhan Hill'],
      recommendedHotels: ['Nidhivan Sarovar Portico Vrindavan', 'Ananda Krishna Dham', 'Brijwasi Royal Mathura'],
      famousRestaurants: ['Brijwasi Mithai Wala Mathura', 'Govinda\'s Restaurant ISKCON', 'Dosa Plaza Vrindavan']
    },
    {
      name: 'Sarnath',
      slug: 'sarnath',
      category: 'Sacred Buddhist Pilgrimage',
      image: '/images/uttar-pradesh/sarnath/hero-v3.jpg',
      overview: 'Located 10 km northeast of Varanasi, Sarnath is one of the four principal Buddhist pilgrimage sites where Lord Buddha preached his first sermon (Dharmachakra Pravartana) after gaining enlightenment, featuring the 128-ft Dhamek Stupa and Ashoka Pillar lion capital.',
      rating: 4.95,
      bestTimeToVisit: 'October – March (Buddha Purnima in May)',
      shortDesc: 'Sacred site of Lord Buddha\'s first sermon featuring 128-ft Dhamek Stupa & Ashoka Lion Capital.',
      gallery: [
        '/images/uttar-pradesh/sarnath/gallery-1-v3.jpg',
        '/images/uttar-pradesh/sarnath/gallery-2-v3.jpg',
        '/images/uttar-pradesh/sarnath/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Dhamek Stupa', 'Sarnath Archaeological Museum', 'Chaukhandi Stupa', 'Thai & Tibetan Monasteries'],
      recommendedHotels: ['Taj Nadesar Palace Varanasi', 'Sarnath Tourist Bungalow'],
      famousRestaurants: ['Monastery Cafe Sarnath', 'Varanasi Local Eateries']
    },
    {
      name: 'Lucknow — Bara Imambara & City of Nawabs',
      slug: 'lucknow-bara-imambara',
      category: 'Nawabi Heritage & Cuisine',
      image: 'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&q=80&w=800',
      overview: 'The capital of UP and historic realm of the Nawabs of Awadh, Lucknow is world-renowned for the 1784 Bara Imambara featuring the gravity-defying unsupported arched hall & labyrinth (Bhool Bhulaiya), Rumi Darwaza gateway, Chikankari embroidery, and Tunday Kababs.',
      rating: 4.94,
      bestTimeToVisit: 'October – March (Lucknow Mahotsav in Nov/Dec)',
      shortDesc: 'City of Nawabs featuring the 1784 Bara Imambara labyrinth, Rumi Darwaza & Tunday Kababs.',
      gallery: [
        'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&q=80&w=600'
      ],
      nearbyAttractions: ['Bara Imambara & Bhool Bhulaiya', 'Chota Imambara', 'Rumi Darwaza', 'Hazratganj Shopping District'],
      recommendedHotels: ['Taj Mahal Lucknow', 'The Hyatt Regency Lucknow', 'Renaissance Lucknow Hotel'],
      famousRestaurants: ['Tunday Kababi Chowk', 'Dastarkhwan Hazratganj', 'Royal Cafe (Basket Chaat)']
    },
    {
      name: 'Prayagraj — Triveni Sangam',
      slug: 'prayagraj-sangam',
      category: 'Sacred Rivers Confluence & Kumbh Mela',
      image: '/images/uttar-pradesh/prayagraj-sangam/hero-v3.jpg',
      overview: 'Prayagraj (Allahabad) is the holy site of Triveni Sangam — the sacred confluence of the Ganges, Yamuna, and mythical Saraswati rivers, host to the world\'s largest spiritual gathering, the Kumbh Mela, alongside Akbar\'s 1583 Allahabad Fort.',
      rating: 4.93,
      bestTimeToVisit: 'October – March (Kumbh Mela / Magh Mela in Jan/Feb)',
      shortDesc: 'Sacred confluence of Ganges, Yamuna & Saraswati rivers, host to the world-famous Kumbh Mela.',
      gallery: [
        '/images/uttar-pradesh/prayagraj-sangam/gallery-1-v3.jpg',
        '/images/uttar-pradesh/prayagraj-sangam/gallery-2-v3.jpg',
        '/images/uttar-pradesh/prayagraj-sangam/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Triveni Sangam Boat Rides', 'Allahabad Fort & Akshayavat', 'Anand Bhavan (Nehru Family Home)', 'Hanuman Mandir'],
      recommendedHotels: ['Legend Hotel Prayagraj', 'Hotel Kanha Shyam', 'Heritage Hotel Prayagraj'],
      famousRestaurants: ['Netram Mulchand Sweets', 'El Chico Restaurant Prayagraj', 'Eat-On Fast Food']
    },
    {
      name: 'Jhansi Fort',
      slug: 'jhansi-fort',
      category: 'Historic Freedom Citadel',
      image: '/images/uttar-pradesh/jhansi-fort/hero-v3.jpg',
      overview: 'Standing atop Bangira hill, the 17th-century Jhansi Fort is an iconic citadel of Indian freedom, immortalized by Rani Lakshmibai (the Queen of Jhansi) during the 1857 Indian War of Independence.',
      rating: 4.89,
      bestTimeToVisit: 'October – March',
      shortDesc: '17th-century hilltop citadel of Rani Lakshmibai, hero of the 1857 Indian War of Independence.',
      gallery: [
        '/images/uttar-pradesh/jhansi-fort/gallery-1-v3.jpg',
        '/images/uttar-pradesh/jhansi-fort/gallery-2-v3.jpg',
        '/images/uttar-pradesh/jhansi-fort/gallery-3-v3.jpg'
      ],
      nearbyAttractions: ['Rani Mahal', 'Jhansi Government Museum', 'Orchha (18 km border)'],
      recommendedHotels: ['Hotel Natraj Sarovar Portico Jhansi', 'Hotel Vikas Jhansi'],
      famousRestaurants: ['Janak Restaurant Jhansi', 'Avadh Fast Food']
    }
  ]
};
