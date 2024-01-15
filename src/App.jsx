import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import './App.css'
import CountryInfo from './components/CountryInfo';
import LocationMap from './components/LocationMap';

function App() {
  const [ip, setIp] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      setIp(data.ip);
      console.log(data.ip);
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      });
  }, []);

  return (
    <>
      <h1>MY IP</h1>
      <p>Your IP is: none of your business </p>
      <CountryInfo ip={ip}/>
      <LocationMap location={location} />
    </>
  );
}

export default App
