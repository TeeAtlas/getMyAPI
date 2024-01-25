import LocationMap from './LocationMap';
import 'leaflet/dist/leaflet.css';
import DataFetch from './DataFetch';


function CountryInfo() {
   const { ip, country, city, region, location } = DataFetch();

     return (
    <>
      <h1>My IP and Location</h1>
      <p>Your IP is: {ip} </p>
      <p>Your Country is: {country}</p>
      <p>Your city is: {city}</p>
      <p>Your region is: {region}</p>

      <LocationMap location={location} />
    </>
  );
}

export default CountryInfo;

