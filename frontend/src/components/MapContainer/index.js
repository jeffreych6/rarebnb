import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './MapContainer.css';

const MapContainer = ({listing}) => {
  const [selected, setSelected] = useState({});
  
  const locations = [
    {
      name: listing.title,
      location: {
        lat: listing.lat,
        lng: listing.lng
      }
    }
  ]

  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: listing.lat, lng: listing.lng
  }

  const onSelect = item => {
    setSelected(item);
  }
  
  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
          {locations.map(item => {
              return (
                <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
              )
            })
          }
          {selected.location && (
            <InfoWindow position={selected.location} clickable={true} onCloseClick={() => setSelected({})}>
              <>
                <p>{selected.name}</p>
                <p>hellooooooooooooooo this working!!!!!</p>
              </>
            </InfoWindow>
            )
          }
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;