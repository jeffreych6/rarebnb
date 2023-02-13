import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import "./ReservationMap.css"

const ReservationMap = ({reservation}) => {
  const [selected, setSelected] = useState({});
  
  const locations = [
    {
      name: reservation.title,
      city: reservation.city,
      state: reservation.state,
      country: reservation.country,
      price: reservation.price,
      rating: reservation.rating,
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
              <div className="reservation-map-container">
                  <img className="reservation-map-image" src={selected.photo} alt="map"></img>
                  <div className="reservation-map-title">
                    <p className="reservation-map-name">{selected.name}</p>
                    <span><i className="fa-sharp fa-solid fa-star"></i>{parseFloat(selected.rating).toFixed(2)}</span>
                  </div>
                  <div className="filtered-reservation-location">{selected.city}, {selected.state}</div>
                  <span className="filter-reservation-map-price">${selected.price.toLocaleString("en-US")}</span> night
                </div>
              </>
            </InfoWindow>
            )
          }
        </GoogleMap>
     </LoadScript>
  )
}

export default ReservationMap;