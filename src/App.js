import './App.css';
import FeaturesSection from './pages/FeaturesSection';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import PopularSuits from './pages/PopularSuits';
import TailorShopHero from './pages/TailorShopHero';
import Testimonials from './pages/Testimonials';
import VideoSection from './pages/VideoSection';
import VisitCenter from './pages/VisitCenter';

function App() {
  return (
    <>
    <Navbar/>
    <TailorShopHero/>
    <FeaturesSection/>
    <VideoSection/>
    <PopularSuits/>
    <VisitCenter/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default App;
