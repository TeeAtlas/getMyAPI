import { MapContainer, TileLayer, Marker }  from 'react-leaflet';

function LocationMap({ location }) {
    if(!location || Object.keys(location).length === 0) {
        return null; 
    }

    return (
        //add div 
        //add oject.key abject key added above
        <MapContainer center={location} zoom={13} scrollWheelZoom={true} style={{ height: "100vh", width: "100%"}}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />  
            <Marker position={location} />
         </MapContainer>
    );
}

export default LocationMap;