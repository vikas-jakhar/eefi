import { useEffect } from 'react';
import RoadMap from './components/home/RoadMap';
import Game from './components/home/Game';
import Hero from './components/home/Hero';
import Stretch from './components/home/Stretch';
import ScrollToTop from './components/common/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import PreLoader from './components/common/PreLoader';

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
      <ScrollToTop />
      <PreLoader />
    </div>
  );
}

export default App;
