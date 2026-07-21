import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type PageType = 
  | 'landing' 
  | 'destinations' 
  | 'destination-details' 
  | 'trip-details'
  | 'package-details' 
  | 'itinerary' 
  | 'location-details' 
  | 'hotel-details' 
  | 'experiences' 
  | 'blog' 
  | 'about' 
  | 'contact' 
  | 'booking';

export interface RouteParams {
  destinationId?: string;
  packageId?: string;
  locationId?: string;
  hotelId?: string;
  experienceId?: string;
  blogPostId?: string;
}

interface BookingDetails {
  packageId?: string;
  packageName?: string;
  pricePerGuest?: number;
  startDate?: string;
  guests?: number;
  name?: string;
  email?: string;
  phone?: string;
  specialRequests?: string;
  paymentMethod?: string;
  cardName?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

interface NavigationContextType {
  currentPage: PageType;
  params: RouteParams;
  isTransitioning: boolean;
  booking: BookingDetails;
  updateBooking: (details: Partial<BookingDetails>) => void;
  resetBooking: () => void;
  navigateTo: (page: PageType, newParams?: RouteParams) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [params, setParams] = useState<RouteParams>({});
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  
  // Booking Wizard State
  const [booking, setBooking] = useState<BookingDetails>({
    guests: 2,
    startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // default 1 week out
  });

  const updateBooking = (details: Partial<BookingDetails>) => {
    setBooking(prev => ({ ...prev, ...details }));
  };

  const resetBooking = () => {
    setBooking({
      guests: 2,
      startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    });
  };

  const navigateTo = (page: PageType, newParams: RouteParams = {}) => {
    setIsTransitioning(true);
    
    // Map page and params to URL route
    let url = '/';
    switch (page) {
      case 'landing':
        url = '/';
        break;
      case 'destinations':
        url = '/destinations';
        break;
      case 'destination-details': {
        const id = newParams.destinationId || '';
        const oldIdMap: Record<string, { destId: string, locId: string }> = {
          'santorini': { destId: 'india', locId: 'mumbai' },
          'switzerland': { destId: 'india', locId: 'delhi' },
          'maldives': { destId: 'india', locId: 'rajasthan' },
          'kyoto': { destId: 'india', locId: 'kerala' },
          'serengeti': { destId: 'india', locId: 'olddelhi' },
          'amalfi': { destId: 'india', locId: 'agra' }
        };
        if (oldIdMap[id]) {
          url = `/trips/${oldIdMap[id].destId}/${oldIdMap[id].locId}`;
        } else {
          const slug = id.toLowerCase().replace('-luxury', '');
          url = `/destinations/${slug}`;
        }
        break;
      }
      case 'trip-details':
        url = `/trips/${newParams.destinationId || ''}/${newParams.locationId || ''}`;
        break;
      case 'package-details':
        url = `/package/${newParams.packageId || ''}`;
        break;
      case 'itinerary':
        url = `/itinerary/${newParams.packageId || ''}`;
        break;
      case 'location-details':
        url = `/location/${newParams.locationId || ''}`;
        break;
      case 'hotel-details':
        url = `/hotel/${newParams.hotelId || ''}`;
        break;
      case 'experiences':
        url = '/experiences';
        break;
      case 'blog':
        if (newParams.blogPostId) {
          url = `/blog/${newParams.blogPostId}`;
        } else {
          url = '/blog';
        }
        break;
      case 'about':
        url = '/about';
        break;
      case 'contact':
        url = '/contact';
        break;
      case 'booking':
        url = '/booking';
        break;
      default:
        url = '/';
    }

    setTimeout(() => {
      navigate(url);
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  // Sync state with URL pathname on popstate or URL changes
  useEffect(() => {
    const path = location.pathname;
    let page: PageType = 'landing';
    let newParams: RouteParams = {};

    const oldIdMap: Record<string, { destId: string, locId: string }> = {
      'santorini': { destId: 'india', locId: 'mumbai' },
      'switzerland': { destId: 'india', locId: 'delhi' },
      'maldives': { destId: 'india', locId: 'rajasthan' },
      'kyoto': { destId: 'india', locId: 'kerala' },
      'serengeti': { destId: 'india', locId: 'olddelhi' },
      'amalfi': { destId: 'india', locId: 'agra' }
    };

    if (path === '/' || path === '') {
      page = 'landing';
    } else if (path === '/destinations') {
      page = 'destinations';
    } else if (path.startsWith('/destinations/')) {
      const slug = path.split('/')[2];
      if (oldIdMap[slug]) {
        page = 'trip-details';
        newParams.destinationId = oldIdMap[slug].destId;
        newParams.locationId = oldIdMap[slug].locId;
      } else {
        page = 'destination-details';
        newParams.destinationId = slug;
      }
    } else if (path.startsWith('/destination/')) {
      const id = path.split('/')[2];
      if (oldIdMap[id]) {
        page = 'trip-details';
        newParams.destinationId = oldIdMap[id].destId;
        newParams.locationId = oldIdMap[id].locId;
      } else {
        page = 'destination-details';
        newParams.destinationId = id;
      }
    } else if (path.startsWith('/trips/')) {
      page = 'trip-details';
      newParams.destinationId = path.split('/')[2];
      newParams.locationId = path.split('/')[3];
    } else if (path.startsWith('/package/')) {
      page = 'package-details';
      newParams.packageId = path.split('/')[2];
    } else if (path.startsWith('/itinerary/')) {
      page = 'itinerary';
      newParams.packageId = path.split('/')[2];
    } else if (path.startsWith('/location/')) {
      page = 'location-details';
      newParams.locationId = path.split('/')[2];
    } else if (path.startsWith('/hotel/')) {
      page = 'hotel-details';
      newParams.hotelId = path.split('/')[2];
    } else if (path === '/experiences') {
      page = 'experiences';
    } else if (path.startsWith('/blog/')) {
      page = 'blog';
      newParams.blogPostId = path.split('/')[2];
    } else if (path === '/blog') {
      page = 'blog';
    } else if (path === '/about') {
      page = 'about';
    } else if (path === '/contact') {
      page = 'contact';
    } else if (path === '/booking') {
      page = 'booking';
    }

    setCurrentPage(page);
    setParams(newParams);
  }, [location.pathname]);

  return (
    <NavigationContext.Provider 
      value={{ 
        currentPage, 
        params, 
        isTransitioning, 
        booking, 
        updateBooking, 
        resetBooking, 
        navigateTo 
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
