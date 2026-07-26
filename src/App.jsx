import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import ShowcasePage from './pages/ShowcasePage';
import ComingSoonPage from './pages/ComingSoonPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';
import HotelLodgePage from './demos/hotel-lodge';
import RestaurantPage from './demos/restaurant/RestaurantPage';
import SupermarketPage from './demos/supermarket/SupermarketPage';
import SalonPage from './demos/salon/SalonPage';
import SchoolPage from './demos/school/SchoolPage';
import ClinicPage from './demos/clinic/ClinicPage';
import PharmacyPage from './demos/pharmacy/PharmacyPage';
import CarDealershipPage from './demos/car-dealership/CarDealershipPage';
import UniversityPage from './demos/university/UniversityPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.classList.remove('transition-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request-quote" element={<RequestQuotePage />} />
        <Route path="/showcase/:slug" element={<ComingSoonPage />} />
        <Route path="/demos/hotel-lodge" element={<HotelLodgePage />} />
        <Route path="/demos/restaurant" element={<RestaurantPage />} />
        <Route path="/demos/supermarket" element={<SupermarketPage />} />
        <Route path="/demos/supermarket/product/:productId" element={<SupermarketPage />} />
        <Route path="/demos/salon" element={<SalonPage />} />
        <Route path="/demos/school" element={<SchoolPage />} />
        <Route path="/demos/clinic" element={<ClinicPage />} />
        <Route path="/demos/pharmacy" element={<PharmacyPage />} />
        <Route path="/demos/car-dealership" element={<CarDealershipPage />} />
        <Route path="/demos/car-dealership/vehicle/:vehicleId" element={<CarDealershipPage />} />
        <Route path="/demos/university" element={<UniversityPage />} />
        <Route path="/demos/university/programmes/:programmeId" element={<UniversityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
