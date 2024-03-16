import React from "react";
import { GoogleMap, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";

const MapComponent = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 0,
    lng: 0,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAsqCBCj0swaMKRg5OzRWuhG-1pEy5Vqts">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2}
        center={center}
      >
        {/* Add markers for specific locations */}
        <Marker position={{ lat: 0, lng: 0 }} />
        {/* You can add more markers for specific locations */}

        {/* Example of InfoWindow for a marker */}
        <InfoWindow
          position={{ lat: 0, lng: 0 }}
          onCloseClick={() => {}}
        >
          <div>
            {/* Content of the InfoWindow */}
            <h3>Marker Info</h3>
            <p>Additional information about the location</p>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;