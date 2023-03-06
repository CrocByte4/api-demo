import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState({});

  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=pk.bb29feda391c78027fb7306d762a84ca&q=liverpool&format=json`;
    const res = await axios.get(API);
    console.log(res.data[0]);
    setLocation(res.data[0]);
  }
  return (
    <div className="App">
      {location.display_name && (
        <p>
          {location.display_name} is at lat and lon: {location.lat} /
          {location.lon}
        </p>
      )}
      <button onClick={getLocation}>Get Data</button>
    </div>
  );
}

export default App;

// pk.bb29feda391c78027fb7306d762a84ca
