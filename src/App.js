import logo from './logo.svg';
import './App.css';
import Navbar from './layout/navbar';
import ControlledCarousel from './layout/slide';
import Top from './layout/top';
import Card from './layout/card/card';

function App() {
  return (
    <div className="App">
      <Top />
      <Navbar />
      <ControlledCarousel />
      <Card />
    </div>
  );
}

export default App;
