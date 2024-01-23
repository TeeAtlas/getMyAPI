import { useState, useEffect } from 'react';
import LocationMap from './LocationMap';
import 'leaflet/dist/leaflet.css';



function CountryInfo() {
    const [ip, setIp] = useState("");
    const [country, setCountry] = useState(null);
    const [location, setLocation] = useState({});
    const apiKey = import.meta.env.VITE_API_KEY;
  
    useEffect(() => {
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
        console.log(data);
        setCountry(data.location.country); 
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            });
          });
        });
    }, [apiKey]);


     return (
    <>
      <h1>My IP and Location</h1>
      <p>Your IP is: {ip} </p>
      <p>Your Country is: {country}</p>
      <LocationMap location={location} />
    </>
  );
}

export default CountryInfo;

