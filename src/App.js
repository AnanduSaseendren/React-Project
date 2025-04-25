import './App.css';
import ChooseUs from './Components/ChooseUs';
import ClientsSection from './Components/ClientsSection';
import Footer from './Components/Footer';
import HowWeWork from './Components/HowWeWork';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import PortfolioSection from './Components/PortfolioSection';
import ServicesOffer from './Components/ServicesOffer';


function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <ChooseUs/>
    <HowWeWork/>
    <ServicesOffer/>
    <PortfolioSection/>
    <ClientsSection/>
    <Footer/>
    </>
  );
}

export default App;
