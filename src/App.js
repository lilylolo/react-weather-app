import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
    <div className="container">

      <Weather defaultCity="London" />
      
    <footer> <a href="https://github.com/lilylolo/react-weather-app" rel="noreferrer" target="_blank">Open-source</a> code by <a href="https://www.linkedin.com/in/lily-lo-9068aa12a" rel="noreferrer" target="_blank">Lily Lo</a></footer>
    </div>
    </div>
  );
}

export default App;
