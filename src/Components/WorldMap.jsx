import { Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import markerIcon from '../utils/marker_icon.png';

// Define the WorldMap component which accepts countries as a prop
const WorldMap = (countries) => {
  const { countriesData } = countries;

  // Define a custom marker icon using Leaflet's L.icon method
  const customMarker = L.icon({
    iconUrl: markerIcon, // Path to the marker icon image
    iconSize: [20, 25],  // Size of the icon [width, height]
    iconAnchor: [15, 30] // Anchor point of the icon [x, y]
  });

  return (
    <div>
      {/* Map over countriesData and create a Marker for each country */}
      {countriesData?.map((country) => (
        <Marker
          icon={customMarker} // Use the custom marker icon
          key={country.countryInfo._id} // Unique key for each Marker
          position={[country.countryInfo.lat, country.countryInfo.long]} // Position of the marker [latitude, longitude]
        >
          {/* Popup content that appears when the marker is clicked */}
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
}

export default WorldMap;
