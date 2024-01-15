import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import './App.css'
import CountryInfo from './components/CountryInfo';
import LocationMap from './components/LocationMap';

function App() {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      setIp(data.ip);
      console.log(data);
      // navigator.geolocation.getCurrentPosition((position) => {
        // setLocation({
        //     lat: position.coords.latitude,
        //     lng: position.coords.longitude,
        //   });
        // });
      });
  }, []);

  return (
    <>
      <h1>MY IP</h1>
      <p>Your IP is: {ip} </p>
      {/* <CountryInfo ip={ip}/>
      <LocationMap location={location} /> */}
    </>
  );
}

export default App
