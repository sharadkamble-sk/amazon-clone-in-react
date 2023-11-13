import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Bottomnav from './components/Bottomnav';
import Carousel from './components/Carousel';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Bottomnav />
      <Carousel />
    </div>
  );
}

export default App;
