import './App.css';
import SearckBox from './components/SearchBox';
import ResidentList from './components/ResidentList';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [location, setLocation] = useState({})

  useEffect(() => {

    const random = Math.floor(Math.random() * 126) + 1;

    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(rest => setLocation(rest.data))
  }, [])

  return (

    <div className="App">
      <nav className="Nav">
        <img className="imgNav" src="https://media.vandalsports.com/irandom/1200x630/3-2022/20223292845_1.jpg" alt="" />
        <h1>RICK AND MORTY WIKI</h1>
        <SearckBox setLocation={setLocation} />
      </nav>
      <h2>{location.name}</h2>
      <div className="locationInfo">
        <h4>Type: {location.type}</h4>
        <h4>Dimension: {location.dimension}</h4>
        <h4>Population: {location.residents?.length}</h4>
      </div>
      <ResidentList lists={location.residents} />
    </div>



  );
}

export default App;

