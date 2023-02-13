import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './ListingMap.css';

const ListingMap = ({listing}) => {
  const [selected, setSelected] = useState({});
  
  const locations = [
    {
      name: listing.title,
      city: listing.city,
      state: listing.state,
      country: listing.country,
      price: listing.price,
      rating: listing.rating,
      location: {
        lat: listing.lat,
        lng: listing.lng
      },
      photo: listing.photosUrl[0]
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
                <div className="listing-map-container">
                  <img className="listing-map-image" src={selected.photo} alt="map"></img>
                  <div className="listing-map-title">
                    <p className="listing-map-name">{selected.name}</p>
                    <span><i className="fa-sharp fa-solid fa-star"></i>{parseFloat(selected.rating).toFixed(2)}</span>
                  </div>
                  <div className="filtered-listing-location">{selected.city}, {selected.state}</div>
                  <span className="filter-listing-map-price">${selected.price.toLocaleString("en-US")}</span> night
                </div>
              </>
            </InfoWindow>
            )
          }
        </GoogleMap>
     </LoadScript>
  )
}

export default ListingMap;