import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import "./FilteredMap.css"

const FilteredMap = ({listings}) => {
  const [selected, setSelected] = useState({});

  const mapStyles = {        
    height: "75vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 0, 
    lng: -15
  }

  const onSelect = item => {
    setSelected(item);
  }
  
  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap
          className="filtered-index-map"
          mapContainerStyle={mapStyles}
          zoom={2}
          center={defaultCenter}>
          {listings.map(item => {
              return (
                <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}/>
              )
            })
          }
          {selected.location && (
            <InfoWindow position={selected.location} clickable={true} onCloseClick={() => setSelected({})}>
              <>
                <NavLink className="filtered-listings-map-container" to={`listings/${selected.id}`} key={selected.id}>
                  <img className="filtered-listings-map-image" src={selected.photo} alt="map"></img>
                  <div className="filtered-listings-map-title">
                    <p className="filtered-listings-map-name">{selected.title}</p>
                    <span><i className="fa-sharp fa-solid fa-star"></i>{parseFloat(selected.rating).toFixed(2)}</span>
                  </div>
                  <div className="filtered-listings-location">{selected.city}, {selected.state}</div>
                  <span className="filtered-listings-map-price">${selected.price.toLocaleString("en-US")}</span> night
                </NavLink>
              </>
            </InfoWindow>
            )
          }
        </GoogleMap>
     </LoadScript>
  )
}

export default FilteredMap;