import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Headbar from './Components/Headbar';
import Middlebar from './Components/Middlebar';
import HeroSection from './Components/HeroSection';
import { Card } from './Components/Card';

function App() {

  var data = [
    {
      pname : 'Huddy',
      rate  : 199,
      img   : "https://tse1.mm.bing.net/th?id=OIP.CgrV3da7FyLq91evvNdfFwHaLH&pid=Api&P=0&h=220",
    },
    {
      pname : 'Huddy',
      rate  : 199,
      img   : "https://tse1.mm.bing.net/th?id=OIP.CgrV3da7FyLq91evvNdfFwHaLH&pid=Api&P=0&h=220",
    },
    {
      pname : 'Huddy',
      rate  : 199,
      img   : "https://tse1.mm.bing.net/th?id=OIP.CgrV3da7FyLq91evvNdfFwHaLH&pid=Api&P=0&h=220",
    },
    {
      pname : 'Huddy',
      rate  : 199,
      img   : "https://tse1.mm.bing.net/th?id=OIP.CgrV3da7FyLq91evvNdfFwHaLH&pid=Api&P=0&h=220",
    },

  ]
  return (
    <>
    <Headbar></Headbar>
    <Middlebar></Middlebar>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <Card data={data}></Card>


    </>
  );
}

export default App;
