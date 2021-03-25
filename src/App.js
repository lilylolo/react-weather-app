import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
    <div className="App-wrapper">

       <form>
         <div className="row">
           <div className="col-6">
          <input type="text" placeholder="Enter a city.." autocomplete="off" />
          </div>
          <div className="col-3">
          <input type="submit" value="Search"/>
          </div>
          <div className="col-3">
          <input type="submit" value="Current"/>
          </div>
          </div>
       </form>

      <div className="row">
      <div className="col-6">
      <h1>London</h1>
      <h2>16°C | F</h2>
      </div>
      <div className="col-6">
        <p>Logo</p>
      </div>
      </div>

      
      <p>
        <ul>
          <li>Description</li>
          <li>Wind: 2km/s</li>
          <li>Humidity: 44%</li>
        </ul>
      </p>

    <div className="future-forecast">
      <div className="row">
      <div className="col-3">
        Mon
      </div>
       <div className="col-3">
        Tues
      </div>
       <div className="col-3">
        Weds
      </div>
       <div className="col-3">
        Thurs
      </div>
      </div>

       <div className="row">
      <div className="col-3">
        Logo
      </div>
       <div className="col-3">
        Logo
      </div>
       <div className="col-3">
        Logo
      </div>
       <div className="col-3">
        Logo
      </div>
      </div>

      <div className="row">
      <div className="col-3">
        16°C
      </div>
       <div className="col-3">
        16°C
      </div>
       <div className="col-3">
        16°C
      </div>
       <div className="col-3">
        16°C
      </div>
      </div>
      </div>
      

    </div>
    <footer> <a href="https://github.com/lilylolo/react-weather-app" rel="noreferrer" target="_blank">Open-source</a> code by <a href="https://www.linkedin.com/in/lily-lo-9068aa12a" rel="noreferrer" target="_blank">Lily Lo</a></footer>
    </div>
    </div>
  );
}

export default App;
