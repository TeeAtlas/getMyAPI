// DataFetch.js
import { useState, useEffect } from 'react';

/* function rewritten to store all the data inside of one state
call instead of using multiple statecalls - see original code commented out below, it looks like an oject array (but I don't know if that's what it is*/

function DataFetch () {
    const [data, setData] = useState ({
        ip: "",
        country: null,
        city: null,
        region: null,
        location: {},
    });
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            setData({
                ip: data.ip,
                country: data.location.country,
                city: data.location.city,
                region: data.location.region,
                location: {
                    lat: data.location.lat,
                    lng: data.location.lng,
                }
            });
        });
    }, [apiKey]);

    return data;
}


// function DataFetch() {
//     const [ip, setIp] = useState("");
//     const [country, setCountry] = useState(null);
//     const [city, setCity] = useState(null);
//     const [region, setRegion] = useState(null);
//     const [location, setLocation] = useState({});
//     const apiKey = import.meta.env.VITE_API_KEY;
  
//     useEffect(() => {
//       fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         setIp(data.ip);
//         setCountry(data.location.country); 
//         setCity(data.location.city);
//         setRegion(data.location.region)
//         setLocation({
//             lat: data.location.lat,
//             lng: data.location.lng,
//         });
//       });
//     }, [apiKey]);

//     return { ip, country, city, region, location };
// }

export default DataFetch;