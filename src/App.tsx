import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { QuoteModal } from './components/common/QuoteModal';
import { SplashScreen } from './components/common/SplashScreen';

// Import all 12 Pages
import { Landing } from './pages/Landing';
import { Destinations } from './pages/Destinations';
import { DestinationDetails } from './pages/DestinationDetails';
import { TripDetails } from './pages/TripDetails';
import { PackageDetails } from './pages/PackageDetails';
import { Itinerary } from './pages/Itinerary';
import { LocationDetails } from './pages/LocationDetails';
import { HotelDetails } from './pages/HotelDetails';
import { Experiences } from './pages/Experiences';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';

import { StateDetails } from './pages/StateDetails';
import { AdminImageManager } from './pages/AdminImageManager';

const AppContent: React.FC = () => {
  const { currentPage, isTransitioning } = useNavigation();
  const [showSplash, setShowSplash] = React.useState(true);

  // Helper to render the active page
  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing />;
      case 'destinations':
        return <Destinations />;
      case 'destination-details':
        return <DestinationDetails />;
      case 'state-details':
        return <StateDetails />;
      case 'trip-details':
        return <TripDetails />;
      case 'package-details':
        return <PackageDetails />;
      case 'itinerary':
        return <Itinerary />;
      case 'location-details':
        return <LocationDetails />;
      case 'hotel-details':
        return <HotelDetails />;
      case 'experiences':
        return <Experiences />;
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'booking':
        return <Booking />;
      case 'admin-image-manager':
        return <AdminImageManager />;
      default:
        return <Landing />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navigation Layout */}
      <Navigation />

      {/* Main Pages with Transition wrapper */}
      <main style={{ 
        flex: '1 0 auto', 
        opacity: isTransitioning ? 0 : 1, 
        transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
        transition: 'opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1), transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
      }}>
        {renderPage()}
      </main>

      {/* Footer Layout */}
      <Footer />

      {/* Floating CTA desk */}
      <FloatingCTA />

      {/* Bespoke Quote Request Modal */}
      <QuoteModal />

      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
    </div>
  );
};

import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </Router>
  );
}

export default App;
