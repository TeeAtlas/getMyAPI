import { useState, useEffect } from 'react';
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

function CountryInfo({ ip }) {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!ip) return;
        setLoading(true);
        fetch(`http://api.countrylayer.com/v2/ip?access_key=${apiKey}&ip=${ip}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCountry(data);
        })
        .catch (error => {
            console.log(error);
            setError(error);
            setLoading(false);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [ip]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!country) {
        return null;
    }    

    console.log(country);

    return ( 
        <>
        <div>
            <h2>Stats</h2>
            <p>Where we at: {country.country} </p>
            <p>Landmass: {country.continent} </p>
            <p>Parliament City: {country.capital}</p> 
            <p>And how people?: {country.population}</p>
        </div>
        </>
    );
}

export default CountryInfo;