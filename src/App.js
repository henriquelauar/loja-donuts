import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Main from './Components/Main'
import CarouselComponent from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
      <CarouselComponent />
    </div>
  );
}

export default App;
