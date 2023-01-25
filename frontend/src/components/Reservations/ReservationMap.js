import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import "./ReservationMap.css"

const ReservationMap = ({reservation}) => {
  const [selected, setSelected] = useState({});
  
  const locations = [
    {
      name: reservation.title,
      location: {
        lat: reservation.lat,
        lng: reservation.lng
      },
      photo: reservation.photosUrl[0]
    }
  ]

  const mapStyles = {        
    height: "100%",
    width: "100%"};
  
  const defaultCenter = {
    lat: reservation.lat, lng: reservation.lng
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
                <p className="reservation-map-listing-name">{selected.name}</p>
                <img className="reservation-map-listing-image" src={selected.photo} alt="map"></img>
              </>
            </InfoWindow>
            )
          }
        </GoogleMap>
     </LoadScript>
  )
}

export default ReservationMap;