import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Bottomnav from './components/Bottomnav';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Productcards from './components/Productcards';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Bottomnav />
      <Carousel />
      <Cards />
      <Productcards />
    </div>
  );
}

export default App;
