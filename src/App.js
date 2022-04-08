import './App.css';
import Rotas from './routes';


  const scrollTop = function() {
      window.scrollTo(0, 0);
  };


function App() {
  return (
    <div className="App" onLoad={scrollTop}>
      <Rotas>
        
      </Rotas>
    </div>
  );
}

export default App;
