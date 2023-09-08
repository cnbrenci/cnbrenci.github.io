import logo from './logo.svg';
import './App.css';
// import Landing from './components/Landing';
import Bubbles from './components/Bubbles';
import Hamster from './components/Hamster';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Construction Commencing!</p>
        <Bubbles />
        <div className="Hammy">
          <Hamster />
        </div>
        <p>Come back soon!~</p>
      </header>
    </div>
  );
}

export default App;
