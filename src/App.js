import RoadMap from './components/home/RoadMap';
import Game from './components/home/Game';
import Hero from './components/home/Hero';
import Stretch from './components/home/Stretch';
import './App.css';

function App() {
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
