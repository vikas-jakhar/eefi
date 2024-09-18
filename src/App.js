import { useEffect } from 'react';
import RoadMap from './components/home/RoadMap';
import Game from './components/home/Game';
import Hero from './components/home/Hero';
import Stretch from './components/home/Stretch';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className='max-w-[1920px] mx-auto relative overflow-hidden'>
      <Hero />
      <Stretch />
      <RoadMap />
      <Game />
    </div>
  );
}

export default App;
